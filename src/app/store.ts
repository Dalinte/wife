import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {api} from "../shared/api/api";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: () => getDefaultMiddleware().concat(api.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch