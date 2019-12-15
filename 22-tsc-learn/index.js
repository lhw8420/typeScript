// 枚举类型
// 它的值是数字序号，从0开始
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["SUN"] = 0] = "SUN";
    DayOfTheWeek[DayOfTheWeek["MON"] = 1] = "MON";
    DayOfTheWeek[DayOfTheWeek["TUD"] = 2] = "TUD";
    DayOfTheWeek[DayOfTheWeek["WED"] = 3] = "WED";
    DayOfTheWeek[DayOfTheWeek["THU"] = 4] = "THU";
    DayOfTheWeek[DayOfTheWeek["FRI"] = 5] = "FRI";
    DayOfTheWeek[DayOfTheWeek["SAT"] = 6] = "SAT";
})(DayOfTheWeek || (DayOfTheWeek = {}));
// 可自定义初始值，后面的值会按这个初始值累加
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["SUN"] = 10] = "SUN";
    DayOfTheWeek[DayOfTheWeek["MON"] = 11] = "MON";
    DayOfTheWeek[DayOfTheWeek["TUD"] = 12] = "TUD";
    DayOfTheWeek[DayOfTheWeek["WED"] = 13] = "WED";
    DayOfTheWeek[DayOfTheWeek["THU"] = 14] = "THU";
    DayOfTheWeek[DayOfTheWeek["FRI"] = 15] = "FRI";
    DayOfTheWeek[DayOfTheWeek["SAT"] = 16] = "SAT";
})(DayOfTheWeek || (DayOfTheWeek = {}));
var day;
day = DayOfTheWeek.MON;
console.log(day);
if (day === DayOfTheWeek.MON) {
    console.log('周一');
}
