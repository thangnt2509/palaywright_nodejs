const Request = require("./Request");

//child class/ sub class/ derived class
class GetRequest extends Request{
    //Overriding
    setMethod(){
        super.setMethod('POST');   
    }
}

let request = new GetRequest('https://www.google.com');
request.setMethod();
request.send();
request.verifyResponse();