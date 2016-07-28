let commands = require('./command');
const MainCommand = require("./Commands/MainCommand-class");
const goToZipToBarcodePage = require("./Commands/GoToZipToBarcodePageCommand-class");

let mapping = {
    '1': goToZipToBarcodePage.goToZipToBarcodePage,
    '2': commands.goToBarToZipcodePage,
    '3': commands.quite,
    'main': new MainCommand()
};
function executeCommand(command, input) {
    if (command.execute) {
        return command.execute(input);
    } else {
        return command(input);
    }
}
function route(input) {
    let command = mapping[input];
    let result = '';
    let response = '';
    if (command) {
        response = executeCommand(command, input);
        result += response.text;
    } else if (mapping['*']) {
        command = mapping['*'];
        response = executeCommand(command, input);
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
        mapping = response.newMapping;
    }

    if (response.reset) {
        route.reset();
    }

    return result;
}


route.reset = function () {
    mapping = {
        '1': goToZipToBarcodePage.goToZipToBarcodePage,
        '2': commands.goToBarToZipcodePage,
        '3': commands.quite,
        'main': new MainCommand()
    };
};

module.exports = route;