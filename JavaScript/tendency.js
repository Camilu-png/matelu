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