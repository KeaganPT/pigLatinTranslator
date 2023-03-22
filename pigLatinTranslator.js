// var string = 'myString';
// var newString = string.replace(string.charAt(0),'L');
// console.log(newString);



//* correctly sorts a word according to the rules of pig latin 
function pigTranslateWord(phrase) {
    var newPhrase = '';

    if(phrase.charAt(0) !== 'a' && phrase.charAt(0) !== 'e' && phrase.charAt(0) !== 'i' && phrase.charAt(0) !== 'o' && phrase.charAt(0) !== 'u' ){
        if(phrase.charAt(1) !== 'a' && phrase.charAt(1) !== 'e' && phrase.charAt(1) !== 'i' && phrase.charAt(1) !== 'o' && phrase.charAt(1) !== 'u' ) { //&& 'A' && 'E' && 'I' && 'O' && 'U' //!wont accept capital letters right now need to find out case insensitive
             newPhrase = phrase + phrase.charAt(0) + phrase.charAt(1) + 'ay';
            for(var i = 0; i <= 1; i++){
                newPhrase = newPhrase.replace(newPhrase.charAt(0), '');
            }
                console.log(newPhrase, '(2 const)');
                // console.log(phrase.charAt(0))
                return newPhrase;
        } else {
            newPhrase = phrase + phrase.charAt(0) + 'ay';
            newPhrase = newPhrase.replace(newPhrase.charAt(0), '')
            // console.log(newPhrase, '(1 const 1 vow)');
            return newPhrase;
        }
    } else {
        newPhrase = phrase + "way";
        // console.log(newPhrase, '(vow start)');
        return newPhrase;
    }
}

//goal 'tringsay'
// pigTranslateWord('string');
// pigTranslateWord('wanted');
// pigTranslateWord('aviator');
// pigTranslateWord('ier')

//need to find a way to check a sentence and seperate the words to translate
var testPhrase = 'i went to the store ';


function pigTransPhrase(sentance) {
    sentance = sentance + ' ';
    var newTestPhrase = '';
    var newWord =  '';
    
    for(i = 0; i < sentance.length; i++){
    
        if(sentance.charAt(i) !== ' '){
            
            newWord += sentance.charAt(i);
            
        } else {
            newTestPhrase += pigTranslateWord(newWord) + ' ';
            // console.log(newTestPhrase)
            
            newWord = ''
        }
    }
    console.log(newTestPhrase)
    return newTestPhrase;
}

//

pigTransPhrase('i like big butts and i cannot lie');
document.querySelectorAll('p.sampleClass')[0].innerText = pigTransPhrase('testing the command');