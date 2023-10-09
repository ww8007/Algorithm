function numDecodings(s: string): number {
    const len = s.length;
    const dp = Array.from({ length : len + 1 }, () => 0);
    dp[len] = 1;
    
    // 오른쪽에서 왼쪽으로 진행
    for (let i = len - 1; i >= 0; i--) {
        // 0 으로 시작하는 숫자는 유효하지 않으므로 스킵
        if (s[i] === '0') continue;

        // 1자리 숫자 디코딩
        dp[i] += dp[i + 1];
        
        // 2자리 숫자 디코딩 10과 26 사이
        if (i < len - 1 && (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))) {
            dp[i] += dp[i + 2];
        }
    }
    
    return dp[0];
}
