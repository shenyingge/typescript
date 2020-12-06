//类型别名
type myString = string;

let username: myString = "哈哈哈"

type myStringNumber = string | number;
let user1: myStringNumber = "111"
user1 = 123;

//约束字符串的取值
type Eventname = "click" | "scroll" | "mousemove"

let eventStr: Eventname = "click"