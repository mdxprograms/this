import m from "mithril";
import AppModel from "../models/App";
import { Nav } from "../components";

const Layout = () => ({
  view: vnode =>
    m(".container", [
      m(Nav(AppModel.pages)),
      m(".container", [m("section.m-4", vnode.children)])
    ])
});

export default Layout;
