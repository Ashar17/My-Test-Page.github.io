function btn(){
    alert("Hello, world!");
    document.getElementById("text1").style.fontSize = "24px";
}

function fancy(){
    alert("Fancified the text");
    document.getElementById("text1").style.fontWeight = "bold";
    document.getElementById("text1").style.textDecoration = "Underline";
    document.getElementById("text1").style.color = "blue";
    //document.getElementById("regular").check = false;
}

function regular(){
    alert("Text back to regular");
    document.getElementById("text1").style.fontWeight = "unset";
    document.getElementById("text1").style.textDecoration = "unset";
    document.getElementById("text1").style.color = "unset";
    //document.getElementById("fancy").check = false;
}

function upperCase(){
    document.getElementById('text1').value = document.getElementById('text1').value.toUpperCase();
    var str = document.getElementById('text1').value;
    var parts = str.split(".");
    str = parts.join("-MOO");
    document.getElementById("text1").value = str;
}