var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();


function start()  {
    recognition.start();

}



recognition.onresult=function(event)    {
console.log(event);
var content=event.results[0][0].transcript;

speak();

}


Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
});


function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your next selfie in 3 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    Webcam.attach("#camera");
}