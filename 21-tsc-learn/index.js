var Person = /** @class */ (function () {
    function Person() {
        // 只读属性
        this.name = '15';
    }
    return Person;
}());
var onePerson = new Person();
var personName = onePerson.name;
console.log(personName);
//Cannot assign to 'name' because it is a read-only property.  
// onePerson.name = '20';
