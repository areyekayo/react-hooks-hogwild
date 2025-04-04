import React, {useState} from "react";
import HogItem from "./HogItem";

function HogList({hogs}){
    // add state for whether a pig tile was clicked
    const [clickedPig, setClickedPig] = useState("")

    function handleClick(name){
        setClickedPig(name)
    }
    
    const hogTiles = hogs.map(hog => {
        const {name, greased, "highest medal achieved": highestMedal, image, specialty, weight} = hog;

        //return pig tile with image and name, and conditionally render HogItem component when the tile is clicked
        return (<div className="pigTile" onClick={() => handleClick(name)} key={name}>
            <img src={image}></img>
            <h3>{name}</h3>
            {clickedPig === name && <HogItem greased={greased} highestMedal={highestMedal} specialty={specialty} weight={weight} />}
        </div>)
    })

    return (
        <div>
            {hogTiles}
        </div>
    )

}

export default HogList