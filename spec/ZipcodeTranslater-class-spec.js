let ZipcodeTranslater = require('../src/ZipcodeTranslater-class.js');
var allCodes = require('../src/codes');


let transtlater = new ZipcodeTranslater();
describe('ZipcodeTranslater-class-spec', () => {
    it('execute', () => {
        let zipcode = '12345';
        // let barcode = zipToBarcode.zipcodeToBarcode(zipcode);
        let expected = {
            barcode: '|:::||::|:|::||::|::|:|:|::|:|:|',
            type: true
        };
        expect(transtlater.execute(zipcode)).toEqual(expected);
    });

    it('zipcode to barcode', () => {
        let zipcode = '12345';
        // let barcode = zipToBarcode.zipcodeToBarcode(zipcode);
        let expected = {
            barcode: '|:::||::|:|::||::|::|:|:|::|:|:|',
            type: true
        };
        expect(transtlater.zipcodeToBarcode(zipcode)).toEqual(expected);
    });

    it('#5.checkZipcode with 5-4 codes', () => {
        let zipcode = '45056-1234';
        // let checkedZipcode = checkZipcode(zipcode);
        let expected = {
            zipcode: '45056-1234',
            type: true
        };
        expect(transtlater.checkZipcode(zipcode)).toEqual(expected);

    });

    it('#6-1.formatZipcode with 5-4 codes', () => {
        let checkedZipcode = {
            zipcode: '45056-1234',
            type: true
        };
        // let formattedZipcode = zipToBarcode.formatZipcode(checkedZipcode);
        let expected = '450561234';
        expect(transtlater.formatZipcode(checkedZipcode)).toEqual(expected);

    });

    it('#6-2.buildZipcodeArray', () => {
        let formattedZipcode = '450561234';
        // let zipcodeArray = zipToBarcode.buildZipcodeArray(formattedZipcode);
        let expected = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];
        expect(transtlater.buildZipcodeArray(formattedZipcode)).toEqual(expected);
    })

    it('#6-3.addCheckDigit', () => {
        let zipcodeArray = ['1', '2', '3', '4', '5'];
        // let zipcodeArrayWithCheckDigit = zipToBarcode.addCheckDigit(zipcodeArray);
        let expected = ['1', '2', '3', '4', '5', '5'];
        expect(transtlater.addCheckDigit(zipcodeArray)).toEqual(expected);
    });

    it('#6-4.matchBarcode', () => {
        let zipcodeArrayWithCheckDigit = ['1', '2', '3', '4', '5', '5'];
        // let allCodes = loadAllCodes();
        // let barcodeArray = zipToBarcode.matchBarcode(zipcodeArrayWithCheckDigit, allCodes());
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        expect(transtlater.matchBarcode(zipcodeArrayWithCheckDigit, allCodes())).toEqual(expected);
    })
    it('#7.buildBarcode', () => {
        let barcodeArray = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        // let barcode = zipToBarcode.buildBarcode(barcodeArray);
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(transtlater.buildBarcode(barcodeArray)).toEqual(expected);
    })


});