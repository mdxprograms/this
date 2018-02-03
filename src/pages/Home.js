import m from "mithril";

const Home = ({ AppModel }) => ({
  oninit: () => AppModel.setPageTitle(),
  view: vnode => m("h1.title", AppModel.title)
});

export default Home;
