import { assert, expect, test } from 'vitest';

test('xyz', () => {
  const body = document.querySelector('body');
  const o = body.appendChild(new HTMLDivElement());
  o.textContent = 'XYZ';
  console.log(o.textContent);
});
