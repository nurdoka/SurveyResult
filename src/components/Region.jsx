import React from "react";

function Region({region}){
    return <div className="region-container">
        <p>{region.id}</p>
        <p>{region.name_ru}</p>
        <p>{region.name_kg}</p>
    </div>
}

export default Region