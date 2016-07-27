let _ = require('lodash');
var allCodes = require('../src/codes');

//barcode to zipcode条码 to 邮编
function barcodeToZipcode(barcode) {
    let checkedBarcode = checkBarcode(barcode);
    let zipcodeArray = barcodeTransformToZipcode(checkedBarcode);
    let recheckedZipcodeArray = recheckZipcodeArray(zipcodeArray);
    let zipcode = buildZipcode(recheckedZipcodeArray);
    return {zipcode, type: checkedBarcode.type};
}

//#1
function checkBarcode(barcode) {
    let barcodeElementArray = barcode.split('');
    let bar = '|';
    let barcodesLength = (barcodeElementArray.length - bar.length * 2) / 5;
    let type = (barcodeElementArray[0] === bar && barcodeElementArray[barcodeElementArray.length - 1]
    && (barcodesLength === 6 || barcodesLength === 10));
    return {barcode, type};
}
//#2
function barcodeTransformToZipcode(checkedBarcode) {
    let formattedBarcode = formatBarcode(checkedBarcode);
    let barcodeArray = buildBarcodeArray(formattedBarcode);
    // let allCodes = loadAllCodes();
    let zipcodeArray = matchZipcode(barcodeArray, allCodes());
    return zipcodeArray;
}


//#2-1
function formatBarcode(checkedBarcode) {
    return checkedBarcode.barcode.substring(1, checkedBarcode.barcode.length - 1);
}

//#2-2
function buildBarcodeArray(formattedBarcode) {
    //debugger;
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
    debugger;
    let resultSum = _.sum(recheckedZipcodeArray.zipcodeArray);
    let result = resultSum.substr(0, resultSum.length - 1);
    if (result.length != 5) {
        return result.substr(0, 5) + '-' + result.substr(5);
    }
    return result;
}

module.exports = {
    barcodeToZipcode,
    checkBarcode,
    barcodeTransformToZipcode,
    formatBarcode,
    buildBarcodeArray,
    matchZipcode,
    recheckZipcodeArray,
    buildZipcode
};