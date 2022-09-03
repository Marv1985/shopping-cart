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
    function (e, t, a) {
      e.exports = a.p + "static/media/gow.fabf3464.webp";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/ps5.bea84c3b.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/xbox.5ebf16bf.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/gow-ragnarok.73054b78.webp";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/gow4.7885aec7.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/last1.a5ea5400.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/last2.72ea2c57.jpeg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/unchartered4.88d71d25.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/unchartered5.4622e8e9.jpeg";
    },
    function (e, t, a) {
      e.exports = a(33);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    ,
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        l = a.n(n),
        c = a(6),
        r = a.n(c),
        m = a(4),
        i = a(0);
      a(25), a(27);
      var u = function () {
          return l.a.createElement(
            "div",
            { className: "logo" },
            l.a.createElement("h1", null, "GAME")
          );
        },
        s = a(7),
        o = a.n(s);
      var E = function () {
        return l.a.createElement(
          "div",
          { className: "main" },
          l.a.createElement("img", { src: o.a, alt: "god-of-war" })
        );
      };
      var d = function () {
          return l.a.createElement(
            "div",
            { className: "wrapper" },
            l.a.createElement(u, null),
            l.a.createElement(E, null)
          );
        },
        p = (a(29), a(8)),
        v = a.n(p),
        b = a(9),
        f = a.n(b),
        g = a(10),
        N = a.n(g),
        h = a(11),
        j = a.n(h),
        w = a(12),
        x = a.n(w),
        k = a(13),
        y = a.n(k),
        S = a(14),
        C = a.n(S),
        O = a(15),
        A = a.n(O),
        B = a(3);
      var J = function () {
        var e = Object(n.useState)([]),
          t = Object(B.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(n.useState)(0),
          m = Object(B.a)(r, 2),
          i = m[0],
          u = m[1];
        return l.a.createElement(
          "div",
          { className: "buttons" },
          l.a.createElement(
            "form",
            {
              onSubmit: function (e) {
                e.preventDefault();
                var t = a;
                t.push(i), c(t), u(0), console.log(a);
              },
            },
            "QTY:",
            l.a.createElement("input", {
              value: i,
              onChange: function (e) {
                u(Number(e.target.value));
              },
              type: "number",
              min: "0",
              max: "10",
              required: !0,
            }),
            l.a.createElement(
              "button",
              {
                type: "button",
                onClick: function () {
                  i < 10 &&
                    u(function (e) {
                      return e + 1;
                    });
                },
                className: "adjust",
              },
              "+"
            ),
            l.a.createElement(
              "button",
              {
                type: "button",
                onClick: function () {
                  i > 0 &&
                    u(function (e) {
                      return e - 1;
                    });
                },
                className: "adjust",
              },
              "-"
            ),
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "button",
                { type: "submit", className: "submit" },
                "Add"
              )
            )
          )
        );
      };
      var M = function () {
        return l.a.createElement(
          "div",
          { className: "cards" },
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: j.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: v.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa3500"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: f.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa3500"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: N.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: x.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: y.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: C.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          ),
          l.a.createElement(
            "div",
            { className: "label" },
            l.a.createElement("img", { src: A.a, alt: "pic" }),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("div", null, "\xa350"),
              l.a.createElement(J, null)
            )
          )
        );
      };
      var Q = function () {
        return l.a.createElement("div", null, l.a.createElement(M, null));
      };
      var T = function () {
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
      a(31);
      var q = function () {
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
        D = function () {
          return l.a.createElement(
            m.a,
            null,
            l.a.createElement(T, null),
            l.a.createElement(
              i.c,
              null,
              l.a.createElement(i.a, {
                path: "/",
                element: l.a.createElement(d, null),
              }),
              l.a.createElement(i.a, {
                path: "/shop",
                element: l.a.createElement(Q, null),
              }),
              l.a.createElement(i.a, {
                path: "/basket",
                element: l.a.createElement(q, null),
              })
            )
          );
        };
      r.a
        .createRoot(document.getElementById("root"))
        .render(
          l.a.createElement(l.a.StrictMode, null, l.a.createElement(D, null))
        );
    },
  ],
  [[16, 2, 1]],
]);
//# sourceMappingURL=main.e6926b1a.chunk.js.map
