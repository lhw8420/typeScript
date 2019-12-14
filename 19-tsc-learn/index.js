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
    return Person;
}());
//  public constructor 可以被new  protected constructor则不行  protected constructor则不行
// let newPerson = new Person()
// 重新声明constructor则可以
var ModelPerson = /** @class */ (function (_super) {
    __extends(ModelPerson, _super);
    function ModelPerson(firstName, latName) {
        var _this = 
        // 调用父类的构造函数，父类有要求形参则需传参数
        _super.call(this, firstName, latName) || this;
        console.log('hello');
        return _this;
    }
    ModelPerson.prototype.getFullName = function () {
        var fullName = this.firstName + " " + this.lastName;
        console.log(fullName);
    };
    return ModelPerson;
}(Person));
var newModelPerson = new ModelPerson('lin', 'Awen');
newModelPerson.getFullName();
