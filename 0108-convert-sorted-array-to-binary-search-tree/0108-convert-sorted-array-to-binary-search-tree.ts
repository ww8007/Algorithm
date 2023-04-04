/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    
    const insert = (nums: number[]) =>  {
        if(!nums.length) return null;
        const mid = Math.floor(nums.length / 2);
        const tree = new TreeNode(nums[mid]);    
        
        tree.left = insert(nums.slice(0, mid));
        tree.right = insert(nums.slice(mid + 1));
        
        return tree;
    }
    
    return insert(nums);
};