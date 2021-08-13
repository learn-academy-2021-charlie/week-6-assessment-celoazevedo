// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

// var people = [
//   { name: "ford prefect", occupation: "hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe("aboutEachPerson", () => {
  test("returns an array with a sentence about each person with their names capitalized", () => {
    let people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ]
    expect(aboutEachPerson(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// b) Create the function that makes the test pass.
// PSEUDO
// create a function that takes an array of objects as an argument
// iterate through the array to access each object
  // i am thinking about using .map() to access each object and its property and return it as a string sentence using string interpolation (might be abble to capitalize the name here).
  // did a lot of string manipulation here spliting (to convert it into an array) the names in order to access the first letter of each word that makes up the name. Used indexing position and the builtin method toUpperCase() to access and capitalize the first letter and concatenated it with the remaining letters of the word using the built in method .substring().
// return an array with 3 strings (sentences).
// The test is passing! But I agree with whoever says that this is not ease to read....

const aboutEachPerson = (arr) => {
  return arr.map((item) => {
    return `${item.name.split(' ')[0][0].toUpperCase()}${item.name.split(' ')[0].substring(1)} ${item.name.split(' ')[1][0].toUpperCase()}${item.name.split(' ')[1].substring(1)} is a ${item.occupation}.`
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]

describe("onlyRemaindersOfNums", () => {
  test("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    let hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    let hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemaindersOfNums()).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemaindersOfNums()).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.
