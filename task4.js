// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming


function longestWord(stri){
    let arr = stri.split(' ');
    let i=0;
    let longest = arr[0].length;
    let keepLong =[];
    for(i = 0; i <=arr.length-1; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    for( let i=0; i<arr.length-1;i++){
        if(arr[i].length===longest){
            keepLong.push(arr[i]);
        }
    }
    return (keepLong[0]);

}

let str = 'I am learning programming to become a programmer';
let result = longestWord(str);
console.log(result);