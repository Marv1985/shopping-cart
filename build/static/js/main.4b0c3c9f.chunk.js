(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/gow.fabf3464.webp";
    },
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/ps5.bea84c3b.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/xbox.5ebf16bf.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/gow-ragnarok.73054b78.webp";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/gow4.7885aec7.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/last1.a5ea5400.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/last2.72ea2c57.jpeg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/unchartered4.88d71d25.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/unchartered5.4622e8e9.jpeg";
    },
    ,
    function (e, a, t) {
      e.exports = t(36);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    ,
    function (e, a, t) {},
    ,
    function (e, a, t) {},
    ,
    function (e, a, t) {},
    ,
    function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(1),
        l = t.n(n),
        c = t(8),
        r = t.n(c),
        m = t(4),
        i = t(0);
      t(28), t(30);
      var s = function () {
          return l.a.createElement(
            "div",
            { className: "logo" },
            l.a.createElement("h1", null, "GAME")
          );
        },
        u = t(9),
        o = t.n(u);
      var E = function () {
        return l.a.createElement(
          "div",
          { className: "main" },
          l.a.createElement("img", { src: o.a, alt: "god-of-war" })
        );
      };
      var p = function () {
          return l.a.createElement(
            "div",
            { className: "wrapper" },
            l.a.createElement(s, null),
            l.a.createElement(E, null)
          );
        },
        d = t(5),
        b = t(10),
        v = t(3),
        f = (t(32), t(11)),
        g = t.n(f),
        h = t(12),
        N = t.n(h),
        j = t(13),
        w = t.n(j),
        x = t(14),
        k = t.n(x),
        O = t(15),
        S = t.n(O),
        C = t(16),
        y = t.n(C),
        B = t(17),
        J = t.n(B),
        M = t(18),
        Q = t.n(M);
      var T = function (e) {
        var a = e.handleChange;
        return l.a.createElement(
          "div",
          { className: "buttons" },
          l.a.createElement(
            "form",
            { action: "" },
            "QTY:",
            l.a.createElement("input", {
              onChange: a,
              type: "text",
              pattern: "^\\d{1,2}$",
            }),
            l.a.createElement("button", { className: "adjust" }, "+"),
            l.a.createElement("button", { className: "adjust" }, "-"),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("button", { className: "submit" }, "Submit")
            )
          )
        );
      };
      var A = function () {
          return l.a.createElement(
            "div",
            { className: "cards" },
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: k.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: g.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: N.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: w.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: S.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: y.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: J.a, alt: "pic" }),
              l.a.createElement(T, null)
            ),
            l.a.createElement(
              "div",
              { className: "label" },
              l.a.createElement("img", { src: Q.a, alt: "pic" }),
              l.a.createElement(T, null)
            )
          );
        },
        G = t(19),
        H = t.n(G);
      var I = function () {
        var e = Object(n.useState)([]),
          a = Object(v.a)(e, 2),
          t = a[0],
          c = a[1],
          r = Object(n.useState)({ input: "", id: H()() }),
          m = Object(v.a)(r, 2),
          i = m[0],
          s = m[1];
        return l.a.createElement(
          "div",
          null,
          l.a.createElement(A, {
            handleChange: function (e) {
              var a;
              s(
                Object(b.a)(
                  {},
                  i,
                  ((a = {}),
                  Object(d.a)(a, e.target.id, e.target.value),
                  Object(d.a)(a, "id", i.id),
                  a)
                )
              );
              var n = t;
              n.push(i), c(n);
            },
          })
        );
      };
      var L = function () {
        return l.a.createElement(
          "div",
          { className: "secondLogo" },
          l.a.createElement(
            "div",
            null,
            l.a.createElement(m.b, { to: "/" }, "Home")
          ),
          l.a.createElement(
            "div",
            null,
            l.a.createElement(m.b, { to: "/shop" }, "Shop")
          ),
          l.a.createElement(
            "div",
            null,
            l.a.createElement(m.b, { to: "/basket" }, "Basket")
          )
        );
      };
      t(34);
      var R = function () {
          return l.a.createElement(
            "div",
            { className: "container" },
            l.a.createElement(
              "div",
              { className: "basket" },
              l.a.createElement("h1", null, "Total - \xa3"),
              l.a.createElement("h1", null, "Quantity - "),
              l.a.createElement("button", null, "Checkout")
            )
          );
        },
        Y = function () {
          return l.a.createElement(
            m.a,
            null,
            l.a.createElement(L, null),
            l.a.createElement(
              i.c,
              null,
              l.a.createElement(i.a, {
                path: "/",
                element: l.a.createElement(p, null),
              }),
              l.a.createElement(i.a, {
                path: "/shop",
                element: l.a.createElement(I, null),
              }),
              l.a.createElement(i.a, {
                path: "/basket",
                element: l.a.createElement(R, null),
              })
            )
          );
        };
      r.a
        .createRoot(document.getElementById("root"))
        .render(
          l.a.createElement(l.a.StrictMode, null, l.a.createElement(Y, null))
        );
    },
  ],
  [[20, 2, 1]],
]);
//# sourceMappingURL=main.4b0c3c9f.chunk.js.map
