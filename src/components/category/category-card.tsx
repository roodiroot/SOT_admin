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

interface CategoryCardProps {
  id: number;
  img: string;
  name: string;
  description: string;
  type: {
    name: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  img,
  name,
  description,
  type,
}) => {
  const createPath = useCreatePath();

  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={3} sx={{ height: "100%" }} item>
      <Card variant='outlined'>
        <CardMedia
          sx={{ height: 140 }}
          image={import.meta.env.VITE_APP_IMG + "/" + img}
          title='green iguana'
          component={Link}
          to={createPath({
            resource: "category",
            id: id,
            type: "show",
          })}
        />
        <CardContent>
          <Typography variant='h5' component='div' sx={{ fontSize: "0.8rem" }}>
            {type?.name}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <EditButton label='Править' />
          <DeleteWithConfirmButton sx={{ ml: "auto" }} label='Удалить' />
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CategoryCard;
