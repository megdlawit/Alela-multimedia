import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { Link } from 'react-router-dom';
import  AboutUs from "../components/AboutUs.jsx";
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Service",
  },
  {
    id: "AboutUs",
    title: "About Us",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Media Production",
    content:
      " we deliver exceptional video and audio productions tailored for enterprises, campaigns, and events.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Corporate Communication",
    content:
      "Our expertise covers a broad spectrum of communication services, ranging from content development for various me diums to media coordination. ",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Website & App development",
    content:
      "We develop cutting-edge websites and appli cations that turn ideas into impactful business drivers, using top-notch code standards and timely project delivery.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Alela's multimedia expertise brings projects to life with creativity and precision. Their dedication to client satisfaction ensures a seamless and delightful experience.",
    name: "Heaven Takele",
    title: "Founder of DUE",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Alela's multimedia expertise brings projects to life with creativity and precision. Their dedication to client satisfaction ensures a seamless and delightful experience.",
    name: "Siefe Abdu",
    title: "Founder & Leader of USP",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Alela's multimedia expertise brings projects to life with creativity and precision. Their dedication to client satisfaction ensures a seamless and delightful experience.",
    name: "Kenean Debebe",
    title: "Founder & Leader of LLE",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Customer",
    value: "300+",
  },
  {
    id: "stats-2",
    title: "Partner Company",
    value: "9+",
  },
  {
    id: "stats-3",
    title: "Events",
    value: "2300+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },

      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
   
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];