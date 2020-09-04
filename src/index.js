/*

Author : Valentine Elum
For : Desyn Open Source
Twitter : @VahlCode
License : MIT License 

*/

const inkmbt = (number) => {
    if (number > 999 && number <= 999999) {
        let output = Math.floor(number/1000)+'k';
        return output;
    } else if (number > 999999 && number <= 999999999) {
        let output = Math.floor(number / 1000000)+'M';
        return output;
    } else if (number > 999999999 && number <= 999999999999) {
        let output = Math.floor(number / 1000000000) +'B';
        return output;
    } else if (number > 999999999999) {
        let output = Math.floor(number / 1000000000000) + 'T';
        return output;
    } else {
        return number;
    }
}

export default inkmbt;