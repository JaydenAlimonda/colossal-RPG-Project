const readline = require("readline-sync");

var winCon = 0  ;
var playerHealth = 100 ;
var enemyHealth = 0 ; 
var gold = 0
console.log("Welcome to Dungeons and Dungeons \n Rules: \n 1: respond only from the commands listed (e.g) w: walk (you'd respond with only ' w ')  \n 2: 0 hp means you are dead... and lose \n 3: finding the treasure room means you win \n Try to collect the most gold!!") ;
var name = readline.question ("What is your name? ") ;
const enemy = ["Goblin", "Ghoule", "Skeleton"] ;


    function playerDmg () {
        min = Math.ceil(23);
        max = Math.floor(46);
        return Math.floor(Math.random() * (max - min + 1)) + min;

  }
    function enemyDmg () {
        min = Math.ceil(10);
        max = Math.floor(23);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function goldReward () {
        min = Math.ceil(5);
        max = Math.floor(23);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function enemySelector() {
        min = Math.ceil(0);
        max = Math.floor(2);
        var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        var enemySelect = enemy[randomIndex];
        return enemySelect;
}
    function enemyHealthSelect(){
        if (enemySelected == "Goblin" ){
        return enemyHealth = 100 ;
        } else if(enemySelected == "Ghoule" ){
        return enemyHealth = 80 ;
        } else if(enemySelected == "Skeleton") {
        return enemyHealth = 60 ;
    }
}
    function encounter () {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function escape () {
        min = Math.ceil(1);
        max = Math.floor(2);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function winRoom () {
        min = Math.ceil(0);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    
    while(winCon == 0){        
        var action = readline.question (name + ", what do you do? w: walk deeper into the dungeon p: show player profile z: Leave!(quit game) ")
        
        if (action == "w"){
            console.log( name + " wanders deeper into the dungeon ")
            
            if(encounter() == 1){
                escaped = 1 ;
                var enemySelected = enemySelector() ;
                var enemyHP = enemyHealthSelect(enemySelected) ;
                console.log("you encounter a " + enemySelected + " with " + enemyHP + " hp") ;
                while (playerHealth > 0 && enemyHP > 0 && escaped == 1 ) { 
                    var comAction = readline.question(name + " is in combat. what do you do? f: Attack! e: Attempt to escape! ") ;
            if(comAction == "e"){
                var escaped = escape() ;
                if (escaped == 1){
                    playerHealth -=  enemyDmg() ;
                    console.log("escape failed and you have been attacked. " + name + " hp = " + playerHealth) ;
                } else {console.log("you have escaped ")}
                        }
            if(comAction == "f"){     
                var attack = playerDmg()  
                var enemyAttack = enemyDmg()    
                enemyHP -= attack
                playerHealth -= enemyAttack
                console.log("you swing your sword at the " + enemySelected + " dealing "+ attack + " damage" + " the " + enemySelected + " deals " + enemyAttack + " damage in return ")
                console.log("player hp " + playerHealth + enemySelected +" hp " + enemyHP)
            if (enemyHP <= 0 ) {
                playerHealth += 30
                var battleReward = goldReward()
                gold += battleReward
                console.log("congrats you've slain the " + enemySelected + " and have gained 30 hp + " + battleReward + " gold " )
                console.log("player hp " + playerHealth)
                        }

                    }
                if(playerHealth <= 0){
                    winCon = 2
                }}
            }
            if( winRoom() == 77) {
                console.log("you have found the treasure room!! You win!")
                gold += 1000
                console.log("your final gold = " + gold)
                winCon = 1
            }
    }
    if(action == "z"){
        winCon = 1
    }
    if (action == "p"){
        console.log("your name is " + name + ", you have " + playerHealth + " hp " + "and " + gold + " gold ")
    }
}

if (winCon == 2) {
    console.log("you have lost with" + gold + " gold " + " try again? ")
}
