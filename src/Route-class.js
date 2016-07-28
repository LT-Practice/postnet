// let commands = require('../src/command');
const MainCommand = require("./Commands/MainCommand-class");
const GoToZipToBarcodePageCommand = require('./Commands/GoToZipToBarcodePageCommand-class');
const GoToBarToZipcodePageCommand = require('./Commands/GoToBarToZipcodePageCommand');
const QuiteCommand = require('./Commands/QuiteCommand');
// let commands = new Command();

class Route {
    constructor() {
        this.mapping = {
            '1': new GoToZipToBarcodePageCommand(),
            '2': new GoToBarToZipcodePageCommand(),
            '3': new QuiteCommand(),
            'main': new MainCommand()
        };

    }


    execute(input) {
        let command = this.mapping[input];
        // console.log(command);
        let result = '';
        let response = '';
        if (command.execute(input)) {
            response = command.execute(input);
            result += response.text;
        } else if (this.mapping['*']) {
            response = this.mapping['*'](input);
            result += response.text;
        } else {
            return 'no command Please give right input:';
        }


        if (response.next) {
            let newResponse = '';
            do {
                newResponse = response.next(input);
                result += newResponse.text;

            } while (newResponse.next);


        }
        if (response.newMapping) {
            this.mapping = response.newMapping;
        }

        if (response.reset) {
            route.reset();
        }

        return result;
    }

    //
    // route

    // reset = function () {
    //     mapping = {
    //         '1': commands.goToZipToBarcodePage,
    //         '2': commands.goToBarToZipcodePage,
    //         '3': commands.quite,
    //         'main': commands.mainCommand
    //     };
    // };

}

module.exports = Route;
