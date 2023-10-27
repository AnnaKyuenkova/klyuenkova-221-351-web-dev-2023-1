'use strict'
function cesar(str, shift, action) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        let isLetter = alphabet.includes(char);

        if (!isLetter) {
            result += char;
            continue;
      }

        let index = alphabet.indexOf(char);
        let newIndex = 0;

        if (action === 'encode') 
        {
            newIndex = (index + shift) % alphabet.length;
        } 
        else if (action === 'decode') 
        {
            newIndex = (index - shift + alphabet.length) % alphabet.length;
        }
        result += alphabet[newIndex];
    }
    return result;
}
let encryptedMessage = "эзтыхз фзъзъз";
let decryptedMessage = cesar(encryptedMessage, 8, 'decode');
console.log(decryptedMessage);

// ответ: хакуна матата (ключ 8)