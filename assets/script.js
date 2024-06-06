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

let index = 0

function banner() {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`
	bannerText.innerHTML = slides[index].tagLine
}


flecheDroite.addEventListener("click", () => {
	index++
	if (index >= slides.length) {
		index = 0
	}

	banner()
	console.log("j'ai cliqué tant de fois : " + index)
})





flecheGauche.addEventListener("click", () => {
	index--
	if (index >= slides.length) {
		index = 3
	}
	console.log("Vous avez cliquez tant de fois : " +index)
})


//let bulletPoints = document.createElement("div")
//let bulletPointsParent = document.querySelector(".dots")

//bulletPointsParent.appendChild(bulletPoints)

//bulletPoints.classList.add("dot")

