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
const iphoneBtn = document.getElementById('iphone-btn');
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
const mainContent = document.getElementById('main-content');
const loadingScreen = document.querySelector('.loading-screen');

// Données pour l'option iPhone
const folderIcons = [
    'ic_bcdc_24.png', 'ic_rawbank_24.png', 'ic_tmb_24.png',
    'ic_fbnbank_24.png', 'ic_finca_24.png', 'ic_ceni_24.png',
    'ic_ena_24.png', 'ic_activa_24.png', 'ic_access_24.png',
    'ic_entretien_24.png', 'ic_afriland_24.png', 'ic_bcc_24.png',
    'ic_bgfibank_24.png', 'ic_ecobank_24.png', 'ic_uba_24.png',
    'ic_rawsur_24.png', 'ic_advans_24.png', 'ic_autre.png'
];

const folderNames = [
    "BCDC", "RawBank", "TMB", "FBNBank", "Finca", "Ceni", "ENA", "Activa",
    "Access", "Entretien", "Afriland", "BCC", "BGFIBank", "Ecobank", "UBA",
    "Rawsur", "Advans", "Autres"
];

const PDF_MAPPINGS = {
    "BCDC": [
        "1g94CoVkQSwYFZLmIiW3nq0fS6FVkjq5G",
        "1giMWK1n3aG3SMtqKS0s6OricsYkmO6mL",
        "1gJvvMy55RVyH6WN8HPhLWP6WUXTMFlRl",
        "1gD-LBz5oFtVfni8SHO-Vfw8xtWT4We-A",
        "1gKsBUeBJxvRPiKooJuYf9_Cs0jMp5V-U",
        "1gIcSue1uQq1JUNHUfk5P5jgA22RpJxRp",
        "1gJxkiKMysNz8-40pT5Qm8J-3YxDUkylm"
    ],
    "RawBank": ["1M75dZ0N58ENi2Bl9IgwBqIXK2_YGtygU"],
    "TMB": ["1fCnTq8If2_3d-Dja_k1nt8SUlgeFOfN6"],
    "FBNBank": ["1aJnOBFTePEb558XSI5t1Zg23dUzsaKdA"],
    "Finca": ["1FUkZAOXUZLuhNTD2LmuXYES5kkRZV5YK"],
    "Ceni": ["1ddYrVJxQQx97qG2iEG7sy6v2Jymfr5Lr", "1rIPBq0QquMK5rm8ULBDayro9oYwAZyu3"],
    "ENA": ["1EIsaEANhH25vPzkvsIIsWlMwS4dVE8KZ"],
    "Activa": [],
    "Access": ["1Fks0vwb0P7ErnIuvuM7JActOEg2KKQ_u"],
    "Entretien": [
        "1Fwq4T2_X708El_2Pye9v4iah22BfIjMx",
        "1o4_lhf0i99MRhczb8n6is_GdM639elAb"
    ],
    "Afriland": [],
    "BCC": ["1FLMsooqNP29f4mGffdBlf4Zr6U_xp3Ql"],
    "BGFIBank": ["1ddYrVJxQQx97qG2iEG7sy6v2Jymfr5Lr", "1d_w2SQqmN2f6GVhKYcu4ObUMMgit1014"],
    "Ecobank": ["1FP9bnBqC3WiroeNnvLqvCtX7sKqnWebZ"],
    "UBA": ["1GyLz9jEyOfchlDVH0rQGciIkTYoNkHV-", "1gKsBUeBJxvRPiKooJuYf9_Cs0jMp5V-U"],
    "Rawsur": [],
    "Advans": ["1rAirCsXcnzIbXbTXmwsV3J3niSRZzh3F"],
    "Autres": ["1rWvsVQAUiPJUuJyP-ZOFG6axtuefxPoe"]
};

const videoItems = [
    { id: "1okMAMo2D6r_GYwG6sajSx-78ZcWfllpa", title: "Introduction au Test", number: 1, featured: true },
    { id: "1olwH4Cuqr_FJGqyftJ-EaQ6N9LKCXKMy", title: "Réussir les tests psychotechniques", number: 2 },
    { id: "1ozfzlnrR5VXJHfKOl8H6UoEa16CHmAwn", title: "Préparation aux entretiens", number: 3, featured: true },
    { id: "1q5pYt95QKkWUWAi7Z6_Yk-ab1MCj2VLq", title: "Se présenter en entretien d'embauche", number: 4 },
    { id: "1qAGhCeiMS3VI4egtyfT_CtV-UIsmv1No", title: "Entretien : présentez-vous", number: 5, featured: true },
    { id: "1qCAAzrHwW1q5JTHjzsFulYXvXjBCg8W-", title: "Parlez-moi de vous (2 minutes)", number: 6 },
    { id: "1qMQGfAC9OQ-UAKR7xtu5-juUHZb9iV74", title: "Bien se présenter en entretien", number: 7, featured: true },
    { id: "1sWRuL1VfiMOg2t5r9QFcSq67BCfZGR62", title: "Tests logiques corrigés", number: 8 },
    { id: "1sTe9teINUavpaacQvQYTpB0A96Uwk4Ed", title: "Test alphabétique", number: 9, featured: true },
    { id: "11Z3DY0OXHJo-MdYP47Nv-3oSAWncbOMU", title: "Décrocher le job de tes rêves", number: 10 },
    { id: "11g-D5mH1rYQXKZDwDmNY7GS6_dzyeYag", title: "Astuces dans le kit du candidat", number: 11, featured: true },
    { id: "10zSQpdeVtZWz8PSZhOY05OZdcpjEpiny", title: "5 questions les plus difficiles", number: 12 },
    { id: "10rW4qNfrOWOHzR8lOFy1gj1wUhUoUURf", title: "Réussir son entretien d'embauche", number: 13, featured: true },
    { id: "10sa4dxNneq-YmqAGpUudyUrHkN2iMcYV", title: "Persuader un recruteur", number: 14 },
    { id: "111mkjO_jAweOkJeKz_e0ytiZZw9EJ3yB", title: "Présentez-vous: exemples de réponses", number: 15, featured: true },
    { id: "1B-dZkOxCZ7tpB6cAnVlUBycH3PaBqjkM", title: "Comment donner tes prétentions salariales", number: 16 },
    { id: "1Ax5h-43gtx58RMjebuGt94WIglGDQWg0", title: "Quelles sont vos prétentions salariales", number: 17, featured: true },
    { id: "1AqlH6VQpZbdPXlOqfL9OyAtgp97YDCBA", title: "Quelle est votre prétention salariale", number: 18 },
    { id: "1An8b211dP1kinXULlLJO3tPWTqaAFE7L", title: "Question prétentions salariales", number: 19, featured: true },
    { id: "1AhyqxLHuZ5_QAMceGaFcg3kA5NGUxeX-", title: "Comment négocier son salaire en entretien", number: 20 },
    { id: "1A6cSpxeftjIAXq7MLs-lCsOYiJcuK_Jp", title: "Les 3 questions à poser à la fin d'un entretien", number: 21, featured: true },
    { id: "1A7ngKD3pTRzXiNlApHIz2Pa0qQsnl5I2", title: "10 QUESTIONS RÉPONSES en Entretien d'embauche", number: 22 },
    { id: "1A-a2kFXtGm3wzhOdj2IxNidBuu87_SqN", title: "7 questions pièges en entretien d'embauche", number: 23, featured: true },
    { id: "1A9YXOU87JsHv4jKwVsSc02F5bW7cYSzr", title: "LA question piège à préparer en entretien d'embauche", number: 24 },
    { id: "1AKHui3qwIQgVU7y2_QIL7Q3TauIsYUtn", title: "COMMENT RÉPONDRE À LA QUESTION « POURQUOI VOUS ET PAS UN AUTRE »", number: 25, featured: true },
    { id: "1AR8gSbncVt4spGz-fR0kazGdKn_WxVRN", title: "Pourquoi vous et pas un autre - Exemples de réponses", number: 26 },
    { id: "1A8qVkJ7Sfy_pxBJ-UnD3CTpLe3WwYVeo", title: "Entretien d'embauche questions et réponses", number: 27, featured: true },
    { id: "1A1XTlOOzzl9QbfIUvS6p88QD7OaDvWnv", title: "Questions réponses en entretien d'embauche", number: 28 },
    { id: "1A68oQoaPDToPFziWi_njYiMemcRcTl0X", title: "Entretien d'embauche - 15 questions pièges decryptées pour vous", number: 29, featured: true },
    { id: "1AcMz8l7594I3Rj_VTOPIKltnhTjWSsmt", title: "Et toi quelles sont tes prétentions salariales", number: 30 },
    { id: "1Ja-02IAtODWVEJw2S5UijQ8IPBR2h0ZX", title: "Les jeux des matrices", number: 31, featured: true },
    { id: "1JZNCDriCzGAReq01bzMApQZ_ZN0rm2Tw", title: "Test psychotechnique triangle avec des chiffres réponse 1", number: 32 },
    { id: "1J1DZIWzervP7l0EmQd0g8nPZqlWuD4g3", title: "Test psychotechnique - Test logique - exercices corrigés N°02", number: 33, featured: true },
    { id: "1JYKc42AHeQksRnoga6P4Mv5yI6hnXWTL", title: "Test Psychotechnique: Domino", number: 34 },
    { id: "1JOTDywxTwRmWrCW79IVNydjxJP5w7ioq", title: "QCM question psychotechnique", number: 35, featured: true },
    { id: "1JULoBjxf7d6wQTefoGaW26h7E6UUePwa", title: "Test psychotechnique - Test de logique - exercices corrigés", number: 36 },
    { id: "1JLjIuS1PC6ATkFT24zECcBPA3KaGJNMB", title: "Test Psychotechnique - Série de Domino (Simple et croisée)", number: 37, featured: true },
    { id: "1JKFHNYB4Q3RENq8q-xTrQtnu_4TOtlnX", title: "Les Tests Psychotechniques de l'Armée", number: 38 },
    { id: "1JCU6wrcdFpYDVEnHWSO1d2eEn0Nm9gyD", title: "Epreuve Test Logique - Concours", number: 39, featured: true },
    { id: "1J9afswMyoBJg1-CY4XJ6bfszKKitlQby", title: "Test psychotechnique grille corrigé", number: 40 },
    { id: "1J5BAKkUhKZhfNIytd_fQso430gdzTtuk", title: "Test Psychotechnique: TEST Des CARTES NIVEAU FACILE", number: 41, featured: true },
    { id: "1IzTJXLI0cIK8A4nbIn17GOdzdRZpUrQz", title: "Test psychotechnique - Test logique - Intrus Graphique", number: 42 }
];

// Variables
let currentSlide = 0;
const slideInterval = 3000; // 3 secondes
let slideIntervalId;
let originalContent;

// Fonctions
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    resetScroll();
}

function resetScroll() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
    slideIntervalId = null;
}

function manageAuthState(user) {
    if (user) {
        // Utilisateur connecté
        usernameDisplay.textContent = user.email ? user.email.split('@')[0] : 'Utilisateur';
        showPage(mainPage);
        
        // Précharger les ressources critiques
        preloadCriticalResources().then(() => {
            startSlideshow();
            document.body.classList.add('loaded');
        });
        
        // Sauvegarder le contenu principal original
        originalContent = mainContent.innerHTML;
        
        // Gestion du bouton retour pour revenir au contenu principal
        window.handleBackButton = function() {
            if (mainContent.innerHTML !== originalContent) {
                mainContent.innerHTML = originalContent;
                startSlideshow();
                resetScroll();
                return true; // Indique que nous avons géré le retour
            }
            return false;
        };
    } else {
        // Utilisateur non connecté
        showPage(loginPage);
        stopSlideshow();
        document.body.classList.add('loaded');
    }
    
    // Fermer le menu et les modales
    menuNav.classList.remove('active');
    menuBtn.classList.remove('active');
    closeAllModals();
    document.body.style.overflow = 'auto';
}

function preloadCriticalResources() {
    return new Promise((resolve) => {
        // Précharger les icônes FontAwesome
        const iconPreload = document.createElement('div');
        iconPreload.style.display = 'none';
        iconPreload.innerHTML = `
            <i class="fas fa-mobile-alt"></i>
            <i class="fas fa-folder"></i>
            <i class="fas fa-video"></i>
            <i class="fas fa-arrow-left"></i>
            <i class="fas fa-file-pdf"></i>
        `;
        document.body.appendChild(iconPreload);
        
        // Précharger les images critiques
        const imagePreload = document.createElement('div');
        imagePreload.style.display = 'none';
        const imagesToPreload = [
            'images/ic_pdf.png',
            'images/ic_video.png',
            ...folderIcons.map(icon => `images/${icon}`)
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
            imagePreload.appendChild(img);
        });
        
        document.body.appendChild(imagePreload);
        
        // Donner un peu de temps pour le préchargement
        setTimeout(resolve, 300);
    });
}

function downloadApp(url) {
    window.location.href = url;
}

// Fonctions pour l'option iPhone
function showIphoneContent() {
    stopSlideshow();
    resetScroll();
    
    mainContent.innerHTML = `
        <div class="iphone-container">
            <h2><i class="fas fa-mobile"></i> iPhone 💥</h2>
            <div class="options-grid">
                <div class="option-card" id="items-option">
                    <i class="fas fa-folder"></i>
                    <span>Items</span>
                </div>
                <div class="option-card" id="videos-option">
                    <i class="fas fa-video"></i>
                    <span>Vidéos</span>
                </div>
            </div>
            <button class="back-btn" id="back-to-main">
                <i class="fas fa-arrow-left"></i> Retour à l'accueil
            </button>
        </div>
    `;
    
    document.getElementById('items-option').addEventListener('click', showItems);
    document.getElementById('videos-option').addEventListener('click', showVideos);
    document.getElementById('back-to-main').addEventListener('click', () => {
        mainContent.innerHTML = originalContent;
        startSlideshow();
        resetScroll();
    });
}

function showItems() {
    resetScroll();
    
    const foldersHTML = folderNames.map((name, index) => `
        <div class="folder-item" data-folder="${name}">
            <img src="images/${folderIcons[index]}" alt="${name}" class="folder-icon" loading="lazy">
            <span>${name}</span>
            <i class="fas fa-chevron-right"></i>
        </div>
    `).join('');
    
    mainContent.innerHTML = `
        <div class="items-container">
            <h2><i class="fas fa-folder-open"></i> Items</h2>
            <div class="folders-list">
                ${foldersHTML}
            </div>
            <button class="back-btn" id="back-to-options">
                <i class="fas fa-arrow-left"></i> Retour
            </button>
        </div>
    `;
    
    document.querySelectorAll('.folder-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const folderName = item.getAttribute('data-folder');
            showPdfFiles(folderName);
        });
    });
    
    document.getElementById('back-to-options').addEventListener('click', (e) => {
        e.preventDefault();
        showIphoneContent();
    });
}

function showPdfFiles(folderName) {
    resetScroll();
    
    const pdfs = PDF_MAPPINGS[folderName] || [];
    const pdfsHTML = pdfs.map((pdfId, index) => `
        <div class="pdf-item" data-pdf-id="${pdfId}" data-folder="${folderName}">
            <img src="images/ic_pdf.png" alt="PDF" class="pdf-icon" loading="lazy">
            <span>Document ${index + 1}</span>
        </div>
    `).join('');
    
    mainContent.innerHTML = `
        <div class="pdfs-container">
            <h2><i class="fas fa-file-pdf"></i> ${folderName}</h2>
            <div class="pdfs-list">
                ${pdfs.length > 0 ? pdfsHTML : '<p class="no-files">Aucun document disponible pour ce dossier</p>'}
            </div>
            <button class="back-btn" id="back-to-folders">
                <i class="fas fa-arrow-left"></i> Retour
            </button>
        </div>
    `;
    
    document.querySelectorAll('.pdf-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfId = item.getAttribute('data-pdf-id');
            const folder = item.getAttribute('data-folder');
            showPdfViewer(pdfId, folder);
        });
    });
    
    document.getElementById('back-to-folders').addEventListener('click', (e) => {
        e.preventDefault();
        showItems();
    });
}

function showPdfViewer(pdfId, folderName) {
    resetScroll();
    
    mainContent.innerHTML = `
        <div class="pdf-viewer-container">
            <div class="pdf-viewer-header">
                <button class="back-btn" id="back-to-pdfs">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
                <h3>${folderName}</h3>
            </div>
            <div class="pdf-viewer">
                <iframe src="https://drive.google.com/file/d/${pdfId}/preview" 
                        frameborder="0" 
                        style="width:100%; height:100%;"
                        allow="autoplay">
                </iframe>
            </div>
        </div>
    `;
    
    document.getElementById('back-to-pdfs').addEventListener('click', (e) => {
        e.preventDefault();
        showPdfFiles(folderName);
    });
}

function showVideos() {
    resetScroll();
    
    const videosHTML = videoItems.map(video => `
        <div class="video-item" data-video-id="${video.id}">
            <img src="images/ic_video.png" alt="Video" class="video-icon" loading="lazy">
            <span>${video.number}. ${video.title}</span>
        </div>
    `).join('');
    
    mainContent.innerHTML = `
        <div class="videos-container">
            <h2><i class="fas fa-video"></i> Vidéos</h2>
            <div class="videos-list">
                ${videosHTML}
            </div>
            <button class="back-btn" id="back-to-options">
                <i class="fas fa-arrow-left"></i> Retour
            </button>
        </div>
    `;
    
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const videoId = item.getAttribute('data-video-id');
            showVideoPlayer(videoId);
        });
    });
    
    document.getElementById('back-to-options').addEventListener('click', (e) => {
        e.preventDefault();
        showIphoneContent();
    });
}

function showVideoPlayer(videoId) {
    resetScroll();
    
    mainContent.innerHTML = `
        <div class="video-player-container">
            <div class="video-player-header">
                <button class="back-btn" id="back-to-videos">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            </div>
            <div class="video-player">
                <iframe src="https://drive.google.com/file/d/${videoId}/preview" 
                        frameborder="0" 
                        allowfullscreen
                        allow="autoplay">
                </iframe>
            </div>
        </div>
    `;
    
    document.getElementById('back-to-videos').addEventListener('click', (e) => {
        e.preventDefault();
        showVideos();
    });
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

iphoneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showIphoneContent();
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

// Gestion du bouton retour physique/navigateur
window.onpopstate = function() {
    if (!window.handleBackButton || !window.handleBackButton()) {
        if (menuNav.classList.contains('active')) {
            toggleMenu();
        } else if (document.querySelector('.modal.active')) {
            closeAllModals();
        }
    }
};

// Gestion de l'état d'authentification
auth.onAuthStateChanged((user) => {
    manageAuthState(user);
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Sauvegarde du contenu principal original
    originalContent = mainContent.innerHTML;
    
    // Vérifier si les images sont chargées
    slides.forEach(slide => {
        slide.onerror = function() {
            console.error("Image non trouvée: ", slide.src);
            slide.style.backgroundColor = "#e74c3c";
        };
        
        slide.onload = function() {
            console.log("Image chargée: ", slide.src);
        };
    });
    
    // Masquer le loader après le chargement
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});