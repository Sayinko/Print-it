const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheDroite = document.querySelector(".arrow_right")
const flecheGauche = document.querySelector(".arrow_left")
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")

let i = 0

flecheDroite.addEventListener("click", () => {
	i++
	if ( i >= slides.length) {
		i = 0
	}

	//bannerImg.src = `./assets/images/slideshow/${slides[i].image}` ne marche pas !
	bannerText.innerHTML = slides[i].tagLine
	console.log("j'ai cliqué tant de fois : " + i)
})

// if (i = 0, i >= slides.length, i++) { i = 0}
// bannerText.innerHTML = slides[i].tagLine  pourquoi celui plus haut (dans flechedroite) marche et pas celui la ? 


flecheGauche.addEventListener("click", () => {
	i--
	if (i < 0) {
		i = slides.length - 1
	}
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	bannerText.innerHTML = slides[i].tagLine
	console.log("Vous avez cliquez tant de fois : " +i)
 })


 const bulletPointsParent = document.querySelector(".dots")



for (i = 0; i > slides.length; i++) {
	const iSlides = slides[i]
	const bulletPoints = document.createElement("div")
	bulletPointsParent.appendChild(bulletPoints)
	bulletPoints.classList.add("dot")
}

//for (i = 0; i > slides.length; i ++) {

	//if (i==0) {
		//dots.insertAdjacentElementHTML(`beforeend`, `<div class="dot dot_selected"></div>`)
	//}
	//else {
		//dots.insertAdjacentElementHTML(`beforeend`, `<div class="dot"></div>`)
	//}
	//bulletPoints.innerHTML = slides[i]
//}
