import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";

export default function Cards({ title, description, icon }) {
  return (
    <Card
      className="py-4 cards effect"
      sx={{ maxWidth: 345 }}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.20) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <div className="d-flex justify-content-center">{icon}</div>
      <CardContent>
        <Typography
          className="text-center fw-bold fs-5"
          gutterBottom
          component="div"
        >
          {title}
        </Typography>
        <Typography
          className="text-center mt-3"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
