import m from "mithril";
import AppModel from "./models/App";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reddit from "./pages/Reddit";

const root = document.getElementById("app");

m.route(root, "/", {
  "/": {
    render: () => m(Layout, m(Home({ AppModel })))
  },
  "/reddit": {
    render: () => m(Layout, m(Reddit({ AppModel })))
  }
});
