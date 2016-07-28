// let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
let TransformZipToBarcodeCommand = require('./TransformZipToBarcodeCommand');
let CommandResponse = require('../CommandResponse.js');


class GoToZipToBarcodePageCommand {
    constructor() {
    }

    execute() {
        let self = this;
        // return {
        //     text: `Please input zip code:`,
        //     next:false,
        //     reset:false,
        //     // newMapping: {'*': ZipcodeTranslater.transformZipToBarcodeCommand}
        //     newMapping: {'*': new TransformZipToBarcodeCommand(this)}
        // };
        let text = `Please input zip code:`;
        let next = false;
        let reset = false;
        let newMapping = {'*': new TransformZipToBarcodeCommand(this)};
        return new CommandResponse(text, next, reset, newMapping);

    }
}

module.exports = GoToZipToBarcodePageCommand;


// Expected Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: GoToZipToBarcodePageCommand({  }) }) }) })
// to equal Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: GoToZipToBarcodePageCommand({  }) }) }) }) }) }) }).
