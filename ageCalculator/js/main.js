var yearInput = document.getElementById("yearInput");
var age= document.getElementById("age")
var type = document.getElementById("type")
var asterisk=document.getElementById("asterisk")
function calcAge()
{
   var d = new Date(); 
   var thisYear = d.getFullYear();
   var myAge= thisYear - yearInput.value;
   age.innerHTML = myAge;
   var astric="";
   for(var i=0;i<myAge;i++)
   {
     astric+="*";
   }
   asterisk.innerHTML=astric
  checkAge(myAge)
} 


function checkAge(myAge)
{
    
    var msg="";
    if(myAge < 15)
    msg="young"
    else if(myAge>=15 && myAge <= 30)
    msg="youth"
    else if(myAge > 30 && myAge <= 80)
    msg="old"
    else
    msg="not allowed" 
    
    type.innerHTML=msg;
}