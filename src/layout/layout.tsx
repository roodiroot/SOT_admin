import { Layout, LayoutProps } from "react-admin";
import AppBar from "./app-bar";
import Menu from "./menu";

export default (props: LayoutProps) => (
  <Layout {...props} appBar={AppBar} menu={Menu} />
);
