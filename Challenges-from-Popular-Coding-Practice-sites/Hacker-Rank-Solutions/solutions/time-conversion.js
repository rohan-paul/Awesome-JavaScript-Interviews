/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Input Format-

A single string containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01 < hh < 12 and mm, ss < 59.

Output Format-

Convert and print the given time in 24-hour format, where 00 < hh < 23.

Sample Input

07:05:45PM
Sample Output

19:05:45*/

/* A> Here the format of the input string is quite specific (i.e.: hh:mm:ssAM or hh:mm:ssPM). So, I can make use of String.substring() very precisely

 */
function timeConversion(s) {
	var hours = parseInt(s.substring(0, s.indexOf(':')));
	var minutes = parseInt(s.substring(s.indexOf(':') + 1, s.lastIndexOf(':')));
	var seconds = parseInt(s.substring(s.lastIndexOf(':') + 1, s.lastIndexOf(':') + 3));

	var militaryHours;

	if (hours === 12) {
		militaryHours = 0;
	} else {
		militaryHours = hours;
	}

	var hourShift; // Adds 12 hours for all input string containing PM
	if(s.toLowerCase().indexOf('pm') > -1) {
		hourShift = 12;
	} else {
		hourShift = 0;
	}

	function addZeroFormat(numString) {
		if (numString.length === 1) {
			return "0" + numString;
		}
		return numString;
	}

	var formattedHours = addZeroFormat((militaryHours + hourShift).toString());
	var formattedMinutes = addZeroFormat(minutes.toString());
	var formattedSeconds = addZeroFormat(seconds.toString());

	return (formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);

}

console.log(timeConversion("07:05:45PM"));
// 19:05:45