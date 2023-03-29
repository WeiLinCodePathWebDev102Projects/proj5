import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BreweryDetail =()=>{    
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    const breweryApi = `https://api.openbrewerydb.org/v1/breweries/${params.id}`;

    const getBreweryData = async () =>{
        const response = await fetch(breweryApi);
        setFullDetails(response);
        console.log(response);
    }

    useEffect(() =>{
        
    },[]);

    return(
        <div>
            
        </div>
    );
}

export default BreweryDetail;