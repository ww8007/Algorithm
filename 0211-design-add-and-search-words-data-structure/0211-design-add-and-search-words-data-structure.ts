class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
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
        return this.searchInNode(word, this.root);
    }

    private searchInNode(word: string, node: TrieNode): boolean {
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (char === '.') {
                // 와일드카드 문자 처리
                for (const child of node.children.values()) {
                    if (this.searchInNode(word.substring(i + 1), child)) {
                        return true;
                    }
                }
                return false;
            } else {
                // 일반 문자 처리
                if (!node.children.has(char)) {
                    return false;
                }
                node = node.children.get(char)!;
            }
        }
        return node.isEnd;
    }
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */