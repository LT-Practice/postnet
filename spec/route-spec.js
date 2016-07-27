let route = require('../src/route');
describe('route-spec', () => {

    beforeEach(() => {
        route.reset();
    });
    it('start', () => {
        let response = route('main');
        let expected = `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`;
        expect(response).toEqual(expected)
    });


    it('input 1 goToZipToBarcodePage', () => {
        let response = route('1');
        let expected = `Please input zip code:`;
        expect(response).toEqual(expected);
    });

    it('input 12345 to trnsformZipToBarcodeCommand right', () => {
        route('1');
        let response = route('12345');
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|';

        expect(response).toEqual(expected);
    });

    it('input 1234 to transformZipToBarcodeCommand wrong', () => {
        route('1');
        let response = route('1234');
        let expected = 'Please give right input:\nPlease input zip code:';
        expect(response).toEqual(expected);
    });


    it('input 2 goToBarToZipcodePage', () => {
        let response = route('2');
        let expected = `Please input bar code:`;
        expect(response).toEqual(expected);
    });

    it('input a right barcode', () => {
        route('2');
        let response = route('|:::||::|:|::||::|::|:|:|::|:|:|');
        let expected = '12345';
        expect(response).toEqual(expected);
    });

    it('input zipcode to transformZipToBarcodeCommand wrong', () => {
        route('2');
        let response = route('|:::||::|:|::||::|::|:|:|::');
        let expected = 'Please give right input:\nPlease input bar code:';
        expect(response).toEqual(expected);
    });

    it('input other', () => {
        let response = route('6');
        let expected = 'no command Please give right input:';
        expect(response).toEqual(expected);
    });

    it('quit', () => {
        let response = route('3');
        let expected = 'Thanks for using';
        expect(response).toEqual(expected);
    });

    it('input 12345 to trnsformZipToBarcodeCommand right', () => {
        route('2');
        let response = route('|:::||::|:|::||::|::|:|:|::|:|:|');
        let expected = '12345';

        expect(response).toEqual(expected);
    });

    it('input 3 goToZipToBarcodePage', () => {
        let response = route('3');
        let expected = 'Thanks for using';

        expect(response).toEqual(expected);
    });


});