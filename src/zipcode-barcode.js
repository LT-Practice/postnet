//#5
function checkZipcode(zipcode) {
    //debugger;
    let formatCode = zipcode.replace(/-/g, '');
    if (formatCode.length === 5 || formatCode.length === 9) {
        return {zipcode, type: true};
    } else {
        return {zipcode, type: false};
    }
}


//#6-1
function formatZipcode(checkedZipcode) {
    return checkedZipcode.zipcode.replace(/-/g, '');
}


//#6-2
function buildZipcodeArray(formattedZipcode) {
    return formattedZipcode.split('');
}

//#6-3
function addCheckDigit(zipcodeArray) {
    let zipcodeNumbers = zipcodeArray.map(codeItem => parseInt(codeItem));
    let sumResult = _.sum(zipcodeNumbers);
    let checkDigit = sumResult % 10 != 0 ? (10 - sumResult % 10).toString() : (0).toString();
    zipcodeArray.push(checkDigit);
    return zipcodeArray;
}

//#6-4
function matchBarcode(zipcodeArrayWithCheckDigit,allCodes) {
    //debugger;
    return zipcodeArrayWithCheckDigit.map(zipcodeItem => allCodes.find(code =>code.key === zipcodeItem).digit);
}

//#7
