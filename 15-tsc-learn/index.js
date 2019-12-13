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
// 模板
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
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log('hello world');
    };
    Programmer.prototype.greetLikeNormalPerson = function () {
        // 调用父亲的方法,代表父亲 
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
// let onePerson = new Person();
// onePerson.otherGreet();
// onePerson.firstName = '123';
// onePerson.lastName = '1234';
// console.log(onePerson.firstName)
// console.log(onePerson.lastName)
//tsc写法
var oneProgrammer = new Programmer();
oneProgrammer.otherGreet();
// 调用方法时，先找自己本身对象的方法，如果没有，会找父亲的
oneProgrammer.greet();
oneProgrammer.greetLikeNormalPerson();
// 多态
var twoProgrammer = new Programmer();
// 方法就要用Person的，Person是Programmer的父类就可以这么写，反过来则不行
// let twoProgrammer: Programmer = new Person();这样会报错
twoProgrammer.otherGreet();
