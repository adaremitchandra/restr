import { Combobox } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";

const Select = ({ data, optionKey, onSearch = () => {}, onChange = () => {} }) => {
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  // const [show, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    onSearch(query);
  }, [query]);

  const handleClick = () => {
    if (focused) {
      inputRef.current.blur();
    } else {
      setShow((prev) => !prev);
    }
  };

  return (
    <Combobox
      as="div"
      className="relative hover:cursor-pointer"
      value={selected}
      onChange={(option) => {
        setSelected(option);
        onChange(option);
      }}
    >
      <Combobox.Button onClick={handleClick} className={`w-full px-3 border-2 ${focused ? "border-sky-500" : "border-slate-200"}  rounded-lg flex items-center`}>
        {show ? (
          <Combobox.Input
            ref={inputRef}
            className="w-full py-3 outline-none mr-2"
            onFocus={() => {
              console.log("focys Kan dia");
              setFocused(true);
              setQuery("");
            }}
            displayValue={(option) => (optionKey ? option[optionKey] : option.value)}
            onBlur={() => {
              setShow(false);
              setFocused(false);
            }}
            onChange={(event) => setQuery(event.target.value)}
          />
        ) : (
          <span className="w-full py-3 mr-2 text-left overflow-hidden">{optionKey ? selected[optionKey] : selected.value}</span>
        )}
        {/* iconDropdown arrow */}
        <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${focused ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Combobox.Button>
      {/* {focused && ( */}
      <Combobox.Options className="absolute max-h-60 w-full overflow-auto py-2 rounded-lg bg-white shadow-lg  ">
        {data.length === 0 && query !== "" ? (
          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
        ) : (
          data.map((item) => (
            <Combobox.Option key={item.id} className={({ active, selected }) => `py-2  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
              {({ selected }) => (
                <>
                  <span className={`flex mx-4 font-medium ${selected ? "text-white" : "text-slate-500"}`}>{optionKey ? item[optionKey] : item.value}</span>
                </>
              )}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
      {/* )} */}
    </Combobox>
  );
};

export default Select;

// import { useState } from "react";
// import { Combobox } from "@headlessui/react";

// const people = [
//   { id: 1, name: "Durward Reynolds" },
//   { id: 2, name: "Kenton Towne" },
//   { id: 3, name: "Therese Wunsch" },
//   { id: 4, name: "Benedict Kessler" },
//   { id: 5, name: "Katelyn Rohan" },
// ];

// function Select() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0]);
//   const [query, setQuery] = useState("");
//   const [show, setShow] = useState(true);

//   const filteredPeople =
//     query === ""
//       ? people
//       : people.filter((person) => {
//           return person.name.toLowerCase().includes(query.toLowerCase());
//         });

//   return (
//     <Combobox value={selectedPerson} onChange={setSelectedPerson}>
//       {({ show }) => (
//         <>
//           <Combobox.Input onChange={(event) => setQuery(event.target.value)} displayValue={(person) => person.name} />
//           {show && (
//             <div>
//               {/*
//                 Using `static`, `Combobox.Options` are always rendered
//                 and the `open` state is ignored.
//               */}
//               <Combobox.Options static>
//                 {filteredPeople.map((person) => (
//                   <Combobox.Option key={person.id} value={person}>
//                     {person.name}
//                   </Combobox.Option>
//                 ))}
//               </Combobox.Options>
//             </div>
//           )}
//         </>
//       )}
//     </Combobox>
//   );
// }

// export default Select;

// import { Combobox } from "@headlessui/react";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Select = ({ data, optionKey, onSearch = () => {}, onChange = () => {} }) => {
//   const [selected, setSelected] = useState({});
//   const [query, setQuery] = useState("");
//   const [focused, setFocused] = useState(false);
//   const ref = useRef();
//   const input = useRef();

//   useEffect(() => {
//     onSearch(query);
//   }, [query]);

//   return (
//     <Combobox
//       as="div"
//       className="relative hover:cursor-pointer"
//       value={selected}
//       onChange={(option) => {
//         setSelected(option);
//         onChange(option);
//       }}
//     >
//       <div className={`w-full px-3 border-2 ${focused ? "border-sky-500" : "border-slate-200"}  rounded-lg flex items-center`}>
//         <Combobox.Input
//           ref={input}
//           onClick={() => ref.current.click()}
//           className="w-full py-3 outline-none mr-2"
//           onFocus={() => {
//             setFocused(true);
//             setQuery("");
//           }}
//           onBlur={() => setFocused(false)}
//           displayValue={(data) => (optionKey ? data[optionKey] : data.value)}
//           onChange={(event) => setQuery(event.target.value)}
//         />
//         <Combobox.Button ref={ref} onClick={() => focused && input.current.blur()}>
//           {/* iconDropdown arrow */}
//           <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${focused ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <polyline points="6 9 12 15 18 9" />
//           </svg>
//         </Combobox.Button>
//       </div>
//       <Combobox.Options className="absolute max-h-60 w-full overflow-auto py-2 rounded-lg bg-white shadow-lg  ">
//         {data.length === 0 && query !== "" ? (
//           <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
//         ) : (
//           data.map((item) => (
//             <Combobox.Option key={item.id} className={({ active, selected }) => `py-2  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
//               {({ selected }) => (
//                 <>
//                   <span className={`flex mx-4 font-medium ${selected ? "text-white" : "text-slate-500"}`}>{optionKey ? item[optionKey] : item.value}</span>
//                 </>
//               )}
//             </Combobox.Option>
//           ))
//         )}
//       </Combobox.Options>
//     </Combobox>
//   );
// };

// export default Select;

///pertama
// import { Combobox } from "@headlessui/react";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const Select = ({ data, optionKey, onSearch = () => {}, onChange = () => {} }) => {
//   const [selected, setSelected] = useState({});
//   const [query, setQuery] = useState("");
//   const [focused, setFocused] = useState(false);

//   useEffect(() => {
//     onSearch(query);
//   }, [query]);

//   return (
//     <Combobox
//       as="div"
//       className="relative hover:cursor-pointer"
//       value={selected}
//       onChange={(option) => {
//         setSelected(option);
//         onChange(option);
//       }}
//     >
//       <Combobox.Button className={`w-full px-3 border-2 ${focused ? "border-sky-500" : "border-slate-200"}  rounded-lg flex items-center`}>
//         <Combobox.Input
//           className="w-full py-3 outline-none mr-2"
//           onFocus={() => {
//             setFocused(true);
//             setQuery("");
//           }}
//           onBlur={() => setFocused(false)}
//           displayValue={(data) => (optionKey ? data[optionKey] : data.value)}
//           onChange={(event) => setQuery(event.target.value)}
//         />
//         {/* iconDropdown arrow */}
//         <svg className={`h-8 w-8 -ml-2 text-gray-200 transition ${focused ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <polyline points="6 9 12 15 18 9" />
//         </svg>
//       </Combobox.Button>
//       <Combobox.Options className="absolute max-h-60 w-full overflow-auto py-2 rounded-lg bg-white shadow-lg  ">
//         {data.length === 0 && query !== "" ? (
//           <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
//         ) : (
//           data.map((item) => (
//             <Combobox.Option key={item.id} className={({ active, selected }) => `py-2  ${selected ? "bg-sky-500" : active ? "bg-gray-100" : "bg-white"} group`} value={item}>
//               {({ selected }) => (
//                 <>
//                   <span className={`flex mx-4 font-medium ${selected ? "text-white" : "text-slate-500"}`}>{optionKey ? item[optionKey] : item.value}</span>
//                 </>
//               )}
//             </Combobox.Option>
//           ))
//         )}
//       </Combobox.Options>
//     </Combobox>
//   );
// };

// export default Select;
