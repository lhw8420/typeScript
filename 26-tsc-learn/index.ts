// interface 接口类型
// 定义传入的必须有name属性，且为字符串类型
// Named可大写可小写
// 传过来的参数必须包含接口定义的属性和方法
interface Named {
    // 属性
    name: string

    // 方法
    // 没有方法体，只是定义了参数和返回值类型
    print(name: string): void;
}

// 只要你的o对象中有name属性，就能输出
// O可以是一个接口类型，这个接口类型要有name属性
const sayName = (o: Named) => {
    // console.log(o.name)
    o.print(o.name);
}

const person = {
    age: 27,
    name: 'Awen',
    print: (name: string) => {
        console.log(name)
    }
}
sayName(person)


class Person {
    name: string

    print(name: string): void {
        console.log(name)
    }
}

let aPerson = new Person()
aPerson.name = 'lin Awen'
sayName(aPerson)

