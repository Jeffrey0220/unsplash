import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BASE_RUL, API_KEY } from "../../env";
import axios from "axios";

type Img = {
  urls: { small: string };
  user: { first_name: string; last_name: string };

  likes: number;
};

type InitialState = {
  loading: boolean;
  imgData: Img[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  imgData: [],
  error: "",
};

interface FetchDataParams {
  keyword: string;
}

export const fetchImageData = createAsyncThunk<any, FetchDataParams>(
  "unsplashimages/fetchImageData",
  (params) => {
    return axios
      .get(
        `${BASE_RUL}/search/photos?per_page=21&query=${params.keyword}&client_id=${API_KEY}`
      )
      .then((responses) => {
        console.log(responses.data);
        return responses.data.results;
      });
  }
);

const unsplashImgsSlice = createSlice({
  name: "unsplashimgs",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchImageData.pending, (state) => {
      state.loading = true;
    });
    build.addCase(
      fetchImageData.fulfilled,
      (state, action: PayloadAction<Img[]>) => {
        state.loading = false;
        state.imgData = action.payload;
        state.error = "";
      }
    );
    build.addCase(fetchImageData.rejected, (state, action) => {
      state.loading = false;
      state.imgData = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default unsplashImgsSlice.reducer;
