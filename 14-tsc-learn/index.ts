// 模板
class Person {
    firstName: string;
    lastName: string;
}

let onePerson = new Person();

onePerson.firstName = '123';
onePerson.lastName = '1234';


console.log(onePerson.firstName)
console.log(onePerson.lastName)

class Movie {
    name: string;
    playConut: number;
    creteTime: string;
    time: string;

    constructor(name: string, playConut: number) {
        this.name = name;
        this.playConut = playConut;
    }

    displayPlayCount(padding: string = '*****') {
        return `${this.name}播发次数为：${this.playConut}次${padding}`
    }
    increasePlayCount() {
        this.playConut++;
    }
}

let movie = new Movie('美人鱼', 23);
console.log(movie.name)
console.log(movie.displayPlayCount('----'))
movie.increasePlayCount()
console.log(movie.displayPlayCount('----'))

let movie2 = new Movie('美人鱼2', 01);
console.log(movie2.name)
console.log(movie2.displayPlayCount('----'))
movie2.increasePlayCount()
console.log(movie2.displayPlayCount('----'))