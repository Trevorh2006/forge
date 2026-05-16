import { useState } from "react";

const tracks = {
  A: { label: "Track A", name: "Workflow & Engineering Foundation", color: "#60A5FA" },
  B: { label: "Track B", name: "Python for AI Engineering", color: "#34D399" },
  C: { label: "Track C", name: "Maths for ML & AI", color: "#FBBF24" },
  D: { label: "Track D", name: "Data & Classical ML", color: "#F97316" },
  E: { label: "Track E", name: "LLMs, Embeddings & RAG", color: "#C084FC" },
  F: { label: "Track F", name: "Agents & Orchestration", color: "#F472B6" },
  G: { label: "Track G", name: "Production & Portfolio", color: "#6EE7B7" },
};

const lessons = [
  // ── TRACK A ──
  { id: 1, track: "A", title: "Forge Foundation", subject: "GitHub repo creation, folder structure (src/, tests/, docs/, agents/), course state files, first commit and push", outcome: "Forge repo live on GitHub with all course infrastructure committed", forgeLink: "The repo exists. Everything else builds here.", freshnessCheck: "Check latest Git stable version and GitHub repo creation flow" },
  { id: 2, track: "A", title: "Git Beyond Basics", subject: "Branching, merging, resolving conflicts, reading history, using Git as a checkpoint system throughout the course", outcome: "Create a feature branch, make changes, merge back, read the log cleanly", forgeLink: "Git discipline established for all future lessons", freshnessCheck: "Check current Git best practices for solo developers" },
  { id: 3, track: "A", title: "Testing Fundamentals", subject: "pytest in depth — what to test, test structure, fixtures, parametrize, running subsets, reading failures", outcome: "A proper test suite for a small example module, all passing", forgeLink: "Testing pattern established before any Forge source code is written", freshnessCheck: "Check latest pytest version and fixture best practices" },
  { id: 4, track: "A", title: "Testing for AI Code", subject: "Mocking API calls, handling non-deterministic output, integration vs unit tests, testing agents and pipelines", outcome: "Mock an LLM API call in a test — no real API required, fully reproducible", forgeLink: "Pattern used for testing every AI component Forge will have", freshnessCheck: "Check latest pytest-mock and responses library versions" },
  // ── TRACK B ──
  { id: 5, track: "B", title: "Python Foundations I", subject: "Python vs C# — syntax, types, variables, functions, list and dict comprehensions in depth, running scripts on Mac", outcome: "A Python script that reads filenames and filters by extension using comprehensions", forgeLink: "First Python file — the pattern Forge will repeat throughout", freshnessCheck: "Check current Python stable version and any syntax changes" },
  { id: 6, track: "B", title: "Python Foundations II", subject: "Classes, dataclasses, type hints, generators, iterators, lazy evaluation — why ML pipelines use them", outcome: "A typed CodeFile dataclass and a generator that yields files one at a time", forgeLink: "src/models.py — Forge's core data model defined", freshnessCheck: "Check Python dataclasses and generator docs for current best practice" },
  { id: 7, track: "B", title: "Python Project Structure", subject: "uv, virtual environments, pyproject.toml, package imports, logging setup, config loading with .env", outcome: "Forge is a proper Python package — importable, configured, logging to console", forgeLink: "src/ is a real package, .env pattern established for all secrets", freshnessCheck: "Check latest uv docs and python-dotenv version" },
  { id: 8, track: "B", title: "File I/O and Data Formats", subject: "Reading and writing files, pathlib, JSON, CSV, handling encodings — critical for ingesting real code files", outcome: "A script that reads all .py and .cs files from a local folder safely with encoding handling", forgeLink: "Foundation for Forge's file ingestion pipeline", freshnessCheck: "Check Python pathlib and json module current docs" },
  { id: 9, track: "B", title: "Error Handling and Resilience", subject: "Exceptions, try/except patterns, retries with exponential backoff, defensive coding, designing code that fails gracefully", outcome: "A resilient file reader that retries on failure and logs errors without crashing", forgeLink: "Pattern applied to every external call Forge makes — GitHub API, LLM API", freshnessCheck: "Check tenacity library version for retry patterns" },
  { id: 10, track: "B", title: "Decorators and Functional Patterns", subject: "How decorators work, writing your own, map/filter, closures, how ML frameworks use decorators constantly", outcome: "A @retry decorator and a @timed decorator applied to real Forge functions", forgeLink: "src/utils.py — reusable decorators for all of Forge", freshnessCheck: "Check functools docs and current decorator patterns" },
  { id: 11, track: "B", title: "Async and Concurrency", subject: "async/await, event loops, aiohttp, running concurrent API calls — agents make many calls simultaneously", outcome: "Fetch three GitHub files concurrently with async — measure the speed difference vs sequential", forgeLink: "Foundation for Forge's concurrent ingestion and agent tool calls", freshnessCheck: "Check latest asyncio and aiohttp docs" },
  { id: 12, track: "B", title: "NumPy Fundamentals", subject: "Arrays, shapes, dtypes, broadcasting, vectorised operations — NumPy is a language within Python used everywhere in ML", outcome: "Implement vector addition, scaling, and element-wise operations — verify all with NumPy", forgeLink: "Foundation for all maths track implementations and embedding operations", freshnessCheck: "Check latest NumPy version and any API changes" },
  { id: 13, track: "B", title: "HTTP Fundamentals", subject: "How HTTP works — requests, responses, status codes, headers, authentication, tokens — before touching any API", outcome: "Make authenticated and unauthenticated requests, read headers, handle errors by status code", forgeLink: "Foundation for GitHub API lessons and every external API Forge calls", freshnessCheck: "Check latest httpx and requests library versions" },
  { id: 14, track: "B", title: "GitHub API I", subject: "GitHub REST API — fetching repo tree, file metadata, authentication with tokens, rate limit handling", outcome: "Forge fetches and prints the full file tree of any public GitHub repo", forgeLink: "src/github_client.py — Forge's data source established", freshnessCheck: "Check GitHub REST API v3 current endpoints and rate limit rules" },
  { id: 15, track: "B", title: "GitHub API II", subject: "Fetching file contents, filtering by extension, pagination, storing results, handling encoding edge cases", outcome: "Forge downloads all .py and .cs files from a public repo into structured objects", forgeLink: "github_client.py complete — Forge can fully ingest a repo", freshnessCheck: "Check GitHub API pagination docs and content endpoint" },
  { id: 16, track: "B", title: "SQL with Python", subject: "SQLite in Python, schema design, inserting and querying records, storing Forge file metadata", outcome: "Forge stores every ingested file's metadata in SQLite — queryable by repo, language, path", forgeLink: "src/database.py — Forge's metadata layer", freshnessCheck: "Check Python sqlite3 docs and current SQLAlchemy version" },
  // ── TRACK C ──
  { id: 17, track: "C", title: "Vectors", subject: "What a vector is, direction vs magnitude, geometric intuition, why meaning can be represented as numbers", outcome: "Draw and reason about vectors by hand, understand what an embedding vector represents conceptually", forgeLink: "The conceptual foundation for everything Forge does with embeddings", freshnessCheck: "Pure maths — no external dependencies" },
  { id: 18, track: "C", title: "Vector Operations", subject: "Addition, subtraction, scalar multiplication, linear combinations — how vectors compose and transform", outcome: "Implement vector addition and scaling from scratch in Python, verify results match NumPy", forgeLink: "Operations Forge uses when combining query and document vectors", freshnessCheck: "Check NumPy array operation docs" },
  { id: 19, track: "C", title: "Matrices", subject: "What a matrix is, shapes, transpose, why neural networks are matrix operations end to end", outcome: "Represent a small dataset as a matrix, transpose it, understand what each dimension means", forgeLink: "Foundation for understanding embedding models and attention mechanisms", freshnessCheck: "Pure maths — no external dependencies" },
  { id: 20, track: "C", title: "Matrix Multiplication", subject: "The operation step by step, geometric meaning, why it is the core operation of deep learning", outcome: "Multiply two matrices by hand and with NumPy — verify they match, understand what changed", forgeLink: "Understanding what embedding models actually compute under the hood", freshnessCheck: "Check NumPy matmul docs" },
  { id: 21, track: "C", title: "Dot Product", subject: "The calculation, geometric meaning, relationship to matrix multiplication, why it measures alignment", outcome: "Implement dot_product() from scratch, add to src/maths.py with full tests", forgeLink: "src/maths.py — Forge's first real maths utility committed", freshnessCheck: "Pure maths with NumPy verification" },
  { id: 22, track: "C", title: "Cosine Similarity", subject: "Normalisation, why direction beats magnitude, the formula derived step by step from dot product", outcome: "Implement cosine_similarity() in src/maths.py — test against known similar and dissimilar code pairs", forgeLink: "The similarity function Forge's retrieval engine is built on", freshnessCheck: "Check scikit-learn cosine_similarity for verification" },
  { id: 23, track: "C", title: "Probability and Distributions", subject: "Probability, conditional probability, Bayes intuition, distributions — how models express uncertainty over outputs", outcome: "Understand what a model means when it assigns 0.9 probability to a token", forgeLink: "Foundation for understanding LLM output, temperature, and sampling behaviour", freshnessCheck: "Pure maths — no external dependencies" },
  { id: 24, track: "C", title: "Statistics Fundamentals", subject: "Mean, variance, standard deviation, the normal distribution in depth — underpins almost every ML assumption", outcome: "Compute and interpret stats on a real dataset of code file sizes from Forge's database", forgeLink: "Used in Forge's evaluation, data profiling, and model assessment", freshnessCheck: "Check NumPy and scipy.stats current docs" },
  { id: 25, track: "C", title: "Information Theory Basics", subject: "Entropy, cross-entropy, KL divergence — why cross-entropy is the loss function in nearly every model", outcome: "Compute entropy of a small distribution by hand, understand why it appears in training", forgeLink: "Foundation for understanding how embedding models are trained and evaluated", freshnessCheck: "Pure maths — no external dependencies" },
  { id: 26, track: "C", title: "Loss Functions and Optimisation", subject: "MSE, cross-entropy loss, what minimising loss means geometrically, gradient descent intuition with plots", outcome: "Plot a loss curve, find the minimum by hand and by gradient step — see convergence", forgeLink: "Understanding what training an embedding or classification model actually does", freshnessCheck: "Check matplotlib current version for plotting" },
  { id: 27, track: "C", title: "Gradients and Backpropagation", subject: "Partial derivatives, the chain rule intuition, how gradients flow through a network, why it produces learning", outcome: "Trace backpropagation through a two-layer network by hand — no framework needed", forgeLink: "The conceptual foundation for reading any ML paper with confidence", freshnessCheck: "Pure maths — no external dependencies" },
  // ── TRACK D ──
  { id: 28, track: "D", title: "DataFrames I", subject: "Pandas — loading data, inspecting, indexing, selecting, basic operations on Forge's ingested metadata", outcome: "Load Forge's SQLite metadata into a DataFrame, inspect and filter by language and repo", forgeLink: "Analyse what Forge has actually ingested before any modelling", freshnessCheck: "Check latest pandas version and docs" },
  { id: 29, track: "D", title: "DataFrames II", subject: "Cleaning, transforming, handling missing data, merging DataFrames, groupby — the real work of data prep", outcome: "Clean and transform Forge's metadata — remove duplicates, fill gaps, group by language", forgeLink: "Clean data pipeline before any ML is applied to Forge's corpus", freshnessCheck: "Check pandas cleaning and groupby docs" },
  { id: 30, track: "D", title: "Data Visualisation", subject: "matplotlib, seaborn — plotting distributions, histograms, scatter plots, understanding data visually before modelling", outcome: "Visualise Forge's corpus — file size distribution, language breakdown, repo comparison charts", forgeLink: "Visual EDA of any repo Forge ingests", freshnessCheck: "Check latest matplotlib and seaborn versions" },
  { id: 31, track: "D", title: "Features and Feature Engineering", subject: "What features are, encoding categorical data, scaling, selection — turning raw code metadata into ML inputs", outcome: "Engineer features from Forge's code files — line count, function count, comment ratio", forgeLink: "Feature extraction pipeline for Forge's classical ML layer", freshnessCheck: "Check scikit-learn preprocessing docs" },
  { id: 32, track: "D", title: "Classification", subject: "Classification algorithms, train/test split, fitting with scikit-learn, making and interpreting predictions", outcome: "Train a classifier that predicts programming language from code features — evaluate on held-out data", forgeLink: "Language detection baseline before embedding-based retrieval", freshnessCheck: "Check latest scikit-learn version and classifier docs" },
  { id: 33, track: "D", title: "Regression", subject: "Linear regression, when to use it vs classification, fitting a model, interpreting coefficients", outcome: "Predict file complexity from structural features — interpret what the model actually learned", forgeLink: "Fundamental ML literacy — understanding what a trained model represents", freshnessCheck: "Check scikit-learn LinearRegression docs" },
  { id: 34, track: "D", title: "Model Evaluation", subject: "Precision, recall, F1, confusion matrices, ROC curves — how to actually know if a model is working", outcome: "Fully evaluate the language classifier from Lesson 32 with all standard metrics plotted", forgeLink: "Evaluation discipline applied to every model Forge uses or references", freshnessCheck: "Check scikit-learn metrics docs" },
  { id: 35, track: "D", title: "Overfitting, Underfitting, Cross-Validation", subject: "The most important ML concept — bias/variance tradeoff, k-fold CV, regularisation intuition", outcome: "Demonstrate overfitting on a toy dataset, fix it with cross-validation — see it in the plots", forgeLink: "Foundation for trusting any model Forge trains or evaluates", freshnessCheck: "Check scikit-learn cross_val_score docs" },
  { id: 36, track: "D", title: "Clustering", subject: "K-means, silhouette score, choosing k, visualising clusters — unsupervised understanding of code structure", outcome: "Cluster Forge's ingested code files — see natural groupings emerge without any labels", forgeLink: "Unsupervised analysis of any repo Forge ingests", freshnessCheck: "Check scikit-learn clustering docs" },
  // ── TRACK E ──
  { id: 37, track: "E", title: "LLM Fundamentals", subject: "Tokens, attention intuition, why transformers work, temperature, sampling — what an LLM actually is under the hood", outcome: "Call the OpenAI API, vary temperature, observe and explain differences in output", forgeLink: "Foundation for every LLM call Forge makes", freshnessCheck: "Check latest OpenAI API docs and available models" },
  { id: 38, track: "E", title: "What Embeddings Are", subject: "Semantic meaning as vectors, how embedding models are trained, code vs prose embeddings, model choices", outcome: "Embed ten code snippets, compute pairwise similarity, verify similar code clusters together", forgeLink: "The core capability Forge's retrieval is built on", freshnessCheck: "Check latest OpenAI and sentence-transformers embedding model options" },
  { id: 39, track: "E", title: "Chunking Strategies", subject: "Why chunking matters, code-specific approaches vs prose, overlap, metadata attachment, chunk size tradeoffs", outcome: "Forge chunks ingested files into meaningful units with full metadata — committed and tested", forgeLink: "src/chunker.py — splits every ingested file into embeddable chunks", freshnessCheck: "Check latest chunking research and LangChain text splitter docs" },
  { id: 40, track: "E", title: "Prompt Engineering", subject: "System prompts, few-shot examples, chain of thought, structured output, prompt hygiene — a full skill in itself", outcome: "Write three variants of a Forge system prompt, evaluate quality differences systematically", forgeLink: "The prompts that drive every Forge answer — done properly from the start", freshnessCheck: "Check latest OpenAI prompt engineering guide" },
  { id: 41, track: "E", title: "Vector Storage", subject: "What a vector store is, ChromaDB — indexing, storing chunks with metadata, querying by similarity", outcome: "Forge stores all chunk embeddings in ChromaDB and retrieves by natural language query", forgeLink: "src/vector_store.py — Forge's memory layer", freshnessCheck: "Check latest ChromaDB version and API" },
  { id: 42, track: "E", title: "Retrieval", subject: "Top-k retrieval, metadata filtering by language and repo, hybrid search — dense plus sparse", outcome: "Ask Forge a plain English question, get back the most relevant code chunks with scores", forgeLink: "src/retriever.py — Forge finds relevant code", freshnessCheck: "Check ChromaDB query docs and hybrid search options" },
  { id: 43, track: "E", title: "Reranking", subject: "Why first retrieval is not good enough, cross-encoders, reranking strategies, latency tradeoffs", outcome: "Add a reranking step — compare results before and after, measure quality improvement", forgeLink: "retriever.py upgraded — Forge returns meaningfully better results", freshnessCheck: "Check latest sentence-transformers CrossEncoder docs" },
  { id: 44, track: "E", title: "Context Window Management", subject: "Token limits, what happens when context overflows, summarisation, sliding windows, truncation strategies", outcome: "Handle a query whose retrieved chunks exceed the context limit — gracefully, not by crashing", forgeLink: "Forge handles real-world context limits without failing silently", freshnessCheck: "Check latest model context window sizes and tiktoken docs" },
  { id: 45, track: "E", title: "RAG — Cited Answers", subject: "Assembling the full pipeline — retrieve, rerank, construct prompt, generate answer, cite sources", outcome: "Forge answers a question about a real repo and cites the exact files it used", forgeLink: "src/rag.py — Forge gives its first real end-to-end answer", freshnessCheck: "Check latest OpenAI chat completion docs" },
  { id: 46, track: "E", title: "Evaluation I — Concepts", subject: "Relevance, faithfulness, context precision, context recall, hallucination detection — what good looks like", outcome: "Define and manually score five Forge answers against all evaluation criteria", forgeLink: "Evaluation framework that applies to every agent Forge will have", freshnessCheck: "Check latest RAGAS framework docs and evaluation research" },
  { id: 47, track: "E", title: "Evaluation II — Forge's Eval Suite", subject: "Automated evals, ground truth datasets, running evals in CI, interpreting results over time", outcome: "An automated eval suite that scores Forge's RAG pipeline — committed to tests/eval/", forgeLink: "tests/eval/ — Forge can measure its own quality automatically", freshnessCheck: "Check latest RAGAS and evaluation tooling versions" },
  // ── TRACK F ──
  { id: 48, track: "F", title: "Agent Concepts", subject: "What makes something an agent — perception, memory, planning, action — vs a pipeline or a chatbot", outcome: "Draw the agent loop for Forge on paper, identify every component before writing a line of code", forgeLink: "The architecture everything in Track F builds toward", freshnessCheck: "Check latest agent architecture writing and framework comparisons" },
  { id: 49, track: "F", title: "ReAct and Reasoning Patterns", subject: "Chain of thought, ReAct pattern, tree of thought intuition — how agents reason before acting", outcome: "Trace a ReAct loop manually for a Forge query — reason, act, observe, repeat until done", forgeLink: "The reasoning pattern baked into Forge's base agent", freshnessCheck: "Check latest ReAct paper and chain of thought research" },
  { id: 50, track: "F", title: "Tool Design", subject: "Designing tools agents can use reliably — descriptions, parameters, error contracts, granularity choices", outcome: "Design and implement three Forge tools: search_code, get_file, list_repos", forgeLink: "src/tools.py — the tools every Forge agent will call", freshnessCheck: "Check latest OpenAI function calling and tool use docs" },
  { id: 51, track: "F", title: "Memory Architecture", subject: "Short-term, long-term, episodic, semantic memory — how agents remember across turns and sessions", outcome: "Implement short-term conversation memory and long-term file storage for Forge", forgeLink: "src/memory.py — Forge remembers context across a full session", freshnessCheck: "Check latest memory architecture patterns in agent research" },
  { id: 52, track: "F", title: "Forge Base Agent", subject: "Implementing the agent loop — perceive, plan, call tools, observe results, respond", outcome: "A working base agent that uses retrieval as a tool to answer questions about a repo", forgeLink: "src/agents/base_agent.py — the foundation all specialist agents inherit from", freshnessCheck: "Check latest OpenAI tool calling docs" },
  { id: 53, track: "F", title: "Explanation Agent", subject: "Specialist agent design, system prompt scoping, explaining code in plain language, evaluation", outcome: "An agent that explains any function or class from a repo in plain language with examples", forgeLink: "src/agents/explanation_agent.py", freshnessCheck: "Check latest system prompt best practices" },
  { id: 54, track: "F", title: "Testing Agent", subject: "Generating pytest tests from code, understanding what makes a good test, evaluating test quality", outcome: "An agent that reads a function and writes meaningful, passing pytest tests for it", forgeLink: "src/agents/testing_agent.py", freshnessCheck: "Check latest pytest conventions and test generation approaches" },
  { id: 55, track: "F", title: "Refactor Agent", subject: "Code quality analysis, identifying smells, suggesting improvements, generating diffs safely", outcome: "An agent that suggests refactoring improvements with clear reasoning and readable diffs", forgeLink: "src/agents/refactor_agent.py", freshnessCheck: "Check latest static analysis tools and refactoring patterns" },
  { id: 56, track: "F", title: "C# Language Agent", subject: "Language-specific agent tuning, C# idioms, .NET patterns, language-aware retrieval filtering", outcome: "An agent specialised for C# codebases that understands .NET conventions — your C# knowledge becomes an asset here", forgeLink: "src/agents/csharp_agent.py", freshnessCheck: "Check latest C# language features and .NET docs" },
  { id: 57, track: "F", title: "Agent Evaluation", subject: "How to know if an agent is working — task completion rate, tool use quality, answer faithfulness", outcome: "An evaluation suite that scores each Forge agent on a fixed set of real tasks automatically", forgeLink: "tests/eval/agents/ — every agent scored automatically", freshnessCheck: "Check latest agent evaluation research and tooling" },
  { id: 58, track: "F", title: "Agent Orchestration", subject: "Routing queries to the right agent, multi-agent coordination, shared memory and context passing", outcome: "A router that directs any Forge question to the correct specialist agent automatically", forgeLink: "src/agents/router.py — Forge is now a multi-agent system", freshnessCheck: "Check latest multi-agent orchestration patterns" },
  { id: 59, track: "F", title: "Failure Modes and Recovery", subject: "Agent loops, hallucination mid-task, tool call failures, graceful degradation, circuit breakers", outcome: "Forge handles a deliberately broken tool call without crashing or looping infinitely", forgeLink: "Resilience patterns applied across all Forge agents", freshnessCheck: "Check latest agent failure mode research" },
  { id: 60, track: "F", title: "Safety and Boundaries", subject: "Prompt injection, jailbreaking, tool access risks, guardrails, what can go wrong with real-world tool use", outcome: "Input validation and output guardrails implemented for every Forge agent", forgeLink: "Safety layer applied across all of src/agents/", freshnessCheck: "Check latest OWASP LLM Top 10 and prompt injection research" },
  // ── TRACK G ──
  { id: 61, track: "G", title: "Infrastructure Security", subject: "Secrets management, API keys in .env, input validation, dependency scanning, never committing credentials", outcome: "Forge passes a dependency scan, all secrets in .env, inputs validated at every boundary", forgeLink: "Security hardening across all of src/", freshnessCheck: "Check latest pip-audit and secrets scanning tools" },
  { id: 62, track: "G", title: "Observability", subject: "Structured logging, tracing agent calls, what to monitor, debugging an agent you cannot see into", outcome: "Every Forge agent call produces structured logs — traceable from query to final answer", forgeLink: "Observability layer across all agents and the RAG pipeline", freshnessCheck: "Check latest structlog and OpenTelemetry Python docs" },
  { id: 63, track: "G", title: "Docker and Portability", subject: "Dockerfile, containerising Forge, environment consistency, running locally, multi-stage builds", outcome: "Forge runs in a Docker container — portable, reproducible, no local Python required", forgeLink: "Dockerfile and docker-compose.yml committed", freshnessCheck: "Check latest Docker best practices for Python AI apps" },
  { id: 64, track: "G", title: "CLI Interface", subject: "Typer — commands, arguments, help text, progress bars, making Forge usable from the terminal", outcome: "forge ingest <repo_url> and forge ask <question> work cleanly from the terminal", forgeLink: "src/cli.py — Forge has a real command-line interface", freshnessCheck: "Check latest Typer version and docs" },
  { id: 65, track: "G", title: "API Interface", subject: "FastAPI — endpoints, request validation, async handlers, running locally, auto-generated API docs", outcome: "Forge exposes a local HTTP API — ingest and query endpoints fully working and documented", forgeLink: "src/api.py — Forge is accessible over HTTP", freshnessCheck: "Check latest FastAPI version and docs" },
  { id: 66, track: "G", title: "Portfolio Documentation", subject: "Portfolio-quality README, architecture diagram, demo recording, what to highlight to employers and why", outcome: "Forge has a README that tells the story, a clear architecture diagram, and a recorded demo", forgeLink: "docs/ complete — Forge is a portfolio piece", freshnessCheck: "Check current portfolio best practices for AI engineers" },
];

const trackCounts = Object.keys(tracks).reduce((acc, t) => {
  acc[t] = lessons.filter(l => l.track === t).length;
  return acc;
}, {});

export default function ForgeCourse() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const filtered = selectedTrack ? lessons.filter(l => l.track === selectedTrack) : lessons;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07070f",
      color: "#CBD5E1",
      fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
      padding: "2.5rem 1rem 4rem",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }
        .forge-title {
          background: linear-gradient(90deg, #60A5FA 0%, #C084FC 50%, #F472B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .track-chip { cursor: pointer; transition: all 0.15s ease; font-family: 'DM Mono', monospace; }
        .track-chip:hover { opacity: 0.8; }
        .lesson-row { border: 1px solid #0f0f1e; border-radius: 5px; background: #09091a; transition: border-color 0.15s, background 0.15s; overflow: hidden; }
        .lesson-row:hover { border-color: #1a1a2e; background: #0b0b1e; }
        .expand-btn { background: none; border: none; cursor: pointer; width: 100%; text-align: left; color: inherit; font-family: inherit; padding: 0; }
        .chevron { color: #1e2535; font-size: 0.6rem; transition: transform 0.2s ease; flex-shrink: 0; }
        .chevron.open { transform: rotate(90deg); }
        .detail-grid { display: grid; grid-template-columns: 100px 1fr; gap: 0.4rem 0.75rem; font-size: 0.74rem; line-height: 1.55; }
        .dk { color: #252d45; }
        .dv { color: #8899aa; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.3rem" }}>
            <h1 className="forge-title" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.03em" }}>FORGE</h1>
            <span style={{ color: "#1e2535", fontSize: "0.68rem", letterSpacing: "0.2em" }}>AI CODEBASE ASSISTANT</span>
          </div>
          <p style={{ color: "#1e2535", fontSize: "0.74rem", margin: "0 0 1.75rem", letterSpacing: "0.03em" }}>
            {lessons.length} lessons · {Object.keys(tracks).length} tracks · one project · built from zero to portfolio
          </p>

          {/* Track filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            <button className="track-chip" onClick={() => { setSelectedTrack(null); setExpandedLesson(null); }} style={{ padding: "0.28rem 0.7rem", borderRadius: "3px", fontSize: "0.68rem", background: !selectedTrack ? "#111122" : "transparent", color: !selectedTrack ? "#94A3B8" : "#1e2535", border: !selectedTrack ? "1px solid #1a1a2e" : "1px solid #0f0f1e" }}>
              All · {lessons.length}
            </button>
            {Object.entries(tracks).map(([key, t]) => (
              <button key={key} className="track-chip" onClick={() => { setSelectedTrack(selectedTrack === key ? null : key); setExpandedLesson(null); }} style={{ padding: "0.28rem 0.7rem", borderRadius: "3px", fontSize: "0.68rem", background: selectedTrack === key ? t.color + "15" : "transparent", color: selectedTrack === key ? t.color : "#1e2535", border: `1px solid ${selectedTrack === key ? t.color + "40" : "#0f0f1e"}` }}>
                {key} · {trackCounts[key]}
              </button>
            ))}
          </div>
          {selectedTrack && (
            <p style={{ margin: "0.6rem 0 0", fontSize: "0.72rem", color: tracks[selectedTrack].color + "80" }}>
              {tracks[selectedTrack].label}: {tracks[selectedTrack].name}
            </p>
          )}
        </div>

        {/* Lessons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {filtered.map((lesson) => {
            const t = tracks[lesson.track];
            const isOpen = expandedLesson === lesson.id;
            return (
              <div key={lesson.id} className="lesson-row">
                <button className="expand-btn" onClick={() => setExpandedLesson(isOpen ? null : lesson.id)}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.8rem 1rem" }}>
                    <span style={{ color: "#151520", fontSize: "0.65rem", minWidth: "1.8rem", flexShrink: 0 }}>{String(lesson.id).padStart(2, "0")}</span>
                    <span style={{ display: "inline-block", padding: "0.12rem 0.45rem", borderRadius: "3px", fontSize: "0.62rem", letterSpacing: "0.05em", background: t.color + "12", color: t.color, border: `1px solid ${t.color}28`, flexShrink: 0 }}>{lesson.track}</span>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#607090", flex: 1, letterSpacing: "-0.01em" }}>{lesson.title}</span>
                    <span className={`chevron${isOpen ? " open" : ""}`}>▶</span>
                  </div>
                  <div style={{ padding: "0 1rem 0.75rem", paddingLeft: "calc(1.8rem + 2.2rem + 1.6rem)", fontSize: "0.71rem", color: "#1a2235", lineHeight: 1.6 }}>{lesson.subject}</div>
                </button>
                {isOpen && (
                  <div style={{ borderTop: `1px solid ${t.color}15`, background: "#050510", padding: "0.9rem 1rem 1rem", paddingLeft: "calc(1.8rem + 2.2rem + 1.6rem)" }}>
                    <div className="detail-grid">
                      <span className="dk">outcome</span><span className="dv">{lesson.outcome}</span>
                      <span className="dk">forge link</span><span className="dv">{lesson.forgeLink}</span>
                      <span className="dk">freshness</span><span className="dv" style={{ color: t.color + "70" }}>{lesson.freshnessCheck}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ marginTop: "2.5rem", paddingTop: "1.25rem", borderTop: "1px solid #0f0f1e", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.65rem", color: "#151520", letterSpacing: "0.04em" }}>
          <span>1 hour · self-contained · state files updated · git commit at end of every lesson</span>
          <span>latest docs checked at the start of every session</span>
        </div>
      </div>
    </div>
  );
}
