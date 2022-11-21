import { useRef, Children } from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  const itemRef = useRef();

  return (
    <span className="relative" onMouseLeave={() => itemRef.current.classList.add("hidden")}>
      <span onMouseEnter={() => itemRef.current.classList.remove("hidden")} className="text-base text-slate-500 font-semibold flex hover:cursor-pointer w-fit">
        menu
      </span>
      <div ref={itemRef} className="hidden absolute bg-white rounded-lg top-full -left-4  min-w-[150px] max-w-[250px] shadow-xl py-2 overflow-hidden border-2">
        <ul className="flex-grow flex flex-col ">
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
