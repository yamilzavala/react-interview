import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        //Fetching users
        //'users/fetch/pending'            
        builder.addCase(fetchUsers.pending, (state, action) => {          
                state.isLoading = true            
        });
        //'users/fetch/fulfilled'
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload   
        });
        //'users/fetch/rejected'
        builder.addCase(fetchUsers.rejected, (state, action) => {           
                state.isLoading = false;
                state.error = action.error;           
        });
        
        //Adding users
        //users/add/pending
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        })
        //users/add/fulfilled
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload); 
        })
        //users/add/rejected
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })

        //Delete
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
       
    }
})

export const userReducers = usersSlice.reducer;
