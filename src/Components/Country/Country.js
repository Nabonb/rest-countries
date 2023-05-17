import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {population,region,name,flags}=props.country;
    return (
        <div className='country'>
            
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;