function isPalindrome(str){

if (str==" "){
    return true
}else{
let lowercase=str.toLowerCase()

const replaced = lowercase.replace(/[^a-z0-9]/gi, '')

let strspstr=replaced.split("")

let c1 =""

c1= strspstr.reduce((w1,w2) => w2 + w1);

if(c1==replaced){
   return true

}else{
    return false
}
}
}





    console.log( isPalindrome("race a car"))