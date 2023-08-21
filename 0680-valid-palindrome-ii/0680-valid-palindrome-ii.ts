function validPalindrome(s: string): boolean {
    return isPalindrome(s, 0, s.length - 1, false);
}

function isPalindrome(s: string, lp: number, rp: number, skipped: boolean): boolean {
    while (lp <= rp) {
        if (s[lp] !== s[rp]) {
            if (skipped) {
                return false;
            }
            return isPalindrome(s, lp + 1, rp, true) || isPalindrome(s, lp, rp - 1, true);
        }
        lp++;
        rp--;
    }
    return true;
}
