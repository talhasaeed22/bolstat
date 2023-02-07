import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../context/auth-context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const auth = getAuth();
  const { isLoggedIn } = useContext(AuthContext);
  const navigation = [
    { name: "Home", href: "/", current: router.pathname === "/" },
    {
      name: "Contact",
      href: "/contact",
      current: router.pathname === "/contact",
    },
    {
      name: "InLoggen",
      href: "/auth/login",
      current: router.pathname === "/auth/login",
      invisible: isLoggedIn(),
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      current: router.pathname === "/dashboard",
    },
    {
      name: "Abonneren",
      href: "/subscribe",
      current: router.pathname == "/subscribe",
    },
    
  ];
  return (
    <Disclosure
      as="nav"
      className={`${styles.main_container} ${styles.shadow} bg-white md:px-12 px-4 `}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-[4.8rem] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center justify-center gap-6">
                  <img
                    className="block h-8 w-auto "
                    src="/Images/logo.svg"
                    alt="Logo"
                  />
                  <img
                    className="block h-7 mt-1 w-auto "
                    src="/Images/BolStats.png"
                    alt="Name"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block"></div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex md:space-x-7 sm:space-x-2 space-x-1">
                  {navigation
                    .filter((n) => !n.invisible)
                    .map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === 'Abonneren' ? styles.background : "text-gray-400",
                          " px-3 md:px-1 py-2 rounded-md text-sm font-small"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  {isLoggedIn() && (
                    <div
                      className={classNames(
                        "text-gray-400",
                        " px-3 md:px-1 py-2 rounded-md text-sm font-small"
                      )}
                      role="button"
                      onClick={() => auth.signOut()}
                    >
                      Log out
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? styles.background
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
