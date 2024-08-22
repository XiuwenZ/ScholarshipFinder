import React from 'react'
import './filter.css'

const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

export default function Filter() {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedFour, setCheckedFour] = React.useState(false);
    const [checkedFive, setCheckedFive] = React.useState(false);
    const [checkedSix, setCheckedSix] = React.useState(false);
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    }
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    }
    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
    }
    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
    }
    const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
    }
    const handleChangeSix = () => {
        setCheckedSix(!checkedSix);
    }
    return (
        <div className="container">
            <h2>Filters</h2>
            <ul className="container-body">
                <li className="CheckBoxOne">
                    <Checkbox Label="Value 1" Value={checkedOne} onChange={handleChangeOne} />
                    <h3>Grades</h3>
                </li>

                <li className="CheckBoxOne">
                    <Checkbox Label="Value 2" Value={checkedTwo} onChange={handleChangeTwo} />
                    <h3>Location</h3>
                </li>

                <li className="CheckBoxOne">
                    <Checkbox Label="Value 3" Value={checkedThree} onChange={handleChangeThree} />
                    <h3>Income</h3>
                </li>

                <li className="CheckBoxOne">
                    <Checkbox Label="Value 4" Value={checkedFour} onChange={handleChangeFour} />
                    <h3>Jinfeng</h3>
                </li>

                <li className="CheckBoxOne">
                    <Checkbox Label="Value 5" Value={checkedFive} onChange={handleChangeFive} />
                    <h3>Shuyi</h3>
                </li>

                <li className="CheckBoxOne">
                    <Checkbox Label="Value 6" Value={checkedSix} onChange={handleChangeSix} />
                    <h3>Xiuwen</h3>
                </li>
            </ul>
        </div>
    )
}