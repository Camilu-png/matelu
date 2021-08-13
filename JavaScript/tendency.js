const list1 = [
    100,
    200,
    300,
    500,
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
    if(list.length%2 === 0){
        const element1 = list[list.length/2];
        const element2 = list[list.length/2 - 1];
        return calculateAverage([element1,element2]);
    }
    else{
        return list[parseInt(list.length/2)];
    }
}