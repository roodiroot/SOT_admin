import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Chip, Box } from "@mui/material";
import {
  DeleteWithConfirmButton,
  EditButton,
  useCreatePath,
} from "react-admin";
import { Link } from "react-router-dom";

interface CardCastomProps {
  id: number;
  img: string;
  name: string;
  description: string;
  resource: string;
  type?: any;
  category?: any;
}

const CardCastom: React.FC<CardCastomProps> = ({
  id,
  img,
  name,
  description,
  resource,
  type,
  category,
}) => {
  const createPath = useCreatePath();
  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
      <Card
        variant='outlined'
        sx={{
          height: "100%",
          border: "none",
          bgcolor: "inherit",
        }}
      >
        <CardMedia
          sx={{ borderRadius: "4px", aspectRatio: "3/4", bgcolor: "gray" }}
          image={import.meta.env.VITE_APP_IMG + "/" + img}
          title='green iguana'
          component={Link}
          to={createPath({
            resource: resource,
            id: id,
            type: "show",
          })}
        />
        <CardContent sx={{ padding: 0, mt: "1rem" }}>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: ".5em", mb: "0.35em" }}>
            {type?.name && <Chip size='small' label={type?.name} />}
            {category?.type?.name && (
              <Chip size='small' label={category?.type?.name} />
            )}
            {category?.name && <Chip size='small' label={category?.name} />}
          </Box>

          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              minHeight: "40px",
            }}
            variant='body2'
            color='text.secondary'
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 0, mt: "0.35em" }}>
          <EditButton size='small' label='Править' />
          <DeleteWithConfirmButton
            size='small'
            sx={{ ml: "auto" }}
            label='Удалить'
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardCastom;
