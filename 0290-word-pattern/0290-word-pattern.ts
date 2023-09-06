function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const sMap = new Map();

    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) return false;
        } else {
            map.set(pattern[i], words[i]);
        }

        if (sMap.has(words[i])) {
            if (sMap.get(words[i]) !== pattern[i]) return false;
        } else {
            sMap.set(words[i], pattern[i]);
        }
    }
    return true;
};