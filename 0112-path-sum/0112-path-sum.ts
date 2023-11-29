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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const currentPath: number[] = [];
    
    const dfs = (node: TreeNode | null, currentSum: number) => {
        if(!node) return;
        
        currentSum += node.val;
        
        // lear 노드에서 합을 확인
        if(!node.left && !node.right) {
            return currentSum === targetSum
        }
        
        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    }
    
    return dfs(root, 0) ? true : false;
};