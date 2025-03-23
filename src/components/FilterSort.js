import React from "react";

function FilterSort({handleFilter, handleSort}) {

    return (
        <div>
            <select name="greased" onChange={handleFilter}>
                <option value="All">All piggies</option>
                <option value="true">Greased Piggies</option>
                <option value="false">Ungreased Piggies</option>
            </select>
            <button onClick={() => handleSort("name")}>Sort By Name</button>
            <button onClick={() => handleSort("weight")}>Sort By Weight</button>
        </div>
    )
}

export default FilterSort