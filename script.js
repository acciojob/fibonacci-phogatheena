	if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    let fibPrevPrev = 0;
    let fibPrev = 1;

    for (let i = 3; i <= num; i++) {
        let fibCurr = fibPrevPrev + fibPrev;
        fibPrevPrev = fibPrev;
        fibPrev = fibCurr;
    }

    return fibPrev;
    }