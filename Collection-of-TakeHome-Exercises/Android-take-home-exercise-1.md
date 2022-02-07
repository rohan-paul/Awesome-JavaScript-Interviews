# Android Credit Card Input Exercise

<img align="right" src="CreditCardInputExercise.gif" alt="A general idea of how it looks/works" title="A general idea of how it looks/works">

### Requirements

Basically, the Company asked to create an Android "screen" that would allow a user to enter and submit the
following data from an American Express, Discover, MasterCard, or Visa credit card:

- Credit card number
- Expiration date (MM/YY format)
- CVV security code
- First name
- Last name

If any of the entered data was invalid, the user needed to be notified so the Company's Dev-Team could correct it.
In addition to not having issues like empty fields or a badly-formed or expired expiration date,
credit card data also had to meet these criteria to be considered valid:

- Credit card numbers needed to be in valid American Express, Discover, MasterCard, or Visa format according
  to the specs listed on https://www.cybersource.com/developers/getting_started/test_and_manage/best_practices/card_type_id/
- Credit card numbers also needed to pass Luhn validation - see https://en.wikipedia.org/wiki/Luhn_algorithm
- The CVV had to meet these criteria: https://www.cvvnumber.com/cvv.html
- First and last names could only contain characters that were "alphabetical and spaces". _(It's true that many
  people have hyphens in their names as well, but for this assignment I wasn't going to go past what was called
  for in the specs, ditto for dealing with "international characters" even though I have one in my own first name.)_

When the user submitted valid credit card data, the app should pop up an alert dialog notifying them that the
payment was successful.
