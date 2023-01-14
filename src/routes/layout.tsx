import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { useDisclosure } from "../utils/use-disclosure";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <Fragment>
      <header className="p-4 flex justify-between items-center">
        <NavDialog />
        <h1 className="text-white font-semibold text-base capitalize">
          {location.pathname.slice(1)}
        </h1>
        {/* This is to center the title */}
        <div className="p-4 shrink-0" />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

const NavDialog = () => {
  const { isOpen, close, open } = useDisclosure();

  return (
    <Fragment>
      <button type="button" onClick={open} className="p-1 text-white">
        <span className="sr-only">Open navigation menu</span>
        <Menu className="h-6 w-6" aria-hidden />
      </button>
      <Dialog open={isOpen} onClose={close}>
        <Dialog.Panel className="p-4 absolute inset-0 h-screen w-screen z-30 origin-top-left transform bg-slate-900">
          <button type="button" onClick={close} className="p-1 text-white">
            <span className="sr-only">Close navigation menu</span>
            <X className="h-6 w-6" aria-hidden />
          </button>
          <nav className="mt-16 px-7 space-y-7">
            {["characters", "favorites"].map((route) => (
              <NavLink
                key={route}
                to={`/${route}`}
                onClick={close}
                className={({ isActive }) =>
                  clsx(
                    isActive ? "text-green-200" : "text-white",
                    "block transition font-semibold capitalize text-xl"
                  )
                }
              >
                {route}
              </NavLink>
            ))}
          </nav>
        </Dialog.Panel>
      </Dialog>
    </Fragment>
  );
};

export { Layout };
