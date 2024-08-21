import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './title'
import Filter from './filter'
import Scholarships from './scholarships'

function App() {
    return (
        <>
            <Title/>
            <Filter/>
            <Scholarships/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)