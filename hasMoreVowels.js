function hasMoreVowels(s){
    let vowels = ['a', 'e', 'i', 'o', 'u']// create a list of valid vowels
    let vCount = 0// set vowel count to 0 to start
    let characters = s.toLowerCase().split('')// turn the string into a lowercase array of characters
    let vNeeded = s.length / 2// determine the amount of vowels needed to return true
    for(let i = 0; i < characters.length; i++){// loop through the array
        let currentLetter = characters[i]// set current letter equal to the current index in the loop
        if(vowels.includes(currentLetter)){
            vCount += 1// if one of the valid vowels matches the current letter increment vCount
    }
    if(vCount > vNeeded){// if vCount is greater than needed vowels we return true
        return true
    }

}
return false// base case we return false
}
console.log(hasMoreVowels('hyrum'))// logged for testing
console.log(hasMoreVowels('moose'))// logged for testing 