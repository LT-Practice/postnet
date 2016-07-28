var allCodes = require('./codes');
let _ = require('lodash');
let  CoreResponse = require('./CoreResponse');


class ZipcodeTranslater {
    constructor() {

    }

    execute(zipcode) {
        return this.zipcodeToBarcode(zipcode);
    }

//#zipcode to barcode 邮编 to 条码

    zipcodeToBarcode(zipcode) {
        let checkedZipcode = this.checkZipcode(zipcode);
        let barcodeArray = this.zipcodeTransformToBarcode(checkedZipcode);
        let barcode = this.buildBarcode(barcodeArray);
        // return {barcode, type: checkedZipcode.type};
        // console.log(new CoreResponse(zipcode,checkedZipcode.type));
        return new CoreResponse(barcode,checkedZipcode.type);
    }

//#5
    checkZipcode(zipcode) {
        //debugger;
        let formatCode = zipcode.replace(/-/g, '');
        if (formatCode.length === 5 || formatCode.length === 9) {
            return {zipcode, type: true};
        } else {
            return {zipcode, type: false};
        }
    }

//#6
    zipcodeTransformToBarcode(checkedZipcode) {
        // debugger;
        let formattedZipcode = this.formatZipcode(checkedZipcode);
        let zipcodeArray = this.buildZipcodeArray(formattedZipcode);
        let zipcodeArrayWithCheckDigit = this.addCheckDigit(zipcodeArray);
        // let allCodes = loadAllCodes();
        let barcodeArray = this.matchBarcode(zipcodeArrayWithCheckDigit, allCodes());
        return barcodeArray;
    }

//#6-1
    formatZipcode(checkedZipcode) {
        return checkedZipcode.zipcode.replace(/-/g, '');
    }


//#6-2
    buildZipcodeArray(formattedZipcode) {
        return formattedZipcode.split('');
    }

//#6-3
    addCheckDigit(zipcodeArray) {
        let zipcodeNumbers = zipcodeArray.map(codeItem => parseInt(codeItem));
        let sumResult = _.sum(zipcodeNumbers);
        let checkDigit = sumResult % 10 != 0 ? (10 - sumResult % 10).toString() : (0).toString();
        zipcodeArray.push(checkDigit);
        return zipcodeArray;
    }

//#6-4
    matchBarcode(zipcodeArrayWithCheckDigit, allCodes) {
        // debugger;
        return zipcodeArrayWithCheckDigit.map(zipcodeItem => allCodes.find(code =>code.key === zipcodeItem).digit);
    }

//#7
    buildBarcode(barcodeArray) {
        //debugger;
        return '|' + _.sum(barcodeArray) + '|';

    }


}

module.exports = ZipcodeTranslater;