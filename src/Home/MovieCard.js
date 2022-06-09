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
import CardMedia from "@mui/material/CardMedia";
import { ButtonBase } from "@mui/material";

function MovieCard(props) {
  return (
    <>
      <ButtonBase centerRipple style={{maxWidth: '100%'}}>
        <CardMedia component="img" image={props.image} alt={props.title} />
      </ButtonBase>
      <Typography
        style={{ textAlign: "center", fontSize:'100%' }}
        gutterBottom
        color={"white"}
        component="div"
        aria-atomic
      >
        {props.movie.title} ({props.movie.year})
      </Typography>
    </>
  );
}

export default MovieCard;
