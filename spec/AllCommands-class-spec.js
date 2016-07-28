let MainCommand = require('../src/Commands/MainCommand-class.js');
let GoToZipToBarcodePageCommand = require('../src/Commands/GoToZipToBarcodePageCommand-class.js');
let TransformZipToBarcodeCommand = require('../src/Commands/TransformZipToBarcodeCommand.js');

describe('AllCommands-class-spec', () => {
    it('mainCommand', () => {
        let mainCommand = new MainCommand();

        let expected = {
            text: `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`
        };
        expect(mainCommand.execute()).toEqual(expected);
    });

    it('#1.goToZipToBarcodePageCommand', () => {
        let goToZipToBarcodePageCommand = new GoToZipToBarcodePageCommand();
        let expected = {
            text: 'Please input zip code:',
            newMapping: {'*': goToZipToBarcodePageCommand.transformZipToBarcodeCommand}
        };
        expect(goToZipToBarcodePageCommand.execute()).toEqual(expected);
    });

    it('#1.right input', () => {
        let transformZipToBarcodeCommand = new TransformZipToBarcodeCommand();
        let zipcode = '12345';
        let result = transformZipToBarcodeCommand.execute(zipcode);
        let expected = {
            text: '|:::||::|:|::||::|::|:|:|::|:|:|',
            reset: true
        };
        expect(result).toEqual(expected);
    });


});