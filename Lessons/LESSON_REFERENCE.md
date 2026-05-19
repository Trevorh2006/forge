# Forge — Lesson Reference

Full content outline for all 66 lessons.
Each lesson is structured into timed sections totalling one hour.

---

## Three things woven into every lesson

### Retrieval challenge (Section 0 — 5 min)
Every lesson opens with 2–3 questions from the previous lesson answered from memory before
any new material is introduced. The AI asks the questions; you answer without looking anything
up. Wrong answers are corrected immediately. This is not optional — it is the first thing that
happens every session.

### Forge connection
Every lesson ends with a small, real task that uses what was just taught inside the actual
Forge project — even if the code gets replaced later. Theory lessons end with a written
explanation of where the concept shows up in Forge. Doing beats reading.

### Callbacks
Later lessons include explicit questions back to earlier material at the point where the
connection is live. These are marked **[Callback → Lesson N]** and are always questions,
never explanations — you reason the connection, the AI does not hand it to you.

---

## How to use this file

**At the end of a lesson:**

1. Find the next lesson below
2. Copy the title, subject, and outcome into NEXT_STEPS.md
3. Update COURSE_STATE.md, LESSON_LOG.md, and QUESTIONS.md
4. Commit and push

**At the start of a session:**

1. Paste the resume prompt into a new chat
2. Copy today's full lesson outline into the prompt so the AI knows what to cover
3. The AI runs the retrieval challenge before anything else
4. The AI must not move to the next section until the current one is understood and tested

---

## Track A — Workflow & Engineering Foundation — Lessons 01–02

---

### Lesson 01 — Forge Foundation

- **Subject:** GitHub repo creation, folder structure, course state files, first commit and push
- **Outcome:** Forge repo live on GitHub with all course infrastructure committed
- **Freshness check:** Latest Git stable version and GitHub repo creation flow

*No retrieval challenge for Lesson 01 — it is the first lesson.*

#### Section 1 — Create the repo on GitHub (10 min)

- Go to github.com, create a new repo named forge
- Settings: public, initialise with README, Python .gitignore, MIT licence
- Understand what each setting does and why it matters for the course

#### Section 2 — Clone and inspect (10 min)

- Clone to ~/forge using git clone
- Understand what cloning does — a local copy linked to the remote
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
- Push and verify everything is visible on GitHub

#### Section 5 — Update state files and Forge connection (15 min)

- Update COURSE_STATE.md — lesson 01 complete, repo path filled in
- Add first entry to LESSON_LOG.md
- Update NEXT_STEPS.md with Lesson 02 details from this file
- **Forge connection:** Write one paragraph in LESSON_LOG.md explaining in your own words
  what the repo structure is for and how you expect each folder to be used by the end of
  the course. This is the first record of your mental model — you will look back at it.
- Final commit and push

---

### Lesson 02 — Git Beyond Basics

- **Subject:** Branching, merging, resolving conflicts, reading history, Git as a checkpoint system
- **Outcome:** Create a feature branch, make changes, merge back, read the log cleanly
- **Freshness check:** Current Git best practices for solo developers

#### Section 0 — Retrieval challenge (5 min)

1. Without looking: what is the difference between git add and git commit?
2. What does .gitignore do, and name two things the Python .gitignore excludes?
3. What is the difference between the local repo and the remote repo on GitHub?

#### Section 1 — Why branches exist (10 min)

- The problem branches solve — working on something without breaking what already works
- How Forge will use branches: one per lesson, merged when done
- Understand HEAD, main, and what a branch actually is under the hood

#### Section 2 — Creating and switching branches (15 min)

- git branch, git checkout, git switch — understand the difference
- Create a branch called lesson-02-practice
- Make a change to README.md on that branch
- Switch back to main and verify it is unchanged

#### Section 3 — Merging and understanding the result (10 min)

- Switch back to main, merge the branch
- Read the merge output — understand what fast-forward means
- Delete the merged branch — understand why this is clean practice
- See the full history in git log

#### Section 4 — Reading history and resolving conflicts (10 min)

- git log --oneline — reading commit history clearly
- git diff — comparing versions before and after a change
- Deliberately create a conflict, understand what it looks like, resolve it manually
- Understand that conflicts are normal, not failures

#### Section 5 — Establish the checkpoint pattern and Forge connection (10 min)

- Agree on the branch-per-lesson pattern for the rest of the course
- **Forge connection:** Create the lesson-02-practice branch, make a real change, merge it,
  and push. You have now used the exact workflow every future lesson will follow. The pattern
  is real from this moment — not hypothetical.
- Update state files, commit, push

---

## Track B — Python for AI Engineering — Lessons 03–16

---

### Lesson 03 — Python Foundations I

- **Subject:** Python vs C# — syntax, types, variables, functions, list and dict comprehensions
- **Outcome:** A Python script that reads filenames and filters by extension using comprehensions
- **Freshness check:** Current Python stable version

#### Section 0 — Retrieval challenge (5 min)

1. What does git merge do, and what is a fast-forward merge?
2. What command shows you which files have changed but not yet been committed?
3. Why does Forge use one branch per lesson rather than committing directly to main?

#### Section 1 — Python vs C# mental model (10 min)

- Interpreted vs compiled — what this means in practice on a Mac
- Dynamic typing — no type declarations required, but type hints are available
- Indentation as syntax — not style, it is the structure of the program
- No semicolons, no braces — what replaces them and why

#### Section 2 — Types, variables, and functions (15 min)

- int, float, str, bool, None — and how they compare to C# equivalents
- def — writing functions, default arguments, keyword arguments
- Return values — Python always returns something (None if not specified)
- The difference between print() and return — a common early confusion

#### Section 3 — Lists and dicts (10 min)

- List: ordered, mutable, zero-indexed — similar to C# List\<T\>
- Dict: key-value pairs — similar to Dictionary\<K,V\>
- Common operations: append, pop, get, keys, values, items
- These two structures appear everywhere in Python — fluency matters

#### Section 4 — Comprehensions in depth and Forge connection (20 min)

- List comprehension: [x for x in items if condition]
- Dict comprehension: {k: v for k, v in pairs}
- Why fluency matters: ML and AI code is full of comprehensions
- Build the file filter script: filter a list of filenames by extension using comprehensions
- **Forge connection:** The comprehension you just wrote is close to real Forge code. The
  ingestion pipeline will filter a list of file paths by extension to decide which files to
  embed. Keep this script — it will be replaced by production code in Lesson 15, and you
  will recognise it when it arrives.
- Run it and verify the output is correct

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 04 — Python Foundations II

- **Subject:** Classes, dataclasses, type hints, generators, iterators, lazy evaluation
- **Outcome:** A typed CodeFile dataclass and a generator that yields files one at a time
- **Freshness check:** Python dataclasses and generator docs for current best practice

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between a list comprehension and a dict comprehension?
2. What does a Python function return if it has no return statement?
3. In Python, what replaces curly braces for defining a function body?

#### Section 1 — Classes vs dataclasses (15 min)

- A class in Python vs C# — same concept, different syntax
- `__init__`, self — what they are and why they exist
- dataclass decorator — eliminates boilerplate, auto-generates `__init__`, `__repr__`, `__eq__`
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
- Why this matters for large codebases — loading 50,000 files at once is not practical

#### Section 4 — Generators and Forge connection (20 min)

- yield — what it does and how it differs from return
- A generator function produces an iterator without storing everything in memory
- Why ML pipelines use generators — datasets are often too large to load at once
- Write a generator that yields CodeFile objects from a directory one at a time
- Test it — verify it yields the right objects in the right order
- **Forge connection:** This generator is not a toy. Forge will ingest real GitHub repos that
  can contain thousands of files. The generator pattern means Forge never holds the entire
  repo in memory at once. Every later lesson that processes files will use this shape.

#### Section 5 — Update state files (5 min)

- Commit src/models.py with the CodeFile dataclass and generator
- Update all four state files, commit, push

---

### Lesson 05 — Python Project Structure

- **Subject:** uv, virtual environments, pyproject.toml, package imports, logging, config with .env
- **Outcome:** Forge is a proper Python package — importable, configured, logging to console
- **Freshness check:** Latest uv docs and python-dotenv version

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between a Python class and a dataclass?
2. What does yield do, and how does it differ from return?
3. Why does Forge use a generator to yield CodeFile objects rather than returning a list?

#### Section 1 — Why project structure matters (5 min)

- Scripts vs packages — the difference and when each is appropriate
- Forge is a package: importable, testable, deployable
- What makes a directory a Python package: `__init__.py`

#### Section 2 — uv and virtual environments (15 min)

- What a virtual environment is — isolated Python and dependencies per project
- Why this matters: different projects need different library versions
- Install uv, create a venv, activate it, understand what activation does
- Install a package with uv, verify it is isolated to this project only

#### Section 3 — pyproject.toml (15 min)

- The modern Python project configuration file — replaces setup.py and requirements.txt
- name, version, dependencies, dev dependencies
- How uv uses it — install all dependencies from the file with one command
- Add pytest and python-dotenv as dependencies

#### Section 4 — Package imports and logging (15 min)

- How Python finds modules — the import system explained
- Relative vs absolute imports — which to use in Forge and why
- Set up logging with a consistent format across all Forge modules
- Log levels: DEBUG, INFO, WARNING, ERROR — when to use each

#### Section 5 — Config with .env and Forge connection (10 min)

- Load environment variables from .env using python-dotenv
- .env is never committed — verify .gitignore covers it
- Access config values safely — what to do when a required value is missing
- **Forge connection:** Add GITHUB_TOKEN and OPENAI_API_KEY placeholders to .env now.
  These are the two secrets Forge depends on. They are not used yet, but having them in
  place means every lesson from here forward can reference them without setup interrupting
  the flow.
- Update all four state files, commit, push

---

### Lesson 06 — File I/O and Data Formats

- **Subject:** Reading and writing files, pathlib, JSON, CSV, handling encodings
- **Outcome:** A script that reads all .py and .cs files from a local folder safely
- **Freshness check:** Python pathlib and json module current docs

#### Section 0 — Retrieval challenge (5 min)

1. What is a virtual environment and why does Forge use one?
2. What does `__init__.py` do in a Python package?
3. What is the difference between DEBUG and ERROR log levels — when would you use each?

#### Section 1 — pathlib (15 min)

- The modern way to work with file paths in Python — replaces os.path
- Path objects — creating, joining, checking existence, listing directories
- Path.glob() and Path.rglob() — finding files by pattern recursively
- Why pathlib is better than string concatenation for paths

#### Section 2 — Reading files safely (15 min)

- open() with context managers — why with is always used
- Read modes: r (text), rb (binary) — when to use each
- Encoding — what it is, why it matters, how to handle errors gracefully
- Files from GitHub can have any encoding — always specify UTF-8, handle errors explicitly

#### Section 3 — JSON (15 min)

- json.loads() and json.dumps() — reading and writing JSON strings
- json.load() and json.dump() — reading and writing JSON files
- Write Forge's ingested file data to JSON and read it back — verify round-trip correctness

#### Section 4 — CSV and building the file reader (5 min)

- csv module — reading and writing tabular data
- When CSV is appropriate vs JSON vs SQLite
- Build the complete file reader: find all .py and .cs files, read them, handle encoding errors
- Test every code path including the error handling path

#### Section 5 — Update state files and Forge connection (10 min)

- **Forge connection:** The file reader you just built is an early version of Forge's ingestion
  module. In Lessons 14–15 you will replace local file reading with GitHub API calls, but the
  shape is identical: find files, filter by extension, read content, handle encoding errors.
  Look at what you built and name the three things that will stay the same and the one thing
  that will change.
- Update all four state files, commit, push

---

### Lesson 07 — Error Handling and Resilience

- **Subject:** Exceptions, try/except patterns, retries with exponential backoff, defensive coding
- **Outcome:** A resilient file reader that retries on failure and logs errors without crashing
- **Freshness check:** tenacity library version for retry patterns

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between json.load() and json.loads()?
2. Why does Python always use a with statement when opening files?
3. What does Path.rglob() do, and how would you use it to find all .py files in a folder?

#### Section 1 — Exceptions in Python vs C# (10 min)

- The exception hierarchy — BaseException, Exception, and common subclasses
- try, except, else, finally — what each block does and when it runs
- Catching specific exceptions vs bare except — why bare except is always wrong
- Raising exceptions: raise, raise from — preserving the original cause

#### Section 2 — Designing for failure (15 min)

- Expected failures (file not found) vs unexpected failures (bugs)
- What to catch, what to let propagate, what to log
- Writing functions that signal failure clearly and cleanly
- Apply this thinking to Forge's file reader from Lesson 06

#### Section 3 — Exponential backoff and retries (20 min)

- Why network calls fail transiently — rate limits, timeouts, temporary server errors
- The backoff pattern — wait longer between each retry attempt
- Install tenacity, understand the @retry decorator and its parameters
- Apply retry logic to a simulated failing function — test that it retries the correct number of times
- Understand when not to retry: 404 and auth failures are permanent

#### Section 4 — Defensive coding patterns and Forge connection (10 min)

- Validate inputs at function boundaries — fail fast with clear messages
- Guard clauses — check preconditions at the top, return early
- Never silently swallow exceptions — always log at minimum
- Apply these patterns throughout Forge's file reader
- **Forge connection:** Forge will make hundreds of GitHub API calls per ingestion run. Every
  one of them can fail transiently. The retry and defensive patterns you just built are not
  optional extras — they are what separates a tool that works reliably from one that
  randomly crashes. Wrap at least one existing Forge function with @retry now.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 08 — Decorators and Functional Patterns

- **Subject:** How decorators work, writing your own, map/filter, closures
- **Outcome:** A @timed decorator applied to real Forge functions
- **Freshness check:** functools docs and current decorator patterns

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between the except and finally blocks in a try statement?
2. Why should you never use a bare except clause?
3. What does exponential backoff mean, and why is it better than retrying immediately?

#### Section 1 — Functions as first-class objects (10 min)

- In Python, functions are objects — passed as arguments, stored, returned
- This is the foundation of decorators
- Demonstrate: assign a function to a variable, pass it to another function
- Compare to C# delegates and Func\<T\> — same concept, different syntax

#### Section 2 — Closures (10 min)

- A closure is a function that remembers variables from the scope where it was created
- Why this matters: decorators are built on closures
- Write a simple closure — a counter factory
- Understand the scope chain: local, enclosing, global, built-in (LEGB)

#### Section 3 — Writing decorators (20 min)

- A decorator is a function that takes a function and returns a new function
- The wrapper pattern — wrapping the original call with extra behaviour
- functools.wraps — preserving the original function's name and docstring — always use this
- Write @timed — measures and logs how long any decorated function takes
- Apply @timed to existing Forge functions and verify it logs correctly

#### Section 4 — map, filter, and Forge connection (15 min)

- map() — apply a function to every item in an iterable
- filter() — keep only items where a function returns True
- Why comprehensions are usually preferred over map/filter in Python
- functools.reduce, functools.partial — brief but worth knowing
- **Forge connection:** Apply @timed to at least two functions already in Forge — the file
  reader and the generator. Run them and observe the output. From this point forward, any
  function you add to Forge that makes a network call or processes files should be timed.
  You will use this data in Lesson 62 when you build proper observability.

#### Section 5 — Update state files (5 min)

- Commit src/utils.py with @timed decorator
- Update all four state files, commit, push

---

### Lesson 09 — Async and Concurrency

- **Subject:** async/await, event loops, aiohttp, running concurrent API calls
- **Outcome:** Fetch three GitHub files concurrently — measure the speed difference vs sequential
- **Freshness check:** Latest asyncio and aiohttp docs

#### Section 0 — Retrieval challenge (5 min)

1. What is a closure, and what problem does it solve?
2. What does functools.wraps do inside a decorator, and why does it matter?
3. What is the difference between map() and a list comprehension — when would you choose each?

#### Section 1 — Why concurrency matters for agents (10 min)

- An agent often needs to make 5–10 API calls to answer one question
- Sequential: each call waits for the previous one to finish — slow
- Concurrent: calls run simultaneously — much faster
- The difference between concurrency (managing many tasks) and parallelism (truly simultaneous)

#### Section 2 — async and await (20 min)

- async def — declaring a coroutine function
- await — suspending execution until an awaitable completes
- asyncio.run() — the entry point for running async code
- The event loop — what it is, how it schedules coroutines
- Write a simple async function, understand what happens step by step

#### Section 3 — Running tasks concurrently (10 min)

- asyncio.gather() — run multiple coroutines concurrently, collect all results
- asyncio.create_task() — schedule a coroutine without waiting immediately
- The key difference: sequential awaits vs gather — demonstrate the time difference
- Use @timed from Lesson 08 to measure both approaches

#### Section 4 — aiohttp and Forge connection (10 min)

- requests is synchronous — cannot be used inside async functions
- aiohttp is the async equivalent — same concepts, async API
- Fetch three files concurrently using aiohttp and gather
- **[Callback → Lesson 07]** The retry decorator you built uses tenacity. Does tenacity work
  with async functions? Look up whether @retry supports async — if not, what is the solution?
- **Forge connection:** Forge's GitHub ingestion will fetch hundreds of files. Apply
  asyncio.gather() to the file fetching loop and use @timed to measure the speedup vs
  sequential. Record the numbers in a comment — you will refer back to them in Lesson 62.
- Measure and compare the time vs sequential — make the difference concrete

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 10 — NumPy Fundamentals

- **Subject:** Arrays, shapes, dtypes, broadcasting, vectorised operations
- **Outcome:** Implement vector operations using NumPy — foundation for all maths ahead
- **Freshness check:** Latest NumPy version and any API changes

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between asyncio.gather() and sequential awaits?
2. Why can you not use the requests library inside an async function?
3. What does the event loop do — what problem is it solving?

#### Section 1 — Why NumPy exists (10 min)

- Python lists are flexible but slow for numerical computation
- NumPy arrays are fixed-type, stored in contiguous memory — orders of magnitude faster
- Nearly every ML library (pandas, scikit-learn, PyTorch) is built on NumPy arrays
- Understanding NumPy is prerequisite to everything in Tracks C, D, and E

#### Section 2 — Arrays, shapes, and dtypes (20 min)

- np.array() — creating arrays from Python lists
- shape — the dimensions of an array, always rows first
- dtype — the data type of every element (float64, int32, bool)
- reshape, transpose — changing array structure without changing data
- zeros, ones, arange, linspace — creating arrays programmatically

#### Section 3 — Indexing and slicing (10 min)

- 1D indexing — same as Python lists
- 2D indexing: array[row, col] — row always first
- Slicing: array[1:4, :] — selecting ranges across dimensions
- Boolean indexing — selecting elements where a condition is true

#### Section 4 — Vectorised operations, broadcasting, and Forge connection (10 min)

- Element-wise operations — add, multiply, compare entire arrays without loops
- Why this is faster — operations happen in compiled C code, not Python
- Broadcasting — how NumPy handles arithmetic on arrays of different shapes
- Implement vector addition and scalar multiplication using NumPy
- **Forge connection:** Embedding vectors are NumPy arrays. When Forge computes similarity
  between a query and hundreds of stored chunks, it will do this with vectorised NumPy
  operations — not Python loops. The shape and dtype conventions you just learned are the
  exact same ones you will use in Lessons 22 and 40. This is not abstract preparation —
  it is the actual engine.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 11 — Testing Fundamentals

- **Subject:** pytest in depth — what to test, test structure, fixtures, parametrize, running subsets
- **Outcome:** A proper test suite for Forge's existing modules, all passing
- **Freshness check:** Latest pytest version and fixture best practices

#### Section 0 — Retrieval challenge (5 min)

1. What is the shape of a 2D NumPy array, and which dimension comes first?
2. What is broadcasting — give a concrete example of when it applies?
3. Why are NumPy operations faster than equivalent Python loops?

#### Section 1 — Why testing matters (10 min)

- Every piece of Forge code from here on is tested as it is written — not after
- What a test actually is: a function that asserts expected behaviour
- The cost of not testing in an AI system — silent failures, wrong answers, broken pipelines
- Python is known from Lessons 03–10 — testing is now the natural next step

#### Section 2 — Writing the first tests (15 min)

- pytest is already installed from Lesson 05
- Write tests for functions already built — models.py, utils.py, the file reader
- Run pytest, read the output — understand what passing and failing look like
- Write a deliberately failing test, read the failure output, understand every line

#### Section 3 — Fixtures (15 min)

- What a fixture is — shared setup that multiple tests can depend on
- Write a fixture that provides a sample CodeFile object
- Use it across multiple tests — understand why this is better than repeating setup code
- Understand fixture scope: function (default), module, session — when to use each

#### Section 4 — Parametrize, running subsets, and Forge connection (10 min)

- parametrize — testing the same function with multiple inputs in one declaration
- Running a single test file, a single test, all tests matching a keyword: pytest -k
- Understanding marks — skip, xfail — when and why to use them
- Reading a test summary — what to look at first when something fails
- **Forge connection:** Write tests for every function in Forge built so far — the CodeFile
  dataclass, the generator, the file reader, the @timed decorator. From this lesson forward,
  no Forge function is considered complete until it has a test. This is not overhead — it is
  what makes every future lesson faster, because you will know immediately when something breaks.

#### Section 5 — Update state files (5 min)

- Write tests for everything built in Lessons 03–10
- Update all four state files, commit, push

---

### Lesson 12 — Testing for AI Code

- **Subject:** Mocking API calls, handling non-deterministic output, integration vs unit tests
- **Outcome:** Mock an LLM API call in a test — no real API required, fully reproducible
- **Freshness check:** Latest pytest-mock and responses library versions

#### Section 0 — Retrieval challenge (5 min)

1. What is a pytest fixture and why is it better than repeating setup code in each test?
2. What does parametrize do — write the decorator syntax from memory?
3. What is the difference between fixture scope function and session?

#### Section 1 — The problem with testing AI code (10 min)

- LLM output is non-deterministic — the same input rarely gives exactly the same output
- API calls cost money and can fail — tests cannot depend on live APIs
- How do you test something you cannot fully predict?
- Builds directly on Lesson 11 — the same pytest skills applied to harder problems

#### Section 2 — Mocking with pytest-mock (20 min)

- What a mock is — a fake object that behaves like the real thing
- Install pytest-mock, mock a simple function, verify it was called with the right arguments
- Mock an OpenAI API call — return a fixed, known fake response
- Understand why this makes tests fast, free, and fully reproducible

#### Section 3 — Testing non-deterministic output (15 min)

- Strategy: test the structure and shape of output, not the exact content
- Write a test that verifies an LLM response has the right shape without checking exact words
- Test that a function handles an empty response gracefully
- Test that a function handles an API error gracefully

#### Section 4 — Unit vs integration tests and Forge connection (10 min)

- Unit: one function in isolation, all dependencies mocked
- Integration: multiple real components working together — slower, more realistic
- Where each belongs in Forge's test suite
- The rule: unit tests run on every commit, integration tests run explicitly
- **Forge connection:** Every agent and RAG component you build in Tracks E and F will be
  tested using exactly this pattern — mock the LLM, test the structure, test the failure
  paths. The test infrastructure you set up now is what makes that possible. Add a
  mock_llm_response fixture to conftest.py now so it is ready when you need it.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 13 — HTTP Fundamentals

- **Subject:** How HTTP works — requests, responses, status codes, headers, authentication, tokens
- **Outcome:** Make authenticated and unauthenticated requests, handle errors by status code
- **Freshness check:** Latest httpx and requests library versions

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between a unit test and an integration test?
2. What does a mock replace, and why does that make tests faster and cheaper?
3. Why do you test the shape of LLM output rather than the exact content?

#### Section 1 — The request/response cycle (10 min)

- HTTP is the language of the web — every API Forge calls uses it
- A request: method, URL, headers, optional body
- A response: status code, headers, body
- The most important methods: GET, POST, PUT, DELETE

#### Section 2 — Status codes (10 min)

- 2xx: success — 200 OK, 201 Created
- 3xx: redirects — follow these automatically
- 4xx: client errors — 400, 401, 403, 404, 429 — usually permanent, do not retry
- 5xx: server errors — 500, 503 — often transient, safe to retry

#### Section 3 — Headers and authentication (15 min)

- Headers carry metadata — Content-Type, Accept, Authorization
- Bearer token authentication — how GitHub and OpenAI both work
- Authorization: Bearer \<token\> — the pattern used everywhere
- Never hardcode tokens — always load from environment variables

#### Section 4 — Making requests and Forge connection (20 min)

- Install httpx — the modern, async-capable HTTP client
- Make a GET request, read the response, check the status code
- Make an authenticated request using a Bearer token
- **[Callback → Lesson 07]** Which HTTP status codes should trigger a retry, and which
  should fail immediately? Map your answer back to the @retry logic from Lesson 07.
- Handle connection errors, timeouts, and bad status codes using patterns from Lesson 07
- Write tests for each response scenario using mocks from Lesson 12
- **Forge connection:** Add an http_client.py module to Forge that wraps httpx with the
  retry decorator from Lesson 07, logs every request with @timed from Lesson 08, and raises
  clear errors for each 4xx and 5xx code. Every future GitHub API call goes through this
  module — build it right once.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 14 — GitHub API I

- **Subject:** GitHub REST API — fetching repo tree, file metadata, authentication, rate limits
- **Outcome:** Forge fetches and prints the full file tree of any public GitHub repo
- **Freshness check:** GitHub REST API v3 current endpoints and rate limit rules

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between a 429 and a 503 status code — should Forge retry each?
2. What does the Authorization header look like for a Bearer token request?
3. Why is httpx preferred over requests for Forge — what does it add?

#### Section 1 — The GitHub REST API (10 min)

- What the API provides — repos, files, commits, users, issues
- Authentication: unauthenticated (60 req/hour) vs authenticated (5000 req/hour)
- Set up a GitHub personal access token with read-only scope — store in .env immediately

#### Section 2 — Fetching repo metadata (15 min)

- GET /repos/{owner}/{repo} — understand the response object
- Extract: name, description, default branch, primary language
- Handle 404 (repo not found) and 403 (private repo) with clear error messages
- Write the first version of src/github_client.py using http_client.py from Lesson 13

#### Section 3 — Fetching the repo tree (20 min)

- GET /repos/{owner}/{repo}/git/trees/{sha}?recursive=1 — the full file tree in one call
- Understanding the response: blobs are files, trees are directories
- Filter to only type == "blob"
- Extract path, size, sha for each file — map to CodeFile objects from Lesson 04
- Test with a real public repo — verify the count and paths look correct

#### Section 4 — Rate limit handling and Forge connection (10 min)

- Read rate limit headers: X-RateLimit-Remaining, X-RateLimit-Reset
- Log remaining requests after every call
- Raise a clear, informative error when the limit is hit — include the reset time
- Test with a mock response that has zero remaining
- **Forge connection:** You now have a real GitHub client returning real CodeFile objects.
  This is the first time Forge does something genuinely useful. Run it against a public
  repo you know well — ideally a C# repo — and print the file tree. Notice the shape of
  the data. You will pass this tree to the chunker in Lesson 39.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 15 — GitHub API II

- **Subject:** Fetching file contents, filtering by extension, pagination, encoding edge cases
- **Outcome:** Forge downloads all .py and .cs files from a public repo into structured objects
- **Freshness check:** GitHub API pagination docs and content endpoint

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between a blob and a tree in the GitHub API response?
2. What happens when you hit the GitHub rate limit — what header tells you when it resets?
3. Why does Forge use the recursive=1 tree endpoint rather than walking directories?

#### Section 1 — Fetching file contents (15 min)

- GET /repos/{owner}/{repo}/contents/{path} — the file content endpoint
- Response includes content as a base64-encoded string — decode it
- Files over 1MB require the blob endpoint instead — check size before requesting
- Handle both cases cleanly

#### Section 2 — Filtering by extension (10 min)

- Filter the tree from Lesson 14 to only files with target extensions
- Make the extension list configurable from .env — not hardcoded
- Log what was filtered and why — give visibility into the ingestion process
- **[Callback → Lesson 03]** The comprehension you wrote in Lesson 03 filtered filenames by
  extension. How does what you are writing now compare? What stayed the same, what changed?

#### Section 3 — Pagination (15 min)

- Some GitHub endpoints return paginated results for large repos
- Read the Link header to find the next page URL
- Implement a paginator that follows next links until exhausted
- Test with a repo large enough to trigger pagination

#### Section 4 — Encoding edge cases and completing the pipeline (10 min)

- Not all code files are UTF-8 — some are latin-1, windows-1252, or binary
- Detect encoding errors, log them, skip the file gracefully
- Never crash the entire ingestion because of a single bad file
- Complete the pipeline end to end: fetch tree → filter → download → decode → CodeFile objects
- **[Callback → Lesson 06]** You handled encoding errors in Lesson 06's file reader. How does
  that handling compare to what you are doing here? Should the logic be shared?

#### Section 5 — Update state files and Forge connection (10 min)

- **Forge connection:** Run the complete ingestion pipeline against a real public repo and
  print a summary: how many files found, how many filtered in, how many had encoding errors,
  total bytes downloaded. This is the first time Forge has ingested a real codebase end to
  end. Commit the output as a sample in docs/.
- Update all four state files, commit, push

---

### Lesson 16 — SQL with Python

- **Subject:** SQLite in Python, schema design, inserting and querying records, storing file metadata
- **Outcome:** Forge stores every ingested file's metadata in SQLite — queryable by repo, language, path
- **Freshness check:** Python sqlite3 docs and current SQLAlchemy version

#### Section 0 — Retrieval challenge (5 min)

1. What is base64 encoding — why does the GitHub API use it for file contents?
2. What does paginating an API mean, and how does Forge know there is a next page?
3. Why does Forge never crash the whole ingestion because of one file with a bad encoding?

#### Section 1 — Why SQL for metadata (10 min)

- Embeddings go in a vector store — metadata (repo, path, language, size) belongs in SQL
- SQL lets Forge filter before searching — only retrieve .cs files from this specific repo
- SQLite is file-based — no server needed, perfect for local development

#### Section 2 — Schema design (15 min)

- Design the repos table: id, url, name, default_branch, last_ingested
- Design the files table: id, repo_id, path, language, size_bytes, sha, ingested_at
- Foreign key: files belong to repos
- Discuss the design decisions — why these columns, what trade-offs were made

#### Section 3 — Creating and inserting (20 min)

- Connect to SQLite, create tables with CREATE TABLE IF NOT EXISTS
- Insert a repo record, then insert CodeFile records linked to it
- Upsert pattern — insert new files, update changed ones (detect via sha), ignore unchanged
- Use parameterised queries always — understand why string formatting is a security risk

#### Section 4 — Querying and Forge connection (10 min)

- SELECT with WHERE, ORDER BY, LIMIT
- Query all files for a given repo, query files by language across all repos
- Return results as CodeFile dataclass instances — not raw tuples
- Write src/database.py with full test coverage
- **Forge connection:** Run a complete ingestion of a real public repo and verify that every
  file appears in the SQLite database with correct metadata. Then query the database: how
  many .cs files? Which is the largest? This database is Forge's permanent record of what
  it knows. Everything else — embeddings, answers — is derived from it.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push — Track B complete

---

## Track C — Maths for ML & AI — Lessons 17–27

---

### Lesson 17 — Vectors

- **Subject:** What a vector is, direction vs magnitude, geometric intuition, meaning as numbers
- **Outcome:** Draw and reason about vectors by hand, understand what an embedding vector represents
- **Freshness check:** Pure maths — no external dependencies

#### Section 0 — Retrieval challenge (5 min)

1. What does Forge store in SQLite vs what will it store in a vector store — why the split?
2. What is an upsert, and why does Forge use it rather than plain INSERT?
3. Why are parameterised queries safer than building SQL strings with string formatting?

#### Section 1 — From arrays to vectors (15 min)

- A C# array is just numbers in memory — no geometric meaning implied
- A vector is numbers with a relationship — they jointly describe something
- Direction and magnitude — the two properties that define a vector
- Draw a 2D vector as an arrow from the origin — the arrow is the vector, not the point

#### Section 2 — Vectors are not positions (10 min)

- Move the arrow to start at (1,1) — same direction and length — still the same vector
- Vectors describe displacement, not location
- Two different code snippets can occupy the same "position" in meaning space — still different directions

#### Section 3 — From geometry to meaning (20 min)

- Toy 2D example: dimension 1 = "talks about functions", dimension 2 = "talks about loops"
- Two similar code snippets have similar values in both dimensions — similar vectors
- Scale to 1536 dimensions — each dimension captures a learned aspect of meaning
- An embedding is a point in high-dimensional meaning space

#### Section 4 — Reasoning about similarity and Forge connection (5 min)

- Vectors pointing the same direction — similar meaning
- Vectors at 90 degrees (orthogonal) — completely unrelated
- Vectors pointing opposite directions — what would "opposite" mean for code?
- Why direction matters more than length — long and short functions can mean the same thing
- **Forge connection:** Every CodeFile object stored in the database will be converted into
  a vector by an embedding model in Lesson 40. That vector captures the meaning of the code.
  When a user asks Forge a question, the question becomes a vector too — and Forge finds the
  code whose vector points in the most similar direction. Draw this process on paper now.
  You are describing the exact pipeline you will build.

#### Section 5 — Update state files (5 min)

- No code this lesson — pure reasoning and drawing
- Update all four state files, commit, push

---

### Lesson 18 — Vector Operations

- **Subject:** Addition, subtraction, scalar multiplication, linear combinations
- **Outcome:** Implement vector operations from scratch in Python, verify with NumPy
- **Freshness check:** NumPy array operation docs

#### Section 0 — Retrieval challenge (5 min)

1. What are the two properties that define a vector?
2. What does it mean geometrically for two vectors to be orthogonal?
3. Why does direction matter more than magnitude when comparing code embeddings?

#### Section 1 — Vector addition (15 min)

- Add corresponding components: [1,2] + [3,4] = [4,6]
- Geometric: placing vectors tip to tail
- The famous word2vec result: king - man + woman ≈ queen — geometry in meaning space
- Implement add_vectors(a, b) from scratch

#### Section 2 — Scalar multiplication (10 min)

- Multiply every component by a scalar: 2 × [1,2] = [2,4]
- Direction unchanged, magnitude scaled
- Negative scalar — reverses direction
- Implement scale_vector(v, scalar)

#### Section 3 — Subtraction (10 min)

- Subtract corresponding components
- The vector from B to A — the direction you travel to get from one meaning to another
- Why the word2vec result works — geometry in meaning space
- Implement subtract_vectors(a, b)

#### Section 4 — Linear combinations, verification, and Forge connection (20 min)

- A linear combination: w1×v1 + w2×v2 + … — scaling and summing multiple vectors
- Why this is fundamental — a neural network layer computes a linear combination
- Implement all three operations in src/maths.py with full type hints
- Verify every result against np.add, np.multiply, np.subtract
- **[Callback → Lesson 10]** You used NumPy arrays in Lesson 10. Now you are implementing
  operations that NumPy performs internally. Why does NumPy outperform your Python
  implementation? What does your implementation help you understand that NumPy hides?
- **Forge connection:** src/maths.py is a real Forge module. It will be imported by the
  retriever in Lesson 41 to compute similarity. Write it as if someone else will read it —
  clear names, type hints, docstrings.

#### Section 5 — Update state files (5 min)

- Commit src/maths.py with vector operations and tests
- Update all four state files, commit, push

---

### Lesson 19 — Matrices

- **Subject:** What a matrix is, shapes, transpose, why neural networks are matrix operations
- **Outcome:** Represent a dataset as a matrix, transpose it, understand what each dimension means
- **Freshness check:** Pure maths — no external dependencies

#### Section 0 — Retrieval challenge (5 min)

1. What is a linear combination — write the formula and explain it in plain English?
2. What does the word2vec result king - man + woman ≈ queen demonstrate about vectors?
3. What does scalar multiplication do to a vector geometrically?

#### Section 1 — From vector to matrix (15 min)

- A vector is a single row or column of numbers
- A matrix is multiple vectors stacked together — a grid of rows and columns
- Shape notation: (3, 4) means 3 rows, 4 columns — rows always first
- The ML convention: rows = examples, columns = features

#### Section 2 — Representing Forge data as a matrix (15 min)

- Take five CodeFile objects — each row is a file, each column is a feature
- Understand what each cell means: M[2, 3] is the 4th feature of the 3rd file
- This is exactly how scikit-learn and every ML framework receives data

#### Section 3 — Transpose (15 min)

- Transpose flips rows and columns: a (3, 4) matrix becomes (4, 3)
- Why transpose appears constantly in ML — aligning dimensions before multiplication
- Implement transpose(M) from scratch, verify against np.transpose()

#### Section 4 — Identity matrix, scalar multiplication, and Forge connection (10 min)

- Identity matrix: 1s on the diagonal, 0s everywhere else — like multiplying by 1
- Scalar multiplication of a matrix: every element multiplied by the same number
- Why these appear in ML papers and derivations
- **Forge connection:** Add transpose() to src/maths.py with tests. When Forge stores
  embeddings for 500 code chunks, it is storing a matrix where each row is one chunk's
  embedding vector. The shape of that matrix — and why transpose is needed before
  similarity computation — will be concrete and familiar when you reach Lesson 40.

#### Section 5 — Update state files (5 min)

- Add transpose() to src/maths.py with tests
- Update all four state files, commit, push

---

### Lesson 20 — Matrix Multiplication

- **Subject:** The operation step by step, geometric meaning, why it is the core of deep learning
- **Outcome:** Multiply two matrices by hand and with NumPy — verify they match
- **Freshness check:** NumPy matmul docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the shape rule for matrix multiplication — what must be true about the dimensions?
2. What does the ML convention "rows = examples, columns = features" mean?
3. What does transpose do to a (3, 4) matrix?

#### Section 1 — The operation step by step (20 min)

- Row of A dotted with column of B gives one element of the result
- Work through a (2,3) × (3,2) multiplication completely by hand
- Shape rule: (m, k) × (k, n) = (m, n) — the inner dimensions must match
- Why order matters: AB ≠ BA — demonstrate with a small example

#### Section 2 — Why this is the core of deep learning (15 min)

- A neural network layer: output = input @ weight_matrix
- Attention in transformers: Q, K, V are each computed by a matrix multiply
- Every forward pass through any neural network is matrix multiplications plus activations

#### Section 3 — Implement and verify (10 min)

- Implement matmul(A, B) from scratch — nested loops, clear and readable
- Verify against np.matmul() and the @ operator
- Add to src/maths.py with tests

#### Section 4 — Batch operations and Forge connection (10 min)

- In ML, you process many examples at once — a batch
- Batched matrix multiply: (batch, m, k) @ (k, n) = (batch, m, n)
- Why GPU acceleration matters — matrix multiplication is parallelisable
- **Forge connection:** Commit matmul() to src/maths.py. Then open any transformer
  architecture diagram and identify at least two places where a matrix multiply appears.
  Write a comment in maths.py linking each function to where it appears in Forge's pipeline.
  These comments are for you — they will make Lessons 37 and 38 click faster.

#### Section 5 — Update state files (5 min)

- Commit matmul() to src/maths.py
- Update all four state files, commit, push

---

### Lesson 21 — Dot Product

- **Subject:** The calculation, geometric meaning, relationship to matrix multiplication
- **Outcome:** Implement dot_product() in src/maths.py with full tests
- **Freshness check:** Pure maths with NumPy verification

#### Section 0 — Retrieval challenge (5 min)

1. Walk through a (2,3) × (3,2) matrix multiplication — what shape is the result?
2. Why does order matter in matrix multiplication — why is AB ≠ BA?
3. What is the @ operator in Python NumPy code?

#### Section 1 — The calculation (10 min)

- Multiply corresponding elements, sum all the products
- [1,2,3] · [4,5,6] = 4 + 10 + 18 = 32
- Result is always a scalar — the core operation inside matrix multiplication

#### Section 2 — Geometric interpretation (20 min)

- High positive result — pointing the same direction
- Zero — perpendicular, no alignment at all
- Negative — pointing away from each other
- A · B = |A| × |B| × cos(θ) — work through 2D examples by hand

#### Section 3 — The magnitude problem (10 min)

- Sensitive to vector length — longer vectors produce larger numbers
- For embedding similarity we want direction only, not length
- This motivates cosine similarity — the next lesson

#### Section 4 — Implement, test, and Forge connection (15 min)

- Implement dot_product(a, b) in src/maths.py
- Raise ValueError if lengths do not match
- Tests: basic result, identical vectors, orthogonal (expect 0), mismatched lengths
- Verify all results match np.dot()
- **[Callback → Lesson 17]** In Lesson 17, you said direction matters more than magnitude
  for code similarity. The dot product is sensitive to magnitude. How does knowing this
  change your thinking about how Forge should compute similarity between embeddings?
- **Forge connection:** dot_product() is the building block for cosine similarity, which
  is the building block for Forge's retriever. You are one lesson away from having the
  complete mathematical foundation for the search engine you will build in Lesson 41.

#### Section 5 — Update state files (5 min)

- Commit dot_product() to src/maths.py
- Update all four state files, commit, push

---

### Lesson 22 — Cosine Similarity

- **Subject:** Normalisation, why direction beats magnitude, formula derived from dot product
- **Outcome:** Implement cosine_similarity() in src/maths.py, test against known pairs
- **Freshness check:** scikit-learn cosine_similarity for verification

#### Section 0 — Retrieval challenge (5 min)

1. What does the dot product of two orthogonal vectors equal, and why?
2. What is the magnitude problem — why is raw dot product not good enough for similarity?
3. What is the formula A · B = |A| × |B| × cos(θ) telling you geometrically?

#### Section 1 — The magnitude problem revisited (10 min)

- A one-line function and a 200-line function doing the same thing — we want them to score as similar
- Normalisation: divide a vector by its magnitude to get a unit vector of length exactly 1
- Now comparison is purely about direction

#### Section 2 — Magnitude and normalisation (15 min)

- Magnitude: square root of sum of squares — |[3,4]| = sqrt(9+16) = 5
- Unit vector: divide every element by the magnitude — [3,4]/5 = [0.6, 0.8]
- Verify: [0.6,0.8] · [0.6,0.8] = 1.0 — length is exactly 1
- Implement magnitude(v) and normalise(v) in src/maths.py

#### Section 3 — Cosine similarity formula (15 min)

- cos(θ) = (A · B) / (|A| × |B|) — equivalently: dot_product(normalise(A), normalise(B))
- Result always between -1 and 1: 1.0 = identical direction, 0 = orthogonal, -1 = opposite
- Implement cosine_similarity(a, b) using the functions already written

#### Section 4 — Test with known pairs and Forge connection (15 min)

- Orthogonal: [1,0,0] and [0,1,0] — expect exactly 0.0
- Opposite: [1,0,0] and [-1,0,0] — expect exactly -1.0
- Similar: [0.9,0.1,0.8] and [0.85,0.15,0.75] — expect close to 1.0
- Verify all results match scikit-learn's cosine_similarity
- **Forge connection:** cosine_similarity() is now complete. Import src/maths.py in a scratch
  script and use it to compare two short code snippets — one similar pair, one unrelated pair
  — using hard-coded toy vectors. You cannot call the embedding API yet, but you can reason
  about what the scores should be. In Lesson 38 you will replace the toy vectors with real
  embeddings and this result will be the first thing you verify.

#### Section 5 — Update state files (5 min)

- Commit cosine_similarity(), magnitude(), normalise() to src/maths.py
- Update all four state files, commit, push

---

### Lesson 23 — Probability and Distributions

- **Subject:** Probability, conditional probability, Bayes intuition, how models express uncertainty
- **Outcome:** Understand what a model means when it assigns 0.9 probability to a token
- **Freshness check:** Pure maths — no external dependencies

#### Section 0 — Retrieval challenge (5 min)

1. What is cosine similarity — describe it in plain English without the formula?
2. Why does normalising vectors before computing similarity give better results for code?
3. What value does cosine similarity return for two identical vectors?

#### Section 1 — Probability basics (15 min)

- Probability as a number between 0 and 1 — a scale from impossible to certain
- The sum rule: all possible outcomes must sum to 1
- Joint probability P(A and B), marginal probability P(A)

#### Section 2 — Conditional probability (15 min)

- P(A|B): the probability of A given that B has already happened
- A language model computes P(next_token | all_previous_tokens)
- Given "The function returns" — the model assigns probabilities to the whole vocabulary

#### Section 3 — Bayes' theorem intuition (15 min)

- P(A|B) = P(B|A) × P(A) / P(B) — updating beliefs when new evidence arrives
- Work through one concrete example fully — understand the update logic, not just the formula

#### Section 4 — Distributions, LLM output, and Forge connection (10 min)

- A distribution assigns a probability to every possible outcome — sums to 1
- An LLM outputs a distribution over the entire vocabulary at each step
- Temperature: high = flatter distribution = more random; low = peaked = more deterministic
- **Forge connection:** When Forge calls an LLM to answer a question, the model is computing
  conditional probabilities over tokens — P(next_token | system_prompt + context + query).
  The system prompt and retrieved context you provide shift this distribution toward accurate
  answers about the specific codebase. That is the core mechanism of RAG. Write a one-paragraph
  explanation of this in your own words and add it as a comment to src/rag.py — even though
  that file does not exist yet. Create the file with just the comment.

#### Section 5 — Update state files (5 min)

- No code this lesson — pure reasoning
- Update all four state files, commit, push

---

### Lesson 24 — Statistics Fundamentals

- **Subject:** Mean, variance, standard deviation, the normal distribution in depth
- **Outcome:** Compute and interpret statistics on real data from Forge's database
- **Freshness check:** NumPy and scipy.stats current docs

#### Section 0 — Retrieval challenge (5 min)

1. What does conditional probability P(A|B) mean — give a concrete example?
2. What does temperature do to an LLM's output distribution?
3. What is Bayes' theorem telling you in plain English?

#### Section 1 — Mean and variance by hand (15 min)

- Mean: sum all values, divide by the count — the centre of mass
- Variance: average squared distance from the mean — measures spread
- Standard deviation: square root of variance — same units as the data
- Work through calculations by hand on a small dataset first

#### Section 2 — The normal distribution (20 min)

- The bell curve — symmetric around the mean, tails falling off on both sides
- Defined by two parameters: mean and standard deviation
- The 68-95-99.7 rule: 68% within 1 std, 95% within 2 std, 99.7% within 3 std
- Why ML assumes normality: the central limit theorem

#### Section 3 — Apply to Forge's actual data (15 min)

- Load file sizes from Forge's SQLite database using the database module from Lesson 16
- Compute mean, variance, std using NumPy — interpret what they mean about the codebase
- Plot a histogram — code file sizes are almost certainly right-skewed, not normal
- **[Callback → Lesson 16]** You built the SQLite database in Lesson 16. Query it now to get
  file sizes. Is the distribution what you expected? What does the shape tell you about
  how Forge should handle very large files before embedding them?

#### Section 4 — Outliers and Forge connection (5 min)

- Mean is sensitive to outliers — one huge file distorts everything
- Median: the middle value when sorted — robust to outliers
- Apply to Forge: identify outlier files by size — files in the top 1% by size
- **Forge connection:** The outlier analysis you just ran is directly relevant to Lesson 39
  (chunking). Files far outside the normal size range need different treatment — either
  aggressive chunking or exclusion. Note the size threshold you would use as a comment in
  src/chunker.py. Create the file with just this comment if it does not exist yet.

#### Section 5 — Update state files (5 min)

- Commit the statistics analysis script
- Update all four state files, commit, push

---

### Lesson 25 — Information Theory Basics

- **Subject:** Entropy, cross-entropy, KL divergence — why cross-entropy is the standard loss function
- **Outcome:** Compute entropy of a small distribution by hand, understand why it appears in training
- **Freshness check:** Pure maths — no external dependencies

#### Section 0 — Retrieval challenge (5 min)

1. What is standard deviation measuring — explain it without using the word "spread"?
2. Why is median more robust than mean for skewed data like file sizes?
3. What does the 68-95-99.7 rule tell you about a normal distribution?

#### Section 1 — What is information? (10 min)

- Information is surprise — rare events carry more information than common ones
- "The sun rose today" — no information; "The server is down" — high information
- Claude Shannon's 1948 question: how do you measure information mathematically?

#### Section 2 — Entropy (20 min)

- H(p) = -sum(p(x) × log₂(p(x))) for all outcomes x — the average surprise
- Fair coin: H = 1.0 bit — maximum uncertainty for a binary choice
- 99/1 loaded coin: H ≈ 0.08 bits — almost no uncertainty
- High entropy = high uncertainty

#### Section 3 — Cross-entropy (20 min)

- H(p, q) = -sum(p(x) × log(q(x))) — using model distribution q to describe true distribution p
- When q exactly matches p: H(p,q) = H(p) — minimum possible
- Training a language model: p is the true next token, q is the model's prediction
- Minimise cross-entropy = make q match p = the model learns
- **[Callback → Lesson 23]** In Lesson 23 you learned that an LLM outputs a probability
  distribution over the vocabulary. Cross-entropy is how the training process measures
  how wrong that distribution is. Connect these two ideas: what exactly is being minimised
  during LLM training?

#### Section 4 — KL divergence and Forge connection (5 min)

- KL(p||q) = H(p,q) - H(p) — the extra surprise from using q instead of p
- Always ≥ 0, equals 0 only when p = q
- Appears in VAEs, RLHF, knowledge distillation — brief intuition only
- **Forge connection:** Cross-entropy loss is the reason the embedding model Forge uses
  produces vectors where similar code is close together. The model was trained to minimise
  cross-entropy on a prediction task — as a side effect, its internal representations
  became geometrically meaningful. Write a comment in src/maths.py connecting entropy
  minimisation to why cosine_similarity() works on embeddings.

#### Section 5 — Update state files (5 min)

- No code this lesson — pure maths
- Update all four state files, commit, push

---

### Lesson 26 — Loss Functions and Optimisation

- **Subject:** MSE, cross-entropy loss, minimising loss geometrically, gradient descent with plots
- **Outcome:** Plot a loss curve, find the minimum by hand and by gradient step
- **Freshness check:** matplotlib current version

#### Section 0 — Retrieval challenge (5 min)

1. What is entropy measuring — what does high entropy mean about a distribution?
2. What is cross-entropy measuring — how does it differ from entropy?
3. Why does minimising cross-entropy during training make an LLM better?

#### Section 1 — What loss is (10 min)

- Loss measures how wrong the model is — lower is better
- Loss is a function of the model's parameters — change the weights, change the loss
- Training: compute loss, adjust parameters to reduce it, repeat millions of times

#### Section 2 — Mean squared error (15 min)

- MSE = (1/n) × sum((prediction - truth)²) — used for regression
- Why squared: always positive, penalises large errors more than small ones
- Compute MSE by hand: predictions=[2,5,9], truth=[3,4,10] → MSE = 1.0

#### Section 3 — Cross-entropy loss (10 min)

- Used for classification and language modelling — connects to Lesson 25
- Penalises confident wrong answers most severely
- P(Python)=0.9 when true → low loss; P(Python)=0.1 when true → very high loss

#### Section 4 — Gradient descent with plots and Forge connection (20 min)

- Draw a 1D loss curve — a bowl shape with a minimum
- The gradient is the slope — tells you which direction is uphill
- Move in the opposite direction of the gradient — always downhill
- Step size (learning rate): too large = overshoot, too small = very slow
- Plot a simple loss function in matplotlib, take five manual gradient steps, watch convergence
- **Forge connection:** The embedding model Forge uses was trained by gradient descent on
  cross-entropy loss. You are not training models in this course, but you are using the
  result of training. In Lesson 38 you will call an embedding API — the vectors it returns
  are the weights of a model that converged to a low-loss point on a curve like the one you
  just plotted. Annotate your plot with a note explaining this connection.

#### Section 5 — Update state files (5 min)

- Commit the plotting script
- Update all four state files, commit, push

---

### Lesson 27 — Gradients and Backpropagation

- **Subject:** Partial derivatives, chain rule intuition, how gradients flow through a network
- **Outcome:** Trace backpropagation through a two-layer network by hand
- **Freshness check:** Pure maths — no external dependencies

#### Section 0 — Retrieval challenge (5 min)

1. What does the learning rate control in gradient descent — what happens if it is too high?
2. Why does cross-entropy loss penalise confident wrong answers more than uncertain wrong answers?
3. What is MSE and when is it used instead of cross-entropy?

#### Section 1 — Partial derivatives (15 min)

- Loss depends on thousands of parameters simultaneously
- Partial derivative ∂f/∂x: how much does f change if we nudge only x?
- Compute partial derivatives of simple functions by hand

#### Section 2 — The chain rule (15 min)

- Composing functions: f(g(x)) — a neural network is many functions composed
- Chain rule: df/dx = (df/dg) × (dg/dx) — derivatives multiply through the chain
- This is the entire mathematical basis of backpropagation

#### Section 3 — Forward pass (10 min)

- A two-layer network: input → linear layer → activation → linear layer → loss
- Compute the output at each layer, compute the final loss
- Track every intermediate value — they are all needed during the backward pass

#### Section 4 — Backward pass and Forge connection (15 min)

- Work backwards applying the chain rule at each step
- Compute the gradient of loss with respect to every weight
- These gradients tell us which direction to adjust each weight to reduce loss
- **[Callback → Lesson 20]** Matrix multiplication is the core operation of the forward pass.
  The backward pass computes gradients using the transpose of the weight matrix. Look back
  at the transpose() function in src/maths.py — you now understand why it exists.
- **Forge connection:** You now have the full mathematical foundation for every component
  Forge uses. Write a one-page summary in docs/maths_foundation.md connecting each concept
  to where it appears in Forge: vectors → embeddings, cosine similarity → retrieval,
  matrix multiplication → transformer internals, gradient descent → how the models were
  trained. This document is for you — it cements Track C before you move on.

#### Section 5 — Update state files (5 min)

- No new code — pure maths
- Update all four state files, commit, push — Track C complete

---

## Track D — Data & Classical ML — Lessons 28–36

---

### Lesson 28 — DataFrames I

- **Subject:** Pandas — loading, inspecting, indexing, selecting, basic operations
- **Outcome:** Load Forge's SQLite metadata into a DataFrame, inspect and filter it
- **Freshness check:** Latest pandas version and docs

#### Section 0 — Retrieval challenge (5 min)

1. What does backpropagation compute — what is the output?
2. Why does the backward pass need the transpose of the weight matrix?
3. What is the chain rule and why does it make backpropagation possible?

#### Section 1 — What pandas is and why (10 min)

- pandas is the standard library for tabular data in Python
- A DataFrame is a table — rows are records, columns are attributes
- Similar to a SQL result set or a C# DataTable — use that intuition

#### Section 2 — Loading data (15 min)

- pd.read_sql() — load Forge's SQLite metadata directly into a DataFrame
- Inspect: df.head(), df.tail(), df.info(), df.describe()
- Understand what info() and describe() reveal about the data

#### Section 3 — Indexing and selecting (20 min)

- df['column'] — single column returns a Series
- df[['col1', 'col2']] — multiple columns returns a DataFrame
- df.loc and df.iloc — label-based and integer-based row selection
- Boolean indexing: df[df['language'] == 'Python'] — the most common pattern

#### Section 4 — Basic operations and Forge connection (10 min)

- value_counts(), sort_values(), nunique()
- Apply to Forge's metadata: files per language, largest files, most common repos
- **Forge connection:** Load Forge's actual SQLite database into a DataFrame now. Run
  value_counts() on the language column and sort_values() on size_bytes. These are the
  first real statistics about a codebase Forge has ingested. What does the data tell you
  about the repo? Write three observations in LESSON_LOG.md.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 29 — DataFrames II

- **Subject:** Cleaning, transforming, handling missing data, merging, groupby
- **Outcome:** Clean and transform Forge's metadata — duplicates removed, gaps filled, grouped
- **Freshness check:** pandas cleaning and groupby docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between df.loc and df.iloc?
2. What does df.describe() tell you — name three things it shows?
3. What does boolean indexing look like in pandas — write the syntax from memory?

#### Section 1 — Missing data (15 min)

- isnull(), notnull() — detecting missing values
- fillna() — replacing missing values; dropna() — removing rows with missing values
- When to fill vs drop — depends on why data is missing

#### Section 2 — Cleaning and transforming (20 min)

- drop_duplicates(), rename(), astype()
- str accessor: lower(), strip(), contains()
- Apply to Forge: normalise file paths, lowercase language names

#### Section 3 — Merging DataFrames (10 min)

- pd.merge() on a shared key — inner, left, outer
- This is SQL JOIN — use that intuition directly
- Merge files DataFrame with repos DataFrame

#### Section 4 — groupby and Forge connection (10 min)

- df.groupby('language').agg({'size_bytes': ['mean', 'sum', 'count']})
- Apply to Forge: file counts and average sizes per language per repo
- **Forge connection:** Run the full groupby analysis on Forge's real ingested data. Which
  language has the largest average file size? Which repo has the most files? These numbers
  inform decisions in Lesson 39 (chunking strategy) and Lesson 43 (context window
  management). Save the output as a CSV in docs/corpus_stats.csv.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 30 — Data Visualisation

- **Subject:** matplotlib, seaborn — histograms, bar charts, box plots
- **Outcome:** Visualise Forge's corpus — file size distribution, language breakdown, repo comparison
- **Freshness check:** Latest matplotlib and seaborn versions

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between fillna() and dropna() — when would you use each?
2. What does pd.merge() do — what is the equivalent in SQL?
3. What does groupby().agg() produce — describe the output shape?

#### Section 1 — Why visualise first (5 min)

- Numbers alone hide patterns — plots reveal them immediately
- Always visualise your data before building any model

#### Section 2 — matplotlib basics (15 min)

- The figure/axes model — a figure contains one or more axes
- plt.hist(), plt.bar(), plt.scatter() — the most used chart types
- Labels, titles, legends — every plot must have all three

#### Section 3 — Histograms and distributions (15 min)

- Plot the distribution of file sizes from Forge's database
- Log scale for skewed data — makes the shape readable
- **[Callback → Lesson 24]** In Lesson 24 you computed statistics on file sizes and predicted
  the distribution would be right-skewed. Does the plot confirm this? What does the shape
  tell you about chunking strategy?

#### Section 4 — seaborn and Forge connection (20 min)

- sns.countplot() — language breakdown as a bar chart
- sns.boxplot() — file size distribution by language side by side
- sns.heatmap() — correlation between numerical features
- Apply all three to Forge's metadata
- **Forge connection:** Save all three plots to docs/corpus_visualisation/. These are real
  analysis outputs about a real codebase Forge has ingested. They belong in the portfolio
  README — you will reference them in Lesson 66.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 31 — Features and Feature Engineering

- **Subject:** What features are, encoding categorical data, scaling, selection
- **Outcome:** Engineer features from Forge's code files — line count, function count, comment ratio
- **Freshness check:** scikit-learn preprocessing docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the figure/axes model in matplotlib?
2. When would you use a log scale on a histogram axis?
3. What does a box plot show that a histogram does not?

#### Section 1 — What features are (10 min)

- A feature is a measurable, numeric property of an example
- ML models can only work with numbers — everything must be converted
- Feature engineering is often more impactful than model choice

#### Section 2 — Extracting features from code (20 min)

- Count lines, blank lines, comment lines, function definitions, class definitions
- Compute ratios: comment_ratio, function_density
- Write src/feature_extractor.py with tests

#### Section 3 — Encoding categorical features (15 min)

- One-hot encoding: one binary column per category
- Ordinal encoding: assign integers — only when there is genuine order
- Use scikit-learn's OneHotEncoder

#### Section 4 — Scaling and Forge connection (10 min)

- StandardScaler: zero mean, unit variance
- MinMaxScaler: scale to [0, 1]
- When scaling matters and when it does not — tree models are scale-invariant
- **Forge connection:** Run feature extraction on every file in Forge's SQLite database and
  add the features as new columns. Store the enriched dataset as a CSV. These features will
  be used in Lessons 32–35 for classification and regression experiments — and more
  importantly, they could eventually supplement embedding-based retrieval with structural
  signals. Note this possibility in a comment in src/feature_extractor.py.

#### Section 5 — Update state files (5 min)

- Commit src/feature_extractor.py
- Update all four state files, commit, push

---

### Lesson 32 — Classification

- **Subject:** Classification algorithms, train/test split, scikit-learn, predictions
- **Outcome:** Train a classifier that predicts programming language from code features
- **Freshness check:** Latest scikit-learn version

#### Section 0 — Retrieval challenge (5 min)

1. What is one-hot encoding and when would you use it?
2. What does StandardScaler do to a feature column?
3. What is comment_ratio as a feature — why might it be useful for predicting language?

#### Section 1 — What classification is (10 min)

- Predict which category an example belongs to
- Binary vs multiclass — predicting language is multiclass
- The scikit-learn interface: fit(), predict(), score()

#### Section 2 — Train/test split (15 min)

- Models tested on training data appear better than they are
- train_test_split() — shuffle and split
- Stratification: ensure each class is proportionally represented

#### Section 3 — Training a classifier (20 min)

- Start with RandomForestClassifier — robust, few hyperparameters
- fit(X_train, y_train), predict(X_test)
- Compare predictions to true labels manually first

#### Section 4 — Basic evaluation and Forge connection (10 min)

- accuracy_score() — fraction correct
- Understand when accuracy is misleading — imbalanced classes
- Try LogisticRegression as a second model and compare
- **Forge connection:** Train the language classifier on real Forge data — the feature
  extractor output from Lesson 31. Does it correctly classify C# vs Python files? Use your
  C# knowledge to spot-check predictions. The classifier is not used in production Forge —
  but the exercise validates that the features you engineered carry real signal.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 33 — Regression

- **Subject:** Linear regression, when to use it, fitting, interpreting coefficients
- **Outcome:** Predict file complexity from structural features, interpret what the model learned
- **Freshness check:** scikit-learn LinearRegression docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between classification and regression?
2. What does train_test_split stratification do, and why does it matter?
3. What is RandomForestClassifier doing at a high level — how does it make a prediction?

#### Section 1 — Classification vs regression (10 min)

- Classification: predict a category; regression: predict a continuous number
- Define a complexity score for Forge files: weighted sum of functions, nesting depth, line count

#### Section 2 — Linear regression (20 min)

- y = w1×x1 + w2×x2 + … + b — a weighted sum of features plus a bias
- Fit LinearRegression on Forge features, predict complexity scores

#### Section 3 — Interpreting coefficients (20 min)

- Each weight tells you how much that feature contributes
- Sort by absolute weight value — which features matter most?
- Use your C# and Python knowledge to sanity check the model
- **[Callback → Lesson 20]** A linear regression prediction is a linear combination of
  features. A neural network layer is also a linear combination followed by an activation.
  What is the difference between what you are doing here and what a neural network layer
  does? What does the activation function add?

#### Section 4 — Residual analysis and Forge connection (5 min)

- Residual = predicted - actual
- Plot residuals — should be random noise around zero
- A pattern in residuals means the model is systematically wrong somewhere
- **Forge connection:** The complexity score you computed for each file is a real signal
  about the codebase. Add it to Forge's SQLite database as a new column on the files table.
  High-complexity files are the ones most likely to benefit from Forge's explanation agent —
  note this connection in src/database.py.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 34 — Model Evaluation

- **Subject:** Precision, recall, F1, confusion matrices, ROC curves
- **Outcome:** Fully evaluate the language classifier from Lesson 32 with all metrics plotted
- **Freshness check:** scikit-learn metrics docs

#### Section 0 — Retrieval challenge (5 min)

1. What is a residual, and what does a pattern in the residuals tell you?
2. What does each coefficient in a linear regression tell you?
3. What is the difference between a linear regression prediction and a neural network layer?

#### Section 1 — Why accuracy is not enough (10 min)

- 95% of files are Python → always predict Python = 95% accuracy, useless model
- Precision: of all times we predicted Python, how often were we right?
- Recall: of all actual Python files, how many did we identify?

#### Section 2 — Confusion matrix (15 min)

- Predicted class vs actual class — read every cell
- True positives, true negatives, false positives, false negatives
- Plot with seaborn heatmap — which languages are confused with each other and why?

#### Section 3 — F1 score (10 min)

- F1 = 2 × (precision × recall) / (precision + recall)
- Macro F1: average across all classes equally
- Weighted F1: weighted by class size — usually better for imbalanced problems

#### Section 4 — ROC curves and Forge connection (20 min)

- ROC: plots true positive rate vs false positive rate as decision threshold varies
- AUC: Area Under the Curve — 1.0 perfect, 0.5 random
- One ROC curve per class — one-vs-rest approach
- **Forge connection:** The evaluation framework you are building here — precision, recall,
  F1 — is the same conceptual framework used to evaluate Forge's retriever in Lesson 46.
  Context precision and context recall in RAG evaluation are the same ideas applied to
  retrieved chunks instead of classified labels. Note this in a comment in tests/eval/.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 35 — Overfitting, Underfitting, Cross-Validation

- **Subject:** Bias/variance tradeoff, k-fold cross-validation, regularisation intuition
- **Outcome:** Demonstrate overfitting on a toy dataset, fix it with cross-validation
- **Freshness check:** scikit-learn cross_val_score docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between precision and recall — which matters more for Forge retrieval?
2. What does AUC measure — what does 0.5 mean?
3. What is weighted F1 and why is it better than macro F1 for imbalanced classes?

#### Section 1 — Overfitting (15 min)

- A model that memorises training data but fails on new data
- Demonstrate: very deep decision tree, 100% training accuracy, poor test accuracy
- Plot training vs test accuracy as complexity increases — the overfitting cliff

#### Section 2 — Underfitting (10 min)

- A model too simple to capture the pattern — poor on both training and test
- The bias-variance tradeoff: simple = high bias, complex = high variance

#### Section 3 — Cross-validation (20 min)

- A single split gives unreliable results — depends on which data ended up where
- k-fold CV: split into k parts, train on k-1, test on 1, rotate k times, average
- cross_val_score() — runs the full procedure automatically
- Apply to Forge's language classifier — compare single split vs 5-fold results

#### Section 4 — Regularisation and Forge connection (10 min)

- Add a penalty to the loss for large weights — discourages overfitting
- L1 (Lasso): drives some weights to zero — feature selection
- L2 (Ridge): shrinks all weights — general overfitting control
- **Forge connection:** The bias-variance tradeoff appears in RAG system design too. A
  retriever that returns too many chunks (high variance — too much noise) and one that
  returns too few (high bias — missing relevant context) both produce worse answers. The
  n_results parameter in Lesson 41 is a direct analogue of model complexity. Note this
  parallel in a comment in src/retriever.py — create the file with just this comment.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 36 — Clustering

- **Subject:** K-means, silhouette score, choosing k, visualising clusters
- **Outcome:** Cluster Forge's code files — see natural groupings emerge without labels
- **Freshness check:** scikit-learn clustering docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the bias-variance tradeoff — explain it using the words overfitting and underfitting?
2. What does k-fold cross-validation do that a single train/test split does not?
3. What is L2 regularisation doing to the model weights?

#### Section 1 — Unsupervised learning (10 min)

- No labels — the algorithm finds structure in the data on its own
- Clustering: group similar examples together without pre-labelling anything

#### Section 2 — K-means algorithm (20 min)

- Choose k centroids, assign each example to nearest centroid, recompute, repeat
- Convergence: stops when assignments stop changing
- Apply to Forge's code features — try k=3, k=5, k=10

#### Section 3 — Choosing k (15 min)

- Elbow method: plot inertia vs k — find the elbow where adding clusters stops helping
- Silhouette score: how well each point fits its cluster vs the nearest other — higher is better
- Compute both for k from 2 to 10

#### Section 4 — Visualising clusters and Forge connection (10 min)

- PCA: reduce to 2 dimensions while preserving as much variance as possible
- Plot the 2D projection, colour each point by cluster assignment
- Inspect examples from each cluster — do the groupings make sense?
- **[Callback → Lesson 17]** Clustering is finding groups of similar vectors. In Lesson 17
  you described embeddings as points in high-dimensional meaning space. K-means is doing
  exactly what you described — grouping code by meaning. What does this suggest about
  how Forge could organise a large codebase for a user who wants an overview?
- **Forge connection:** Run k-means clustering on Forge's actual file feature vectors.
  Inspect what files cluster together. Are .cs files clustering separately from .py files?
  Are utility files clustering separately from business logic? Write your observations in
  docs/cluster_analysis.md. This analysis could become a "codebase overview" feature
  in Forge — note it as a future enhancement.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push — Track D complete

---

## Track E — LLMs, Embeddings & RAG — Lessons 37–47

---

### Lesson 37 — LLM Fundamentals

- **Subject:** Tokens, attention intuition, transformers, temperature, sampling
- **Outcome:** Call the OpenAI API, vary temperature, observe and explain the differences
- **Freshness check:** Latest OpenAI API docs and available models

#### Section 0 — Retrieval challenge (5 min)

1. What is unsupervised learning — how does it differ from classification?
2. What does PCA do, and why is it used before plotting clusters?
3. What does the silhouette score measure?

#### Section 1 — What an LLM actually is (15 min)

- A function: takes a sequence of tokens, outputs a probability distribution over the next token
- Tokens are subword units — roughly 4 characters each
- The model is an enormous set of learned weights — billions of parameters
- Training: predict the next token across billions of documents, minimise cross-entropy loss
- **[Callback → Lesson 25]** Cross-entropy loss was the subject of Lesson 25. Connect it
  here: what exactly is the true distribution p and the model distribution q during LLM training?

#### Section 2 — Transformers and attention intuition (20 min)

- The transformer architecture: dominant since "Attention Is All You Need" (2017)
- Attention: every token can attend to every other token — captures long-range dependencies
- Why transformers beat earlier architectures: no forgetting over long distances
- Multi-head attention: multiple attention patterns running in parallel
- **[Callback → Lesson 20]** Attention is computed using matrix multiplications — Q, K, V
  matrices. What shape are these matrices? What does the @ operator do to them?

#### Section 3 — Temperature and sampling (15 min)

- The model outputs logits — raw scores for every token in the vocabulary
- Softmax converts logits to probabilities
- Temperature scales logits before softmax: high = flatter = more random; low = peaked = deterministic
- Call the OpenAI API at temperature 0, 0.5, and 1.5 — compare and explain the differences

#### Section 4 — Practical API usage and Forge connection (5 min)

- The messages format: system, user, assistant
- max_tokens, temperature, model — the three parameters you set on every call
- Cost: input tokens + output tokens = money — always be conscious of this
- **Forge connection:** Add a call_llm() function to src/llm_client.py. It takes a system
  prompt, a list of messages, and optional temperature. It logs token usage and estimated
  cost after every call using @timed from Lesson 08. Every future LLM call in Forge goes
  through this function — no raw API calls anywhere else.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 38 — What Embeddings Are

- **Subject:** Semantic meaning as vectors, how embedding models work, code vs prose
- **Outcome:** Embed ten code snippets, compute pairwise similarity, verify similar code clusters
- **Freshness check:** Latest OpenAI and sentence-transformers embedding model options

#### Section 0 — Retrieval challenge (5 min)

1. What is a token — roughly how many characters is one token?
2. What does temperature 0 do to an LLM's output — why would you use it?
3. What is the messages format for an OpenAI API call — what are the three roles?

#### Section 1 — From LLM to embedding model (15 min)

- An LLM generates text — an embedding model generates vectors
- The embedding is extracted from an internal layer of the model
- Similar meaning → similar vector
- Why code embeddings work: the model was trained on enormous amounts of code

#### Section 2 — Embedding models for code (10 min)

- OpenAI text-embedding-3-small: 1536 dimensions, fast, good for code and prose
- sentence-transformers: open source, runs locally, no API cost
- Trade-offs: quality vs cost vs speed vs privacy

#### Section 3 — Embed and compare (25 min)

- Choose ten snippets: three similar Python functions, three similar C# functions, four unrelated
- Call the embedding API for all ten
- Compute pairwise cosine similarity using src/maths.py from Lesson 22
- Display the full similarity matrix — similar functions should score > 0.85, unrelated < 0.5
- **[Callback → Lesson 22]** In Lesson 22 you tested cosine_similarity() with toy vectors.
  Now you are using it with real embedding vectors. Do the results match your expectations
  from the toy test? What does a score of 0.92 between two functions tell you?

#### Section 4 — Why embeddings beat keyword search and Forge connection (5 min)

- find_user() and get_user_by_id() share no keywords but are semantically identical
- Keyword search cannot see this — embedding search can
- **Forge connection:** Add embed_text() and embed_batch() to src/embedder.py. embed_batch()
  should use asyncio.gather() from Lesson 09 to embed multiple chunks concurrently. Use
  @timed to log latency and cost per batch. This is the module Forge's ingestion pipeline
  will call in Lesson 40 — build it production-ready now.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 39 — Chunking Strategies

- **Subject:** Why chunking matters, code-specific approaches, overlap, metadata attachment
- **Outcome:** Forge chunks ingested files into meaningful units with full metadata — committed and tested
- **Freshness check:** Latest chunking research and LangChain text splitter docs

#### Section 0 — Retrieval challenge (5 min)

1. What is an embedding vector — what does each dimension represent?
2. Why do similar code functions have similar embedding vectors?
3. What is text-embedding-3-small — what are its dimensions and typical use case?

#### Section 1 — The chunking problem (10 min)

- Embedding models have a token limit — a large file cannot be embedded whole
- Bad chunking destroys semantic meaning — splitting a function halfway loses context
- Good chunking preserves semantic units — one complete idea per chunk

#### Section 2 — Chunking strategies for prose vs code (15 min)

- Prose: split at sentence or paragraph boundaries
- Code: split at function, class, or method boundaries — syntactic semantic units
- Fixed-size with overlap: a fallback when structure cannot be detected
- Overlap: include the last n tokens of the previous chunk — prevents losing context at boundaries

#### Section 3 — Code-aware chunking (20 min)

- Parse Python with the ast module — find function and class boundaries
- Detect other languages by searching for def, class, function, sub keywords
- Fall back to fixed-size when parsing fails
- Each chunk carries metadata: file path, repo, language, start line, end line, sha
- Implement src/chunker.py — write tests for each strategy
- **[Callback → Lesson 24]** In Lesson 24 you identified outlier files by size. How does
  that analysis inform chunking strategy? Should very large files be chunked differently?

#### Section 4 — Chunk size tradeoffs and Forge connection (10 min)

- Small chunks: precise retrieval, less context per result
- Large chunks: more context, less precise retrieval
- Function-level chunking is Forge's default — document the decision in the code
- **Forge connection:** Run the chunker against every file in Forge's database. Print a
  summary: total chunks created, average chunk size in tokens, largest chunk, smallest
  chunk. Compare actual numbers to the statistics from Lesson 24. Does the size distribution
  match your predictions? Store the chunk count per file back in the SQLite database.

#### Section 5 — Update state files (5 min)

- Commit src/chunker.py with tests
- Update all four state files, commit, push

---

### Lesson 40 — Vector Storage

- **Subject:** What a vector store is, ChromaDB — indexing, storing with metadata, querying
- **Outcome:** Forge stores all chunk embeddings in ChromaDB and retrieves by natural language query
- **Freshness check:** Latest ChromaDB version and API

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between function-level chunking and fixed-size chunking?
2. Why does Forge include overlap between chunks?
3. What metadata does each chunk carry, and why does each field matter?

#### Section 1 — Why a vector store (10 min)

- Comparing every vector to every other vector is too slow at scale
- Approximate nearest neighbour algorithms make this fast enough
- ChromaDB: lightweight, local, file-based — the right choice for Forge now
- ChromaDB stores vectors, SQLite stores file content — they work together

#### Section 2 — ChromaDB setup and collections (15 min)

- Install ChromaDB, create a persistent client
- A collection is a named group of embeddings — one per ingested repo
- Each document has: an ID, the embedding vector, optional metadata, optional text

#### Section 3 — Indexing Forge's chunks (20 min)

- Full pipeline: CodeFile → chunker → embed → store in ChromaDB with metadata
- Batch embedding: embed multiple chunks in one API call
- Upsert: add new chunks, update changed ones, ignore unchanged
- Verify: count documents, spot-check metadata
- **[Callback → Lesson 10]** Embedding vectors are NumPy arrays. ChromaDB accepts lists
  of floats. What conversion is needed? What shape do you expect the embeddings matrix
  to be for a repo with 500 chunks and 1536-dimensional embeddings?

#### Section 4 — Querying and Forge connection (10 min)

- Embed the query string using the same model as the documents
- collection.query(query_embeddings=…, n_results=10, where={'language': 'CSharp'})
- Print the top 5 results for a test query — verify they are relevant
- **Forge connection:** Run the complete ingestion pipeline end to end for a real public
  C# repo: GitHub API → CodeFile → chunker → embedder → ChromaDB. Then run a natural
  language query. This is the first time Forge has answered a real search query about a
  real codebase. Print the top 5 results and judge them using your C# knowledge.

#### Section 5 — Update state files (5 min)

- Commit src/vector_store.py
- Update all four state files, commit, push

---

### Lesson 41 — Retrieval

- **Subject:** Top-k retrieval, metadata filtering, hybrid search — dense plus sparse
- **Outcome:** Plain English query → most relevant code chunks with similarity scores
- **Freshness check:** ChromaDB query docs and hybrid search options

#### Section 0 — Retrieval challenge (5 min)

1. What is an approximate nearest neighbour algorithm — why does Forge need it?
2. What is a ChromaDB collection, and why does Forge use one per repo?
3. What does the where clause in a ChromaDB query do?

#### Section 1 — Dense retrieval (15 min)

- Embed the query, find the k nearest vectors in ChromaDB
- Top-k: return the k most similar chunks
- Implement retrieve() in src/retriever.py — clean, typed, tested
- **[Callback → Lesson 22]** retrieve() uses cosine similarity internally. ChromaDB does
  this for you — but you understand exactly what it is computing. How does knowing the
  maths change how you think about what the results mean?

#### Section 2 — Metadata filtering (15 min)

- Filter by metadata before similarity search — only search within a specific repo or language
- ChromaDB's where clause: {'language': 'CSharp'}
- Add optional filter parameters to retrieve()

#### Section 3 — Sparse retrieval BM25 (15 min)

- BM25: keyword-based ranking — the algorithm behind traditional search engines
- Dense retrieval finds semantic matches, sparse finds keyword matches
- Install rank_bm25, build an index over chunk text, query it

#### Section 4 — Hybrid search and Forge connection (10 min)

- Combine dense and sparse results — more robust than either alone
- Reciprocal rank fusion: merge ranked lists without needing compatible scores
- Implement hybrid_retrieve() in src/retriever.py
- **Forge connection:** Test retrieve() and hybrid_retrieve() on five real questions about
  a C# repo. For each question, compare the results from dense-only vs hybrid. Where does
  hybrid give better results? Where does it not help? Write your observations as a comment
  in src/retriever.py — they will inform the evaluation in Lesson 46.

#### Section 5 — Update state files (5 min)

- Commit src/retriever.py
- Update all four state files, commit, push

---

### Lesson 42 — Reranking

- **Subject:** Why first retrieval is not good enough, cross-encoders, reranking strategies
- **Outcome:** Add reranking — compare results before and after, measure quality improvement
- **Freshness check:** Latest sentence-transformers CrossEncoder docs

#### Section 0 — Retrieval challenge (5 min)

1. What is BM25 — what kind of matching does it do that dense retrieval cannot?
2. What is reciprocal rank fusion — why does it not need compatible scores?
3. What is the difference between dense and sparse retrieval — when does each shine?

#### Section 1 — The two-stage retrieval pattern (10 min)

- Stage 1 (recall): retrieve a large candidate set quickly — top 20–50
- Stage 2 (precision): rerank the candidates — return top 5–10
- Why not just use a precise model for stage 1? — too slow at scale

#### Section 2 — Cross-encoders (20 min)

- A bi-encoder encodes query and document separately — fast but less accurate
- A cross-encoder takes query and document together — more accurate but slower
- sentence-transformers CrossEncoder — outputs a relevance score for any (query, document) pair

#### Section 3 — Implement reranking (20 min)

- Retrieve top 20 with the bi-encoder
- Score all 20 with the cross-encoder
- Sort by cross-encoder score, return top 5
- Add rerank() to src/retriever.py

#### Section 4 — Before and after and Forge connection (5 min)

- Run five test queries without and with reranking
- Are the reranked results better? Use C# domain knowledge to judge
- **Forge connection:** Reranking improves precision at the cost of latency. Use @timed to
  measure how much latency it adds. Is the quality improvement worth it? Document your
  conclusion as the default setting in src/retriever.py with a comment explaining the
  reasoning. This is a real engineering trade-off decision.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 43 — Context Window Management

- **Subject:** Token limits, overflow handling, summarisation, sliding windows, truncation
- **Outcome:** Handle a query whose retrieved chunks exceed the context limit gracefully
- **Freshness check:** Latest model context window sizes and tiktoken docs

#### Section 0 — Retrieval challenge (5 min)

1. What is a cross-encoder — how does it differ from a bi-encoder?
2. Why is two-stage retrieval faster than using a cross-encoder for all documents?
3. What trade-off does reranking introduce — what does @timed tell you about it?

#### Section 1 — The context window (10 min)

- Every LLM has a maximum number of tokens — system prompt + history + chunks + query
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
- **[Callback → Lesson 35]** The n_results parameter controls how many chunks the retriever
  returns. Too many → context overflow. Too few → missing information. This is the
  bias-variance tradeoff in RAG. What n_results would you set as a default and why?

#### Section 4 — Summarisation and Forge connection (10 min)

- Alternative: summarise chunks that do not fit
- When to truncate vs summarise — summarise important context, truncate low-ranked
- Implement the summarisation fallback
- **Forge connection:** Test fit_to_context() with a query that retrieves more chunks than
  the token budget allows. Verify that the lowest-ranked chunks are removed first and that
  the system prompt is never truncated. Write a test that deliberately triggers the overflow
  path — add it to the test suite.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 44 — Prompt Engineering

- **Subject:** System prompts, few-shot examples, chain of thought, structured output, prompt hygiene
- **Outcome:** Write and evaluate three variants of a Forge system prompt
- **Freshness check:** Latest OpenAI prompt engineering guide

#### Section 0 — Retrieval challenge (5 min)

1. What is a token budget — what components does Forge's budget need to account for?
2. Why should Forge remove whole chunks rather than truncating mid-chunk?
3. What does tiktoken do — what problem does it solve?

#### Section 1 — Why prompts matter (10 min)

- The prompt is the only thing you control at inference time
- The same model gives dramatically different answers to different prompts
- For Forge: the system prompt determines the quality of every answer

#### Section 2 — System prompts (15 min)

- Sets the model's role, constraints, output format, and behaviour
- Be specific about what the model should and should not do
- Include the format you want: prose, JSON, citations
- Write Forge's first system prompt — explicit about citing sources

#### Section 3 — Few-shot examples (15 min)

- Show the model examples of the output you want
- Examples are more powerful than instructions for complex formatting tasks
- Add two examples of good Forge answers — test the difference against no examples

#### Section 4 — Chain of thought, structured output, and Forge connection (15 min)

- Chain of thought: "think step by step" — forces reasoning before answering
- Structured output: instruct the model to respond in JSON — parse and use it
- Write three prompt variants, evaluate each on five test questions, pick the best
- **Forge connection:** Commit the best system prompt to src/prompts.py. Every specialist
  agent in Track F will have its own system prompt that inherits from this base. Write it
  in a way that can be extended — a base prompt that specialists can prepend to without
  conflict. This is the last piece before the full RAG pipeline is assembled.

#### Section 5 — Update state files (5 min)

- Commit the best system prompt to src/prompts.py
- Update all four state files, commit, push

---

### Lesson 45 — RAG — Cited Answers

- **Subject:** Assembling the full pipeline — retrieve, rerank, construct prompt, generate, cite
- **Outcome:** Forge answers a question about a real repo and cites the exact files used
- **Freshness check:** Latest OpenAI chat completion docs

#### Section 0 — Retrieval challenge (5 min)

1. What is chain of thought prompting — why does "think step by step" improve answers?
2. What is few-shot prompting — how does it differ from instruction prompting?
3. What does structured output prompting ask the model to do?

#### Section 1 — The full pipeline (10 min)

- Step 1: receive a query
- Step 2: retrieve + rerank relevant chunks
- Step 3: fit chunks to context window
- Step 4: construct the prompt using the best prompt from Lesson 44
- Step 5: call the LLM, generate an answer
- Step 6: parse citations from the answer

#### Section 2 — Prompt construction (15 min)

- System prompt from Lesson 44 — already refined
- Context section: each chunk labelled with its source file path and line range
- Instruction: answer based only on provided context, cite every claim

#### Section 3 — Implementing src/rag.py (25 min)

- answer(query, repo=None, language=None) → AnswerResult
- AnswerResult: answer text, list of citations, list of source chunks
- Wire all components together — retriever, context builder, LLM call, response parser
- Test with three real questions about a real public GitHub repo
- **[Callback → Lesson 23]** In Lesson 23 you wrote a comment in src/rag.py explaining
  how conditional probability connects to RAG. Read it now. Does it still make sense?
  Update it based on what you have learned since.

#### Section 4 — Citation parsing and Forge connection (5 min)

- Instruct the model to cite using [FILE: path] markers
- Parse citations from the response with simple string matching
- Return citations alongside the answer — every claim is traceable
- **Forge connection:** Run the complete RAG pipeline against a real public C# repo and ask
  three questions you could answer yourself using your C# knowledge. Judge the answers for
  accuracy, relevance, and citation quality. Write your assessment in LESSON_LOG.md — this
  is the first real benchmark of Forge's quality. You will return to this assessment in
  Lesson 46.

#### Section 5 — Update state files (5 min)

- Commit src/rag.py
- Update all four state files, commit, push

---

### Lesson 46 — Evaluation I — Concepts

- **Subject:** Relevance, faithfulness, context precision, context recall, hallucination detection
- **Outcome:** Define and manually score five Forge answers against all evaluation criteria
- **Freshness check:** Latest RAGAS framework docs and evaluation research

#### Section 0 — Retrieval challenge (5 min)

1. What are the six steps of Forge's RAG pipeline in order?
2. What is an AnswerResult — what does it contain?
3. What does [FILE: path] citation syntax achieve — how is it parsed?

#### Section 1 — Why evaluation is hard for RAG (10 min)

- Unlike classification, there is no single correct answer to evaluate against
- Four things can go wrong: bad retrieval, bad generation, hallucination, missing information
- Need metrics that independently assess each stage

#### Section 2 — Retrieval metrics (20 min)

- Context precision: of the retrieved chunks, what fraction were actually relevant?
- Context recall: of all relevant information in the corpus, what fraction was retrieved?
- Compute these manually for three test queries — judge relevance by hand
- **[Callback → Lesson 34]** Precision and recall in RAG evaluation are the same concepts
  as precision and recall in the language classifier from Lesson 34. How does the
  definition map? What is the "true positive" in a RAG retrieval context?

#### Section 3 — Generation metrics (20 min)

- Faithfulness: does the answer only contain claims supported by retrieved context?
- Answer relevance: does the answer actually address the question asked?
- Hallucination: does the answer contain claims not in the context?
- **[Callback → Lesson 45]** Score the five Forge answers you assessed manually at the end
  of Lesson 45. Apply all four metrics. Which metric scores lowest? That is the weakest
  part of the pipeline to fix first.

#### Section 4 — Why manual evaluation first and Forge connection (5 min)

- Automated metrics approximate human judgement
- The manual scores from this lesson become ground truth for Lesson 47's automated suite
- **Forge connection:** Save your manual evaluation scores as JSON in tests/eval/manual_baseline.json.
  This file is ground truth — every automated metric in Lesson 47 will be validated against it.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 47 — Evaluation II — Forge's Eval Suite

- **Subject:** Automated evals, ground truth datasets, running in CI, interpreting results over time
- **Outcome:** Automated eval suite scoring Forge's RAG pipeline — committed to tests/eval/
- **Freshness check:** Latest RAGAS and evaluation tooling versions

#### Section 0 — Retrieval challenge (5 min)

1. What is context precision — how do you compute it manually?
2. What is faithfulness — how do you detect a hallucination?
3. What is the difference between retrieval metrics and generation metrics?

#### Section 1 — Building a ground truth dataset (15 min)

- A set of (question, expected_answer, relevant_file_paths) tuples
- Derive from manual evaluations in Lesson 46
- Store as JSON in tests/eval/

#### Section 2 — Automated relevance scoring (15 min)

- Use an LLM as a judge: given question, context, and answer — rate faithfulness 1–5
- Implement evaluate_faithfulness() and evaluate_relevance()
- Calibrate against manual scores — do the automated scores agree?

#### Section 3 — RAGAS (15 min)

- Install RAGAS, configure, run against Forge's test questions
- Understand each metric — they map to concepts from Lesson 46
- Add RAGAS as a dev dependency

#### Section 4 — Running evals and Forge connection (10 min)

- Run the eval suite, interpret the output
- Which questions fail? Which retrieve poorly? Which hallucinate?
- Use results to identify the weakest part of the pipeline and fix it first
- **Forge connection:** The eval suite is now a permanent fixture of Forge's development.
  Every change to the retriever, chunker, or prompts should be followed by a run of the
  eval suite. Add a comment to the README explaining how to run it. This is what separates
  an AI system from a hobby project — you can measure whether it is getting better.

#### Section 5 — Update state files (5 min)

- Commit tests/eval/ with ground truth dataset and eval suite
- Update all four state files, commit, push — Track E complete

---

## Track F — Agents & Orchestration — Lessons 48–60

---

### Lesson 48 — Agent Concepts

- **Subject:** What makes something an agent — perception, memory, planning, action
- **Outcome:** Draw the Forge agent loop on paper, identify every component before writing code
- **Freshness check:** Latest agent architecture writing and framework comparisons

#### Section 0 — Retrieval challenge (5 min)

1. What does the RAGAS eval suite measure — name three metrics?
2. What is an LLM-as-judge — why is it useful for evaluating generation quality?
3. Why does the eval suite run separately from the normal test suite?

#### Section 1 — Pipeline vs agent (15 min)

- A RAG pipeline is linear: query → retrieve → generate → done
- An agent is a loop: perceive → plan → act → observe → repeat
- The agent decides what to do next — the pipeline does not

#### Section 2 — The four components (20 min)

- Perception: what the agent can sense — query, tool results, memory
- Memory: short-term (current conversation), long-term (persistent)
- Planning: deciding what to do next — which tool to call, when to stop
- Action: calling a tool, generating a response, asking a clarifying question

#### Section 3 — The agent loop (15 min)

- Observe the state, choose an action, execute it, observe the result, update state, repeat
- Termination: the agent decides it has enough information to answer
- Draw Forge's agent loop — every component, every arrow

#### Section 4 — Why agents fail and Forge connection (5 min)

- Infinite loops, hallucinated tool calls, context overflow — covered in Lesson 59
- **Forge connection:** Draw the complete Forge agent loop on paper, then scan or photograph
  it and save it to docs/agent_loop_diagram.png. Label every arrow with the Python module
  that will implement it. This diagram is the architecture you are building for the next
  12 lessons. Looking at it before every lesson will keep you oriented.

#### Section 5 — Update state files (5 min)

- No code this lesson — architecture and reasoning
- Update all four state files, commit, push

---

### Lesson 49 — ReAct and Reasoning Patterns

- **Subject:** Chain of thought, ReAct pattern, tree of thought intuition
- **Outcome:** Trace a ReAct loop manually for a Forge query
- **Freshness check:** Latest ReAct paper and chain of thought research

#### Section 0 — Retrieval challenge (5 min)

1. What are the four components of an agent — perception, and what else?
2. What is the difference between a RAG pipeline and an agent loop?
3. What causes an agent to terminate — what does it check?

#### Section 1 — Chain of thought (15 min)

- "Think step by step" — forces the model to reason before committing to an answer
- Why it works: intermediate reasoning steps constrain the final answer
- Zero-shot CoT: just add "think step by step" to the prompt

#### Section 2 — The ReAct pattern (25 min)

- Reason: think about what to do next
- Act: call a tool with specific parameters
- Observe: receive the tool result
- Repeat until confident enough to answer
- Format: Thought / Action / Observation / Final Answer
- Trace through a Forge example by hand: "what does UserService do in this repo?"

#### Section 3 — Tree of thought (10 min)

- Explore multiple reasoning paths simultaneously
- Prune paths that are not working, expand promising ones
- Important for reading current agent research

#### Section 4 — Applying to Forge and Forge connection (5 min)

- Forge's base agent will use ReAct
- The system prompt must instruct the Thought/Action/Observation format
- **Forge connection:** Write the ReAct trace manually for two more Forge queries before
  writing any code — one where one tool call is enough, one where two are needed. Write
  these traces in docs/react_traces.md. The traces are the specification for the agent loop
  you will implement in Lesson 52. Code should follow the trace, not the other way around.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 50 — Tool Design

- **Subject:** Designing reliable tools — descriptions, parameters, error contracts, granularity
- **Outcome:** Design and implement search_code, get_file, list_repos
- **Freshness check:** Latest OpenAI function calling and tool use docs

#### Section 0 — Retrieval challenge (5 min)

1. What are the three steps of the ReAct pattern — Thought, Action, and what?
2. Why does the model not execute tool calls directly — what does it return instead?
3. Why does a tool description need to be precise — who reads it?

#### Section 1 — What makes a good tool (15 min)

- Unambiguous — the agent should know exactly when to use it
- The description is read by the model — must be precise and complete
- Parameters must be well-typed and clearly documented
- Error behaviour must be explicit — the agent needs to know what failure looks like

#### Section 2 — OpenAI function calling format (15 min)

- JSON schema: name, description, parameters
- The model does not call the tool — it returns a structured request
- The application executes the tool and returns the result

#### Section 3 — Implement Forge's three tools (20 min)

- search_code(query, repo=None, language=None, n=10): semantic search
- get_file(repo, path): fetch the full content of a specific file
- list_repos(): list all ingested repos with metadata
- Write src/tools.py with JSON schema descriptions — test each tool in isolation

#### Section 4 — Tool granularity and Forge connection (5 min)

- Too fine-grained: too many calls per task; too coarse-grained: not enough control
- The test: can the agent accomplish any Forge task with only these three tools?
- **Forge connection:** Trace through the ReAct examples from Lesson 49 using the actual
  tool signatures you just defined. Do the traces still work? If a trace calls a tool that
  does not exist, you need either a fourth tool or a redesign. Resolve this before moving on.

#### Section 5 — Update state files (5 min)

- Commit src/tools.py
- Update all four state files, commit, push

---

### Lesson 51 — Memory Architecture

- **Subject:** Short-term, long-term, episodic, semantic memory — implementing for Forge
- **Outcome:** Short-term conversation memory and long-term file storage implemented
- **Freshness check:** Latest memory architecture patterns in agent research

#### Section 0 — Retrieval challenge (5 min)

1. What are Forge's three tools — describe each in one sentence?
2. What is the JSON schema format for a tool — what fields does it need?
3. What is the difference between too fine-grained and too coarse-grained tools?

#### Section 1 — Four types of memory (15 min)

- Short-term: the current conversation — in the context window
- Long-term: survives across sessions — stored externally
- Episodic: what happened in past sessions
- Semantic: facts the agent knows — a knowledge base

#### Section 2 — Short-term memory (15 min)

- Store the conversation as a list of messages: role + content
- Include in every LLM call — the model sees the full conversation
- When the conversation gets too long: summarise old turns, keep recent ones
- Implement ConversationMemory in src/memory.py

#### Section 3 — Long-term memory (20 min)

- Store key facts from past conversations in SQLite
- What to store: repos asked about, preferences, resolved questions
- Write at the end of each session, load relevant memories at the start
- Implement LongTermMemory in src/memory.py
- **[Callback → Lesson 43]** Short-term memory lives in the context window. When the
  conversation grows too long, what happens? How does fit_to_context() from Lesson 43
  apply here?

#### Section 4 — Memory retrieval and Forge connection (5 min)

- Not all long-term memory is relevant to every query
- Use embedding similarity to retrieve relevant memories — same technique as RAG
- **Forge connection:** Implement a test that starts a session, asks two questions, ends the
  session, starts a new session, and verifies that relevant long-term memories are loaded.
  This end-to-end test proves that memory actually persists. Agents without persistent
  memory start from zero every time — that is not useful for a developer tool.

#### Section 5 — Update state files (5 min)

- Commit src/memory.py
- Update all four state files, commit, push

---

### Lesson 52 — Forge Base Agent

- **Subject:** Implementing the agent loop — perceive, plan, call tools, observe, respond
- **Outcome:** A working base agent that uses retrieval as a tool to answer questions
- **Freshness check:** Latest OpenAI tool calling docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between short-term and long-term memory in an agent?
2. What triggers summarisation of old conversation turns?
3. Why does Forge use embedding similarity to retrieve long-term memories?

#### Section 1 — The agent loop in code (15 min)

- The loop: call LLM → check if tool call → execute tool → add result to history → repeat
- Maximum iterations: always set a hard limit — prevent infinite loops
- Termination: the model returns a final answer with no tool call

#### Section 2 — The system prompt (10 min)

- Define Forge's role and available tools
- Instruct the model to reason before acting — Thought/Action/Observation format
- Include citation instructions

#### Section 3 — Implementing the loop (25 min)

- Send messages to the LLM with tools attached
- Parse the response: is it a tool call or a final answer?
- If tool call: extract name and parameters, call the function, add result to messages
- If final answer: return it with citations
- Test with three real questions — trace every iteration
- **[Callback → Lesson 49]** Compare the running agent to the manual ReAct traces you
  wrote in Lesson 49. Does the agent follow the same reasoning path? If not, is the
  deviation better or worse than the manual trace?

#### Section 4 — Error handling and Forge connection (5 min)

- Tool call with missing parameters: return an error, let the agent retry
- Tool call for uninvested repo: return a clear error
- Maximum iterations reached: return a partial answer with a note
- **Forge connection:** Run the base agent against five real C# questions. Use @timed to
  measure average response time and log token usage per question. Record these as baseline
  numbers in docs/performance_baseline.md. Every optimisation you make in later lessons
  should be measured against this baseline.

#### Section 5 — Update state files (5 min)

- Commit src/agents/base_agent.py
- Update all four state files, commit, push

---

### Lesson 53 — Explanation Agent

- **Subject:** Specialist agent design, system prompt scoping, explaining code, evaluation
- **Outcome:** An agent that explains any function or class in plain language
- **Freshness check:** Latest system prompt best practices

#### Section 0 — Retrieval challenge (5 min)

1. What is the maximum iterations limit for — what failure does it prevent?
2. Walk through the agent loop in pseudocode — what happens at each step?
3. What does the agent return when the LLM produces a tool call vs a final answer?

#### Section 1 — Specialist agent design (10 min)

- A specialist has a narrow, well-defined job — does one thing very well
- The system prompt defines the specialisation — everything else inherited from base agent
- Job: explain what code does, why it exists, how to use it, for a developer new to the codebase

#### Section 2 — The explanation system prompt (15 min)

- Role: code explanation assistant
- Behaviour: clear, use analogies, avoid jargon, include examples
- Output: what it does, why it exists, how to use it, edge cases
- Constraints: base explanations on retrieved code only — do not invent behaviour

#### Section 3 — Implement explanation_agent.py (25 min)

- Inherit from or compose with base_agent.py — share the tool infrastructure
- Override only the system prompt
- Test with five real functions from a public C# repo — use C# knowledge to judge quality

#### Section 4 — Evaluation and Forge connection (5 min)

- Score each explanation: accurate (y/n), clear (1–5), complete (y/n)
- Add five test cases to tests/eval/agents/
- **Forge connection:** The explanation agent is the most immediately useful agent for your
  own work. Test it on a C# codebase you have personally worked in — code you know well.
  Is the explanation accurate? Does it catch things you would have missed? Your C#
  expertise is the ground truth here.

#### Section 5 — Update state files (5 min)

- Commit src/agents/explanation_agent.py
- Update all four state files, commit, push

---

### Lesson 54 — Testing Agent

- **Subject:** Generating pytest tests from code, evaluating test quality
- **Outcome:** An agent that reads a function and writes meaningful pytest tests
- **Freshness check:** Latest pytest conventions and test generation approaches

#### Section 0 — Retrieval challenge (5 min)

1. What is a specialist agent — how does it differ from the base agent?
2. What does "override only the system prompt" mean architecturally?
3. What makes an explanation accurate vs merely fluent?

#### Section 1 — What makes a good test (15 min)

- Tests the behaviour, not the implementation
- Covers the happy path, edge cases, and failure cases
- Is independent and readable — the test name explains what it tests
- **[Callback → Lesson 11]** You learned pytest fundamentals in Lesson 11. A testing agent
  generates pytest code. What makes a generated test different from a hand-written one
  in terms of quality risks? What should you always check before trusting generated tests?

#### Section 2 — The testing agent system prompt (15 min)

- Generate pytest tests for the provided code
- Instructions: happy path, at least two edge cases, at least one failure case
- Output: complete, runnable pytest code with no placeholders

#### Section 3 — Implement testing_agent.py (20 min)

- Retrieve the function or class from Forge
- Generate tests in the specified format including necessary imports and fixtures
- Run the generated tests — they should pass or fail for the right reasons

#### Section 4 — Evaluation and Forge connection (5 min)

- Introduce a deliberate bug — does the generated test catch it?
- Add five test generation cases to tests/eval/agents/
- **Forge connection:** Use the testing agent to generate tests for src/maths.py functions
  that you did not fully test in Track C. Run the generated tests. Do they catch any bugs
  or edge cases you missed? This is a real quality audit of your own code.

#### Section 5 — Update state files (5 min)

- Commit src/agents/testing_agent.py
- Update all four state files, commit, push

---

### Lesson 55 — Refactor Agent

- **Subject:** Code quality analysis, identifying smells, suggesting improvements, diff generation
- **Outcome:** An agent that suggests refactoring improvements with reasoning and diffs
- **Freshness check:** Latest static analysis tools and refactoring patterns

#### Section 0 — Retrieval challenge (5 min)

1. What does the testing agent check for — name the three types of test cases?
2. What is the risk of trusting generated tests without running them?
3. Why is the happy path not sufficient on its own?

#### Section 1 — Code smells the agent detects (15 min)

- Long functions, duplicate code, poor naming, deep nesting, missing error handling
- Include these explicitly in the system prompt — the agent must know what to look for

#### Section 2 — The refactor agent system prompt (15 min)

- Role: identify code quality issues and suggest specific improvements
- Output: for each issue — what it is, where it is, the improved version
- Constraints: preserve behaviour — suggest refactors, not rewrites

#### Section 3 — Implement refactor_agent.py (20 min)

- Retrieve target code, identify issues, suggest improvements
- Generate a before/after diff for each suggestion
- Test on five real functions from a public repo

#### Section 4 — Safe suggestions and Forge connection (5 min)

- Always include: "verify with your test suite after applying this change"
- The testing agent and refactor agent work together — refactor then test
- **Forge connection:** Run the refactor agent on src/github_client.py — a module written
  early in the course that has not been revisited. Apply any suggestions that look correct,
  then run the test agent on the refactored code. This is the refactor → test workflow that
  the router in Lesson 58 will orchestrate automatically.

#### Section 5 — Update state files (5 min)

- Commit src/agents/refactor_agent.py
- Update all four state files, commit, push

---

### Lesson 56 — C# Language Agent

- **Subject:** Language-specific tuning, C# idioms, .NET patterns, language-aware retrieval
- **Outcome:** A specialist agent for C# codebases that understands .NET conventions
- **Freshness check:** Latest C# language features and .NET docs

#### Section 0 — Retrieval challenge (5 min)

1. What is the refactor agent's primary constraint — what must it never do?
2. What is a before/after diff — why is it more useful than a description alone?
3. Why do the refactor agent and testing agent work well together?

#### Section 1 — Why a language-specific agent (10 min)

- A generic agent does not know .NET conventions
- Your C# knowledge is the evaluation benchmark — this is where your background is a direct advantage

#### Section 2 — C# knowledge in the system prompt (20 min)

- .NET naming conventions, patterns (Repository, Service, Controller, Factory)
- LINQ idioms, async/await patterns, Task vs void, CancellationToken
- IDisposable — always in a using block
- Include this knowledge explicitly in the system prompt

#### Section 3 — Language-aware retrieval (15 min)

- Filter ChromaDB queries to language == 'CSharp'
- Weight results from .cs files higher
- Recognise C# namespaces, classes, and interfaces in the query

#### Section 4 — Test, evaluate, and Forge connection (10 min)

- Test with five real questions about a public C# repo
- Judge accuracy using your C# expertise
- Add five C# agent test cases to tests/eval/agents/
- **Forge connection:** This is the agent where your background gives Forge a genuine edge.
  A developer without C# knowledge could not have written this system prompt or evaluated
  these results. Document in the README that the C# agent was calibrated against real .NET
  codebase knowledge — this is a differentiator worth highlighting in the portfolio.

#### Section 5 — Update state files (5 min)

- Commit src/agents/csharp_agent.py
- Update all four state files, commit, push

---

### Lesson 57 — Agent Evaluation

- **Subject:** How to know if an agent is working — task completion, tool use quality, faithfulness
- **Outcome:** Evaluation suite scoring each Forge agent on a fixed set of real tasks
- **Freshness check:** Latest agent evaluation research and tooling

#### Section 0 — Retrieval challenge (5 min)

1. What makes the C# agent different from the base agent — beyond the system prompt?
2. What is language-aware retrieval — what does it change in the ChromaDB query?
3. Why is your C# background an advantage specifically for this agent?

#### Section 1 — Agent evaluation is harder than RAG evaluation (10 min)

- RAG has a clear pipeline — evaluate each stage
- An agent has a loop — the path to an answer varies between runs
- Need process metrics (what it did) and outcome metrics (what it produced)

#### Section 2 — Task completion (15 min)

- Five tasks per agent, clear success criteria for each
- Explanation: did it explain all key behaviours?
- Testing: do generated tests run and catch the intended bugs?
- Refactor: are suggestions correct and safe?
- C#: are answers accurate per .NET conventions?

#### Section 3 — Tool use quality (15 min)

- Did the agent call the right tools with the right parameters?
- Did it avoid unnecessary tool calls?
- Log every tool call — compute tool precision and recall
- **[Callback → Lesson 34]** Tool precision and recall are the same concepts as classifier
  precision and recall. A tool call is a "prediction" — was it the right tool for the
  situation? Map the confusion matrix concept to agent tool use.

#### Section 4 — Building and running the suite and Forge connection (15 min)

- tests/eval/agents/ — one file per agent
- Run with pytest -m eval — marked to avoid running in normal CI
- Output: pass/fail per task, tool use stats, faithfulness scores
- **Forge connection:** Run the full agent eval suite. Compare results across all four
  agents. Which agent scores lowest? Which tool is called incorrectly most often? Use
  the results to make one concrete improvement to the weakest agent before moving on.
  Document the improvement and the score change in LESSON_LOG.md.

#### Section 5 — Update state files (5 min)

- Commit tests/eval/agents/
- Update all four state files, commit, push

---

### Lesson 58 — Agent Orchestration

- **Subject:** Routing queries to the right agent, multi-agent coordination, shared memory
- **Outcome:** A router that directs any Forge question to the correct specialist agent
- **Freshness check:** Latest multi-agent orchestration patterns

#### Section 0 — Retrieval challenge (5 min)

1. What is the difference between process metrics and outcome metrics in agent evaluation?
2. What does tool precision mean — what is a false positive tool call?
3. Why does the agent eval suite run separately from the unit test suite?

#### Section 1 — Why a router (10 min)

- The user does not know which agent handles their query
- Explain → explanation agent; Write tests → testing agent; What is wrong → refactor agent
- A router classifies the intent and dispatches

#### Section 2 — Intent classification (20 min)

- Option A: keyword rules — fast, brittle
- Option B: LLM classifier — flexible, the choice for Forge
- Give the LLM a list of agents and their capabilities, ask it to choose
- Test with ten ambiguous queries — does it route correctly?

#### Section 3 — Shared memory and context passing (15 min)

- Conversation history is shared across all agents
- The router passes relevant context to the specialist
- The specialist returns its answer — the router adds it to history
- Implement src/agents/router.py

#### Section 4 — Multi-agent workflows and Forge connection (10 min)

- Some queries need multiple agents: "write tests for the refactored version"
- Chain: refactor agent → testing agent
- Keep it simple — chain two agents maximum for now
- **Forge connection:** Test the router with ten diverse queries — explanation, testing,
  refactor, C#, and ambiguous cases. Does it route correctly? Where does it fail? Use
  @timed to measure routing latency — it should be negligible compared to the specialist
  agent's response time. Add routing accuracy to the agent eval suite.

#### Section 5 — Update state files (5 min)

- Commit src/agents/router.py
- Update all four state files, commit, push

---

### Lesson 59 — Failure Modes and Recovery

- **Subject:** Agent loops, hallucinated tool calls, tool failures, graceful degradation
- **Outcome:** Forge handles a deliberately broken tool call without crashing or looping
- **Freshness check:** Latest agent failure mode research

#### Section 0 — Retrieval challenge (5 min)

1. What are the two routing strategies — which does Forge use and why?
2. What does "shared memory across agents" mean — what does the router pass to the specialist?
3. When would a multi-agent chain be triggered — give an example?

#### Section 1 — The four failure modes (15 min)

- Infinite loops: the agent keeps calling tools, never reaching a final answer
- Hallucinated tool calls: calling tools with invented parameters
- Tool failures: the tool returns an error, the agent does not know how to recover
- Context overflow: the loop runs so long the conversation exceeds the window

#### Section 2 — Preventing infinite loops (15 min)

- Maximum iteration counter — hard stop after n tool calls
- Repetition detection — same tool, same parameters twice → stop
- Test: give the agent a query that cannot be answered — does it stop gracefully?
- **[Callback → Lesson 07]** The retry decorator from Lesson 07 retries on failure. How
  does an infinite retry loop differ from an infinite agent loop? What prevents each?

#### Section 3 — Handling tool failures (15 min)

- Wrap every tool call in try/except — never propagate raw exceptions to the agent loop
- Return a structured error message the agent can reason about
- Test: deliberately raise an exception in a tool

#### Section 4 — Circuit breakers and Forge connection (10 min)

- A circuit breaker stops calling a failing tool after n failures
- Graceful degradation: if retrieval fails, answer from general knowledge with a caveat
- A partial answer is better than a crash
- **Forge connection:** Write a test for each of the four failure modes. Each test should
  trigger the failure deliberately and verify Forge handles it gracefully. Add these to
  tests/test_failure_modes.py. A system that fails loudly and cleanly is more trustworthy
  than one that silently produces wrong answers.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 60 — Safety and Boundaries

- **Subject:** Prompt injection, jailbreaking, tool access risks, guardrails
- **Outcome:** Input validation and output guardrails for every Forge agent
- **Freshness check:** Latest OWASP LLM Top 10 and prompt injection research

#### Section 0 — Retrieval challenge (5 min)

1. What are the four failure modes of an agent loop?
2. What is a circuit breaker — at what point does it trigger?
3. What is graceful degradation — why is it better than an error?

#### Section 1 — Prompt injection (15 min)

- An attacker embeds instructions in data the agent processes
- In Forge: a malicious comment in a code file could hijack the agent's behaviour
- Demonstrate: inject an instruction into a fake code file, observe the agent's response

#### Section 2 — Defending against prompt injection (15 min)

- Sanitise inputs: strip or flag suspicious patterns before including in prompts
- Privilege separation: the agent cannot act outside its defined tool set
- Never trust content from external sources — treat as potentially hostile

#### Section 3 — Tool access risks (15 min)

- Each tool is a capability — design with least privilege
- search_code and get_file: read-only, safe
- Future write or execute tools: require explicit user confirmation

#### Section 4 — Guardrails and Forge connection (10 min)

- Input guardrails: validate and sanitise all user input
- Output guardrails: check the agent's response before returning it
- Log all guardrail triggers — they reveal attempted misuse
- **Forge connection:** Add input sanitisation to every agent's entry point and output
  validation to the router. Write a test that attempts a prompt injection via a fake code
  file and verifies Forge does not act on it. Add this to tests/test_safety.py. Security
  tests belong in the portfolio — they demonstrate you think about adversarial use.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push — Track F complete

---

## Track G — Production & Portfolio — Lessons 61–66

---

### Lesson 61 — Infrastructure Security

- **Subject:** Secrets management, input validation, dependency scanning
- **Outcome:** Forge passes a dependency scan, secrets in .env, inputs validated at every boundary
- **Freshness check:** Latest pip-audit and secrets scanning tools

#### Section 0 — Retrieval challenge (5 min)

1. What is prompt injection — give a concrete Forge-specific example?
2. What does least privilege mean for a tool — why does it matter?
3. What is the difference between input guardrails and output guardrails?

#### Section 1 — Secrets management audit (15 min)

- Audit every secret: GitHub token, OpenAI key
- Verify all loaded from .env, never hardcoded, never logged
- Run git log to verify no secrets were ever committed
- Add a pre-commit hook that blocks commits containing secret patterns

#### Section 2 — Input validation (15 min)

- Validate all inputs at entry points: CLI arguments, API requests, user queries
- Repo URLs must match github.com pattern
- Use pydantic for validation — integrates with FastAPI, provides clear error messages

#### Section 3 — Dependency scanning (15 min)

- pip-audit: scans installed packages for known vulnerabilities
- Install, run, fix anything flagged
- Add pip-audit to CI — run on every push

#### Section 4 — Least privilege review and Forge connection (10 min)

- GitHub token: read-only scope only — no write access needed
- OpenAI key: generation only — no fine-tuning or admin
- Document required scopes in README
- **Forge connection:** Run the complete security checklist: no hardcoded secrets in git
  history, pip-audit clean, all inputs validated, pre-commit hook installed. Commit a
  SECURITY.md documenting what Forge does and does not do with credentials. A recruiter
  reading this will see engineering discipline, not just code.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 62 — Observability

- **Subject:** Structured logging, tracing agent calls, monitoring, debugging invisible agents
- **Outcome:** Every Forge agent call produces structured logs traceable from query to answer
- **Freshness check:** Latest structlog and OpenTelemetry Python docs

#### Section 0 — Retrieval challenge (5 min)

1. What does pip-audit do — what does it scan for?
2. What is pydantic used for in Forge — what does it validate?
3. What does a pre-commit hook do — when does it run?

#### Section 1 — Why observability matters for agents (10 min)

- A bug in an agent loop is invisible — which tool call caused the wrong answer?
- The three pillars: logs (what happened), metrics (how often/long), traces (the full path)

#### Section 2 — Structured logging with structlog (20 min)

- Structured logs are JSON — machine-readable and searchable
- Replace all print() and basic logging with structlog
- Log every tool call: which tool, parameters, latency, result
- Log every LLM call: model, token count, latency, cost estimate
- **[Callback → Lesson 08]** You added @timed to Forge functions in Lesson 08. structlog
  replaces the basic logging behind @timed. How should you update @timed to emit
  structured JSON logs instead of plain text?

#### Section 3 — Tracing agent calls (20 min)

- A trace links all events in a single agent loop
- Generate a trace ID at the start of each run — include in every log entry
- Log a summary at the end: total tool calls, total tokens, total latency, final answer

#### Section 4 — Reading the logs and Forge connection (5 min)

- Run Forge on a real query, read the structured logs
- Trace the full path from query to answer using the trace ID
- Identify the slowest step, the most expensive, any errors
- **Forge connection:** Compare actual latency numbers to the baseline in
  docs/performance_baseline.md from Lesson 52. Has anything got slower as the system
  grew? Are there any obvious optimisation targets? Document your findings. A system
  you can observe is a system you can improve.

#### Section 5 — Update state files (5 min)

- Update all four state files, commit, push

---

### Lesson 63 — Docker and Portability

- **Subject:** Dockerfile, containerising Forge, environment consistency, multi-stage builds
- **Outcome:** Forge runs in a Docker container — portable, reproducible
- **Freshness check:** Latest Docker best practices for Python AI apps

#### Section 0 — Retrieval challenge (5 min)

1. What are the three pillars of observability?
2. What is a trace ID — what problem does it solve?
3. What does a structured log contain that a plain text log does not?

#### Section 1 — Why Docker for Forge (10 min)

- "It works on my machine" is not a portfolio argument
- Docker packages the application and its environment together
- Anyone can run Forge with a single command — no Python setup required

#### Section 2 — Writing the Dockerfile (20 min)

- Base image: python:3.12-slim — minimal, fast, secure
- Copy pyproject.toml first, install dependencies, then copy source — layer caching
- Set PYTHONUNBUFFERED and PYTHONDONTWRITEBYTECODE
- EXPOSE the API port, set the default CMD

#### Section 3 — Multi-stage build (15 min)

- Stage 1 (builder): install build tools, compile dependencies
- Stage 2 (runtime): copy only what is needed, no build tools
- Result: a smaller final image

#### Section 4 — docker-compose and Forge connection (10 min)

- docker-compose.yml: defines Forge and any future services
- Mount .env as a volume — secrets are not baked into the image
- Mount a data volume for ChromaDB persistence
- docker-compose up — one command to run everything
- **Forge connection:** Build the Docker image and run the full ingestion + query pipeline
  inside the container against a real repo. Verify the output matches what you get outside
  the container. If it does not, the container is missing something — find and fix it.
  A container that produces different results than the host is not a working container.

#### Section 5 — Update state files (5 min)

- Commit Dockerfile and docker-compose.yml
- Update all four state files, commit, push

---

### Lesson 64 — CLI Interface

- **Subject:** Typer — commands, arguments, help text, progress bars, terminal UX
- **Outcome:** forge ingest \<repo_url\> and forge ask \<question\> work from the terminal
- **Freshness check:** Latest Typer version and docs

#### Section 0 — Retrieval challenge (5 min)

1. What is layer caching in Docker — why does pyproject.toml get copied before the source?
2. What is a multi-stage build — what does it achieve?
3. Why are secrets mounted as volumes rather than baked into the image?

#### Section 1 — Why a CLI (10 min)

- The CLI is the primary interface for developers
- A good CLI is self-documenting — forge --help explains everything
- Typer: modern Python CLI framework, type hints define argument types automatically

#### Section 2 — Typer fundamentals (15 min)

- app = typer.Typer(), @app.command() — defining commands
- Function parameters become CLI arguments and options
- typer.echo() for output, typer.Argument and typer.Option for control

#### Section 3 — Implement forge ingest (20 min)

- forge ingest \<repo_url\> [--language LANGUAGE]
- Progress bar as files are fetched and embedded
- Summary: files ingested, chunks created, time taken
- Handle errors cleanly: repo not found, rate limit hit, already ingested

#### Section 4 — Implement forge ask and Forge connection (10 min)

- forge ask \<question\> [--repo REPO] [--language LANGUAGE] [--agent AGENT]
- Print the answer with citations
- Test both commands end to end from the terminal
- **Forge connection:** Record a terminal session of forge ingest followed by forge ask
  on a real C# repo. Save the output to docs/demo_terminal.txt. This becomes part of the
  portfolio demo in Lesson 66 — you want the cleanest, most impressive example you can
  find. Try several repos and questions to find the best one.

#### Section 5 — Update state files (5 min)

- Commit src/cli.py
- Update all four state files, commit, push

---

### Lesson 65 — API Interface

- **Subject:** FastAPI — endpoints, request validation, async handlers, auto-generated docs
- **Outcome:** Forge exposes a local HTTP API — ingest and query endpoints fully working
- **Freshness check:** Latest FastAPI version and docs

#### Section 0 — Retrieval challenge (5 min)

1. What does @app.command() do in Typer?
2. What does --help do in a Typer CLI — who generates the text?
3. What information does the ingestion summary print, and why does each number matter?

#### Section 1 — Why an API (10 min)

- The CLI is for developers — an API is for integration
- FastAPI: async, fast, auto-generates OpenAPI docs at /docs automatically
- Every endpoint is documented without extra effort — great for the portfolio

#### Section 2 — FastAPI fundamentals (15 min)

- app = FastAPI(), @app.get(), @app.post()
- Pydantic models for request and response bodies — automatic validation
- Async handlers — Forge's LLM and database calls are async, FastAPI handles this natively
- Run with: uvicorn src.api:app --reload

#### Section 3 — Implement POST /ingest (15 min)

- Request body: repo_url, languages (optional list)
- Response: ingested_files, chunks_created, duration_seconds
- Run ingestion in the background — return a job ID immediately
- GET /ingest/{job_id} — check status

#### Section 4 — Implement POST /ask and Forge connection (15 min)

- Request body: question, repo, language, agent (all optional except question)
- Response: answer text, list of citations with file path and line range
- Test with curl and the /docs interface
- **Forge connection:** Open /docs in a browser and take a screenshot. The auto-generated
  API documentation is a live, interactive demonstration of Forge's capabilities. Test
  POST /ask directly from the /docs interface and take a screenshot of a successful
  response with citations. Both screenshots go in the portfolio README.

#### Section 5 — Update state files (5 min)

- Commit src/api.py
- Update all four state files, commit, push

---

### Lesson 66 — Portfolio Documentation

- **Subject:** Portfolio-quality README, architecture diagram, demo recording, what to highlight
- **Outcome:** Forge has a README, architecture diagram, and recorded demo
- **Freshness check:** Current portfolio best practices for AI engineers

#### Section 0 — Retrieval challenge (5 min)

1. What does FastAPI auto-generate at /docs — what makes it useful for a portfolio?
2. What is the difference between POST /ingest and GET /ingest/{job_id}?
3. Why does FastAPI use pydantic for request bodies?

#### Section 1 — The README (20 min)

- What Forge is and what problem it solves — two sentences maximum
- What it can do — five key capabilities with concrete examples
- How to set it up — prerequisites, installation, configuration
- How to use it — the most important commands with example output
- How it works — brief architecture overview with a link to the diagram
- **[Callback → Lesson 01]** Read the paragraph you wrote in LESSON_LOG.md at the end of
  Lesson 01 — your first description of what each folder was for. How accurate was it?
  What did you not anticipate? The gap between that paragraph and the README you are writing
  now is the measure of what you have learned.

#### Section 2 — Architecture diagram (15 min)

- One diagram: GitHub API → ingestion → chunker → embedder → ChromaDB + SQLite →
  retriever → agents → router → user
- Use Mermaid in the README — renders in GitHub automatically with no extra tooling
- Label every component and every arrow — no ambiguity

#### Section 3 — Demo recording (15 min)

- Record 2–3 minutes: ingest a real public repo, ask three questions, show citations
- Show the CLI and the /docs API page
- Use the terminal session from Lesson 64 and the /docs screenshots from Lesson 65
- Narrate what is happening and why it is interesting

#### Section 4 — What to highlight (5 min)

- For an AI role: the RAG pipeline, reranking, prompt engineering, evaluation suite
- For a general portfolio: lead with the demo, then architecture, then code quality
- Add a brief "what I learned" section — shows self-awareness and growth
- **Forge connection:** Write the "what I learned" section last. It should cover: one
  concept from Track C that surprised you, one engineering decision you would make
  differently, and one capability you would add next. This section is the most human
  part of the portfolio — it is what makes it yours.

#### Section 5 — Final commit (5 min)

- Update all state files — final entries in LESSON_LOG.md and COURSE_STATE.md
- Tag the repo: git tag v1.0.0
- Push everything — Forge is complete

---

*Course complete. 66 lessons. One project. Built from zero.*
