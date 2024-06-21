import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tweet,
  elearning,
  tripguide,
  threejs,
  ensiasd,
  est,
  yanecode,
  elec,
  python,
  php,
  java,
  laravel,
  postgre,
  mysql,
  bootstrap,
  mrelec,
  pfe,
  stock,
  club,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Big Data, AI, and Data Science Engineering",      
    company_name: "National Higher School of Artificial Intelligence and Data Science (ENSIASD). | UIZ",
    icon: ensiasd,
    iconBg: "#383E56",
    date: "DEC 2023 - Present",
    points: [
      "Currently enrolled as a prospective engineer at (ENSIASD) Taroudant, where I eagerly anticipate immersing myself in the domains of Data Science, Big Data, and AI! 🚀 Excitedly looking ahead to acquiring invaluable skills in these groundbreaking fields."
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "YaneCode | Safi, Morocco",
    icon: yanecode,
    iconBg: "#E6DEDD",
    date: "Avr 2023 - Mai 2023",
    points: [
      "Design and development of an online learning platform (E-learning) . Front-end: HTML, CSS, JS, Bootstrap. Back-end: Laravel. Worked with agile methodology (Kanban)."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "MR.elec | CasaBlanca, Morocco",
    icon: elec,
    iconBg: "#383E56",
    date: "Août 2022 - Sept 2022",
    points: [
      "Development of a website for solar pumping simulation and material management. In-depth knowledge of the solar industry. Front-end: HTML, CSS, Bootstrap. Back-end: PHP."
    ],
},
{
  title: "Computer Engineering",
  company_name: "Safi Higher School of Technology (EST) safi | UCA ",
  icon: est,
  iconBg: "#E6DEDD",
  date: " 2021 -  2023",
  points: [
    "Majoring in Computer Science, and earned a University Diploma in Technology. Delved into programming, algorithms, and system architecture, while completing practical projects and engaging in extracurricular activities to underscore dedication to learning and flexibility."
  ],
},
];

const testimonials = [];

const projects = [
  {
    name: "Sentiment Analysis",
    description:
    "Developed a Sentiment Analysis project on Twitter, collecting data using Selenium in Python. Analyzed the tweets using (NLP) techniques to classify them as positive, negative, or neutral. This project demonstrates proficiency in data collection, preprocessing, and machine learning model.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: tweet,
    source_code_link: "https://github.com/Jadir99/Analyse-des-sentiments-sur-Twitter",
  },
  {
    name: "E-Learning",
    description:
    "Developed a comprehensive E-learning web application designed to facilitate online education. The platform includes user-friendly interfaces created with HTML, CSS, JS, and Bootstrap for the front-end, and a robust back-end built with Laravel."
    ,tags: [
      {
        name: "E-Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: elearning,
    source_code_link: "https://github.com/Jadir99/E-learning/",
  },
  {
    name: "Club Management",
    description:
    "A Club Management Website that streamlines member registration, event scheduling, and reclamations. It offers easy administration and member interaction, ensuring efficient communication and organization within the club.",
    tags: [
      {
        name: "Club-Management",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: club,
    source_code_link: "https://github.com/jadir99/ClubManagement",
  },
  {
    name: "MisterElec",
    description:
    "Development of a solar pumping simulation and material management website, demonstrating in-depth knowledge of the solar industry. Front-end technologies used include HTML, CSS, and Bootstrap, while the back-end is powered by PHP.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mrelec,
    source_code_link: "https://github.com/jadir99/simulation-de-pompage-solaire-et-gestion-des-mat-riaux",
  },
  {
    name: "Stock-Management",
    description:
    "A Stock Management Website designed to efficiently track and manage inventory levels, orders, and deliveries. It allows for real-time inventory updates and report generation, streamlining operations and enhancing inventory control.",
    tags: [
      {
        name: "Stock-Management",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/jadir99/Gestion-de-stock",
  },
  {
    name: "Python-Based Web Application for PostScript Formula Translation",
    description:
    "A Python-based web application designed to translate infix formulas into PostScript code, facilitating seamless exportation in postfix notation. The project simplifies the process of converting mathematical expressions into a format suitable for PostScript rendering.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pfe,
    source_code_link: "https://github.com/Jadir99/pfe_backend_frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
