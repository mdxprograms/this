import m from "mithril";
import AppModel from "../models/App";
import { Nav } from "../components";

const Layout = () => ({
  view: vnode =>
    m("", [
      m(Nav(AppModel.pages)),
      m(".container-fluid", [m("section.m-4", vnode.children)])
    ])
});

export default Layout;
