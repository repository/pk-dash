import type { FC, PropsWithChildren } from "react";
import Navbar from "./components/layout/navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow bg-slate-50 dark:bg-zinc-900 dark:text-white">{children}</div>
    </div>
  );
};
export default Layout;
