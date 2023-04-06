function fib(n: number): number {
    return memoFibo(n);
};

const fibArr = [0, 1];
function memoFibo(n) {
	function fibo(n) {
		if (fibArr[n] !== undefined) return fibArr[n];
		fibArr[n] = fibo(n - 1) + fibo(n - 2);
		return fibArr[n];
	}
	return fibo(n);
}