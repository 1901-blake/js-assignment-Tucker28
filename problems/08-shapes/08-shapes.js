/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let c = character;
  switch (shape) {
    case "Square":
      for (let i = 0; i < height-1; i++) {
        c = c + character;
      }
      for (let i = 0; i < height; i++) {
        console.log(c);
      }
      console.log('\n');
      break;
    case "Triangle":
      for (let i = 0; i < height; i++) {
        console.log(c);
        c = c + character;
      }
      console.log('\n');
      break;
    case "Diamond":
      let x = parseInt(height / 2);
      let y = height % 2;
      let z = '';
      let arr = [];
      if (y != 1) {
        console.log('Diamonds must have a height of odd numbers.  Aborting.')
        break;
      }
      for (let i = 0; i < height; i = i + 2) {
        let h = height - i;
        for (let j = 0; j < x-(i/2); j++) {
          z = z + ' ';          
        }
        for (let j = 0; j < y+i; j++) {
          z = z + c;          
        }
        for (let j = 0; j < x-(i/2); j++) {
          z = z + ' ';          
        }        
        arr.push(z);
        z = '';
      }

      let revArr = arr.slice(0);
      revArr.pop();
      revArr.reverse();
      let joinArr = arr.concat(revArr);
      
      for (m in joinArr) {
        console.log(joinArr[m]);
      }
      break;
    default:
      console.log('\n');
      console.log(`${shape} is not a valid shape for this function.`)
      break;
  }
}

printShape('Square', 3, '%');
printShape('Triangle', 3, '$');
printShape('Diamond', 5, '*');
printShape('Circle', 9, '@');