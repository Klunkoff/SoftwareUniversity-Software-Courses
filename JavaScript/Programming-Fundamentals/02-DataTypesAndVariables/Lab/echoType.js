function echoType(variable) {

    let variableType = typeof variable;

    console.log(variableType);

    if (variableType == 'string' || variableType == 'number') {

        console.log(variable);

    } else {
        
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);