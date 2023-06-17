function solve(inputData) {
 
    let workArray = JSON.parse(inputData);
    let result = ['<table>'];
 
    let headInfoArray = Object.keys(workArray[0]);
    headInfoResult = ['   <tr>'];
 
    for (let head of headInfoArray) {
        headInfoResult.push(`<th>${escapeHtml(head)}</th>`);
    }
 
    headInfoResult.push('</tr>');
    result.push(headInfoResult.join(''));
 
    for (let object of workArray) {
 
        let rowDataResult = ['   <tr>'];
        let currentValuesArray = Object.values(object);
 
        for (let value of currentValuesArray) {
            rowDataResult.push(`<td>${escapeHtml(value)}</td>`);
        }
 
        rowDataResult.push('</tr>');
        result.push(rowDataResult.join(''));
    }
 
    result.push('</table>');
 
    console.log(result.join('\n'));
 
    function escapeHtml(value) {
        
        return value
 
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
 
// solve(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`);
 
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);