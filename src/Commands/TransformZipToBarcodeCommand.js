let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
class TransformZipToBarcodeCommand {
    constructor(next) {
        this.next = next;
    }

    execute(zipcode) {
            let zipcodeTranslater = new ZipcodeTranslater();
            // let coreResponse = zipcodeTranslater.zipcodeToBarcode(zipcode);
            let coreResponse = new ZipcodeTranslater().zipcodeToBarcode(zipcode);
            // let coreResponse = translate (zipcode);
            if (coreResponse.type) {
                return {
                    text: coreResponse._result,
                    next:false,
                    reset: true,
                    newMapping:null
                };
            } else {
                return {
                    text: 'Please give right input:\n',
                    // next: this.goToZipToBarcodePage,
                    next: this.next,
                    reset:false,
                    newMapping:null
                }
            }
    }
}

module.exports = TransformZipToBarcodeCommand;

// Expected Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Function }) }) })
// to equal Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Function }) }) }) }) }) }).