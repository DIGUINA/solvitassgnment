function vowelRemove(str){
 
    return str.replace(/[aeoui]/gi, '');
}
let nom=vowelRemove('djibbe christian');
console.log(nom);