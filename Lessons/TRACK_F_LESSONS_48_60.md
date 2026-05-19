# Track F — Agents & Orchestration — Lessons 48–60

---

## Lesson 48 — Agent Concepts

- **Subject:** What makes something an agent — perception, memory, planning, action
- **Outcome:** Draw the Forge agent loop on paper, identify every component before writing code
- **Freshness check:** Latest agent architecture writing and framework comparisons

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between Forge's RAG pipeline and an agent — what can an agent do that the pipeline cannot?
2. What are the four things that can go wrong in a RAG pipeline — which stage does each belong to?
3. What does the eval suite from Lesson 47 check — and when should it be run?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Pipeline vs agent (15 min)
- A RAG pipeline is linear: query → retrieve → generate → done
- An agent is a loop: perceive → plan → act → observe → repeat
- The agent decides what to do next — the pipeline does not

### Section 2 — The four components (20 min)
- Perception: what the agent can sense — query, tool results, memory
- Memory: short-term (current conversation), long-term (persistent)
- Planning: deciding what to do next — which tool to call, when to stop
- Action: calling a tool, generating a response, asking a clarifying question

### Section 3 — The agent loop (15 min)
- Observe the state, choose an action, execute it, observe the result, update state, repeat
- Termination: the agent decides it has enough information to answer
- Draw Forge's agent loop — every component, every arrow

### Section 4 — Why agents fail and Forge connection (5 min)
- Infinite loops, hallucinated tool calls, context overflow — covered in detail in Lesson 59
- **Forge connection:** The RAG pipeline from Lesson 45 is the perception component of Forge's agent. The agent wraps it — calling it as a tool rather than running it directly. Everything built in Track E is still used; the agent adds the loop around it.

### Section 5 — Update state files (5 min)
- No code this lesson — architecture and reasoning
- Update all four state files, commit, push

---

## Lesson 49 — ReAct and Reasoning Patterns

- **Subject:** Chain of thought, ReAct pattern, tree of thought intuition
- **Outcome:** Trace a ReAct loop manually for a Forge query
- **Freshness check:** Latest ReAct paper and chain of thought research

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What are the four components of an agent — describe each in one sentence?
2. What is the difference between short-term and long-term memory in an agent?
3. What causes an agent loop to terminate — who or what decides?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Chain of thought (15 min)
- "Think step by step" — forces the model to reason before committing to an answer
- Why it works: intermediate reasoning steps constrain the final answer
- Zero-shot CoT: just add "think step by step" to the prompt
- **Callback to Lesson 44:** Chain of thought was introduced in Lesson 44 as a prompt engineering technique. Here you see why it is essential for agents — without it the model acts before thinking.

### Section 2 — The ReAct pattern (25 min)
- Reason: think about what to do next
- Act: call a tool with specific parameters
- Observe: receive the tool result
- Repeat until confident enough to answer
- Format: Thought / Action / Observation / Final Answer
- Trace through a Forge example by hand: "what does UserService do in this repo?"

### Section 3 — Tree of thought (10 min)
- Explore multiple reasoning paths simultaneously
- Prune paths that are not working, expand promising ones
- Important for reading current agent research

### Section 4 — Applying to Forge (5 min)
- Forge's base agent will use ReAct
- The system prompt must instruct the Thought/Action/Observation format
- **Forge connection:** Write the ReAct system prompt now and add it to src/prompts.py alongside FORGE_SYSTEM_PROMPT. The base agent in Lesson 52 will use it directly — having it ready means Lesson 52 starts with the hard part already done.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 50 — Tool Design

- **Subject:** Designing reliable tools — descriptions, parameters, error contracts, granularity
- **Outcome:** Design and implement search_code, get_file, list_repos
- **Freshness check:** Latest OpenAI function calling and tool use docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does the ReAct pattern stand for — what happens at each step?
2. Why does chain of thought help an agent — what does it prevent?
3. Trace the first two steps of a ReAct loop for the query "what does UserService do?" — Thought, Action, what would the Observation be?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What makes a good tool (15 min)
- Unambiguous — the agent should know exactly when to use it
- The description is read by the model — must be precise and complete
- Parameters must be well-typed and clearly documented
- Error behaviour must be explicit — the agent needs to know what failure looks like

### Section 2 — OpenAI function calling format (15 min)
- JSON schema: name, description, parameters
- The model does not call the tool — it returns a structured request
- The application executes the tool and returns the result

### Section 3 — Implement Forge's three tools (20 min)
- search_code(query, repo=None, language=None, n=10): semantic search
- get_file(repo, path): fetch the full content of a specific file
- list_repos(): list all ingested repos with metadata
- Write src/tools.py with JSON schema descriptions — test each tool in isolation
- **Callback to Lesson 45:** search_code() calls hybrid_retrieve() from src/retriever.py. get_file() queries the SQLite database from Lesson 16. list_repos() queries the repos table. The tools are thin wrappers around infrastructure already built.

### Section 4 — Tool granularity (5 min)
- Too fine-grained: too many calls per task
- Too coarse-grained: not enough control
- The test: can the agent accomplish any Forge task with only these three tools?

### Section 5 — Update state files (5 min)
- Commit src/tools.py
- Update all four state files, commit, push

---

## Lesson 51 — Memory Architecture

- **Subject:** Short-term, long-term, episodic, semantic memory — implementing for Forge
- **Outcome:** Short-term conversation memory and long-term file storage implemented
- **Freshness check:** Latest memory architecture patterns in agent research

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between the tool description and the tool implementation — which does the model see?
2. What are Forge's three tools and what does each do?
3. Why is tool description quality as important as tool implementation quality?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Four types of memory (15 min)
- Short-term: the current conversation — in the context window
- Long-term: survives across sessions — stored externally
- Episodic: what happened in past sessions
- Semantic: facts the agent knows — a knowledge base

### Section 2 — Short-term memory (15 min)
- Store the conversation as a list of messages: role + content
- Include in every LLM call — the model sees the full conversation
- When the conversation gets too long: summarise old turns, keep recent ones
- Implement ConversationMemory in src/memory.py
- **Callback to Lesson 43:** Context window management from Lesson 43 applies directly here. When the conversation history grows too long, fit_to_context() decides what to keep.

### Section 3 — Long-term memory (20 min)
- Store key facts from past conversations in SQLite
- What to store: repos asked about, preferences, resolved questions
- Write at the end of each session, load relevant memories at the start
- Implement LongTermMemory in src/memory.py

### Section 4 — Memory retrieval and Forge connection (5 min)
- Not all long-term memory is relevant to every query
- Use embedding similarity to retrieve relevant memories — same technique as RAG
- **Forge connection:** The embedding similarity search for memory retrieval uses the same src/retriever.py and src/maths.py already built. Memory retrieval is RAG applied to past conversations rather than code.

### Section 5 — Update state files (5 min)
- Commit src/memory.py
- Update all four state files, commit, push

---

## Lesson 52 — Forge Base Agent

- **Subject:** Implementing the agent loop — perceive, plan, call tools, observe, respond
- **Outcome:** A working base agent that uses retrieval as a tool to answer questions
- **Freshness check:** Latest OpenAI tool calling docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between short-term and long-term memory in Forge's agent?
2. How does Forge decide which long-term memories are relevant to the current query?
3. What does ConversationMemory store and how does it handle overflow?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The agent loop in code (15 min)
- The loop: call LLM → check if tool call → execute tool → add result to history → repeat
- Maximum iterations: always set a hard limit — prevent infinite loops
- Termination: the model returns a final answer with no tool call

### Section 2 — The system prompt (10 min)
- Define Forge's role and available tools
- Use the ReAct prompt from Lesson 49 — already written and ready
- Include citation instructions

### Section 3 — Implementing the loop (25 min)
- Send messages to the LLM with tools attached
- Parse the response: is it a tool call or a final answer?
- If tool call: extract name and parameters, call the function, add result to messages
- If final answer: return it with citations
- **Callback to Lessons 48–51:** The loop uses tools from Lesson 50, memory from Lesson 51, the ReAct prompt from Lesson 49, and the agent architecture from Lesson 48. This lesson assembles what the previous four designed.
- Test with three real questions — trace every iteration

### Section 4 — Error handling in the loop (5 min)
- Tool call with missing parameters: return an error, let the agent retry
- Tool call for uninvested repo: return a clear error
- Maximum iterations reached: return a partial answer with a note

### Section 5 — Update state files (5 min)
- Commit src/agents/base_agent.py
- Update all four state files, commit, push

---

## Lesson 53 — Explanation Agent

- **Subject:** Specialist agent design, system prompt scoping, explaining code, evaluation
- **Outcome:** An agent that explains any function or class in plain language
- **Freshness check:** Latest system prompt best practices

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the agent loop — describe each step in sequence?
2. What happens when the model returns a tool call — what does the application do next?
3. What causes the loop to terminate — what does the model return when it is done?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Specialist agent design (10 min)
- A specialist has a narrow, well-defined job — does one thing very well
- The system prompt defines the specialisation — everything else inherited from base agent
- Job: explain what code does, why it exists, how to use it, for a developer new to the codebase

### Section 2 — The explanation system prompt (15 min)
- Role: code explanation assistant
- Behaviour: clear, use analogies, avoid jargon, include examples
- Output: what it does, why it exists, how to use it, edge cases
- Constraints: base explanations on retrieved code only — do not invent behaviour

### Section 3 — Implement explanation_agent.py (25 min)
- Inherit from or compose with base_agent.py — share the tool infrastructure
- Override only the system prompt
- Test with five real functions from a public C# repo
- **Forge connection:** Use your C# background as the evaluation benchmark here. You know what a good explanation of a C# class looks like. If the agent's explanation would not satisfy you as a developer, the prompt needs work. Your domain expertise is the quality bar.

### Section 4 — Evaluation (5 min)
- Score each explanation: accurate (y/n), clear (1–5), complete (y/n)
- Add five test cases to tests/eval/agents/
- Run the eval suite from Lesson 47 — verify no regressions

### Section 5 — Update state files (5 min)
- Commit src/agents/explanation_agent.py
- Update all four state files, commit, push

---

## Lesson 54 — Testing Agent

- **Subject:** Generating pytest tests from code, evaluating test quality
- **Outcome:** An agent that reads a function and writes meaningful pytest tests
- **Freshness check:** Latest pytest conventions and test generation approaches

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between a specialist agent and the base agent — what changes and what stays the same?
2. How does the explanation agent decide what to say — what is it constrained to?
3. Why is your C# background a direct advantage when evaluating the explanation agent?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What makes a good test (15 min)
- Tests the behaviour, not the implementation
- Covers the happy path, edge cases, and failure cases
- Is independent and readable — the test name explains what it tests
- **Callback to Lessons 11–12:** Everything from Lessons 11 and 12 is the quality standard the agent must meet. A generated test that would have failed the criteria from those lessons is a bad test.

### Section 2 — The testing agent system prompt (15 min)
- Generate pytest tests for the provided code
- Instructions: happy path, at least two edge cases, at least one failure case
- Output: complete, runnable pytest code with no placeholders

### Section 3 — Implement testing_agent.py (20 min)
- Retrieve the function or class from Forge
- Generate tests in the specified format including necessary imports and fixtures
- Run the generated tests — they should pass or fail for the right reasons

### Section 4 — Evaluation and Forge connection (5 min)
- Introduce a deliberate bug — does the generated test catch it?
- Add five test generation cases to tests/eval/agents/
- **Forge connection:** Point the testing agent at src/retriever.py — a real Forge module. Does it generate tests that would catch a bug in hybrid_retrieve()? Run the generated tests against the real code.

### Section 5 — Update state files (5 min)
- Commit src/agents/testing_agent.py
- Update all four state files, commit, push

---

## Lesson 55 — Refactor Agent

- **Subject:** Code quality analysis, identifying smells, suggesting improvements, diff generation
- **Outcome:** An agent that suggests refactoring improvements with reasoning and diffs
- **Freshness check:** Latest static analysis tools and refactoring patterns

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What three test categories must the testing agent cover for every function?
2. What does it mean to test behaviour rather than implementation?
3. How do you verify the testing agent is generating good tests — what is the concrete check?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Code smells the agent detects (15 min)
- Long functions, duplicate code, poor naming, deep nesting, missing error handling
- Include these explicitly in the system prompt — the agent must know what to look for

### Section 2 — The refactor agent system prompt (15 min)
- Role: identify code quality issues and suggest specific improvements
- Output: for each issue — what it is, where it is, the improved version
- Constraints: preserve behaviour — suggest refactors, not rewrites

### Section 3 — Implement refactor_agent.py (20 min)
- Retrieve target code, identify issues, suggest improvements
- Generate a before/after diff for each suggestion
- Test on five real functions from a public repo
- **Forge connection:** Point the refactor agent at the earliest code in Forge — src/utils.py from Lesson 03. Does it find anything worth improving? Apply one suggestion, then run the testing agent on the refactored code. This is the refactor → test workflow that real teams use.

### Section 4 — Safe suggestions (5 min)
- Always include: "verify with your test suite after applying this change"
- The testing agent and refactor agent work together — refactor then test

### Section 5 — Update state files (5 min)
- Commit src/agents/refactor_agent.py
- Update all four state files, commit, push

---

## Lesson 56 — C# Language Agent

- **Subject:** Language-specific tuning, C# idioms, .NET patterns, language-aware retrieval
- **Outcome:** A specialist agent for C# codebases that understands .NET conventions
- **Freshness check:** Latest C# language features and .NET docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the refactor → test workflow — why do the two agents work together?
2. What does "preserve behaviour" mean as a constraint for the refactor agent?
3. What does a before/after diff show — why is it better than just the improved version?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why a language-specific agent (10 min)
- A generic agent does not know .NET conventions
- Your C# knowledge is the evaluation benchmark — this is where your background is a direct advantage

### Section 2 — C# knowledge in the system prompt (20 min)
- .NET naming conventions, patterns (Repository, Service, Controller, Factory)
- LINQ idioms, async/await patterns, Task vs void, CancellationToken
- IDisposable — always in a using block
- Include this knowledge explicitly in the system prompt
- **Forge connection:** You are the domain expert here. Write the C# conventions section of the system prompt yourself before asking the AI to help. Your knowledge of what makes good C# code is more valuable than any general description.

### Section 3 — Language-aware retrieval (15 min)
- Filter ChromaDB queries to language == 'CSharp'
- Weight results from .cs files higher
- Recognise C# namespaces, classes, and interfaces in the query

### Section 4 — Test and evaluate (10 min)
- Test with five real questions about a public C# repo
- Judge accuracy using your C# expertise — you are the quality bar
- Add five C# agent test cases to tests/eval/agents/

### Section 5 — Update state files (5 min)
- Commit src/agents/csharp_agent.py
- Update all four state files, commit, push

---

## Lesson 57 — Agent Evaluation

- **Subject:** How to know if an agent is working — task completion, tool use quality, faithfulness
- **Outcome:** Evaluation suite scoring each Forge agent on a fixed set of real tasks
- **Freshness check:** Latest agent evaluation research and tooling

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What makes the C# agent different from the explanation agent — what specifically changes?
2. How does language-aware retrieval work — what does the where clause filter on?
3. Why is your C# background the evaluation benchmark rather than an automated metric?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Agent evaluation is harder than RAG evaluation (10 min)
- RAG has a clear pipeline — evaluate each stage
- An agent has a loop — the path to an answer varies between runs
- Need process metrics (what it did) and outcome metrics (what it produced)

### Section 2 — Task completion (15 min)
- Five tasks per agent, clear success criteria for each
- Explanation: did it explain all key behaviours?
- Testing: do generated tests run and catch the intended bugs?
- Refactor: are suggestions correct and safe?
- C#: are answers accurate per .NET conventions?

### Section 3 — Tool use quality (15 min)
- Did the agent call the right tools with the right parameters?
- Did it avoid unnecessary tool calls?
- Log every tool call — compute tool precision and recall
- **Callback to Lesson 34:** Tool precision and recall follow the same logic as classification precision and recall from Lesson 34. Unnecessary tool calls reduce precision. Missed tool calls reduce recall.

### Section 4 — Building and running the suite (15 min)
- tests/eval/agents/ — one file per agent
- Run with pytest -m eval — marked to avoid running in normal CI
- Output: pass/fail per task, tool use stats, faithfulness scores
- **Forge connection:** Run the full eval suite — RAG pipeline from Lesson 47 plus all four agents. What is the weakest component? Fix it before moving on to orchestration.

### Section 5 — Update state files (5 min)
- Commit tests/eval/agents/
- Update all four state files, commit, push

---

## Lesson 58 — Agent Orchestration

- **Subject:** Routing queries to the right agent, multi-agent coordination, shared memory
- **Outcome:** A router that directs any Forge question to the correct specialist agent
- **Freshness check:** Latest multi-agent orchestration patterns

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between process metrics and outcome metrics for agent evaluation?
2. What is tool precision — what does a low score mean about the agent's behaviour?
3. Why does an agent loop make evaluation harder than a RAG pipeline?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why a router (10 min)
- The user does not know which agent handles their query
- Explain → explanation agent; Write tests → testing agent; What is wrong → refactor agent
- A router classifies the intent and dispatches

### Section 2 — Intent classification (20 min)
- Option A: keyword rules — fast, brittle
- Option B: LLM classifier — flexible, the choice for Forge
- Give the LLM a list of agents and their capabilities, ask it to choose
- Test with ten ambiguous queries — does it route correctly?

### Section 3 — Shared memory and context passing (15 min)
- Conversation history is shared across all agents
- The router passes relevant context to the specialist
- The specialist returns its answer — the router adds it to history
- Implement src/agents/router.py

### Section 4 — Multi-agent workflows and Forge connection (10 min)
- Some queries need multiple agents: "write tests for the refactored version"
- Chain: refactor agent → testing agent
- Keep it simple — chain two agents maximum for now
- **Forge connection:** Test the full router with ten real queries covering all four agents. Does it route correctly? Does a chained refactor → test workflow produce useful output end to end? This is the closest thing to a real user session Forge has seen.

### Section 5 — Update state files (5 min)
- Commit src/agents/router.py
- Update all four state files, commit, push

---

## Lesson 59 — Failure Modes and Recovery

- **Subject:** Agent loops, hallucinated tool calls, tool failures, graceful degradation
- **Outcome:** Forge handles a deliberately broken tool call without crashing or looping
- **Freshness check:** Latest agent failure mode research

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. How does the router decide which agent to use — describe the classification approach?
2. What is shared memory in a multi-agent system — why does it matter for conversation continuity?
3. What does a chained refactor → test workflow look like — what does each agent contribute?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The four failure modes (15 min)
- Infinite loops: the agent keeps calling tools, never reaching a final answer
- Hallucinated tool calls: calling tools with invented parameters
- Tool failures: the tool returns an error, the agent does not know how to recover
- Context overflow: the loop runs so long the conversation exceeds the window

### Section 2 — Preventing infinite loops (15 min)
- Maximum iteration counter — hard stop after n tool calls
- Repetition detection — same tool, same parameters twice → stop
- Test: give the agent a query that cannot be answered — does it stop gracefully?

### Section 3 — Handling tool failures (15 min)
- Wrap every tool call in try/except — never propagate raw exceptions to the agent loop
- Return a structured error message the agent can reason about
- Test: deliberately raise an exception in a tool
- **Callback to Lesson 07:** The retry and error handling patterns from Lesson 07 apply here — but with an important difference. In Lesson 07 you retry automatically. In an agent loop, the agent decides whether to retry. The agent needs the error information, not a silent retry.

### Section 4 — Circuit breakers and graceful degradation and Forge connection (10 min)
- A circuit breaker stops calling a failing tool after n failures
- Graceful degradation: if retrieval fails, answer from general knowledge with a caveat
- A partial answer is better than a crash
- **Forge connection:** Deliberately break search_code() by returning an error. Run the full agent. Does it degrade gracefully? Does it tell the user what went wrong? Fix any failure until the answer is yes to both.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 60 — Safety and Boundaries

- **Subject:** Prompt injection, jailbreaking, tool access risks, guardrails
- **Outcome:** Input validation and output guardrails for every Forge agent
- **Freshness check:** Latest OWASP LLM Top 10 and prompt injection research

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What are the four agent failure modes — describe each in one sentence?
2. What is the difference between automatic retry (Lesson 07) and agent-controlled retry (Lesson 59)?
3. What does graceful degradation mean for Forge — what should the user experience when retrieval fails?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Prompt injection (15 min)
- An attacker embeds instructions in data the agent processes
- In Forge: a malicious comment in a code file could hijack the agent's behaviour
- Demonstrate: inject an instruction into a fake code file, observe the agent's response

### Section 2 — Defending against prompt injection (15 min)
- Sanitise inputs: strip or flag suspicious patterns before including in prompts
- Privilege separation: the agent cannot act outside its defined tool set
- Never trust content from external sources — treat as potentially hostile

### Section 3 — Tool access risks (15 min)
- Each tool is a capability — design with least privilege
- search_code and get_file: read-only, safe
- Future write or execute tools: require explicit user confirmation

### Section 4 — Guardrails and Forge connection (10 min)
- Input guardrails: validate and sanitise all user input
- Output guardrails: check the agent's response before returning it
- Log all guardrail triggers — they reveal attempted misuse
- **Forge connection:** Add guardrails to src/agents/base_agent.py so all specialist agents inherit them. Test the prompt injection scenario from Section 1 — does the guardrail catch it? Run the full eval suite to confirm nothing was broken.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push — Track F complete
