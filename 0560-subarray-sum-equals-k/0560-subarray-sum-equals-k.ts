function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    let sumArr = nums.map((num) => {
        sum += num;
        return sum;
    })

    sumArr = [0, ...sumArr];

    const map = new Map();

    sumArr.forEach((num, idx) => {
        map.get(num) ? map.get(num).push(idx) : map.set(num, [idx]);
    })

    let ans = 0;
    sumArr.forEach((num, idx) => {
        const arr = map.get(num - k) || [];
        ans += arr.filter(i => i < idx).length; 
    })

    return ans;
};
