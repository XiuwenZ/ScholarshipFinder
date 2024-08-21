import React from 'react'

const App = () => {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
}
const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
}
const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
}

export default function Filter() {
    return (
        <>
            <h1>Filters</h1>
            <Checkbox>
                Label="Value 1"
                Value={CheckedOne}
                onChange={handleChangeOne}
            /</Checkbox>
            <Checkbox>
                Label="Value 2"
                Value={CheckedTwo}
                onChange={handleChangeTwo}
            /</Checkbox>
        </>
    )
}