function fibonacci(num) {
// your code here
	if(num==0)
		return;
	return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
