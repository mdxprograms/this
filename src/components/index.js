import m from "mithril";

//- Title :: number -> string -> element
export const Title = (size, value) => m(`h${size}`, value);

//- Button :: string -> string -> function -> element
export const Button = (type, value, cb) =>
  m("button", { class: `btn btn-${type}`, onclick: cb }, value);

export const Nav = pages => ({
  view: () =>
    m("nav.navbar.navbar-expand-lg.navbar-light.bg-light", [
      m("a.navbar-brand", { href: pages[0].route }, pages[0].title),
      m(
        "button.navbar-toggler",
        {
          "data-toggle": "collapse",
          "data-target": "#navbarColor03",
          "aria-controls": "navbarColor03",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        },
        m("span.navbar-toggler-icon")
      ),
      m(".collapse.navbar-collapse#navbarColor03", [
        m(
          "ul.navbar-nav mr-auto",
          pages.map(page =>
            m("li.nav-item", [
              m("a.nav-link", { href: page.route }, [page.title])
            ])
          )
        )
      ])
    ])
});
