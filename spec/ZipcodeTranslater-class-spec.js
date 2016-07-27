let ZipcodeTranslater = require('../src/ZipcodeTranslater-class.js');
// var allCodes = require('../src/codes');


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

});