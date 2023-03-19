import { Link } from "@remix-run/react";
import type { FC } from "react";

const NavbarWordmark: FC = () => {
  return (
    <h1 className="default-transition text-3xl font-bold ltr:pr-4 rtl:pl-4">
      <Link to="/" className="default-focus">
        PluralKit
      </Link>
    </h1>
  );
};
export default NavbarWordmark;
