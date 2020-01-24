
// function favoriteSb(){
//     var snowboard = prompt('what is your favorite snowboard?');
    
//     if (snowboard === ("arbor" || "burton")){
//     alert(snowboard + ' is a great snowboard!');
//     return ('<strong style="color: red;">' + snowboard + "'s are awesome!</strong>");
//     } else {alert(snowboard + '!! Try arbor or burton!');
//     return (favoriteSb());
//     }
// }


function favoriteSb(){
    var snowboard = prompt('what is your favorite snowboard?');
    
    while (snowboard == "arbor" || snowboard === "burton"){
        alert(snowboard + ' is a great snowboard!');
        return ('<strong style="color: red;">' + snowboard + "'s are awesome!</strong>");
        } favoriteSb()
    }

function howMany(){
    for ( i = 0; i <= 8; i++){
        document.write(i);
        }
    }
  




function favColor(){
    var color = prompt(" what is your favorite color?");

    document.body.style.backgroundColor = color;
    return (color + " is pretty.");
}

function question(){
    confirm("DO you like snowboarding?")
    if( confirm === true){
        alert("Thats awesome")
    }else{ 
        alert("that is too bad.")
}
}
// document.write("")

// window.location.href = "url