import React from "react";
import { Link } from "react-router-dom";


const BreweryInfo = ({name, id}) => {

    return(
        <div className="breweryTag">
            <Link
                to={`brewery/${id}`} 
                key={name}>
                <h5>
                    {name}
                </h5>
            </Link>
        </div>
    );

};

export default BreweryInfo;
