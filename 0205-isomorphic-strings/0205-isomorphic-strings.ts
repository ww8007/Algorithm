function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const fmap = new Map();
    const smap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (fmap.has(s[i]) && fmap.get(s[i]) !== t[i]) return false;
        if (smap.has(t[i]) && smap.get(t[i]) !== s[i]) return false;
        fmap.set(s[i], t[i]);
        smap.set(t[i], s[i]);
    }
    return true;
};