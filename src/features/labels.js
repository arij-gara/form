import {createSlice}  from "@reduxjs/toolkit"

 export const  userSlice = createSlice( {
    name: "user",
    initialState: { value : {placeholder:"change the placeholder", label :"change the label"}},

    reducers: {
        modify: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {modify} = userSlice.actions;

export default userSlice.reducer;