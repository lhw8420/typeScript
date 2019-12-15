// 类型别名,interface类型
type Name = [string, number];
type Age = number;
type User = {
    name: string;
    age: number;
    print(name: string): void;
}
interface IUser {
    name: string;
    age: number;
    email: string;
}

let myName: Name = ['lin Awen', 26];

let age: Age = 27;

const person:User = {
    name: 'lin Awen',
    age:27,
    print: (name: string) => {
        console.log(name)
    }
}

const other_user: IUser = {
    name: 'lin',
    age: 25,
    email: '2564586@qq.com'
}

console.log(myName)
console.log(age)
console.log(person)
console.log(other_user.email)

