import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ExampleTest } from './example';

test(`[ExampleTest Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={true} />);
  expect(screen.outerHTML).toContain('⭐');
  const div = screen.querySelector('.icon') as HTMLElement;
  expect(div.outerHTML).toContain('⭐');
});

