# Track D — Data & Classical ML — Lessons 28–36

---

## Lesson 28 — DataFrames I

- **Subject:** Pandas — loading, inspecting, indexing, selecting, basic operations
- **Outcome:** Load Forge's SQLite metadata into a DataFrame, inspect and filter it
- **Freshness check:** Latest pandas version and docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is a partial derivative — what does ∂f/∂x mean in plain English?
2. What is the chain rule and why is it the basis of backpropagation?
3. Why does a neural network need to track intermediate values during the forward pass?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What pandas is and why (10 min)
- pandas is the standard library for tabular data in Python
- A DataFrame is a table — rows are records, columns are attributes
- Similar to a SQL result set or a C# DataTable — use that intuition

### Section 2 — Loading data (15 min)
- pd.read_sql() — load Forge's SQLite metadata directly into a DataFrame
- Inspect: df.head(), df.tail(), df.info(), df.describe()
- Understand what info() and describe() reveal about the data

### Section 3 — Indexing and selecting (20 min)
- df['column'] — single column returns a Series
- df[['col1', 'col2']] — multiple columns returns a DataFrame
- df.loc and df.iloc — label-based and integer-based row selection
- Boolean indexing: df[df['language'] == 'Python'] — the most common pattern

### Section 4 — Basic operations and Forge connection (10 min)
- value_counts(), sort_values(), nunique()
- Apply to Forge's metadata: files per language, largest files, most common repos
- **Forge connection:** Load the real data ingested into Forge's SQLite database in Lesson 16. How many files per language? What is the size distribution? Which repos have the most content? These questions matter for deciding what to embed and what to skip.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 29 — DataFrames II

- **Subject:** Cleaning, transforming, handling missing data, merging, groupby
- **Outcome:** Clean and transform Forge's metadata — duplicates removed, gaps filled, grouped
- **Freshness check:** pandas cleaning and groupby docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between df.loc and df.iloc?
2. What does boolean indexing look like in pandas — give a concrete example using Forge's data?
3. What does df.describe() show you — what does it not show you?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Missing data (15 min)
- isnull(), notnull() — detecting missing values
- fillna() — replacing missing values; dropna() — removing rows with missing values
- When to fill vs drop — depends on why data is missing

### Section 2 — Cleaning and transforming (20 min)
- drop_duplicates(), rename(), astype()
- str accessor: lower(), strip(), contains()
- Apply to Forge: normalise file paths, lowercase language names

### Section 3 — Merging DataFrames (10 min)
- pd.merge() on a shared key — inner, left, outer
- This is SQL JOIN — use that intuition directly
- Merge files DataFrame with repos DataFrame

### Section 4 — groupby and Forge connection (10 min)
- df.groupby('language').agg({'size_bytes': ['mean', 'sum', 'count']})
- Apply to Forge: file counts and average sizes per language per repo
- **Forge connection:** The cleaned, grouped DataFrame from this lesson feeds directly into the feature engineering in Lesson 31. Clean data now means reliable features later.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 30 — Data Visualisation

- **Subject:** matplotlib, seaborn — histograms, bar charts, box plots
- **Outcome:** Visualise Forge's corpus — file size distribution, language breakdown, repo comparison
- **Freshness check:** Latest matplotlib and seaborn versions

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between fillna() and dropna() — when would you choose each?
2. What does groupby().agg() do — describe it in plain English?
3. What is a SQL JOIN equivalent in pandas?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why visualise first (5 min)
- Numbers alone hide patterns — plots reveal them immediately
- Always visualise your data before building any model

### Section 2 — matplotlib basics (15 min)
- The figure/axes model — a figure contains one or more axes
- plt.hist(), plt.bar(), plt.scatter() — the most used chart types
- Labels, titles, legends — every plot must have all three

### Section 3 — Histograms and distributions (15 min)
- Plot the distribution of file sizes from Forge's database
- Log scale for skewed data — makes the shape readable
- **Callback to Lesson 24:** You computed mean and std of file sizes in Lesson 24. Does the histogram match what those numbers suggested? Is the distribution normal or skewed?

### Section 4 — seaborn for richer plots and Forge connection (20 min)
- sns.countplot() — language breakdown as a bar chart
- sns.boxplot() — file size distribution by language side by side
- sns.heatmap() — correlation between numerical features
- Apply all three to Forge's real metadata
- **Forge connection:** Save the three charts to docs/corpus_analysis.png. They tell the story of what Forge ingested — useful for the portfolio README in Lesson 66 and for understanding what the embedding pipeline will be working with.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 31 — Features and Feature Engineering

- **Subject:** What features are, encoding categorical data, scaling, selection
- **Outcome:** Engineer features from Forge's code files — line count, function count, comment ratio
- **Freshness check:** scikit-learn preprocessing docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What are the three seaborn chart types used in Lesson 30 and what does each show?
2. Why use a log scale for a file size histogram?
3. What does a box plot show that a histogram does not?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What features are (10 min)
- A feature is a measurable, numeric property of an example
- ML models can only work with numbers — everything must be converted
- Feature engineering is often more impactful than model choice

### Section 2 — Extracting features from code (20 min)
- Count lines, blank lines, comment lines, function definitions, class definitions
- Compute ratios: comment_ratio, function_density
- Write src/feature_extractor.py with tests

### Section 3 — Encoding categorical features (15 min)
- One-hot encoding: one binary column per category
- Ordinal encoding: assign integers — only when there is genuine order
- Use scikit-learn's OneHotEncoder

### Section 4 — Scaling and Forge connection (10 min)
- StandardScaler: zero mean, unit variance
- MinMaxScaler: scale to [0, 1]
- When scaling matters and when it does not — tree models are scale-invariant
- **Forge connection:** The features extracted here — line count, function count, comment ratio — will feed the classifier in Lesson 32 and the regression in Lesson 33. They will also complement embedding-based search: a user can filter by "short functions" or "well-commented files" before semantic search runs.

### Section 5 — Update state files (5 min)
- Commit src/feature_extractor.py
- Update all four state files, commit, push

---

## Lesson 32 — Classification

- **Subject:** Classification algorithms, train/test split, scikit-learn, predictions
- **Outcome:** Train a classifier that predicts programming language from code features
- **Freshness check:** Latest scikit-learn version

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between one-hot encoding and ordinal encoding — when would you use each?
2. Why does scaling matter for some models but not others?
3. What is function_density as a feature — what does it measure about a code file?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — What classification is (10 min)
- Predict which category an example belongs to
- Binary vs multiclass — predicting language is multiclass
- The scikit-learn interface: fit(), predict(), score()

### Section 2 — Train/test split (15 min)
- Models tested on training data appear better than they are
- train_test_split() — shuffle and split
- Stratification: ensure each class is proportionally represented

### Section 3 — Training a classifier (20 min)
- Start with RandomForestClassifier — robust, few hyperparameters
- fit(X_train, y_train), predict(X_test)
- Compare predictions to true labels manually first
- **Forge connection:** The training data is Forge's real ingested files. The labels are the programming languages. This is not a toy dataset — you are classifying files you fetched from GitHub with code you wrote in Lessons 14–15.

### Section 4 — Basic evaluation and iteration (10 min)
- accuracy_score() — fraction correct
- Understand when accuracy is misleading — imbalanced classes
- Try LogisticRegression as a second model and compare

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 33 — Regression

- **Subject:** Linear regression, when to use it, fitting, interpreting coefficients
- **Outcome:** Predict file complexity from structural features, interpret what the model learned
- **Freshness check:** scikit-learn LinearRegression docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is stratification in train/test split — why does it matter for Forge's language classifier?
2. What is the scikit-learn fit/predict pattern — what does fit() actually do?
3. When is accuracy a misleading metric — give a concrete example using Forge's data?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Classification vs regression (10 min)
- Classification: predict a category; regression: predict a continuous number
- Define a complexity score for Forge files: weighted sum of functions, nesting depth, line count

### Section 2 — Linear regression (20 min)
- y = w1×x1 + w2×x2 + … + b — a weighted sum of features plus a bias
- **Callback to Lesson 18:** A linear combination from Lesson 18 — w1×v1 + w2×v2 — is exactly the formula for a linear regression. The maths from Track C is not separate from ML — it is ML.
- Fit LinearRegression on Forge features, predict complexity scores

### Section 3 — Interpreting coefficients (20 min)
- Each weight tells you how much that feature contributes
- Sort by absolute weight value — which features matter most?
- Use your C# and Python knowledge to sanity check the model

### Section 4 — Residual analysis and Forge connection (5 min)
- Residual = predicted - actual
- Plot residuals — should be random noise around zero
- A pattern in residuals means the model is systematically wrong somewhere
- **Forge connection:** Which features best predict complexity in Forge's real files? Does the model's answer match your intuition as a developer? If not — why not? Document your finding in LESSON_LOG.md.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 34 — Model Evaluation

- **Subject:** Precision, recall, F1, confusion matrices, ROC curves
- **Outcome:** Fully evaluate the language classifier from Lesson 32 with all metrics plotted
- **Freshness check:** scikit-learn metrics docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the formula for linear regression — what does each term represent?
2. What do residuals tell you — what does a pattern in the residuals mean?
3. What is the difference between classification and regression — give an example of each using Forge?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why accuracy is not enough (10 min)
- 95% of files are Python → always predict Python = 95% accuracy, useless model
- Precision: of all times we predicted Python, how often were we right?
- Recall: of all actual Python files, how many did we identify?

### Section 2 — Confusion matrix (15 min)
- Predicted class vs actual class — read every cell
- True positives, true negatives, false positives, false negatives
- Plot with seaborn heatmap — which languages are confused with each other and why?

### Section 3 — F1 score (10 min)
- F1 = 2 × (precision × recall) / (precision + recall)
- Macro F1: average across all classes equally
- Weighted F1: weighted by class size — usually better for imbalanced problems

### Section 4 — ROC curves and Forge connection (20 min)
- ROC: plots true positive rate vs false positive rate as decision threshold varies
- AUC: Area Under the Curve — 1.0 perfect, 0.5 random
- One ROC curve per class — one-vs-rest approach
- **Forge connection:** Save the confusion matrix and ROC curves to docs/. These visualisations tell you exactly where the language classifier fails — which languages it confuses and why. That knowledge is useful when designing the C# specialist agent in Lesson 56.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 35 — Overfitting, Underfitting, Cross-Validation

- **Subject:** Bias/variance tradeoff, k-fold cross-validation, regularisation intuition
- **Outcome:** Demonstrate overfitting on a toy dataset, fix it with cross-validation
- **Freshness check:** scikit-learn cross_val_score docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the difference between precision and recall — when would you prioritise each?
2. What does AUC of 0.5 mean — and 1.0?
3. What does the confusion matrix tell you that a single accuracy number does not?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Overfitting (15 min)
- A model that memorises training data but fails on new data
- Demonstrate: very deep decision tree, 100% training accuracy, poor test accuracy
- Plot training vs test accuracy as complexity increases — the overfitting cliff

### Section 2 — Underfitting (10 min)
- A model too simple to capture the pattern — poor on both training and test
- The bias-variance tradeoff: simple = high bias, complex = high variance

### Section 3 — Cross-validation (20 min)
- A single split gives unreliable results — depends on which data ended up where
- k-fold CV: split into k parts, train on k-1, test on 1, rotate k times, average
- cross_val_score() — runs the full procedure automatically
- Apply to Forge's language classifier — compare single split vs 5-fold results

### Section 4 — Regularisation and Forge connection (10 min)
- Add a penalty to the loss for large weights — discourages overfitting
- L1 (Lasso): drives some weights to zero — feature selection
- L2 (Ridge): shrinks all weights — general overfitting control
- **Forge connection:** Overfitting is not just a classical ML problem — RAG pipelines overfit too. A retrieval system tuned too tightly to your test questions will fail on real ones. The mindset from this lesson — always evaluate on held-out data — applies to everything Forge does.

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push

---

## Lesson 36 — Clustering

- **Subject:** K-means, silhouette score, choosing k, visualising clusters
- **Outcome:** Cluster Forge's code files — see natural groupings emerge without labels
- **Freshness check:** scikit-learn clustering docs

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What is the bias-variance tradeoff — what does high bias mean vs high variance?
2. Why is a single train/test split unreliable — what does k-fold CV do instead?
3. What does L1 regularisation do that L2 does not?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Unsupervised learning (10 min)
- No labels — the algorithm finds structure in the data on its own
- Clustering: group similar examples together without pre-labelling anything

### Section 2 — K-means algorithm (20 min)
- Choose k centroids, assign each example to nearest centroid, recompute, repeat
- Convergence: stops when assignments stop changing
- Apply to Forge's code features — try k=3, k=5, k=10

### Section 3 — Choosing k (15 min)
- Elbow method: plot inertia vs k — find the elbow where adding clusters stops helping
- Silhouette score: how well each point fits its cluster vs the nearest other — higher is better
- Compute both for k from 2 to 10

### Section 4 — Visualising clusters and Forge connection (10 min)
- PCA: reduce to 2 dimensions while preserving as much variance as possible
- Plot the 2D projection, colour each point by cluster assignment
- Inspect examples from each cluster — do the groupings make sense?
- **Forge connection:** In Lesson 36 you cluster on hand-crafted features. In Track E you will cluster on embedding vectors — the same algorithm, but the features are learned rather than designed. Run clustering on both and compare the results. Do the semantic clusters match the structural ones?

### Section 5 — Update state files (5 min)
- Update all four state files, commit, push — Track D complete
