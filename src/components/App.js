import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import FilterSort from "./FilterSort";

function App() {
	const [hogList, setHogs] = useState(hogs)
	const [greaseFilter, setGreaseFilter] = useState("All")

	function handleFilter(event){
		setGreaseFilter(event.target.value)
	}

    const filteredPiggies = hogList.filter(hog => {
        if (greaseFilter === "All"){
            return true
        }
        else return hog.greased.toString() === greaseFilter
    })


	return (
		<div className="App">
			<Nav />
			<FilterSort handleFilter={handleFilter} />
			<HogList hogs={filteredPiggies} greaseFilter={greaseFilter}/>
		</div>
	);
}

export default App;
