let MainCommand = require('./MainCommand-class');

class OtherCommand {

    constructor() {
    }

    execute() {
        let mainCommand = new MainCommand();
        return {
            text: 'Please give right input:\n',
            next: mainCommand.execute(),
            reset: true
        };
    }
}

module.exports = OtherCommand;