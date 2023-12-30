import { useState } from "react";
import Box from "@mui/material/Box";

const Slider: React.FC<{ imgs: string[] }> = ({ imgs }) => {
  const [mainPHoto, setMainPhoto] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: ".45em",
      }}
    >
      {imgs.map((i: string, index: number) => (
        <Box
          content='img'
          onClick={() => setMainPhoto(index)}
          key={i}
          src={`${import.meta.env.VITE_APP_IMG}/${i}`}
          title='green iguana'
          component={"img"}
          sx={{
            borderRadius: "4px",
            maxWidth: index === mainPHoto ? 150 : 50,
            objectFit: "cover",
            aspectRatio: "2/3",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
};

export default Slider;
