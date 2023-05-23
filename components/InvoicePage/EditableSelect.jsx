import { Text } from "@react-pdf/renderer";
import React, { useState } from "react";
import compose from "./styles/compose";

const EditableSelect = ({ className, options, placeholder, value, onChange, pdfMode }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {pdfMode ? (
        <Text style={compose("inv-span " + (className ? className : ""))}>{value}</Text>
      ) : (
        <>
          {isEditing ? (
            <select className={"inv-select " + (className ? className : "")} value={value} onChange={onChange ? (e) => onChange(e.target.value) : undefined} onBlur={() => setIsEditing(false)} autoFocus={true}>
              {options?.map((option) => (
                <option key={option.text} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          ) : (
            <input readOnly={true} type="text" className={"inv-input " + (className ? className : "")} value={value || ""} placeholder={placeholder || ""} onFocus={() => setIsEditing(true)} />
          )}
        </>
      )}
    </>
  );
};

export default EditableSelect;
