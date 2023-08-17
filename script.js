	function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 2; i <= num; i++) {
        let temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }

    return fibCurr;
    }