import React from 'react'
import Box from '@mui/material/Box';
import './scholarstyle.css';
import { Link } from "react-router-dom";

export default function Scholarship() {
  return (
    <div className="container-scholarship">
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 1</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 2</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 3</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 4</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 5</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 6</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 7</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 8</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 9</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 10</Link></Box>
        <Box className="Box"><Link to="https://google.com/" target="_blank">Scholarship 11</Link></Box>
    </div>
  );
}