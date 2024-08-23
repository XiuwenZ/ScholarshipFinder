import React from 'react'
import './filter.css'

const Dropdown = ({ label, value, onChange, options }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  };

export default function Filter() {
    const [valueOne, setValueOne] = React.useState('');
    const [valueTwo, setValueTwo] = React.useState('');
    const [valueThree, setValueThree] = React.useState('');
    const [valueFour, setValueFour] = React.useState('');
    const [valueFive, setValueFive] = React.useState('');
    const [valueSix, setValueSix] = React.useState('');

    const handleChangeOne = (e) => {
        setValueOne(e.target.value);
    }
    const handleChangeTwo = (e) => {
        setValueTwo(e.target.value);
    }
    const handleChangeThree = (e) => {
        setValueThree(e.target.value);
    }
    const handleChangeFour = (e) => {
        setValueFour(e.target.value);
    }
    const handleChangeFive = (e) => {
        setValueFive(e.target.value);
    }
    const handleChangeSix = (e) => {
        setValueSix(e.target.value);
    }

    const options = ["Option 1", "Option 2", "Option 3"]; // Replace with your actual options

    return (
        <div className="container">
            <h2>Filters</h2>
            <ul className="container-body">
                <li className="DropdownOne">
                    <Dropdown label="Grades" value={valueOne} onChange={handleChangeOne} options={options} />
                </li>

                <li className="DropdownOne">
                    <Dropdown label="Location" value={valueTwo} onChange={handleChangeTwo} options={options} />
                </li>

                <li className="DropdownOne">
                    <Dropdown label="Income" value={valueThree} onChange={handleChangeThree} options={options} />
                </li>

                <li className="DropdownOne">
                    <Dropdown label="Jinfeng" value={valueFour} onChange={handleChangeFour} options={options} />
                </li>

                <li className="DropdownOne">
                    <Dropdown label="Shuyi" value={valueFive} onChange={handleChangeFive} options={options} />
                </li>

                <li className="DropdownOne">
                    <Dropdown label="Xiuwen" value={valueSix} onChange={handleChangeSix} options={options} />
                </li>
            </ul>
        </div>
    )
}