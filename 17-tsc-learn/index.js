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
    }
    Person.prototype.greet = function () {
        console.log('hi');
    };
    Person.prototype.otherGreet = function () {
        this.greet();
        console.log('****');
    };
    Person.prototype.getName = function () {
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
newPerson.otherGreet();
// private是私有的，只允许class内部使用
// console.log(newPerson.lastName)
//私有属性只能通过暴露一个方法来使用它
newPerson.setLastName('lin');
newPerson.getLastName();
// 调用私有方法
newPerson.callSayHi();
var OnePerson = /** @class */ (function (_super) {
    __extends(OnePerson, _super);
    function OnePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnePerson.prototype.getName = function () {
        console.log(this.firstName);
    };
    return OnePerson;
}(Person));
var modelOnePerson = new OnePerson();
modelOnePerson.firstName = 'xiaolin';
// 方法就要用Person的,用自己的会报错，如：
// modelOnePerson.getName()
modelOnePerson.getName();
