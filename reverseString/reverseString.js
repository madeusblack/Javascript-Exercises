const reverseString = function(word) {
    let reversedword=""
    let reversedchar=""
    let lengthofword=word.length
    let positionOfslice=lengthofword-1
        for(reverses=0;reverses<lengthofword;reverses++){
            reversedchar= word.charAt(positionOfslice)
            reversedword=reversedword+reversedchar
            positionOfslice=positionOfslice-1
        }          return reversedword

}

module.exports = reverseString
