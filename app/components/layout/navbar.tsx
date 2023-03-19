import { Link } from "@remix-run/react";
import type { FC } from "react";
import { TbAdjustments, TbBook, TbLifebuoy, TbSearch, TbSquareRoundedPlus } from "react-icons/tb";
import NavbarItem from "./navbar-item";
import NavbarProfileMenu from "./navbar-profile-menu";
import NavbarWordmark from "./navbar-wordmark";

const Navbar: FC = () => {
  return (
    <>
      <div className="sticky top-0 h-14 border-b bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
        <div className="mx-auto flex h-full max-w-[80rem] items-center px-6">
          <NavbarWordmark />
          <ul className="flex h-full">
            <NavbarItem active icon={TbSearch} as={Link} to="/lookup">
              Lookup
            </NavbarItem>
            <NavbarItem
              icon={TbSquareRoundedPlus}
              as="a"
              href="https://discord.com/oauth2/authorize?client_id=466378653216014359&scope=bot%20applications.commands&permissions=536995904"
            >
              Invite Bot
            </NavbarItem>
            <NavbarItem icon={TbBook} as="a" href="https://pluralkit.me/">
              Documentation
            </NavbarItem>
            <NavbarItem icon={TbLifebuoy} as="a" href="https://discord.gg/PczBt78">
              Support
            </NavbarItem>
          </ul>
          <ul className="flex h-full ltr:ml-auto rtl:mr-auto">
            <NavbarProfileMenu />
            <NavbarItem as="button">
              <TbAdjustments size={22} />
            </NavbarItem>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
