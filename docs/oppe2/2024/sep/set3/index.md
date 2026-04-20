# 2024 Sep OPPE 2 - Set 3

<div class="pb-set-grid">

<a class="pb-set-card" href="2024_sep_3_s1q1/">
<div class="pb-set-card-label">Section 1 · Question 1</div>
<h3>Product of Sum and Abs Diff of Digits</h3>
<p>Compute <code>(tens + units) × |tens − units|</code> for a two-digit number. Covers digit extraction with <code>// 10</code> and <code>% 10</code>, and the zero-product edge case.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s1q2/">
<div class="pb-set-card-label">Section 1 · Question 2</div>
<h3>Check Divisibility by Last Two Digits</h3>
<p>Return True if a number is divisible by both its last two digits. Covers <code>(num // 10) % 10</code> for the tens digit, zero guard, and the divisibility test.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s1q3/">
<div class="pb-set-card-label">Section 1 · Question 3</div>
<h3>Swap Last Chars in Dictionary Values</h3>
<p>In-place swap of the last characters of two dictionary values. Covers <code>v[:-1] + new_char</code>, the importance of reading both values before writing, and in-place mutation.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s2q1/">
<div class="pb-set-card-label">Section 2 · Question 1</div>
<h3>Get Words That Come After "the"</h3>
<p>Collect all words immediately following "the" (case-insensitive). Covers <code>word.lower()</code>, index-based iteration with <code>range(len-1)</code>, and the adjacent-pair <code>zip</code> pattern.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s2q2/">
<div class="pb-set-card-label">Section 2 · Question 2</div>
<h3>Ceil Marks to Nearest Tens if Close</h3>
<p>Round up marks to the next ten if the units digit is 8 or 9, printing only updated records. Full I/O - covers <code>marks % 10 in (8, 9)</code> and <code>(marks // 10 + 1) * 10</code>.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s3q1/">
<div class="pb-set-card-label">Section 3 · Question 1</div>
<h3>Cartesian Points Processing</h3>
<p>Three operations on a set of points - sort by distance to y-axis, closest to origin, group by quadrant. Covers <code>math.atan2</code>, tuple keys for multi-criteria sorting, and <code>setdefault</code> grouping.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

<a class="pb-set-card" href="2024_sep_3_s3q2/">
<div class="pb-set-card-label">Section 3 · Question 2</div>
<h3>Fill First n Blanks with 1 to n</h3>
<p>Replace the first <code>n</code> underscores in a multi-line file with sequential numbers. File I/O → stdout - covers persistent counters across lines and multi-digit replacements of single characters.</p>
<span class="pb-badge pb-badge-done">Solved</span>
</a>

</div>

<div class="pb-downloads">
  <a class="pb-btn pb-btn-repo" href="https://github.com/Nirban-A/python-oppe-solutions/tree/main/2024_Sep_Oppe2_Set3" target="_blank">
    📁 All slides for this set (GitHub)
  </a>
</div>
