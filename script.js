const textarea = document.querySelector("#textinput");
const button = document.querySelector(".playbutton");
console.log(textarea);
console.log(button);
button.addEventListener("click", function () {
    const speechsynth = window.speechSynthesis;
    const text = textarea.value;
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
        speechsynth.cancel();
        speechsynth.speak(utterance);
        button.textContent = "Sound is playing"
    }

    setTimeout(() => {
        button.textContent = "Play" ;
    }, 5000);
})
textarea.addEventListener("input",()=>{
    if (textarea.value.length) {
        document.querySelector(".count>span").innerHTML = textarea.value.length;
    }
    else  document.querySelector(".count>span").innerHTML = 0;
})

