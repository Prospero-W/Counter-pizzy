let count = 0;
let increase;
let decrease;
let reset;
let counter = document.getElementById("counter");

increase = document.getElementById("increase").onclick = function(){
    count++;
    counter.textContent= count;
}

decrease = document.getElementById("decrease").onclick = function () {
    count--;
    if (count < 0){
        count = 0;
        counter.textContent = count;
    }
    else {
        counter.textContent = count;
    }
}

reset = document.getElementById("reset").onclick = function(){
    count = 0;
    counter.textContent = count;
}