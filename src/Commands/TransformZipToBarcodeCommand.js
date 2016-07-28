let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
class TransformZipToBarcodeCommand {
    constructor() {
    }

    execute(zipcode) {
            let zipcodeTranslater = new ZipcodeTranslater();
            let coreResponse = zipcodeTranslater.zipcodeToBarcode(zipcode);
            // let coreResponse = translate (zipcode);
            if (coreResponse.type) {
                return {
                    text: coreResponse._result,
                    reset: true
                };
            } else {
                return {
                    text: 'Please give right input:\n',
                    next: this.goToZipToBarcodePage,
                }
            }
    }
}

module.exports = TransformZipToBarcodeCommand;