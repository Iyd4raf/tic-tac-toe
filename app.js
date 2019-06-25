var t1, t2, t3, t4, t5, t6,t7,t8,t9;

var iconCircle = "<i class='fa fa-circle-o' aria-hidden='true'></i>";
var iconCross = "<i class='fa fa-times' aria-hidden='true'></i>";

var currentPlayer = "Player 1";

var numMoves = 0;

$("#player1").css("color", "black");
$("#player2").css("color", "lightgray");

var gameFinished = false;


$(".square").on("click", function() {

     if (!$(this).html() && gameFinished === false) {
       if (currentPlayer === "Player 1") {    //player 1 - display player 2's turn / display cross / check if win,full / switch player
          $("#player1").css("color", "lightgray");
          $("#player2").css("color", "black");
          $(this).html(iconCross);
          numMoves++;
          $("#t" + $(this).data("id")).html("x");
       } 
       else {
         $("#player1").css("color", "black");
         $("#player2").css("color", "lightgray");
         $(this).html(iconCircle);
         numMoves++;
         $("#t" + $(this).data("id")).html("o");
       }
     }
     
     checkWin();
    
});   
         
         
function checkWin() {
 
  if ( 
       ($("#t1").html() == "x" && $("#t2").html() == "x" && $("#t3").html() == "x") || 
       ($("#t4").html() == "x" && $("#t5").html() == "x" && $("#t6").html() == "x") ||
       ($("#t7").html() == "x" && $("#t8").html() == "x" && $("#t9").html() == "x") ||
       ($("#t1").html() == "x" && $("#t4").html() == "x" && $("#t7").html() == "x") ||
       ($("#t2").html() == "x" && $("#t5").html() == "x" && $("#t8").html() == "x") ||
       ($("#t3").html() == "x" && $("#t6").html() == "x" && $("#t9").html() == "x") ||
       ($("#t1").html() == "x" && $("#t5").html() == "x" && $("#t9").html() == "x") ||
       ($("#t3").html() == "x" && $("#t5").html() == "x" && $("#t7").html() == "x") ||
       ($("#t1").html() == "o" && $("#t2").html() == "o" && $("#t3").html() == "o") ||
       ($("#t4").html() == "o" && $("#t5").html() == "o" && $("#t6").html() == "o") ||
       ($("#t7").html() == "o" && $("#t8").html() == "o" && $("#t9").html() == "o") ||
       ($("#t1").html() == "o" && $("#t4").html() == "o" && $("#t7").html() == "o") ||
       ($("#t2").html() == "o" && $("#t5").html() == "o" && $("#t8").html() == "o") ||
       ($("#t3").html() == "o" && $("#t6").html() == "o" && $("#t9").html() == "o") ||
       ($("#t1").html() == "o" && $("#t5").html() == "o" && $("#t9").html() == "o") ||
       ($("#t3").html() == "o" && $("#t5").html() == "o" && $("#t7").html() == "o") 
    ) {
    gameFinished = true;
    if (!$("#message-board").text()) {
      $("#message-board").append("<span>" + currentPlayer + " wins!<br></span>");
    }
    $("#player1").css("color", "lightgray");
    $("#player2").css("color", "lightgray");
  }
  
  else if (numMoves === 9) {
    gameFinished = true;
    if (!$("#message-board").text()) {
      $("#message-board").append("<span>It's a tie!<br></span>"); 
    }
    $("#player1").css("color", "lightgray");
    $("#player2").css("color", "lightgray");
  }
  
  else {
  currentPlayer = (currentPlayer === "Player 1") ? "Player 2":"Player 1";
  }
}
         

$("#btnNewGame").on("click", function() {   //create new game and reset everything
  gameFinished = false;
  currentPlayer = "Player 1";
  numMoves = 0;
  $("#player1").css("color", "black");
  $("#player2").css("color", "lightgray");
  $(".square").empty();
  $(".hiddenDiv").empty();
  $("#message-board").empty();
});


