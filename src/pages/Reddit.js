import m from "mithril";
import { Button, Title } from "../components";
import model from "../models/Reddit";

const RedditFeeds = {
  oninit: model.loadList(model.subs[0]),
  view: () =>
    m("main", [
      Title(3, "Reddit"),
      model.subs.map(sub => Button("info", sub, () => model.loadList(sub))),
      m("hr"),
      m(
        ".cards.d-flex.flex-wrap.align-items-stretch.justify-content-around",
        model.list.map(post =>
          m(
            ".card.bg-dark.mb-3.p-3.col-md-4",
            { style: "max-width: 20rem" },
            m(".card-header.text-light", model.activeSub),
            m(".card-body.text-light.bg-dark", [
              m(
                "a.card-title.text-info",
                { href: post.data.url, target: "_blank" },
                m("h4", m("strong", post.data.title))
              ),
              m("p.card-text", model.truncateText(post.data.selftext))
            ])
          )
        )
      )
    ])
};

export default RedditFeeds;
