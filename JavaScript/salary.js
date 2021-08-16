const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

const salaryCol = colombia.map(
    function (person) {
        return person.salary;
    }
);
const salaryColSorted = salaryCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function medianSalary(list){
    list.sort();
    if(list.length%2 === 0){
        const element1 = list[list.length/2];
        const element2 = list[list.length/2 - 1];
        return (element1+element2)/2;
    }
    else{
        return list[list.length/2];
    }
}
const spliteStart = (salaryColSorted.length * 90)/100;
const spliceCount = salaryColSorted.length - spliteStart;

const salaryTop10Col = salaryColSorted.splice(
  spliteStart,
  spliceCount,
);
const medianGeneralCol = medianSalary(salaryColSorted);
const salaryColTop10 = medianSalary(salaryTop10Col);
console.log({
  medianGeneralCol,
  salaryColTop10,
});