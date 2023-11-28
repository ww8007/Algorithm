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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const paths: number[][] = [];
    const currentPath: number[] = [];
    
    const dfs = (node: TreeNode | null, currentSum: number) => {
        if(!node) return;
        
        currentPath.push(node.val);
        
        // lear 노드에서 합을 확인
        if(!node.left && !node.right && currentSum + node.val === targetSum) {
            paths.push([...currentPath]);
        }
        
        dfs(node.left, currentSum + node.val);
        dfs(node.right, currentSum + node.val);
        
        currentPath.pop();
    }
    
    dfs(root, 0);
    return paths;
};