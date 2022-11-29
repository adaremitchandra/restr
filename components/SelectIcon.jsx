import { Combobox } from "@headlessui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

const SelectIcon = ({ value, data, optionKey, iconKey, onSearch, onChange, placeholder, label }) => {
  const ref = useRef();

  let shownData = optionKey ? value[optionKey] : value.value;

  return (
    <Combobox
      as="div"
      className="relative"
      value={value}
      onChange={(option) => {
        onChange(option);
      }}
    >
      {({ open }) => (
        <>
          {label && <Combobox.Label onClick={() => ref.current.click()}>{label}</Combobox.Label>}
          <div onClick={() => ref.current.click()} className={`w-full  flex items-center gap-2 px-3 border-2 rounded-lg ${open ? "border-sky-500" : "border-slate-200"} hover:cursor-pointer`}>
            {!open && <Image src={value[iconKey] || value.icon || "/vercel.svg"} width={25} height={25} alt="icon" />}
            <Combobox.Input
              placeholder={shownData || placeholder}
              className={`w-full py-3 outline-none ${shownData && !open ? "placeholder:text-black" : "placeholder:text-base"} ${open ? "caret-current" : "caret-transparent"} hover:cursor-pointer`}
              onChange={(event) => {
                onSearch(event.target.value);
              }}
            />
            <Combobox.Button ref={ref}>
              {/* iconDropdown arrow */}
              <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Combobox.Button>
          </div>
          <Combobox.Options className="absolute max-h-60 w-full overflow-auto  rounded-lg bg-white shadow-lg py-2 z-10 hover:cursor-pointer">
            {data.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 mx-4 font-medium text-slate-500">Nothing found.</div>
            ) : (
              data.map((item) => (
                <Combobox.Option key={item.id} className={({ active, selected }) => `py-3  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
                  {({ selected }) => (
                    <div className={`mx-4 flex gap-2 items-center font-medium ${selected ? "text-white" : "text-slate-500"}`}>
                      <Image src={item[iconKey] || item.icon} width={25} height={25} alt="icon" />
                      <spans>{item[optionKey] || item.value}</spans>
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </>
      )}
    </Combobox>
  );
};

export default SelectIcon;

SelectIcon.propTypes = {
  value: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  optionKey: PropTypes.string,
  iconKey: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

SelectIcon.defaultProps = {
  value: {},
  data: [],
  onSearch: () => {},
  onChange: () => {},
};
