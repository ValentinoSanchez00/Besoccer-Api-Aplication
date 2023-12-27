class Usuario {
    constructor(id, nombre, apellido, fecha) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
		this._fecha=fecha
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

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
	get fecha() {
        return this._fecha;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }
}
let tablausuarios_body=document.getElementById("tablausuarios_body")
let hamburguesa=document.getElementById('mobile-menu')
const usuarios = [];
let i=0;
const mifecha=new Date()
const inicializar = async () => {
    const url = 'https://random-data-api.com/api/v2/users?size=10&is_xml=true';

    const response = await fetch(url);
    const result = await response.json();
  

   

    result.forEach(element => {
        

        let usu = new Usuario(element.id, element.first_name, element.last_name, mifecha);
        usuarios.push(usu);
    });

  
    sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
if (i==0) {
	let mostrar=await mostrarusuarios()
	i++;
}

	const usuariosString = sessionStorage.getItem('usuarios');
	let arraydeusuarios = JSON.parse(usuariosString);
	
arraydeusuarios.forEach(usuario => {
	console.log(usuario._nombre+" "+usuario._apellido)
	console.log(usuario._fecha)
	const fila = document.createElement('tr');
	const celdaNombre = document.createElement('td');
    const celdaFecha = document.createElement('td');
	celdaNombre.textContent = usuario._nombre+" "+usuario._apellido;
    celdaFecha.textContent = usuario._fecha;

celdaNombre.classList.add("texto");
celdaFecha.classList.add("texto");

	fila.appendChild(celdaNombre);
    fila.appendChild(celdaFecha);
	tablausuarios_body.appendChild(fila);
});



	
};


const mostrarusuarios=async()=>{
	const usuariosString = sessionStorage.getItem('usuarios');
	const usuarios = JSON.parse(usuariosString);
    usuarios.unshift(new Usuario(333,"valentino","Sanchez",mifecha))
 	sessionStorage.setItem('usuarios', JSON.stringify(usuarios));


}

document.addEventListener("DOMContentLoaded", inicializar);
hamburguesa.addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});