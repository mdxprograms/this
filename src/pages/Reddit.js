import m from "mithril";
import { Button, Title } from "../components";
import RedditModel from "../models/Reddit";

const RedditFeeds = ({ AppModel }) => ({
  oncreate: () => AppModel.setPageTitle(),
  onupdate: () => RedditModel.loadList(RedditModel.subs[0]),
  view: () =>
    m("main", [
      Title(3, "Reddit"),
      RedditModel.subs.map(sub =>
        Button("info", sub, () => RedditModel.loadList(sub))
      ),
      m("hr"),
      m(
        ".cards.d-flex.flex-wrap.align-items-stretch.justify-content-around",
        RedditModel.list.map(post =>
          m(
            ".card.bg-dark.mb-3.p-3.col-md-4",
            { style: "max-width: 20rem" },
            m(".card-header.text-light", RedditModel.activeSub),
            m(".card-body.text-light.bg-dark", [
              m(
                "a.card-title.text-info",
                { href: post.data.url, target: "_blank" },
                m("h4", m("strong", post.data.title))
              ),
              m("p.card-text", RedditModel.truncateText(post.data.selftext))
            ])
          )
        )
      )
    ])
});

export default RedditFeeds;
