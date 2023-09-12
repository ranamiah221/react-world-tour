
import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries, handleVisitedFlag }) => {
    // console.log(country);
    const {name, flags, capital, population, area, cca3} =country;
   
    const [visited, setVisited]=useState(false);
    const handleClick=()=>{
        setVisited(!visited);
    }
    

    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple': 'black'}}>Name : {name?.common}</h3>
            <p>Capital : {capital}</p>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>


            <button onClick={()=>{handleVisitedCountries(country)}} className='btn-style'>Mark Visited</button>
            <br/>
            <button onClick={()=>{handleVisitedFlag(country.flags.png)}}>Add Flag</button>
            <br/>

            
            <button onClick={handleClick} className='btn-style'>{visited? 'Visited':'Going'}</button>
            {visited?'I have visit this country..':'I want to visit this country..'}
  
        </div>
    );
};

export default Country;