let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
let CommandResponse = require('../CommandResponse.js');

// let BarcodeTranslater = require('../BarcodeTranslater-class.js');
class MainCommand {
    constructor() {
    }

    execute() {
        let text = `
1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3)`;

        let next = false;
        let reset = false;
        let newMapping = null;
        return new CommandResponse(text, next, reset, null);

    }


}

module.exports = MainCommand;
