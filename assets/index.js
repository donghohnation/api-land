document.addEventListener("DOMContentLoaded", () => {
	// DOM elements
	const button = document.getElementById("quotebtn");
	const quote = document.getElementById("quote");
	const cite = document.getElementById("author");

	async function updateQuote() {
		// Fetch a random quote from the Quotable API
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		if (response.ok) {
			// Update DOM elements
			quote.textContent = data.content;
			cite.textContent = "- " + data.author;
		} else {
			quote.textContent = "An error occured";
			console.log(data);
		}
	}

	// Attach an event listener to the `button`
	button.addEventListener("click", updateQuote);

	// call updateQuote once when page loads
	updateQuote();
});













const advicee = document.querySelector("#advice");
const btnAdvice = document.querySelector("#btnAdvice");




window.onload = getAdvice();


btnAdvice.addEventListener("click", getAdvice);

function getAdvice() {
	fetch("https://api.adviceslip.com/advice").
		then(response => {
			return response.json();
		}).then(adviceData => {
			const Adviceobj = adviceData.slip;
			advicee.innerHTML = `"${Adviceobj.advice}"`;
		}).catch(error => {
			console.log(error);
		});

}

// function getAdvice() {
// 	fetch("https://api.adviceslip.com/advice")
// 		.then(res => res.json())
// 		.then(data => {
// 			advicee.innerHTML = `${data.slip.advice}`;
// 		})
// }























// const enter = document.getElementById("cityInp")
// enter.addEventListener("keypress", (event) => {
// 	if (event.keyCode === 13) {
// 		getInfo()
// 	}
// })

// // enter city and click search, header2 will show searched city

// const searchbtn = document.getElementById("searchbtn")
// searchbtn.addEventListener("click", getInfo);

// function getInfo() {
// 	const searchedCity = document.getElementById("cityInp");
// 	const cityName = document.getElementById("cityName");
// 	cityName.innerHTML = `${searchedCity.value}`;

// 	// ______________________________________________

// 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity.value}&units=imperial&appid=f419cd27b5d7777610c83ec9680dce19`)
// 		.then(response => response.json())
// 		.then(data => {
// 			document.getElementById("currentTemp").innerHTML = `current temp: ${data.main.temp.toFixed(0)}°F`
// 			document.getElementById("feelsLike").innerHTML = `feels like: ${data.main.feels_like.toFixed(0)}°F`
// 			document.getElementById("imgM").src = "http://openweathermap.org/img/w/" + data.weather.icon
// 		})


// 	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity.value}&units=imperial&appid=f419cd27b5d7777610c83ec9680dce19`)
// 		.then(response => response.json())
// 		.then(data => {
// 			for (i = 0; i < 5; i++) {
// 				document.getElementById("day" + (i + 1) + "min").innerHTML = "Min: " + Number(data.list[i].main.temp_min).toFixed(0) + "°F";
// 			}
// 			for (i = 0; i < 5; i++) {
// 				document.getElementById("day" + (i + 1) + "max").innerHTML = "Max: " + Number(data.list[i].main.temp_max).toFixed(0) + "°F";
// 			}
// 			for (i = 0; i < 5; i++) {
// 				document.getElementById("img" + (i + 1)).src = " http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
// 			}
// 		})

// 		.catch(err => ("something went wrong"))
// }


// const d = new Date();
// const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// function checkDay(day) {
// 	if (day + d.getDay() > 6) {
// 		return day + d.getDay() - 7;
// 	}
// 	else {
// 		return day + d.getDay();
// 	}
// }

// for (i = 0; i < 5; i++) {
// 	document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
// }











let APIKEY = "k97KrpZv1g8ZfdGW7o9ZVsQphqFCguwz";


document.addEventListener("DOMContentLoaded", init);


function init() {
	document.getElementById("btnSearch").addEventListener("click", ev => {
		ev.preventDefault(); //to stop the page reload
		let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=15&q=`;
		let str = document.getElementById("search").value.trim();
		url = url.concat(str);
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(content => {
				for (var i = 0; i < 16; i++) {
					console.log(content.data);
					console.log("META", content.meta);
					document.getElementById("gif" + (i + 1)).src = content.data[i].images.downsized.url;
					document.getElementById("gif" + (i + 1)).alt = content.data[i].title;
					document.getElementById("caption" + (i + 1)).innerHTML = content.data[i].title;
					document.querySelector("#search").value = str;
				};
			})
			.catch(err => {
				//   console.error(err);
			});
	});
}




const unspsearchbtn = document.getElementById("btnSearchunsp");

unspsearchbtn.addEventListener("click", loadImg);
function loadImg(e) {
	e.preventDefault();
	const searchedunsp = document.getElementById("searchunsp");
	fetch(`https://api.unsplash.com/search/photos?query=${searchedunsp.value}&per_page=20&client_id=e0lcFxGydphS57T0cGmgW1jizTfMapI4n6W9l5SxISU`)
		.then(response => {
			return response.json();
		})
		.then(imgdata => {

			for (let i = 0; i < imgdata.results.length; i++) {

				document.getElementById("unspimg" + (i + 1)).src = imgdata.results[i].urls.regular;
				document.getElementById("unspimgcaption" + (i + 1)).innerHTML = imgdata.results[i].alt_description;

			}
		})
}









const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meals');

get_meal_btn.addEventListener('click', (e) => {
	e.preventDefault();

	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
			console.log(res.meals[0].strMeal);


		});
});

window.onload = () => {

	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
			console.log(res.meals[0].strMeal);


		})
}

const createMeal = (meal) => {


	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for (let i = 1; i <= 40; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}

	const newInnerHTML = `
    <div class="row d-flex justify-content-center resultsmeal">


	 <div class="col-9 mealdiv">


      	<h4 class="mealtitle">${meal.strMeal}</h4>

        <img class="mealimg" src="${meal.strMealThumb}" alt="Meal Image">
<div class="row mealtextdiv"> 
	<div class="col-12 col-lg-4">
        ${meal.strCategory ? `<p class="mealtext"><strong>Category:</strong> ${meal.strCategory}</p>` : ''}

        ${meal.strArea ? `<p class="mealtext"><strong>Area:</strong> ${meal.strArea}</p>` : ''}

        ${meal.strTags ? `<p class="mealtext"><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}

        <h5 class="mealtext"><strong>Ingredients:</strong></h5>
        <ul>
          ${ingredients.map(ingredient => `<li class="mealtext">${ingredient}</li>`).join('')}
        </ul>
   </div>     
   <div class="col-12 col-lg-8">
   <h5 class="mealinstructionstext"><strong>Instructions:</strong></h5>
        <p class="mealinstructionstext">${meal.strInstructions}</p>
	</div>
	</div>


	<div class="mealvideodiv">
    	${meal.strYoutube ? `
     	 <h5 class=""><strong>Video Recipe:</strong></h5>
     	 <div class="videoWrapper">
        <iframe width="100%" height="315"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>

</div>


	</div>` : ''}
  `;

	meal_container.innerHTML = newInnerHTML;
}


