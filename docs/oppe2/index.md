# OPPE 2

OPPE 2 covers **Weeks 1–8** of the Programming in Python course. It builds on OPPE 1 and additionally tests file handling, dictionaries, sets, higher-order functions, and more complex I/O patterns.

## Exam Structure

<div style="display:flex; justify-content:center;" markdown>
| Section | Questions | Marks each | Total |
|---------|-----------|-----------|-------|
| Section 1 | 3 | 10 | 30 |
| Section 2 | 2 | 15/20 | 30/40 |
| Section 3 | 2 | 20/15 | 40/30 |
| **Total** | **7** | - | **100** |
</div>

## Syllabus (Weeks 1–8)

- **Weeks 1–5** - Everything from OPPE 1 (strings, lists, functions, conditionals, loops)
- **Week 6** - Dictionaries - creation, access, `.get()`, `.items()`, comprehensions
- **Week 7** - Sets, `sorted()`, `lambda`, `map()`, `filter()`
- **Week 8** - File handling - `open()`, `read()`, `readlines()`, `with` statement

---

## Know Your Exam - Section-wise Patterns

!!! insight "Section 1 (10 marks each)"
    Short function-writing problems. Expect boolean checks, string operations, and simple list/dict manipulations. One question often tests a dictionary operation (swap, lookup, or membership).

!!! insight "Section 2 (15 marks each)"
    - **S2P1** - Function-writing, moderately harder. Often involves list filtering with conditions, counting with a dict, or working with None values.
    - **S2P2** - Almost always a **full I/O problem**. Reads multiple lines, processes them (sorting, grouping, counting), and prints the result. Dictionaries and sets are common here.

!!! insight "Section 3 (20 marks each)"
    - **S3P1** - Function-writing, hardest of the set. Frequently involves multiple functions on the same data structure (dicts, lists of dicts, sets of tuples). Expect aggregation, filtering, and sorting together.
    - **S3P2** - Almost always a **file-in, stdout-out problem**. Reads from a file (using the provided `filename` variable) and prints to standard output. Common patterns: character-by-character text transformation, line reordering, sequential replacement.

!!! tip "General strategy"
    File I/O problems (S3P2) follow a fixed template - read the file, process, print. Master the template first. For S3P1, sketch out each sub-function separately before writing code - the functions often depend on each other.

---

## Exam Sets

<div class="pb-set-grid">

<a class="pb-set-card" href="2025/">
<div class="pb-set-card-label">2025</div>
<h3>OPPE 2 - 2025</h3>
<p>January, May session</p>
<span class="pb-badge pb-badge-done">See Solutions</span>
</a>

<a class="pb-set-card" href="2024/">
<div class="pb-set-card-label">2024</div>
<h3>OPPE 2 - 2024</h3>
<p>September session</p>
<span class="pb-badge pb-badge-done">See Solutions</span>
</a>

</div>

---

!!! note "Slide downloads"
    All slide decks are in the [GitHub repository](https://github.com/Nirban-A/python-oppe-solutions).
