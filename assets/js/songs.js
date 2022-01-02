var song = document.getElementById("music");
var icon = document.getElementById("music-icon");

icon.onclick = function(){
    if (song.paused){
        song.play();
        icon.className = "icon ion-pause";
    }else {
        song.pause();
        icon.className = "icon ion-music-note";
    }

    song.onended = function(){
        icon.className = "icon ion-music-note";
        song.loop;
    }
}