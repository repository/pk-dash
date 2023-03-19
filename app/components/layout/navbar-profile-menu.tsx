import { Menu } from "@mantine/core";
import { Link } from "@remix-run/react";
import type { FC } from "react";
import { TbArchive, TbBoxMultiple, TbUsers } from "react-icons/tb";
import NavbarItem from "./navbar-item";
import NavbarProfileMenuItem from "./navbar-profile-menu-item";

const NavbarProfileMenu: FC = () => {
  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <NavbarItem as="button">
          <img
            className="h-10 w-10 rounded-full ltr:mr-2 rtl:ml-2"
            src="https://cdn.discordapp.com/avatars/466378653216014359/b78ef67a081737a830b60aa47d9ebcd9.png?size=128"
            alt="System Name"
          />
          System Name
        </NavbarItem>
      </Menu.Target>

      <Menu.Dropdown className="!w-48 border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
        <NavbarProfileMenuItem as={Link} to="/profile/@me" icon={TbArchive}>
          System
        </NavbarProfileMenuItem>
        <NavbarProfileMenuItem as={Link} to="/profile/@me/members" icon={TbUsers}>
          Members
        </NavbarProfileMenuItem>
        <NavbarProfileMenuItem as={Link} to="/profile/@me/groups" icon={TbBoxMultiple}>
          Groups
        </NavbarProfileMenuItem>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavbarProfileMenu;
