import { useRef, Children } from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  const itemRef = useRef();

  return (
    <span className="relative" onMouseLeave={() => itemRef.current.classList.add("hidden")}>
      <span onMouseEnter={() => itemRef.current.classList.remove("hidden")} className="flex w-fit text-base font-semibold text-slate-500 hover:cursor-pointer">
        menu
      </span>
      <div ref={itemRef} className="absolute top-full -left-4 hidden min-w-[150px] max-w-[250px]  overflow-hidden rounded-lg border-2 bg-white py-2 shadow-xl">
        <ul className="flex flex-grow flex-col ">
          {Children.map(children, (child, i) => {
            return (
              <li className="group hover:bg-gray-100" key={i}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    </span>
  );
};

export default Menu;

Menu.propTypes = {
  children: PropTypes.node,
};
