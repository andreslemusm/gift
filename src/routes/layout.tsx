import { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";

export const Layout = () => {
  const location = useLocation();

  return (
    <Fragment>
      <header className="p-4 flex justify-between items-center">
        <Popover>
          <Popover.Button className="p-1 text-white">
            <span className="sr-only">Open navigation menu</span>
            <Menu className="h-6 w-6" aria-hidden />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="p-4 absolute inset-0 h-screen w-screen z-30 origin-top-left transform bg-slate-900"
            >
              <Popover.Button className="p-1 text-white">
                <span className="sr-only">Close navigation menu</span>
                <X className="h-6 w-6" aria-hidden />
              </Popover.Button>
              <nav className="mt-16 px-7 space-y-7">
                {["characters", "favorites"].map((route) => (
                  <Popover.Button
                    as={Link}
                    key={route}
                    to={`/${route}`}
                    className="block transition font-semibold capitalize text-white text-xl"
                  >
                    {route}
                  </Popover.Button>
                ))}
              </nav>
            </Popover.Panel>
          </Transition>
        </Popover>
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
