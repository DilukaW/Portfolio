//import {
// mobile,
// backend,
// creator,
// web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
//} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "./assets/web.png",
  },
  {
    title: "Mobile App Developer",
    icon: "./assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "./assets/backend.png",
  },
  {
    title: "Ai & Machine-Learning Developer",
    icon: "./assets/creator.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "./assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "./assets/tech/css.png",
  },

  {
    name: "Python",
    icon: "./assets/tech/python.png",
  },
  {
    name: "Java",
    icon: "./assets/tech/java.png",
  },
  {
    name: "Flutter",
    icon: "./assets/tech/flutter.png",
  },
  {
    name: "Kotlin",
    icon: "./assets/tech/kotlin.png",
  },
  {
    name: "Angular",
    icon: "./assets/tech/angular.png",
  },
  {
    name: "React JS",
    icon: "./assets/tech/reactjs.png",
  },

  {
    name: "flask",
    icon: "./assets/tech/flask.png",
  },
  {
    name: "C#",
    icon: "./assets/tech/c2.png",
  },

  {
    name: "Tailwind CSS",
    icon: "./assets/tech/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "./assets/tech/boot.png",
  },
  {
    name: "Node JS",
    icon: "./assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "./assets/tech/mongodb.png",
  },
  {
    name: "Firebase",
    icon: "./assets/tech/firebase.png",
  },

  {
    name: "git",
    icon: "./assets/tech/git.png",
  },
];

const experiences = [
  {
    title: "Demonstrator",
    company_name: "NSBM (National School of Business Management) Sri Lanka ",
    icon: "./assets/tech/nsbm.png",
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
  },
  {
    title: "Mobile Application Developer",
    company_name: "Epic Technology Group Sri lanka",
    icon: "./assets/tech/epic.png",
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Shopify",
    icon: "./assets/tech/free.png",
    iconBg: "#E6DEDD",
    date: "January 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a mobile application as beautiful as our product, but proved me wrong.",
    name: "Shasha jess",
    designation: "CFO",
    company: "Abcd",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success. Truly brilliant. Thank you so much!",
    name: "Chris Jack",
    designation: "COO",
    company: "Dddd",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "After optimized our website using al and machine-learning, our traffic increased by 50%. We can't thank them enough!",
    name: "Tom Hard",
    designation: "CEO",
    company: "456 pvt",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const projects = [
  {
    name: "Model ML - Web",
    description:
      "A User Friendly Automated Machine-Learning Model Development Web Platform That Allows Users To Upload Their Dataset And Train Their Machine Learning Models With Just Few Click.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient ",
      },
      {
        name: "Ai / ML",
        color: "pink-text-gradient",
      },
      {
        name: "Html/Css/Js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: "./assets/project/modelmlweb.png",
    source_code_link: "https://github.com/DilukaW/ModelMl-Web",
  },
  {
    name: "Model ML - Mobile",
    description:
      "First Ever Mobile Based Automated Machine-Learning Model Development Platform That Allows Users To Upload Their Dataset And Train Their Machine Learning Models With Just Few Click.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Bloc State Management",
        color: "pink-text-gradient",
      },
    ],
    image: "./assets/project/modelmlapp.png",
    source_code_link: "https://github.com/DilukaW/ModelMl-App",
  },
  {
    name: "FitBuddy",
    description:
      "A Modern Fullstack Web Application For Fitness With Number Of Different Exercise To Explore. More It Facilitate Users To Find Personal Trainers And Chat In Real With In The Platform Seamlessly",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: "./assets/project/fitbuddy.png",
    source_code_link: "https://github.com/DilukaW/FitBuddy",
  },
  {
    name: "Tour Guide",
    description:
      "Travo Mobile App Is Being Designed By Targeting The Sri Lankan Tourism Industry With A Centralized Social Media Platform Where The Users Can Freely Interact And Project Their Thoughts To The World While Being Able To Organize Their Own Tours More Easily, Flexibly And Reliably.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "./assets/project/travo.png",
    source_code_link: "https://github.com/DilukaW/Travo",
  },
  {
    name: "VSafe",
    description:
      "Vsafe emergency service system is an all-in-one mobile application with a system panel that can be used as a solution when you or someone is in an emergency. This application will be an easy to-use application that includes all kinds of emergency services under one platform.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Html/Css/Js",
        color: "pink-text-gradient",
      },
    ],
    image: "./assets/project/vsafe.png",
    source_code_link: "https://github.com/DilukaW/VSafe-Website",
  },
  {
    name: "WeCycle",
    description:
      "The overall concept is to have bikes with automatic locks and an application to take control of how the bikes and the customers should be operated inside of the system. A web panel will be developed connecting the mobile application and the bikes to manage the system. ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Html/Css/Js",
        color: "pink-text-gradient",
      },
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
    ],
    image: "./assets/project/wecycle.png",
    source_code_link: "https://github.com/DilukaW/WeCycle-Website",
  },
  {
    name: "Road Master",
    description:
      "RoadMaster is being implemented by targeting the Road Development Authority (RDA) of Sri Lanka along with the Insurance Companies and Sri Lankan Police.",
    tags: [
      {
        name: "ASP.Net",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "orange-text-gradient",
      },
    ],
    image: "./assets/project/roadmaster.png",
    source_code_link: "https://github.com/DilukaW/RoadMaster",
  },
  {
    name: "Cineflicks",
    description:
      "A online movie management system using C# designed to view newest movies, tv shows and to add ,update and delete movies.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: "./assets/project/cineflicks.png",

    source_code_link: "https://github.com/DilukaW/Cineflicks",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
