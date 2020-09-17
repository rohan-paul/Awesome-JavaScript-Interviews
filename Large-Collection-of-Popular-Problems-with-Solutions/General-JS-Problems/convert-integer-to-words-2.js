// Super simple brute-force script for the numbers from 0-9999.

numToWord = num => {

  var words = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirthteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  // This variable will continue to get update throughout the execution of the each of the if loops below. And that why withing each of the if loop, I have to make sure, that I use "+=" instead of "=".

  let finalWord = '';

  if (num > words.length) {

    /* For examplem if num = 8545, then A) Get the thousand's postion by divind it by 1000
    B) Then get the hunderd's positon by reducing the number by that many thousands (8000 in this case) and then
    C) dividing the 100.
    D) Then get the 10-th positon again by reducing the number by that many hundreds.
    */

    if (num >= 1000 && num < 10000) {

      let thousandDivisor = parseInt(num / 1000);

      finalWord += words[thousandDivisor] + " thousands ";

      num -= (thousandDivisor * 1000)
    }

    // Now for the next steps work with the reduced number, the case also covers if the
    if (num >= 100 && num < 1000) {

      let hundredDivisor = parseInt(num / 100);

      finalWord += words[hundredDivisor] + " hundred ";

      num -= (hundredDivisor * 100);
    }

    if ((num >= 20 && num < 30)) {
      finalWord += ( num > 20 ? ('Twenty-' + words[num - 20]) : 'Twenty' )
    }
    else if ((num >= 30 && num < 40)) {
      finalWord += ( num > 30 ? ('Thirty-' + words[num - 30]) : 'Thity' )
    }
    else if ((num >= 40 && num < 50)) {
      finalWord += ( num > 40 ? ('Forty-' + words[num - 40]) : 'Forty' )
    }
    else if ((num >= 50 && num < 60)) {
      finalWord += ( num > 50 ? ('Fifty-' + words[num - 50]) : 'Fifty' )
    }
    else if ((num >= 60 && num < 70)) {
      finalWord += ( num > 60 ? ('Sixty-' + words[num - 60]) : 'Sixty' )
    }
    else if ((num >= 70 && num < 80)) {
      finalWord += ( num > 70 ? ('Seventy-' + words[num - 70]) : 'Seventy' )
    }
    else if ((num >= 80 && num < 90)) {
      finalWord += ( num > 80 ? ('Eighty-' + words[num - 80]) : 'Eighty' )
    }
    else if ((num >= 90 && num < 100)) {
      finalWord += ( num > 90 ? ('Ninety-' + words[num - 90]) : 'Ninety' )
    }

  }

  else {
    finalWord = words[num]
  }
  return finalWord;
}

console.log(numToWord(8900));