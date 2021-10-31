import "./MovieDetails.css";
import React from "react";
import { useLocation, useParams } from "react-router";

export default function MovieDetails(props) {
  const params = useParams();
  const Location = useLocation();
  console.log(params);
  console.log(Location);
  return <div>Movie details</div>;
}
