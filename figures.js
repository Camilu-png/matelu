console.group("Square");
const sideSquare = 5;
console.log("The sides of the square measure: " + sideSquare + " [cm]");

const perimeterSquare = sideSquare * 4;
console.log("The perimeter of the square is: " + perimeterSquare + " [cm]");

const areaSquare = sideSquare * sideSquare;
console.log("The area of the square is: " + areaSquare + " [cm]^2");
console.groupEnd();

//triangle
console.group("Triangle");
const sideTriangle1 = 3;
const sideTriangle2 = 5;
const sideTriangle3 = 4;
const heightTriangle = 5.5;
console.log("The sides of the triangle measure: " + sideTriangle1+" [cm], " + sideTriangle2 +" [cm] y "+  sideTriangle3 +" [cm]");

const perimeterTriangle = sideTriangle1 + sideTriangle2 + sideTriangle3;
console.log("The perimeter of the square is: " + perimeterTriangle + " [cm]");

const areaTriangle = (heightTriangle*sideTriangle1)/2;
console.log("The area of the square is: " + areaTriangle + " [cm]^2");
console.groupEnd();

//Circle
console.group("Circle");
const radius = 4;
const diameter = 2*radius;
const PI = Math.PI;
const perimeterCircle = diameter*PI;
const areaCircle = radius*radius*PI;

console.log("The radius of the circle measure: " + radius +" [cm]");
console.log("The perimeter of the circle is: " + perimeterCircle + " [cm]");
console.log("The area of the circle is: " + areaCircle + " [cm]^2");
console.groupEnd();