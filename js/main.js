/**
 * QUANTICODE - JavaScript Principal
 * Animações, Particles.js e interatividade
 */

// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 50
});

// Configuração das partículas com repulse (se afastam do mouse)
const particlesConfig = {
  particles: {
    number: { 
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#4d68f2" },
    shape: { type: "circle" },
    opacity: { 
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.2 }
    },
    size: { 
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3d45b8",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },  // repulse = partículas se afastam do mouse
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
};

// Inicializar Particles no Hero
if (document.getElementById('hero-particles')) {
  particlesJS("hero-particles", particlesConfig);
}

// Inicializar Particles na seção da Equipe
if (document.getElementById('equipe-particles')) {
  particlesJS("equipe-particles", particlesConfig);
}

// Esconder cabeçalho no scroll
let lastScrollTop = 0;
const header = document.getElementById('main-header');
const scrollThreshold = 80;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    // Rolando para baixo - esconde o header
    header.classList.add('header-hidden');
  } else {
    // Rolando para cima - mostra o header
    header.classList.remove('header-hidden');
  }
  
  lastScrollTop = scrollTop;
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});