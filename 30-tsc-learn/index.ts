// interface readonly
interface Person {
    // firstName为只读，不可修改
    readonly firstName: string;
    lastName?: string;

    print?(): void;

    // 索引
    [propName: string]: any;
}


class Programmer implements Person {
    firstName: string;
}
const programmer: Person = new Programmer()
// 报错：Cannot assign to 'firstName' because it is a read-only property. 
programmer.firstName = 'Awen';
