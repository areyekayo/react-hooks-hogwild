import React, {useState} from "react";
import HogItem from "./HogItem";

function HogList({hogs}){
    //console.log("hogs in Hog List", hogs)

    const [clickedPig, setClickedPig] = useState("")

    function handleClick(name){
        setClickedPig(name)
    }
    
    const hogTiles = hogs.map(hog => {
        const {name, greased, "highest medal achieved": highestMedal, image, specialty, weight} = hog;

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