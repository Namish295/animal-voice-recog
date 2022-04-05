function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KOpmOVZut/model.json",{probabilatyThreshold:0.7},modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var cow=0;
var lion=0;

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_red=Math.floor(Math.random()*255)+1;
        random_number_green=Math.floor(Math.random()*255)+1;
        random_number_blue=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='The Voice is of- '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Detected- '+dog+'Detected- '+cat+'Detected- '+cow+'Detected- '+lion;
        document.getElementById("result_label").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    
        img=document.getElementById("ear");

        if (results[0].label=="Barking")
        {
            img.src="dog.png";
            dog=dog+1;
        }
        else if (results[0].label=="Meowing")
        {
            img.src="cat.png";
            cat=cat+1;
        }
        else if (results[0].label=="Mooing")
        {
            img.src="cow.png";
            cow=cow+1;
        }
        else if (results[0].label=="Roaring")
        {
            img.src="lion.png";
            lion=lion+1;
        }
        else
        {
            img.src="ear2.png"
        }
    }
}