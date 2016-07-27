let commands = require('./command');
let mapping = {
    '1': commands.goToZipToBarcodePage,
    '2': commands.goToBarToZipcodePage,
    '3': commands.quite,
    'main': commands.mainCommand
};
function route(input) {
    let command = mapping[input];
    let result = '';
    let response = '';
    if (command) {
        response = command(input);
        result += response.text;
    } else if (mapping['*']) {
        response = mapping['*'](input);
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
        '1': commands.goToZipToBarcodePage,
        '2': commands.goToBarToZipcodePage,
        '3': commands.quite,
        'main': commands.mainCommand
    };
};

module.exports = route;