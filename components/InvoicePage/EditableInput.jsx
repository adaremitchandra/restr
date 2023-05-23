import React from "react";
import { Text } from "@react-pdf/renderer";
import compose from "./styles/compose";

const EditableInput = ({ className, placeholder, value, onChange, pdfMode }) => {
  return (
    <>
      {pdfMode ? (
        <>{value && <Text style={compose("inv-span " + (className ? className : ""))}>{value}</Text>}</>
      ) : (
        <input type="text" className={"inv-input " + (className ? className : "")} placeholder={placeholder || ""} value={value || ""} onChange={onChange ? (e) => onChange(e.target.value) : undefined} />
      )}
    </>
  );
};

export default EditableInput;
