//Square
function perimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    alert(value*4);
}

function areaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    alert(value*value);
} 

//triangle

function perimeterTriangle(){
    const input1 = document.getElementById("InputTriangle1");
    const input2 = document.getElementById("InputTriangle2");
    const input3 = document.getElementById("InputTriangle3");
    const side1 = parseInt(input1.value);
    const side2 = parseInt(input2.value);
    const side3 = parseInt(input3.value);
    alert(side1+side2+side3);
}

function areaTriangle(){
    const input1 = document.getElementById("InputTriangle1");
    const inputheight = document.getElementById("InputheightTriangle");
    const side1 = parseInt(input1.value);
    const sideheight = parseInt(inputheight.value);
    alert((side1*sideheight)/2);
}


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