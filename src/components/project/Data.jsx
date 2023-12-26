import Projectingressoja from "../../../src/assets/ingressoja.jpeg";  
import ProjectComenteSobre from "../../../src/assets/ComenteSobre.jpeg";
import ProjectBusinessIA from "../../../src/assets/BusinessIA.jpg";  
import ProjectAtivaInvestimentos from "../../../src/assets/AtivaInvestimentos.jpg";
import ProjectCalendarioSUS from "../../../src/assets/CalendarioSUS.jpg";
import ProjectRedesSociais from "../../../src/assets/RedesSociais.jpg";
import ProjectCurrículoWeb from "../../../src/assets/CurriculoWeb.jpg";

export const projectsData = [
  {
    id: 1,
    image: Projectingressoja,
    title: "ingressoja",
    category: "backend",
    codeLink:"https://github.com/GabrielAlvesGit/ingressoja",
    description: "Site de eventos onde o usuário pode escolher um filme, peça, palestra de sua preferência - IFSP em 2023.",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
  },
  {
    id: 2,
    image: ProjectComenteSobre,
    title: "ComenteSobre",
    category: "backend",
    codeLink:"https://github.com/GabrielAlvesGit/ComenteSobre-EngenhariaSoftwareIII-IFSP",
    description: "Sistema web que permite aos usuários comentarem sobre tópicos específicos semelhante a um fórum - IFSP em 2023.",
    technologies: ["HTML", "CSS", "JavaScript", "SQLite", "Python", "Django", "Figma",  "Jira",],
  },
  {
    id: 3,
    image: ProjectBusinessIA,
    title: "BusinessIA-PI",
    category: "frontend",
    pageLink: "https://6546b8a8ffce14594668e39b--sprightly-pothos-2f8718.netlify.app/",
    codeLink: "https://github.com/GabrielAlvesGit/BusinessIA-PI",
    description: "Objetivo criar um website especializado para atender às necessidades da Business.IA, Inteligência Artificial e Análise de Dados, alinhadas com Estratégias de Marketing - IFSP em 2023.",
    technologies: ["HTML","CSS", "JavaScript", "SQL"]
  },
  {
    id: 4,
    image: ProjectAtivaInvestimentos,
    title: "Ativa Investimentos",
    category: "frontend",
    pageLink: "https://ativainvestimentos-estagio-gabriel.netlify.app/",
    codeLink: "https://github.com/GabrielAlvesGit/AtivaInvestimentospages",
    description: "Utilizei Vue.js e CSS para aprimorar meus conhecimentos, desenvolvendo uma clonagem da página da empresa Ativa Investimentos com o objetivo de estudo - em 2023.",
    technologies: ["HTML","CSS", "JavaScript", "Vue.js"]
  },
  {
    id: 5,
    image: ProjectCalendarioSUS,
    title: "Calendário SUS",
    category: "backend",
    pageLink: "https://www.linkedin.com/posts/gabrielalv3s_api-final-activity-6934473171903352832-4F0i?utm_source=share&utm_medium=member_desktop",
    codeLink: "https://www.linkedin.com/posts/gabrielalv3s_api-final-activity-6934473171903352832-4F0i?utm_source=share&utm_medium=member_desktop",
    description: "Desafio do projeto foi desenvolver um calendário para atender os pacientes através do SUS com uma agenda online PI - Senac em 2022.",
    technologies: ["HTML","CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    id: 6,
    image: ProjectRedesSociais,
    title: "Redes Sociais",
    category: "frontend", 
    pageLink: "https://gabrielalvesgit.github.io/Loading/",
    codeLink:"https://github.com/GabrielAlvesGit/portf-lio",
    description: "Portfólio redes sociais antes da existência de ferramentas como o Linktree e ChatGPT, preenchendo uma lacuna que essas ferramentas ocupam atualmente - Senac em 2022.",
    technologies: ["HTML","CSS", "JavaScript"],
  },
  {
    id: 7,
    image: ProjectCurrículoWeb,
    title: "Currículo Web",
    category: "frontend",
    pageLink: "https://gabrielalvesgit.github.io/Meu-Curriculo-Web/",
    codeLink:"https://github.com/GabrielAlvesGit/Meu-Curriculo-Web",
    description: "Desenvolva meu primiro projeto abrangente para consolidar meus conhecimentos adquiridos até agora em 2022 - Senac.",
    technologies: ["HTML","CSS", "Bootstrap"],
  },
];

export const projectsNav = [
  {
    name:"todos",
  },
  {
    name:"frontend",
  },
  {
    name:"backend",
  },
];