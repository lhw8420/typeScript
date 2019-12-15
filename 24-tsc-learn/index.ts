// interface 接口
// 接口规定了如何设计，就是一些规范，别人设计的接口都是差不多
// USB 接口， 可以用鼠标 U盘，充电器来插入，  那这些U盘、充电器必须设计跟接口符合
 
// duck typing鸭子类型，看起来像鸭子我们就认为他是鸭子
// 只要你的o对象中有name属性，就能输出
// O可以是一个接口类型，这个接口类型要有name属性
const sayName = (o) => {
    console.log(o.name)
}

const person = {
    age: 27,
    name: 'Awen'
}
sayName(person)

const bottle = {
    litres: 1,
    name: '漂流瓶'
}

sayName(bottle)

class Person {
    name: string
}

let thePerson = new Person()
thePerson.name = 'xiaoxiaolin';
sayName(thePerson)

