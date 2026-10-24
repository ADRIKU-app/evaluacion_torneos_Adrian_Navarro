/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let nombreTorneo = recuperaraTexto("txtNombreTorneo").trim();
    let categoria = recuperaraTexto("txtCategoria").trim();
    let participantes = recuperarInt("participantes");
    let valorInscripcion = recuperarFloat("valor");
    let email = recuperaraTexto("txtEmail").trim();

    // 14. Validar que el nombre tenga al menos 4 caracteres
    if (nombreTorneo.length < 4) {
        alert("El campo Nombre del Torneo debe contener al menos 4 carácteres.");
        return false;
    }

    // 15. Validar que se haya seleccionado una categoría
    if (categoria === "") {
        alert("Seleccione una categoría");
        return false;
    }

    // 16. Validar que los participantes sean un entero entre 1 y 100
    if (!Number.isInteger(participantes) || participantes < 1 || participantes > 100) {
        alert("Ingrese una cantidad de participantes entre 1 y 100.");
        return false;
    }

    // 17. Validar que el valor de inscripción sea mayor que 0
    if (!Number.isFinite(valorInscripcion) || valorInscripcion <= 0) {
        alert("Por favor ingrese un valor mayor que 0");
        return false;
    }

    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if (email === "") {
        alert("El campo email está vacío");
        return false;
    }

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    const recaudacion = participantes * valorInscripcion;

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    const nuevoTorneo = {
        nombre: nombreTorneo,
        categoria: categoria,
        participantes: participantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacion: recaudacion
    };

    // 21. Agregar el objeto al arreglo con push()
    torneos.push(nuevoTorneo);

    // 22. Llamar a mostrarTorneos() y limpiarFormulario()
    mostrarTorneos();
    limpiarFormulario();

    // 23. Mostrar un mensaje de registro exitoso
    alert("Tu torneo ha sido registrado exitosamente");
    return true;
}

/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {
    // 25. Crear una variable vacía para concatenar el HTML
    let tabla = document.getElementById("tablaTorneos");

    // Limpiar la tabla antes de volver a renderizar
    tabla.innerHTML = "";

    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
    // 27. En cada vuelta, obtener el objeto actual y construir una fila de la tabla
    for (let i = 0; i < torneos.length; i++) {
        const torneoActual = torneos[i];
        const fila = document.createElement("tr");

        // 28. Mostrar todos los datos y la recaudación calculada
        fila.innerHTML = `
            <td>${torneoActual.nombre}</td>
            <td>${torneoActual.categoria}</td>
            <td>${torneoActual.participantes}</td>
            <td>${torneoActual.valorInscripcion}</td>
            <td>${torneoActual.email}</td>
            <td>${torneoActual.recaudacion}</td>
        `;

        // 29. Insertar el HTML final en el cuerpo de la tabla sin duplicar filas (usando innerHTML)
        tabla.appendChild(fila);
    }
}

/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {
    // 31. Vaciar los campos del formulario, restablecer la categoría y limpiar los mensajes de error
    mostrarTextoEnCaja("txtNombreTorneo", "");
    mostrarTextoEnCaja("txtCategoria", "");
    mostrarTextoEnCaja("participantes", "");
    mostrarTextoEnCaja("valor", "");
    mostrarTextoEnCaja("txtEmail", "");
}
