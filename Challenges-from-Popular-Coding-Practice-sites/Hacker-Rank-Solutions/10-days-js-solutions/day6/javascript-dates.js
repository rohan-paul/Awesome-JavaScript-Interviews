/* https://www.hackerrank.com/challenges/js10-date/problem

The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" */
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = new Date(dateString).getDay();
    dayName = weekDayNames[dayName];
    return dayName;
}

/* The getDay() method returns the day of the week, as a number from 0 to 6 for the specified date according to local time, where 0 represents Sunday. So, thats why, I have to define a new Array to get the number's corresponding Weekday value  */

console.log(getDayName("11/10/2010"));