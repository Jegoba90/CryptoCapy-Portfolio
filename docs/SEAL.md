# Math Override Certified — Verification Seal

Every response from a CryptoCapi analytical engine carries an `audit_trail` object with a `protocol_hash` (SHA-256). This page explains what that seal guarantees and how to use it.

---

## What the Seal Guarantees

The seal certifies the **verification process**, not a perfect result.

**It DOES certify that:**
- All numeric fields in the response were computed by a deterministic Python engine — not generated or modified by AI
- Where AI is involved (Radar), mathematical corrections were applied before delivery
- The process is auditable and, for deterministic engines, independently reproducible

**It does NOT certify that:**
- The AI never makes mistakes
- Market data from external sources is correct
- Predictions will be accurate

> CryptoCapi actively defends against AI hallucinations through deterministic verification. We certify the process — not an absolute outcome.

---

## Three Seal Types

Each engine declares its `seal_type` in the `audit_trail`. The type tells you exactly what the hash covers:

| Engine | `seal_type` | What the hash covers | Reproducible by third parties? |
|---|---|---|---|
| **Quant Plus** | `reproducible` | Input price vector + computed outputs | **Yes** — the `audit_trail` is self-contained: recompute from the embedded inputs and compare |
| **Quant Pro** | `output_seal` | All deterministic output values | **Yes** — re-fetch the same candles from Binance and re-run; any output alteration breaks the hash |
| **Radar** | `process_seal` | Mathematical corrections applied (overrides + filters triggered) | **No** — AI-generated text is non-deterministic by nature; the hash certifies which corrections Python applied, not the prose itself |

The `seal_type` field is always present so consumers know exactly what they are verifying.

---

## Where to Find the Seal

| Engine | Location in response |
|---|---|
| **Radar** | `data.math_diagnostics.audit_trail` |
| **Quant Plus** | `data.math_diagnostics.audit_trail` |
| **Quant Pro** | `data.audit_trail` |

---

## Verifying Quant Plus (Reproducible Seal)

The Quant Plus `audit_trail` is self-contained: it carries everything needed to reproduce the result independently.

1. Read the `audit_trail` from the response — it includes the `algorithm_id`, `engine_version`, input price vector, and computed outputs.
2. Recompute the outputs using the embedded inputs and the algorithm identified in `algorithm_id`.
3. Serialize the result with `json.dumps(sort_keys=True, separators=(",",":"))`.
4. Compute `sha256(serialized_payload)` and compare against `protocol_hash`.
5. A match confirms the data was not altered between computation and delivery.

No external data or documentation is required — the `audit_trail` alone is sufficient.

---

## Honest Degradation

The seal never inflates confidence. When data quality is limited, the response says so explicitly:

| Situation | What the API reports |
|---|---|
| Insufficient historical data | `data_quality: "INSUFFICIENT"`, `confidence.label: "LOW"` (capped) |
| Partial data (contingency source) | `data_quality: "PARTIAL"`, `confidence.label` capped at `"MEDIUM"` |
| Full AI chain exhausted | Insight discarded — not sent. No fabricated analysis. |

`confidence.label` is always derived from the actual data quality — never from the AI's self-assessed confidence.
