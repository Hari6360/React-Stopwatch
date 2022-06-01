import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [time, setTime] = useState(0);
	const [timeron, setTimeon] = useState(false);
	useEffect(() => {
		let id = null;
		if (timeron) {
			id = setInterval(() => {
				setTime((prevtime) => prevtime + 10);
			}, 10);
		} else {
			clearInterval(id);
		}
		return () => clearInterval(id);
	}, [timeron]);
	return (
		<div className="App">
			<div>
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
			</div>
			<div>
				<button onClick={() => setTimeon(true)}>Start</button>
				<button onClick={() => setTimeon(false)}>Stop</button>
				<button
					onClick={() => {
						setTime(0);
						setTimeon(false);
					}}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
