import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ActionCardContainer } from "./ActionCard.style";

interface ActionCardProps {
  title: string;
  description: string;
  image: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <ActionCardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ActionCardContainer>
  );
};
