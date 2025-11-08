// Añadir interactividad: Todo lo cargado en el formulario debe reflejarse en la tabla inferior al terminar de rellenar cada campo (sin necesidad de botones)//
// Seleccionar los elementos del DOM
//nombre
const inputnombre = document.getElementById('nombre');
const celdanombre = document.getElementById('celdanombre');
// apellido
const inputapellido = document.getElementById('apellido');
const celdaapellido = document.getElementById('celdaapellido');
// email
const inputemail = document.getElementById('email');
const celdaemail = document.getElementById('celdaemail');
// telefono
const inputtelefono = document.getElementById('telefono');
const celdatelefono = document.getElementById('celdatelefono');
// edad
const inputedad = document.getElementById('edad');
const celdaedad = document.getElementById('celdaedad');
// direccion
const inputdireccion = document.getElementById('direccion');
const celdadireccion = document.getElementById('celdadireccion');
// provincia
const inputprovincia = document.getElementById('provincia');
const celdaprovincia = document.getElementById('celdaprovincia');
// codigo postal
const inputcodigopostal = document.getElementById('codigopostal');
const celdacodigopostal = document.getElementById('celdacodigopostal');
// metodo de contacto (radio buttons)
const radioButtons = document.querySelectorAll('input[name="contacto"]');
const celdaResultado = document.getElementById('celdaMetodoContacto');
// tipo de suscripcion (checkboxes)
const celdaTipoSuscripcion = document.getElementById('celdaTipoSuscripcion');    
const checkboxes = document.querySelectorAll('input[name="tipo_suscripcion"]');

//listener de eventos, se actualizar al perder el foco, podria usar input y se iria actualizando mientras escribe
inputnombre.addEventListener('blur', function() {
  celdanombre.textContent = inputnombre.value;  
});
inputapellido.addEventListener('blur', function() { 
  celdaapellido.textContent = inputapellido.value;  
});
inputemail.addEventListener('blur', function() {
  celdaemail.textContent = inputemail.value;  
});
inputtelefono.addEventListener('blur', function() {
  celdatelefono.textContent = inputtelefono.value;  
});
inputedad.addEventListener('blur', function() {
  celdaedad.textContent = inputedad.value;  
});
inputdireccion.addEventListener('blur', function() {
  celdadireccion.textContent = inputdireccion.value;  
});
inputprovincia.addEventListener('change', function() {
  celdaprovincia.textContent = inputprovincia.value;  
});
inputcodigopostal.addEventListener('blur', function() {
  celdacodigopostal.textContent = inputcodigopostal.value;  
});
// Función para radio-group
function actualizarCeldaContacto() {
    // Iterar sobre todos los radio buttons
    for (const radioButton of radioButtons) {
        // Comprobar cuál está marcado
        if (radioButton.checked) {            
            celdaResultado.textContent = radioButton.value; 
            return; 
        }
    }
}
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', actualizarCeldaContacto);
});

// Función para checkboxes
function actualizarCeldaSuscripcion() {
    // Recopilar solo los valores de los checkboxes que están marcados actualmente
    const checkboxesMarcados = document.querySelectorAll('input[name="tipo_suscripcion"]:checked');    
    const valoresMarcados = Array.from(checkboxesMarcados).map(checkbox => checkbox.value);    
    const textoParaMostrar = valoresMarcados.join(', ');
    
    // Actualizar el contenido de la celda
    celdaTipoSuscripcion.textContent = textoParaMostrar;
}
// "escuchador de eventos" para CADA checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarCeldaSuscripcion);
});

// Cargar los datos iniciales al cargar la página (para el radio-group 'correo electronico' esta marcado 
// y el checkbox 'alertas' que ya está checked)
actualizarCeldaSuscripcion();
actualizarCeldaContacto();


