document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('freelanceForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetIncome = parseFloat(document.getElementById('targetIncome').value);
    const weeklyHours = parseFloat(document.getElementById('billableHours').value);
    const projectHours = parseFloat(document.getElementById('projectHours').value);

    const monthlyHours = weeklyHours * 4;
    const hourlyRate = monthlyHours > 0 ? (targetIncome / monthlyHours) : 0;
    const projectQuote = hourlyRate * projectHours;
    const bufferQuote = projectQuote * 1.15;

    document.getElementById('hourlyRate').innerText = `$${hourlyRate.toFixed(2)}`;
    document.getElementById('projectQuote').innerText = `$${projectQuote.toFixed(2)}`;
    document.getElementById('monthlyHours').innerText = `${monthlyHours} ساعة`;
    document.getElementById('bufferRate').innerText = `$${bufferQuote.toFixed(2)}`;
  });
});
