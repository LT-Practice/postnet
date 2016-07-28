let MainCommand = require('../src/Commands/MainCommand-class.js');
let GoToZipToBarcodePageCommand = require('../src/Commands/GoToZipToBarcodePageCommand-class.js');
let TransformZipToBarcodeCommand = require('../src/Commands/TransformZipToBarcodeCommand.js');
let GoToBarToZipcodePageCommand = require('../src/Commands/GoToBarToZipcodePageCommand.js');
let TransformBarToZipcodeCommand = require('../src/Commands/TransformBarToZipcodeCommand.js');
let QuiteCommand = require('../src/Commands/QuiteCommand.js');
let OtherCommand = require('../src/Commands/OtherCommand.js');
let CommandResponse = require('../src/CommandResponse.js');

xdescribe('AllCommands-class-spec', () => {
    it('mainCommand', () => {
        let mainCommand = new MainCommand();
        let text = `
1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3)`,
//
//         let expected = {
//             text: `
// 1. Translate zip code to bar code
// 2. Translate bar code to zip code
// 3. Quit
// Please input your choices(1~3)`,
//             next: false,
//             reset: false,
//             newMapping: null
//         };
            expected = new CommandResponse(text, false, false, null);
        expect(mainCommand.execute()).toEqual(expected);
    });

    it('#1.goToZipToBarcodePageCommand', () => {
        let goToZipToBarcodePageCommand = new GoToZipToBarcodePageCommand();
        let expected = {
            text: 'Please input zip code:',
            next: false,
            reset: false,
            // newMapping: {'*': goToZipToBarcodePageCommand.transformZipToBarcodeCommand}
            // newMapping: {'*': goToZipToBarcodePageCommand.transformZipToBarcodeCommand}
            // newMapping: {'*':new TransformZipToBarcodeCommand(goToZipToBarcodePageCommand.execute())}

            newMapping: {'*':new TransformZipToBarcodeCommand(goToZipToBarcodePageCommand)}
        };
        console.log(expected);
        expect(goToZipToBarcodePageCommand.execute()).toEqual(expected);
    });

    it('#1.right input', () => {
        let transformZipToBarcodeCommand = new TransformZipToBarcodeCommand();
        let zipcode = '12345';
        let result = transformZipToBarcodeCommand.execute(zipcode);
        let expected = {
            text: '|:::||::|:|::||::|::|:|:|::|:|:|',
            next: false,
            reset: true,
            newMapping: null
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
            reset: false,
            newMapping: null
        };
        expect(result).toEqual(expected);
    });


    it('#2.goToBarToZipcodePage', () => {
        let goToBarToZipcodePageCommand = new GoToBarToZipcodePageCommand();
        let expected = {
            text: 'Please input bar code:',
            next: false,
            reset: false,
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
            next: false,
            reset: true,
            newMapping: null
        };
        expect(result).toEqual(expected);
    });

    it('#2.wrong input', () => {
        let transformBarToZipcodeCommand = new TransformBarToZipcodeCommand();
        let barcode = '|::|:|::||::|::|:|:|::|:|:|';
        let result = transformBarToZipcodeCommand.execute(barcode);
        let expected = {
            text: 'Please give right input:\n',
            next: transformBarToZipcodeCommand.goToBarToZipcodePage,
            reset: false,
            newMapping: null
        };
        // console.log(expected);
        expect(result).toEqual(expected);
    });

    it('#3.quite', () => {
        let quiteCommand = new QuiteCommand();
        let expected = {
            text: 'Thanks for using',
            next: false,
            reset: true,
            newMapping: null
        };
        expect(quiteCommand.execute()).toEqual(expected);
    });

    it('#other input', () => {
        let otherCommand = new OtherCommand();
        let mainCommand = new MainCommand();

        // let expected = {
        //     text: 'Please give right input:\n',
        //     next: mainCommand.execute(),
        //     reset: true,
        //     newMapping: null
        // };
        //

        let text = 'Please give right input:\n';
        let next = mainCommand.execute();
        let reset =true;
        let expected = new CommandResponse(text, next, reset, null);
        expect(otherCommand.execute()).toEqual(expected);
    });

});