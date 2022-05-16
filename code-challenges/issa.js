
function wordLength  (str)  {
let spl=str.split(" ")
console.log(spl)
let len = spl.length;
console.log("len",len)


if(len%2!=0){
    let middle =spl[(len-1)/2] ;
console.log("middle",middle)
let l =middle.split("")
let lemd =l.length
    return lemd
}else{
   return 0
}

}
console.log(wordLength("You're gonna need a bigger boat"))