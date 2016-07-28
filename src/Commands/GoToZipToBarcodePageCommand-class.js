// let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
let TransformZipToBarcodeCommand = require('./TransformZipToBarcodeCommand');

class GoToZipToBarcodePageCommand{
    constructor(){}
    execute() {
        let self =this;
        return {
            text: `Please input zip code:`,
            next:false,
            reset:false,
            // newMapping: {'*': ZipcodeTranslater.transformZipToBarcodeCommand}
            newMapping: {'*': new TransformZipToBarcodeCommand(this)}
        };
    }
}

module.exports = GoToZipToBarcodePageCommand;



// Expected Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: GoToZipToBarcodePageCommand({  }) }) }) })
// to equal Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: GoToZipToBarcodePageCommand({  }) }) }) }) }) }) }).
