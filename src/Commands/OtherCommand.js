let MainCommand = require('./MainCommand-class');
let CommandResponse = require('../CommandResponse.js');


class OtherCommand {

    constructor() {
    }

    execute() {
        let mainCommand = new MainCommand();
        let text= 'Please give right input:\n';
        let next= mainCommand.execute();

        // return {
        //     text: 'Please give right input:\n',
        //     next: mainCommand.execute(),
        //     reset: true,
        //     newMapping:null
        // };
        return new CommandResponse(text, next, true, null);
    }
}

module.exports = OtherCommand;