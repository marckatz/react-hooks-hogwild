import React from "react";
import Nav from "./Nav";
import Tileset from "./Tileset";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Tileset tiles={hogs}/>
		</div>
	);
}

export default App;
