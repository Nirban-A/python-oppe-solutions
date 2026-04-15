# Python OPPE Solutions

> Previous year OPPE solutions for Python (CS1002/CS2102) - IIT-Madras BS Degree Programme

Step-by-step solutions, multiple approaches, and downloadable slides for Python OPPE previous year questions.

🌐 **Live site:** [nirban-a.github.io/python-oppe-solutions](https://nirban-a.github.io/python-oppe-solutions)

---

## Local development

```bash
pip install mkdocs-material
mkdocs serve          # live-preview at http://127.0.0.1:8000
```

## Deploy to GitHub Pages

Push to `main` - the GitHub Actions workflow in `.github/workflows/deploy.yml` runs `mkdocs gh-deploy` automatically.

Or deploy manually:

```bash
mkdocs gh-deploy
```

---

## Adding a new problem

1. Create `docs/oppe1/YYYY/mmm/setN/YYYY_mmm_N_sXqY.md` using the template below.
2. Add the page to `nav:` in `mkdocs.yml`.
3. Update the parent `index.md` badge from `pb-badge-soon` to `pb-badge-done`.
4. Update `docs/status.md` summary table.

### File naming convention

```
YYYY_mmm_N_sXqY.md

YYYY  → year         e.g. 2025
mmm   → month        e.g. jan, may, sep
N     → set number   e.g. 1, 2, 3
sX    → section      e.g. s1, s2, s3
qY    → question     e.g. q1, q2

Example: 2025_jan_3_s2q1.md
```

### Page template

````markdown
# SXQ Y · Problem Title

<div class="pb-downloads">
  <a class="pb-btn pb-btn-slides" href="GITHUB_RAW_LINK" target="_blank">⬇ Download slides</a>
  <a class="pb-btn pb-btn-repo" href="GITHUB_FOLDER_LINK" target="_blank">📁 GitHub</a>
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

---

## Solution approaches

=== "Explanatory"
    ```python
    # verbose, beginner-friendly solution
    ```

=== "Pythonic"
    ```python
    # clean, idiomatic solution
    ```

=== "Using lambda"
    ```python
    # functional approach where applicable
    ```

---

## Key takeaways

<div class="pb-cards">
<div class="pb-card">
<div class="pb-card-num">01</div>
<h4>Concept title</h4>
<p>Explanation.</p>
</div>
</div>
````

---

## Project structure

```
python-oppe-solutions/
├── mkdocs.yml
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
└── docs/
    ├── index.md
    ├── status.md
    ├── feedback.md
    ├── stylesheets/
    │   └── extra.css
    ├── javascripts/
    │   └── extra.js
    └── oppe1/
        ├── index.md
        ├── 2024/
        │   ├── index.md
        │   └── sep/
        │       ├── index.md
        │       ├── set1/
        │       ├── set2/
        │       └── set3/
        ├── 2025/
        │   ├── index.md
        │   ├── jan/
        │   │   ├── index.md
        │   │   ├── set1/
        │   │   ├── set2/
        │   │   └── set3/
        │   ├── may/
        │   │   ├── index.md
        │   │   ├── set1/
        │   │   ├── set2/
        │       └── set3/
        └── 2026/
            ├── index.md
            ├── jan/
            │   ├── index.md
            │   ├── set1/    
            │   ├── set2/    
            │   └── set3/    

```

---

## Completion status

| Exam | Session | Set | Status |
|------|---------|-----|--------|
| OPPE 1 | 2024 Sep | All | ✅ Complete |
| OPPE 1 | 2025 Jan | All | ✅ Complete |
| OPPE 1 | 2025 May | All | ✅ Complete |
| OPPE 1 | 2026 Jan | 4 Sets |  Complete |
| OPPE 2 | All | All | 🔜 Coming soon |
