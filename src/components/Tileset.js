import React, { useState } from "react";
import Tile from "./Tile";

function Tileset({tiles}){
    const [showGreased, setGreased] = useState("All")
    const [sorted, setSorted] = useState("none")

    const tileList = tiles.sort(compareHogs).map(tile => showGreased === "All" || tile.greased.toString() === showGreased?
        <Tile hog={tile} key={tile.name} />:
        null
    )
    
    function compareHogs(hog1, hog2){
        if((sorted === "none" || hog1[sorted] === hog2[sorted])){
            return 0
        }
        else if(hog1[sorted] > hog2[sorted]){
            return 1
        }
        else{
            return -1
        }
    }
    
    return (
        <div>
            <select onChange={e => setGreased(e.target.value)}>
                <option value="All">All</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
                <option value="asdlkfja">Hello</option>
            </select>
            <select onChange={e => setSorted(e.target.value)}>
                <option value="none">Sort by...</option>
                <option value="name">Name</option>
                <option value="weight">weight</option>
            </select>
            <ul className="ui grid container">{tileList} </ul>
        </div>
    )
}


export default Tileset;