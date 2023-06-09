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

import lesson_child from "./assets/images/Lessons/child.png";
import teen_beginner from "./assets/images/Lessons/teen_beginner.png";
import teen_expert from "./assets/images/Lessons/teen_expert.png";
import adult_relax from "./assets/images/Lessons/adult_relax.png";
import adult_active from "./assets/images/Lessons/adult_active.png";
import private_lessons from "./assets/images/Lessons/private_lessons.png";

import location_kerava1 from "./assets/images/Locations/kerava-tenniskeskus-1.jpg";
import location_kerava2 from "./assets/images/Locations/kerava-tenniskeskus-2.jpg";
import loc_jarvenpaa_inside from "./assets/images/Locations/järvenpää_tenniskeskus.jpg";
import loc_jarvenpaa_outside from "./assets/images/Locations/järvenpää_tenniskeskus2.jpg";
import loc_tuusula_inside from "./assets/images/Locations/tuusula_tenniskeskus.jpg";
import loc_tuusula_outside from "./assets/images/Locations/tuusula_tenniskeskus2.jpg";
import loc_vantaa_inside from "./assets/images/Locations/vantaa-tenniskeskus.jpg";
import loc_vantaa_outside from "./assets/images/Locations/vantaa-tenniskeskus2.jpg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdRoom } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar, MdOutlineLocationCity, MdOutlineSchool } from "react-icons/md";

export const content = {
  nav: [
    {
      title: "Home",
      link: "#home",
      icon: TbHome,
    },
    {
      title: "About",
      link: "#about",
      icon: BiUser,
    },
    {
      title: "Services",
      link: "#services",
      icon: RiServiceLine,
    },
    {
      title: "Lessons",
      link: "#lessons",
      icon: MdOutlineSchool,
    },
    {
      title: "Locations",
      link: "#locations",
      icon: MdOutlineLocationCity,
    },
    {
      title: "Contacts",
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
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
        para: "I provide personalized and group tennis lessons tailored to individual needs and goals. My lessons and clinics offer a fun and social atmosphere to improve your game.",
        logo: services_logo1,
        desc: "My tennis lessons are designed to cater to players of all skill levels, from beginners to advanced players. I provide personalized guidance and feedback to help you improve your technique, footwork, and overall game strategy. I offer private, group, and clinic lessons, as well as customized training programs to help you achieve your goals.",
      },
      {
        title: "Paddle couching",
        para: "I teach padel lessons for all levels, from beginners to advanced players. I provide individual and group lessons, as well as clinics to help you improve your padel game in a fun and social environment.",
        logo: services_logo2,
        desc: "My paddle lessons are tailored to cater to players of all levels, from first-time players to experienced competitors. I provide personalized guidance and instruction to help you improve your skills, including serving, forehand, backhand, and tactics. I offer private and group lessons, as well as clinics to provide a fun and social environment to enhance your paddle game.",
      },
      {
        title: "Consultations and training",
        para: "I offer consultations and training sessions for both tennis and padel players, providing personalized guidance and feedback to help you achieve your goals.",
        logo: services_logo3,
        desc: "My consultations and training sessions for tennis and paddle provide personalized guidance and feedback to help you improve your game. I will work with you to design a customized training program tailored to your specific needs and goals. I cover everything from technique and strategy to fitness and mental preparation, ensuring that you are equipped with the skills and knowledge to excel on the court.",
      },
    ],
  },
  lessons: {
    title: "Lessons",
    subtitle: "MY TOP LESSONS",
    skills_content: [
      {
        name: "Junior Beginner",
        para: "Children 4-7 years",
        logo: lesson_child,
      },
      {
        name: "Teens Beginner",
        para: "Teenagers 7-18",
        logo: teen_beginner,
      },
      {
        name: "Teens Active",
        para: "Teenagers 7-18 with experience",
        logo: teen_expert,
      },
      {
        name: "Adult Relax",
        para: "Adults up to 18 years once per week",
        logo: adult_relax,
      },
      {
        name: "Adult Intensive",
        para: "Adults up to 18 years twice per week",
        logo: adult_active,
      },
      {
        name: "Private lessons",
        para: "No ages or level limits",
        logo: private_lessons,
      },
    ],
    icon: MdArrowForward,
  },
  locations: {
    title: "Locations",
    subtitle: "WHERE I TEACH",
    locations_content: [
      {
        place_title: "Kerava",
        place_address: "Metsolantie 5, 04230 Kerava",
        place_puh: "p. 0500 439 657 (8-16)",
        place_num_kenttä: "2 kenttää",
        place_price: "19€/tunti",
        place_image: [location_kerava1, location_kerava2]
      },
      {
        place_title: "Järvenpää",
        place_address: "Kuuselankatu 2",
        place_puh: "p. 0500 439 657 (8-16)",
        place_num_kenttä: "3 kenttää",
        place_price: "19€/tunti",
        place_image: [loc_jarvenpaa_inside, loc_jarvenpaa_outside]
      },
      {
        place_title: "Tuusula",
        place_address: "Kilpailukuja 4",
        place_puh: "p. 0500 439 657 (8-16)",
        place_num_kenttä: "3 kenttää",
        place_price: "19€/tunti",
        place_image: [loc_tuusula_inside, loc_tuusula_outside]
      },
      {
        place_title: "Vantaa",
        place_address: "Tennistie 5",
        place_puh: "p. 0500 439 657 (8-16)",
        place_num_kenttä: "2 kenttää",
        place_price: "19€/tunti",
        place_image: [loc_vantaa_inside, loc_vantaa_outside]
      },
    ],
  },
  booking: {
    title: "Book a lesson",
    subtitle: "FOR TENNIS OR PADDLE",
    booking_image: Hero_person,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "stefan-aalto@gmail.com",
        icon: GrMail,
        link: "mailto:stefan-aalto@gmail.com",
      },
      {
        text: "+358 12-456-7890",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "tennis_kokkaus",
        icon: BsInstagram,
        link: "https://www.instagram.com/tennis_kokkaus/",
      },
      {
        text: "Kerava, Finland",
        icon: MdRoom,
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
