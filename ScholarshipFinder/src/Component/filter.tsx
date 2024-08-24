import React from 'react';
import './filter.css';

const InputField = ({ label, value, onChange }) => {
    return (
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} />
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
    };
    const handleChangeTwo = (e) => {
        setValueTwo(e.target.value);
    };
    const handleChangeThree = (e) => {
        setValueThree(e.target.value);
    };
    const handleChangeFour = (e) => {
        setValueFour(e.target.value);
    };
    const handleChangeFive = (e) => {
        setValueFive(e.target.value);
    };
    const handleChangeSix = (e) => {
        setValueSix(e.target.value);
    };

    return (
        <div className="container">
            <h2>Filters</h2>
            <ul className="container-body">
                <li className="InputFieldOne">
                    <InputField label="Grades" value={valueOne} onChange={handleChangeOne} />
                    <button>Submit</button>
                </li>

                <li className="InputFieldOne">
                    <InputField label="Location" value={valueTwo} onChange={handleChangeTwo} />
                    <button>Submit</button>
                </li>

                <li className="InputFieldOne">
                    <InputField label="Income" value={valueThree} onChange={handleChangeThree} />
                    <button>Submit</button>
                </li>

                <li className="InputFieldOne">
                    <InputField label="Race" value={valueFour} onChange={handleChangeFour} />
                    <button>Submit</button>
                </li>

                <li className="InputFieldOne">
                    <InputField label="Credits" value={valueFive} onChange={handleChangeFive} />
                    <button>Submit</button>
                </li>

                <li className="InputFieldOne">
                    <InputField label="Full-Time" value={valueSix} onChange={handleChangeSix} />
                    <button>Submit</button>
                </li>
            </ul>
        </div>
    );
}