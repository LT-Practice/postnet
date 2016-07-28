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


// Expected Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: Function }) }) })
// to equal Object({ text: 'Please input zip code:', next: false, reset: false, newMapping: Object({ *: TransformZipToBarcodeCommand({ next: undefined }) }) }).
    // Stack: