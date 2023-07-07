import { configureStore } from "@reduxjs/toolkit";
import books from './BookSlice'
import BookSlice from "./BookSlice";
const store = configureStore({
    reducer:{
        book:BookSlice
    }
})

export default store