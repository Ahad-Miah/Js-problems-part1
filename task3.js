// ### Task-3: 
// Write a function to count the number of vowels in a string.

function numberOfVowels(num){
    let count=0;
   for(let i=0;i<=num.length;i++){
     if(num[i]==='a'||num[i]==='e'||num[i]==='i'||num[i]==='o'||num[i]==='u' ||num[i]==='A'||num[i]==='E'||num[i]==='I'||num[i]==='O'||num[i]==='U')
        count++;
   }
   console.log(count);
}

let str = "A quick brown fox jumps over the lazy dog";
let result = numberOfVowels(str);
console.log(result);