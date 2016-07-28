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
                    next:false,
                    reset: true,
                    newMapping:null
                };
            } else {
                return {
                    text: 'Please give right input:\n',
                    next: this.goToZipToBarcodePage,
                    reset:false,
                    newMapping:null
                }
            }
    }
}

module.exports = TransformZipToBarcodeCommand;