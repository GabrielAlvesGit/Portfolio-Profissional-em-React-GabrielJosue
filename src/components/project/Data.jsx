import Projectingressoja from "../../../src/assets/ingressoja.jpeg";  
import ProjectComenteSobre from "../../../src/assets/ComenteSobre.jpeg";
import ProjectBusinessIA from "../../../src/assets/BusinessIA.jpg";  
import ProjectAtivaInvestimentos from "../../../src/assets/AtivaInvestimentos.jpg";
import ProjectCalendarioSUS from "../../../src/assets/CalendarioSUS.jpg";
import ProjectRedesSociais from "../../../src/assets/RedesSociais.jpg";
import ProjectCurrículoWeb from "../../../src/assets/CurriculoWeb.jpg";

// Temas de cores importação das img-color
import Theme1 from '../../../src/assets/purple.png';
import Theme2 from '../../../src/assets/red.png';
import Theme3 from '../../../src/assets/blueviolet.png';
import Theme4 from '../../../src/assets/blue.png';
import Theme5 from '../../../src/assets/goldenrod.png';
import Theme6 from '../../../src/assets/magenta.png';
import Theme7 from '../../../src/assets/yellowgreen.png';
import Theme8 from '../../../src/assets/orange.png';
import Theme9 from '../../../src/assets/green.png';
import Theme10 from '../../../src/assets/cancelarColor.svg';

export const projectsData = [
  {
    id: 1,
    image: Projectingressoja,
    title: "ingressoja",
    category: "backend",
    codeLink:"https://github.com/GabrielAlvesGit/ingressoja",
    description: " ",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
  },
  {
    id: 2,
    image: ProjectComenteSobre,
    title: "ComenteSobre",
    category: "backend",
    codeLink:"https://github.com/GabrielAlvesGit/ComenteSobre-EngenhariaSoftwareIII-IFSP",
    description: " ",
    technologies: ["HTML", "CSS", "JavaScript", "SQLite", "Python", "Django", "Figma",  "Jira",],
  },
  {
    id: 3,
    image: ProjectBusinessIA,
    title: "BusinessIA-PI",
    category: "frontend",
    pageLink: "https://6546b8a8ffce14594668e39b--sprightly-pothos-2f8718.netlify.app/",
    codeLink: "https://github.com/GabrielAlvesGit/BusinessIA-PI",
    description: " ",
    technologies: ["HTML","CSS", "JavaScript", "SQL"]
  },
  {
    id: 4,
    image: ProjectAtivaInvestimentos,
    title: "Ativa Investimentos",
    category: "frontend",
    pageLink: "https://ativainvestimentos-estagio-gabriel.netlify.app/",
    codeLink: "https://github.com/GabrielAlvesGit/AtivaInvestimentospages",
    description: " ",
    technologies: ["HTML","CSS", "JavaScript", "Vue.js"]
  },
  {
    id: 5,
    image: ProjectCalendarioSUS,
    title: "Calendário SUS",
    category: "backend",
    pageLink: "https://www.linkedin.com/posts/gabrielalv3s_api-final-activity-6934473171903352832-4F0i?utm_source=share&utm_medium=member_desktop",
    codeLink: "https://www.linkedin.com/posts/gabrielalv3s_api-final-activity-6934473171903352832-4F0i?utm_source=share&utm_medium=member_desktop",
    description: " ",
    technologies: ["HTML","CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    id: 6,
    image: ProjectRedesSociais,
    title: "Redes Sociais",
    category: "frontend", 
    pageLink: "https://gabrielalvesgit.github.io/Loading/",
    codeLink:"https://github.com/GabrielAlvesGit/portf-lio",
    description: " ",
    technologies: ["HTML","CSS", "JavaScript"],
  },
  {
    id: 7,
    image: ProjectCurrículoWeb,
    title: "Currículo Web",
    category: "frontend",
    pageLink: "https://gabrielalvesgit.github.io/Meu-Curriculo-Web/",
    codeLink:"https://github.com/GabrielAlvesGit/Meu-Curriculo-Web",
    description: " ",
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

// Para as palheta de cores
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: '', /*hsl(42, 100%, 50%)*/
  },
];

