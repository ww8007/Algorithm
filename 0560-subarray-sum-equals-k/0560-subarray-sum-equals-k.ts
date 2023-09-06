function subarraySum(nums: number[], k: number): number {
    const map = new Map();
    
    let sum = 0;
    let ans = 0;
    
    map.set(0, 1);

    for (let num of nums) {
        sum += num;
        // 현재 누적 합에서 k를 뺀 값이 map에 몇 번 등장했는지 확인
        ans += map.get(sum - k) || 0;
        // 현재 누적 합을 map에 업데이트
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return ans;
};
