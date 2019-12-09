function add(a: number, b: number): number{
    return a+b;
}

let sum = add(14,20)
console.log(sum.toFixed(2))

// 不想返回任何值
function filterData(a:number,b:number):void{
    console.log(a+b)
}

// 默认值
function add(a: number, b: number = 20): number{
    return a+b;
}

// 可选参数
function add(a: number, b?: number = 20): number{
    if(b)
        return a+b;
    else
        return a;
}

// 默认值时候会自动规定类型，b为字符串会报错
function add(a: number, b = 20): number{
    return a+b;
}

// 求和
function sum(a:number,b:number,...num:number[]): number => {
    let result  = num.reduce((total, curr) => {
        return total + curr
    })
    return a+ result
}
sum(1,2,3,4,6)