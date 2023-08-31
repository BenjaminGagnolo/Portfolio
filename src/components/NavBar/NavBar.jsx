import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "home" },
  { name: "Proyectos", href: "proyectos" },
  { name: "Contactos", href: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();
  
  return (
    <Disclosure
      as="nav"
      className="bg-transparent absolute top-0 left-0 right-0 z-50 "
    >
      {({ open }) => (
        <>
          <div className=" container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-blue-400 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        onClick={() => handleClick()}
                        to={`/${item.href}`}
                        key={item.name}
                        className={classNames(
                          "font-mono text-white text-lg", 
                          "hover:animate-pulse",                                        
                          "font-mono",
                          "py-2 px-3",
                          "border-b-2 border-transparent",
                          location.pathname === `/${item.href}`
                            ? "border-blue-400"
                            : "",
                          "hover:border-gray-400 transition-colors duration-300"
                        )}
                        aria-current={
                          location.pathname === `/${item.href}`
                            ? "page"
                            : undefined
                        }
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Right section */}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  to={`/${item.href}`}
                  key={item.name}
                  className={classNames(
                    "font-mono text-white ",
                    "block",
                    "font-medium",
                    "py-2 px-3",
                    "border-b-2 border-transparent",
                    location.pathname === `/${item.href}`
                      ? "border-blue-400"
                      : "",
                    "hover:border-blue-400 transition-colors duration-300"
                  )}
                  aria-current={
                    location.pathname === `/${item.href}` ? "page" : undefined
                  }
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;