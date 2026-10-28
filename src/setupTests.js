import '@testing-library/jest-dom/vitest';

// jsdom does not implement media queries; the browser supplies this API.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  }),
});
