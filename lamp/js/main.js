var body = document.getElementById("demo")
var img = document.getElementById("img");
var turnOnOffBtn = document.getElementById("turnOnOffBtn")

function turnOn()
{
   body.style.backgroundColor="red";
   img.src="images/pic_bulbon.gif";
}


function turnOff(){
    body.style.backgroundColor="yellow";
    img.src="images/pic_bulboff.gif"
}

function turnOnOff()
{
    if(body.style.backgroundColor=="red")
    turnOff()
    else
    turnOn()
}
