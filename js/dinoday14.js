const decimaToBiner=(angka)=>{
    var newarr=[]
    do{
        var sisa=angka%2
        newarr.push(sisa)
        // console.log(angka)
        angka/=2
        angka=Math.floor(angka)
    }while(angka>0)
    return newarr.reverse().join('')
}
// console.log(decimaToBiner(50))
// var angka=50
// var newarr=[]
// for(var i=angka;i>0;i=Math.floor(i/2)){
//     var sisa=i%2
//     newarr.push(sisa)
    // console.log(angka)
    // angka/=2
    // angka=Math.floor(angka)
// }
// console.log(newarr.reverse().join(''))

const minMax=(arr=[],cond)=>{
    arr.sort((a,b)=>a-b)
    if(cond=='min'){
        return arr[0]
    }else{
        return arr[arr.length-1]
    }
}
// console.log(minMax([200,1,0.2,3,45,6,3,45,6],'max'))


// const testcb=(bebas)=>{
//     var a=bebas()
//     return 'ini '+a 
// }
// const cb1=()=>{
//     return 'bobi'
// }
// const cb2=()=>{
//     return 'ragiel'
// }
// console.log(testcb(()=> 'fakhran'))


const repeat=(a=['z','b','x','a','a'])=>{
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
                return a[i]
            }
        }
    }
}

// console.log(repeat())
const Palindrome = (kata) => {
    const karakter =kata.toLowerCase().replace(/[^a-z]/g, '').split('');
    // console.log(karakter)
    if (karakter.join('') ===
        karakter.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
const hasil = Palindrome("madam, i'm adam");
// console.log(hasil);

const reverseWords = (string) => {
    const wordsArr = string.split(' ');
    console.log(wordsArr)
    let reversedWordsArr = []; 
    wordsArr.map((word) => {
        let reversedWord = ''; 
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
            console.log(reversedWord)
        } 
        reversedWordsArr.push(reversedWord);
    }); 
    return reversedWordsArr.join(' ');
}; 
// console.log(reverseWords('Hai aku Lintang'));

var x = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]
const bubbleSort = (array) => {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }   
    }
    return array;
}
// console.log(bubbleSort(x));
const accum=(huruf='')=>{
    var output=''
    for(var i=0;i<huruf.length;i++){
        output+=huruf[i].toUpperCase()
        for(var j=0;j<i;j++){
            output+=huruf[i].toLowerCase()
        }
        if(i<huruf.length-1){
            output+='-'
        }
    }
    return output
}
console.log(accum('Abcd'))