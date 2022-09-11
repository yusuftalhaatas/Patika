function getSumOfDigits(num) {
    return String(num)
        .split('')
        .reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
}

function oddishOrEvenish(num) {
    var sumOfDigits = getSumOfDigits(num);
    if (sumOfDigits % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
oddishOrEvenish(24);