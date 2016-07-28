let BarcodeTranslater = require('../BarcodeTranslater-class.js');
class GoToBarToZipcodePageCommand {
    constructor() {
    }

    execute() {
        return {
            text: `Please input bar code:`,
            newMapping: {'*': BarcodeTranslater.transformBarToZipcodeCommand}
        };

    }
}

module.exports = GoToBarToZipcodePageCommand;