// Initialisation Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDX8HVSnXEniFICbDlDZS4vjzXoLZ3X6Kc",
    authDomain: "worldsolution-3608f.firebaseapp.com",
    projectId: "worldsolution-3608f",
    storageBucket: "worldsolution-3608f.appspot.com",
    messagingSenderId: "314094225224",
    appId: "1:314094225224:web:d5504d179bbb50e994957d"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Éléments DOM
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const forgotPage = document.getElementById('forgot-page');
const mainPage = document.getElementById('main-page');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const showLoginFromForgot = document.getElementById('show-login-from-forgot');
const forgotPassword = document.getElementById('forgot-password');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgotForm = document.getElementById('forgot-form');
const menuBtn = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');
const usernameDisplay = document.getElementById('username-display');
const welcomeMessage = document.getElementById('welcome-message');
const logoutBtn = document.getElementById('logout-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const joinBtn = document.getElementById('join-btn');
const aboutModal = document.getElementById('about-modal');
const contactModal = document.getElementById('contact-modal');
const joinModal = document.getElementById('join-modal');
const closeModals = document.querySelectorAll('.close-modal');
const downloadBtn = document.getElementById('download-btn');
const slides = document.querySelectorAll('.slide');
const contactForm = document.getElementById('contact-form');
const downloadItemRdc = document.getElementById('download-item-rdc');
const downloadGeneratePass = document.getElementById('download-generate-pass');
const downloadPdfViewer = document.getElementById('download-pdf-viewer');

// Variables
let currentSlide = 0;
const slideInterval = 3000; // 3 secondes
let slideIntervalId;

// Fonctions
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}

function showModal(modal) {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
}

function toggleMenu() {
    menuNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    if (menuNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startSlideshow() {
    if (slideIntervalId) clearInterval(slideIntervalId);
    const isMobile = window.innerWidth <= 768;
    slideIntervalId = setInterval(nextSlide, isMobile ? 4000 : 3000);
}

function stopSlideshow() {
    clearInterval(slideIntervalId);
}

function manageAuthState(user) {
    if (user) {
        // Utilisateur connecté
        usernameDisplay.textContent = user.email ? user.email.split('@')[0] : 'Utilisateur';
        showPage(mainPage);
        startSlideshow();
    } else {
        // Utilisateur non connecté
        showPage(loginPage);
        stopSlideshow();
    }
    
    // Fermer le menu et les modales
    menuNav.classList.remove('active');
    menuBtn.classList.remove('active');
    closeAllModals();
    document.body.style.overflow = 'auto';
}

function downloadApp(url) {
    window.location.href = url;
}

// Écouteurs d'événements
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(registerPage);
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(loginPage);
});

showLoginFromForgot.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(loginPage);
});

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(forgotPage);
});

menuBtn.addEventListener('click', toggleMenu);

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(aboutModal);
    menuNav.classList.remove('active');
    menuBtn.classList.remove('active');
});

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(contactModal);
    menuNav.classList.remove('active');
    menuBtn.classList.remove('active');
});

joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(joinModal);
    menuNav.classList.remove('active');
    menuBtn.classList.remove('active');
});

closeModals.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadApp('https://github.com/WorldSolutionRdc/WorldSolutionRdc.github.io/raw/main/Item_Rdc.apk');
});

downloadItemRdc.addEventListener('click', (e) => {
    e.preventDefault();
    downloadApp('https://github.com/WorldSolutionRdc/WorldSolutionRdc.github.io/raw/main/Item_Rdc.apk');
});

downloadGeneratePass.addEventListener('click', (e) => {
    e.preventDefault();
    downloadApp('https://github.com/WorldSolutionRdc/WorldSolutionRdc.github.io/raw/main/Generate_Pass.apk');
});

downloadPdfViewer.addEventListener('click', (e) => {
    e.preventDefault();
    downloadApp('https://github.com/WorldSolutionRdc/WorldSolutionRdc.github.io/raw/main/Pdf_Viewer.apk');
});

// Gestion des formulaires
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            alert(error.message);
        });
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas!');
        return;
    }
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Optionnel: Enregistrer le nom complet dans Firebase
            const name = document.getElementById('register-name').value;
            usernameDisplay.textContent = name;
        })
        .catch((error) => {
            alert(error.message);
        });
});

forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    
    auth.sendPasswordResetEmail(email)
        .then(() => {
            alert('Un email de réinitialisation a été envoyé!');
            showPage(loginPage);
        })
        .catch((error) => {
            alert(error.message);
        });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès!');
    closeAllModals();
});

// Fermer le menu quand on clique à l'extérieur
document.addEventListener('click', (e) => {
    if (menuNav.classList.contains('active') && 
        !menuBtn.contains(e.target) && 
        !menuNav.contains(e.target)) {
        toggleMenu();
    }
});

// Gestion de l'état d'authentification
auth.onAuthStateChanged((user) => {
    manageAuthState(user);
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    // Vérifier si les images sont chargées
    slides.forEach(slide => {
        slide.onerror = function() {
            console.error("Image non trouvée: ", slide.src);
            slide.style.backgroundColor = "#e74c3c"; // Rouge pour erreur visible
        };
        
        slide.onload = function() {
            console.log("Image chargée: ", slide.src);
        };
    });
    
    // Démarrer le slideshow
    startSlideshow();
});