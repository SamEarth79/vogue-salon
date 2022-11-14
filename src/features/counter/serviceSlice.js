import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	bill: 0,
};

export const serviceSlice = createSlice({
	name: "services",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		addService: (state, action) => {
			let currIndex = state.cart.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			if (currIndex >= 0) {
				state.cart.splice(currIndex, 1);
				state.bill = state.bill - action.payload.price;
			} else {
				state.cart.push(action.payload);
				state.bill = state.bill + action.payload.price;
			}
		},
		removeServices: (state, action) => {
			state.cart = [];
			state.bill = 0;
		},
	},
});

export const serviceActions = serviceSlice.actions;

export default serviceSlice.reducer;
