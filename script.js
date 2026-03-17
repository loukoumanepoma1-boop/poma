// projects.js
// Données des projets
const projects = [
    {
        id: 1,
        title: "Boutique en ligne – Produits locaux",
        description: "Site e-commerce pour la vente de produits ivoiriens avec panier, filtre et intégration paiement mobile.",
        image: "images/projet-ecommerce.png",
        stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        liveLink: "https://demo-boutique.vercel.app",
        githubLink: "https://github.com/ton-pseudo/boutique-locale"
    },
    {
        id: 2,
        title: "Application de gestion de tâches",
        description: "Todo list moderne avec catégories, priorité, mode sombre/clair et sauvegarde locale.",
        image: "images/projet-todo.png",
        stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        liveLink: "https://todo-loukoumane.netlify.app",
        githubLink: "https://github.com/ton-pseudo/todo-app-js"
    },
    {
        id: 3,
        title: "Calculatrice scientifique web",
        description: "Calculatrice avec historique, fonctions trigonométriques, mode degré/radian et thème personnalisable.",
        image: "images/projet-calculatrice.png",
        stack: ["HTML5", "CSS Grid", "JavaScript"],
        liveLink: "https://calculatrice-demo.github.io",
        githubLink: "https://github.com/ton-pseudo/calculatrice-scientifique"
    },
    {
        id: 4,
        title: "Mon Portfolio Personnel",
        description: "Site responsive avec animations CSS, dark mode, bouton WhatsApp flottant.",
        image: "images/projet-portfolio.png",
        stack: ["HTML5", "CSS3", "JavaScript"],
        liveLink: "#",
        githubLink: "https://github.com/ton-pseudo/portfolio-html-css"
    }
];

// Pagination
const itemsPerPage = 6;
let currentPage = 1;

// Éléments DOM
const projectGrid = document.getElementById('projectGrid');
const paginationDiv = document.getElementById('pagination');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalStack = document.getElementById('modalStack');
const closeModal = document.getElementById('closeModal');

// Afficher les projets
function displayProjects() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProjects = projects.slice(start, end);
    
    let html = '';
    paginatedProjects.forEach(project => {
        html += `
            <div class="project-card" onclick="openModal(${project.id})">
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description.substring(0, 100)}...</p>
                    <div class="stack">
                        ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    projectGrid.innerHTML = html;
    displayPagination();
}

// Pagination
function displayPagination() {
    const pageCount = Math.ceil(projects.length / itemsPerPage);
    let html = '';
    
    for (let i = 1; i <= pageCount; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    paginationDiv.innerHTML = html;
}

// Changer de page
function changePage(page) {
    currentPage = page;
    displayProjects();
}

// Ouvrir modal
function openModal(id) {
    const project = projects.find(p => p.id === id);
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalStack.innerHTML = project.stack.map(tech => `<span>${tech}</span>`).join('');
    modal.style.display = 'flex';
}

// Fermer modal
closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', displayProjects);