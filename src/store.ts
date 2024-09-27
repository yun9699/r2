import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice.ts";
import signinSlice from "./slices/signinSlice.ts";

const projectStore = configureStore({
    reducer: {
        count: countSlice,
        signin: signinSlice,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof projectStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof projectStore.dispatch

export default projectStore