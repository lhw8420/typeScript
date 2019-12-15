// 可选属性lastName?、索引
interface Person {
    firstName: string;
    lastName?: string;

    print?(): void;

    // 索引
    [propName: string]: any;
}

let person = {
    firstName: 'lin Awen',
    lastName: 'Lin',
    age: 28
}

const sayName = (o: Person) => {
    console.log(o.firstName)
}
sayName(person)



class Programmer {
    firstName: string;
}
const programmer = new Programmer()
programmer.firstName = 'Awen';

sayName(programmer)

// 这种方法传参，参数必须和定义的一样，否则会报错
sayName({firstName:'xiaoxiao',lastName:'lin'})
// 报错
// sayName({firstName:'xiaoxiao',lastName:'lin',age:26})
// 类型断言：这样则不报错
sayName({firstName:'xiaoxiaolin',lastName:'lin',age:26} as Person)

// 当类型存在索引时，属性写错或不存在也不会报错
sayName({firstName:'xiaoxiaolin--',last__Name:'lin',age:26})