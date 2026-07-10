export function validateSettings(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Email must be a valid address.';
  }

  if (!values.notifications) {
    errors.notifications = 'Please choose a notification preference.';
  }

  return errors;
}

export function formatSummary(values) {
  return `Settings saved for ${values.name} (${values.email}) with updates ${values.notifications}.`;
}
