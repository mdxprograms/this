import m from "mithril";

const subs = ["webdev", "javascript"];

const Reddit = {
  activeSub: subs[0],
  fetching: false,
  newSubText: "",
  subs: [...subs],
  truncateText: (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }

    return text;
  },
  list: [],
  addSub: () => {
    if (!Reddit.subs.includes(Reddit.newSubText)) {
      Reddit.subs.push(Reddit.newSubText);
    }
  },
  loadList: sub => {
    Reddit.fetching = true;
    return m
      .request({
        method: "GET",
        url: `https://www.reddit.com/r/${sub}.json`
      })
      .then(result => {
        Reddit.list = result.data.children;
        Reddit.activeSub = sub;
        Reddit.fetching = false;
      });
  },
  updateNewSubText: value => {
    Reddit.newSubText = value;
  }
};

export default Reddit;
