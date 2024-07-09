console.log("Welcome to JQuery Library");

// ==== IDs ====
// document.getElementById("red")  //JavaScript
// $("#red")  // jQuery

// #id  method   key        value   adds color to the text
$("#red").css("background", "red").css("color", "white");
$("#blue").css("background", "blue").css("color", "yellow");
$("#pink").css("background", "pink").css("color", "purple");

// ==== Class ====
// . class            key     value
$(".title-two").css("color", "green").css("font-size", "48px");
$(".with-border").css("border", "5px dashed black");

$(".my-border").click(function () {
    console.log("You clicked my-border");
    $(this).css("border", "5px dashed black");
    
    $(this).addClass("bg-green");
});

//==== Tags ====
var myTitle = $("h3");
myTitle.css("background", "gray").css("cursor", "pointer");
//events
myTitle.mouseover(function () {
    $(this).css("background", "green");
});

myTitle.mouseout(function () {
    $(this).css("background", "lightgray");
});

