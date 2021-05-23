/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router';

let length = window.history.length;
describe('test pushToHistory', () => {
  test('test settings case', () => {
    pushToHistory('settings');
    length += 1;
    expect(window.history.length).toBe(length);
    expect(window.history.state.page).toBe('settings');
  });
  test('test default case', () => {
    pushToHistory('home');
    length += 1;
    expect(window.history.length).toBe(length);
    expect(window.history.state.page).toBeUndefined();
  });
  test('test entry case', () => {
    for(let i = 1; i <= 10; i++){
      pushToHistory('entry', i);
      length += 1;
      expect(window.history.length).toBe(length);
      expect(window.history.state.page).toBe(`entry${i}`);
    } 
  });
});