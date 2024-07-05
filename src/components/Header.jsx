import {
  HiArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const notifications = [
  { content: "New user registered" },
  { content: "Server downtime alert" },
  { content: "New comment on your post" },
  { content: "Scheduled maintenance tomorrow" },
  { content: "Password reset requested" },
];

const userMenuItems = [
  { content: "Profile", href: "#", Icon: HiOutlineUser },
  { content: "Settings", href: "#", Icon: HiOutlineCog },
  { content: "Logout", href: "#", Icon: HiArrowRightOnRectangle },
];

const Header = ({ toggleSidebar }) => (
  <header className="w-full sticky top-0 z-20 flex h-14 items-center justify-between shadow-md bg-white sm:h-16 sm:px-6">
    <div className="flex items-center space-x-4">
      <button
        className="text-xl sm:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars />
      </button>
      <NavLink to="#" className="flex items-center">
        <img src={logo} alt="logo" className="h-10 w-30" />
      </NavLink>
    </div>
    <div className="flex items-center space-x-4">
      <Dropdown
        icon={HiOutlineBell}
        label="Notifications"
        items={notifications}
      />
      <Dropdown
        icon={HiOutlineUserCircle}
        label="User Menu"
        items={userMenuItems}
      />
    </div>
  </header>
);

export default Header;
