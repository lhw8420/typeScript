// 接口
// 比如：支付接口
interface Person {
    name: string;

    greet(): void;
}

const sayName = (o: Person) => {
    o.greet()
}

// 类实现接口
class Employee implements Person {
    public name: string

    public greet(): void {
        console.log('hello, I am employee')
    }
}

class Customer implements Person {
    public name: string;
    public email: string;
    greet() {
        console.log('hello, I am em')
    }
}

// 方法一：
// let em = new Employee();
// em.greet();

// let cu = new Customer();
// cu.greet();

// 方法二：
let customer: Customer = new Customer();
customer.greet();
let employee: Employee = new Employee();
employee.greet();


// 实现接口：比如：微信支付、支付宝支付
interface Pay {
    post(): void;
}

// 可能会发送http请求
// 真正的支付请求
const doPay = (pay: Pay) => {
    // 有一些逻辑
    pay.post()
}

//微信支付
class WeiPay implements Pay {
    // 调微信支付接口
    post() {

    }
}

// 支付宝支付
class AliPay implements Pay {
    // 调支付宝支付接口
    post() {

    }
}

let weiPay = new WeiPay();
let aliPay = new AliPay();

//唤起微信支付
doPay(weiPay)
//唤起支付宝支付
doPay(aliPay)
