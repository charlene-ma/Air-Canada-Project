/* 
------------------------------
------------------------------
like/dislike buttons + counter 
------------------------------
------------------------------
*/

// select buttons
const likeBtn = document.querySelector('#like-btn');
const dislikeBtn = document.querySelector('#dislike-btn');
const resetBtn = document.querySelector('.reset');
const value = document.querySelector('.likes-num');

let likes = 0; 

// change colour of likes if it is positive, negative, or 0
function likesColour() {
    if (likes > 0) {
        value.style.color = "white";
    } else if (likes < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}

// change value of 'likes' by clicking like/dislike/reset buttons
likeBtn.addEventListener('click', function() {
    likes += 2;
    value.textContent = likes;
    likesColour();
});
dislikeBtn.addEventListener('click', function() {
    likes--;
    value.textContent = likes;
    likesColour();
});
resetBtn.addEventListener('click', function() {
    likes = 0;
    value.textContent = likes;
    likesColour();
});

/* 
-----------------------------
-----------------------------
       surprise button
-----------------------------
-----------------------------
*/

// get html elements
const voidBtn = document.querySelector('#void-btn');

// button to "void" page
voidBtn.addEventListener('click', function() {
    let a = window.confirm("Would you like to enter the void?")
    if (a == true) {
        enterVoid();
    }
});

function enterVoid() {
    window.location.href = "void.html";
}

/* 
-----------------------------
-----------------------------
       nav bar toggle
-----------------------------
-----------------------------
*/

const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.nav-btn-container');

navToggleBtn.addEventListener('click', function() {
    navbar.classList.toggle("show-nav");
});

/* 
-----------------------------
-----------------------------
   colour scheme switcher
-----------------------------
-----------------------------
*/

const navItems = document.querySelectorAll('.nav-item');
const pageLinks = document.querySelectorAll('.page-btn');
const colourBtn = document.querySelector('.colour-btn');
const subHeaders = document.querySelectorAll('.subhdr');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// get random hex colour scheme when button is clicked
function randomNum() {
    return Math.floor(Math.random() * hex.length);
}

colourBtn.addEventListener('click', function() {
    let randomColour = '#';
    for(let i = 0; i < 6; i++) {
        randomColour += hex[randomNum()];
    }
    navItems[0].style.color = randomColour;
    navItems[1].style.color = randomColour;
    navItems[2].style.color = randomColour;
    navItems[3].style.color = randomColour;
    navItems[4].style.color = randomColour;
    navItems[5].style.color = randomColour;
    navItems[6].style.color = randomColour;
    pageLinks[0].style.color = randomColour;
    pageLinks[1].style.color = randomColour;
    pageLinks[2].style.color = randomColour;
    navToggleBtn.style.color = randomColour; // navToggleBtn is defined under "nav bar toggle" section
    subHeaders[0].style.color = randomColour;
    subHeaders[1].style.color = randomColour;
    subHeaders[2].style.color = randomColour;
    subHeaders[3].style.color = randomColour;
    reviewName.style.color = randomColour; // reviewName is defined under "reviews" section
}); 

/* 
-----------------------------
-----------------------------
          reviews
-----------------------------
-----------------------------
*/

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const img = document.querySelector('.review-img');
const reviewName = document.querySelector('.reviewer-name');
const reviewPositon = document.querySelector('.reviewer-position');
const reviewText = document.querySelector('.review-text');

// review content
const reviewContent = [
    {   
        image: "https://i.pinimg.com/originals/7d/fa/6c/7dfa6c6591b9c4ab4827c1b64f313756.jpg",
        name: "Sicheng",
        position: "Marketing Director",
        review: "My dream has always been to work as a pilot, but I have a fear of heights, so I decided to attend business school and work in the business sector for Air Canada, instead. Overall, I enjoyed working at Air Canada very much. My co-workers were very welcoming, so I was able to make many life-long friends at Air Canada!"
    },
    {   
        image: "https://www.allkpop.com/upload/2021/04/content/191417/1618856261-image.png",
        name: "Jeffrey Jung",
        position: "CEO of Air Canada",
        review: "I never imagined myself working as the CEO of Air Canada, but after starting the job, I grew to love it. I feel fulfilled playing my part to improve the company, and I enjoy hearing from my employees and making their experience better."
    },
    {   
        image: "https://pbs.twimg.com/media/FDE7_sMWYAACCLq?format=jpg&name=large",
        name: "Hendery",
        position: "Flight Attendant",
        review: "I like my job. I think it's cool. I like to kick back, and stare out the window while my plane is on auto-pilot. It's pretty therapeutic."
    },
    {   
        image: "https://i.pinimg.com/originals/ae/44/1b/ae441b97defb0bc5ab68652ac5701a40.jpg",
        name: "Jeno",
        position: "Technician",
        review: "Working at Air Canada as an aircraft technician is pretty cool because I get to do the work I'm passionate about, while also enjoying the many employee benefits Air Canada has to offer."
    },
    {   
        image: "https://image.kpopmap.com/2019/01/twice-scientist-member-profile-Mina.jpg",
        name: "Mina",
        position: "Accountant",
        review: "Air Canada has always treated me with respect, which is why I love working here. Although accounting may not be a fun job, I still had a good time working at Air Canada because my co-workers were so friendly!"
    },
    {   
        image: "https://pbs.twimg.com/media/E-wvFldVkAENxKJ.jpg",
        name: "Wonwoo",
        position: "Investor",
        review: "Air Canada has asked me to write my experience as one of Air Canada's largest investors, so I agreed. My experience with Air Canada is the staff have always been helpful and polite. Air Canada even gave me a free gavel (the one in the picture), which is cool too, I guess."
    }
]

let reviewNum = 0;

// get review content
function getReview() {
    const item = reviewContent[reviewNum];
    img.src = item.image;
    reviewName.textContent = item.name;
    reviewPositon.textContent = item.position;
    reviewText.textContent = item.review;
}

// get random review
function randomReview() {
    return Math.floor(Math.random() * reviewContent.length);
}

// go to next review
nextBtn.addEventListener('click', function() {
    reviewNum++;
    if (reviewNum > reviewContent.length - 1) {
        reviewNum = 0;
    }
    getReview();
    console.log(reviewNum);
});

// go to prev review
prevBtn.addEventListener('click', function() {
    reviewNum--;
    if (reviewNum < 0) {
        reviewNum = reviewContent.length - 1;
    }
    getReview();
});

// go to random review 
randomBtn.addEventListener('click', function() {
    reviewNum = randomReview();
    getReview();
});



