import test from 'node:test';
import assert from 'node:assert/strict';
import { validateSettings, formatSummary } from '../src/settings.js';

test('valid settings pass validation', () => {
  const result = validateSettings({ name: 'Ada', email: 'ada@example.com', notifications: 'yes' });
  assert.deepEqual(result, {});
});

test('invalid email is rejected', () => {
  const result = validateSettings({ name: 'Ada', email: 'not-an-email', notifications: 'yes' });
  assert.match(result.email, /valid address/i);
});

test('summary includes the selected notification preference', () => {
  const text = formatSummary({ name: 'Ada', email: 'ada@example.com', notifications: 'no' });
  assert.match(text, /updates no/i);
});
