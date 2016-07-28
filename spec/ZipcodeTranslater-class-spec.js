let ZipcodeTranslater = require('../src/ZipcodeTranslater-class.js');
// var allCodes = require('../src/codes');
let  CoreResponse = require('../src/CoreResponse');



let transtlater = new ZipcodeTranslater();
describe('ZipcodeTranslater-class-spec', () => {
    it('execute', () => {
        let zipcode = '12345';
        // let barcode = zipToBarcode.zipcodeToBarcode(zipcode);
        // let expected = {
        //     barcode: '|:::||::|:|::||::|::|:|:|::|:|:|',
        //     type: true
        // };
        let expected = new CoreResponse('12345',true)
        expect(transtlater.execute(zipcode)).toEqual(expected);
    });

});