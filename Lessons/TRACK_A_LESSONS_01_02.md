# Track A — Workflow & Engineering Foundation — Lessons 01–02

---

## Teaching pattern — applies to every lesson

**Section 0 — Retrieval Challenge (5 min)**
The AI asks 2–3 questions from the previous lesson. You answer from memory. Wrong answers are corrected before the new lesson begins. This is not optional.

**Forge Connection — end of every lesson**
A small, real task that uses what was just taught inside the actual Forge project.

**Callbacks**
Where a later concept connects to an earlier one, the AI asks a question rather than explaining. You reason through the connection first.

---

## Lesson 01 — Forge Foundation

- **Subject:** GitHub repo creation, folder structure, course state files, first commit and push
- **Outcome:** Forge repo live on GitHub with all course infrastructure committed
- **Freshness check:** Latest Git stable version and GitHub repo creation flow

### Section 0 — Retrieval Challenge (5 min)
*No previous lesson — skip for Lesson 01 only.*

### Section 1 — Create the repo on GitHub (10 min)
- Go to github.com, create a new repo named forge
- Settings: public, initialise with README, Python .gitignore, MIT licence
- Understand what each setting does and why it matters for the course

### Section 2 — Clone and inspect (10 min)
- Clone to ~/forge using git clone
- Understand what cloning does — a local copy linked to the remote
- Inspect what GitHub created: README.md, .gitignore
- Understand what .gitignore does and why Python has a standard one

### Section 3 — Create folder structure (10 min)
- Create src/, tests/, docs/, agents/ using mkdir
- Add .gitkeep to each — understand why Git ignores empty folders
- Understand what each folder will eventually contain

### Section 4 — Add course files and commit (15 min)
- Copy all course files into the repo root
- Run git add, git status — read and understand the output before committing
- Write a meaningful commit message — understand what makes a good one
- Push and verify everything is visible on GitHub

### Section 5 — Update state files (10 min)
- Update COURSE_STATE.md — lesson 01 complete, repo path filled in
- Add first entry to LESSON_LOG.md
- Update NEXT_STEPS.md with Lesson 02 details
- **Forge connection:** Write one paragraph in LESSON_LOG.md in your own words explaining what each folder will eventually contain and why the structure is designed this way. First teach-it-back practice.
- Final commit and push

---

## Lesson 02 — Git Beyond Basics

- **Subject:** Branching, merging, resolving conflicts, reading history, Git as a checkpoint system
- **Outcome:** Create a feature branch, make changes, merge back, read the log cleanly
- **Freshness check:** Current Git best practices for solo developers

### Section 0 — Retrieval Challenge (5 min)
The AI asks:
1. What does git clone actually do — what is the relationship between local and remote after cloning?
2. What is the purpose of .gitignore and why does Python need one?
3. What makes a commit message good rather than just acceptable?

Answer from memory. Gaps are addressed before moving on.

### Section 1 — Why branches exist (10 min)
- The problem branches solve — working on something without breaking what already works
- How Forge will use branches: one per lesson, merged when done
- Understand HEAD, main, and what a branch actually is under the hood

### Section 2 — Creating and switching branches (15 min)
- git branch, git checkout, git switch — understand the difference
- Create a branch called lesson-02-practice
- Make a change to README.md on that branch
- Switch back to main and verify it is unchanged

### Section 3 — Merging and understanding the result (15 min)
- Switch back to main, merge the branch
- Read the merge output — understand what fast-forward means
- Delete the merged branch — understand why this is clean practice
- See the full history in git log

### Section 4 — Reading history and resolving conflicts (10 min)
- git log --oneline — reading commit history clearly
- git diff — comparing versions before and after a change
- Deliberately create a conflict, understand what it looks like, resolve it manually
- Understand that conflicts are normal, not failures

### Section 5 — Establish the checkpoint pattern (5 min)
- Agree on the branch-per-lesson pattern for the rest of the course
- **Forge connection:** Create branch lesson-02-practice, update README.md with one real sentence describing what Forge does, merge it back. This is the exact workflow every future lesson will use — practise it on a real change, not a throwaway one.
- Update state files, commit, push
