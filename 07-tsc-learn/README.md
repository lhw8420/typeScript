function

function add(*a*: *number*, *b*: *number*): *number*{

​    return a+b;

}

1. 能一眼看出参数类型必须为数字，返回值为数字类型，sum就可以直接使用sum.toFixed(2)，以便进行处理

2. 函数指向返回值的类型

   

// 不想返回任何值

*function* filterData(*a*:*number*,*b*:*number*):*void*{

​    *console*.log(a+b)

}



// 默认值

*function* add(*a*: *number*, *b*: *number* = 20): *number*{

​    return a+b;

}

// 可选参数

*function* add(*a*: *number*, *b*?: *number* = 20): *number*{

​    if(b)

​        return a+b;

​    else

​        return a;

}

// 默认值时候会自动计算、判断类型，b为字符串会报错

*function* add(*a*: *number*, *b* = 20): *number*{

​    return a+b;

}