// --- 1. FUNCIÓN PARA EL ZOOM DE IMÁGENES (PROYECTO TIENDA) ---
function zoomImage(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    modal.style.display = "block";
    modalImg.src = element.src;
}

// --- 2. ANIMACIÓN DE SCROLL SUAVE PARA EL MENÚ ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- 3. LÓGICA DEL EFECTO MÁQUINA DE ESCRIBIR ---
const titulo = document.querySelector('.hero h1');
const texto = titulo.innerText;
titulo.innerText = '';
let i = 0;

function typeWriter() {
    if (i < texto.length) {
        titulo.innerText += texto.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// --- 4. CONTROL DINÁMICO DEL MENÚ (DESAPARECE AL MOVERSE) ---
let isScrolling;

// Control de visibilidad total del menú Sysbell
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 50) {
        // Al bajar más de 50px, desaparece todo (letras, logo y fondo)
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none"; // Evita que se le dé clic por error mientras no se ve
    } else {
        // Al estar arriba del todo, vuelve a aparecer
        nav.style.opacity = "1";
        nav.style.pointerEvents = "auto";
    }
});

// --- 5. EJECUCIÓN AL CARGAR LA PÁGINA ---
window.onload = typeWriter;