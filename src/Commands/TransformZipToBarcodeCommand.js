let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
let CommandResponse = require('../CommandResponse.js');

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
                let text = coreResponse._result;
                let next = false;
                let reset = true;
                let newMapping = null;

                return new CommandResponse(text,next,reset,newMapping);

            } else {
                // return {
                //     text: 'Please give right input:\n',
                //     // next: this.goToZipToBarcodePage,
                //     next: this.next,
                //     reset:false,
                //     newMapping:null
                //

                let text =  'Please give right input:\n';
                let next =  this.next;
                let reset = false;
                let newMapping = null;
                return new CommandResponse(text,next,reset,newMapping);


            }
    }
}

module.exports = TransformZipToBarcodeCommand;
