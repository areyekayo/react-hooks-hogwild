import React from "react";

function FilterSort({handleFilter}) {

    return (
        <div>
            <select name="greased" onChange={handleFilter}>
                <option value="All">All piggies</option>
                <option value="true">Greased Piggies</option>
                <option value="false">Ungreased Piggies</option>
            </select>
        </div>
    )
}

export default FilterSort