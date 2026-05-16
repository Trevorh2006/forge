# Forge — Lesson Reference

Plain text reference for all 66 lessons.
Use this at the end of each session to copy the next lesson's subject and outcome into NEXT_STEPS.md.

---

## Track A — Workflow & Engineering Foundation

### Lesson 01 — Forge Foundation
- **Subject:** GitHub repo creation, folder structure (src/, tests/, docs/, agents/), course state files, first commit and push
- **Outcome:** Forge repo live on GitHub with all course infrastructure committed

### Lesson 02 — Git Beyond Basics
- **Subject:** Branching, merging, resolving conflicts, reading history, using Git as a checkpoint system throughout the course
- **Outcome:** Create a feature branch, make changes, merge back, read the log cleanly

### Lesson 03 — Testing Fundamentals
- **Subject:** pytest in depth — what to test, test structure, fixtures, parametrize, running subsets, reading failures
- **Outcome:** A proper test suite for a small example module, all passing

### Lesson 04 — Testing for AI Code
- **Subject:** Mocking API calls, handling non-deterministic output, integration vs unit tests, testing agents and pipelines
- **Outcome:** Mock an LLM API call in a test — no real API required, fully reproducible

---

## Track B — Python for AI Engineering

### Lesson 05 — Python Foundations I
- **Subject:** Python vs C# — syntax, types, variables, functions, list and dict comprehensions in depth, running scripts on Mac
- **Outcome:** A Python script that reads filenames and filters by extension using comprehensions

### Lesson 06 — Python Foundations II
- **Subject:** Classes, dataclasses, type hints, generators, iterators, lazy evaluation — why ML pipelines use them
- **Outcome:** A typed CodeFile dataclass and a generator that yields files one at a time

### Lesson 07 — Python Project Structure
- **Subject:** uv, virtual environments, pyproject.toml, package imports, logging setup, config loading with .env
- **Outcome:** Forge is a proper Python package — importable, configured, logging to console

### Lesson 08 — File I/O and Data Formats
- **Subject:** Reading and writing files, pathlib, JSON, CSV, handling encodings — critical for ingesting real code files
- **Outcome:** A script that reads all .py and .cs files from a local folder safely with encoding handling

### Lesson 09 — Error Handling and Resilience
- **Subject:** Exceptions, try/except patterns, retries with exponential backoff, defensive coding, designing code that fails gracefully
- **Outcome:** A resilient file reader that retries on failure and logs errors without crashing

### Lesson 10 — Decorators and Functional Patterns
- **Subject:** How decorators work, writing your own, map/filter, closures, how ML frameworks use decorators constantly
- **Outcome:** A @retry decorator and a @timed decorator applied to real Forge functions

### Lesson 11 — Async and Concurrency
- **Subject:** async/await, event loops, aiohttp, running concurrent API calls — agents make many calls simultaneously
- **Outcome:** Fetch three GitHub files concurrently with async — measure the speed difference vs sequential

### Lesson 12 — NumPy Fundamentals
- **Subject:** Arrays, shapes, dtypes, broadcasting, vectorised operations — NumPy is a language within Python used everywhere in ML
- **Outcome:** Implement vector addition, scaling, and element-wise operations — verify all with NumPy

### Lesson 13 — HTTP Fundamentals
- **Subject:** How HTTP works — requests, responses, status codes, headers, authentication, tokens — before touching any API
- **Outcome:** Make authenticated and unauthenticated requests, read headers, handle errors by status code

### Lesson 14 — GitHub API I
- **Subject:** GitHub REST API — fetching repo tree, file metadata, authentication with tokens, rate limit handling
- **Outcome:** Forge fetches and prints the full file tree of any public GitHub repo

### Lesson 15 — GitHub API II
- **Subject:** Fetching file contents, filtering by extension, pagination, storing results, handling encoding edge cases
- **Outcome:** Forge downloads all .py and .cs files from a public repo into structured objects

### Lesson 16 — SQL with Python
- **Subject:** SQLite in Python, schema design, inserting and querying records, storing Forge file metadata
- **Outcome:** Forge stores every ingested file's metadata in SQLite — queryable by repo, language, path

---

## Track C — Maths for ML & AI

### Lesson 17 — Vectors
- **Subject:** What a vector is, direction vs magnitude, geometric intuition, why meaning can be represented as numbers
- **Outcome:** Draw and reason about vectors by hand, understand what an embedding vector represents conceptually

### Lesson 18 — Vector Operations
- **Subject:** Addition, subtraction, scalar multiplication, linear combinations — how vectors compose and transform
- **Outcome:** Implement vector addition and scaling from scratch in Python, verify results match NumPy

### Lesson 19 — Matrices
- **Subject:** What a matrix is, shapes, transpose, why neural networks are matrix operations end to end
- **Outcome:** Represent a small dataset as a matrix, transpose it, understand what each dimension means

### Lesson 20 — Matrix Multiplication
- **Subject:** The operation step by step, geometric meaning, why it is the core operation of deep learning
- **Outcome:** Multiply two matrices by hand and with NumPy — verify they match, understand what changed

### Lesson 21 — Dot Product
- **Subject:** The calculation, geometric meaning, relationship to matrix multiplication, why it measures alignment
- **Outcome:** Implement dot_product() from scratch, add to src/maths.py with full tests

### Lesson 22 — Cosine Similarity
- **Subject:** Normalisation, why direction beats magnitude, the formula derived step by step from dot product
- **Outcome:** Implement cosine_similarity() in src/maths.py — test against known similar and dissimilar code pairs

### Lesson 23 — Probability and Distributions
- **Subject:** Probability, conditional probability, Bayes intuition, distributions — how models express uncertainty over outputs
- **Outcome:** Understand what a model means when it assigns 0.9 probability to a token

### Lesson 24 — Statistics Fundamentals
- **Subject:** Mean, variance, standard deviation, the normal distribution in depth — underpins almost every ML assumption
- **Outcome:** Compute and interpret stats on a real dataset of code file sizes from Forge's database

### Lesson 25 — Information Theory Basics
- **Subject:** Entropy, cross-entropy, KL divergence — why cross-entropy is the loss function in nearly every model
- **Outcome:** Compute entropy of a small distribution by hand, understand why it appears in training

### Lesson 26 — Loss Functions and Optimisation
- **Subject:** MSE, cross-entropy loss, what minimising loss means geometrically, gradient descent intuition with plots
- **Outcome:** Plot a loss curve, find the minimum by hand and by gradient step — see convergence

### Lesson 27 — Gradients and Backpropagation
- **Subject:** Partial derivatives, the chain rule intuition, how gradients flow through a network, why it produces learning
- **Outcome:** Trace backpropagation through a two-layer network by hand — no framework needed

---

## Track D — Data & Classical ML

### Lesson 28 — DataFrames I
- **Subject:** Pandas — loading data, inspecting, indexing, selecting, basic operations on Forge's ingested metadata
- **Outcome:** Load Forge's SQLite metadata into a DataFrame, inspect and filter by language and repo

### Lesson 29 — DataFrames II
- **Subject:** Cleaning, transforming, handling missing data, merging DataFrames, groupby — the real work of data prep
- **Outcome:** Clean and transform Forge's metadata — remove duplicates, fill gaps, group by language

### Lesson 30 — Data Visualisation
- **Subject:** matplotlib, seaborn — plotting distributions, histograms, scatter plots, understanding data visually before modelling
- **Outcome:** Visualise Forge's corpus — file size distribution, language breakdown, repo comparison charts

### Lesson 31 — Features and Feature Engineering
- **Subject:** What features are, encoding categorical data, scaling, selection — turning raw code metadata into ML inputs
- **Outcome:** Engineer features from Forge's code files — line count, function count, comment ratio

### Lesson 32 — Classification
- **Subject:** Classification algorithms, train/test split, fitting with scikit-learn, making and interpreting predictions
- **Outcome:** Train a classifier that predicts programming language from code features — evaluate on held-out data

### Lesson 33 — Regression
- **Subject:** Linear regression, when to use it vs classification, fitting a model, interpreting coefficients
- **Outcome:** Predict file complexity from structural features — interpret what the model actually learned

### Lesson 34 — Model Evaluation
- **Subject:** Precision, recall, F1, confusion matrices, ROC curves — how to actually know if a model is working
- **Outcome:** Fully evaluate the language classifier from Lesson 32 with all standard metrics plotted

### Lesson 35 — Overfitting, Underfitting, Cross-Validation
- **Subject:** The most important ML concept — bias/variance tradeoff, k-fold CV, regularisation intuition
- **Outcome:** Demonstrate overfitting on a toy dataset, fix it with cross-validation — see it in the plots

### Lesson 36 — Clustering
- **Subject:** K-means, silhouette score, choosing k, visualising clusters — unsupervised understanding of code structure
- **Outcome:** Cluster Forge's ingested code files — see natural groupings emerge without any labels

---

## Track E — LLMs, Embeddings & RAG

### Lesson 37 — LLM Fundamentals
- **Subject:** Tokens, attention intuition, why transformers work, temperature, sampling — what an LLM actually is under the hood
- **Outcome:** Call the OpenAI API, vary temperature, observe and explain differences in output

### Lesson 38 — What Embeddings Are
- **Subject:** Semantic meaning as vectors, how embedding models are trained, code vs prose embeddings, model choices
- **Outcome:** Embed ten code snippets, compute pairwise similarity, verify similar code clusters together

### Lesson 39 — Chunking Strategies
- **Subject:** Why chunking matters, code-specific approaches vs prose, overlap, metadata attachment, chunk size tradeoffs
- **Outcome:** Forge chunks ingested files into meaningful units with full metadata — committed and tested

### Lesson 40 — Prompt Engineering
- **Subject:** System prompts, few-shot examples, chain of thought, structured output, prompt hygiene — a full skill in itself
- **Outcome:** Write three variants of a Forge system prompt, evaluate quality differences systematically

### Lesson 41 — Vector Storage
- **Subject:** What a vector store is, ChromaDB — indexing, storing chunks with metadata, querying by similarity
- **Outcome:** Forge stores all chunk embeddings in ChromaDB and retrieves by natural language query

### Lesson 42 — Retrieval
- **Subject:** Top-k retrieval, metadata filtering by language and repo, hybrid search — dense plus sparse
- **Outcome:** Ask Forge a plain English question, get back the most relevant code chunks with scores

### Lesson 43 — Reranking
- **Subject:** Why first retrieval is not good enough, cross-encoders, reranking strategies, latency tradeoffs
- **Outcome:** Add a reranking step — compare results before and after, measure quality improvement

### Lesson 44 — Context Window Management
- **Subject:** Token limits, what happens when context overflows, summarisation, sliding windows, truncation strategies
- **Outcome:** Handle a query whose retrieved chunks exceed the context limit — gracefully, not by crashing

### Lesson 45 — RAG — Cited Answers
- **Subject:** Assembling the full pipeline — retrieve, rerank, construct prompt, generate answer, cite sources
- **Outcome:** Forge answers a question about a real repo and cites the exact files it used

### Lesson 46 — Evaluation I — Concepts
- **Subject:** Relevance, faithfulness, context precision, context recall, hallucination detection — what good looks like
- **Outcome:** Define and manually score five Forge answers against all evaluation criteria

### Lesson 47 — Evaluation II — Forge's Eval Suite
- **Subject:** Automated evals, ground truth datasets, running evals in CI, interpreting results over time
- **Outcome:** An automated eval suite that scores Forge's RAG pipeline — committed to tests/eval/

---

## Track F — Agents & Orchestration

### Lesson 48 — Agent Concepts
- **Subject:** What makes something an agent — perception, memory, planning, action — vs a pipeline or a chatbot
- **Outcome:** Draw the agent loop for Forge on paper, identify every component before writing a line of code

### Lesson 49 — ReAct and Reasoning Patterns
- **Subject:** Chain of thought, ReAct pattern, tree of thought intuition — how agents reason before acting
- **Outcome:** Trace a ReAct loop manually for a Forge query — reason, act, observe, repeat until done

### Lesson 50 — Tool Design
- **Subject:** Designing tools agents can use reliably — descriptions, parameters, error contracts, granularity choices
- **Outcome:** Design and implement three Forge tools: search_code, get_file, list_repos

### Lesson 51 — Memory Architecture
- **Subject:** Short-term, long-term, episodic, semantic memory — how agents remember across turns and sessions
- **Outcome:** Implement short-term conversation memory and long-term file storage for Forge

### Lesson 52 — Forge Base Agent
- **Subject:** Implementing the agent loop — perceive, plan, call tools, observe results, respond
- **Outcome:** A working base agent that uses retrieval as a tool to answer questions about a repo

### Lesson 53 — Explanation Agent
- **Subject:** Specialist agent design, system prompt scoping, explaining code in plain language, evaluation
- **Outcome:** An agent that explains any function or class from a repo in plain language with examples

### Lesson 54 — Testing Agent
- **Subject:** Generating pytest tests from code, understanding what makes a good test, evaluating test quality
- **Outcome:** An agent that reads a function and writes meaningful, passing pytest tests for it

### Lesson 55 — Refactor Agent
- **Subject:** Code quality analysis, identifying smells, suggesting improvements, generating diffs safely
- **Outcome:** An agent that suggests refactoring improvements with clear reasoning and readable diffs

### Lesson 56 — C# Language Agent
- **Subject:** Language-specific agent tuning, C# idioms, .NET patterns, language-aware retrieval filtering
- **Outcome:** An agent specialised for C# codebases that understands .NET conventions

### Lesson 57 — Agent Evaluation
- **Subject:** How to know if an agent is working — task completion rate, tool use quality, answer faithfulness
- **Outcome:** An evaluation suite that scores each Forge agent on a fixed set of real tasks automatically

### Lesson 58 — Agent Orchestration
- **Subject:** Routing queries to the right agent, multi-agent coordination, shared memory and context passing
- **Outcome:** A router that directs any Forge question to the correct specialist agent automatically

### Lesson 59 — Failure Modes and Recovery
- **Subject:** Agent loops, hallucination mid-task, tool call failures, graceful degradation, circuit breakers
- **Outcome:** Forge handles a deliberately broken tool call without crashing or looping infinitely

### Lesson 60 — Safety and Boundaries
- **Subject:** Prompt injection, jailbreaking, tool access risks, guardrails, what can go wrong with real-world tool use
- **Outcome:** Input validation and output guardrails implemented for every Forge agent

---

## Track G — Production & Portfolio

### Lesson 61 — Infrastructure Security
- **Subject:** Secrets management, API keys in .env, input validation, dependency scanning, never committing credentials
- **Outcome:** Forge passes a dependency scan, all secrets in .env, inputs validated at every boundary

### Lesson 62 — Observability
- **Subject:** Structured logging, tracing agent calls, what to monitor, debugging an agent you cannot see into
- **Outcome:** Every Forge agent call produces structured logs — traceable from query to final answer

### Lesson 63 — Docker and Portability
- **Subject:** Dockerfile, containerising Forge, environment consistency, running locally, multi-stage builds
- **Outcome:** Forge runs in a Docker container — portable, reproducible, no local Python required

### Lesson 64 — CLI Interface
- **Subject:** Typer — commands, arguments, help text, progress bars, making Forge usable from the terminal
- **Outcome:** forge ingest <repo_url> and forge ask <question> work cleanly from the terminal

### Lesson 65 — API Interface
- **Subject:** FastAPI — endpoints, request validation, async handlers, running locally, auto-generated API docs
- **Outcome:** Forge exposes a local HTTP API — ingest and query endpoints fully working and documented

### Lesson 66 — Portfolio Documentation
- **Subject:** Portfolio-quality README, architecture diagram, demo recording, what to highlight to employers and why
- **Outcome:** Forge has a README that tells the story, a clear architecture diagram, and a recorded demo
