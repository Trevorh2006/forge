# Track B — Python for AI Engineering — Lessons 03–16

---

## Lesson 03 — Python Foundations I

- **Subject:** Python vs C# — syntax, types, variables, functions, list and dict comprehensions
- **Outcome:** A Python script that reads filenames and filters by extension using comprehensions
- **Freshness check:** Current Python stable version

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the branch-per-lesson pattern and why does Forge use it?
2. What does git diff show you and when would you use it?
3. What does a fast-forward merge mean?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Python vs C# mental model (10 min)
- Interpreted vs compiled — what this means in practice on a Mac
- Dynamic typing — no type declarations required, but type hints are available
- Indentation as syntax — not style, it is the structure of the program
- No semicolons, no braces — what replaces them and why

### Section 2 — Types, variables, and functions (15 min)
- int, float, str, bool, None — and how they compare to C# equivalents
- def — writing functions, default arguments, keyword arguments
- Return values — Python always returns something (None if not specified)
- The difference between print() and return — a common early confusion

### Section 3 — Lists and dicts (10 min)
- List: ordered, mutable, zero-indexed — similar to C# List<T>
- Dict: key-value pairs — similar to Dictionary<K,V>
- Common operations: append, pop, get, keys, values, items
- These two structures appear everywhere in Python — fluency matters

### Section 4 — Comprehensions in depth (15 min)
- List comprehension: [x for x in items if condition]
- Dict comprehension: {k: v for k, v in pairs}
- Why fluency matters: ML and AI code is full of comprehensions
- Build the file filter script: filter a list of filenames by extension using comprehensions
- Run it and verify the output is correct

### Section 5 — Update state files (5 min)
- **Forge connection:** The file filter script is not a toy — save it to src/utils.py as filter_by_extension(). Forge will use this exact function when filtering GitHub file trees by language. Test it works before committing.
- Update all four state files, commit, push

---

## Lesson 04 — Python Foundations II

- **Subject:** Classes, dataclasses, type hints, generators, iterators, lazy evaluation
- **Outcome:** A typed CodeFile dataclass and a generator that yields files one at a time
- **Freshness check:** Python dataclasses and generator docs for current best practice

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between print() and return in Python?
2. How does a list comprehension differ from a for loop — when would you choose each?
3. What is a dict in Python and what C# type is it closest to?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Classes vs dataclasses (15 min)
- A class in Python vs C# — same concept, different syntax
- __init__, self — what they are and why they exist
- dataclass decorator — eliminates boilerplate, auto-generates __init__, __repr__, __eq__
- When to use a class vs a dataclass — dataclass for data containers, class for behaviour

### Section 2 — Type hints (10 min)
- Python is dynamically typed but type hints make code readable and tooling useful
- str, int, float, bool, list[str], dict[str, int], Optional[str]
- Type hints do not enforce at runtime — they are for humans and tools, not Python itself
- Add type hints to the CodeFile dataclass

### Section 3 — Iterators (10 min)
- What an iterator is — an object that produces values one at a time
- Why for loops work on lists, files, ranges — they are all iterators under the hood
- The difference between a list (all values in memory) and an iterator (one at a time)
- Why this matters for large codebases — loading 50,000 files at once is not practical

### Section 4 — Generators (15 min)
- yield — what it does and how it differs from return
- A generator function produces an iterator without storing everything in memory
- Why ML pipelines use generators — datasets are often too large to load at once
- Write a generator that yields CodeFile objects from a directory one at a time
- Test it — verify it yields the right objects in the right order

### Section 5 — Update state files (5 min)
- Commit src/models.py with the CodeFile dataclass and generator
- **Forge connection:** CodeFile is the core data model Forge will use from here through to Track E. Every file fetched from GitHub will become a CodeFile object. Make sure the fields — path, language, size, sha, content — are designed for that purpose, not just the exercise.
- Update all four state files, commit, push

---

## Lesson 05 — Python Project Structure

- **Subject:** uv, virtual environments, pyproject.toml, package imports, logging, config with .env
- **Outcome:** Forge is a proper Python package — importable, configured, logging to console
- **Freshness check:** Latest uv docs and python-dotenv version

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between a list and a generator in Python — when does the difference matter?
2. What does the dataclass decorator actually do — what boilerplate does it replace?
3. What does yield do and how does it differ from return?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why project structure matters (5 min)
- Scripts vs packages — the difference and when each is appropriate
- Forge is a package: importable, testable, deployable
- What makes a directory a Python package: __init__.py

### Section 2 — uv and virtual environments (15 min)
- What a virtual environment is — isolated Python and dependencies per project
- Why this matters: different projects need different library versions
- Install uv, create a venv, activate it, understand what activation does
- Install a package with uv, verify it is isolated to this project only

### Section 3 — pyproject.toml (15 min)
- The modern Python project configuration file — replaces setup.py and requirements.txt
- name, version, dependencies, dev dependencies
- How uv uses it — install all dependencies from the file with one command
- Add pytest and python-dotenv as dependencies

### Section 4 — Package imports and logging (15 min)
- How Python finds modules — the import system explained
- Relative vs absolute imports — which to use in Forge and why
- Set up logging with a consistent format across all Forge modules
- Log levels: DEBUG, INFO, WARNING, ERROR — when to use each

### Section 5 — Config with .env (10 min)
- Load environment variables from .env using python-dotenv
- .env is never committed — verify .gitignore covers it
- Access config values safely — what to do when a required value is missing
- **Forge connection:** The GitHub token and OpenAI key Forge will need in Lessons 14 and 37 both live in .env. Set up the .env structure now with placeholder keys so the pattern is already in place when the real keys are needed.
- Update all four state files, commit, push

---

## Lesson 06 — File I/O and Data Formats

- **Subject:** Reading and writing files, pathlib, JSON, CSV, handling encodings
- **Outcome:** A script that reads all .py and .cs files from a local folder safely with encoding handling
- **Freshness check:** Python pathlib and json module current docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a virtual environment and why does Forge need one?
2. What is the difference between DEBUG and INFO log levels — when would you use each?
3. Why should .env never be committed to Git?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — pathlib (15 min)
- The modern way to work with file paths in Python — replaces os.path
- Path objects — creating, joining, checking existence, listing directories
- Path.glob() and Path.rglob() — finding files by pattern recursively
- Why pathlib is better than string concatenation for paths

### Section 2 — Reading files safely (15 min)
- open() with context managers — why with is always used
- Read modes: r (text), rb (binary) — when to use each
- Encoding — what it is, why it matters, how to handle errors gracefully
- Files from GitHub can have any encoding — always specify UTF-8, handle errors explicitly

### Section 3 — JSON (15 min)
- json.loads() and json.dumps() — reading and writing JSON strings
- json.load() and json.dump() — reading and writing JSON files
- Write Forge's ingested file data to JSON and read it back — verify round-trip correctness

### Section 4 — CSV and building the file reader (10 min)
- csv module — reading and writing tabular data
- When CSV is appropriate vs JSON vs SQLite
- Build the complete file reader: find all .py and .cs files, read them, handle encoding errors
- Test every code path including the error handling path

### Section 5 — Update state files (5 min)
- **Forge connection:** The file reader built this lesson is a local stand-in for the GitHub API ingestion pipeline that arrives in Lessons 14–15. Save it to src/file_reader.py — it will be used in Lessons 11 and 12 for testing practice before the real API version replaces it.
- Update all four state files, commit, push

---

## Lesson 07 — Error Handling and Resilience

- **Subject:** Exceptions, try/except patterns, retries with exponential backoff, defensive coding
- **Outcome:** A resilient file reader that retries on failure and logs errors without crashing
- **Freshness check:** tenacity library version for retry patterns

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does a context manager (with statement) guarantee when reading a file?
2. Why must encoding errors be handled explicitly when reading code files from GitHub?
3. What is the difference between json.loads() and json.load()?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Exceptions in Python vs C# (10 min)
- The exception hierarchy — BaseException, Exception, and common subclasses
- try, except, else, finally — what each block does and when it runs
- Catching specific exceptions vs bare except — why bare except is always wrong
- Raising exceptions: raise, raise from — preserving the original cause

### Section 2 — Designing for failure (15 min)
- Expected failures (file not found) vs unexpected failures (bugs)
- What to catch, what to let propagate, what to log
- Writing functions that signal failure clearly and cleanly
- Apply this thinking to Forge's file reader from Lesson 06

### Section 3 — Exponential backoff and retries (20 min)
- Why network calls fail transiently — rate limits, timeouts, temporary server errors
- The backoff pattern — wait longer between each retry attempt
- Install tenacity, understand the @retry decorator and its parameters
- Apply retry logic to a simulated failing function — test that it retries the correct number of times
- Understand when not to retry: 404 and auth failures are permanent

### Section 4 — Defensive coding patterns and Forge connection (10 min)
- Validate inputs at function boundaries — fail fast with clear messages
- Guard clauses — check preconditions at the top, return early
- Never silently swallow exceptions — always log at minimum
- **Forge connection:** Apply retry logic and defensive patterns to src/file_reader.py from Lesson 06. Forge's GitHub API calls in Lesson 14 will face exactly these failures — rate limits and transient errors. The patterns you write now carry forward directly.
- Update all four state files, commit, push

---

## Lesson 08 — Decorators and Functional Patterns

- **Subject:** How decorators work, writing your own, map/filter, closures
- **Outcome:** A @retry and @timed decorator applied to real Forge functions
- **Freshness check:** functools docs and current decorator patterns

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between catching a specific exception and a bare except — why does it matter?
2. When should you not retry a failed network call?
3. What does raise from do — why is it better than just raise?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Functions as first-class objects (10 min)
- In Python, functions are objects — passed as arguments, stored, returned
- This is the foundation of decorators
- Demonstrate: assign a function to a variable, pass it to another function
- Compare to C# delegates and Func<T> — same concept, different syntax

### Section 2 — Closures (10 min)
- A closure is a function that remembers variables from the scope where it was created
- Why this matters: decorators are built on closures
- Write a simple closure — a counter factory
- Understand the scope chain: local, enclosing, global, built-in (LEGB)

### Section 3 — Writing decorators (20 min)
- A decorator is a function that takes a function and returns a new function
- The wrapper pattern — wrapping the original call with extra behaviour
- functools.wraps — preserving the original function's name and docstring — always use this
- Write @timed — measures and logs how long any decorated function takes
- Write @retry — retries a function on exception up to n times with backoff
- Apply both to Forge functions and verify they work correctly

### Section 4 — map, filter, and functional patterns (10 min)
- map() — apply a function to every item in an iterable
- filter() — keep only items where a function returns True
- Why comprehensions are usually preferred over map/filter in Python
- functools.reduce, functools.partial — brief but worth knowing

### Section 5 — Update state files (5 min)
- Commit src/utils.py with @timed and @retry decorators
- **Forge connection:** Apply @timed to at least two real Forge functions — the file reader and the JSON writer from Lesson 06. In Lesson 09 you will measure the difference between sequential and concurrent API calls — @timed is what makes that measurement concrete.
- Update all four state files, commit, push

---

## Lesson 09 — Async and Concurrency

- **Subject:** async/await, event loops, aiohttp, running concurrent API calls
- **Outcome:** Fetch three GitHub files concurrently — measure the speed difference vs sequential
- **Freshness check:** Latest asyncio and aiohttp docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a decorator in Python — what does it actually do to the function it wraps?
2. Why must you use functools.wraps inside a decorator?
3. What is a closure — what does "remembers variables from the enclosing scope" mean in practice?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why concurrency matters for agents (10 min)
- An agent often needs to make 5–10 API calls to answer one question
- Sequential: each call waits for the previous one to finish — slow
- Concurrent: calls run simultaneously — much faster
- The difference between concurrency (managing many tasks) and parallelism (truly simultaneous)

### Section 2 — async and await (20 min)
- async def — declaring a coroutine function
- await — suspending execution until an awaitable completes
- asyncio.run() — the entry point for running async code
- The event loop — what it is, how it schedules coroutines
- Write a simple async function, understand what happens step by step

### Section 3 — Running tasks concurrently (15 min)
- asyncio.gather() — run multiple coroutines concurrently, collect all results
- asyncio.create_task() — schedule a coroutine without waiting immediately
- The key difference: sequential awaits vs gather — demonstrate the time difference
- Use @timed from Lesson 08 to measure both approaches

### Section 4 — aiohttp for async HTTP and Forge connection (10 min)
- requests is synchronous — cannot be used inside async functions
- aiohttp is the async equivalent — same concepts, async API
- Fetch three files concurrently using aiohttp and gather
- Measure and compare the time vs sequential — make the difference concrete
- **Forge connection:** The GitHub client you build in Lesson 14 will use async HTTP to fetch multiple files concurrently. Write an async fetch_url(url) stub now in src/github_client.py — it does nothing yet but the async structure is already in place.
- Update all four state files, commit, push

---

## Lesson 10 — NumPy Fundamentals

- **Subject:** Arrays, shapes, dtypes, broadcasting, vectorised operations
- **Outcome:** Implement vector operations using NumPy — foundation for all maths ahead
- **Freshness check:** Latest NumPy version and any API changes

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between asyncio.gather() and sequential awaits — why does it matter for Forge?
2. Why can you not use the requests library inside an async function?
3. What does the event loop actually do — what problem does it solve?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why NumPy exists (10 min)
- Python lists are flexible but slow for numerical computation
- NumPy arrays are fixed-type, stored in contiguous memory — orders of magnitude faster
- Nearly every ML library (pandas, scikit-learn, PyTorch) is built on NumPy arrays
- Understanding NumPy is prerequisite to everything in Tracks C, D, and E

### Section 2 — Arrays, shapes, and dtypes (20 min)
- np.array() — creating arrays from Python lists
- shape — the dimensions of an array, always rows first
- dtype — the data type of every element (float64, int32, bool)
- reshape, transpose — changing array structure without changing data
- zeros, ones, arange, linspace — creating arrays programmatically

### Section 3 — Indexing and slicing (10 min)
- 1D indexing — same as Python lists
- 2D indexing: array[row, col] — row always first
- Slicing: array[1:4, :] — selecting ranges across dimensions
- Boolean indexing — selecting elements where a condition is true

### Section 4 — Vectorised operations and broadcasting (10 min)
- Element-wise operations — add, multiply, compare entire arrays without loops
- Why this is faster — operations happen in compiled C code, not Python
- Broadcasting — how NumPy handles arithmetic on arrays of different shapes
- Implement vector addition and scalar multiplication using NumPy

### Section 5 — Update state files (5 min)
- **Forge connection:** The embedding vectors Forge will work with in Track E are NumPy arrays — 1536 numbers representing the meaning of a code chunk. Write a short script that creates two fake 1536-dimension arrays and adds them together. It will feel abstract now but it is the exact data structure you will use in Lessons 38–40.
- Update all four state files, commit, push

---

## Lesson 11 — Testing Fundamentals

- **Subject:** pytest in depth — what to test, test structure, fixtures, parametrize, running subsets
- **Outcome:** A proper test suite for Forge's existing modules, all passing
- **Freshness check:** Latest pytest version and fixture best practices

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the shape of a NumPy array and why does it always list rows before columns?
2. What is broadcasting — give a concrete example of when NumPy uses it?
3. Why are NumPy operations faster than equivalent Python loops?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why testing matters (10 min)
- Every piece of Forge code from here on is tested as it is written — not after
- What a test actually is: a function that asserts expected behaviour
- The cost of not testing in an AI system — silent failures, wrong answers, broken pipelines
- Python is known from Lessons 03–10 — testing is now the natural next step

### Section 2 — Writing the first tests (15 min)
- pytest is already installed from Lesson 05
- Write tests for functions already built — models.py, utils.py, the file reader
- Run pytest, read the output — understand what passing and failing look like
- Write a deliberately failing test, read the failure output, understand every line

### Section 3 — Fixtures (15 min)
- What a fixture is — shared setup that multiple tests can depend on
- Write a fixture that provides a sample CodeFile object
- Use it across multiple tests — understand why this is better than repeating setup code
- Understand fixture scope: function (default), module, session — when to use each

### Section 4 — Parametrize and running subsets (10 min)
- parametrize — testing the same function with multiple inputs in one declaration
- Running a single test file, a single test, all tests matching a keyword: pytest -k
- Understanding marks — skip, xfail — when and why to use them
- Reading a test summary — what to look at first when something fails

### Section 5 — Update state files (5 min)
- Write tests for everything built in Lessons 03–10
- **Forge connection:** Every src/ file built so far — filter_by_extension, CodeFile, file_reader, @timed, @retry — now has a test. This is the test suite that will grow with Forge for the rest of the course. From this lesson forward, no code is committed without a test.
- Update all four state files, commit, push

---

## Lesson 12 — Testing for AI Code

- **Subject:** Mocking API calls, handling non-deterministic output, integration vs unit tests
- **Outcome:** Mock an LLM API call in a test — no real API required, fully reproducible
- **Freshness check:** Latest pytest-mock and responses library versions

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a pytest fixture — what problem does it solve compared to repeating setup code?
2. What does parametrize do and why is it useful?
3. What should you look at first in a failing pytest output?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The problem with testing AI code (10 min)
- LLM output is non-deterministic — the same input rarely gives exactly the same output
- API calls cost money and can fail — tests cannot depend on live APIs
- How do you test something you cannot fully predict?
- Builds directly on Lesson 11 — the same pytest skills applied to harder problems

### Section 2 — Mocking with pytest-mock (20 min)
- What a mock is — a fake object that behaves like the real thing
- Install pytest-mock, mock a simple function, verify it was called with the right arguments
- Mock an OpenAI API call — return a fixed, known fake response
- Understand why this makes tests fast, free, and fully reproducible

### Section 3 — Testing non-deterministic output (15 min)
- Strategy: test the structure and shape of output, not the exact content
- Write a test that verifies an LLM response has the right shape without checking exact words
- Test that a function handles an empty response gracefully
- Test that a function handles an API error gracefully

### Section 4 — Unit vs integration tests (10 min)
- Unit: one function in isolation, all dependencies mocked
- Integration: multiple real components working together — slower, more realistic
- Where each belongs in Forge's test suite
- The rule: unit tests run on every commit, integration tests run explicitly
- **Forge connection:** Mock the GitHub API response for get_repo_tree() — a function that does not exist yet but will in Lesson 14. Write the mock and the test now, leaving the implementation blank. When you build the real function in Lesson 14 the test already exists.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 13 — HTTP Fundamentals

- **Subject:** How HTTP works — requests, responses, status codes, headers, authentication, tokens
- **Outcome:** Make authenticated and unauthenticated requests, handle errors by status code
- **Freshness check:** Latest httpx and requests library versions

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between a unit test and an integration test — which runs on every commit and why?
2. Why can you not test LLM output for exact string matches?
3. What does a mock do — what problem does it solve?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The request/response cycle (10 min)
- HTTP is the language of the web — every API Forge calls uses it
- A request: method, URL, headers, optional body
- A response: status code, headers, body
- The most important methods: GET, POST, PUT, DELETE

### Section 2 — Status codes (10 min)
- 2xx: success — 200 OK, 201 Created
- 3xx: redirects — follow these automatically
- 4xx: client errors — 400, 401, 403, 404, 429 — usually permanent, do not retry
- 5xx: server errors — 500, 503 — often transient, safe to retry

### Section 3 — Headers and authentication (15 min)
- Headers carry metadata — Content-Type, Accept, Authorization
- Bearer token authentication — how GitHub and OpenAI both work
- Authorization: Bearer <token> — the pattern used everywhere
- Never hardcode tokens — always load from environment variables

### Section 4 — Making requests in Python (15 min)
- Install httpx — the modern, async-capable HTTP client
- Make a GET request, read the response, check the status code
- Make an authenticated request using a Bearer token
- Handle connection errors, timeouts, and bad status codes using patterns from Lesson 07
- Write tests for each response scenario using mocks from Lesson 12
- **Forge connection:** The retry logic from Lesson 07, the async patterns from Lesson 09, and the mock tests from Lesson 12 all converge here. The HTTP client you are building is the foundation of Forge's GitHub client in the next lesson — make it general enough to reuse.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 14 — GitHub API I

- **Subject:** GitHub REST API — fetching repo tree, file metadata, authentication, rate limits
- **Outcome:** Forge fetches and prints the full file tree of any public GitHub repo
- **Freshness check:** GitHub REST API v3 current endpoints and rate limit rules

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What HTTP status codes are safe to retry and which are not — why?
2. What is Bearer token authentication and which two APIs in Forge use it?
3. What is the difference between a request header and a request body?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The GitHub REST API (10 min)
- What the API provides — repos, files, commits, users, issues
- Authentication: unauthenticated (60 req/hour) vs authenticated (5000 req/hour)
- Set up a GitHub personal access token with read-only scope — store in .env immediately

### Section 2 — Fetching repo metadata (15 min)
- GET /repos/{owner}/{repo} — understand the response object
- Extract: name, description, default branch, primary language
- Handle 404 (repo not found) and 403 (private repo) with clear error messages
- Write the first version of src/github_client.py

### Section 3 — Fetching the repo tree (20 min)
- GET /repos/{owner}/{repo}/git/trees/{sha}?recursive=1 — the full file tree in one call
- Understanding the response: blobs are files, trees are directories
- Filter to only type == "blob"
- Extract path, size, sha for each file — map to CodeFile objects from Lesson 04
- **Callback to Lesson 04:** CodeFile was built to hold exactly this data — path, size, sha. Does the dataclass need any changes now that you can see the real GitHub response shape?
- Test with a real public repo — verify the count and paths look correct

### Section 4 — Rate limit handling (10 min)
- Read rate limit headers: X-RateLimit-Remaining, X-RateLimit-Reset
- Log remaining requests after every call
- Raise a clear, informative error when the limit is hit — include the reset time
- Test with a mock response that has zero remaining — the mock from Lesson 12 is already set up for this

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 15 — GitHub API II

- **Subject:** Fetching file contents, filtering by extension, pagination, encoding edge cases
- **Outcome:** Forge downloads all .py and .cs files from a public repo into structured objects
- **Freshness check:** GitHub API pagination docs and content endpoint

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does the GitHub tree endpoint return — what is the difference between a blob and a tree?
2. What happens when Forge hits the GitHub rate limit — what should it do?
3. Why are files mapped to CodeFile objects rather than raw dicts?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Fetching file contents (15 min)
- GET /repos/{owner}/{repo}/contents/{path} — the file content endpoint
- Response includes content as a base64-encoded string — decode it
- Files over 1MB require the blob endpoint instead — check size before requesting
- Handle both cases cleanly

### Section 2 — Filtering by extension (10 min)
- Filter the tree from Lesson 14 to only files with target extensions
- Make the extension list configurable from .env — not hardcoded
- **Callback to Lesson 03:** filter_by_extension() in src/utils.py was built for exactly this. Use it here rather than rewriting the logic.
- Log what was filtered and why — give visibility into the ingestion process

### Section 3 — Pagination (15 min)
- Some GitHub endpoints return paginated results for large repos
- Read the Link header to find the next page URL
- Implement a paginator that follows next links until exhausted
- Test with a repo large enough to trigger pagination

### Section 4 — Encoding edge cases and completing the pipeline (15 min)
- Not all code files are UTF-8 — some are latin-1, windows-1252, or binary
- **Callback to Lesson 06:** encoding handling was covered in the file reader — the same patterns apply here. What approach did you use then?
- Detect encoding errors, log them, skip the file gracefully
- Never crash the entire ingestion because of a single bad file
- Complete the pipeline end to end: fetch tree → filter → download → decode → CodeFile objects

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 16 — SQL with Python

- **Subject:** SQLite in Python, schema design, inserting and querying records, storing file metadata
- **Outcome:** Forge stores every ingested file's metadata in SQLite — queryable by repo, language, path
- **Freshness check:** Python sqlite3 docs and current SQLAlchemy version

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. Why does Forge check file size before deciding which GitHub endpoint to call?
2. What is pagination — how does Forge know there is another page of results?
3. What does the full ingestion pipeline look like end to end — describe each step from repo URL to CodeFile object?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why SQL for metadata (10 min)
- Embeddings go in a vector store — metadata (repo, path, language, size) belongs in SQL
- SQL lets Forge filter before searching — only retrieve .cs files from this specific repo
- SQLite is file-based — no server needed, perfect for local development

### Section 2 — Schema design (15 min)
- Design the repos table: id, url, name, default_branch, last_ingested
- Design the files table: id, repo_id, path, language, size_bytes, sha, ingested_at
- Foreign key: files belong to repos
- Discuss the design decisions — why these columns, what trade-offs were made

### Section 3 — Creating and inserting (20 min)
- Connect to SQLite, create tables with CREATE TABLE IF NOT EXISTS
- Insert a repo record, then insert CodeFile records linked to it
- Upsert pattern — insert new files, update changed ones (detect via sha), ignore unchanged
- Use parameterised queries always — understand why string formatting is a security risk

### Section 4 — Querying and Forge connection (10 min)
- SELECT with WHERE, ORDER BY, LIMIT
- Query all files for a given repo, query files by language across all repos
- Return results as CodeFile dataclass instances — not raw tuples
- Write src/database.py with full test coverage
- **Forge connection:** Run the full pipeline now — ingest a real public repo end to end, store the results in SQLite, query them back. This is the first time every piece built in Track B works together. Verify the count of files in SQLite matches what the GitHub API returned.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push — Track B complete
