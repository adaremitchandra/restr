import { Combobox } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";

const Select = ({ data, optionKey, onSearch = () => {}, onChange = () => {} }) => {
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef();
  const refs = useRef();

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <>
      <input ref={ref} onFocus={() => refs.current.click()} />

      <Listbox
        as="div"
        className="relative hover:cursor-pointer"
        value={selected}
        onChange={(option) => {
          setSelected(option);
          onChange(option);
        }}
      >
        <Listbox.Button ref={refs} onClick={() => ref.current.focus()} className={`w-full px-3 border-2 ${focused ? "border-sky-500" : "border-slate-200"}  rounded-lg flex items-center`}>
          {/* <Combobox.Input
          className="w-full py-3 outline-none mr-2"
          onFocus={() => {
            setFocused(true);
            setQuery("");
          }}
          onBlur={() => setFocused(false)}
          displayValue={(data) => (optionKey ? data[optionKey] : data.value)}
          onChange={(event) => setQuery(event.target.value)}
        /> */}
          {/* <span className="block truncate">{optionKey ? selected[optionKey] : selected.value}</span> */}
          {/* iconDropdown arrow */}
          <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${focused ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Listbox.Button>
        <Listbox.Options className="absolute max-h-60 w-full overflow-auto py-2 rounded-lg bg-white shadow-lg  ">
          {data.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
          ) : (
            data.map((item) => (
              <Listbox.Option key={item.id} className={({ active, selected }) => `py-2  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
                {({ selected }) => (
                  <>
                    <span className={`flex mx-4 font-medium ${selected ? "text-white" : "text-slate-500"}`}>{optionKey ? item[optionKey] : item.value}</span>
                  </>
                )}
              </Listbox.Option>
            ))
          )}
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export default Select;
