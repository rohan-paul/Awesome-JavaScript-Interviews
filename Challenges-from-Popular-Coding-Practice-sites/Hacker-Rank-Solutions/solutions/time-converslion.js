/* https://www.hackerrank.com/challenges/time-conversion/problem

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Input Format

A single string  containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM)

Output Format

Convert and print the given time in -hour format, where .

Sample Input 0

07:05:45PM

Sample Output 0

19:05:45 */

timeConversion = s => {

  let hours = parseInt(s.substring(0, s.indexOf(':')));
  let minutes = parseInt(s.substring((s.indexOf(':') + 1), s.lastIndexOf(':')));
  let seconds = parseInt(s.substring( (s.lastIndexOf(':') + 1), (s.lastIndexOf(':') + 3) ));

  let newHours;

  if (hours === 12) {
    newHours = 0
  } else {
    newHours = hours;
  }

  let shift;

  if (s.toLowerCase().indexOf('pm') > -1 ) {
    shift = 12;
  } else {
    shift = 0;
  }

  // helper function to add a zero at the front of hours / minutes / seconds if its less than 10
  const format = numStr => {
    if (numStr.length === 1) {
      return "0" + numStr;
    }
    return numStr;
  }

  // Convert each of hours / minutes / seconds to proper number

  let convertedHours = format((newHours + shift).toString());
  let convertedMinutes = format(minutes.toString());
  let convertedSeconds = format(seconds.toString());

  return (convertedHours + ":" + convertedMinutes + ":" + convertedSeconds);

}

console.log(timeConversion("07:05:45PM"))