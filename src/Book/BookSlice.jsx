import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 
export const getBooks =createAsyncThunk(
    "book/getBooks",


async(args,thunkApi)=>{
try{
const res=await fetch('http://localhost:3005/books')
const data=await res.json();
return data
}
catch(error){
    console.log(error)
}


})
//part 1

console.log(getBooks.fulfilled)

const bookSlice = createSlice(
{
    name:'book',
    initialState:{
        books:null,
        isloading:false
    }
    ,extraReducers:{
        [getBooks.pending]:(state,action)=>{
            state.isloading=true;
console.log(action)
        },
        [getBooks.fulfilled]:(state,action)=>{
            state.books= action;


            console.log(books)

        },
        [getBooks.rejected]:(state,action)=>{
            state.isloading= false;

            console.log(action)


        }


    }
}
)

export default bookSlice.reducer