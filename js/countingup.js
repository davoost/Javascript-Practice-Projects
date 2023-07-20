

let time = 0;
setInterval(function(){
    time++;
    document.getElementById("time").innerHTML = time;
}, 1000)

{
    let myButton =
    document.getElementById("button");
    myButton.style.backgroundColor = 
    "red";


    myButton.onclick = function(){
        let message = 
        document.getElementById("form").value
        let node = document.createElement('Li');
        console.log(node);

        node.appendChild(document.createTextNode(message));

        let list = document.getElementById("items");

        list.appendChild(node);

        myButton.style.backgroundColor
        = "green";
    }
}