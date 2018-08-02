// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/frc.png','./imgs/miscar.jpeg','./imgs/drone.jpeg','./imgs/starwars.png'];
var currentIndex = 0;
var slide = document.getElementById('picture');


slide.addEventListener('click',function showNextPicture() {
	  currentIndex++; // increment current picture
	  // if currentIndex is too large, start from the beginning again
	  if (currentIndex >= pictures.length) {
	    currentIndex = 0;
	  }
	  slide.src = pictures[currentIndex]
});
	