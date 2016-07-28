let MainCommand = require('../src/Commands/MainCommand-class.js');
let GoToZipToBarcodePageCommand = require('../src/Commands/GoToZipToBarcodePageCommand-class.js');
let TransformZipToBarcodeCommand = require('../src/Commands/TransformZipToBarcodeCommand.js');
let GoToBarToZipcodePageCommand = require('../src/Commands/GoToBarToZipcodePageCommand.js');
let TransformBarToZipcodeCommand = require('../src/Commands/TransformBarToZipcodeCommand.js');
let QuiteCommand = require('../src/Commands/QuiteCommand.js');
let OtherCommand = require('../src/Commands/OtherCommand.js');

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
    it('#1.wrong input', () => {
        let transformZipToBarcodeCommand = new TransformZipToBarcodeCommand();
        let zipcode = '2345';
        let result = transformZipToBarcodeCommand.execute(zipcode);
        let expected = {
            text: 'Please give right input:\n',
            next: transformZipToBarcodeCommand.goToZipToBarcodePage,
        };
        expect(result).toEqual(expected);
    });


    it('#2.goToBarToZipcodePage', () => {
        let goToBarToZipcodePageCommand = new GoToBarToZipcodePageCommand();
        let expected = {
            text: 'Please input bar code:',
            newMapping: {'*': goToBarToZipcodePageCommand.transformBarToZipcodeCommand}
        };
        expect(goToBarToZipcodePageCommand.execute()).toEqual(expected);
    });

    it('#2.right input', () => {
        let transformBarToZipcodeCommand = new TransformBarToZipcodeCommand();
        let barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
        let result = transformBarToZipcodeCommand.execute(barcode);
        let expected = {
            text: '12345',
            reset: true
        };
        expect(result).toEqual(expected);
    });

    it('#3.quite', () => {
        let quiteCommand = new QuiteCommand();
        let expected = {
            text: 'Thanks for using',
            reset: true
        };
        expect(quiteCommand.execute()).toEqual(expected);
    });

    it('#other input', () => {
        let otherCommand = new OtherCommand();
        let mainCommand = new MainCommand();

        let expected = {
            text: 'Please give right input:\n',
            next: mainCommand.execute(),
            reset: true
        };
        expect(otherCommand.execute()).toEqual(expected);
    });

});