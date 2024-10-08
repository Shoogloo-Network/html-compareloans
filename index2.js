!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat
        ? function (e) {
            return t.flat.call(e);
          }
        : function (e) {
            return t.concat.apply([], e);
          },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      x = function (e) {
        return null != e && e === e.window;
      },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
      var r,
        i,
        o = (n = n || E).createElement("script");
      if (((o.text = e), t))
        for (r in c)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.6.0",
      S = function (e, t) {
        return new S.fn.init(e, t);
      };
    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return (
        !m(e) &&
        !x(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (S.fn = S.prototype =
      {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = S.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return S.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            S.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
      }),
      (S.extend = S.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || S.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = S.extend(l, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
      S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            (!(t = r(e)) ||
              ("function" ==
                typeof (n = v.call(t, "constructor") && t.constructor) &&
                a.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          b(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (p(e)) {
            for (n = e.length; r < n; r++)
              if (!1 === t.call(e[r], r, e[r])) break;
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (p(Object(e))
                ? S.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (p(e))
            for (r = e.length; o < r; o++)
              null != (i = t(e[o], o, n)) && a.push(i);
          else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return g(a);
        },
        guid: 1,
        support: y,
      }),
      "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
      S.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var d = (function (n) {
      var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function (e, t) {
          return e === t && (l = !0), 0;
        },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          M +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W =
          "\\[" +
          M +
          "*(" +
          I +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          M +
          "*\\]",
        F =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          W +
          ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          T();
        },
        ae = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        H.apply((t = O.call(p.childNodes)), p.childNodes),
          t[p.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length
            ? function (e, t) {
                L.apply(e, O.call(t));
              }
            : function (e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              },
        };
      }
      function se(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (!r && (T(e), (e = e || C), E)) {
          if (11 !== p && (u = Z.exec(t)))
            if ((i = u[1])) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                return n.push(a), n;
            } else {
              if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                d.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            d.qsa &&
            !N[t + " "] &&
            (!v || !v.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
              ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
                ((s = e.getAttribute("id"))
                  ? (s = s.replace(re, ie))
                  : e.setAttribute("id", (s = S))),
                (o = (l = h(t)).length);
              while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
              c = l.join(",");
            }
            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              N(t, !0);
            } finally {
              s === S && e.removeAttribute("id");
            }
          }
        }
        return g(t.replace($, "$1"), e, n, r);
      }
      function ue() {
        var r = [];
        return function e(t, n) {
          return (
            r.push(t + " ") > b.cacheLength && delete e[r.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function le(e) {
        return (e[S] = !0), e;
      }
      function ce(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function ve(a) {
        return le(function (o) {
          return (
            (o = +o),
            le(function (e, t) {
              var n,
                r = a([], e.length, o),
                i = r.length;
              while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ye(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
      (i = se.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
      (T = se.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : p;
          return (
            r != C &&
              9 === r.nodeType &&
              r.documentElement &&
              ((a = (C = r).documentElement),
              (E = !i(C)),
              p != C &&
                (n = C.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", oe, !1)
                  : n.attachEvent && n.attachEvent("onunload", oe)),
              (d.scope = ce(function (e) {
                return (
                  a.appendChild(e).appendChild(C.createElement("div")),
                  "undefined" != typeof e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (d.attributes = ce(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = ce(function (e) {
                return (
                  e.appendChild(C.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName = K.test(C.getElementsByClassName)),
              (d.getById = ce(function (e) {
                return (
                  (a.appendChild(e).id = S),
                  !C.getElementsByName || !C.getElementsByName(S).length
                );
              })),
              d.getById
                ? ((b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                      var t =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (b.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (b.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (s = []),
              (v = []),
              (d.qsa = K.test(C.querySelectorAll)) &&
                (ce(function (e) {
                  var t;
                  (a.appendChild(e).innerHTML =
                    "<a id='" +
                    S +
                    "'></a><select id='" +
                    S +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      v.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      v.push("\\[" + M + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || v.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length ||
                      v.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    v.push("[\\r\\n\\f]");
                }),
                ce(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = C.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      v.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      v.push(":enabled", ":disabled"),
                    (a.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:");
                })),
              (d.matchesSelector = K.test(
                (c =
                  a.matches ||
                  a.webkitMatchesSelector ||
                  a.mozMatchesSelector ||
                  a.oMatchesSelector ||
                  a.msMatchesSelector)
              )) &&
                ce(function (e) {
                  (d.disconnectedMatch = c.call(e, "*")),
                    c.call(e, "[s!='']:x"),
                    s.push("!=", F);
                }),
              (v = v.length && new RegExp(v.join("|"))),
              (s = s.length && new RegExp(s.join("|"))),
              (t = K.test(a.compareDocumentPosition)),
              (y =
                t || K.test(a.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (j = t
                ? function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == C || (e.ownerDocument == p && y(p, e))
                          ? -1
                          : t == C || (t.ownerDocument == p && y(p, t))
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e == C
                        ? -1
                        : t == C
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? pe(a[r], s[r])
                      : a[r] == p
                      ? -1
                      : s[r] == p
                      ? 1
                      : 0;
                  })),
            C
          );
        }),
      (se.matches = function (e, t) {
        return se(e, null, null, t);
      }),
      (se.matchesSelector = function (e, t) {
        if (
          (T(e),
          d.matchesSelector &&
            E &&
            !N[t + " "] &&
            (!s || !s.test(t)) &&
            (!v || !v.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            N(t, !0);
          }
        return 0 < se(t, C, null, [e]).length;
      }),
      (se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), y(e, t);
      }),
      (se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r
          ? r
          : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (se.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (se.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(j),
          l)
        ) {
          while ((t = e[i++])) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1);
        }
        return (u = null), e;
      }),
      (o = se.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else while ((t = e[r++])) n += o(t);
          return n;
        }),
      ((b = se.selectors =
        {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || se.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && se.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return G.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = m[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  m(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, r, i) {
              return function (e) {
                var t = se.attr(e, n);
                return null == t
                  ? "!=" === r
                  : !r ||
                      ((t += ""),
                      "=" === r
                        ? t === i
                        : "!=" === r
                        ? t !== i
                        : "^=" === r
                        ? i && 0 === t.indexOf(i)
                        : "*=" === r
                        ? i && -1 < t.indexOf(i)
                        : "$=" === r
                        ? i && t.slice(-i.length) === i
                        : "~=" === r
                        ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                        : "|=" === r &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, e, t, g, v) {
              var y = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === v
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = y !== m ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = x && e.nodeName.toLowerCase(),
                      p = !n && !x,
                      d = !1;
                    if (c) {
                      if (y) {
                        while (l) {
                          a = e;
                          while ((a = a[l]))
                            if (
                              x
                                ? a.nodeName.toLowerCase() === f
                                : 1 === a.nodeType
                            )
                              return !1;
                          u = l = "only" === h && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                        (d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]) && r[2]),
                          (a = s && c.childNodes[s]);
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (1 === a.nodeType && ++d && a === e) {
                            i[h] = [k, s, d];
                            break;
                          }
                      } else if (
                        (p &&
                          (d = s =
                            (r =
                              (i =
                                (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                        !1 === d)
                      )
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (
                            (x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType) &&
                            ++d &&
                            (p &&
                              ((i =
                                (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] = [k, d]),
                            a === e)
                          )
                            break;
                      return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  b.pseudos[e] ||
                  b.setFilters[e.toLowerCase()] ||
                  se.error("unsupported pseudo: " + e);
              return a[S]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: le(function (e) {
              var r = [],
                i = [],
                s = f(e.replace($, "$1"));
              return s[S]
                ? le(function (e, t, n, r) {
                    var i,
                      o = s(e, null, r, []),
                      a = e.length;
                    while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                  })
                : function (e, t, n) {
                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                  };
            }),
            has: le(function (t) {
              return function (e) {
                return 0 < se(t, e).length;
              };
            }),
            contains: le(function (t) {
              return (
                (t = t.replace(te, ne)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: le(function (n) {
              return (
                V.test(n || "") || se.error("unsupported lang: " + n),
                (n = n.replace(te, ne).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === a;
            },
            focus: function (e) {
              return (
                e === C.activeElement &&
                (!C.hasFocus || C.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !b.pseudos.empty(e);
            },
            header: function (e) {
              return J.test(e.nodeName);
            },
            input: function (e) {
              return Q.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ve(function () {
              return [0];
            }),
            last: ve(function (e, t) {
              return [t - 1];
            }),
            eq: ve(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ve(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ve(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() {}
      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first
          ? function (e, t, n) {
              while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = [k, p];
              if (n) {
                while ((e = e[u]))
                  if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              } else
                while ((e = e[u]))
                  if (1 === e.nodeType || f)
                    if (
                      ((i =
                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((r = i[c]) && r[0] === k && r[1] === p)
                        return (a[2] = r[2]);
                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function we(i) {
        return 1 < i.length
          ? function (e, t, n) {
              var r = i.length;
              while (r--) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function Ce(d, h, g, v, y, e) {
        return (
          v && !v[S] && (v = Ce(v)),
          y && !y[S] && (y = Ce(y, e)),
          le(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : Te(c, s, d, n, r),
              p = g ? (y || (e ? d : l || v) ? [] : t) : f;
            if ((g && g(f, p, n, r), v)) {
              (i = Te(p, u)), v(i, [], n, r), (o = i.length);
              while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
            if (e) {
              if (y || d) {
                if (y) {
                  (i = []), (o = p.length);
                  while (o--) (a = p[o]) && i.push((f[o] = a));
                  y(null, (p = []), i, r);
                }
                o = p.length;
                while (o--)
                  (a = p[o]) &&
                    -1 < (i = y ? P(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
          })
        );
      }
      function Ee(e) {
        for (
          var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            l = be(
              function (e) {
                return -1 < P(i, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                var r =
                  (!o && (n || t !== w)) ||
                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (i = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
              for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
              return Ce(
                1 < s && we(c),
                1 < s &&
                  xe(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace($, "$1"),
                t,
                s < n && Ee(e.slice(s, n)),
                n < r && Ee((e = e.slice(n))),
                n < r && xe(e)
              );
            }
            c.push(t);
          }
        return we(c);
      }
      return (
        (me.prototype = b.filters = b.pseudos),
        (b.setFilters = new me()),
        (h = se.tokenize =
          function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
              for (o in ((n && !(r = _.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
              (n = !1),
              (r = z.exec(a)) &&
                ((n = r.shift()),
                i.push({ value: n, type: r[0].replace($, " ") }),
                (a = a.slice(n.length))),
              b.filter))
                !(r = G[o].exec(a)) ||
                  (u[o] && !(r = u[o](r))) ||
                  ((n = r.shift()),
                  i.push({ value: n, type: o, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
          }),
        (f = se.compile =
          function (e, t) {
            var n,
              v,
              y,
              m,
              x,
              r,
              i = [],
              o = [],
              a = A[e + " "];
            if (!a) {
              t || (t = h(e)), (n = t.length);
              while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
              (a = A(
                e,
                ((v = o),
                (m = 0 < (y = i).length),
                (x = 0 < v.length),
                (r = function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (k += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t == C || t || i);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                      while ((s = v[a++]))
                        if (s(o, t || C, n)) {
                          r.push(o);
                          break;
                        }
                      i && (k = h);
                    }
                    m && ((o = !s && o) && u--, e && c.push(o));
                  }
                  if (((u += l), m && l !== u)) {
                    a = 0;
                    while ((s = y[a++])) s(c, f, t, n);
                    if (e) {
                      if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                      f = Te(f);
                    }
                    H.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + y.length &&
                        se.uniqueSort(r);
                  }
                  return i && ((k = h), (w = p)), c;
                }),
                m ? le(r) : r)
              )).selector = e;
            }
            return a;
          }),
        (g = se.select =
          function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = "function" == typeof e && e,
              c = !r && h((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                2 < (o = c[0] = c[0].slice(0)).length &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                E &&
                b.relative[o[1].type]
              ) {
                if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              i = G.needsContext.test(e) ? 0 : o.length;
              while (i--) {
                if (((a = o[i]), b.relative[(s = a.type)])) break;
                if (
                  (u = b.find[s]) &&
                  (r = u(
                    a.matches[0].replace(te, ne),
                    (ee.test(o[0].type) && ye(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(i, 1), !(e = r.length && xe(o))))
                    return H.apply(n, r), n;
                  break;
                }
              }
            }
            return (
              (l || f(e, c))(
                r,
                t,
                !E,
                n,
                !t || (ee.test(e) && ye(t.parentNode)) || t
              ),
              n
            );
          }),
        (d.sortStable = S.split("").sort(j).join("") === S),
        (d.detectDuplicates = !!l),
        T(),
        (d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        ce(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ce(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ce(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(R, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        se
      );
    })(C);
    (S.find = d),
      (S.expr = d.selectors),
      (S.expr[":"] = S.expr.pseudos),
      (S.uniqueSort = S.unique = d.uniqueSort),
      (S.text = d.getText),
      (S.isXMLDoc = d.isXML),
      (S.contains = d.contains),
      (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      T = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = S.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
      return m(n)
        ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
          })
        : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
        ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
          })
        : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? S.find.matchesSelector(r, e)
            ? [r]
            : []
          : S.find.matches(
              e,
              S.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      S.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
            .length;
        },
      });
    var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || D), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof S ? t[0] : t),
            S.merge(
              this,
              S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            N.test(r[1]) && S.isPlainObject(t))
          )
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
    }).prototype = S.fn),
      (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
    }
    S.fn.extend({
      has: function (e) {
        var t = S(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && S.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(S(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      S.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return h(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n);
          },
          next: function (e) {
            return O(e, "nextSibling");
          },
          prev: function (e) {
            return O(e, "previousSibling");
          },
          nextAll: function (e) {
            return h(e, "nextSibling");
          },
          prevAll: function (e) {
            return h(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n);
          },
          siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return T(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument)
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes));
          },
        },
        function (r, i) {
          S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return (
              "Until" !== r.slice(-5) && (t = e),
              t && "string" == typeof t && (n = S.filter(t, n)),
              1 < this.length &&
                (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function I(e, t, n, r) {
      var i;
      try {
        e && m((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (S.Callbacks = function (r) {
      var e, n;
      r =
        "string" == typeof r
          ? ((e = r),
            (n = {}),
            S.each(e.match(P) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : S.extend({}, r);
      var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
          for (a = a || r.once, o = i = !0; u.length; l = -1) {
            t = u.shift();
            while (++l < s.length)
              !1 === s[l].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((l = s.length), (t = !1));
          }
          r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (t && !i && ((l = s.length - 1), u.push(t)),
                (function n(e) {
                  S.each(e, function (e, t) {
                    m(t)
                      ? (r.unique && f.has(t)) || s.push(t)
                      : t && t.length && "string" !== w(t) && n(t);
                  });
                })(arguments),
                t && !i && c()),
              this
            );
          },
          remove: function () {
            return (
              S.each(arguments, function (e, t) {
                var n;
                while (-1 < (n = S.inArray(t, s, n)))
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < S.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (a = u = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (a = u = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                i || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      S.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                S.Callbacks("memory"),
                S.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return S.Deferred(function (r) {
                  S.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                }).promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    var n = this,
                      r = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(t)
                              ? s
                                ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, R, s),
                                    l(u, o, M, s),
                                    l(u, o, R, o.notifyWith)
                                  ))
                              : (a !== R && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              S.Deferred.exceptionHook &&
                                S.Deferred.exceptionHook(e, t.stackTrace),
                                u <= i + 1 &&
                                  (a !== M && ((n = void 0), (r = [e])),
                                  o.rejectWith(n, r));
                            }
                          };
                    i
                      ? t()
                      : (S.Deferred.getStackHook &&
                          (t.stackTrace = S.Deferred.getStackHook()),
                        C.setTimeout(t));
                  };
                }
                return S.Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : R)),
                    o[2][3].add(l(0, e, m(n) ? n : M));
                }).promise();
              },
              promise: function (e) {
                return null != e ? S.extend(e, a) : a;
              },
            },
            s = {};
          return (
            S.each(o, function (e, t) {
              var n = t[2],
                r = t[5];
              (a[t[1]] = n.add),
                r &&
                  n.add(
                    function () {
                      i = r;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = S.Deferred(),
            a = function (t) {
              return function (e) {
                (r[t] = this),
                  (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || o.resolveWith(r, i);
              };
            };
          if (
            n <= 1 &&
            (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then))
          )
            return o.then();
          while (t--) I(i[t], a(t), o.reject);
          return o.promise();
        },
      });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
      C.console &&
        C.console.warn &&
        e &&
        W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (S.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      });
    var F = S.Deferred();
    function B() {
      E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready();
    }
    (S.fn.ready = function (e) {
      return (
        F.then(e)["catch"](function (e) {
          S.readyException(e);
        }),
        this
      );
    }),
      S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --S.readyWait : S.isReady) ||
            ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
            F.resolveWith(E, [S]);
        },
      }),
      (S.ready.then = F.then),
      "complete" === E.readyState ||
      ("loading" !== E.readyState && !E.documentElement.doScroll)
        ? C.setTimeout(S.ready)
        : (E.addEventListener("DOMContentLoaded", B),
          C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== r &&
          ((i = !0),
          m(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(S(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      _ = /^-ms-/,
      z = /-([a-z])/g;
    function U(e, t) {
      return t.toUpperCase();
    }
    function X(e) {
      return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
      this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
      (G.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[X(t)] = n;
          else for (r in t) i[X(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][X(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(X)
                : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
              while (n--) delete r[t[n]];
            }
            (void 0 === t || S.isEmptyObject(r)) &&
              (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !S.isEmptyObject(t);
        },
      });
    var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : J.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    S.extend({
      hasData: function (e) {
        return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
        Y.remove(e, t);
      },
    }),
      S.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === n) {
            if (
              this.length &&
              ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
            ) {
              t = a.length;
              while (t--)
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = X(r.slice(5))), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : $(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n))
                      ? t
                      : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    Q.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e);
          });
        },
      }),
      S.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Y.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Y.access(e, t, S.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = S.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = S._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  S.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Y.get(e, n) ||
            Y.access(e, n, {
              empty: S.Callbacks("once memory").add(function () {
                Y.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      S.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? S.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = S.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
          while (a--)
            (n = Y.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
        return S.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
    re.getRootNode &&
      (ie = function (e) {
        return (
          S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        );
      });
    var ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
      );
    };
    function se(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return S.css(e, t, "");
            },
        u = s(),
        l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (S.cssNumber[t] || ("px" !== l && +u)) &&
          te.exec(S.css(e, t));
      if (c && c[3] !== l) {
        (u /= 2), (l = l || c[3]), (c = +u || 1);
        while (a--)
          S.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (c /= o);
        (c *= 2), S.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    var ue = {};
    function le(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
        (r = e[c]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((l[c] = Y.get(r, "display") || null),
                l[c] || (r.style.display = "")),
              "" === r.style.display &&
                ae(r) &&
                (l[c] =
                  ((u = a = o = void 0),
                  (a = (i = r).ownerDocument),
                  (s = i.nodeName),
                  (u = ue[s]) ||
                    ((o = a.body.appendChild(a.createElement(s))),
                    (u = S.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ue[s] = u)))))
            : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    S.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ae(this) ? S(this).show() : S(this).hide();
            });
      },
    });
    var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (fe = E.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      ce.appendChild(fe),
      (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ce.innerHTML = "<textarea>x</textarea>"),
      (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
      (ce.innerHTML = "<option></option>"),
      (y.option = !!ce.lastChild);
    var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function ve(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
      );
    }
    function ye(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td),
      y.option ||
        (ge.optgroup = ge.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
      for (
        var o,
          a,
          s,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          p = [],
          d = 0,
          h = e.length;
        d < h;
        d++
      )
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
          else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))),
              (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
              (u = ge[s] || ge._default),
              (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
              (c = u[0]);
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
          } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
        if (r && -1 < S.inArray(o, r)) i && i.push(o);
        else if (
          ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
        ) {
          c = 0;
          while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
      return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
      return !0;
    }
    function Te() {
      return !1;
    }
    function Ce(e, t) {
      return (
        (e ===
          (function () {
            try {
              return E.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Ee(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Ee(e, s, n, r, t[s], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Te;
      else if (!i) return e;
      return (
        1 === o &&
          ((a = i),
          ((i = function (e) {
            return S().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = S.guid++))),
        e.each(function () {
          S.event.add(this, t, i, r, n);
        })
      );
    }
    function Se(e, i, o) {
      o
        ? (Y.set(e, i, !1),
          S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
              var t,
                n,
                r = Y.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                if (r.length)
                  (S.event.special[i] || {}).delegateType && e.stopPropagation();
                else if (
                  ((r = s.call(arguments)),
                  Y.set(this, i, r),
                  (t = o(this, i)),
                  this[i](),
                  r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                  r !== n)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                  );
              } else
                r.length &&
                  (Y.set(this, i, {
                    value: S.event.trigger(
                      S.extend(r[0], S.Event.prototype),
                      r.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);
        if (V(t)) {
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(re, i),
            n.guid || (n.guid = S.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (a = v.handle) ||
              (a = v.handle =
                function (e) {
                  return "undefined" != typeof S && S.event.triggered !== e.type
                    ? S.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            (l = (e = (e || "").match(P) || [""]).length);
          while (l--)
            (d = g = (s = be.exec(e[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d &&
                ((f = S.event.special[d] || {}),
                (d = (i ? f.delegateType : f.bindType) || d),
                (f = S.event.special[d] || {}),
                (c = S.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (p = u[d]) ||
                  (((p = u[d] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                f.add &&
                  (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (S.event.global[d] = !0));
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);
        if (v && (u = v.events)) {
          l = (t = (t || "").match(P) || [""]).length;
          while (l--)
            if (
              ((d = g = (s = be.exec(t[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
            ) {
              (f = S.event.special[d] || {}),
                (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                (s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = o = p.length);
              while (o--)
                (c = p[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    f.remove && f.remove.call(e, c));
              a &&
                !p.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                  S.removeEvent(e, d, v.handle),
                delete u[d]);
            } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
          S.isEmptyObject(u) && Y.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, u))
        ) {
          (a = S.event.handlers.call(this, u, l)), (t = 0);
          while ((i = a[t++]) && !u.isPropagationStopped()) {
            (u.currentTarget = i.elem), (n = 0);
            while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                void 0 !==
                  (r = (
                    (S.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, s)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                void 0 === a[(i = (r = t[n]).selector + " ")] &&
                  (a[i] = r.needsContext
                    ? -1 < S(i, this).index(l)
                    : S.find(i, this, null, [l]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o });
            }
        return (
          (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(S.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Y.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? we
                : Te),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[S.expando] = !0);
      }),
      (S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = we),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = we),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = we),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      S.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        S.event.addProp
      ),
      S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        S.event.special[e] = {
          setup: function () {
            return Se(this, e, Ce), !1;
          },
          trigger: function () {
            return Se(this, e), !0;
          },
          _default: function () {
            return !0;
          },
          delegateType: t,
        };
      }),
      S.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (n && (n === this || S.contains(this, n))) ||
                  ((e.type = r.origType),
                  (t = r.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      S.fn.extend({
        on: function (e, t, n, r) {
          return Ee(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Ee(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              S(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        },
      });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          S(e).children("tbody")[0]) ||
        e
      );
    }
    function De(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Le(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events))
          for (i in (Y.remove(t, "handle events"), s))
            for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
        Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
      }
    }
    function He(n, r, i, o) {
      r = g(r);
      var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
        });
      if (
        f &&
        ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
          (u = e),
            c !== p &&
              ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
            i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
            (u = a[c]),
              he.test(u.type || "") &&
                !Y.access(u, "globalEval") &&
                S.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? S._evalUrl &&
                    !u.noModule &&
                    S._evalUrl(
                      u.src,
                      { nonce: u.nonce || u.getAttribute("nonce") },
                      l
                    )
                  : b(u.textContent.replace(Ne, ""), u, l));
      }
      return n;
    }
    function Oe(e, t, n) {
      for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || S.cleanData(ve(r)),
          r.parentNode &&
            (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    S.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
        if (
          !(
            y.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            S.isXMLDoc(e)
          )
        )
          for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
            (s = o[r]),
              (u = a[r]),
              void 0,
              "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
              Le(o[r], a[r]);
          else Le(e, c);
        return (
          0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (V(n)) {
            if ((t = n[Y.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      },
    }),
      S.fn.extend({
        detach: function (e) {
          return Oe(this, e, !0);
        },
        remove: function (e) {
          return Oe(this, e);
        },
        text: function (e) {
          return $(
            this,
            function (e) {
              return void 0 === e
                ? S.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return He(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              je(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return He(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return S.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return $(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ke.test(e) &&
                !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = S.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return He(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              S.inArray(this, n) < 0 &&
                (S.cleanData(ve(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      S.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, a) {
          S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
              (t = o === i ? this : this.clone(!0)),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      Me = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      },
      Ie = new RegExp(ne.join("|"), "i");
    function We(e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.style;
      return (
        (n = n || Re(e)) &&
          ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            ie(e) ||
            (a = S.style(e, t)),
          !y.pixelBoxStyles() &&
            Pe.test(a) &&
            Ie.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function Fe(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (l) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(u).appendChild(l);
          var e = C.getComputedStyle(l);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (l.style.right = "60%"),
            (o = 36 === t(e.right)),
            (r = 36 === t(e.width)),
            (l.style.position = "absolute"),
            (i = 12 === t(l.offsetWidth / 3)),
            re.removeChild(u),
            (l = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
        S.extend(y, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), i;
          },
          reliableTrDimensions: function () {
            var e, t, n, r;
            return (
              null == a &&
                ((e = E.createElement("table")),
                (t = E.createElement("tr")),
                (n = E.createElement("div")),
                (e.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (t.style.cssText = "border:1px solid"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                (n.style.display = "block"),
                re.appendChild(e).appendChild(t).appendChild(n),
                (r = C.getComputedStyle(t)),
                (a =
                  parseInt(r.height, 10) +
                    parseInt(r.borderTopWidth, 10) +
                    parseInt(r.borderBottomWidth, 10) ===
                  t.offsetHeight),
                re.removeChild(e)),
              a
            );
          },
        }));
    })();
    var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};
    function ze(e) {
      var t = S.cssProps[e] || _e[e];
      return (
        t ||
        (e in $e
          ? e
          : (_e[e] =
              (function (e) {
                var t = e[0].toUpperCase() + e.slice(1),
                  n = Be.length;
                while (n--) if ((e = Be[n] + t) in $e) return e;
              })(e) || e))
      );
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = { position: "absolute", visibility: "hidden", display: "block" },
      Ge = { letterSpacing: "0", fontWeight: "400" };
    function Ye(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Qe(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
          r
            ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
              "margin" !== n &&
                (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
            : ((u += S.css(e, "padding" + ne[a], !0, i)),
              "padding" !== n
                ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function Je(e, t, n) {
      var r = Re(e),
        i =
          (!y.boxSizingReliable() || n) &&
          "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!y.boxSizingReliable() && i) ||
          (!y.reliableTrDimensions() && A(e, "tr")) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
          (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
          "px"
      );
    }
    function Ke(e, t, n, r, i) {
      return new Ke.prototype.init(e, t, n, r, i);
    }
    S.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = We(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
          if (
            (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
          )
            return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = typeof n) &&
            (i = te.exec(n)) &&
            i[1] &&
            ((n = se(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
              y.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = X(t);
        return (
          Xe.test(t) || (t = ze(s)),
          (a = S.cssHooks[t] || S.cssHooks[s]) &&
            "get" in a &&
            (i = a.get(e, !0, n)),
          void 0 === i && (i = We(e, t, r)),
          "normal" === i && t in Ge && (i = Ge[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
          get: function (e, t, n) {
            if (t)
              return !Ue.test(S.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Je(e, u, n)
                : Me(e, Ve, function () {
                    return Je(e, u, n);
                  });
          },
          set: function (e, t, n) {
            var r,
              i = Re(e),
              o = !y.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
              s = n ? Qe(e, u, n, a, i) : 0;
            return (
              a &&
                o &&
                (s -= Math.ceil(
                  e["offset" + u[0].toUpperCase() + u.slice(1)] -
                    parseFloat(i[u]) -
                    Qe(e, u, "border", !1, i) -
                    0.5
                )),
              s &&
                (r = te.exec(t)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[u] = t), (t = S.css(e, u))),
              Ye(0, t, s)
            );
          },
        };
      }),
      (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(We(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Me(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        (S.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (S.cssHooks[i + o].set = Ye);
      }),
      S.fn.extend({
        css: function (e, t) {
          return $(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = Re(e), i = t.length; a < i; a++)
                  o[t[a]] = S.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || S.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (S.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = Ke.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = Ke.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  S.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = Ke.prototype),
      ((Ke.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            S.fx.step[e.prop]
              ? S.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = Ke.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (S.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (S.fx = Ke.prototype.init),
      (S.fx.step = {});
    var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;
    function ot() {
      et &&
        (!1 === E.hidden && C.requestAnimationFrame
          ? C.requestAnimationFrame(ot)
          : C.setTimeout(ot, S.fx.interval),
        S.fx.tick());
    }
    function at() {
      return (
        C.setTimeout(function () {
          Ze = void 0;
        }),
        (Ze = Date.now())
      );
    }
    function st(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function ut(e, t, n) {
      for (
        var r,
          i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function lt(o, e, t) {
      var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (a) return !1;
          for (
            var e = Ze || at(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = 1 - (t / l.duration || 0),
              r = 0,
              i = l.tweens.length;
            r < i;
            r++
          )
            l.tweens[r].run(n);
          return (
            s.notifyWith(o, [l, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
          );
        },
        l = s.promise({
          elem: o,
          props: S.extend({}, e),
          opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Ze || at(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = S.Tween(
              o,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                : s.rejectWith(o, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((i = t[(r = X(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = S.cssHooks[r]) && ("expand" in a))
            )
              for (n in ((o = a.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(c, l.opts.specialEasing);
        r < i;
        r++
      )
        if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
          return (
            m(n.stop) &&
              (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        S.map(c, ut, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (S.Animation = S.extend(lt, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (lt.tweeners[n] = lt.tweeners[n] || []),
            lt.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            v = Y.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (a = S._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function () {
              p.always(function () {
                a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), rt.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0;
              }
              d[r] = (v && v[r]) || S.style(e, r);
            }
          if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = v && v.display) && (l = Y.get(e, "display")),
              "none" === (c = S.css(e, "display")) &&
                (l
                  ? (c = l)
                  : (le([e], !0),
                    (l = e.style.display || l),
                    (c = S.css(e, "display")),
                    le([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === S.css(e, "float") &&
                (u ||
                  (p.done(function () {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (v
                  ? "hidden" in v && (g = v.hidden)
                  : (v = Y.access(e, "fxshow", { display: l })),
                o && (v.hidden = !g),
                g && le([e], !0),
                p.done(function () {
                  for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                    S.style(e, r, d[r]);
                })),
                (u = ut(g ? v[r] : 0, r, p)),
                r in v ||
                  ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
      },
    })),
      (S.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? S.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          S.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in S.fx.speeds
                ? (r.duration = S.fx.speeds[r.duration])
                : (r.duration = S.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
          }),
          r
        );
      }),
      S.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ae)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (t, e, n, r) {
          var i = S.isEmptyObject(t),
            o = S.speed(e, n, r),
            a = function () {
              var e = lt(this, S.extend({}, t), o);
              (i || Y.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (i, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof i && ((o = e), (e = i), (i = void 0)),
            e && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = S.timers,
                r = Y.get(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || S.dequeue(this, i);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = Y.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = S.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  S.queue(this, a, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = i.length;
                e--;
  
              )
                i[e].elem === this &&
                  i[e].queue === a &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(st(r, !0), e, t, n);
        };
      }),
      S.each(
        {
          slideDown: st("show"),
          slideUp: st("hide"),
          slideToggle: st("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, r) {
          S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
          };
        }
      ),
      (S.timers = []),
      (S.fx.tick = function () {
        var e,
          t = 0,
          n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), (Ze = void 0);
      }),
      (S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }),
      (S.fx.interval = 13),
      (S.fx.start = function () {
        et || ((et = !0), ot());
      }),
      (S.fx.stop = function () {
        et = null;
      }),
      (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (S.fn.delay = function (r, e) {
        return (
          (r = (S.fx && S.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
              C.clearTimeout(n);
            };
          })
        );
      }),
      (tt = E.createElement("input")),
      (nt = E.createElement("select").appendChild(E.createElement("option"))),
      (tt.type = "checkbox"),
      (y.checkOn = "" !== tt.value),
      (y.optSelected = nt.selected),
      ((tt = E.createElement("input")).value = "t"),
      (tt.type = "radio"),
      (y.radioValue = "t" === tt.value);
    var ct,
      ft = S.expr.attrHandle;
    S.fn.extend({
      attr: function (e, t) {
        return $(this, S.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      },
    }),
      S.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? S.prop(e, t, n)
              : ((1 === o && S.isXMLDoc(e)) ||
                  (i =
                    S.attrHooks[t.toLowerCase()] ||
                    (S.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n
                  ? null === n
                    ? void S.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!y.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(P);
          if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
        },
      }),
      (ct = {
        set: function (e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function (e, t, n) {
          var r,
            i,
            o = t.toLowerCase();
          return (
            n ||
              ((i = ft[o]),
              (ft[o] = r),
              (r = null != a(e, t, n) ? o : null),
              (ft[o] = i)),
            r
          );
        };
      });
    var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;
    function ht(e) {
      return (e.match(P) || []).join(" ");
    }
    function gt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function vt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
      prop: function (e, t) {
        return $(this, S.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      },
    }),
      S.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && S.isXMLDoc(e)) ||
                ((t = S.propFix[t] || t), (i = S.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = S.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      y.optSelected ||
        (S.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      S.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          S.propFix[this.toLowerCase()] = this;
        }
      ),
      S.fn.extend({
        addClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (m(t))
            return this.each(function (e) {
              S(this).addClass(t.call(this, e, gt(this)));
            });
          if ((e = vt(t)).length)
            while ((n = this[u++]))
              if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
                a = 0;
                while ((o = e[a++]))
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = ht(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (m(t))
            return this.each(function (e) {
              S(this).removeClass(t.call(this, e, gt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = vt(t)).length)
            while ((n = this[u++]))
              if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
                a = 0;
                while ((o = e[a++]))
                  while (-1 < r.indexOf(" " + o + " "))
                    r = r.replace(" " + o + " ", " ");
                i !== (s = ht(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        toggleClass: function (i, t) {
          var o = typeof i,
            a = "string" === o || Array.isArray(i);
          return "boolean" == typeof t && a
            ? t
              ? this.addClass(i)
              : this.removeClass(i)
            : m(i)
            ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a) {
                  (t = 0), (n = S(this)), (r = vt(i));
                  while ((e = r[t++]))
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var yt = /\r/g;
    S.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = m(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, S(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  S.valHooks[this.type] ||
                  S.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(yt, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      S.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : ht(S.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = S(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = S.makeArray(t),
                a = i.length;
              while (a--)
                ((r = i[a]).selected =
                  -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      S.each(["radio", "checkbox"], function () {
        (S.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < S.inArray(S(e).val(), t));
          },
        }),
          y.checkOn ||
            (S.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (y.focusin = "onfocusin" in C);
    var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function (e) {
        e.stopPropagation();
      };
    S.extend(S.event, {
      trigger: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = a = n = n || E),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !mt.test(d + S.event.triggered) &&
            (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            ((e = e[S.expando]
              ? e
              : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : S.makeArray(t, [e])),
            (c = S.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!r && !c.noBubble && !x(n)) {
            for (
              s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C);
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped())
            (f = o),
              (e.type = 1 < i ? s : c.bindType || d),
              (l =
                (Y.get(o, "events") || Object.create(null))[e.type] &&
                Y.get(o, "handle")) && l.apply(o, t),
              (l = u && o[u]) &&
                l.apply &&
                V(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(p.pop(), t)) ||
              !V(n) ||
              (u &&
                m(n[d]) &&
                !x(n) &&
                ((a = n[u]) && (n[u] = null),
                (S.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, xt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, xt),
                (S.event.triggered = void 0),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
        S.event.trigger(r, null, t);
      },
    }),
      S.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            S.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return S.event.trigger(e, t, n, !0);
        },
      }),
      y.focusin ||
        S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
          };
          S.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r);
              t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r) - 1;
              t
                ? Y.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
          };
        });
    var bt = C.location,
      wt = { guid: Date.now() },
      Tt = /\?/;
    S.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          S.error(
            "Invalid XML: " +
              (n
                ? S.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    };
    var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
      var t;
      if (Array.isArray(e))
        S.each(e, function (e, t) {
          r || Ct.test(n)
            ? i(n, t)
            : At(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                r,
                i
              );
        });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) At(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = m(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
        S.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) At(n, e[n], t, i);
      return r.join("&");
    }),
      S.fn.extend({
        serialize: function () {
          return S.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !S(this).is(":disabled") &&
                kt.test(this.nodeName) &&
                !St.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = S(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Et, "\r\n") };
            })
            .get();
        },
      });
    var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");
    function It(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
        if (m(t))
          while ((n = i[r++]))
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function Wt(t, i, o, a) {
      var s = {},
        u = t === Pt;
      function l(e) {
        var r;
        return (
          (s[e] = !0),
          S.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);
            return "string" != typeof n || u || s[n]
              ? u
                ? !(r = n)
                : void 0
              : (i.dataTypes.unshift(n), l(n), !1);
          }),
          r
        );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Ft(e, t) {
      var n,
        r,
        i = S.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && S.extend(!0, e, r), e;
    }
    (Mt.href = bt.href),
      S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: bt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              bt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Rt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            v = S.ajaxSetup({}, t),
            y = v.context || v,
            m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
            x = S.Deferred(),
            b = S.Callbacks("once memory"),
            w = v.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n) {
                    n = {};
                    while ((t = qt.exec(p)))
                      n[t[1].toLowerCase() + " "] = (
                        n[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  }
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (a[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (v.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else for (t in e) w[t] = [w[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (x.promise(T),
            (v.url = ((e || v.url || bt.href) + "").replace(
              Ht,
              bt.protocol + "//"
            )),
            (v.type = t.method || t.type || v.method || v.type),
            (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
            null == v.crossDomain)
          ) {
            r = E.createElement("a");
            try {
              (r.href = v.url),
                (r.href = r.href),
                (v.crossDomain =
                  Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
            } catch (e) {
              v.crossDomain = !0;
            }
          }
          if (
            (v.data &&
              v.processData &&
              "string" != typeof v.data &&
              (v.data = S.param(v.data, v.traditional)),
            Wt(Ot, v, t, T),
            h)
          )
            return T;
          for (i in ((g = S.event && v.global) &&
            0 == S.active++ &&
            S.event.trigger("ajaxStart"),
          (v.type = v.type.toUpperCase()),
          (v.hasContent = !Lt.test(v.type)),
          (f = v.url.replace(jt, "")),
          v.hasContent
            ? v.data &&
              v.processData &&
              0 ===
                (v.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (v.data = v.data.replace(Nt, "+"))
            : ((o = v.url.slice(f.length)),
              v.data &&
                (v.processData || "string" == typeof v.data) &&
                ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
              !1 === v.cache &&
                ((f = f.replace(Dt, "$1")),
                (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
              (v.url = f + o)),
          v.ifModified &&
            (S.lastModified[f] &&
              T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
          ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
            T.setRequestHeader("Content-Type", v.contentType),
          T.setRequestHeader(
            "Accept",
            v.dataTypes[0] && v.accepts[v.dataTypes[0]]
              ? v.accepts[v.dataTypes[0]] +
                  ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
              : v.accepts["*"]
          ),
          v.headers))
            T.setRequestHeader(i, v.headers[i]);
          if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
            return T.abort();
          if (
            ((u = "abort"),
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            (c = Wt(Pt, v, t, T)))
          ) {
            if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
              return T;
            v.async &&
              0 < v.timeout &&
              (d = C.setTimeout(function () {
                T.abort("timeout");
              }, v.timeout));
            try {
              (h = !1), c.send(a, l);
            } catch (e) {
              if (h) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = t;
            h ||
              ((h = !0),
              d && C.clearTimeout(d),
              (c = void 0),
              (p = r || ""),
              (T.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.contents,
                    u = e.dataTypes;
                  while ("*" === u[0])
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in s)
                      if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(v, T, n)),
              !i &&
                -1 < S.inArray("script", v.dataTypes) &&
                S.inArray("json", v.dataTypes) < 0 &&
                (v.converters["text script"] = function () {}),
              (s = (function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                          if (
                            (s = i.split(" "))[1] === o &&
                            (a = l[u + " " + s[0]] || l["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = l[i])
                              : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(v, s, T, i)),
              i
                ? (v.ifModified &&
                    ((u = T.getResponseHeader("Last-Modified")) &&
                      (S.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                  204 === e || "HEAD" === v.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || l) + ""),
              i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
              T.statusCode(w),
              (w = void 0),
              g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
              b.fireWith(y, [T, l]),
              g &&
                (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return S.get(e, void 0, t, "script");
        },
      }),
      S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
          return (
            m(t) && ((r = r || n), (n = t), (t = void 0)),
            S.ajax(
              S.extend(
                { url: e, type: i, dataType: r, data: t, success: n },
                S.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (S._evalUrl = function (e, t, n) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            S.globalEval(e, t, n);
          },
        });
      }),
      S.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstElementChild) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return m(n)
            ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = S(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                S(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }),
      (S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (S.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      });
    var Bt = { 0: 200, 1223: 204 },
      $t = S.ajaxSettings.xhr();
    (y.cors = !!$t && "withCredentials" in $t),
      (y.ajax = $t = !!$t),
      S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || ($t && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      a =
                      r.onload =
                      r.onerror =
                      r.onabort =
                      r.ontimeout =
                      r.onreadystatechange =
                        null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Bt[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (a = r.onerror = r.ontimeout = o("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        C.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      S.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return S.globalEval(e), e;
          },
        },
      }),
      S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = S("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    r.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                E.head.appendChild(r[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = zt.pop() || S.expando + "_" + wt.guid++;
        return (this[e] = !0), e;
      },
    }),
      S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          i,
          o,
          a =
            !1 !== e.jsonp &&
            (Ut.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Ut.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ut, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return o || S.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = C[r]),
            (C[r] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
                o && m(i) && i(o[0]),
                (o = i = void 0);
            }),
            "script"
          );
      }),
      (y.createHTMLDocument =
        (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === _t.childNodes.length)),
      (S.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (y.createHTMLDocument
                ? (((r = (t =
                    E.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = E.location.href),
                  t.head.appendChild(r))
                : (t = E)),
            (o = !n && []),
            (i = N.exec(e))
              ? [t.createElement(i[1])]
              : ((i = xe([e], t, o)),
                o && o.length && S(o).remove(),
                S.merge([], i.childNodes)));
        var r, i, o;
      }),
      (S.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < a.length &&
            S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (S.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l = S.css(e, "position"),
            c = S(e),
            f = {};
          "static" === l && (e.style.position = "relative"),
            (s = c.offset()),
            (o = S.css(e, "top")),
            (u = S.css(e, "left")),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f);
        },
      }),
      S.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  S.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
            else {
              (t = this.offset()),
                (n = r.ownerDocument),
                (e = r.offsetParent || n.documentElement);
              while (
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === S.css(e, "position")
              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                (i.left += S.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - S.css(r, "marginTop", !0),
              left: t.left - i.left - S.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === S.css(e, "position")) e = e.offsetParent;
            return e || re;
          });
        },
      }),
      S.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var o = "pageYOffset" === i;
          S.fn[t] = function (e) {
            return $(
              this,
              function (e, t, n) {
                var r;
                if (
                  (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[i] : e[t];
                r
                  ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
          if (t)
            return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
        });
      }),
      S.each({ Height: "height", Width: "width" }, function (a, s) {
        S.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, o) {
            S.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return $(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? S.css(e, t, i)
                    : S.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      S.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      S.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      S.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || S.guid++),
          i
        );
    }),
      (S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0);
      }),
      (S.isArray = Array.isArray),
      (S.parseJSON = JSON.parse),
      (S.nodeName = A),
      (S.isFunction = m),
      (S.isWindow = x),
      (S.camelCase = X),
      (S.type = w),
      (S.now = Date.now),
      (S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Xt, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return S;
        });
    var Vt = C.jQuery,
      Gt = C.$;
    return (
      (S.noConflict = function (e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
      }),
      "undefined" == typeof e && (C.jQuery = C.$ = S),
      S
    );
  });
  ("use strict");
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Popper =
            {})
        );
  })(this, function (e) {
    function t(e) {
      return {
        width: (e = e.getBoundingClientRect()).width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top,
      };
    }
    function n(e) {
      return null == e
        ? window
        : "[object Window]" !== e.toString()
        ? ((e = e.ownerDocument) && e.defaultView) || window
        : e;
    }
    function o(e) {
      return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
    }
    function r(e) {
      return e instanceof n(e).Element || e instanceof Element;
    }
    function i(e) {
      return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
    }
    function a(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    function s(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function f(e) {
      return (
        (r(e) ? e.ownerDocument : e.document) || window.document
      ).documentElement;
    }
    function p(e) {
      return t(f(e)).left + o(e).scrollLeft;
    }
    function c(e) {
      return n(e).getComputedStyle(e);
    }
    function l(e) {
      return (
        (e = c(e)),
        /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
      );
    }
    function u(e, r, a) {
      void 0 === a && (a = !1);
      var c = f(r);
      e = t(e);
      var u = i(r),
        d = { scrollLeft: 0, scrollTop: 0 },
        m = { x: 0, y: 0 };
      return (
        (u || (!u && !a)) &&
          (("body" !== s(r) || l(c)) &&
            (d =
              r !== n(r) && i(r)
                ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
                : o(r)),
          i(r)
            ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
            : c && (m.x = p(c))),
        {
          x: e.left + d.scrollLeft - m.x,
          y: e.top + d.scrollTop - m.y,
          width: e.width,
          height: e.height,
        }
      );
    }
    function d(e) {
      var n = t(e),
        o = e.offsetWidth,
        r = e.offsetHeight;
      return (
        1 >= Math.abs(n.width - o) && (o = n.width),
        1 >= Math.abs(n.height - r) && (r = n.height),
        { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
      );
    }
    function m(e) {
      return "html" === s(e)
        ? e
        : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
    }
    function h(e) {
      return 0 <= ["html", "body", "#document"].indexOf(s(e))
        ? e.ownerDocument.body
        : i(e) && l(e)
        ? e
        : h(m(e));
    }
    function v(e, t) {
      var o;
      void 0 === t && (t = []);
      var r = h(e);
      return (
        (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
        (o = n(r)),
        (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
        (t = t.concat(r)),
        e ? t : t.concat(v(m(r)))
      );
    }
    function g(e) {
      return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
    }
    function y(e) {
      for (
        var t = n(e), o = g(e);
        o &&
        0 <= ["table", "td", "th"].indexOf(s(o)) &&
        "static" === c(o).position;
  
      )
        o = g(o);
      if (
        o &&
        ("html" === s(o) || ("body" === s(o) && "static" === c(o).position))
      )
        return t;
      if (!o)
        e: {
          if (
            ((o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")),
            -1 === navigator.userAgent.indexOf("Trident") ||
              !i(e) ||
              "fixed" !== c(e).position)
          )
            for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e)); ) {
              var r = c(e);
              if (
                "none" !== r.transform ||
                "none" !== r.perspective ||
                "paint" === r.contain ||
                -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                (o && "filter" === r.willChange) ||
                (o && r.filter && "none" !== r.filter)
              ) {
                o = e;
                break e;
              }
              e = e.parentNode;
            }
          o = null;
        }
      return o || t;
    }
    function b(e) {
      function t(e) {
        o.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              o.has(e) || ((e = n.get(e)) && t(e));
            }),
          r.push(e);
      }
      var n = new Map(),
        o = new Set(),
        r = [];
      return (
        e.forEach(function (e) {
          n.set(e.name, e);
        }),
        e.forEach(function (e) {
          o.has(e.name) || t(e);
        }),
        r
      );
    }
    function w(e) {
      var t;
      return function () {
        return (
          t ||
            (t = new Promise(function (n) {
              Promise.resolve().then(function () {
                (t = void 0), n(e());
              });
            })),
          t
        );
      };
    }
    function x(e) {
      return e.split("-")[0];
    }
    function O(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && a(n))
        do {
          if (t && e.isSameNode(t)) return !0;
          t = t.parentNode || t.host;
        } while (t);
      return !1;
    }
    function j(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function E(e, r) {
      if ("viewport" === r) {
        r = n(e);
        var a = f(e);
        r = r.visualViewport;
        var s = a.clientWidth;
        a = a.clientHeight;
        var l = 0,
          u = 0;
        r &&
          ((s = r.width),
          (a = r.height),
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
            ((l = r.offsetLeft), (u = r.offsetTop))),
          (e = j((e = { width: s, height: a, x: l + p(e), y: u })));
      } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({ width: a, height: l, x: u, y: s })));
      return e;
    }
    function D(e, t, n) {
      return (
        (t =
          "clippingParents" === t
            ? (function (e) {
                var t = v(m(e)),
                  n =
                    0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e)
                      ? y(e)
                      : e;
                return r(n)
                  ? t.filter(function (e) {
                      return r(e) && O(e, n) && "body" !== s(e);
                    })
                  : [];
              })(e)
            : [].concat(t)),
        ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
          return (
            (n = E(e, n)),
            (t.top = _(n.top, t.top)),
            (t.right = U(n.right, t.right)),
            (t.bottom = U(n.bottom, t.bottom)),
            (t.left = _(n.left, t.left)),
            t
          );
        }, E(e, n[0]))).width = n.right - n.left),
        (n.height = n.bottom - n.top),
        (n.x = n.left),
        (n.y = n.top),
        n
      );
    }
    function L(e) {
      return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
    }
    function P(e) {
      var t = e.reference,
        n = e.element,
        o = (e = e.placement) ? x(e) : null;
      e = e ? e.split("-")[1] : null;
      var r = t.x + t.width / 2 - n.width / 2,
        i = t.y + t.height / 2 - n.height / 2;
      switch (o) {
        case "top":
          r = { x: r, y: t.y - n.height };
          break;
        case "bottom":
          r = { x: r, y: t.y + t.height };
          break;
        case "right":
          r = { x: t.x + t.width, y: i };
          break;
        case "left":
          r = { x: t.x - n.width, y: i };
          break;
        default:
          r = { x: t.x, y: t.y };
      }
      if (null != (o = o ? L(o) : null))
        switch (((i = "y" === o ? "height" : "width"), e)) {
          case "start":
            r[o] -= t[i] / 2 - n[i] / 2;
            break;
          case "end":
            r[o] += t[i] / 2 - n[i] / 2;
        }
      return r;
    }
    function M(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function k(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    function A(e, n) {
      void 0 === n && (n = {});
      var o = n;
      n = void 0 === (n = o.placement) ? e.placement : n;
      var i = o.boundary,
        a = void 0 === i ? "clippingParents" : i,
        s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
      i = void 0 === (i = o.elementContext) ? "popper" : i;
      var p = o.altBoundary,
        c = void 0 !== p && p;
      o = M(
        "number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)
      );
      var l = e.elements.reference;
      (p = e.rects.popper),
        (a = D(
          r((c = e.elements[c ? ("popper" === i ? "reference" : "popper") : i]))
            ? c
            : c.contextElement || f(e.elements.popper),
          a,
          s
        )),
        (c = P({
          reference: (s = t(l)),
          element: p,
          strategy: "absolute",
          placement: n,
        })),
        (p = j(Object.assign({}, p, c))),
        (s = "popper" === i ? p : s);
      var u = {
        top: a.top - s.top + o.top,
        bottom: s.bottom - a.bottom + o.bottom,
        left: a.left - s.left + o.left,
        right: s.right - a.right + o.right,
      };
      if (((e = e.modifiersData.offset), "popper" === i && e)) {
        var d = e[n];
        Object.keys(u).forEach(function (e) {
          var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
            n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
          u[e] += d[n] * t;
        });
      }
      return u;
    }
    function W() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function B(e) {
      void 0 === e && (e = {});
      var t = e.defaultModifiers,
        n = void 0 === t ? [] : t,
        o = void 0 === (e = e.defaultOptions) ? F : e;
      return function (e, t, i) {
        function a() {
          f.forEach(function (e) {
            return e();
          }),
            (f = []);
        }
        void 0 === i && (i = o);
        var s = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, F, o),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          f = [],
          p = !1,
          c = {
            state: s,
            setOptions: function (i) {
              return (
                a(),
                (s.options = Object.assign({}, o, s.options, i)),
                (s.scrollParents = {
                  reference: r(e)
                    ? v(e)
                    : e.contextElement
                    ? v(e.contextElement)
                    : [],
                  popper: v(t),
                }),
                (i = (function (e) {
                  var t = b(e);
                  return I.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, s.options.modifiers))
                )),
                (s.orderedModifiers = i.filter(function (e) {
                  return e.enabled;
                })),
                s.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options;
                  (n = void 0 === n ? {} : n),
                    "function" == typeof (e = e.effect) &&
                      ((t = e({ state: s, name: t, instance: c, options: n })),
                      f.push(t || function () {}));
                }),
                c.update()
              );
            },
            forceUpdate: function () {
              if (!p) {
                var e = s.elements,
                  t = e.reference;
                if (W(t, (e = e.popper)))
                  for (
                    s.rects = {
                      reference: u(t, y(e), "fixed" === s.options.strategy),
                      popper: d(e),
                    },
                      s.reset = !1,
                      s.placement = s.options.placement,
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      }),
                      t = 0;
                    t < s.orderedModifiers.length;
                    t++
                  )
                    if (!0 === s.reset) (s.reset = !1), (t = -1);
                    else {
                      var n = s.orderedModifiers[t];
                      e = n.fn;
                      var o = n.options;
                      (o = void 0 === o ? {} : o),
                        (n = n.name),
                        "function" == typeof e &&
                          (s =
                            e({ state: s, options: o, name: n, instance: c }) ||
                            s);
                    }
              }
            },
            update: w(function () {
              return new Promise(function (e) {
                c.forceUpdate(), e(s);
              });
            }),
            destroy: function () {
              a(), (p = !0);
            },
          };
        return W(e, t)
          ? (c.setOptions(i).then(function (e) {
              !p && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            c)
          : c;
      };
    }
    function T(e) {
      var t,
        o = e.popper,
        r = e.popperRect,
        i = e.placement,
        a = e.offsets,
        s = e.position,
        p = e.gpuAcceleration,
        l = e.adaptive;
      if (!0 === (e = e.roundOffsets)) {
        e = a.y;
        var u = window.devicePixelRatio || 1;
        e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 };
      } else e = "function" == typeof e ? e(a) : a;
      (e = void 0 === (e = (u = e).x) ? 0 : e),
        (u = void 0 === (u = u.y) ? 0 : u);
      var d = a.hasOwnProperty("x");
      a = a.hasOwnProperty("y");
      var m,
        h = "left",
        v = "top",
        g = window;
      if (l) {
        var b = y(o),
          w = "clientHeight",
          x = "clientWidth";
        b === n(o) &&
          "static" !== c((b = f(o))).position &&
          ((w = "scrollHeight"), (x = "scrollWidth")),
          "top" === i &&
            ((v = "bottom"), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
          "left" === i &&
            ((h = "right"), (e -= b[x] - r.width), (e *= p ? 1 : -1));
      }
      return (
        (o = Object.assign({ position: s }, l && J)),
        p
          ? Object.assign(
              {},
              o,
              (((m = {})[v] = a ? "0" : ""),
              (m[h] = d ? "0" : ""),
              (m.transform =
                2 > (g.devicePixelRatio || 1)
                  ? "translate(" + e + "px, " + u + "px)"
                  : "translate3d(" + e + "px, " + u + "px, 0)"),
              m)
            )
          : Object.assign(
              {},
              o,
              (((t = {})[v] = a ? u + "px" : ""),
              (t[h] = d ? e + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    function H(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return $[e];
      });
    }
    function R(e) {
      return e.replace(/start|end/g, function (e) {
        return ee[e];
      });
    }
    function S(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function q(e) {
      return ["top", "right", "bottom", "left"].some(function (t) {
        return 0 <= e[t];
      });
    }
    var C = ["top", "bottom", "right", "left"],
      N = C.reduce(function (e, t) {
        return e.concat([t + "-start", t + "-end"]);
      }, []),
      V = [].concat(C, ["auto"]).reduce(function (e, t) {
        return e.concat([t, t + "-start", t + "-end"]);
      }, []),
      I =
        "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
          " "
        ),
      _ = Math.max,
      U = Math.min,
      z = Math.round,
      F = { placement: "bottom", modifiers: [], strategy: "absolute" },
      X = { passive: !0 },
      Y = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            o = e.instance,
            r = (e = e.options).scroll,
            i = void 0 === r || r,
            a = void 0 === (e = e.resize) || e,
            s = n(t.elements.popper),
            f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              f.forEach(function (e) {
                e.addEventListener("scroll", o.update, X);
              }),
            a && s.addEventListener("resize", o.update, X),
            function () {
              i &&
                f.forEach(function (e) {
                  e.removeEventListener("scroll", o.update, X);
                }),
                a && s.removeEventListener("resize", o.update, X);
            }
          );
        },
        data: {},
      },
      G = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state;
          t.modifiersData[e.name] = P({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      },
      J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
      K = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          e = void 0 === (e = n.gpuAcceleration) || e;
          var o = n.adaptive;
          (o = void 0 === o || o),
            (n = void 0 === (n = n.roundOffsets) || n),
            (e = {
              placement: x(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: e,
            }),
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                T(
                  Object.assign({}, e, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: n,
                  })
                )
              )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                T(
                  Object.assign({}, e, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: n,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      Q = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              o = t.attributes[e] || {},
              r = t.elements[e];
            i(r) &&
              s(r) &&
              (Object.assign(r.style, n),
              Object.keys(o).forEach(function (e) {
                var t = o[e];
                !1 === t
                  ? r.removeAttribute(e)
                  : r.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var o = t.elements[e],
                  r = t.attributes[e] || {};
                (e = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {})),
                  i(o) &&
                    s(o) &&
                    (Object.assign(o.style, e),
                    Object.keys(r).forEach(function (e) {
                      o.removeAttribute(e);
                    }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      },
      Z = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            o = void 0 === (e = e.options.offset) ? [0, 0] : e,
            r = (e = V.reduce(function (e, n) {
              var r = t.rects,
                i = x(n),
                a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
                s =
                  "function" == typeof o
                    ? o(Object.assign({}, r, { placement: n }))
                    : o;
              return (
                (r = (r = s[0]) || 0),
                (s = ((s = s[1]) || 0) * a),
                (i =
                  0 <= ["left", "right"].indexOf(i)
                    ? { x: s, y: r }
                    : { x: r, y: s }),
                (e[n] = i),
                e
              );
            }, {}))[t.placement],
            i = r.x;
          (r = r.y),
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += i),
              (t.modifiersData.popperOffsets.y += r)),
            (t.modifiersData[n] = e);
        },
      },
      $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
      ee = { start: "end", end: "start" },
      te = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          if (((e = e.name), !t.modifiersData[e]._skip)) {
            var o = n.mainAxis;
            o = void 0 === o || o;
            var r = n.altAxis;
            r = void 0 === r || r;
            var i = n.fallbackPlacements,
              a = n.padding,
              s = n.boundary,
              f = n.rootBoundary,
              p = n.altBoundary,
              c = n.flipVariations,
              l = void 0 === c || c,
              u = n.allowedAutoPlacements;
            (c = x((n = t.options.placement))),
              (i =
                i ||
                (c !== n && l
                  ? (function (e) {
                      if ("auto" === x(e)) return [];
                      var t = H(e);
                      return [R(e), t, R(t)];
                    })(n)
                  : [H(n)]));
            var d = [n].concat(i).reduce(function (e, n) {
              return e.concat(
                "auto" === x(n)
                  ? (function (e, t) {
                      void 0 === t && (t = {});
                      var n = t.boundary,
                        o = t.rootBoundary,
                        r = t.padding,
                        i = t.flipVariations,
                        a = t.allowedAutoPlacements,
                        s = void 0 === a ? V : a,
                        f = t.placement.split("-")[1];
                      0 ===
                        (i = (t = f
                          ? i
                            ? N
                            : N.filter(function (e) {
                                return e.split("-")[1] === f;
                              })
                          : C).filter(function (e) {
                          return 0 <= s.indexOf(e);
                        })).length && (i = t);
                      var p = i.reduce(function (t, i) {
                        return (
                          (t[i] = A(e, {
                            placement: i,
                            boundary: n,
                            rootBoundary: o,
                            padding: r,
                          })[x(i)]),
                          t
                        );
                      }, {});
                      return Object.keys(p).sort(function (e, t) {
                        return p[e] - p[t];
                      });
                    })(t, {
                      placement: n,
                      boundary: s,
                      rootBoundary: f,
                      padding: a,
                      flipVariations: l,
                      allowedAutoPlacements: u,
                    })
                  : n
              );
            }, []);
            (n = t.rects.reference), (i = t.rects.popper);
            var m = new Map();
            c = !0;
            for (var h = d[0], v = 0; v < d.length; v++) {
              var g = d[v],
                y = x(g),
                b = "start" === g.split("-")[1],
                w = 0 <= ["top", "bottom"].indexOf(y),
                O = w ? "width" : "height",
                j = A(t, {
                  placement: g,
                  boundary: s,
                  rootBoundary: f,
                  altBoundary: p,
                  padding: a,
                });
              if (
                ((b = w ? (b ? "right" : "left") : b ? "bottom" : "top"),
                n[O] > i[O] && (b = H(b)),
                (O = H(b)),
                (w = []),
                o && w.push(0 >= j[y]),
                r && w.push(0 >= j[b], 0 >= j[O]),
                w.every(function (e) {
                  return e;
                }))
              ) {
                (h = g), (c = !1);
                break;
              }
              m.set(g, w);
            }
            if (c)
              for (
                o = function (e) {
                  var t = d.find(function (t) {
                    if ((t = m.get(t)))
                      return t.slice(0, e).every(function (e) {
                        return e;
                      });
                  });
                  if (t) return (h = t), "break";
                },
                  r = l ? 3 : 1;
                0 < r && "break" !== o(r);
                r--
              );
            t.placement !== h &&
              ((t.modifiersData[e]._skip = !0),
              (t.placement = h),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      },
      ne = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options;
          e = e.name;
          var o = n.mainAxis,
            r = void 0 === o || o,
            i = void 0 !== (o = n.altAxis) && o;
          o = void 0 === (o = n.tether) || o;
          var a = n.tetherOffset,
            s = void 0 === a ? 0 : a,
            f = A(t, {
              boundary: n.boundary,
              rootBoundary: n.rootBoundary,
              padding: n.padding,
              altBoundary: n.altBoundary,
            });
          n = x(t.placement);
          var p = t.placement.split("-")[1],
            c = !p,
            l = L(n);
          (n = "x" === l ? "y" : "x"), (a = t.modifiersData.popperOffsets);
          var u = t.rects.reference,
            m = t.rects.popper,
            h =
              "function" == typeof s
                ? s(Object.assign({}, t.rects, { placement: t.placement }))
                : s;
          if (((s = { x: 0, y: 0 }), a)) {
            if (r || i) {
              var v = "y" === l ? "top" : "left",
                g = "y" === l ? "bottom" : "right",
                b = "y" === l ? "height" : "width",
                w = a[l],
                O = a[l] + f[v],
                j = a[l] - f[g],
                E = o ? -m[b] / 2 : 0,
                D = "start" === p ? u[b] : m[b];
              (p = "start" === p ? -m[b] : -u[b]),
                (m = t.elements.arrow),
                (m = o && m ? d(m) : { width: 0, height: 0 });
              var P = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 };
              (v = P[v]),
                (g = P[g]),
                (m = _(0, U(u[b], m[b]))),
                (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
                (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
                (c = t.elements.arrow && y(t.elements.arrow)),
                (h = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][l]
                  : 0),
                (c =
                  a[l] +
                  D -
                  h -
                  (c ? ("y" === l ? c.clientTop || 0 : c.clientLeft || 0) : 0)),
                (u = a[l] + u - h),
                r &&
                  ((r = o ? U(O, c) : O),
                  (j = o ? _(j, u) : j),
                  (r = _(r, U(w, j))),
                  (a[l] = r),
                  (s[l] = r - w)),
                i &&
                  ((r = (i = a[n]) + f["x" === l ? "top" : "left"]),
                  (f = i - f["x" === l ? "bottom" : "right"]),
                  (r = o ? U(r, c) : r),
                  (o = o ? _(f, u) : f),
                  (o = _(r, U(i, o))),
                  (a[n] = o),
                  (s[n] = o - i));
            }
            t.modifiersData[e] = s;
          }
        },
        requiresIfExists: ["offset"],
      },
      oe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            o = e.name,
            r = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = x(n.placement);
          if (
            ((e = L(s)),
            (s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width"),
            i && a)
          ) {
            r = M(
              "number" !=
                typeof (r =
                  "function" == typeof (r = r.padding)
                    ? r(Object.assign({}, n.rects, { placement: n.placement }))
                    : r)
                ? r
                : k(r, C)
            );
            var f = d(i),
              p = "y" === e ? "top" : "left",
              c = "y" === e ? "bottom" : "right",
              l =
                n.rects.reference[s] +
                n.rects.reference[e] -
                a[e] -
                n.rects.popper[s];
            (a = a[e] - n.rects.reference[e]),
              (a =
                (i = (i = y(i))
                  ? "y" === e
                    ? i.clientHeight || 0
                    : i.clientWidth || 0
                  : 0) /
                  2 -
                f[s] / 2 +
                (l / 2 - a / 2)),
              (s = _(r[p], U(a, i - f[s] - r[c]))),
              (n.modifiersData[o] =
                (((t = {})[e] = s), (t.centerOffset = s - a), t));
          }
        },
        effect: function (e) {
          var t = e.state;
          if (
            null !=
            (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)
          ) {
            if ("string" == typeof e && !(e = t.elements.popper.querySelector(e)))
              return;
            O(t.elements.popper, e) && (t.elements.arrow = e);
          }
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      re = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state;
          e = e.name;
          var n = t.rects.reference,
            o = t.rects.popper,
            r = t.modifiersData.preventOverflow,
            i = A(t, { elementContext: "reference" }),
            a = A(t, { altBoundary: !0 });
          (n = S(i, n)),
            (o = S(a, o, r)),
            (r = q(n)),
            (a = q(o)),
            (t.modifiersData[e] = {
              referenceClippingOffsets: n,
              popperEscapeOffsets: o,
              isReferenceHidden: r,
              hasPopperEscaped: a,
            }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": r,
              "data-popper-escaped": a,
            }));
        },
      },
      ie = B({ defaultModifiers: [Y, G, K, Q] }),
      ae = [Y, G, K, Q, Z, te, ne, oe, re],
      se = B({ defaultModifiers: ae });
    (e.applyStyles = Q),
      (e.arrow = oe),
      (e.computeStyles = K),
      (e.createPopper = se),
      (e.createPopperLite = ie),
      (e.defaultModifiers = ae),
      (e.detectOverflow = A),
      (e.eventListeners = Y),
      (e.flip = te),
      (e.hide = re),
      (e.offset = Z),
      (e.popperGenerator = B),
      (e.popperOffsets = G),
      (e.preventOverflow = ne),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
  !(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          e(t.Popper));
  })(this, function (t) {
    "use strict";
    function e(t) {
      if (t && t.__esModule) return t;
      var e = Object.create(null);
      return (
        t &&
          Object.keys(t).forEach(function (s) {
            if ("default" !== s) {
              var i = Object.getOwnPropertyDescriptor(t, s);
              Object.defineProperty(
                e,
                s,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      },
                    }
              );
            }
          }),
        (e.default = t),
        Object.freeze(e)
      );
    }
    var s = e(t);
    const i = {
        find: (t, e = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) =>
          Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
        parents(t, e) {
          const s = [];
          let i = t.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(e) && s.push(i), (i = i.parentNode);
          return s;
        },
        prev(t, e) {
          let s = t.previousElementSibling;
          for (; s; ) {
            if (s.matches(e)) return [s];
            s = s.previousElementSibling;
          }
          return [];
        },
        next(t, e) {
          let s = t.nextElementSibling;
          for (; s; ) {
            if (s.matches(e)) return [s];
            s = s.nextElementSibling;
          }
          return [];
        },
      },
      n = (t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      },
      o = (t) => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          let s = t.getAttribute("href");
          if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
          s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
            (e = s && "#" !== s ? s.trim() : null);
        }
        return e;
      },
      r = (t) => {
        const e = o(t);
        return e && document.querySelector(e) ? e : null;
      },
      a = (t) => {
        const e = o(t);
        return e ? document.querySelector(e) : null;
      },
      l = (t) => {
        t.dispatchEvent(new Event("transitionend"));
      },
      c = (t) =>
        !(!t || "object" != typeof t) &&
        (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
      h = (t) =>
        c(t)
          ? t.jquery
            ? t[0]
            : t
          : "string" == typeof t && t.length > 0
          ? i.findOne(t)
          : null,
      d = (t, e, s) => {
        Object.keys(s).forEach((i) => {
          const n = s[i],
            o = e[i],
            r =
              o && c(o)
                ? "element"
                : null == (a = o)
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var a;
          if (!new RegExp(n).test(r))
            throw new TypeError(
              `${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
            );
        });
      },
      u = (t) =>
        !(!c(t) || 0 === t.getClientRects().length) &&
        "visible" === getComputedStyle(t).getPropertyValue("visibility"),
      g = (t) =>
        !t ||
        t.nodeType !== Node.ELEMENT_NODE ||
        !!t.classList.contains("disabled") ||
        (void 0 !== t.disabled
          ? t.disabled
          : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
      p = (t) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
          const e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? p(t.parentNode)
          : null;
      },
      f = () => {},
      m = (t) => t.offsetHeight,
      _ = () => {
        const { jQuery: t } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
      },
      b = [],
      v = () => "rtl" === document.documentElement.dir,
      y = (t) => {
        var e;
        (e = () => {
          const e = _();
          if (e) {
            const s = t.NAME,
              i = e.fn[s];
            (e.fn[s] = t.jQueryInterface),
              (e.fn[s].Constructor = t),
              (e.fn[s].noConflict = () => ((e.fn[s] = i), t.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? (b.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  b.forEach((t) => t());
                }),
              b.push(e))
            : e();
      },
      w = (t) => {
        "function" == typeof t && t();
      },
      E = (t, e, s = !0) => {
        if (!s) return void w(t);
        const i =
          ((t) => {
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: s } =
              window.getComputedStyle(t);
            const i = Number.parseFloat(e),
              n = Number.parseFloat(s);
            return i || n
              ? ((e = e.split(",")[0]),
                (s = s.split(",")[0]),
                1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
              : 0;
          })(e) + 5;
        let n = !1;
        const o = ({ target: s }) => {
          s === e && ((n = !0), e.removeEventListener("transitionend", o), w(t));
        };
        e.addEventListener("transitionend", o),
          setTimeout(() => {
            n || l(e);
          }, i);
      },
      A = (t, e, s, i) => {
        let n = t.indexOf(e);
        if (-1 === n) return t[!s && i ? t.length - 1 : 0];
        const o = t.length;
        return (
          (n += s ? 1 : -1),
          i && (n = (n + o) % o),
          t[Math.max(0, Math.min(n, o - 1))]
        );
      },
      T = /[^.]*(?=\..*)\.|.*/,
      C = /\..*/,
      k = /::\d+$/,
      L = {};
    let O = 1;
    const D = { mouseenter: "mouseover", mouseleave: "mouseout" },
      I = /^(mouseenter|mouseleave)/i,
      N = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function S(t, e) {
      return (e && `${e}::${O++}`) || t.uidEvent || O++;
    }
    function x(t) {
      const e = S(t);
      return (t.uidEvent = e), (L[e] = L[e] || {}), L[e];
    }
    function M(t, e, s = null) {
      const i = Object.keys(t);
      for (let n = 0, o = i.length; n < o; n++) {
        const o = t[i[n]];
        if (o.originalHandler === e && o.delegationSelector === s) return o;
      }
      return null;
    }
    function P(t, e, s) {
      const i = "string" == typeof e,
        n = i ? s : e;
      let o = R(t);
      return N.has(o) || (o = t), [i, n, o];
    }
    function j(t, e, s, i, n) {
      if ("string" != typeof e || !t) return;
      if ((s || ((s = i), (i = null)), I.test(e))) {
        const t = (t) =>
          function (e) {
            if (
              !e.relatedTarget ||
              (e.relatedTarget !== e.delegateTarget &&
                !e.delegateTarget.contains(e.relatedTarget))
            )
              return t.call(this, e);
          };
        i ? (i = t(i)) : (s = t(s));
      }
      const [o, r, a] = P(e, s, i),
        l = x(t),
        c = l[a] || (l[a] = {}),
        h = M(c, r, o ? s : null);
      if (h) return void (h.oneOff = h.oneOff && n);
      const d = S(r, e.replace(T, "")),
        u = o
          ? (function (t, e, s) {
              return function i(n) {
                const o = t.querySelectorAll(e);
                for (let { target: r } = n; r && r !== this; r = r.parentNode)
                  for (let a = o.length; a--; )
                    if (o[a] === r)
                      return (
                        (n.delegateTarget = r),
                        i.oneOff && B.off(t, n.type, e, s),
                        s.apply(r, [n])
                      );
                return null;
              };
            })(t, s, i)
          : (function (t, e) {
              return function s(i) {
                return (
                  (i.delegateTarget = t),
                  s.oneOff && B.off(t, i.type, e),
                  e.apply(t, [i])
                );
              };
            })(t, s);
      (u.delegationSelector = o ? s : null),
        (u.originalHandler = r),
        (u.oneOff = n),
        (u.uidEvent = d),
        (c[d] = u),
        t.addEventListener(a, u, o);
    }
    function H(t, e, s, i, n) {
      const o = M(e[s], i, n);
      o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
    }
    function R(t) {
      return (t = t.replace(C, "")), D[t] || t;
    }
    const B = {
        on(t, e, s, i) {
          j(t, e, s, i, !1);
        },
        one(t, e, s, i) {
          j(t, e, s, i, !0);
        },
        off(t, e, s, i) {
          if ("string" != typeof e || !t) return;
          const [n, o, r] = P(e, s, i),
            a = r !== e,
            l = x(t),
            c = e.startsWith(".");
          if (void 0 !== o) {
            if (!l || !l[r]) return;
            return void H(t, l, r, o, n ? s : null);
          }
          c &&
            Object.keys(l).forEach((s) => {
              !(function (t, e, s, i) {
                const n = e[s] || {};
                Object.keys(n).forEach((o) => {
                  if (o.includes(i)) {
                    const i = n[o];
                    H(t, e, s, i.originalHandler, i.delegationSelector);
                  }
                });
              })(t, l, s, e.slice(1));
            });
          const h = l[r] || {};
          Object.keys(h).forEach((s) => {
            const i = s.replace(k, "");
            if (!a || e.includes(i)) {
              const e = h[s];
              H(t, l, r, e.originalHandler, e.delegationSelector);
            }
          });
        },
        trigger(t, e, s) {
          if ("string" != typeof e || !t) return null;
          const i = _(),
            n = R(e),
            o = e !== n,
            r = N.has(n);
          let a,
            l = !0,
            c = !0,
            h = !1,
            d = null;
          return (
            o &&
              i &&
              ((a = i.Event(e, s)),
              i(t).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (h = a.isDefaultPrevented())),
            r
              ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
              : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
            void 0 !== s &&
              Object.keys(s).forEach((t) => {
                Object.defineProperty(d, t, { get: () => s[t] });
              }),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
          );
        },
      },
      $ = new Map();
    var W = {
      set(t, e, s) {
        $.has(t) || $.set(t, new Map());
        const i = $.get(t);
        i.has(e) || 0 === i.size
          ? i.set(e, s)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (t, e) => ($.has(t) && $.get(t).get(e)) || null,
      remove(t, e) {
        if (!$.has(t)) return;
        const s = $.get(t);
        s.delete(e), 0 === s.size && $.delete(t);
      },
    };
    class q {
      constructor(t) {
        (t = h(t)) &&
          ((this._element = t),
          W.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        W.remove(this._element, this.constructor.DATA_KEY),
          B.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((t) => {
            this[t] = null;
          });
      }
      _queueCallback(t, e, s = !0) {
        E(t, e, s);
      }
      static getInstance(t) {
        return W.get(t, this.DATA_KEY);
      }
      static getOrCreateInstance(t, e = {}) {
        return (
          this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        );
      }
      static get VERSION() {
        return "5.0.2";
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      static get DATA_KEY() {
        return "bs." + this.NAME;
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY;
      }
    }
    class z extends q {
      static get NAME() {
        return "alert";
      }
      close(t) {
        const e = t ? this._getRootElement(t) : this._element,
          s = this._triggerCloseEvent(e);
        null === s || s.defaultPrevented || this._removeElement(e);
      }
      _getRootElement(t) {
        return a(t) || t.closest(".alert");
      }
      _triggerCloseEvent(t) {
        return B.trigger(t, "close.bs.alert");
      }
      _removeElement(t) {
        t.classList.remove("show");
        const e = t.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(t), t, e);
      }
      _destroyElement(t) {
        t.remove(), B.trigger(t, "closed.bs.alert");
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = z.getOrCreateInstance(this);
          "close" === t && e[t](this);
        });
      }
      static handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }
    B.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      z.handleDismiss(new z())
    ),
      y(z);
    class F extends q {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = F.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }
    function U(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          (t === Number(t).toString()
            ? Number(t)
            : "" === t || "null" === t
            ? null
            : t))
      );
    }
    function K(t) {
      return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
    }
    B.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (t) => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        F.getOrCreateInstance(e).toggle();
      }
    ),
      y(F);
    const V = {
        setDataAttribute(t, e, s) {
          t.setAttribute("data-bs-" + K(e), s);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute("data-bs-" + K(e));
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {};
          return (
            Object.keys(t.dataset)
              .filter((t) => t.startsWith("bs"))
              .forEach((s) => {
                let i = s.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (e[i] = U(t.dataset[s]));
              }),
            e
          );
        },
        getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
        offset(t) {
          const e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft,
          };
        },
        position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
      },
      Q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      X = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      Y = "next",
      G = "prev",
      Z = "left",
      J = "right",
      tt = { ArrowLeft: J, ArrowRight: Z };
    class et extends q {
      constructor(t, e) {
        super(t),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._indicatorsElement = i.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return Q;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Y);
      }
      nextWhenVisible() {
        !document.hidden && u(this._element) && this.next();
      }
      prev() {
        this._slide(G);
      }
      pause(t) {
        t || (this._isPaused = !0),
          i.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
            (l(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(t) {
        t || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState ? this.nextWhenVisible : this.next).bind(
                this
              ),
              this._config.interval
            )));
      }
      to(t) {
        this._activeElement = i.findOne(".active.carousel-item", this._element);
        const e = this._getItemIndex(this._activeElement);
        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding)
          return void B.one(this._element, "slid.bs.carousel", () => this.to(t));
        if (e === t) return this.pause(), void this.cycle();
        const s = t > e ? Y : G;
        this._slide(s, this._items[t]);
      }
      _getConfig(t) {
        return (
          (t = {
            ...Q,
            ...V.getDataAttributes(this._element),
            ...("object" == typeof t ? t : {}),
          }),
          d("carousel", t, X),
          t
        );
      }
      _handleSwipe() {
        const t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        const e = t / this.touchDeltaX;
        (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
      }
      _addEventListeners() {
        this._config.keyboard &&
          B.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
          "hover" === this._config.pause &&
            (B.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
            B.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const t = (t) => {
            !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType)
              ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
              : (this.touchStartX = t.clientX);
          },
          e = (t) => {
            this.touchDeltaX =
              t.touches && t.touches.length > 1
                ? 0
                : t.touches[0].clientX - this.touchStartX;
          },
          s = (t) => {
            !this._pointerEvent ||
              ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
              (this.touchDeltaX = t.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (t) => this.cycle(t),
                  500 + this._config.interval
                )));
          };
        i.find(".carousel-item img", this._element).forEach((t) => {
          B.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
        }),
          this._pointerEvent
            ? (B.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
              B.on(this._element, "pointerup.bs.carousel", (t) => s(t)),
              this._element.classList.add("pointer-event"))
            : (B.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
              B.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
              B.on(this._element, "touchend.bs.carousel", (t) => s(t)));
      }
      _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        const e = tt[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
      _getItemIndex(t) {
        return (
          (this._items =
            t && t.parentNode ? i.find(".carousel-item", t.parentNode) : []),
          this._items.indexOf(t)
        );
      }
      _getItemByOrder(t, e) {
        const s = t === Y;
        return A(this._items, e, s, this._config.wrap);
      }
      _triggerSlideEvent(t, e) {
        const s = this._getItemIndex(t),
          n = this._getItemIndex(
            i.findOne(".active.carousel-item", this._element)
          );
        return B.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: s,
        });
      }
      _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          const e = i.findOne(".active", this._indicatorsElement);
          e.classList.remove("active"), e.removeAttribute("aria-current");
          const s = i.find("[data-bs-target]", this._indicatorsElement);
          for (let e = 0; e < s.length; e++)
            if (
              Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(t)
            ) {
              s[e].classList.add("active"),
                s[e].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const t =
          this._activeElement ||
          i.findOne(".active.carousel-item", this._element);
        if (!t) return;
        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = e))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(t, e) {
        const s = this._directionToOrder(t),
          n = i.findOne(".active.carousel-item", this._element),
          o = this._getItemIndex(n),
          r = e || this._getItemByOrder(s, n),
          a = this._getItemIndex(r),
          l = Boolean(this._interval),
          c = s === Y,
          h = c ? "carousel-item-start" : "carousel-item-end",
          d = c ? "carousel-item-next" : "carousel-item-prev",
          u = this._orderToDirection(s);
        if (r && r.classList.contains("active"))
          return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!n || !r) return;
        (this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(r),
          (this._activeElement = r);
        const g = () => {
          B.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a,
          });
        };
        if (this._element.classList.contains("slide")) {
          r.classList.add(d), m(r), n.classList.add(h), r.classList.add(h);
          const t = () => {
            r.classList.remove(h, d),
              r.classList.add("active"),
              n.classList.remove("active", d, h),
              (this._isSliding = !1),
              setTimeout(g, 0);
          };
          this._queueCallback(t, n, !0);
        } else n.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), g();
        l && this.cycle();
      }
      _directionToOrder(t) {
        return [J, Z].includes(t)
          ? v()
            ? t === Z
              ? G
              : Y
            : t === Z
            ? Y
            : G
          : t;
      }
      _orderToDirection(t) {
        return [Y, G].includes(t)
          ? v()
            ? t === G
              ? Z
              : J
            : t === G
            ? J
            : Z
          : t;
      }
      static carouselInterface(t, e) {
        const s = et.getOrCreateInstance(t, e);
        let { _config: i } = s;
        "object" == typeof e && (i = { ...i, ...e });
        const n = "string" == typeof e ? e : i.slide;
        if ("number" == typeof e) s.to(e);
        else if ("string" == typeof n) {
          if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
          s[n]();
        } else i.interval && i.ride && (s.pause(), s.cycle());
      }
      static jQueryInterface(t) {
        return this.each(function () {
          et.carouselInterface(this, t);
        });
      }
      static dataApiClickHandler(t) {
        const e = a(this);
        if (!e || !e.classList.contains("carousel")) return;
        const s = { ...V.getDataAttributes(e), ...V.getDataAttributes(this) },
          i = this.getAttribute("data-bs-slide-to");
        i && (s.interval = !1),
          et.carouselInterface(e, s),
          i && et.getInstance(e).to(i),
          t.preventDefault();
      }
    }
    B.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      et.dataApiClickHandler
    ),
      B.on(window, "load.bs.carousel.data-api", () => {
        const t = i.find('[data-bs-ride="carousel"]');
        for (let e = 0, s = t.length; e < s; e++)
          et.carouselInterface(t[e], et.getInstance(t[e]));
      }),
      y(et);
    const st = { toggle: !0, parent: "" },
      it = { toggle: "boolean", parent: "(string|element)" };
    class nt extends q {
      constructor(t, e) {
        super(t),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(e)),
          (this._triggerArray = i.find(
            `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
          ));
        const s = i.find('[data-bs-toggle="collapse"]');
        for (let t = 0, e = s.length; t < e; t++) {
          const e = s[t],
            n = r(e),
            o = i.find(n).filter((t) => t === this._element);
          null !== n &&
            o.length &&
            ((this._selector = n), this._triggerArray.push(e));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return st;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._element.classList.contains("show"))
          return;
        let t, e;
        this._parent &&
          ((t = i
            .find(".show, .collapsing", this._parent)
            .filter((t) =>
              "string" == typeof this._config.parent
                ? t.getAttribute("data-bs-parent") === this._config.parent
                : t.classList.contains("collapse")
            )),
          0 === t.length && (t = null));
        const s = i.findOne(this._selector);
        if (t) {
          const i = t.find((t) => s !== t);
          if (((e = i ? nt.getInstance(i) : null), e && e._isTransitioning))
            return;
        }
        if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t &&
          t.forEach((t) => {
            s !== t && nt.collapseInterface(t, "hide"),
              e || W.set(t, "bs.collapse", null);
          });
        const n = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[n] = 0),
          this._triggerArray.length &&
            this._triggerArray.forEach((t) => {
              t.classList.remove("collapsed"),
                t.setAttribute("aria-expanded", !0);
            }),
          this.setTransitioning(!0);
        const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
        this._queueCallback(
          () => {
            this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[n] = ""),
              this.setTransitioning(!1),
              B.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[n] = this._element[o] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._element.classList.contains("show"))
          return;
        if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
        const t = this._getDimension();
        (this._element.style[t] =
          this._element.getBoundingClientRect()[t] + "px"),
          m(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const e = this._triggerArray.length;
        if (e > 0)
          for (let t = 0; t < e; t++) {
            const e = this._triggerArray[t],
              s = a(e);
            s &&
              !s.classList.contains("show") &&
              (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
          }
        this.setTransitioning(!0),
          (this._element.style[t] = ""),
          this._queueCallback(
            () => {
              this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                B.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      setTransitioning(t) {
        this._isTransitioning = t;
      }
      _getConfig(t) {
        return (
          ((t = { ...st, ...t }).toggle = Boolean(t.toggle)),
          d("collapse", t, it),
          t
        );
      }
      _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
      _getParent() {
        let { parent: t } = this._config;
        t = h(t);
        const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
        return (
          i.find(e, t).forEach((t) => {
            const e = a(t);
            this._addAriaAndCollapsedClass(e, [t]);
          }),
          t
        );
      }
      _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        const s = t.classList.contains("show");
        e.forEach((t) => {
          s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
            t.setAttribute("aria-expanded", s);
        });
      }
      static collapseInterface(t, e) {
        let s = nt.getInstance(t);
        const i = {
          ...st,
          ...V.getDataAttributes(t),
          ...("object" == typeof e && e ? e : {}),
        };
        if (
          (!s &&
            i.toggle &&
            "string" == typeof e &&
            /show|hide/.test(e) &&
            (i.toggle = !1),
          s || (s = new nt(t, i)),
          "string" == typeof e)
        ) {
          if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
          s[e]();
        }
      }
      static jQueryInterface(t) {
        return this.each(function () {
          nt.collapseInterface(this, t);
        });
      }
    }
    B.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        const e = V.getDataAttributes(this),
          s = r(this);
        i.find(s).forEach((t) => {
          const s = nt.getInstance(t);
          let i;
          s
            ? (null === s._parent &&
                "string" == typeof e.parent &&
                ((s._config.parent = e.parent), (s._parent = s._getParent())),
              (i = "toggle"))
            : (i = e),
            nt.collapseInterface(t, i);
        });
      }
    ),
      y(nt);
    const ot = new RegExp("ArrowUp|ArrowDown|Escape"),
      rt = v() ? "top-end" : "top-start",
      at = v() ? "top-start" : "top-end",
      lt = v() ? "bottom-end" : "bottom-start",
      ct = v() ? "bottom-start" : "bottom-end",
      ht = v() ? "left-start" : "right-start",
      dt = v() ? "right-start" : "left-start",
      ut = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
      },
      gt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
      };
    class pt extends q {
      constructor(t, e) {
        super(t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      static get Default() {
        return ut;
      }
      static get DefaultType() {
        return gt;
      }
      static get NAME() {
        return "dropdown";
      }
      toggle() {
        g(this._element) ||
          (this._element.classList.contains("show") ? this.hide() : this.show());
      }
      show() {
        if (g(this._element) || this._menu.classList.contains("show")) return;
        const t = pt.getParentFromElement(this._element),
          e = { relatedTarget: this._element };
        if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === s)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let e = this._element;
            "parent" === this._config.reference
              ? (e = t)
              : c(this._config.reference)
              ? (e = h(this._config.reference))
              : "object" == typeof this._config.reference &&
                (e = this._config.reference);
            const i = this._getPopperConfig(),
              n = i.modifiers.find(
                (t) => "applyStyles" === t.name && !1 === t.enabled
              );
            (this._popper = s.createPopper(e, this._menu, i)),
              n && V.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement &&
            !t.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((t) => B.on(t, "mouseover", f)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            B.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
      hide() {
        if (g(this._element) || !this._menu.classList.contains("show")) return;
        const t = { relatedTarget: this._element };
        this._completeHide(t);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _addEventListeners() {
        B.on(this._element, "click.bs.dropdown", (t) => {
          t.preventDefault(), this.toggle();
        });
      }
      _completeHide(t) {
        B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
          ("ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((t) => B.off(t, "mouseover", f)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove("show"),
          this._element.classList.remove("show"),
          this._element.setAttribute("aria-expanded", "false"),
          V.removeDataAttribute(this._menu, "popper"),
          B.trigger(this._element, "hidden.bs.dropdown", t));
      }
      _getConfig(t) {
        if (
          ((t = {
            ...this.constructor.Default,
            ...V.getDataAttributes(this._element),
            ...t,
          }),
          d("dropdown", t, this.constructor.DefaultType),
          "object" == typeof t.reference &&
            !c(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return t;
      }
      _getMenuElement() {
        return i.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ht;
        if (t.classList.contains("dropstart")) return dt;
        const e =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? (e ? at : rt) : e ? ct : lt;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: t } = this._config;
        return "string" == typeof t
          ? t.split(",").map((t) => Number.parseInt(t, 10))
          : "function" == typeof t
          ? (e) => t(e, this._element)
          : t;
      }
      _getPopperConfig() {
        const t = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          "static" === this._config.display &&
            (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...t,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(t)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: t, target: e }) {
        const s = i
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter(u);
        s.length && A(s, e, "ArrowDown" === t, !s.includes(e)).focus();
      }
      static dropdownInterface(t, e) {
        const s = pt.getOrCreateInstance(t, e);
        if ("string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
          s[e]();
        }
      }
      static jQueryInterface(t) {
        return this.each(function () {
          pt.dropdownInterface(this, t);
        });
      }
      static clearMenus(t) {
        if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
          return;
        const e = i.find('[data-bs-toggle="dropdown"]');
        for (let s = 0, i = e.length; s < i; s++) {
          const i = pt.getInstance(e[s]);
          if (!i || !1 === i._config.autoClose) continue;
          if (!i._element.classList.contains("show")) continue;
          const n = { relatedTarget: i._element };
          if (t) {
            const e = t.composedPath(),
              s = e.includes(i._menu);
            if (
              e.includes(i._element) ||
              ("inside" === i._config.autoClose && !s) ||
              ("outside" === i._config.autoClose && s)
            )
              continue;
            if (
              i._menu.contains(t.target) &&
              (("keyup" === t.type && "Tab" === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue;
            "click" === t.type && (n.clickEvent = t);
          }
          i._completeHide(n);
        }
      }
      static getParentFromElement(t) {
        return a(t) || t.parentNode;
      }
      static dataApiKeydownHandler(t) {
        if (
          /input|textarea/i.test(t.target.tagName)
            ? "Space" === t.key ||
              ("Escape" !== t.key &&
                (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                  t.target.closest(".dropdown-menu")))
            : !ot.test(t.key)
        )
          return;
        const e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if ((t.preventDefault(), t.stopPropagation(), g(this))) return;
        const s = () =>
          this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
        return "Escape" === t.key
          ? (s().focus(), void pt.clearMenus())
          : "ArrowUp" === t.key || "ArrowDown" === t.key
          ? (e || s().click(), void pt.getInstance(s())._selectMenuItem(t))
          : void ((e && "Space" !== t.key) || pt.clearMenus());
      }
    }
    B.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      pt.dataApiKeydownHandler
    ),
      B.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        pt.dataApiKeydownHandler
      ),
      B.on(document, "click.bs.dropdown.data-api", pt.clearMenus),
      B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus),
      B.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (t) {
          t.preventDefault(), pt.dropdownInterface(this);
        }
      ),
      y(pt);
    class ft {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
      hide() {
        const t = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
          this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (e) => e + t
          ),
          this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(t, e, s) {
        const i = this.getWidth();
        this._applyManipulationCallback(t, (t) => {
          if (t !== this._element && window.innerWidth > t.clientWidth + i)
            return;
          this._saveInitialAttribute(t, e);
          const n = window.getComputedStyle(t)[e];
          t.style[e] = s(Number.parseFloat(n)) + "px";
        });
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
          this._resetElementAttributes(".sticky-top", "marginRight");
      }
      _saveInitialAttribute(t, e) {
        const s = t.style[e];
        s && V.setDataAttribute(t, e, s);
      }
      _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, (t) => {
          const s = V.getDataAttribute(t, e);
          void 0 === s
            ? t.style.removeProperty(e)
            : (V.removeDataAttribute(t, e), (t.style[e] = s));
        });
      }
      _applyManipulationCallback(t, e) {
        c(t) ? e(t) : i.find(t, this._element).forEach(e);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const mt = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
      },
      _t = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
      };
    class bt {
      constructor(t) {
        (this._config = this._getConfig(t)),
          (this._isAppended = !1),
          (this._element = null);
      }
      show(t) {
        this._config.isVisible
          ? (this._append(),
            this._config.isAnimated && m(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation(() => {
              w(t);
            }))
          : w(t);
      }
      hide(t) {
        this._config.isVisible
          ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(() => {
              this.dispose(), w(t);
            }))
          : w(t);
      }
      _getElement() {
        if (!this._element) {
          const t = document.createElement("div");
          (t.className = "modal-backdrop"),
            this._config.isAnimated && t.classList.add("fade"),
            (this._element = t);
        }
        return this._element;
      }
      _getConfig(t) {
        return (
          ((t = { ...mt, ...("object" == typeof t ? t : {}) }).rootElement = h(
            t.rootElement
          )),
          d("backdrop", t, _t),
          t
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.appendChild(this._getElement()),
          B.on(this._getElement(), "mousedown.bs.backdrop", () => {
            w(this._config.clickCallback);
          }),
          (this._isAppended = !0));
      }
      dispose() {
        this._isAppended &&
          (B.off(this._element, "mousedown.bs.backdrop"),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _emulateAnimation(t) {
        E(t, this._getElement(), this._config.isAnimated);
      }
    }
    const vt = { backdrop: !0, keyboard: !0, focus: !0 },
      yt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      };
    class wt extends q {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._dialog = i.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._isShown = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new ft());
      }
      static get Default() {
        return vt;
      }
      static get NAME() {
        return "modal";
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
      show(t) {
        this._isShown ||
          this._isTransitioning ||
          B.trigger(this._element, "show.bs.modal", { relatedTarget: t })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add("modal-open"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          B.on(
            this._element,
            "click.dismiss.bs.modal",
            '[data-bs-dismiss="modal"]',
            (t) => this.hide(t)
          ),
          B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            B.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
              t.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(t)));
      }
      hide(t) {
        if (
          (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
          !this._isShown || this._isTransitioning)
        )
          return;
        if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const e = this._isAnimated();
        e && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          B.off(document, "focusin.bs.modal"),
          this._element.classList.remove("show"),
          B.off(this._element, "click.dismiss.bs.modal"),
          B.off(this._dialog, "mousedown.dismiss.bs.modal"),
          this._queueCallback(() => this._hideModal(), this._element, e);
      }
      dispose() {
        [window, this._dialog].forEach((t) => B.off(t, ".bs.modal")),
          this._backdrop.dispose(),
          super.dispose(),
          B.off(document, "focusin.bs.modal");
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new bt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _getConfig(t) {
        return (
          (t = {
            ...vt,
            ...V.getDataAttributes(this._element),
            ...("object" == typeof t ? t : {}),
          }),
          d("modal", t, yt),
          t
        );
      }
      _showElement(t) {
        const e = this._isAnimated(),
          s = i.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          s && (s.scrollTop = 0),
          e && m(this._element),
          this._element.classList.add("show"),
          this._config.focus && this._enforceFocus(),
          this._queueCallback(
            () => {
              this._config.focus && this._element.focus(),
                (this._isTransitioning = !1),
                B.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
            },
            this._dialog,
            e
          );
      }
      _enforceFocus() {
        B.off(document, "focusin.bs.modal"),
          B.on(document, "focusin.bs.modal", (t) => {
            document === t.target ||
              this._element === t.target ||
              this._element.contains(t.target) ||
              this._element.focus();
          });
      }
      _setEscapeEvent() {
        this._isShown
          ? B.on(this._element, "keydown.dismiss.bs.modal", (t) => {
              this._config.keyboard && "Escape" === t.key
                ? (t.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== t.key ||
                  this._triggerBackdropTransition();
            })
          : B.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? B.on(window, "resize.bs.modal", () => this._adjustDialog())
          : B.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              B.trigger(this._element, "hidden.bs.modal");
          });
      }
      _showBackdrop(t) {
        B.on(this._element, "click.dismiss.bs.modal", (t) => {
          this._ignoreBackdropClick
            ? (this._ignoreBackdropClick = !1)
            : t.target === t.currentTarget &&
              (!0 === this._config.backdrop
                ? this.hide()
                : "static" === this._config.backdrop &&
                  this._triggerBackdropTransition());
        }),
          this._backdrop.show(t);
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const { classList: t, scrollHeight: e, style: s } = this._element,
          i = e > document.documentElement.clientHeight;
        (!i && "hidden" === s.overflowY) ||
          t.contains("modal-static") ||
          (i || (s.overflowY = "hidden"),
          t.add("modal-static"),
          this._queueCallback(() => {
            t.remove("modal-static"),
              i ||
                this._queueCallback(() => {
                  s.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const t =
            this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          s = e > 0;
        ((!s && t && !v()) || (s && !t && v())) &&
          (this._element.style.paddingLeft = e + "px"),
          ((s && !t && !v()) || (!s && t && v())) &&
            (this._element.style.paddingRight = e + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(t, e) {
        return this.each(function () {
          const s = wt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
            s[t](e);
          }
        });
      }
    }
    B.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (t) {
        const e = a(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          B.one(e, "show.bs.modal", (t) => {
            t.defaultPrevented ||
              B.one(e, "hidden.bs.modal", () => {
                u(this) && this.focus();
              });
          }),
          wt.getOrCreateInstance(e).toggle(this);
      }
    ),
      y(wt);
    const Et = { backdrop: !0, keyboard: !0, scroll: !1 },
      At = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class Tt extends q {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          this._addEventListeners();
      }
      static get NAME() {
        return "offcanvas";
      }
      static get Default() {
        return Et;
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
      show(t) {
        this._isShown ||
          B.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll ||
            (new ft().hide(), this._enforceFocusOnElement(this._element)),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          this._queueCallback(
            () => {
              B.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (B.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  (this._element.style.visibility = "hidden"),
                  this._config.scroll || new ft().reset(),
                  B.trigger(this._element, "hidden.bs.offcanvas");
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(),
          super.dispose(),
          B.off(document, "focusin.bs.offcanvas");
      }
      _getConfig(t) {
        return (
          (t = {
            ...Et,
            ...V.getDataAttributes(this._element),
            ...("object" == typeof t ? t : {}),
          }),
          d("offcanvas", t, At),
          t
        );
      }
      _initializeBackDrop() {
        return new bt({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide(),
        });
      }
      _enforceFocusOnElement(t) {
        B.off(document, "focusin.bs.offcanvas"),
          B.on(document, "focusin.bs.offcanvas", (e) => {
            document === e.target ||
              t === e.target ||
              t.contains(e.target) ||
              t.focus();
          }),
          t.focus();
      }
      _addEventListeners() {
        B.on(
          this._element,
          "click.dismiss.bs.offcanvas",
          '[data-bs-dismiss="offcanvas"]',
          () => this.hide()
        ),
          B.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
            this._config.keyboard && "Escape" === t.key && this.hide();
          });
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = Tt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    B.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (t) {
        const e = a(this);
        if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)))
          return;
        B.one(e, "hidden.bs.offcanvas", () => {
          u(this) && this.focus();
        });
        const s = i.findOne(".offcanvas.show");
        s && s !== e && Tt.getInstance(s).hide(),
          Tt.getOrCreateInstance(e).toggle(this);
      }
    ),
      B.on(window, "load.bs.offcanvas.data-api", () =>
        i.find(".offcanvas.show").forEach((t) => Tt.getOrCreateInstance(t).show())
      ),
      y(Tt);
    const Ct = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Lt =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ot = (t, e) => {
        const s = t.nodeName.toLowerCase();
        if (e.includes(s))
          return (
            !Ct.has(s) || Boolean(kt.test(t.nodeValue) || Lt.test(t.nodeValue))
          );
        const i = e.filter((t) => t instanceof RegExp);
        for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
        return !1;
      };
    function Dt(t, e, s) {
      if (!t.length) return t;
      if (s && "function" == typeof s) return s(t);
      const i = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = [].concat(...i.body.querySelectorAll("*"));
      for (let t = 0, s = o.length; t < s; t++) {
        const s = o[t],
          i = s.nodeName.toLowerCase();
        if (!n.includes(i)) {
          s.remove();
          continue;
        }
        const r = [].concat(...s.attributes),
          a = [].concat(e["*"] || [], e[i] || []);
        r.forEach((t) => {
          Ot(t, a) || s.removeAttribute(t.nodeName);
        });
      }
      return i.body.innerHTML;
    }
    const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Nt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      St = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      xt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: v() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: v() ? "right" : "left",
      },
      Mt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      Pt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      };
    class jt extends q {
      constructor(t, e) {
        if (void 0 === s)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return Mt;
      }
      static get NAME() {
        return "tooltip";
      }
      static get Event() {
        return Pt;
      }
      static get DefaultType() {
        return St;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(t) {
        if (this._isEnabled)
          if (t) {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger.click = !e._activeTrigger.click),
              e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          B.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip && this.tip.remove(),
          this._popper && this._popper.destroy(),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const t = B.trigger(this._element, this.constructor.Event.SHOW),
          e = p(this._element),
          i =
            null === e
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        const o = this.getTipElement(),
          r = n(this.constructor.NAME);
        o.setAttribute("id", r),
          this._element.setAttribute("aria-describedby", r),
          this.setContent(),
          this._config.animation && o.classList.add("fade");
        const a =
            "function" == typeof this._config.placement
              ? this._config.placement.call(this, o, this._element)
              : this._config.placement,
          l = this._getAttachment(a);
        this._addAttachmentClass(l);
        const { container: c } = this._config;
        W.set(o, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (c.appendChild(o),
            B.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = s.createPopper(
                this._element,
                o,
                this._getPopperConfig(l)
              )),
          o.classList.add("show");
        const h =
          "function" == typeof this._config.customClass
            ? this._config.customClass()
            : this._config.customClass;
        h && o.classList.add(...h.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((t) => {
              B.on(t, "mouseover", f);
            });
        const d = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            const t = this._hoverState;
            (this._hoverState = null),
              B.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === t && this._leave(null, this);
          },
          this.tip,
          d
        );
      }
      hide() {
        if (!this._popper) return;
        const t = this.getTipElement();
        if (
          B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
        )
          return;
        t.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((t) => B.off(t, "mouseover", f)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1);
        const e = this.tip.classList.contains("fade");
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState && t.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              B.trigger(this._element, this.constructor.Event.HIDDEN),
              this._popper && (this._popper.destroy(), (this._popper = null)));
          },
          this.tip,
          e
        ),
          (this._hoverState = "");
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const t = document.createElement("div");
        return (
          (t.innerHTML = this._config.template),
          (this.tip = t.children[0]),
          this.tip
        );
      }
      setContent() {
        const t = this.getTipElement();
        this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()),
          t.classList.remove("fade", "show");
      }
      setElementContent(t, e) {
        if (null !== t)
          return c(e)
            ? ((e = h(e)),
              void (this._config.html
                ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
                : (t.textContent = e.textContent)))
            : void (this._config.html
                ? (this._config.sanitize &&
                    (e = Dt(e, this._config.allowList, this._config.sanitizeFn)),
                  (t.innerHTML = e))
                : (t.textContent = e));
      }
      getTitle() {
        let t = this._element.getAttribute("data-bs-original-title");
        return (
          t ||
            (t =
              "function" == typeof this._config.title
                ? this._config.title.call(this._element)
                : this._config.title),
          t
        );
      }
      updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
      _initializeOnDelegatedTarget(t, e) {
        const s = this.constructor.DATA_KEY;
        return (
          (e = e || W.get(t.delegateTarget, s)) ||
            ((e = new this.constructor(
              t.delegateTarget,
              this._getDelegateConfig()
            )),
            W.set(t.delegateTarget, s, e)),
          e
        );
      }
      _getOffset() {
        const { offset: t } = this._config;
        return "string" == typeof t
          ? t.split(",").map((t) => Number.parseInt(t, 10))
          : "function" == typeof t
          ? (e) => t(e, this._element)
          : t;
      }
      _getPopperConfig(t) {
        const e = {
          placement: t,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (t) => this._handlePopperPlacementChange(t),
            },
          ],
          onFirstUpdate: (t) => {
            t.options.placement !== t.placement &&
              this._handlePopperPlacementChange(t);
          },
        };
        return {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        };
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add(
          "bs-tooltip-" + this.updateAttachment(t)
        );
      }
      _getAttachment(t) {
        return xt[t.toUpperCase()];
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach((t) => {
          if ("click" === t)
            B.on(
              this._element,
              this.constructor.Event.CLICK,
              this._config.selector,
              (t) => this.toggle(t)
            );
          else if ("manual" !== t) {
            const e =
                "hover" === t
                  ? this.constructor.Event.MOUSEENTER
                  : this.constructor.Event.FOCUSIN,
              s =
                "hover" === t
                  ? this.constructor.Event.MOUSELEAVE
                  : this.constructor.Event.FOCUSOUT;
            B.on(this._element, e, this._config.selector, (t) => this._enter(t)),
              B.on(this._element, s, this._config.selector, (t) =>
                this._leave(t)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          B.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this._config.selector
            ? (this._config = {
                ...this._config,
                trigger: "manual",
                selector: "",
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const t = this._element.getAttribute("title"),
          e = typeof this._element.getAttribute("data-bs-original-title");
        (t || "string" !== e) &&
          (this._element.setAttribute("data-bs-original-title", t || ""),
          !t ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", t),
          this._element.setAttribute("title", ""));
      }
      _enter(t, e) {
        (e = this._initializeOnDelegatedTarget(t, e)),
          t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
          e.getTipElement().classList.contains("show") || "show" === e._hoverState
            ? (e._hoverState = "show")
            : (clearTimeout(e._timeout),
              (e._hoverState = "show"),
              e._config.delay && e._config.delay.show
                ? (e._timeout = setTimeout(() => {
                    "show" === e._hoverState && e.show();
                  }, e._config.delay.show))
                : e.show());
      }
      _leave(t, e) {
        (e = this._initializeOnDelegatedTarget(t, e)),
          t &&
            (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
              e._element.contains(t.relatedTarget)),
          e._isWithActiveTrigger() ||
            (clearTimeout(e._timeout),
            (e._hoverState = "out"),
            e._config.delay && e._config.delay.hide
              ? (e._timeout = setTimeout(() => {
                  "out" === e._hoverState && e.hide();
                }, e._config.delay.hide))
              : e.hide());
      }
      _isWithActiveTrigger() {
        for (const t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1;
      }
      _getConfig(t) {
        const e = V.getDataAttributes(this._element);
        return (
          Object.keys(e).forEach((t) => {
            Nt.has(t) && delete e[t];
          }),
          ((t = {
            ...this.constructor.Default,
            ...e,
            ...("object" == typeof t && t ? t : {}),
          }).container = !1 === t.container ? document.body : h(t.container)),
          "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          "number" == typeof t.title && (t.title = t.title.toString()),
          "number" == typeof t.content && (t.content = t.content.toString()),
          d("tooltip", t, this.constructor.DefaultType),
          t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)),
          t
        );
      }
      _getDelegateConfig() {
        const t = {};
        if (this._config)
          for (const e in this._config)
            this.constructor.Default[e] !== this._config[e] &&
              (t[e] = this._config[e]);
        return t;
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(It);
        null !== e &&
          e.length > 0 &&
          e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
      }
      _handlePopperPlacementChange(t) {
        const { state: e } = t;
        e &&
          ((this.tip = e.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(e.placement)));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = jt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    y(jt);
    const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Rt = {
        ...jt.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      },
      Bt = { ...jt.DefaultType, content: "(string|element|function)" },
      $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      };
    class Wt extends jt {
      static get Default() {
        return Rt;
      }
      static get NAME() {
        return "popover";
      }
      static get Event() {
        return $t;
      }
      static get DefaultType() {
        return Bt;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      getTipElement() {
        return (
          this.tip ||
            ((this.tip = super.getTipElement()),
            this.getTitle() || i.findOne(".popover-header", this.tip).remove(),
            this._getContent() || i.findOne(".popover-body", this.tip).remove()),
          this.tip
        );
      }
      setContent() {
        const t = this.getTipElement();
        this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
        let e = this._getContent();
        "function" == typeof e && (e = e.call(this._element)),
          this.setElementContent(i.findOne(".popover-body", t), e),
          t.classList.remove("fade", "show");
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add(
          "bs-popover-" + this.updateAttachment(t)
        );
      }
      _getContent() {
        return (
          this._element.getAttribute("data-bs-content") || this._config.content
        );
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(Ht);
        null !== e &&
          e.length > 0 &&
          e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = Wt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    y(Wt);
    const qt = { offset: 10, method: "auto", target: "" },
      zt = { offset: "number", method: "string", target: "(string|element)" };
    class Ft extends q {
      constructor(t, e) {
        super(t),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(e)),
          (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return qt;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        const t =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          e = "auto" === this._config.method ? t : this._config.method,
          s = "position" === e ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          i
            .find(this._selector)
            .map((t) => {
              const n = r(t),
                o = n ? i.findOne(n) : null;
              if (o) {
                const t = o.getBoundingClientRect();
                if (t.width || t.height) return [V[e](o).top + s, n];
              }
              return null;
            })
            .filter((t) => t)
            .sort((t, e) => t[0] - e[0])
            .forEach((t) => {
              this._offsets.push(t[0]), this._targets.push(t[1]);
            });
      }
      dispose() {
        B.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
      }
      _getConfig(t) {
        if (
          "string" !=
            typeof (t = {
              ...qt,
              ...V.getDataAttributes(this._element),
              ...("object" == typeof t && t ? t : {}),
            }).target &&
          c(t.target)
        ) {
          let { id: e } = t.target;
          e || ((e = n("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
        }
        return d("scrollspy", t, zt), t;
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          s = this._config.offset + e - this._getOffsetHeight();
        if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
          const t = this._targets[this._targets.length - 1];
          this._activeTarget !== t && this._activate(t);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
            return (this._activeTarget = null), void this._clear();
          for (let e = this._offsets.length; e--; )
            this._activeTarget !== this._targets[e] &&
              t >= this._offsets[e] &&
              (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
              this._activate(this._targets[e]);
        }
      }
      _activate(t) {
        (this._activeTarget = t), this._clear();
        const e = this._selector
            .split(",")
            .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
          s = i.findOne(e.join(","));
        s.classList.contains("dropdown-item")
          ? (i
              .findOne(".dropdown-toggle", s.closest(".dropdown"))
              .classList.add("active"),
            s.classList.add("active"))
          : (s.classList.add("active"),
            i.parents(s, ".nav, .list-group").forEach((t) => {
              i
                .prev(t, ".nav-link, .list-group-item")
                .forEach((t) => t.classList.add("active")),
                i.prev(t, ".nav-item").forEach((t) => {
                  i.children(t, ".nav-link").forEach((t) =>
                    t.classList.add("active")
                  );
                });
            })),
          B.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: t,
          });
      }
      _clear() {
        i.find(this._selector)
          .filter((t) => t.classList.contains("active"))
          .forEach((t) => t.classList.remove("active"));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = Ft.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    B.on(window, "load.bs.scrollspy.data-api", () => {
      i.find('[data-bs-spy="scroll"]').forEach((t) => new Ft(t));
    }),
      y(Ft);
    class Ut extends q {
      static get NAME() {
        return "tab";
      }
      show() {
        if (
          this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains("active")
        )
          return;
        let t;
        const e = a(this._element),
          s = this._element.closest(".nav, .list-group");
        if (s) {
          const e =
            "UL" === s.nodeName || "OL" === s.nodeName
              ? ":scope > li > .active"
              : ".active";
          (t = i.find(e, s)), (t = t[t.length - 1]);
        }
        const n = t
          ? B.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          B.trigger(this._element, "show.bs.tab", { relatedTarget: t })
            .defaultPrevented ||
          (null !== n && n.defaultPrevented)
        )
          return;
        this._activate(this._element, s);
        const o = () => {
          B.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
            B.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
        };
        e ? this._activate(e, e.parentNode, o) : o();
      }
      _activate(t, e, s) {
        const n = (
            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
              ? i.children(e, ".active")
              : i.find(":scope > li > .active", e)
          )[0],
          o = s && n && n.classList.contains("fade"),
          r = () => this._transitionComplete(t, n, s);
        n && o
          ? (n.classList.remove("show"), this._queueCallback(r, t, !0))
          : r();
      }
      _transitionComplete(t, e, s) {
        if (e) {
          e.classList.remove("active");
          const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
          t && t.classList.remove("active"),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !1);
        }
        t.classList.add("active"),
          "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
          m(t),
          t.classList.contains("fade") && t.classList.add("show");
        let n = t.parentNode;
        if (
          (n && "LI" === n.nodeName && (n = n.parentNode),
          n && n.classList.contains("dropdown-menu"))
        ) {
          const e = t.closest(".dropdown");
          e &&
            i
              .find(".dropdown-toggle", e)
              .forEach((t) => t.classList.add("active")),
            t.setAttribute("aria-expanded", !0);
        }
        s && s();
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = Ut.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    B.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          g(this) || Ut.getOrCreateInstance(this).show();
      }
    ),
      y(Ut);
    const Kt = { animation: "boolean", autohide: "boolean", delay: "number" },
      Vt = { animation: !0, autohide: !0, delay: 5e3 };
    class Qt extends q {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get DefaultType() {
        return Kt;
      }
      static get Default() {
        return Vt;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        B.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove("hide"),
          m(this._element),
          this._element.classList.add("showing"),
          this._queueCallback(
            () => {
              this._element.classList.remove("showing"),
                this._element.classList.add("show"),
                B.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this._element.classList.contains("show") &&
          (B.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.remove("show"),
            this._queueCallback(
              () => {
                this._element.classList.add("hide"),
                  B.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          super.dispose();
      }
      _getConfig(t) {
        return (
          (t = {
            ...Vt,
            ...V.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }),
          d("toast", t, this.constructor.DefaultType),
          t
        );
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        const s = t.relatedTarget;
        this._element === s ||
          this._element.contains(s) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        B.on(
          this._element,
          "click.dismiss.bs.toast",
          '[data-bs-dismiss="toast"]',
          () => this.hide()
        ),
          B.on(this._element, "mouseover.bs.toast", (t) =>
            this._onInteraction(t, !0)
          ),
          B.on(this._element, "mouseout.bs.toast", (t) =>
            this._onInteraction(t, !1)
          ),
          B.on(this._element, "focusin.bs.toast", (t) =>
            this._onInteraction(t, !0)
          ),
          B.on(this._element, "focusout.bs.toast", (t) =>
            this._onInteraction(t, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = Qt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    return (
      y(Qt),
      {
        Alert: z,
        Button: F,
        Carousel: et,
        Collapse: nt,
        Dropdown: pt,
        Modal: wt,
        Offcanvas: Tt,
        Popover: Wt,
        ScrollSpy: Ft,
        Tab: Ut,
        Toast: Qt,
        Tooltip: jt,
      }
    );
  });
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(s, a) {
      void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((i) => {
          void 0 === s[i]
            ? (s[i] = a[i])
            : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
        });
    }
    const s = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function a() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, s), e;
    }
    const i = {
      document: s,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function r() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, i), e;
    }
    class n extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function l(e) {
      void 0 === e && (e = []);
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...l(e)) : t.push(e);
        }),
        t
      );
    }
    function o(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function d(e, t) {
      const s = r(),
        i = a();
      let l = [];
      if (!t && e instanceof n) return e;
      if (!e) return new n(l);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            l.push(t.childNodes[e]);
        } else
          l = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              a = t.querySelectorAll(e);
            for (let e = 0; e < a.length; e += 1) s.push(a[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) l.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof n) return e;
        l = e;
      }
      return new n(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(l)
      );
    }
    d.fn = n.prototype;
    const c = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        const a = l(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...a);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        const a = l(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...a);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        const a = l(t.map((e) => e.split(" ")));
        return (
          o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        const a = l(t.map((e) => e.split(" ")));
        this.forEach((e) => {
          a.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        let [a, i, r, n] = t;
        function l(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
          else {
            const e = d(t).parents();
            for (let t = 0; t < e.length; t += 1)
              d(e[t]).is(i) && r.apply(e[t], s);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
          n || (n = !1);
        const c = a.split(" ");
        let p;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (p = 0; p < c.length; p += 1) {
              const e = c[p];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }),
                t.addEventListener(e, l, n);
            }
          else
            for (p = 0; p < c.length; p += 1) {
              const e = c[p];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
                t.addEventListener(e, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        let [a, i, r, n] = t;
        "function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
          n || (n = !1);
        const l = a.split(" ");
        for (let e = 0; e < l.length; e += 1) {
          const t = l[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let a;
            if (
              (!i && s.dom7Listeners
                ? (a = s.dom7Listeners[t])
                : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const i = a[e];
                (r && i.listener === r) ||
                (r &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === r)
                  ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                  : r ||
                    (s.removeEventListener(t, i.proxyListener, n),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        const e = r();
        for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
          s[a] = arguments[a];
        const i = s[0].split(" "),
          n = s[1];
        for (let t = 0; t < i.length; t += 1) {
          const a = i[t];
          for (let t = 0; t < this.length; t += 1) {
            const i = this[t];
            if (e.CustomEvent) {
              const t = new e.CustomEvent(a, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = s.filter((e, t) => t > 0)),
                i.dispatchEvent(t),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(a) {
              a.target === this && (e.call(this, a), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = r();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = r(),
            t = a(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            l = s.clientTop || n.clientTop || 0,
            o = s.clientLeft || n.clientLeft || 0,
            d = s === e ? e.scrollY : s.scrollTop,
            c = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + d - l, left: i.left + c - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = r();
        let a;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (const t in e) this[a].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = r(),
          s = a(),
          i = this[0];
        let l, o;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof n) {
          for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
            if (l[o] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return d([]);
        if (e < 0) {
          const s = t + e;
          return d(s < 0 ? [] : [this[s]]);
        }
        return d([this[e]]);
      },
      append: function () {
        let e;
        const t = a();
        for (let s = 0; s < arguments.length; s += 1) {
          e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          for (let s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const a = t.createElement("div");
              for (a.innerHTML = e; a.firstChild; )
                this[s].appendChild(a.firstChild);
            } else if (e instanceof n)
              for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
            else this[s].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        const t = a();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const a = t.createElement("div");
            for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof n)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
              ? d([this[0].nextElementSibling])
              : d([])
            : this[0].nextElementSibling
            ? d([this[0].nextElementSibling])
            : d([])
          : d([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return d([]);
        for (; s.nextElementSibling; ) {
          const a = s.nextElementSibling;
          e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
        }
        return d(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
              ? d([t.previousElementSibling])
              : d([])
            : t.previousElementSibling
            ? d([t.previousElementSibling])
            : d([]);
        }
        return d([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return d([]);
        for (; s.previousElementSibling; ) {
          const a = s.previousElementSibling;
          e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
        }
        return d(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return d(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let a = this[s].parentNode;
          for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
        }
        return d(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const a = this[s].querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) t.push(a[e]);
        }
        return d(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const a = this[s].children;
          for (let s = 0; s < a.length; s += 1)
            (e && !d(a[s]).is(e)) || t.push(a[s]);
        }
        return d(t);
      },
      filter: function (e) {
        return d(o(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function p(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function u() {
      return Date.now();
    }
    function h(e, t) {
      void 0 === t && (t = "x");
      const s = r();
      let a, i, n;
      const l = (function (e) {
        const t = r();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = l.transform || l.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((n =
              l.MozTransform ||
              l.OTransform ||
              l.MsTransform ||
              l.msTransform ||
              l.transform ||
              l
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (a = n.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? n.m41
            : 16 === a.length
            ? parseFloat(a[12])
            : parseFloat(a[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? n.m42
            : 16 === a.length
            ? parseFloat(a[13])
            : parseFloat(a[5])),
        i || 0
      );
    }
    function m(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function f(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != a && !f(a)) {
          const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              r = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== r &&
              r.enumerable &&
              (m(e[i]) && m(a[i])
                ? a[i].__swiper__
                  ? (e[i] = a[i])
                  : g(e[i], a[i])
                : !m(e[i]) && m(a[i])
                ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
                : (e[i] = a[i]));
          }
        }
      }
      return e;
    }
    function v(e, t, s) {
      e.style.setProperty(t, s);
    }
    function w(e) {
      let { swiper: t, targetPosition: s, side: a } = e;
      const i = r(),
        n = -t.translate;
      let l,
        o = null;
      const d = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > n ? "next" : "prev",
        p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (l = new Date().getTime()), null === o && (o = l);
          const e = Math.max(Math.min((l - o) / d, 1), 0),
            r = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = n + r * (s - n);
          if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [a]: c });
              }),
              void i.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let b, x, y;
    function E() {
      return (
        b ||
          (b = (function () {
            const e = r(),
              t = a();
            return {
              smoothScroll:
                t.documentElement && "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        b
      );
    }
    function T(e) {
      return (
        void 0 === e && (e = {}),
        x ||
          (x = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = E(),
              a = r(),
              i = a.navigator.platform,
              n = t || a.navigator.userAgent,
              l = { ios: !1, android: !1 },
              o = a.screen.width,
              d = a.screen.height,
              c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              m = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !p &&
                f &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${d}`) >= 0 &&
                ((p = n.match(/(Version)\/([\d.]+)/)),
                p || (p = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !m && ((l.os = "android"), (l.android = !0)),
              (p || h || u) && ((l.os = "ios"), (l.ios = !0)),
              l
            );
          })(e)),
        x
      );
    }
    function C() {
      return (
        y ||
          (y = (function () {
            const e = r();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        y
      );
    }
    Object.keys(c).forEach((e) => {
      Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
    });
    var $ = {
      on(e, t, s) {
        const a = this;
        if ("function" != typeof t) return a;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
              a.eventsListeners[e][i](t);
          }),
          a
        );
      },
      once(e, t, s) {
        const a = this;
        if ("function" != typeof t) return a;
        function i() {
          a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          t.apply(a, r);
        }
        return (i.__emitterProxy = t), a.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const a = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((a, i) => {
                    (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, a;
        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
          r[n] = arguments[n];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
          : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
          s.unshift(a);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(a, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(a, s);
                });
          }),
          e
        );
      },
    };
    var S = {
      updateSize: function () {
        const e = this;
        let t, s;
        const a = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : a[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : a[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(a.css("padding-left") || 0, 10) -
              parseInt(a.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(a.css("padding-top") || 0, 10) -
              parseInt(a.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const a = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
          o = e.virtual && a.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          p = o ? e.virtual.slides.length : c.length;
        let u = [];
        const h = [],
          m = [];
        let f = a.slidesOffsetBefore;
        "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
        let g = a.slidesOffsetAfter;
        "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
          b = e.slidesGrid.length;
        let x = a.spaceBetween,
          y = -f,
          E = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof x &&
          x.indexOf("%") >= 0 &&
          (x = (parseFloat(x.replace("%", "")) / 100) * r),
          (e.virtualSize = -x),
          n
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          a.centeredSlides &&
            a.cssMode &&
            (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
            v(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = a.grid && a.grid.rows > 1 && e.grid;
        let $;
        C && e.grid.initSlides(p);
        const S =
          "auto" === a.slidesPerView &&
          a.breakpoints &&
          Object.keys(a.breakpoints).filter(
            (e) => void 0 !== a.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < p; i += 1) {
          $ = 0;
          const n = c.eq(i);
          if (
            (C && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display"))
          ) {
            if ("auto" === a.slidesPerView) {
              S && (c[i].style[t("width")] = "");
              const r = getComputedStyle(n[0]),
                l = n[0].style.transform,
                o = n[0].style.webkitTransform;
              if (
                (l && (n[0].style.transform = "none"),
                o && (n[0].style.webkitTransform = "none"),
                a.roundLengths)
              )
                $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  a = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  l = s(r, "margin-right"),
                  o = r.getPropertyValue("box-sizing");
                if (o && "border-box" === o) $ = e + i + l;
                else {
                  const { clientWidth: s, offsetWidth: r } = n[0];
                  $ = e + t + a + i + l + (r - s);
                }
              }
              l && (n[0].style.transform = l),
                o && (n[0].style.webkitTransform = o),
                a.roundLengths && ($ = Math.floor($));
            } else
              ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
                a.roundLengths && ($ = Math.floor($)),
                c[i] && (c[i].style[t("width")] = `${$}px`);
            c[i] && (c[i].swiperSlideSize = $),
              m.push($),
              a.centeredSlides
                ? ((y = y + $ / 2 + E / 2 + x),
                  0 === E && 0 !== i && (y = y - r / 2 - x),
                  0 === i && (y = y - r / 2 - x),
                  Math.abs(y) < 0.001 && (y = 0),
                  a.roundLengths && (y = Math.floor(y)),
                  T % a.slidesPerGroup == 0 && u.push(y),
                  h.push(y))
                : (a.roundLengths && (y = Math.floor(y)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  h.push(y),
                  (y = y + $ + x)),
              (e.virtualSize += $ + x),
              (E = $),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          n &&
            l &&
            ("slide" === a.effect || "coverflow" === a.effect) &&
            i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
          a.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
          C && e.grid.updateWrapperSize($, u, t),
          !a.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            a.roundLengths && (i = Math.floor(i)),
              u[s] <= e.virtualSize - r && t.push(i);
          }
          (u = t),
            Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - r);
        }
        if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
          const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
            [s]: `${x}px`,
          });
        }
        if (a.centeredSlides && a.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }),
            (e -= a.spaceBetween);
          const t = e - r;
          u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
        }
        if (a.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (a.spaceBetween ? a.spaceBetween : 0);
            }),
            (e -= a.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m,
          }),
          a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
        ) {
          v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            v(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          u.length !== w &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          a.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
        ) {
          const t = `${a.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          p <= a.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          a = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const n = (e) =>
          a
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !a) break;
              s.push(n(e));
            }
        else s.push(n(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: a, rtlTranslate: i, snapGrid: r } = t;
        if (0 === a.length) return;
        void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        i && (n = e),
          a.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < a.length; e += 1) {
          const l = a[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
          const d =
              (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            c =
              (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            p = -(n - o),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            a.eq(e).addClass(s.slideVisibleClass)),
            (l.progress = i ? -d : d),
            (l.originalProgress = i ? -c : c);
        }
        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          a = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: n } = t;
        const l = r,
          o = n;
        0 === a
          ? ((i = 0), (r = !0), (n = !0))
          : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          n && !o && t.emit("reachEnd toEdge"),
          ((l && !r) || (o && !n)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: a,
            activeIndex: i,
            realIndex: r,
          } = e,
          n = e.virtual && s.virtual.enabled;
        let l;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (l = n
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          l.addClass(s.slideActiveClass),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? a
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : a
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? a
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : a
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? a
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : a
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: a,
            snapGrid: i,
            params: r,
            activeIndex: n,
            realIndex: l,
            snapIndex: o,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < a.length; e += 1)
            void 0 !== a[e + 1]
              ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                ? (c = e)
                : s >= a[e] && s < a[e + 1] && (c = e + 1)
              : s >= a[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === n))
          return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
        const p = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: n,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          a = d(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (a)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === a) {
              (r = !0), (i = e);
              break;
            }
        if (!a || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = a),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                d(a).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var M = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
        if (t.virtualTranslate) return s ? -a : a;
        if (t.cssMode) return a;
        let r = h(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: a,
            params: i,
            $wrapperEl: r,
            wrapperEl: n,
            progress: l,
          } = s;
        let o,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = a ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
                ? -d
                : -c)
            : i.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const p = s.maxTranslate() - s.minTranslate();
        (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
          o !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, a, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === a && (a = !0);
        const r = this,
          { params: n, wrapperEl: l } = r;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = a && e > o ? o : a && e < d ? d : e),
          r.updateProgress(c),
          n.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                w({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function P(e) {
      let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
      const { activeIndex: r, previousIndex: n } = t;
      let l = a;
      if (
        (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n)
      ) {
        if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
        t.emit(`slideChangeTransition${i}`),
          "next" === l
            ? t.emit(`slideNextTransition${i}`)
            : t.emit(`slidePrevTransition${i}`);
      }
    }
    var k = {
      slideTo: function (e, t, s, a, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m,
        } = r;
        if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i))
          return !1;
        const f = Math.min(r.params.slidesPerGroupSkip, n);
        let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1),
          (p || l.initialSlide || 0) === (c || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -o[g];
        if ((r.updateProgress(v), l.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              a = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < a - (a - s) / 2
                ? (n = e)
                : t >= s && t < a && (n = e + 1)
              : t >= s && (n = e);
          }
        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (p || 0) !== n
          )
            return !1;
        }
        let b;
        if (
          ((b = n > p ? "next" : n < p ? "prev" : "reset"),
          (u && -v === r.translate) || (!u && v === r.translate))
        )
          return (
            r.updateActiveIndex(n),
            l.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = r.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                w({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(n),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, a),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, a) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const a = this,
          { animating: i, enabled: r, params: n } = a;
        if (!r) return a;
        let l = n.slidesPerGroup;
        "auto" === n.slidesPerView &&
          1 === n.slidesPerGroup &&
          n.slidesPerGroupAuto &&
          (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
        const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
        if (n.loop) {
          if (i && n.loopPreventsSlide) return !1;
          a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
        }
        return n.rewind && a.isEnd
          ? a.slideTo(0, e, t, s)
          : a.slideTo(a.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const a = this,
          {
            params: i,
            animating: r,
            snapGrid: n,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: d,
          } = a;
        if (!d) return a;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = c(o ? a.translate : -a.translate),
          u = n.map((e) => c(e));
        let h = n[u.indexOf(p) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          n.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== h &&
            ((m = l.indexOf(h)),
            m < 0 && (m = a.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          i.rewind && a.isBeginning)
        ) {
          const i =
            a.params.virtual && a.params.virtual.enabled && a.virtual
              ? a.virtual.slides.length - 1
              : a.slides.length - 1;
          return a.slideTo(i, e, t, s);
        }
        return a.slideTo(m, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, a) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === a && (a = 0.5);
        const i = this;
        let r = i.activeIndex;
        const n = Math.min(i.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate;
        if (o >= i.snapGrid[l]) {
          const e = i.snapGrid[l];
          o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[l - 1];
          o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          a =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - a / 2 ||
                r > e.slides.length - e.loopedSlides + a / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  p(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - a
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    var z = {
      loopCreate: function () {
        const e = this,
          t = a(),
          { params: s, $wrapperEl: i } = e,
          r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
        r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let n = r.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let a = 0; a < e; a += 1) {
              const e = d(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              r.append(e);
            }
            n = r.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = n.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
        const l = [],
          o = [];
        n.each((t, s) => {
          const a = d(t);
          s < e.loopedSlides && o.push(t),
            s < n.length && s >= n.length - e.loopedSlides && l.push(t),
            a.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = l.length - 1; e >= 0; e -= 1)
          r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: a,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: n,
          rtlTranslate: l,
        } = e;
        let o;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -n[t] - e.getTranslate();
        if (t < a) {
          (o = s.length - 3 * a + t), (o += a);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        } else if (t >= s.length - a) {
          (o = -s.length + t + a), (o += a);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function O(e) {
      const t = this,
        s = a(),
        i = r(),
        n = t.touchEventsData,
        { params: l, touches: o, enabled: c } = t;
      if (!c) return;
      if (t.animating && l.preventInteractionOnTransition) return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let p = e;
      p.originalEvent && (p = p.originalEvent);
      let h = d(p.target);
      if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === p.type),
        !n.isTouchEvent && "which" in p && 3 === p.which)
      )
        return;
      if (!n.isTouchEvent && "button" in p && p.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!l.noSwipingClass &&
        "" !== l.noSwipingClass &&
        p.target &&
        p.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (h = d(e.path[0]));
      const m = l.noSwipingSelector
          ? l.noSwipingSelector
          : `.${l.noSwipingClass}`,
        f = !(!p.target || !p.target.shadowRoot);
      if (
        l.noSwiping &&
        (f
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== a() && s !== r()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(m, p.target)
          : h.closest(m)[0])
      )
        return void (t.allowClick = !0);
      if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
      (o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
        (o.currentY =
          "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
      const g = o.currentX,
        v = o.currentY,
        w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
      if (w && (g <= b || g >= i.innerWidth - b)) {
        if ("prevent" !== w) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = g),
        (o.startY = v),
        (n.touchStartTime = u()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== p.type)
      ) {
        let e = !0;
        h.is(n.focusableElements) &&
          ((e = !1), "SELECT" === h[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            d(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== h[0] &&
            s.activeElement.blur();
        const a = e && t.allowTouchMove && l.touchStartPreventDefault;
        (!l.touchStartForcePreventDefault && !a) ||
          h[0].isContentEditable ||
          p.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", p);
    }
    function I(e) {
      const t = a(),
        s = this,
        i = s.touchEventsData,
        { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
      if (!o) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", c)
        );
      if (i.isTouchEvent && "touchmove" !== c.type) return;
      const p =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
      if (!s.allowTouchMove)
        return (
          d(c.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }),
            (i.touchStartTime = u()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (s.isVertical()) {
          if (
            (m < n.startY && s.translate <= s.maxTranslate()) ||
            (m > n.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (h < n.startX && s.translate <= s.maxTranslate()) ||
          (h > n.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        d(c.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (n.currentX = h), (n.currentY = m);
      const f = n.currentX - n.startX,
        g = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
          ? (i.isScrolling = !1)
          : f * f + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", c)),
        s.emit("sliderMove", c),
        (i.isMoved = !0);
      let v = s.isHorizontal() ? f : g;
      (n.diff = v),
        (v *= r.touchRatio),
        l && (v = -v),
        (s.swipeDirection = v > 0 ? "prev" : "next"),
        (i.currentTranslate = v + i.startTranslate);
      let w = !0,
        b = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (b = 0),
        v > 0 && i.currentTranslate > s.minTranslate()
          ? ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** b))
          : v < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** b)),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (i.currentTranslate = i.startTranslate),
            void (n.diff = s.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
          r.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          r.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function L(e) {
      const t = this,
        s = t.touchEventsData,
        { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
      if (!l) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      a.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = u(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = u()),
        p(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let h;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = a.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
      )
        return;
      if (t.params.freeMode && a.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let m = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < n.length;
        e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
      ) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== n[e + t]
          ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
          : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
      }
      let g = null,
        v = null;
      a.rewind &&
        (t.isBeginning
          ? (v =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const w = (h - n[m]) / f,
        b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (c > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (w >= a.longSwipesRatio
            ? t.slideTo(a.rewind && t.isEnd ? g : m + b)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (w > 1 - a.longSwipesRatio
              ? t.slideTo(m + b)
              : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(m));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(m + b)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
      }
    }
    function A() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = a),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function D(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function G() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
      if (!a) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let B = !1;
    function N() {}
    const H = (e, t) => {
      const s = a(),
        {
          params: i,
          touchEvents: r,
          el: n,
          wrapperEl: l,
          device: o,
          support: d,
        } = e,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (d.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !d.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        n[p](r.start, e.onTouchStart, t),
          n[p](
            r.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: c } : c
          ),
          n[p](r.end, e.onTouchEnd, t),
          r.cancel && n[p](r.cancel, e.onTouchEnd, t);
      } else
        n[p](r.start, e.onTouchStart, !1),
          s[p](r.move, e.onTouchMove, c),
          s[p](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        n[p]("click", e.onClick, !0),
        i.cssMode && l[p]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              A,
              !0
            )
          : e[u]("observerUpdate", A, !0);
    };
    var X = {
      attachEvents: function () {
        const e = this,
          t = a(),
          { params: s, support: i } = e;
        (e.onTouchStart = O.bind(e)),
          (e.onTouchMove = I.bind(e)),
          (e.onTouchEnd = L.bind(e)),
          s.cssMode && (e.onScroll = G.bind(e)),
          (e.onClick = D.bind(e)),
          i.touch && !B && (t.addEventListener("touchstart", N), (B = !0)),
          H(e, "on");
      },
      detachEvents: function () {
        H(this, "off");
      },
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
          l = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((a) => {
                      e[a] && s.push(t + a);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !n.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: a },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function j(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const a = Object.keys(s)[0],
          i = s[a];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
              !0 === e[a] &&
              (e[a] = { auto: !0 }),
            a in e && "enabled" in i
              ? (!0 === e[a] && (e[a] = { enabled: !0 }),
                "object" != typeof e[a] ||
                  "enabled" in e[a] ||
                  (e[a].enabled = !0),
                e[a] || (e[a] = { enabled: !1 }),
                g(t, s))
              : g(t, s))
          : g(t, s);
      };
    }
    const _ = {
        eventsEmitter: $,
        update: S,
        translate: M,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: a } = s;
            a.cssMode ||
              (a.autoHeight && s.updateAutoHeight(),
              P({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: a } = s;
            (s.animating = !1),
              a.cssMode ||
                (s.setTransition(0),
                P({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: k,
        loop: z,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: X,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: s,
                loopedSlides: a = 0,
                params: i,
                $el: r,
              } = e,
              n = i.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l) return;
            const o = (l in n ? n[l] : void 0) || e.originalParams,
              d = Y(e, i),
              c = Y(e, o),
              p = i.enabled;
            d && !c
              ? (r.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !d &&
                c &&
                (r.addClass(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const u = o.direction && o.direction !== i.direction,
              h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(), g(e.params, o);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !m ? e.disable() : !p && m && e.enable(),
              (e.currentBreakpoint = l),
              e.emit("_beforeBreakpoint", o),
              h &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t, s) {
            if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
              return;
            let a = !1;
            const i = r(),
              n = "window" === t ? i.innerHeight : s.clientHeight,
              l = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < l.length; e += 1) {
              const { point: r, value: n } = l[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
                : n <= s.clientWidth && (a = r);
            }
            return a || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: a } = s;
            if (a) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: R,
        images: {
          loadImage: function (e, t, s, a, i, n) {
            const l = r();
            let o;
            function c() {
              n && n();
            }
            d(e).parent("picture")[0] || (e.complete && i)
              ? c()
              : t
              ? ((o = new l.Image()),
                (o.onload = c),
                (o.onerror = c),
                a && (o.sizes = a),
                s && (o.srcset = s),
                t && (o.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const a = e.imagesToLoad[s];
              e.loadImage(
                a,
                a.currentSrc || a.getAttribute("src"),
                a.srcset || a.getAttribute("srcset"),
                a.sizes || a.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      q = {};
    class V {
      constructor() {
        let e, t;
        for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
          a[i] = arguments[i];
        if (
          (1 === a.length &&
          a[0].constructor &&
          "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
            ? (t = a[0])
            : ([e, t] = a),
          t || (t = {}),
          (t = g({}, t)),
          e && !t.el && (t.el = e),
          t.el && d(t.el).length > 1)
        ) {
          const e = [];
          return (
            d(t.el).each((s) => {
              const a = g({}, t, { el: s });
              e.push(new V(a));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = E()),
          (r.device = T({ userAgent: t.userAgent })),
          (r.browser = C()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const n = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: j(t, n),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const l = g({}, W, n);
        return (
          (r.params = g({}, l, q, t)),
          (r.originalParams = g({}, r.params)),
          (r.passedParams = g({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = d),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: d(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: u(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const a = s.minTranslate(),
          i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const a = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: a,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: n,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = a[l].swiperSlideSize;
          for (let s = l + 1; s < a.length; s += 1)
            a[s] &&
              !e &&
              ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            a[s] &&
              !e &&
              ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < a.length; e += 1) {
            (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            i[l] - i[e] < n && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function a() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (a(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || a()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          a = s.params.direction;
        return (
          e || (e = "horizontal" === a ? "vertical" : "horizontal"),
          e === a ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${a}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = d(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = a().createElement("div");
          (r = d(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: a, $el: i, $wrapperEl: r, slides: n } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              n &&
                n.length &&
                n
                  .removeClass(
                    [
                      a.slideVisibleClass,
                      a.slideActiveClass,
                      a.slideNextClass,
                      a.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        g(q, e);
      }
      static get extendedDefaults() {
        return q;
      }
      static get defaults() {
        return W;
      }
      static installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const t = V.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => V.installModule(e)), V)
          : (V.installModule(e), V);
      }
    }
    function F(e, t, s, i) {
      const r = a();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let n = e.$el.children(`.${i[a]}`)[0];
              n ||
                ((n = r.createElement("div")),
                (n.className = i[a]),
                e.$el.append(n)),
                (s[a] = n),
                (t[a] = n);
            }
          }),
        s
      );
    }
    function U(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function K(e) {
      const t = this,
        { $wrapperEl: s, params: a } = t;
      if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
        for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
      else s.append(e);
      a.loop && t.loopCreate(), a.observer || t.update();
    }
    function Z(e) {
      const t = this,
        { params: s, $wrapperEl: a, activeIndex: i } = t;
      s.loop && t.loopDestroy();
      let r = i + 1;
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
        r = i + e.length;
      } else a.prepend(e);
      s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function J(e, t) {
      const s = this,
        { $wrapperEl: a, params: i, activeIndex: r } = s;
      let n = r;
      i.loop &&
        ((n -= s.loopedSlides),
        s.loopDestroy(),
        (s.slides = a.children(`.${i.slideClass}`)));
      const l = s.slides.length;
      if (e <= 0) return void s.prependSlide(t);
      if (e >= l) return void s.appendSlide(t);
      let o = n > e ? n + 1 : n;
      const d = [];
      for (let t = l - 1; t >= e; t -= 1) {
        const e = s.slides.eq(t);
        e.remove(), d.unshift(e);
      }
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
        o = n > e ? n + t.length : n;
      } else a.append(t);
      for (let e = 0; e < d.length; e += 1) a.append(d[e]);
      i.loop && s.loopCreate(),
        i.observer || s.update(),
        i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function Q(e) {
      const t = this,
        { params: s, $wrapperEl: a, activeIndex: i } = t;
      let r = i;
      s.loop &&
        ((r -= t.loopedSlides),
        t.loopDestroy(),
        (t.slides = a.children(`.${s.slideClass}`)));
      let n,
        l = r;
      if ("object" == typeof e && "length" in e) {
        for (let s = 0; s < e.length; s += 1)
          (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
        l = Math.max(l, 0);
      } else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
      s.loop && t.loopCreate(),
        s.observer || t.update(),
        s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }
    function ee() {
      const e = this,
        t = [];
      for (let s = 0; s < e.slides.length; s += 1) t.push(s);
      e.removeSlide(t);
    }
    function te(e) {
      const {
        effect: t,
        swiper: s,
        on: a,
        setTranslate: i,
        setTransition: r,
        overwriteParams: n,
        perspective: l,
      } = e;
      let o;
      a("beforeInit", () => {
        if (s.params.effect !== t) return;
        s.classNames.push(`${s.params.containerModifierClass}${t}`),
          l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
        const e = n ? n() : {};
        Object.assign(s.params, e), Object.assign(s.originalParams, e);
      }),
        a("setTranslate", () => {
          s.params.effect === t && i();
        }),
        a("setTransition", (e, a) => {
          s.params.effect === t && r(a);
        }),
        a("virtualUpdate", () => {
          s.slides.length || (o = !0),
            requestAnimationFrame(() => {
              o && s.slides.length && (i(), (o = !1));
            });
        });
    }
    function se(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function ae(e) {
      let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
      const { slides: r, activeIndex: n, $wrapperEl: l } = t;
      if (t.params.virtualTranslate && 0 !== s) {
        let e,
          s = !1;
        (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
          e.transitionEnd(() => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
          });
      }
    }
    function ie(e, t, s) {
      const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
      let r = i.children(`.${a}`);
      return (
        r.length ||
          ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`)),
          i.append(r)),
        r
      );
    }
    Object.keys(_).forEach((e) => {
      Object.keys(_[e]).forEach((t) => {
        V.prototype[t] = _[e][t];
      });
    }),
      V.use([
        function (e) {
          let { swiper: t, on: s, emit: a } = e;
          const i = r();
          let n = null,
            l = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (a("beforeResize"), a("resize"));
            },
            d = () => {
              t && !t.destroyed && t.initialized && a("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((n = new ResizeObserver((e) => {
                  l = i.requestAnimationFrame(() => {
                    const { width: s, height: a } = t;
                    let i = s,
                      r = a;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: a, target: n } = e;
                      (n && n !== t.el) ||
                        ((i = a ? a.width : (s[0] || s).inlineSize),
                        (r = a ? a.height : (s[0] || s).blockSize));
                    }),
                      (i === s && r === a) || o();
                  });
                })),
                n.observe(t.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", d));
          }),
            s("destroy", () => {
              l && i.cancelAnimationFrame(l),
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", d);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: a, emit: i } = e;
          const n = [],
            l = r(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const s = new (l.MutationObserver || l.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  l.requestAnimationFrame
                    ? l.requestAnimationFrame(t)
                    : l.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            a("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            a("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const re = [
      function (e) {
        let t,
          { swiper: s, extendParams: a, on: i, emit: r } = e;
        function n(e, t) {
          const a = s.params.virtual;
          if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
          const i = a.renderSlide
            ? d(a.renderSlide.call(s, e, t))
            : d(
                `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              );
          return (
            i.attr("data-swiper-slide-index") ||
              i.attr("data-swiper-slide-index", t),
            a.cache && (s.virtual.cache[t] = i),
            i
          );
        }
        function l(e) {
          const {
              slidesPerView: t,
              slidesPerGroup: a,
              centeredSlides: i,
            } = s.params,
            { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
            { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
          s.params.cssMode || s.updateActiveIndex();
          const m = s.activeIndex || 0;
          let f, g, v;
          (f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
            i
              ? ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l))
              : ((g = t + (a - 1) + o), (v = a + l));
          const w = Math.max((m || 0) - v, 0),
            b = Math.min((m || 0) + g, p.length - 1),
            x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
          function y() {
            s.updateSlides(),
              s.updateProgress(),
              s.updateSlidesClasses(),
              s.lazy && s.params.lazy.enabled && s.lazy.load(),
              r("virtualUpdate");
          }
          if (
            (Object.assign(s.virtual, {
              from: w,
              to: b,
              offset: x,
              slidesGrid: s.slidesGrid,
            }),
            d === w && c === b && !e)
          )
            return (
              s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
              s.updateProgress(),
              void r("virtualUpdate")
            );
          if (s.params.virtual.renderExternal)
            return (
              s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: (function () {
                  const e = [];
                  for (let t = w; t <= b; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void (s.params.virtual.renderExternalUpdate
                ? y()
                : r("virtualUpdate"))
            );
          const E = [],
            T = [];
          if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
          else
            for (let e = d; e <= c; e += 1)
              (e < w || e > b) &&
                s.$wrapperEl
                  .find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`)
                  .remove();
          for (let t = 0; t < p.length; t += 1)
            t >= w &&
              t <= b &&
              (void 0 === c || e
                ? T.push(t)
                : (t > c && T.push(t), t < d && E.push(t)));
          T.forEach((e) => {
            s.$wrapperEl.append(n(p[e], e));
          }),
            E.sort((e, t) => t - e).forEach((e) => {
              s.$wrapperEl.prepend(n(p[e], e));
            }),
            s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
            y();
        }
        a({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        }),
          (s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          i("beforeInit", () => {
            s.params.virtual.enabled &&
              ((s.virtual.slides = s.params.virtual.slides),
              s.classNames.push(`${s.params.containerModifierClass}virtual`),
              (s.params.watchSlidesProgress = !0),
              (s.originalParams.watchSlidesProgress = !0),
              s.params.initialSlide || l());
          }),
          i("setTranslate", () => {
            s.params.virtual.enabled &&
              (s.params.cssMode && !s._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, 100)))
                : l());
          }),
          i("init update resize", () => {
            s.params.virtual.enabled &&
              s.params.cssMode &&
              v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
          }),
          Object.assign(s.virtual, {
            appendSlide: function (e) {
              if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                  e[t] && s.virtual.slides.push(e[t]);
              else s.virtual.slides.push(e);
              l(!0);
            },
            prependSlide: function (e) {
              const t = s.activeIndex;
              let a = t + 1,
                i = 1;
              if (Array.isArray(e)) {
                for (let t = 0; t < e.length; t += 1)
                  e[t] && s.virtual.slides.unshift(e[t]);
                (a = t + e.length), (i = e.length);
              } else s.virtual.slides.unshift(e);
              if (s.params.virtual.cache) {
                const e = s.virtual.cache,
                  t = {};
                Object.keys(e).forEach((s) => {
                  const a = e[s],
                    r = a.attr("data-swiper-slide-index");
                  r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                    (t[parseInt(s, 10) + i] = a);
                }),
                  (s.virtual.cache = t);
              }
              l(!0), s.slideTo(a, 0);
            },
            removeSlide: function (e) {
              if (null == e) return;
              let t = s.activeIndex;
              if (Array.isArray(e))
                for (let a = e.length - 1; a >= 0; a -= 1)
                  s.virtual.slides.splice(e[a], 1),
                    s.params.virtual.cache && delete s.virtual.cache[e[a]],
                    e[a] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                s.virtual.slides.splice(e, 1),
                  s.params.virtual.cache && delete s.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              l(!0), s.slideTo(t, 0);
            },
            removeAllSlides: function () {
              (s.virtual.slides = []),
                s.params.virtual.cache && (s.virtual.cache = {}),
                l(!0),
                s.slideTo(0, 0);
            },
            update: l,
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const l = a(),
          o = r();
        function c(e) {
          if (!t.enabled) return;
          const { rtlTranslate: s } = t;
          let a = e;
          a.originalEvent && (a = a.originalEvent);
          const i = a.keyCode || a.charCode,
            r = t.params.keyboard.pageUpDown,
            d = r && 33 === i,
            c = r && 34 === i,
            p = 37 === i,
            u = 39 === i,
            h = 38 === i,
            m = 40 === i;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && u) || (t.isVertical() && m) || c)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && p) || (t.isVertical() && h) || d)
          )
            return !1;
          if (
            !(
              a.shiftKey ||
              a.altKey ||
              a.ctrlKey ||
              a.metaKey ||
              (l.activeElement &&
                l.activeElement.nodeName &&
                ("input" === l.activeElement.nodeName.toLowerCase() ||
                  "textarea" === l.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (d || c || p || u || h || m)
            ) {
              let e = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
              )
                return;
              const a = t.$el,
                i = a[0].clientWidth,
                r = a[0].clientHeight,
                n = o.innerWidth,
                l = o.innerHeight,
                d = t.$el.offset();
              s && (d.left -= t.$el[0].scrollLeft);
              const c = [
                [d.left, d.top],
                [d.left + i, d.top],
                [d.left, d.top + r],
                [d.left + i, d.top + r],
              ];
              for (let t = 0; t < c.length; t += 1) {
                const s = c[t];
                if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                  if (0 === s[0] && 0 === s[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((d || c || p || u) &&
                  (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
                (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
              : ((d || c || h || m) &&
                  (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                (c || m) && t.slideNext(),
                (d || h) && t.slidePrev()),
              n("keyPress", i);
          }
        }
        function p() {
          t.keyboard.enabled ||
            (d(l).on("keydown", c), (t.keyboard.enabled = !0));
        }
        function u() {
          t.keyboard.enabled &&
            (d(l).off("keydown", c), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          i("init", () => {
            t.params.keyboard.enabled && p();
          }),
          i("destroy", () => {
            t.keyboard.enabled && u();
          }),
          Object.assign(t.keyboard, { enable: p, disable: u });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = r();
        let l;
        s({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let o,
          c = u();
        const h = [];
        function m() {
          t.enabled && (t.mouseEntered = !0);
        }
        function f() {
          t.enabled && (t.mouseEntered = !1);
        }
        function g(e) {
          return (
            !(
              t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta
            ) &&
            !(
              t.params.mousewheel.thresholdTime &&
              u() - c < t.params.mousewheel.thresholdTime
            ) &&
            ((e.delta >= 6 && u() - c < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), i("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), i("scroll", e.raw)),
              (c = new n.Date().getTime()),
              !1))
          );
        }
        function v(e) {
          let s = e,
            a = !0;
          if (!t.enabled) return;
          const r = t.params.mousewheel;
          t.params.cssMode && s.preventDefault();
          let n = t.$el;
          if (
            ("container" !== t.params.mousewheel.eventsTarget &&
              (n = d(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
          )
            return !0;
          s.originalEvent && (s = s.originalEvent);
          let c = 0;
          const m = t.rtlTranslate ? -1 : 1,
            f = (function (e) {
              let t = 0,
                s = 0,
                a = 0,
                i = 0;
              return (
                "detail" in e && (s = e.detail),
                "wheelDelta" in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                (a = 10 * t),
                (i = 10 * s),
                "deltaY" in e && (i = e.deltaY),
                "deltaX" in e && (a = e.deltaX),
                e.shiftKey && !a && ((a = i), (i = 0)),
                (a || i) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((a *= 40), (i *= 40))
                    : ((a *= 800), (i *= 800))),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                { spinX: t, spinY: s, pixelX: a, pixelY: i }
              );
            })(s);
          if (r.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
              c = -f.pixelX * m;
            } else {
              if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
              c = -f.pixelY;
            }
          else
            c =
              Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
          if (0 === c) return !0;
          r.invert && (c = -c);
          let v = t.getTranslate() + c * r.sensitivity;
          if (
            (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (a =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) },
              a =
                o &&
                e.time < o.time + 500 &&
                e.delta <= o.delta &&
                e.direction === o.direction;
            if (!a) {
              (o = void 0), t.params.loop && t.loopFix();
              let n = t.getTranslate() + c * r.sensitivity;
              const d = t.isBeginning,
                u = t.isEnd;
              if (
                (n >= t.minTranslate() && (n = t.minTranslate()),
                n <= t.maxTranslate() && (n = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(n),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!d && t.isBeginning) || (!u && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
                const s = h.length ? h[h.length - 1] : void 0,
                  a = h[0];
                if (
                  (h.push(e),
                  s && (e.delta > s.delta || e.direction !== s.direction))
                )
                  h.splice(0);
                else if (
                  h.length >= 15 &&
                  e.time - a.time < 500 &&
                  a.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const s = c > 0 ? 0.8 : 0.2;
                  (o = e),
                    h.splice(0),
                    (l = p(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, s);
                    }, 0));
                }
                l ||
                  (l = p(() => {
                    (o = e),
                      h.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (a || i("scroll", s),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                n === t.minTranslate() || n === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const s = {
              time: u(),
              delta: Math.abs(c),
              direction: Math.sign(c),
              raw: e,
            };
            h.length >= 2 && h.shift();
            const a = h.length ? h[h.length - 1] : void 0;
            if (
              (h.push(s),
              a
                ? (s.direction !== a.direction ||
                    s.delta > a.delta ||
                    s.time > a.time + 150) &&
                  g(s)
                : g(s),
              (function (e) {
                const s = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                  return !0;
                return !1;
              })(s))
            )
              return !0;
          }
          return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
        }
        function w(e) {
          let s = t.$el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (s = d(t.params.mousewheel.eventsTarget)),
            s[e]("mouseenter", m),
            s[e]("mouseleave", f),
            s[e]("wheel", v);
        }
        function b() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", v), !0)
            : !t.mousewheel.enabled && (w("on"), (t.mousewheel.enabled = !0), !0);
        }
        function x() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, v), !0)
            : !!t.mousewheel.enabled &&
                (w("off"), (t.mousewheel.enabled = !1), !0);
        }
        a("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && x(),
            t.params.mousewheel.enabled && b();
        }),
          a("destroy", () => {
            t.params.cssMode && b(), t.mousewheel.enabled && x();
          }),
          Object.assign(t.mousewheel, { enable: b, disable: x });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        function r(e) {
          let s;
          return (
            e &&
              ((s = d(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.$el.find(e).length &&
                (s = t.$el.find(e))),
            s
          );
        }
        function n(e, s) {
          const a = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[s ? "addClass" : "removeClass"](a.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
        }
        function l() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: s } = t.navigation;
          n(s, t.isBeginning && !t.params.rewind),
            n(e, t.isEnd && !t.params.rewind);
        }
        function o(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function p() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = F(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const s = r(e.nextEl),
            a = r(e.prevEl);
          s && s.length > 0 && s.on("click", c),
            a && a.length > 0 && a.on("click", o),
            Object.assign(t.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: a,
              prevEl: a && a[0],
            }),
            t.enabled ||
              (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
        }
        function u() {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", o),
              s.removeClass(t.params.navigation.disabledClass));
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          a("init", () => {
            p(), l();
          }),
          a("toEdge fromEdge lock unlock", () => {
            l();
          }),
          a("destroy", () => {
            u();
          }),
          a("enable disable", () => {
            const { $nextEl: e, $prevEl: s } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              s &&
                s[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          a("click", (e, s) => {
            const { $nextEl: a, $prevEl: r } = t.navigation,
              n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === n || t.pagination.el.contains(n))
              )
                return;
              let e;
              a
                ? (e = a.hasClass(t.params.navigation.hiddenClass))
                : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                a && a.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: l, init: p, destroy: u });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const r = "swiper-pagination";
        let n;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let l = 0;
        function o() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, s) {
          const { bulletActiveClass: a } = t.params.pagination;
          e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
        }
        function p() {
          const e = t.rtl,
            s = t.params.pagination;
          if (o()) return;
          const a =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let p;
          const u = t.params.loop
            ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((p = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
                p > u - 1 && (p -= u),
                p < 0 && "bullets" !== t.params.paginationType && (p = u + p))
              : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === s.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let i, o, u;
            if (
              (s.dynamicBullets &&
                ((n = a
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  n * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((l += p - (t.previousIndex - t.loopedSlides || 0)),
                  l > s.dynamicMainBullets - 1
                    ? (l = s.dynamicMainBullets - 1)
                    : l < 0 && (l = 0)),
                (i = Math.max(p - l, 0)),
                (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                (u = (o + i) / 2)),
              a.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              a.each((e) => {
                const t = d(e),
                  a = t.index();
                a === p && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (a >= i &&
                      a <= o &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    a === i && c(t, "prev"),
                    a === o && c(t, "next"));
              });
            else {
              const e = a.eq(p),
                r = e.index();
              if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const e = a.eq(i),
                  n = a.eq(o);
                for (let e = i; e <= o; e += 1)
                  a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= a.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                    a.eq(a.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(n, "next");
                else c(e, "prev"), c(n, "next");
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(a.length, s.dynamicMainBullets + 4),
                r = (n * i - n) / 2 - u * n,
                l = e ? "right" : "left";
              a.css(t.isHorizontal() ? l : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
              r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type)
          ) {
            let e;
            e = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const a = (p + 1) / u;
            let i = 1,
              n = 1;
            "horizontal" === e ? (i = a) : (n = a),
              r
                .find(U(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`)
                .transition(t.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0]))
            : i("paginationUpdate", r[0]),
            t.params.watchOverflow &&
              t.enabled &&
              r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (o()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            a = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              i > s &&
              (i = s);
            for (let s = 0; s < i; s += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, s, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            a.html(r)),
            "progressbar" === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              a.html(r)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
        }
        function h() {
          t.params.pagination = F(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let s = d(e.el);
          0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              s.length > 1 &&
              ((s = t.$el.find(e.el)),
              s.length > 1 &&
                (s = s.filter((e) => d(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
            s.addClass(e.modifierClass + e.type),
            s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (l = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              s.addClass(e.progressbarOppositeClass),
            e.clickable &&
              s.on("click", U(e.bulletClass), function (e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s);
              }),
            Object.assign(t.pagination, { $el: s, el: s[0] }),
            t.enabled || s.addClass(e.lockClass));
        }
        function m() {
          const e = t.params.pagination;
          if (o()) return;
          const s = t.pagination.$el;
          s.removeClass(e.hiddenClass),
            s.removeClass(e.modifierClass + e.type),
            s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", U(e.bulletClass));
        }
        a("init", () => {
          h(), u(), p();
        }),
          a("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && p();
          }),
          a("snapIndexChange", () => {
            t.params.loop || p();
          }),
          a("slidesLengthChange", () => {
            t.params.loop && (u(), p());
          }),
          a("snapGridLengthChange", () => {
            t.params.loop || (u(), p());
          }),
          a("destroy", () => {
            m();
          }),
          a("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          a("lock unlock", () => {
            p();
          }),
          a("click", (e, s) => {
            const a = s.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r.length > 0 &&
              !d(a).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                  (t.navigation.prevEl && a === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              i(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: u,
            update: p,
            init: h,
            destroy: m,
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: r } = e;
        const n = a();
        let l,
          o,
          c,
          u,
          h = !1,
          m = null,
          f = null;
        function g() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: s, progress: a } = t,
            { $dragEl: i, $el: r } = e,
            n = t.params.scrollbar;
          let l = o,
            d = (c - o) * a;
          s
            ? ((d = -d),
              d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d))
            : d < 0
            ? ((l = o + d), (d = 0))
            : d + o > c && (l = c - d),
            t.isHorizontal()
              ? (i.transform(`translate3d(${d}px, 0, 0)`),
                (i[0].style.width = `${l}px`))
              : (i.transform(`translate3d(0px, ${d}px, 0)`),
                (i[0].style.height = `${l}px`)),
            n.hide &&
              (clearTimeout(m),
              (r[0].style.opacity = 1),
              (m = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function v() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { $dragEl: s, $el: a } = e;
          (s[0].style.width = ""),
            (s[0].style.height = ""),
            (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
            (u =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (o =
              "auto" === t.params.scrollbar.dragSize
                ? c * u
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (s[0].style.width = `${o}px`)
              : (s[0].style.height = `${o}px`),
            (a[0].style.display = u >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (a[0].style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.$el[t.isLocked ? "addClass" : "removeClass"](
                t.params.scrollbar.lockClass
              );
        }
        function w(e) {
          return t.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        }
        function b(e) {
          const { scrollbar: s, rtlTranslate: a } = t,
            { $el: i } = s;
          let r;
          (r =
            (w(e) -
              i.offset()[t.isHorizontal() ? "left" : "top"] -
              (null !== l ? l : o / 2)) /
            (c - o)),
            (r = Math.max(Math.min(r, 1), 0)),
            a && (r = 1 - r);
          const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
          t.updateProgress(n),
            t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function x(e) {
          const s = t.params.scrollbar,
            { scrollbar: a, $wrapperEl: i } = t,
            { $el: n, $dragEl: o } = a;
          (h = !0),
            (l =
              e.target === o[0] || e.target === o
                ? w(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            o.transition(100),
            b(e),
            clearTimeout(f),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e);
        }
        function y(e) {
          const { scrollbar: s, $wrapperEl: a } = t,
            { $el: i, $dragEl: n } = s;
          h &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            b(e),
            a.transition(0),
            i.transition(0),
            n.transition(0),
            r("scrollbarDragMove", e));
        }
        function E(e) {
          const s = t.params.scrollbar,
            { scrollbar: a, $wrapperEl: i } = t,
            { $el: n } = a;
          h &&
            ((h = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
            s.hide &&
              (clearTimeout(f),
              (f = p(() => {
                n.css("opacity", 0), n.transition(400);
              }, 1e3))),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
        }
        function T(e) {
          const {
              scrollbar: s,
              touchEventsTouch: a,
              touchEventsDesktop: i,
              params: r,
              support: l,
            } = t,
            o = s.$el[0],
            d = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            c = !(!l.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!o) return;
          const p = "on" === e ? "addEventListener" : "removeEventListener";
          l.touch
            ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c))
            : (o[p](i.start, x, d), n[p](i.move, y, d), n[p](i.end, E, c));
        }
        function C() {
          const { scrollbar: e, $el: s } = t;
          t.params.scrollbar = F(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const a = t.params.scrollbar;
          if (!a.el) return;
          let i = d(a.el);
          t.params.uniqueNavElements &&
            "string" == typeof a.el &&
            i.length > 1 &&
            1 === s.find(a.el).length &&
            (i = s.find(a.el));
          let r = i.find(`.${t.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
            i.append(r)),
            Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
            a.draggable && t.params.scrollbar.el && T("on"),
            i &&
              i[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
        }
        function $() {
          t.params.scrollbar.el && T("off");
        }
        s({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          i("init", () => {
            C(), v(), g();
          }),
          i("update resize observerUpdate lock unlock", () => {
            v();
          }),
          i("setTranslate", () => {
            g();
          }),
          i("setTransition", (e, s) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            })(s);
          }),
          i("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
          }),
          i("destroy", () => {
            $();
          }),
          Object.assign(t.scrollbar, {
            updateSize: v,
            setTranslate: g,
            init: C,
            destroy: $,
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ parallax: { enabled: !1 } });
        const i = (e, s) => {
            const { rtl: a } = t,
              i = d(e),
              r = a ? -1 : 1,
              n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x"),
              o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"),
              p = i.attr("data-swiper-parallax-opacity");
            if (
              (l || o
                ? ((l = l || "0"), (o = o || "0"))
                : t.isHorizontal()
                ? ((l = n), (o = "0"))
                : ((o = n), (l = "0")),
              (l =
                l.indexOf("%") >= 0
                  ? parseInt(l, 10) * s * r + "%"
                  : l * s * r + "px"),
              (o =
                o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
              null != p)
            ) {
              const e = p - (p - 1) * (1 - Math.abs(s));
              i[0].style.opacity = e;
            }
            if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
            else {
              const e = c - (c - 1) * (1 - Math.abs(s));
              i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
            }
          },
          r = () => {
            const { $el: e, slides: s, progress: a, snapGrid: r } = t;
            e
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((e) => {
                i(e, a);
              }),
              s.each((e, s) => {
                let n = e.progress;
                t.params.slidesPerGroup > 1 &&
                  "auto" !== t.params.slidesPerView &&
                  (n += Math.ceil(s / 2) - a * (r.length - 1)),
                  (n = Math.min(Math.max(n, -1), 1)),
                  d(e)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((e) => {
                      i(e, n);
                    });
              });
          };
        a("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          a("init", () => {
            t.params.parallax.enabled && r();
          }),
          a("setTranslate", () => {
            t.params.parallax.enabled && r();
          }),
          a("setTransition", (e, s) => {
            t.params.parallax.enabled &&
              (function (e) {
                void 0 === e && (e = t.params.speed);
                const { $el: s } = t;
                s.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((t) => {
                  const s = d(t);
                  let a =
                    parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (a = 0), s.transition(a);
                });
              })(s);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = r();
        s({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (t.zoom = { enabled: !1 });
        let l,
          o,
          c,
          p = 1,
          u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3,
          },
          f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let v = 1;
        function w(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            a = e.targetTouches[1].pageX,
            i = e.targetTouches[1].pageY;
          return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
        }
        function b(e) {
          const s = t.support,
            a = t.params.zoom;
          if (((o = !1), (c = !1), !s.gestures)) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (o = !0), (m.scaleStart = w(e));
          }
          (m.$slideEl && m.$slideEl.length) ||
          ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
          0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
          (m.$imageEl = m.$slideEl
            .find(`.${a.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
          (m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          0 !== m.$imageWrapEl.length)
            ? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
            : (m.$imageEl = void 0);
        }
        function x(e) {
          const s = t.support,
            a = t.params.zoom,
            i = t.zoom;
          if (!s.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (c = !0), (m.scaleMove = w(e));
          }
          m.$imageEl && 0 !== m.$imageEl.length
            ? (s.gestures
                ? (i.scale = e.scale * p)
                : (i.scale = (m.scaleMove / m.scaleStart) * p),
              i.scale > m.maxRatio &&
                (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
              i.scale < a.minRatio &&
                (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
              m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
            : "gesturechange" === e.type && b(e);
        }
        function y(e) {
          const s = t.device,
            a = t.support,
            i = t.params.zoom,
            r = t.zoom;
          if (!a.gestures) {
            if (!o || !c) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type && e.changedTouches.length < 2 && !s.android)
            )
              return;
            (o = !1), (c = !1);
          }
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
            m.$imageEl
              .transition(t.params.speed)
              .transform(`translate3d(0,0,0) scale(${r.scale})`),
            (p = r.scale),
            (u = !1),
            1 === r.scale && (m.$slideEl = void 0));
        }
        function E(e) {
          const s = t.zoom;
          if (!m.$imageEl || 0 === m.$imageEl.length) return;
          if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
          f.isMoved ||
            ((f.width = m.$imageEl[0].offsetWidth),
            (f.height = m.$imageEl[0].offsetHeight),
            (f.startX = h(m.$imageWrapEl[0], "x") || 0),
            (f.startY = h(m.$imageWrapEl[0], "y") || 0),
            (m.slideWidth = m.$slideEl[0].offsetWidth),
            (m.slideHeight = m.$slideEl[0].offsetHeight),
            m.$imageWrapEl.transition(0));
          const a = f.width * s.scale,
            i = f.height * s.scale;
          if (!(a < m.slideWidth && i < m.slideHeight)) {
            if (
              ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
              (f.maxX = -f.minX),
              (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
              (f.maxY = -f.minY),
              (f.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (f.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !f.isMoved && !u)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(f.minX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x < f.touchesStart.x) ||
                  (Math.floor(f.maxX) === Math.floor(f.startX) &&
                    f.touchesCurrent.x > f.touchesStart.x))
              )
                return void (f.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(f.minY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y < f.touchesStart.y) ||
                  (Math.floor(f.maxY) === Math.floor(f.startY) &&
                    f.touchesCurrent.y > f.touchesStart.y))
              )
                return void (f.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (f.isMoved = !0),
              (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
              (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
              f.currentX < f.minX &&
                (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
              f.currentX > f.maxX &&
                (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
              f.currentY < f.minY &&
                (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
              f.currentY > f.maxY &&
                (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
              g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
              (g.x =
                (f.touchesCurrent.x - g.prevPositionX) /
                (Date.now() - g.prevTime) /
                2),
              (g.y =
                (f.touchesCurrent.y - g.prevPositionY) /
                (Date.now() - g.prevTime) /
                2),
              Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
              (g.prevPositionX = f.touchesCurrent.x),
              (g.prevPositionY = f.touchesCurrent.y),
              (g.prevTime = Date.now()),
              m.$imageWrapEl.transform(
                `translate3d(${f.currentX}px, ${f.currentY}px,0)`
              );
          }
        }
        function T() {
          const e = t.zoom;
          m.$slideEl &&
            t.previousIndex !== t.activeIndex &&
            (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (p = 1),
            (m.$slideEl = void 0),
            (m.$imageEl = void 0),
            (m.$imageWrapEl = void 0));
        }
        function C(e) {
          const s = t.zoom,
            a = t.params.zoom;
          if (
            (m.$slideEl ||
              (e &&
                e.target &&
                (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
              m.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (m.$slideEl = t.$wrapperEl.children(
                      `.${t.params.slideActiveClass}`
                    ))
                  : (m.$slideEl = t.slides.eq(t.activeIndex))),
              (m.$imageEl = m.$slideEl
                .find(`.${a.containerClass}`)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))),
            !m.$imageEl ||
              0 === m.$imageEl.length ||
              !m.$imageWrapEl ||
              0 === m.$imageWrapEl.length)
          )
            return;
          let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            m.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === f.touchesStart.x && e
              ? ((i =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
            (s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            (p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            e
              ? (($ = m.$slideEl[0].offsetWidth),
                (S = m.$slideEl[0].offsetHeight),
                (l = m.$slideEl.offset().left + n.scrollX),
                (o = m.$slideEl.offset().top + n.scrollY),
                (c = l + $ / 2 - i),
                (u = o + S / 2 - r),
                (v = m.$imageEl[0].offsetWidth),
                (w = m.$imageEl[0].offsetHeight),
                (b = v * s.scale),
                (x = w * s.scale),
                (y = Math.min($ / 2 - b / 2, 0)),
                (E = Math.min(S / 2 - x / 2, 0)),
                (T = -y),
                (C = -E),
                (h = c * s.scale),
                (g = u * s.scale),
                h < y && (h = y),
                h > T && (h = T),
                g < E && (g = E),
                g > C && (g = C))
              : ((h = 0), (g = 0)),
            m.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${h}px, ${g}px,0)`),
            m.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${s.scale})`);
        }
        function $() {
          const e = t.zoom,
            s = t.params.zoom;
          m.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (m.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (m.$slideEl = t.slides.eq(t.activeIndex)),
            (m.$imageEl = m.$slideEl
              .find(`.${s.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
            m.$imageEl &&
              0 !== m.$imageEl.length &&
              m.$imageWrapEl &&
              0 !== m.$imageWrapEl.length &&
              (t.params.cssMode &&
                ((t.wrapperEl.style.overflow = ""),
                (t.wrapperEl.style.touchAction = "")),
              (e.scale = 1),
              (p = 1),
              m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
              m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
              (m.$slideEl = void 0));
        }
        function S(e) {
          const s = t.zoom;
          s.scale && 1 !== s.scale ? $() : C(e);
        }
        function M() {
          const e = t.support;
          return {
            passiveListener: !(
              "touchstart" !== t.touchEvents.start ||
              !e.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !e.passiveListener || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function P() {
          return `.${t.params.slideClass}`;
        }
        function k(e) {
          const { passiveListener: s } = M(),
            a = P();
          t.$wrapperEl[e]("gesturestart", a, b, s),
            t.$wrapperEl[e]("gesturechange", a, x, s),
            t.$wrapperEl[e]("gestureend", a, y, s);
        }
        function z() {
          l || ((l = !0), k("on"));
        }
        function O() {
          l && ((l = !1), k("off"));
        }
        function I() {
          const e = t.zoom;
          if (e.enabled) return;
          e.enabled = !0;
          const s = t.support,
            { passiveListener: a, activeListenerWithCapture: i } = M(),
            r = P();
          s.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
              t.$wrapperEl.on(t.touchEvents.end, O, a))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
              t.$wrapperEl.on(t.touchEvents.move, r, x, i),
              t.$wrapperEl.on(t.touchEvents.end, r, y, a),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.on(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              E,
              i
            );
        }
        function L() {
          const e = t.zoom;
          if (!e.enabled) return;
          const s = t.support;
          e.enabled = !1;
          const { passiveListener: a, activeListenerWithCapture: i } = M(),
            r = P();
          s.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
              t.$wrapperEl.off(t.touchEvents.end, O, a))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
              t.$wrapperEl.off(t.touchEvents.move, r, x, i),
              t.$wrapperEl.off(t.touchEvents.end, r, y, a),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              E,
              i
            );
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => v,
          set(e) {
            if (v !== e) {
              const t = m.$imageEl ? m.$imageEl[0] : void 0,
                s = m.$slideEl ? m.$slideEl[0] : void 0;
              i("zoomChange", e, t, s);
            }
            v = e;
          },
        }),
          a("init", () => {
            t.params.zoom.enabled && I();
          }),
          a("destroy", () => {
            L();
          }),
          a("touchStart", (e, s) => {
            t.zoom.enabled &&
              (function (e) {
                const s = t.device;
                m.$imageEl &&
                  0 !== m.$imageEl.length &&
                  (f.isTouched ||
                    (s.android && e.cancelable && e.preventDefault(),
                    (f.isTouched = !0),
                    (f.touchesStart.x =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (f.touchesStart.y =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY)));
              })(s);
          }),
          a("touchEnd", (e, s) => {
            t.zoom.enabled &&
              (function () {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved)
                  return (f.isTouched = !1), void (f.isMoved = !1);
                (f.isTouched = !1), (f.isMoved = !1);
                let s = 300,
                  a = 300;
                const i = g.x * s,
                  r = f.currentX + i,
                  n = g.y * a,
                  l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                  0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                (f.currentX = r), (f.currentY = l);
                const d = f.width * e.scale,
                  c = f.height * e.scale;
                (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                  (f.maxX = -f.minX),
                  (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                  (f.maxY = -f.minY),
                  (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                  (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                  m.$imageWrapEl
                    .transition(o)
                    .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
              })();
          }),
          a("doubleTap", (e, s) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              S(s);
          }),
          a("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && T();
          }),
          a("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T();
          }),
          Object.assign(t.zoom, {
            enable: I,
            disable: L,
            in: C,
            out: $,
            toggle: S,
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        s({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let n = !1,
          l = !1;
        function o(e, s) {
          void 0 === s && (s = !0);
          const a = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            n = r.find(
              `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
            );
          !r.hasClass(a.elementClass) ||
            r.hasClass(a.loadedClass) ||
            r.hasClass(a.loadingClass) ||
            n.push(r[0]),
            0 !== n.length &&
              n.each((e) => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"),
                  c = n.attr("data-src"),
                  p = n.attr("data-srcset"),
                  u = n.attr("data-sizes"),
                  h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (n.css("background-image", `url("${l}")`),
                          n.removeAttr("data-background"))
                        : (p &&
                            (n.attr("srcset", p), n.removeAttr("data-srcset")),
                          u && (n.attr("sizes", u), n.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each((e) => {
                              const t = d(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (n.attr("src", c), n.removeAttr("data-src"))),
                      n.addClass(a.loadedClass).removeClass(a.loadingClass),
                      r.find(`.${a.preloaderClass}`).remove(),
                      t.params.loop && s)
                    ) {
                      const e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(t.params.slideDuplicateClass)) {
                        o(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        o(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    i("lazyImageReady", r[0], n[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  i("lazyImageLoad", r[0], n[0]);
              });
        }
        function c() {
          const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
            r = t.virtual && s.virtual.enabled,
            n = s.lazy;
          let c = s.slidesPerView;
          function p(t) {
            if (r) {
              if (
                e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (a[t]) return !0;
            return !1;
          }
          function u(e) {
            return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
          }
          if (
            ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress)
          )
            e.children(`.${s.slideVisibleClass}`).each((e) => {
              o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
            });
          else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
          else o(i);
          if (n.loadPrevNext)
            if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
              const e = n.loadPrevNextAmount,
                t = c,
                s = Math.min(i + t + Math.max(e, t), a.length),
                r = Math.max(i - Math.max(t, e), 0);
              for (let e = i + c; e < s; e += 1) p(e) && o(e);
              for (let e = r; e < i; e += 1) p(e) && o(e);
            } else {
              const t = e.children(`.${s.slideNextClass}`);
              t.length > 0 && o(u(t));
              const a = e.children(`.${s.slidePrevClass}`);
              a.length > 0 && o(u(a));
            }
        }
        function p() {
          const e = r();
          if (!t || t.destroyed) return;
          const s = t.params.lazy.scrollingElement
              ? d(t.params.lazy.scrollingElement)
              : d(e),
            a = s[0] === e,
            i = a ? e.innerWidth : s[0].offsetWidth,
            l = a ? e.innerHeight : s[0].offsetHeight,
            o = t.$el.offset(),
            { rtlTranslate: u } = t;
          let h = !1;
          u && (o.left -= t.$el[0].scrollLeft);
          const m = [
            [o.left, o.top],
            [o.left + t.width, o.top],
            [o.left, o.top + t.height],
            [o.left + t.width, o.top + t.height],
          ];
          for (let e = 0; e < m.length; e += 1) {
            const t = m[e];
            if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
              if (0 === t[0] && 0 === t[1]) continue;
              h = !0;
            }
          }
          const f = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          h
            ? (c(), s.off("scroll", p, f))
            : n || ((n = !0), s.on("scroll", p, f));
        }
        a("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          a("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
          }),
          a("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              c();
          }),
          a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
          }),
          a("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !l)) &&
              (t.params.lazy.checkInView ? p() : c());
          }),
          a("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? p() : c());
          }),
          a("slideChange", () => {
            const {
              lazy: e,
              cssMode: s,
              watchSlidesProgress: a,
              touchReleaseOnEdges: i,
              resistanceRatio: r,
            } = t.params;
            e.enabled && (s || (a && (i || 0 === r))) && c();
          }),
          Object.assign(t.lazy, { load: c, loadInSlide: o });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        function i(e, t) {
          const s = (function () {
            let e, t, s;
            return (a, i) => {
              for (t = -1, e = a.length; e - t > 1; )
                (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
              return e;
            };
          })();
          let a, i;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = s(this.x, e)),
                  (a = i - 1),
                  ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                    (this.x[i] - this.x[a]) +
                    this.y[a])
                : 0;
            }),
            this
          );
        }
        function r() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          a("beforeInit", () => {
            t.controller.control = t.params.controller.control;
          }),
          a("update", () => {
            r();
          }),
          a("resize", () => {
            r();
          }),
          a("observerUpdate", () => {
            r();
          }),
          a("setTranslate", (e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a);
          }),
          a("setTransition", (e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, s) {
              const a = t.controller.control;
              let r, n;
              const l = t.constructor;
              function o(e) {
                const s = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  (!(function (e) {
                    t.controller.spline ||
                      (t.controller.spline = t.params.loop
                        ? new i(t.slidesGrid, e.slidesGrid)
                        : new i(t.snapGrid, e.snapGrid));
                  })(e),
                  (n = -t.controller.spline.interpolate(-s))),
                  (n && "container" !== t.params.controller.by) ||
                    ((r =
                      (e.maxTranslate() - e.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (n = (s - t.minTranslate()) * r + e.minTranslate())),
                  t.params.controller.inverse && (n = e.maxTranslate() - n),
                  e.updateProgress(n),
                  e.setTranslate(n, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(a))
                for (let e = 0; e < a.length; e += 1)
                  a[e] !== s && a[e] instanceof l && o(a[e]);
              else a instanceof l && s !== a && o(a);
            },
            setTransition: function (e, s) {
              const a = t.constructor,
                i = t.controller.control;
              let r;
              function n(s) {
                s.setTransition(e, t),
                  0 !== e &&
                    (s.transitionStart(),
                    s.params.autoHeight &&
                      p(() => {
                        s.updateAutoHeight();
                      }),
                    s.$wrapperEl.transitionEnd(() => {
                      i &&
                        (s.params.loop &&
                          "slide" === t.params.controller.by &&
                          s.loopFix(),
                        s.transitionEnd());
                    }));
              }
              if (Array.isArray(i))
                for (r = 0; r < i.length; r += 1)
                  i[r] !== s && i[r] instanceof a && n(i[r]);
              else i instanceof a && s !== i && n(i);
            },
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
          },
        });
        let i = null;
        function r(e) {
          const t = i;
          0 !== t.length && (t.html(""), t.html(e));
        }
        function n(e) {
          e.attr("tabIndex", "0");
        }
        function l(e) {
          e.attr("tabIndex", "-1");
        }
        function o(e, t) {
          e.attr("role", t);
        }
        function c(e, t) {
          e.attr("aria-roledescription", t);
        }
        function p(e, t) {
          e.attr("aria-label", t);
        }
        function u(e) {
          e.attr("aria-disabled", !0);
        }
        function h(e) {
          e.attr("aria-disabled", !1);
        }
        function m(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const s = t.params.a11y,
            a = d(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            a.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              a.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination &&
              a.is(U(t.params.pagination.bulletClass)) &&
              a[0].click();
        }
        function f() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function g() {
          return f() && t.params.pagination.clickable;
        }
        const v = (e, t, s) => {
            n(e),
              "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)),
              p(e, s),
              (function (e, t) {
                e.attr("aria-controls", t);
              })(e, t);
          },
          w = (e) => {
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s)) return;
            const a = t.slides.indexOf(s) === t.activeIndex,
              i =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(s);
            a || i || t.slideTo(t.slides.indexOf(s), 0);
          };
        function b() {
          const e = t.params.a11y;
          t.$el.append(i);
          const s = t.$el;
          e.containerRoleDescriptionMessage &&
            c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
          const a = t.$wrapperEl,
            r =
              a.attr("id") ||
              `swiper-wrapper-${
                ((n = 16),
                void 0 === n && (n = 16),
                "x"
                  .repeat(n)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var n;
          const l =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var u;
          (u = r),
            a.attr("id", u),
            (function (e, t) {
              e.attr("aria-live", t);
            })(a, l),
            e.itemRoleDescriptionMessage &&
              c(d(t.slides), e.itemRoleDescriptionMessage),
            o(d(t.slides), e.slideRole);
          const h = t.params.loop
            ? t.slides.filter(
                (e) => !e.classList.contains(t.params.slideDuplicateClass)
              ).length
            : t.slides.length;
          let f, b;
          t.slides.each((s, a) => {
            const i = d(s),
              r = t.params.loop
                ? parseInt(i.attr("data-swiper-slide-index"), 10)
                : a;
            p(
              i,
              e.slideLabelMessage
                .replace(/\{\{index\}\}/, r + 1)
                .replace(/\{\{slidesLength\}\}/, h)
            );
          }),
            t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl),
            f && f.length && v(f, r, e.nextSlideMessage),
            b && b.length && v(b, r, e.prevSlideMessage),
            g() &&
              t.pagination.$el.on(
                "keydown",
                U(t.params.pagination.bulletClass),
                m
              ),
            t.$el.on("focus", w, !0);
        }
        a("beforeInit", () => {
          i = d(
            `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }),
          a("afterInit", () => {
            t.params.a11y.enabled && b();
          }),
          a("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { $nextEl: e, $prevEl: s } = t.navigation;
                s &&
                  s.length > 0 &&
                  (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
                  e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
              })();
          }),
          a("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                f() &&
                  t.pagination.bullets.each((s) => {
                    const a = d(s);
                    t.params.pagination.clickable &&
                      (n(a),
                      t.params.pagination.renderBullet ||
                        (o(a, "button"),
                        p(
                          a,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            a.index() + 1
                          )
                        ))),
                      a.is(`.${t.params.pagination.bulletActiveClass}`)
                        ? a.attr("aria-current", "true")
                        : a.removeAttr("aria-current");
                  });
              })();
          }),
          a("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                let e, s;
                i && i.length > 0 && i.remove(),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (e = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (s = t.navigation.$prevEl),
                  e && e.off("keydown", m),
                  s && s.off("keydown", m),
                  g() &&
                    t.pagination.$el.off(
                      "keydown",
                      U(t.params.pagination.bulletClass),
                      m
                    ),
                  t.$el.off("focus", w, !0);
              })();
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
        });
        let i = !1,
          n = {};
        const l = (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          o = (e) => {
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              i = a.length;
            return { key: a[i - 2], value: a[i - 1] };
          },
          d = (e, s) => {
            const a = r();
            if (!i || !t.params.history.enabled) return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.slides.eq(s);
            let d = l(o.attr("data-history"));
            if (t.params.history.root.length > 0) {
              let s = t.params.history.root;
              "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                (d = `${s}/${e}/${d}`);
            } else n.pathname.includes(e) || (d = `${e}/${d}`);
            const c = a.history.state;
            (c && c.value === d) ||
              (t.params.history.replaceState
                ? a.history.replaceState({ value: d }, null, d)
                : a.history.pushState({ value: d }, null, d));
          },
          c = (e, s, a) => {
            if (s)
              for (let i = 0, r = t.slides.length; i < r; i += 1) {
                const r = t.slides.eq(i);
                if (
                  l(r.attr("data-history")) === s &&
                  !r.hasClass(t.params.slideDuplicateClass)
                ) {
                  const s = r.index();
                  t.slideTo(s, e, a);
                }
              }
            else t.slideTo(0, e, a);
          },
          p = () => {
            (n = o(t.params.url)), c(t.params.speed, t.paths.value, !1);
          };
        a("init", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              if (t.params.history) {
                if (!e.history || !e.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (i = !0),
                  (n = o(t.params.url)),
                  (n.key || n.value) &&
                    (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      e.addEventListener("popstate", p));
              }
            })();
        }),
          a("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const e = r();
                t.params.history.replaceState ||
                  e.removeEventListener("popstate", p);
              })();
          }),
          a("transitionEnd _freeModeNoMomentumRelease", () => {
            i && d(t.params.history.key, t.activeIndex);
          }),
          a("slideChange", () => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, emit: i, on: n } = e,
          l = !1;
        const o = a(),
          c = r();
        s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
        const p = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              const s = t.$wrapperEl
                .children(`.${t.params.slideClass}[data-hash="${e}"]`)
                .index();
              if (void 0 === s) return;
              t.slideTo(s);
            }
          },
          u = () => {
            if (l && t.params.hashNavigation.enabled)
              if (
                t.params.hashNavigation.replaceState &&
                c.history &&
                c.history.replaceState
              )
                c.history.replaceState(
                  null,
                  null,
                  `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
                ),
                  i("hashSet");
              else {
                const e = t.slides.eq(t.activeIndex),
                  s = e.attr("data-hash") || e.attr("data-history");
                (o.location.hash = s || ""), i("hashSet");
              }
          };
        n("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              l = !0;
              const e = o.location.hash.replace("#", "");
              if (e) {
                const s = 0;
                for (let a = 0, i = t.slides.length; a < i; a += 1) {
                  const i = t.slides.eq(a);
                  if (
                    (i.attr("data-hash") || i.attr("data-history")) === e &&
                    !i.hasClass(t.params.slideDuplicateClass)
                  ) {
                    const e = i.index();
                    t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                  }
                }
              }
              t.params.hashNavigation.watchState && d(c).on("hashchange", p);
            })();
        }),
          n("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              d(c).off("hashchange", p);
          }),
          n("transitionEnd _freeModeNoMomentumRelease", () => {
            l && u();
          }),
          n("slideChange", () => {
            l && t.params.cssMode && u();
          });
      },
      function (e) {
        let t,
          { swiper: s, extendParams: i, on: r, emit: n } = e;
        function l() {
          const e = s.slides.eq(s.activeIndex);
          let a = s.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
            clearTimeout(t),
            (t = p(() => {
              let e;
              s.params.autoplay.reverseDirection
                ? s.params.loop
                  ? (s.loopFix(),
                    (e = s.slidePrev(s.params.speed, !0, !0)),
                    n("autoplay"))
                  : s.isBeginning
                  ? s.params.autoplay.stopOnLastSlide
                    ? d()
                    : ((e = s.slideTo(
                        s.slides.length - 1,
                        s.params.speed,
                        !0,
                        !0
                      )),
                      n("autoplay"))
                  : ((e = s.slidePrev(s.params.speed, !0, !0)), n("autoplay"))
                : s.params.loop
                ? (s.loopFix(),
                  (e = s.slideNext(s.params.speed, !0, !0)),
                  n("autoplay"))
                : s.isEnd
                ? s.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = s.slideTo(0, s.params.speed, !0, !0)), n("autoplay"))
                : ((e = s.slideNext(s.params.speed, !0, !0)), n("autoplay")),
                ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
            }, a));
        }
        function o() {
          return (
            void 0 === t &&
            !s.autoplay.running &&
            ((s.autoplay.running = !0), n("autoplayStart"), l(), !0)
          );
        }
        function d() {
          return (
            !!s.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (s.autoplay.running = !1),
            n("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          s.autoplay.running &&
            (s.autoplay.paused ||
              (t && clearTimeout(t),
              (s.autoplay.paused = !0),
              0 !== e && s.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    s.$wrapperEl[0].addEventListener(e, h);
                  })
                : ((s.autoplay.paused = !1), l())));
        }
        function u() {
          const e = a();
          "hidden" === e.visibilityState && s.autoplay.running && c(),
            "visible" === e.visibilityState &&
              s.autoplay.paused &&
              (l(), (s.autoplay.paused = !1));
        }
        function h(e) {
          s &&
            !s.destroyed &&
            s.$wrapperEl &&
            e.target === s.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              s.$wrapperEl[0].removeEventListener(e, h);
            }),
            (s.autoplay.paused = !1),
            s.autoplay.running ? l() : d());
        }
        function m() {
          s.params.autoplay.disableOnInteraction
            ? d()
            : (n("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              s.$wrapperEl[0].removeEventListener(e, h);
            });
        }
        function f() {
          s.params.autoplay.disableOnInteraction ||
            ((s.autoplay.paused = !1), n("autoplayResume"), l());
        }
        (s.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            if (s.params.autoplay.enabled) {
              o();
              a().addEventListener("visibilitychange", u),
                s.params.autoplay.pauseOnMouseEnter &&
                  (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
            }
          }),
          r("beforeTransitionStart", (e, t, a) => {
            s.autoplay.running &&
              (a || !s.params.autoplay.disableOnInteraction
                ? s.autoplay.pause(t)
                : d());
          }),
          r("sliderFirstMove", () => {
            s.autoplay.running &&
              (s.params.autoplay.disableOnInteraction ? d() : c());
          }),
          r("touchEnd", () => {
            s.params.cssMode &&
              s.autoplay.paused &&
              !s.params.autoplay.disableOnInteraction &&
              l();
          }),
          r("destroy", () => {
            s.$el.off("mouseenter", m),
              s.$el.off("mouseleave", f),
              s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u);
          }),
          Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let i = !1,
          r = !1;
        function n() {
          const e = t.thumbs.swiper;
          if (!e) return;
          const s = e.clickedIndex,
            a = e.clickedSlide;
          if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == s) return;
          let i;
          if (
            ((i = e.params.loop
              ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)
              : s),
            t.params.loop)
          ) {
            let e = t.activeIndex;
            t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
              (t.loopFix(),
              (t._clientLeft = t.$wrapperEl[0].clientLeft),
              (e = t.activeIndex));
            const s = t.slides
                .eq(e)
                .prevAll(`[data-swiper-slide-index="${i}"]`)
                .eq(0)
                .index(),
              a = t.slides
                .eq(e)
                .nextAll(`[data-swiper-slide-index="${i}"]`)
                .eq(0)
                .index();
            i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
          }
          t.slideTo(i);
        }
        function l() {
          const { thumbs: e } = t.params;
          if (i) return !1;
          i = !0;
          const s = t.constructor;
          if (e.swiper instanceof s)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (m(e.swiper)) {
            const a = Object.assign({}, e.swiper);
            Object.assign(a, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new s(a)),
              (r = !0);
          }
          return (
            t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", n),
            !0
          );
        }
        function o(e) {
          const s = t.thumbs.swiper;
          if (!s) return;
          const a =
              "auto" === s.params.slidesPerView
                ? s.slidesPerViewDynamic()
                : s.params.slidesPerView,
            i = t.params.thumbs.autoScrollOffset,
            r = i && !s.params.loop;
          if (t.realIndex !== s.realIndex || r) {
            let n,
              l,
              o = s.activeIndex;
            if (s.params.loop) {
              s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
                (s.loopFix(),
                (s._clientLeft = s.$wrapperEl[0].clientLeft),
                (o = s.activeIndex));
              const e = s.slides
                  .eq(o)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                a = s.slides
                  .eq(o)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              (n =
                void 0 === e
                  ? a
                  : void 0 === a
                  ? e
                  : a - o == o - e
                  ? s.params.slidesPerGroup > 1
                    ? a
                    : o
                  : a - o < o - e
                  ? a
                  : e),
                (l = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else (n = t.realIndex), (l = n > t.previousIndex ? "next" : "prev");
            r && (n += "next" === l ? i : -1 * i),
              s.visibleSlidesIndexes &&
                s.visibleSlidesIndexes.indexOf(n) < 0 &&
                (s.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(a / 2) + 1
                        : n + Math.floor(a / 2) - 1)
                  : n > o && s.params.slidesPerGroup,
                s.slideTo(n, e ? 0 : void 0));
          }
          let n = 1;
          const l = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (n = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (n = 1),
            (n = Math.floor(n)),
            s.slides.removeClass(l),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
          )
            for (let e = 0; e < n; e += 1)
              s.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                .addClass(l);
          else
            for (let e = 0; e < n; e += 1)
              s.slides.eq(t.realIndex + e).addClass(l);
        }
        (t.thumbs = { swiper: null }),
          a("beforeInit", () => {
            const { thumbs: e } = t.params;
            e && e.swiper && (l(), o(!0));
          }),
          a("slideChange update resize observerUpdate", () => {
            t.thumbs.swiper && o();
          }),
          a("setTransition", (e, s) => {
            const a = t.thumbs.swiper;
            a && a.setTransition(s);
          }),
          a("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && r && e && e.destroy();
          }),
          Object.assign(t.thumbs, { init: l, update: o });
      },
      function (e) {
        let { swiper: t, extendParams: s, emit: a, once: i } = e;
        s({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: s } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: s[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                    time: u(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: s } = e;
                const {
                    params: r,
                    $wrapperEl: n,
                    rtlTranslate: l,
                    snapGrid: o,
                    touchEventsData: d,
                  } = t,
                  c = u() - d.touchStartTime;
                if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (s > -t.maxTranslate())
                  t.slides.length < o.length
                    ? t.slideTo(o.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (r.freeMode.momentum) {
                    if (d.velocities.length > 1) {
                      const e = d.velocities.pop(),
                        s = d.velocities.pop(),
                        a = e.position - s.position,
                        i = e.time - s.time;
                      (t.velocity = a / i),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= r.freeMode.momentumVelocityRatio),
                      (d.velocities.length = 0);
                    let e = 1e3 * r.freeMode.momentumRatio;
                    const s = t.velocity * e;
                    let c = t.translate + s;
                    l && (c = -c);
                    let p,
                      h = !1;
                    const m =
                      20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                    let f;
                    if (c < t.maxTranslate())
                      r.freeMode.momentumBounce
                        ? (c + t.maxTranslate() < -m &&
                            (c = t.maxTranslate() - m),
                          (p = t.maxTranslate()),
                          (h = !0),
                          (d.allowMomentumBounce = !0))
                        : (c = t.maxTranslate()),
                        r.loop && r.centeredSlides && (f = !0);
                    else if (c > t.minTranslate())
                      r.freeMode.momentumBounce
                        ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                          (p = t.minTranslate()),
                          (h = !0),
                          (d.allowMomentumBounce = !0))
                        : (c = t.minTranslate()),
                        r.loop && r.centeredSlides && (f = !0);
                    else if (r.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < o.length; t += 1)
                        if (o[t] > -c) {
                          e = t;
                          break;
                        }
                      (c =
                        Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) ||
                        "next" === t.swipeDirection
                          ? o[e]
                          : o[e - 1]),
                        (c = -c);
                    }
                    if (
                      (f &&
                        i("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = l
                          ? Math.abs((-c - t.translate) / t.velocity)
                          : Math.abs((c - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                      ) {
                        const s = Math.abs((l ? -c : c) - t.translate),
                          a = t.slidesSizesGrid[t.activeIndex];
                        e =
                          s < a
                            ? r.speed
                            : s < 2 * a
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                      }
                    } else if (r.freeMode.sticky) return void t.slideToClosest();
                    r.freeMode.momentumBounce && h
                      ? (t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        n.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            d.allowMomentumBounce &&
                            (a("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(p),
                                n.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (a("_freeModeNoMomentumRelease"),
                        t.updateProgress(c),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          n.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(c),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (r.freeMode.sticky) return void t.slideToClosest();
                    r.freeMode && a("_freeModeNoMomentumRelease");
                  }
                  (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let t,
          s,
          a,
          { swiper: i, extendParams: r } = e;
        r({ grid: { rows: 1, fill: "column" } }),
          (i.grid = {
            initSlides: (e) => {
              const { slidesPerView: r } = i.params,
                { rows: n, fill: l } = i.params.grid;
              (s = t / n),
                (a = Math.floor(e / n)),
                (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
                "auto" !== r && "row" === l && (t = Math.max(t, r * n));
            },
            updateSlide: (e, r, n, l) => {
              const { slidesPerGroup: o, spaceBetween: d } = i.params,
                { rows: c, fill: p } = i.params.grid;
              let u, h, m;
              if ("row" === p && o > 1) {
                const s = Math.floor(e / (o * c)),
                  a = e - c * o * s,
                  i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                (m = Math.floor(a / i)),
                  (h = a - m * i + s * o),
                  (u = h + (m * t) / c),
                  r.css({ "-webkit-order": u, order: u });
              } else
                "column" === p
                  ? ((h = Math.floor(e / c)),
                    (m = e - h * c),
                    (h > a || (h === a && m === c - 1)) &&
                      ((m += 1), m >= c && ((m = 0), (h += 1))))
                  : ((m = Math.floor(e / s)), (h = e - m * s));
              r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
            },
            updateWrapperSize: (e, s, a) => {
              const {
                  spaceBetween: r,
                  centeredSlides: n,
                  roundLengths: l,
                } = i.params,
                { rows: o } = i.params.grid;
              if (
                ((i.virtualSize = (e + r) * t),
                (i.virtualSize = Math.ceil(i.virtualSize / o) - r),
                i.$wrapperEl.css({ [a("width")]: `${i.virtualSize + r}px` }),
                n)
              ) {
                s.splice(0, s.length);
                const e = [];
                for (let t = 0; t < s.length; t += 1) {
                  let a = s[t];
                  l && (a = Math.floor(a)),
                    s[t] < i.virtualSize + s[0] && e.push(a);
                }
                s.push(...e);
              }
            },
          });
      },
      function (e) {
        let { swiper: t } = e;
        Object.assign(t, {
          appendSlide: K.bind(t),
          prependSlide: Z.bind(t),
          addSlide: J.bind(t),
          removeSlide: Q.bind(t),
          removeAllSlides: ee.bind(t),
        });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ fadeEffect: { crossFade: !1, transformEl: null } }),
          te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
              const { slides: e } = t,
                s = t.params.fadeEffect;
              for (let a = 0; a < e.length; a += 1) {
                const e = t.slides.eq(a);
                let i = -e[0].swiperSlideOffset;
                t.params.virtualTranslate || (i -= t.translate);
                let r = 0;
                t.isHorizontal() || ((r = i), (i = 0));
                const n = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e[0].progress), 0)
                  : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                se(s, e)
                  .css({ opacity: n })
                  .transform(`translate3d(${i}px, ${r}px, 0px)`);
              }
            },
            setTransition: (e) => {
              const { transformEl: s } = t.params.fadeEffect;
              (s ? t.slides.find(s) : t.slides).transition(e),
                ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        }),
          te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
              const {
                  $el: e,
                  $wrapperEl: s,
                  slides: a,
                  width: i,
                  height: r,
                  rtlTranslate: n,
                  size: l,
                  browser: o,
                } = t,
                c = t.params.cubeEffect,
                p = t.isHorizontal(),
                u = t.virtual && t.params.virtual.enabled;
              let h,
                m = 0;
              c.shadow &&
                (p
                  ? ((h = s.find(".swiper-cube-shadow")),
                    0 === h.length &&
                      ((h = d('<div class="swiper-cube-shadow"></div>')),
                      s.append(h)),
                    h.css({ height: `${i}px` }))
                  : ((h = e.find(".swiper-cube-shadow")),
                    0 === h.length &&
                      ((h = d('<div class="swiper-cube-shadow"></div>')),
                      e.append(h))));
              for (let e = 0; e < a.length; e += 1) {
                const t = a.eq(e);
                let s = e;
                u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                let i = 90 * s,
                  r = Math.floor(i / 360);
                n && ((i = -i), (r = Math.floor(-i / 360)));
                const o = Math.max(Math.min(t[0].progress, 1), -1);
                let h = 0,
                  f = 0,
                  g = 0;
                s % 4 == 0
                  ? ((h = 4 * -r * l), (g = 0))
                  : (s - 1) % 4 == 0
                  ? ((h = 0), (g = 4 * -r * l))
                  : (s - 2) % 4 == 0
                  ? ((h = l + 4 * r * l), (g = l))
                  : (s - 3) % 4 == 0 && ((h = -l), (g = 3 * l + 4 * l * r)),
                  n && (h = -h),
                  p || ((f = h), (h = 0));
                const v = `rotateX(${p ? 0 : -i}deg) rotateY(${
                  p ? i : 0
                }deg) translate3d(${h}px, ${f}px, ${g}px)`;
                if (
                  (o <= 1 &&
                    o > -1 &&
                    ((m = 90 * s + 90 * o), n && (m = 90 * -s - 90 * o)),
                  t.transform(v),
                  c.slideShadows)
                ) {
                  let e = p
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    s = p
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length &&
                    ((e = d(
                      `<div class="swiper-slide-shadow-${
                        p ? "left" : "top"
                      }"></div>`
                    )),
                    t.append(e)),
                    0 === s.length &&
                      ((s = d(
                        `<div class="swiper-slide-shadow-${
                          p ? "right" : "bottom"
                        }"></div>`
                      )),
                      t.append(s)),
                    e.length && (e[0].style.opacity = Math.max(-o, 0)),
                    s.length && (s[0].style.opacity = Math.max(o, 0));
                }
              }
              if (
                (s.css({
                  "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                  "transform-origin": `50% 50% -${l / 2}px`,
                }),
                c.shadow)
              )
                if (p)
                  h.transform(
                    `translate3d(0px, ${i / 2 + c.shadowOffset}px, ${
                      -i / 2
                    }px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`
                  );
                else {
                  const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                    t =
                      1.5 -
                      (Math.sin((2 * e * Math.PI) / 360) / 2 +
                        Math.cos((2 * e * Math.PI) / 360) / 2),
                    s = c.shadowScale,
                    a = c.shadowScale / t,
                    i = c.shadowOffset;
                  h.transform(
                    `scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${
                      -r / 2 / a
                    }px) rotateX(-90deg)`
                  );
                }
              const f = o.isSafari || o.isWebView ? -l / 2 : 0;
              s.transform(
                `translate3d(0px,0,${f}px) rotateX(${
                  t.isHorizontal() ? 0 : m
                }deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`
              );
            },
            setTransition: (e) => {
              const { $el: s, slides: a } = t;
              a
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                t.params.cubeEffect.shadow &&
                  !t.isHorizontal() &&
                  s.find(".swiper-cube-shadow").transition(e);
            },
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
        }),
          te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
              const { slides: e, rtlTranslate: s } = t,
                a = t.params.flipEffect;
              for (let i = 0; i < e.length; i += 1) {
                const r = e.eq(i);
                let n = r[0].progress;
                t.params.flipEffect.limitRotation &&
                  (n = Math.max(Math.min(r[0].progress, 1), -1));
                const l = r[0].swiperSlideOffset;
                let o = -180 * n,
                  d = 0,
                  c = t.params.cssMode ? -l - t.translate : -l,
                  p = 0;
                if (
                  (t.isHorizontal()
                    ? s && (o = -o)
                    : ((p = c), (c = 0), (d = -o), (o = 0)),
                  (r[0].style.zIndex = -Math.abs(Math.round(n)) + e.length),
                  a.slideShadows)
                ) {
                  let e = t.isHorizontal()
                      ? r.find(".swiper-slide-shadow-left")
                      : r.find(".swiper-slide-shadow-top"),
                    s = t.isHorizontal()
                      ? r.find(".swiper-slide-shadow-right")
                      : r.find(".swiper-slide-shadow-bottom");
                  0 === e.length &&
                    (e = ie(a, r, t.isHorizontal() ? "left" : "top")),
                    0 === s.length &&
                      (s = ie(a, r, t.isHorizontal() ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = Math.max(-n, 0)),
                    s.length && (s[0].style.opacity = Math.max(n, 0));
                }
                const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                se(a, r).transform(u);
              }
            },
            setTransition: (e) => {
              const { transformEl: s } = t.params.flipEffect;
              (s ? t.slides.find(s) : t.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                ae({ swiper: t, duration: e, transformEl: s });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
              const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
                r = t.params.coverflowEffect,
                n = t.isHorizontal(),
                l = t.translate,
                o = n ? e / 2 - l : s / 2 - l,
                d = n ? r.rotate : -r.rotate,
                c = r.depth;
              for (let e = 0, t = a.length; e < t; e += 1) {
                const t = a.eq(e),
                  s = i[e],
                  l = (o - t[0].swiperSlideOffset - s / 2) / s,
                  p =
                    "function" == typeof r.modifier
                      ? r.modifier(l)
                      : l * r.modifier;
                let u = n ? d * p : 0,
                  h = n ? 0 : d * p,
                  m = -c * Math.abs(p),
                  f = r.stretch;
                "string" == typeof f &&
                  -1 !== f.indexOf("%") &&
                  (f = (parseFloat(r.stretch) / 100) * s);
                let g = n ? 0 : f * p,
                  v = n ? f * p : 0,
                  w = 1 - (1 - r.scale) * Math.abs(p);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(h) < 0.001 && (h = 0),
                  Math.abs(w) < 0.001 && (w = 0);
                const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                if (
                  (se(r, t).transform(b),
                  (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                  r.slideShadows)
                ) {
                  let e = n
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    s = n
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                    0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = p > 0 ? p : 0),
                    s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
                }
              }
            },
            setTransition: (e) => {
              const { transformEl: s } = t.params.coverflowEffect;
              (s ? t.slides.find(s) : t.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const i = (e) => ("string" == typeof e ? e : `${e}px`);
        te({
          effect: "creative",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
              r = t.params.creativeEffect,
              { progressMultiplier: n } = r,
              l = t.params.centeredSlides;
            if (l) {
              const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
              s.transform(`translateX(calc(50% - ${e}px))`);
            }
            for (let s = 0; s < e.length; s += 1) {
              const a = e.eq(s),
                o = a[0].progress,
                d = Math.min(
                  Math.max(a[0].progress, -r.limitProgress),
                  r.limitProgress
                );
              let c = d;
              l ||
                (c = Math.min(
                  Math.max(a[0].originalProgress, -r.limitProgress),
                  r.limitProgress
                ));
              const p = a[0].swiperSlideOffset,
                u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                h = [0, 0, 0];
              let m = !1;
              t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
              let f = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              d < 0
                ? ((f = r.next), (m = !0))
                : d > 0 && ((f = r.prev), (m = !0)),
                u.forEach((e, t) => {
                  u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                    d * n
                  )}))`;
                }),
                h.forEach((e, t) => {
                  h[t] = f.rotate[t] * Math.abs(d * n);
                }),
                (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
              const g = u.join(", "),
                v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                w =
                  c < 0
                    ? `scale(${1 + (1 - f.scale) * c * n})`
                    : `scale(${1 - (1 - f.scale) * c * n})`,
                b =
                  c < 0
                    ? 1 + (1 - f.opacity) * c * n
                    : 1 - (1 - f.opacity) * c * n,
                x = `translate3d(${g}) ${v} ${w}`;
              if ((m && f.shadow) || !m) {
                let e = a.children(".swiper-slide-shadow");
                if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                  const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                  e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                }
              }
              const y = se(r, a);
              y.transform(x).css({ opacity: b }),
                f.origin && y.css("transform-origin", f.origin);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.creativeEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ cardsEffect: { slideShadows: !0, transformEl: null } }),
          te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
              const { slides: e, activeIndex: s } = t,
                a = t.params.cardsEffect,
                { startTranslate: i, isTouched: r } = t.touchEventsData,
                n = t.translate;
              for (let l = 0; l < e.length; l += 1) {
                const o = e.eq(l),
                  d = o[0].progress,
                  c = Math.min(Math.max(d, -4), 4);
                let p = o[0].swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (p -= e[0].swiperSlideOffset);
                let u = t.params.cssMode ? -p - t.translate : -p,
                  h = 0;
                const m = -100 * Math.abs(c);
                let f = 1,
                  g = -2 * c,
                  v = 8 - 0.75 * Math.abs(c);
                const w =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + l
                      : l,
                  b =
                    (w === s || w === s - 1) &&
                    c > 0 &&
                    c < 1 &&
                    (r || t.params.cssMode) &&
                    n < i,
                  x =
                    (w === s || w === s + 1) &&
                    c < 0 &&
                    c > -1 &&
                    (r || t.params.cssMode) &&
                    n > i;
                if (b || x) {
                  const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * c * e),
                    (f += -0.5 * e),
                    (v += 96 * e),
                    (h = -25 * e * Math.abs(c) + "%");
                }
                if (
                  ((u =
                    c < 0
                      ? `calc(${u}px + (${v * Math.abs(c)}%))`
                      : c > 0
                      ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                      : `${u}px`),
                  !t.isHorizontal())
                ) {
                  const e = h;
                  (h = u), (u = e);
                }
                const y = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${
                  c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)
                })\n      `;
                if (a.slideShadows) {
                  let e = o.find(".swiper-slide-shadow");
                  0 === e.length && (e = ie(a, o)),
                    e.length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                se(a, o).transform(y);
              }
            },
            setTransition: (e) => {
              const { transformEl: s } = t.params.cardsEffect;
              (s ? t.slides.find(s) : t.slides)
                .transition(e)
                .find(".swiper-slide-shadow")
                .transition(e),
                ae({ swiper: t, duration: e, transformEl: s });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return V.use(re), V;
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function () {},
      u = !!window.jQuery,
      v = a(window),
      w = function (a, c) {
        b.ev.on(o + a + p, c);
      },
      x = function (b, c, d, e) {
        var f = document.createElement("div");
        return (
          (f.className = "mfp-" + b),
          d && (f.innerHTML = d),
          e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
          f
        );
      },
      y = function (c, d) {
        b.ev.triggerHandler(o + c, d),
          b.st.callbacks &&
            ((c = c.charAt(0).toLowerCase() + c.slice(1)),
            b.st.callbacks[c] &&
              b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
      },
      z = function (c) {
        return (
          (c === g && b.currTemplate.closeBtn) ||
            ((b.currTemplate.closeBtn = a(
              b.st.closeMarkup.replace("%title%", b.st.tClose)
            )),
            (g = c)),
          b.currTemplate.closeBtn
        );
      },
      A = function () {
        a.magnificPopup.instance ||
          ((b = new t()), b.init(), (a.magnificPopup.instance = b));
      },
      B = function () {
        var a = document.createElement("p").style,
          b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition) return !0;
        for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
        return !1;
      };
    (t.prototype = {
      constructor: t,
      init: function () {
        var c = navigator.appVersion;
        (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
          (b.isAndroid = /android/gi.test(c)),
          (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
          (b.supportsTransition = B()),
          (b.probablyMobile =
            b.isAndroid ||
            b.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (d = a(document)),
          (b.popupsCache = {});
      },
      open: function (c) {
        var e;
        if (c.isObj === !1) {
          (b.items = c.items.toArray()), (b.index = 0);
          var g,
            h = c.items;
          for (e = 0; e < h.length; e++)
            if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
              b.index = e;
              break;
            }
        } else
          (b.items = a.isArray(c.items) ? c.items : [c.items]),
            (b.index = c.index || 0);
        if (b.isOpen) return void b.updateItemHTML();
        (b.types = []),
          (f = ""),
          c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
          c.key
            ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
              (b.currTemplate = b.popupsCache[c.key]))
            : (b.currTemplate = {}),
          (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
          (b.fixedContentPos =
            "auto" === b.st.fixedContentPos
              ? !b.probablyMobile
              : b.st.fixedContentPos),
          b.st.modal &&
            ((b.st.closeOnContentClick = !1),
            (b.st.closeOnBgClick = !1),
            (b.st.showCloseBtn = !1),
            (b.st.enableEscapeKey = !1)),
          b.bgOverlay ||
            ((b.bgOverlay = x("bg").on("click" + p, function () {
              b.close();
            })),
            (b.wrap = x("wrap")
              .attr("tabindex", -1)
              .on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close();
              })),
            (b.container = x("container", b.wrap))),
          (b.contentContainer = x("content")),
          b.st.preloader &&
            (b.preloader = x("preloader", b.container, b.st.tLoading));
        var i = a.magnificPopup.modules;
        for (e = 0; e < i.length; e++) {
          var j = i[e];
          (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
        }
        y("BeforeOpen"),
          b.st.showCloseBtn &&
            (b.st.closeBtnInside
              ? (w(l, function (a, b, c, d) {
                  c.close_replaceWith = z(d.type);
                }),
                (f += " mfp-close-btn-in"))
              : b.wrap.append(z())),
          b.st.alignTop && (f += " mfp-align-top"),
          b.fixedContentPos
            ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY,
              })
            : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
          (b.st.fixedBgPos === !1 ||
            ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
            b.bgOverlay.css({ height: d.height(), position: "absolute" }),
          b.st.enableEscapeKey &&
            d.on("keyup" + p, function (a) {
              27 === a.keyCode && b.close();
            }),
          v.on("resize" + p, function () {
            b.updateSize();
          }),
          b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
          f && b.wrap.addClass(f);
        var k = (b.wH = v.height()),
          n = {};
        if (b.fixedContentPos && b._hasScrollBar(k)) {
          var o = b._getScrollbarSize();
          o && (n.marginRight = o);
        }
        b.fixedContentPos &&
          (b.isIE7
            ? a("body, html").css("overflow", "hidden")
            : (n.overflow = "hidden"));
        var r = b.st.mainClass;
        return (
          b.isIE7 && (r += " mfp-ie7"),
          r && b._addClassToMFP(r),
          b.updateItemHTML(),
          y("BuildControls"),
          a("html").css(n),
          b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
          (b._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            b.content
              ? (b._addClassToMFP(q), b._setFocus())
              : b.bgOverlay.addClass(q),
              d.on("focusin" + p, b._onFocusIn);
          }, 16),
          (b.isOpen = !0),
          b.updateSize(k),
          y(m),
          c
        );
      },
      close: function () {
        b.isOpen &&
          (y(i),
          (b.isOpen = !1),
          b.st.removalDelay && !b.isLowIE && b.supportsTransition
            ? (b._addClassToMFP(r),
              setTimeout(function () {
                b._close();
              }, b.st.removalDelay))
            : b._close());
      },
      _close: function () {
        y(h);
        var c = r + " " + q + " ";
        if (
          (b.bgOverlay.detach(),
          b.wrap.detach(),
          b.container.empty(),
          b.st.mainClass && (c += b.st.mainClass + " "),
          b._removeClassFromMFP(c),
          b.fixedContentPos)
        ) {
          var e = { marginRight: "" };
          b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
            a("html").css(e);
        }
        d.off("keyup" + p + " focusin" + p),
          b.ev.off(p),
          b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          b.bgOverlay.attr("class", "mfp-bg"),
          b.container.attr("class", "mfp-container"),
          !b.st.showCloseBtn ||
            (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
            (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
          b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
          (b.currItem = null),
          (b.content = null),
          (b.currTemplate = null),
          (b.prevHeight = 0),
          y(j);
      },
      updateSize: function (a) {
        if (b.isIOS) {
          var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
          b.wrap.css("height", d), (b.wH = d);
        } else b.wH = a || v.height();
        b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
      },
      updateItemHTML: function () {
        var c = b.items[b.index];
        b.contentContainer.detach(),
          b.content && b.content.detach(),
          c.parsed || (c = b.parseEl(b.index));
        var d = c.type;
        if (
          (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
          (b.currItem = c),
          !b.currTemplate[d])
        ) {
          var f = b.st[d] ? b.st[d].markup : !1;
          y("FirstMarkupParse", f),
            f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
        }
        e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
        var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
          c,
          b.currTemplate[d]
        );
        b.appendContent(g, d),
          (c.preloaded = !0),
          y(n, c),
          (e = c.type),
          b.container.prepend(b.contentContainer),
          y("AfterChange");
      },
      appendContent: function (a, c) {
        (b.content = a),
          a
            ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
              ? b.content.find(".mfp-close").length || b.content.append(z())
              : (b.content = a)
            : (b.content = ""),
          y(k),
          b.container.addClass("mfp-" + c + "-holder"),
          b.contentContainer.append(b.content);
      },
      parseEl: function (c) {
        var d,
          e = b.items[c];
        if (
          (e.tagName
            ? (e = { el: a(e) })
            : ((d = e.type), (e = { data: e, src: e.src })),
          e.el)
        ) {
          for (var f = b.types, g = 0; g < f.length; g++)
            if (e.el.hasClass("mfp-" + f[g])) {
              d = f[g];
              break;
            }
          (e.src = e.el.attr("data-mfp-src")),
            e.src || (e.src = e.el.attr("href"));
        }
        return (
          (e.type = d || b.st.type || "inline"),
          (e.index = c),
          (e.parsed = !0),
          (b.items[c] = e),
          y("ElementParse", e),
          b.items[c]
        );
      },
      addGroup: function (a, c) {
        var d = function (d) {
          (d.mfpEl = this), b._openClick(d, a, c);
        };
        c || (c = {});
        var e = "click.magnificPopup";
        (c.mainEl = a),
          c.items
            ? ((c.isObj = !0), a.off(e).on(e, d))
            : ((c.isObj = !1),
              c.delegate
                ? a.off(e).on(e, c.delegate, d)
                : ((c.items = a), a.off(e).on(e, d)));
      },
      _openClick: function (c, d, e) {
        var f =
          void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
        if (
          f ||
          !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
        ) {
          var g =
            void 0 !== e.disableOn
              ? e.disableOn
              : a.magnificPopup.defaults.disableOn;
          if (g)
            if (a.isFunction(g)) {
              if (!g.call(b)) return !0;
            } else if (v.width() < g) return !0;
          c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
            (e.el = a(c.mfpEl)),
            e.delegate && (e.items = d.find(e.delegate)),
            b.open(e);
        }
      },
      updateStatus: function (a, d) {
        if (b.preloader) {
          c !== a && b.container.removeClass("mfp-s-" + c),
            d || "loading" !== a || (d = b.st.tLoading);
          var e = { status: a, text: d };
          y("UpdateStatus", e),
            (a = e.status),
            (d = e.text),
            b.preloader.html(d),
            b.preloader.find("a").on("click", function (a) {
              a.stopImmediatePropagation();
            }),
            b.container.addClass("mfp-s-" + a),
            (c = a);
        }
      },
      _checkIfClose: function (c) {
        if (!a(c).hasClass(s)) {
          var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
          if (d && e) return !0;
          if (
            !b.content ||
            a(c).hasClass("mfp-close") ||
            (b.preloader && c === b.preloader[0])
          )
            return !0;
          if (c === b.content[0] || a.contains(b.content[0], c)) {
            if (d) return !0;
          } else if (e && a.contains(document, c)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (a) {
        b.bgOverlay.addClass(a), b.wrap.addClass(a);
      },
      _removeClassFromMFP: function (a) {
        this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
      },
      _hasScrollBar: function (a) {
        return (
          (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        );
      },
      _setFocus: function () {
        (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
      },
      _onFocusIn: function (c) {
        return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
          ? void 0
          : (b._setFocus(), !1);
      },
      _parseMarkup: function (b, c, d) {
        var e;
        d.data && (c = a.extend(d.data, c)),
          y(l, [b, c, d]),
          a.each(c, function (c, d) {
            if (void 0 === d || d === !1) return !0;
            if (((e = c.split("_")), e.length > 1)) {
              var f = b.find(p + "-" + e[0]);
              if (f.length > 0) {
                var g = e[1];
                "replaceWith" === g
                  ? f[0] !== d[0] && f.replaceWith(d)
                  : "img" === g
                  ? f.is("img")
                    ? f.attr("src", d)
                    : f.replaceWith(
                        a("<img>").attr("src", d).attr("class", f.attr("class"))
                      )
                  : f.attr(e[1], d);
              }
            } else b.find(p + "-" + c).html(d);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === b.scrollbarSize) {
          var a = document.createElement("div");
          (a.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(a),
            (b.scrollbarSize = a.offsetWidth - a.clientWidth),
            document.body.removeChild(a);
        }
        return b.scrollbarSize;
      },
    }),
      (a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
          return (
            A(),
            (b = b ? a.extend(!0, {}, b) : {}),
            (b.isObj = !0),
            (b.index = c || 0),
            this.instance.open(b)
          );
        },
        close: function () {
          return a.magnificPopup.instance && a.magnificPopup.instance.close();
        },
        registerModule: function (b, c) {
          c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
          if ("open" === c) {
            var e,
              f = u ? d.data("magnificPopup") : d[0].magnificPopup,
              g = parseInt(arguments[1], 10) || 0;
            f.items
              ? (e = f.items[g])
              : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
              b._openClick({ mfpEl: e }, d, f);
          } else
            b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
          (c = a.extend(!0, {}, c)),
            u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
            b.addGroup(d, c);
        return d;
      });
    var C,
      D,
      E,
      F = "inline",
      G = function () {
        E && (D.after(E.addClass(C)).detach(), (E = null));
      };
    a.magnificPopup.registerModule(F, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          b.types.push(F),
            w(h + "." + F, function () {
              G();
            });
        },
        getInline: function (c, d) {
          if ((G(), c.src)) {
            var e = b.st.inline,
              f = a(c.src);
            if (f.length) {
              var g = f[0].parentNode;
              g &&
                g.tagName &&
                (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                (E = f.after(D).detach().removeClass(C))),
                b.updateStatus("ready");
            } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
            return (c.inlineElement = f), f;
          }
          return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
        },
      },
    });
    var H,
      I = "ajax",
      J = function () {
        H && a(document.body).removeClass(H);
      },
      K = function () {
        J(), b.req && b.req.abort();
      };
    a.magnificPopup.registerModule(I, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          b.types.push(I),
            (H = b.st.ajax.cursor),
            w(h + "." + I, K),
            w("BeforeChange." + I, K);
        },
        getAjax: function (c) {
          H && a(document.body).addClass(H), b.updateStatus("loading");
          var d = a.extend(
            {
              url: c.src,
              success: function (d, e, f) {
                var g = { data: d, xhr: f };
                y("ParseAjax", g),
                  b.appendContent(a(g.data), I),
                  (c.finished = !0),
                  J(),
                  b._setFocus(),
                  setTimeout(function () {
                    b.wrap.addClass(q);
                  }, 16),
                  b.updateStatus("ready"),
                  y("AjaxContentAdded");
              },
              error: function () {
                J(),
                  (c.finished = c.loadError = !0),
                  b.updateStatus(
                    "error",
                    b.st.ajax.tError.replace("%url%", c.src)
                  );
              },
            },
            b.st.ajax.settings
          );
          return (b.req = a.ajax(d)), "";
        },
      },
    });
    var L,
      M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
          if (a.isFunction(d)) return d.call(b, c);
          if (c.el) return c.el.attr(d) || "";
        }
        return "";
      };
    a.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var c = b.st.image,
            d = ".image";
          b.types.push("image"),
            w(m + d, function () {
              "image" === b.currItem.type &&
                c.cursor &&
                a(document.body).addClass(c.cursor);
            }),
            w(h + d, function () {
              c.cursor && a(document.body).removeClass(c.cursor),
                v.off("resize" + p);
            }),
            w("Resize" + d, b.resizeImage),
            b.isLowIE && w("AfterChange", b.resizeImage);
        },
        resizeImage: function () {
          var a = b.currItem;
          if (a && a.img && b.st.image.verticalFit) {
            var c = 0;
            b.isLowIE &&
              (c =
                parseInt(a.img.css("padding-top"), 10) +
                parseInt(a.img.css("padding-bottom"), 10)),
              a.img.css("max-height", b.wH - c);
          }
        },
        _onImageHasSize: function (a) {
          a.img &&
            ((a.hasSize = !0),
            L && clearInterval(L),
            (a.isCheckingImgSize = !1),
            y("ImageHasSize", a),
            a.imgHidden &&
              (b.content && b.content.removeClass("mfp-loading"),
              (a.imgHidden = !1)));
        },
        findImageSize: function (a) {
          var c = 0,
            d = a.img[0],
            e = function (f) {
              L && clearInterval(L),
                (L = setInterval(function () {
                  return d.naturalWidth > 0
                    ? void b._onImageHasSize(a)
                    : (c > 200 && clearInterval(L),
                      c++,
                      void (3 === c
                        ? e(10)
                        : 40 === c
                        ? e(50)
                        : 100 === c && e(500)));
                }, f));
            };
          e(1);
        },
        getImage: function (c, d) {
          var e = 0,
            f = function () {
              c &&
                (c.img[0].complete
                  ? (c.img.off(".mfploader"),
                    c === b.currItem &&
                      (b._onImageHasSize(c), b.updateStatus("ready")),
                    (c.hasSize = !0),
                    (c.loaded = !0),
                    y("ImageLoadComplete"))
                  : (e++, 200 > e ? setTimeout(f, 100) : g()));
            },
            g = function () {
              c &&
                (c.img.off(".mfploader"),
                c === b.currItem &&
                  (b._onImageHasSize(c),
                  b.updateStatus("error", h.tError.replace("%url%", c.src))),
                (c.hasSize = !0),
                (c.loaded = !0),
                (c.loadError = !0));
            },
            h = b.st.image,
            i = d.find(".mfp-img");
          if (i.length) {
            var j = document.createElement("img");
            (j.className = "mfp-img"),
              c.el &&
                c.el.find("img").length &&
                (j.alt = c.el.find("img").attr("alt")),
              (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
              (j.src = c.src),
              i.is("img") && (c.img = c.img.clone()),
              (j = c.img[0]),
              j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
          }
          return (
            b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
            b.resizeImage(),
            c.hasSize
              ? (L && clearInterval(L),
                c.loadError
                  ? (d.addClass("mfp-loading"),
                    b.updateStatus("error", h.tError.replace("%url%", c.src)))
                  : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                d)
              : (b.updateStatus("loading"),
                (c.loading = !0),
                c.hasSize ||
                  ((c.imgHidden = !0),
                  d.addClass("mfp-loading"),
                  b.findImageSize(c)),
                d)
          );
        },
      },
    });
    var N,
      O = function () {
        return (
          void 0 === N &&
            (N = void 0 !== document.createElement("p").style.MozTransform),
          N
        );
      };
    a.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (a) {
          return a.is("img") ? a : a.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var a,
            c = b.st.zoom,
            d = ".zoom";
          if (c.enabled && b.supportsTransition) {
            var e,
              f,
              g = c.duration,
              j = function (a) {
                var b = a
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  d = "all " + c.duration / 1e3 + "s " + c.easing,
                  e = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  f = "transition";
                return (
                  (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                  b.css(e),
                  b
                );
              },
              k = function () {
                b.content.css("visibility", "visible");
              };
            w("BuildControls" + d, function () {
              if (b._allowZoom()) {
                if (
                  (clearTimeout(e),
                  b.content.css("visibility", "hidden"),
                  (a = b._getItemToZoom()),
                  !a)
                )
                  return void k();
                (f = j(a)),
                  f.css(b._getOffset()),
                  b.wrap.append(f),
                  (e = setTimeout(function () {
                    f.css(b._getOffset(!0)),
                      (e = setTimeout(function () {
                        k(),
                          setTimeout(function () {
                            f.remove(), (a = f = null), y("ZoomAnimationEnded");
                          }, 16);
                      }, g));
                  }, 16));
              }
            }),
              w(i + d, function () {
                if (b._allowZoom()) {
                  if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                    if (((a = b._getItemToZoom()), !a)) return;
                    f = j(a);
                  }
                  f.css(b._getOffset(!0)),
                    b.wrap.append(f),
                    b.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      f.css(b._getOffset());
                    }, 16);
                }
              }),
              w(h + d, function () {
                b._allowZoom() && (k(), f && f.remove(), (a = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === b.currItem.type;
        },
        _getItemToZoom: function () {
          return b.currItem.hasSize ? b.currItem.img : !1;
        },
        _getOffset: function (c) {
          var d;
          d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
          var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
          e.top -= a(window).scrollTop() - f;
          var h = {
            width: d.width(),
            height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
          };
          return (
            O()
              ? (h["-moz-transform"] = h.transform =
                  "translate(" + e.left + "px," + e.top + "px)")
              : ((h.left = e.left), (h.top = e.top)),
            h
          );
        },
      },
    });
    var P = "iframe",
      Q = "//about:blank",
      R = function (a) {
        if (b.currTemplate[P]) {
          var c = b.currTemplate[P].find("iframe");
          c.length &&
            (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"));
        }
      };
    a.magnificPopup.registerModule(P, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          b.types.push(P),
            w("BeforeChange", function (a, b, c) {
              b !== c && (b === P ? R() : c === P && R(!0));
            }),
            w(h + "." + P, function () {
              R();
            });
        },
        getIframe: function (c, d) {
          var e = c.src,
            f = b.st.iframe;
          a.each(f.patterns, function () {
            return e.indexOf(this.index) > -1
              ? (this.id &&
                  (e =
                    "string" == typeof this.id
                      ? e.substr(
                          e.lastIndexOf(this.id) + this.id.length,
                          e.length
                        )
                      : this.id.call(this, e)),
                (e = this.src.replace("%id%", e)),
                !1)
              : void 0;
          });
          var g = {};
          return (
            f.srcAction && (g[f.srcAction] = e),
            b._parseMarkup(d, g, c),
            b.updateStatus("ready"),
            d
          );
        },
      },
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a;
      },
      T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
      };
    a.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var c = b.st.gallery,
            e = ".mfp-gallery";
          return (
            (b.direction = !0),
            c && c.enabled
              ? ((f += " mfp-gallery"),
                w(m + e, function () {
                  c.navigateByImgClick &&
                    b.wrap.on("click" + e, ".mfp-img", function () {
                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                    }),
                    d.on("keydown" + e, function (a) {
                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                    });
                }),
                w("UpdateStatus" + e, function (a, c) {
                  c.text &&
                    (c.text = T(c.text, b.currItem.index, b.items.length));
                }),
                w(l + e, function (a, d, e, f) {
                  var g = b.items.length;
                  e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                }),
                w("BuildControls" + e, function () {
                  if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                    var d = c.arrowMarkup,
                      e = (b.arrowLeft = a(
                        d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                      ).addClass(s)),
                      f = (b.arrowRight = a(
                        d
                          .replace(/%title%/gi, c.tNext)
                          .replace(/%dir%/gi, "right")
                      ).addClass(s));
                    e.click(function () {
                      b.prev();
                    }),
                      f.click(function () {
                        b.next();
                      }),
                      b.container.append(e.add(f));
                  }
                }),
                w(n + e, function () {
                  b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    (b._preloadTimeout = setTimeout(function () {
                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                    }, 16));
                }),
                void w(h + e, function () {
                  d.off(e),
                    b.wrap.off("click" + e),
                    (b.arrowRight = b.arrowLeft = null);
                }))
              : !1
          );
        },
        next: function () {
          (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
        },
        prev: function () {
          (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
        },
        goTo: function (a) {
          (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);
          for (a = 1; a <= (b.direction ? e : d); a++)
            b._preloadItem(b.index + a);
          for (a = 1; a <= (b.direction ? d : e); a++)
            b._preloadItem(b.index - a);
        },
        _preloadItem: function (c) {
          if (((c = S(c)), !b.items[c].preloaded)) {
            var d = b.items[c];
            d.parsed || (d = b.parseEl(c)),
              y("LazyLoad", d),
              "image" === d.type &&
                (d.img = a('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    d.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                  })
                  .attr("src", d.src)),
              (d.preloaded = !0);
          }
        },
      },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
      options: {
        replaceSrc: function (a) {
          return a.src.replace(/\.\w+$/, function (a) {
            return "@2x" + a;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var a = b.st.retina,
              c = a.ratio;
            (c = isNaN(c) ? c() : c),
              c > 1 &&
                (w("ImageHasSize." + U, function (a, b) {
                  b.img.css({
                    "max-width": b.img[0].naturalWidth / c,
                    width: "100%",
                  });
                }),
                w("ElementParse." + U, function (b, d) {
                  d.src = a.replaceSrc(d, c);
                }));
          }
        },
      },
    }),
      A();
  });
  !(function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t),
            t
          );
        })
      : n(jQuery);
  })(function (t) {
    var e,
      n,
      s,
      p,
      r,
      o,
      h,
      f,
      g,
      m,
      y,
      v,
      i,
      a,
      _,
      s =
        (((u =
          t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) &&
          u.requirejs) ||
          (u ? (n = u) : (u = {}),
          (g = {}),
          (m = {}),
          (y = {}),
          (v = {}),
          (i = Object.prototype.hasOwnProperty),
          (a = [].slice),
          (_ = /\.js$/),
          (h = function (e, t) {
            var n,
              s,
              i = c(e),
              r = i[0],
              t = t[1];
            return (
              (e = i[1]),
              r && (n = x((r = l(r, t)))),
              r
                ? (e =
                    n && n.normalize
                      ? n.normalize(
                          e,
                          ((s = t),
                          function (e) {
                            return l(e, s);
                          })
                        )
                      : l(e, t))
                : ((r = (i = c((e = l(e, t))))[0]), (e = i[1]), r && (n = x(r))),
              { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
            );
          }),
          (f = {
            require: function (e) {
              return w(e);
            },
            exports: function (e) {
              var t = g[e];
              return void 0 !== t ? t : (g[e] = {});
            },
            module: function (e) {
              return {
                id: e,
                uri: "",
                exports: g[e],
                config:
                  ((t = e),
                  function () {
                    return (y && y.config && y.config[t]) || {};
                  }),
              };
              var t;
            },
          }),
          (r = function (e, t, n, s) {
            var i,
              r,
              o,
              a,
              l,
              c = [],
              u = typeof n,
              d = A((s = s || e));
            if ("undefined" == u || "function" == u) {
              for (
                t = !t.length && n.length ? ["require", "exports", "module"] : t,
                  a = 0;
                a < t.length;
                a += 1
              )
                if ("require" === (r = (o = h(t[a], d)).f)) c[a] = f.require(e);
                else if ("exports" === r) (c[a] = f.exports(e)), (l = !0);
                else if ("module" === r) i = c[a] = f.module(e);
                else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r);
                else {
                  if (!o.p) throw new Error(e + " missing " + r);
                  o.p.load(
                    o.n,
                    w(s, !0),
                    (function (t) {
                      return function (e) {
                        g[t] = e;
                      };
                    })(r),
                    {}
                  ),
                    (c[a] = g[r]);
                }
              (u = n ? n.apply(g[e], c) : void 0),
                e &&
                  (i && i.exports !== p && i.exports !== g[e]
                    ? (g[e] = i.exports)
                    : (u === p && l) || (g[e] = u));
            } else e && (g[e] = n);
          }),
          (e =
            n =
            o =
              function (e, t, n, s, i) {
                if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
                if (!e.splice) {
                  if (((y = e).deps && o(y.deps, y.callback), !t)) return;
                  t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
                }
                return (
                  (t = t || function () {}),
                  "function" == typeof n && ((n = s), (s = i)),
                  s
                    ? r(p, e, t, n)
                    : setTimeout(function () {
                        r(p, e, t, n);
                      }, 4),
                  o
                );
              }),
          (o.config = function (e) {
            return o(e);
          }),
          (e._defined = g),
          ((s = function (e, t, n) {
            if ("string" != typeof e)
              throw new Error(
                "See almond README: incorrect module build, no module name"
              );
            t.splice || ((n = t), (t = [])),
              b(g, e) || b(m, e) || (m[e] = [e, t, n]);
          }).amd = { jQuery: !0 }),
          (u.requirejs = e),
          (u.require = n),
          (u.define = s)),
        u.define("almond", function () {}),
        u.define("jquery", [], function () {
          var e = t || $;
          return (
            null == e &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            e
          );
        }),
        u.define("select2/utils", ["jquery"], function (r) {
          var s = {};
          function c(e) {
            var t,
              n = e.prototype,
              s = [];
            for (t in n)
              "function" == typeof n[t] && "constructor" !== t && s.push(t);
            return s;
          }
          (s.Extend = function (e, t) {
            var n,
              s = {}.hasOwnProperty;
            function i() {
              this.constructor = e;
            }
            for (n in t) s.call(t, n) && (e[n] = t[n]);
            return (
              (i.prototype = t.prototype),
              (e.prototype = new i()),
              (e.__super__ = t.prototype),
              e
            );
          }),
            (s.Decorate = function (s, i) {
              var e = c(i),
                t = c(s);
              function r() {
                var e = Array.prototype.unshift,
                  t = i.prototype.constructor.length,
                  n = s.prototype.constructor;
                0 < t &&
                  (e.call(arguments, s.prototype.constructor),
                  (n = i.prototype.constructor)),
                  n.apply(this, arguments);
              }
              (i.displayName = s.displayName),
                (r.prototype = new (function () {
                  this.constructor = r;
                })());
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                r.prototype[o] = s.prototype[o];
              }
              for (var a = 0; a < e.length; a++) {
                var l = e[a];
                r.prototype[l] = (function (e) {
                  var t = function () {};
                  e in r.prototype && (t = r.prototype[e]);
                  var n = i.prototype[e];
                  return function () {
                    return (
                      Array.prototype.unshift.call(arguments, t),
                      n.apply(this, arguments)
                    );
                  };
                })(l);
              }
              return r;
            });
          function e() {
            this.listeners = {};
          }
          (e.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
            (e.prototype.trigger = function (e) {
              var t = Array.prototype.slice,
                n = t.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                0 === (n = null == n ? [] : n).length && n.push({}),
                (n[0]._type = e) in this.listeners &&
                  this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (e.prototype.invoke = function (e, t) {
              for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
            }),
            (s.Observable = e),
            (s.generateChars = function (e) {
              for (var t = "", n = 0; n < e; n++)
                t += Math.floor(36 * Math.random()).toString(36);
              return t;
            }),
            (s.bind = function (e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }),
            (s._convertData = function (e) {
              for (var t in e) {
                var n = t.split("-"),
                  s = e;
                if (1 !== n.length) {
                  for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in s ||
                      (s[r] = {}),
                      i == n.length - 1 && (s[r] = e[t]),
                      (s = s[r]);
                  }
                  delete e[t];
                }
              }
              return e;
            }),
            (s.hasScroll = function (e, t) {
              var n = r(t),
                s = t.style.overflowX,
                i = t.style.overflowY;
              return (
                (s !== i || ("hidden" !== i && "visible" !== i)) &&
                ("scroll" === s ||
                  "scroll" === i ||
                  n.innerHeight() < t.scrollHeight ||
                  n.innerWidth() < t.scrollWidth)
              );
            }),
            (s.escapeMarkup = function (e) {
              var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof e
                ? e
                : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e];
                  });
            }),
            (s.__cache = {});
          var n = 0;
          return (
            (s.GetUniqueElementId = function (e) {
              var t = e.getAttribute("data-select2-id");
              return (
                null != t ||
                  ((t = e.id
                    ? "select2-data-" + e.id
                    : "select2-data-" +
                      (++n).toString() +
                      "-" +
                      s.generateChars(4)),
                  e.setAttribute("data-select2-id", t)),
                t
              );
            }),
            (s.StoreData = function (e, t, n) {
              e = s.GetUniqueElementId(e);
              s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n);
            }),
            (s.GetData = function (e, t) {
              var n = s.GetUniqueElementId(e);
              return t
                ? s.__cache[n] && null != s.__cache[n][t]
                  ? s.__cache[n][t]
                  : r(e).data(t)
                : s.__cache[n];
            }),
            (s.RemoveData = function (e) {
              var t = s.GetUniqueElementId(e);
              null != s.__cache[t] && delete s.__cache[t],
                e.removeAttribute("data-select2-id");
            }),
            (s.copyNonInternalCssClasses = function (e, t) {
              var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(
                  function (e) {
                    return 0 === e.indexOf("select2-");
                  }
                ),
                t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(
                  function (e) {
                    return 0 !== e.indexOf("select2-");
                  }
                ),
                t = n.concat(t);
              e.setAttribute("class", t.join(" "));
            }),
            s
          );
        }),
        u.define("select2/results", ["jquery", "./utils"], function (d, p) {
          function s(e, t, n) {
            (this.$element = e),
              (this.data = n),
              (this.options = t),
              s.__super__.constructor.call(this);
          }
          return (
            p.Extend(s, p.Observable),
            (s.prototype.render = function () {
              var e = d(
                '<ul class="select2-results__options" role="listbox"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  e.attr("aria-multiselectable", "true"),
                (this.$results = e)
              );
            }),
            (s.prototype.clear = function () {
              this.$results.empty();
            }),
            (s.prototype.displayMessage = function (e) {
              var t = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var n = d(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                ),
                s = this.options.get("translations").get(e.message);
              n.append(t(s(e.args))),
                (n[0].className += " select2-results__message"),
                this.$results.append(n);
            }),
            (s.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (s.prototype.append = function (e) {
              this.hideLoading();
              var t = [];
              if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                  var s = e.results[n],
                    s = this.option(s);
                  t.push(s);
                }
                this.$results.append(t);
              } else
                0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" });
            }),
            (s.prototype.position = function (e, t) {
              t.find(".select2-results").append(e);
            }),
            (s.prototype.sort = function (e) {
              return this.options.get("sorter")(e);
            }),
            (s.prototype.highlightFirstItem = function () {
              var e = this.$results.find(".select2-results__option--selectable"),
                t = e.filter(".select2-results__option--selected");
              (0 < t.length ? t : e).first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (s.prototype.setClasses = function () {
              var t = this;
              this.data.current(function (e) {
                var s = e.map(function (e) {
                  return e.id.toString();
                });
                t.$results
                  .find(".select2-results__option--selectable")
                  .each(function () {
                    var e = d(this),
                      t = p.GetData(this, "data"),
                      n = "" + t.id;
                    (null != t.element && t.element.selected) ||
                    (null == t.element && -1 < s.indexOf(n))
                      ? (this.classList.add("select2-results__option--selected"),
                        e.attr("aria-selected", "true"))
                      : (this.classList.remove(
                          "select2-results__option--selected"
                        ),
                        e.attr("aria-selected", "false"));
                  });
              });
            }),
            (s.prototype.showLoading = function (e) {
              this.hideLoading();
              (e = {
                disabled: !0,
                loading: !0,
                text: this.options.get("translations").get("searching")(e),
              }),
                (e = this.option(e));
              (e.className += " loading-results"), this.$results.prepend(e);
            }),
            (s.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (s.prototype.option = function (e) {
              var t = document.createElement("li");
              t.classList.add("select2-results__option"),
                t.classList.add("select2-results__option--selectable");
              var n,
                s = { role: "option" },
                i =
                  window.Element.prototype.matches ||
                  window.Element.prototype.msMatchesSelector ||
                  window.Element.prototype.webkitMatchesSelector;
              for (n in (((null != e.element && i.call(e.element, ":disabled")) ||
                (null == e.element && e.disabled)) &&
                ((s["aria-disabled"] = "true"),
                t.classList.remove("select2-results__option--selectable"),
                t.classList.add("select2-results__option--disabled")),
              null == e.id &&
                t.classList.remove("select2-results__option--selectable"),
              null != e._resultId && (t.id = e._resultId),
              e.title && (t.title = e.title),
              e.children &&
                ((s.role = "group"),
                (s["aria-label"] = e.text),
                t.classList.remove("select2-results__option--selectable"),
                t.classList.add("select2-results__option--group")),
              s)) {
                var r = s[n];
                t.setAttribute(n, r);
              }
              if (e.children) {
                var o = d(t),
                  a = document.createElement("strong");
                (a.className = "select2-results__group"), this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                  var u = e.children[c],
                    u = this.option(u);
                  l.push(u);
                }
                i = d("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                  role: "none",
                });
                i.append(l), o.append(a), o.append(i);
              } else this.template(e, t);
              return p.StoreData(t, "data", e), t;
            }),
            (s.prototype.bind = function (t, e) {
              var i = this,
                n = t.id + "-results";
              this.$results.attr("id", n),
                t.on("results:all", function (e) {
                  i.clear(),
                    i.append(e.data),
                    t.isOpen() && (i.setClasses(), i.highlightFirstItem());
                }),
                t.on("results:append", function (e) {
                  i.append(e.data), t.isOpen() && i.setClasses();
                }),
                t.on("query", function (e) {
                  i.hideMessages(), i.showLoading(e);
                }),
                t.on("select", function () {
                  t.isOpen() &&
                    (i.setClasses(),
                    i.options.get("scrollAfterSelect") && i.highlightFirstItem());
                }),
                t.on("unselect", function () {
                  t.isOpen() &&
                    (i.setClasses(),
                    i.options.get("scrollAfterSelect") && i.highlightFirstItem());
                }),
                t.on("open", function () {
                  i.$results.attr("aria-expanded", "true"),
                    i.$results.attr("aria-hidden", "false"),
                    i.setClasses(),
                    i.ensureHighlightVisible();
                }),
                t.on("close", function () {
                  i.$results.attr("aria-expanded", "false"),
                    i.$results.attr("aria-hidden", "true"),
                    i.$results.removeAttr("aria-activedescendant");
                }),
                t.on("results:toggle", function () {
                  var e = i.getHighlightedResults();
                  0 !== e.length && e.trigger("mouseup");
                }),
                t.on("results:select", function () {
                  var e,
                    t = i.getHighlightedResults();
                  0 !== t.length &&
                    ((e = p.GetData(t[0], "data")),
                    t.hasClass("select2-results__option--selected")
                      ? i.trigger("close", {})
                      : i.trigger("select", { data: e }));
                }),
                t.on("results:previous", function () {
                  var e,
                    t = i.getHighlightedResults(),
                    n = i.$results.find(".select2-results__option--selectable"),
                    s = n.index(t);
                  s <= 0 ||
                    ((e = s - 1),
                    0 === t.length && (e = 0),
                    (s = n.eq(e)).trigger("mouseenter"),
                    (t = i.$results.offset().top),
                    (n = s.offset().top),
                    (s = i.$results.scrollTop() + (n - t)),
                    0 === e
                      ? i.$results.scrollTop(0)
                      : n - t < 0 && i.$results.scrollTop(s));
                }),
                t.on("results:next", function () {
                  var e,
                    t = i.getHighlightedResults(),
                    n = i.$results.find(".select2-results__option--selectable"),
                    s = n.index(t) + 1;
                  s >= n.length ||
                    ((e = n.eq(s)).trigger("mouseenter"),
                    (t = i.$results.offset().top + i.$results.outerHeight(!1)),
                    (n = e.offset().top + e.outerHeight(!1)),
                    (e = i.$results.scrollTop() + n - t),
                    0 === s
                      ? i.$results.scrollTop(0)
                      : t < n && i.$results.scrollTop(e));
                }),
                t.on("results:focus", function (e) {
                  e.element[0].classList.add(
                    "select2-results__option--highlighted"
                  ),
                    e.element[0].setAttribute("aria-selected", "true");
                }),
                t.on("results:message", function (e) {
                  i.displayMessage(e);
                }),
                d.fn.mousewheel &&
                  this.$results.on("mousewheel", function (e) {
                    var t = i.$results.scrollTop(),
                      n = i.$results.get(0).scrollHeight - t + e.deltaY,
                      t = 0 < e.deltaY && t - e.deltaY <= 0,
                      n = e.deltaY < 0 && n <= i.$results.height();
                    t
                      ? (i.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation())
                      : n &&
                        (i.$results.scrollTop(
                          i.$results.get(0).scrollHeight - i.$results.height()
                        ),
                        e.preventDefault(),
                        e.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option--selectable",
                  function (e) {
                    var t = d(this),
                      n = p.GetData(this, "data");
                    t.hasClass("select2-results__option--selected")
                      ? i.options.get("multiple")
                        ? i.trigger("unselect", { originalEvent: e, data: n })
                        : i.trigger("close", {})
                      : i.trigger("select", { originalEvent: e, data: n });
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option--selectable",
                  function (e) {
                    var t = p.GetData(this, "data");
                    i
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted")
                      .attr("aria-selected", "false"),
                      i.trigger("results:focus", { data: t, element: d(this) });
                  }
                );
            }),
            (s.prototype.getHighlightedResults = function () {
              return this.$results.find(".select2-results__option--highlighted");
            }),
            (s.prototype.destroy = function () {
              this.$results.remove();
            }),
            (s.prototype.ensureHighlightVisible = function () {
              var e,
                t,
                n,
                s,
                i = this.getHighlightedResults();
              0 !== i.length &&
                ((e = this.$results
                  .find(".select2-results__option--selectable")
                  .index(i)),
                (s = this.$results.offset().top),
                (t = i.offset().top),
                (n = this.$results.scrollTop() + (t - s)),
                (s = t - s),
                (n -= 2 * i.outerHeight(!1)),
                e <= 2
                  ? this.$results.scrollTop(0)
                  : (s > this.$results.outerHeight() || s < 0) &&
                    this.$results.scrollTop(n));
            }),
            (s.prototype.template = function (e, t) {
              var n = this.options.get("templateResult"),
                s = this.options.get("escapeMarkup"),
                e = n(e, t);
              null == e
                ? (t.style.display = "none")
                : "string" == typeof e
                ? (t.innerHTML = s(e))
                : d(t).append(e);
            }),
            s
          );
        }),
        u.define("select2/keys", [], function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
        }),
        u.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (n, s, i) {
            function r(e, t) {
              (this.$element = e),
                (this.options = t),
                r.__super__.constructor.call(this);
            }
            return (
              s.Extend(r, s.Observable),
              (r.prototype.render = function () {
                var e = n(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != s.GetData(this.$element[0], "old-tabindex")
                    ? (this._tabindex = s.GetData(
                        this.$element[0],
                        "old-tabindex"
                      ))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  e.attr("title", this.$element.attr("title")),
                  e.attr("tabindex", this._tabindex),
                  e.attr("aria-disabled", "false"),
                  (this.$selection = e)
                );
              }),
              (r.prototype.bind = function (e, t) {
                var n = this,
                  s = e.id + "-results";
                (this.container = e),
                  this.$selection.on("focus", function (e) {
                    n.trigger("focus", e);
                  }),
                  this.$selection.on("blur", function (e) {
                    n._handleBlur(e);
                  }),
                  this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e),
                      e.which === i.SPACE && e.preventDefault();
                  }),
                  e.on("results:focus", function (e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId);
                  }),
                  e.on("selection:update", function (e) {
                    n.update(e.data);
                  }),
                  e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"),
                      n.$selection.attr("aria-owns", s),
                      n._attachCloseHandler(e);
                  }),
                  e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"),
                      n.$selection.removeAttr("aria-activedescendant"),
                      n.$selection.removeAttr("aria-owns"),
                      n.$selection.trigger("focus"),
                      n._detachCloseHandler(e);
                  }),
                  e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex),
                      n.$selection.attr("aria-disabled", "false");
                  }),
                  e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1"),
                      n.$selection.attr("aria-disabled", "true");
                  });
              }),
              (r.prototype._handleBlur = function (e) {
                var t = this;
                window.setTimeout(function () {
                  document.activeElement == t.$selection[0] ||
                    n.contains(t.$selection[0], document.activeElement) ||
                    t.trigger("blur", e);
                }, 1);
              }),
              (r.prototype._attachCloseHandler = function (e) {
                n(document.body).on("mousedown.select2." + e.id, function (e) {
                  var t = n(e.target).closest(".select2");
                  n(".select2.select2-container--open").each(function () {
                    this != t[0] && s.GetData(this, "element").select2("close");
                  });
                });
              }),
              (r.prototype._detachCloseHandler = function (e) {
                n(document.body).off("mousedown.select2." + e.id);
              }),
              (r.prototype.position = function (e, t) {
                t.find(".selection").append(e);
              }),
              (r.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (r.prototype.update = function (e) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              (r.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (r.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              r
            );
          }
        ),
        u.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (e, t, n, s) {
            function i() {
              i.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(i, t),
              (i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return (
                  e[0].classList.add("select2-selection--single"),
                  e.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  e
                );
              }),
              (i.prototype.bind = function (t, e) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var s = t.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", s)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", s),
                  this.$selection.attr("aria-controls", s),
                  this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on("focus", function (e) {}),
                  this.$selection.on("blur", function (e) {}),
                  t.on("focus", function (e) {
                    t.isOpen() || n.$selection.trigger("focus");
                  });
              }),
              (i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (i.prototype.selectionContainer = function () {
                return e("<span></span>");
              }),
              (i.prototype.update = function (e) {
                var t, n;
                0 !== e.length
                  ? ((n = e[0]),
                    (t = this.$selection.find(".select2-selection__rendered")),
                    (e = this.display(n, t)),
                    t.empty().append(e),
                    (n = n.title || n.text)
                      ? t.attr("title", n)
                      : t.removeAttr("title"))
                  : this.clear();
              }),
              i
            );
          }
        ),
        u.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (i, e, c) {
            function r(e, t) {
              r.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(r, e),
              (r.prototype.render = function () {
                var e = r.__super__.render.call(this);
                return (
                  e[0].classList.add("select2-selection--multiple"),
                  e.html('<ul class="select2-selection__rendered"></ul>'),
                  e
                );
              }),
              (r.prototype.bind = function (e, t) {
                var n = this;
                r.__super__.bind.apply(this, arguments);
                var s = e.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", s),
                  this.$selection.on("click", function (e) {
                    n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (e) {
                      var t;
                      n.isDisabled() ||
                        ((t = i(this).parent()),
                        (t = c.GetData(t[0], "data")),
                        n.trigger("unselect", { originalEvent: e, data: t }));
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-selection__choice__remove",
                    function (e) {
                      n.isDisabled() || e.stopPropagation();
                    }
                  );
              }),
              (r.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (r.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (r.prototype.selectionContainer = function () {
                return i(
                  '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                );
              }),
              (r.prototype.update = function (e) {
                if ((this.clear(), 0 !== e.length)) {
                  for (
                    var t = [],
                      n =
                        this.$selection
                          .find(".select2-selection__rendered")
                          .attr("id") + "-choice-",
                      s = 0;
                    s < e.length;
                    s++
                  ) {
                    var i = e[s],
                      r = this.selectionContainer(),
                      o = this.display(i, r),
                      a = n + c.generateChars(4) + "-";
                    i.id ? (a += i.id) : (a += c.generateChars(4)),
                      r
                        .find(".select2-selection__choice__display")
                        .append(o)
                        .attr("id", a);
                    var l = i.title || i.text;
                    l && r.attr("title", l);
                    (o = this.options.get("translations").get("removeItem")),
                      (l = r.find(".select2-selection__choice__remove"));
                    l.attr("title", o()),
                      l.attr("aria-label", o()),
                      l.attr("aria-describedby", a),
                      c.StoreData(r[0], "data", i),
                      t.push(r);
                  }
                  this.$selection.find(".select2-selection__rendered").append(t);
                }
              }),
              r
            );
          }
        ),
        u.define("select2/selection/placeholder", [], function () {
          function e(e, t, n) {
            (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
              e.call(this, t, n);
          }
          return (
            (e.prototype.normalizePlaceholder = function (e, t) {
              return (t = "string" == typeof t ? { id: "", text: t } : t);
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              var n = this.selectionContainer();
              n.html(this.display(t)),
                n[0].classList.add("select2-selection__placeholder"),
                n[0].classList.remove("select2-selection__choice");
              t = t.title || t.text || n.text();
              return (
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("title", t),
                n
              );
            }),
            (e.prototype.update = function (e, t) {
              var n = 1 == t.length && t[0].id != this.placeholder.id;
              if (1 < t.length || n) return e.call(this, t);
              this.clear();
              t = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(t);
            }),
            e
          );
        }),
        u.define(
          "select2/selection/allowClear",
          ["jquery", "../keys", "../utils"],
          function (i, s, a) {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var s = this;
                e.call(this, t, n),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (e) {
                      s._handleClear(e);
                    }
                  ),
                  t.on("keypress", function (e) {
                    s._handleKeyboardClear(e, t);
                  });
              }),
              (e.prototype._handleClear = function (e, t) {
                if (!this.isDisabled()) {
                  var n = this.$selection.find(".select2-selection__clear");
                  if (0 !== n.length) {
                    t.stopPropagation();
                    var s = a.GetData(n[0], "data"),
                      i = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var r = { data: s };
                    if ((this.trigger("clear", r), r.prevented))
                      this.$element.val(i);
                    else {
                      for (var o = 0; o < s.length; o++)
                        if (
                          ((r = { data: s[o] }),
                          this.trigger("unselect", r),
                          r.prevented)
                        )
                          return void this.$element.val(i);
                      this.$element.trigger("input").trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }
              }),
              (e.prototype._handleKeyboardClear = function (e, t, n) {
                n.isOpen() ||
                  (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                  this._handleClear(t);
              }),
              (e.prototype.update = function (e, t) {
                var n, s;
                e.call(this, t),
                  this.$selection.find(".select2-selection__clear").remove(),
                  this.$selection[0].classList.remove(
                    "select2-selection--clearable"
                  ),
                  0 <
                    this.$selection.find(".select2-selection__placeholder")
                      .length ||
                    0 === t.length ||
                    ((n = this.$selection
                      .find(".select2-selection__rendered")
                      .attr("id")),
                    (s = this.options.get("translations").get("removeAllItems")),
                    (e = i(
                      '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                    )).attr("title", s()),
                    e.attr("aria-label", s()),
                    e.attr("aria-describedby", n),
                    a.StoreData(e[0], "data", t),
                    this.$selection.prepend(e),
                    this.$selection[0].classList.add(
                      "select2-selection--clearable"
                    ));
              }),
              e
            );
          }
        ),
        u.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (s, a, l) {
            function e(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (e.prototype.render = function (e) {
                var t = this.options.get("translations").get("search"),
                  n = s(
                    '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                  );
                (this.$searchContainer = n),
                  (this.$search = n.find("textarea")),
                  this.$search.prop(
                    "autocomplete",
                    this.options.get("autocomplete")
                  ),
                  this.$search.attr("aria-label", t());
                e = e.call(this);
                return (
                  this._transferTabIndex(), e.append(this.$searchContainer), e
                );
              }),
              (e.prototype.bind = function (e, t, n) {
                var s = this,
                  i = t.id + "-results",
                  r = t.id + "-container";
                e.call(this, t, n),
                  s.$search.attr("aria-describedby", r),
                  t.on("open", function () {
                    s.$search.attr("aria-controls", i),
                      s.$search.trigger("focus");
                  }),
                  t.on("close", function () {
                    s.$search.val(""),
                      s.resizeSearch(),
                      s.$search.removeAttr("aria-controls"),
                      s.$search.removeAttr("aria-activedescendant"),
                      s.$search.trigger("focus");
                  }),
                  t.on("enable", function () {
                    s.$search.prop("disabled", !1), s._transferTabIndex();
                  }),
                  t.on("disable", function () {
                    s.$search.prop("disabled", !0);
                  }),
                  t.on("focus", function (e) {
                    s.$search.trigger("focus");
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? s.$search.attr("aria-activedescendant", e.data._resultId)
                      : s.$search.removeAttr("aria-activedescendant");
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (e) {
                      s.trigger("focus", e);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (e) {
                      s._handleBlur(e);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (e) {
                      var t;
                      e.stopPropagation(),
                        s.trigger("keypress", e),
                        (s._keyUpPrevented = e.isDefaultPrevented()),
                        e.which !== l.BACKSPACE ||
                          "" !== s.$search.val() ||
                          (0 <
                            (t = s.$selection
                              .find(".select2-selection__choice")
                              .last()).length &&
                            ((t = a.GetData(t[0], "data")),
                            s.searchRemoveChoice(t),
                            e.preventDefault()));
                    }
                  ),
                  this.$selection.on(
                    "click",
                    ".select2-search--inline",
                    function (e) {
                      s.$search.val() && e.stopPropagation();
                    }
                  );
                var t = document.documentMode,
                  o = t && t <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (e) {
                    o
                      ? s.$selection.off("input.search input.searchcheck")
                      : s.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (e) {
                      var t;
                      o && "input" === e.type
                        ? s.$selection.off("input.search input.searchcheck")
                        : (t = e.which) != l.SHIFT &&
                          t != l.CTRL &&
                          t != l.ALT &&
                          t != l.TAB &&
                          s.handleSearch(e);
                    }
                  );
              }),
              (e.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (e.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text);
              }),
              (e.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  e.call(this, t),
                  this.resizeSearch(),
                  n && this.$search.trigger("focus");
              }),
              (e.prototype.handleSearch = function () {
                var e;
                this.resizeSearch(),
                  this._keyUpPrevented ||
                    ((e = this.$search.val()),
                    this.trigger("query", { term: e })),
                  (this._keyUpPrevented = !1);
              }),
              (e.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", { data: t }),
                  this.$search.val(t.text),
                  this.handleSearch();
              }),
              (e.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "100%";
                "" === this.$search.attr("placeholder") &&
                  (e = 0.75 * (this.$search.val().length + 1) + "em"),
                  this.$search.css("width", e);
              }),
              e
            );
          }
        ),
        u.define("select2/selection/selectionCss", ["../utils"], function (n) {
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                e = this.options.get("selectionCssClass") || "";
              return (
                -1 !== e.indexOf(":all:") &&
                  ((e = e.replace(":all:", "")),
                  n.copyNonInternalCssClasses(t[0], this.$element[0])),
                t.addClass(e),
                t
              );
            }),
            e
          );
        }),
        u.define("select2/selection/eventRelay", ["jquery"], function (o) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                  "clear",
                  "clearing",
                ],
                r = [
                  "opening",
                  "closing",
                  "selecting",
                  "unselecting",
                  "clearing",
                ];
              e.call(this, t, n),
                t.on("*", function (e, t) {
                  var n;
                  -1 !== i.indexOf(e) &&
                    ((t = t || {}),
                    (n = o.Event("select2:" + e, { params: t })),
                    s.$element.trigger(n),
                    -1 !== r.indexOf(e) &&
                      (t.prevented = n.isDefaultPrevented()));
                });
            }),
            e
          );
        }),
        u.define("select2/translation", ["jquery", "require"], function (t, n) {
          function s(e) {
            this.dict = e || {};
          }
          return (
            (s.prototype.all = function () {
              return this.dict;
            }),
            (s.prototype.get = function (e) {
              return this.dict[e];
            }),
            (s.prototype.extend = function (e) {
              this.dict = t.extend({}, e.all(), this.dict);
            }),
            (s._cache = {}),
            (s.loadPath = function (e) {
              var t;
              return (
                e in s._cache || ((t = n(e)), (s._cache[e] = t)),
                new s(s._cache[e])
              );
            }),
            s
          );
        }),
        u.define("select2/diacritics", [], function () {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Œ: "OE",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            œ: "oe",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ώ: "ω",
            ς: "σ",
            "’": "'",
          };
        }),
        u.define("select2/data/base", ["../utils"], function (n) {
          function s(e, t) {
            s.__super__.constructor.call(this);
          }
          return (
            n.Extend(s, n.Observable),
            (s.prototype.current = function (e) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (s.prototype.query = function (e, t) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (s.prototype.bind = function (e, t) {}),
            (s.prototype.destroy = function () {}),
            (s.prototype.generateResultId = function (e, t) {
              e = e.id + "-result-";
              return (
                (e += n.generateChars(4)),
                null != t.id
                  ? (e += "-" + t.id.toString())
                  : (e += "-" + n.generateChars(4)),
                e
              );
            }),
            s
          );
        }),
        u.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (e, a, l) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              a.Extend(n, e),
              (n.prototype.current = function (e) {
                var t = this;
                e(
                  Array.prototype.map.call(
                    this.$element[0].querySelectorAll(":checked"),
                    function (e) {
                      return t.item(l(e));
                    }
                  )
                );
              }),
              (n.prototype.select = function (i) {
                var e,
                  r = this;
                if (
                  ((i.selected = !0),
                  null != i.element &&
                    "option" === i.element.tagName.toLowerCase())
                )
                  return (
                    (i.element.selected = !0),
                    void this.$element.trigger("input").trigger("change")
                  );
                this.$element.prop("multiple")
                  ? this.current(function (e) {
                      var t = [];
                      (i = [i]).push.apply(i, e);
                      for (var n = 0; n < i.length; n++) {
                        var s = i[n].id;
                        -1 === t.indexOf(s) && t.push(s);
                      }
                      r.$element.val(t),
                        r.$element.trigger("input").trigger("change");
                    })
                  : ((e = i.id),
                    this.$element.val(e),
                    this.$element.trigger("input").trigger("change"));
              }),
              (n.prototype.unselect = function (i) {
                var r = this;
                if (this.$element.prop("multiple")) {
                  if (
                    ((i.selected = !1),
                    null != i.element &&
                      "option" === i.element.tagName.toLowerCase())
                  )
                    return (
                      (i.element.selected = !1),
                      void this.$element.trigger("input").trigger("change")
                    );
                  this.current(function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                      var s = e[n].id;
                      s !== i.id && -1 === t.indexOf(s) && t.push(s);
                    }
                    r.$element.val(t),
                      r.$element.trigger("input").trigger("change");
                  });
                }
              }),
              (n.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {
                  n.select(e.data);
                }),
                  e.on("unselect", function (e) {
                    n.unselect(e.data);
                  });
              }),
              (n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  a.RemoveData(this);
                });
              }),
              (n.prototype.query = function (t, e) {
                var n = [],
                  s = this;
                this.$element.children().each(function () {
                  var e;
                  ("option" !== this.tagName.toLowerCase() &&
                    "optgroup" !== this.tagName.toLowerCase()) ||
                    ((e = l(this)),
                    (e = s.item(e)),
                    null !== (e = s.matches(t, e)) && n.push(e));
                }),
                  e({ results: n });
              }),
              (n.prototype.addOptions = function (e) {
                this.$element.append(e);
              }),
              (n.prototype.option = function (e) {
                var t;
                e.children
                  ? ((t = document.createElement("optgroup")).label = e.text)
                  : void 0 !== (t = document.createElement("option")).textContent
                  ? (t.textContent = e.text)
                  : (t.innerText = e.text),
                  void 0 !== e.id && (t.value = e.id),
                  e.disabled && (t.disabled = !0),
                  e.selected && (t.selected = !0),
                  e.title && (t.title = e.title);
                e = this._normalizeItem(e);
                return (e.element = t), a.StoreData(t, "data", e), l(t);
              }),
              (n.prototype.item = function (e) {
                var t = {};
                if (null != (t = a.GetData(e[0], "data"))) return t;
                var n = e[0];
                if ("option" === n.tagName.toLowerCase())
                  t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title"),
                  };
                else if ("optgroup" === n.tagName.toLowerCase()) {
                  t = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title"),
                  };
                  for (
                    var s = e.children("option"), i = [], r = 0;
                    r < s.length;
                    r++
                  ) {
                    var o = l(s[r]),
                      o = this.item(o);
                    i.push(o);
                  }
                  t.children = i;
                }
                return (
                  ((t = this._normalizeItem(t)).element = e[0]),
                  a.StoreData(e[0], "data", t),
                  t
                );
              }),
              (n.prototype._normalizeItem = function (e) {
                e !== Object(e) && (e = { id: e, text: e });
                return (
                  null != (e = l.extend({}, { text: "" }, e)).id &&
                    (e.id = e.id.toString()),
                  null != e.text && (e.text = e.text.toString()),
                  null == e._resultId &&
                    e.id &&
                    null != this.container &&
                    (e._resultId = this.generateResultId(this.container, e)),
                  l.extend({}, { selected: !1, disabled: !1 }, e)
                );
              }),
              (n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t);
              }),
              n
            );
          }
        ),
        u.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (e, t, c) {
            function s(e, t) {
              (this._dataToConvert = t.get("data") || []),
                s.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(s, e),
              (s.prototype.bind = function (e, t) {
                s.__super__.bind.call(this, e, t),
                  this.addOptions(this.convertToOptions(this._dataToConvert));
              }),
              (s.prototype.select = function (n) {
                var e = this.$element.find("option").filter(function (e, t) {
                  return t.value == n.id.toString();
                });
                0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                  s.__super__.select.call(this, n);
              }),
              (s.prototype.convertToOptions = function (e) {
                var t = this,
                  n = this.$element.find("option"),
                  s = n
                    .map(function () {
                      return t.item(c(this)).id;
                    })
                    .get(),
                  i = [];
                for (var r = 0; r < e.length; r++) {
                  var o,
                    a,
                    l = this._normalizeItem(e[r]);
                  0 <= s.indexOf(l.id)
                    ? ((o = n.filter(
                        (function (e) {
                          return function () {
                            return c(this).val() == e.id;
                          };
                        })(l)
                      )),
                      (a = this.item(o)),
                      (a = c.extend(!0, {}, l, a)),
                      (a = this.option(a)),
                      o.replaceWith(a))
                    : ((a = this.option(l)),
                      l.children &&
                        ((l = this.convertToOptions(l.children)), a.append(l)),
                      i.push(a));
                }
                return i;
              }),
              s
            );
          }
        ),
        u.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (e, t, r) {
            function n(e, t) {
              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                n.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(n, e),
              (n.prototype._applyDefaults = function (e) {
                var t = {
                  data: function (e) {
                    return r.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, n) {
                    e = r.ajax(e);
                    return e.then(t), e.fail(n), e;
                  },
                };
                return r.extend({}, t, e, !0);
              }),
              (n.prototype.processResults = function (e) {
                return e;
              }),
              (n.prototype.query = function (t, n) {
                var s = this;
                null != this._request &&
                  ("function" == typeof this._request.abort &&
                    this._request.abort(),
                  (this._request = null));
                var i = r.extend({ type: "GET" }, this.ajaxOptions);
                function e() {
                  var e = i.transport(
                    i,
                    function (e) {
                      e = s.processResults(e, t);
                      s.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((e && e.results && Array.isArray(e.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        n(e);
                    },
                    function () {
                      ("status" in e && (0 === e.status || "0" === e.status)) ||
                        s.trigger("results:message", { message: "errorLoading" });
                    }
                  );
                  s._request = e;
                }
                "function" == typeof i.url &&
                  (i.url = i.url.call(this.$element, t)),
                  "function" == typeof i.data &&
                    (i.data = i.data.call(this.$element, t)),
                  this.ajaxOptions.delay && null != t.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        e,
                        this.ajaxOptions.delay
                      )))
                    : e();
              }),
              n
            );
          }
        ),
        u.define("select2/data/tags", ["jquery"], function (t) {
          function e(e, t, n) {
            var s = n.get("tags"),
              i = n.get("createTag");
            void 0 !== i && (this.createTag = i);
            i = n.get("insertTag");
            if (
              (void 0 !== i && (this.insertTag = i),
              e.call(this, t, n),
              Array.isArray(s))
            )
              for (var r = 0; r < s.length; r++) {
                var o = s[r],
                  o = this._normalizeItem(o),
                  o = this.option(o);
                this.$element.append(o);
              }
          }
          return (
            (e.prototype.query = function (e, c, u) {
              var d = this;
              this._removeOldTags(),
                null != c.term && null == c.page
                  ? e.call(this, c, function e(t, n) {
                      for (var s = t.results, i = 0; i < s.length; i++) {
                        var r = s[i],
                          o =
                            null != r.children && !e({ results: r.children }, !0);
                        if (
                          (r.text || "").toUpperCase() ===
                            (c.term || "").toUpperCase() ||
                          o
                        )
                          return !n && ((t.data = s), void u(t));
                      }
                      if (n) return !0;
                      var a,
                        l = d.createTag(c);
                      null != l &&
                        ((a = d.option(l)).attr("data-select2-tag", "true"),
                        d.addOptions([a]),
                        d.insertTag(s, l)),
                        (t.results = s),
                        u(t);
                    })
                  : e.call(this, c, u);
            }),
            (e.prototype.createTag = function (e, t) {
              if (null == t.term) return null;
              t = t.term.trim();
              return "" === t ? null : { id: t, text: t };
            }),
            (e.prototype.insertTag = function (e, t, n) {
              t.unshift(n);
            }),
            (e.prototype._removeOldTags = function (e) {
              this.$element.find("option[data-select2-tag]").each(function () {
                this.selected || t(this).remove();
              });
            }),
            e
          );
        }),
        u.define("select2/data/tokenizer", ["jquery"], function (c) {
          function e(e, t, n) {
            var s = n.get("tokenizer");
            void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              e.call(this, t, n),
                (this.$search =
                  t.dropdown.$search ||
                  t.selection.$search ||
                  n.find(".select2-search__field"));
            }),
            (e.prototype.query = function (e, t, n) {
              var s = this;
              t.term = t.term || "";
              var i = this.tokenizer(t, this.options, function (e) {
                var t,
                  n = s._normalizeItem(e);
                s.$element.find("option").filter(function () {
                  return c(this).val() === n.id;
                }).length ||
                  ((t = s.option(n)).attr("data-select2-tag", !0),
                  s._removeOldTags(),
                  s.addOptions([t])),
                  (t = n),
                  s.trigger("select", { data: t });
              });
              i.term !== t.term &&
                (this.$search.length &&
                  (this.$search.val(i.term), this.$search.trigger("focus")),
                (t.term = i.term)),
                e.call(this, t, n);
            }),
            (e.prototype.tokenizer = function (e, t, n, s) {
              for (
                var i = n.get("tokenSeparators") || [],
                  r = t.term,
                  o = 0,
                  a =
                    this.createTag ||
                    function (e) {
                      return { id: e.term, text: e.term };
                    };
                o < r.length;
  
              ) {
                var l = r[o];
                -1 !== i.indexOf(l)
                  ? ((l = r.substr(0, o)),
                    null != (l = a(c.extend({}, t, { term: l })))
                      ? (s(l), (r = r.substr(o + 1) || ""), (o = 0))
                      : o++)
                  : o++;
              }
              return { term: r };
            }),
            e
          );
        }),
        u.define("select2/data/minimumInputLength", [], function () {
          function e(e, t, n) {
            (this.minimumInputLength = n.get("minimumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                t.term.length < this.minimumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        u.define("select2/data/maximumInputLength", [], function () {
          function e(e, t, n) {
            (this.maximumInputLength = n.get("maximumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                0 < this.maximumInputLength &&
                t.term.length > this.maximumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        u.define("select2/data/maximumSelectionLength", [], function () {
          function e(e, t, n) {
            (this.maximumSelectionLength = n.get("maximumSelectionLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("select", function () {
                  s._checkIfMaximumSelected();
                });
            }),
            (e.prototype.query = function (e, t, n) {
              var s = this;
              this._checkIfMaximumSelected(function () {
                e.call(s, t, n);
              });
            }),
            (e.prototype._checkIfMaximumSelected = function (e, t) {
              var n = this;
              this.current(function (e) {
                e = null != e ? e.length : 0;
                0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                  ? n.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: n.maximumSelectionLength },
                    })
                  : t && t();
              });
            }),
            e
          );
        }),
        u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            e.Extend(n, e.Observable),
            (n.prototype.render = function () {
              var e = t(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
            }),
            (n.prototype.bind = function () {}),
            (n.prototype.position = function (e, t) {}),
            (n.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            n
          );
        }),
        u.define("select2/dropdown/search", ["jquery"], function (r) {
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                n = this.options.get("translations").get("search"),
                e = r(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                );
              return (
                (this.$searchContainer = e),
                (this.$search = e.find("input")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete")
                ),
                this.$search.attr("aria-label", n()),
                t.prepend(e),
                t
              );
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = t.id + "-results";
              e.call(this, t, n),
                this.$search.on("keydown", function (e) {
                  s.trigger("keypress", e),
                    (s._keyUpPrevented = e.isDefaultPrevented());
                }),
                this.$search.on("input", function (e) {
                  r(this).off("keyup");
                }),
                this.$search.on("keyup input", function (e) {
                  s.handleSearch(e);
                }),
                t.on("open", function () {
                  s.$search.attr("tabindex", 0),
                    s.$search.attr("aria-controls", i),
                    s.$search.trigger("focus"),
                    window.setTimeout(function () {
                      s.$search.trigger("focus");
                    }, 0);
                }),
                t.on("close", function () {
                  s.$search.attr("tabindex", -1),
                    s.$search.removeAttr("aria-controls"),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.val(""),
                    s.$search.trigger("blur");
                }),
                t.on("focus", function () {
                  t.isOpen() || s.$search.trigger("focus");
                }),
                t.on("results:all", function (e) {
                  (null != e.query.term && "" !== e.query.term) ||
                    (s.showSearch(e)
                      ? s.$searchContainer[0].classList.remove(
                          "select2-search--hide"
                        )
                      : s.$searchContainer[0].classList.add(
                          "select2-search--hide"
                        ));
                }),
                t.on("results:focus", function (e) {
                  e.data._resultId
                    ? s.$search.attr("aria-activedescendant", e.data._resultId)
                    : s.$search.removeAttr("aria-activedescendant");
                });
            }),
            (e.prototype.handleSearch = function (e) {
              var t;
              this._keyUpPrevented ||
                ((t = this.$search.val()), this.trigger("query", { term: t })),
                (this._keyUpPrevented = !1);
            }),
            (e.prototype.showSearch = function (e, t) {
              return !0;
            }),
            e
          );
        }),
        u.define("select2/dropdown/hidePlaceholder", [], function () {
          function e(e, t, n, s) {
            (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
              e.call(this, t, n, s);
          }
          return (
            (e.prototype.append = function (e, t) {
              (t.results = this.removePlaceholder(t.results)), e.call(this, t);
            }),
            (e.prototype.normalizePlaceholder = function (e, t) {
              return (t = "string" == typeof t ? { id: "", text: t } : t);
            }),
            (e.prototype.removePlaceholder = function (e, t) {
              for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                var i = t[s];
                this.placeholder.id === i.id && n.splice(s, 1);
              }
              return n;
            }),
            e
          );
        }),
        u.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
          function e(e, t, n, s) {
            (this.lastParams = {}),
              e.call(this, t, n, s),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (e.prototype.append = function (e, t) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                e.call(this, t),
                this.showLoadingMore(t) &&
                  (this.$results.append(this.$loadingMore),
                  this.loadMoreIfNeeded());
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("query", function (e) {
                  (s.lastParams = e), (s.loading = !0);
                }),
                t.on("query:append", function (e) {
                  (s.lastParams = e), (s.loading = !0);
                }),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }),
            (e.prototype.loadMoreIfNeeded = function () {
              var e = n.contains(document.documentElement, this.$loadingMore[0]);
              !this.loading &&
                e &&
                ((e = this.$results.offset().top + this.$results.outerHeight(!1)),
                this.$loadingMore.offset().top +
                  this.$loadingMore.outerHeight(!1) <=
                  e + 50 && this.loadMore());
            }),
            (e.prototype.loadMore = function () {
              this.loading = !0;
              var e = n.extend({}, { page: 1 }, this.lastParams);
              e.page++, this.trigger("query:append", e);
            }),
            (e.prototype.showLoadingMore = function (e, t) {
              return t.pagination && t.pagination.more;
            }),
            (e.prototype.createLoadingMore = function () {
              var e = n(
                  '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                ),
                t = this.options.get("translations").get("loadingMore");
              return e.html(t(this.lastParams)), e;
            }),
            e
          );
        }),
        u.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (u, o) {
            function e(e, t, n) {
              (this.$dropdownParent = u(
                n.get("dropdownParent") || document.body
              )),
                e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function (e, t, n) {
                var s = this;
                e.call(this, t, n),
                  t.on("open", function () {
                    s._showDropdown(),
                      s._attachPositioningHandler(t),
                      s._bindContainerResultHandlers(t);
                  }),
                  t.on("close", function () {
                    s._hideDropdown(), s._detachPositioningHandler(t);
                  }),
                  this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation();
                  });
              }),
              (e.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove();
              }),
              (e.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")),
                  t[0].classList.remove("select2"),
                  t[0].classList.add("select2-container--open"),
                  t.css({ position: "absolute", top: -999999 }),
                  (this.$container = n);
              }),
              (e.prototype.render = function (e) {
                var t = u("<span></span>"),
                  e = e.call(this);
                return t.append(e), (this.$dropdownContainer = t);
              }),
              (e.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach();
              }),
              (e.prototype._bindContainerResultHandlers = function (e, t) {
                var n;
                this._containerResultsHandlersBound ||
                  ((n = this),
                  t.on("results:all", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("results:append", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("results:message", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("select", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("unselect", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  (this._containerResultsHandlersBound = !0));
              }),
              (e.prototype._attachPositioningHandler = function (e, t) {
                var n = this,
                  s = "scroll.select2." + t.id,
                  i = "resize.select2." + t.id,
                  r = "orientationchange.select2." + t.id,
                  t = this.$container.parents().filter(o.hasScroll);
                t.each(function () {
                  o.StoreData(this, "select2-scroll-position", {
                    x: u(this).scrollLeft(),
                    y: u(this).scrollTop(),
                  });
                }),
                  t.on(s, function (e) {
                    var t = o.GetData(this, "select2-scroll-position");
                    u(this).scrollTop(t.y);
                  }),
                  u(window).on(s + " " + i + " " + r, function (e) {
                    n._positionDropdown(), n._resizeDropdown();
                  });
              }),
              (e.prototype._detachPositioningHandler = function (e, t) {
                var n = "scroll.select2." + t.id,
                  s = "resize.select2." + t.id,
                  t = "orientationchange.select2." + t.id;
                this.$container.parents().filter(o.hasScroll).off(n),
                  u(window).off(n + " " + s + " " + t);
              }),
              (e.prototype._positionDropdown = function () {
                var e = u(window),
                  t = this.$dropdown[0].classList.contains(
                    "select2-dropdown--above"
                  ),
                  n = this.$dropdown[0].classList.contains(
                    "select2-dropdown--below"
                  ),
                  s = null,
                  i = this.$container.offset();
                i.bottom = i.top + this.$container.outerHeight(!1);
                var r = { height: this.$container.outerHeight(!1) };
                (r.top = i.top), (r.bottom = i.top + r.height);
                var o = this.$dropdown.outerHeight(!1),
                  a = e.scrollTop(),
                  l = e.scrollTop() + e.height(),
                  c = a < i.top - o,
                  e = l > i.bottom + o,
                  a = { left: i.left, top: r.bottom },
                  l = this.$dropdownParent;
                "static" === l.css("position") && (l = l.offsetParent());
                i = { top: 0, left: 0 };
                (u.contains(document.body, l[0]) || l[0].isConnected) &&
                  (i = l.offset()),
                  (a.top -= i.top),
                  (a.left -= i.left),
                  t || n || (s = "below"),
                  e || !c || t ? !c && e && t && (s = "below") : (s = "above"),
                  ("above" == s || (t && "below" !== s)) &&
                    (a.top = r.top - i.top - o),
                  null != s &&
                    (this.$dropdown[0].classList.remove(
                      "select2-dropdown--below"
                    ),
                    this.$dropdown[0].classList.remove("select2-dropdown--above"),
                    this.$dropdown[0].classList.add("select2-dropdown--" + s),
                    this.$container[0].classList.remove(
                      "select2-container--below"
                    ),
                    this.$container[0].classList.remove(
                      "select2-container--above"
                    ),
                    this.$container[0].classList.add("select2-container--" + s)),
                  this.$dropdownContainer.css(a);
              }),
              (e.prototype._resizeDropdown = function () {
                var e = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((e.minWidth = e.width),
                  (e.position = "relative"),
                  (e.width = "auto")),
                  this.$dropdown.css(e);
              }),
              (e.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              e
            );
          }
        ),
        u.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function e(e, t, n, s) {
            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              e.call(this, t, n, s);
          }
          return (
            (e.prototype.showSearch = function (e, t) {
              return (
                !(
                  (function e(t) {
                    for (var n = 0, s = 0; s < t.length; s++) {
                      var i = t[s];
                      i.children ? (n += e(i.children)) : n++;
                    }
                    return n;
                  })(t.data.results) < this.minimumResultsForSearch
                ) && e.call(this, t)
              );
            }),
            e
          );
        }),
        u.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("close", function (e) {
                  s._handleSelectOnClose(e);
                });
            }),
            (e.prototype._handleSelectOnClose = function (e, t) {
              if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ("select" === n._type || "unselect" === n._type) return;
              }
              n = this.getHighlightedResults();
              n.length < 1 ||
                (null != (n = s.GetData(n[0], "data")).element &&
                  n.element.selected) ||
                (null == n.element && n.selected) ||
                this.trigger("select", { data: n });
            }),
            e
          );
        }),
        u.define("select2/dropdown/closeOnSelect", [], function () {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("select", function (e) {
                  s._selectTriggered(e);
                }),
                t.on("unselect", function (e) {
                  s._selectTriggered(e);
                });
            }),
            (e.prototype._selectTriggered = function (e, t) {
              var n = t.originalEvent;
              (n && (n.ctrlKey || n.metaKey)) ||
                this.trigger("close", {
                  originalEvent: n,
                  originalSelect2Event: t,
                });
            }),
            e
          );
        }),
        u.define("select2/dropdown/dropdownCss", ["../utils"], function (n) {
          function e() {}
          return (
            (e.prototype.render = function (e) {
              var t = e.call(this),
                e = this.options.get("dropdownCssClass") || "";
              return (
                -1 !== e.indexOf(":all:") &&
                  ((e = e.replace(":all:", "")),
                  n.copyNonInternalCssClasses(t[0], this.$element[0])),
                t.addClass(e),
                t
              );
            }),
            e
          );
        }),
        u.define(
          "select2/dropdown/tagsSearchHighlight",
          ["../utils"],
          function (s) {
            function e() {}
            return (
              (e.prototype.highlightFirstItem = function (e) {
                var t = this.$results.find(
                  ".select2-results__option--selectable:not(.select2-results__option--selected)"
                );
                if (0 < t.length) {
                  var n = t.first(),
                    t = s.GetData(n[0], "data").element;
                  if (
                    t &&
                    t.getAttribute &&
                    "true" === t.getAttribute("data-select2-tag")
                  )
                    return void n.trigger("mouseenter");
                }
                e.call(this);
              }),
              e
            );
          }
        ),
        u.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (e) {
              var t = e.input.length - e.maximum,
                e = "Please delete " + t + " character";
              return 1 != t && (e += "s"), e;
            },
            inputTooShort: function (e) {
              return (
                "Please enter " +
                (e.minimum - e.input.length) +
                " or more characters"
              );
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
            removeAllItems: function () {
              return "Remove all items";
            },
            removeItem: function () {
              return "Remove item";
            },
            search: function () {
              return "Search";
            },
          };
        }),
        u.define(
          "select2/defaults",
          [
            "jquery",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/selectionCss",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./dropdown/dropdownCss",
            "./dropdown/tagsSearchHighlight",
            "./i18n/en",
          ],
          function (
            l,
            r,
            o,
            a,
            c,
            u,
            d,
            p,
            h,
            f,
            g,
            t,
            m,
            y,
            v,
            _,
            b,
            $,
            w,
            x,
            A,
            D,
            S,
            E,
            O,
            C,
            L,
            T,
            q,
            I,
            e
          ) {
            function n() {
              this.reset();
            }
            return (
              (n.prototype.apply = function (e) {
                var t;
                null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                  (null != e.ajax
                    ? (e.dataAdapter = v)
                    : null != e.data
                    ? (e.dataAdapter = y)
                    : (e.dataAdapter = m),
                  0 < e.minimumInputLength &&
                    (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                  0 < e.maximumInputLength &&
                    (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                  0 < e.maximumSelectionLength &&
                    (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                  e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                  (null == e.tokenSeparators && null == e.tokenizer) ||
                    (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                  null == e.resultsAdapter &&
                    ((e.resultsAdapter = r),
                    null != e.ajax &&
                      (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)),
                    null != e.placeholder &&
                      (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                    e.selectOnClose &&
                      (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)),
                    e.tags &&
                      (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
                  null == e.dropdownAdapter &&
                    (e.multiple
                      ? (e.dropdownAdapter = A)
                      : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                    0 !== e.minimumResultsForSearch &&
                      (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)),
                    e.closeOnSelect &&
                      (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                    null != e.dropdownCssClass &&
                      (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O))),
                  null == e.selectionAdapter &&
                    (e.multiple
                      ? (e.selectionAdapter = a)
                      : (e.selectionAdapter = o),
                    null != e.placeholder &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                    e.allowClear &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                    e.multiple &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                    null != e.selectionCssClass &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                  (e.language = this._resolveLanguage(e.language)),
                  e.language.push("en");
                for (var n = [], s = 0; s < e.language.length; s++) {
                  var i = e.language[s];
                  -1 === n.indexOf(i) && n.push(i);
                }
                return (
                  (e.language = n),
                  (e.translations = this._processTranslations(
                    e.language,
                    e.debug
                  )),
                  e
                );
              }),
              (n.prototype.reset = function () {
                function a(e) {
                  return e.replace(/[^\u0000-\u007E]/g, function (e) {
                    return t[e] || e;
                  });
                }
                this.defaults = {
                  amdLanguageBase: "./i18n/",
                  autocomplete: "off",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: f.escapeMarkup,
                  language: {},
                  matcher: function e(t, n) {
                    if (null == t.term || "" === t.term.trim()) return n;
                    if (n.children && 0 < n.children.length) {
                      for (
                        var s = l.extend(!0, {}, n), i = n.children.length - 1;
                        0 <= i;
                        i--
                      )
                        null == e(t, n.children[i]) && s.children.splice(i, 1);
                      return 0 < s.children.length ? s : e(t, s);
                    }
                    var r = a(n.text).toUpperCase(),
                      o = a(t.term).toUpperCase();
                    return -1 < r.indexOf(o) ? n : null;
                  },
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  scrollAfterSelect: !1,
                  sorter: function (e) {
                    return e;
                  },
                  templateResult: function (e) {
                    return e.text;
                  },
                  templateSelection: function (e) {
                    return e.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (n.prototype.applyFromElement = function (e, t) {
                var n = e.language,
                  s = this.defaults.language,
                  i = t.prop("lang"),
                  t = t.closest("[lang]").prop("lang"),
                  t = Array.prototype.concat.call(
                    this._resolveLanguage(i),
                    this._resolveLanguage(n),
                    this._resolveLanguage(s),
                    this._resolveLanguage(t)
                  );
                return (e.language = t), e;
              }),
              (n.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (l.isEmptyObject(e)) return [];
                if (l.isPlainObject(e)) return [e];
                for (
                  var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                  i < n.length;
                  i++
                )
                  s.push(n[i]),
                    "string" == typeof n[i] &&
                      0 < n[i].indexOf("-") &&
                      ((t = n[i].split("-")[0]), s.push(t));
                return s;
              }),
              (n.prototype._processTranslations = function (e, t) {
                for (var n = new g(), s = 0; s < e.length; s++) {
                  var i = new g(),
                    r = e[s];
                  if ("string" == typeof r)
                    try {
                      i = g.loadPath(r);
                    } catch (e) {
                      try {
                        (r = this.defaults.amdLanguageBase + r),
                          (i = g.loadPath(r));
                      } catch (e) {
                        t &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              r +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                      }
                    }
                  else i = l.isPlainObject(r) ? new g(r) : r;
                  n.extend(i);
                }
                return n;
              }),
              (n.prototype.set = function (e, t) {
                var n = {};
                n[l.camelCase(e)] = t;
                n = f._convertData(n);
                l.extend(!0, this.defaults, n);
              }),
              new n()
            );
          }
        ),
        u.define(
          "select2/options",
          ["jquery", "./defaults", "./utils"],
          function (c, n, u) {
            function e(e, t) {
              (this.options = e),
                null != t && this.fromElement(t),
                null != t && (this.options = n.applyFromElement(this.options, t)),
                (this.options = n.apply(this.options));
            }
            return (
              (e.prototype.fromElement = function (e) {
                var t = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = e.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = e.prop("disabled")),
                  null == this.options.autocomplete &&
                    e.prop("autocomplete") &&
                    (this.options.autocomplete = e.prop("autocomplete")),
                  null == this.options.dir &&
                    (e.prop("dir")
                      ? (this.options.dir = e.prop("dir"))
                      : e.closest("[dir]").prop("dir")
                      ? (this.options.dir = e.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  e.prop("disabled", this.options.disabled),
                  e.prop("multiple", this.options.multiple),
                  u.GetData(e[0], "select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
                    u.StoreData(e[0], "tags", !0)),
                  u.GetData(e[0], "ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                    u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
                var n = {};
                function s(e, t) {
                  return t.toUpperCase();
                }
                for (var i = 0; i < e[0].attributes.length; i++) {
                  var r = e[0].attributes[i].name,
                    o = "data-";
                  r.substr(0, o.length) == o &&
                    ((r = r.substring(o.length)),
                    (o = u.GetData(e[0], r)),
                    (n[r.replace(/-([a-z])/g, s)] = o));
                }
                c.fn.jquery &&
                  "1." == c.fn.jquery.substr(0, 2) &&
                  e[0].dataset &&
                  (n = c.extend(!0, {}, e[0].dataset, n));
                var a,
                  l = c.extend(!0, {}, u.GetData(e[0]), n);
                for (a in (l = u._convertData(l)))
                  -1 < t.indexOf(a) ||
                    (c.isPlainObject(this.options[a])
                      ? c.extend(this.options[a], l[a])
                      : (this.options[a] = l[a]));
                return this;
              }),
              (e.prototype.get = function (e) {
                return this.options[e];
              }),
              (e.prototype.set = function (e, t) {
                this.options[e] = t;
              }),
              e
            );
          }
        ),
        u.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (t, i, r, s) {
            var o = function (e, t) {
              null != r.GetData(e[0], "select2") &&
                r.GetData(e[0], "select2").destroy(),
                (this.$element = e),
                (this.id = this._generateId(e)),
                (t = t || {}),
                (this.options = new i(t, e)),
                o.__super__.constructor.call(this);
              var n = e.attr("tabindex") || 0;
              r.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
              t = this.options.get("dataAdapter");
              this.dataAdapter = new t(e, this.options);
              n = this.render();
              this._placeContainer(n);
              t = this.options.get("selectionAdapter");
              (this.selection = new t(e, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, n);
              t = this.options.get("dropdownAdapter");
              (this.dropdown = new t(e, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, n);
              n = this.options.get("resultsAdapter");
              (this.results = new n(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var s = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (e) {
                  s.trigger("selection:update", { data: e });
                }),
                e[0].classList.add("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                r.StoreData(e[0], "select2", this),
                e.data("select2", this);
            };
            return (
              r.Extend(o, r.Observable),
              (o.prototype._generateId = function (e) {
                return (
                  "select2-" +
                  (null != e.attr("id")
                    ? e.attr("id")
                    : null != e.attr("name")
                    ? e.attr("name") + "-" + r.generateChars(2)
                    : r.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, "")
                );
              }),
              (o.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != t && e.css("width", t);
              }),
              (o.prototype._resolveWidth = function (e, t) {
                var n =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                  var s = this._resolveWidth(e, "style");
                  return null != s ? s : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                  s = e.outerWidth(!1);
                  return s <= 0 ? "auto" : s + "px";
                }
                if ("style" != t)
                  return "computedstyle" != t
                    ? t
                    : window.getComputedStyle(e[0]).width;
                e = e.attr("style");
                if ("string" != typeof e) return null;
                for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) {
                  var a = i[r].replace(/\s/g, "").match(n);
                  if (null !== a && 1 <= a.length) return a[1];
                }
                return null;
              }),
              (o.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (o.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                  t.dataAdapter.current(function (e) {
                    t.trigger("selection:update", { data: e });
                  });
                }),
                  this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e);
                  }),
                  (this._syncA = r.bind(this._syncAttributes, this)),
                  (this._syncS = r.bind(this._syncSubtree, this)),
                  (this._observer = new window.MutationObserver(function (e) {
                    t._syncA(), t._syncS(e);
                  })),
                  this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1,
                  });
              }),
              (o.prototype._registerDataEvents = function () {
                var n = this;
                this.dataAdapter.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (o.prototype._registerSelectionEvents = function () {
                var n = this,
                  s = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  n.toggleDropdown();
                }),
                  this.selection.on("focus", function (e) {
                    n.focus(e);
                  }),
                  this.selection.on("*", function (e, t) {
                    -1 === s.indexOf(e) && n.trigger(e, t);
                  });
              }),
              (o.prototype._registerDropdownEvents = function () {
                var n = this;
                this.dropdown.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (o.prototype._registerResultsEvents = function () {
                var n = this;
                this.results.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (o.prototype._registerEvents = function () {
                var n = this;
                this.on("open", function () {
                  n.$container[0].classList.add("select2-container--open");
                }),
                  this.on("close", function () {
                    n.$container[0].classList.remove("select2-container--open");
                  }),
                  this.on("enable", function () {
                    n.$container[0].classList.remove(
                      "select2-container--disabled"
                    );
                  }),
                  this.on("disable", function () {
                    n.$container[0].classList.add("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    n.$container[0].classList.remove("select2-container--focus");
                  }),
                  this.on("query", function (t) {
                    n.isOpen() || n.trigger("open", {}),
                      this.dataAdapter.query(t, function (e) {
                        n.trigger("results:all", { data: e, query: t });
                      });
                  }),
                  this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:append", { data: e, query: t });
                    });
                  }),
                  this.on("keypress", function (e) {
                    var t = e.which;
                    n.isOpen()
                      ? t === s.ESC || (t === s.UP && e.altKey)
                        ? (n.close(e), e.preventDefault())
                        : t === s.ENTER || t === s.TAB
                        ? (n.trigger("results:select", {}), e.preventDefault())
                        : t === s.SPACE && e.ctrlKey
                        ? (n.trigger("results:toggle", {}), e.preventDefault())
                        : t === s.UP
                        ? (n.trigger("results:previous", {}), e.preventDefault())
                        : t === s.DOWN &&
                          (n.trigger("results:next", {}), e.preventDefault())
                      : (t === s.ENTER ||
                          t === s.SPACE ||
                          (t === s.DOWN && e.altKey)) &&
                        (n.open(), e.preventDefault());
                  });
              }),
              (o.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.isDisabled()
                    ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (o.prototype._isChangeMutation = function (e) {
                var t = this;
                if (e.addedNodes && 0 < e.addedNodes.length) {
                  for (var n = 0; n < e.addedNodes.length; n++)
                    if (e.addedNodes[n].selected) return !0;
                } else {
                  if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                  if (Array.isArray(e))
                    return e.some(function (e) {
                      return t._isChangeMutation(e);
                    });
                }
                return !1;
              }),
              (o.prototype._syncSubtree = function (e) {
                var e = this._isChangeMutation(e),
                  t = this;
                e &&
                  this.dataAdapter.current(function (e) {
                    t.trigger("selection:update", { data: e });
                  });
              }),
              (o.prototype.trigger = function (e, t) {
                var n = o.__super__.trigger,
                  s = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing",
                  };
                if ((void 0 === t && (t = {}), e in s)) {
                  var i = s[e],
                    s = { prevented: !1, name: e, args: t };
                  if ((n.call(this, i, s), s.prevented))
                    return void (t.prevented = !0);
                }
                n.call(this, e, t);
              }),
              (o.prototype.toggleDropdown = function () {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open());
              }),
              (o.prototype.open = function () {
                this.isOpen() || this.isDisabled() || this.trigger("query", {});
              }),
              (o.prototype.close = function (e) {
                this.isOpen() && this.trigger("close", { originalEvent: e });
              }),
              (o.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (o.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              (o.prototype.isOpen = function () {
                return this.$container[0].classList.contains(
                  "select2-container--open"
                );
              }),
              (o.prototype.hasFocus = function () {
                return this.$container[0].classList.contains(
                  "select2-container--focus"
                );
              }),
              (o.prototype.focus = function (e) {
                this.hasFocus() ||
                  (this.$container[0].classList.add("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (o.prototype.enable = function (e) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  );
                e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
                this.$element.prop("disabled", e);
              }),
              (o.prototype.data = function () {
                this.options.get("debug") &&
                  0 < arguments.length &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var t = [];
                return (
                  this.dataAdapter.current(function (e) {
                    t = e;
                  }),
                  t
                );
              }),
              (o.prototype.val = function (e) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                e = e[0];
                Array.isArray(e) &&
                  (e = e.map(function (e) {
                    return e.toString();
                  })),
                  this.$element.val(e).trigger("input").trigger("change");
              }),
              (o.prototype.destroy = function () {
                r.RemoveData(this.$container[0]),
                  this.$container.remove(),
                  this._observer.disconnect(),
                  (this._observer = null),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    r.GetData(this.$element[0], "old-tabindex")
                  ),
                  this.$element[0].classList.remove("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  r.RemoveData(this.$element[0]),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (o.prototype.render = function () {
                var e = t(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  e.attr("dir", this.options.get("dir")),
                  (this.$container = e),
                  this.$container[0].classList.add(
                    "select2-container--" + this.options.get("theme")
                  ),
                  r.StoreData(e[0], "element", this.$element),
                  e
                );
              }),
              o
            );
          }
        ),
        u.define("jquery-mousewheel", ["jquery"], function (e) {
          return e;
        }),
        u.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
            "./select2/utils",
          ],
          function (i, e, r, t, o) {
            var a;
            return (
              null == i.fn.select2 &&
                ((a = ["open", "close", "destroy"]),
                (i.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var e = i.extend(!0, {}, t);
                        new r(i(this), e);
                      }),
                      this
                    );
                  if ("string" != typeof t)
                    throw new Error("Invalid arguments for Select2: " + t);
                  var n,
                    s = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var e = o.GetData(this, "select2");
                      null == e &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            t +
                            "') method was called on an element that is not using Select2."
                        ),
                        (n = e[t].apply(e, s));
                    }),
                    -1 < a.indexOf(t) ? this : n
                  );
                })),
              null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
              r
            );
          }
        ),
        { define: u.define, require: u.require });
    function b(e, t) {
      return i.call(e, t);
    }
    function l(e, t) {
      var n,
        s,
        i,
        r,
        o,
        a,
        l,
        c,
        u,
        d,
        p = t && t.split("/"),
        h = y.map,
        f = (h && h["*"]) || {};
      if (e) {
        for (
          t = (e = e.split("/")).length - 1,
            y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")),
            "." === e[0].charAt(0) &&
              p &&
              (e = p.slice(0, p.length - 1).concat(e)),
            c = 0;
          c < e.length;
          c++
        )
          "." === (d = e[c])
            ? (e.splice(c, 1), --c)
            : ".." === d &&
              (0 === c ||
                (1 === c && ".." === e[2]) ||
                ".." === e[c - 1] ||
                (0 < c && (e.splice(c - 1, 2), (c -= 2))));
        e = e.join("/");
      }
      if ((p || f) && h) {
        for (c = (n = e.split("/")).length; 0 < c; --c) {
          if (((s = n.slice(0, c).join("/")), p))
            for (u = p.length; 0 < u; --u)
              if (((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))) {
                (r = i), (o = c);
                break;
              }
          if (r) break;
          !a && f && f[s] && ((a = f[s]), (l = c));
        }
        !r && a && ((r = a), (o = l)),
          r && (n.splice(0, o, r), (e = n.join("/")));
      }
      return e;
    }
    function w(t, n) {
      return function () {
        var e = a.call(arguments, 0);
        return (
          "string" != typeof e[0] && 1 === e.length && e.push(null),
          o.apply(p, e.concat([t, n]))
        );
      };
    }
    function x(e) {
      var t;
      if (
        (b(m, e) && ((t = m[e]), delete m[e], (v[e] = !0), r.apply(p, t)),
        !b(g, e) && !b(v, e))
      )
        throw new Error("No " + e);
      return g[e];
    }
    function c(e) {
      var t,
        n = e ? e.indexOf("!") : -1;
      return (
        -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
        [t, e]
      );
    }
    function A(e) {
      return e ? c(e) : [];
    }
    var u = s.require("jquery.select2");
    return (t.fn.select2.amd = s), u;
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a("object" == typeof exports ? require("jquery") : jQuery);
  })(function (a, b) {
    function c() {
      return new Date(Date.UTC.apply(Date, arguments));
    }
    function d() {
      var a = new Date();
      return c(a.getFullYear(), a.getMonth(), a.getDate());
    }
    function e(a, b) {
      return (
        a.getUTCFullYear() === b.getUTCFullYear() &&
        a.getUTCMonth() === b.getUTCMonth() &&
        a.getUTCDate() === b.getUTCDate()
      );
    }
    function f(c, d) {
      return function () {
        return (
          d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments)
        );
      };
    }
    function g(a) {
      return a && !isNaN(a.getTime());
    }
    function h(b, c) {
      function d(a, b) {
        return b.toLowerCase();
      }
      var e,
        f = a(b).data(),
        g = {},
        h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
      c = new RegExp("^" + c.toLowerCase());
      for (var i in f) c.test(i) && ((e = i.replace(h, d)), (g[e] = f[i]));
      return g;
    }
    function i(b) {
      var c = {};
      if (q[b] || ((b = b.split("-")[0]), q[b])) {
        var d = q[b];
        return (
          a.each(p, function (a, b) {
            b in d && (c[b] = d[b]);
          }),
          c
        );
      }
    }
    var j = (function () {
        var b = {
          get: function (a) {
            return this.slice(a)[0];
          },
          contains: function (a) {
            for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
              if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
                return c;
            return -1;
          },
          remove: function (a) {
            this.splice(a, 1);
          },
          replace: function (b) {
            b &&
              (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
          },
          clear: function () {
            this.length = 0;
          },
          copy: function () {
            var a = new j();
            return a.replace(this), a;
          },
        };
        return function () {
          var c = [];
          return c.push.apply(c, arguments), a.extend(c, b), c;
        };
      })(),
      k = function (b, c) {
        a.data(b, "datepicker", this),
          (this._events = []),
          (this._secondaryEvents = []),
          this._process_options(c),
          (this.dates = new j()),
          (this.viewDate = this.o.defaultViewDate),
          (this.focusDate = null),
          (this.element = a(b)),
          (this.isInput = this.element.is("input")),
          (this.inputField = this.isInput
            ? this.element
            : this.element.find("input")),
          (this.component =
            !!this.element.hasClass("date") &&
            this.element.find(
              ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
            )),
          this.component && 0 === this.component.length && (this.component = !1),
          (this.isInline = !this.component && this.element.is("div")),
          (this.picker = a(r.template)),
          this._check_template(this.o.templates.leftArrow) &&
            this.picker.find(".prev").html(this.o.templates.leftArrow),
          this._check_template(this.o.templates.rightArrow) &&
            this.picker.find(".next").html(this.o.templates.rightArrow),
          this._buildEvents(),
          this._attachEvents(),
          this.isInline
            ? this.picker.addClass("datepicker-inline").appendTo(this.element)
            : this.picker.addClass("datepicker-dropdown dropdown-menu"),
          this.o.rtl && this.picker.addClass("datepicker-rtl"),
          this.o.calendarWeeks &&
            this.picker
              .find(
                ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
              )
              .attr("colspan", function (a, b) {
                return Number(b) + 1;
              }),
          this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled,
          }),
          (this._allow_update = !1),
          this.setViewMode(this.o.startView),
          (this._allow_update = !0),
          this.fillDow(),
          this.fillMonths(),
          this.update(),
          this.isInline && this.show();
      };
    k.prototype = {
      constructor: k,
      _resolveViewName: function (b) {
        return (
          a.each(r.viewModes, function (c, d) {
            if (b === c || -1 !== a.inArray(b, d.names)) return (b = c), !1;
          }),
          b
        );
      },
      _resolveDaysOfWeek: function (b) {
        return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
      },
      _check_template: function (c) {
        try {
          if (c === b || "" === c) return !1;
          if ((c.match(/[<>]/g) || []).length <= 0) return !0;
          return a(c).length > 0;
        } catch (a) {
          return !1;
        }
      },
      _process_options: function (b) {
        this._o = a.extend({}, this._o, b);
        var e = (this.o = a.extend({}, this._o)),
          f = e.language;
        q[f] || ((f = f.split("-")[0]), q[f] || (f = o.language)),
          (e.language = f),
          (e.startView = this._resolveViewName(e.startView)),
          (e.minViewMode = this._resolveViewName(e.minViewMode)),
          (e.maxViewMode = this._resolveViewName(e.maxViewMode)),
          (e.startView = Math.max(
            this.o.minViewMode,
            Math.min(this.o.maxViewMode, e.startView)
          )),
          !0 !== e.multidate &&
            ((e.multidate = Number(e.multidate) || !1),
            !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))),
          (e.multidateSeparator = String(e.multidateSeparator)),
          (e.weekStart %= 7),
          (e.weekEnd = (e.weekStart + 6) % 7);
        var g = r.parseFormat(e.format);
        e.startDate !== -1 / 0 &&
          (e.startDate
            ? e.startDate instanceof Date
              ? (e.startDate = this._local_to_utc(this._zero_time(e.startDate)))
              : (e.startDate = r.parseDate(
                  e.startDate,
                  g,
                  e.language,
                  e.assumeNearbyYear
                ))
            : (e.startDate = -1 / 0)),
          e.endDate !== 1 / 0 &&
            (e.endDate
              ? e.endDate instanceof Date
                ? (e.endDate = this._local_to_utc(this._zero_time(e.endDate)))
                : (e.endDate = r.parseDate(
                    e.endDate,
                    g,
                    e.language,
                    e.assumeNearbyYear
                  ))
              : (e.endDate = 1 / 0)),
          (e.daysOfWeekDisabled = this._resolveDaysOfWeek(
            e.daysOfWeekDisabled || []
          )),
          (e.daysOfWeekHighlighted = this._resolveDaysOfWeek(
            e.daysOfWeekHighlighted || []
          )),
          (e.datesDisabled = e.datesDisabled || []),
          a.isArray(e.datesDisabled) ||
            (e.datesDisabled = e.datesDisabled.split(",")),
          (e.datesDisabled = a.map(e.datesDisabled, function (a) {
            return r.parseDate(a, g, e.language, e.assumeNearbyYear);
          }));
        var h = String(e.orientation).toLowerCase().split(/\s+/g),
          i = e.orientation.toLowerCase();
        if (
          ((h = a.grep(h, function (a) {
            return /^auto|left|right|top|bottom$/.test(a);
          })),
          (e.orientation = { x: "auto", y: "auto" }),
          i && "auto" !== i)
        )
          if (1 === h.length)
            switch (h[0]) {
              case "top":
              case "bottom":
                e.orientation.y = h[0];
                break;
              case "left":
              case "right":
                e.orientation.x = h[0];
            }
          else
            (i = a.grep(h, function (a) {
              return /^left|right$/.test(a);
            })),
              (e.orientation.x = i[0] || "auto"),
              (i = a.grep(h, function (a) {
                return /^top|bottom$/.test(a);
              })),
              (e.orientation.y = i[0] || "auto");
        else;
        if (
          e.defaultViewDate instanceof Date ||
          "string" == typeof e.defaultViewDate
        )
          e.defaultViewDate = r.parseDate(
            e.defaultViewDate,
            g,
            e.language,
            e.assumeNearbyYear
          );
        else if (e.defaultViewDate) {
          var j = e.defaultViewDate.year || new Date().getFullYear(),
            k = e.defaultViewDate.month || 0,
            l = e.defaultViewDate.day || 1;
          e.defaultViewDate = c(j, k, l);
        } else e.defaultViewDate = d();
      },
      _applyEvents: function (a) {
        for (var c, d, e, f = 0; f < a.length; f++)
          (c = a[f][0]),
            2 === a[f].length
              ? ((d = b), (e = a[f][1]))
              : 3 === a[f].length && ((d = a[f][1]), (e = a[f][2])),
            c.on(e, d);
      },
      _unapplyEvents: function (a) {
        for (var c, d, e, f = 0; f < a.length; f++)
          (c = a[f][0]),
            2 === a[f].length
              ? ((e = b), (d = a[f][1]))
              : 3 === a[f].length && ((e = a[f][1]), (d = a[f][2])),
            c.off(d, e);
      },
      _buildEvents: function () {
        var b = {
          keyup: a.proxy(function (b) {
            -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
              this.update();
          }, this),
          keydown: a.proxy(this.keydown, this),
          paste: a.proxy(this.paste, this),
        };
        !0 === this.o.showOnFocus && (b.focus = a.proxy(this.show, this)),
          this.isInput
            ? (this._events = [[this.element, b]])
            : this.component && this.inputField.length
            ? (this._events = [
                [this.inputField, b],
                [this.component, { click: a.proxy(this.show, this) }],
              ])
            : (this._events = [
                [
                  this.element,
                  {
                    click: a.proxy(this.show, this),
                    keydown: a.proxy(this.keydown, this),
                  },
                ],
              ]),
          this._events.push(
            [
              this.element,
              "*",
              {
                blur: a.proxy(function (a) {
                  this._focused_from = a.target;
                }, this),
              },
            ],
            [
              this.element,
              {
                blur: a.proxy(function (a) {
                  this._focused_from = a.target;
                }, this),
              },
            ]
          ),
          this.o.immediateUpdates &&
            this._events.push([
              this.element,
              {
                "changeYear changeMonth": a.proxy(function (a) {
                  this.update(a.date);
                }, this),
              },
            ]),
          (this._secondaryEvents = [
            [this.picker, { click: a.proxy(this.click, this) }],
            [
              this.picker,
              ".prev, .next",
              { click: a.proxy(this.navArrowsClick, this) },
            ],
            [
              this.picker,
              ".day:not(.disabled)",
              { click: a.proxy(this.dayCellClick, this) },
            ],
            [a(window), { resize: a.proxy(this.place, this) }],
            [
              a(document),
              {
                "mousedown touchstart": a.proxy(function (a) {
                  this.element.is(a.target) ||
                    this.element.find(a.target).length ||
                    this.picker.is(a.target) ||
                    this.picker.find(a.target).length ||
                    this.isInline ||
                    this.hide();
                }, this),
              },
            ],
          ]);
      },
      _attachEvents: function () {
        this._detachEvents(), this._applyEvents(this._events);
      },
      _detachEvents: function () {
        this._unapplyEvents(this._events);
      },
      _attachSecondaryEvents: function () {
        this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
      },
      _detachSecondaryEvents: function () {
        this._unapplyEvents(this._secondaryEvents);
      },
      _trigger: function (b, c) {
        var d = c || this.dates.get(-1),
          e = this._utc_to_local(d);
        this.element.trigger({
          type: b,
          date: e,
          viewMode: this.viewMode,
          dates: a.map(this.dates, this._utc_to_local),
          format: a.proxy(function (a, b) {
            0 === arguments.length
              ? ((a = this.dates.length - 1), (b = this.o.format))
              : "string" == typeof a && ((b = a), (a = this.dates.length - 1)),
              (b = b || this.o.format);
            var c = this.dates.get(a);
            return r.formatDate(c, b, this.o.language);
          }, this),
        });
      },
      show: function () {
        if (
          !(
            this.inputField.is(":disabled") ||
            (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
          )
        )
          return (
            this.isInline || this.picker.appendTo(this.o.container),
            this.place(),
            this.picker.show(),
            this._attachSecondaryEvents(),
            this._trigger("show"),
            (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
              this.o.disableTouchKeyboard &&
              a(this.element).blur(),
            this
          );
      },
      hide: function () {
        return this.isInline || !this.picker.is(":visible")
          ? this
          : ((this.focusDate = null),
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.setViewMode(this.o.startView),
            this.o.forceParse && this.inputField.val() && this.setValue(),
            this._trigger("hide"),
            this);
      },
      destroy: function () {
        return (
          this.hide(),
          this._detachEvents(),
          this._detachSecondaryEvents(),
          this.picker.remove(),
          delete this.element.data().datepicker,
          this.isInput || delete this.element.data().date,
          this
        );
      },
      paste: function (b) {
        var c;
        if (
          b.originalEvent.clipboardData &&
          b.originalEvent.clipboardData.types &&
          -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)
        )
          c = b.originalEvent.clipboardData.getData("text/plain");
        else {
          if (!window.clipboardData) return;
          c = window.clipboardData.getData("Text");
        }
        this.setDate(c), this.update(), b.preventDefault();
      },
      _utc_to_local: function (a) {
        if (!a) return a;
        var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
        return (
          b.getTimezoneOffset() !== a.getTimezoneOffset() &&
            (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
          b
        );
      },
      _local_to_utc: function (a) {
        return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
      },
      _zero_time: function (a) {
        return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
      },
      _zero_utc_time: function (a) {
        return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
      },
      getDates: function () {
        return a.map(this.dates, this._utc_to_local);
      },
      getUTCDates: function () {
        return a.map(this.dates, function (a) {
          return new Date(a);
        });
      },
      getDate: function () {
        return this._utc_to_local(this.getUTCDate());
      },
      getUTCDate: function () {
        var a = this.dates.get(-1);
        return a !== b ? new Date(a) : null;
      },
      clearDates: function () {
        this.inputField.val(""),
          this.update(),
          this._trigger("changeDate"),
          this.o.autoclose && this.hide();
      },
      setDates: function () {
        var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
        return (
          this.update.apply(this, b),
          this._trigger("changeDate"),
          this.setValue(),
          this
        );
      },
      setUTCDates: function () {
        var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
        return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
      },
      setDate: f("setDates"),
      setUTCDate: f("setUTCDates"),
      remove: f(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
      setValue: function () {
        var a = this.getFormattedDate();
        return this.inputField.val(a), this;
      },
      getFormattedDate: function (c) {
        c === b && (c = this.o.format);
        var d = this.o.language;
        return a
          .map(this.dates, function (a) {
            return r.formatDate(a, c, d);
          })
          .join(this.o.multidateSeparator);
      },
      getStartDate: function () {
        return this.o.startDate;
      },
      setStartDate: function (a) {
        return (
          this._process_options({ startDate: a }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      getEndDate: function () {
        return this.o.endDate;
      },
      setEndDate: function (a) {
        return (
          this._process_options({ endDate: a }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      setDaysOfWeekDisabled: function (a) {
        return (
          this._process_options({ daysOfWeekDisabled: a }), this.update(), this
        );
      },
      setDaysOfWeekHighlighted: function (a) {
        return (
          this._process_options({ daysOfWeekHighlighted: a }), this.update(), this
        );
      },
      setDatesDisabled: function (a) {
        return this._process_options({ datesDisabled: a }), this.update(), this;
      },
      place: function () {
        if (this.isInline) return this;
        var b = this.picker.outerWidth(),
          c = this.picker.outerHeight(),
          d = a(this.o.container),
          e = d.width(),
          f =
            "body" === this.o.container ? a(document).scrollTop() : d.scrollTop(),
          g = d.offset(),
          h = [0];
        this.element.parents().each(function () {
          var b = a(this).css("z-index");
          "auto" !== b && 0 !== Number(b) && h.push(Number(b));
        });
        var i = Math.max.apply(Math, h) + this.o.zIndexOffset,
          j = this.component
            ? this.component.parent().offset()
            : this.element.offset(),
          k = this.component
            ? this.component.outerHeight(!0)
            : this.element.outerHeight(!1),
          l = this.component
            ? this.component.outerWidth(!0)
            : this.element.outerWidth(!1),
          m = j.left - g.left,
          n = j.top - g.top;
        "body" !== this.o.container && (n += f),
          this.picker.removeClass(
            "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
          ),
          "auto" !== this.o.orientation.x
            ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
              "right" === this.o.orientation.x && (m -= b - l))
            : j.left < 0
            ? (this.picker.addClass("datepicker-orient-left"), (m -= j.left - 10))
            : m + b > e
            ? (this.picker.addClass("datepicker-orient-right"), (m += l - b))
            : this.o.rtl
            ? this.picker.addClass("datepicker-orient-right")
            : this.picker.addClass("datepicker-orient-left");
        var o,
          p = this.o.orientation.y;
        if (
          ("auto" === p && ((o = -f + n - c), (p = o < 0 ? "bottom" : "top")),
          this.picker.addClass("datepicker-orient-" + p),
          "top" === p
            ? (n -= c + parseInt(this.picker.css("padding-top")))
            : (n += k),
          this.o.rtl)
        ) {
          var q = e - (m + l);
          this.picker.css({ top: n, right: q, zIndex: i });
        } else this.picker.css({ top: n, left: m, zIndex: i });
        return this;
      },
      _allow_update: !0,
      update: function () {
        if (!this._allow_update) return this;
        var b = this.dates.copy(),
          c = [],
          d = !1;
        return (
          arguments.length
            ? (a.each(
                arguments,
                a.proxy(function (a, b) {
                  b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
                }, this)
              ),
              (d = !0))
            : ((c = this.isInput
                ? this.element.val()
                : this.element.data("date") || this.inputField.val()),
              (c =
                c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c]),
              delete this.element.data().date),
          (c = a.map(
            c,
            a.proxy(function (a) {
              return r.parseDate(
                a,
                this.o.format,
                this.o.language,
                this.o.assumeNearbyYear
              );
            }, this)
          )),
          (c = a.grep(
            c,
            a.proxy(function (a) {
              return !this.dateWithinRange(a) || !a;
            }, this),
            !0
          )),
          this.dates.replace(c),
          this.o.updateViewDate &&
            (this.dates.length
              ? (this.viewDate = new Date(this.dates.get(-1)))
              : this.viewDate < this.o.startDate
              ? (this.viewDate = new Date(this.o.startDate))
              : this.viewDate > this.o.endDate
              ? (this.viewDate = new Date(this.o.endDate))
              : (this.viewDate = this.o.defaultViewDate)),
          d
            ? (this.setValue(), this.element.change())
            : this.dates.length &&
              String(b) !== String(this.dates) &&
              d &&
              (this._trigger("changeDate"), this.element.change()),
          !this.dates.length &&
            b.length &&
            (this._trigger("clearDate"), this.element.change()),
          this.fill(),
          this
        );
      },
      fillDow: function () {
        if (this.o.showWeekDays) {
          var b = this.o.weekStart,
            c = "<tr>";
          for (
            this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>');
            b < this.o.weekStart + 7;
  
          )
            (c += '<th class="dow'),
              -1 !== a.inArray(b, this.o.daysOfWeekDisabled) &&
                (c += " disabled"),
              (c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>");
          (c += "</tr>"), this.picker.find(".datepicker-days thead").append(c);
        }
      },
      fillMonths: function () {
        for (
          var a, b = this._utc_to_local(this.viewDate), c = "", d = 0;
          d < 12;
          d++
        )
          (a = b && b.getMonth() === d ? " focused" : ""),
            (c +=
              '<span class="month' +
              a +
              '">' +
              q[this.o.language].monthsShort[d] +
              "</span>");
        this.picker.find(".datepicker-months td").html(c);
      },
      setRange: function (b) {
        b && b.length
          ? (this.range = a.map(b, function (a) {
              return a.valueOf();
            }))
          : delete this.range,
          this.fill();
      },
      getClassNames: function (b) {
        var c = [],
          f = this.viewDate.getUTCFullYear(),
          g = this.viewDate.getUTCMonth(),
          h = d();
        return (
          b.getUTCFullYear() < f ||
          (b.getUTCFullYear() === f && b.getUTCMonth() < g)
            ? c.push("old")
            : (b.getUTCFullYear() > f ||
                (b.getUTCFullYear() === f && b.getUTCMonth() > g)) &&
              c.push("new"),
          this.focusDate &&
            b.valueOf() === this.focusDate.valueOf() &&
            c.push("focused"),
          this.o.todayHighlight && e(b, h) && c.push("today"),
          -1 !== this.dates.contains(b) && c.push("active"),
          this.dateWithinRange(b) || c.push("disabled"),
          this.dateIsDisabled(b) && c.push("disabled", "disabled-date"),
          -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) &&
            c.push("highlighted"),
          this.range &&
            (b > this.range[0] &&
              b < this.range[this.range.length - 1] &&
              c.push("range"),
            -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"),
            b.valueOf() === this.range[0] && c.push("range-start"),
            b.valueOf() === this.range[this.range.length - 1] &&
              c.push("range-end")),
          c
        );
      },
      _fill_yearsView: function (c, d, e, f, g, h, i) {
        for (
          var j,
            k,
            l,
            m = "",
            n = e / 10,
            o = this.picker.find(c),
            p = Math.floor(f / e) * e,
            q = p + 9 * n,
            r = Math.floor(this.viewDate.getFullYear() / n) * n,
            s = a.map(this.dates, function (a) {
              return Math.floor(a.getUTCFullYear() / n) * n;
            }),
            t = p - n;
          t <= q + n;
          t += n
        )
          (j = [d]),
            (k = null),
            t === p - n ? j.push("old") : t === q + n && j.push("new"),
            -1 !== a.inArray(t, s) && j.push("active"),
            (t < g || t > h) && j.push("disabled"),
            t === r && j.push("focused"),
            i !== a.noop &&
              ((l = i(new Date(t, 0, 1))),
              l === b
                ? (l = {})
                : "boolean" == typeof l
                ? (l = { enabled: l })
                : "string" == typeof l && (l = { classes: l }),
              !1 === l.enabled && j.push("disabled"),
              l.classes && (j = j.concat(l.classes.split(/\s+/))),
              l.tooltip && (k = l.tooltip)),
            (m +=
              '<span class="' +
              j.join(" ") +
              '"' +
              (k ? ' title="' + k + '"' : "") +
              ">" +
              t +
              "</span>");
        o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m);
      },
      fill: function () {
        var e,
          f,
          g = new Date(this.viewDate),
          h = g.getUTCFullYear(),
          i = g.getUTCMonth(),
          j =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          k =
            this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          m = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          n = q[this.o.language].today || q.en.today || "",
          o = q[this.o.language].clear || q.en.clear || "",
          p = q[this.o.language].titleFormat || q.en.titleFormat,
          s = d(),
          t =
            (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
            s >= this.o.startDate &&
            s <= this.o.endDate &&
            !this.weekOfDateIsDisabled(s);
        if (!isNaN(h) && !isNaN(i)) {
          this.picker
            .find(".datepicker-days .datepicker-switch")
            .text(r.formatDate(g, p, this.o.language)),
            this.picker
              .find("tfoot .today")
              .text(n)
              .css("display", t ? "table-cell" : "none"),
            this.picker
              .find("tfoot .clear")
              .text(o)
              .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
            this.picker
              .find("thead .datepicker-title")
              .text(this.o.title)
              .css(
                "display",
                "string" == typeof this.o.title && "" !== this.o.title
                  ? "table-cell"
                  : "none"
              ),
            this.updateNavArrows(),
            this.fillMonths();
          var u = c(h, i, 0),
            v = u.getUTCDate();
          u.setUTCDate(v - ((u.getUTCDay() - this.o.weekStart + 7) % 7));
          var w = new Date(u);
          u.getUTCFullYear() < 100 && w.setUTCFullYear(u.getUTCFullYear()),
            w.setUTCDate(w.getUTCDate() + 42),
            (w = w.valueOf());
          for (var x, y, z = []; u.valueOf() < w; ) {
            if (
              (x = u.getUTCDay()) === this.o.weekStart &&
              (z.push("<tr>"), this.o.calendarWeeks)
            ) {
              var A = new Date(+u + ((this.o.weekStart - x - 7) % 7) * 864e5),
                B = new Date(Number(A) + ((11 - A.getUTCDay()) % 7) * 864e5),
                C = new Date(
                  Number((C = c(B.getUTCFullYear(), 0, 1))) +
                    ((11 - C.getUTCDay()) % 7) * 864e5
                ),
                D = (B - C) / 864e5 / 7 + 1;
              z.push('<td class="cw">' + D + "</td>");
            }
            (y = this.getClassNames(u)), y.push("day");
            var E = u.getUTCDate();
            this.o.beforeShowDay !== a.noop &&
              ((f = this.o.beforeShowDay(this._utc_to_local(u))),
              f === b
                ? (f = {})
                : "boolean" == typeof f
                ? (f = { enabled: f })
                : "string" == typeof f && (f = { classes: f }),
              !1 === f.enabled && y.push("disabled"),
              f.classes && (y = y.concat(f.classes.split(/\s+/))),
              f.tooltip && (e = f.tooltip),
              f.content && (E = f.content)),
              (y = a.isFunction(a.uniqueSort) ? a.uniqueSort(y) : a.unique(y)),
              z.push(
                '<td class="' +
                  y.join(" ") +
                  '"' +
                  (e ? ' title="' + e + '"' : "") +
                  ' data-date="' +
                  u.getTime().toString() +
                  '">' +
                  E +
                  "</td>"
              ),
              (e = null),
              x === this.o.weekEnd && z.push("</tr>"),
              u.setUTCDate(u.getUTCDate() + 1);
          }
          this.picker.find(".datepicker-days tbody").html(z.join(""));
          var F = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
            G = this.picker
              .find(".datepicker-months")
              .find(".datepicker-switch")
              .text(this.o.maxViewMode < 2 ? F : h)
              .end()
              .find("tbody span")
              .removeClass("active");
          if (
            (a.each(this.dates, function (a, b) {
              b.getUTCFullYear() === h &&
                G.eq(b.getUTCMonth()).addClass("active");
            }),
            (h < j || h > l) && G.addClass("disabled"),
            h === j && G.slice(0, k).addClass("disabled"),
            h === l && G.slice(m + 1).addClass("disabled"),
            this.o.beforeShowMonth !== a.noop)
          ) {
            var H = this;
            a.each(G, function (c, d) {
              var e = new Date(h, c, 1),
                f = H.o.beforeShowMonth(e);
              f === b
                ? (f = {})
                : "boolean" == typeof f
                ? (f = { enabled: f })
                : "string" == typeof f && (f = { classes: f }),
                !1 !== f.enabled ||
                  a(d).hasClass("disabled") ||
                  a(d).addClass("disabled"),
                f.classes && a(d).addClass(f.classes),
                f.tooltip && a(d).prop("title", f.tooltip);
            });
          }
          this._fill_yearsView(
            ".datepicker-years",
            "year",
            10,
            h,
            j,
            l,
            this.o.beforeShowYear
          ),
            this._fill_yearsView(
              ".datepicker-decades",
              "decade",
              100,
              h,
              j,
              l,
              this.o.beforeShowDecade
            ),
            this._fill_yearsView(
              ".datepicker-centuries",
              "century",
              1e3,
              h,
              j,
              l,
              this.o.beforeShowCentury
            );
        }
      },
      updateNavArrows: function () {
        if (this._allow_update) {
          var a,
            b,
            c = new Date(this.viewDate),
            d = c.getUTCFullYear(),
            e = c.getUTCMonth(),
            f =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCFullYear()
                : -1 / 0,
            g =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCMonth()
                : -1 / 0,
            h =
              this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            j = 1;
          switch (this.viewMode) {
            case 4:
              j *= 10;
            case 3:
              j *= 10;
            case 2:
              j *= 10;
            case 1:
              (a = Math.floor(d / j) * j <= f),
                (b = Math.floor(d / j) * j + j > h);
              break;
            case 0:
              (a = d <= f && e <= g), (b = d >= h && e >= i);
          }
          this.picker.find(".prev").toggleClass("disabled", a),
            this.picker.find(".next").toggleClass("disabled", b);
        }
      },
      click: function (b) {
        b.preventDefault(), b.stopPropagation();
        var e, f, g, h;
        (e = a(b.target)),
          e.hasClass("datepicker-switch") &&
            this.viewMode !== this.o.maxViewMode &&
            this.setViewMode(this.viewMode + 1),
          e.hasClass("today") &&
            !e.hasClass("day") &&
            (this.setViewMode(0),
            this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")),
          e.hasClass("clear") && this.clearDates(),
          e.hasClass("disabled") ||
            ((e.hasClass("month") ||
              e.hasClass("year") ||
              e.hasClass("decade") ||
              e.hasClass("century")) &&
              (this.viewDate.setUTCDate(1),
              (f = 1),
              1 === this.viewMode
                ? ((h = e.parent().find("span").index(e)),
                  (g = this.viewDate.getUTCFullYear()),
                  this.viewDate.setUTCMonth(h))
                : ((h = 0),
                  (g = Number(e.text())),
                  this.viewDate.setUTCFullYear(g)),
              this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
              this.viewMode === this.o.minViewMode
                ? this._setDate(c(g, h, f))
                : (this.setViewMode(this.viewMode - 1), this.fill()))),
          this.picker.is(":visible") &&
            this._focused_from &&
            this._focused_from.focus(),
          delete this._focused_from;
      },
      dayCellClick: function (b) {
        var c = a(b.currentTarget),
          d = c.data("date"),
          e = new Date(d);
        this.o.updateViewDate &&
          (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
            this._trigger("changeYear", this.viewDate),
          e.getUTCMonth() !== this.viewDate.getUTCMonth() &&
            this._trigger("changeMonth", this.viewDate)),
          this._setDate(e);
      },
      navArrowsClick: function (b) {
        var c = a(b.currentTarget),
          d = c.hasClass("prev") ? -1 : 1;
        0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
          (this.viewDate = this.moveMonth(this.viewDate, d)),
          this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
          this.fill();
      },
      _toggle_multidate: function (a) {
        var b = this.dates.contains(a);
        if (
          (a || this.dates.clear(),
          -1 !== b
            ? (!0 === this.o.multidate ||
                this.o.multidate > 1 ||
                this.o.toggleActive) &&
              this.dates.remove(b)
            : !1 === this.o.multidate
            ? (this.dates.clear(), this.dates.push(a))
            : this.dates.push(a),
          "number" == typeof this.o.multidate)
        )
          for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
      },
      _setDate: function (a, b) {
        (b && "date" !== b) || this._toggle_multidate(a && new Date(a)),
          ((!b && this.o.updateViewDate) || "view" === b) &&
            (this.viewDate = a && new Date(a)),
          this.fill(),
          this.setValue(),
          (b && "view" === b) || this._trigger("changeDate"),
          this.inputField.trigger("change"),
          !this.o.autoclose || (b && "date" !== b) || this.hide();
      },
      moveDay: function (a, b) {
        var c = new Date(a);
        return c.setUTCDate(a.getUTCDate() + b), c;
      },
      moveWeek: function (a, b) {
        return this.moveDay(a, 7 * b);
      },
      moveMonth: function (a, b) {
        if (!g(a)) return this.o.defaultViewDate;
        if (!b) return a;
        var c,
          d,
          e = new Date(a.valueOf()),
          f = e.getUTCDate(),
          h = e.getUTCMonth(),
          i = Math.abs(b);
        if (((b = b > 0 ? 1 : -1), 1 === i))
          (d =
            -1 === b
              ? function () {
                  return e.getUTCMonth() === h;
                }
              : function () {
                  return e.getUTCMonth() !== c;
                }),
            (c = h + b),
            e.setUTCMonth(c),
            (c = (c + 12) % 12);
        else {
          for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
          (c = e.getUTCMonth()),
            e.setUTCDate(f),
            (d = function () {
              return c !== e.getUTCMonth();
            });
        }
        for (; d(); ) e.setUTCDate(--f), e.setUTCMonth(c);
        return e;
      },
      moveYear: function (a, b) {
        return this.moveMonth(a, 12 * b);
      },
      moveAvailableDate: function (a, b, c) {
        do {
          if (((a = this[c](a, b)), !this.dateWithinRange(a))) return !1;
          c = "moveDay";
        } while (this.dateIsDisabled(a));
        return a;
      },
      weekOfDateIsDisabled: function (b) {
        return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled);
      },
      dateIsDisabled: function (b) {
        return (
          this.weekOfDateIsDisabled(b) ||
          a.grep(this.o.datesDisabled, function (a) {
            return e(b, a);
          }).length > 0
        );
      },
      dateWithinRange: function (a) {
        return a >= this.o.startDate && a <= this.o.endDate;
      },
      keydown: function (a) {
        if (!this.picker.is(":visible"))
          return void (
            (40 !== a.keyCode && 27 !== a.keyCode) ||
            (this.show(), a.stopPropagation())
          );
        var b,
          c,
          d = !1,
          e = this.focusDate || this.viewDate;
        switch (a.keyCode) {
          case 27:
            this.focusDate
              ? ((this.focusDate = null),
                (this.viewDate = this.dates.get(-1) || this.viewDate),
                this.fill())
              : this.hide(),
              a.preventDefault(),
              a.stopPropagation();
            break;
          case 37:
          case 38:
          case 39:
          case 40:
            if (
              !this.o.keyboardNavigation ||
              7 === this.o.daysOfWeekDisabled.length
            )
              break;
            (b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1),
              0 === this.viewMode
                ? a.ctrlKey
                  ? (c = this.moveAvailableDate(e, b, "moveYear")) &&
                    this._trigger("changeYear", this.viewDate)
                  : a.shiftKey
                  ? (c = this.moveAvailableDate(e, b, "moveMonth")) &&
                    this._trigger("changeMonth", this.viewDate)
                  : 37 === a.keyCode || 39 === a.keyCode
                  ? (c = this.moveAvailableDate(e, b, "moveDay"))
                  : this.weekOfDateIsDisabled(e) ||
                    (c = this.moveAvailableDate(e, b, "moveWeek"))
                : 1 === this.viewMode
                ? ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                  (c = this.moveAvailableDate(e, b, "moveMonth")))
                : 2 === this.viewMode &&
                  ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                  (c = this.moveAvailableDate(e, b, "moveYear"))),
              c &&
                ((this.focusDate = this.viewDate = c),
                this.setValue(),
                this.fill(),
                a.preventDefault());
            break;
          case 13:
            if (!this.o.forceParse) break;
            (e = this.focusDate || this.dates.get(-1) || this.viewDate),
              this.o.keyboardNavigation && (this._toggle_multidate(e), (d = !0)),
              (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.setValue(),
              this.fill(),
              this.picker.is(":visible") &&
                (a.preventDefault(),
                a.stopPropagation(),
                this.o.autoclose && this.hide());
            break;
          case 9:
            (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill(),
              this.hide();
        }
        d &&
          (this.dates.length
            ? this._trigger("changeDate")
            : this._trigger("clearDate"),
          this.inputField.trigger("change"));
      },
      setViewMode: function (a) {
        (this.viewMode = a),
          this.picker
            .children("div")
            .hide()
            .filter(".datepicker-" + r.viewModes[this.viewMode].clsName)
            .show(),
          this.updateNavArrows(),
          this._trigger("changeViewMode", new Date(this.viewDate));
      },
    };
    var l = function (b, c) {
      a.data(b, "datepicker", this),
        (this.element = a(b)),
        (this.inputs = a.map(c.inputs, function (a) {
          return a.jquery ? a[0] : a;
        })),
        delete c.inputs,
        (this.keepEmptyValues = c.keepEmptyValues),
        delete c.keepEmptyValues,
        n
          .call(a(this.inputs), c)
          .on("changeDate", a.proxy(this.dateUpdated, this)),
        (this.pickers = a.map(this.inputs, function (b) {
          return a.data(b, "datepicker");
        })),
        this.updateDates();
    };
    l.prototype = {
      updateDates: function () {
        (this.dates = a.map(this.pickers, function (a) {
          return a.getUTCDate();
        })),
          this.updateRanges();
      },
      updateRanges: function () {
        var b = a.map(this.dates, function (a) {
          return a.valueOf();
        });
        a.each(this.pickers, function (a, c) {
          c.setRange(b);
        });
      },
      clearDates: function () {
        a.each(this.pickers, function (a, b) {
          b.clearDates();
        });
      },
      dateUpdated: function (c) {
        if (!this.updating) {
          this.updating = !0;
          var d = a.data(c.target, "datepicker");
          if (d !== b) {
            var e = d.getUTCDate(),
              f = this.keepEmptyValues,
              g = a.inArray(c.target, this.inputs),
              h = g - 1,
              i = g + 1,
              j = this.inputs.length;
            if (-1 !== g) {
              if (
                (a.each(this.pickers, function (a, b) {
                  b.getUTCDate() || (b !== d && f) || b.setUTCDate(e);
                }),
                e < this.dates[h])
              )
                for (; h >= 0 && e < this.dates[h]; )
                  this.pickers[h--].setUTCDate(e);
              else if (e > this.dates[i])
                for (; i < j && e > this.dates[i]; )
                  this.pickers[i++].setUTCDate(e);
              this.updateDates(), delete this.updating;
            }
          }
        }
      },
      destroy: function () {
        a.map(this.pickers, function (a) {
          a.destroy();
        }),
          a(this.inputs).off("changeDate", this.dateUpdated),
          delete this.element.data().datepicker;
      },
      remove: f(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
    };
    var m = a.fn.datepicker,
      n = function (c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (
          (this.each(function () {
            var b = a(this),
              f = b.data("datepicker"),
              g = "object" == typeof c && c;
            if (!f) {
              var j = h(this, "date"),
                m = a.extend({}, o, j, g),
                n = i(m.language),
                p = a.extend({}, o, n, j, g);
              b.hasClass("input-daterange") || p.inputs
                ? (a.extend(p, { inputs: p.inputs || b.find("input").toArray() }),
                  (f = new l(this, p)))
                : (f = new k(this, p)),
                b.data("datepicker", f);
            }
            "string" == typeof c &&
              "function" == typeof f[c] &&
              (e = f[c].apply(f, d));
          }),
          e === b || e instanceof k || e instanceof l)
        )
          return this;
        if (this.length > 1)
          throw new Error(
            "Using only allowed for the collection of a single element (" +
              c +
              " function)"
          );
        return e;
      };
    a.fn.datepicker = n;
    var o = (a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
        showWeekDays: !0,
      }),
      p = (a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
    a.fn.datepicker.Constructor = k;
    var q = (a.fn.datepicker.dates = {
        en: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          today: "Today",
          clear: "Clear",
          titleFormat: "MM yyyy",
        },
      }),
      r = {
        viewModes: [
          { names: ["days", "month"], clsName: "days", e: "changeMonth" },
          {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1,
          },
          {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10,
          },
          {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100,
          },
          {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3,
          },
        ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (a) {
          if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)
            return a;
          var b = a.replace(this.validParts, "\0").split("\0"),
            c = a.match(this.validParts);
          if (!b || !b.length || !c || 0 === c.length)
            throw new Error("Invalid date format.");
          return { separators: b, parts: c };
        },
        parseDate: function (c, e, f, g) {
          function h(a, b) {
            return (
              !0 === b && (b = 10),
              a < 100 && (a += 2e3) > new Date().getFullYear() + b && (a -= 100),
              a
            );
          }
          function i() {
            var a = this.slice(0, j[n].length),
              b = j[n].slice(0, a.length);
            return a.toLowerCase() === b.toLowerCase();
          }
          if (!c) return b;
          if (c instanceof Date) return c;
          if (("string" == typeof e && (e = r.parseFormat(e)), e.toValue))
            return e.toValue(c, e, f);
          var j,
            l,
            m,
            n,
            o,
            p = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
            s = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
          if (
            (c in s && (c = s[c]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c))
          ) {
            for (
              j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0;
              n < j.length;
              n++
            )
              (l = j[n].match(/([\-+]\d+)([dmwy])/i)),
                (m = Number(l[1])),
                (o = p[l[2].toLowerCase()]),
                (c = k.prototype[o](c, m));
            return k.prototype._zero_utc_time(c);
          }
          j = (c && c.match(this.nonpunctuation)) || [];
          var t,
            u,
            v = {},
            w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            x = {
              yyyy: function (a, b) {
                return a.setUTCFullYear(g ? h(b, g) : b);
              },
              m: function (a, b) {
                if (isNaN(a)) return a;
                for (b -= 1; b < 0; ) b += 12;
                for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; )
                  a.setUTCDate(a.getUTCDate() - 1);
                return a;
              },
              d: function (a, b) {
                return a.setUTCDate(b);
              },
            };
          (x.yy = x.yyyy), (x.M = x.MM = x.mm = x.m), (x.dd = x.d), (c = d());
          var y = e.parts.slice();
          if (
            (j.length !== y.length &&
              (y = a(y)
                .filter(function (b, c) {
                  return -1 !== a.inArray(c, w);
                })
                .toArray()),
            j.length === y.length)
          ) {
            var z;
            for (n = 0, z = y.length; n < z; n++) {
              if (((t = parseInt(j[n], 10)), (l = y[n]), isNaN(t)))
                switch (l) {
                  case "MM":
                    (u = a(q[f].months).filter(i)),
                      (t = a.inArray(u[0], q[f].months) + 1);
                    break;
                  case "M":
                    (u = a(q[f].monthsShort).filter(i)),
                      (t = a.inArray(u[0], q[f].monthsShort) + 1);
                }
              v[l] = t;
            }
            var A, B;
            for (n = 0; n < w.length; n++)
              (B = w[n]) in v &&
                !isNaN(v[B]) &&
                ((A = new Date(c)), x[B](A, v[B]), isNaN(A) || (c = A));
          }
          return c;
        },
        formatDate: function (b, c, d) {
          if (!b) return "";
          if (("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay))
            return c.toDisplay(b, c, d);
          var e = {
            d: b.getUTCDate(),
            D: q[d].daysShort[b.getUTCDay()],
            DD: q[d].days[b.getUTCDay()],
            m: b.getUTCMonth() + 1,
            M: q[d].monthsShort[b.getUTCMonth()],
            MM: q[d].months[b.getUTCMonth()],
            yy: b.getUTCFullYear().toString().substring(2),
            yyyy: b.getUTCFullYear(),
          };
          (e.dd = (e.d < 10 ? "0" : "") + e.d),
            (e.mm = (e.m < 10 ? "0" : "") + e.m),
            (b = []);
          for (
            var f = a.extend([], c.separators), g = 0, h = c.parts.length;
            g <= h;
            g++
          )
            f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
          return b.join("");
        },
        headTemplate:
          '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
          o.templates.leftArrow +
          '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
          o.templates.rightArrow +
          "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate:
          '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
      };
    (r.template =
      '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
      r.headTemplate +
      "<tbody></tbody>" +
      r.footTemplate +
      '</table></div><div class="datepicker-months"><table class="table-condensed">' +
      r.headTemplate +
      r.contTemplate +
      r.footTemplate +
      '</table></div><div class="datepicker-years"><table class="table-condensed">' +
      r.headTemplate +
      r.contTemplate +
      r.footTemplate +
      '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
      r.headTemplate +
      r.contTemplate +
      r.footTemplate +
      '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
      r.headTemplate +
      r.contTemplate +
      r.footTemplate +
      "</table></div></div>"),
      (a.fn.datepicker.DPGlobal = r),
      (a.fn.datepicker.noConflict = function () {
        return (a.fn.datepicker = m), this;
      }),
      (a.fn.datepicker.version = "1.9.0"),
      (a.fn.datepicker.deprecated = function (a) {
        var b = window.console;
        b && b.warn && b.warn("DEPRECATED: " + a);
      }),
      a(document).on(
        "focus.datepicker.data-api click.datepicker.data-api",
        '[data-provide="datepicker"]',
        function (b) {
          var c = a(this);
          c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
        }
      ),
      a(function () {
        n.call(a('[data-provide="datepicker-inline"]'));
      });
  });
  !(function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof exports
      ? (module.exports = a(require("jquery")))
      : a(jQuery);
  })(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("input");
      return a.setAttribute("type", "range"), "text" !== a.type;
    }
    function c(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return setTimeout(function () {
        return a.apply(null, c);
      }, b);
    }
    function d(a, b) {
      return (
        (b = b || 100),
        function () {
          if (!a.debouncing) {
            var c = Array.prototype.slice.apply(arguments);
            (a.lastReturnVal = a.apply(window, c)), (a.debouncing = !0);
          }
          return (
            clearTimeout(a.debounceTimeout),
            (a.debounceTimeout = setTimeout(function () {
              a.debouncing = !1;
            }, b)),
            a.lastReturnVal
          );
        }
      );
    }
    function e(a) {
      return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1);
    }
    function f(a) {
      for (var b = [], c = a.parentNode; e(c); ) b.push(c), (c = c.parentNode);
      return b;
    }
    function g(a, b) {
      function c(a) {
        "undefined" != typeof a.open && (a.open = !a.open);
      }
      var d = f(a),
        e = d.length,
        g = [],
        h = a[b];
      if (e) {
        for (var i = 0; i < e; i++)
          (g[i] = d[i].style.cssText),
            d[i].style.setProperty
              ? d[i].style.setProperty("display", "block", "important")
              : (d[i].style.cssText += ";display: block !important"),
            (d[i].style.height = "0"),
            (d[i].style.overflow = "hidden"),
            (d[i].style.visibility = "hidden"),
            c(d[i]);
        h = a[b];
        for (var j = 0; j < e; j++) (d[j].style.cssText = g[j]), c(d[j]);
      }
      return h;
    }
    function h(a, b) {
      var c = parseFloat(a);
      return Number.isNaN(c) ? b : c;
    }
    function i(a) {
      return a.charAt(0).toUpperCase() + a.substr(1);
    }
    function j(b, e) {
      if (
        ((this.$window = a(window)),
        (this.$document = a(document)),
        (this.$element = a(b)),
        (this.options = a.extend({}, n, e)),
        (this.polyfill = this.options.polyfill),
        (this.orientation =
          this.$element[0].getAttribute("data-orientation") ||
          this.options.orientation),
        (this.onInit = this.options.onInit),
        (this.onSlide = this.options.onSlide),
        (this.onSlideEnd = this.options.onSlideEnd),
        (this.DIMENSION = o.orientation[this.orientation].dimension),
        (this.DIRECTION = o.orientation[this.orientation].direction),
        (this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle),
        (this.COORDINATE = o.orientation[this.orientation].coordinate),
        this.polyfill && m)
      )
        return !1;
      (this.identifier = "js-" + k + "-" + l++),
        (this.startEvent =
          this.options.startEvent.join("." + this.identifier + " ") +
          "." +
          this.identifier),
        (this.moveEvent =
          this.options.moveEvent.join("." + this.identifier + " ") +
          "." +
          this.identifier),
        (this.endEvent =
          this.options.endEvent.join("." + this.identifier + " ") +
          "." +
          this.identifier),
        (this.toFixed = (this.step + "").replace(".", "").length - 1),
        (this.$fill = a('<div class="' + this.options.fillClass + '" />')),
        (this.$handle = a('<div class="' + this.options.handleClass + '" />')),
        (this.$range = a(
          '<div class="' +
            this.options.rangeClass +
            " " +
            this.options[this.orientation + "Class"] +
            '" id="' +
            this.identifier +
            '" />'
        )
          .insertAfter(this.$element)
          .prepend(this.$fill, this.$handle)),
        this.$element.css({
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: "0",
        }),
        (this.handleDown = a.proxy(this.handleDown, this)),
        (this.handleMove = a.proxy(this.handleMove, this)),
        (this.handleEnd = a.proxy(this.handleEnd, this)),
        this.init();
      var f = this;
      this.$window.on(
        "resize." + this.identifier,
        d(function () {
          c(function () {
            f.update(!1, !1);
          }, 300);
        }, 20)
      ),
        this.$document.on(
          this.startEvent,
          "#" + this.identifier + ":not(." + this.options.disabledClass + ")",
          this.handleDown
        ),
        this.$element.on("change." + this.identifier, function (a, b) {
          if (!b || b.origin !== f.identifier) {
            var c = a.target.value,
              d = f.getPositionFromValue(c);
            f.setPosition(d);
          }
        });
    }
    Number.isNaN =
      Number.isNaN ||
      function (a) {
        return "number" == typeof a && a !== a;
      };
    var k = "rangeslider",
      l = 0,
      m = b(),
      n = {
        polyfill: !0,
        orientation: "horizontal",
        rangeClass: "rangeslider",
        disabledClass: "rangeslider--disabled",
        activeClass: "rangeslider--active",
        horizontalClass: "rangeslider--horizontal",
        verticalClass: "rangeslider--vertical",
        fillClass: "rangeslider__fill",
        handleClass: "rangeslider__handle",
        startEvent: ["mousedown", "touchstart", "pointerdown"],
        moveEvent: ["mousemove", "touchmove", "pointermove"],
        endEvent: ["mouseup", "touchend", "pointerup"],
      },
      o = {
        orientation: {
          horizontal: {
            dimension: "width",
            direction: "left",
            directionStyle: "left",
            coordinate: "x",
          },
          vertical: {
            dimension: "height",
            direction: "top",
            directionStyle: "bottom",
            coordinate: "y",
          },
        },
      };
    return (
      (j.prototype.init = function () {
        this.update(!0, !1),
          this.onInit && "function" == typeof this.onInit && this.onInit();
      }),
      (j.prototype.update = function (a, b) {
        (a = a || !1),
          a &&
            ((this.min = h(this.$element[0].getAttribute("min"), 0)),
            (this.max = h(this.$element[0].getAttribute("max"), 100)),
            (this.value = h(
              this.$element[0].value,
              Math.round(this.min + (this.max - this.min) / 2)
            )),
            (this.step = h(this.$element[0].getAttribute("step"), 1))),
          (this.handleDimension = g(
            this.$handle[0],
            "offset" + i(this.DIMENSION)
          )),
          (this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION))),
          (this.maxHandlePos = this.rangeDimension - this.handleDimension),
          (this.grabPos = this.handleDimension / 2),
          (this.position = this.getPositionFromValue(this.value)),
          this.$element[0].disabled
            ? this.$range.addClass(this.options.disabledClass)
            : this.$range.removeClass(this.options.disabledClass),
          this.setPosition(this.position, b);
      }),
      (j.prototype.handleDown = function (a) {
        if (
          (a.preventDefault(),
          this.$document.on(this.moveEvent, this.handleMove),
          this.$document.on(this.endEvent, this.handleEnd),
          this.$range.addClass(this.options.activeClass),
          !(
            (" " + a.target.className + " ")
              .replace(/[\n\t]/g, " ")
              .indexOf(this.options.handleClass) > -1
          ))
        ) {
          var b = this.getRelativePosition(a),
            c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
            d = this.getPositionFromNode(this.$handle[0]) - c,
            e =
              "vertical" === this.orientation
                ? this.maxHandlePos - (b - this.grabPos)
                : b - this.grabPos;
          this.setPosition(e),
            b >= d && b < d + this.handleDimension && (this.grabPos = b - d);
        }
      }),
      (j.prototype.handleMove = function (a) {
        a.preventDefault();
        var b = this.getRelativePosition(a),
          c =
            "vertical" === this.orientation
              ? this.maxHandlePos - (b - this.grabPos)
              : b - this.grabPos;
        this.setPosition(c);
      }),
      (j.prototype.handleEnd = function (a) {
        a.preventDefault(),
          this.$document.off(this.moveEvent, this.handleMove),
          this.$document.off(this.endEvent, this.handleEnd),
          this.$range.removeClass(this.options.activeClass),
          this.$element.trigger("change", { origin: this.identifier }),
          this.onSlideEnd &&
            "function" == typeof this.onSlideEnd &&
            this.onSlideEnd(this.position, this.value);
      }),
      (j.prototype.cap = function (a, b, c) {
        return a < b ? b : a > c ? c : a;
      }),
      (j.prototype.setPosition = function (a, b) {
        var c, d;
        void 0 === b && (b = !0),
          (c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos))),
          (d = this.getPositionFromValue(c)),
          (this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px"),
          (this.$handle[0].style[this.DIRECTION_STYLE] = d + "px"),
          this.setValue(c),
          (this.position = d),
          (this.value = c),
          b &&
            this.onSlide &&
            "function" == typeof this.onSlide &&
            this.onSlide(d, c);
      }),
      (j.prototype.getPositionFromNode = function (a) {
        for (var b = 0; null !== a; ) (b += a.offsetLeft), (a = a.offsetParent);
        return b;
      }),
      (j.prototype.getRelativePosition = function (a) {
        var b = i(this.COORDINATE),
          c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
          d = 0;
        return (
          "undefined" != typeof a.originalEvent["client" + b]
            ? (d = a.originalEvent["client" + b])
            : a.originalEvent.touches &&
              a.originalEvent.touches[0] &&
              "undefined" != typeof a.originalEvent.touches[0]["client" + b]
            ? (d = a.originalEvent.touches[0]["client" + b])
            : a.currentPoint &&
              "undefined" != typeof a.currentPoint[this.COORDINATE] &&
              (d = a.currentPoint[this.COORDINATE]),
          d - c
        );
      }),
      (j.prototype.getPositionFromValue = function (a) {
        var b, c;
        return (
          (b = (a - this.min) / (this.max - this.min)),
          (c = Number.isNaN(b) ? 0 : b * this.maxHandlePos)
        );
      }),
      (j.prototype.getValueFromPosition = function (a) {
        var b, c;
        return (
          (b = a / (this.maxHandlePos || 1)),
          (c =
            this.step * Math.round((b * (this.max - this.min)) / this.step) +
            this.min),
          Number(c.toFixed(this.toFixed))
        );
      }),
      (j.prototype.setValue = function (a) {
        (a === this.value && "" !== this.$element[0].value) ||
          this.$element.val(a).trigger("input", { origin: this.identifier });
      }),
      (j.prototype.destroy = function () {
        this.$document.off("." + this.identifier),
          this.$window.off("." + this.identifier),
          this.$element
            .off("." + this.identifier)
            .removeAttr("style")
            .removeData("plugin_" + k),
          this.$range &&
            this.$range.length &&
            this.$range[0].parentNode.removeChild(this.$range[0]);
      }),
      (a.fn[k] = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var d = a(this),
            e = d.data("plugin_" + k);
          e || d.data("plugin_" + k, (e = new j(this, b))),
            "string" == typeof b && e[b].apply(e, c);
        });
      }),
      "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
    );
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof exports
      ? (module.exports = a)
      : a(jQuery);
  })(function (a) {
    function b(b) {
      var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      if (
        ((b = a.event.fix(g)),
        (b.type = "mousewheel"),
        "detail" in g && (m = -1 * g.detail),
        "wheelDelta" in g && (m = g.wheelDelta),
        "wheelDeltaY" in g && (m = g.wheelDeltaY),
        "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
        "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
        (j = 0 === m ? l : m),
        "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
        "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
        0 !== m || 0 !== l)
      ) {
        if (1 === g.deltaMode) {
          var q = a.data(this, "mousewheel-line-height");
          (j *= q), (m *= q), (l *= q);
        } else if (2 === g.deltaMode) {
          var r = a.data(this, "mousewheel-page-height");
          (j *= r), (m *= r), (l *= r);
        }
        if (
          ((n = Math.max(Math.abs(m), Math.abs(l))),
          (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
          d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
          (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
          (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
          (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
          k.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var s = this.getBoundingClientRect();
          (o = b.clientX - s.left), (p = b.clientY - s.top);
        }
        return (
          (b.deltaX = l),
          (b.deltaY = m),
          (b.deltaFactor = f),
          (b.offsetX = o),
          (b.offsetY = p),
          (b.deltaMode = 0),
          h.unshift(b, j, l, m),
          e && clearTimeout(e),
          (e = setTimeout(c, 200)),
          (a.event.dispatch || a.event.handle).apply(this, h)
        );
      }
    }
    function c() {
      f = null;
    }
    function d(a, b) {
      return (
        k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
      );
    }
    var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;
    if (a.event.fixHooks)
      for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = (a.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
        else this.onmousewheel = b;
        a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
          a.data(this, "mousewheel-page-height", k.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
        else this.onmousewheel = null;
        a.removeData(this, "mousewheel-line-height"),
          a.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (b) {
        var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
        return (
          d.length || (d = a("body")),
          parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        );
      },
      getPageHeight: function (b) {
        return a(b).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    a.fn.extend({
      mousewheel: function (a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
      },
      unmousewheel: function (a) {
        return this.unbind("mousewheel", a);
      },
    });
  });
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof exports
      ? (module.exports = a)
      : a(jQuery);
  })(function (a) {
    function b(b) {
      var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;
      if (
        ((b = a.event.fix(g)),
        (b.type = "mousewheel"),
        "detail" in g && (m = -1 * g.detail),
        "wheelDelta" in g && (m = g.wheelDelta),
        "wheelDeltaY" in g && (m = g.wheelDeltaY),
        "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
        "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
        (j = 0 === m ? l : m),
        "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
        "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
        0 !== m || 0 !== l)
      ) {
        if (1 === g.deltaMode) {
          var q = a.data(this, "mousewheel-line-height");
          (j *= q), (m *= q), (l *= q);
        } else if (2 === g.deltaMode) {
          var r = a.data(this, "mousewheel-page-height");
          (j *= r), (m *= r), (l *= r);
        }
        if (
          ((n = Math.max(Math.abs(m), Math.abs(l))),
          (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
          d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
          (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
          (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
          (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
          k.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var s = this.getBoundingClientRect();
          (o = b.clientX - s.left), (p = b.clientY - s.top);
        }
        return (
          (b.deltaX = l),
          (b.deltaY = m),
          (b.deltaFactor = f),
          (b.offsetX = o),
          (b.offsetY = p),
          (b.deltaMode = 0),
          h.unshift(b, j, l, m),
          e && clearTimeout(e),
          (e = setTimeout(c, 200)),
          (a.event.dispatch || a.event.handle).apply(this, h)
        );
      }
    }
    function c() {
      f = null;
    }
    function d(a, b) {
      return (
        k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
      );
    }
    var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;
    if (a.event.fixHooks)
      for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = (a.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
        else this.onmousewheel = b;
        a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
          a.data(this, "mousewheel-page-height", k.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
        else this.onmousewheel = null;
        a.removeData(this, "mousewheel-line-height"),
          a.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (b) {
        var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
        return (
          d.length || (d = a("body")),
          parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        );
      },
      getPageHeight: function (b) {
        return a(b).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    a.fn.extend({
      mousewheel: function (a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
      },
      unmousewheel: function (a) {
        return this.unbind("mousewheel", a);
      },
    });
  });
  !(function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : e(jQuery, window, document);
  })(function (e) {
    !(function (t) {
      var o = "function" == typeof define && define.amd,
        a = "undefined" != typeof module && module.exports,
        n = "https:" == document.location.protocol ? "https:" : "http:",
        i =
          "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
      o ||
        (a
          ? require("jquery-mousewheel")(e)
          : e.event.special.mousewheel ||
            e("head").append(
              decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E")
            )),
        t();
    })(function () {
      var t,
        o = "mCustomScrollbar",
        a = "mCS",
        n = ".mCustomScrollbar",
        i = {
          setTop: 0,
          setLeft: 0,
          axis: "y",
          scrollbarPosition: "inside",
          scrollInertia: 950,
          autoDraggerLength: !0,
          alwaysShowScrollbar: 0,
          snapOffset: 0,
          mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"],
          },
          scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
          keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
          contentTouchScroll: 25,
          documentTouchScroll: !0,
          advanced: {
            autoScrollOnFocus:
              "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60,
          },
          theme: "light",
          callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0,
          },
        },
        r = 0,
        l = {},
        s = window.attachEvent && !window.addEventListener ? 1 : 0,
        c = !1,
        d = [
          "mCSB_dragger_onDrag",
          "mCSB_scrollTools_onDrag",
          "mCS_img_loaded",
          "mCS_disabled",
          "mCS_destroyed",
          "mCS_no_scrollbar",
          "mCS-autoHide",
          "mCS-dir-rtl",
          "mCS_no_scrollbar_y",
          "mCS_no_scrollbar_x",
          "mCS_y_hidden",
          "mCS_x_hidden",
          "mCSB_draggerContainer",
          "mCSB_buttonUp",
          "mCSB_buttonDown",
          "mCSB_buttonLeft",
          "mCSB_buttonRight",
        ],
        u = {
          init: function (t) {
            var t = e.extend(!0, {}, i, t),
              o = f.call(this);
            if (t.live) {
              var s = t.liveSelector || this.selector || n,
                c = e(s);
              if ("off" === t.live) return void m(s);
              l[s] = setTimeout(function () {
                c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
              }, 500);
            } else m(s);
            return (
              (t.setWidth = t.set_width ? t.set_width : t.setWidth),
              (t.setHeight = t.set_height ? t.set_height : t.setHeight),
              (t.axis = t.horizontalScroll ? "x" : p(t.axis)),
              (t.scrollInertia =
                t.scrollInertia > 0 && t.scrollInertia < 17
                  ? 17
                  : t.scrollInertia),
              "object" != typeof t.mouseWheel &&
                1 == t.mouseWheel &&
                (t.mouseWheel = {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  preventDefault: !1,
                  deltaFactor: "auto",
                  normalizeDelta: !1,
                  invert: !1,
                }),
              (t.mouseWheel.scrollAmount = t.mouseWheelPixels
                ? t.mouseWheelPixels
                : t.mouseWheel.scrollAmount),
              (t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta
                ? t.advanced.normalizeMouseWheelDelta
                : t.mouseWheel.normalizeDelta),
              (t.scrollButtons.scrollType = g(t.scrollButtons.scrollType)),
              h(t),
              e(o).each(function () {
                var o = e(this);
                if (!o.data(a)) {
                  o.data(a, {
                    idx: ++r,
                    opt: t,
                    scrollRatio: { y: null, x: null },
                    overflowed: null,
                    contentReset: { y: null, x: null },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: o.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                    poll: {
                      size: { o: 0, n: 0 },
                      img: { o: 0, n: 0 },
                      change: { o: 0, n: 0 },
                    },
                  });
                  var n = o.data(a),
                    i = n.opt,
                    l = o.data("mcs-axis"),
                    s = o.data("mcs-scrollbar-position"),
                    c = o.data("mcs-theme");
                  l && (i.axis = l),
                    s && (i.scrollbarPosition = s),
                    c && ((i.theme = c), h(i)),
                    v.call(this),
                    n &&
                      i.callbacks.onCreate &&
                      "function" == typeof i.callbacks.onCreate &&
                      i.callbacks.onCreate.call(this),
                    e(
                      "#mCSB_" + n.idx + "_container img:not(." + d[2] + ")"
                    ).addClass(d[2]),
                    u.update.call(null, o);
                }
              })
            );
          },
          update: function (t, o) {
            var n = t || f.call(this);
            return e(n).each(function () {
              var t = e(this);
              if (t.data(a)) {
                var n = t.data(a),
                  i = n.opt,
                  r = e("#mCSB_" + n.idx + "_container"),
                  l = e("#mCSB_" + n.idx),
                  s = [
                    e("#mCSB_" + n.idx + "_dragger_vertical"),
                    e("#mCSB_" + n.idx + "_dragger_horizontal"),
                  ];
                if (!r.length) return;
                n.tweenRunning && Q(t),
                  o &&
                    n &&
                    i.callbacks.onBeforeUpdate &&
                    "function" == typeof i.callbacks.onBeforeUpdate &&
                    i.callbacks.onBeforeUpdate.call(this),
                  t.hasClass(d[3]) && t.removeClass(d[3]),
                  t.hasClass(d[4]) && t.removeClass(d[4]),
                  l.css("max-height", "none"),
                  l.height() !== t.height() && l.css("max-height", t.height()),
                  _.call(this),
                  "y" === i.axis ||
                    i.advanced.autoExpandHorizontalScroll ||
                    r.css("width", x(r)),
                  (n.overflowed = y.call(this)),
                  M.call(this),
                  i.autoDraggerLength && S.call(this),
                  b.call(this),
                  T.call(this);
                var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                "x" !== i.axis &&
                  (n.overflowed[0]
                    ? s[0].height() > s[0].parent().height()
                      ? B.call(this)
                      : (G(t, c[0].toString(), {
                          dir: "y",
                          dur: 0,
                          overwrite: "none",
                        }),
                        (n.contentReset.y = null))
                    : (B.call(this),
                      "y" === i.axis
                        ? k.call(this)
                        : "yx" === i.axis &&
                          n.overflowed[1] &&
                          G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none",
                          }))),
                  "y" !== i.axis &&
                    (n.overflowed[1]
                      ? s[1].width() > s[1].parent().width()
                        ? B.call(this)
                        : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none",
                          }),
                          (n.contentReset.x = null))
                      : (B.call(this),
                        "x" === i.axis
                          ? k.call(this)
                          : "yx" === i.axis &&
                            n.overflowed[0] &&
                            G(t, c[0].toString(), {
                              dir: "y",
                              dur: 0,
                              overwrite: "none",
                            }))),
                  o &&
                    n &&
                    (2 === o &&
                    i.callbacks.onImageLoad &&
                    "function" == typeof i.callbacks.onImageLoad
                      ? i.callbacks.onImageLoad.call(this)
                      : 3 === o &&
                        i.callbacks.onSelectorChange &&
                        "function" == typeof i.callbacks.onSelectorChange
                      ? i.callbacks.onSelectorChange.call(this)
                      : i.callbacks.onUpdate &&
                        "function" == typeof i.callbacks.onUpdate &&
                        i.callbacks.onUpdate.call(this)),
                  N.call(this);
              }
            });
          },
          scrollTo: function (t, o) {
            if ("undefined" != typeof t && null != t) {
              var n = f.call(this);
              return e(n).each(function () {
                var n = e(this);
                if (n.data(a)) {
                  var i = n.data(a),
                    r = i.opt,
                    l = {
                      trigger: "external",
                      scrollInertia: r.scrollInertia,
                      scrollEasing: "mcsEaseInOut",
                      moveDragger: !1,
                      timeout: 60,
                      callbacks: !0,
                      onStart: !0,
                      onUpdate: !0,
                      onComplete: !0,
                    },
                    s = e.extend(!0, {}, l, o),
                    c = Y.call(this, t),
                    d =
                      s.scrollInertia > 0 && s.scrollInertia < 17
                        ? 17
                        : s.scrollInertia;
                  (c[0] = X.call(this, c[0], "y")),
                    (c[1] = X.call(this, c[1], "x")),
                    s.moveDragger &&
                      ((c[0] *= i.scrollRatio.y), (c[1] *= i.scrollRatio.x)),
                    (s.dur = ne() ? 0 : d),
                    setTimeout(function () {
                      null !== c[0] &&
                        "undefined" != typeof c[0] &&
                        "x" !== r.axis &&
                        i.overflowed[0] &&
                        ((s.dir = "y"),
                        (s.overwrite = "all"),
                        G(n, c[0].toString(), s)),
                        null !== c[1] &&
                          "undefined" != typeof c[1] &&
                          "y" !== r.axis &&
                          i.overflowed[1] &&
                          ((s.dir = "x"),
                          (s.overwrite = "none"),
                          G(n, c[1].toString(), s));
                    }, s.timeout);
                }
              });
            }
          },
          stop: function () {
            var t = f.call(this);
            return e(t).each(function () {
              var t = e(this);
              t.data(a) && Q(t);
            });
          },
          disable: function (t) {
            var o = f.call(this);
            return e(o).each(function () {
              var o = e(this);
              if (o.data(a)) {
                o.data(a);
                N.call(this, "remove"),
                  k.call(this),
                  t && B.call(this),
                  M.call(this, !0),
                  o.addClass(d[3]);
              }
            });
          },
          destroy: function () {
            var t = f.call(this);
            return e(t).each(function () {
              var n = e(this);
              if (n.data(a)) {
                var i = n.data(a),
                  r = i.opt,
                  l = e("#mCSB_" + i.idx),
                  s = e("#mCSB_" + i.idx + "_container"),
                  c = e(".mCSB_" + i.idx + "_scrollbar");
                r.live && m(r.liveSelector || e(t).selector),
                  N.call(this, "remove"),
                  k.call(this),
                  B.call(this),
                  n.removeData(a),
                  $(this, "mcs"),
                  c.remove(),
                  s.find("img." + d[2]).removeClass(d[2]),
                  l.replaceWith(s.contents()),
                  n
                    .removeClass(
                      o +
                        " _" +
                        a +
                        "_" +
                        i.idx +
                        " " +
                        d[6] +
                        " " +
                        d[7] +
                        " " +
                        d[5] +
                        " " +
                        d[3]
                    )
                    .addClass(d[4]);
              }
            });
          },
        },
        f = function () {
          return "object" != typeof e(this) || e(this).length < 1 ? n : this;
        },
        h = function (t) {
          var o = [
              "rounded",
              "rounded-dark",
              "rounded-dots",
              "rounded-dots-dark",
            ],
            a = [
              "rounded-dots",
              "rounded-dots-dark",
              "3d",
              "3d-dark",
              "3d-thick",
              "3d-thick-dark",
              "inset",
              "inset-dark",
              "inset-2",
              "inset-2-dark",
              "inset-3",
              "inset-3-dark",
            ],
            n = ["minimal", "minimal-dark"],
            i = ["minimal", "minimal-dark"],
            r = ["minimal", "minimal-dark"];
          (t.autoDraggerLength =
            e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength),
            (t.autoExpandScrollbar =
              e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar),
            (t.scrollButtons.enable =
              e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable),
            (t.autoHideScrollbar =
              e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar),
            (t.scrollbarPosition =
              e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition);
        },
        m = function (e) {
          l[e] && (clearTimeout(l[e]), $(l, e));
        },
        p = function (e) {
          return "yx" === e || "xy" === e || "auto" === e
            ? "yx"
            : "x" === e || "horizontal" === e
            ? "x"
            : "y";
        },
        g = function (e) {
          return "stepped" === e ||
            "pixels" === e ||
            "step" === e ||
            "click" === e
            ? "stepped"
            : "stepless";
        },
        v = function () {
          var t = e(this),
            n = t.data(a),
            i = n.opt,
            r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
            l = [
              "<div id='mCSB_" +
                n.idx +
                "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                n.idx +
                "_scrollbar mCS-" +
                i.theme +
                " mCSB_scrollTools_vertical" +
                r +
                "'><div class='" +
                d[12] +
                "'><div id='mCSB_" +
                n.idx +
                "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
              "<div id='mCSB_" +
                n.idx +
                "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                n.idx +
                "_scrollbar mCS-" +
                i.theme +
                " mCSB_scrollTools_horizontal" +
                r +
                "'><div class='" +
                d[12] +
                "'><div id='mCSB_" +
                n.idx +
                "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
            ],
            s =
              "yx" === i.axis
                ? "mCSB_vertical_horizontal"
                : "x" === i.axis
                ? "mCSB_horizontal"
                : "mCSB_vertical",
            c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
            u =
              "yx" === i.axis
                ? "<div id='mCSB_" +
                  n.idx +
                  "_container_wrapper' class='mCSB_container_wrapper' />"
                : "",
            f = i.autoHideScrollbar ? " " + d[6] : "",
            h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
          i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            (i.setLeft =
              "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft),
            t
              .addClass(o + " _" + a + "_" + n.idx + f + h)
              .wrapInner(
                "<div id='mCSB_" +
                  n.idx +
                  "' class='mCustomScrollBox mCS-" +
                  i.theme +
                  " " +
                  s +
                  "'><div id='mCSB_" +
                  n.idx +
                  "_container' class='mCSB_container' style='position:relative; top:" +
                  i.setTop +
                  "; left:" +
                  i.setLeft +
                  ";' dir='" +
                  n.langDir +
                  "' /></div>"
              );
          var m = e("#mCSB_" + n.idx),
            p = e("#mCSB_" + n.idx + "_container");
          "y" === i.axis ||
            i.advanced.autoExpandHorizontalScroll ||
            p.css("width", x(p)),
            "outside" === i.scrollbarPosition
              ? ("static" === t.css("position") && t.css("position", "relative"),
                t.css("overflow", "visible"),
                m.addClass("mCSB_outside").after(c))
              : (m.addClass("mCSB_inside").append(c), p.wrap(u)),
            w.call(this);
          var g = [
            e("#mCSB_" + n.idx + "_dragger_vertical"),
            e("#mCSB_" + n.idx + "_dragger_horizontal"),
          ];
          g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width());
        },
        x = function (t) {
          var o = [
              t[0].scrollWidth,
              Math.max.apply(
                Math,
                t
                  .children()
                  .map(function () {
                    return e(this).outerWidth(!0);
                  })
                  .get()
              ),
            ],
            a = t.parent().width();
          return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
        },
        _ = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = e("#mCSB_" + o.idx + "_container");
          if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
            i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
            var r = Math.ceil(i[0].scrollWidth);
            3 === n.advanced.autoExpandHorizontalScroll ||
            (2 !== n.advanced.autoExpandHorizontalScroll &&
              r > i.parent().width())
              ? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" })
              : i
                  .css({ "overflow-x": "inherit", position: "absolute" })
                  .wrap(
                    "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                  )
                  .css({
                    width:
                      Math.ceil(i[0].getBoundingClientRect().right + 0.4) -
                      Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative",
                  })
                  .unwrap();
          }
        },
        w = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = e(".mCSB_" + o.idx + "_scrollbar:first"),
            r = oe(n.scrollButtons.tabindex)
              ? "tabindex='" + n.scrollButtons.tabindex + "'"
              : "",
            l = [
              "<a href='#' class='" + d[13] + "' " + r + " />",
              "<a href='#' class='" + d[14] + "' " + r + " />",
              "<a href='#' class='" + d[15] + "' " + r + " />",
              "<a href='#' class='" + d[16] + "' " + r + " />",
            ],
            s = [
              "x" === n.axis ? l[2] : l[0],
              "x" === n.axis ? l[3] : l[1],
              l[2],
              l[3],
            ];
          n.scrollButtons.enable &&
            i
              .prepend(s[0])
              .append(s[1])
              .next(".mCSB_scrollTools")
              .prepend(s[2])
              .append(s[3]);
        },
        S = function () {
          var t = e(this),
            o = t.data(a),
            n = e("#mCSB_" + o.idx),
            i = e("#mCSB_" + o.idx + "_container"),
            r = [
              e("#mCSB_" + o.idx + "_dragger_vertical"),
              e("#mCSB_" + o.idx + "_dragger_horizontal"),
            ],
            l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
            c = [
              parseInt(r[0].css("min-height")),
              Math.round(l[0] * r[0].parent().height()),
              parseInt(r[1].css("min-width")),
              Math.round(l[1] * r[1].parent().width()),
            ],
            d = s && c[1] < c[0] ? c[0] : c[1],
            u = s && c[3] < c[2] ? c[2] : c[3];
          r[0]
            .css({ height: d, "max-height": r[0].parent().height() - 10 })
            .find(".mCSB_dragger_bar")
            .css({ "line-height": c[0] + "px" }),
            r[1].css({ width: u, "max-width": r[1].parent().width() - 10 });
        },
        b = function () {
          var t = e(this),
            o = t.data(a),
            n = e("#mCSB_" + o.idx),
            i = e("#mCSB_" + o.idx + "_container"),
            r = [
              e("#mCSB_" + o.idx + "_dragger_vertical"),
              e("#mCSB_" + o.idx + "_dragger_horizontal"),
            ],
            l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
            s = [
              l[0] / (r[0].parent().height() - r[0].height()),
              l[1] / (r[1].parent().width() - r[1].width()),
            ];
          o.scrollRatio = { y: s[0], x: s[1] };
        },
        C = function (e, t, o) {
          var a = o ? d[0] + "_expanded" : "",
            n = e.closest(".mCSB_scrollTools");
          "active" === t
            ? (e.toggleClass(d[0] + " " + a),
              n.toggleClass(d[1]),
              (e[0]._draggable = e[0]._draggable ? 0 : 1))
            : e[0]._draggable ||
              ("hide" === t
                ? (e.removeClass(d[0]), n.removeClass(d[1]))
                : (e.addClass(d[0]), n.addClass(d[1])));
        },
        y = function () {
          var t = e(this),
            o = t.data(a),
            n = e("#mCSB_" + o.idx),
            i = e("#mCSB_" + o.idx + "_container"),
            r = null == o.overflowed ? i.height() : i.outerHeight(!1),
            l = null == o.overflowed ? i.width() : i.outerWidth(!1),
            s = i[0].scrollHeight,
            c = i[0].scrollWidth;
          return (
            s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
          );
        },
        B = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = e("#mCSB_" + o.idx),
            r = e("#mCSB_" + o.idx + "_container"),
            l = [
              e("#mCSB_" + o.idx + "_dragger_vertical"),
              e("#mCSB_" + o.idx + "_dragger_horizontal"),
            ];
          if (
            (Q(t),
            (("x" !== n.axis && !o.overflowed[0]) ||
              ("y" === n.axis && o.overflowed[0])) &&
              (l[0].add(r).css("top", 0), G(t, "_resetY")),
            ("y" !== n.axis && !o.overflowed[1]) ||
              ("x" === n.axis && o.overflowed[1]))
          ) {
            var s = (dx = 0);
            "rtl" === o.langDir &&
              ((s = i.width() - r.outerWidth(!1)),
              (dx = Math.abs(s / o.scrollRatio.x))),
              r.css("left", s),
              l[1].css("left", dx),
              G(t, "_resetX");
          }
        },
        T = function () {
          function t() {
            r = setTimeout(function () {
              e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
            }, 100);
          }
          var o = e(this),
            n = o.data(a),
            i = n.opt;
          if (!n.bindEvents) {
            if (
              (I.call(this),
              i.contentTouchScroll && D.call(this),
              E.call(this),
              i.mouseWheel.enable)
            ) {
              var r;
              t();
            }
            P.call(this),
              U.call(this),
              i.advanced.autoScrollOnFocus && H.call(this),
              i.scrollButtons.enable && F.call(this),
              i.keyboard.enable && q.call(this),
              (n.bindEvents = !0);
          }
        },
        k = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = a + "_" + o.idx,
            r = ".mCSB_" + o.idx + "_scrollbar",
            l = e(
              "#mCSB_" +
                o.idx +
                ",#mCSB_" +
                o.idx +
                "_container,#mCSB_" +
                o.idx +
                "_container_wrapper," +
                r +
                " ." +
                d[12] +
                ",#mCSB_" +
                o.idx +
                "_dragger_vertical,#mCSB_" +
                o.idx +
                "_dragger_horizontal," +
                r +
                ">a"
            ),
            s = e("#mCSB_" + o.idx + "_container");
          n.advanced.releaseDraggableSelectors &&
            l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors &&
              l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents &&
              (e(document)
                .add(e(!A() || top.document))
                .unbind("." + i),
              l.each(function () {
                e(this).unbind("." + i);
              }),
              clearTimeout(t[0]._focusTimeout),
              $(t[0], "_focusTimeout"),
              clearTimeout(o.sequential.step),
              $(o.sequential, "step"),
              clearTimeout(s[0].onCompleteTimeout),
              $(s[0], "onCompleteTimeout"),
              (o.bindEvents = !1));
        },
        M = function (t) {
          var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = e("#mCSB_" + n.idx + "_container_wrapper"),
            l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
            s = [
              e("#mCSB_" + n.idx + "_scrollbar_vertical"),
              e("#mCSB_" + n.idx + "_scrollbar_horizontal"),
            ],
            c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
          "x" !== i.axis &&
            (n.overflowed[0] && !t
              ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
                l.removeClass(d[8] + " " + d[10]))
              : (i.alwaysShowScrollbar
                  ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
                    l.removeClass(d[10]))
                  : (s[0].css("display", "none"), l.addClass(d[10])),
                l.addClass(d[8]))),
            "y" !== i.axis &&
              (n.overflowed[1] && !t
                ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
                  l.removeClass(d[9] + " " + d[11]))
                : (i.alwaysShowScrollbar
                    ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
                      l.removeClass(d[11]))
                    : (s[1].css("display", "none"), l.addClass(d[11])),
                  l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1]
              ? o.removeClass(d[5])
              : o.addClass(d[5]);
        },
        O = function (t) {
          var o = t.type,
            a =
              t.target.ownerDocument !== document && null !== frameElement
                ? [e(frameElement).offset().top, e(frameElement).offset().left]
                : null,
            n =
              A() &&
              t.target.ownerDocument !== top.document &&
              null !== frameElement
                ? [
                    e(t.view.frameElement).offset().top,
                    e(t.view.frameElement).offset().left,
                  ]
                : [0, 0];
          switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
              return a
                ? [
                    t.originalEvent.pageY - a[0] + n[0],
                    t.originalEvent.pageX - a[1] + n[1],
                    !1,
                  ]
                : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
              var i =
                  t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                r =
                  t.originalEvent.touches.length ||
                  t.originalEvent.changedTouches.length;
              return t.target.ownerDocument !== document
                ? [i.screenY, i.screenX, r > 1]
                : [i.pageY, i.pageX, r > 1];
            default:
              return a
                ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1]
                : [t.pageY, t.pageX, !1];
          }
        },
        I = function () {
          function t(e, t, a, n) {
            if (
              ((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
              o.attr("id") === f[1])
            )
              var i = "x",
                s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
            else
              var i = "y",
                s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
            G(r, s.toString(), { dir: i, drag: !0 });
          }
          var o,
            n,
            i,
            r = e(this),
            l = r.data(a),
            d = l.opt,
            u = a + "_" + l.idx,
            f = [
              "mCSB_" + l.idx + "_dragger_vertical",
              "mCSB_" + l.idx + "_dragger_horizontal",
            ],
            h = e("#mCSB_" + l.idx + "_container"),
            m = e("#" + f[0] + ",#" + f[1]),
            p = d.advanced.releaseDraggableSelectors
              ? m.add(e(d.advanced.releaseDraggableSelectors))
              : m,
            g = d.advanced.extraDraggableSelectors
              ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors))
              : e(!A() || top.document);
          m
            .bind("contextmenu." + u, function (e) {
              e.preventDefault();
            })
            .bind(
              "mousedown." +
                u +
                " touchstart." +
                u +
                " pointerdown." +
                u +
                " MSPointerDown." +
                u,
              function (t) {
                if ((t.stopImmediatePropagation(), t.preventDefault(), ee(t))) {
                  (c = !0),
                    s &&
                      (document.onselectstart = function () {
                        return !1;
                      }),
                    L.call(h, !1),
                    Q(r),
                    (o = e(this));
                  var a = o.offset(),
                    l = O(t)[0] - a.top,
                    u = O(t)[1] - a.left,
                    f = o.height() + a.top,
                    m = o.width() + a.left;
                  f > l && l > 0 && m > u && u > 0 && ((n = l), (i = u)),
                    C(o, "active", d.autoExpandScrollbar);
                }
              }
            )
            .bind("touchmove." + u, function (e) {
              e.stopImmediatePropagation(), e.preventDefault();
              var a = o.offset(),
                r = O(e)[0] - a.top,
                l = O(e)[1] - a.left;
              t(n, i, r, l);
            }),
            e(document)
              .add(g)
              .bind(
                "mousemove." + u + " pointermove." + u + " MSPointerMove." + u,
                function (e) {
                  if (o) {
                    var a = o.offset(),
                      r = O(e)[0] - a.top,
                      l = O(e)[1] - a.left;
                    if (n === r && i === l) return;
                    t(n, i, r, l);
                  }
                }
              )
              .add(p)
              .bind(
                "mouseup." +
                  u +
                  " touchend." +
                  u +
                  " pointerup." +
                  u +
                  " MSPointerUp." +
                  u,
                function () {
                  o && (C(o, "active", d.autoExpandScrollbar), (o = null)),
                    (c = !1),
                    s && (document.onselectstart = null),
                    L.call(h, !0);
                }
              );
        },
        D = function () {
          function o(e) {
            if (!te(e) || c || O(e)[2]) return void (t = 0);
            (t = 1), (b = 0), (C = 0), (d = 1), y.removeClass("mCS_touch_action");
            var o = I.offset();
            (u = O(e)[0] - o.top),
              (f = O(e)[1] - o.left),
              (z = [O(e)[0], O(e)[1]]);
          }
          function n(e) {
            if (
              te(e) &&
              !c &&
              !O(e)[2] &&
              (T.documentTouchScroll || e.preventDefault(),
              e.stopImmediatePropagation(),
              (!C || b) && d)
            ) {
              g = K();
              var t = M.offset(),
                o = O(e)[0] - t.top,
                a = O(e)[1] - t.left,
                n = "mcsLinearOut";
              if (
                (E.push(o),
                W.push(a),
                (z[2] = Math.abs(O(e)[0] - z[0])),
                (z[3] = Math.abs(O(e)[1] - z[1])),
                B.overflowed[0])
              )
                var i = D[0].parent().height() - D[0].height(),
                  r =
                    u - o > 0 &&
                    o - u > -(i * B.scrollRatio.y) &&
                    (2 * z[3] < z[2] || "yx" === T.axis);
              if (B.overflowed[1])
                var l = D[1].parent().width() - D[1].width(),
                  h =
                    f - a > 0 &&
                    a - f > -(l * B.scrollRatio.x) &&
                    (2 * z[2] < z[3] || "yx" === T.axis);
              r || h
                ? (U || e.preventDefault(), (b = 1))
                : ((C = 1), y.addClass("mCS_touch_action")),
                U && e.preventDefault(),
                (w =
                  "yx" === T.axis
                    ? [u - o, f - a]
                    : "x" === T.axis
                    ? [null, f - a]
                    : [u - o, null]),
                (I[0].idleTimer = 250),
                B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                B.overflowed[1] && s(w[1], R, n, "x", L, !0);
            }
          }
          function i(e) {
            if (!te(e) || c || O(e)[2]) return void (t = 0);
            (t = 1), e.stopImmediatePropagation(), Q(y), (p = K());
            var o = M.offset();
            (h = O(e)[0] - o.top), (m = O(e)[1] - o.left), (E = []), (W = []);
          }
          function r(e) {
            if (te(e) && !c && !O(e)[2]) {
              (d = 0), e.stopImmediatePropagation(), (b = 0), (C = 0), (v = K());
              var t = M.offset(),
                o = O(e)[0] - t.top,
                a = O(e)[1] - t.left;
              if (!(v - g > 30)) {
                _ = 1e3 / (v - p);
                var n = "mcsEaseOut",
                  i = 2.5 > _,
                  r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                var u = [Math.abs(x[0]), Math.abs(x[1])];
                _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                var f = [
                  Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]),
                  Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1]),
                ];
                (w =
                  "yx" === T.axis
                    ? [f[0], f[1]]
                    : "x" === T.axis
                    ? [null, f[1]]
                    : [f[0], null]),
                  (S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia]);
                var y = parseInt(T.contentTouchScroll) || 0;
                (w[0] = u[0] > y ? w[0] : 0),
                  (w[1] = u[1] > y ? w[1] : 0),
                  B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                  B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
              }
            }
          }
          function l(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return e > 90
              ? t > 4
                ? o[0]
                : o[3]
              : e > 60
              ? t > 3
                ? o[3]
                : o[2]
              : e > 30
              ? t > 8
                ? o[1]
                : t > 6
                ? o[0]
                : t > 4
                ? t
                : o[2]
              : t > 8
              ? t
              : o[3];
          }
          function s(e, t, o, a, n, i) {
            e &&
              G(y, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: a,
                overwrite: n,
                drag: i,
              });
          }
          var d,
            u,
            f,
            h,
            m,
            p,
            g,
            v,
            x,
            _,
            w,
            S,
            b,
            C,
            y = e(this),
            B = y.data(a),
            T = B.opt,
            k = a + "_" + B.idx,
            M = e("#mCSB_" + B.idx),
            I = e("#mCSB_" + B.idx + "_container"),
            D = [
              e("#mCSB_" + B.idx + "_dragger_vertical"),
              e("#mCSB_" + B.idx + "_dragger_horizontal"),
            ],
            E = [],
            W = [],
            R = 0,
            L = "yx" === T.axis ? "none" : "all",
            z = [],
            P = I.find("iframe"),
            H = [
              "touchstart." + k + " pointerdown." + k + " MSPointerDown." + k,
              "touchmove." + k + " pointermove." + k + " MSPointerMove." + k,
              "touchend." + k + " pointerup." + k + " MSPointerUp." + k,
            ],
            U =
              void 0 !== document.body.style.touchAction &&
              "" !== document.body.style.touchAction;
          I.bind(H[0], function (e) {
            o(e);
          }).bind(H[1], function (e) {
            n(e);
          }),
            M.bind(H[0], function (e) {
              i(e);
            }).bind(H[2], function (e) {
              r(e);
            }),
            P.length &&
              P.each(function () {
                e(this).bind("load", function () {
                  A(this) &&
                    e(this.contentDocument || this.contentWindow.document)
                      .bind(H[0], function (e) {
                        o(e), i(e);
                      })
                      .bind(H[1], function (e) {
                        n(e);
                      })
                      .bind(H[2], function (e) {
                        r(e);
                      });
                });
              });
        },
        E = function () {
          function o() {
            return window.getSelection
              ? window.getSelection().toString()
              : document.selection && "Control" != document.selection.type
              ? document.selection.createRange().text
              : 0;
          }
          function n(e, t, o) {
            (d.type = o && i ? "stepped" : "stepless"),
              (d.scrollAmount = 10),
              j(r, e, t, "mcsLinearOut", o ? 60 : null);
          }
          var i,
            r = e(this),
            l = r.data(a),
            s = l.opt,
            d = l.sequential,
            u = a + "_" + l.idx,
            f = e("#mCSB_" + l.idx + "_container"),
            h = f.parent();
          f.bind("mousedown." + u, function () {
            t || i || ((i = 1), (c = !0));
          })
            .add(document)
            .bind("mousemove." + u, function (e) {
              if (!t && i && o()) {
                var a = f.offset(),
                  r = O(e)[0] - a.top + f[0].offsetTop,
                  c = O(e)[1] - a.left + f[0].offsetLeft;
                r > 0 && r < h.height() && c > 0 && c < h.width()
                  ? d.step && n("off", null, "stepped")
                  : ("x" !== s.axis &&
                      l.overflowed[0] &&
                      (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis &&
                      l.overflowed[1] &&
                      (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
              }
            })
            .bind("mouseup." + u + " dragend." + u, function () {
              t || (i && ((i = 0), n("off", null)), (c = !1));
            });
        },
        W = function () {
          function t(t, a) {
            if ((Q(o), !z(o, t.target))) {
              var r =
                  "auto" !== i.mouseWheel.deltaFactor
                    ? parseInt(i.mouseWheel.deltaFactor)
                    : s && t.deltaFactor < 100
                    ? 100
                    : t.deltaFactor || 100,
                d = i.scrollInertia;
              if ("x" === i.axis || "x" === i.mouseWheel.axis)
                var u = "x",
                  f = [
                    Math.round(r * n.scrollRatio.x),
                    parseInt(i.mouseWheel.scrollAmount),
                  ],
                  h =
                    "auto" !== i.mouseWheel.scrollAmount
                      ? f[1]
                      : f[0] >= l.width()
                      ? 0.9 * l.width()
                      : f[0],
                  m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                  p = c[1][0].offsetLeft,
                  g = c[1].parent().width() - c[1].width(),
                  v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
              else
                var u = "y",
                  f = [
                    Math.round(r * n.scrollRatio.y),
                    parseInt(i.mouseWheel.scrollAmount),
                  ],
                  h =
                    "auto" !== i.mouseWheel.scrollAmount
                      ? f[1]
                      : f[0] >= l.height()
                      ? 0.9 * l.height()
                      : f[0],
                  m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                  p = c[0][0].offsetTop,
                  g = c[0].parent().height() - c[0].height(),
                  v = t.deltaY || a;
              ("y" === u && !n.overflowed[0]) ||
                ("x" === u && !n.overflowed[1]) ||
                ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) &&
                  (v = -v),
                i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                ((v > 0 && 0 !== p) ||
                  (0 > v && p !== g) ||
                  i.mouseWheel.preventDefault) &&
                  (t.stopImmediatePropagation(), t.preventDefault()),
                t.deltaFactor < 5 &&
                  !i.mouseWheel.normalizeDelta &&
                  ((h = t.deltaFactor), (d = 17)),
                G(o, (m - v * h).toString(), { dir: u, dur: d }));
            }
          }
          if (e(this).data(a)) {
            var o = e(this),
              n = o.data(a),
              i = n.opt,
              r = a + "_" + n.idx,
              l = e("#mCSB_" + n.idx),
              c = [
                e("#mCSB_" + n.idx + "_dragger_vertical"),
                e("#mCSB_" + n.idx + "_dragger_horizontal"),
              ],
              d = e("#mCSB_" + n.idx + "_container").find("iframe");
            d.length &&
              d.each(function () {
                e(this).bind("load", function () {
                  A(this) &&
                    e(this.contentDocument || this.contentWindow.document).bind(
                      "mousewheel." + r,
                      function (e, o) {
                        t(e, o);
                      }
                    );
                });
              }),
              l.bind("mousewheel." + r, function (e, o) {
                t(e, o);
              });
          }
        },
        R = new Object(),
        A = function (t) {
          var o = !1,
            a = !1,
            n = null;
          if (
            (void 0 === t
              ? (a = "#empty")
              : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
          )
            return R[a];
          if (t) {
            try {
              var i = t.contentDocument || t.contentWindow.document;
              n = i.body.innerHTML;
            } catch (r) {}
            o = null !== n;
          } else {
            try {
              var i = top.document;
              n = i.body.innerHTML;
            } catch (r) {}
            o = null !== n;
          }
          return a !== !1 && (R[a] = o), o;
        },
        L = function (e) {
          var t = this.find("iframe");
          if (t.length) {
            var o = e ? "auto" : "none";
            t.css("pointer-events", o);
          }
        },
        z = function (t, o) {
          var n = o.nodeName.toLowerCase(),
            i = t.data(a).opt.mouseWheel.disableOver,
            r = ["select", "textarea"];
          return (
            e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
          );
        },
        P = function () {
          var t,
            o = e(this),
            n = o.data(a),
            i = a + "_" + n.idx,
            r = e("#mCSB_" + n.idx + "_container"),
            l = r.parent(),
            s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
          s.bind(
            "mousedown." +
              i +
              " touchstart." +
              i +
              " pointerdown." +
              i +
              " MSPointerDown." +
              i,
            function (o) {
              (c = !0), e(o.target).hasClass("mCSB_dragger") || (t = 1);
            }
          )
            .bind(
              "touchend." + i + " pointerup." + i + " MSPointerUp." + i,
              function () {
                c = !1;
              }
            )
            .bind("click." + i, function (a) {
              if (
                t &&
                ((t = 0),
                e(a.target).hasClass(d[12]) ||
                  e(a.target).hasClass("mCSB_draggerRail"))
              ) {
                Q(o);
                var i = e(this),
                  s = i.find(".mCSB_dragger");
                if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                  if (!n.overflowed[1]) return;
                  var c = "x",
                    u = a.pageX > s.offset().left ? -1 : 1,
                    f = Math.abs(r[0].offsetLeft) - u * (0.9 * l.width());
                } else {
                  if (!n.overflowed[0]) return;
                  var c = "y",
                    u = a.pageY > s.offset().top ? -1 : 1,
                    f = Math.abs(r[0].offsetTop) - u * (0.9 * l.height());
                }
                G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" });
              }
            });
        },
        H = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = a + "_" + o.idx,
            r = e("#mCSB_" + o.idx + "_container"),
            l = r.parent();
          r.bind("focusin." + i, function () {
            var o = e(document.activeElement),
              a = r.find(".mCustomScrollBox").length,
              i = 0;
            o.is(n.advanced.autoScrollOnFocus) &&
              (Q(t),
              clearTimeout(t[0]._focusTimeout),
              (t[0]._focusTimer = a ? (i + 17) * a : 0),
              (t[0]._focusTimeout = setTimeout(function () {
                var e = [ae(o)[0], ae(o)[1]],
                  a = [r[0].offsetTop, r[0].offsetLeft],
                  s = [
                    a[0] + e[0] >= 0 &&
                      a[0] + e[0] < l.height() - o.outerHeight(!1),
                    a[1] + e[1] >= 0 &&
                      a[0] + e[1] < l.width() - o.outerWidth(!1),
                  ],
                  c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                "x" === n.axis ||
                  s[0] ||
                  G(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: i,
                  }),
                  "y" === n.axis ||
                    s[1] ||
                    G(t, e[1].toString(), {
                      dir: "x",
                      scrollEasing: "mcsEaseInOut",
                      overwrite: c,
                      dur: i,
                    });
              }, t[0]._focusTimer)));
          });
        },
        U = function () {
          var t = e(this),
            o = t.data(a),
            n = a + "_" + o.idx,
            i = e("#mCSB_" + o.idx + "_container").parent();
          i.bind("scroll." + n, function () {
            (0 === i.scrollTop() && 0 === i.scrollLeft()) ||
              e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
          });
        },
        F = function () {
          var t = e(this),
            o = t.data(a),
            n = o.opt,
            i = o.sequential,
            r = a + "_" + o.idx,
            l = ".mCSB_" + o.idx + "_scrollbar",
            s = e(l + ">a");
          s.bind("contextmenu." + r, function (e) {
            e.preventDefault();
          }).bind(
            "mousedown." +
              r +
              " touchstart." +
              r +
              " pointerdown." +
              r +
              " MSPointerDown." +
              r +
              " mouseup." +
              r +
              " touchend." +
              r +
              " pointerup." +
              r +
              " MSPointerUp." +
              r +
              " mouseout." +
              r +
              " pointerout." +
              r +
              " MSPointerOut." +
              r +
              " click." +
              r,
            function (a) {
              function r(e, o) {
                (i.scrollAmount = n.scrollButtons.scrollAmount), j(t, e, o);
              }
              if ((a.preventDefault(), ee(a))) {
                var l = e(this).attr("class");
                switch (((i.type = n.scrollButtons.scrollType), a.type)) {
                  case "mousedown":
                  case "touchstart":
                  case "pointerdown":
                  case "MSPointerDown":
                    if ("stepped" === i.type) return;
                    (c = !0), (o.tweenRunning = !1), r("on", l);
                    break;
                  case "mouseup":
                  case "touchend":
                  case "pointerup":
                  case "MSPointerUp":
                  case "mouseout":
                  case "pointerout":
                  case "MSPointerOut":
                    if ("stepped" === i.type) return;
                    (c = !1), i.dir && r("off", l);
                    break;
                  case "click":
                    if ("stepped" !== i.type || o.tweenRunning) return;
                    r("on", l);
                }
              }
            }
          );
        },
        q = function () {
          function t(t) {
            function a(e, t) {
              (r.type = i.keyboard.scrollType),
                (r.scrollAmount = i.keyboard.scrollAmount),
                ("stepped" === r.type && n.tweenRunning) || j(o, e, t);
            }
            switch (t.type) {
              case "blur":
                n.tweenRunning && r.dir && a("off", null);
                break;
              case "keydown":
              case "keyup":
                var l = t.keyCode ? t.keyCode : t.which,
                  s = "on";
                if (
                  ("x" !== i.axis && (38 === l || 40 === l)) ||
                  ("y" !== i.axis && (37 === l || 39 === l))
                ) {
                  if (
                    ((38 === l || 40 === l) && !n.overflowed[0]) ||
                    ((37 === l || 39 === l) && !n.overflowed[1])
                  )
                    return;
                  "keyup" === t.type && (s = "off"),
                    e(document.activeElement).is(u) ||
                      (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
                } else if (33 === l || 34 === l) {
                  if (
                    ((n.overflowed[0] || n.overflowed[1]) &&
                      (t.preventDefault(), t.stopImmediatePropagation()),
                    "keyup" === t.type)
                  ) {
                    Q(o);
                    var f = 34 === l ? -1 : 1;
                    if (
                      "x" === i.axis ||
                      ("yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                    )
                      var h = "x",
                        m = Math.abs(c[0].offsetLeft) - f * (0.9 * d.width());
                    else
                      var h = "y",
                        m = Math.abs(c[0].offsetTop) - f * (0.9 * d.height());
                    G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
                  }
                } else if (
                  (35 === l || 36 === l) &&
                  !e(document.activeElement).is(u) &&
                  ((n.overflowed[0] || n.overflowed[1]) &&
                    (t.preventDefault(), t.stopImmediatePropagation()),
                  "keyup" === t.type)
                ) {
                  if (
                    "x" === i.axis ||
                    ("yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                  )
                    var h = "x",
                      m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                  else
                    var h = "y",
                      m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                  G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
                }
            }
          }
          var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = n.sequential,
            l = a + "_" + n.idx,
            s = e("#mCSB_" + n.idx),
            c = e("#mCSB_" + n.idx + "_container"),
            d = c.parent(),
            u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
            f = c.find("iframe"),
            h = ["blur." + l + " keydown." + l + " keyup." + l];
          f.length &&
            f.each(function () {
              e(this).bind("load", function () {
                A(this) &&
                  e(this.contentDocument || this.contentWindow.document).bind(
                    h[0],
                    function (e) {
                      t(e);
                    }
                  );
              });
            }),
            s.attr("tabindex", "0").bind(h[0], function (e) {
              t(e);
            });
        },
        j = function (t, o, n, i, r) {
          function l(e) {
            u.snapAmount &&
              (f.scrollAmount =
                u.snapAmount instanceof Array
                  ? "x" === f.dir[0]
                    ? u.snapAmount[1]
                    : u.snapAmount[0]
                  : u.snapAmount);
            var o = "stepped" !== f.type,
              a = r ? r : e ? (o ? p / 1.5 : g) : 1e3 / 60,
              n = e ? (o ? 7.5 : 40) : 2.5,
              s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
              d = [
                c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y,
                c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x,
              ],
              m =
                "x" === f.dir[0]
                  ? s[1] + f.dir[1] * (d[1] * n)
                  : s[0] + f.dir[1] * (d[0] * n),
              v =
                "x" === f.dir[0]
                  ? s[1] + f.dir[1] * parseInt(f.scrollAmount)
                  : s[0] + f.dir[1] * parseInt(f.scrollAmount),
              x = "auto" !== f.scrollAmount ? v : m,
              _ = i ? i : e ? (o ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear",
              w = !!e;
            return (
              e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
              G(t, x.toString(), {
                dir: f.dir[0],
                scrollEasing: _,
                dur: a,
                onComplete: w,
              }),
              e
                ? void (f.dir = !1)
                : (clearTimeout(f.step),
                  void (f.step = setTimeout(function () {
                    l();
                  }, a)))
            );
          }
          function s() {
            clearTimeout(f.step), $(f, "step"), Q(t);
          }
          var c = t.data(a),
            u = c.opt,
            f = c.sequential,
            h = e("#mCSB_" + c.idx + "_container"),
            m = "stepped" === f.type,
            p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
            g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
          switch (o) {
            case "on":
              if (
                ((f.dir = [
                  n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y",
                  n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1,
                ]),
                Q(t),
                oe(n) && "stepped" === f.type)
              )
                return;
              l(m);
              break;
            case "off":
              s(), (m || (c.tweenRunning && f.dir)) && l(!0);
          }
        },
        Y = function (t) {
          var o = e(this).data(a).opt,
            n = [];
          return (
            "function" == typeof t && (t = t()),
            t instanceof Array
              ? (n =
                  t.length > 1
                    ? [t[0], t[1]]
                    : "x" === o.axis
                    ? [null, t[0]]
                    : [t[0], null])
              : ((n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t),
                (n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t)),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
          );
        },
        X = function (t, o) {
          if (null != t && "undefined" != typeof t) {
            var n = e(this),
              i = n.data(a),
              r = i.opt,
              l = e("#mCSB_" + i.idx + "_container"),
              s = l.parent(),
              c = typeof t;
            o || (o = "x" === r.axis ? "x" : "y");
            var d =
                "x" === o
                  ? l.outerWidth(!1) - s.width()
                  : l.outerHeight(!1) - s.height(),
              f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
              h = "x" === o ? "left" : "top";
            switch (c) {
              case "function":
                return t();
              case "object":
                var m = t.jquery ? t : e(t);
                if (!m.length) return;
                return "x" === o ? ae(m)[1] : ae(m)[0];
              case "string":
              case "number":
                if (oe(t)) return Math.abs(t);
                if (-1 !== t.indexOf("%"))
                  return Math.abs((d * parseInt(t)) / 100);
                if (-1 !== t.indexOf("-="))
                  return Math.abs(f - parseInt(t.split("-=")[1]));
                if (-1 !== t.indexOf("+=")) {
                  var p = f + parseInt(t.split("+=")[1]);
                  return p >= 0 ? 0 : Math.abs(p);
                }
                if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                  return Math.abs(t.split("px")[0]);
                if ("top" === t || "left" === t) return 0;
                if ("bottom" === t)
                  return Math.abs(s.height() - l.outerHeight(!1));
                if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                if ("first" === t || "last" === t) {
                  var m = l.find(":" + t);
                  return "x" === o ? ae(m)[1] : ae(m)[0];
                }
                return e(t).length
                  ? "x" === o
                    ? ae(e(t))[1]
                    : ae(e(t))[0]
                  : (l.css(h, t), void u.update.call(null, n[0]));
            }
          }
        },
        N = function (t) {
          function o() {
            return (
              clearTimeout(f[0].autoUpdate),
              0 === l.parents("html").length
                ? void (l = null)
                : void (f[0].autoUpdate = setTimeout(function () {
                    return c.advanced.updateOnSelectorChange &&
                      ((s.poll.change.n = i()),
                      s.poll.change.n !== s.poll.change.o)
                      ? ((s.poll.change.o = s.poll.change.n), void r(3))
                      : c.advanced.updateOnContentResize &&
                        ((s.poll.size.n =
                          l[0].scrollHeight +
                          l[0].scrollWidth +
                          f[0].offsetHeight +
                          l[0].offsetHeight +
                          l[0].offsetWidth),
                        s.poll.size.n !== s.poll.size.o)
                      ? ((s.poll.size.o = s.poll.size.n), void r(1))
                      : !c.advanced.updateOnImageLoad ||
                        ("auto" === c.advanced.updateOnImageLoad &&
                          "y" === c.axis) ||
                        ((s.poll.img.n = f.find("img").length),
                        s.poll.img.n === s.poll.img.o)
                      ? void (
                          (c.advanced.updateOnSelectorChange ||
                            c.advanced.updateOnContentResize ||
                            c.advanced.updateOnImageLoad) &&
                          o()
                        )
                      : ((s.poll.img.o = s.poll.img.n),
                        void f.find("img").each(function () {
                          n(this);
                        }));
                  }, c.advanced.autoUpdateTimeout))
            );
          }
          function n(t) {
            function o(e, t) {
              return function () {
                return t.apply(e, arguments);
              };
            }
            function a() {
              (this.onload = null), e(t).addClass(d[2]), r(2);
            }
            if (e(t).hasClass(d[2])) return void r();
            var n = new Image();
            (n.onload = o(n, a)), (n.src = t.src);
          }
          function i() {
            c.advanced.updateOnSelectorChange === !0 &&
              (c.advanced.updateOnSelectorChange = "*");
            var e = 0,
              t = f.find(c.advanced.updateOnSelectorChange);
            return (
              c.advanced.updateOnSelectorChange &&
                t.length > 0 &&
                t.each(function () {
                  e += this.offsetHeight + this.offsetWidth;
                }),
              e
            );
          }
          function r(e) {
            clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
          }
          var l = e(this),
            s = l.data(a),
            c = s.opt,
            f = e("#mCSB_" + s.idx + "_container");
          return t
            ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate"))
            : void o();
        },
        V = function (e, t, o) {
          return Math.round(e / t) * t - o;
        },
        Q = function (t) {
          var o = t.data(a),
            n = e(
              "#mCSB_" +
                o.idx +
                "_container,#mCSB_" +
                o.idx +
                "_container_wrapper,#mCSB_" +
                o.idx +
                "_dragger_vertical,#mCSB_" +
                o.idx +
                "_dragger_horizontal"
            );
          n.each(function () {
            Z.call(this);
          });
        },
        G = function (t, o, n) {
          function i(e) {
            return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
          }
          function r() {
            return [
              c.callbacks.alwaysTriggerOffsets || w >= S[0] + y,
              c.callbacks.alwaysTriggerOffsets || -B >= w,
            ];
          }
          function l() {
            var e = [h[0].offsetTop, h[0].offsetLeft],
              o = [x[0].offsetTop, x[0].offsetLeft],
              a = [h.outerHeight(!1), h.outerWidth(!1)],
              i = [f.height(), f.width()];
            t[0].mcs = {
              content: h,
              top: e[0],
              left: e[1],
              draggerTop: o[0],
              draggerLeft: o[1],
              topPct: Math.round(
                (100 * Math.abs(e[0])) / (Math.abs(a[0]) - i[0])
              ),
              leftPct: Math.round(
                (100 * Math.abs(e[1])) / (Math.abs(a[1]) - i[1])
              ),
              direction: n.dir,
            };
          }
          var s = t.data(a),
            c = s.opt,
            d = {
              trigger: "internal",
              dir: "y",
              scrollEasing: "mcsEaseOut",
              drag: !1,
              dur: c.scrollInertia,
              overwrite: "all",
              callbacks: !0,
              onStart: !0,
              onUpdate: !0,
              onComplete: !0,
            },
            n = e.extend(d, n),
            u = [n.dur, n.drag ? 0 : n.dur],
            f = e("#mCSB_" + s.idx),
            h = e("#mCSB_" + s.idx + "_container"),
            m = h.parent(),
            p = c.callbacks.onTotalScrollOffset
              ? Y.call(t, c.callbacks.onTotalScrollOffset)
              : [0, 0],
            g = c.callbacks.onTotalScrollBackOffset
              ? Y.call(t, c.callbacks.onTotalScrollBackOffset)
              : [0, 0];
          if (
            ((s.trigger = n.trigger),
            (0 === m.scrollTop() && 0 === m.scrollLeft()) ||
              (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
              m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o ||
              s.contentReset.y ||
              (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
              (s.contentReset.y = 1)),
            "_resetX" !== o ||
              s.contentReset.x ||
              (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
              (s.contentReset.x = 1)),
            "_resetY" !== o && "_resetX" !== o)
          ) {
            if (
              ((!s.contentReset.y && t[0].mcs) ||
                !s.overflowed[0] ||
                (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                (s.contentReset.x = null)),
              (!s.contentReset.x && t[0].mcs) ||
                !s.overflowed[1] ||
                (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                (s.contentReset.x = null)),
              c.snapAmount)
            ) {
              var v =
                c.snapAmount instanceof Array
                  ? "x" === n.dir
                    ? c.snapAmount[1]
                    : c.snapAmount[0]
                  : c.snapAmount;
              o = V(o, v, c.snapOffset);
            }
            switch (n.dir) {
              case "x":
                var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                  _ = "left",
                  w = h[0].offsetLeft,
                  S = [
                    f.width() - h.outerWidth(!1),
                    x.parent().width() - x.width(),
                  ],
                  b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                  y = p[1],
                  B = g[1],
                  T = y > 0 ? y / s.scrollRatio.x : 0,
                  k = B > 0 ? B / s.scrollRatio.x : 0;
                break;
              case "y":
                var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                  _ = "top",
                  w = h[0].offsetTop,
                  S = [
                    f.height() - h.outerHeight(!1),
                    x.parent().height() - x.height(),
                  ],
                  b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                  y = p[0],
                  B = g[0],
                  T = y > 0 ? y / s.scrollRatio.y : 0,
                  k = B > 0 ? B / s.scrollRatio.y : 0;
            }
            b[1] < 0 || (0 === b[0] && 0 === b[1])
              ? (b = [0, 0])
              : b[1] >= S[1]
              ? (b = [S[0], S[1]])
              : (b[0] = -b[0]),
              t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])),
              clearTimeout(h[0].onCompleteTimeout),
              J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
              (!s.tweenRunning &&
                ((0 === w && b[0] >= 0) || (w === S[0] && b[0] <= S[0]))) ||
                J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                  onStart: function () {
                    n.callbacks &&
                      n.onStart &&
                      !s.tweenRunning &&
                      (i("onScrollStart") &&
                        (l(), c.callbacks.onScrollStart.call(t[0])),
                      (s.tweenRunning = !0),
                      C(x),
                      (s.cbOffsets = r()));
                  },
                  onUpdate: function () {
                    n.callbacks &&
                      n.onUpdate &&
                      i("whileScrolling") &&
                      (l(), c.callbacks.whileScrolling.call(t[0]));
                  },
                  onComplete: function () {
                    if (n.callbacks && n.onComplete) {
                      "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                      var e = h[0].idleTimer || 0;
                      h[0].onCompleteTimeout = setTimeout(function () {
                        i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])),
                          i("onTotalScroll") &&
                            b[1] >= S[1] - T &&
                            s.cbOffsets[0] &&
                            (l(), c.callbacks.onTotalScroll.call(t[0])),
                          i("onTotalScrollBack") &&
                            b[1] <= k &&
                            s.cbOffsets[1] &&
                            (l(), c.callbacks.onTotalScrollBack.call(t[0])),
                          (s.tweenRunning = !1),
                          (h[0].idleTimer = 0),
                          C(x, "hide");
                      }, e);
                    }
                  },
                });
          }
        },
        J = function (e, t, o, a, n, i, r) {
          function l() {
            S.stop ||
              (x || m.call(),
              (x = K() - v),
              s(),
              x >= S.time &&
                ((S.time = x > S.time ? x + f - (x - S.time) : x + f - 1),
                S.time < x + 1 && (S.time = x + 1)),
              S.time < a ? (S.id = h(l)) : g.call());
          }
          function s() {
            a > 0
              ? ((S.currVal = u(S.time, _, b, a, n)),
                (w[t] = Math.round(S.currVal) + "px"))
              : (w[t] = o + "px"),
              p.call();
          }
          function c() {
            (f = 1e3 / 60),
              (S.time = x + f),
              (h = window.requestAnimationFrame
                ? window.requestAnimationFrame
                : function (e) {
                    return s(), setTimeout(e, 0.01);
                  }),
              (S.id = h(l));
          }
          function d() {
            null != S.id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(S.id)
                : clearTimeout(S.id),
              (S.id = null));
          }
          function u(e, t, o, a, n) {
            switch (n) {
              case "linear":
              case "mcsLinear":
                return (o * e) / a + t;
              case "mcsLinearOut":
                return (e /= a), e--, o * Math.sqrt(1 - e * e) + t;
              case "easeInOutSmooth":
                return (
                  (e /= a / 2),
                  1 > e
                    ? (o / 2) * e * e + t
                    : (e--, (-o / 2) * (e * (e - 2) - 1) + t)
                );
              case "easeInOutStrong":
                return (
                  (e /= a / 2),
                  1 > e
                    ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
                    : (e--, (o / 2) * (-Math.pow(2, -10 * e) + 2) + t)
                );
              case "easeInOut":
              case "mcsEaseInOut":
                return (
                  (e /= a / 2),
                  1 > e
                    ? (o / 2) * e * e * e + t
                    : ((e -= 2), (o / 2) * (e * e * e + 2) + t)
                );
              case "easeOutSmooth":
                return (e /= a), e--, -o * (e * e * e * e - 1) + t;
              case "easeOutStrong":
                return o * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              case "easeOut":
              case "mcsEaseOut":
              default:
                var i = (e /= a) * e,
                  r = i * e;
                return (
                  t +
                  o *
                    (0.499999999999997 * r * i +
                      -2.5 * i * i +
                      5.5 * r +
                      -6.5 * i +
                      4 * e)
                );
            }
          }
          e._mTween || (e._mTween = { top: {}, left: {} });
          var f,
            h,
            r = r || {},
            m = r.onStart || function () {},
            p = r.onUpdate || function () {},
            g = r.onComplete || function () {},
            v = K(),
            x = 0,
            _ = e.offsetTop,
            w = e.style,
            S = e._mTween[t];
          "left" === t && (_ = e.offsetLeft);
          var b = o - _;
          (S.stop = 0), "none" !== i && d(), c();
        },
        K = function () {
          return window.performance && window.performance.now
            ? window.performance.now()
            : window.performance && window.performance.webkitNow
            ? window.performance.webkitNow()
            : Date.now
            ? Date.now()
            : new Date().getTime();
        },
        Z = function () {
          var e = this;
          e._mTween || (e._mTween = { top: {}, left: {} });
          for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var a = t[o];
            e._mTween[a].id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(e._mTween[a].id)
                : clearTimeout(e._mTween[a].id),
              (e._mTween[a].id = null),
              (e._mTween[a].stop = 1));
          }
        },
        $ = function (e, t) {
          try {
            delete e[t];
          } catch (o) {
            e[t] = null;
          }
        },
        ee = function (e) {
          return !(e.which && 1 !== e.which);
        },
        te = function (e) {
          var t = e.originalEvent.pointerType;
          return !(t && "touch" !== t && 2 !== t);
        },
        oe = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        ae = function (e) {
          var t = e.parents(".mCSB_container");
          return [
            e.offset().top - t.offset().top,
            e.offset().left - t.offset().left,
          ];
        },
        ne = function () {
          function e() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
              if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null;
          }
          var t = e();
          return t ? document[t] : !1;
        };
      (e.fn[o] = function (t) {
        return u[t]
          ? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof t && t
          ? void e.error("Method " + t + " does not exist")
          : u.init.apply(this, arguments);
      }),
        (e[o] = function (t) {
          return u[t]
            ? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof t && t
            ? void e.error("Method " + t + " does not exist")
            : u.init.apply(this, arguments);
        }),
        (e[o].defaults = i),
        (window[o] = !0),
        e(window).bind("load", function () {
          e(n)[o](),
            e.extend(e.expr[":"], {
              mcsInView:
                e.expr[":"].mcsInView ||
                function (t) {
                  var o,
                    a,
                    n = e(t),
                    i = n.parents(".mCSB_container");
                  if (i.length)
                    return (
                      (o = i.parent()),
                      (a = [i[0].offsetTop, i[0].offsetLeft]),
                      a[0] + ae(n)[0] >= 0 &&
                        a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) &&
                        a[1] + ae(n)[1] >= 0 &&
                        a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                    );
                },
              mcsInSight:
                e.expr[":"].mcsInSight ||
                function (t, o, a) {
                  var n,
                    i,
                    r,
                    l,
                    s = e(t),
                    c = s.parents(".mCSB_container"),
                    d =
                      "exact" === a[3]
                        ? [
                            [1, 0],
                            [1, 0],
                          ]
                        : [
                            [0.9, 0.1],
                            [0.6, 0.4],
                          ];
                  if (c.length)
                    return (
                      (n = [s.outerHeight(!1), s.outerWidth(!1)]),
                      (r = [
                        c[0].offsetTop + ae(s)[0],
                        c[0].offsetLeft + ae(s)[1],
                      ]),
                      (i = [
                        c.parent()[0].offsetHeight,
                        c.parent()[0].offsetWidth,
                      ]),
                      (l = [
                        n[0] < i[0] ? d[0] : d[1],
                        n[1] < i[1] ? d[0] : d[1],
                      ]),
                      r[0] - i[0] * l[0][0] < 0 &&
                        r[0] + n[0] - i[0] * l[0][1] >= 0 &&
                        r[1] - i[1] * l[1][0] < 0 &&
                        r[1] + n[1] - i[1] * l[1][1] >= 0
                    );
                },
              mcsOverflow:
                e.expr[":"].mcsOverflow ||
                function (t) {
                  var o = e(t).data(a);
                  if (o) return o.overflowed[0] || o.overflowed[1];
                },
            });
        });
    });
  });
  (function () {
    var t,
      e,
      n,
      i,
      o,
      r = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      s =
        [].indexOf ||
        function (t) {
          for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var n, i;
          for (n in e) (i = e[n]), null == t[n] && (t[n] = i);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        (t.prototype.createEvent = function (t, e, n, i) {
          var o;
          return (
            null == e && (e = !1),
            null == n && (n = !1),
            null == i && (i = null),
            null != document.createEvent
              ? (o = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  e,
                  n,
                  i
                )
              : null != document.createEventObject
              ? ((o = document.createEventObject()).eventType = t)
              : (o.eventName = t),
            o
          );
        }),
        (t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent
            ? t.dispatchEvent(e)
            : e in (null != t)
            ? t[e]()
            : "on" + e in (null != t)
            ? t["on" + e]()
            : void 0;
        }),
        (t.prototype.addEvent = function (t, e, n) {
          return null != t.addEventListener
            ? t.addEventListener(e, n, !1)
            : null != t.attachEvent
            ? t.attachEvent("on" + e, n)
            : (t[e] = n);
        }),
        (t.prototype.removeEvent = function (t, e, n) {
          return null != t.removeEventListener
            ? t.removeEventListener(e, n, !1)
            : null != t.detachEvent
            ? t.detachEvent("on" + e, n)
            : delete t[e];
        }),
        (t.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        t
      );
    })()),
      (n =
        this.WeakMap ||
        this.MozWeakMap ||
        (n = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, n, i, o;
              for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                if (o[e] === t) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var n, i, o, r;
              for (n = i = 0, o = (r = this.keys).length; o > i; n = ++i)
                if (r[n] === t) return void (this.values[n] = e);
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (t =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (t = (function () {
          function t() {
            "undefined" != typeof console &&
              null !== console &&
              console.warn("MutationObserver is not supported by your browser."),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                );
          }
          return (t.notSupported = !0), (t.prototype.observe = function () {}), t;
        })())),
      (i =
        this.getComputedStyle ||
        function (t, e) {
          return (
            (this.getPropertyValue = function (e) {
              var n;
              return (
                "float" === e && (e = "styleFloat"),
                o.test(e) &&
                  e.replace(o, function (t, e) {
                    return e.toUpperCase();
                  }),
                (null != (n = t.currentStyle) ? n[e] : void 0) || null
              );
            }),
            this
          );
        }),
      (o = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function o(t) {
          null == t && (t = {}),
            (this.scrollCallback = r(this.scrollCallback, this)),
            (this.scrollHandler = r(this.scrollHandler, this)),
            (this.resetAnimation = r(this.resetAnimation, this)),
            (this.start = r(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            null != t.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                t.scrollContainer
              )),
            (this.animationNameCache = new n()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (o.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : this.util().addEvent(document, "DOMContentLoaded", this.start),
              (this.finished = [])
            );
          }),
          (o.prototype.start = function () {
            var e, n, i, o;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, n, i, o;
                for (
                  o = [],
                    t = 0,
                    n = (i = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    )).length;
                  n > t;
                  t++
                )
                  (e = i[t]), o.push(e);
                return o;
              }.call(this)),
              (this.all = function () {
                var t, n, i, o;
                for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++)
                  (e = i[t]), o.push(e);
                return o;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (n = 0, i = (o = this.boxes).length; i > n; n++)
                  (e = o[n]), this.applyStyle(e, !0);
            return (
              this.disabled() ||
                (this.util().addEvent(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live
                ? new t(
                    (function (t) {
                      return function (e) {
                        var n, i, o, r, s;
                        for (s = [], n = 0, i = e.length; i > n; n++)
                          (r = e[n]),
                            s.push(
                              function () {
                                var t, e, n, i;
                                for (
                                  i = [],
                                    t = 0,
                                    e = (n = r.addedNodes || []).length;
                                  e > t;
                                  t++
                                )
                                  (o = n[t]), i.push(this.doSync(o));
                                return i;
                              }.call(t)
                            );
                        return s;
                      };
                    })(this)
                  ).observe(document.body, { childList: !0, subtree: !0 })
                : void 0
            );
          }),
          (o.prototype.stop = function () {
            return (
              (this.stopped = !0),
              this.util().removeEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval ? clearInterval(this.interval) : void 0
            );
          }),
          (o.prototype.sync = function (e) {
            return t.notSupported ? this.doSync(this.element) : void 0;
          }),
          (o.prototype.doSync = function (t) {
            var e, n, i, o, r;
            if ((null == t && (t = this.element), 1 === t.nodeType)) {
              for (
                r = [],
                  n = 0,
                  i = (o = (t = t.parentNode || t).querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                i > n;
                n++
              )
                (e = o[n]),
                  s.call(this.all, e) < 0
                    ? (this.boxes.push(e),
                      this.all.push(e),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(e, !0),
                      r.push((this.scrolled = !0)))
                    : r.push(void 0);
              return r;
            }
          }),
          (o.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(t),
              this.util().emitEvent(t, this.wowEvent),
              this.util().addEvent(t, "animationend", this.resetAnimation),
              this.util().addEvent(t, "oanimationend", this.resetAnimation),
              this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
              this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
              t
            );
          }),
          (o.prototype.applyStyle = function (t, e) {
            var n, i, o, r;
            return (
              (i = t.getAttribute("data-wow-duration")),
              (n = t.getAttribute("data-wow-delay")),
              (o = t.getAttribute("data-wow-iteration")),
              this.animate(
                ((r = this),
                function () {
                  return r.customStyle(t, e, i, n, o);
                })
              )
            );
          }),
          (o.prototype.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (o.prototype.resetStyle = function () {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)
              (t = i[e]), o.push((t.style.visibility = "visible"));
            return o;
          }),
          (o.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0
              ? ((e = t.target || t.srcElement).className = e.className
                  .replace(this.config.animateClass, "")
                  .trim())
              : void 0;
          }),
          (o.prototype.customStyle = function (t, e, n, i, o) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              n && this.vendorSet(t.style, { animationDuration: n }),
              i && this.vendorSet(t.style, { animationDelay: i }),
              o && this.vendorSet(t.style, { animationIterationCount: o }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (o.prototype.vendors = ["moz", "webkit"]),
          (o.prototype.vendorSet = function (t, e) {
            var n, i, o, r;
            for (n in ((i = []), e))
              (o = e[n]),
                (t["" + n] = o),
                i.push(
                  function () {
                    var e, i, s, l;
                    for (l = [], e = 0, i = (s = this.vendors).length; i > e; e++)
                      (r = s[e]),
                        l.push(
                          (t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] =
                            o)
                        );
                    return l;
                  }.call(this)
                );
            return i;
          }),
          (o.prototype.vendorCSS = function (t, e) {
            var n, o, r, s, l, a;
            for (
              s = (l = i(t)).getPropertyCSSValue(e),
                n = 0,
                o = (r = this.vendors).length;
              o > n;
              n++
            )
              (a = r[n]), (s = s || l.getPropertyCSSValue("-" + a + "-" + e));
            return s;
          }),
          (o.prototype.animationName = function (t) {
            var e;
            try {
              e = this.vendorCSS(t, "animation-name").cssText;
            } catch (n) {
              e = i(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
          }),
          (o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (o.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (o.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled ||
              ((this.scrolled = !1),
              (this.boxes = function () {
                var e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)
                  (t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o;
              }.call(this)),
              this.boxes.length || this.config.live)
              ? void 0
              : this.stop();
          }),
          (o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (o.prototype.isVisible = function (t) {
            var e, n, i, o, r;
            return (
              (n = t.getAttribute("data-wow-offset") || this.config.offset),
              (o =
                (r =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset) +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                n),
              (e = (i = this.offsetTop(t)) + t.clientHeight),
              o >= i && e >= r
            );
          }),
          (o.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (o.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          (o.prototype.removeBox = function (t) {
            var e = this.boxes.indexOf(t);
            e > -1 && this.boxes.splice(e, 1);
          }),
          o
        );
      })());
  }).call(this);
  