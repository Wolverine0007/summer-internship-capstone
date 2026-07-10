import { validateSettings, formatSummary } from '../src/settings.js';

const form = document.getElementById('settings-form');
const status = document.getElementById('status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());
  const errors = validateSettings(values);

  if (Object.keys(errors).length > 0) {
    status.textContent = Object.values(errors).join(' ');
    return;
  }

  status.textContent = formatSummary(values);
});
