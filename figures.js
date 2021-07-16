//Square
function perimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = parseInt(input.value);
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
function diameter(){
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    alert(2*radius);
}
const PI = Math.PI;
function perimeterCircle(){
    const PI = Math.PI;
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    alert(2*radius*PI);
} 
function areaCircle(){
    const PI = Math.PI;
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    alert(radius*radius*PI);
} 