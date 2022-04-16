let curr = 1;
let next = document.getElementById("next");
let prev = document.getElementById("previous");

next.addEventListener( "click", event => { getNext(); } );
prev.addEventListener( "click", event => { getPrev(); } );

function getNext(){
    let a = document.getElementById( "dog" + curr );
    a.style.display = "none";
    if ( curr < 5 ){
        curr = curr + 1;
    } else { curr = 1; }
    a = document.getElementById( "dog" + curr );
    a.style.display = "block";
}

function getPrev(){
    let a = document.getElementById( "dog" + curr );
    a.style.display = "none";
    if ( curr > 1 ){
        curr = curr - 1;
    } else { curr = 5; }
    a = document.getElementById( "dog" + curr );
    a.style.display = "block";
}