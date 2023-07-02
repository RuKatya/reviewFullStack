import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CardUI = ({ title }) => {
  return (
    <Link to={`/${title}`}>
      <Card sx={{ marginTop: 3 }}>
        <CardContent sx={{ backgroundColor: "rgba(0, 110, 255, 0.333)" }} >
          <Typography>{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardUI;