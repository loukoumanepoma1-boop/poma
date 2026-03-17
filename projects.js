const projects = [
    {
        title: "Plateforme E-commerce",
        description: "Application complète avec panier, paiement mobile et dashboard admin.",
        stack: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Gestion Scolaire",
        description: "Gestion élèves, enseignants, notes et statistiques.",
        stack: ["Node.js", "Express", "MongoDB"]
    },
    {
        title: "Application RH",
        description: "Gestion employés, salaires et congés.",
        stack: ["PHP", "MySQL"]
    },
    {
        title: "Dashboard Surveillance DB",
        description: "Monitoring des bases de données en temps réel.",
        stack: ["React", "API REST"]
    },
    {
        title: "App Mobile Stock",
        description: "Application mobile pour gestion des produits.",
        stack: ["React Native", "Firebase"]
    },
    {
        title: "Blog Tech",
        description: "Blog personnel pour partager mes connaissances.",
        stack: ["Next.js", "MongoDB"]
    }
];

const projectsPerPage = 3;
let currentPage = 1;

const projectGrid = document.getElementById("projectGrid");
const pagination = document.getElementById("pagination");

function displayProjects() {
    projectGrid.innerHTML = "";

    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const paginatedProjects = projects.slice(start, end);

    paginatedProjects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 80)}...</p>
                <div class="stack">
                    ${project.stack.map(tech => `<span>${tech}</span>`).join("")}
                </div>
                <button class="btn primary details-btn">Voir détails</button>
            </div>
        `;

        card.querySelector(".details-btn").addEventListener("click", () => openModal(project));
        projectGrid.appendChild(card);
    });
}

function setupPagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(projects.length / projectsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.classList.add("page-btn");

        if (i === currentPage) btn.classList.add("active");

        btn.addEventListener("click", () => {
            currentPage = i;
            displayProjects();
            setupPagination();
        });

        pagination.appendChild(btn);
    }
}

function openModal(project) {
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalDescription").innerText = project.description;

    const stackContainer = document.getElementById("modalStack");
    stackContainer.innerHTML = project.stack.map(tech => `<span>${tech}</span>`).join("");

    document.getElementById("projectModal").style.display = "flex";
}

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("projectModal").style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target.id === "projectModal") {
        document.getElementById("projectModal").style.display = "none";
    }
});

displayProjects();
setupPagination();