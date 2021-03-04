var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0){

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure that you want to skip?");

            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }  

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining health."
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining health"
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        
        if (promptFight === "fight" || promptFight === "FIGHT"){}
    }
};    

var startGame = function(){    
   
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
            window.alert("Welcome to Robot-Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }else {
            window.alert("You have lost ypur robot in battle! GAME OVER.");
        }
    }

    endGame();
};

var endGame = function(){

    if(playerHealth > 0){
        window.alert("Great job! You survived the game. You now have a score of " + playerMoney + " .");
    }else {
        window.alert("Your robot was lost in battle! You lost the game 😢")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?"); 

    if(playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon.")
    }   
}

startGame();