import AccuDaily from "../src/img/Projects/AccuDaily.png";
import ThriveLuxe from "../src/img/Projects/ThriveLuxe.png";
import DeCastroConsulting from "../src/img/Projects/DeCastroConsulting.png";
import PotteryPro from "../src/img/Projects/PotteryPro.jpg";
import decastrolegalfirm from "../src/img/Projects/Decastrolegalfirm.jpg";

const Project = [
  {
    id: 0,
    name: "De Castro Consulting",
    description: "Consulting Company specializes in HR and IT",
    image: DeCastroConsulting,
    url: "https://decastroconsulting.ph/",
    TechStack: [
      {
        id: 0,
        tool: "WordPress",
      },
      {
        id: 1,
        tool: "Elementor",
      },
      {
        id: 3,
        tool: "SEO",
      },
    ],
  },
  {
    id: 1,
    name: "ThriveLuxe",
    description: "An E-commerce Application for buying products",
    image: ThriveLuxe,
    url: "https://thriveluxe.netlify.app/",
    TechStack: [
      {
        id: 0,
        tool: "React",
      },
      {
        id: 1,
        tool: "SCSS",
      },
      {
        id: 2,
        tool: "Github",
      },
      {
        id: 3,
        tool: "Netlify",
      },
    ],
  },
  {
    id: 2,
    name: "AccuDaily",
    description: "A news website utilizing New York Times API",
    image: AccuDaily,
    url: "https://dazzling-sawine-9aec7e.netlify.app/",
    TechStack: [
      {
        id: 0,
        tool: "React",
      },
      {
        id: 1,
        tool: "NYT API",
      },
      {
        id: 2,
        tool: "SCSS",
      },
      {
        id: 4,
        tool: "Netlify",
      },
    ],
  },
  {
    id: 3,
    name: "Artful PotteryPro",
    description: "Full stack web app for ceramic courses program",
    image: PotteryPro,
    url: "https://artfulpotteryprofrontend.netlify.app/",
    TechStack: [
      {
        id: 0,
        tool: "React",
      },
      {
        id: 1,
        tool: "NodeJs",
      },
      {
        id: 2,
        tool: "MongoDb",
      },
      {
        id: 3,
        tool: "Styled Components",
      },
      {
        id: 4,
        tool: "TailwindCSS",
      },
      {
        id: 5,
        tool: "Framer Motion",
      },

      {
        id: 6,
        tool: "Netlify / Note: Don't have server hosting yet",
      },
    ],
  },
  {
    id: 4,
    name: "De Castro Legal Firm",
    description:
      "This website showcases a law firm that offers comprehensive legal services",
    image: decastrolegalfirm,
    url: "https://decastrolegalfirm.com/",
    TechStack: [
      {
        id: 0,
        tool: "WordPress",
      },
      {
        id: 1,
        tool: "Elementor",
      },
      {
        id: 2,
        tool: "SEO",
      },
      {
        id: 3,
        tool: "CSS",
      },
    ],
  },
];

export default Project;
