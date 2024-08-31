import { PiCommandLight } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { BsChatRight } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
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
  {
    title: "Logout",
    logo: MdLogout,
  },
];
