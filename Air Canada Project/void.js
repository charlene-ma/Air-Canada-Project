/*
------------------------------
------------------------------
javascript for surprise button
------------------------------
------------------------------
*/

// get elements
const option1 = document.querySelector('#option-1');
const option2 = document.querySelector('#option-2');
const voidQues = document.querySelector('.void-question');
const quesContainer = document.querySelector('.void-questionaire');
const descriptionText = document.querySelector('.description');
const subtext = document.querySelector('.subtext');
const voidMessage = document.querySelector('.void-message');
const destinationContainer = document.querySelector('.destination-container');

// list of question options
const saltyVsSweet = {
    question: "Do you prefer salty snacks or sweet snacks?",
    choice1: "Salty snacks",
    choice2: "Sweet snacks"
}
const nanajohnVsWinwiiin = {
    question: "If you were to choose one of the names below to change your name to, which one would you choose?",
    choice1: "First name: Nanajohn, and last name: Marky",
    choice2: "First name: Winwiiin, and last name: Milkmork"
}
const coffeeVsScream = {
    question: "What is your reaction when you see you pet snake, Jason, attacking your friend, Jeffrey?",
    choice1: "Make Jason a cup of coffee: you know for sure that it will calm it down",
    choice2: "Scream: 'JASON! NO, JASON! HE'S MY FRIEND!'"
}
const hairVsSocks = {
    question: "Would you rather have wet hair for the rest of your life, or wear wet socks for the rest of your life?",
    choice1: "Wet hair",
    choice2: "Wet socks"
}
const milkVsCake = {
    question: "You are at your friend, Jay's, birthday party, and he offers you some cake. How would you respond to Jay's offer?",
    choice1: "No thanks, I just want some milk",
    choice2: "Sure! Thanks for the cake!"
}
const gumVsSneeze = {
    question: "What song lyric resonates with you the most?",
    choice1: "'Chew chew chew chew chewing gum'",
    choice2: "'Bless me, achoo'"
}

// list of void destination options
const airportDestination = {
    backgroundImg: "url('https://images.dailyhive.com/20200120135601/YVR-airport.jpg')",
    headerText: "Welcome to the airport!",
    description: "The void detects boring energy from you, which is why you have arrived to a boring destination. The void suggests you watch the music video for the song 'Fear,' by Seventeen, at least once a day to ward off the boring energy.",
    subText: "'u like planes?' - the void" 
}
const partyDestination = {
    backgroundImg: "url('https://i.pinimg.com/originals/d0/6e/fd/d06efdc4c3d2df99a492deef0bb328cc.jpg')",
    headerText: "Welcome to my birthday party!",
    description: "Thank you for coming to the void's birthday party! It is very happy that you came! (although you were not invited... how did you even know about this party...?)",
    subText: "'Kevin will you come to my birthday party?' - Jung Jaehyun" 
}
const leftAndRightDestination = {
    backgroundImg: "url('https://thumbs.gfycat.com/FineDetailedAnaconda-size_restricted.gif')",
    headerText: "Left and right",
    description: "The void has an important message for you: 'left and right' by Seventeen is the superior song. You should watch the music video.",
    subText: "'Left and right, left and right, left and right, rip it rip it' - Seventeen" 
}
const bakeryDestination = {
    backgroundImg: "url('https://pbs.twimg.com/media/Ex-DfCFU4AgnHgJ.jpg')",
    headerText: "A bakery",
    description: "The void has determined that you like baked desserts. (If you say you don't, then that most likely means you are denying it.) The void recommends you try eating at Cafe 7 Dream. (for legal reasons you didn't hear that this cafe exists from me)",
    subText: "'It's been five years since I learned baking. (unconfirmed fact) I've been working hard for today.' - THE Lee Haechan" 
}
const minecraftDestination = {
    backgroundImg: "url('https://data.whicdn.com/images/321230549/original.png')",
    headerText: "Minecraft.",
    description: "The void thinks you play too much minecraft. (even if you've never played minecraft before) Try to get out of your chair and walk around a little bit, okay? It's not good to spend 20 hours a day playing minecraft.",
    subText: "'I like minecraft' - person that plays minecraft" 
}
const jasonTheSnakeDestination = {
    backgroundImg: "url('https://pbs.twimg.com/media/EyjEGnQU4AIayLM.jpg')",
    headerText: "Snake attack",
    description: "The void says: SOMEONE SAVE JAEHYUN! JASON THE SNAKE IS ATTACKING HIM! (also in the background image the snake is a stuffed snake from ikea, so don't worry about the man, he's just acting)",
    subText: "'Fred? Fred, what are you- what are you doing here, Fred? Alright. Okay, whatever you want...' - Johnny Suh" 
}
const peachDestination = {
    backgroundImg: "url('https://i.pinimg.com/736x/d7/0a/cf/d70acfd2a050d83482d5fb5801d01a95.jpg')",
    headerText: "Jeonghan and the giant peach",
    description: "The void has written a spin-off of the book, 'James and the Giant Peach!' The new book is titled, 'Jeonghan and the Giant Peach,' and is about how a man named Jeonghan has a pet rock that falls in love with a giant peach.",
    subText: "'I'm ready to love, tell me: can we stay together? can we stay together?' - DK (the legend) in the song, 'ready to love' by Seventeen" 
}
const christmasCookiesDestination = {
    backgroundImg: "url('https://lh3.googleusercontent.com/Zc5bJRENTiwYIPJav5JYimfyGFmUd5YnyRO49i9GVEvAkD2AKT2HkqW89Zl5iIWC58twfSN2l0qIP3BAsbbv7fjhOO6sdJxsFOkFYUkv9bCKm2g=w780-nu-rj-l80-e365')",
    headerText: "Making Christmas cookies",
    description: "The void enjoys Christmas cookies baked by the void's personal bakers: Johnny, Mark, and Ten! The void would like you to try some, too!",
    subText: "'You cracked my cookie' - one of the void's personal bakers: Mark Lee, a baker from Cafe 7 Dream" 
}
const grassDestination = {
    backgroundImg: "url('https://i.pinimg.com/originals/38/18/1c/38181c75e4ceed212943c53e655fb5d8.jpg')",
    headerText: "Grass",
    description: "The void likes grass. It thinks grass is cool. What about you?",
    subText: "'You guys look pretty, like grass' - Mark Lee" 
}


// changes the question after answer is clicked (question changes as quesNum is increased whenever a button is clicked)
function changeQues() {
    if (quesNum == 0) {
        voidQues.textContent = saltyVsSweet['question'];
        option1.textContent = saltyVsSweet['choice1'];
        option2.textContent = saltyVsSweet['choice2'];
    } else if (quesNum == 1) {
        voidQues.textContent = nanajohnVsWinwiiin['question'];
        option1.textContent = nanajohnVsWinwiiin['choice1'];
        option2.textContent = nanajohnVsWinwiiin['choice2'];
    } else if (quesNum == 2) {
        voidQues.textContent = coffeeVsScream['question'];
        option1.textContent = coffeeVsScream['choice1'];
        option2.textContent = coffeeVsScream['choice2'];
    } else if (quesNum == 3) {
        voidQues.textContent = hairVsSocks['question'];
        option1.textContent = hairVsSocks['choice1'];
        option2.textContent = hairVsSocks['choice2'];
    } else if (quesNum == 4) {
        voidQues.textContent = milkVsCake['question'];
        option1.textContent = milkVsCake['choice1'];
        option2.textContent = milkVsCake['choice2'];
    } else if (quesNum == 5) {
        voidQues.textContent = gumVsSneeze['question'];
        option1.textContent = gumVsSneeze['choice1'];
        option2.textContent = gumVsSneeze['choice2'];
    } else {
        voidQues.textContent = "Are you ready to be taken away by the void?";
        option1.textContent = "yes";
        option2.textContent = "no (you don't have a choice anyways)";
    }
}

// changes question everytime user clicks an answer + determines value of quesAns (quesAns increases everytime a button is clicked to allow the question to switch to the next question, and quesNum increases/decreases depending on which button is clicked, to get a final value which will determine where the user will end up after taking the quiz)
let quesAns = 0;
let quesNum = 0;
option1.addEventListener('click', function() {
    quesAns++;
    changeQues();
    determineOutcome();
    quesNum++;
});
option2.addEventListener('click', function() {
    quesAns--;
    changeQues();
    determineOutcome();
    quesNum++;
});

// bring user to final destination depending on final value of quesAns
let textOpacity = "75%";
function determineOutcome() {
    if (quesAns == -8 && quesNum == 7) {
        // brings user to airport destination
        document.body.style.backgroundImage = airportDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity;
        descriptionText.textContent = airportDestination.description;
        subtext.textContent = airportDestination.subText;
        voidMessage.textContent = airportDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == -6 && quesNum == 7) {
        // brings user to birthday party destination
        document.body.style.backgroundImage = partyDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = partyDestination.description;
        subtext.textContent = partyDestination.subText;
        voidMessage.textContent = partyDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == -4 && quesNum == 7) {
        // brings user to "left and right" destination
        document.body.style.backgroundImage = leftAndRightDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = leftAndRightDestination.description;
        subtext.textContent = leftAndRightDestination.subText;
        voidMessage.textContent = leftAndRightDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == -2 && quesNum == 7) {
        // brings user to bakery destination
        document.body.style.backgroundImage = bakeryDestination.backgroundImg;
        document.body.style.backgroundSize = "50%";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = bakeryDestination.description;
        subtext.textContent = bakeryDestination.subText;
        voidMessage.textContent = bakeryDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == 0 && quesNum == 7) {
        // brings user to grass destination
        document.body.style.backgroundImage = grassDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = grassDestination.description;
        subtext.textContent = grassDestination.subText;
        voidMessage.textContent = grassDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == 2 && quesNum == 7) {
        // brings user to minecraft destination
        document.body.style.backgroundImage = minecraftDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = minecraftDestination.description;
        subtext.textContent = minecraftDestination.subText;
        voidMessage.textContent = minecraftDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == 4 && quesNum == 7) {
        // brings user to snake destination
        document.body.style.backgroundImage = jasonTheSnakeDestination.backgroundImg;
        document.body.style.backgroundSize = "cover";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = jasonTheSnakeDestination.description;
        subtext.textContent = jasonTheSnakeDestination.subText;
        voidMessage.textContent = jasonTheSnakeDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == 6 && quesNum == 7) {
        // brings user to peach destination
        document.body.style.backgroundImage = peachDestination.backgroundImg;
        document.body.style.backgroundSize = "127%";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = peachDestination.description;
        subtext.textContent = peachDestination.subText;
        voidMessage.textContent = peachDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    } else if (quesAns == 8 && quesNum == 7) {
        // brings user to christmas cookie destination
        document.body.style.backgroundImage = christmasCookiesDestination.backgroundImg;
        document.body.style.backgroundSize = "127%";
        destinationContainer.style.backgroundColor = "white";
        destinationContainer.style.opacity = textOpacity; 
        descriptionText.textContent = christmasCookiesDestination.description;
        subtext.textContent = christmasCookiesDestination.subText;
        voidMessage.textContent = christmasCookiesDestination.headerText;
        voidMessage.style.color = "black";
        quesContainer.remove();
    }
}


