// 模板,没写默认就是public
class Person {
    public firstName: string;
    private lastName: string;

    public firstProtectedName: string;
    protected lastProtectedName: string;

    constructor() {
        this.firstName = 'lin';
        this.lastName = 'xiaoWen';

        this.firstProtectedName = 'hello';
        this.lastProtectedName = 'world';
    }

    public greet(){
        console.log('hi')
    }

    protected otherGreet() {
        this.greet();
        console.log('****')
    }

    public getFirstName() {
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
// newPerson.getFirstName()

// 权限范围
// public > protected > private
class ModelPerson extends Person{
    // private不用给子类继承使用
    // Property 'lastName' is private and only accessible within class 'Person'
    public getFullName(): string {
        return `${this.firstName}${this.lastName}`;
    }
    // protected则可以 hello world
    public getFullPrivateName(): string {
        return `${this.firstProtectedName} ${this.lastProtectedName}`;
    }
    // 可通过父class方法暴露出privited属性、方法
}

let newModelPerson = new ModelPerson();
// console.log(newModelPerson.getFullName())
console.log(newModelPerson.getFullPrivateName())
// newModelPerson.otherGreet()