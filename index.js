let isAlive = false;
let cards = [];
let hasBlackjack = false;
let sum = 0;
let sum_el = document.getElementById("sum-el");

let message = document.getElementById("message");
let cards_el = document.getElementById("cards-el");
function getrandomnumber(){
    let rn = Math.floor(Math.random()*12)+1;
    if(rn === 1)
    {
        return 11;
    }
    if(rn === 11 || rn === 12 || rn === 13)
    {
        return 10;
    }
    return rn;
}
function startgame() {
    isAlive = true;
    let firstcard = getrandomnumber();
    let secondcard = getrandomnumber();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    rendergame();
}
function rendergame(){
    message.textContent = "Do you want to draw a new card?";
    cards_el.textContent = "Cards : ";
    for(let i = 0; i<cards.length;i++)
    {
        cards_el.textContent += cards[i]+" ";
    }
    sum_el.textContent = "Sum : " + sum
    if(sum === 21){
        message.textContent = "Wohoo! You got a Blackjack!!";
        hasBlackjack = true;
    }
    else if(sum >21){
        message.textContent = "You are out of the game"
        isAlive = false;
    }
    else {
        message.textContent = "Do you want to draw a new card?"
    }
}
function newcard(){
    if(isAlive === true && hasBlackjack === false)
    {
    let newcard = getrandomnumber();
    sum += newcard;
    cards.push(newcard);
    rendergame();
    }
}