import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  cardUS:{
    backgroundColor: "yellow",
    height:"100%",
  },
  card:{
    backgroundColor: "white",
    height:"100%",
  }
});
const TestimonialCard=(props)=> {
  const classes= useStyles();

  const { logo, handle, name, testimonial, country} =props;

  return (
    <Card className={country ==="US" ? classes.cardUS: classes.card}>
      <CardHeader
        avatar={
          <Avatar src={logo}/>
        }
        title={name}
        subheader={handle}
      />
      <CardContent>
        <Typography variant="body2" component="p">
        {testimonial}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default TestimonialCard; 


