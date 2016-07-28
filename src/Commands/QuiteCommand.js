let CommandResponse = require('../CommandResponse.js');
class QuiteCommand {
    constructor() {
    }

    execute() {
        // return {
        //     text: 'Thanks for using',
        //     next: false,
        //     reset: true,
        //     newMapping: null
        // };
        let text = 'Thanks for using';
        let next = false;
        let reset = true;
        let newMapping = null;

        return new CommandResponse(text, next, reset, newMapping);

    }

}

module.exports = QuiteCommand;