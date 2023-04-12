function subarraysDivByK(nums: number[], k: number): number {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let ans = 0;

  for (const num of nums) {
    sum = (sum + num) % k;
    if (sum < 0) sum += k;
    if (map.has(sum)) {
      ans += map.get(sum);
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return ans;
}