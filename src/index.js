const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrNumber = [];
    let wordElement = '';
    let resultString = '';

    for (let i = 0; i < expr.length; i += 10) {
        arrNumber.push(expr.slice(i, i + 10));
    }

    arrNumber.map(item => {
        if (item == '**********') {
            resultString += ' ';
        } else {
            let resultWord = '';
            for (let j = 0; j < item.length; j += 2) {
                wordElement = item.slice(j, j + 2);
                switch (wordElement) {
                    case '10':
                        resultWord += '.';
                        break;
                    case '11':
                        resultWord += '-';
                        break;
                    default:
                        break;
                }
            }
            resultString += MORSE_TABLE[resultWord];
        }
    });

    return resultString;
}

module.exports = {
    decode
}