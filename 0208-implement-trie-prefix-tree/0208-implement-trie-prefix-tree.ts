class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();        
    }

    insert(word: string): void {
        let node = this.root;
        
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }

        node.isEnd = true;
    }

    search(word: string): boolean {
        let node = this.searchNode(word);
        return node !== null && node.isEnd;
    }

    startsWith(prefix: string): boolean {
        return this.searchNode(prefix) !== null;
    }

    private searchNode(word: string):TrieNode | null {
        let node = this.root;
        
        for (const char of word) {
            if (node.children.has(char)) node = node.children.get(char);
            else return null;
        }
        
        return node;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */