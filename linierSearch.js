function linearSearch(input, randomNum){
//release 0
    for(var i=0; i<randomNum.length; i++){
        //console.log(randomNum[i])
        if(input===randomNum[i]){
            return i
        }else{
            return -1
        }
    }

}

var randomNumbers=[6,29,18,2,72,19,18,10,37]
console.log(linearSearch(18, randomNumbers))

function globalLinearSearch(input, words){

    var tampungHasil = []
    for(var i=0; i<words.length; i++){
        if(input===words[i]){
            tampungHasil.push(i)
        }
    }
    return tampungHasil

}
var bananaSplit = "banana".split("")
console.log(globalLinearSearch("a",bananaSplit))