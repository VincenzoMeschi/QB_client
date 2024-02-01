import "./listItem.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListItem({ index, listIndex, movieId, movies }) {
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState("Loading...");
  const [img, setImg] = useState("Loading...");

  const navigate = useNavigate();

  useEffect(() => {
    const selectedmovie = movies.filter((movie) => {
      return movie._id === movieId;
    });
    setMovie(selectedmovie[0]);
  }, [movieId, movies]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setImg(movie.img);
    }
  }, [movie]);

  const handleVideoClick = () => {
    navigate(`/watch/${movie._id}`);
  };

  return (
    <div className="listItemWrapper">
      <div id={`listItem-${index}-${listIndex}`} className="listItem">
        <h3 className="itemTitleOverlay">{title}</h3>
        <img src={img} onClick={handleVideoClick} alt="" />
      </div>
    </div>
  );
}
