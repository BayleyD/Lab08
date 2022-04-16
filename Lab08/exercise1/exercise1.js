let btn = document.getElementById("validate");
btn.addEventListener( "click", event => { validatePass(); } );

function validatePass(){
    let fpass = document.getElementById("fpass");
    let lpass = document.getElementById("lpass");
    let correct = document.getElementById("correct");
    let incorrect = document.getElementById("incorrect");
    if ( lpass.value == fpass.value ){
        incorrect.style.display = "none";
    } else { incorrect.style.display = "block"; }
    if ( lpass.value == fpass.value ){
        correct.style.display = "block";
    } else { correct.style.display = "none";}
}