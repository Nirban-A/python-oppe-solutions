# 2025 May OPPE 2 — Set 1

<div class="pb-set-grid">

<a class="pb-set-card" href="2025_may_1_s1q1/">
<div class="pb-set-card-label">Section 1 · Question 1</div>
<h3>Compute Electricity Bill</h3>
<p>Three-slab billing — flat rate per unit with optional fixed charges. Covers if-elif-else ordering, flat vs tiered billing distinction, and a noted problem statement error for 210 units.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s1q2/">
<div class="pb-set-card-label">Section 1 · Question 2</div>
<h3>Is Reverse Combined Palindrome</h3>
<p>Reverse the first string, concatenate with the second, check if palindrome. Covers <code>s1[::-1]</code>, string concatenation, and <code>combined == combined[::-1]</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s1q3/">
<div class="pb-set-card-label">Section 1 · Question 3</div>
<h3>Pangram Check</h3>
<p>Return True if a string contains all 26 letters. Covers <code>set.issubset()</code>, the <code><=</code> subset operator, <code>all()</code> short-circuiting, and <code>string.ascii_lowercase</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s2q1/">
<div class="pb-set-card-label">Section 2 · Question 1</div>
<h3>Check for Arithmetic Progression</h3>
<p>Verify all consecutive differences are equal. Covers <code>diff = seq[1] - seq[0]</code>, <code>all()</code> with range, <code>zip(seq, seq[1:])</code>, and the <code>len(set(diffs)) == 1</code> trick.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s2q2/">
<div class="pb-set-card-label">Section 2 · Question 2</div>
<h3>Rotate Matrix Clockwise 90°</h3>
<p>Rotate an m×n matrix to n×m by turning columns into rows (bottom to top). Full I/O — covers the <code>zip(*matrix[::-1])</code> trick and the column-index formula <code>matrix[m-1-i][j]</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s3q1/">
<div class="pb-set-card-label">Section 3 · Question 1</div>
<h3>Book Data Analysis</h3>
<p>Five functions on book tuples — short/medium sets, ISBN lookup, language counts, genre+language total. Covers set comprehensions, <code>next(..., None)</code>, <code>dict.get(k, 0)</code>, and <code>Counter</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2025_may_1_s3q2/">
<div class="pb-set-card-label">Section 3 · Question 2</div>
<h3>File Content Zigzag Shift</h3>
<p>Print each character preceded by spaces following a zigzag pattern of width z. File I/O → stdout — covers cycle length <code>2*(z-1)</code>, ascending/descending position formula, and <code>itertools.cycle</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

</div>

<div class="pb-downloads">
  <a class="pb-btn pb-btn-repo" href="https://github.com/Nirban-A/python-oppe-solutions/tree/main/2025_May_Oppe2_Set1" target="_blank">
    📁 All slides for this set (GitHub)
  </a>
</div>
