function decodeString(s: string): string {
    const strStack: string[] = [];
    const countStack: number[] = [];
    
    let num: string = "";
    let str: string = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/\d/)) { 
            num += s[i];
        } else if (s[i] === '[') {
            countStack.push(Number(num));
            strStack.push(str);
            num = "";
            str = "";
        } else if (s[i] === ']') {
            const previousString = strStack.pop();
            const repeatCount = countStack.pop();
            str = (previousString || "") + str.repeat(repeatCount!);
        } else {
            str += s[i];
        }
    }

    return str;
}
