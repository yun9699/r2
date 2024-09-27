import {createSlice} from "@reduxjs/toolkit";
import {IMember} from "../types/member.ts";
import {Cookies} from 'react-cookie'

const cookies = new Cookies();

const initialState:IMember = {
    email:''
}

const signinSlice = createSlice({
    name: "signin",
    initialState: initialState,
    reducers: {
        signin: (state, action) => {
            console.log(state,action)
            const email = action.payload.username

            const result = {email:email}
            cookies.set("member",JSON.stringify(result), {path : "/", maxAge: 3600 })

            return result
        },
        signout: (state, action) => {
            console.log(state,action)
            return {...initialState}
        }
    }
})

export const {signin, signout} = signinSlice.actions

export default signinSlice.reducer;