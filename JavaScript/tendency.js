var list = [];

function add(){
    const array = document.getElementById("textArray");
    const number = document.getElementById("InputNumber");
    const value = parseInt(number.value);
    if(isNaN(value)){
        array.innerText = list+"\nNo has ingresado ningún número";
    }
    else{
        list.push(value);
        array.innerText = list;
    }
}
function eraser(){
    const array = document.getElementById("textArray");
    array.innerText = "Se ha eliminado la lista";
    list = [];
}

function calculateAverage(){
    const array = document.getElementById("textResult");
    const sumList = list.reduce(
        function(accumulatedValue = 0, newValue){
            return accumulatedValue + newValue;
        }
    );
    if (array.innerText !== "La mediana es: "){
        array.innerText = "El promedio es: " + sumList/list.length;
    }else{
        array.innerText += sumList/list.length;
    }
    
}
function calculateMedian(){
    const array = document.getElementById("textResult");
    list.sort();
    if(list.length%2 === 0){
        const element1 = list[list.length/2];
        const element2 = list[list.length/2 - 1];
        calculateAverage([element1,element2]);
        array.innerText ="La mediana es: " + array.innerText.substr(15,array.innerText.length);
    }
    else{
        array.innerText = "La mediana es: "+list[parseInt(list.length/2)];
    }
}
function calculateMode(){
    const array = document.getElementById("textResult");
    const listCount = {};
    list.map(
        function(element){
            if (listCount[element]){
                listCount[element] += 1;
            }
            else{
                listCount[element] = 1;
            }
        }
    );
    const listArray = Object.entries(listCount).sort(
        function(element1,element2){
            return element2[1] - element1[1];
        }
    );
    array.innerText = "La moda es: "+listArray[0];
}