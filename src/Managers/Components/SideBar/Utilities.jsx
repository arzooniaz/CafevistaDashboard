import { PiCommandLight } from "react-icons/pi";
import { RiHomeLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { BsChatRight } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { MdHistory } from "react-icons/md";
export const navMenu = [
  {
    title: "Dashboard",
    logo: RiHomeLine,
  },
  {
    title: "My Projects",
    logo: PiCommandLight,
  },
  {
    title: "Clients",
    logo: GrGroup,
  },
  {
    title: "History",
    logo: MdHistory,
  },
  {
    title: "Chat",
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
