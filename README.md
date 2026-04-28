🚀 CryptoCapi: Institutional Intelligence Terminal
"En un mercado dominado por el ruido mediático y las especulaciones de la IA, nosotros proveemos la señal pura. Mientras otros adivinan, nosotros calculamos mediante cálculo estocástico y teoría del caos."

Bienvenido al repositorio arquitectónico de CryptoCapi. Este espacio funciona como un Showcase Técnico del desarrollo, los estándares de ingeniería y la compleja arquitectura algorítmica de nuestro motor de inteligencia financiera.

Nota: El código fuente base de CryptoCapi se mantiene en repositorios privados bajo estrictas medidas de seguridad comercial. Aquí documentamos el rigor técnico y la ciencia de datos detrás del sistema.

🏛️ La Constitución Técnica (CTC-2026): El Fin de las Alucinaciones
La integración de Modelos de Lenguaje Grandes (LLMs) en finanzas introdujo un riesgo inaceptable: Las Alucinaciones Numéricas. Un inversor institucional no puede depender de un chatbot que inventa niveles de soporte, extrapola precios inexistentes o falla en matemática básica.

Nuestra Solución: CryptoCapi fue diseñado bajo una "Constitución Técnica" inmutable. Hemos construido un Pipeline de Override Matemático. La IA (Llama-3.3) solo tiene permiso para analizar el sentimiento semántico y explicar el contexto de las noticias. Todos los números, diagnósticos y clasificaciones son inyectados en tiempo real por un motor matemático en Python (math_engine.py / Arquetipo B) que tiene la última palabra. La Matemática Certifica, la IA Narra.

⚙️ La Arquitectura de Tres Motores (The Tri-Engine Core)
CryptoCapi no es un script de Python conectado a OpenAI. Es una infraestructura distribuida compuesta por tres motores atómicos y deterministas.

📡 1. Arquetipo A: Motor Radar (Filtrado Semántico y Detección de Ruido)
Rol: El Vigilante Narrativo.
Stack: Python + Groq (Llama-3.3-70B) + Web Scraping Concurrente.
Mecánica: Ingesta flujos masivos de RSS de fuentes Institucionales Tier-1 (Bloomberg, Reuters, Cointelegraph).
Output: Genera un análisis de sentimiento puro (Bullish/Bearish/Neutral) y un resumen ejecutivo de 15 segundos, filtrando el clickbait y el ruido minorista.
📐 2. Arquetipo B: Motor Quant PRO (Cálculo Estocástico Avanzado)
Rol: El "Cerebro Matemático". Dictamina la realidad del mercado sin intervención humana ni de IA.
Stack: Python Puro + NumPy + Pandas + TA-Lib (C-Engine).
Modelos Estadísticos:
Matriz de Intercepción de Riesgo (RIM): Un sistema de 4 capas defensivas. Evalúa el Z-Score (30 ventanas). Si $|Z| \ge 3.0$ (Capa 1: Shock), el sistema fuerza un estado de EXTREME_VOLATILITY, silenciando cualquier narrativa optimista de la IA. Si las Bandas de Bollinger se rompen, pero el ancho de banda es $< 1.5%$, la Capa 3 lo descarta matemáticamente como "Ruido".
Filtros de Kalman: Reducción de ruido algorítmico. Suaviza la curva de precios en tiempo real descartando los "falsos quiebres" generados por bots de alta frecuencia.
Exponentes de Lyapunov (Teoría del Caos): Mide la sensibilidad a las condiciones iniciales. Determina matemáticamente la predictibilidad del mercado en ese segundo exacto. Si el exponente es positivo (Sistema Caótico), CryptoCapi reduce automáticamente el confidence_score del reporte.
Matriz de Correlación de Pearson: Mide la dependencia del activo frente a vectores macroeconómicos pesados (S&P 500 - SPY, Índice del Dólar - DXY).
🐳 3. Arquetipo C: Motor Quant Plus (Analítica On-Chain V3.0)
Rol: Información Asimétrica Institucional.
Stack: Nodos RPC (Alchemy) + Moralis API + Web3.py.
Mecánica: Lee el estado de la blockchain cruda antes de que se convierta en una noticia o mueva el precio.
Modelos:
Exchange Netflows: Detección en tiempo real de salidas masivas de capital hacia Cold Wallets (Fase de Acumulación Institucional).
Ratio MVRV (Market Value to Realized Value): Modelo de valoración fundamental para determinar zonas de sobrecompra secular o infravaloración estadística.
Validación de Salud de Red: Cruce de datos de Direcciones Activas Diarias y Gwei (Gas) para validar si un repunte de precio es orgánico o un "Pump & Dump" sin uso real de la red.
🛠️ Full-Stack Rigor & Infraestructura (Developer Experience)
El diseño de sistema de CryptoCapi cumple con los estándares de empresas Fortune 500.

API Gateway (Node.js + Express): Construido bajo Arquitectura Hexagonal (Ports & Adapters). La lógica de negocio (domain) desconoce por completo la existencia de la base de datos o el framework web.
Tipado Paranoico (Zero-Any Policy): 100% TypeScript. Uso prohibido de any. Toda la información que cruza la red es validada destructivamente mediante Zod (.strict()). Si el Collector en Python envía un Float donde se esperaba un String, el sistema colapsa intencionalmente con un Error 400 para evitar corrupción de base de datos. (End-to-End Type Safety).
Data Collector (Python): Tipado estricto con Pydantic y Mypy. Las métricas cruzan a la API B2B mapeadas en contratos explícitos de dominio.
Persistencia: PostgreSQL (Neon Serverless) para la bóveda histórica + Redis (Upstash) para Caché ultra-rápida y Rate Limiting global.
Infraestructura: Ambiente 100% Dockerizado (Docker Compose). Contenedores optimizados con builds multi-etapa y Healthchecks institucionales (recuperación automática ante caídas de nodos o timeouts de bases de datos).
