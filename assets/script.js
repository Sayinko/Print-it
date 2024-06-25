const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

index = 0;

const flecheDroite = document.createElement("img");
const flecheGauche = document.createElement("img");
const banner = document.querySelector("#banner");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

flecheDroite.src = `./assets/images/arrow_right.png`;
flecheGauche.src = `./assets/images/arrow_left.png`;

flecheDroite.classList.add("arrow", "arrow_right");
flecheGauche.classList.add("arrow", "arrow_left");

banner.appendChild(flecheDroite);
banner.appendChild(flecheGauche);

flecheDroite.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }

  updateSlides();
});

flecheGauche.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }

  updateSlides();
});

for (i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  if (i === 0) {
    dot.classList.add("dot_selected");
  }
}

function updateSlides() {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerText.innerHTML = slides[index].tagLine;

  document.querySelector(".dot_selected").classList.remove("dot_selected");
  const dot = document.querySelectorAll(".dot");
  dot[index].classList.add("dot_selected");
}
