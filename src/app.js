import m from "mithril";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reddit from "./pages/Reddit";

const root = document.getElementById("app");
document.title = "Josh Waller";

m.route(root, "/", {
  "/": {
    render: () => m(Layout, m(Home))
  },
  "/reddit": {
    render: () => m(Layout, m(Reddit))
  }
});
