let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;
let autoplay;


function showImage(index) {
  images.forEach((img, i) => img.classList.toggle("active", i === index));
}


function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}


function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function startAutoplay() {
  autoplay = setInterval(nextImage, 3000); 
}

function stopAutoplay() {
  clearInterval(autoplay);
}


window.onload = () => {
  showImage(currentIndex);
  startAutoplay();


  document.querySelector(".carousel").addEventListener("mouseenter", stopAutoplay);
  document.querySelector(".carousel").addEventListener("mouseleave", startAutoplay);
};
