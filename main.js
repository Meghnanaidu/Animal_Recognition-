function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/QpuEfZzuI/model.json",
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

var cat = 0;
var dog = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML =
      "Detected voice is of  - " + results[0].label;
    document.getElementById("result_count").innerHTML =
      "Detected Dog - " +
      dog +
      " Detected Cat - " +
      cat +
      " Detected Cow - " +
      cow +
      " Detected lion - " +
      lion;
    document.getElementById("result_label").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";
    document.getElementById("result_count").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";

    img = document.getElementById("animal_image");

    if (results[0].label == "dog") {
      img.src = "bark.gif";
      dog = dog + 1;
    } else if (results[0].label == "cat") {
      img.src = "meow.gif";
      cat = cat + 1;
    } else if (results[0].label == "cow") {
      img.src = "cow.gif";
      cat = cat + 1;
    } else if (results[0].label == "lion") {
      img.src = "lion.gif";
      cat = cat + 1;
    } else {
      img.src = "giphy (1).gif";
    }
  }
}
