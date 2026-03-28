# Python Buddy — MkDocs Site

Exam-prep companion for Python (IIT-M Online Degree) — detailed walkthroughs, pattern recognition, and downloadable slides.

## Local development

```bash
pip install mkdocs-material
mkdocs serve          # live-preview at http://127.0.0.1:8000
```

## Deploy to GitHub Pages

Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml` runs `mkdocs gh-deploy` automatically.

Or deploy manually:

```bash
mkdocs gh-deploy
```

## Adding a new problem

1. Create `docs/oppe-YYYY-mmm/setN/sXpY.md` using the template below.
2. Add the page to `nav:` in `mkdocs.yml`.
3. That's it.

### Page template

```markdown
# SXP Y · Problem Title

<div class="pb-downloads">
  <a class="pb-btn pb-btn-slides" href="GITHUB_RAW_LINK" target="_blank">⬇ Download slides</a>
</div>

???+ abstract "⚡ Quick Reference"
    **Core idea:** one sentence.
    ```python
    # minimal solution here
    ```
    **Key rules:** bullet points.

---

## Problem Statement
...

## Solution approaches
=== "Explanatory"
    ...
=== "Pythonic"
    ...

## Key takeaways
<div class="pb-cards"> ... </div>
```

## Project structure

```
python-buddy/
├── mkdocs.yml
├── docs/
│   ├── index.md
│   ├── stylesheets/extra.css
│   ├── javascripts/extra.js
|    docs/
|    ├── oppe1/
|    │   ├── 2024/
|    │   │   ├── jan/
|    │   │   │   ├── set1/
|    │   │   │   ├── set2/
|    │   │   │   └── set3/
|    │   │   ├── may/
|    │   │   │   ├── set1/
|    │   │   │   ├── set2/
|    │   │   │   └── set3/
|    │   │   └── sep/
|    │   │       ├── set1/
|    │   │       ├── set2/
|   │   │       └── set3/
|    │   └── 2025/
|   │       ├── jan/
    │       │   ├── set1/
    │       │   ├── set2/
    │       │   └── set3/
    │       ├── may/
    │       │   ├── set1/
    │       │   ├── set2/
    │       │   └── set3/
    │       └── sep/
    │           ├── set1/
    │           ├── set2/
    │           └── set3/
    └── oppe2/
       └── (same structure when ready)
└── .github/workflows/deploy.yml
```

python-buddy/
├── mkdocs.yml
├── docs/
│   ├── index.md
│   ├── stylesheets/extra.css
│   ├── javascripts/extra.js
│   ├── oppe-2024-sep/
│   │   ├── index.md
│   │   ├── set1/index.md
│   │   ├── set2/index.md
│   │   └── set3/
│   │       ├── index.md
│   │       ├── s1p2.md   ← Date Format Conversion
│   │       ├── s1p3.md   ← Increment Dict with Limit
│   │       ├── s2p1.md   ← Last Uppercase Word
│   │       ├── s2p2.md   ← Swap & Reverse Lines
│   │       └── s3p2.md   ← Centered Triangle
│   └── oppe-2025-jan/
│       ├── index.md
│       ├── set1/index.md
│       ├── set2/index.md
│       └── set3/index.md
└── .github/workflows/deploy.yml