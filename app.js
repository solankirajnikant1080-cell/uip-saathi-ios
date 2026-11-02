const languageSelect = document.getElementById('language');
const checklistInputs = [...document.querySelectorAll('#checklist input[type="checkbox"]')];
const storageKey = 'uip-saathi-checklist-v1';

function setLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-gu][data-en]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageSelect.value = language;
  localStorage.setItem('uip-saathi-language', language);
}

languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
setLanguage(localStorage.getItem('uip-saathi-language') || 'gu');

function saveChecklist() {
  localStorage.setItem(storageKey, JSON.stringify(checklistInputs.map((input) => input.checked)));
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (Array.isArray(saved)) checklistInputs.forEach((input, index) => { input.checked = Boolean(saved[index]); });
} catch (_) {
  localStorage.removeItem(storageKey);
}
checklistInputs.forEach((input) => input.addEventListener('change', saveChecklist));
document.getElementById('reset-checklist').addEventListener('click', () => {
  checklistInputs.forEach((input) => { input.checked = false; });
  saveChecklist();
});

document.querySelectorAll('.quiz-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quiz-option').forEach((option) => option.classList.remove('correct', 'wrong'));
    const correct = button.dataset.answer === 'correct';
    button.classList.add(correct ? 'correct' : 'wrong');
    const language = languageSelect.value;
    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = correct
      ? (language === 'gu' ? 'સાચો જવાબ! આ ક્રમ ચેકલિસ્ટમાં પણ છે.' : 'Correct! You will also find this sequence in the checklist.')
      : (language === 'gu' ? 'ફરી પ્રયાસ કરો — સત્ર પહેલાં, દરમિયાન અને પછી વિચારો.' : 'Try again — think before, during and after the session.');
  });
});
