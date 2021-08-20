function isFibonacci(number: number): number {
    if (number <= 1) {
        return 1;
    } else {
        return isFibonacci(number - 1) + isFibonacci(number - 2)
    }
}

let sum = 0;
let n = 15;
console.log("Day so fibonacci la : ")
for (let i = 0; i < n; i++) {
    console.log(isFibonacci(i))
    sum += isFibonacci(i)
}
console.log("Tong fibonacci la :" + sum)