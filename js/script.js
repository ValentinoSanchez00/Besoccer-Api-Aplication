let arraydecompeticiones = [];
let body = document.getElementById("body");
let main = document.getElementById("main");

const cargar = () => {
  let apiKey = '77db80f423ff48e58b77d89095844295';
  let apiUrl = 'https://api.football-data.org/v2';
  let endpoint = '/competitions/';

  let url = `${apiUrl}${endpoint}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'X-Auth-Token': apiKey,
    },
  })
  .then(response => response.json())
  .then(data => {
    let competiciones = data.competitions;
    competiciones.forEach(competicion => {
      if (competicion.emblemUrl && ["WC", "CL", "BL1", "DED", "BSA", "PD", "FL1", "ELC", "PPL", "EC", "SA", "PL", "CLI"].includes(competicion.code)) {
        arraydecompeticiones.push(competicion);
      }
      
    });

    console.log(arraydecompeticiones);

    arraydecompeticiones.forEach(element => {
      let img=document.createElement("img")
      img.classList.add("img_ligas")
      img.src=element.emblemUrl;
      img.id=element.id
      main.append(img)
    });
  });
};




const mostrarequiposdelaliga=(event)=>{
  if (event.target.nodeName == "IMG" && event.target.id) {
    main.innerHTML=""
  
    let id=event.target.id
   
    let apiKey = '77db80f423ff48e58b77d89095844295';
    let apiUrl = 'https://api.football-data.org/v4';
    let endpoint = '/competitions/'+id+'/teams';
  
    let url = `${apiUrl}${endpoint}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': apiKey,
      },
    })
    .then(response => response.json())
  .then(data => {
   console.log(data)

    let img=document.createElement("img")
      img.classList.add("img_ligas")
      img.src=data.competition.emblem;
      img.id=data.competition.id
      main.append(img)

      let todoslosequipos=document.createElement("DIV")
      todoslosequipos.classList.add("todoslosequipos")
      let equipos=data.teams
      console.log(equipos)


      equipos.forEach(equipo => {
        
        let divequipo=document.createElement("DIV")
        divequipo.classList.add("divdeequipo")
        let nombre=document.createElement("p")
        nombre.classList.add("nombreequipo")
        nombre.textContent=equipo.shortName
        console.log(nombre)


        let imgequipo=document.createElement("img")
        imgequipo.classList.add("img_ligas")
        imgequipo.src=equipo.crest
        console.log(imgequipo)

        divequipo.append(nombre)
        divequipo.append(imgequipo)
        todoslosequipos.append(divequipo)
        

       


      });
      main.append(todoslosequipos)


  });



}



}




document.addEventListener("DOMContentLoaded", cargar);
main.addEventListener("click",mostrarequiposdelaliga)
