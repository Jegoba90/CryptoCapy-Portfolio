# Authentication — CryptoCapi API v1

Base URL: `https://api.cryptocapi.com/v1`

---

## Overview

CryptoCapi uses two independent auth layers. Which one you need depends on the endpoint:

| Layer | Header | When to use |
|---|---|---|
| **API Key** | `x-api-key: <your-key>` | Programmatic data access (PRO endpoints) |
| **Firebase Token** | `Authorization: Bearer <id-token>` | Account management, trial activation, payments |

Most data endpoints only need an API key. Firebase tokens are required only when managing your account (getting your key, activating a trial, paying).

---

## API Key Formats

Your key format tells you your current plan:

| Format | Plan | Access |
|---|---|---|
| `sk_live_…` | **PRO / Alpha** | Full access — all engines, deep analysis, `audit_trail` |
| `flash_…` | **Free / Pulse** | Public data + Pulse View (summaries only, numeric fields stripped) |

Keys are obtained via `GET /payment/me` after authenticating with Firebase.

---

## Plans

### Free (Pulse View)
- No payment required — a `flash_` key is created automatically on registration.
- Access to all public market endpoints.
- Insights endpoint (`/market/insights/:id`) returns **Pulse View**: summary text only. Fields like `math_diagnostics`, `analysis`, and `confidence` are omitted from the response (not sent as `null`).
- Rate limit: **1,000 requests / hour**.

### PRO (Alpha / Deep Alpha)
- Activated by trial or PayPal pass.
- Full access to all engines: Radar insights (Alpha View), Quant Plus, Quant Pro, Market Scanner.
- Insights endpoint returns the complete payload including `math_diagnostics`, `confidence`, and the `audit_trail` seal.
- Rate limit: **10,000 requests / hour**.

#### 14-Day Free Trial
Activate once per account via:
```
POST /payment/trial
Authorization: Bearer <firebase-id-token>
```
No card required. Upgrades your `flash_` key to PRO for 14 days.

#### PRO Pass (30 days)
Purchased via PayPal. Activates or renews your `sk_live_` key for 30 days.

---

## Making Authenticated Requests

### API Key (most endpoints)
```http
GET /v1/quant/BTCUSDT/signal
x-api-key: sk_live_x8F9…
```

### Firebase Token (account endpoints)
```http
GET /v1/payment/me
Authorization: Bearer eyJhbGciOiJSUzI1NiIs…
```

---

## Public Endpoints (no authentication required)

These endpoints return data to any caller with no key:

| Endpoint | Description |
|---|---|
| `GET /market/prices/latest` | Real-time prices, top assets |
| `GET /market/market-summary` | Global market cap, BTC dominance, Fear & Greed |
| `GET /market/market-history` | Historical market cap snapshots |
| `GET /market/assets/:id` | Asset detail (description, ATH/ATL, supply) |
| `GET /market/macro` | Macro indicators (Fed rate, CPI, DXY, M2) |
| `GET /market/global-inflation` | CPI by country (World Bank) |

---

## PRO-Only Endpoints

These require a valid `sk_live_` key:

| Endpoint | Description |
|---|---|
| `GET /market/insights/:id` | AI insights with full Alpha payload + `audit_trail` |
| `GET /quant/:symbol/signal` | Quant Pro dual-timeframe signal (live Binance data) |
| `GET /quant/market-scan` | Market Scanner — ranked signals by strategy |
| `POST /quant/batch` | Quant Plus batch signals for multiple assets |

Free keys (`flash_`) can call `/market/insights/:id` but receive **Pulse View** — a reduced payload without numeric diagnostics.

---

## Rate Limits

Limits are enforced per API key on a rolling 1-hour window, with an additional burst guard:

| Plan | Hourly limit | Burst limit |
|---|---|---|
| Free (`flash_`) | 1,000 req / hour | 20 req / 2 seconds |
| PRO (`sk_live_`) | 10,000 req / hour | 20 req / 2 seconds |

### Response Headers

Every response from a keyed endpoint includes:

```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9847
X-RateLimit-Reset: 1718200000
```

`X-RateLimit-Reset` is a Unix timestamp (seconds) indicating when the current window resets.

### 429 Too Many Requests

When a limit is exceeded the API returns:

```json
{
  "status": "error",
  "message": "Rate limit exceeded.",
  "code": "ERR_RATE_LIMIT"
}
```

---

## Payload Shaping by Key Tier

> This section applies **only to `GET /market/insights/:id` (Radar)**. All other PRO endpoints (Quant Plus, Quant Pro, Market Scanner) return `403 Forbidden` for free keys — there is no reduced-payload fallback.

The `/market/insights/:id` response structure changes based on your key. **Do not assume missing fields are `null`** — they are simply absent in the free tier. Use optional chaining:

```typescript
// Safe — works for both Pulse and Alpha responses
const score = data.confidence?.score;
const zScore = data.math_diagnostics?.z_score;
```

| Field | Free (Pulse) | PRO (Alpha) |
|---|---|---|
| `summary` | ✅ | ✅ |
| `sentiment` | ✅ | ✅ |
| `analysis` | ❌ omitted | ✅ |
| `math_diagnostics` | ❌ omitted | ✅ |
| `confidence` | ❌ omitted | ✅ |

---

## Error Reference

| HTTP Code | Code | Meaning |
|---|---|---|
| `401` | `ERR_UNAUTHORIZED` | Missing or invalid API key / Firebase token |
| `403` | `ERR_FORBIDDEN` | Valid key but insufficient plan for this endpoint |
| `429` | `ERR_RATE_LIMIT` | Hourly or burst limit exceeded |
| `400` | `ERR_TRIAL_CLAIMED` | Trial already activated for this account |
