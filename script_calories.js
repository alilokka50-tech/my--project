document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('caloriesForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // معادلة Mifflin-St Jeor لحساب السعرات الأساسية (BMR)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += (gender === 'male') ? 5 : -161;

    const tdee = Math.round(bmr * activity);
    const water = (weight * 0.035).toFixed(1);

    const protein = Math.round(weight * 2);
    const fats = Math.round((tdee * 0.25) / 9);
    const carbs = Math.max(0, Math.round((tdee - ((protein * 4) + (fats * 9))) / 4));

    document.getElementById('tdeeValue').innerHTML = `${tdee.toLocaleString()} <span>سعرة</span>`;
    document.getElementById('waterValue').innerHTML = `${water} <span>لتر</span>`;
    document.getElementById('proteinVal').innerText = `${protein} جرام`;
    document.getElementById('carbsVal').innerText = `${carbs} جرام`;
    document.getElementById('fatsVal').innerText = `${fats} جرام`;
  });
});
