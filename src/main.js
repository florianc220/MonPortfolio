import './style.css'
import './timeline.css'
import './caroussel.css'
import './navbar.css'

const navbar = document.getElementById('mainNavbar');

// Variable pour détecter l'arrêt du défilement
let isScrolling;

// Fonction pour gérer l'affichage de la navbar
function handleNavbarVisibility() {
  // Masque la navbar lors du défilement
  navbar.classList.add('hidden-navbar');
  
  // Remet la navbar visible quand le défilement s'arrête
  clearTimeout(isScrolling); // Annule tout autre timeout en cours
  isScrolling = setTimeout(function() {
    navbar.classList.remove('hidden-navbar');
  }, 150); // Affiche la navbar après un délai de 150ms sans scroll
}

// Écouteur d'événement pour le défilement
document.addEventListener('scroll', handleNavbarVisibility);

// Initialisation pour s'assurer que la navbar est visible au début
navbar.classList.remove('hidden-navbar');
document.getElementById("currentYear").textContent = new Date().getFullYear();
