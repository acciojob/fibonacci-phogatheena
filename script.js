function fibonacci(num) {
	let prev=0, curr=1;
	if(num==1) return prev;
	if(num==1) return curr;
  
    for (let i = 3; i <= num; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }