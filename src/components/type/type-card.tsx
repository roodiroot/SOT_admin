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

interface TypeCardProps {
  id: number;
  img: string;
  name: string;
  description: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ id, img, name, description }) => {
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
            resource: "type",
            id: id,
            type: "show",
          })}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
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
export default TypeCard;
