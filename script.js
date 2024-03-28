const textarea = document.querySelector("#textinput");
const button = document.querySelector(".playbutton");
const text = textarea.value;
console.log(textarea);
console.log(button);

button.addEventListener("click", function () {
    const speechsynth = window.SpeechSynthesis;
    
    if (!speechsynth.speaking && !text.trim().length ) {
        textarea.textContent = "Nothing to convert";
        textarea.style.color = 'red';
        
    }
    textarea.addEventListener("click",()=>{
        textarea.textContent = "";
        textarea.style.color = 'white';
        
    })
    if (!speechsynth.speaking && text.trim().length ){
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
        button.textContent = "Sound is playing"
    }
    // setTimeout(() => {
    //     button.textContent = "Play converted sound"
    // }, 5000);
})
// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);
