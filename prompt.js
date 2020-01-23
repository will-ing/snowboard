
   function txt(){
    var mywindow = window.open("", "MsgWindow")
    mywindow.document.write("<h3>That is a good one! check these out below!<h3>").submit();
}

var snowboard = prompt('what is your favorite snowboard?');

alert(snowboard + ' is a great snowboard!');

var color = prompt(" what is your favorite color?");

document.body.style.backgroundColor = color;