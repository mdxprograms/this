import m from "mithril";
import { Button, Title } from "../components";
import RedditModel from "../models/Reddit";

const RedditFeeds = ({ AppModel }) => ({
  oncreate() {
    AppModel.setPageTitle();
  },
  oninit() {
    if (RedditModel.list.length === 0) {
      RedditModel.loadList(RedditModel.subs[0]);
    }
  },
  view: () =>
    m("main", [
      Title(3, "Reddit"),
      m("input.p-2.bg-dark.text-light.mr-2.border-0.col-sm-4", {
        oninput: m.withAttr("value", RedditModel.updateNewSubText),
        value: RedditModel.newSubText
      }),
      Button("light", "Add Sub", () => RedditModel.addSub()),
      m("br"),
      m("br"),
      RedditModel.subs.map(sub =>
        Button("light", sub, () => RedditModel.loadList(sub))
      ),
      m("hr"),
      m(
        ".cards.d-flex.flex-wrap.align-items-stretch.justify-content-around",
        RedditModel.list.map(post =>
          m(
            ".card.bg-dark.mb-3.mr-1.p-1.col-sm-12.col-md-4.col-lg-3",
            { style: "max-width: 20rem" },
            m(".card-header.text-light", RedditModel.activeSub),
            m(".card-body.text-dark.bg-light", [
              m(
                "a.card-title.text-info",
                { href: post.data.url, target: "_blank" },
                m("h4", m("strong", RedditModel.truncateText(post.data.title, 50)))
              ),
              m("p.card-text", RedditModel.truncateText(post.data.selftext, 150))
            ])
          )
        )
      )
    ])
});

export default RedditFeeds;
