import React from "react";
import { createStore } from "redux";
import expect from "expect";


const counter = (state, action) => {

	if (action.type === "INCREMENT"){
		return state + 1;
	}
	if (action.type === "DECREMENT"){
		return state - 1;
	}

}

expect(
	counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(
	counter(1, {type: "INCREMENT"})
).toEqual(2);

expect(
	counter(2, {type: "DECREMENT"})
).toEqual(1);

expect(
	counter(1, {type: "DECREMENT"})
).toEqual(0);

console.log("Tests passed!");



const store = createStore(counter, 0);

export default class App extends React.Component{

	render(){
		return (
			<div>
				<h1>Counter: </h1>

			</div>
		);
	}
}