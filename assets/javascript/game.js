$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

$('#randomNumber').text(Random);

var number1= Math.floor(Math.random()*11+1)
var number2= Math.floor(Math.random()*11+1)
var number3= Math.floor(Math.random()*11+1)
var number4= Math.floor(Math.random()*11+1)

var playerTotal= 0;
var win= 0;
var lose= 0;

$('#numberWins').text(win);
$('#numberLosses').text(lose);

function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $('#randomNumber').text(Random);
  number1= Math.floor(Math.random()*11+1);
  number2= Math.floor(Math.random()*11+1);
  number3= Math.floor(Math.random()*11+1);
  number4= Math.floor(Math.random()*11+1);
  playerTotal= 0;
  $('#finalTotal').text(playerTotal);
}

function winner (){
  alert("You won!");
  win++;
  $('#numberWins').text(win);
  reset()
}

function lost (){
  alert("You lost!");
  lose++;
  $('#numberLosses').text(lose);
  reset()
}

$('#paris1').on ('click', function(){
    playerTotal = playerTotal + number1;
    console.log("New playerTotal= " + playerTotal);
    $('#finalTotal').text(playerTotal); 
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          lost();
        }   
  })  
  $('#paris2').on ('click', function(){
    playerTotal = playerTotal + number2;
    console.log("New playerTotal= " + playerTotal);
    $('#finalTotal').text(playerTotal); 
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          lost();
        } 
  })  
  $('#paris3').on ('click', function(){
    playerTotal = playerTotal + number3;
    console.log("New playerTotal= " + playerTotal);
    $('#finalTotal').text(playerTotal);
          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          lost();
        } 
  })  
  $('#paris4').on ('click', function(){
    playerTotal = playerTotal + number4;
    console.log("New playerTotal= " + playerTotal);
    $('#finalTotal').text(playerTotal); 
      
          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          lost();
        }
  });   
})