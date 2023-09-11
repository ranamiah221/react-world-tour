import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries]= useState([]);

    const[visitedCountries, setVisitedCountries]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[]);

    const handleVisitedCountries= country =>{
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);

    }

    return (
        <div>
            <h4>Countries : {countries.length}</h4>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ol>
                   {
                    visitedCountries.map(country=> <li key={country.cca3} >{country.name.common}</li> )
                   }
                </ol>
            </div>
             <div className="country-container">
             {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
             }
             </div>
        </div>
    );
};

export default Countries;