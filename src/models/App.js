import m from "mithril";

const App = {
  title: "Josh Waller",
  pages: [
    {
      title: "Home",
      route: "#!/"
    },
    {
      title: "Reddit",
      route: "#!/reddit"
    }
  ],
  setPageTitle: (title = "") => {
    if (title.length > 0) {
      document.title = `Josh Waller | ${title}`;
    } else {
      document.title = App.title;
    }
  }
};

export default App;
