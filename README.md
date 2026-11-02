const elemLanguage = document.getElementById('language');
const storageLang = 'uip-saathi-language';
const storageChecklist = 'uip-saathi-checklist';

function setTextLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-gu][data-en]').forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  if (elemLanguage) elemLanguage.value = lang;
  localStorage.setItem(storageLang, lang);
}

function loadChecklist() {
  const inputs = [...document.querySelectorAll('.check-item input[type="checkbox"]')];
  const saved = JSON.parse(localStorage.getItem(storageChecklist) || '[]');
  inputs.forEach((input, idx) => {
    input.checked = Boolean(saved[idx]);
  });
}

function persistChecklist() {
  const checked = [...document.querySelectorAll('.check-item input[type="checkbox"]')].map((input) => input.checked);
  localStorage.setItem(storageChecklist, JSON.stringify(checked));
}

const savedLang = localStorage.getItem(storageLang) || 'gu';
setTextLanguage(savedLang);
if (elemLanguage) {
  elemLanguage.addEventListener('change', (event) => setTextLanguage(event.target.value));
}

loadChecklist();
[...document.querySelectorAll('.check-item input[type="checkbox"]')].forEach((input) => {
  input.addEventListener('change', persistChecklist);
});

document.getElementById('resetChecklist')?.addEventListener('click', () => {
  [...document.querySelectorAll('.check-item input[type="checkbox"]')].forEach((input) => {
    input.checked = false;
  });
  persistChecklist();
});

document.querySelectorAll('.quiz-option').forEach((button) => {
  button.addEventListener('click', () => {
    const feedback = document.getElementById('quizFeedback');
    const lang = localStorage.getItem(storageLang) || 'gu';
    document.querySelectorAll('.quiz-option').forEach((opt) => opt.classList.remove('correct', 'wrong'));

    if (button.dataset.answer === 'correct') {
      button.classList.add('correct');
      feedback.textContent = lang === 'gu' ? 'સાચો જવાબ! આ જ ક્રમ યાદ રાખવા માટે સરળ છે.' : 'Correct! This is the simplest order to remember.';
      feedback.style.color = '#0f6a54';
    } else {
      button.classList.add('wrong');
      feedback.textContent = lang === 'gu' ? 'ફરીથી વિચારજો — પહેલાં, દરમિયાન, પછી.' : 'Think again — before, during, after.';
      feedback.style.color = '#ac4d3a';
    }
  });
});
