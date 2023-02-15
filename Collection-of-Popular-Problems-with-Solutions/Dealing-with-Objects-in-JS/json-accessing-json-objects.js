// SOLULTION - 1 SIMPLE STRAIGHT-FORWARD METHOD - The below is a JSON String
var data1 = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';


// JSON.parse() function of Javascript to convert JSON String into Javascript JSON object.
var json = JSON.parse(data1);

console.log(json.name);

// SOLUTION - 2 - If however, the data is in the following format, and simpley JSON.parse() is not giving me the desired result - MOST PROBABLY BECAUSE - "it is most likely not a JSON string anymore, but already a JavaScript object." - THEN FIRST USE stringify()
// https://stackoverflow.com/questions/38380462/syntaxerror-unexpected-token-o-in-json-at-position-1

var data = {
    "name": "mkyong",
    "age": 30,
    "address": {
        "streetAddress": "88 8nd Street",
        "city": "New York"
    },
    "phoneNumber": [
        {
            "type": "home",
            "number": "111 111-1111"
        },
        {
            "type": "fax",
            "number": "222 222-2222"
        }
    ]
}

// JSON.stringify() converts a JavaScript object to a string representation of it, which is the opposite of what JSON.parse() does. I was getting the SyntaxError ( "Unexpected token o in JSON at position 1" - while directly applying JSON.parse() ) - because you were trying to parse something that was already an object.
// the first parameters of function JSON.parse should be a JSON String, and your data is a JavaScript object, so it will convert to a String [object object], you should use JSON.stringify before pass the data
var newData = JSON.stringify(data)

var json = JSON.parse(newData);

console.log(json.name);