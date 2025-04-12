function goToSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  const selected = document.getElementById(id);
  if (selected) selected.style.display = 'block';
}
