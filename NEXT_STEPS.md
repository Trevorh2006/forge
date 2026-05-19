# Next Steps

## Immediate next action

Start Lesson 05 — Python Project Structure

Open a fresh session, paste the resume prompt template with Lesson 02 details filled in, and begin.

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
## After each lesson

Update this file with the next immediate action before committing.
One line is enough: what to do, which lesson, what it covers.
