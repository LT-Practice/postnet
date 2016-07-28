let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
class GoToZipToBarcodePageCommand{
    constructor(){}
    execute() {
        return {
            text: `Please input zip code:`,
            newMapping: {'*': ZipcodeTranslater.transformZipToBarcodeCommand}
        };
    }
}

module.exports = GoToZipToBarcodePageCommand;