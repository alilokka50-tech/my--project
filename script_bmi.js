document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmiForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const roundedBmi = bmi.toFixed(1);

    document.getElementById('bmiValue').innerText = roundedBmi;
    const statusEl = document.getElementById('bmiStatusText');
    const adviceEl = document.getElementById('bmiAdvice');

    statusEl.className = 'bmi-badge';
    if (bmi < 18.5) {
      statusEl.classList.add('status-underweight');
      statusEl.innerText = 'نقص في الوزن (Underweight)';
      adviceEl.innerText = 'تحتاج إلى زيادة السعرات الحرارية وتطبيق نظام تضخيم غذائي صحي مع تمارين المقاومة لزيادة الكتلة العضلية.';
    } else if (bmi >= 18.5 && bmi < 25) {
      statusEl.classList.add('status-normal');
      statusEl.innerText = 'وزن مثالي وطبيعي (Normal)';
      adviceEl.innerText = 'ممتاز! وزنك مثالي بالنسبة لطولك. حافظ على نشاطك البدني وتغذيتك السليمة للحفاظ على هذا التوازن الرائع.';
    } else if (bmi >= 25 && bmi < 30) {
      statusEl.classList.add('status-overweight');
      statusEl.innerText = 'وزن زائد (Overweight)';
      adviceEl.innerText = 'إذا كنت رياضياً أو لاعب جيم، فقد يكون هذا بسبب العضلات. أما إذا كانت دهوناً، فإيفاء عجز بسيط في السعرات (Deficit) سيحل المشكلة.';
    } else {
      statusEl.classList.add('status-obese');
      statusEl.innerText = 'سمنة (Obese)';
      adviceEl.innerText = 'يُفضل تنظيم السعرات الحرارية اليومية وتقليل الكربوهيدرات البسيطة والسكريات مع ممارسة الكارديو بانتظام.';
    }
  });
});
