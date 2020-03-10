// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function splitStrings(str) {
  let solution = []
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++){
      if (i % 2 === 0 && i != 0){
        console.log(i)
        console.log(str[i])
        console.log(str.substr(i-2, i))
        console.log(solution)
      }
    }
  }
}

splitStrings('abcdef')