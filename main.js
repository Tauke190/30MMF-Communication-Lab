

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-image");
  if (n >= slides.length) {slideIndex = 0;} // Loop back to the start
  if (n < 0) {slideIndex = slides.length - 1;} // Loop to the end if going back from the first image

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

function togglePlay() {
    const video = document.getElementById('festivalVideo');
    if (video.paused) {
      video.play();
      document.querySelector('.play-button').style.display = 'none';
    } else {
      video.pause();
      document.querySelector('.play-button').style.display = 'block';
    }
  }
  
  // Hide play button when video plays, show when video pauses
  const video = document.getElementById('festivalVideo');
  video.onplay = function() {
    document.querySelector('.play-button').style.display = 'none';
  };
  video.onpause = function() {
    document.querySelector('.play-button').style.display = 'block';
  };



  
  