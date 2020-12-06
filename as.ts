interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish): boolean {
    //联合类型可以断言成其中一个
    //父类可以断言为子类
    //任何类型可以断言为any
    //any可以断言为任何类型
    if ((animal as Fish).swim) {
        return true;
    } else {
        return false;
    }
}

let cat: Cat = {
    name: "a",
    run: function name() {
        
    }
}