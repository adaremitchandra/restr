import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const router = useRouter();
  const activeLink = (url) => (router.pathname === url ? "text-sky-500" : "text-slate-500");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const fixedNav = headerRef.current.offsetTop;
    if (window.pageYOffset > fixedNav) {
      headerRef.current.classList.add("navbar-fixed");
    } else {
      headerRef.current.classList.remove("navbar-fixed");
    }
  };

  const onHumburgerChange = () => {
    navRef.current.classList.toggle("translate-x-full");
  };

  return (
    //jika positionnya absolte maka sidebar akan kelihatan disebelah kanan melewati layar ketika sidebar ditutup
    //tapi kalau posisition nya fixed sidebarnya ga kelihatan ketika closed
    <header ref={headerRef} className="bg-red-50 fixed top-0 left-0 w-full flex items-center z-10">
      <div className="container mx-auto">
        <div className="flex item-center justify-between relative sm:justify-start">
          <div className="px-4 py-6 sm:px-0">
            <Image src="/logo.svg" alt="logo" height={20} width={180} />
          </div>
          <div className="flex items-center px-4 sm:px0 sm:w-full ">
            <div className="block absolute right-0 sm:hidden">
              <Hamburger onToggle={onHumburgerChange} />
            </div>
            <nav ref={navRef} className="translate-x-full absolute px-4 bg-white right-0 top-full w-[250px] h-screen shadow-lg sm:translate-x-0 sm:flex sm:static sm:h-full sm:w-full sm:bg-transparent sm:shadow-none transition ">
              <div className="block sm:flex sm:items-center sm:justify-between sm:w-full ">
                <ul className="block sm:flex  sm:items-center">
                  <li className="group">
                    <Link href="/Home" className={`${activeLink("/Home")} text-base group-hover:text-sky-500 font-semibold py-2 flex  sm:mx-4`}>
                      Personal
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/bisnis" className={`${activeLink("/bisnis")} text-base group-hover:text-sky-500 font-semibold py-2 flex  sm:mx-4`}>
                      Bisnis
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/track-transfer" className={`${activeLink("/track-transfer")} text-base group-hover:text-sky-500 font-semibold py-2 flex  sm:mx-4`}>
                      Track Transfer
                    </Link>
                  </li>
                </ul>
                <Button className="w-full sm:w-fit">Login</Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
