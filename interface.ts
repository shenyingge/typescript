interface Dog {
    name: string;
    color: string;
    //可写可不写
    isRegister?: boolean
}


//接口定义的属性是不可添加减少的
let dog: Dog = {
    name: "小花",
    color: "斑点",
    isRegister: true
}

//任意属性
interface Person {
    name: string;
    color: string;
    [propName: string]: any
}

let person: Person = {
    name: "张三",
    color: "白色",
    hello: "nihao"
}