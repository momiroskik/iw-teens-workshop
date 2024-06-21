export const generateRandomSecret = (maxString = 36, from = 2, to = 10) =>
  Math.random().toString(maxString).substring(from, to);
