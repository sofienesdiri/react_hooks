import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const ControlledRating=({rate,setRate})=>{
    return(
        <div>
            <Typography component="legend"></Typography>
            <Rating
                name="simple-controlled"
                onChange={ (e)=>setRate(e.target.value)}/>
        </div>
    )
}
export default ControlledRating