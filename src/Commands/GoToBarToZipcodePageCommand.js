// let BarcodeTranslater = require('../BarcodeTranslater-class.js');
let CommandResponse = require('../CommandResponse.js');

let TransformBarToZipcodeCommand = require('./TransformBarToZipcodeCommand');
class GoToBarToZipcodePageCommand {
    constructor() {
    }

    execute() {
        let self = this;
        // return {
        //     text: `Please input bar code:`,
        //     next: false,
        //     reset: false,
        //     // newMapping: {'*': BarcodeTranslater.transformBarToZipcodeCommand}
        //     newMapping: {'*': new TransformBarToZipcodeCommand(this)}
        //
        // };
        let text = `Please input bar code:`;
        let newMapping = {'*': new TransformBarToZipcodeCommand(this)};

        return new CommandResponse(text, false, false, newMapping);


    }
}

module.exports = GoToBarToZipcodePageCommand;