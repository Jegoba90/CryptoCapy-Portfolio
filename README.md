<div align="center">

# 🐹 CryptoCapi · Terminal de Inteligencia Institucional

### *Matemática pura para decisiones cripto. Cero alucinaciones de IA.*

Plataforma de análisis de criptomonedas que **separa el análisis semántico del cálculo matemático**
a través de tres motores especializados — para que los números nunca mientan.

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Cloud_Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

<br/>

![Estado](https://img.shields.io/badge/estado-en_producción-success?style=flat-square)
![Type Safe](https://img.shields.io/badge/type--safe-strict-blue?style=flat-square)
![CI](https://img.shields.io/badge/CI-quality--gate-blueviolet?style=flat-square)
![Tests](https://img.shields.io/badge/tests-Jest_·_Vitest_·_Pytest_·_Playwright-orange?style=flat-square)

<br/>
<br/>

<img src="assets/dashboard.jpg" alt="Dashboard de mercado de CryptoCapi" width="100%"/>

<sub>Terminal de mercado en tiempo real · Market Cap global · Fear &amp; Greed · dominancia BTC/ETH · ranking de activos.</sub>

</div>

---

## 🎯 El problema que resolvemos

> Los modelos de lenguaje **alucinan**. En finanzas, una alucinación cuesta dinero real.

CryptoCapi resuelve esto con una arquitectura donde la **IA solo interpreta narrativa** (noticias, sentimiento)
y **toda decisión numérica la calcula matemática verificable** — Z-Scores, filtros de Kalman, exponentes de
Lyapunov y datos on-chain leídos directamente de la blockchain.

<div align="center">

**No te decimos qué comprar. Te damos la matemática pura para que tú decidas.**

</div>

---

## 🧠 Arquitectura · Tres Motores Especializados

| Motor | Rol | Tecnología clave |
|:---|:---|:---|
| 📡 **Motor Radar** | Ingesta noticias institucionales (Bloomberg, Reuters, Cointelegraph) y genera sentimiento + resúmenes ejecutivos sin sensacionalismo. | `Python` · `Groq Llama-3.3` · `feedparser` · `BeautifulSoup` |
| 📊 **Motor Quant PRO** | Rigor cuantitativo: Z-Score sobre 30 ventanas, filtro de Kalman para reducir ruido, exponente de Lyapunov para medir el caos del mercado y matrices de correlación de Pearson. | `NumPy` · `SciPy` · `Pandas` · `TA-Lib` |
| ⛓️ **Motor Quant Plus** | Lee la blockchain directamente: netflows de exchanges, ratios MVRV para valoración y métricas de salud de red — antes de que la información llegue al mercado. | `Web3` · `Moralis` · `WebSockets` |

---

## 🛡️ Pipeline Anti-Alucinación · Defensa en 4 Capas

> El LLM redacta la narrativa. **Python certifica los números y vigila las palabras.** La IA nunca tiene la última palabra sobre una cifra.

| Capa | Qué hace |
|:---|:---|
| **1 · Determinista** | Python calcula *todos* los valores numéricos (Bandas de Bollinger SMA-20/2σ, Z-Score logarítmico de 30 períodos, régimen de mercado) **antes** de invocar al LLM. |
| **2 · Narrativa** | Los valores deterministas se inyectan en el prompt como contexto *no negociable*; el LLM solo escribe texto sobre cifras ya fijadas. |
| **3 · Override numérico** | Tras la respuesta del LLM, Python **sobrescribe** métricas, sentiment y confidence con los valores deterministas. |
| **4 · Filtrado léxico** | Filtros deterministas eliminan frases alucinadas (p. ej. "volumen moderado", "claramente bajista") que sobrevivieron al prompt, con *gates* basados en el Z-Score y el sentiment. |

**Umbrales inmutables:** `|cambio diario| ≥ 5%` o ruptura de Bollinger → alerta de volatilidad · `|Z-Score| ≥ 3.0` → anomalía (cisne negro).

La resiliencia de IA se apoya en **cadenas de fallback multi-modelo sobre buckets de cuota independientes** con *backoff* exponencial, de modo que ningún motor agote la capacidad de otro.

---

## 📸 La Plataforma en Acción

<div align="center">

<img src="assets/market-map.png" alt="Mapa de Mercado — treemap de capitalización" width="100%"/>

<sub>**Mapa de Mercado** — visualización treemap de capitalización y rendimiento del Top 50 en un solo vistazo.</sub>

</div>

---

## 🛠️ Stack Tecnológico Completo

### 🎨 Frontend
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

> `Lightweight Charts` (TradingView) · `Swiper` · `jsVectorMap` · `Prism.js` · `DOMPurify` (sanitización XSS) · `date-fns` · `Temporal API`

### ⚙️ Backend / API
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Swagger](https://img.shields.io/badge/OpenAPI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Sentry](https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white)

> `Helmet` · `CORS` · `express-rate-limit` · `compression` · `bcryptjs` · `Pino` (logging) · `Resend` (email transaccional) · `yahoo-finance2` · `Zod` (validación end-to-end)

### 🐍 Motor Cuantitativo (Python · Data Science)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)

> `TA-Lib` (análisis técnico) · `Groq` (Llama-3.3) · `Web3` · `Moralis` · `feedparser` · `BeautifulSoup4` · `cloudscraper` · `WebSockets` · `APScheduler`

### 🗄️ Datos & Persistencia
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Neon](https://img.shields.io/badge/Neon_Serverless-00E599?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)
![Upstash](https://img.shields.io/badge/Upstash-00E9A3?style=for-the-badge&logo=upstash&logoColor=white)

### ☁️ DevOps & Infraestructura
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Cloud_Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Cloud Build](https://img.shields.io/badge/Cloud_Build-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

> Despliegue multi-servicio containerizado · `Docker Compose` (dev/staging/prod) · `Cloud Functions` · Registry `gcr.io`

### ✅ Calidad & Testing
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Ruff](https://img.shields.io/badge/Ruff-D7FF64?style=for-the-badge&logo=ruff&logoColor=black)

> Tipado estricto verificado con `Mypy` · `Pyright` · `type-coverage` · análisis de código muerto con `ts-prune`

---

## 🔄 Flujo de Datos

```mermaid
flowchart LR
    A["🌐 Fuentes<br/>Bloomberg · Reuters · CoinGecko · On-chain"] --> B["📡 Motor Radar<br/>Python + Groq Llama-3.3"]
    A --> C["📊 Motor Quant PRO<br/>NumPy · SciPy"]
    A --> D["⛓️ Motor Quant Plus<br/>Web3 · Moralis"]
    B --> E[("🗄️ PostgreSQL<br/>Neon")]
    C --> E
    D --> E
    B --> F[("⚡ Redis<br/>Upstash")]
    C --> F
    D --> F
    E --> G{"⚙️ API Express<br/>TypeScript"}
    F --> G
    G --> H["🎨 Frontend<br/>Vite + Tailwind"]
```

---

## ⚖️ Principios de Ingeniería

> Reglas constitucionales que todo Pull Request debe cumplir.

- **Zero-Any** — prohibido `any` en TypeScript y Python; lo desconocido es `unknown` + *type guards*.
- **Arquitectura Hexagonal** — el dominio nunca depende de la infraestructura; cambiar la base de datos no toca la lógica de negocio.
- **Contratos compartidos** — única fuente de verdad de tipos entre frontend y backend; nadie adivina la forma de la API.
- **Cronometría determinista** — `Temporal` API (ES2025) en lugar de `Date` nativo; sin errores de zona horaria/DST en software financiero.
- **Validación paranoica** — `Zod .strict()` en el backend + `Pydantic` en el collector; validación bilateral antes de persistir.
- **Value Objects** — el dinero nunca es un `number` crudo; se encapsula inmutable para impedir estados inválidos.
- **Dependencias por arquetipo** — el motor ligero calcula sin NumPy; solo el Quant Engine carga NumPy/Kalman → imágenes Docker mínimas.
- **Gestión explícita de recursos** — `using` / `await using` (ES2025) cierran las conexiones serverless automáticamente y evitan fugas.
- **Cache-First** — Redis/Upstash con TTL delante de PostgreSQL en todo `GET` público.
- **Degradación honesta** — en modo *fallback*, la confianza reportada nunca es `HIGH`.
- **Type-safe de extremo a extremo** — verificado con `Mypy`, `Pyright` y `type-coverage`.
- **Quality Gate en CI** — GitHub Actions corre tipos, linters, tests (Jest/Pytest) y E2E (Playwright) en cada push.
- **Seguridad & observabilidad** — `Helmet`, rate limiting, sanitización XSS (DOMPurify), `bcrypt`; errores con `Sentry`, logs estructurados con `Pino`.

---

<div align="center">

## 💡 Filosofía

> ### *"Nosotros no te decimos qué comprar.*
> ### *Te damos la matemática pura para que tú decidas."*

<br/>

**Líder de proyecto:** Jesús González · [@Jegoba90](https://github.com/Jegoba90)

<br/>

![Hecho con](https://img.shields.io/badge/hecho_con-matemática_pura-blueviolet?style=for-the-badge)

<br/>

<img src="assets/banner.png" alt="CryptoCapi — Capibara" width="100%"/>

</div>
