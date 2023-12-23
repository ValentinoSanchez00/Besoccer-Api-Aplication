
const inicializar=async()=>{
    const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues?name=la%20liga%20santander';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1d338aaa6mshbbaaa9584f8f2cbp1edba0jsn6265cc02c6d3',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}




document.addEventListener("DOMContentLoaded",inicializar)