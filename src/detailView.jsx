import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreweryDetail from "./breweryDetail";


const DetailedView =()=>{   
    let params = useParams();
    console.log(params.id)
    const [fullDetails, setFullDetails] = useState(0);
    const breweryApi = `https://api.openbrewerydb.org/v1/breweries/${params.id}`;

    const getBreweryData = async () =>{
        const response = await fetch(breweryApi);
        const json = await response.json();
        setFullDetails(json);
        //console.log(fullDetails);
    }

    useEffect(() =>{
        getBreweryData();
        console.log(fullDetails);
    },[]);

    // console.log(fullDetails.id)

    return(
        <div>
            <h2>
                {fullDetails.name}
            </h2>
            <div className="type">
                {/* type of brewery */}
                {fullDetails.brewery_type}
            </div>
            <div className="website">
                <a href={fullDetails.website_url}> Link to Brewery </a>
            </div>
            <div className="address">
                {fullDetails.address_1} {fullDetails.city} {fullDetails.state_province} {fullDetails.postal_code}
            </div>
        </div>
    );
}

export default DetailedView;