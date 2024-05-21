import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching books
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkApi) => {
    try {
      const res = await fetch('http://localhost:3005/books');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Part 1: Log the fulfilled action type for debugging purposes
console.log(getBooks.fulfilled);

// Define the slice
const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
        console.log(action);
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        console.log(state.books);
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  }
});

export default bookSlice.reducer;
