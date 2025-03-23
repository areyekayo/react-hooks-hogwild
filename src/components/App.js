import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import FilterSort from "./FilterSort";

function App() {
	const [greaseFilter, setGreaseFilter] = useState("All")
	const [sortKey, setSortKey] = useState(null)

	function handleFilter(event){
		setGreaseFilter(event.target.value)
	}

	function handleSort(key){
		setSortKey(key)
	}

	//filter pigs based on state grease filter
    const filteredPiggies = hogs.filter(hog => {
        if (greaseFilter === "All"){
            return true
        }
        else return hog.greased.toString() === greaseFilter
    })

	//sort pigs based state sort key (name or weight)
	const sortedPiggies = [...filteredPiggies].sort((a, b) => {
		if (!sortKey) return 0;
		if (a[sortKey] > b[sortKey]) return 1
		if (a[sortKey] < b[sortKey]) return -1
	})

	return (
		<div className="App">
			<Nav />
			<FilterSort handleFilter={handleFilter} handleSort={handleSort}/>
			<HogList hogs={sortedPiggies}/>
		</div>
	);
}

export default App;
