const map = new Map();
map.set(0, 1);
map.set(1, 1);

function climbStairs(n: number): number {
    if (n <= 1) return n;
    for (let i = 2; i <= n; i++) {
        map.set(i, map.get(i - 1) + map.get(i - 2));
    }
    
    return map.get(n);
};