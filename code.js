document.getElementById("kp").addEventListener("keypress",keypress);
document.getElementById("kd").addEventListener("keydown",keydown);
document.getElementById("ku").addEventListener("keyup",keyup);
document.getElementById("toggle").addEventListener("toggle",toggle);
document.getElementById("form1").addEventListener("reset",reset);

function keypress(){
    alert("You fired a keypress event");
}

function keydown(){
    alert("You fired a keydown event");
}

function keyup(){
    alert("You fired a keyup event");
}

function toggle(){
    alert("You fired a toggle event")
}

function reset(){
    alert("You fired a reset event")
}