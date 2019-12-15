// function type
// interface readonly
interface Person {
    // firstName为只读，不可修改
    readonly firstName: string;
    lastName?: string;

    print(callback: PrintCallback): void;

    // 索引
    [propName: string]: any;
}


interface PrintCallback {
    // 可简单理解为匿名函数
    (success: boolean): void
}

let printCallback: PrintCallback;
printCallback = (suc: boolean): void => {
    console.log("callback", suc)
}

let person: Person = {
    firstName: 'Awen',
    age: 27,
    print: (callback: PrintCallback): void => {
        callback(true)
    }
}

person.print(printCallback)


