import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { authLogout } from "../../redux/features/auth/authSlice";
import Button from "./Button";

const Navbar2 = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

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
    <header ref={headerRef} className="fixed top-0 left-0 z-50 flex w-full items-center bg-white">
      <div className="w-full lg:container">
        <div className="item-center relative flex justify-between lg:justify-start">
          <div className="px-4 py-5 sm:py-7 lg:px-0">
            <Image src="/logo.svg" alt="logo" height={21} width={154} className="h-[21px] w-[154px]" />
          </div>
          <div className="flex items-center px-4 lg:w-full lg:pl-4">
            <div className="absolute right-0 block px-2 lg:hidden">
              <Hamburger onToggle={onHumburgerChange} color="#4F4F4F" />
            </div>
            <nav ref={navRef} className="absolute right-0 top-full h-screen w-[250px] translate-x-full bg-white  px-4 shadow-lg transition lg:static lg:flex lg:h-full lg:w-full lg:translate-x-0 lg:bg-transparent lg:px-0 lg:shadow-none">
              <div className="block lg:flex lg:w-full lg:items-center lg:justify-between">
                <ul className="block lg:flex lg:items-center">
                  <NavbarLink href="/Home" title="Personal" />
                  <div className="hidden h-5 border-l-2 border-[#B9D4E9] lg:block" />
                  <NavbarLink href="/bisnis" title="Bisnis" />
                </ul>
                <ul className="block lg:flex lg:items-center">
                  <NavbarLink href="/track-transfer" title="Track Transfer" />
                  <NavbarLink href="/track-transfer" title="Login" />
                  <Button
                    className="my-2 w-full rounded-xl py-2 lg:my-0 lg:ml-2 lg:mr-4 lg:w-[120px]"
                    onClick={() => {
                      dispatch(authLogout());
                      router.replace("/login");
                    }}
                  >
                    Register
                  </Button>
                  <Button className="my-2 w-full rounded-xl py-2 px-0 lg:my-0 lg:w-[120px]" type="outlined-dark">
                    <div className="flex items-center gap-2">
                      <Image src="/Globe.svg" width={18} height={18} alt="icon" />
                      <span>English</span>
                    </div>
                  </Button>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;

const NavbarLink = ({ href, title, className }) => {
  const router = useRouter();
  const activeLink = (url) => (router.pathname === url ? "text-primary" : "text-slate-500");
  const styleClass = `${className || ""} ${activeLink(href)} navbar-link`;

  return (
    <li className="group">
      <Link href={href} className={styleClass}>
        {title}
      </Link>
    </li>
  );
};
