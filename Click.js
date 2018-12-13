let count = 0;

function myfunction(btn){
    count++;

    document.getElementById("button").innerHTML = "Count is " + count;
    // document.getElementById("button").addEventListener('click', f)

    let b = document.createElement("BUTTON");

    b.onclick = function()
    {
        // let b = document.getElementById("button");
        b.style.right =Math.floor((Math.random() * 230) + 1) + "px";
        b.style.top =Math.floor((Math.random() * 200) + 1) + "px";
        b.style.backgroundColor ='blue';
        console.log(b);

        myfunction(b);
    };

    document.body.appendChild(b);


}

// function f() {
//     let b = document.createElement("button");
//     document.body.appendChild(b);
//
// }






