// Array de objetos com os projetos
const projects = [
  {
    name: "Pixel Shop",
    description: "Loja virtual com design inspirado em jogos da Super Nintendo, usando HTML, CSS e JavaScript puro.",
    image: "./assets/images/projeto1-screenshot.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/paulonantet/pixel-shop",
    ariaLabel: "Ver projeto Pixel Shop no GitHub"
  }
];

// Função para renderizar os projetos no DOM
function renderProjects() {
  const projectsList = document.getElementById("projects-list");

  // Limpa a lista (caso já exista conteúdo)
  projectsList.innerHTML = "";

  // Para cada projeto, cria o HTML e insere na lista
  projects.forEach(project => {
    const projectItem = document.createElement("li");
    projectItem.className = "projects__item";

    projectItem.innerHTML = `
      <a href="${project.githubUrl}" class="projects__link" target="_blank" rel="noopener noreferrer" aria-label="${project.ariaLabel}">
        <img src="${project.image}" alt="Screenshot do projeto '${project.name}'" class="projects__image" loading="lazy" />
        <h3 class="projects__name">${project.name}</h3>
        <p class="projects__description">${project.description}</p>
        <div class="projects__tech">
          ${project.technologies.map(tech => `<span class="projects__tech-item">${tech}</span>`).join("")}
        </div>
      </a>
    `;

    projectsList.appendChild(projectItem);
  });
}

// Executa a função quando a página carregar
document.addEventListener("DOMContentLoaded", renderProjects);