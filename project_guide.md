# Python Buddy - Project Guide

**Live site:** https://nirban-a.github.io/python-oppe-solutions/
**GitHub repo:** https://github.com/Nirban-A/python-oppe-solutions
**Project:** MkDocs Material site with full solutions for Python OPPE exams (CS1002/CS2102, IIT-M BS Degree)

---

## 1. Project Setup

### Tech Stack
- **MkDocs Material** theme
- **GitHub Actions** auto-deploy on push to `main` (`mkdocs gh-deploy`)
- Custom CSS: `docs/stylesheets/extra.css`
- Custom JS: `docs/javascripts/extra.js`

### Local dev
```bash
pip install mkdocs-material
mkdocs serve          # preview at http://127.0.0.1:8000
mkdocs build --clean  # build static site
```

### Deploy
```bash
git add . && git commit -m "message" && git push
# GitHub Actions auto-deploys. Or manually:
mkdocs gh-deploy
```

---

## 2. File Naming Convention

```
docs/oppe1/YYYY/mmm/setN/YYYY_mmm_N_sXqY.md

YYYY  = year        e.g. 2025
mmm   = month       e.g. jan, may, sep
N     = set number  e.g. 1, 2, 3
sX    = section     e.g. s1, s2, s3
qY    = question    e.g. q1, q2

Example: 2025_may_3_s2q1.md
```

### nav entry format (in mkdocs.yml)
```yaml
- S2Q1 · Problem Title: oppe1/2025/may/set3/2025_may_3_s2q1.md
```

---

## 3. Solution Page Template

Every solution page follows this exact structure:

````markdown
# SXQ Y · Problem Title

<div class="pb-downloads">
  <a class="pb-btn pb-btn-repo" href="https://github.com/Nirban-A/python-oppe-solutions/tree/main/FOLDER" target="_blank">
    📁 GitHub
  </a>
</div>

???+ abstract "⚡ Quick Reference"
    **Function:** `function_name(args) -> return_type`

    **Core idea:** one sentence.

    ```python
    # minimal solution here
    ```

    **Key rules:**
    - rule 1
    - rule 2

---

## Problem Statement

!!! note "Problem"
    Problem description here.

**Examples:**

<div class="pb-io">
<div class="pb-io-block input">
<span class="pb-io-label">Input</span>
<pre><code>example input</code></pre>
</div>
<div class="pb-io-block output">
<span class="pb-io-label">Output</span>
<pre><code>example output</code></pre>
</div>
</div>

---

## Understanding the problem

Explanation, tracing table, insight blocks.

!!! insight "Insight title"
    Explanation of the key insight.

---

## Solution approaches

=== "Explanatory"

    ```python
    # verbose, beginner-friendly solution with comments
    ```

    Description of approach.

=== "Pythonic"

    ```python
    # clean, idiomatic one-liner or comprehension
    ```

    Description.

=== "Using lambda"

    ```python
    # functional approach using lambda/map/filter
    ```

    Description.

---

## Key takeaways

<div class="pb-cards">

<div class="pb-card">
<div class="pb-card-num">01</div>
<h4>Concept title</h4>
<p>Explanation with <code>inline code</code>.</p>
</div>

<div class="pb-card">
<div class="pb-card-num">02</div>
<h4>Concept title</h4>
<p>Explanation.</p>
</div>

<div class="pb-card">
<div class="pb-card-num">03</div>
<h4>Concept title</h4>
<p>Explanation.</p>
</div>

</div>
````

**Notes:**
- Always include 3 key takeaway cards
- Solution tabs: use at least Explanatory + Pythonic; add lambda tab where applicable
- `!!! insight "title"` for important insights inside section bodies
- `!!! note "Problem"` for the problem statement block
- `!!! warning "title"` if there are known errors in the original template/docstring

---

## 4. Set Index Page Template (`setN/index.md`)

```markdown
# YYYY Mon OPPE 1 - Set N

<div class="pb-set-grid">

<a class="pb-set-card" href="YYYY_mmm_N_s1q1/">
<div class="pb-set-card-label">Section 1 · Question 1</div>
<h3>Problem Title</h3>
<p>One line description. Covers <code>key_concept</code>.</p>
<span class="pb-badge pb-badge-done">Done ✓</span>
</a>

<a class="pb-set-card" href="YYYY_mmm_N_s1q2/">
<div class="pb-set-card-label">Section 1 · Question 2</div>
<h3>Problem Title</h3>
<p>Description.</p>
<span class="pb-badge pb-badge-soon">Coming soon</span>
</a>

</div>

<div class="pb-downloads">
  <a class="pb-btn pb-btn-repo" href="https://github.com/Nirban-A/python-oppe-solutions/tree/main/FOLDER" target="_blank">
    📁 All slides for this set (GitHub)
  </a>
</div>
```

**Badge classes:**
- `pb-badge pb-badge-done` - green "Done ✓"
- `pb-badge pb-badge-soon` - grey "Coming soon"

---

## 5. CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `pb-downloads` | Container for download buttons |
| `pb-btn pb-btn-repo` | GitHub folder link button |
| `pb-btn pb-btn-slides` | Slides download button |
| `pb-io` | Input/output block wrapper |
| `pb-io-block input` | Input side of I/O block |
| `pb-io-block output` | Output side of I/O block |
| `pb-io-label` | "Input" / "Output" label span |
| `pb-cards` | Container for key takeaway cards |
| `pb-card` | Individual takeaway card |
| `pb-card-num` | Number badge (01, 02, 03) inside card |
| `pb-set-grid` | Grid of set cards on index pages |
| `pb-set-card` | Individual set/question card |
| `pb-set-card-label` | Label above card title |
| `pb-badge pb-badge-done` | Green completion badge |
| `pb-badge pb-badge-soon` | Grey "coming soon" badge |

---

## 6. Admonition Types Used

```markdown
!!! note "Problem"           - problem statement
!!! insight "Insight title"  - key insight callout (custom type)
!!! warning "Title"          - known errors or caveats
???+ abstract "⚡ Quick Reference"  - collapsible quick reference (open by default)
```

---

## 7. Checklist When Adding a New Question

1. Create `docs/oppe1/YYYY/mmm/setN/YYYY_mmm_N_sXqY.md` using the template above
2. Add the page to `nav:` in `mkdocs.yml`
3. Update the parent `setN/index.md` - change `pb-badge-soon` to `pb-badge-done` for that question
4. Update `docs/status.md` summary table
5. Run `mkdocs build --clean` to verify no errors
6. Commit and push

---

## 8. mkdocs.yml Structure (nav skeleton)

```yaml
nav:
  - Home: index.md
  - Python 101: python-101/index.md
  - Status: status.md
  - OPPE 1:
    - oppe1/index.md
    - 2024:
      - oppe1/2024/index.md
      - September:
        - oppe1/2024/sep/index.md
        - Set 1:
          - oppe1/2024/sep/set1/index.md
          - S1Q1 · Title: oppe1/2024/sep/set1/2024_sep_1_s1q1.md
          # ...
    - 2025:
      - oppe1/2025/index.md
      - January:
        - oppe1/2025/jan/index.md
        - Set 1:
          - oppe1/2025/jan/set1/index.md
          - S1Q1 · Title: oppe1/2025/jan/set1/2025_jan_1_s1q1.md
          # ...
      - May:
        - oppe1/2025/may/index.md
        - Set 1: ...
        - Set 3: ...
      - September: ...
    - 2026:
      # same pattern
  - OPPE 2:
    - oppe2/index.md
    # same structure
  - Feedback: feedback.md
```

---

## 9. Python 101 Hub Page

**Location:** `docs/python-101/index.md`
**Uses:** `pb-set-grid` / `pb-set-card` / `pb-set-card-label` CSS classes

Each topic section has:
- Section heading with emoji
- Topic keywords as subtitle
- Grid of cards with Colab badges

**Card template:**
```html
<a class="pb-set-card" href="COLAB_URL" target="_blank" rel="noopener">
<div class="pb-set-card-label">Tutorial / Practice Questions / Solutions</div>
<h3>Notebook Title</h3>
<p>One line description.</p>
<img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open in Colab" style="margin-top:0.5rem;">
</a>
```

**Sections in order:** Basics, Lists, Dictionaries, Pattern Printing, Lambda Functions, File Handling

---

## 10. Duplicate / Repeat Questions

When a question is identical to one already solved in another set, create a short stub page:

```markdown
# SXQ Y · Problem Title

!!! note "Same problem as YYYY Mon Set N - SXQ Y"
    This question is identical to the one in [link text](../../../path/to/original.md).

    👉 [Go to the full solution](../../../path/to/original.md)

---

## Quick answer

```python
# minimal solution
```
```

---

## 11. I/O Type Questions

For questions marked "Full I/O" (no function definition, raw `input()`/`print()`), the Quick Reference block uses:

```markdown
???+ abstract "⚡ Quick Reference"
    **Type:** Full I/O problem

    **Core idea:** one sentence.

    ```python
    n = int(input())
    # minimal solution
    ```

    **Key rules:**
    - rule 1
```

The solution tabs still follow the same Explanatory / Pythonic / lambda structure.

---

## 12. Completion Status

### OPPE 1

| Year | Session | Sets | Status |
|------|---------|------|--------|
| 2024 | September | Set 3 | ✅ Complete |
| 2025 | January | Sets 1, 2, 3 | ✅ Complete |
| 2025 | May | Sets 1, 3 | ✅ Complete |
| 2025 | May | Set 2, 4, 5 | 🔜 Pending |
| 2024 | Sep/Jan/May | Sets 1, 2 | 🔜 Pending |
| 2026 | January | All sets | 🔜 Pending |

### OPPE 2

All sets pending. Same folder structure: `docs/oppe2/YYYY/mmm/setN/`.

---

## 13. Common Gotchas

- **File already exists error:** delete and recreate rather than trying to edit in-place with bash heredoc
- **`!!! insight` type:** this is a custom admonition registered in `extra.css`. Don't use standard Material types for it
- **Tab indentation in `===` tabs:** content inside tabs must be indented with 4 spaces
- **`???+` vs `???`:** `???+` opens the admonition by default; `???` starts collapsed
- **`pb-badge` inside `pb-set-card`:** badges go after the `<p>` tag, inside the `<a>` tag
- **GitHub folder link format:** `https://github.com/Nirban-A/python-oppe-solutions/tree/main/FOLDER_NAME`
- **Bullet points under `???+` or `!!!`:** must be indented 4 spaces, not 2
- **`mkdocs.yml` nav:** every file referenced in nav must exist, or build fails

---

## 14. Quick Reference: Starting a New Set

When starting solutions for e.g. **2026 Jan Set 2**:

1. Create folder structure:
   ```
   docs/oppe1/2026/jan/set2/
   ```

2. Create `index.md` for the set using the set index template (section 4 above)

3. Add to `mkdocs.yml` under `2026 > January`:
   ```yaml
   - Set 2:
     - oppe1/2026/jan/set2/index.md
     - S1Q1 · Title: oppe1/2026/jan/set2/2026_jan_2_s1q1.md
   ```

4. Create each solution page (`2026_jan_2_s1q1.md`, etc.) using the template in section 3

5. After each page: update `set2/index.md` badge, update `status.md`, build to verify

6. Push when the set is complete
