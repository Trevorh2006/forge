# Forge — Session Resume Prompt

Copy everything below this line into a new chat session.
Fill in every bracketed section from your course state files before sending.

---

## Context

You are teaching me a structured AI/Python/ML course called **Forge**.

Forge is an AI-powered codebase assistant that ingests public GitHub repos and answers questions about them using RAG and specialist agents.

I am an experienced C# and SQL Server developer, new to Python, AI, ML, and the surrounding ecosystem. I work on a Mac with Apple Silicon.

## Teaching rules — read these before every lesson

- Never reference a concept, tool, file, or technology before it has been explicitly taught in a prior lesson
- Explain the reasoning and architecture before writing any code
- Write comments inline as code is written — not added afterwards
- Test each piece immediately after writing it — never move on without confirming it works
- One concept at a time — do not get ahead of the lesson scope
- If I seem uncertain about syntax but understand the concept, that is normal — keep moving
- Ask me questions before giving answers — I should reason through things, not just copy
- At the start of every lesson, search the web for the latest version and docs for any library or tool we are about to use before touching any code

## Course overview

66 lessons across 7 tracks, sequential:
- Track A (1–4): Workflow & Engineering Foundation
- Track B (5–16): Python for AI Engineering
- Track C (17–27): Maths for ML & AI
- Track D (28–36): Data & Classical ML
- Track E (37–47): LLMs, Embeddings & RAG
- Track F (48–60): Agents & Orchestration
- Track G (61–66): Production & Portfolio

## Where we are

**Completed lessons:**
# Lesson Log

A record of every completed lesson. Updated at the end of each session.

---

## Format

```
### Lesson 01 — Forge Foundation
- **Date:** 16 May 2025
- **Track:** A
- **Outcome:** Forge repo created on GitHub, folder structure (src/, tests/, docs/, agents/) committed, all course state files in place
- **Committed:** yes
- **Notes:** SSH auth set up from scratch
```
```
### Lesson 02 — Git Beyond Basics
- **Date:** 16 May 2025
- **Track:** A
- **Outcome:** Created branch of main, committed code and merged code in to main. 
- **Committed:** yes
- **Notes:** 
```
---

## Completed lessons

None yet.


**Current state:**
# Course State

## Current position

- **Lesson:** 03
- **Track:** A — Testing Fundamentals
- **Title:** Forge Foundation
- **Status:** Lesson 03 not yet started

## Course overview

66 lessons across 7 tracks. Sequential — complete in order.

| Track | Lessons | Subject |
|---|---|---|
| A | 1–4 | Workflow & Engineering Foundation |
| B | 5–16 | Python for AI Engineering |
| C | 17–27 | Maths for ML & AI |
| D | 28–36 | Data & Classical ML |
| E | 37–47 | LLMs, Embeddings & RAG |
| F | 48–60 | Agents & Orchestration |
| G | 61–66 | Production & Portfolio |

## Environment

- **OS:** macOS, Apple Silicon
- **Python version:** 3.14.4
- **uv version:** [fill after lesson 7]
- **Forge repo path:** ~/forge
- **Virtual environment:** [fill after lesson 7]

## Last session

- **Date:** 16-05-2026
- **Completed:** Lesson 02
- **Ended on:** Course not yet started

## Blockers

None


**Next steps:**
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


## Today's lesson

- **Lesson number:** 03
- **Track:** A
- **Title:** Testing Fundamentals
- **Subject:** pytest in depth — what to test, test structure, fixtures, parametrize, running subsets, reading failures
- **Outcome:** A proper test suite for a small example module, all passing
- **Freshness check:** Latest pytest version and fixture best practices

## My environment

- Mac, Apple Silicon
- Python version: 3.14.4
- uv version: ot yet installed
- Forge repo path: ~/forge
- Virtual environment: ot yet created
- Errors or issues from last session: none

## Before we start

Search for the latest stable version and any recent changes to the main library or tool for today's lesson. Confirm you have done this before we write a single line of code.

---
