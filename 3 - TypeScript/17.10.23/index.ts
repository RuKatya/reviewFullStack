// if the var is string -> var:string
// if the var is string in Array -> var:string[]
const word1: string[] = ['ab', 'c'],
  word2: string[] = ['a', 'bc'];
// console.log(word1, word2)
// console.log(word1[0])

const equalFun = (word1: string[], word2: string[]): boolean => {
  /* Option one*/
  // word1[0] //"ab"
  // word1[1] //"c"
  // "ab" + "c"

  const wordFirst: string = word1[0] + word1[1];
  // console.log(word)
  const wordSecond: string = word2[0] + word2[1];

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
  let someWord1: string = '';
  let someWord2: string = '';

  for (let index: number = 0; index < word1.length; index++) {
    const element1: string = word1[index]; // ab,c
    // console.log(element1);
    someWord1 += element1;
    // console.log(`${index} runing: ${someWord1}`)

    const element2: string = word2[index]
    someWord2 += element2
    // console.log(`${index} runing: ${someWord2}`)    
  }

  if (someWord1 === someWord2) {
      return true
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

