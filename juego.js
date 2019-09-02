var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function subirLuz() {
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("opacity");
    var actO = parseFloat(temp, 10);
    var sum = actO+0.05;
    if(sum>1) {
        alert("Has llegado a la máxima luz");
    }
    else {
        img.style.opacity = sum;
    }
}

function bajarLuz() {
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("opacity");
    var actO = parseFloat(temp, 10);
    var sum = actO-0.05;
    img.style.opacity = sum;
    breakme: if(sum==0.05) {
        alert("Has llegado a la mínima luz");
        break breakme;
    }
    else {
        img.style.opacity = sum;
    }
}

function rotarDerecha(btn) {
    var temp = window.getComputedStyle(btn).getPropertyValue("transform").split("matrix(")[1].split(")")[0].split(",");
    var a = parseInt(temp[0],10);
    var actual = Math.acos(a);
    var deg = actual+45;
    btn.style = 'transform: rotate(' + deg + 'deg)';

}

function rotarIzquierda(btn) {
    var temp = window.getComputedStyle(btn).getPropertyValue("transform").split("matrix(")[1].split(")")[0].split(",");
    var a = parseInt(temp[0],10);
    var actual = Math.acos(a);
    var deg = actual-45;
    btn.style = 'transform: rotate(' + deg + 'deg)';

}

function aumentarMicro() {
    var btn = document.getElementById("micro");
    rotarDerecha(btn);
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("filter").split("(")[1].split("px)")[0];
    var actO = parseFloat(temp, 10);
    var sum = actO+0.01;
    var blur = "blur("+sum+"px)";
    img.style.filter = blur;
}

function disminuirMicro() {
    var btn = document.getElementById("micro");
    rotarIzquierda(btn);
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("filter").split("(")[1].split("px)")[0];
    var actO = parseFloat(temp, 10);
    var sum = actO-0.01;
    var blur = "blur("+sum+"px)";
    img.style.filter = blur;
}

function aumentarMacro() {
    var btn = document.getElementById("macro");
    rotarDerecha(btn);
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("filter").split("(")[1].split("px)")[0];
    var actO = parseFloat(temp, 10);
    var sum = actO+0.1;
    var blur = "blur("+sum+"px)";
    img.style.filter = blur;
    rotarDerecha();
}

function disminuirMacro() {
    var btn = document.getElementById("macro");
    rotarIzquierda(btn);
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("filter").split("(")[1].split("px)")[0];
    var actO = parseFloat(temp, 10);
    var sum = actO-0.1;
    var blur = "blur("+sum+"px)";
    img.style.filter = blur;
}

function revisar() {
    var img = document.getElementById("imagenMicro");
    var temp = window.getComputedStyle(img).getPropertyValue("filter").split("(")[1].split("px)")[0];
    var blur = parseFloat(temp, 10); 
    var temp = window.getComputedStyle(img).getPropertyValue("opacity");
    var opacity = parseFloat(temp, 10); 
    console.log("blur"+blur);
    console.log("opacity"+opacity);
    var puntosBLur=0;
    puntosBlur: if(blur==0) puntosBLur=5;
    else if(blur>0 && blur<=0.2) puntosBLur=4;
    else if(blur>0.2 && blur<=0.5) puntosBLur=3;
    else if(blur>0.5 && blur<=0.8) puntosBLur=2;
    else if(blur>0.8 && blur<=1) puntosBLur=1;
    puntosOpac = 0;

    puntosOpac: if(opacity==1) puntosOpac = 5;
    else if(opacity<1 && opacity>=0.8) puntosOpac = 4;
    else if(opacity<0.8 && opacity>=0.6) puntosOpac = 3;
    else if(opacity<0.6 && opacity>=0.3) puntosOpac = 2;
    else if(opacity<0.3 && opacity>=0.1) puntosOpac = 1;

    puntos = puntosBLur+puntosOpac;
    alert: if(blur!=0 && opacity!=1) {
        alert("¿Seguro de que son la intensidad y el enfoque correctos? Obtuviste "+puntos+"/10 puntos")
    }
    else if(blur==0 ) {
        if(opacity==1) {
        alert("Lo has logrado! Obtuviste "+puntos+"/10 puntos");
        }
        else {

            alert("¿Seguro de que es la intensidad correcta? Obtuviste "+puntos+"/10 puntos")
        }
    }  
    else{
        alert("¿Seguro de que es el enfoque correcto? Obtuviste "+puntos+"/10 puntos");
    }
}