// let BarcodeTranslater = require('../BarcodeTranslater-class.js');
let TransformBarToZipcodeCommand = require('./TransformBarToZipcodeCommand');
class GoToBarToZipcodePageCommand {
    constructor() {
    }

    execute() {
        let self = this;
        return {
            text: `Please input bar code:`,
            next:false,
            reset:false,
            // newMapping: {'*': BarcodeTranslater.transformBarToZipcodeCommand}
            newMapping: {'*': new TransformBarToZipcodeCommand(this)}

        };

    }
}

module.exports = GoToBarToZipcodePageCommand;