var a=0;
var b=1;
if(num==1) return a;
	
	if(num==2) return b ;
	
 //to store the sum

 //iterate till the given num
 for(let i = 3; i <= num; i++){
    //sum of last two numbers
   let c = a + b; 
   
    //assign the last value to first     
    a = b; 

    //assign the sum to the last
    b = c; 
 }
 
 //if the num is 0 then return a else return b;
 return b;
}

module.exports = fibonacci;