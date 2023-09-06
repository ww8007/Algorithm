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
        const indices = map.get(num - k) || [];
        // 현재 인덱스 이전의 인덱스만 카운트
        ans += indices.filter(i => i < idx).length; 
    })

    return ans;
};
