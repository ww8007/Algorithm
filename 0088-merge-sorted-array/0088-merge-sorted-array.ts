/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    let i = nums1.length - 1;

    if (p2 < 0) return;
    if (p1 < 0) {
        while (p2 >= 0) {
            [nums1[i], nums2[p2]] = [nums2[p2], nums1[i]];
            p2--;
            i--;
        }
        
        return;
    }
    
    
    
    while (p1 >= 0 && p2 >= 0) {
        const p1Num = nums1[p1];
        const p2Num = nums2[p2];
        
        if (p1Num >= p2Num) {
            [nums1[i], nums1[p1]] = [nums1[p1], nums1[i]];
            p1--;
            i--;
        } else {
            [nums1[i], nums2[p2]] = [nums2[p2], nums1[i]];
            p2--;
            i--;
        }
    }

    while (0 <= p2) {
        [nums1[i], nums2[p2]] = [nums2[p2], nums1[i]];
        p2--;
        i--;
    }
};