# Track G — Production & Portfolio — Lessons 61–66

---

## Lesson 61 — Infrastructure Security

- **Subject:** Secrets management, input validation, dependency scanning
- **Outcome:** Forge passes a dependency scan, secrets in .env, inputs validated at every boundary
- **Freshness check:** Latest pip-audit and secrets scanning tools

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is prompt injection — give a concrete example in the context of Forge?
2. What does least privilege mean for tool design — why does it matter for safety?
3. What is the difference between an input guardrail and an output guardrail?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Secrets management audit (15 min)
- Audit every secret: GitHub token, OpenAI key
- Verify all loaded from .env, never hardcoded, never logged
- Run git log to verify no secrets were ever committed
- Add a pre-commit hook that blocks commits containing secret patterns
- **Callback to Lesson 05:** The .env pattern from Lesson 05 was set up for exactly this reason. If it was done correctly then, this audit should pass immediately. If not — fix it now before it goes further.

### Section 2 — Input validation (15 min)
- Validate all inputs at entry points: CLI arguments, API requests, user queries
- Repo URLs must match github.com pattern
- Use pydantic for validation — integrates with FastAPI, provides clear error messages

### Section 3 — Dependency scanning (15 min)
- pip-audit: scans installed packages for known vulnerabilities
- Install, run, fix anything flagged
- Add pip-audit to CI — run on every push

### Section 4 — Least privilege review and Forge connection (10 min)
- GitHub token: read-only scope only — no write access needed
- OpenAI key: generation only — no fine-tuning or admin
- Document required scopes in README
- **Forge connection:** Run pip-audit now against Forge's full dependency list. Fix everything flagged before moving on. A portfolio project with known vulnerabilities is worse than no portfolio project.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 62 — Observability

- **Subject:** Structured logging, tracing agent calls, monitoring, debugging invisible agents
- **Outcome:** Every Forge agent call produces structured logs traceable from query to answer
- **Freshness check:** Latest structlog and OpenTelemetry Python docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does pip-audit do — what would a flagged dependency mean for Forge?
2. What is pydantic validation — what does it do that a manual if/else check does not?
3. Why is read-only scope for the GitHub token important even for a personal project?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why observability matters for agents (10 min)
- A bug in an agent loop is invisible — which tool call caused the wrong answer?
- The three pillars: logs (what happened), metrics (how often/long), traces (the full path)

### Section 2 — Structured logging with structlog (20 min)
- Structured logs are JSON — machine-readable and searchable
- Replace all print() and basic logging with structlog
- Log every tool call: which tool, parameters, latency, result
- Log every LLM call: model, token count, latency, cost estimate
- **Callback to Lesson 08:** @timed from Lesson 08 measures function latency. structlog adds that measurement to a structured log record. Wire @timed into the structlog output so every slow call is automatically visible.

### Section 3 — Tracing agent calls (20 min)
- A trace links all events in a single agent loop
- Generate a trace ID at the start of each run — include in every log entry
- Log a summary at the end: total tool calls, total tokens, total latency, final answer

### Section 4 — Reading the logs and Forge connection (5 min)
- Run Forge on a real query, read the structured logs
- Trace the full path from query to answer using the trace ID
- Identify the slowest step, the most expensive, any errors
- **Forge connection:** Which part of the agent loop takes the longest? Which costs the most tokens? Use the trace data to answer both questions. Document the findings — this is the kind of analysis a production team would do before optimising.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 63 — Docker and Portability

- **Subject:** Dockerfile, containerising Forge, environment consistency, multi-stage builds
- **Outcome:** Forge runs in a Docker container — portable, reproducible
- **Freshness check:** Latest Docker best practices for Python AI apps

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What are the three pillars of observability — what does each tell you?
2. What does a trace ID do — why is it essential for debugging agent loops?
3. What is a structured log — how does it differ from a plain text log?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why Docker for Forge (10 min)
- "It works on my machine" is not a portfolio argument
- Docker packages the application and its environment together
- Anyone can run Forge with a single command — no Python setup required

### Section 2 — Writing the Dockerfile (20 min)
- Base image: python:3.12-slim — minimal, fast, secure
- Copy pyproject.toml first, install dependencies, then copy source — layer caching
- Set PYTHONUNBUFFERED and PYTHONDONTWRITEBYTECODE
- EXPOSE the API port, set the default CMD

### Section 3 — Multi-stage build (15 min)
- Stage 1 (builder): install build tools, compile dependencies
- Stage 2 (runtime): copy only what is needed, no build tools
- Result: a smaller final image

### Section 4 — docker-compose and Forge connection (10 min)
- docker-compose.yml: defines Forge and any future services
- Mount .env as a volume — secrets are not baked into the image
- Mount a data volume for ChromaDB persistence
- docker-compose up — one command to run everything
- **Forge connection:** Run docker-compose up and send a real query to the API. Does it work end to end inside the container? If not, fix it. The container is what a potential employer or collaborator will run — it must work on the first try.

### Section 5 — Update state files (5 min)
- Commit Dockerfile and docker-compose.yml
- Update all four state files, commit, push

---

## Lesson 64 — CLI Interface

- **Subject:** Typer — commands, arguments, help text, progress bars, terminal UX
- **Outcome:** forge ingest <repo_url> and forge ask <question> work from the terminal
- **Freshness check:** Latest Typer version and docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does layer caching in Docker mean — why does copy order in the Dockerfile matter?
2. What does a multi-stage build achieve — what does the runtime stage not include?
3. Why is .env mounted as a volume rather than copied into the image?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why a CLI (10 min)
- The CLI is the primary interface for developers
- A good CLI is self-documenting — forge --help explains everything
- Typer: modern Python CLI framework, type hints define argument types automatically

### Section 2 — Typer fundamentals (15 min)
- app = typer.Typer(), @app.command() — defining commands
- Function parameters become CLI arguments and options
- typer.echo() for output, typer.Argument and typer.Option for control

### Section 3 — Implement forge ingest (20 min)
- forge ingest <repo_url> [--language LANGUAGE]
- Progress bar as files are fetched and embedded
- Summary: files ingested, chunks created, time taken
- Handle errors cleanly: repo not found, rate limit hit, already ingested

### Section 4 — Implement forge ask and Forge connection (10 min)
- forge ask <question> [--repo REPO] [--language LANGUAGE] [--agent AGENT]
- Print the answer with citations
- Test both commands end to end from the terminal
- **Forge connection:** Run forge --help and read every line. Would a developer who has never seen Forge understand what it does and how to use it? If not, fix the help text. The CLI is often the first thing a technical reviewer tries.

### Section 5 — Update state files (5 min)
- Commit src/cli.py
- Update all four state files, commit, push

---

## Lesson 65 — API Interface

- **Subject:** FastAPI — endpoints, request validation, async handlers, auto-generated docs
- **Outcome:** Forge exposes a local HTTP API — ingest and query endpoints fully working
- **Freshness check:** Latest FastAPI version and docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does Typer use to define argument types — why is this better than manual parsing?
2. What should forge --help tell a developer who has never seen Forge?
3. What happens when forge ingest hits the GitHub rate limit — what should the user see?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why an API (10 min)
- The CLI is for developers — an API is for integration
- FastAPI: async, fast, auto-generates OpenAPI docs at /docs automatically
- Every endpoint is documented without extra effort — great for the portfolio

### Section 2 — FastAPI fundamentals (15 min)
- app = FastAPI(), @app.get(), @app.post()
- Pydantic models for request and response bodies — automatic validation
- Async handlers — Forge's LLM and database calls are async, FastAPI handles this natively
- **Callback to Lesson 09:** FastAPI uses the same async/await patterns from Lesson 09. The async github_client.py stub from that lesson feeds directly into these async handlers — the pattern you learned then is the pattern you use now.
- Run with: uvicorn src.api:app --reload

### Section 3 — Implement POST /ingest (15 min)
- Request body: repo_url, languages (optional list)
- Response: ingested_files, chunks_created, duration_seconds
- Run ingestion in the background — return a job ID immediately
- GET /ingest/{job_id} — check status

### Section 4 — Implement POST /ask and Forge connection (15 min)
- Request body: question, repo, language, agent (all optional except question)
- Response: answer text, list of citations with file path and line range
- Test with curl and the /docs interface
- **Forge connection:** Open /docs in the browser. Every endpoint is documented, every request and response model is shown, every example is runnable. This is the portfolio demonstration — a working, documented API that anyone can run and query in under five minutes.

### Section 5 — Update state files (5 min)
- Commit src/api.py
- Update all four state files, commit, push

---

## Lesson 66 — Portfolio Documentation

- **Subject:** Portfolio-quality README, architecture diagram, demo recording, what to highlight
- **Outcome:** Forge has a README, architecture diagram, and recorded demo
- **Freshness check:** Current portfolio best practices for AI engineers

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does FastAPI auto-generate at /docs — what makes this valuable for a portfolio?
2. What is the difference between a synchronous and async FastAPI handler — why does Forge need async?
3. What does POST /ask return — describe the full response shape?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The README (20 min)
- What Forge is and what problem it solves — two sentences maximum
- What it can do — five key capabilities with concrete examples
- How to set it up — prerequisites, installation, configuration
- How to use it — the most important commands with example output
- How it works — brief architecture overview with a link to the diagram
- **Forge connection:** Write the "what I learned" section honestly. You started with no Python, no ML, no AI. You now have a working codebase assistant with RAG, agents, evaluation, and a documented API. That journey is the story — tell it directly.

### Section 2 — Architecture diagram (15 min)
- One diagram: GitHub API → ingestion → chunker → embedder → ChromaDB + SQLite → retriever → agents → router → user
- Use Mermaid in the README — renders in GitHub automatically with no extra tooling
- Label every component and every arrow — no ambiguity
- **Callback to every track:** Every box in the diagram corresponds to a lesson. The chunker is Lesson 39. The retriever is Lessons 41–42. The router is Lesson 58. The diagram is a map of the whole course.

### Section 3 — Demo recording (15 min)
- Record 2–3 minutes: ingest a real public repo, ask three questions, show citations
- Show the CLI and the /docs API page
- Narrate what is happening and why it is interesting

### Section 4 — What to highlight (5 min)
- For an AI role: the RAG pipeline, reranking, prompt engineering, evaluation suite
- For a general portfolio: lead with the demo, then architecture, then code quality
- Add a brief "what I learned" section — shows self-awareness and growth

### Section 5 — Final commit (5 min)
- Update all state files — final entries in LESSON_LOG.md and COURSE_STATE.md
- Tag the repo: git tag v1.0.0
- Push everything — Forge is complete

---

*Course complete. 66 lessons. One project. Built from zero.*
