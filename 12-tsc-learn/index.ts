let a: any;

a = 10;
a = '1'
a = [1,2]
a = {
    'a':1
}

// 判断是一个数字
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

// 判断是一个字符串
function isString(value: any): value is string {
    return typeof value === 'string';
}

const log = (value: any) => {
    if(isNumber(value))
        return `your value is number ${value}`;
    if(isString(value))
        return `your value is string ${value}`;
    throw new Error(`Expected string or number, got ${value}`)
}

console.log(log(2))

// 数组中的元素是可任意的
let b: any[];
b = [1,2,'3',[]]
