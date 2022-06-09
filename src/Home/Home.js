import React from "react";
import TopBar from "./TopBar";
import Movies from "./Movies";
import { Drawer } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import api from "../utils/api";

function Home() {
  const [drawer, setDrawer] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  function toggleDrawer() {
    setDrawer(!drawer);
  }
  const replaceMovies = (newValue) => {
    setMovies(newValue);
  };

  const changePage = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    api
      .get("movies/?sort_by=download_count&limit=50&page="+page)
      .then((res) => {
        setMovies(res.data.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <Box
      minWidth={"100%"}
      minHeight={"100%"}
      style={{ backgroundColor: "black" }}
    >
      <Drawer onClose={() => toggleDrawer()} open={drawer}></Drawer>
      <TopBar drawer={toggleDrawer} replaceMovies={replaceMovies} />
      <Movies page={page} changePage={changePage} movies={movies} />
    </Box>
  );
}

export default Home;
