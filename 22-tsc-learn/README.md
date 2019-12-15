// 枚举类型

// 它的值是数字序号，从0开始

*enum* DayOfTheWeek {

​    SUN, MON, TUD, WED, THU, FRI, SAT

}

// 可自定义初始值，后面的值会按这个初始值累加

*enum* DayOfTheWeek {

​    SUN = 10, MON, TUD, WED, THU, FRI, SAT

}

*let* day: DayOfTheWeek;

day = DayOfTheWeek.MON;

*console*.log(day)

if(day === DayOfTheWeek.MON) {

​    *console*.log('周一')

}