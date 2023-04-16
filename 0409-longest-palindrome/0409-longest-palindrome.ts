function longestPalindrome(s: string): number {
	let ans = 0;
	const map = new Map();
	for (const word of s) {
		map.get(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
	}

	[...map].forEach(([_, value]) =>
		value % 2 === 0 ? (ans += value) : (ans += value - 1)
	);

	return [...map].find(([_, value]) => value % 2 === 1) ? ans + 1 : ans;
}
