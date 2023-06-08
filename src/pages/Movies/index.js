import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { movies } from "../../ListOfMovies";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Movies() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  let listMovies = ``

  useEffect(() => {
    listMovies =`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`;
    fetch(listMovies)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  }, [page]);


  const handleChangePage = (number) => {
    setPage(number);
    console.log('Page: ', number);
  }

  return (
    <div className="movies" id="movies">
      <h2 className="heading">Opening This Week</h2>

      <div className="movies-container">
        {data.map((item, index) => (
          <div key={index} className="box">
            <div className="box-img">
              <Link to={`/Detail/${index}/${item.slug}`}>
                <img
                  src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                  alt=""
                />
              </Link>
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="year">Year: {item.year}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ul className="numberPage">
      <li onClick={() => handleChangePage((page == 1) ? 1 : page - 1)} className="number"><a><b>Prev</b></a></li>
        <li onClick={() => handleChangePage(1)} className="number"><a>1</a></li>
        <li onClick={() => handleChangePage(2)} className="number"><a>2</a></li>
        <li onClick={() => handleChangePage(3)} className="number"><a>3</a></li>
        <li onClick={() => handleChangePage(4)} className="number"><a>4</a></li>
        <li onClick={() => handleChangePage(5)} className="number"><a>5</a></li>
        <li onClick={() => handleChangePage(page + 1)} className="number"><a><b>Next</b></a></li>
      </ul>

    </div>
  );
}
