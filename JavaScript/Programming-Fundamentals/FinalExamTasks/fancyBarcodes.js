function fancyBarcodes(barcodeArray) {
 
    let barcodeNumber = Number(barcodeArray.shift());
    let patternValidBarcode = /@[#]+[A-Z][A-Za-z\d]{4,}[A-Z]@[#]+/;
    let patternProductGroup = /\d+/g;
 
    for (let i = 0; i < barcodeNumber; i++) {
 
        let currentBarcode = barcodeArray.shift();
        let checkBarcode = patternValidBarcode.exec(currentBarcode);
 
        if (checkBarcode == null) {
            console.log(`Invalid barcode`);
 
        } else {
            let validBarcode = checkBarcode[0];
            let checkForDigitsArray = validBarcode.match(patternProductGroup);
 
            if (checkForDigitsArray == null) {
                console.log(`Product group: 00`);
 
            } else {
                console.log(`Product group: ${checkForDigitsArray.join('')}`);
            }
        }
    }
}
 
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
// fancyBarcodes(["6",
// "@###Val1d1teM@###",
// "@#ValidIteM@#",
// "##InvaliDiteM##",
// "@InvalidIteM@",
// "@#Invalid_IteM@#",
// "@#ValiditeM@#"]);