var pantCompleta= function(){
    "use strict"
   if (video.requestFullscreen) {
  video.requestFullscreen();
} else if (video.msRequestFullscreen) {
  video.msRequestFullscreen();
} else if (video.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (video.webkitRequestFullscreen) {
  video.webkitRequestFullscreen();
}
}

window.onload=function() {
    "use strict"
    console.log("onLoad");
    var video=document.getElementById("video");
    var iniciar=document.getElementById("iniciar");
    iniciar.addEventListener("click",function() {
        video.play();
        console.log("iniciar");
    },false);
    var pausa=document.getElementById("pausa");
    pausa.addEventListener("click", function() {
        video.pause();
        console.log("pause");
    },false);
    var stop=document.getElementById("stop");
    stop.addEventListener("click", function() {
        video.currentTime=0;
        video.pause();
        console.log("stop");
    },false);
    var avanzar=document.getElementById("avanzar");
    avanzar.addEventListener("click", function() {
        video.currentTime+=5;
        console.log("avanzar");
    },false);
    var retro=document.getElementById("retro");
    retro.addEventListener("click", function() {
        video.currentTime-=5;
        console.log("retroceder");
    },false);
    var inicio=document.getElementById("inicio");
    inicio.addEventListener("click", function() {
        video.currentTime=0;
        video.pause();
        console.log("inicio");
    },false);
    var fin=document.getElementById("fin");
    fin.addEventListener("click", function() {
        video.currentTime=video.duration;
        //video.pause();
        console.log("fin");
    },false);
    var pCompl=document.getElementById("pCompl");
    pCompl.addEventListener("click", function() {
        pantCompleta();
        console.log("pCompl");
    },false);
    var vol=document.getElementById("vol");
    vol.addEventListener("change", function() {
        video.volume=vol.value/10;
        console.log("volumen: "+vol.value);
    },false);
    var progress=document.getElementById("progress");
    video.addEventListener("timeupdate", function() {
        var progreso=(video.currentTime)/video.duration;
        progress.value=progreso;
        //console.log(progreso);
    },false);


};

/*
var registro_nombre = document.getElementById("registro_nombre");
registro_nombre.addEventListener("blur", nombre_obligatorio, false);
video.addEventListener('canplay', function(e) {
    this.volume = 0.4;
    this.currentTime = 10;
    this.play();
}, false);*/
