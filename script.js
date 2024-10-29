document.addEventListener('DOMContentLoaded', () => {
    const mensajeBienvenida = document.getElementById('mensaje-bienvenida');

    // Mostrar el mensaje de bienvenida al cargar la página
    mensajeBienvenida.style.display = 'flex';

    // Contador regresivo
    const cuentaAtras = () => {
        const fechaObjetivo = new Date("August 10, 2025 00:00:00").getTime();
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = `<div class="numero">${dias}</div><div class="unidad">Días</div>`;
        document.getElementById("horas").innerHTML = `<div class="numero">${horas}</div><div class="unidad">Horas</div>`;
        document.getElementById("minutos").innerHTML = `<div class="numero">${minutos}</div><div class="unidad">Minutos</div>`;
        document.getElementById("segundos").innerHTML = `<div class="numero">${segundos}</div><div class="unidad">Segundos</div>`;

        if (diferencia < 0) {
            clearInterval(intervalo);
            document.getElementById("dias").innerHTML = "¡Feliz día!";
            document.getElementById("horas").innerHTML = "";
            document.getElementById("minutos").innerHTML = "";
            document.getElementById("segundos").innerHTML = "";
        }
    };

    const intervalo = setInterval(cuentaAtras, 1000);
});

function cerrarMensaje() {
    const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
    mensajeBienvenida.style.display = 'none';
}

function mostrarMapa(evento) {
    const mapaModal = document.getElementById('mapaModal');
    const mapa = document.getElementById('mapa');
    const modalContent = mapaModal.querySelector('.modal-content');
    let ubicacion;

    if (evento === 'ceremonia') {
        ubicacion = 'https://www.google.com/maps/embed?pb=...'; // URL de Google Maps para la ceremonia
    } else if (evento === 'recepcion') {
        ubicacion = 'https://www.google.com/maps/embed?pb=...'; // URL de Google Maps para la recepción
    } else if (evento === 'fiesta') {
        ubicacion = 'https://www.google.com/maps/embed?pb=...'; // URL de Google Maps para la fiesta
    }

    mapa.src = ubicacion;
    mapaModal.classList.add('show');
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10);
}

function cerrarMapa() {
    const mapaModal = document.getElementById('mapaModal');
    const modalContent = mapaModal.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(() => {
        mapaModal.classList.remove('show');
    }, 500);
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const mapaModal = document.getElementById('mapaModal');
    const modalContent = mapaModal.querySelector('.modal-content');
    if (event.target === mapaModal) {
        modalContent.classList.remove('show');
        setTimeout(() => {
            mapaModal.classList.remove('show');
        }, 500);
    }
}

function mostrarDatos(tipo) {
    const modal = document.getElementById('infoModal');
    const modalContent = modal.querySelector('.modal-content');
    const modalBody = document.getElementById('modal-body');
    let contenido;

    if (tipo === 'valorTarjeta') {
        contenido = `
            <div class="icono-modal">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z" />
                </svg>
            </div>
            <h3>Flor & Emma</h3>
            <p>Alias: bodafloryemma</p>
            <button>Valor $60.000</button>
        `;
    } else if (tipo === 'mesaRegalos') {
        contenido = `
            <div class="icono-modal">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z" />
                </svg>
            </div>
            <h3>Flor & Emma</h3>
            <p>Alias: bodafloryemma</p>
            <button>¡Gracias</button>
        `;
    } else if (tipo === 'hospedajes') {
        contenido = `
            <div class="icono-modal">
                <img src="ruta/a/tu/icono-hospedaje.png" alt="Icono hospedaje">
            </div>
            <h3>Hospedajes</h3>
            <p>Contactos de hospedajes en la zona: ...</p>
        `;
    }

    modalBody.innerHTML = contenido;
    modal.classList.add('show');
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10);
}

function cerrarModal() {
    const modal = document.getElementById('infoModal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.classList.remove('show');
    }, 500); // Debe coincidir con la duración de la transición de CSS
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.querySelector('.modal-content').classList.remove('show');
        setTimeout(() => {
            modal.classList.remove('show');
        }, 500); // Debe coincidir con la duración de la transición de CSS
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.seccion');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Llamar para verificar la visibilidad al cargar la página
});

function actualizarCampos() {
    const lista = document.getElementById('lista');
    const camposAdicionales = document.getElementById('campos-adicionales');
    const cantidad = parseInt(lista.value);
    
    // Limpia los campos adicionales
    camposAdicionales.innerHTML = '';
    
    // Si la opción es "No podré asistir", solo muestra los campos de nombre y apellido
    if (cantidad === 0) {
        const divNombre = document.createElement('div');
        divNombre.className = 'form-field';
        const inputNombre = document.createElement('input');
        inputNombre.type = 'text';
        inputNombre.id = `nombre`;
        inputNombre.name = `nombre`;
        inputNombre.placeholder = `Nombre`;
        inputNombre.className = 'input-field';
        inputNombre.required = true;

        const divApellido = document.createElement('div');
        divApellido.className = 'form-field';
        const inputApellido = document.createElement('input');
        inputApellido.type = 'text';
        inputApellido.id = `apellido`;
        inputApellido.name = `apellido`;
        inputApellido.placeholder = `Apellido`;
        inputApellido.className = 'input-field';
        inputApellido.required = true;

        divNombre.appendChild(inputNombre);
        divApellido.appendChild(inputApellido);
        
        camposAdicionales.appendChild(divNombre);
        camposAdicionales.appendChild(divApellido);
    } else {
        // Genera los campos adicionales dependiendo de la selección
        for (let i = 1; i <= cantidad; i++) {
            const divNombre = document.createElement('div');
            divNombre.className = 'form-field';
            const inputNombre = document.createElement('input');
            inputNombre.type = 'text';
            inputNombre.id = `nombre${i}`;
            inputNombre.name = `nombre${i}`;
            inputNombre.placeholder = `Nombre`;
            inputNombre.className = 'input-field';
            inputNombre.required = true;

            const divApellido = document.createElement('div');
            divApellido.className = 'form-field';
            const inputApellido = document.createElement('input');
            inputApellido.type = 'text';
            inputApellido.id = `apellido${i}`;
            inputApellido.name = `apellido${i}`;
            inputApellido.placeholder = `Apellido`;
            inputApellido.className = 'input-field';
            inputApellido.required = true;

            divNombre.appendChild(inputNombre);
            divApellido.appendChild(inputApellido);
            
            camposAdicionales.appendChild(divNombre);
            camposAdicionales.appendChild(divApellido);
        }
    }
}


