# Track E — LLMs, Embeddings & RAG — Lessons 37–47

---

## Lesson 37 — LLM Fundamentals

- **Subject:** Tokens, attention intuition, transformers, temperature, sampling
- **Outcome:** Call the OpenAI API, vary temperature, observe and explain the differences
- **Freshness check:** Latest OpenAI API docs and available models

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What did clustering on Forge's real data reveal — which groupings emerged and did they make sense?
2. What is the silhouette score measuring — what does a high value mean?
3. What is PCA doing when it reduces 1536 dimensions to 2 — what is preserved and what is lost?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What an LLM actually is (15 min)
- A function: takes a sequence of tokens, outputs a probability distribution over the next token
- Tokens are subword units — roughly 4 characters each
- The model is an enormous set of learned weights — billions of parameters
- **Callback to Lesson 25:** Training is minimising cross-entropy loss — predicting the next token across billions of documents. The maths from Lesson 25 is exactly what happened during training.

### Section 2 — Transformers and attention intuition (20 min)
- The transformer architecture: dominant since "Attention Is All You Need" (2017)
- Attention: every token can attend to every other token — captures long-range dependencies
- Why transformers beat earlier architectures: no forgetting over long distances
- Multi-head attention: multiple attention patterns running in parallel
- **Callback to Lesson 20:** Attention is computed using matrix multiplication — Q, K, V matrices. The matmul() you implemented in Lesson 20 is what happens inside every transformer layer.

### Section 3 — Temperature and sampling (15 min)
- The model outputs logits — raw scores for every token in the vocabulary
- Softmax converts logits to probabilities
- **Callback to Lesson 23:** Temperature scales logits before softmax — exactly the distribution manipulation from Lesson 23. High temperature = flatter distribution = more random. Low temperature = peaked = deterministic.
- Call the OpenAI API at temperature 0, 0.5, and 1.5 — compare and explain the differences

### Section 4 — Practical API usage (5 min)
- The messages format: system, user, assistant
- max_tokens, temperature, model — the three parameters you set on every call
- Cost: input tokens + output tokens = money — always be conscious of this

### Section 5 — Update state files (5 min)
- **Forge connection:** Set up the OpenAI client in src/llm_client.py — a thin wrapper around the API with logging, cost tracking, and retry logic from Lesson 07. Every Forge agent will use this client. Build it once, use it everywhere.
- Update all four state files, commit, push

---

## Lesson 38 — What Embeddings Are

- **Subject:** Semantic meaning as vectors, how embedding models work, code vs prose
- **Outcome:** Embed ten code snippets, compute pairwise similarity, verify similar code clusters
- **Freshness check:** Latest OpenAI and sentence-transformers embedding model options

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a token — roughly how many characters is one token?
2. What does attention do in a transformer — what problem does it solve?
3. What does the OpenAI messages format look like — what are the three roles?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — From LLM to embedding model (15 min)
- An LLM generates text — an embedding model generates vectors
- The embedding is extracted from an internal layer of the model
- Similar meaning → similar vector
- **Callback to Lesson 17:** This is exactly what Lesson 17 described geometrically — similar code snippets as nearby points in high-dimensional meaning space. You now know both the geometry and the mechanism.

### Section 2 — Embedding models for code (10 min)
- OpenAI text-embedding-3-small: 1536 dimensions, fast, good for code and prose
- sentence-transformers: open source, runs locally, no API cost
- Specialised code models: CodeBERT, UniXcoder
- Trade-offs: quality vs cost vs speed vs privacy

### Section 3 — Embed and compare (25 min)
- Choose ten snippets: three similar Python functions, three similar C# functions, four unrelated
- Call the embedding API for all ten
- Compute pairwise cosine similarity using src/maths.py from Lesson 22
- **Callback to Lesson 22:** cosine_similarity() was built for exactly this moment. It is no longer a maths exercise — it is production code running on real embeddings.
- Display the full similarity matrix — similar functions should score > 0.85, unrelated < 0.5

### Section 4 — Why embeddings beat keyword search (5 min)
- find_user() and get_user_by_id() share no keywords but are semantically identical
- Keyword search cannot see this — embedding search can
- This is the core advantage Forge has over grep or IDE symbol search

### Section 5 — Update state files (5 min)
- **Forge connection:** Save the similarity matrix as docs/similarity_demo.png — it is a powerful portfolio visual that shows Forge's core capability in one image.
- Update all four state files, commit, push

---

## Lesson 39 — Chunking Strategies

- **Subject:** Why chunking matters, code-specific approaches, overlap, metadata attachment
- **Outcome:** Forge chunks ingested files into meaningful units with full metadata — committed and tested
- **Freshness check:** Latest chunking research and LangChain text splitter docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between an LLM and an embedding model — what does each produce?
2. Why do similar functions score high on cosine similarity even if they share no keywords?
3. What are the trade-offs between OpenAI embeddings and sentence-transformers for Forge?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The chunking problem (10 min)
- Embedding models have a token limit — a large file cannot be embedded whole
- Bad chunking destroys semantic meaning — splitting a function halfway loses context
- Good chunking preserves semantic units — one complete idea per chunk

### Section 2 — Chunking strategies for prose vs code (15 min)
- Prose: split at sentence or paragraph boundaries
- Code: split at function, class, or method boundaries — syntactic semantic units
- Fixed-size with overlap: a fallback when structure cannot be detected
- Overlap: include the last n tokens of the previous chunk — prevents losing context at boundaries

### Section 3 — Code-aware chunking (20 min)
- Parse Python with the ast module — find function and class boundaries
- Detect other languages by searching for def, class, function, sub keywords
- Fall back to fixed-size when parsing fails
- Each chunk carries metadata: file path, repo, language, start line, end line, sha
- Implement src/chunker.py — write tests for each strategy

### Section 4 — Chunk size tradeoffs and Forge connection (10 min)
- Small chunks: precise retrieval, less context per result
- Large chunks: more context, less precise retrieval
- Function-level chunking is Forge's default — document the decision in the code
- **Forge connection:** Run the chunker on the repo ingested in Lesson 16. How many chunks does a typical Python file produce? A C# file? Log the distribution — it will inform the vector store setup in the next lesson.

### Section 5 — Update state files (5 min)
- Commit src/chunker.py with tests
- Update all four state files, commit, push

---

## Lesson 40 — Vector Storage

- **Subject:** What a vector store is, ChromaDB — indexing, storing with metadata, querying
- **Outcome:** Forge stores all chunk embeddings in ChromaDB and retrieves by natural language query
- **Freshness check:** Latest ChromaDB version and API

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the chunking problem — why can you not embed an entire file as one unit?
2. Why is function-level chunking better than fixed-size chunking for code?
3. What metadata does each chunk carry and why does that metadata matter for retrieval?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why a vector store (10 min)
- Comparing every vector to every other vector is too slow at scale
- Approximate nearest neighbour algorithms make this fast enough
- ChromaDB: lightweight, local, file-based — the right choice for Forge now
- ChromaDB stores vectors, SQLite stores file content — they work together

### Section 2 — ChromaDB setup and collections (15 min)
- Install ChromaDB, create a persistent client
- A collection is a named group of embeddings — one per ingested repo
- Each document has: an ID, the embedding vector, optional metadata, optional text

### Section 3 — Indexing Forge's chunks (20 min)
- Full pipeline: CodeFile → chunker → embed → store in ChromaDB with metadata
- Batch embedding: embed multiple chunks in one API call
- Upsert: add new chunks, update changed ones, ignore unchanged
- Verify: count documents, spot-check metadata
- **Callback to Lesson 36:** In Lesson 36 you ran k-means on hand-crafted features. Try running it now on the ChromaDB embeddings — use the stored vectors directly. Do the semantic clusters differ from the structural ones?

### Section 4 — Querying (10 min)
- Embed the query string using the same model as the documents
- collection.query(query_embeddings=…, n_results=10, where={'language': 'CSharp'})
- Print the top 5 results for a test query — verify they are relevant
- **Forge connection:** This is the first end-to-end semantic search over Forge's real data. Ask it something in plain English — "how does authentication work?" — and see what comes back. This is the moment the course has been building toward since Lesson 17.

### Section 5 — Update state files (5 min)
- Commit src/vector_store.py
- Update all four state files, commit, push

---

## Lesson 41 — Retrieval

- **Subject:** Top-k retrieval, metadata filtering, hybrid search — dense plus sparse
- **Outcome:** Plain English query → most relevant code chunks with similarity scores
- **Freshness check:** ChromaDB query docs and hybrid search options

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between ChromaDB and SQLite in Forge — what does each store and why?
2. Why does querying ChromaDB require embedding the query first?
3. What does the where clause in a ChromaDB query do?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Dense retrieval (15 min)
- Embed the query, find the k nearest vectors in ChromaDB
- Top-k: return the k most similar chunks
- **Callback to Lesson 22:** The similarity ranking is computed using cosine_similarity() from src/maths.py. ChromaDB uses the same mathematical operation — just at scale with approximate algorithms.
- Implement retrieve() in src/retriever.py — clean, typed, tested

### Section 2 — Metadata filtering (15 min)
- Filter by metadata before similarity search — only search within a specific repo or language
- ChromaDB's where clause: {'language': 'CSharp'}
- Add optional filter parameters to retrieve()

### Section 3 — Sparse retrieval (BM25) (15 min)
- BM25: keyword-based ranking — the algorithm behind traditional search engines
- Dense retrieval finds semantic matches, sparse finds keyword matches
- Install rank_bm25, build an index over chunk text, query it

### Section 4 — Hybrid search and Forge connection (10 min)
- Combine dense and sparse results — more robust than either alone
- Reciprocal rank fusion: merge ranked lists without needing compatible scores
- Implement hybrid_retrieve() in src/retriever.py
- **Forge connection:** Test hybrid_retrieve() on five queries where keyword search alone would fail — function name synonyms, concept descriptions, behaviour rather than implementation. Compare to dense-only results. Document the difference.

### Section 5 — Update state files (5 min)
- Commit src/retriever.py
- Update all four state files, commit, push

---

## Lesson 42 — Reranking

- **Subject:** Why first retrieval is not good enough, cross-encoders, reranking strategies
- **Outcome:** Add reranking — compare results before and after, measure quality improvement
- **Freshness check:** Latest sentence-transformers CrossEncoder docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between dense and sparse retrieval — what does each find well?
2. What is reciprocal rank fusion — why is it needed when combining two ranked lists?
3. Why is hybrid search more robust than either approach alone?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The two-stage retrieval pattern (10 min)
- Stage 1 (recall): retrieve a large candidate set quickly — top 20–50
- Stage 2 (precision): rerank the candidates — return top 5–10
- Why not just use a precise model for stage 1? — too slow at scale

### Section 2 — Cross-encoders (20 min)
- A bi-encoder encodes query and document separately — fast but less accurate
- A cross-encoder takes query and document together — more accurate but slower
- sentence-transformers CrossEncoder — outputs a relevance score for any (query, document) pair

### Section 3 — Implement reranking (20 min)
- Retrieve top 20 with the bi-encoder
- Score all 20 with the cross-encoder
- Sort by cross-encoder score, return top 5
- Add rerank() to src/retriever.py
- **Forge connection:** Run five test queries without and with reranking. Are the reranked results better? Use your developer knowledge — you know what a good answer to "how does authentication work?" should look like. Document your findings.

### Section 4 — Before and after comparison (5 min)
- Commit the before/after comparison results to docs/reranking_eval.md
- The habit of documenting what changed and why is what separates engineers from script runners

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 43 — Context Window Management

- **Subject:** Token limits, overflow handling, summarisation, sliding windows, truncation
- **Outcome:** Handle a query whose retrieved chunks exceed the context limit gracefully
- **Freshness check:** Latest model context window sizes and tiktoken docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the two-stage retrieval pattern — why is stage 1 different from stage 2?
2. What is the difference between a bi-encoder and a cross-encoder?
3. Why does reranking improve results — what can the cross-encoder see that the bi-encoder cannot?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The context window (10 min)
- Every LLM has a maximum number of tokens — system prompt + history + chunks + query
- Exceeding the limit causes an API error — Forge must handle this gracefully

### Section 2 — Counting tokens (15 min)
- Install tiktoken, load the encoding for the model in use
- Count tokens in a system prompt, a chunk, a query
- Build a token budget: allocate tokens to each component
- Implement count_tokens() in src/utils.py

### Section 3 — Truncation and priority (20 min)
- When chunks exceed the budget: remove lowest-ranked chunks first
- Never truncate a chunk in the middle — remove whole chunks
- Always preserve the system prompt and the query
- Implement fit_to_context() in src/retriever.py

### Section 4 — Summarisation for overflow and Forge connection (10 min)
- Alternative: summarise chunks that do not fit
- When to truncate vs summarise — summarise important context, truncate low-ranked
- Implement the summarisation fallback
- **Forge connection:** Test with a deliberately large query — ingest a repo with many large files, ask a broad question. Does fit_to_context() handle the overflow correctly? Verify by checking the token count of the final prompt before it is sent.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 44 — Prompt Engineering

- **Subject:** System prompts, few-shot examples, chain of thought, structured output, prompt hygiene
- **Outcome:** Write and evaluate three variants of a Forge system prompt
- **Freshness check:** Latest OpenAI prompt engineering guide

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a token budget — what components does Forge's context window need to accommodate?
2. What is the difference between truncating and summarising overflow context — when would you choose each?
3. Why must you never truncate a chunk in the middle?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why prompts matter (10 min)
- The prompt is the only thing you control at inference time
- The same model gives dramatically different answers to different prompts
- For Forge: the system prompt determines the quality of every answer

### Section 2 — System prompts (15 min)
- Sets the model's role, constraints, output format, and behaviour
- Be specific about what the model should and should not do
- Include the format you want: prose, JSON, citations
- Write Forge's first system prompt — explicit about citing sources

### Section 3 — Few-shot examples (15 min)
- Show the model examples of the output you want
- Examples are more powerful than instructions for complex formatting tasks
- Add two examples of good Forge answers — test the difference against no examples

### Section 4 — Chain of thought and structured output and Forge connection (15 min)
- Chain of thought: "think step by step" — forces reasoning before answering
- Structured output: instruct the model to respond in JSON — parse and use it
- Write three prompt variants, evaluate each on five test questions, pick the best
- **Forge connection:** Commit the best system prompt to src/prompts.py as FORGE_SYSTEM_PROMPT. Every specialist agent in Track F will start from this prompt and narrow it for their specific job. Getting the base prompt right now pays dividends across six agents.

### Section 5 — Update state files (5 min)
- Commit src/prompts.py
- Update all four state files, commit, push

---

## Lesson 45 — RAG — Cited Answers

- **Subject:** Assembling the full pipeline — retrieve, rerank, construct prompt, generate, cite
- **Outcome:** Forge answers a question about a real repo and cites the exact files used
- **Freshness check:** Latest OpenAI chat completion docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What makes a system prompt effective — name three things it must specify?
2. What does chain of thought do — why does it improve answer quality?
3. Why are few-shot examples often more effective than detailed instructions?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The full pipeline (10 min)
- Step 1: receive a query
- Step 2: retrieve + rerank relevant chunks
- Step 3: fit chunks to context window
- Step 4: construct the prompt using the best prompt from Lesson 44
- Step 5: call the LLM, generate an answer
- Step 6: parse citations from the answer

### Section 2 — Prompt construction (15 min)
- System prompt from Lesson 44 — already refined
- Context section: each chunk labelled with its source file path and line range
- Instruction: answer based only on provided context, cite every claim

### Section 3 — Implementing src/rag.py (25 min)
- answer(query, repo=None, language=None) → AnswerResult
- AnswerResult: answer text, list of citations, list of source chunks
- Wire all components together — retriever, context builder, LLM call, response parser
- **Callback to every previous lesson:** The GitHub client from Lesson 14 fetches files. The chunker from Lesson 39 splits them. The embeddings from Lesson 38 represent them. The cosine similarity from Lesson 22 ranks them. The context management from Lesson 43 fits them. The prompt from Lesson 44 frames them. This is the lesson where it all connects.
- Test with three real questions about a real public GitHub repo

### Section 4 — Citation parsing (5 min)
- Instruct the model to cite using [FILE: path] markers
- Parse citations from the response with simple string matching
- Return citations alongside the answer — every claim is traceable

### Section 5 — Update state files (5 min)
- Commit src/rag.py
- Update all four state files, commit, push

---

## Lesson 46 — Evaluation I — Concepts

- **Subject:** Relevance, faithfulness, context precision, context recall, hallucination detection
- **Outcome:** Define and manually score five Forge answers against all evaluation criteria
- **Freshness check:** Latest RAGAS framework docs and evaluation research

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. Describe the full RAG pipeline from query to answer — every step in order.
2. What is an AnswerResult — what does it contain?
3. Why must citations be traceable — what goes wrong in an AI system without them?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why evaluation is hard for RAG (10 min)
- Unlike classification, there is no single correct answer to evaluate against
- Four things can go wrong: bad retrieval, bad generation, hallucination, missing information
- Need metrics that independently assess each stage

### Section 2 — Retrieval metrics (20 min)
- Context precision: of the retrieved chunks, what fraction were actually relevant?
- Context recall: of all relevant information in the corpus, what fraction was retrieved?
- **Callback to Lesson 34:** Precision and recall from Lesson 34 reappear here — same concepts, different domain. Retrieval precision and recall measure the same tradeoff as classification precision and recall.
- Compute these manually for three test queries — judge relevance by hand

### Section 3 — Generation metrics (20 min)
- Faithfulness: does the answer only contain claims supported by retrieved context?
- Answer relevance: does the answer actually address the question asked?
- Hallucination: does the answer contain claims not in the context?
- Score five Forge answers manually against all criteria

### Section 4 — Why manual evaluation first (5 min)
- Automated metrics approximate human judgement
- The manual scores from this lesson become ground truth for Lesson 47's automated suite

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 47 — Evaluation II — Forge's Eval Suite

- **Subject:** Automated evals, ground truth datasets, running in CI, interpreting results over time
- **Outcome:** Automated eval suite scoring Forge's RAG pipeline — committed to tests/eval/
- **Freshness check:** Latest RAGAS and evaluation tooling versions

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is context precision — how does it differ from context recall?
2. What is hallucination in a RAG context — how does it differ from a wrong answer?
3. Why do manual scores from Lesson 46 matter before building the automated suite?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Building a ground truth dataset (15 min)
- A set of (question, expected_answer, relevant_file_paths) tuples
- Derive from manual evaluations in Lesson 46
- Store as JSON in tests/eval/

### Section 2 — Automated relevance scoring (15 min)
- Use an LLM as a judge: given question, context, and answer — rate faithfulness 1–5
- Implement evaluate_faithfulness() and evaluate_relevance()
- Calibrate against manual scores — do the automated scores agree?

### Section 3 — RAGAS (15 min)
- Install RAGAS, configure, run against Forge's test questions
- Understand each metric — they map to concepts from Lesson 46
- Add RAGAS as a dev dependency

### Section 4 — Running evals and interpreting results and Forge connection (10 min)
- Run the eval suite, interpret the output
- Which questions fail? Which retrieve poorly? Which hallucinate?
- Use results to identify the weakest part of the pipeline and fix it first
- **Forge connection:** The eval suite from this lesson runs against every change you make in Track F. When you add a new agent or modify retrieval, you run the suite to verify nothing regressed. This is the quality gate for the rest of the course.

### Section 5 — Update state files (5 min)
- Commit tests/eval/ with ground truth dataset and eval suite
- Update all four state files, commit, push — Track E complete
