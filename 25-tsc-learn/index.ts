// interface 接口类型
// 定义传入的必须有name属性，且为字符串类型
interface Named {
    // 属性
    name: string
}

// 只要你的o对象中有name属性，就能输出
// O可以是一个接口类型，这个接口类型要有name属性
const sayName = (o: Named) => {
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

// sayName('..')