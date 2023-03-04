import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { authLogout } from "../redux/features/auth/authSlice";
import Button from "./Button";

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const activeLink = (url) => (router.pathname === url ? "text-sky-500" : "text-slate-500");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.pageYOffset > 0) {
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
    <header ref={headerRef} className="fixed top-0 left-0 z-50 flex w-full items-center bg-red-50">
      <div className="container mx-auto ">
        <div className="item-center relative flex justify-between sm:justify-start">
          <div className="px-4 py-6 sm:px-0">
            <Image src="/logo.svg" alt="logo" height={20} width={180} className="h-auto w-auto" />
          </div>
          <div className="flex items-center  px-4 sm:w-full sm:px-0 sm:pl-4">
            <div className="absolute right-0 block sm:hidden">
              <Hamburger onToggle={onHumburgerChange} />
            </div>
            <nav ref={navRef} className="absolute right-0 top-full h-screen w-[250px] translate-x-full bg-white  px-4 shadow-lg transition sm:static sm:flex sm:h-full sm:w-full sm:translate-x-0 sm:bg-transparent sm:px-0 sm:shadow-none">
              <div className="block sm:flex sm:w-full sm:items-center sm:justify-between ">
                <ul className="block sm:flex sm:items-center">
                  <li className="group">
                    <Link href="/Home" className={`${activeLink("/Home")} flex py-2 text-base font-semibold group-hover:text-sky-500  sm:mx-4`}>
                      Personal
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/bisnis" className={`${activeLink("/bisnis")} flex py-2 text-base font-semibold group-hover:text-sky-500  sm:mx-4`}>
                      Bisnis
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/track-transfer" className={`${activeLink("/track-transfer")} flex py-2 text-base font-semibold group-hover:text-sky-500  sm:mx-4`}>
                      Track Transfer
                    </Link>
                  </li>
                </ul>
                <Button
                  className="w-full sm:w-fit"
                  onClick={() => {
                    dispatch(authLogout());
                    router.replace("/login");
                  }}
                >
                  Logut
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
