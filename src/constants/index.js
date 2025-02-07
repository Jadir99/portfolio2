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
  pfe,
  stock,
  club,
  neuralnetworktraining,
  azulai,
  lol,
  products,
  IT,
  gaming,
  robotic,
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
   {
    name: "Neural Network Training Web Application with Flask and TensorFlow",
    description: "Development of a web application with Flask and TensorFlow, allowing users to train neural networks through an intuitive interface and import their own data.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient"
      },
      {
        name: "tensorflow",
        color: "green-text-gradient"
      },
      {
        name: "python",
        color: "pink-text-gradient"
      }
    ],
    image: neuralnetworktraining,
    source_code_link: "https://github.com/Jadir99/Neural-network-training-web-application-with-Flask-and-TensorFlow"
  }, 
  {
    name: "AZUL-AI",
    description: "AZUL AI is an ambitious project aimed at transforming the tourism experience in Morocco through artificial intelligence. The project aims to offer visitors an immersive, informative, and culturally relevant experience throughout their journey.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient"
      },
      {
        name: "tourism",
        color: "green-text-gradient"
      },
      {
        name: "morocco",
        color: "pink-text-gradient"
      }
    ],
    image: azulai,
    source_code_link: "https://azulaimaroc.com/"
  },

  {
    name: "League of Legends Data Visualization Application",
    description: "This application visualizes League of Legends data to provide insights and analysis on player statistics and game performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient"
      },
      {
        name: "flask",
        color: "green-text-gradient"
      },
      {
        name: "league-of-legends",
        color: "pink-text-gradient"
      }
    ],
    image: lol,
    source_code_link: "https://github.com/Jadir99/league-of-legend-prediction-win/"
  },
  {
    name: "Sentiment Analysis from Product Reviews",
    description: "Implementation of a machine learning model to classify Amazon customer reviews into three categories: positive, negative, or neutral, using data collected via scraping reviews from the platform.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient"
      },
      {
        name: "python",
        color: "green-text-gradient"
      },
      {
        name: "nlp",
        color: "pink-text-gradient"
      }
    ],
    image:products,
    source_code_link: "https://github.com/Jadir99/Sentiment-analysis-from-product-reviews"
  },  {
    name: "E-learning for YaneCode",
    description: "An online educational platform for YaneCode, providing resources and online training for students in technology and programming.",
    tags: [
      {
        name: "elearning",
        color: "blue-text-gradient"
      },
      {
        name: "education",
        color: "green-text-gradient"
      },
      {
        name: "technology",
        color: "pink-text-gradient"
      }
    ],
    image: elearning,
    source_code_link: "https://yanecode.info/"
  },
  {
    name: "IT-Innovation Club of ENSA- Morocco",
    description: "The IT-Innovation Club of ENSA-Morocco focuses on technological innovation, artificial intelligence, and IoT.",
    tags: [
      {
        name: "innovation",
        color: "blue-text-gradient"
      },
      {
        name: "ai",
        color: "green-text-gradient"
      },
      {
        name: "iot",
        color: "pink-text-gradient"
      }
    ],
    image: IT,
    source_code_link: "https://it-club-ensiasd.netlify.app/"
  },
  {
    name: "YaneCode Gaming",
    description: "YaneCode Gaming, where every click becomes an adventure, invites you to explore our gaming universe.",
    tags: [
      {
        name: "gaming",
        color: "blue-text-gradient"
      },
      {
        name: "entertainment",
        color: "green-text-gradient"
      },
      {
        name: "community",
        color: "pink-text-gradient"
      }
    ],
    image: gaming,
    source_code_link: "https://gaming.yanecode.com/"
  }, {
    name: "YaneCode Robotic",
    description: "YaneCode Robotic is dedicated to educating children, introducing them to the exciting world of robotics through interactive and fun tools.",
    tags: [
      {
        name: "robotics",
        color: "blue-text-gradient"
      },
      {
        name: "education",
        color: "green-text-gradient"
      },
      {
        name: "children",
        color: "pink-text-gradient"
      }
    ],
    image: robotic,
    source_code_link: "https://robotic.yanecode.com/"
  },
];

export { services, technologies, experiences, testimonials, projects };
