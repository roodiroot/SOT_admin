import { useState } from "react";
import { Typography, Box } from "@mui/material";
import {
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import types from "../components/type";
import category from "../components/category";
import model from "../components/model";
import products from "../components/product";
import SubMenu from "./sub-menu";
import m from "../../package.json";

type MenuName = "menuCatalog" | "menuSales" | "menuCustomers";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        height: "98%",
        display: "flex",
        flexDirection: "column",
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle("menuSales")}
        isOpen={state.menuSales}
        name='Товары'
        icon={<types.icon />}
        dense={dense}
      >
        <MenuItemLink
          to='/type'
          state={{ _scrollToTop: true }}
          primaryText='Типы'
          leftIcon={<types.icon />}
          dense={dense}
          placeholder=''
        />
        <MenuItemLink
          to='/category'
          state={{ _scrollToTop: true }}
          primaryText='Категории'
          leftIcon={<category.icon />}
          dense={dense}
          placeholder=''
        />
        <MenuItemLink
          to='/model'
          state={{ _scrollToTop: true }}
          primaryText='Модели'
          leftIcon={<model.icon />}
          dense={dense}
          placeholder=''
        />
        <MenuItemLink
          to='/product'
          state={{ _scrollToTop: true }}
          primaryText='Товары'
          leftIcon={<products.icon />}
          dense={dense}
          placeholder=''
        />
      </SubMenu>
      <Typography sx={{ mt: "auto", p: "6px 1rem", fontSize: "0.8rem" }}>
        Version {m.version}
      </Typography>
    </Box>
  );
};

export default Menu;
