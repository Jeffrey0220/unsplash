import React, { useState } from "react";
import { useAppDispatch } from "../store/hook";
import { fetchImageData } from "../features/unsplashImgs/unsplashImgsSlice";
import "../css/imgsView.scss";

export const SearchUnsplash = () => {
  const dispatch = useAppDispatch();
  const [keyword, SetKeyword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchImageData({ keyword: keyword }));
  };

  return (
    <div>
      <h2>Search Images</h2>
      <p>{process.env.REACT_APP_BASEURL}</p>
      <form className="input" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="input"
          value={keyword}
          onChange={(e) => SetKeyword(e.target.value)}
          placeholder="Enter a task"
          className="input_box"
          required
        />
        <button className="input_submit">Search</button>
      </form>
    </div>
  );
};
