import { Combobox } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SelectIcon = ({ value = {}, data, optionKey, iconKey, onSearch = () => {}, onChange = () => {}, placeholder, label }) => {
  const [displayValue, setDisplayValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef();
  const input = useRef();

  let shownData = optionKey ? value[optionKey] : value.value;

  useEffect(() => {
    onSearch(query);
  }, [query]);

  useEffect(() => {
    if (focused === false) {
      if (shownData) {
        setDisplayValue(shownData);
      } else {
        setDisplayValue("");
      }
    }
  }, [value, focused]);

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
          <div onClick={() => ref.current.click()} className={`w-full flex items-center gap-2 px-3 border-2 rounded-lg ${open ? "border-sky-500" : "border-slate-200"}hover:cursor-pointer`}>
            {!open && <Image src={value[iconKey] || value.icon || "/vercel.svg"} width={25} height={25} alt="icon" />}
            <input
              ref={input}
              value={displayValue}
              placeholder={shownData || placeholder}
              className={`w-full py-3 outline-none ${shownData && !open ? "placeholder:text-black" : "placeholder:text-base"} ${open ? "caret-current" : "caret-transparent"} hover:cursor-pointer`}
              onFocus={() => {
                setQuery("");
                setFocused(true);
                setDisplayValue("");
              }}
              onBlur={() => {
                setFocused(false);
              }}
              onChange={(event) => {
                if (open) {
                  setDisplayValue(event.target.value);
                  setQuery(event.target.value);
                }
              }}
            />
            <Combobox.Button ref={ref} onClick={() => input.current.focus()}>
              {/* iconDropdown arrow */}
              <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Combobox.Button>
          </div>
          <Combobox.Options className="absolute max-h-60 w-full overflow-auto  rounded-lg bg-white shadow-lg py-2 z-10">
            {data.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 mx-4 font-medium text-slate-500">Nothing found.</div>
            ) : (
              data.map((item) => (
                <Combobox.Option key={item.id} className={({ active, selected }) => `py-2  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
                  {({ selected }) => (
                    <div className="mx-4 flex gap-2 items-center">
                      <Image src={item[iconKey] || item.icon} width={25} height={25} alt={item[optionKey] || item.value} />
                      <span className={`flex font-medium ${selected ? "text-white" : "text-slate-500"}`}>{item[optionKey] || item.value}</span>
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
