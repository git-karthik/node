var zipcode = require('zipcode');

console.log(zipcode.lookup('01913'));
var zip = 500;
while(zip <=1000)
{
    var ret = zipcode.lookup('00'+zip);
    if(null != ret)
        // console.log(ret);
    zip++;
}
