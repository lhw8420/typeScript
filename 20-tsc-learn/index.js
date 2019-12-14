var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 模板,没写默认就是public
var Person = /** @class */ (function () {
    function Person(firstName, latName) {
        this.firstName = firstName;
        this.lastName = latName;
    }
    // 静态方法
    Person.getStaticAge = function () {
        var mess = "my age is " + Person.age;
        console.log(mess);
    };
    Person.prototype.getAge = function () {
        var mess = "my age is " + Person.age;
        console.log(mess);
    };
    // 私有静态属性
    // private static age: number = 20;
    // 保护
    Person.age = 20;
    return Person;
}());
// 私有的静态属性可通过方法暴露出来
// console.log(Person.age)
Person.getStaticAge();
var onePerson = new Person('lin', 'Awen');
onePerson.getAge();
var ModelPerson = /** @class */ (function (_super) {
    __extends(ModelPerson, _super);
    function ModelPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelPerson.prototype.getSuperAge = function () {
        var mess = "my super age is " + ModelPerson.age;
        console.log(mess);
    };
    return ModelPerson;
}(Person));
var newModelPerson = new ModelPerson('xiao lin', 'he');
//Property 'age' is a static member of type 'ModelPerson'
// console.log(newModelPerson.age)
ModelPerson.getStaticAge();
newModelPerson.getSuperAge();
