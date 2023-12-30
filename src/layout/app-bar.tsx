import { AppBar, TitlePortal } from "react-admin";
import { Box, useMediaQuery, Theme } from "@mui/material";

import Logo from "./logo";

const CustomAppBar = () => {
  const isLargeEnough = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm")
  );
  return (
    <AppBar color='primary'>
      <TitlePortal />
      {isLargeEnough && <Logo />}
      {isLargeEnough && <Box component='span' sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
