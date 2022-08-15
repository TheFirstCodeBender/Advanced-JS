//Exercise 1 Hoisting

var one = 1;
var one = 2;
/* Answer:
    When it comes to hoisting in the initial compliation phase it will just set one to undefined and it will stay that way.

*/

// Exercise 2 Hoisting

function a() {
    console.log('hello')
}

function a() {
    console.log('bye')
}
/* Answer:
    This will how ever replace the initial hello version of function a with the bye version of function a.
*/

// Exercise 2 Hoisting

var favFood = 'grapes';

var foodThoughts = function () {
    console.log("Original favorite food: " + favFood);

    var favFood = "sushi";

    console.log("New favorite food: " + favFood);
};

foodThoughts()

/* Answer: 
    undefined first because we enter a new lexical scope so in the creation phase of the foodthoughts function favFood is set to undefined
    initially after that favFood will be equal to sushi
*/

// Exercise 3 Hoisting
function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
bigBrother();
/* Answer: 
    no me will be returned because it is me got replaced in the creation phase
*/