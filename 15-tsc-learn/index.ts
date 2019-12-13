// 模板
class Person {
    firstName: string;
    lastName: string;

    greet(){
        console.log('hi')
    }

    otherGreet() {
        this.greet();
        console.log('****')
    }
}

class Programmer extends Person{
    greet(){
        console.log('hello world')
    }
    greetLikeNormalPerson(){
        // 调用父亲的方法,代表父亲 
        super.greet()
    }
}

// let onePerson = new Person();
// onePerson.otherGreet();
// onePerson.firstName = '123';
// onePerson.lastName = '1234';

// console.log(onePerson.firstName)
// console.log(onePerson.lastName)
//tsc写法
let oneProgrammer: Programmer = new Programmer();
oneProgrammer.otherGreet()
// 调用方法时，先找自己本身对象的方法，如果没有，会找父亲的
oneProgrammer.greet()
oneProgrammer.greetLikeNormalPerson()

// 多态
let twoProgrammer: Person = new Programmer();
// 方法就要用Person的，Person是Programmer的父类就可以这么写，反过来则不行
// let twoProgrammer: Programmer = new Person();这样会报错
twoProgrammer.otherGreet()