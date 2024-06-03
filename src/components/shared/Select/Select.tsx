import React, { FC, useState } from "react";

type SelectProps = {
  setValue: (value: string) => void;
};

export const Select: FC<SelectProps> = ({ setValue }) => {
  const [selectedOption, setSelectedOption] = useState<string>("5");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
    setValue(value);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <label htmlFor="select-options" className="mb-2">
        Select the number of questions:
      </label>
      <select
        id="select-options"
        value={selectedOption}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-center"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default Select;
