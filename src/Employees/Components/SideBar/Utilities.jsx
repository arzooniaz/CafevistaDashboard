import dashboardLogo from "../../Assets/dashboardLogo.svg";
import chatLogo from "../../Assets/chatLogo.svg";
import logoutLogo from "../../Assets/logoutLogo.svg";
import pricingLogo from "../../Assets/pricingLogo.svg";
import projectsLogo from "../../Assets/projectsLogo.svg";
import settingsLogo from "../../Assets/settingsLogo.svg";
import teamLogo from "../../Assets/teamLogo.svg";

import { PiCommandLight } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { BsChatRight } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
export const navMenu = [
  {
    title: "Dashboard",
    logo: RiHomeLine,
  },
  {
    title: "Projects",
    logo: PiCommandLight,
  },
  {
    title: "Pricing",
    logo: RiMoneyDollarCircleLine,
  },
  {
    title: "Team",
    logo: GrGroup,
  },
  {
    title: "Chats",
    logo: BsChatRight,
  },
  {
    title: "Settings",
    logo: CiSettings,
  },
  // {
  //   title: "Logout",
  //   logo: logoutLogo,
  // },
];
