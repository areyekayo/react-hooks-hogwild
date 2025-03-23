import React from "react";

function HogItem({greased, highestMedal, specialty, weight}) {

    return (
        <ul>
            <li>Greased: {greased.toString()}</li>
            <li>Highest Medal Achieved: {highestMedal}</li>
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight}</li>
        </ul>
    )

}



export default HogItem;