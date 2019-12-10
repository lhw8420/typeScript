// 参数为string或者数字
var log = function (value) {
    if (typeof value === 'number')
        return "your value is number " + value;
    if (typeof value === 'string')
        return "your value is string " + value;
};
console.log(log(2));
// 可传入null或者undefined,null和undefined为其他类型的子集，如number
console.log(log(null));
console.log(log(undefined));
