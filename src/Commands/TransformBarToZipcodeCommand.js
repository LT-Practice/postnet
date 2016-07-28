let BarcodeTranslater = require('../BarcodeTranslater-class.js');
class TransformBarToZipcodeCommand {
    constructor() {
    }

    execute(barcode) {
        let barcodeTranslater = new BarcodeTranslater();
        let coreResponse = barcodeTranslater.barcodeToZipcode(barcode);
        if (coreResponse.type) {
            return {
                text: coreResponse._result,
                reset: true
            };
        } else {
            return {
                text: 'Please give right input:\n',
                next: BarcodeTranslater.goToBarToZipcodePage
                // reset: true
            };
        }
    }
}

module.exports = TransformBarToZipcodeCommand