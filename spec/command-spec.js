// let command = require('../src/command');
// describe('command-spec', function () {
//     it('mainCommand', () => {
//
//         let expected = {
//             text:`
// 1. Translate zip code to bar code
// 2. Translate ar code to zip code
// 3. Quitb
// Please input your choices(1~3)`
//         };
//         expect(command.mainCommand()).toEqual(expected);
//     });
//
//
//     it('#1.goToZipToBarcodePage', () => {
//         let expected = {
//             text: 'Please input zip code:',
//             newMapping: {'*':command.transformZipToBarcodeCommand}
//
//         };
//         expect(command.goToZipToBarcodePage()).toEqual(expected);
//     });
//
//
//     it('#1.right input', () => {
//         let zipcode = '12345';
//         let result = command.transformZipToBarcodeCommand(zipcode);
//         let expected = {
//             text: '|:::||::|:|::||::|::|:|:|::|:|:|',
//             reset: true
//         };
//         expect(result).toEqual(expected);
//     });
//
//
//     it('#1.wrong input', () => {
//         let zipcode = '2345';
//         let result = command.transformZipToBarcodeCommand(zipcode);
//         let expected = {
//             text: 'Please give right input:\n',
//             next: command.goToZipToBarcodePage,
//         };
//         expect(result).toEqual(expected);
//     });
//
//     it('#2.goToBarToZipcodePage', () => {
//         let expected = {
//             text: 'Please input bar code:',
//             newMapping: {'*':command.transformBarToZipcodeCommand}
//         };
//         expect(command.goToBarToZipcodePage()).toEqual(expected);
//     });
//
//     it('#2.right input', () => {
//         let barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
//         let result = command.transformBarToZipcodeCommand(barcode);
//         let expected = {
//             text: '12345',
//             reset: true
//         };
//         expect(result).toEqual(expected);
//     });
//
//     it('#2.wrong input', () => {
//         let barcode = '|::|:|::||::|::|:|:|::|:|:|';
//         let result = command.transformBarToZipcodeCommand(barcode);
//         let expected = {
//             text: 'Please give right input:\n',
//             next: command.goToBarToZipcodePage
//             // reset: true
//         };
//         expect(result).toEqual(expected);
//     });
//
//     it('#3.quite', () => {
//         let expected = {
//             text: 'Thanks for using',
//             reset: true
//         };
//         expect(command.quite()).toEqual(expected);
//     })
//
//     it('#other input', () => {
//         let expected = {
//             text: 'Please give right input:\n',
//             next: command.mainCommand,
//             reset: true
//         };
//         expect(command.otherInput()).toEqual(expected);
//     });
// });
//
//
