import React from "react";
import { createStore } from "redux";
import expect from "expect";


const counter = (state = 0, action) => {

	if (typeof state === "undefined"){
		return 0;
	}

	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}

}

//Tests to handle increments:
expect(
	counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(
	counter(1, {type: "INCREMENT"})
).toEqual(2);

//Tests to handle decrements:
expect(
	counter(2, {type: "DECREMENT"})
).toEqual(1);

expect(
	counter(1, {type: "DECREMENT"})
).toEqual(0);

//Tests to handle unknown actions:
expect(
	counter(1, {type: "SOMETHING_ELSE"})
).toEqual(1);

//Tests to handle initial state:
expect(
	counter(undefined, {})
).toEqual(0);

console.log("Tests passed!");



const store = createStore(counter);

store.dispatch({type: "INCREMENT"});
console.log(store.getState());


export default class App extends React.Component{

	decrease(){
		console.log("Decrease test");
		store.dispatch({type: "DECREMENT"})
		console.log(store.getState());
	}
	increase(){
		console.log("Decrease test");
		store.dispatch({type: "INCREMENT"})
		console.log(store.getState());
	}

	render(){
		return (
			<div>
				<h1>Counter: {store.getState()}</h1>
				<button onClick={this.decrease}>-</button>
				<button onClick={this.increase}>+</button>
			</div>
		);
	}
}