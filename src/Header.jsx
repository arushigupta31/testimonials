import { AppBar, Toolbar, Typography, InputLabel, Select, MenuItem, Button, DialogTitle } from "@material-ui/core";
import { Experiment, Variant, emitter , experimentDebugger} from '@marvelapp/react-ab-test';
import {makeStyles} from'@material-ui/styles';
import UdayyIcon from './udayy.png';
import { useContext, useState } from "react";
import SimpleDialog from "./SimpleDialog";
import Content from "./Content";
experimentDebugger.enable();

const usestyles = makeStyles(()=>({
    companyLogo:{
        height:"30px", 
        width:"30px"
    },
    typographyStyles:{
        flex: 1
    },
    countryStyles:{
        color: "white"
    },
    icon: {
        fill: 'white',
     },
}));


const Header =(props)=>{
    const [open, setOpen] = useState(false);
    const classes= usestyles();


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <AppBar position="static">
            <Toolbar>
                <img src={UdayyIcon} alt='companyLogo' className={classes.companyLogo}/>
                <Typography className={classes.typographyStyles}><h3>ABC Company</h3></Typography>
                <Select className={classes.countryStyles} id="select" value={props.country} inputProps={{classes: {icon: classes.icon}}} 
                        onChange={props.handleChange}>
                        {props.countries.map((item)=>{
                          return(
                            <MenuItem value={item} name={item}>{item}</MenuItem>
                          )})}
                </Select>              
                <Experiment name="landtest">
                  <Variant name="A">         
                    <Button variant="contained" onClick={handleOpen}>Add Country</Button>  
                    <SimpleDialog open={open} onClose={handleClose} {...props}/>           
                  </Variant>
                      
                  <Variant name="B">
                  </Variant>
                </Experiment>
            </Toolbar>
        </AppBar>
        </>
    )

}
export default Header;