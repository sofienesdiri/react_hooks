import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const BasicRating=({rat})=>{
    return(
        <div>
            <Typography component="legend">Rate</Typography>
            <Rating name="read-only" value={rat} readOnly />
        </div>
    )
}
export default BasicRating