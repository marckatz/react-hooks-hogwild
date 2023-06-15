import React, { useState } from "react";


function Tile({hog}){
    const [minimized, setMin] = useState("min")
    
    const {name, specialty, greased, weight, image} = hog
    
    const extraData = (
        <div>
            <div>{specialty}</div>
            <div>{greased?"Greased":"Not greased"}</div>
            <div>{weight} kgs</div>
            <div>{hog["highest medal achieved"]}</div>
        </div>
    )

    return (
        <li onClick={() => setMin(minimized === "min"?"max":"min")} className={`pigTile ${minimized}PigTile image ui four wide column`}>
            <h3>{name}</h3>
            <img src={image} alt={name}></img>
            {minimized === "max"?extraData:null}
        </li>
    )
}


export default Tile;