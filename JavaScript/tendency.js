const list1 = [
    100,
    300,
    500,
    200,
    100
   
];

function calculateAverage(list){
    const sumList = list.reduce(
        function(accumulatedValue = 0, newValue){
            return accumulatedValue + newValue;
        }
    );
    return sumList/list.length;
}
function calculateMedian(list){
    list.sort();
    if(list.length%2 === 0){
        const element1 = list[list.length/2];
        const element2 = list[list.length/2 - 1];
        return calculateAverage([element1,element2]);
    }
    else{
        return list[parseInt(list.length/2)];
    }
}
function calculateMode(list){
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
    return listArray[0];
}