// Array de objetos com os projetos
const projects = [
  {
    name: "Portfólio - Paulo Henrique Nantet",
    description: "Um portfólio feito com código limpo, alma de 8-bits e um toque de neon dos anos 90. Porque um bom design, como um bom jogo, nunca envelhece. 🕹️" ,
    image: "./assets/images/projeto1-screenshot.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Formspree", "Stylelint"],
    githubUrl: "https://github.com/PauloNantet/portfolio-paulonantet",
    ariaLabel: "Ver projeto Portfólio - Paulo Henrique Nantet no GitHub"
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