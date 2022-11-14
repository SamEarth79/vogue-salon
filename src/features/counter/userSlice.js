import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		login: (state, action) => {
			console.log("Inside reducer");
			console.log(action.payload);
			state.user = action.payload;
			console.log(state.user);
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const authActions = userSlice.actions;

export default userSlice.reducer;
