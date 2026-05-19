# Next Steps

## Immediate next action

Start Lesson 03 — Python Foundations I.

Open a fresh session, paste the resume prompt template with Lesson 02 details filled in, and begin.

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

## After each lesson

Update this file with the next immediate action before committing.
One line is enough: what to do, which lesson, what it covers.
