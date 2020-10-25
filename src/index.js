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
    const exprArray = expr.match(/(\d{10})|(\*{10})/g);
    let letterArray = [];
    let morseArray = []; morseArrayDecoded = [];
    let strDecoded = '';
    // function howTo(m){
      // return MORSE_TABLE[m];  // Возвращает значение ключа `m` в объекте `MORSE_TABLE`
    // };
    for (let i = 0; i < exprArray.length; i++ ) {
      letterArray[i] = exprArray[i].match(/(\d{2})|(\*{2})/g);
      morseArray[i] = '';
      for (let j = 0; j < letterArray[i].length; j++ ) {
        if (letterArray[i][j] === '**') {
          morseArray[i] = '*';
          break;
        } else {
            switch (letterArray[i][j]) {
                case '10': {
                  morseArray[i] += '.';
                  break;
                };
                case '11': {
                  morseArray[i] += '-';
                  break;
                };
            };
        };
      };
    };
    for (let i = 0; i < morseArray.length; i++ ) { 
      if (morseArray[i] === '*') {
        morseArrayDecoded[i] = ' ';
      } else {
        morseArrayDecoded[i] = morseArray[i].replace(/.+/g, m => MORSE_TABLE[m]);
      };
    };    
    strDecoded = morseArrayDecoded.join('');
    return (strDecoded); 
}

module.exports = {
    decode
}