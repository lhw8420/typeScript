// 模板,没写默认就是public
class Person {
    protected firstName: string;
    protected lastName: string;

    // 私有静态属性
    // private static age: number = 20;
    // 保护
    protected static age: number = 20;

    // 静态方法
    public static getStaticAge() {
        let mess = `my age is ${Person.age}`
        console.log(mess)  
    }

    public constructor(firstName: string, latName: string) {
        this.firstName = firstName;
        this.lastName = latName;
    }

    public getAge(){
        let mess = `my age is ${Person.age}`
        console.log(mess)  
    }
    
}

// 私有的静态属性可通过方法暴露出来
// console.log(Person.age)
Person.getStaticAge()

let onePerson = new Person('lin','Awen');
onePerson.getAge()

class ModelPerson extends Person{
    public getSuperAge() {
        let mess = `my super age is ${ModelPerson.age}`
        console.log(mess)
    }
}

let newModelPerson = new ModelPerson('xiao lin', 'he');

//Property 'age' is a static member of type 'ModelPerson'
// console.log(newModelPerson.age)

ModelPerson.getStaticAge()
newModelPerson.getSuperAge()