

function greet_Afternoon()
{
    let text=document.getElementById("greet");
    text.innerText="Good Afternoon"; 
}
function turn_on()
{
    let light=document.getElementById("on");
    light.src="istockphoto-1330729564-612x612.jpeg";
}
function turn_off()
{
    let light=document.getElementById("on");
    light.src="istockphoto-1330729564-612x612na.jpeg";
}
function Change_Color()
{
    let color= document.getElementById("cap");
    color.style.backgroundColor="blue";
    let text1= document.getElementById("cap");
    color.style.color="pink";
}