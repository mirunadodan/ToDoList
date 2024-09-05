import Slider from '@mui/material/Slider';
import { useState } from 'react';



export default function Volume() {
    const [volume, setVolume] = useState(50);
    const changeVolume = (event, newVal) => {
        setVolume(newVal)
    }
    return (
        <>
        <h1>Volume is: {volume}</h1>
        <Slider
        size="small"
        value={volume}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={changeVolume}
        />
        
        </>
        
    )
}