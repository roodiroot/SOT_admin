import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import {
  DeleteWithConfirmButton,
  EditButton,
  useCreatePath,
} from "react-admin";
import { Link } from "react-router-dom";

interface ModelCardProps {
  id: number;
  img: string;
  name: string;
  description: string;
  category: {
    name: string;
    type: {
      name: string;
    };
  };
}

const ModelCard: React.FC<ModelCardProps> = ({
  id,
  img,
  name,
  description,
  category,
}) => {
  const createPath = useCreatePath();

  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
      <Card variant='outlined' sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={import.meta.env.VITE_APP_IMG + "/" + img}
          title='green iguana'
          component={Link}
          to={createPath({
            resource: "model",
            id: id,
            type: "show",
          })}
        />
        <CardContent>
          <Typography variant='h5' component='div' sx={{ fontSize: "0.8rem" }}>
            {category?.type?.name}
          </Typography>
          <Typography variant='h5' component='div' sx={{ fontSize: "0.8rem" }}>
            {category?.name}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: "auto" }}>
          <EditButton label='Править' />
          <DeleteWithConfirmButton sx={{ ml: "auto" }} label='Удалить' />
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ModelCard;
