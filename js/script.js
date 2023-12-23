class Competicion {
  constructor(id, codigo, imagen) {
    this._id = id;
    this._codigo = codigo;
    this._imagen = imagen;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(codigo) {
    this._codigo = codigo;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(imagen) {
    this._imagen = imagen;
  }
}

class Equipo {
  constructor(id, nombre, imagen) {
    this._id = id;
    this._nombre = nombre;
    this._imagen = imagen;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(imagen) {
    this._imagen = imagen;
  }
}













let arraydecompeticiones = [];

let body = document.getElementById("body");
let main = document.getElementById("main");
let galeria=document.getElementById("galeria")
let hamburguesa=document.getElementById('mobile-menu')

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
      competiciones.forEach(ligas => {

        if (ligas.emblemUrl && ["WC", "CL", "BL1", "DED", "BSA", "PD", "FL1", "ELC", "PPL", "EC", "SA", "PL", "CLI"].includes(ligas.code)) {
          
          let competicion = new Competicion(ligas.id, ligas.code, ligas.emblemUrl);
          arraydecompeticiones.push(competicion);
        }

      });



      arraydecompeticiones.forEach(element => {
        let img = document.createElement("img")
        img.classList.add("img_ligas")
        img.src = element.imagen;
        img.id = element.id
        galeria.append(img)
      });
    });
};




const mostrarequiposdelaliga = (event) => {
  if (event.target.nodeName == "IMG" && event.target.id) {
    main.innerHTML = ""

    let id = event.target.id

    let apiKey = '77db80f423ff48e58b77d89095844295';
    let apiUrl = 'https://api.football-data.org/v4';
    let endpoint = '/competitions/' + id + '/teams';

    let url = `${apiUrl}${endpoint}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': apiKey,
      },
    })
      .then(response => response.json())
      .then(data => {
       

        let img = document.createElement("img")
        img.classList.add("img_ligas")
        img.src = data.competition.emblem;
        img.id = data.competition.id
        main.append(img)

        let todoslosequipos = document.createElement("DIV")
        todoslosequipos.classList.add("todoslosequipos")
        let equipos = data.teams
      
        let arraydeequipos = []

        equipos.forEach(equipo => {
          let nuevoequipo = new Equipo(equipo.id, equipo.name, equipo.crest);
          arraydeequipos.push(nuevoequipo)
        });

        arraydeequipos.forEach(equipo => {
          
          let divequipo = document.createElement("DIV")
          divequipo.classList.add("divdeequipo")
          let nombre = document.createElement("p")
          nombre.classList.add("nombreequipo")
          nombre.textContent = equipo.nombre
      


          let imgequipo = document.createElement("img")
          imgequipo.classList.add("img_ligas")
          imgequipo.src = equipo.imagen
  
          divequipo.append(nombre)
          divequipo.append(imgequipo)
          todoslosequipos.append(divequipo)
        });




        main.append(todoslosequipos)


      });



  }



}




document.addEventListener("DOMContentLoaded", cargar);
galeria.addEventListener("click", mostrarequiposdelaliga)

hamburguesa.addEventListener('click', function () {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});
