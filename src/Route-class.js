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
        // console.log(this.mapping);
        let command = this.mapping[input];
        let result = '';
        let response = '';
        if (command) {
            // console.log(123);
            response = command.execute(input);
            result += response.text;
        } else if (this.mapping['*']) {
            response = this.mapping['*'].execute(input);
            result += response.text;
        } else {
            return 'no command Please give right input:';
        }


        if (response.next) {
            let newResponse = '';
            do {
                newResponse = response.next.execute(input);
                result += newResponse.text;

            } while (newResponse.next);


        }
        if (response.newMapping) {
            this.mapping = response.newMapping;
        }

        if (response.reset) {
            this.reset();
        }

        return result;
    }

    //
    // route

    reset(){
        this.mapping = {
            '1': new GoToZipToBarcodePageCommand(),
            '2': new GoToBarToZipcodePageCommand(),
            '3': new QuiteCommand(),
            'main': new MainCommand()
        };
    };

}

module.exports = Route;
