# Track C — Maths for ML & AI — Lessons 17–27

---

## Lesson 17 — Vectors

- **Subject:** What a vector is, direction vs magnitude, geometric intuition, meaning as numbers
- **Outcome:** Draw and reason about vectors by hand, understand what an embedding vector represents
- **Freshness check:** Pure maths — no external dependencies

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between what SQLite stores and what a vector store will store — why does Forge need both?
2. What is an upsert — why is it better than a plain insert for Forge's ingestion pipeline?
3. Describe the full ingestion pipeline end to end from repo URL to SQLite record.

Answer from memory. Gaps are addressed before moving on.

### Section 1 — From arrays to vectors (15 min)
- A C# array is just numbers in memory — no geometric meaning implied
- A vector is numbers with a relationship — they jointly describe something
- Direction and magnitude — the two properties that define a vector
- Draw a 2D vector as an arrow from the origin — the arrow is the vector, not the point

### Section 2 — Vectors are not positions (10 min)
- Move the arrow to start at (1,1) — same direction and length — still the same vector
- Vectors describe displacement, not location
- Two different code snippets can occupy the same "position" in meaning space — still different directions

### Section 3 — From geometry to meaning (20 min)
- Toy 2D example: dimension 1 = "talks about functions", dimension 2 = "talks about loops"
- Two similar code snippets have similar values in both dimensions — similar vectors
- Scale to 1536 dimensions — each dimension captures a learned aspect of meaning
- An embedding is a point in high-dimensional meaning space — the model learns what each dimension means

### Section 4 — Reasoning about similarity (10 min)
- Vectors pointing the same direction — similar meaning
- Vectors at 90 degrees (orthogonal) — completely unrelated
- Vectors pointing opposite directions — what would "opposite" mean for code?
- Why direction matters more than length — long and short functions can mean the same thing
- **Forge connection:** The fake 1536-dimension arrays from Lesson 10 are now meaningful. They represent two code chunks. If their directions are similar, the chunks are semantically related. This is what Forge's search does — no keywords needed.

### Section 5 — Update state files (5 min)
- No code this lesson — pure reasoning and drawing
- Update all four state files, commit, push

---

## Lesson 18 — Vector Operations

- **Subject:** Addition, subtraction, scalar multiplication, linear combinations
- **Outcome:** Implement vector operations from scratch in Python, verify with NumPy
- **Freshness check:** NumPy array operation docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What two properties define a vector — and why does that make it different from a plain array?
2. Why does direction matter more than magnitude when comparing code embeddings?
3. What does it mean geometrically for two vectors to be orthogonal?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Vector addition (15 min)
- Add corresponding components: [1,2] + [3,4] = [4,6]
- Geometric: placing vectors tip to tail
- The famous word2vec result: king - man + woman ≈ queen — geometry in meaning space
- Implement add_vectors(a, b) from scratch

### Section 2 — Scalar multiplication (10 min)
- Multiply every component by a scalar: 2 × [1,2] = [2,4]
- Direction unchanged, magnitude scaled
- Negative scalar — reverses direction
- Implement scale_vector(v, scalar)

### Section 3 — Subtraction (10 min)
- Subtract corresponding components
- The vector from B to A — the direction you travel to get from one meaning to another
- Why the word2vec result works — geometry in meaning space
- Implement subtract_vectors(a, b)

### Section 4 — Linear combinations and verification (15 min)
- A linear combination: w1×v1 + w2×v2 + … — scaling and summing multiple vectors
- Why this is fundamental — a neural network layer computes a linear combination
- Implement all three operations in src/maths.py with full type hints
- Verify every result against np.add, np.multiply, np.subtract
- **Forge connection:** Commit src/maths.py — this file will grow through Lessons 19–22 and become the mathematical backbone of Forge's similarity search.

### Section 5 — Update state files (5 min)
- Commit src/maths.py with vector operations and tests
- Update all four state files, commit, push

---

## Lesson 19 — Matrices

- **Subject:** What a matrix is, shapes, transpose, why neural networks are matrix operations
- **Outcome:** Represent a dataset as a matrix, transpose it, understand what each dimension means
- **Freshness check:** Pure maths — no external dependencies

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a linear combination — give a concrete example with two vectors?
2. What does vector subtraction represent geometrically?
3. Why is a neural network layer described as a linear combination?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — From vector to matrix (15 min)
- A vector is a single row or column of numbers
- A matrix is multiple vectors stacked together — a grid of rows and columns
- Shape notation: (3, 4) means 3 rows, 4 columns — rows always first
- The ML convention: rows = examples, columns = features

### Section 2 — Representing Forge data as a matrix (15 min)
- Take five CodeFile objects — each row is a file, each column is a feature
- Understand what each cell means: M[2, 3] is the 4th feature of the 3rd file
- This is exactly how scikit-learn and every ML framework receives data
- **Forge connection:** When Forge embeds 100 code chunks, the result is a (100, 1536) matrix — 100 rows, one per chunk, 1536 columns, one per embedding dimension. Sketch this on paper before moving on.

### Section 3 — Transpose (15 min)
- Transpose flips rows and columns: a (3, 4) matrix becomes (4, 3)
- Why transpose appears constantly in ML — aligning dimensions before multiplication
- Implement transpose(M) from scratch, verify against np.transpose()

### Section 4 — Identity matrix and scalar multiplication (10 min)
- Identity matrix: 1s on the diagonal, 0s everywhere else — like multiplying by 1
- Scalar multiplication of a matrix: every element multiplied by the same number
- Why these appear in ML papers and derivations

### Section 5 — Update state files (5 min)
- Add transpose() to src/maths.py with tests
- Update all four state files, commit, push

---

## Lesson 20 — Matrix Multiplication

- **Subject:** The operation step by step, geometric meaning, why it is the core of deep learning
- **Outcome:** Multiply two matrices by hand and with NumPy — verify they match
- **Freshness check:** NumPy matmul docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the ML convention for matrix shape — what do rows and columns represent?
2. What does transpose do and why does it appear so often in ML code?
3. If Forge embeds 100 code chunks using a 1536-dimension model, what is the shape of the resulting matrix?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The operation step by step (20 min)
- Row of A dotted with column of B gives one element of the result
- Work through a (2,3) × (3,2) multiplication completely by hand
- Shape rule: (m, k) × (k, n) = (m, n) — the inner dimensions must match
- Why order matters: AB ≠ BA — demonstrate with a small example

### Section 2 — Why this is the core of deep learning (15 min)
- A neural network layer: output = input @ weight_matrix
- Attention in transformers: Q, K, V are each computed by a matrix multiply
- Every forward pass through any neural network is matrix multiplications plus activations
- **Callback to Lesson 17:** An embedding model converts a code chunk into a vector. That conversion is a series of matrix multiplications applied to the token sequence. The vector Forge stores is the output of the final layer.

### Section 3 — Implement and verify (10 min)
- Implement matmul(A, B) from scratch — nested loops, clear and readable
- Verify against np.matmul() and the @ operator
- Add to src/maths.py with tests

### Section 4 — Batch operations (10 min)
- In ML, you process many examples at once — a batch
- Batched matrix multiply: (batch, m, k) @ (k, n) = (batch, m, n)
- Why GPU acceleration matters — matrix multiplication is parallelisable

### Section 5 — Update state files (5 min)
- Commit matmul() to src/maths.py
- Update all four state files, commit, push

---

## Lesson 21 — Dot Product

- **Subject:** The calculation, geometric meaning, relationship to matrix multiplication
- **Outcome:** Implement dot_product() in src/maths.py with full tests
- **Freshness check:** Pure maths with NumPy verification

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the shape rule for matrix multiplication — what must be true about the dimensions?
2. What does one element of the result matrix represent — how is it computed?
3. Why does AB ≠ BA in matrix multiplication?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The calculation (10 min)
- Multiply corresponding elements, sum all the products
- [1,2,3] · [4,5,6] = 4 + 10 + 18 = 32
- Result is always a scalar — the core operation inside matrix multiplication

### Section 2 — Geometric interpretation (20 min)
- High positive result — pointing the same direction
- Zero — perpendicular, no alignment at all
- Negative — pointing away from each other
- A · B = |A| × |B| × cos(θ) — work through 2D examples by hand

### Section 3 — The magnitude problem (10 min)
- Sensitive to vector length — longer vectors produce larger numbers
- For embedding similarity we want direction only, not length
- This motivates cosine similarity — the next lesson

### Section 4 — Implement and test (15 min)
- Implement dot_product(a, b) in src/maths.py
- Raise ValueError if lengths do not match
- Tests: basic result, identical vectors, orthogonal (expect 0), mismatched lengths
- Verify all results match np.dot()
- **Forge connection:** The dot product is the core computation inside every similarity search Forge performs. When you query Forge in Lesson 40, dot products are computed between the query embedding and every stored chunk embedding — thousands of times per second.

### Section 5 — Update state files (5 min)
- Commit dot_product() to src/maths.py
- Update all four state files, commit, push

---

## Lesson 22 — Cosine Similarity

- **Subject:** Normalisation, why direction beats magnitude, formula derived from dot product
- **Outcome:** Implement cosine_similarity() in src/maths.py, test against known pairs
- **Freshness check:** scikit-learn cosine_similarity for verification

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does a dot product of zero tell you about two vectors?
2. Why is the dot product alone not sufficient for comparing code embeddings?
3. What is the formula relating dot product to angle — A · B = ?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — The magnitude problem revisited (10 min)
- A one-line function and a 200-line function doing the same thing — we want them to score as similar
- Normalisation: divide a vector by its magnitude to get a unit vector of length exactly 1
- Now comparison is purely about direction

### Section 2 — Magnitude and normalisation (15 min)
- Magnitude: square root of sum of squares — |[3,4]| = sqrt(9+16) = 5
- Unit vector: divide every element by the magnitude — [3,4]/5 = [0.6, 0.8]
- Verify: [0.6,0.8] · [0.6,0.8] = 1.0 — length is exactly 1
- Implement magnitude(v) and normalise(v) in src/maths.py

### Section 3 — Cosine similarity formula (15 min)
- cos(θ) = (A · B) / (|A| × |B|) — equivalently: dot_product(normalise(A), normalise(B))
- Result always between -1 and 1: 1.0 = identical direction, 0 = orthogonal, -1 = opposite
- Implement cosine_similarity(a, b) using the functions already written

### Section 4 — Test with known pairs and Forge connection (15 min)
- Orthogonal: [1,0,0] and [0,1,0] — expect exactly 0.0
- Opposite: [1,0,0] and [-1,0,0] — expect exactly -1.0
- Similar: [0.9,0.1,0.8] and [0.85,0.15,0.75] — expect close to 1.0
- Verify all results match scikit-learn's cosine_similarity
- **Forge connection:** cosine_similarity() is the function Forge uses to rank search results. When a user asks "how does authentication work?", Forge embeds that query, then calls cosine_similarity() between the query vector and every chunk vector. The highest scores are returned. This function is production code, not a maths exercise.

### Section 5 — Update state files (5 min)
- Commit cosine_similarity(), magnitude(), normalise() to src/maths.py
- Update all four state files, commit, push

---

## Lesson 23 — Probability and Distributions

- **Subject:** Probability, conditional probability, Bayes intuition, how models express uncertainty
- **Outcome:** Understand what a model means when it assigns 0.9 probability to a token
- **Freshness check:** Pure maths — no external dependencies

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does a cosine similarity of 1.0 mean — and what does 0.0 mean?
2. Why does normalisation make cosine similarity better than raw dot product for comparing code chunks?
3. What range of values can cosine similarity return and what does each extreme mean?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Probability basics (15 min)
- Probability as a number between 0 and 1 — a scale from impossible to certain
- The sum rule: all possible outcomes must sum to 1
- Joint probability P(A and B), marginal probability P(A)

### Section 2 — Conditional probability (15 min)
- P(A|B): the probability of A given that B has already happened
- A language model computes P(next_token | all_previous_tokens)
- Given "The function returns" — the model assigns probabilities to the whole vocabulary

### Section 3 — Bayes' theorem intuition (15 min)
- P(A|B) = P(B|A) × P(A) / P(B) — updating beliefs when new evidence arrives
- Work through one concrete example fully — understand the update logic, not just the formula

### Section 4 — Distributions and LLM output (10 min)
- A distribution assigns a probability to every possible outcome — sums to 1
- An LLM outputs a distribution over the entire vocabulary at each step
- Temperature: high = flatter distribution = more random; low = peaked = more deterministic
- **Forge connection:** When Forge calls the OpenAI API in Lesson 37 and passes temperature=0, it is asking for the most peaked distribution — the model picks the most likely token every time. Temperature=1.0 samples from the full distribution. Understanding this is what separates someone who uses an API from someone who understands it.

### Section 5 — Update state files (5 min)
- No code this lesson — pure reasoning
- Update all four state files, commit, push

---

## Lesson 24 — Statistics Fundamentals

- **Subject:** Mean, variance, standard deviation, the normal distribution in depth
- **Outcome:** Compute and interpret statistics on real data from Forge's database
- **Freshness check:** NumPy and scipy.stats current docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does a language model actually output at each step — what is the shape of that output?
2. What does temperature do to a model's output distribution — describe high vs low temperature?
3. What does conditional probability mean — give an example using a language model?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Mean and variance by hand (15 min)
- Mean: sum all values, divide by the count — the centre of mass
- Variance: average squared distance from the mean — measures spread
- Standard deviation: square root of variance — same units as the data
- Work through calculations by hand on a small dataset first

### Section 2 — The normal distribution (20 min)
- The bell curve — symmetric around the mean, tails falling off on both sides
- Defined by two parameters: mean and standard deviation
- The 68-95-99.7 rule: 68% within 1 std, 95% within 2 std, 99.7% within 3 std
- Why ML assumes normality: the central limit theorem — averages of many random things tend toward normal

### Section 3 — Apply to Forge's actual data (15 min)
- Load file sizes from Forge's SQLite database using the database module from Lesson 16
- Compute mean, variance, std using NumPy — interpret what they mean about the codebase
- Plot a histogram — code file sizes are almost certainly right-skewed, not normal
- **Forge connection:** This is the first time Track C maths is applied directly to Forge's real data. The files you ingested in Lesson 16 are the dataset. Statistics are not abstract — they describe your actual corpus.

### Section 4 — Outliers and robust statistics (5 min)
- Mean is sensitive to outliers — one huge file distorts everything
- Median: the middle value when sorted — robust to outliers
- Apply to Forge: identify outlier files, decide whether to include them in embeddings

### Section 5 — Update state files (5 min)
- Commit the statistics analysis script
- Update all four state files, commit, push

---

## Lesson 25 — Information Theory Basics

- **Subject:** Entropy, cross-entropy, KL divergence — why cross-entropy is the standard loss function
- **Outcome:** Compute entropy of a small distribution by hand, understand why it appears in training
- **Freshness check:** Pure maths — no external dependencies

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is standard deviation — what does a high value tell you about a dataset?
2. Why is mean sensitive to outliers but median is not?
3. What is the 68-95-99.7 rule and what distribution does it describe?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What is information? (10 min)
- Information is surprise — rare events carry more information than common ones
- "The sun rose today" — no information; "The server is down" — high information
- Claude Shannon's 1948 question: how do you measure information mathematically?

### Section 2 — Entropy (20 min)
- H(p) = -sum(p(x) × log₂(p(x))) for all outcomes x — the average surprise
- Fair coin: H = 1.0 bit — maximum uncertainty for a binary choice
- 99/1 loaded coin: H ≈ 0.08 bits — almost no uncertainty
- Uniform over 4 outcomes: H = 2 bits
- High entropy = high uncertainty

### Section 3 — Cross-entropy (20 min)
- H(p, q) = -sum(p(x) × log(q(x))) — using model distribution q to describe true distribution p
- When q exactly matches p: H(p,q) = H(p) — minimum possible
- Training a language model: p is the true next token, q is the model's prediction
- Minimise cross-entropy = make q match p = the model learns
- **Callback to Lesson 23:** The model outputs a probability distribution over the vocabulary. Cross-entropy measures how wrong that distribution is compared to the true answer. Training is just minimising this number, billions of times.

### Section 4 — KL divergence (5 min)
- KL(p||q) = H(p,q) - H(p) — the extra surprise from using q instead of p
- Always ≥ 0, equals 0 only when p = q
- Appears in VAEs, RLHF, knowledge distillation — brief intuition only

### Section 5 — Update state files (5 min)
- No code this lesson — pure maths
- Update all four state files, commit, push

---

## Lesson 26 — Loss Functions and Optimisation

- **Subject:** MSE, cross-entropy loss, minimising loss geometrically, gradient descent with plots
- **Outcome:** Plot a loss curve, find the minimum by hand and by gradient step
- **Freshness check:** matplotlib current version

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does entropy measure — what does high entropy mean about a distribution?
2. What is cross-entropy loss measuring when training a language model?
3. What does it mean to minimise cross-entropy — what is the model learning to do?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What loss is (10 min)
- Loss measures how wrong the model is — lower is better
- Loss is a function of the model's parameters — change the weights, change the loss
- Training: compute loss, adjust parameters to reduce it, repeat millions of times

### Section 2 — Mean squared error (15 min)
- MSE = (1/n) × sum((prediction - truth)²) — used for regression
- Why squared: always positive, penalises large errors more than small ones
- Compute MSE by hand: predictions=[2,5,9], truth=[3,4,10] → MSE = 1.0

### Section 3 — Cross-entropy loss (10 min)
- Used for classification and language modelling — connects to Lesson 25
- Penalises confident wrong answers most severely
- P(Python)=0.9 when true → low loss; P(Python)=0.1 when true → very high loss

### Section 4 — Gradient descent with plots (20 min)
- Draw a 1D loss curve — a bowl shape with a minimum
- The gradient is the slope — tells you which direction is uphill
- Move in the opposite direction of the gradient — always downhill
- Step size (learning rate): too large = overshoot, too small = very slow
- Plot a simple loss function in matplotlib, take five manual gradient steps, watch convergence
- **Forge connection:** Every embedding model Forge uses was trained by gradient descent — billions of steps minimising cross-entropy loss. When you call the OpenAI embedding API, you are using the result of that process. Understanding gradient descent is what separates using a model from understanding what it learned.

### Section 5 — Update state files (5 min)
- Commit the plotting script
- Update all four state files, commit, push

---

## Lesson 27 — Gradients and Backpropagation

- **Subject:** Partial derivatives, chain rule intuition, how gradients flow through a network
- **Outcome:** Trace backpropagation through a two-layer network by hand
- **Freshness check:** Pure maths — no external dependencies

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does the learning rate control in gradient descent — what goes wrong if it is too large or too small?
2. Why does cross-entropy loss penalise confident wrong answers more than uncertain wrong answers?
3. What is the shape of a loss curve and why does gradient descent follow the slope downward?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Partial derivatives (15 min)
- Loss depends on thousands of parameters simultaneously
- Partial derivative ∂f/∂x: how much does f change if we nudge only x?
- Compute partial derivatives of simple functions by hand

### Section 2 — The chain rule (15 min)
- Composing functions: f(g(x)) — a neural network is many functions composed
- Chain rule: df/dx = (df/dg) × (dg/dx) — derivatives multiply through the chain
- This is the entire mathematical basis of backpropagation

### Section 3 — Forward pass (10 min)
- A two-layer network: input → linear layer → activation → linear layer → loss
- Compute the output at each layer, compute the final loss
- Track every intermediate value — they are all needed during the backward pass

### Section 4 — Backward pass and Forge connection (15 min)
- Work backwards applying the chain rule at each step
- Compute the gradient of loss with respect to every weight
- These gradients tell us which direction to adjust each weight to reduce loss
- **Forge connection:** You will never implement backpropagation in Forge — PyTorch does it automatically. But every time Forge calls an embedding model or an LLM, the weights inside that model were shaped by this exact process. Understanding backpropagation is the difference between treating the model as a black box and understanding why it behaves the way it does.

### Section 5 — Update state files (5 min)
- No new code — pure maths
- Update all four state files, commit, push — Track C complete
