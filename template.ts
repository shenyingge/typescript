// function createArray(length: number, value: any): Array<any>{
//     let result = [];

//     return result;
// }

//泛型
function createArray<T>(length: number, value: T): Array<T>{
    let result:T[] = [];
    return result;
}