export function validateSettings(values) {
  const errors = {};

  const trimmedName = values.name?.trim() ?? '';
  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const trimmedEmail = values.email?.trim() ?? '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!['yes', 'no'].includes(values.notifications)) {
    errors.notifications = 'Please choose whether to receive updates.';
  }

  return errors;
}

export function formatSummary(values) {
  const name = values.name?.trim() ?? '';
  const email = values.email?.trim() ?? '';
  const notifications = values.notifications === 'yes' ? 'email updates' : 'no updates';
  return `Settings saved for ${name} (${email}) with ${notifications}.`;
}
