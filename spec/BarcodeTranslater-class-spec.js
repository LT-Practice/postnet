let BarcodeTranslater = require('../src/BarcodeTranslater-class.js');
// var allCodes = require('../src/codes');
let barcodeTranslater = new BarcodeTranslater();

describe('BarcodeTranslater-class-spec', () => {
    it('execute', () => {
        let barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
        // let zipcode = barcodeToZipcode.barcodeToZipcode(barcode);
        let expected = {
            zipcode: '12345',
            type: true
        };
        expect(barcodeTranslater.execute(barcode)).toEqual(expected);
    });
});