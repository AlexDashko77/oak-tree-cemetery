import { FC, useState } from 'react';
import './dropdown.sass';
import { IDropdown } from '../../interfaces/interfaces';



const options = [
  "Sole Proprietorship",
  "Partnership",
  "Limited Liability Company"
];

const Dropdown: FC<IDropdown> = ({ value = "Select an option", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
        {selectedOption}
        <img
          className="dropdown__arrow"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          src="/arrow.svg"
          alt="Arrow"
        />
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="dropdown__item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
