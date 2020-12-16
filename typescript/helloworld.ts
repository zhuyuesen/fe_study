
enum Direction {
    North,
    South,
    East,
    West,
}

let dir:Direction = Direction.North

// 可选 | 只读属性
// 只读属性用于限制只能在对象刚刚创建的时候修改其值。
// 此外 TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，
//只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
interface Person {
    readonly name: string;
    age?: number;
}


class Person {
    #name: string;

    constructor(name: string){
        this.#name = name;
    }

    greet(){
        console.log(`hello, my name is ${this.#name}`)
    }
}

let smlinker = new Person('sml');
console.log('smlinker.#name')