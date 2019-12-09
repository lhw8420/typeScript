let a: any;

a = 10;
a = '1'
a = [1,2]
a = {
    'a':1
}

const log = (value: any) => {
    if(typeof value === 'number')
        return `your value is ${value}`;
    if(typeof value === 'string')
        return `your value is ${value}`;
    throw new Error(`Expected string or number, got ${value}`)
}

console.log(log([1,2]))

// 数组中的元素是可任意的
let b: any[];
b = [1,2,'3',[]]
