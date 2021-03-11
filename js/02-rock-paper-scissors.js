//The Rock, Paper, Scissors Game

let userChoice;

while(true) {
    userChoice = prompt("Hello, what do you want to choose: Rock, Paper or Scissors ? ");
    if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
        break;
    }
}

let randomChoice = Math.random();

 if (randomChoice === 0) {
     randomChoice = "Rock";  
 }
 else if (randomChoice === 1) {
     randomChoice = "Paper";
 }
 else {
     randomChoice = "Scissors";
 }


console.log("User chooice: " + userChoice);
console.log("Random chooice: " + randomChoice);

let compare = function(choice1, choice2) {
    
    if (choice1 === choice2) {
        alert("The result is tie !");
        return "The result is a tie!";
    }
    else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            alert("Rock wins !");
            return "rock wins";
        }
         
        else if (choice2 === "Paper") {
            alert("Paper wins !");
            return "paper wins"
        }
    }
    else if (choice1 === "Paper") {
        if(choice2 === "Scissors") {
            alert("Scissors win !");
            return "scissors wins"
        }
        else if (choice2 === "Rock") {
            alert("Paper wins !");
            return "paper wins"
        }
    }  
    else if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
            alert("Scissors win !");
            return "scissors wins"
        } 
        else if (choice2 === "Rock") {
            alert("Rock wins !");
            return "rock wins"
        }  
    }
}
console.log("The comparison's result is: " + compare(userChoice, randomChoice));

