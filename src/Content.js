// import images
import Hero_person from "./assets/images/Hero/person.png";

import person_about from "./assets/images/About/person_about.jpg";
import person_about2 from "./assets/images/About/person_about2.jpg";
import person_about3 from "./assets/images/About/person_about3.jpg";
import award from "./assets/images/About/award.png";
import keuda_logo from "./assets/images/About/keuda_logo.png";

import services_logo1 from "./assets/images/Services/tennis.png";
import services_logo2 from "./assets/images/Services/paddle.png";
import services_logo3 from "./assets/images/Services/help.png";

/*import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";


import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
*/
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  /*nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],*/
  hero: {
    greeting: "Hello, my name is",
    title: "Web Developer",
    firstName: "STEFAN",
    lastName: "AALTO-SETÄLÄ",
    tennis: "TENNIS",
    padel: "PADEL",
    btnText: "Hire Me",
    image: Hero_person,
    hero_title: ["Tennis coach","Padel coach","Tennis player","Entrepreneur","Dreamer"],
    hero_content: [
      {
        count: "20+",
        text: "Years of Tennis Playing Experience",
      },
      {
        count: "5+",
        text: "Years of Padel Playing Experience",
      },
      {
        count: "4+",
        text: "Years of Couch Experience",
      },
    ],
  },
  about: {
    title: "About me",
    subtitle: "MY STORY",
    award_image: award,
    keuda_logo: keuda_logo,
    text: "I am an enegetic and passionate tennis and padel coach. I am a dedicated, focused and very well organized coach, and can take care of a group of players from the individual physical, technical and mental program as well as scheduling a good tournament program. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet pulvinar ipsum.",
    about_content: [
      {
        title: "Tennis club in Järvenpää",
        image: person_about,
      },
      {
        title: "Enjoying summer tennis",
        image: person_about2,
      },
      {
        title: "Get ready!",
        image: person_about3,
      },
    ],
    about_education: [
      {
        school_logo: award,
        school_title: "Suomen Tennisliitto ry 2022",
        course_name: "Taso 2: Tennisvalmennuskoulutus",
      },
      {
        school_logo: keuda_logo,
        school_title: "Keuda",
        course_name: "Yrittäjyyden ammattitutkinto (150 osp)",
      }
    ]
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    icon: MdArrowForward,
    service_content: [
      {
        title: "Tennis couching",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Paddle couching",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Consultations and training",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  /*skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },*/
};
