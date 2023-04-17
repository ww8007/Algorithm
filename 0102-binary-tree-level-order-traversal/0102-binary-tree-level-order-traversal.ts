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

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    const ans:number[][] = [];
    
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const len = queue.length;
        const row = [];
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            row.push(cur.val);
        }
        ans.push(row);
    }
    
    return ans;
};