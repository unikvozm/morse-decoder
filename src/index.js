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
    let output = '';
    for (let i = 0; i < expr.length; i += 10) {
        let char = expr.slice(i, i + 10);
        if (char === '**********') {
            output += ' ';
        } 
        else {
            let symbols = '';
            for (let j = 0; j < 10; j += 2) {
                let symb = char.slice(j, j + 2).replace('00', '').replace('10', '.').replace('11', '-');
                symbols += symb;
            }
            output += MORSE_TABLE[symbols];
        }
    }
    return output;
}

module.exports = {
    decode
}