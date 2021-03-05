// import { allMoodMessages } from './data';

document.addEventListener('load', () => {
    const allMoodMessages = {
    "happy": [
        "Keep smiling babe, you deserve to!",
        "I hope I'm part of the reason you're happy...",
        "Yass! It's a good day to have a good day!",
        "That smile looks good on your babe!",
        "I love seeing you happy!",
        "I don't care why you're happy, I just care that you're happy.",
        "Moments with you make me happy. What's makes you happy?"
        
    ],
    "unsure": [
        "Aww babe, what's wrong?",
        "What will it take to turn that into a smile?",
        "Just know... you're important to me.",
        "Please accept this hug from me 🤗",
        "The thought of you made me smile today, I hope that lifts your spirits.",
        "Wish I could give you real ones: 😘😘😘",
    ],
    "sad": [
        "Smile babe, someone's thinking about you.",
        "Someone wishes they could give you a huge hug and lots of kisses right now.",
        "Whatever the problem is, just know that you're awesome!",
        "Take a deep breath babe.",
        "Don't worry, you got this!",
        "Are you missing me babe, because I'm missing you too.",
        "I love your frown, but I don't want you to be sad 😢",
    ],
};

    const allMoodsDiv = document.querySelector(".buttons-all-moods");
    const clearButton = document.querySelector("#clear");
    const messageDisplay = document.querySelector(".section-message-display");
    const clearPreviousMsg = () => {
        messageDisplay.innerHTML = '';
    }

    clearButton.disabled = true;
    clearPreviousMsg();

    function displayMessage(e) {
        const moodTypes = Object.keys(allMoodMessages);
        const selectedMood = () => {
            return moodTypes.find(type => {
                return type === e.target.id
            })
        }
        const randomNumber = Math.floor(Math.random() * selectedMood().length);

      if (e.target.id === selectedMood()) {
       clearPreviousMsg()
       clearButton.disabled = false;
        messageDisplay.insertAdjacentHTML(
          "afterbegin",
          `<div>${allMoodMessages[selectedMood()][randomNumber]}</div>`
        );
      }
    }

    function clearMessages() {
        if (messageDisplay.innerHTML !== '') {
            clearButton.disabled = true;
            clearPreviousMsg();
            clearButton.classList.add('change-to-default-color');
        }
    }
    
    allMoodsDiv.addEventListener("click", displayMessage);
    clearButton.addEventListener('click', clearMessages)

}, true);
