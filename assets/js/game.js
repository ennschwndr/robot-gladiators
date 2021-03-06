var fightOrSkip = function(){
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.")
    if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight.");
            playerInfo.money = playerInfo.money - 10; 
        }
    }
};

var fight = function(enemy) {

    while(enemy.health > 0 && playerInfo.health > 0){
        fightOrSkip();
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

        if (fightOrSkip === "skip" || fightOrSkip === "SKIP"){
            window.alert("You need to provide a valid answer! Please try again.");
            return fightOrSkip();

            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip this fight.");
                playerInfo.money = Math.max(0, playerInfo.money -10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }  

        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " remaining health."
        );

        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        var damage = randomNumber(enemy.attack -3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " remaining health"
        );

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        
        if (fightOrSkip === "fight" || fightOrSkip === "FIGHT"){}
    }
};    

var startGame = function(){    
   
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if(playerInfo.health > 0){
            window.alert("Welcome to Robot-Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length -1){
                var storeConfirm = window.confirm("The fight is over, so visit the store before the next round.")
                if (storeConfirm){
                    shop();
                }
            }
        }else {
            window.alert("You have lost ypur robot in battle! GAME OVER.");
        }
    }

    endGame();
};

var endGame = function(){

    if(playerInfo.health > 0){
        window.alert("Great job! You survived the game. You now have a score of " + playerInfo.money + " .");
    }
    else {
        window.alert("Your robot was lost in battle! You lost the game 😢")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?"); 

    if(playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon.")
    }   
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your heatlh, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
        break;

        case "UPGRADE":
        case "upgrade":
           playerInfo.upgradeAttack();
        break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Please try again.")

        shop();
        break;
    }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null){
        name = prompt("What is your robot's name?")
    }
    console.log("'Your robot's name is' + name");
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health= 100;
        this.money= 10;
        this.attack= 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 credits.")
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 credits.")
            this.attack += 6;
            this.money -= 7;
        }
       else{
           window.alert("You don't have enough money!")
       }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame();