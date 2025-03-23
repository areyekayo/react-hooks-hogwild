import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [hogList, setHogs] = useState(hogs)

	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogList}/>
		</div>
	);
}

export default App;
