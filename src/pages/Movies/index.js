import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { movies } from "../../ListOfMovies";

export default function Movies() {
  
  const [data, setData] = useState([]);
  const listMovies = 'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1'

  useEffect(() => {
    fetch(listMovies)
    .then((response) => response.json())
    .then((data) => setData(data.items))
  },[])

  return (
    <div className="movies" id="movies">
      <h2 className="heading">Opening This Week</h2>
      
      <div className="movies-container">
        {data.map((item, index) => (

          <div className="box">
            <div className="box-img">
              <Link to={`/Detail/${index}/${item.slug}`}>
                <img src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`} alt="" />
              </Link>
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="year">Year: {item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
