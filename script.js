const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
const greetings = ["I'm doing terrible, you little idiot","Why do you care?"];
const joke = ["You're a joke", "Why couldn't the bicycle stand up? It was too tired.", "Why couldn't the toilet paper cross the road? It got stuck in the cracks",
"Why can't you tell jokes to an egg? Because it will crack up.","Why do cemeteries have gates? Because people are dying to get in."];
const name = "my name is Chad";
const time = "time for you to get a watch";
const weather = ["Why don't you go look outside", "I'm not a psychic","weather is fine"];
const timer = "count it yourself";
const music = "sing it yourself";
recognition.onstart = function(){
    console.log("voice is activated, you may talk now");
}
recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}
btn.addEventListener("click",()=>{
    recognition.start();
});
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    if(message.includes("how are you")){
        const finalText = greetings[Math.floor(Math.random()*greetings.length)];
        speech.text = finalText;
    }
    else if(message.includes("joke")){
        const finalText = joke[Math.floor(Math.random()*greetings.length)];
        speech.text = finalText;
    }
    else if(message.includes("name")){
        speech.text = name; 
    }
    else if(message.includes("time")){
        speech.text = time;
    }
    else if(message.includes("weather")){
        const finalText = weather[Math.floor(Math.random()*greetings.length)];
        speech.text = finalText;
    }
    else if(message.includes("timer") || message.includes("stopwatch")){
        speech.text = timer;
    }
    else if(message.includes("song")||message.includes("music")){
        speech.text = music;
    }
    else{
        speech.text = "I can't hear you. Can you talk any quieter";
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}