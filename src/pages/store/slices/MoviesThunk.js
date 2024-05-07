import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',async()=>{
    try{
      const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e745abc45c5a8b28694e3e3347259f04`)
     // console.log(res.data.results)
      return res.data.results
      
    }catch(error){
      console.log(error)
    }
    
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: '',
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchMovies.pending, (state) => {
    //     state.status = 'loading';
    //   })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
       
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;