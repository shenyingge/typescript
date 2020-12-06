function sum(x, y) {
    return x + y;
}

let sum1 = function (x, y) {
    return x + y;
}

let sum2 = (x, y) => {
    return x + y;
}

function sum3(x: number, y: number): number {
    return x + y
}

sum3(1, 3)

//限制数量、类型
//sum3(1, "3")

let sum4 = (x: number, y: number): number => {
    return x + y;
}