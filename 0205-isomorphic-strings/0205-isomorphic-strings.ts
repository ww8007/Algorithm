function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) return false;
    if (!map.has(s[i]) && [...map.values()].includes(t[i])) return false;
    map.set(s[i], t[i]);
  }
  return true;
}
