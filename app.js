console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for ( let i = 1; i < count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        } else {
            continue;
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, userName) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, you have to wait until you are 16`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section

console.log("Exercise 3:\n==========\n");
function whichQuadrant(x, y) {
    if (x > 0 && y >0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 3");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 4");
    } else {
        console.log("Not in any quadrant")
    }
  }
whichQuadrant(2,2);

//Exercise 4 Section

console.log("Exercise 4: \n==========\n");
function whichTriangle(side1, side2, side3) {
    let triangleType = "";
    if (side1 == side2 && side1 == side3) {
        triangleType = "equilateral";
    } else if (side1 == side2 || side1 == side3){
        triangleType = "isosceles";
    } else {
        triangleType = "scalene";
    }
    return console.log(
        `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type:${triangleType}`
    );
}
whichTriangle(2, 2, 3);
