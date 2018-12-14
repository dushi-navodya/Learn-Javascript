window.onload = function () {

        let x = window.innerHeight;
        let y = window.innerWidth;

        document.getElementById("myBtn").style.top = x/2 + "px";
        document.getElementById("myBtn").style.left = y/2 + "px";

        
}
let count = 0;
function myfunction()
{
        let x = window.innerHeight;
        let y = window.innerWidth;

        let height = Math.floor(Math.random()* x-100) + "px";
        let width = Math.floor(Math.random()* y-100) + "px";
        document.getElementById("myBtn").style.top = height;
        document.getElementById("myBtn").style.left = width;
        count +=10;
        document.getElementById("para").innerHTML = "Your Score is " + count ;
}

// function calculateScore(){
    
// }
