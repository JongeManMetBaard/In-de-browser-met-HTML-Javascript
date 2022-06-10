var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code

var button = document.querySelector("button")
oldText();

function updateText() {
    button.onclick = oldText;
    btn.innerHTML = 'Switch light off';
    document.body.style.backgroundColor = "yellow";
    console.log("light is on");
}

function oldText() {
    button.onclick = updateText;
    btn.innerHTML = 'Switch light on';
    document.body.style.backgroundColor = "black";
    console.log("light is off");
}   



// schijf hier tussen je code