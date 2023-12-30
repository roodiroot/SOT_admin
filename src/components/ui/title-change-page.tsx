import { Typography } from "@mui/material";

const TitleChangePage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      sx={{ fontWeight: "bold", mb: ".5rem", fontSize: "1.5rem" }}
      component={"h3"}
    >
      {title}
    </Typography>
  );
};

export default TitleChangePage;
