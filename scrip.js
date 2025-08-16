const usuarioCorrecto = "admin";
const claveCorrecta = "123";

let usuarioIngresado;
let claveIngresada;
let intentos = 3; // máximo intentos

for (let i = 0; i < intentos; i++) {
  usuarioIngresado = prompt("Usuario:");
  claveIngresada = prompt("Clave:");

  if (usuarioIngresado === usuarioCorrecto && claveIngresada === claveCorrecta) {
    console.log("✅ Login exitoso. Bienvenido/a " + usuarioIngresado);
    break;
  } else {
    console.log(`❌ Usuario o clave incorrectos. Intentos restantes: ${intentos - i - 1}`);
  }

  if (i === intentos - 1) {
    console.log("🚫 Has excedido el número de intentos. Programa terminado.");
    throw new Error("Acceso denegado");
  }
}

const vacantes = [
  "Desarrollador Frontend Jr. - HTML, CSS, JavaScript, React",
  "Centro de Cómputo - NodeJS, Express, MongoDB",
  "Desarrollador Full Stack - React, NodeJS, PostgreSQL",
  "Trainee en Desarrollo Web - HTML, CSS, JavaScript",
  "Ingeniero de Software - Java, Spring Boot, MySQL",
  "Mobile App Developer - Flutter, Dart"
];

// =========================
// Función declarativa: mostrar menú
// =========================
function mostrarVacantes(lista) {
  console.log("=== BOLSA DE EMPLEO ===");
  let menu = "=== BOLSA DE EMPLEO ===\nVacantes disponibles:\n";
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i]}`);
    menu += `${i + 1}. ${lista[i]}\n`;
  }
  return menu;
}

// =========================
// Función expresión: validar selección
// =========================
const validarSeleccion = function (seleccion, lista) {
  return seleccion >= 1 && seleccion <= lista.length;
};

// =========================
// Función flecha: registrar aplicación
// =========================
const registrarAplicacion = (nombre, correo, mensaje, vacante) => {
  return `✅ Aplicación enviada con éxito:
Postulante: ${nombre}
Correo: ${correo}
Vacante: ${vacante}
Mensaje: ${mensaje}`;
};

// =========================
// Bucle principal con do...while
// =========================
let repetir;
do {
  let menuTexto = mostrarVacantes(vacantes);

  // Selección con while
  let seleccion;
  let entradaValida = false;
  while (!entradaValida) {
    seleccion = parseInt(prompt(menuTexto + "\nSelecciona el número de la vacante:"));
    if (!isNaN(seleccion) && validarSeleccion(seleccion, vacantes)) {
      entradaValida = true;
    } else {
      console.log("❌ Opción inválida. Intenta nuevamente.");
    }
  }

  console.log(`📄 Aplicando a: ${vacantes[seleccion - 1]}`);

  // Validar nombre con do...while
  let nombre;
  do {
    nombre = prompt("Nombre completo:");
    if (!nombre || nombre.trim() === "") {
      console.log("⚠️ El nombre no puede estar vacío.");
    }
  } while (!nombre || nombre.trim() === "");

  // Validar correo con regex
  let correo;
  const regexCorreo = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  do {
    correo = prompt("Correo electrónico:");
    if (!regexCorreo.test(correo)) {
      console.log("⚠️ Correo inválido. Intenta nuevamente.");
    }
  } while (!regexCorreo.test(correo));

  // Validar mensaje
  let mensaje;
  do {
    mensaje = prompt("Mensaje o motivación para aplicar:");
    if (!mensaje || mensaje.trim() === "") {
      console.log("⚠️ Este campo no puede estar vacío.");
    }
  } while (!mensaje || mensaje.trim() === "");

  // Mostrar confirmación
  console.log(registrarAplicacion(nombre, correo, mensaje, vacantes[seleccion - 1]));

  // Preguntar si desea repetir
  repetir = prompt("¿Deseas aplicar a otra vacante? (s/n):");

} while (repetir && repetir.toLowerCase() === "s");

console.log("👋 Gracias por usar la Bolsa de Empleo.");