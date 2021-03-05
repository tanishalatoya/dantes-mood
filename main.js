import { allMoodMessages } from './data';

document.addEventListener('load', () => {
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
