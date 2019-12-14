// 模板,没写默认就是public
class Person {
    protected firstName: string;
    protected lastName: string;

    protected constructor(firstName: string, latName: string) {
        this.firstName = firstName;
        this.lastName = latName;
    }

    
}

//  public constructor 可以被new  protected constructor则不行  protected constructor则不行
// let newPerson = new Person()
// 重新声明constructor则可以
class ModelPerson extends Person{
    constructor(firstName: string, latName: string) {
        // 调用父类的构造函数，父类有要求形参则需传参数
        super(firstName, latName);
        console.log('hello');
    }
    getFullName() {
        let fullName = `${this.firstName} ${this.lastName}`;
        console.log(fullName)
    }
}

let newModelPerson = new ModelPerson('lin', 'Awen');
newModelPerson.getFullName();