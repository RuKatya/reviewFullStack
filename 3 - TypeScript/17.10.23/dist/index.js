// if the var is string -> var:string
// if the var is string in Array -> var:string[]
var word1 = ['ab', 'c'], word2 = ['a', 'bc'];
// console.log(word1, word2)
// console.log(word1[0])
var equalFun = function (word1, word2) {
    /* Option one*/
    // word1[0] //"ab"
    // word1[1] //"c"
    // "ab" + "c"
    var wordFirst = word1[0] + word1[1];
    // console.log(word)
    var wordSecond = word2[0] + word2[1];
    // if (wordFirst === wordSecond) {
    //     return true;
    // }
    // return false;
    /* Option two*/
    // const one: string = word1.join('')
    // // console.log(one)
    // const two: string = word2.join('')
    // if (one === two) {
    //     return true
    // }
    // return false
    /* Option three*/
    var someWord1 = '';
    var someWord2 = '';
    for (var index = 0; index < word1.length; index++) {
        var element1 = word1[index]; // ab,c
        // console.log(element1);
        someWord1 += element1;
        // console.log(`${index} runing: ${someWord1}`)
        var element2 = word2[index];
        someWord2 += element2;
        // console.log(`${index} runing: ${someWord2}`)    
    }
    if (someWord1 === someWord2) {
        return true;
    }
    return false;
};
console.log(equalFun(word1, word2));
// לעשות בהשוואה בין שני מערכים כאשר האורך של המערכים אינו שווה (קצר/ארוך)
// אורך הסטרינג בתוך האינדקס הספציפי יכול להיות שונה
//["a","b","c"]
//["ab","c"]
//["hello"]
//["he","ll","o"]
//FOR
