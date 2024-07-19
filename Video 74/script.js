let button = document.getElementById("btn");

button.addEventListener("click", () => {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yey! You are clicked enjoy your click</b>"
})

button.addEventListener("contextmenu", () => {
    alert("Don't hack us! By right Click please")
});

document.addEventListener("keydown", (e) =>{
    console.log(e.key, e.keyCode);
});