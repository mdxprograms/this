import m from "mithril";

const subs = ["webdev", "javascript", "linux_gaming"];

const Reddit = {
  activeSub: subs[0],
  subs,
  truncateText: text => {
    if (text.length > 250) {
      return text.substring(0, 250) + "...";
    }

    return text;
  },
  list: [],
  loadList: sub => {
    return m
      .request({
        method: "GET",
        url: `https://www.reddit.com/r/${sub}.json`
      })
      .then(result => {
        Reddit.list = result.data.children;
        Reddit.activeSub = sub;
      });
  }
};

export default Reddit;
