	function fibonacci(num) {
        if (num === 1) {
        return 0;
    } 
		else if (num === 2) {
        return 1;
    } 
		var num1=0;
		var num2=1;
		for(let i =3;i<=n;i++)
			{
				let result=num1+num2;
				num1=num2;
				num2=result;
			}
		return result;
	}
module.exports = fibonacci;