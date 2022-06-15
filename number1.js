function vowelConsonants (word) {
  const lowercaseWord = word.toLowerCase().replace(/\s/g, '')
  

  let allVowels = lowercaseWord.match(/[aiueo]/ig).join("")
  // console.log(allVowels);
  let allConsonants = lowercaseWord.match(/[^aiueo]/ig).join("")
  // console.log(allConsonants);
  
  return {
    allVowels,
    allConsonants
  }


}
console.log(vowelConsonants('Sample Case'));
// console.log(vowelConsonants('Next Case'));