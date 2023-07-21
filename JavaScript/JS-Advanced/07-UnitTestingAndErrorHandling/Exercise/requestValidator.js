function requestValidator(requestObject) {

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /(^[\w.]+$)/;
    const messagePattern = /([<>\\&'"])/;

    if (!requestObject.method || !validMethods.includes(requestObject.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!requestObject.uri || !uriPattern.test(requestObject.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!requestObject.version || !validVersions.includes(requestObject.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (requestObject.message == undefined || messagePattern.test(requestObject.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return requestObject;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });