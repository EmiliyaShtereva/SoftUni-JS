const querystring = require("querystring");

const myUrl = new URL("http://localhost:5000/somePath?query=year=20");
const qs = querystring.parse(myUrl.search);

console.log(qs);