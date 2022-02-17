//window.onload = choosePic;

//let img = document.getElementById("myImage").src="./image-rules.svg";
//let sci= document.getElementById("sci");
//let roc= document.getElementById("roc");
//let pap= document.getElementById("pap");
//let state = blank





function myFunction1() {
    alert("I am an alert box!");
  }

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


function myFunction2() {
    alert("box");
  }

function func() {
  let pap2= document.getElementById("pap2");
  pap2.classList.toggle("show");
}
/*
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0] = document.getElementById("pap1");

imgArray[1] = new Image();
imgArray[1]= document.getElementById("sci1");

imgArray[2] = new Image();
imgArray[2]= document.getElementById("roc1");

*/
/*
let house =["cis.png","papier.png","rock.png"];


function choosePic() {
let randomNum = Math.floor(Math.random() * house.length);

document.getElementById("myPicture") = house[randomNum];

}

 */


function getRandomImage() {
  let images = ['./images/cis.png','./images/papier.png','./images/rock.png'];
  let image = images[Math.floor(Math.random()*images.length)];
   
  return image;
  }
   
  function displayRandomImage() {
  let htmlImage = document.getElementById("randomImage");
  htmlImage.src = getRandomImage();
  }
  displayRandomImage();



  