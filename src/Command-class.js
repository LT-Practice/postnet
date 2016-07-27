let ZipcodeTranslater = require('../src/ZipcodeTranslater-class.js');
let BarcodeTranslater = require('../src/BarcodeTranslater-class.js');
class Command {
    constructor() {
    }

    mainCommand() {
        return {
            text: `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`
        };
    }

//#1.goToZipToBarcodePage
    goToZipToBarcodePage() {
        return {
            text: `Please input zip code:`,
            newMapping: {'*': this.transformZipToBarcodeCommand}
        };
    }

//#1.输入正确 & 输入错误
    transformZipToBarcodeCommand(zipcode) {
        let zipcodeTranslater = new ZipcodeTranslater();
        let coreResponse = zipcodeTranslater.zipcodeToBarcode(zipcode);
        // let coreResponse = translate (zipcode);

        if (coreResponse.type) {
            return {
                text: coreResponse.barcode,
                reset: true
            };
        } else {
            return {
                text: 'Please give right input:\n',
                next: this.goToZipToBarcodePage,
            }
        }
    }

//#2.goToBarToZipcodePage
    goToBarToZipcodePage() {
        return {
            text: `Please input bar code:`,
            newMapping: {'*': this.transformBarToZipcodeCommand}
        };

    }

//#2.right input & wrong input
    transformBarToZipcodeCommand(barcode) {
        let barcodeTranslater = new BarcodeTranslater();
        let coreResponse = barcodeTranslater.barcodeToZipcode(barcode);
        if (coreResponse.type) {
            return {
                text: coreResponse.zipcode,
                reset: true
            };
        } else {
            return {
                text: 'Please give right input:\n',
                next: this.goToBarToZipcodePage
                // reset: true
            };
        }
    }

//#3.quite
    quite() {
        return {
            text: 'Thanks for using',
            reset: true
        };
    }


//other input
    otherInput() {
        return {
            text: 'Please give right input:\n',
            next: this.mainCommand,
            reset: true
        };
    }

}

module.exports = Command;
