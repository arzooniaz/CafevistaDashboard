import {
  FaBuilding,
  FaStar,
  FaCloud,
  FaCode,
  FaPython,
  FaMobileAlt,
  FaGamepad,
} from "react-icons/fa"; // Example icons from react-icons
import CompanyLogo_1 from "../../../Assets/Images/CompanyLogo_1.png";
import CompanyLogo_2 from "../../../Assets/Images/CompanyLogo_2.png";
import CompanyLogo_3 from "../../../Assets/Images/CompanyLogo_3.png";
import CompanyLogo_4 from "../../../Assets/Images/CompanyLogo_4.png";
import CompanyLogo_5 from "../../../Assets/Images/CompanyLogo_5.png";
import CompanyLogo_6 from "../../../Assets/Images/CompanyLogo_6.png";
export const CompaniesDetails = [
  {
    name: "Systems Limited",
    rating: 3,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_1,
    description:
      "Systems Limited (SYS) is a publicly listed technology company with a global presence.",
    services: [
      { name: "Data and AI", icon: <FaBuilding /> },
      { name: "Digital", icon: <FaCloud /> },
      { name: "Cloud", icon: <FaCloud /> },
      { name: "Website Development", icon: <FaCode /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/systems-limited",
  },
  {
    name: "Cubix",
    rating: 4,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_2,
    description: "Cubix is a full stack software development company.",
    services: [
      { name: "Mobile App Development", icon: <FaMobileAlt /> },
      { name: "Game Development", icon: <FaGamepad /> },
      { name: "Website Development", icon: <FaCode /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/cubix",
  },
  {
    name: "IT Genics",
    rating: 3,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_3,
    description: "IT genics is a leading marketing and software company.",
    services: [
      { name: "Software Development", icon: <FaCode /> },
      { name: "Python Development", icon: <FaPython /> },
      { name: "Website Development", icon: <FaCode /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/it-genics",
  },
  {
    name: "IBM",
    rating: 3,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_4,
    description:
      "IBM is a multinational technology company headquartered in Armonk, N.Y.",
    services: [
      { name: "Cyber Security", icon: <FaBuilding /> },
      { name: "E-commerce", icon: <FaBuilding /> },
      { name: "Blockchain", icon: <FaBuilding /> },
      { name: "Hybrid Cloud", icon: <FaCloud /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/ibm",
  },
  {
    name: "Gracesol Technologies",
    rating: 3,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_5,
    description: "Gracesol is a premiere full services technology company.",
    services: [
      { name: "App Development", icon: <FaMobileAlt /> },
      { name: "E-commerce", icon: <FaBuilding /> },
      { name: "Blockchain", icon: <FaBuilding /> },
      { name: "Hybrid Cloud", icon: <FaCloud /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/gracesol-technologies",
  },
  {
    name: "Xavor Corporation",
    rating: 3,
    location: "DHA Phase II, Islamabad",
    image: CompanyLogo_6,
    description: "Xavor Corporation is a leading technology company.",
    services: [
      { name: "App Development", icon: <FaMobileAlt /> },
      { name: "Data and AI", icon: <FaBuilding /> },
      { name: "Data Entry", icon: <FaBuilding /> },
      { name: "Web Development", icon: <FaCode /> },
    ],
    orders: 1300,
    startingPrice: "PKR 15,000",
    portfolioLink: "/view-portfolio/xavor-corporation",
  },
];
