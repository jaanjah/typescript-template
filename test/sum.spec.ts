import { expect, it } from 'bun:test';

import { sum } from '../src/util/sum';

it('1 + 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3);
});
