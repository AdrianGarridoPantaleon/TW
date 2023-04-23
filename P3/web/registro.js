// ! Función que valida el dni
function validarDni(e) {

	var letras;
	var dni = e.value;
	var numero = dni.substr(0, dni.length - 1);

	var letra = dni.substr(dni.length - 1, 1);

	letra = letra.toUpperCase();
	numero = numero % 23;
	letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
	letras = letras.substring(numero, numero + 1);
	// ! Si la letra que hemos introducido no coincide con la correcta, lanza un mensaje de error.
	if (letras != letra) {
		document.getElementById("dnimal").innerHTML = "El DNI debe ser correcto.";
		return false;

	} else {
		document.getElementById("dnimal").innerHTML = "";
		return true;
	}
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// ! Creamos las expresiones para posteriormente pasar la validación.
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/, // 7 a 14 numeros.
	// dni: /^\d{9}$/,
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,25}$/
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	apellidos: false,
	fecha: false,
	dni: false
}
// ! Validamos el formulario cogiendo los campos
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;

		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
			break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
			break;
	}
}
// ! Lanzamos mensajes tanto si es válido como si no, visual y textualmente
const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
// ! Comprobación de que la segunda contraseña es igual a la primera
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
		// formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
// ! Creamos el array de las comunidades
const CA = {
	"Andalucia": ["Huelva", "Córdoba", "Jaén", "Sevilla", "Cádiz", "Málaga", "Granada", "Almería"],
	"Aragon": ["Zaragoza", "Huesca", "Teruel"],
	"Canarias": ["Santa Cruz de Tenerife", "Las Palmas"],
	"Asturias": ["Oviedo"],
	"Baleares": ["Mallorca"],
	"Cantabria": ["Cantabria"],
	"Castilla la Mancha": ["Guadalajara", "Toledo", "Cuenca"],
	"Castilla y Leon": ["Segovia", "Burgos", "Valladolid"],
	"Catalunya": ["Tarragona", "Barcelona", "Gerona"],
	"Ceuta": ["Ceuta"],
	"C.valenciana": ["Castellon", "Valencia", "Alicante"],
	"Extremadura": ["Caceres", "Badajoz"],
	"Galicia": ["Lugo", "Ourense", "Pontevedra"],
	"La Rioja": ["La rioja"],
	"Madrid": ["Capital"],
	"Melilla": ["Melilla"],
	"Murcia": ["Murcia"],
	"Navarra": ["Navarra"],
	"Pais Vasco": ["Vizcaya", "Alava"]
};

function removeProvElements(e) {
	while (e.options.length > 0) {
		e.remove(0);
	}
}
// ! Aqui le daremos a elegir entre las opciones
function loadProv(e) {
	const prDomObject = document.getElementById("prov");

	removeProvElements(prDomObject);

	const caValues = CA[e.value];

	caValues.forEach(ele => {
		let newOptObject = document.createElement("option");
		newOptObject.text = ele;
		newOptObject.value = ele;
		prDomObject.add(newOptObject)
	});
}
// ! Creamos el array de los productos
const PI = {
	"PALAS DE PADEL": ["ADIDAS VORTOM SOFT RED", " BULLPADEL HACK 21", " BABOLAT COUNTERVERTUO"],
	"ZAPATILLAS": ["ADIDAS STELLA", "BULLPADEL HACK", "BABOLAT MOVEA"],
	"PALETEROS": ["PALETERO ADIDAS", "PALETERO BULLPADEL", "PALETERO BABOLAT"],
	"ACCESORIOS": ["CUBO OVERGRIP", "MASCARILLA BULLPADEL", "MUÑEQUERA BABOLAT"],
	"OFERTAS": ["VISIÓN AVALANCHE", " CAMISETA CLÁSICA", " GORRA AGATHA STAR"]
};

function removeProdElements(e) {
	while (e.options.length > 0) {
		e.remove(0);
	}
}
// ! Aqui le daremos a elegir entre las opciones
function loadProd(e) {
	const prDomObject = document.getElementById("prod");

	removeProvElements(prDomObject);

	const piValues = PI[e.value];

	piValues.forEach(ele => {
		let newOptObject = document.createElement("option");
		newOptObject.text = ele;
		newOptObject.value = ele;
		prDomObject.add(newOptObject)
	});
}
// ! Validamos la fecha para que sea mayor de 16 años
function validarFecha() {
	const button = document.getElementById("button");
	var edad;
	var fechanac = document.getElementById('fecha').value;
	var dianac = +new Date(fechanac);
	if ((Date.now() - dianac) / (31557600000) < 16) {
		edad = "Tienes " + ~~((Date.now() - dianac) / (31557600000)) + " años y debes ser mayor de 16";
		var thedianac = document.getElementById('formulario__input-error');
		thedianac.innerHTML = edad;
		button.disabled = true;
		return false;
	}
	else {
		var thedianac = document.getElementById('formulario__input-error');
		thedianac.innerHTML = '';
		button.disabled = false;
		return true;
	}
}
// ! Revisamos los campos y los mandamos por correo con ayuda de EmailJS
const btn = document.getElementById('button');
emailjs.init('user_Fbs242eLhEur11bKpK9c5')
document.forms['formulario'].onsubmit = function (e) {
	e.preventDefault();
	const objeto = {
		usuario: this['usuario'].value,
		nombre: this['nombre'].value,
		password: this['password'].value,
		correo: this['correo'].value,
		fecha: this['fecha'].value,
		url: this['url'].value,
		telefono: this['telefono'].value,
		comunidades: this['comunidadAutonoma'].value,
		provincia: this['provincia'].value,
		producto: this['Productos'].value,
		prodInt: this['ProductosInteres'].value,
		apellidos: this['apellidos'].value,
		dni: this['dni'].value
	}
	console.log(this["comu"])
	emailjs.send('service_z4ngtsr', 'template_ielos0w', objeto)
		.then(function (response) {
			console.log('SUCCESS!', response.status, response.text);
		}, function (error) {
			console.log('FAILED...', error);
		});

}
