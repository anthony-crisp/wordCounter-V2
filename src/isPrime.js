module.exports = (n) => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  const m = Math.sqrt(n);
  for (let i = 2; i <= m; i += 1) if (n % i === 0) return false;
  return true;
};
