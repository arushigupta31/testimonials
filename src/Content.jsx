import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Grid } from '@material-ui/core';
import testimonialList from './constants';
import {makeStyles} from'@material-ui/styles';


const usestyles = makeStyles(()=>({
    cardContent:{
        margin: "10px"
    }
}));

const Content = (props) =>{ 
    const classes = usestyles()
    const getTestimonialCard = testimonialObj => {
        return (
        <Grid item xs={12} sm={4}>
            <TestimonialCard {...testimonialObj} {...props} />
        </Grid>
        )
    };
      
    return (
        <Grid container spacing={2} className={classes.cardContent}>
        
        {testimonialList.map(testimonialObj => getTestimonialCard(testimonialObj))}
        </Grid>
    );
    };

export default Content;