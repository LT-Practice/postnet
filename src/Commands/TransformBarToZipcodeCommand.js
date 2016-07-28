let BarcodeTranslater = require('../BarcodeTranslater.js');
let CommandResponse = require('../CommandResponse.js');

class TransformBarToZipcodeCommand {
    constructor(next) {
        this.next = next;
    }

    execute(barcode) {
        let barcodeTranslater = new BarcodeTranslater();
        let coreResponse = barcodeTranslater.barcodeToZipcode(barcode);
        if (coreResponse.type) {
            let text = coreResponse._result;
            let next = false;
            let reset = true;
            let newMapping = null;

            return new CommandResponse(text, next, reset, newMapping);

        } else {
            // return {
            //     text: 'Please give right input:\n',
            //     next: this.next,
            //     reset: false,
            //     newMapping:null
            // };
            let text ='Please give right input:\n';
            let next = this.next;
            let reset = false;
            let newMapping = null;
            return new CommandResponse(text, next, reset, newMapping);

        }
    }
}

module.exports = TransformBarToZipcodeCommand;
