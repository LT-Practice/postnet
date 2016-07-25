//#1
function checkBarcode(barcode) {
    let barcodeElementArray = barcode.split('');
    let bar = '|';
    let barcodesLength = (barcodeElementArray.length - bar.length * 2) / 5;
    let type = (barcodeElementArray[0] === bar && barcodeElementArray[barcodeElementArray.length - 1]
    && (barcodesLength === 6 || barcodesLength === 10));
    return {barcode, type};
}

//#2-1
function formatBarcode(checkedBarcode) {
    return checkedBarcode.barcode.substring(1, checkedBarcode.barcode.length - 1);
}

//#2-2
function buildBarcodeArray(formattedBarcode) {
    debugger;
    let barcodeArray = [];
    for (let index = 0; index < formattedBarcode.length - 1; index += 5) {
        barcodeArray.push(formattedBarcode.substr(index, 5));
    }
    return barcodeArray;
}

//#2-3
function matchZipcode(barcodeArray, allCodes) {
    //debugger;
    return barcodeArray.map(barcodeItem => allCodes.find(digit => digit.digit === barcodeItem).key);
}

//#3
function recheckZipcodeArray(zipcodeArray) {
    let resultSum = zipcodeArray.map(codeItem => parseInt(codeItem)).reduce((a, b) => a + b);
    if ((resultSum % 10) === 0) {

        return {zipcodeArray, recheckType: true};
    } else {
        return {zipcodeArray, recheckType: false};
    }
}
//#4
function buildZipcode(recheckedZipcodeArray) {
    //debugger;
    let resultSum = _.sum(recheckedZipcodeArray);
    let result = resultSum.substr(0, resultSum.length - 1);
    if (result.length != 5) {
        return result.substr(0, 5) + '-' + result.substr(5);
    }
    return result;
}
