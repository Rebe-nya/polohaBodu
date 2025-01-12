//Links
let x = document.getElementById("x");
let y = document.getElementById("y");
let btn = document.getElementById("btn");

//functions
function square(x, y) {
    if (x >= 0 && x <= 50){
        console.log("true")
        if (y >= 0 && y <= 50){
            console.log("true")
        }
        else {
            console.log("false")
        }
    }
    else {
        console.log("false")
    }
    return;
}
btn.addEventListener("click", function() {
    square(x.value, y.value);
});