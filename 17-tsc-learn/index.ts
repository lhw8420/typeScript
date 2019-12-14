// 模板,没写默认就是public
class Person {
    public firstName: string;
    private lastName: string;

    public greet(){
        console.log('hi')
    }

    public otherGreet() {
        this.greet();
        console.log('****')
    }

    public getName() {
        console.log(this.firstName) 
    }
    
    // 私有属性只能通过暴露一个方法来使用它
    public getLastName(){
        console.log(this.lastName)
    }

    public setLastName(val){
        this.lastName = val;
    }

    private sayHi() {
        console.log('hi--')
    }

    public callSayHi() {
        this.sayHi()
    }
}
let newPerson = new Person()
newPerson.otherGreet();
// private是私有的，只允许class内部使用
// console.log(newPerson.lastName)

//私有属性只能通过暴露一个方法来使用它
newPerson.setLastName('lin')
newPerson.getLastName()

// 调用私有方法
newPerson.callSayHi()

class OnePerson extends Person{
    getName() {
       console.log(this.firstName) 
    }
}

let modelOnePerson:Person = new OnePerson();

modelOnePerson.firstName = 'xiaolin'
// 方法就要用Person的,用自己的会报错，如：
// modelOnePerson.getName()
modelOnePerson.getName();

