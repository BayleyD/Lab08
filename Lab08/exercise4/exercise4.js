let borBtn = document.getElementById("bButton");
let bacBtn = document.getElementById("button");
let ahh = document.getElementById("change");

borBtn.addEventListener( "click", event => { changeBorder(); } );
bacBtn.addEventListener( "click", event => { changeBack(); } );

function changeBorder(){
    let red = document.getElementById( "bRed" );
    let green = document.getElementById( "bGreen" );
    let blue = document.getElementById( "bBlue" );
    let size = document.getElementById( "bBorder" );

    let a = document.getElementById( "change" );
    let b = red.value;
    let c = green.value;
    let d = blue.value;
    let e = size.value;
    a.style.border = e + "px";
    a.style.borderStyle = "solid";
    a.style.borderColor = "rgb(" + b + ", " + c + ", " + d + ")";
}

function changeBack(){
    let red = document.getElementById( "red" );
    let green = document.getElementById( "green" );
    let blue = document.getElementById( "blue" );

    let a = document.getElementById( "change" );
    let b = red.value;
    let c = green.value;
    let d = blue.value;
    a.style.backgroundColor = "rgb(" + b + ", " + c + ", " + d + ")";
}