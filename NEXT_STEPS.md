# Next Steps

## Immediate next action

Start Lesson 03 — Testing Fundamentals.

Open a fresh session, paste the resume prompt template with Lesson 02 details filled in, and begin.

## Lesson 03 scope

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


## After each lesson

Update this file with the next immediate action before committing.
One line is enough: what to do, which lesson, what it covers.
