// 只读属性

*class* Person {

​    protected firstName: *string*;

​    protected lastName: *string*;

​    // 只读属性

​    readonly name:*string* = '15';

}

*let* onePerson = new Person();

*let* personName = onePerson.name;

*console*.log(personName)

//Cannot assign to 'name' because it is a read-only property.  

// onePerson.name = '20';