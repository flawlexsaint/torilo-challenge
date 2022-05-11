import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const DropdownComponent = ({ props }) => {
  const [value, setValue] = useState("");
  const { items, placeholder, style } = props;

  const onCityChange = (e) => {
    setValue(e.value);
  };

  return (
    <>
      <Dropdown
        className={`${style}`}
        value={value}
        options={items}
        onChange={onCityChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default DropdownComponent;
