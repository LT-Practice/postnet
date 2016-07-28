let Command = require('../src/Command-class.js');
// let commands = require('../src/Command.js');
// let Command = require('../src/Command-class.js');
let commands = new Command();
class Route {
    constructor() {
        this.mapping = {
            '1': commands.goToZipToBarcodePage,
            '2': commands.goToBarToZipcodePage,
            '3': commands.quite,
            'main': commands.mainCommand
        };

    }


    execute(input) {
        let command = this.mapping[input];
        let result = '';
        let response = '';
        if (command) {
            response = command(input);
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

        // if (response.reset) {
        //     route.reset();
        // }


        return result;
    }

    //
    // route
    //
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