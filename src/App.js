import React from "react";
import { createStore } from "redux";
import expect from "expect";


const counterReducer = (state = 0, action) => {

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
	counterReducer(0, {type: "INCREMENT"})
).toEqual(1);

expect(
	counterReducer(1, {type: "INCREMENT"})
).toEqual(2);

//Tests to handle decrements:
expect(
	counterReducer(2, {type: "DECREMENT"})
).toEqual(1);

expect(
	counterReducer(1, {type: "DECREMENT"})
).toEqual(0);

//Tests to handle unknown actions:
expect(
	counterReducer(1, {type: "SOMETHING_ELSE"})
).toEqual(1);

//Tests to handle initial state:
expect(
	counterReducer(undefined, {})
).toEqual(0);

console.log("Tests passed!");



const store = createStore(counterReducer);


export default class App extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			theCounter: store.getState()
		}

		store.subscribe(() => {
			this.setState({theCounter: store.getState()})
		});
	}

	decrease(){
		store.dispatch({type: "DECREMENT"})
	}
	increase(){
		store.dispatch({type: "INCREMENT"})
	}

	render(){
		return (
			<div>
				<h1>Counter: {this.state.theCounter}</h1>
				<button onClick={this.decrease.bind(this)}>-</button>
				<button onClick={this.increase.bind(this)}>+</button>
			</div>
		);
	}
}