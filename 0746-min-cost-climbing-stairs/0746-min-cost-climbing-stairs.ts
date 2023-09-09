function minCostClimbingStairs(cost: number[]): number {
	const map = new Map();
	map.set(0, cost[0]);
	map.set(1, cost[1]);

	for (let i = 2; i < cost.length; i++) {
		map.set(i, cost[i] + Math.min(map.get(i - 1), map.get(i - 2)));
	}

	return Math.min(map.get(cost.length - 1), map.get(cost.length - 2));
}
