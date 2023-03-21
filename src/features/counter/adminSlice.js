import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointments: [],
    artists: [],
    history: [],
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addAppointment: (state, action) => {
            state.appointments.push(action.payload);
        },
        clearAppointments: (state) => {
            state.appointments = [];
        },
        FinishAppointments: (state, action) => {
            let index = action.payload;
            state.appointments[index].isDone =
                !state.appointments[index].isDone;
        },
        removeAppointment: (state, action) => {
            let index = action.payload;
            console.log("Index: " + index);
            state.appointments.splice(index, 1);
        },
        deleteAppointment: (state) => {
            state.appointments = [];
        },
        setAppointments: (state, action) => {
            state.appointments = [];
            action.payload.forEach((element) => {
                state.appointments.push(element);
            });
        },
        setArtist: (state, action) => {
            console.log(action.payload);
            let { index, artistName } = action.payload;
            state.appointments[index].artist = artistName;
            console.log(state.appointments[index].artist);
        },
    },
});

export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
