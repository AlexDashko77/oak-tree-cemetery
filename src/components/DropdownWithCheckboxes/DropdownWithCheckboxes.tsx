import { FC, useState, useEffect } from "react";
import "./dropdownWithCheckboxes.sass";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import { IDropdown } from "../../interfaces/interfaces";



const options = ["Funeral Home", "Logistics services", "Burial care Contractor"];

const DropdownWithCheckboxes: FC<IDropdown> = observer(({ value = "Select Options", onChange }) => {
  const preselectedOptions = store.companyType.split(",").map((item) => item.trim());

  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<typeof options[number], boolean>>(
    options.reduce((acc, option) => {
      acc[option] = preselectedOptions.includes(option);
      return acc;
    }, {} as Record<typeof options[number], boolean>)
  );

  const selectedOptions = Object.keys(checkedItems).filter((key) => checkedItems[key as keyof typeof checkedItems]);

  useEffect(() => {
    onChange(selectedOptions.join(", "));
  }, [selectedOptions, onChange]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="customDropdown">
      <button className="customDropdown__button" onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : value}
        <img
          className="customDropdown__arrow"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          src="/arrow.svg"
          alt="Arrow"
        />
      </button>

      {isOpen && (
        <ul className="customDropdown__list">
          {options.map((option) => (
            <li className="customDropdown__item" key={option}>
              <label
                className="customDropdown__label"
                style={{
                  fontWeight: checkedItems[option] ? "600" : "400",
                  backgroundColor: checkedItems[option] ? "#0000000D" : "transparent",
                }}
              >
                <input
                  type="checkbox"
                  name={option}
                  checked={checkedItems[option]}
                  onChange={handleCheckboxChange}
                  className="customDropdown__checkbox"
                />
                <span className="customDropdown__checkbox-wrapper">
                  <span className="customDropdown__checkbox-custom"></span>
                </span>
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default DropdownWithCheckboxes;
