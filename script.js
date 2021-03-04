var button = document.getElementById("button");
button.addEventListener('click', function() {
    changeColor();
});


function changeColor() {
    var title = document.getElementById("title");
    title.innerText = "Bindaas Coder";
    var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Pink", "Orange"];
    var randomColor = Math.floor(Math.random()*colors.length);
    document.getElementById("colorName").innerText = colors[randomColor];
    title.style.color = colors[randomColor];
}
