import React, { useState} from 'react';
import {Grid } from '@material-ui/core';
import Header from './Header';    
import Content from './Content';

function App() {
  const [countries, setCountries]=useState(["IN","US"]);
  const [country, setCountry]=useState("IN");
  const [addedCountry, setAddedCountry]=useState("");


const addACountry=()=>{
  if(!countries.includes(addedCountry)){
    countries.push(addedCountry)
    setCountries(countries)
  }
}
const handleCountry=(e)=>{
  setAddedCountry(e.target.value)
}
const handleChange=(e)=>{
  setCountry(e.target.value)
}
 return(
  <Grid container direction="column">
    <Grid item><Header countries={countries} setCountries={setCountries}  country={country} setCountry={setCountry}
     handleCountry={handleCountry} handleChange={handleChange} addACountry={addACountry}/></Grid>
    <Grid item container>
      <Grid item xs={0} sm={2}/>
      <Grid item xs={8} sm={8}>
        <Content country={country}/> 
      </Grid>
      <Grid item xs={0} sm={2}/>
    </Grid>
    </Grid>
 )
}

export default App;
