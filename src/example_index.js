import { combineReducers, createStore } from "redux";

const reducer = function(state, action){
	if (action.type === "INC"){
		return state + action.payload;
	}
	if (action.type === "DEC"){
		return state - action.payload;
	}
	return state;
}

const userReducer = (state={}, actions) => {

}

const tweetsReducer = (state={}, actions) => {

}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})



const store = createStore(reducers, {
	user: {
		name: "Will",
		age: 35
	},
	tweets: []
});


store.subscribe(() => {
	console.log("The store changed. Store current state: ", store.getState());
})


store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 7});
store.dispatch({type: "INC", payload: 23});
store.dispatch({type: "DEC", payload: 1750});
store.dispatch({type: "INC", payload: 50});

console.log("Test 1337");