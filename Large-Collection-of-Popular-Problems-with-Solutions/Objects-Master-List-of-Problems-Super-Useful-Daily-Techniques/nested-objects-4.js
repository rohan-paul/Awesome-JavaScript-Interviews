// Problems statement - from the below json, print only the products versions in an arry

var myData =
{
"abc":
    [
        [
            {"prod_ver" : "prod-1_ver 1"},
            {"prod_ver" : "prod-1_ver 2"},
        ],
        [
            {"prod_ver" : "prod-2_ver 1"},
            {"prod_ver" : "prod-2_ver 2"},
        ],
        [
            {"prod_ver" : "prod-3_ver 1"},
            {"prod_ver" : "prod-3_ver 2"},
        ]
    ]
};

printVersion = (myJSONObject) => {
    var versions = [];

    for (let i = 0; i < myJSONObject.abc.length; i++) {

        // assign variable for the current product
        let product = myJSONObject.abc[i]

        for (let j = 0; j < product.length; j++) {
            versions.push(product[j].prod_ver);
        }
    }
    return versions;
}

console.log(printVersion(myData));