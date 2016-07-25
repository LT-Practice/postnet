describe('zipcode-barcode', function () {

    it('#5.checkZipcode', () => {
        let zipcode = '45056-1234';
        let checkedZipcode = checkZipcode(zipcode);
        let expected = {
            zipcode: '45056-1234',
            type: true
        };
        expect(checkedZipcode).toEqual(expected);

    });

    it('#6-1.formatZipcode', () => {
        let checkedZipcode = {
            zipcode: '45056-1234',
            type: true
        };
        let formattedZipcode = formatZipcode(checkedZipcode);
        let expected = '450561234';
        expect(formattedZipcode).toEqual(expected);

    });

    it('#6-2.buildZipcodeArray', () => {
        let formattedZipcode = '450561234';
        let zipcodeArray = buildZipcodeArray(formattedZipcode);
        let expected = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];
        expect(zipcodeArray).toEqual(expected);
    })


    it('#6-3.addCheckDigit', () => {
        let zipcodeArray = ['1', '2', '3', '4', '5'];
        let zipcodeArrayWithCheckDigit = addCheckDigit(zipcodeArray);
        let expected = ['1', '2', '3', '4', '5', '5'];
        expect(zipcodeArrayWithCheckDigit).toEqual(expected);
    });

    it('#6-4.matchBarcode', () => {
        let zipcodeArrayWithCheckDigit = ['1', '2', '3', '4', '5', '5'];
        let allCodes = loadAllCodes();
        let barcodeArray = matchBarcode(zipcodeArrayWithCheckDigit, allCodes);
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        expect(barcodeArray).toEqual(expected);
    })

    it('#7.buildBarcode', () => {
        let barcodeArray = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        let barcode = buildBarcodeArray(barcodeArray);
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(barcode).toEqual(expected);
    })
});

