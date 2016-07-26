// let translate = require('zipcode-barcode.js');
//mainCommand
function mainCommand() {
    return `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`;
}

//#1.goToZipToBarcodePage
function goToZipToBarcodePage() {
    return {
        text: `Please input zip code:`,
        reset: false,
        next: transformZipToBarcodeCommand
    };
}

//#1.输入正确 & 输入错误
function transformZipToBarcodeCommand(zipcode) {
    let coreResponse = zipcodeToBarcode(zipcode);
    // let coreResponse = translate (zipcode);

    if (coreResponse.type) {
        return {
            text: coreResponse.barcode,
            next: null,
            reset: true
        };
    } else {
        return {
            text: 'Please give right input',
            next: goToZipToBarcodePage,
            reset: false
        }
    }
}

//#2.goToBarToZipcodePage
function goToBarToZipcodePage() {
    return {
        text: `Please input bar code:`,
        reset: false,
        next: transformZipToBarcodeCommand
    };

}

//#2.right input & wrong input
function transformBarToZipcodeCommand(barcode) {
    let coreResponse = barcodeToZipcode(barcode);
    if (coreResponse.type) {
        return {
            text: coreResponse.zipcode,
            next: null,
            reset: true
        };
    } else {
        return {
            text: 'Please give right input',
            next: goToBarToZipcodePage,
            reset: true
        };
    }
}

//#3.quite
function quite() {
    return {
        text: 'Thanks for using.',
        next: null,
        reset: true
    };
}


//other input
function otherInput() {
    return {
        text: 'Please give right input',
        next: mainCommand,
        reset: true
    };
}