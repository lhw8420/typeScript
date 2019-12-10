// 模板
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var onePerson = new Person();
onePerson.firstName = '123';
onePerson.lastName = '1234';
console.log(onePerson.firstName);
console.log(onePerson.lastName);
var Movie = /** @class */ (function () {
    function Movie(name, playConut) {
        this.name = name;
        this.playConut = playConut;
    }
    Movie.prototype.displayPlayCount = function (padding) {
        if (padding === void 0) { padding = '*****'; }
        return this.name + "\u64AD\u53D1\u6B21\u6570\u4E3A\uFF1A" + this.playConut + "\u6B21" + padding;
    };
    Movie.prototype.increasePlayCount = function () {
        this.playConut++;
    };
    return Movie;
}());
var movie = new Movie('美人鱼', 23);
console.log(movie.name);
console.log(movie.displayPlayCount('----'));
movie.increasePlayCount();
console.log(movie.displayPlayCount('----'));
var movie2 = new Movie('美人鱼2', 01);
console.log(movie2.name);
console.log(movie2.displayPlayCount('----'));
movie2.increasePlayCount();
console.log(movie2.displayPlayCount('----'));
