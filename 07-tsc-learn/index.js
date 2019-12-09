function add(a, b) {
    return a + b;
}
var sum = add(14, 20);
console.log(sum.toFixed(2));
// 不想返回任何值
function filterData(a, b) {
    console.log(a + b);
}
// 默认值
function add(a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
}
// 可选参数
function add(a, b) {
    if (b === void 0) { b = 20; }
    if (b)
        return a + b;
    else
        return a;
}
// 默认值时候会自动规定类型，b为字符串会报错
function add(a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
}
{
    var result = num.reduce(function (total, curr) {
        return total + curr;
    });
    return a + result;
}
sum(1, 2, 3, 4, 6);
