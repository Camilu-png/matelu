function calculateDiscounte(){
    const input1 = document.getElementById("InputPrice");
    const precie = parseInt(input1.value);
    const discounte = document.getElementById("InputDiscounte");
    const precie = parseInt(input1.value);
    alert((precie * (100 - discounte))/100);
}