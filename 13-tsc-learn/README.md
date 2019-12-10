参数联合类型

// 参数为string或者数字

*const* log = (*value*: *string* | *number*) *=>* {

​    if(typeof value === 'number')

​        return `your value is number ${value}`;

​    if(typeof value === 'string')

​        return `your value is string ${value}`;

}

*console*.log(log(2))

// 可传入null或者undefined,null和undefined为其他类型的子集，如number

// 当执行的命令为 tsc --strictNullChecks index.ts时候就会报错

// 需const log = (value: string | number | null | undefined ) => {}才不会报错

*console*.log(log(null))

*console*.log(log(undefined))