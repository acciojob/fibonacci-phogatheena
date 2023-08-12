var climbStairs = function fibonacci(num) {
// your code here
	    if (n ==0) 
			console.log("0");
	    else if(n<=2)
			console.log("1");
	else
		{
			let a = 1, b = 1, fib;
    for(let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
   console.log(fib);
		}
}

module.exports = fibonacci;
