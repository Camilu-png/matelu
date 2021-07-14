console.group("Square");
const sideSquare = 7;
console.log("The sides of the square measure: " + sideSquare + " [cm]");

function perimeterSquare(sideSquare){
    return sideSquare * 4;
}
console.log("The perimeter of the square is: " + perimeterSquare(sideSquare) + " [cm]");

function areaSquare(sideSquare){
    return sideSquare * sideSquare;
} 
console.log("The area of the square is: " + areaSquare(sideSquare) + " [cm]^2");
console.groupEnd();

//triangle
console.group("Triangle");
const sideTriangle1 = 3;
const sideTriangle2 = 5;
const sideTriangle3 = 4;
const heightTriangle = 5.5;
console.log("The sides of the triangle measure: " + sideTriangle1+" [cm], " + sideTriangle2 +" [cm] y "+  sideTriangle3 +" [cm]");

function perimeterTriangle(sideTriangle1, sideTriangle2,sideTriangle3){
    return sideTriangle1 + sideTriangle2 + sideTriangle3;
}
console.log("The perimeter of the square is: " + perimeterTriangle(sideTriangle1, sideTriangle2,sideTriangle3) + " [cm]");

function areaTriangle(heightTriangle,sideTriangle1){
    return (heightTriangle*sideTriangle1)/2;
}
console.log("The area of the square is: " + areaTriangle(heightTriangle,sideTriangle1) + " [cm]^2");
console.groupEnd();

//Circle
console.group("Circle");
const radius = 4;
function diameter(radius){
    return 2*radius;
}
const PI = Math.PI;
function perimeterCircle(diameter,PI){
    return diameter*PI;
} 
function areaCircle(radius,PI){
    return radius*radius*PI;
} 

console.log("The radius of the circle measure: " + radius +" [cm]");
console.log("The perimeter of the circle is: " + perimeterCircle(diameter(radius),PI) + " [cm]");
console.log("The area of the circle is: " + areaCircle(radius,PI) + " [cm]^2");
console.groupEnd();