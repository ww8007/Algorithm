/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if (!root) return null;

    const queue: (Node | null)[] = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let prev: Node | null = null;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
						
            if (node) {
                if (prev) prev.next = node;
                
                prev = node;

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        if (prev) prev.next = null;  // 마지막 노드의 next를 null로 설정
    }

    return root;
}