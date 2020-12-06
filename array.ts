//定义数组类型
let arr: number[] = [1, 2, 3, 4, 5]

//添加字符串失败
// arr.push('111')

//泛型写法
let arr1: Array<number> = [1, 3, 4, 5]

//接口定义数组
interface NumberArray {
    //[索引值: number]: 数值
    [index: number]: number
}

let arr2: NumberArray = [1, 2, 3]