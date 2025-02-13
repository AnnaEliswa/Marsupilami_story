const gameData = {
    start: {
        text: "Marsupilami sets out to investigate. Where to investigate first?",
        image : "assets/marsupilami.png",
        choices: [
            { text: "Investigate the Ghost Lake", next: "page2" },
            { text: "Break into the Scientist’s Laboratory", next: "page3" },
            { text: "Track the Old Jaguar", next: "page4" },
            { text: "Enter the Forbidden Caves", next: "page5" }
        ]
    },
    page2: {
        text: "The water is black with no reflection. A strange silver glow flickers below.",
        image : "assets/Ghostlake.png",
        choices: [
            { text: "Touch the water", next: "trap1" },
            { text: "Run away", next: "page12" }
        ]
    },
    page3: {
        text: "A hidden lab glows with stolen moonlight. Dr. Elias Moore is here, running experiments.",
        image : "assets/scientistlab.png",
        choices: [
            { text: "Sneak inside", next: "page8" },
            { text: "Attack the scientist", next: "page9" }
        ]
    },
    page4: {
        text: "Sharu, the jaguar, tells an ancient secret: '500 years ago, the moon was sealed to stop something worse.'",
        image : "assets/sharu.png",
        choices: [
            { text: "Press him for details", next: "trap7" },
            { text: "Ignore him and continue searching", next: "trap6" }
        ]
    },
    page5: {
        text: "The ancient carvings reveal a prophecy. The moon was used as a key to seal something away.",
        image : "assets/prophecy.png",
        choices: [
            { text: "Read the entire prophecy", next: "page10" },
            { text: "Ignore the warnings", next: "page11" }
        ]
    },
    page6: {
        text: "Marsupilami’s reflection speaks: 'The moonlight is inside you!'",
        choices: [
            { text: "Listen carefully", next: "page3" },
            { text: "Run away", next: "page12" }
        ]
    },
    page8: {
        text: "Marsupilami sneaks in and sees blueprints of a machine draining moonlight.",
        image : "assets/blueprints.png",
        choices: [
            { text: "Destroy the machine", next: "trap2" },
            { text: "Steal the blueprints", next: "trap3" }
        ]
    },
    page9: {
        text: "Dr. Moore dodges and releases a mechanical beast!",
        image : "assets/beast.png",
        choices: [
            { text: "Fight the beast", next: "trap4" },
            { text: "Run away", next: "page12" }
        ]
    },
    page10: {
        text: "The prophecy warns: ‘If the moon is restored carelessly, the Hollow King will rise.’",
        image : "assets/Hollowking.png",
        choices: [
            { text: "Take this warning seriously", next: "page3" },
            { text: "Dismiss it", next: "trap5" }
        ]
    },
    page11: {
        text: "Ignoring the prophecy, Marsupilami continues forward blindly.",
        choices: [
            { text: "Proceed to the scientist’s lab", next: "page3" },
            { text: "Investigate the jungle further", next: "page4" }
        ]
    },
    page12: {
        text: "Marsupilami flees, but the jungle itself begins to shift...",
        choices: [
            { text: "Return to the lake", next: "page2" },
            { text: "Head towards the scientist’s lab", next: "page3" },
            { text: "Track the Old Jaguar", next: "page4" },
            { text: "Enter the Forbidden Caves", next: "page5" }
        ]
    },
    trap1: { type: "math",text:"To touch water ", next: "page3" },
    trap2: { type: "word",text:"To Destroy the machine",next: "ending_happy" },
    trap3: { type: "math",text: "To Steal the blueprints",next: "finalBattle" },
    trap4: { type: "word",text: "To Fight the beast",next: "page8" },
    trap5: { type: "math", next: "page10" },
    trap6: { type: "word",text: "To Ignore him and continue searching", next: "page4" },
    trap7: { type: "math",text: "To Get details", next: "page5" },

    finalBattle: {
        text: "Dr. Moore activates his machine. The moon’s fate is in Marsupilami’s hands!",
        image : "assets/machine_activated.png",
        choices: [
            { text: "Destroy the machine", next: "ending_happy" },
            { text: "Use the machine’s energy", next: "ending_balanced" },
            { text: "Unleash the Hollow King", next: "ending_cursed" },
            { text: "Sacrifice yourself to stop the Hollow King", next: "ending_sacrifice" }
        ]
    },

    ending_happy: {
        text: "The jungle unites against the scientist, balance is restored, and the moon returns."
     },
     ending_balanced: {
        text: "The moon is partially restored, shifting between light and dark. The Hollow King remains sealed."
     },
     ending_cursed: {
        text: "The Hollow King is freed. The jungle is doomed to eternal darkness."
     },
     ending_sacrifice: {
        text: "Marsupilami absorbs the moonlight, becoming the Guardian of Shadows but can never return."
     }
    
};





function startConfetti() {
    let confettiContainer = document.getElementById("confetti-container");
    confettiContainer.style.display = "block";

    for (let i = 0; i < 150; i++) { 
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${-Math.random() * 20}vh`;
        confetti.style.backgroundColor = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "gold"][Math.floor(Math.random() * 8)];
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 15 + 5}px`;
        confetti.style.animationDuration = `${Math.random() * 4 + 2}s`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
            element.style.opacity = "0";
            requestAnimationFrame(() => element.remove());
        }, 3000);
    }

    
}



const gameContainer = document.getElementById("game-container");



function renderPage(page) {
    const data = gameData[page];

    if (!data) {
        console.error(`Page ${page} not found in gameData`);
        return;
    }

    if (data.type === "math") {
        renderMathPuzzle(page);
        return;
    } 
    if (data.type === "word") {
        renderWordPuzzle(page);
        return;
    }
    

    // Clear the container before adding new content
    gameContainer.innerHTML = "";
     
    // Display the image if it exists
    if (data.image) {
        const imageElement = document.createElement("img");
        imageElement.src = data.image;
        imageElement.alt = "Game Scene";
        imageElement.classList.add("game-image"); // Add a CSS class for styling
        gameContainer.appendChild(imageElement);
    }
    
    if (page === "ending_happy") {
        startConfetti(); // Call the confetti function
    }
    // Display the story text
    const paragraph = document.createElement("p");
    paragraph.textContent = data.text;
    gameContainer.appendChild(paragraph);

    // Generate choice buttons
    if (data.choices) {
        data.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.classList.add("choice-button");
            button.onclick = () => renderPage(choice.next); // Correct event listener
            gameContainer.appendChild(button);
        });
    }
}

let timerInterval;
let timeLeft = 10;

function renderMathPuzzle(page) {
    const trap = gameData[page];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;

    gameContainer.innerHTML = ""; // Clear previous content

    // **Display trap text**
    if (trap.text) {
        const trapText = document.createElement("p");
        trapText.textContent = trap.text;
        trapText.classList.add("trap-text");
        gameContainer.appendChild(trapText);
    }

    // **Display the math question**
    const question = document.createElement("p");
    question.textContent = `Solve: ${num1} + ${num2} = ?`;
    gameContainer.appendChild(question);

    // **Input field**
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("input-field");
    gameContainer.appendChild(input);

    // **Submit button**
    const button = document.createElement("button");
    button.textContent = "Submit";
    button.classList.add("submit-button");
    button.onclick = () => {
        if (parseInt(input.value) === correctAnswer) {
            startConfetti();  
            clearInterval(timerInterval); // Stop the timer if correct
            renderPage(trap.next);  
        } else {
            alert("Wrong answer! Try again.");
        }
    };
    gameContainer.appendChild(button);

    // **Timer Circle**
    addTimerToPage(page);
}

function renderWordPuzzle(page) {
    const words = ["moonlight", "jungle", "guardian", "shadow", "scientist","marsupilami","houba"];
    const word = words[Math.floor(Math.random() * words.length)];
    const scrambled = word.split("").sort(() => Math.random() - 0.5).join("");

    gameContainer.innerHTML = ""; // Clear previous content

    // Display trap description if available
    if (gameData[page] && gameData[page].text) {
        const trapText = document.createElement("p");
        trapText.textContent = gameData[page].text;
        trapText.classList.add("trap-text"); // Optional styling
        gameContainer.appendChild(trapText);
    }

    const question = document.createElement("p");
    question.textContent = `Unscramble: ${scrambled}`;
    gameContainer.appendChild(question);

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input-field");
    input.id = "wordInput"; // Assign an ID
    gameContainer.appendChild(input);

    const button = document.createElement("button");
    button.textContent = "Submit";
    button.classList.add("submit-button");
    button.onclick = () => {
        const userAnswer = document.getElementById("wordInput").value.trim().toLowerCase();

        if (userAnswer === word) {
            if (gameData[page] && gameData[page].next) {
                startConfetti();
                clearInterval(timerInterval); // Stop timer if correct
                renderPage(gameData[page].next);
            }
        } else {
            alert("Wrong answer! Try again.");
        }
    };

    gameContainer.appendChild(button);

    // **Timer Circle**
    addTimerToPage(page);
}

// **Reusable Timer Function**
function addTimerToPage(page) {
    const timerCircle = document.createElement("div");
    timerCircle.id = "timer-circle";
    timerCircle.innerHTML = `
        <svg width="60" height="60">
            <circle cx="30" cy="30" r="28" stroke="red" stroke-width="4" fill="none" id="timer-progress"/>
        </svg>
        <span id="timer-text">10</span>
    `;
    gameContainer.appendChild(timerCircle);
    startTimer(page);
}

function startTimer(page) {
    let timerText = document.getElementById("timer-text");
    let timerCircle = document.getElementById("timer-progress");

    timeLeft = 10;
    timerCircle.style.strokeDasharray = "175";
    timerCircle.style.animation = "shrink 10s linear forwards";

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            
            // Randomly choose between math or word puzzle
            const randomChoice = Math.random() < 0.5 ? renderMathPuzzle : renderWordPuzzle;
            randomChoice(page); // Call the chosen function
        }
        
    }, 1000);
}

// Start Game Button
document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    let bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
        bgMusic.play().catch(error => console.log("Background music play blocked:", error));
    }
});

// Exit Game Button
document.getElementById("exit-game").addEventListener("click", function() {
    window.open('', '_self').close();
});

// Function to play click sound
function playClickSound() {
    let clickSound = document.getElementById("click-sound");
    if (clickSound) {
        clickSound.currentTime = 0; // Restart sound
        clickSound.play().catch(error => console.log("Click sound play blocked:", error));
    }
}

// **Event Delegation for ALL Buttons (including dynamically created ones)**
document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("game-button") || 
        event.target.classList.contains("submit-button") || 
        event.target.classList.contains("choice-button")) {
        playClickSound();
    }
});



// Start the game
renderPage("start");

