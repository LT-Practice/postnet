let ZipcodeTranslater = require('../ZipcodeTranslater-class.js');
let BarcodeTranslater = require('../BarcodeTranslater-class.js');
class MainCommand {
    constructor() {
    }

    execute() {
        return {
            text: `
1. Translate zip code to bar code
2. Translate ar code to zip code
3. Quitb
Please input your choices(1~3)`,
            next:false,
            reset:false,
            newMapping:null
        };
    }


}

module.exports = MainCommand;
