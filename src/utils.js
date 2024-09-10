/**
 * Метод для дешифровки строки, зашифрованной с помощью ROT13
 * @param str - зашифрована строка, только заглавные буквы латинского алфавита
 * @returns {*} - расшифрован строка
 */

const a  = 'abcdefghijklmnopqrstuvwxyz'

function newSymbol(letter) {
    let aIndex = a.indexOf(letter)

    if(aIndex + 13 >= 26) {
        return a[aIndex + 13 - a.length]
    }
    return a[aIndex + 13]
}

export function decodeROT13(str) {
    let newS = ''
    for (let i = 0; i < str.length; i++) {
        newS = newS +  newSymbol(str[i])
    }
    return newS.toUpperCase();
}

