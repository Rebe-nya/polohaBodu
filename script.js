//Links
let xInput = document.getElementById("xInput");
let yInput = document.getElementById("yInput");
let btn = document.getElementById("btn");
let txt = document.getElementById("txt");

//functions
function square(x, y) {
    if ((x === 0 || x === 50) && (y === 0 || y === 50)){
        txt.style.color = "yellow";
        txt.innerHTML = "Leží na hraně čtverce"; 
    }
    else if (x >= 0 && x <= 50){
            if (y >= 0 && y <= 50){
                txt.style.color = "green";
                txt.innerHTML = "Leží uvnitř čtverce"; 
            }
            else {
                txt.style.color = "red";
                txt.innerHTML = "Leží mimo čtverce"; 
            }
        }
        else {
            txt.style.color = "red";
            txt.innerHTML = "Leží mimo čtverce"; 
        }
        return;
}
btn.addEventListener("click", function() {
    let x = Number(xInput.value);
    let y = Number(yInput.value);
    square(x, y);
});