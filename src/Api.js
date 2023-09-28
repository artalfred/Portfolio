// FEATURED PROJECTS
import accuDaily from "./img/project/accuDaily.png";
import bayanihan from "./img/project/bayanihan.png";
import anatoli from "./img/project/anatoli.png";
import alpha from "./img/project/alpha.png";
import easyBank from "./img/project/easyBank.png";
import thriveLuxe from "./img/project/thriveLuxe.png";

import alpha_overview from "./img/others/alpha_overview.png";
import accuDaily_overview from "./img/others/accuDaily_overview.png";
import bayanihan_overview from "./img/others/bayanihan_overview.png";
import anatoli_overview from "./img/others/anatoli_overview.png";
import easyBank_overview from "./img/others/easyBank_overview.png";
import triveLuxe_overview from "./img/others/triveLuxe_overview.png";

const projects = [
  {
    id: 0,
    img: thriveLuxe,
    other: triveLuxe_overview,
    name: "ThriveLuxe",
    description:
      "My e-commerce web app provides a seamless shopping experience with features such as easy product addition to the cart, customizable quantity increments, effortless product deletion, and a convenient search bar for quick product browsing.",
    tools: [
      {
        id: 1,
        used: "ReactJS",
      },
      {
        id: 2,
        used: "Bootstrap",
      },
      {
        id: 3,
        used: "SASS",
      },
      {
        id: 4,
        used: "CSS",
      },
    ],
    url: "https://jazzy-churros-b580a3.netlify.app/",
    overview:
      "Welcome to my exciting new E-commerce project built using React, Sass, CSS, and Bootstrap. Explore a seamless shopping experience with a beautifully designed and responsive interface. Browse through a wide range of products, add them to your cart, and effortlessly manage your purchases. Enjoy the convenience of an intuitive search bar to find your desired items quickly. Powered by React, my project ensures a smooth and dynamic shopping journey for valued customers like you.",
    challenges:
      "While creating this project, one of the challenges I encountered was finding high-quality images that would suit my e-commerce website. It was difficult to source images that matched the aesthetic and requirements of the project, making it a challenge to create a visually appealing and cohesive user interface.",
  },
  {
    id: 1,
    img: alpha,
    other: alpha_overview,
    name: "Alpha",
    description:
      "My e-commerce web app provides a simple and user-friendly interface for customers to browse and purchase products online. Customers can add or remove products from their cart with a single click.",
    tools: [
      {
        id: 1,
        used: "ReactJS",
      },
      {
        id: 2,
        used: "Bootstrap",
      },
      {
        id: 3,
        used: "SASS",
      },
    ],
    url: "https://glistening-caramel-6b8c58.netlify.app/",
    overview:
      "I developed an e-commerce web application using ReactJS, Bootstrap, and SASS. Users can seamlessly browse products, add to cart, and make adjustments like deleting items and changing quantities. ReactJS provided dynamic interfaces, Bootstrap ensured responsive design, and SASS facilitated clean and maintainable styles.",
    challenges:
      "During development, I faced a challenge working with React's router due to my limited experience as a newcomer. However, I seized the opportunity to learn and grow. I dedicated time to studying React Router through online tutorials, documentation, and sample projects. As a result, I gained a solid understanding of route configuration, parameter handling, and nested routes. This enabled me to successfully implement the required routing functionality in my e-commerce web application.",
  },
  {
    id: 2,
    img: accuDaily,
    other: accuDaily_overview,
    name: "AccuDaily",
    description:
      "Designed and developed a news website utilizing the New York Times API with a focus on delivering up-to-date news content.",
    tools: [
      {
        id: 1,
        used: "ReactJS",
      },
      {
        id: 2,
        used: "Bootstrap",
      },
      {
        id: 3,
        used: "CSS",
      },
    ],
    url: "https://dazzling-sawine-9aec7e.netlify.app/",
    overview:
      " I developed a news website using ReactJS that utilizes the New York Times API to fetch and display the latest news and articles from around the world. The website serves as a platform for users to stay informed and access up-to-date news content. With ReactJS as the foundation, I implemented dynamic components to render and showcase the retrieved news articles.",
    challenges:
      " I encountered a particularly problem that I couldn't solve on the first try. I encountered difficulties integrating an external API. The data wasn't rendering correctly using the initial approach of the fetch() function. To resolve this, I switched to using Axios, a popular library for API requests in React. I configured Axios, error handling, and leveraged React's state management to successfully retrieve and display the API data in the application.",
  },
  {
    id: 3,
    img: bayanihan,
    other: bayanihan_overview,
    name: "Bayanihan Healthcare",
    description:
      "Designed to provide a streamlined interface for scheduling healthcare appointments with institutions/hospitals.",
    tools: [
      {
        id: 1,
        used: "HTML",
      },
      {
        id: 2,
        used: "CSS",
      },
      {
        id: 3,
        used: "Javascript",
      },
    ],
    url: "https://artalfred.github.io/Bayanihan-Healthcare/",
    overview:
      "In a group project focused on creating an appointment booking system for a hospital, my role involved wireframing and designing the application's homepage. This served as the basis layout for my groupmates to create the remaining pages. Additionally, I took charge of implementing key functionality in JavaScript to pass user details successfully to the hospital's dashboard. This included developing features such as a history log, appointment list, form submission, and cancellation records.",
    challenges:
      "During the project, we faced the challenge of building a website using only JavaScript without a framework like React. This made development more complex and required us to handle various aspects manually. However, as a group, we collaborated and supported each other to overcome these difficulties. Despite the time constraint of completing the project within one week and three days, we worked diligently and utilized our collective skills to successfully deliver the final product.",
  },
  {
    id: 4,
    img: anatoli,
    other: anatoli_overview,
    name: "Anatoli Services",
    description:
      "Anatoli connects job seekers with employers and offers professional services, all on a user-friendly platform accessible on desktop and mobile devices.",
    tools: [
      {
        id: 1,
        used: "HTML",
      },
      {
        id: 2,
        used: "CSS",
      },
      {
        id: 3,
        used: "Bootstrap",
      },
    ],
    url: "https://artalfred.github.io/Anatoli-Services/",
    overview:
      "I worked on developing a landing page that provided services and job search functionality for job seekers. As part of my contributions, I created the wireframe and sitemap using design tools like Figma and Canva. Additionally, I took responsibility for developing the homepage, as well as the login and create account pages. By leveraging my design skills and web development knowledge, I aimed to create an engaging and user-friendly experience for visitors interested in accessing the offered services and exploring job opportunities.",
    challenges:
      "During the project, one of the main challenges we faced was a lack of sufficient time due to our part-time bootcamp schedule. Additionally, some of my groupmates had limited availability, making it difficult to collaborate effectively. To overcome these challenges, I took on the responsibility of completing the remaining pages myself. I worked diligently to ensure that the pages I developed were responsive and compatible across different devices, aiming to deliver a cohesive and seamless user experience. Despite the time constraints and limited resources, I strived to meet the project requirements and create a functional and visually appealing landing page.",
  },
  {
    id: 5,
    img: easyBank,
    other: easyBank_overview,
    name: "EasyBank",
    description: "EasyBank Frontend challenge",
    tools: [
      {
        id: 1,
        used: "HTML",
      },
      {
        id: 2,
        used: "CSS",
      },
      {
        id: 3,
        used: "Bootstrap",
      },
      {
        id: 4,
        used: "Sass",
      },
    ],
    url: "https://artalfred.github.io/EasyBank/",
    overview:
      "I successfully completed a frontend mentor challenge where I need to complete the tasked with recreating a specific mockup design provided by Frontend Mentor.",
    challenges:
      "I faced a challenge in ensuring the responsiveness of the design. Adapting the layout to different screen sizes and maintaining its visual integrity proved to be tricky. I had to utilize CSS techniques like media queries, flexible layouts, and relative units to adjust elements and optimize the design for mobile, tablet, and desktop. It required careful testing and tweaking to ensure a seamless experience across devices. However, I successfully achieved a responsive design that provides a comfortable user experience on various screens.",
  },
];

export default projects;
