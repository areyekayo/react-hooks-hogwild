import React from "react";
import HogItem from "./HogItem";

function HogList({hogs}){
    //console.log("hogs in Hog List", hogs)


    const hogTiles = hogs.map(hog => {
        const {name, greased, highest_medal_achieved, image, specialty, weight} = hog;
        return (<div className="pigTile">
            <img src={image}></img>
            <h3>{name}</h3>
            {/* <HogItem key={name} greased={greased} highestMedalAchieved={highest_medal_achieved} specialty={specialty} weight={weight}/> */}
        </div>)

    })

    return (
        <div>
            {hogTiles}
        </div>
    )

}

export default HogList