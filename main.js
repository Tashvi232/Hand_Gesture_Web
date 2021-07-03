gesture="";
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";
    });

}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KmT1TPax3/model.json",modelLoaded);
function modelLoaded(){
console.log("Model Loaded");
}

function check() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
    }

    function gotResult(error,results){
        if(error){console.error(error);}
        else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
            
            
            gesture=results[0].label
            speak()
            if(results[0].label=="OK"){
                document.getElementsById("update_emoji").innerHTML="&#128076;";
            }
            if(results[0].label=="Thumbs up"){
                document.getElementById("update_emoji").innerHTML="&#128077";
            }
            if(results[0].label=="Two/Peace/Victory"){
                document.getElementById("update_emoji").innerHTML="&#9996";
            }
            if(results[0].label=="Raised fist"){
                document.getElementById("update_emoji").innerHTML="&#9994";
            }
            if(results[0].label=="Vulcan Salute"){
                document.getElementById("update_emoji").innerHTML="&#128406";
            } 
            if(results[0].label=="Sign of horns"){
                document.getElementById("update_emoji").innerHTML="&#129304";
            }
        }
    }
    function speak() {
        var synth=window.spaceSynthesis;
        speak_data_1=gesture;
        
        var utterThis=new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
        }