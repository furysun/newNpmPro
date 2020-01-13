export function recursion(a) {
    if (a >= 0) {
        console.log(a);
        a--;
        recursion(a);
    } else {
        console.log('exit');
    }
}
//
// export function loop(a) {
//     for (let i = a; i > 0; i--) {
//         console.log("mif " + i);
//     }
// }

export function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];

    } else {
        let numbers = rangeOfNumbers(startNum + 1, endNum);
        numbers.push(startNum);
        return numbers;    }
};


