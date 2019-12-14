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
    function Person() {
        this.firstName = 'lin';
        this.lastName = 'xiaoWen';
        this.firstProtectedName = 'hello';
        this.lastProtectedName = 'world';
    }
    Person.prototype.greet = function () {
        console.log('hi');
    };
    Person.prototype.otherGreet = function () {
        this.greet();
        console.log('****');
    };
    Person.prototype.getFirstName = function () {
        console.log(this.firstName);
    };
    // 私有属性只能通过暴露一个方法来使用它
    Person.prototype.getLastName = function () {
        console.log(this.lastName);
    };
    Person.prototype.setLastName = function (val) {
        this.lastName = val;
    };
    Person.prototype.sayHi = function () {
        console.log('hi--');
    };
    Person.prototype.callSayHi = function () {
        this.sayHi();
    };
    return Person;
}());
var newPerson = new Person();
// newPerson.getFirstName()
// 权限范围
// public > protected > private
var ModelPerson = /** @class */ (function (_super) {
    __extends(ModelPerson, _super);
    function ModelPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private不用给子类继承使用
    // Property 'lastName' is private and only accessible within class 'Person'
    ModelPerson.prototype.getFullName = function () {
        return "" + this.firstName + this.lastName;
    };
    // protected则可以 hello world
    ModelPerson.prototype.getFullPrivateName = function () {
        return this.firstProtectedName + " " + this.lastProtectedName;
    };
    return ModelPerson;
}(Person));
var newModelPerson = new ModelPerson();
// console.log(newModelPerson.getFullName())
console.log(newModelPerson.getFullPrivateName());
// newModelPerson.otherGreet()
