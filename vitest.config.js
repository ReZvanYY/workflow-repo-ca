import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,          // This makes `describe`, `it`, `expect` available globally
    environment: 'jsdom',   // Optional, if your code interacts with DOM
    include: ['tests/**/*.test.js'], // Make sure it finds your test files
  },
});
