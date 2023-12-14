//recuerda dar a cors
const cargar = () => {
    let apiKey = '77db80f423ff48e58b77d89095844295';
    let apiUrl = 'https://api.football-data.org/v2';
    let endpoint = '/competitions/BL1/teams';


    let url = `${apiUrl}${endpoint}`;


    fetch(url, {
        method: 'GET',
        headers: {
            'X-Auth-Token': apiKey,
        },
    })
        .then(response => response.json())
        .then(data => {

            console.log(data);
            let teams = data.teams;
            teams.forEach(team => {
                console.log(`Nombre del equipo: ${team.name}`);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });



       


       // Endpoint para obtener preguntas de deportes
const endpoint2 = 'https://opentdb.com/api.php?amount=15&category=21&type=multiple';

// Realiza la solicitud a la API
fetch(endpoint2)
  .then(response => response.json())
  .then(data => {
    // Maneja los datos de la respuesta
    console.log(data);

    // Puedes acceder a las preguntas y respuestas según tus necesidades
    const questions = data.results;
    questions.forEach(question => {
      console.log(`Pregunta: ${question.question}`);
      console.log(`Respuestas: ${question.incorrect_answers.join(', ')}, ${question.correct_answer}`);
      console.log('---');
    });
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });



}

document.addEventListener("DOMContentLoaded", cargar)