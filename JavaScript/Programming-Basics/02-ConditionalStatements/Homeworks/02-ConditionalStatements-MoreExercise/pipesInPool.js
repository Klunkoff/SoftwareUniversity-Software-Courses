function solve(input) {
 
    let poolVolume = input[0];
    let firstPipeFlow = input[1];
    let secondPipeFlow = input[2];
    let hours = input[3];
 
    let FirstPipeOverallFlow = hours * firstPipeFlow;
    let secondPipeOverallFlow = hours * secondPipeFlow;
 
    let overallFlow = FirstPipeOverallFlow + secondPipeOverallFlow;
 
    let percentFirstPipe = (FirstPipeOverallFlow / overallFlow) * 100;
    let percentSecondPipe = (secondPipeOverallFlow / overallFlow) * 100;
 
    let percentOverallPoolFlow = (overallFlow / poolVolume) * 100;
 
    if (overallFlow > poolVolume) {
 
        let result = overallFlow - poolVolume;
 
        console.log(`For ${hours} hours the pool overflows with ${result.toFixed(2)} liters.`);
 
    } else {
 
        console.log(`The pool is ${percentOverallPoolFlow.toFixed(2)}% full. Pipe 1: ${percentFirstPipe.toFixed(2)}%. Pipe 2: ${percentSecondPipe.toFixed(2)}%.`);
    }
}
 
solve([1000, 250, 250, 2]);
solve([100, 100, 100, 2.5]);