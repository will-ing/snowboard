
//    function txt(){
//     var mywindow = window.open("", "MsgWindow")
//     mywindow.document.write("<h3>That is a good one! check these out below!<h3>").submit();
// }

function favoriteSb(){
    var snowboard = prompt('what is your favorite snowboard?');
    alert(snowboard + ' is a great snowboard!');
    return ('<strong style="color: red;">' + snowboard + "'s are awesome!</strong>");
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