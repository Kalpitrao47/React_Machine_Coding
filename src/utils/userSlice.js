import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        nowUsers: null,
    },
    reducers:{
        addUsers:(state,action) =>{
            state.nowUsers = action.payload;
        }
    }
})

export const {addUsers} = userSlice.actions;
export default userSlice.reducer;