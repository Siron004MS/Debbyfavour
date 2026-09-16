/* =====================================
   CHERIE ❤️ AMORE
   DATE INVITATION WEBSITE
===================================== */


/* =====================================
   DATE CONFIGURATION
===================================== */

const dateInput = document.getElementById("dateInput");

// Get today's date
const today = new Date();

// Format today's date as YYYY-MM-DD
const todayString = today.toISOString().split("T")[0];

// Don't allow dates in the past
if (dateInput) {
    dateInput.min = todayString;
}


/* =====================================
   SCREEN MANAGEMENT
===================================== */

function showScreen(screenId) {

    // Hide all cards
    document
        .querySelectorAll(".card")
        .forEach(card => {
            card.classList.remove("active");
        });

    // Show requested screen
    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.add("active");
    }
}


/* =====================================
   START THE QUESTIONS
===================================== */

function startQuestions() {

    showScreen("question1");

    createHearts(10);
}


/* =====================================
   YES REACTION
===================================== */

function yesReaction(nextQuestion) {

    // Romantic celebration
    createHearts(25);

    createConfetti();

    // Give the animation a moment
    setTimeout(() => {

        showScreen("question" + nextQuestion);

    }, 700);
}


/* =====================================
   NORMAL RUNAWAY NO BUTTON
===================================== */

function runAway(button) {

    if (!button) {
        return;
    }

    const parent = button.parentElement;

    if (!parent) {
        return;
    }

    const parentRect =
        parent.getBoundingClientRect();

    const buttonRect =
        button.getBoundingClientRect();


    // Calculate movement limits
    const maxX =
        Math.max(
            20,
            parentRect.width -
            buttonRect.width
        );


    // Random horizontal movement
    const randomX =
        Math.random() * maxX -
        maxX / 2;


    // Random vertical movement
    const randomY =
        Math.random() * 100 -
        50;


    button.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}


/* =====================================
   ACE TRICK QUESTION
===================================== */

let aceAttempts = 0;


function runAceAway() {

    const button =
        document.getElementById("aceNoButton");

    const message =
        document.getElementById("noMessage");


    if (!button) {
        return;
    }


    // Count how many times she tried NO
    aceAttempts++;


    /* ---------------------------------
       PLAYFUL MESSAGES
    --------------------------------- */

    if (aceAttempts === 1) {

        if (message) {
            message.textContent =
                "Nice try, Cherie 😂";
        }

    }

    else if (aceAttempts === 2) {

        if (message) {
            message.textContent =
                "Nope! 😏 You can't escape the YES.";
        }

    }

    else if (aceAttempts === 3) {

        if (message) {
            message.textContent =
                "Amore said YES is the only option 😂❤️";
        }

    }

    else if (aceAttempts === 4) {

        if (message) {
            message.textContent =
                "Still trying? 😂";
        }

    }

    else if (aceAttempts === 5) {

        if (message) {
            message.textContent =
                "Cherie... you're making this difficult 😭❤️";
        }

    }

    else {

        if (message) {
            message.textContent =
                "Okay okay... just click YES already 😭❤️";
        }

    }


    /* ---------------------------------
       MAKE THE NO BUTTON RUN
    --------------------------------- */

    // Random horizontal movement
    const x =
        (Math.random() * 280) - 140;


    // Random vertical movement
    const y =
        (Math.random() * 180) - 90;


    button.style.transform =
        `translate(${x}px, ${y}px)`;


    /* ---------------------------------
       EXTRA LOVE REACTION
    --------------------------------- */

    createHearts(3);
}


/* =====================================
   ACE YES
===================================== */

function aceYes() {

    // Big celebration
    createHearts(35);

    createConfetti();


    // Show the joke response
    setTimeout(() => {

        showScreen("aceResponse");

    }, 700);
}


/* =====================================
   CONTINUE TO DATE PICKER
===================================== */

function continueToDate() {

    createHearts(15);

    showScreen("datePicker");
}


/* =====================================
   CONFIRM SELECTED DATE
===================================== */

function confirmDate() {

    if (!dateInput) {
        return;
    }


    const selectedDate =
        dateInput.value;


    /* ---------------------------------
       MAKE SURE A DATE WAS SELECTED
    --------------------------------- */

    if (!selectedDate) {

        alert(
            "Cherie has to pick a day first 😌❤️"
        );

        return;
    }


    /* ---------------------------------
       CONVERT DATE TO READABLE FORMAT
    --------------------------------- */

    const date =
        new Date(
            selectedDate + "T00:00:00"
        );


    const formattedDate =
        date.toLocaleDateString(
            "en-KE",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    /* ---------------------------------
       DISPLAY SELECTED DATE
    --------------------------------- */

    const selectedDateElement =
        document.getElementById(
            "selectedDate"
        );


    if (selectedDateElement) {

        selectedDateElement.textContent =
            formattedDate;
    }


    /* ---------------------------------
       CELEBRATION
    --------------------------------- */

    createHearts(50);

    createConfetti();


    /* ---------------------------------
       SHOW FINAL SCREEN
    --------------------------------- */

    setTimeout(() => {

        showScreen("confirmation");

    }, 700);
}


/* =====================================
   WHATSAPP MESSAGE
===================================== */

function sendWhatsApp() {

    if (!dateInput) {
        return;
    }


    const selectedDate =
        dateInput.value;


    if (!selectedDate) {
        return;
    }


    /* ---------------------------------
       FORMAT DATE
    --------------------------------- */

    const date =
        new Date(
            selectedDate + "T00:00:00"
        );


    const formattedDate =
        date.toLocaleDateString(
            "en-KE",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    /* ---------------------------------
       MESSAGE
    --------------------------------- */

    const message =
        `Amore ❤️ Cherie\n\n` +
        `IT'S A DATE! 🥰\n\n` +
        `Our date is on ${formattedDate} ❤️\n\n` +
        `Can't wait 😘`;


    /* ---------------------------------
       CREATE WHATSAPP LINK
    --------------------------------- */

    const whatsappUrl =
        "https://wa.me/?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappUrl,
        "_blank"
    );
}


/* =====================================
   CREATE FLOATING HEARTS
===================================== */

function createHearts(amount) {

    const container =
        document.querySelector(".hearts");


    if (!container) {
        return;
    }


    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💘",
        "🥰",
        "😘",
        "💜",
        "✨"
    ];


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        /* ---------------------------------
           RANDOM LOVE EMOJI
        --------------------------------- */

        heart.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        /* ---------------------------------
           RANDOM POSITION
        --------------------------------- */

        heart.style.left =
            Math.random() * 100 + "%";


        /* ---------------------------------
           RANDOM SPEED
        --------------------------------- */

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        /* ---------------------------------
           RANDOM SIZE
        --------------------------------- */

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";


        /* ---------------------------------
           ADD TO PAGE
        --------------------------------- */

        container.appendChild(heart);


        /* ---------------------------------
           REMOVE AFTER ANIMATION
        --------------------------------- */

        setTimeout(() => {

            heart.remove();

        }, 7000);
    }
}


/* =====================================
   CREATE CONFETTI
===================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "celebration"
        );


    if (!container) {
        return;
    }


    const emojis = [
        "❤️",
        "💕",
        "✨",
        "💖",
        "🌹",
        "🥰",
        "😘",
        "💜",
        "💗"
    ];


    for (let i = 0; i < 40; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti"
        );


        /* ---------------------------------
           RANDOM EMOJI
        --------------------------------- */

        piece.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        /* ---------------------------------
           RANDOM HORIZONTAL POSITION
        --------------------------------- */

        piece.style.left =
            Math.random() * 100 + "%";


        /* ---------------------------------
           RANDOM DELAY
        --------------------------------- */

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        /* ---------------------------------
           ADD TO PAGE
        --------------------------------- */

        container.appendChild(piece);


        /* ---------------------------------
           REMOVE AFTER ANIMATION
        --------------------------------- */

        setTimeout(() => {

            piece.remove();

        }, 3500);
    }
}


/* =====================================
   BACKGROUND HEARTS
===================================== */

/*
   A small number of hearts continuously
   float in the background.
*/

setInterval(() => {

    createHearts(1);

}, 1200);