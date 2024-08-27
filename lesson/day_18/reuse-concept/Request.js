class Request {
    constructor(url, headers = {}) {
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        this.headers = { ...this.headers, method };
    }

    send() {
        console.log(`Request sent with headers: ${JSON.stringify(this.headers)}`);
    }
    verifyResponse() {
        console.log('Verify the response...');
    }
}
module.exports = Request;

// let request = new Request('https://www.google.com', {nethod: 'GET'});
// request.send();
// request.verifyResponse();