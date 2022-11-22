import PropTypes from "prop-types";
import { Combobox } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";

const Select = ({ value, data, optionKey, onSearch, onChange, placeholder, label }) => {
  const [query, setQuery] = useState("");
  const ref = useRef();

  let shownData = optionKey ? value[optionKey] : value.value;

  useEffect(() => {
    onSearch(query);
  }, [query]);

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
          <div onClick={() => ref.current.click()} className={`w-full flex items-center px-3 border-2 rounded-lg ${open ? "border-sky-500" : "border-slate-200"} hover:cursor-pointer`}>
            <Combobox.Input
              placeholder={shownData || placeholder}
              className={`w-full py-3 outline-none mr-2 ${shownData && !open ? "placeholder:text-black" : "placeholder:text-base"} ${open ? "caret-current" : "caret-transparent"} hover:cursor-pointer`}
              onFocus={() => {
                setQuery("");
              }}
              onChange={(event) => {
                setQuery(event.target.value);
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
                    <>
                      <span className={`flex mx-4 font-medium ${selected ? "text-white" : "text-slate-500"}`}>{optionKey ? item[optionKey] : item.value}</span>
                    </>
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

export default Select;

Select.propTypes = {
  value: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  optionKey: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Select.defaultProps = {
  value: {},
  data: [],
  onSearch: () => {},
  onChange: () => {},
};
