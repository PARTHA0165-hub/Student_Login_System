const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const course = document.getElementById('course').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const newRow = document.createElement('tr');
  newRow.classList.add('animate-fade-in-up');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(newRow);
  form.reset();
});

tableBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.closest('tr');
    row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    setTimeout(() => row.remove(), 400);
  }
});
