import { InputText } from "primereact/inputtext";
import { useState } from "react";

const FloatInput = ({ props }) => {
  const [value, setValue] = useState("");
  switch (props.type) {
    case "search":
      return (
        <span className="p-float-label p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            className={`${props.style && props.style}`}
            id={value}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="lefticon">{props.placeholder}</label>
        </span>
      );
      break;

    default:
      break;
  }
};

export default FloatInput;
