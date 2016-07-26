describe('command-spec', function () {
    it('mainCommand', () => {

        let expected = `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`;
        expect(mainCommand()).toEqual(expected);
    });


    it('#1.goToZipToBarcodePage', () => {
        let expected = {
            text: `Please input zip code:`,
            reset: false,
            next: transformZipToBarcodeCommand
        };
        expect(goToZipToBarcodePage()).toEqual(expected);
    });


    it('#1.right input', () => {
        let zipcode = '12345';
        let result = transformZipToBarcodeCommand(zipcode);
        let expected = {
            text: '|:::||::|:|::||::|::|:|:|::|:|:|',
            next: null,
            reset: true
        };
        expect(result).toEqual(expected);
    });


    it('#1.wrong input', () => {
        let zipcode = '2345';
        let result = transformZipToBarcodeCommand(zipcode);
        let expected = {
            text: 'Please give right input',
            next: goToZipToBarcodePage,
            reset: false
        };
        expect(result).toEqual(expected);
    });

    it('#2.goToBarToZipcodePage', () => {
        let expected = {
            text: `Please input bar code:`,
            reset: false,
            next: transformZipToBarcodeCommand
        };
        expect(goToBarToZipcodePage()).toEqual(expected);
    });

    it('#2.right input', () => {
        let barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
        let result = transformBarToZipcodeCommand(barcode);
        let expected = {
            text: '12345',
            next: null,
            reset: true
        };
        expect(result).toEqual(expected);
    });

    it('#2.wrong input', () => {
        let barcode = '|::|:|::||::|::|:|:|::|:|:|';
        let result = transformBarToZipcodeCommand(barcode);
        let expected = {
            text: 'Please give right input',
            next: goToBarToZipcodePage,
            reset: true
        };
        expect(result).toEqual(expected);
    });

    it('#3.quite', () => {
        let expected = {
            text: 'Thanks for using.',
            next: null,
            reset: true
        };
        expect(quite()).toEqual(expected);
    })

    it('#other input', () => {
        let expected = {
            text: 'Please give right input',
            next: mainCommand,
            reset: true
        };
        expect(otherInput()).toEqual(expected);
    });
});


