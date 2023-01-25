import { useAppSelector } from "../../store/hook";

import { SearchUnsplash } from "../../component/SearchUnsplash";
import "../../css/imgsView.scss";

const UnsplashImgView = () => {
  const imgsData = useAppSelector((state) => state.imgs);

  return (
    <div>
      <SearchUnsplash />

      <div className="imgs-diaplay">
        {imgsData.loading ? (
          <p>loading...</p>
        ) : imgsData.error ? (
          <p>Error: {imgsData.error}</p>
        ) : (
          <div className="img-container">
            {imgsData.imgData.map((img) => (
              <div className="img-info">
                <img src={img.urls.small} alt="no img" className="img-photo" />

                <div className="username">
                  {img.user.first_name} {img.user.last_name}
                </div>
                <div className="likes">Likes: {img.likes}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnsplashImgView;
