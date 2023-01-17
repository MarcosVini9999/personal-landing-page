import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MediaCardContainer } from "./MediaCard.style";

interface MediaCardProps {
  title: string;
  description: string;
  image: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <MediaCardContainer>
      <CardMedia component="img" height="140" image={image} alt="skill" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MediaCardContainer>
  );
};
