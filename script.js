var a = document.querySelector("#container")
var b = document.querySelector("i");

a.addEventListener("dblclick", function () {
    b.style.transform = 'translate(-50%,-50%) scale(2)'
    b.style.opacity = '0.8'
    b.style.color = "#c2215c"

       setTimeout(function () {
        b.style.transform = 'translate(-50%,-50%) scale(0)'
        b.style.opacity = '0'

    }, 1500);
});

function vowel(string){
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for(let i=0; i<string.length; i++){
    if(vowels.includes(string[i])){
count++
    }
  }
  return count;
}

console.log(vowel("hello"));  // Output: 2
console.log(vowel("world"));  // O

