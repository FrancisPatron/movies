import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import MovieCard from "./MovieCard";

function Movies(props) {
  return (
    <>
      <Grid style={{ backgroundColor: "black" }} container spacing={2}>
        {props.movies
          ? props.movies.map((movie) => (
              <Grid item lg={2}>
                <MovieCard
                  component="img"
                  image={movie.large_cover_image}
                  movie={movie}
                />
              </Grid>
            ))
          : null}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          size="large"
          style={{
            display: "inline-block",
            paddingTop: ".5%",
            paddingBottom: ".5%",
            backgroundColor: "#b3b3b3",
            borderRadius: "10px",
          }}
          count={5}
          onChange={props.changePage}
        />
      </div>
    </>
  );
}

export default Movies;
