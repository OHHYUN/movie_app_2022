import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          <h1>{detail.data.movie.title}</h1>
          <img src={detail.data.movie.large_cover_image} />
          <p>{detail.data.movie.description_full}</p>
          {detail.data.movie.id}
        </div>
      )}
    </div>
  );
}

export default Detail;
