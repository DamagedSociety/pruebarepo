let login1 = document.getElementById("login1");
let login2 = document.getElementById("login2");
//Icono Login
let loginUser = document.getElementById("loginUser");
let element = document.getElementById("text");
//CSS directo de JS
element.style.visibility = "hidden";
//Icono Logout
let element2 = document.getElementById("text2");
element2.style.visibility = "hidden";

//Icono Login
function show() {

    if(element.style.visibility == "hidden")   {
        element.style.visibility = "visible";
    } else{
        element.style.visibility = "hidden";
    }




}

//Icono Logout
function show2() {

    if(element2.style.visibility == "hidden")   {
        element2.style.visibility = "visible";
    } else{
        element2.style.visibility = "hidden";
    }


}