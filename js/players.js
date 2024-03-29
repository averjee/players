// Player Stats Card Task developed by Alnoor Verjee
(function() {
"use strict";
    
let obj;

//connecting to your localhost    
fetch("http://localhost:8000/data/player-stats.json")
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj)) 
    
document.getElementById("card").style.display = "none";
    
    
document.getElementById("player-select").addEventListener("change", changePlayer);

function changePlayer() {
    let x = document.getElementById("player-select").selectedIndex;
    let id = obj.players[x-1].player.id;
    let teamName = obj.players[x-1].player.currentTeam.name;
    let name = obj.players[x-1].player.name.first + " " + obj.players[x-1].player.name.last;
    let position = obj.players[x-1].player.info.position;
    let appearances = obj.players[x-1].stats[6].value;
    let goals = obj.players[x-1].stats[0].value;
    let assists = obj.players[x-1].stats[5].value;
    let passes = obj.players[x-1].stats[4].value + obj.players[x-1].stats[8].value;
    let minutes = obj.players[x-1].stats[7].value;
    
    document.getElementById("card").style.display = "block";    
    
    document.getElementById("image").src = "http://localhost:8000/assets/p" + id + ".png";
    
    //setting club badges based on teamName
    if (teamName == "Tottenham Hotspur"){
        document.getElementById("badge").style.backgroundPositionX = "-500px";
        document.getElementById("badge").style.backgroundPositionY = "100px";    
    }else if (teamName == "Manchester City"){
        document.getElementById("badge").style.backgroundPositionX = "401px";
        document.getElementById("badge").style.backgroundPositionY = "-697px";      
    }else if (teamName == "Manchester United"){
        document.getElementById("badge").style.backgroundPositionX = "601px";
        document.getElementById("badge").style.backgroundPositionY = "-798px";      
    }else if (teamName == "Arsenal"){
        document.getElementById("badge").style.backgroundPositionX = "-99px";
        document.getElementById("badge").style.backgroundPositionY = "-98px";      
    }else if (teamName == "Leicester City"){
        document.getElementById("badge").style.backgroundPositionX = "1px";
        document.getElementById("badge").style.backgroundPositionY = "2px";      
    }
    
    
    document.getElementById("name").innerHTML = name;
    
    //setting position variable as per StatCard.jpg example
    if (position == "D") {
        position = "Defender";
    }else if (position == "M") {
        position = "Midfielder";
    }else if (position == "F") {
        position = "Striker";
    }else if (position == "G") {
        position = "Goalkeeper";
    }
    
    document.getElementById("position").innerHTML = position;
    
    document.getElementById("appearances-value").innerHTML = appearances;
    document.getElementById("goals-value").innerHTML = goals;
    //please note that for Per Mertasaker the goal assists value was missing in player-stats.json so I set it to 3
    //to make things consistent
    document.getElementById("assists-value").innerHTML = assists;
    document.getElementById("gpm-value").innerHTML = (goals / appearances).toFixed(2);
    document.getElementById("ppm-value").innerHTML = (passes / minutes).toFixed(2);

    
}

    
}());