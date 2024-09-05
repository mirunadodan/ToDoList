import { useState } from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingDemo() {
    const [rating, setRating] = useState(3)
    
    return(
        <>
        <Typography component="legend">Rating is: {rating}</Typography>
        <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
            setRating(newValue);
        }}
        />
        </>
    )

}
