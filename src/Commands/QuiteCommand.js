class QuiteCommand {
    constructor() {
    }

    execute() {
        return {
            text: 'Thanks for using',
            next: false,
            reset: true,
            newMapping: null
        };
    }

}

module.exports = QuiteCommand;