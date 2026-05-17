# Forge — Lesson Reference

Full content outline for all 66 lessons.
Each lesson is structured into timed sections totalling one hour.

## How to use this file

**At the end of a lesson:**
1. Find the next lesson below
2. Copy the title, subject, and outcome into NEXT_STEPS.md
3. Update COURSE_STATE.md, LESSON_LOG.md, and QUESTIONS.md
4. Commit and push

**At the start of a session:**
1. Paste the resume prompt into a new chat
2. Copy the full outline for today's lesson into the prompt so the AI knows what to cover and in what order
3. The AI must not move to the next section until the current one is understood and tested

---

## Track A — Workflow & Engineering Foundation

---

### Lesson 01 — Forge Foundation
- **Subject:** GitHub repo creation, folder structure, course state files, first commit and push
- **Outcome:** Forge repo live on GitHub with all course infrastructure committed
- **Freshness check:** Latest Git stable version, GitHub repo creation flow

#### Section 1 — Create the repo on GitHub (10 min)
- Go to github.com, create new repo named forge
- Settings: public, initialise with README, Python .gitignore, MIT licence
- Understand what each setting does and why

#### Section 2 — Clone and inspect (10 min)
- Clone to ~/forge using git clone
- Understand what cloning does — local copy linked to remote
- Inspect what GitHub created: README.md, .gitignore
- Understand what .gitignore does and why Python has a standard one

#### Section 3 — Create folder structure (10 min)
- Create src/, tests/, docs/, agents/ using mkdir
- Add .gitkeep to each — understand why Git ignores empty folders
- Understand what each folder will eventually contain

#### Section 4 — Add course files and commit (15 min)
- Copy all course files into the repo root
- Run git add, git status — read and understand the output before committing
- Write a meaningful commit message — understand what makes a good one
- Push and verify on GitHub

#### Section 5 — Update state files and wrap up (15 min)
- Update COURSE_STATE.md — lesson 01 complete, repo path filled in
- Add first entry to LESSON_LOG.md
- Update NEXT_STEPS.md with Lesson 02 subject and outcome from this file
- Final commit and push — confirm all files visible on GitHub

---

### Lesson 02 — Git Beyond Basics
- **Subject:** Branching, merging, resolving conflicts, reading history, Git as a checkpoint system
- **Outcome:** Create a feature branch, make changes, merge back, read the log cleanly
- **Freshness check:** Current Git best practices for solo developers

#### Section 1 — Why branches exist (10 min)
- The problem branches solve — working on something without breaking what works
- How Forge will use branches: one per lesson, merged when the lesson is done
- Understand HEAD, main, and what a branch actually is under the hood

#### Section 2 — Creating and switching branches (15 min)
- git branch, git checkout, git switch — understand the difference
- Create a branch called lesson-02-practice
- Make a change to README.md on that branch
- Understand that main is unchanged — verify this

#### Section 3 — Merging and understanding the result (15 min)
- Switch back to main, merge the branch
- Read the merge output — understand what fast-forward means
- Delete the merged branch — understand why this is clean practice
- See the result in git log

#### Section 4 — Reading history and resolving conflicts (15 min)
- git log --oneline — reading the commit history clearly
- git diff — comparing versions
- Deliberately create a conflict, understand what it looks like, resolve it manually
- Understand that conflicts are normal, not failures

#### Section 5 — Establish the lesson checkpoint pattern (5 min)
- Agree on the branch-per-lesson pattern for the rest of the course
- Update state files, commit, push

---

## Track B — Python for AI Engineering

---

### Lesson 03 — Python Foundations I
- **Subject:** Python vs C# — syntax, types, variables, functions, comprehensions in depth
- **Outcome:** A Python script that reads filenames and filters by extension using comprehensions
- **Freshness check:** Current Python stable version

#### Section 1 — Python vs C# mental model (10 min)
- Interpreted vs compiled — what this means in practice on a Mac
- Dynamic typing — no type declarations required, but type hints available
- Indentation as syntax — not style, it is the structure
- No semicolons, no braces — what replaces them and why

#### Section 2 — Types, variables, and functions (15 min)
- int, float, str, bool, None — and how they differ from C# equivalents
- def — writing functions, default arguments, keyword arguments
- Return values — Python always returns something (None if not specified)
- The difference between print() and return — a common early confusion

#### Section 3 — Lists and dicts (10 min)
- List: ordered, mutable, zero-indexed — similar to C# List<T>
- Dict: key-value pairs — similar to Dictionary<K,V>
- Common operations: append, pop, get, keys, values, items

#### Section 4 — Comprehensions in depth (20 min)
- List comprehension: [x for x in items if condition]
- Dict comprehension: {k: v for k, v in pairs}
- Why this matters: ML and AI code is full of comprehensions — fluency is essential
- Build the file filter script using comprehensions — filter a list of filenames by extension
- Test it with pytest

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 04 — Python Foundations II
- **Subject:** Classes, dataclasses, type hints, generators, iterators, lazy evaluation
- **Outcome:** A typed CodeFile dataclass and a generator that yields files one at a time
- **Freshness check:** Python dataclasses and generator docs for current best practice

#### Section 1 — Classes vs dataclasses (15 min)
- A class in Python vs C# — same concept, different syntax
- __init__, self — what they are and why they exist
- dataclass decorator — eliminates boilerplate, auto-generates __init__, __repr__, __eq__
- When to use a class vs a dataclass — dataclass for data containers, class for behaviour

#### Section 2 — Type hints (10 min)
- Python is dynamically typed but type hints make code readable and tooling useful
- str, int, float, bool, list[str], dict[str, int], Optional[str]
- Type hints do not enforce at runtime — they are for humans and tools, not Python itself
- Add type hints to the CodeFile dataclass

#### Section 3 — Iterators (10 min)
- What an iterator is — an object that produces values one at a time
- Why for loops work on lists, files, ranges — they are all iterators under the hood
- The difference between a list (all values in memory) and an iterator (one at a time)

#### Section 4 — Generators (20 min)
- yield — what it does, how it differs from return
- A generator function produces an iterator without storing everything in memory
- Why ML pipelines use generators — datasets are often too large to load at once
- Write a generator that yields CodeFile objects from a directory one at a time
- Test it — verify it yields the right objects in the right order

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 05 — Python Project Structure
- **Subject:** uv, virtual environments, pyproject.toml, package imports, logging, config with .env
- **Outcome:** Forge is a proper Python package — importable, configured, logging to console
- **Freshness check:** Latest uv docs and python-dotenv version

#### Section 1 — Why project structure matters (5 min)
- Scripts vs packages — the difference and when each is appropriate
- Forge is a package: importable, testable, deployable
- What makes a directory a Python package: __init__.py

#### Section 2 — uv and virtual environments (15 min)
- What a virtual environment is — isolated Python and dependencies per project
- Why this matters: different projects need different library versions
- Install uv, create a venv, activate it, understand what activation does
- Install a package with uv, verify it is isolated to this project

#### Section 3 — pyproject.toml (15 min)
- The modern Python project configuration file
- name, version, dependencies, dev dependencies
- How uv uses it — installing all dependencies from the file
- Add pytest and python-dotenv as dependencies

#### Section 4 — Package imports and logging (15 min)
- How Python finds modules — the import system
- Relative vs absolute imports — which to use in Forge and why
- Set up logging with a consistent format across all Forge modules
- Log levels: DEBUG, INFO, WARNING, ERROR — when to use each

#### Section 5 — Config with .env (10 min)
- Load environment variables from .env using python-dotenv
- .env is never committed — verify .gitignore covers it
- Access config values safely — what to do when a required value is missing
- Update state files, commit, push

---

### Lesson 06 — File I/O and Data Formats
- **Subject:** Reading and writing files, pathlib, JSON, CSV, handling encodings
- **Outcome:** A script that reads all .py and .cs files from a local folder safely
- **Freshness check:** Python pathlib and json module current docs

#### Section 1 — pathlib (15 min)
- The modern way to work with file paths in Python — replaces os.path
- Path objects — creating, joining, checking existence, listing directories
- Path.glob() and Path.rglob() — finding files by pattern recursively
- Why pathlib is better than string concatenation for paths

#### Section 2 — Reading files safely (15 min)
- open() with context managers — why with is always used
- Read modes: r, rb, r+ — when to use each
- Encoding — what it is, why it matters for code files
- Files from GitHub can have any encoding — always specify UTF-8, handle errors gracefully

#### Section 3 — JSON (15 min)
- json.loads() and json.dumps() — reading and writing JSON strings
- json.load() and json.dump() — reading and writing JSON files
- Write Forge's ingested file data to JSON and read it back — verify round-trip correctness

#### Section 4 — CSV and building the file reader (10 min)
- csv module — reading and writing tabular data
- When CSV is appropriate vs JSON vs SQLite
- Build the complete file reader: find all .py and .cs files, read them, handle encoding errors
- Test every code path including the error handling

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 07 — Error Handling and Resilience
- **Subject:** Exceptions, try/except patterns, retries with exponential backoff, defensive coding
- **Outcome:** A resilient file reader that retries on failure and logs errors without crashing
- **Freshness check:** tenacity library version for retry patterns

#### Section 1 — Exceptions in Python vs C# (10 min)
- The exception hierarchy — BaseException, Exception, and common subclasses
- try, except, else, finally — what each block does and when it runs
- Catching specific exceptions vs bare except — why bare except is always wrong
- Raising exceptions: raise, raise from — preserving the original cause

#### Section 2 — Designing for failure (15 min)
- The difference between expected failures (file not found) and unexpected failures (bugs)
- What to catch, what to let propagate, what to log
- Writing functions that signal failure cleanly
- Apply this thinking to Forge's file reader

#### Section 3 — Exponential backoff and retries (20 min)
- Why network calls fail transiently — rate limits, timeouts, temporary errors
- The backoff pattern — wait longer between each retry
- Install tenacity, understand @retry decorator and its parameters
- Apply retry logic to a simulated failing function — test that it retries correctly
- Understand when not to retry: some errors are permanent

#### Section 4 — Defensive coding patterns (10 min)
- Validate inputs at function boundaries — fail fast with clear messages
- Guard clauses — check preconditions at the top of a function
- Never silently swallow exceptions — always log at minimum
- Apply these patterns to the file reader

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 08 — Decorators and Functional Patterns
- **Subject:** How decorators work, writing your own, map/filter, closures
- **Outcome:** A @retry and @timed decorator applied to real Forge functions
- **Freshness check:** functools docs and current decorator patterns

#### Section 1 — Functions as first-class objects (10 min)
- In Python, functions are objects — they can be passed, stored, returned
- This is the foundation of decorators and functional programming
- Compare to C# delegates and Func<T> — same concept, different syntax

#### Section 2 — Closures (10 min)
- A closure is a function that remembers variables from the scope where it was defined
- Why this matters: decorators are built on closures
- Write a simple closure — a counter factory
- Understand the scope chain: local, enclosing, global, built-in (LEGB)

#### Section 3 — Writing decorators (20 min)
- A decorator is a function that takes a function and returns a new function
- The wrapper pattern — wrapping the original call with extra behaviour
- functools.wraps — preserving the original function's name and docstring
- Write @timed — measures and logs how long any function takes
- Write @retry — retries a function on exception up to n times
- Apply both to Forge functions and test them

#### Section 4 — map, filter, and functional patterns (15 min)
- map() — apply a function to every item in an iterable
- filter() — keep only items where a function returns True
- Why comprehensions are usually preferred over map/filter in Python
- functools.reduce, functools.partial — brief but important

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 09 — Async and Concurrency
- **Subject:** async/await, event loops, aiohttp, running concurrent API calls
- **Outcome:** Fetch three GitHub files concurrently — measure speed vs sequential
- **Freshness check:** Latest asyncio and aiohttp docs

#### Section 1 — Why concurrency matters for agents (10 min)
- An agent often needs to make 5-10 API calls to answer one question
- Sequential: each call waits for the last — slow
- Concurrent: calls run simultaneously — fast
- The difference between concurrency and parallelism

#### Section 2 — async and await (20 min)
- async def — declaring a coroutine function
- await — suspending execution until an awaitable completes
- asyncio.run() — the entry point for async code
- The event loop — what it is, how it schedules coroutines
- Write a simple async function, understand what happens when you await it

#### Section 3 — Running tasks concurrently (15 min)
- asyncio.gather() — run multiple coroutines concurrently, collect results
- asyncio.create_task() — schedule a coroutine without waiting immediately
- The difference between sequential await and gather
- Demonstrate the speed difference with a timed example

#### Section 4 — aiohttp for async HTTP (10 min)
- requests is synchronous — cannot be used with async
- aiohttp is the async equivalent
- Fetch three GitHub files concurrently using aiohttp and gather
- Measure the time saved vs sequential requests

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 10 — NumPy Fundamentals
- **Subject:** Arrays, shapes, dtypes, broadcasting, vectorised operations
- **Outcome:** Implement vector operations and verify with NumPy
- **Freshness check:** Latest NumPy version and any API changes

#### Section 1 — Why NumPy exists (10 min)
- Python lists are flexible but slow for numerical computation
- NumPy arrays are fixed-type, stored in contiguous memory — orders of magnitude faster
- Nearly every ML library is built on NumPy arrays
- Understanding NumPy is prerequisite to understanding anything in the ML stack

#### Section 2 — Arrays, shapes, and dtypes (20 min)
- np.array() — creating arrays from lists
- shape — the dimensions of an array
- dtype — the data type of every element
- reshape, transpose — changing array structure without changing data
- zeros, ones, arange, linspace — creating arrays from scratch

#### Section 3 — Indexing and slicing (10 min)
- 1D indexing — same as Python lists
- 2D indexing: array[row, col]
- Slicing: array[1:4, :]
- Boolean indexing — selecting elements where a condition is true

#### Section 4 — Vectorised operations and broadcasting (15 min)
- Element-wise operations — add, multiply, compare without loops
- Why this is faster — operations happen in compiled C code
- Broadcasting — how NumPy handles operations on arrays of different shapes
- Implement vector addition and scaling using NumPy, verify against manual calculation

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 11 — HTTP Fundamentals
- **Subject:** How HTTP works — requests, responses, status codes, headers, authentication
- **Outcome:** Make authenticated and unauthenticated requests, handle errors by status code
- **Freshness check:** Latest httpx and requests library versions

#### Section 1 — The request/response cycle (10 min)
- HTTP is the language of the web — every API uses it
- A request: method, URL, headers, body
- A response: status code, headers, body
- The most important methods: GET, POST, PUT, DELETE

#### Section 2 — Status codes (10 min)
- 2xx: success — 200 OK, 201 Created
- 3xx: redirects
- 4xx: client errors — 400, 401, 403, 404, 429
- 5xx: server errors — 500, 503
- Handle each category differently — not all errors should be retried

#### Section 3 — Headers and authentication (15 min)
- Headers carry metadata — Content-Type, Accept, Authorization
- Bearer token authentication — how GitHub and OpenAI work
- Never hardcode tokens — always from environment variables

#### Section 4 — Making requests in Python (20 min)
- Install httpx — the modern, async-capable HTTP client
- Make a GET request, read the response, check the status code
- Make an authenticated request to a public API
- Handle connection errors, timeouts, and bad status codes
- Write tests for each response scenario using mocks

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

### Lesson 12 — Testing Fundamentals
- **Subject:** pytest in depth — what to test, test structure, fixtures, parametrize, running subsets, reading failures
- **Outcome:** A proper test suite for a small example module, all passing
- **Freshness check:** Latest pytest version and fixture best practices

#### Section 1 — Why testing matters for this course (10 min)
- Every piece of Forge code will be tested as it is written — not after
- What a test actually is: a function that asserts expected behaviour
- The cost of not testing in an AI system — silent failures, wrong answers, broken pipelines

#### Section 2 — Writing the first tests (15 min)
- Install pytest, write a trivial passing test, run it
- Read the output — understand what passing and failing look like
- Write a deliberately failing test, read the failure output carefully
- Understand what pytest is actually doing when it runs

#### Section 3 — Fixtures (15 min)
- What a fixture is — shared setup that tests can depend on
- Write a fixture that provides a sample data object
- Use it across multiple tests — understand why this is better than repeating setup
- Understand fixture scope: function, module, session

#### Section 4 — Parametrize and running subsets (15 min)
- parametrize — testing the same function with multiple inputs in one declaration
- Running a single test file, a single test, all tests matching a keyword
- Understanding marks — skip, xfail
- Reading a test summary — what to look at first when something fails

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 13 — Testing for AI Code
- **Subject:** Mocking API calls, handling non-deterministic output, integration vs unit tests
- **Outcome:** Mock an LLM API call in a test — no real API required, fully reproducible
- **Freshness check:** Latest pytest-mock and responses library versions

#### Section 1 — The problem with testing AI code (10 min)
- LLM output is non-deterministic — the same input rarely gives the same output
- API calls cost money and can fail — tests cannot depend on live APIs
- How do you test something you cannot fully predict?

#### Section 2 — Mocking with pytest-mock (20 min)
- What a mock is — a fake object that behaves like the real thing
- Install pytest-mock, mock a simple function, verify it was called correctly
- Mock an OpenAI API call — return a fixed fake response
- Understand why this makes tests fast, free, and reproducible

#### Section 3 — Testing non-deterministic output (15 min)
- Strategies: test structure not content, test boundaries, test failure modes
- Write a test that verifies an LLM response has the right shape without checking exact words
- Test that a function handles an empty response gracefully

#### Section 4 — Unit vs integration tests (10 min)
- Unit: one function in isolation, mocked dependencies
- Integration: multiple real components working together
- Where each belongs in Forge's test suite
- The rule: unit tests run always, integration tests run explicitly

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push
---

### Lesson 14 — GitHub API I
- **Subject:** GitHub REST API — fetching repo tree, file metadata, authentication, rate limits
- **Outcome:** Forge fetches and prints the full file tree of any public GitHub repo
- **Freshness check:** GitHub REST API v3 current endpoints and rate limit rules

#### Section 1 — The GitHub REST API (10 min)
- What the API provides — repos, files, commits, users
- Authentication: unauthenticated (60 req/hr) vs authenticated (5000 req/hr)
- Setting up a GitHub personal access token — store in .env immediately

#### Section 2 — Fetching repo metadata (15 min)
- GET /repos/{owner}/{repo} — the repo object
- Parse the response — extract name, description, default branch, language
- Handle 404 (not found) and 403 (private) explicitly
- Write the first version of github_client.py

#### Section 3 — Fetching the repo tree (20 min)
- GET /repos/{owner}/{repo}/git/trees/{sha}?recursive=1
- Understanding the tree structure — blobs (files) vs trees (directories)
- Filter to only files (type == "blob")
- Extract path, size, sha for each file
- Test with a real public repo

#### Section 4 — Rate limit handling (10 min)
- Reading rate limit headers: X-RateLimit-Remaining, X-RateLimit-Reset
- Log remaining requests on every call
- Raise a clear error when the limit is hit — include when it resets
- Test with a mock response

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 15 — GitHub API II
- **Subject:** Fetching file contents, filtering by extension, pagination, encoding edge cases
- **Outcome:** Forge downloads all .py and .cs files from a public repo into structured objects
- **Freshness check:** GitHub API pagination docs and content endpoint

#### Section 1 — Fetching file contents (15 min)
- GET /repos/{owner}/{repo}/contents/{path}
- Response includes content as base64-encoded string — decode it
- Size limit: files over 1MB require the blob endpoint
- Handle both cases

#### Section 2 — Filtering by extension (10 min)
- Filter the tree to only files matching target extensions
- Make the extension list configurable from .env
- Log what was filtered and why

#### Section 3 — Pagination (15 min)
- Some GitHub endpoints paginate — large repos return results in pages
- Reading the Link header — next, last, first, prev
- Implement a paginator that follows next links until exhausted

#### Section 4 — Encoding edge cases and completing the pipeline (15 min)
- Not all code files are UTF-8 — detect encoding errors, log them, skip gracefully
- Never crash on a single bad file — log and continue
- Complete the ingestion pipeline: fetch tree → filter → download → decode → store as CodeFile objects

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 16 — SQL with Python
- **Subject:** SQLite in Python, schema design, inserting and querying, storing file metadata
- **Outcome:** Forge stores every ingested file's metadata in SQLite — queryable by repo, language, path
- **Freshness check:** Python sqlite3 docs and current SQLAlchemy version

#### Section 1 — Why SQL for metadata (10 min)
- Embeddings go in a vector store — metadata (repo, path, language, size) belongs in SQL
- SQL lets Forge filter before retrieving — only search .cs files from this repo
- SQLite is file-based — no server needed, perfect for local development

#### Section 2 — Schema design (15 min)
- Design the files table: id, repo_url, path, language, size_bytes, sha, ingested_at
- Design the repos table: id, url, name, default_branch, last_ingested
- Foreign keys — files belong to repos

#### Section 3 — Creating the database and inserting records (20 min)
- Connect to SQLite, create tables if not exists
- Insert a CodeFile record — map the dataclass to SQL columns
- Upsert pattern — insert or update if the file has changed (check sha)
- Use parameterised queries always — understand why string formatting is dangerous

#### Section 4 — Querying (10 min)
- SELECT with WHERE, ORDER BY, LIMIT
- Query by repo, by language, by path pattern
- Return results as dataclass instances — not raw tuples
- Write database.py with full test coverage

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push — Track B complete

---

## Track C — Maths for ML & AI

---

### Lesson 17 — Vectors
- **Subject:** What a vector is, direction vs magnitude, geometric intuition, meaning as numbers
- **Outcome:** Draw and reason about vectors by hand, understand what an embedding vector represents
- **Freshness check:** Pure maths — no external dependencies

#### Section 1 — From arrays to vectors (15 min)
- A C# array is just numbers — no geometric meaning implied
- A vector is numbers with a relationship — they jointly describe something
- Direction and magnitude — the two properties that define a vector
- The arrow from origin to point — drawing and interpreting vectors in 2D

#### Section 2 — Vectors are not positions (10 min)
- Moving the arrow without changing direction or magnitude — still the same vector
- This is non-obvious and important: vectors describe displacement, not location
- Why this matters for embeddings

#### Section 3 — From geometry to meaning (20 min)
- Toy example: a 2D vector where each dimension captures an aspect of code meaning
- Two similar code snippets would have similar values — similar vectors
- Scale to 1536 dimensions — each dimension captures some aspect of meaning
- This is what an embedding is: a point in high-dimensional meaning space

#### Section 4 — Reasoning about similarity (10 min)
- Two vectors pointing the same direction — similar meaning
- Two vectors pointing opposite directions — opposite meaning
- Two vectors at 90 degrees — orthogonal, unrelated
- Why direction matters more than length

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 18 — Vector Operations
- **Subject:** Addition, subtraction, scalar multiplication, linear combinations
- **Outcome:** Implement vector operations from scratch, verify with NumPy
- **Freshness check:** NumPy array operation docs

#### Section 1 — Vector addition (15 min)
- Add corresponding components: [1,2] + [3,4] = [4,6]
- Geometric interpretation — placing vectors tip to tail
- What does adding two embedding vectors mean?
- Implement add_vectors() from scratch

#### Section 2 — Scalar multiplication (10 min)
- Multiply every component by a scalar
- Geometric interpretation — stretching or shrinking, direction unchanged
- Negative scalar — reverses direction
- Implement scale_vector()

#### Section 3 — Subtraction and the difference vector (10 min)
- Subtract corresponding components
- The famous word2vec result: king - man + woman ≈ queen
- What this means: directions in meaning space

#### Section 4 — Linear combinations and verification (20 min)
- A linear combination: scaling and adding multiple vectors
- Why this is fundamental — neural network layers compute linear combinations
- Implement all operations in src/maths.py with full type hints
- Verify every result matches NumPy — test with known values

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 19 — Matrices
- **Subject:** What a matrix is, shapes, transpose, why neural networks are matrix operations
- **Outcome:** Represent a dataset as a matrix, transpose it, understand each dimension
- **Freshness check:** Pure maths — no external dependencies

#### Section 1 — From vector to matrix (15 min)
- A matrix is a grid of numbers — rows and columns
- Shape notation: (3, 4) means 3 rows, 4 columns
- A vector is a special case: (n, 1) or (1, n)
- Rows often represent examples, columns represent features — the ML convention

#### Section 2 — Representing data as a matrix (15 min)
- Take five CodeFile objects — represent as a matrix: each row is a file, each column is a feature
- This is exactly how ML models see data
- Understand what each cell means — row 2, column 3 is the third feature of the second file

#### Section 3 — Transpose (15 min)
- Flip rows and columns: a (3,4) matrix becomes (4,3)
- Why transpose is needed constantly in ML — aligning dimensions for multiplication
- Implement transpose from scratch, verify with NumPy

#### Section 4 — Identity matrix and scalar multiplication (10 min)
- The identity matrix — multiplying by it changes nothing
- Scalar multiplication of a matrix — multiply every element
- Why these appear in ML derivations and papers

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 20 — Matrix Multiplication
- **Subject:** The operation step by step, geometric meaning, why it is the core of deep learning
- **Outcome:** Multiply two matrices by hand and with NumPy — verify they match
- **Freshness check:** NumPy matmul docs

#### Section 1 — The operation (20 min)
- Row of A dot column of B gives one element of the result
- Shape rule: (m,k) times (k,n) gives (m,n) — the inner dimensions must match
- Work through a (2,3) times (3,2) multiplication step by step by hand
- Understand why the order matters — AB ≠ BA in general

#### Section 2 — Why this is everywhere in ML (15 min)
- A neural network layer: output = weights_matrix @ input_vector
- An embedding lookup: take a row from a matrix
- Attention in transformers: three matrix multiplications per head
- Every forward pass is a sequence of matrix multiplications

#### Section 3 — Verify with NumPy (10 min)
- np.matmul() and the @ operator
- Verify the hand calculation matches NumPy exactly

#### Section 4 — Batch operations (10 min)
- In practice, ML processes many examples simultaneously — batches
- Batched matrix multiplication: (batch, m, k) times (k, n) gives (batch, m, n)
- This is why GPU acceleration matters — matrix multiplication is parallelisable

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 21 — Dot Product
- **Subject:** The calculation, geometric meaning, relationship to matrix multiplication
- **Outcome:** Implement dot_product() in src/maths.py with full tests
- **Freshness check:** Pure maths with NumPy verification

#### Section 1 — The calculation (10 min)
- Multiply corresponding elements, sum the results
- [1,2,3] · [4,5,6] = 4+10+18 = 32
- The dot product is a scalar — a single number, not a vector
- Relationship to matrix multiplication: it is the core operation inside it

#### Section 2 — Geometric interpretation (20 min)
- The dot product measures how much two vectors align
- High positive result — pointing the same direction
- Zero result — perpendicular, no alignment
- Negative result — pointing away from each other
- Work through examples in 2D, visualise the angles

#### Section 3 — The problem with raw dot product (10 min)
- Sensitive to magnitude — a longer vector produces a bigger dot product
- For embedding similarity we want to measure direction only, not length
- This is why cosine similarity exists — the next lesson

#### Section 4 — Implement and test (15 min)
- Implement dot_product(a, b) in src/maths.py
- Validate input lengths match — raise clearly
- Write tests: basic, identical vectors, orthogonal vectors (expect 0), mismatched lengths
- Verify results match NumPy np.dot()

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 22 — Cosine Similarity
- **Subject:** Normalisation, why direction beats magnitude, formula derived from dot product
- **Outcome:** Implement cosine_similarity() in src/maths.py, test against known pairs
- **Freshness check:** scikit-learn cosine_similarity for verification

#### Section 1 — The magnitude problem revisited (10 min)
- Recall: dot product is sensitive to vector length
- A long code file and a short code file can mean the same thing — we want to detect that
- Normalisation: divide a vector by its magnitude to get a unit vector (length = 1)

#### Section 2 — Vector magnitude and normalisation (15 min)
- Magnitude: square root of sum of squares
- Unit vector: divide every element by the magnitude — now length is 1
- Implement magnitude() and normalise() in src/maths.py
- Verify: normalised vector dot itself = 1

#### Section 3 — Cosine similarity formula (15 min)
- cos(θ) = (A · B) / (|A| * |B|)
- Result is always between -1 and 1
- 1 = identical direction, 0 = orthogonal, -1 = opposite
- Implement cosine_similarity() using the components already written

#### Section 4 — Test with known pairs (15 min)
- Create hand-crafted vectors for similar and dissimilar pairs
- Compute cosine similarity, verify scores match intuition
- Verify results match scikit-learn's cosine_similarity

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 23 — Probability and Distributions
- **Subject:** Probability, conditional probability, Bayes intuition, distributions
- **Outcome:** Understand what a model means when it assigns 0.9 probability to a token
- **Freshness check:** Pure maths — no external dependencies

#### Section 1 — Probability basics (15 min)
- Probability as a number between 0 and 1
- The sum rule: probabilities of all outcomes must sum to 1
- Joint probability: P(A and B)
- Marginal probability: P(A) regardless of B

#### Section 2 — Conditional probability (15 min)
- P(A|B): the probability of A given that B has already happened
- A language model predicts P(next token | all previous tokens)
- Work through a simple example: predicting the next word in a sentence

#### Section 3 — Bayes' theorem intuition (15 min)
- P(A|B) = P(B|A) * P(A) / P(B)
- The intuition: updating beliefs when new evidence arrives
- Work through a concrete example — understand the update logic, not just the formula

#### Section 4 — Distributions and what they mean for LLMs (10 min)
- A distribution assigns a probability to every possible outcome
- A language model outputs a distribution over the entire vocabulary at each step
- Temperature: scaling logits before softmax — affects the sharpness of the distribution

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 24 — Statistics Fundamentals
- **Subject:** Mean, variance, standard deviation, normal distribution in depth
- **Outcome:** Compute and interpret stats on real data from Forge's database
- **Freshness check:** NumPy and scipy.stats current docs

#### Section 1 — Mean and variance (15 min)
- Mean: the centre of mass of a distribution
- Variance: average squared distance from the mean — measures spread
- Standard deviation: square root of variance — same units as the data
- Work through calculations by hand on a small dataset

#### Section 2 — The normal distribution (20 min)
- Shape, parameters (mean and standard deviation), the 68-95-99.7 rule
- Why it appears everywhere — the central limit theorem intuition
- Why ML assumes normality in so many places — and when that assumption breaks

#### Section 3 — Apply to Forge data (15 min)
- Load file sizes from Forge's SQLite database into NumPy
- Compute mean, variance, std — interpret what they mean about the codebase
- Plot a histogram — does the distribution look normal?

#### Section 4 — Outliers and robust statistics (5 min)
- Mean is sensitive to outliers — one huge file skews everything
- Median and percentiles are more robust
- Apply to Forge: identify outlier files

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 25 — Information Theory Basics
- **Subject:** Entropy, cross-entropy, KL divergence
- **Outcome:** Compute entropy by hand, understand why cross-entropy is used as a loss function
- **Freshness check:** Pure maths — no external dependencies

#### Section 1 — What is information? (10 min)
- Information is the surprise in an event — rare events carry more information
- A fair coin carries maximum uncertainty
- A loaded coin carries almost no uncertainty — you always know the outcome

#### Section 2 — Entropy (20 min)
- H(p) = -sum(p(x) * log2(p(x))) for all x
- The average surprise across all outcomes
- Compute entropy for: fair coin, loaded coin, uniform distribution over 4 outcomes
- High entropy = high uncertainty

#### Section 3 — Cross-entropy (20 min)
- H(p, q) = -sum(p(x) * log(q(x)))
- When p is the true distribution and q is the model's prediction
- Cross-entropy is minimised when q matches p exactly — this is training
- This is why cross-entropy is the standard loss function for classification

#### Section 4 — KL divergence (5 min)
- KL(p||q) = H(p,q) - H(p)
- Always >= 0, equals 0 only when p = q
- Appears in VAEs, RLHF, and many other places — brief intuition only

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 26 — Loss Functions and Optimisation
- **Subject:** MSE, cross-entropy loss, minimising loss geometrically, gradient descent intuition
- **Outcome:** Plot a loss curve, find the minimum by hand and by gradient step
- **Freshness check:** matplotlib current version

#### Section 1 — What loss is (10 min)
- Loss measures how wrong the model is on a given example
- The goal of training is to minimise average loss across all examples
- Loss is a function of the model's parameters — changing parameters changes loss

#### Section 2 — Mean squared error (15 min)
- MSE = mean of (prediction - truth)^2
- Used for regression — predicting a continuous value
- Why squared: penalises large errors more than small ones
- Compute MSE for a set of predictions by hand

#### Section 3 — Cross-entropy loss (10 min)
- Used for classification — predicting a category
- Minimising cross-entropy means making the model's distribution match the true distribution
- Why this is the right loss for language models

#### Section 4 — Gradient descent intuition with plots (20 min)
- Draw a loss curve — a bowl shape with a minimum
- The gradient at any point is the slope
- Move in the opposite direction of the gradient — downhill
- Step size (learning rate): too large = overshoot, too small = slow
- Plot a 1D loss function in matplotlib, manually take gradient steps, watch convergence

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 27 — Gradients and Backpropagation
- **Subject:** Partial derivatives, chain rule intuition, how gradients flow through a network
- **Outcome:** Trace backpropagation through a two-layer network by hand
- **Freshness check:** Pure maths — no external dependencies

#### Section 1 — Partial derivatives (15 min)
- A function of multiple variables: loss depends on many parameters
- Partial derivative: how much does f change if we nudge just one parameter?
- Compute partial derivatives of simple functions by hand

#### Section 2 — The chain rule (15 min)
- Composing functions: f(g(x))
- Chain rule: df/dx = (df/dg) * (dg/dx) — derivatives multiply through the chain
- This is the entire mathematical basis of backpropagation
- Work through a two-function chain by hand

#### Section 3 — Forward pass (10 min)
- A two-layer network: input → layer 1 → layer 2 → loss
- Forward pass: compute the output and the loss
- Track every intermediate value — needed for the backward pass

#### Section 4 — Backward pass (15 min)
- Work backwards through the network using the chain rule
- Compute the gradient of loss with respect to every weight
- The complete picture: forward computes loss, backward computes gradients, optimiser updates weights

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push — Track C complete

---

## Track D — Data & Classical ML

---

### Lesson 28 — DataFrames I
- **Subject:** Pandas — loading, inspecting, indexing, selecting, basic operations
- **Outcome:** Load Forge's SQLite metadata into a DataFrame, inspect and filter it
- **Freshness check:** Latest pandas version and docs

#### Section 1 — What pandas is and why (10 min)
- pandas is the standard library for tabular data in Python
- A DataFrame is a table — rows are records, columns are attributes
- Similar to a SQL result set or a C# DataTable
- When to use pandas vs SQL

#### Section 2 — Loading data (15 min)
- pd.read_csv(), pd.read_json(), pd.read_sql()
- Load Forge's SQLite metadata using pd.read_sql()
- Inspect: df.head(), df.tail(), df.info(), df.describe()

#### Section 3 — Indexing and selecting (20 min)
- df['column'] — single column (Series)
- df[['col1', 'col2']] — multiple columns (DataFrame)
- df.loc and df.iloc — label and integer based indexing
- Boolean indexing: df[df['language'] == 'Python']

#### Section 4 — Basic operations (10 min)
- value_counts(), sort_values(), nunique()
- Apply to Forge data: how many files per language, largest files, most common repos

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 29 — DataFrames II
- **Subject:** Cleaning, transforming, handling missing data, merging, groupby
- **Outcome:** Clean and transform Forge's metadata — remove duplicates, fill gaps, group by language
- **Freshness check:** pandas cleaning and groupby docs

#### Section 1 — Missing data (15 min)
- isnull(), notnull() — detecting missing values
- fillna() — replacing missing values
- dropna() — removing rows with missing values
- When to fill vs drop

#### Section 2 — Cleaning and transforming (20 min)
- drop_duplicates(), rename(), astype()
- str accessor: lower(), strip(), contains()
- Apply to Forge: normalise file paths, lowercase language names

#### Section 3 — Merging DataFrames (10 min)
- pd.merge() — combining on a shared key
- merge types: inner, left, right, outer
- Merge Forge's files DataFrame with a repos DataFrame

#### Section 4 — groupby (10 min)
- Group rows by a column, then apply an aggregation
- df.groupby('language').agg({'size_bytes': ['mean', 'sum', 'count']})
- Apply to Forge: file counts and average sizes per language per repo

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 30 — Data Visualisation
- **Subject:** matplotlib, seaborn — distributions, histograms, scatter plots, visual EDA
- **Outcome:** Visualise Forge's corpus — file size distribution, language breakdown, repo comparison
- **Freshness check:** Latest matplotlib and seaborn versions

#### Section 1 — Why visualise (5 min)
- Numbers alone hide patterns — plots reveal them
- Before any modelling, always visualise the data

#### Section 2 — matplotlib basics (15 min)
- The figure/axes model
- plt.plot(), plt.scatter(), plt.bar(), plt.hist()
- Labels, titles, legends — every plot needs them

#### Section 3 — Histograms and distributions (15 min)
- Plot the distribution of file sizes
- Log scale for skewed data
- Overlay a normal distribution — see how far the data deviates

#### Section 4 — Seaborn for richer plots (20 min)
- sns.countplot() — language breakdown
- sns.boxplot() — file size distribution by language
- sns.heatmap() — correlation between numerical features
- Apply all three to Forge's metadata

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 31 — Features and Feature Engineering
- **Subject:** What features are, encoding, scaling, selection — metadata into ML inputs
- **Outcome:** Engineer features from Forge's code files — line count, function count, comment ratio
- **Freshness check:** scikit-learn preprocessing docs

#### Section 1 — What features are (10 min)
- A feature is a measurable property of an example
- ML models can only work with numbers — everything must be numeric
- Feature engineering is often more impactful than model choice

#### Section 2 — Extracting features from code (20 min)
- Count lines, blank lines, comment lines, function definitions, class definitions
- Compute ratios: comment ratio, function density
- Write feature_extractor.py — test with known files

#### Section 3 — Encoding categorical features (15 min)
- One-hot encoding: create a binary column for each category
- Ordinal encoding: assign integers — only when there is genuine order
- Use scikit-learn's OneHotEncoder

#### Section 4 — Scaling (10 min)
- Features on different scales confuse many ML algorithms
- StandardScaler: zero mean, unit variance
- MinMaxScaler: scale to [0, 1]
- When scaling matters and when it does not

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 32 — Classification
- **Subject:** Classification algorithms, train/test split, scikit-learn, predictions
- **Outcome:** Train a classifier that predicts programming language from code features
- **Freshness check:** Latest scikit-learn version and classifier docs

#### Section 1 — What classification is (10 min)
- Given features, predict which category an example belongs to
- Binary vs multiclass
- The scikit-learn interface: fit(), predict(), score()

#### Section 2 — Train/test split (15 min)
- Why we split: models tested on training data appear better than they are
- train_test_split() — shuffle and split
- Stratification: ensure each class is proportionally represented

#### Section 3 — Training a classifier (20 min)
- Start with RandomForestClassifier — robust, few hyperparameters
- fit(X_train, y_train) — train the model
- predict(X_test) — make predictions
- Compare predictions to true labels

#### Section 4 — Basic evaluation and iteration (10 min)
- accuracy_score() — fraction of correct predictions
- Understand when accuracy is misleading — imbalanced classes
- Try a second model (LogisticRegression) — compare

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 33 — Regression
- **Subject:** Linear regression, when to use it, fitting, interpreting coefficients
- **Outcome:** Predict file complexity from structural features, interpret what the model learned
- **Freshness check:** scikit-learn LinearRegression docs

#### Section 1 — Classification vs regression (10 min)
- Classification: predicting a category
- Regression: predicting a continuous number
- Define a complexity score for Forge files

#### Section 2 — Linear regression (20 min)
- y = w1*x1 + w2*x2 + ... + b — a weighted sum of features
- Fitting: find the weights that minimise MSE
- Fit LinearRegression on Forge features

#### Section 3 — Interpreting coefficients (20 min)
- Each weight tells you how much that feature contributes
- Positive weight: more of this → higher predicted value
- Which features matter most? — sort by absolute weight value
- Use C# knowledge to sanity check the model's conclusions

#### Section 4 — Residual analysis (5 min)
- Residual = predicted - actual
- Plot residuals — should be random noise around zero
- Patterns in residuals reveal model limitations

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 34 — Model Evaluation
- **Subject:** Precision, recall, F1, confusion matrices, ROC curves
- **Outcome:** Fully evaluate the language classifier with all metrics plotted
- **Freshness check:** scikit-learn metrics docs

#### Section 1 — Why accuracy is not enough (10 min)
- Imbalanced classes: 95% Python → always predict Python = 95% accuracy, useless model
- Precision: of the times we predicted Python, how often were we right?
- Recall: of all actual Python files, how many did we find?
- The precision-recall tradeoff

#### Section 2 — Confusion matrix (15 min)
- Predicted class vs actual class
- True positives, true negatives, false positives, false negatives
- Plot with seaborn heatmap — which languages are confused with each other and why?

#### Section 3 — F1 score (10 min)
- Harmonic mean of precision and recall
- F1 = 2 * (precision * recall) / (precision + recall)
- Macro vs weighted F1 — important for multiclass problems

#### Section 4 — ROC curves (20 min)
- ROC: plots true positive rate vs false positive rate
- AUC: Area Under the Curve — 1.0 is perfect, 0.5 is random
- Plot ROC for each language class — one vs rest
- AUC is threshold-independent — a fundamental advantage over accuracy

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 35 — Overfitting, Underfitting, Cross-Validation
- **Subject:** Bias/variance tradeoff, k-fold cross-validation, regularisation intuition
- **Outcome:** Demonstrate overfitting on a toy dataset, fix it with cross-validation
- **Freshness check:** scikit-learn cross_val_score docs

#### Section 1 — Overfitting (15 min)
- A model that memorises training data but fails on new data
- Demonstrate: deep decision tree, 100% training accuracy, poor test accuracy
- Plot training vs test accuracy as model complexity increases

#### Section 2 — Underfitting (10 min)
- A model too simple to capture the pattern
- The bias-variance tradeoff: simple = high bias, complex = high variance

#### Section 3 — Cross-validation (20 min)
- Train/test split is a single sample — results depend on which examples end up where
- k-fold CV: split into k parts, train on k-1, test on 1, rotate k times, average
- cross_val_score() — runs k-fold automatically
- Apply to Forge's language classifier — compare single split vs 5-fold results

#### Section 4 — Regularisation (10 min)
- Add a penalty to the loss for large weights
- L1 (Lasso): drives some weights to zero — feature selection
- L2 (Ridge): shrinks all weights — general overfitting control
- Tune the regularisation parameter with cross-validation

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 36 — Clustering
- **Subject:** K-means, silhouette score, choosing k, visualising clusters
- **Outcome:** Cluster Forge's code files — see natural groupings emerge without labels
- **Freshness check:** scikit-learn clustering docs

#### Section 1 — Unsupervised learning (10 min)
- No labels — the algorithm finds structure in the data on its own
- Use case for Forge: find natural groupings in a codebase without pre-labelling

#### Section 2 — K-means algorithm (20 min)
- Choose k centroids randomly, assign each example to nearest centroid, recompute, repeat
- Convergence: stops when assignments no longer change
- Apply to Forge's code features — try k=3, k=5, k=10

#### Section 3 — Choosing k (15 min)
- The elbow method: plot inertia vs k — find the elbow
- Silhouette score: how well each example fits its cluster
- Compute silhouette scores for different k values, pick the best

#### Section 4 — Visualising clusters (10 min)
- PCA: reduce to 2 dimensions while preserving variance
- Plot the 2D projection, colour by cluster assignment
- Inspect examples from each cluster — do the groupings make sense?

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push — Track D complete

---

## Track E — LLMs, Embeddings & RAG

---

### Lesson 37 — LLM Fundamentals
- **Subject:** Tokens, attention intuition, transformers, temperature, sampling
- **Outcome:** Call the OpenAI API, vary temperature, observe and explain the differences
- **Freshness check:** Latest OpenAI API docs and available models

#### Section 1 — What an LLM actually is (15 min)
- A function that takes a sequence of tokens and outputs a probability distribution over the next token
- Tokens: subword units — roughly 4 characters each
- The model is a very large set of weights — billions of parameters
- Training: predict the next token across billions of documents, minimise cross-entropy loss

#### Section 2 — Transformers and attention intuition (20 min)
- The transformer architecture: dominant since 2017
- Attention: every token can look at every other token — captures long-range dependencies
- Why transformers beat earlier architectures — no forgetting over distance
- Multi-head attention: multiple attention mechanisms in parallel

#### Section 3 — Temperature and sampling (15 min)
- The model outputs logits — raw scores for each token
- Softmax converts logits to probabilities
- Temperature scales the logits — high = flatter distribution = more random
- Call the OpenAI API at temperature 0, 0.5, and 1.5 — compare outputs on the same prompt

#### Section 4 — Practical API usage (5 min)
- The messages format: system, user, assistant
- max_tokens, temperature, model selection
- Cost awareness: tokens in + tokens out = cost

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 38 — What Embeddings Are
- **Subject:** Semantic meaning as vectors, how embedding models work, code vs prose
- **Outcome:** Embed ten code snippets, compute pairwise similarity, verify clustering
- **Freshness check:** Latest OpenAI and sentence-transformers embedding model options

#### Section 1 — From LLM to embedding (15 min)
- An LLM generates text — an embedding model generates vectors
- The embedding is the internal representation at a specific layer
- It captures semantic meaning — similar meaning → similar vector
- Why code embeddings work: the model has seen enormous amounts of code

#### Section 2 — Embedding models for code (10 min)
- OpenAI text-embedding-3-small: 1536 dimensions
- Sentence transformers: open source, runs locally, no API cost
- Specialised code models: CodeBERT, UniXcoder
- Trade-offs: quality vs cost vs speed vs privacy

#### Section 3 — Embed and compare (25 min)
- Choose ten code snippets: similar Python functions, similar C# functions, unrelated
- Call the embedding API for each
- Compute pairwise cosine similarity using src/maths.py
- Build the full similarity matrix — display it
- Verify: similar functions score > 0.85, unrelated < 0.5

#### Section 4 — Why embeddings beat keyword search (5 min)
- find_user() and get_user() might not share keywords but mean the same thing
- This is the core advantage Forge has over grep or text search

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 39 — Chunking Strategies
- **Subject:** Why chunking matters, code-specific approaches, overlap, metadata attachment
- **Outcome:** Forge chunks ingested files into units with full metadata — committed and tested
- **Freshness check:** Latest chunking research and LangChain text splitter docs

#### Section 1 — The chunking problem (10 min)
- Embedding models have a token limit
- A large file cannot be embedded as a single unit
- Bad chunking destroys meaning — splitting a function halfway loses context

#### Section 2 — Chunking strategies for prose vs code (15 min)
- Prose: split by sentence or paragraph
- Code: split by function, class, or method — syntactic semantic boundaries
- Fixed-size chunking with overlap: a simpler fallback
- Overlap: include the last n tokens of the previous chunk — prevents losing context at boundaries

#### Section 3 — Code-aware chunking (20 min)
- Parse Python with the ast module — find function and class boundaries
- Parse other languages by detecting def, class, function, sub keywords
- Fallback to fixed-size when parsing fails
- Each chunk carries metadata: file path, repo, language, start line, end line
- Implement src/chunker.py with tests for each strategy

#### Section 4 — Chunk size tradeoffs (10 min)
- Small chunks: precise retrieval, less context per chunk
- Large chunks: more context, less precise retrieval
- For code: function-level is usually right — Forge's default

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 40 — Prompt Engineering
- **Subject:** System prompts, few-shot examples, chain of thought, structured output, prompt hygiene
- **Outcome:** Write and evaluate three variants of a Forge system prompt
- **Freshness check:** Latest OpenAI prompt engineering guide

#### Section 1 — Why prompts matter (10 min)
- The prompt is the only thing you control at inference time
- The same model gives dramatically different answers to different prompts
- For Forge: the system prompt determines the quality of every answer

#### Section 2 — System prompts (15 min)
- Sets the model's role, constraints, output format, and behaviour
- Be specific about what the model should and should not do
- Include the format you want: prose, JSON, bullet points, citations
- Write Forge's first system prompt — explicit about citing sources

#### Section 3 — Few-shot examples (15 min)
- Showing the model examples of the output you want
- Examples are more powerful than instructions for complex formatting
- Add two examples of good Forge answers to the system prompt — test the difference

#### Section 4 — Chain of thought and structured output (15 min)
- Chain of thought: "think step by step" — forces reasoning before answering
- Structured output: instruct the model to respond in JSON
- Write three prompt variants, evaluate each on five test questions, pick the best

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 41 — Vector Storage
- **Subject:** What a vector store is, ChromaDB — indexing, storing with metadata, querying
- **Outcome:** Forge stores all chunk embeddings in ChromaDB and retrieves by natural language query
- **Freshness check:** Latest ChromaDB version and API

#### Section 1 — Why a vector store (10 min)
- Similarity search over millions of vectors cannot be done naively
- ChromaDB: lightweight, local, no server needed
- The relationship to SQLite: ChromaDB stores vectors, SQLite stores metadata — they work together

#### Section 2 — ChromaDB setup and collections (15 min)
- Install ChromaDB, create a persistent client
- A collection: a named group of embeddings — one per repo
- Add documents with embeddings and metadata

#### Section 3 — Indexing Forge's chunks (20 min)
- Pipeline: CodeFile → chunker → embedder → ChromaDB
- Batch embedding — embed multiple chunks at once
- Upsert: add new chunks, update changed ones, ignore unchanged ones

#### Section 4 — Querying (10 min)
- Embed the query string using the same model as the documents
- collection.query(query_embeddings=..., n_results=10, where={'language': 'Python'})
- Print the top 5 results for a test query — verify they are relevant

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 42 — Retrieval
- **Subject:** Top-k retrieval, metadata filtering, hybrid search — dense plus sparse
- **Outcome:** Plain English query → most relevant code chunks with scores
- **Freshness check:** ChromaDB query docs and hybrid search options

#### Section 1 — Dense retrieval (15 min)
- Embed the query, find the k nearest vectors in ChromaDB
- Top-k: return the k most similar chunks
- Implement retrieve() in src/retriever.py — clean, tested, typed

#### Section 2 — Metadata filtering (15 min)
- Filter before similarity search — only search within a specific repo or language
- ChromaDB's where clause
- Add filter parameters to retrieve()

#### Section 3 — Sparse retrieval (BM25) (15 min)
- BM25: keyword-based ranking — the algorithm behind traditional search
- Dense retrieval finds semantic matches, sparse finds keyword matches
- Install rank_bm25, build an index, query it

#### Section 4 — Hybrid search (10 min)
- Combine dense and sparse results — more robust than either alone
- Reciprocal rank fusion: merge ranked lists without needing compatible scores
- Implement hybrid_retrieve() and test against retrieve()

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 43 — Reranking
- **Subject:** Why first retrieval is not good enough, cross-encoders, reranking strategies
- **Outcome:** Add reranking — compare results before and after, measure quality improvement
- **Freshness check:** Latest sentence-transformers CrossEncoder docs

#### Section 1 — The two-stage retrieval pattern (10 min)
- Stage 1 (recall): retrieve a large candidate set quickly — top 20-50
- Stage 2 (precision): rerank the candidates — return top 5-10
- Why not just use a precise model for stage 1? — too slow at scale

#### Section 2 — Cross-encoders (20 min)
- A bi-encoder encodes query and document separately — fast but less accurate
- A cross-encoder takes query and document together — more accurate but slower
- sentence-transformers CrossEncoder — outputs a relevance score
- Load a cross-encoder, score a query-document pair

#### Section 3 — Implement reranking (20 min)
- Retrieve top 20 with the bi-encoder
- Score all 20 with the cross-encoder
- Sort by cross-encoder score, return top 5
- Add rerank() to src/retriever.py

#### Section 4 — Before and after comparison (5 min)
- Run five test queries without and with reranking
- Are the reranked results better? Use domain knowledge to judge

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 44 — Context Window Management
- **Subject:** Token limits, overflow handling, summarisation, sliding windows, truncation
- **Outcome:** Handle a query whose retrieved chunks exceed the context limit gracefully
- **Freshness check:** Latest model context window sizes and tiktoken docs

#### Section 1 — The context window (10 min)
- Every LLM has a maximum number of tokens it can process at once
- The window includes: system prompt + history + retrieved chunks + query
- Exceeding the limit causes an API error — Forge must handle this gracefully

#### Section 2 — Counting tokens (15 min)
- Install tiktoken, load the encoding for the model in use
- Count tokens in a system prompt, a chunk, a query
- Build a token budget: allocate tokens to each component
- Implement count_tokens() in src/utils.py

#### Section 3 — Truncation and priority (20 min)
- When chunks exceed the budget: remove lowest-ranked chunks first
- Never truncate a chunk in the middle — remove whole chunks
- Always preserve the system prompt and the query
- Implement fit_to_context() in src/retriever.py

#### Section 4 — Summarisation for overflow (10 min)
- Alternative: summarise chunks that do not fit
- When to truncate vs summarise
- Implement the summarisation fallback

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 45 — RAG — Cited Answers
- **Subject:** Assembling the full pipeline — retrieve, rerank, construct prompt, generate, cite
- **Outcome:** Forge answers a question about a real repo and cites the exact files used
- **Freshness check:** Latest OpenAI chat completion docs

#### Section 1 — The full pipeline (10 min)
- Step 1: receive a query
- Step 2: retrieve + rerank relevant chunks
- Step 3: fit chunks to context window
- Step 4: construct the prompt with chunks as context
- Step 5: call the LLM, generate an answer
- Step 6: parse citations from the answer

#### Section 2 — Prompt construction (15 min)
- System prompt: Forge's role, citation instructions
- Context section: each chunk with its source
- Instruction: answer based only on provided context, cite every claim

#### Section 3 — Implementing src/rag.py (25 min)
- answer(query, repo=None, language=None) → AnswerResult
- AnswerResult: answer text, list of citations, list of source chunks
- Wire all components together
- Test with three real questions about a real GitHub repo

#### Section 4 — Citation parsing (5 min)
- Instruct the model to cite using [FILE: path] markers
- Parse citations from the response
- Return citations alongside the answer

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 46 — Evaluation I — Concepts
- **Subject:** Relevance, faithfulness, context precision, context recall, hallucination detection
- **Outcome:** Define and manually score five Forge answers against evaluation criteria
- **Freshness check:** Latest RAGAS framework docs and evaluation research

#### Section 1 — Why evaluation is hard for RAG (10 min)
- Unlike classification, there is no single correct answer
- Four things can go wrong: bad retrieval, bad generation, hallucination, missing information
- Need metrics that independently assess each stage

#### Section 2 — Retrieval metrics (20 min)
- Context precision: of the retrieved chunks, what fraction were actually relevant?
- Context recall: of all relevant information, what fraction was retrieved?
- Compute these manually for three test queries — judge relevance by hand

#### Section 3 — Generation metrics (20 min)
- Faithfulness: does the answer only contain claims supported by retrieved context?
- Answer relevance: does the answer actually address the question?
- Hallucination: does the answer contain claims not in the context?
- Score five Forge answers manually

#### Section 4 — Why manual evaluation first (5 min)
- Automated metrics approximate human judgement
- The manual scores from this lesson become ground truth for Lesson 47

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 47 — Evaluation II — Forge's Eval Suite
- **Subject:** Automated evals, ground truth datasets, running in CI, interpreting results over time
- **Outcome:** Automated eval suite scoring Forge's RAG pipeline — committed to tests/eval/
- **Freshness check:** Latest RAGAS and evaluation tooling versions

#### Section 1 — Building a ground truth dataset (15 min)
- A set of (question, expected_answer, relevant_file_paths) tuples
- Derive from manual evaluations in Lesson 46
- Store as JSON in tests/eval/

#### Section 2 — Automated relevance scoring (15 min)
- Use an LLM as a judge: given question, context, and answer, rate faithfulness 1-5
- Implement evaluate_faithfulness() and evaluate_relevance()
- Calibrate against manual scores

#### Section 3 — RAGAS (15 min)
- Install, configure, run against Forge's test questions
- Understand each metric RAGAS produces
- Add RAGAS as a dev dependency

#### Section 4 — Running evals and interpreting results (10 min)
- Run the eval suite, interpret the output
- Which questions fail? Which retrieve poorly? Which hallucinate?
- Use the results to identify the weakest part of the pipeline

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push — Track E complete

---

## Track F — Agents & Orchestration

---

### Lesson 48 — Agent Concepts
- **Subject:** What makes something an agent — perception, memory, planning, action
- **Outcome:** Draw the Forge agent loop on paper, identify every component
- **Freshness check:** Latest agent architecture writing and framework comparisons

#### Section 1 — Pipeline vs agent (15 min)
- A RAG pipeline is linear: query → retrieve → generate → done
- An agent is a loop: perceive → plan → act → observe → repeat
- The agent decides what to do next — the pipeline does not

#### Section 2 — The four components (20 min)
- Perception: what the agent can sense
- Memory: short-term (current conversation), long-term (persistent)
- Planning: deciding what to do next
- Action: calling a tool, generating a response, asking a clarifying question

#### Section 3 — The agent loop (15 min)
- Observe the state, choose an action, execute it, observe the result, update state, repeat
- Termination: the agent decides it has enough information to answer
- Draw Forge's agent loop — every component, every arrow

#### Section 4 — Why agents fail (5 min)
- Infinite loops, hallucinated tool calls, context overflow
- These are covered in detail in Lesson 59 — know they exist now

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 49 — ReAct and Reasoning Patterns
- **Subject:** Chain of thought, ReAct pattern, tree of thought intuition
- **Outcome:** Trace a ReAct loop manually for a Forge query
- **Freshness check:** Latest ReAct paper and chain of thought research

#### Section 1 — Chain of thought (15 min)
- "Think step by step" — forces the model to reason before committing to an answer
- Why it works: intermediate reasoning steps constrain the final answer
- Zero-shot vs few-shot CoT

#### Section 2 — The ReAct pattern (25 min)
- Reason: think about what to do next
- Act: call a tool with specific parameters
- Observe: receive the tool result
- Repeat until confident enough to answer
- Format: Thought / Action / Observation / Final Answer
- Trace through a Forge example by hand

#### Section 3 — Tree of thought (10 min)
- Explore multiple reasoning paths simultaneously
- Prune paths that are not working, expand promising ones
- Important for reading current agent research

#### Section 4 — Applying to Forge (5 min)
- Forge's base agent will use ReAct
- The system prompt must instruct the Thought/Action/Observation format
- Test the format manually before implementing

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 50 — Tool Design
- **Subject:** Designing reliable tools — descriptions, parameters, error contracts, granularity
- **Outcome:** Design and implement search_code, get_file, list_repos
- **Freshness check:** Latest OpenAI function calling and tool use docs

#### Section 1 — What makes a good tool (15 min)
- Unambiguous — the agent should know exactly when to use it
- The description is read by the model — must be precise and complete
- Parameters must be well-typed and clearly documented
- Error behaviour must be explicit

#### Section 2 — OpenAI function calling format (15 min)
- JSON schema: name, description, parameters
- The model does not call the tool — it returns a structured request
- The application executes the tool and returns the result

#### Section 3 — Implement Forge's three tools (20 min)
- search_code(query, repo=None, language=None, n=10)
- get_file(repo, path)
- list_repos()
- Write src/tools.py with JSON schema descriptions
- Test each tool in isolation

#### Section 4 — Tool granularity (5 min)
- Too fine-grained: too many tool calls per task
- Too coarse-grained: not enough control
- The test: can the agent accomplish any Forge task with only these three tools?

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 51 — Memory Architecture
- **Subject:** Short-term, long-term, episodic, semantic memory — implementing for Forge
- **Outcome:** Short-term conversation memory and long-term file storage implemented
- **Freshness check:** Latest memory architecture patterns in agent research

#### Section 1 — Four types of memory (15 min)
- Short-term: the current conversation — in the context window
- Long-term: survives across sessions — stored externally
- Episodic: what happened in past sessions
- Semantic: facts the agent knows
- Implement short-term and long-term today

#### Section 2 — Short-term memory (15 min)
- Store the conversation as a list of messages: role + content
- Include in every LLM call — the model sees the full conversation
- When the conversation gets too long: summarise old turns
- Implement ConversationMemory in src/memory.py

#### Section 3 — Long-term memory (20 min)
- Store key facts from past conversations in SQLite
- What to store: repos asked about, preferences, resolved questions
- Write at the end of each session, load relevant memories at the start
- Implement LongTermMemory in src/memory.py

#### Section 4 — Memory retrieval (5 min)
- Not all long-term memory is relevant to every query
- Use embedding similarity to retrieve relevant memories

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 52 — Forge Base Agent
- **Subject:** Implementing the agent loop — perceive, plan, call tools, observe, respond
- **Outcome:** A working base agent that uses retrieval as a tool to answer questions
- **Freshness check:** Latest OpenAI tool calling docs

#### Section 1 — The agent loop in code (15 min)
- The loop: call LLM → check if tool call → execute tool → add result to history → repeat
- Maximum iterations: always set a limit — prevent infinite loops
- Termination: the model returns a final answer with no tool call

#### Section 2 — The system prompt (10 min)
- Define Forge's role and available tools
- Instruct the model to reason before acting
- Include citation instructions

#### Section 3 — Implementing the loop (25 min)
- Send messages to the LLM with tools attached
- Parse the response: is it a tool call or a final answer?
- If tool call: extract name and parameters, call the function, add result to messages
- If final answer: return it with citations
- Test with three real questions — trace every iteration

#### Section 4 — Error handling in the loop (5 min)
- Tool call with missing parameters: return an error, let the agent retry
- Tool call for uninvested repo: return a clear error
- Maximum iterations reached: return a partial answer with a note

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 53 — Explanation Agent
- **Subject:** Specialist agent design, system prompt scoping, explaining code, evaluation
- **Outcome:** An agent that explains any function or class in plain language
- **Freshness check:** Latest system prompt best practices

#### Section 1 — Specialist agent design principles (10 min)
- A specialist agent has a narrow, well-defined job
- The system prompt defines the specialisation
- The explanation agent: explain what code does, why it exists, how to use it

#### Section 2 — The explanation system prompt (15 min)
- Role: code explanation assistant
- Behaviour: clear, use analogies, avoid jargon, include examples
- Output format: what it does, why it exists, how to use it, edge cases
- Constraints: base explanations on retrieved code only

#### Section 3 — Implement explanation_agent.py (25 min)
- Inherit from or compose with base_agent.py
- Override only the system prompt
- Test with five real functions from a public C# repo
- Use C# knowledge to judge quality

#### Section 4 — Evaluation (5 min)
- Score each explanation: accurate (y/n), clear (1-5), complete (y/n)
- Add five test cases to tests/eval/agents/

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 54 — Testing Agent
- **Subject:** Generating pytest tests from code, evaluating test quality
- **Outcome:** An agent that reads a function and writes meaningful pytest tests
- **Freshness check:** Latest pytest conventions and test generation approaches

#### Section 1 — What makes a good test (15 min)
- Tests the behaviour, not the implementation
- Covers the happy path, edge cases, and failure cases
- Is independent and readable

#### Section 2 — The testing agent system prompt (15 min)
- Generate pytest tests for the provided code
- Instructions: test happy path, at least two edge cases, at least one failure case
- Output: complete, runnable pytest code with no placeholders

#### Section 3 — Implement testing_agent.py (20 min)
- The agent retrieves the function or class from Forge
- Generates tests in the specified format
- Test by running the generated tests

#### Section 4 — Evaluation (5 min)
- Introduce a deliberate bug — does the generated test catch it?
- Add five test generation cases to tests/eval/agents/

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 55 — Refactor Agent
- **Subject:** Code quality analysis, identifying smells, suggesting improvements, diff generation
- **Outcome:** An agent that suggests refactoring improvements with reasoning and diffs
- **Freshness check:** Latest static analysis tools and refactoring patterns

#### Section 1 — Code smells for the agent to detect (15 min)
- Long functions, duplicate code, poor naming, deep nesting, missing error handling
- Include these in the system prompt

#### Section 2 — The refactor agent system prompt (15 min)
- Role: identify code quality issues and suggest specific improvements
- Output: for each issue — what it is, where it is, and the improved version
- Constraints: preserve behaviour — suggest refactors, not rewrites

#### Section 3 — Implement refactor_agent.py (20 min)
- Retrieve target code, identify issues, suggest improvements
- Generate a before/after diff for each suggestion
- Test on five real functions from a public repo

#### Section 4 — Safe suggestions (5 min)
- Always include: "verify with your test suite after applying this change"
- The testing agent and refactor agent work together

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 56 — C# Language Agent
- **Subject:** Language-specific tuning, C# idioms, .NET patterns, language-aware retrieval
- **Outcome:** A specialist agent for C# codebases that understands .NET conventions
- **Freshness check:** Latest C# language features and .NET docs

#### Section 1 — Why a language-specific agent (10 min)
- A generic agent does not know .NET conventions
- Your C# knowledge is the evaluation benchmark
- This is where your background becomes a direct advantage

#### Section 2 — C# specific knowledge in the system prompt (20 min)
- .NET naming conventions, common patterns (Repository, Service, Controller)
- LINQ idioms, async/await patterns, IDisposable
- Include this knowledge explicitly in the system prompt

#### Section 3 — Language-aware retrieval (15 min)
- Filter ChromaDB queries to language == 'CSharp'
- Weight results from .cs files higher
- Recognise C# namespaces and classes in the query

#### Section 4 — Test and evaluate (10 min)
- Test with five real questions about a public C# repo
- Judge accuracy using your C# expertise
- Add five C# agent test cases to tests/eval/agents/

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 57 — Agent Evaluation
- **Subject:** How to know if an agent is working — task completion, tool use quality, faithfulness
- **Outcome:** Evaluation suite scoring each Forge agent on a fixed set of real tasks
- **Freshness check:** Latest agent evaluation research and tooling

#### Section 1 — Agent evaluation is harder than RAG evaluation (10 min)
- RAG has a clear pipeline — evaluate each stage
- An agent has a loop — the path to an answer varies
- Need: process metrics (what the agent did) and outcome metrics (what it produced)

#### Section 2 — Task completion (15 min)
- Five tasks per agent with clear success criteria
- Explanation: did it explain all key behaviours?
- Testing: do the generated tests run and catch bugs?
- Refactor: are the suggestions correct and safe?
- C#: are the answers accurate per .NET conventions?

#### Section 3 — Tool use quality (15 min)
- Did the agent call the right tools with the right parameters?
- Did it avoid unnecessary tool calls?
- Log every tool call — compute tool precision and recall

#### Section 4 — Building and running the suite (15 min)
- tests/eval/agents/ — one file per agent
- Run with pytest -m eval
- Output: pass/fail per task, tool use stats, faithfulness scores

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 58 — Agent Orchestration
- **Subject:** Routing queries to the right agent, multi-agent coordination, shared memory
- **Outcome:** A router that directs any Forge question to the correct specialist agent
- **Freshness check:** Latest multi-agent orchestration patterns

#### Section 1 — Why a router (10 min)
- The user does not know which agent handles their query
- A router classifies the intent and dispatches to the right agent

#### Section 2 — Intent classification (20 min)
- Option A: keyword rules — fast, brittle
- Option B: LLM classifier — flexible, slower
- Option C: embedding similarity — classify by similarity to example queries
- Implement option B: give the LLM a list of agents and their capabilities, ask it to choose

#### Section 3 — Shared memory and context passing (15 min)
- The user's conversation history is shared across all agents
- The router passes relevant context to the specialist
- Implement the full router in src/agents/router.py

#### Section 4 — Multi-agent workflows (10 min)
- Some queries need multiple agents: "write tests for the refactored version"
- Chain: refactor agent → testing agent
- Test with two chained queries

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 59 — Failure Modes and Recovery
- **Subject:** Agent loops, hallucinated tool calls, tool failures, graceful degradation
- **Outcome:** Forge handles a deliberately broken tool call without crashing or looping
- **Freshness check:** Latest agent failure mode research

#### Section 1 — The four failure modes (15 min)
- Infinite loops, hallucinated tool calls, tool failures, context overflow
- Each requires a different mitigation strategy

#### Section 2 — Preventing infinite loops (15 min)
- Maximum iteration counter — hard stop
- Repetition detection — same tool, same parameters twice → stop
- Test: give the agent a query that cannot be answered — does it stop gracefully?

#### Section 3 — Handling tool failures (15 min)
- Wrap every tool call in try/except — never propagate raw exceptions
- Return a structured error message the agent can reason about
- Test: deliberately raise an exception in a tool

#### Section 4 — Circuit breakers and graceful degradation (10 min)
- A circuit breaker stops calling a failing tool after n failures
- Graceful degradation: if retrieval fails, answer from general knowledge with a caveat
- Implement a simple circuit breaker

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 60 — Safety and Boundaries
- **Subject:** Prompt injection, jailbreaking, tool access risks, guardrails
- **Outcome:** Input validation and output guardrails for every Forge agent
- **Freshness check:** Latest OWASP LLM Top 10 and prompt injection research

#### Section 1 — Prompt injection (15 min)
- An attacker embeds instructions in data the agent processes
- In Forge: a malicious comment in a code file could hijack the agent
- Demonstration: inject an instruction into a fake code file

#### Section 2 — Defending against prompt injection (15 min)
- Sanitise inputs: strip or flag suspicious patterns before including in prompts
- Privilege separation: the agent cannot act outside its defined tool set
- Never trust content from external sources — treat as potentially hostile

#### Section 3 — Tool access risks (15 min)
- Each tool is a capability — design with least privilege
- search_code and get_file: read-only, safe
- Future write or execute tools: require explicit user confirmation
- Never give an agent a tool it does not need

#### Section 4 — Guardrails (10 min)
- Input guardrails: validate and sanitise all user input
- Output guardrails: check the agent's response before returning it
- Log all guardrail triggers — they reveal attempted misuse

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push — Track F complete

---

## Track G — Production & Portfolio

---

### Lesson 61 — Infrastructure Security
- **Subject:** Secrets management, input validation, dependency scanning
- **Outcome:** Forge passes a dependency scan, secrets in .env, inputs validated
- **Freshness check:** Latest pip-audit and secrets scanning tools

#### Section 1 — Secrets management audit (15 min)
- Audit every secret: GitHub token, OpenAI key
- Verify all loaded from .env, never hardcoded, never logged
- Run git log to verify no secrets were ever committed
- Add a pre-commit hook that blocks commits containing secret patterns

#### Section 2 — Input validation (15 min)
- Validate all inputs at entry points: CLI arguments, API requests, user queries
- Repo URLs must match github.com pattern
- Use pydantic for validation

#### Section 3 — Dependency scanning (15 min)
- pip-audit: scans installed packages for known vulnerabilities
- Install, run, fix anything flagged
- Add pip-audit to CI

#### Section 4 — Least privilege review (10 min)
- GitHub token: read-only scope only
- OpenAI key: generation only
- Document required scopes in README

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 62 — Observability
- **Subject:** Structured logging, tracing agent calls, monitoring, debugging invisible agents
- **Outcome:** Every Forge agent call produces structured logs traceable from query to answer
- **Freshness check:** Latest structlog and OpenTelemetry Python docs

#### Section 1 — Why observability matters for agents (10 min)
- A bug in an agent loop is invisible — which tool call caused the wrong answer?
- The three pillars: logs, metrics, traces

#### Section 2 — Structured logging with structlog (20 min)
- Structured logs are JSON — machine-readable, searchable
- Replace all print() and basic logging with structlog
- Log every tool call: tool, parameters, latency, result
- Log every LLM call: model, token count, latency, cost estimate

#### Section 3 — Tracing agent calls (20 min)
- A trace links all events in a single agent loop
- Generate a trace ID at the start of each run — include in every log entry
- Log a summary at the end of the run

#### Section 4 — Reading the logs (5 min)
- Run Forge on a real query, read the structured logs
- Trace the full path using the trace ID
- Identify the slowest step, the most expensive, any errors

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 63 — Docker and Portability
- **Subject:** Dockerfile, containerising Forge, environment consistency, multi-stage builds
- **Outcome:** Forge runs in a Docker container — portable, reproducible
- **Freshness check:** Latest Docker best practices for Python AI apps

#### Section 1 — Why Docker for Forge (10 min)
- "It works on my machine" is not a portfolio argument
- Docker packages the application and its environment together
- Anyone can run Forge with a single command

#### Section 2 — Writing the Dockerfile (20 min)
- Base image: python:3.12-slim
- Copy pyproject.toml first, install dependencies, then copy source — layer caching
- Set environment variables: PYTHONUNBUFFERED, PYTHONDONTWRITEBYTECODE
- EXPOSE the API port, set the default CMD

#### Section 3 — Multi-stage build (15 min)
- Stage 1 (builder): install build tools, compile dependencies
- Stage 2 (runtime): copy only what is needed, no build tools
- A smaller final image — important for deployment

#### Section 4 — docker-compose (10 min)
- docker-compose.yml: defines Forge and any future services
- Mount .env as a volume — secrets are not baked into the image
- Mount a data volume for ChromaDB persistence
- docker-compose up — one command to run everything

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 64 — CLI Interface
- **Subject:** Typer — commands, arguments, help text, progress bars, terminal UX
- **Outcome:** forge ingest <repo_url> and forge ask <question> work from the terminal
- **Freshness check:** Latest Typer version and docs

#### Section 1 — Why a CLI (10 min)
- The CLI is the primary interface for developers
- A good CLI is self-documenting — forge --help explains everything
- Typer: modern Python CLI framework using type hints for argument definitions

#### Section 2 — Typer fundamentals (15 min)
- app = typer.Typer(), @app.command()
- Function parameters become CLI arguments and options
- Type hints define the argument type — Typer handles validation and help text

#### Section 3 — Implement forge ingest (20 min)
- forge ingest <repo_url> [--language LANGUAGE]
- Progress bar as files are fetched and embedded
- Summary: files ingested, chunks created, time taken
- Handle errors cleanly

#### Section 4 — Implement forge ask (10 min)
- forge ask <question> [--repo REPO] [--language LANGUAGE] [--agent AGENT]
- Print the answer with citations
- Test both commands end to end from the terminal

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 65 — API Interface
- **Subject:** FastAPI — endpoints, request validation, async handlers, auto-generated docs
- **Outcome:** Forge exposes a local HTTP API — ingest and query endpoints working
- **Freshness check:** Latest FastAPI version and docs

#### Section 1 — Why an API (10 min)
- The CLI is for developers — an API is for integration
- FastAPI: async, fast, auto-generates OpenAPI docs at /docs
- Every endpoint is documented automatically — great for the portfolio

#### Section 2 — FastAPI fundamentals (15 min)
- app = FastAPI(), @app.get(), @app.post()
- Pydantic models for request and response bodies
- Async handlers — Forge's calls are async, FastAPI handles this natively
- Running: uvicorn src.api:app --reload

#### Section 3 — Implement POST /ingest (15 min)
- Request body: repo_url, languages (optional)
- Response: ingested_files, chunks_created, duration_seconds
- Run ingestion in the background — return a job ID
- GET /ingest/{job_id} — check status

#### Section 4 — Implement POST /ask (15 min)
- Request body: question, repo, language, agent (all optional except question)
- Response: answer text, list of citations
- Stream the response — return tokens as they are generated
- Test with curl and the /docs interface

#### Section 5 — Update state files (5 min)
- Update all state files, commit, push

---

### Lesson 66 — Portfolio Documentation
- **Subject:** Portfolio-quality README, architecture diagram, demo recording, what to highlight
- **Outcome:** Forge has a README, architecture diagram, and recorded demo
- **Freshness check:** Current portfolio best practices for AI engineers

#### Section 1 — The README (20 min)
- What Forge is and what problem it solves — two sentences maximum
- What it can do — five key capabilities with examples
- How to set it up — prerequisites, installation, configuration
- How to use it — the most important commands with example output
- How it works — brief architecture overview with a link to the diagram

#### Section 2 — Architecture diagram (15 min)
- One diagram: GitHub API → ingestion → chunker → embedder → ChromaDB + SQLite → retriever → agents → router → user
- Use Mermaid in the README — renders in GitHub automatically
- Label every component and every arrow

#### Section 3 — Demo recording (15 min)
- Record 2-3 minutes: ingest a real public repo, ask three questions, show citations
- Show the CLI and the API docs page
- Narrate what is happening and why it is interesting

#### Section 4 — What to highlight (5 min)
- For an AI role: the RAG pipeline, reranking, prompt engineering
- For a general portfolio: lead with the demo, then architecture, then code quality
- Add a brief "what I learned" section to the README

#### Section 5 — Final commit (5 min)
- Update all state files — final entries in LESSON_LOG.md and COURSE_STATE.md
- Tag the repo: git tag v1.0.0
- Push everything — Forge is complete

---

*Course complete. 66 lessons. One project. Built from zero.*
