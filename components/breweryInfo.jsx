import React from "react";

const BreweryInfo = ({name, address, city, postal_code, website}) => {

    return(
        <div className="breweryTag">
            <h5>
                {name}
            </h5>
            {address} <br></br>
            {city}, {postal_code}
            <br></br>
            <a href={website}> Link to Website </a>
        </div>
    );

};

export default BreweryInfo;
