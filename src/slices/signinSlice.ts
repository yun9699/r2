import {createSlice} from "@reduxjs/toolkit";


const signinSlice = createSlice({
    name: "signin",
    initialState: {},
    reducers: {
        signin: (state, action) => {
            console.log(state,action);
        },
        signout: (state, action) => {
            console.log(state,action);
        }
    }
})

export const {signin, signout} = signinSlice.actions
export default signinSlice.reducer;