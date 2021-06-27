/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and rotates a button you can add from the README
*/

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

var outOfTime = false;
var click = 0;
var elementClicked = false;
var buttonClickNum = 0;

function changeImage() {
  if (
    document.getElementById("pic-change").src ==
    "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FUntitled_Artwork%20-%202021-06-24T182416.338.png?v=1624577083494"
  ) {
    document.getElementById("pic-change").src =
      "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FUntitled_Artwork%20-%202021-06-24T182424.732.png?v=1624577092260";
    if (buttonClickNum == 1 && !outOfTime) {
      elementClicked = true;
      click++;
      document.getElementById("score").innerHTML = click;
    }
  } else {
    document.getElementById("pic-change").src =
      "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FUntitled_Artwork%20-%202021-06-24T182416.338.png?v=1624577083494";
    if (buttonClickNum == 1 && !outOfTime) {
      elementClicked = false;
    }
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 32) {
    changeImage();
  }
};

function buttonClick() {
  buttonClickNum = 1;
  document.getElementById("end-message").innerHTML = "";
  document.getElementById("start-button").style.visibility = "hidden";
  document.getElementById("score").innerHTML = click;
  document.getElementById("msg-pic").src =
    "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FUntitled_Artwork%20-%202021-06-25T145730.069.png?v=1624651057264";

  var time = 10; //time in seconds
  document.getElementById("timer").innerHTML = time + "s";
  var timer = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = time + "s";
    if (time == 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "time's up!";
      outOfTime = true;
      buttonClickNum = 0;
    }
    if (buttonClickNum == 0) {
      if (click <= 25) {
        document.getElementById("end-message").innerHTML =
          "pathetic. i deserve more pets than that";
        document.getElementById("msg-pic").src =
          "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FIMG_1717.PNG?v=1624652311520";
      } else if (click > 25 && click < 40) {
        document.getElementById("end-message").innerHTML =
          "acceptable. i expect treats later";
        document.getElementById("msg-pic").src =
          "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FIMG_1718.PNG?v=1624652331964";
      } else {
        document.getElementById("end-message").innerHTML =
          "amazing. bless thou for giving so many pets";
        document.getElementById("msg-pic").src =
          "https://cdn.glitch.com/0b7aeb9e-1c75-4ef3-b7bf-79a886226dee%2FIMG_1720.PNG?v=1624652322309";
      }
      click = 0;
      outOfTime = false;
      document.getElementById("start-button").style.visibility = "visible";
    }
  }, 1000);
}
