//Square
function perimeterSquare(){
    const resultS = document.getElementById("ResultS");
    const input = document.getElementById("InputSquare");
    const value = parseInt(input.value);
    if(isNaN(value)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El perímetro del cuadrado es de: " + value*4 + " [cm].";
    }
}

function areaSquare(){
    const resultS = document.getElementById("ResultS");
    const input = document.getElementById("InputSquare");
    const value = input.value;
    if(isNaN(value)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El área del cuadrado es de: " + value*value + " [cm]².";
    }
} 

//triangle

function perimeterTriangle(){
    const resultS = document.getElementById("ResultS");
    const input1 = document.getElementById("InputTriangle1");
    const input2 = document.getElementById("InputTriangle2");
    const input3 = document.getElementById("InputTriangle3");
    const side1 = parseInt(input1.value);
    const side2 = parseInt(input2.value);
    const side3 = parseInt(input3.value);
    if(isNaN(side1+side2+side3)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El perímetro del triángulo es de: " + side1+side2+side3 + " [cm].";
    }
}

function areaTriangle(){
    const resultS = document.getElementById("ResultS");
    const input1 = document.getElementById("InputTriangle1");
    const inputheight = document.getElementById("InputheightTriangle");
    const side1 = parseInt(input1.value);
    const sideheight = parseInt(inputheight.value);
    if(isNaN(side1)||isNaN(sideheight)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El perímetro del triángulo es de: " + (side1*sideheight)/2 + " [cm]².";
    }
}


//Circle
console.group("Circle");
const radius = 4;
function diameter(){
    const resultS = document.getElementById("ResultS");
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    if(isNaN(radius)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El diámetro del círculo es de: " + radius*2 + " [cm].";
    }
}
const PI = Math.PI;
function perimeterCircle(){
    const resultS = document.getElementById("ResultS");
    const PI = Math.PI;
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    if(isNaN(radius)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El perímetro del círculo es de: " + radius*2*PI + " [cm].";
    }
} 
function areaCircle(){
    const resultS = document.getElementById("ResultS");
    const PI = Math.PI;
    const input = document.getElementById("InputCircle");
    const radius = parseInt(input.value);
    if(isNaN(radius)){
        resultS.innerText = "No has llenado todos los campos"
    }
    else{
        resultS.innerText = "El área del círculo es de: " + radius*radius*PI + " [cm]².";
    }
} 