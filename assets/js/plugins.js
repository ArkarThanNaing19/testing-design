(function () {
  for (
    var o,
      p = function () {},
      i = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      s = i.length,
      l = (window.console = window.console || {});
    s--;

  )
    (o = i[s]), l[o] || (l[o] = p);
})(),
  (function (o) {
    "use strict";
    o.fn.meanmenu = function (p) {
      var i = {
        meanMenuTarget: jQuery(this),
        meanMenuContainer: "body",
        meanMenuClose: "X",
        meanMenuCloseSize: "18px",
        meanMenuOpen: "<span /><span /><span />",
        meanRevealPosition: "right",
        meanRevealPositionDistance: "0",
        meanRevealColour: "",
        meanScreenWidth: "480",
        meanNavPush: "",
        meanShowChildren: !0,
        meanExpandableChildren: !0,
        meanExpand: "+",
        meanContract: "-",
        meanRemoveAttrs: !1,
        onePage: !1,
        meanDisplay: "block",
        removeElements: "",
      };
      p = o.extend(i, p);
      var s = window.innerWidth || document.documentElement.clientWidth;
      return this.each(function () {
        var l = p.meanMenuTarget,
          n = p.meanMenuContainer,
          t = p.meanMenuClose,
          e = p.meanMenuCloseSize,
          r = p.meanMenuOpen,
          a = p.meanRevealPosition,
          d = p.meanRevealPositionDistance,
          u = p.meanRevealColour,
          h = p.meanScreenWidth,
          g = p.meanNavPush,
          v = ".meanmenu-reveal",
          m = p.meanShowChildren,
          c = p.meanExpandableChildren,
          f = p.meanExpand,
          y = p.meanContract,
          b = p.meanRemoveAttrs,
          k = p.onePage,
          C = p.meanDisplay,
          S = p.removeElements,
          E = !1;
        (navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/Blackberry/i) ||
          navigator.userAgent.match(/Windows Phone/i)) &&
          (E = !0),
          (navigator.userAgent.match(/MSIE 8/i) ||
            navigator.userAgent.match(/MSIE 7/i)) &&
            jQuery("html").css("overflow-y", "scroll");
        var M = "",
          V = function () {
            if (a === "center") {
              var ht =
                  window.innerWidth || document.documentElement.clientWidth,
                Jt = ht / 2 - 22 + "px";
              (M = "left:" + Jt + ";right:auto;"),
                E
                  ? jQuery(".meanmenu-reveal").animate({
                      left: Jt,
                    })
                  : jQuery(".meanmenu-reveal").css("left", Jt);
            }
          },
          st = !1,
          gt = !1;
        a === "right" && (M = "right:" + d + ";left:auto;"),
          a === "left" && (M = "left:" + d + ";right:auto;"),
          V();
        var yt = "",
          Lt = function () {
            yt.html(jQuery(yt).is(".meanmenu-reveal.meanclose") ? t : r);
          },
          pt = function () {
            jQuery(".mean-bar,.mean-push").remove(),
              jQuery(n).removeClass("mean-container"),
              jQuery(l).css("display", C),
              (st = !1),
              (gt = !1),
              jQuery(S).removeClass("mean-remove");
          },
          kt = function () {
            var ht = "background:" + u + ";color:" + u + ";" + M;
            if (h >= s) {
              jQuery(S).addClass("mean-remove"),
                (gt = !0),
                jQuery(n).addClass("mean-container"),
                jQuery(".mean-container").prepend(
                  '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                    ht +
                    '">Show Navigation</a><nav class="mean-nav"></nav></div>'
                );
              var Jt = jQuery(l).html();
              jQuery(".mean-nav").html(Jt),
                b &&
                  jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(
                    function () {
                      jQuery(this).is(".mean-remove")
                        ? jQuery(this).attr("class", "mean-remove")
                        : jQuery(this).removeAttr("class"),
                        jQuery(this).removeAttr("id");
                    }
                  ),
                jQuery(l).before('<div class="mean-push" />'),
                jQuery(".mean-push").css("margin-top", g),
                jQuery(l).hide(),
                jQuery(".meanmenu-reveal").show(),
                jQuery(v).html(r),
                (yt = jQuery(v)),
                jQuery(".mean-nav ul").hide(),
                m
                  ? c
                    ? (jQuery(".mean-nav ul ul").each(function () {
                        jQuery(this).children().length &&
                          jQuery(this, "li:first")
                            .parent()
                            .append(
                              '<a class="mean-expand" href="#" style="font-size: ' +
                                e +
                                '">' +
                                f +
                                "</a>"
                            );
                      }),
                      jQuery(".mean-expand").on("click", function (It) {
                        It.preventDefault(),
                          jQuery(this).hasClass("mean-clicked")
                            ? (jQuery(this).text(f),
                              jQuery(this)
                                .prev("ul")
                                .slideUp(300, function () {}))
                            : (jQuery(this).text(y),
                              jQuery(this)
                                .prev("ul")
                                .slideDown(300, function () {})),
                          jQuery(this).toggleClass("mean-clicked");
                      }))
                    : jQuery(".mean-nav ul ul").show()
                  : jQuery(".mean-nav ul ul").hide(),
                jQuery(".mean-nav ul li").last().addClass("mean-last"),
                yt.removeClass("meanclose"),
                jQuery(yt).click(function (It) {
                  It.preventDefault(),
                    st === !1
                      ? (yt.css("text-align", "center"),
                        yt.css("text-indent", "0"),
                        yt.css("font-size", e),
                        jQuery(".mean-nav ul:first").slideDown(),
                        (st = !0))
                      : (jQuery(".mean-nav ul:first").slideUp(), (st = !1)),
                    yt.toggleClass("meanclose"),
                    Lt(),
                    jQuery(S).addClass("mean-remove");
                }),
                k &&
                  jQuery(".mean-nav ul > li > a:first-child").on(
                    "click",
                    function () {
                      jQuery(".mean-nav ul:first").slideUp(),
                        (st = !1),
                        jQuery(yt).toggleClass("meanclose").html(r);
                    }
                  );
            } else pt();
          };
        E ||
          jQuery(window).resize(function () {
            (s = window.innerWidth || document.documentElement.clientWidth),
              s > h,
              pt(),
              h >= s ? (kt(), V()) : pt();
          }),
          jQuery(window).resize(function () {
            (s = window.innerWidth || document.documentElement.clientWidth),
              E
                ? (V(), h >= s ? gt === !1 && kt() : pt())
                : (pt(), h >= s && (kt(), V()));
          }),
          kt();
      });
    };
  })(jQuery);
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear Ã¢â‚¬â€ @markgdyr Ã¢â‚¬â€ http://markgoodyear.com
 * License: MIT
 */
(function (o, p, i) {
  "use strict";
  (o.fn.scrollUp = function (s) {
    o.data(i.body, "scrollUp") ||
      (o.data(i.body, "scrollUp", !0), o.fn.scrollUp.init(s));
  }),
    (o.fn.scrollUp.init = function (s) {
      var l,
        n,
        t,
        e,
        r,
        a,
        d,
        u = (o.fn.scrollUp.settings = o.extend({}, o.fn.scrollUp.defaults, s)),
        h = !1;
      switch (
        ((d = u.scrollTrigger
          ? o(u.scrollTrigger)
          : o("<a/>", {
              id: u.scrollName,
              href: "#top",
            })),
        u.scrollTitle && d.attr("title", u.scrollTitle),
        d.appendTo("body"),
        u.scrollImg || u.scrollTrigger || d.html(u.scrollText),
        d.css({
          display: "none",
          position: "fixed",
          zIndex: u.zIndex,
        }),
        u.activeOverlay &&
          o("<div/>", {
            id: u.scrollName + "-active",
          })
            .css({
              position: "absolute",
              top: u.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + u.activeOverlay,
              zIndex: u.zIndex,
            })
            .appendTo("body"),
        u.animation)
      ) {
        case "fade":
          (l = "fadeIn"), (n = "fadeOut"), (t = u.animationSpeed);
          break;
        case "slide":
          (l = "slideDown"), (n = "slideUp"), (t = u.animationSpeed);
          break;
        default:
          (l = "show"), (n = "hide"), (t = 0);
      }
      (e =
        u.scrollFrom === "top"
          ? u.scrollDistance
          : o(i).height() - o(p).height() - u.scrollDistance),
        (r = o(p).scroll(function () {
          o(p).scrollTop() > e
            ? h || (d[l](t), (h = !0))
            : h && (d[n](t), (h = !1));
        })),
        u.scrollTarget
          ? typeof u.scrollTarget == "number"
            ? (a = u.scrollTarget)
            : typeof u.scrollTarget == "string" &&
              (a = Math.floor(o(u.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (g) {
          g.preventDefault(),
            o("html, body").animate(
              {
                scrollTop: a,
              },
              u.scrollSpeed,
              u.easingType
            );
        });
    }),
    (o.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (o.fn.scrollUp.destroy = function (s) {
      o.removeData(i.body, "scrollUp"),
        o("#" + o.fn.scrollUp.settings.scrollName).remove(),
        o("#" + o.fn.scrollUp.settings.scrollName + "-active").remove(),
        o.fn.jquery.split(".")[1] >= 7
          ? o(p).off("scroll", s)
          : o(p).unbind("scroll", s);
    }),
    (o.scrollUp = o.fn.scrollUp);
})(jQuery, window, document);
/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function () {
  "use strict";

  function o(s) {
    if (!s) throw new Error("No options passed to Waypoint constructor");
    if (!s.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!s.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + p),
      (this.options = o.Adapter.extend({}, o.defaults, s)),
      (this.element = this.options.element),
      (this.adapter = new o.Adapter(this.element)),
      (this.callback = s.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = o.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = o.Context.findOrCreateByElement(this.options.context)),
      o.offsetAliases[this.options.offset] &&
        (this.options.offset = o.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (p += 1);
  }
  var p = 0,
    i = {};
  (o.prototype.queueTrigger = function (s) {
    this.group.queueTrigger(this, s);
  }),
    (o.prototype.trigger = function (s) {
      this.enabled && this.callback && this.callback.apply(this, s);
    }),
    (o.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (o.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (o.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (o.prototype.next = function () {
      return this.group.next(this);
    }),
    (o.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (o.invokeAll = function (s) {
      var l = [];
      for (var n in i) l.push(i[n]);
      for (var t = 0, e = l.length; e > t; t++) l[t][s]();
    }),
    (o.destroyAll = function () {
      o.invokeAll("destroy");
    }),
    (o.disableAll = function () {
      o.invokeAll("disable");
    }),
    (o.enableAll = function () {
      o.Context.refreshAll();
      for (var s in i) i[s].enabled = !0;
      return this;
    }),
    (o.refreshAll = function () {
      o.Context.refreshAll();
    }),
    (o.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (o.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (o.adapters = []),
    (o.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (o.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = o);
})(),
  (function () {
    "use strict";

    function o(t) {
      window.setTimeout(t, 1e3 / 60);
    }

    function p(t) {
      (this.element = t),
        (this.Adapter = l.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = {
          vertical: {},
          horizontal: {},
        }),
        (t.waypointContextKey = this.key),
        (s[t.waypointContextKey] = this),
        (i += 1),
        l.windowContext ||
          ((l.windowContext = !0), (l.windowContext = new p(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      s = {},
      l = window.Waypoint,
      n = window.onload;
    (p.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (p.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          r = this.element == this.element.window;
        t && e && !r && (this.adapter.off(".waypoints"), delete s[this.key]);
      }),
      (p.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), l.requestAnimationFrame(t));
        });
      }),
      (p.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || l.isTouch) &&
            ((e.didScroll = !0), l.requestAnimationFrame(t));
        });
      }),
      (p.prototype.handleResize = function () {
        l.Context.refreshAll();
      }),
      (p.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var r in e) {
          var a = e[r],
            d = a.newScroll > a.oldScroll,
            u = d ? a.forward : a.backward;
          for (var h in this.waypoints[r]) {
            var g = this.waypoints[r][h];
            if (g.triggerPoint !== null) {
              var v = a.oldScroll < g.triggerPoint,
                m = a.newScroll >= g.triggerPoint,
                c = v && m,
                f = !v && !m;
              (c || f) && (g.queueTrigger(u), (t[g.group.id] = g.group));
            }
          }
        }
        for (var y in t) t[y].flushTriggers();
        this.oldScroll = {
          x: e.horizontal.newScroll,
          y: e.vertical.newScroll,
        };
      }),
      (p.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? l.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (p.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (p.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? l.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (p.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var r in this.waypoints[e]) t.push(this.waypoints[e][r]);
        for (var a = 0, d = t.length; d > a; a++) t[a].destroy();
      }),
      (p.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          r = e ? void 0 : this.adapter.offset(),
          a = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : r.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : r.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var d in t) {
          var u = t[d];
          for (var h in this.waypoints[d]) {
            var g,
              v,
              m,
              c,
              f,
              y = this.waypoints[d][h],
              b = y.options.offset,
              k = y.triggerPoint,
              C = 0,
              S = k == null;
            y.element !== y.element.window &&
              (C = y.adapter.offset()[u.offsetProp]),
              typeof b == "function"
                ? (b = b.apply(y))
                : typeof b == "string" &&
                  ((b = parseFloat(b)),
                  y.options.offset.indexOf("%") > -1 &&
                    (b = Math.ceil((u.contextDimension * b) / 100))),
              (g = u.contextScroll - u.contextOffset),
              (y.triggerPoint = Math.floor(C + g - b)),
              (v = k < u.oldScroll),
              (m = y.triggerPoint >= u.oldScroll),
              (c = v && m),
              (f = !v && !m),
              !S && c
                ? (y.queueTrigger(u.backward), (a[y.group.id] = y.group))
                : ((!S && f) || (S && u.oldScroll >= y.triggerPoint)) &&
                  (y.queueTrigger(u.forward), (a[y.group.id] = y.group));
          }
        }
        return (
          l.requestAnimationFrame(function () {
            for (var E in a) a[E].flushTriggers();
          }),
          this
        );
      }),
      (p.findOrCreateByElement = function (t) {
        return p.findByElement(t) || new p(t);
      }),
      (p.refreshAll = function () {
        for (var t in s) s[t].refresh();
      }),
      (p.findByElement = function (t) {
        return s[t.waypointContextKey];
      }),
      (window.onload = function () {
        n && n(), p.refreshAll();
      }),
      (l.requestAnimationFrame = function (t) {
        var e =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          o;
        e.call(window, t);
      }),
      (l.Context = p);
  })(),
  (function () {
    "use strict";

    function o(n, t) {
      return n.triggerPoint - t.triggerPoint;
    }

    function p(n, t) {
      return t.triggerPoint - n.triggerPoint;
    }

    function i(n) {
      (this.name = n.name),
        (this.axis = n.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (s[this.axis][this.name] = this);
    }
    var s = {
        vertical: {},
        horizontal: {},
      },
      l = window.Waypoint;
    (i.prototype.add = function (n) {
      this.waypoints.push(n);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
          up: [],
          down: [],
          left: [],
          right: [],
        };
      }),
      (i.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
          var t = this.triggerQueues[n],
            e = n === "up" || n === "left";
          t.sort(e ? p : o);
          for (var r = 0, a = t.length; a > r; r += 1) {
            var d = t[r];
            (d.options.continuous || r === t.length - 1) && d.trigger([n]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (n) {
        this.waypoints.sort(o);
        var t = l.Adapter.inArray(n, this.waypoints),
          e = t === this.waypoints.length - 1;
        return e ? null : this.waypoints[t + 1];
      }),
      (i.prototype.previous = function (n) {
        this.waypoints.sort(o);
        var t = l.Adapter.inArray(n, this.waypoints);
        return t ? this.waypoints[t - 1] : null;
      }),
      (i.prototype.queueTrigger = function (n, t) {
        this.triggerQueues[t].push(n);
      }),
      (i.prototype.remove = function (n) {
        var t = l.Adapter.inArray(n, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (n) {
        return s[n.axis][n.name] || new i(n);
      }),
      (l.Group = i);
  })(),
  (function () {
    "use strict";

    function o(s) {
      this.$element = p(s);
    }
    var p = window.jQuery,
      i = window.Waypoint;
    p.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (s, l) {
        o.prototype[l] = function () {
          var n = Array.prototype.slice.call(arguments);
          return this.$element[l].apply(this.$element, n);
        };
      }
    ),
      p.each(["extend", "inArray", "isEmptyObject"], function (s, l) {
        o[l] = p[l];
      }),
      i.adapters.push({
        name: "jquery",
        Adapter: o,
      }),
      (i.Adapter = o);
  })(),
  (function () {
    "use strict";

    function o(i) {
      return function () {
        var s = [],
          l = arguments[0];
        return (
          i.isFunction(arguments[0]) &&
            ((l = i.extend({}, arguments[1])), (l.handler = arguments[0])),
          this.each(function () {
            var n = i.extend({}, l, {
              element: this,
            });
            typeof n.context == "string" &&
              (n.context = i(this).closest(n.context)[0]),
              s.push(new p(n));
          }),
          s
        );
      };
    }
    var p = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = o(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = o(window.Zepto));
  })();
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
  var o,
    p,
    i,
    s,
    l,
    n = function (e, r) {
      return function () {
        return e.apply(r, arguments);
      };
    },
    t =
      [].indexOf ||
      function (e) {
        for (var r = 0, a = this.length; a > r; r++)
          if (r in this && this[r] === e) return r;
        return -1;
      };
  (p = (function () {
    function e() {}
    return (
      (e.prototype.extend = function (r, a) {
        var d, u;
        for (d in a) (u = a[d]), r[d] == null && (r[d] = u);
        return r;
      }),
      (e.prototype.isMobile = function (r) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          r
        );
      }),
      (e.prototype.createEvent = function (r, a, d, u) {
        var h;
        return (
          a == null && (a = !1),
          d == null && (d = !1),
          u == null && (u = null),
          document.createEvent != null
            ? ((h = document.createEvent("CustomEvent")),
              h.initCustomEvent(r, a, d, u))
            : document.createEventObject != null
            ? ((h = document.createEventObject()), (h.eventType = r))
            : (h.eventName = r),
          h
        );
      }),
      (e.prototype.emitEvent = function (r, a) {
        return r.dispatchEvent != null
          ? r.dispatchEvent(a)
          : a in (r != null)
          ? r[a]()
          : "on" + a in (r != null)
          ? r["on" + a]()
          : void 0;
      }),
      (e.prototype.addEvent = function (r, a, d) {
        return r.addEventListener != null
          ? r.addEventListener(a, d, !1)
          : r.attachEvent != null
          ? r.attachEvent("on" + a, d)
          : (r[a] = d);
      }),
      (e.prototype.removeEvent = function (r, a, d) {
        return r.removeEventListener != null
          ? r.removeEventListener(a, d, !1)
          : r.detachEvent != null
          ? r.detachEvent("on" + a, d)
          : delete r[a];
      }),
      (e.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      e
    );
  })()),
    (i =
      this.WeakMap ||
      this.MozWeakMap ||
      (i = (function () {
        function e() {
          (this.keys = []), (this.values = []);
        }
        return (
          (e.prototype.get = function (r) {
            var a, d, u, h, g;
            for (g = this.keys, a = u = 0, h = g.length; h > u; a = ++u)
              if (((d = g[a]), d === r)) return this.values[a];
          }),
          (e.prototype.set = function (r, a) {
            var d, u, h, g, v;
            for (v = this.keys, d = h = 0, g = v.length; g > h; d = ++h)
              if (((u = v[d]), u === r)) return void (this.values[d] = a);
            return this.keys.push(r), this.values.push(a);
          }),
          e
        );
      })())),
    (o =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (o = (function () {
        function e() {
          typeof console != "undefined" &&
            console !== null &&
            console.warn("MutationObserver is not supported by your browser."),
            typeof console != "undefined" &&
              console !== null &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (e.notSupported = !0), (e.prototype.observe = function () {}), e;
      })())),
    (s =
      this.getComputedStyle ||
      function (e, r) {
        return (
          (this.getPropertyValue = function (a) {
            var d;
            return (
              a === "float" && (a = "styleFloat"),
              l.test(a) &&
                a.replace(l, function (u, h) {
                  return h.toUpperCase();
                }),
              ((d = e.currentStyle) != null ? d[a] : void 0) || null
            );
          }),
          this
        );
      }),
    (l = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(r) {
        r == null && (r = {}),
          (this.scrollCallback = n(this.scrollCallback, this)),
          (this.scrollHandler = n(this.scrollHandler, this)),
          (this.resetAnimation = n(this.resetAnimation, this)),
          (this.start = n(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(r, this.defaults)),
          r.scrollContainer != null &&
            (this.config.scrollContainer = document.querySelector(
              r.scrollContainer
            )),
          (this.animationNameCache = new i()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var r;
          return (
            (this.element = window.document.documentElement),
            (r = document.readyState) === "interactive" || r === "complete"
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var r, a, d, u;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var h, g, v, m;
              for (
                v = this.element.querySelectorAll("." + this.config.boxClass),
                  m = [],
                  h = 0,
                  g = v.length;
                g > h;
                h++
              )
                (r = v[h]), m.push(r);
              return m;
            }.call(this)),
            (this.all = function () {
              var h, g, v, m;
              for (v = this.boxes, m = [], h = 0, g = v.length; g > h; h++)
                (r = v[h]), m.push(r);
              return m;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (u = this.boxes, a = 0, d = u.length; d > a; a++)
                (r = u[a]), this.applyStyle(r, !0);
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
              ? new o(
                  (function (h) {
                    return function (g) {
                      var v, m, c, f, y;
                      for (y = [], v = 0, m = g.length; m > v; v++)
                        (f = g[v]),
                          y.push(
                            function () {
                              var b, k, C, S;
                              for (
                                C = f.addedNodes || [],
                                  S = [],
                                  b = 0,
                                  k = C.length;
                                k > b;
                                b++
                              )
                                (c = C[b]), S.push(this.doSync(c));
                              return S;
                            }.call(h)
                          );
                      return y;
                    };
                  })(this)
                ).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            this.interval != null ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (r) {
          return o.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (r) {
          var a, d, u, h, g;
          if ((r == null && (r = this.element), r.nodeType === 1)) {
            for (
              r = r.parentNode || r,
                h = r.querySelectorAll("." + this.config.boxClass),
                g = [],
                d = 0,
                u = h.length;
              u > d;
              d++
            )
              (a = h[d]),
                t.call(this.all, a) < 0
                  ? (this.boxes.push(a),
                    this.all.push(a),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(a, !0),
                    g.push((this.scrolled = !0)))
                  : g.push(void 0);
            return g;
          }
        }),
        (e.prototype.show = function (r) {
          return (
            this.applyStyle(r),
            (r.className = r.className + " " + this.config.animateClass),
            this.config.callback != null && this.config.callback(r),
            this.util().emitEvent(r, this.wowEvent),
            this.util().addEvent(r, "animationend", this.resetAnimation),
            this.util().addEvent(r, "oanimationend", this.resetAnimation),
            this.util().addEvent(r, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(r, "MSAnimationEnd", this.resetAnimation),
            r
          );
        }),
        (e.prototype.applyStyle = function (r, a) {
          var d, u, h;
          return (
            (u = r.getAttribute("data-wow-duration")),
            (d = r.getAttribute("data-wow-delay")),
            (h = r.getAttribute("data-wow-iteration")),
            this.animate(
              (function (g) {
                return function () {
                  return g.customStyle(r, a, u, d, h);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (r) {
                return window.requestAnimationFrame(r);
              }
            : function (r) {
                return r();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var r, a, d, u, h;
          for (u = this.boxes, h = [], a = 0, d = u.length; d > a; a++)
            (r = u[a]), h.push((r.style.visibility = "visible"));
          return h;
        }),
        (e.prototype.resetAnimation = function (r) {
          var a;
          return r.type.toLowerCase().indexOf("animationend") >= 0
            ? ((a = r.target || r.srcElement),
              (a.className = a.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (r, a, d, u, h) {
          return (
            a && this.cacheAnimationName(r),
            (r.style.visibility = a ? "hidden" : "visible"),
            d &&
              this.vendorSet(r.style, {
                animationDuration: d,
              }),
            u &&
              this.vendorSet(r.style, {
                animationDelay: u,
              }),
            h &&
              this.vendorSet(r.style, {
                animationIterationCount: h,
              }),
            this.vendorSet(r.style, {
              animationName: a ? "none" : this.cachedAnimationName(r),
            }),
            r
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (r, a) {
          var d, u, h, g;
          u = [];
          for (d in a)
            (h = a[d]),
              (r["" + d] = h),
              u.push(
                function () {
                  var v, m, c, f;
                  for (
                    c = this.vendors, f = [], v = 0, m = c.length;
                    m > v;
                    v++
                  )
                    (g = c[v]),
                      f.push(
                        (r["" + g + d.charAt(0).toUpperCase() + d.substr(1)] =
                          h)
                      );
                  return f;
                }.call(this)
              );
          return u;
        }),
        (e.prototype.vendorCSS = function (r, a) {
          var d, u, h, g, v, m;
          for (
            v = s(r),
              g = v.getPropertyCSSValue(a),
              h = this.vendors,
              d = 0,
              u = h.length;
            u > d;
            d++
          )
            (m = h[d]), (g = g || v.getPropertyCSSValue("-" + m + "-" + a));
          return g;
        }),
        (e.prototype.animationName = function (r) {
          var a;
          try {
            a = this.vendorCSS(r, "animation-name").cssText;
          } catch (d) {
            a = s(r).getPropertyValue("animation-name");
          }
          return a === "none" ? "" : a;
        }),
        (e.prototype.cacheAnimationName = function (r) {
          return this.animationNameCache.set(r, this.animationName(r));
        }),
        (e.prototype.cachedAnimationName = function (r) {
          return this.animationNameCache.get(r);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var r;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var a, d, u, h;
              for (u = this.boxes, h = [], a = 0, d = u.length; d > a; a++)
                (r = u[a]), r && (this.isVisible(r) ? this.show(r) : h.push(r));
              return h;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (r) {
          for (var a; r.offsetTop === void 0; ) r = r.parentNode;
          for (a = r.offsetTop; (r = r.offsetParent); ) a += r.offsetTop;
          return a;
        }),
        (e.prototype.isVisible = function (r) {
          var a, d, u, h, g;
          return (
            (d = r.getAttribute("data-wow-offset") || this.config.offset),
            (g =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (h =
              g +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              d),
            (u = this.offsetTop(r)),
            (a = u + r.clientHeight),
            h >= u && a >= g
          );
        }),
        (e.prototype.util = function () {
          return this._util != null ? this._util : (this._util = new p());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this),
  (function (o) {
    function p() {
      var i = o(window).width(),
        s = o(window).height(),
        l = o(".fl").outerWidth(),
        n = o(".fl").outerHeight();
      o(".fl").css({
        position: "absolute",
        left: i / 2 - l / 2,
        top: s / 2 - n / 2,
      });
    }
    (o.fn.fakeLoader = function (i) {
      var s = o.extend(
          {
            timeToHide: 1200,
            pos: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "999",
            bgColor: "#2ecc71",
            spinner: "spinner7",
            imagePath: "",
          },
          i
        ),
        l =
          '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
        n =
          '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
        t =
          '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
        e = '<div class="fl spinner4"></div>',
        r =
          '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
        a =
          '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
        d =
          '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',
        u = o(this),
        h = {
          position: s.pos,
          width: s.width,
          height: s.height,
          top: s.top,
          left: s.left,
        };
      return (
        u.css(h),
        u.each(function () {
          var g = s.spinner;
          switch (g) {
            case "spinner1":
              u.html(l);
              break;
            case "spinner2":
              u.html(n);
              break;
            case "spinner3":
              u.html(t);
              break;
            case "spinner4":
              u.html(e);
              break;
            case "spinner5":
              u.html(r);
              break;
            case "spinner6":
              u.html(a);
              break;
            case "spinner7":
              u.html(d);
              break;
            default:
              u.html(l);
          }
          s.imagePath != "" &&
            u.html('<div class="fl"><img src="' + s.imagePath + '"></div>'),
            p();
        }),
        setTimeout(function () {
          o(u).fadeOut();
        }, s.timeToHide),
        this.css({
          backgroundColor: s.bgColor,
          zIndex: s.zIndex,
        })
      );
    }),
      o(window).on("load", function () {
        p(),
          o(window).resize(function () {
            p();
          });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    typeof define == "function" && define.amd
      ? define(["jquery"], o)
      : typeof exports != "undefined"
      ? (module.exports = o(require("jquery")))
      : o(jQuery);
  })(function (o) {
    "use strict";
    var p = window.Slick || {};
    ((p = (function () {
      var i = 0;
      return function (s, l) {
        var n,
          t = this;
        (t.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: o(s),
          appendDots: o(s),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, r) {
            return o('<button type="button" />').text(r + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (t.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          o.extend(t, t.initials),
          (t.activeBreakpoint = null),
          (t.animType = null),
          (t.animProp = null),
          (t.breakpoints = []),
          (t.breakpointSettings = []),
          (t.cssTransitions = !1),
          (t.focussed = !1),
          (t.interrupted = !1),
          (t.hidden = "hidden"),
          (t.paused = !0),
          (t.positionProp = null),
          (t.respondTo = null),
          (t.rowCount = 1),
          (t.shouldClick = !0),
          (t.$slider = o(s)),
          (t.$slidesCache = null),
          (t.transformType = null),
          (t.transitionType = null),
          (t.visibilityChange = "visibilitychange"),
          (t.windowWidth = 0),
          (t.windowTimer = null),
          (n = o(s).data("slick") || {}),
          (t.options = o.extend({}, t.defaults, l, n)),
          (t.currentSlide = t.options.initialSlide),
          (t.originalSettings = t.options),
          document.mozHidden !== void 0
            ? ((t.hidden = "mozHidden"),
              (t.visibilityChange = "mozvisibilitychange"))
            : document.webkitHidden !== void 0 &&
              ((t.hidden = "webkitHidden"),
              (t.visibilityChange = "webkitvisibilitychange")),
          (t.autoPlay = o.proxy(t.autoPlay, t)),
          (t.autoPlayClear = o.proxy(t.autoPlayClear, t)),
          (t.autoPlayIterator = o.proxy(t.autoPlayIterator, t)),
          (t.changeSlide = o.proxy(t.changeSlide, t)),
          (t.clickHandler = o.proxy(t.clickHandler, t)),
          (t.selectHandler = o.proxy(t.selectHandler, t)),
          (t.setPosition = o.proxy(t.setPosition, t)),
          (t.swipeHandler = o.proxy(t.swipeHandler, t)),
          (t.dragHandler = o.proxy(t.dragHandler, t)),
          (t.keyHandler = o.proxy(t.keyHandler, t)),
          (t.instanceUid = i++),
          (t.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          t.registerBreakpoints(),
          t.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({
          "aria-hidden": "false",
        })
        .find("a, input, button, select")
        .attr({
          tabindex: "0",
        });
    }),
      (p.prototype.addSlide = p.prototype.slickAdd =
        function (i, s, l) {
          var n = this;
          if (typeof s == "boolean") (l = s), (s = null);
          else if (s < 0 || s >= n.slideCount) return !1;
          n.unload(),
            typeof s == "number"
              ? s === 0 && n.$slides.length === 0
                ? o(i).appendTo(n.$slideTrack)
                : l
                ? o(i).insertBefore(n.$slides.eq(s))
                : o(i).insertAfter(n.$slides.eq(s))
              : l === !0
              ? o(i).prependTo(n.$slideTrack)
              : o(i).appendTo(n.$slideTrack),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            n.$slides.each(function (t, e) {
              o(e).attr("data-slick-index", t);
            }),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (p.prototype.animateHeight = function () {
        var i = this;
        if (
          i.options.slidesToShow === 1 &&
          i.options.adaptiveHeight === !0 &&
          i.options.vertical === !1
        ) {
          var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.animate(
            {
              height: s,
            },
            i.options.speed
          );
        }
      }),
      (p.prototype.animateSlide = function (i, s) {
        var l = {},
          n = this;
        n.animateHeight(),
          n.options.rtl === !0 && n.options.vertical === !1 && (i = -i),
          n.transformsEnabled === !1
            ? n.options.vertical === !1
              ? n.$slideTrack.animate(
                  {
                    left: i,
                  },
                  n.options.speed,
                  n.options.easing,
                  s
                )
              : n.$slideTrack.animate(
                  {
                    top: i,
                  },
                  n.options.speed,
                  n.options.easing,
                  s
                )
            : n.cssTransitions === !1
            ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft),
              o({
                animStart: n.currentLeft,
              }).animate(
                {
                  animStart: i,
                },
                {
                  duration: n.options.speed,
                  easing: n.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      n.options.vertical === !1
                        ? ((l[n.animType] = "translate(" + t + "px, 0px)"),
                          n.$slideTrack.css(l))
                        : ((l[n.animType] = "translate(0px," + t + "px)"),
                          n.$slideTrack.css(l));
                  },
                  complete: function () {
                    s && s.call();
                  },
                }
              ))
            : (n.applyTransition(),
              (i = Math.ceil(i)),
              n.options.vertical === !1
                ? (l[n.animType] = "translate3d(" + i + "px, 0px, 0px)")
                : (l[n.animType] = "translate3d(0px," + i + "px, 0px)"),
              n.$slideTrack.css(l),
              s &&
                setTimeout(function () {
                  n.disableTransition(), s.call();
                }, n.options.speed));
      }),
      (p.prototype.getNavTarget = function () {
        var i = this,
          s = i.options.asNavFor;
        return s && s !== null && (s = o(s).not(i.$slider)), s;
      }),
      (p.prototype.asNavFor = function (i) {
        var s = this.getNavTarget();
        s !== null &&
          typeof s == "object" &&
          s.each(function () {
            var l = o(this).slick("getSlick");
            l.unslicked || l.slideHandler(i, !0);
          });
      }),
      (p.prototype.applyTransition = function (i) {
        var s = this,
          l = {};
        s.options.fade === !1
          ? (l[s.transitionType] =
              s.transformType +
              " " +
              s.options.speed +
              "ms " +
              s.options.cssEase)
          : (l[s.transitionType] =
              "opacity " + s.options.speed + "ms " + s.options.cssEase),
          s.options.fade === !1 ? s.$slideTrack.css(l) : s.$slides.eq(i).css(l);
      }),
      (p.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(),
          i.slideCount > i.options.slidesToShow &&
            (i.autoPlayTimer = setInterval(
              i.autoPlayIterator,
              i.options.autoplaySpeed
            ));
      }),
      (p.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer);
      }),
      (p.prototype.autoPlayIterator = function () {
        var i = this,
          s = i.currentSlide + i.options.slidesToScroll;
        i.paused ||
          i.interrupted ||
          i.focussed ||
          (i.options.infinite === !1 &&
            (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1
              ? (i.direction = 0)
              : i.direction === 0 &&
                ((s = i.currentSlide - i.options.slidesToScroll),
                i.currentSlide - 1 == 0 && (i.direction = 1))),
          i.slideHandler(s));
      }),
      (p.prototype.buildArrows = function () {
        var i = this;
        i.options.arrows === !0 &&
          ((i.$prevArrow = o(i.options.prevArrow).addClass("slick-arrow")),
          (i.$nextArrow = o(i.options.nextArrow).addClass("slick-arrow")),
          i.slideCount > i.options.slidesToShow
            ? (i.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              i.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              i.htmlExpr.test(i.options.prevArrow) &&
                i.$prevArrow.prependTo(i.options.appendArrows),
              i.htmlExpr.test(i.options.nextArrow) &&
                i.$nextArrow.appendTo(i.options.appendArrows),
              i.options.infinite !== !0 &&
                i.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1",
              }));
      }),
      (p.prototype.buildDots = function () {
        var i,
          s,
          l = this;
        if (l.options.dots === !0) {
          for (
            l.$slider.addClass("slick-dotted"),
              s = o("<ul />").addClass(l.options.dotsClass),
              i = 0;
            i <= l.getDotCount();
            i += 1
          )
            s.append(
              o("<li />").append(l.options.customPaging.call(this, l, i))
            );
          (l.$dots = s.appendTo(l.options.appendDots)),
            l.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (p.prototype.buildOut = function () {
        var i = this;
        (i.$slides = i.$slider
          .children(i.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (i.slideCount = i.$slides.length),
          i.$slides.each(function (s, l) {
            o(l)
              .attr("data-slick-index", s)
              .data("originalStyling", o(l).attr("style") || "");
          }),
          i.$slider.addClass("slick-slider"),
          (i.$slideTrack =
            i.slideCount === 0
              ? o('<div class="slick-track"/>').appendTo(i.$slider)
              : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          i.$slideTrack.css("opacity", 0),
          (i.options.centerMode !== !0 && i.options.swipeToSlide !== !0) ||
            (i.options.slidesToScroll = 1),
          o("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"),
          i.setupInfinite(),
          i.buildArrows(),
          i.buildDots(),
          i.updateDots(),
          i.setSlideClasses(
            typeof i.currentSlide == "number" ? i.currentSlide : 0
          ),
          i.options.draggable === !0 && i.$list.addClass("draggable");
      }),
      (p.prototype.buildRows = function () {
        var i,
          s,
          l,
          n,
          t,
          e,
          r,
          a = this;
        if (
          ((n = document.createDocumentFragment()),
          (e = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              t = Math.ceil(e.length / r),
              i = 0;
            i < t;
            i++
          ) {
            var d = document.createElement("div");
            for (s = 0; s < a.options.rows; s++) {
              var u = document.createElement("div");
              for (l = 0; l < a.options.slidesPerRow; l++) {
                var h = i * r + (s * a.options.slidesPerRow + l);
                e.get(h) && u.appendChild(e.get(h));
              }
              d.appendChild(u);
            }
            n.appendChild(d);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (p.prototype.checkResponsive = function (i, s) {
        var l,
          n,
          t,
          e = this,
          r = !1,
          a = e.$slider.width(),
          d = window.innerWidth || o(window).width();
        if (
          (e.respondTo === "window"
            ? (t = d)
            : e.respondTo === "slider"
            ? (t = a)
            : e.respondTo === "min" && (t = Math.min(d, a)),
          e.options.responsive &&
            e.options.responsive.length &&
            e.options.responsive !== null)
        ) {
          n = null;
          for (l in e.breakpoints)
            e.breakpoints.hasOwnProperty(l) &&
              (e.originalSettings.mobileFirst === !1
                ? t < e.breakpoints[l] && (n = e.breakpoints[l])
                : t > e.breakpoints[l] && (n = e.breakpoints[l]));
          n !== null
            ? e.activeBreakpoint !== null
              ? (n !== e.activeBreakpoint || s) &&
                ((e.activeBreakpoint = n),
                e.breakpointSettings[n] === "unslick"
                  ? e.unslick(n)
                  : ((e.options = o.extend(
                      {},
                      e.originalSettings,
                      e.breakpointSettings[n]
                    )),
                    i === !0 && (e.currentSlide = e.options.initialSlide),
                    e.refresh(i)),
                (r = n))
              : ((e.activeBreakpoint = n),
                e.breakpointSettings[n] === "unslick"
                  ? e.unslick(n)
                  : ((e.options = o.extend(
                      {},
                      e.originalSettings,
                      e.breakpointSettings[n]
                    )),
                    i === !0 && (e.currentSlide = e.options.initialSlide),
                    e.refresh(i)),
                (r = n))
            : e.activeBreakpoint !== null &&
              ((e.activeBreakpoint = null),
              (e.options = e.originalSettings),
              i === !0 && (e.currentSlide = e.options.initialSlide),
              e.refresh(i),
              (r = n)),
            i || r === !1 || e.$slider.trigger("breakpoint", [e, r]);
        }
      }),
      (p.prototype.changeSlide = function (i, s) {
        var l,
          n,
          t,
          e = this,
          r = o(i.currentTarget);
        switch (
          (r.is("a") && i.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (t = e.slideCount % e.options.slidesToScroll != 0),
          (l = t
            ? 0
            : (e.slideCount - e.currentSlide) % e.options.slidesToScroll),
          i.data.message)
        ) {
          case "previous":
            (n =
              l === 0 ? e.options.slidesToScroll : e.options.slidesToShow - l),
              e.slideCount > e.options.slidesToShow &&
                e.slideHandler(e.currentSlide - n, !1, s);
            break;
          case "next":
            (n = l === 0 ? e.options.slidesToScroll : l),
              e.slideCount > e.options.slidesToShow &&
                e.slideHandler(e.currentSlide + n, !1, s);
            break;
          case "index":
            var a =
              i.data.index === 0
                ? 0
                : i.data.index || r.index() * e.options.slidesToScroll;
            e.slideHandler(e.checkNavigable(a), !1, s),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (p.prototype.checkNavigable = function (i) {
        var s, l;
        if (((s = this.getNavigableIndexes()), (l = 0), i > s[s.length - 1]))
          i = s[s.length - 1];
        else
          for (var n in s) {
            if (i < s[n]) {
              i = l;
              break;
            }
            l = s[n];
          }
        return i;
      }),
      (p.prototype.cleanUpEvents = function () {
        var i = this;
        i.options.dots &&
          i.$dots !== null &&
          (o("li", i.$dots)
            .off("click.slick", i.changeSlide)
            .off("mouseenter.slick", o.proxy(i.interrupt, i, !0))
            .off("mouseleave.slick", o.proxy(i.interrupt, i, !1)),
          i.options.accessibility === !0 &&
            i.$dots.off("keydown.slick", i.keyHandler)),
          i.$slider.off("focus.slick blur.slick"),
          i.options.arrows === !0 &&
            i.slideCount > i.options.slidesToShow &&
            (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide),
            i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide),
            i.options.accessibility === !0 &&
              (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler),
              i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))),
          i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
          i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
          i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
          i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler),
          i.$list.off("click.slick", i.clickHandler),
          o(document).off(i.visibilityChange, i.visibility),
          i.cleanUpSlideEvents(),
          i.options.accessibility === !0 &&
            i.$list.off("keydown.slick", i.keyHandler),
          i.options.focusOnSelect === !0 &&
            o(i.$slideTrack).children().off("click.slick", i.selectHandler),
          o(window).off(
            "orientationchange.slick.slick-" + i.instanceUid,
            i.orientationChange
          ),
          o(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
          o("[draggable!=true]", i.$slideTrack).off(
            "dragstart",
            i.preventDefault
          ),
          o(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
      }),
      (p.prototype.cleanUpSlideEvents = function () {
        var i = this;
        i.$list.off("mouseenter.slick", o.proxy(i.interrupt, i, !0)),
          i.$list.off("mouseleave.slick", o.proxy(i.interrupt, i, !1));
      }),
      (p.prototype.cleanUpRows = function () {
        var i,
          s = this;
        s.options.rows > 1 &&
          ((i = s.$slides.children().children()).removeAttr("style"),
          s.$slider.empty().append(i));
      }),
      (p.prototype.clickHandler = function (i) {
        this.shouldClick === !1 &&
          (i.stopImmediatePropagation(),
          i.stopPropagation(),
          i.preventDefault());
      }),
      (p.prototype.destroy = function (i) {
        var s = this;
        s.autoPlayClear(),
          (s.touchObject = {}),
          s.cleanUpEvents(),
          o(".slick-cloned", s.$slider).detach(),
          s.$dots && s.$dots.remove(),
          s.$prevArrow &&
            s.$prevArrow.length &&
            (s.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            s.htmlExpr.test(s.options.prevArrow) && s.$prevArrow.remove()),
          s.$nextArrow &&
            s.$nextArrow.length &&
            (s.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            s.htmlExpr.test(s.options.nextArrow) && s.$nextArrow.remove()),
          s.$slides &&
            (s.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                o(this).attr("style", o(this).data("originalStyling"));
              }),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.detach(),
            s.$list.detach(),
            s.$slider.append(s.$slides)),
          s.cleanUpRows(),
          s.$slider.removeClass("slick-slider"),
          s.$slider.removeClass("slick-initialized"),
          s.$slider.removeClass("slick-dotted"),
          (s.unslicked = !0),
          i || s.$slider.trigger("destroy", [s]);
      }),
      (p.prototype.disableTransition = function (i) {
        var s = this,
          l = {};
        (l[s.transitionType] = ""),
          s.options.fade === !1 ? s.$slideTrack.css(l) : s.$slides.eq(i).css(l);
      }),
      (p.prototype.fadeSlide = function (i, s) {
        var l = this;
        l.cssTransitions === !1
          ? (l.$slides.eq(i).css({
              zIndex: l.options.zIndex,
            }),
            l.$slides.eq(i).animate(
              {
                opacity: 1,
              },
              l.options.speed,
              l.options.easing,
              s
            ))
          : (l.applyTransition(i),
            l.$slides.eq(i).css({
              opacity: 1,
              zIndex: l.options.zIndex,
            }),
            s &&
              setTimeout(function () {
                l.disableTransition(i), s.call();
              }, l.options.speed));
      }),
      (p.prototype.fadeSlideOut = function (i) {
        var s = this;
        s.cssTransitions === !1
          ? s.$slides.eq(i).animate(
              {
                opacity: 0,
                zIndex: s.options.zIndex - 2,
              },
              s.options.speed,
              s.options.easing
            )
          : (s.applyTransition(i),
            s.$slides.eq(i).css({
              opacity: 0,
              zIndex: s.options.zIndex - 2,
            }));
      }),
      (p.prototype.filterSlides = p.prototype.slickFilter =
        function (i) {
          var s = this;
          i !== null &&
            ((s.$slidesCache = s.$slides),
            s.unload(),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slidesCache.filter(i).appendTo(s.$slideTrack),
            s.reinit());
        }),
      (p.prototype.focusHandler = function () {
        var i = this;
        i.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (s) {
            s.stopImmediatePropagation();
            var l = o(this);
            setTimeout(function () {
              i.options.pauseOnFocus &&
                ((i.focussed = l.is(":focus")), i.autoPlay());
            }, 0);
          });
      }),
      (p.prototype.getCurrent = p.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (p.prototype.getDotCount = function () {
        var i = this,
          s = 0,
          l = 0,
          n = 0;
        if (i.options.infinite === !0)
          if (i.slideCount <= i.options.slidesToShow) ++n;
          else
            for (; s < i.slideCount; )
              ++n,
                (s = l + i.options.slidesToScroll),
                (l +=
                  i.options.slidesToScroll <= i.options.slidesToShow
                    ? i.options.slidesToScroll
                    : i.options.slidesToShow);
        else if (i.options.centerMode === !0) n = i.slideCount;
        else if (i.options.asNavFor)
          for (; s < i.slideCount; )
            ++n,
              (s = l + i.options.slidesToScroll),
              (l +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
            );
        return n - 1;
      }),
      (p.prototype.getLeft = function (i) {
        var s,
          l,
          n,
          t,
          e = this,
          r = 0;
        return (
          (e.slideOffset = 0),
          (l = e.$slides.first().outerHeight(!0)),
          e.options.infinite === !0
            ? (e.slideCount > e.options.slidesToShow &&
                ((e.slideOffset = e.slideWidth * e.options.slidesToShow * -1),
                (t = -1),
                e.options.vertical === !0 &&
                  e.options.centerMode === !0 &&
                  (e.options.slidesToShow === 2
                    ? (t = -1.5)
                    : e.options.slidesToShow === 1 && (t = -2)),
                (r = l * e.options.slidesToShow * t)),
              e.slideCount % e.options.slidesToScroll != 0 &&
                i + e.options.slidesToScroll > e.slideCount &&
                e.slideCount > e.options.slidesToShow &&
                (i > e.slideCount
                  ? ((e.slideOffset =
                      (e.options.slidesToShow - (i - e.slideCount)) *
                      e.slideWidth *
                      -1),
                    (r =
                      (e.options.slidesToShow - (i - e.slideCount)) * l * -1))
                  : ((e.slideOffset =
                      (e.slideCount % e.options.slidesToScroll) *
                      e.slideWidth *
                      -1),
                    (r = (e.slideCount % e.options.slidesToScroll) * l * -1))))
            : i + e.options.slidesToShow > e.slideCount &&
              ((e.slideOffset =
                (i + e.options.slidesToShow - e.slideCount) * e.slideWidth),
              (r = (i + e.options.slidesToShow - e.slideCount) * l)),
          e.slideCount <= e.options.slidesToShow &&
            ((e.slideOffset = 0), (r = 0)),
          e.options.centerMode === !0 && e.slideCount <= e.options.slidesToShow
            ? (e.slideOffset =
                (e.slideWidth * Math.floor(e.options.slidesToShow)) / 2 -
                (e.slideWidth * e.slideCount) / 2)
            : e.options.centerMode === !0 && e.options.infinite === !0
            ? (e.slideOffset +=
                e.slideWidth * Math.floor(e.options.slidesToShow / 2) -
                e.slideWidth)
            : e.options.centerMode === !0 &&
              ((e.slideOffset = 0),
              (e.slideOffset +=
                e.slideWidth * Math.floor(e.options.slidesToShow / 2))),
          (s =
            e.options.vertical === !1
              ? i * e.slideWidth * -1 + e.slideOffset
              : i * l * -1 + r),
          e.options.variableWidth === !0 &&
            ((n =
              e.slideCount <= e.options.slidesToShow ||
              e.options.infinite === !1
                ? e.$slideTrack.children(".slick-slide").eq(i)
                : e.$slideTrack
                    .children(".slick-slide")
                    .eq(i + e.options.slidesToShow)),
            (s =
              e.options.rtl === !0
                ? n[0]
                  ? -1 * (e.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            e.options.centerMode === !0 &&
              ((n =
                e.slideCount <= e.options.slidesToShow ||
                e.options.infinite === !1
                  ? e.$slideTrack.children(".slick-slide").eq(i)
                  : e.$slideTrack
                      .children(".slick-slide")
                      .eq(i + e.options.slidesToShow + 1)),
              (s =
                e.options.rtl === !0
                  ? n[0]
                    ? -1 * (e.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (s += (e.$list.width() - n.outerWidth()) / 2))),
          s
        );
      }),
      (p.prototype.getOption = p.prototype.slickGetOption =
        function (i) {
          return this.options[i];
        }),
      (p.prototype.getNavigableIndexes = function () {
        var i,
          s = this,
          l = 0,
          n = 0,
          t = [];
        for (
          s.options.infinite === !1
            ? (i = s.slideCount)
            : ((l = -1 * s.options.slidesToScroll),
              (n = -1 * s.options.slidesToScroll),
              (i = 2 * s.slideCount));
          l < i;

        )
          t.push(l),
            (l = n + s.options.slidesToScroll),
            (n +=
              s.options.slidesToScroll <= s.options.slidesToShow
                ? s.options.slidesToScroll
                : s.options.slidesToShow);
        return t;
      }),
      (p.prototype.getSlick = function () {
        return this;
      }),
      (p.prototype.getSlideCount = function () {
        var i,
          s,
          l = this;
        return (
          (s =
            l.options.centerMode === !0
              ? l.slideWidth * Math.floor(l.options.slidesToShow / 2)
              : 0),
          l.options.swipeToSlide === !0
            ? (l.$slideTrack.find(".slick-slide").each(function (n, t) {
                if (t.offsetLeft - s + o(t).outerWidth() / 2 > -1 * l.swipeLeft)
                  return (i = t), !1;
              }),
              Math.abs(o(i).attr("data-slick-index") - l.currentSlide) || 1)
            : l.options.slidesToScroll
        );
      }),
      (p.prototype.goTo = p.prototype.slickGoTo =
        function (i, s) {
          this.changeSlide(
            {
              data: {
                message: "index",
                index: parseInt(i),
              },
            },
            s
          );
        }),
      (p.prototype.init = function (i) {
        var s = this;
        o(s.$slider).hasClass("slick-initialized") ||
          (o(s.$slider).addClass("slick-initialized"),
          s.buildRows(),
          s.buildOut(),
          s.setProps(),
          s.startLoad(),
          s.loadSlider(),
          s.initializeEvents(),
          s.updateArrows(),
          s.updateDots(),
          s.checkResponsive(!0),
          s.focusHandler()),
          i && s.$slider.trigger("init", [s]),
          s.options.accessibility === !0 && s.initADA(),
          s.options.autoplay && ((s.paused = !1), s.autoPlay());
      }),
      (p.prototype.initADA = function () {
        var i = this,
          s = Math.ceil(i.slideCount / i.options.slidesToShow),
          l = i.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < i.slideCount;
          });
        i.$slides
          .add(i.$slideTrack.find(".slick-cloned"))
          .attr({
            "aria-hidden": "true",
            tabindex: "-1",
          })
          .find("a, input, button, select")
          .attr({
            tabindex: "-1",
          }),
          i.$dots !== null &&
            (i.$slides
              .not(i.$slideTrack.find(".slick-cloned"))
              .each(function (e) {
                var r = l.indexOf(e);
                o(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + i.instanceUid + e,
                  tabindex: -1,
                }),
                  r !== -1 &&
                    o(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + i.instanceUid + r,
                    });
              }),
            i.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (e) {
                var r = l[e];
                o(this).attr({
                  role: "presentation",
                }),
                  o(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + i.instanceUid + e,
                      "aria-controls": "slick-slide" + i.instanceUid + r,
                      "aria-label": e + 1 + " of " + s,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(i.currentSlide)
              .find("button")
              .attr({
                "aria-selected": "true",
                tabindex: "0",
              })
              .end());
        for (var n = i.currentSlide, t = n + i.options.slidesToShow; n < t; n++)
          i.$slides.eq(n).attr("tabindex", 0);
        i.activateADA();
      }),
      (p.prototype.initArrowEvents = function () {
        var i = this;
        i.options.arrows === !0 &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow.off("click.slick").on(
            "click.slick",
            {
              message: "previous",
            },
            i.changeSlide
          ),
          i.$nextArrow.off("click.slick").on(
            "click.slick",
            {
              message: "next",
            },
            i.changeSlide
          ),
          i.options.accessibility === !0 &&
            (i.$prevArrow.on("keydown.slick", i.keyHandler),
            i.$nextArrow.on("keydown.slick", i.keyHandler)));
      }),
      (p.prototype.initDotEvents = function () {
        var i = this;
        i.options.dots === !0 &&
          (o("li", i.$dots).on(
            "click.slick",
            {
              message: "index",
            },
            i.changeSlide
          ),
          i.options.accessibility === !0 &&
            i.$dots.on("keydown.slick", i.keyHandler)),
          i.options.dots === !0 &&
            i.options.pauseOnDotsHover === !0 &&
            o("li", i.$dots)
              .on("mouseenter.slick", o.proxy(i.interrupt, i, !0))
              .on("mouseleave.slick", o.proxy(i.interrupt, i, !1));
      }),
      (p.prototype.initSlideEvents = function () {
        var i = this;
        i.options.pauseOnHover &&
          (i.$list.on("mouseenter.slick", o.proxy(i.interrupt, i, !0)),
          i.$list.on("mouseleave.slick", o.proxy(i.interrupt, i, !1)));
      }),
      (p.prototype.initializeEvents = function () {
        var i = this;
        i.initArrowEvents(),
          i.initDotEvents(),
          i.initSlideEvents(),
          i.$list.on(
            "touchstart.slick mousedown.slick",
            {
              action: "start",
            },
            i.swipeHandler
          ),
          i.$list.on(
            "touchmove.slick mousemove.slick",
            {
              action: "move",
            },
            i.swipeHandler
          ),
          i.$list.on(
            "touchend.slick mouseup.slick",
            {
              action: "end",
            },
            i.swipeHandler
          ),
          i.$list.on(
            "touchcancel.slick mouseleave.slick",
            {
              action: "end",
            },
            i.swipeHandler
          ),
          i.$list.on("click.slick", i.clickHandler),
          o(document).on(i.visibilityChange, o.proxy(i.visibility, i)),
          i.options.accessibility === !0 &&
            i.$list.on("keydown.slick", i.keyHandler),
          i.options.focusOnSelect === !0 &&
            o(i.$slideTrack).children().on("click.slick", i.selectHandler),
          o(window).on(
            "orientationchange.slick.slick-" + i.instanceUid,
            o.proxy(i.orientationChange, i)
          ),
          o(window).on(
            "resize.slick.slick-" + i.instanceUid,
            o.proxy(i.resize, i)
          ),
          o("[draggable!=true]", i.$slideTrack).on(
            "dragstart",
            i.preventDefault
          ),
          o(window).on("load.slick.slick-" + i.instanceUid, i.setPosition),
          o(i.setPosition);
      }),
      (p.prototype.initUI = function () {
        var i = this;
        i.options.arrows === !0 &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow.show(), i.$nextArrow.show()),
          i.options.dots === !0 &&
            i.slideCount > i.options.slidesToShow &&
            i.$dots.show();
      }),
      (p.prototype.keyHandler = function (i) {
        var s = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (i.keyCode === 37 && s.options.accessibility === !0
            ? s.changeSlide({
                data: {
                  message: s.options.rtl === !0 ? "next" : "previous",
                },
              })
            : i.keyCode === 39 &&
              s.options.accessibility === !0 &&
              s.changeSlide({
                data: {
                  message: s.options.rtl === !0 ? "previous" : "next",
                },
              }));
      }),
      (p.prototype.lazyLoad = function () {
        function i(u) {
          o("img[data-lazy]", u).each(function () {
            var h = o(this),
              g = o(this).attr("data-lazy"),
              v = o(this).attr("data-srcset"),
              m = o(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
              c = document.createElement("img");
            (c.onload = function () {
              h.animate(
                {
                  opacity: 0,
                },
                100,
                function () {
                  v && (h.attr("srcset", v), m && h.attr("sizes", m)),
                    h.attr("src", g).animate(
                      {
                        opacity: 1,
                      },
                      200,
                      function () {
                        h.removeAttr(
                          "data-lazy data-srcset data-sizes"
                        ).removeClass("slick-loading");
                      }
                    ),
                    t.$slider.trigger("lazyLoaded", [t, h, g]);
                }
              );
            }),
              (c.onerror = function () {
                h
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  t.$slider.trigger("lazyLoadError", [t, h, g]);
              }),
              (c.src = g);
          });
        }
        var s,
          l,
          n,
          t = this;
        if (
          (t.options.centerMode === !0
            ? t.options.infinite === !0
              ? (n =
                  (l = t.currentSlide + (t.options.slidesToShow / 2 + 1)) +
                  t.options.slidesToShow +
                  2)
              : ((l = Math.max(
                  0,
                  t.currentSlide - (t.options.slidesToShow / 2 + 1)
                )),
                (n = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide))
            : ((l = t.options.infinite
                ? t.options.slidesToShow + t.currentSlide
                : t.currentSlide),
              (n = Math.ceil(l + t.options.slidesToShow)),
              t.options.fade === !0 &&
                (l > 0 && l--, n <= t.slideCount && n++)),
          (s = t.$slider.find(".slick-slide").slice(l, n)),
          t.options.lazyLoad === "anticipated")
        )
          for (
            var e = l - 1, r = n, a = t.$slider.find(".slick-slide"), d = 0;
            d < t.options.slidesToScroll;
            d++
          )
            e < 0 && (e = t.slideCount - 1),
              (s = (s = s.add(a.eq(e))).add(a.eq(r))),
              e--,
              r++;
        i(s),
          t.slideCount <= t.options.slidesToShow
            ? i(t.$slider.find(".slick-slide"))
            : t.currentSlide >= t.slideCount - t.options.slidesToShow
            ? i(
                t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow)
              )
            : t.currentSlide === 0 &&
              i(
                t.$slider
                  .find(".slick-cloned")
                  .slice(-1 * t.options.slidesToShow)
              );
      }),
      (p.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(),
          i.$slideTrack.css({
            opacity: 1,
          }),
          i.$slider.removeClass("slick-loading"),
          i.initUI(),
          i.options.lazyLoad === "progressive" && i.progressiveLazyLoad();
      }),
      (p.prototype.next = p.prototype.slickNext =
        function () {
          this.changeSlide({
            data: {
              message: "next",
            },
          });
        }),
      (p.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition();
      }),
      (p.prototype.pause = p.prototype.slickPause =
        function () {
          var i = this;
          i.autoPlayClear(), (i.paused = !0);
        }),
      (p.prototype.play = p.prototype.slickPlay =
        function () {
          var i = this;
          i.autoPlay(),
            (i.options.autoplay = !0),
            (i.paused = !1),
            (i.focussed = !1),
            (i.interrupted = !1);
        }),
      (p.prototype.postSlide = function (i) {
        var s = this;
        s.unslicked ||
          (s.$slider.trigger("afterChange", [s, i]),
          (s.animating = !1),
          s.slideCount > s.options.slidesToShow && s.setPosition(),
          (s.swipeLeft = null),
          s.options.autoplay && s.autoPlay(),
          s.options.accessibility === !0 &&
            (s.initADA(),
            s.options.focusOnChange &&
              o(s.$slides.get(s.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (p.prototype.prev = p.prototype.slickPrev =
        function () {
          this.changeSlide({
            data: {
              message: "previous",
            },
          });
        }),
      (p.prototype.preventDefault = function (i) {
        i.preventDefault();
      }),
      (p.prototype.progressiveLazyLoad = function (i) {
        i = i || 1;
        var s,
          l,
          n,
          t,
          e,
          r = this,
          a = o("img[data-lazy]", r.$slider);
        a.length
          ? ((s = a.first()),
            (l = s.attr("data-lazy")),
            (n = s.attr("data-srcset")),
            (t = s.attr("data-sizes") || r.$slider.attr("data-sizes")),
            ((e = document.createElement("img")).onload = function () {
              n && (s.attr("srcset", n), t && s.attr("sizes", t)),
                s
                  .attr("src", l)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                r.options.adaptiveHeight === !0 && r.setPosition(),
                r.$slider.trigger("lazyLoaded", [r, s, l]),
                r.progressiveLazyLoad();
            }),
            (e.onerror = function () {
              i < 3
                ? setTimeout(function () {
                    r.progressiveLazyLoad(i + 1);
                  }, 500)
                : (s
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, s, l]),
                  r.progressiveLazyLoad());
            }),
            (e.src = l))
          : r.$slider.trigger("allImagesLoaded", [r]);
      }),
      (p.prototype.refresh = function (i) {
        var s,
          l,
          n = this;
        (l = n.slideCount - n.options.slidesToShow),
          !n.options.infinite && n.currentSlide > l && (n.currentSlide = l),
          n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
          (s = n.currentSlide),
          n.destroy(!0),
          o.extend(n, n.initials, {
            currentSlide: s,
          }),
          n.init(),
          i ||
            n.changeSlide(
              {
                data: {
                  message: "index",
                  index: s,
                },
              },
              !1
            );
      }),
      (p.prototype.registerBreakpoints = function () {
        var i,
          s,
          l,
          n = this,
          t = n.options.responsive || null;
        if (o.type(t) === "array" && t.length) {
          n.respondTo = n.options.respondTo || "window";
          for (i in t)
            if (((l = n.breakpoints.length - 1), t.hasOwnProperty(i))) {
              for (s = t[i].breakpoint; l >= 0; )
                n.breakpoints[l] &&
                  n.breakpoints[l] === s &&
                  n.breakpoints.splice(l, 1),
                  l--;
              n.breakpoints.push(s), (n.breakpointSettings[s] = t[i].settings);
            }
          n.breakpoints.sort(function (e, r) {
            return n.options.mobileFirst ? e - r : r - e;
          });
        }
      }),
      (p.prototype.reinit = function () {
        var i = this;
        (i.$slides = i.$slideTrack
          .children(i.options.slide)
          .addClass("slick-slide")),
          (i.slideCount = i.$slides.length),
          i.currentSlide >= i.slideCount &&
            i.currentSlide !== 0 &&
            (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
          i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
          i.registerBreakpoints(),
          i.setProps(),
          i.setupInfinite(),
          i.buildArrows(),
          i.updateArrows(),
          i.initArrowEvents(),
          i.buildDots(),
          i.updateDots(),
          i.initDotEvents(),
          i.cleanUpSlideEvents(),
          i.initSlideEvents(),
          i.checkResponsive(!1, !0),
          i.options.focusOnSelect === !0 &&
            o(i.$slideTrack).children().on("click.slick", i.selectHandler),
          i.setSlideClasses(
            typeof i.currentSlide == "number" ? i.currentSlide : 0
          ),
          i.setPosition(),
          i.focusHandler(),
          (i.paused = !i.options.autoplay),
          i.autoPlay(),
          i.$slider.trigger("reInit", [i]);
      }),
      (p.prototype.resize = function () {
        var i = this;
        o(window).width() !== i.windowWidth &&
          (clearTimeout(i.windowDelay),
          (i.windowDelay = window.setTimeout(function () {
            (i.windowWidth = o(window).width()),
              i.checkResponsive(),
              i.unslicked || i.setPosition();
          }, 50)));
      }),
      (p.prototype.removeSlide = p.prototype.slickRemove =
        function (i, s, l) {
          var n = this;
          if (
            ((i =
              typeof i == "boolean"
                ? (s = i) === !0
                  ? 0
                  : n.slideCount - 1
                : s === !0
                ? --i
                : i),
            n.slideCount < 1 || i < 0 || i > n.slideCount - 1)
          )
            return !1;
          n.unload(),
            l === !0
              ? n.$slideTrack.children().remove()
              : n.$slideTrack.children(this.options.slide).eq(i).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (p.prototype.setCSS = function (i) {
        var s,
          l,
          n = this,
          t = {};
        n.options.rtl === !0 && (i = -i),
          (s = n.positionProp == "left" ? Math.ceil(i) + "px" : "0px"),
          (l = n.positionProp == "top" ? Math.ceil(i) + "px" : "0px"),
          (t[n.positionProp] = i),
          n.transformsEnabled === !1
            ? n.$slideTrack.css(t)
            : ((t = {}),
              n.cssTransitions === !1
                ? ((t[n.animType] = "translate(" + s + ", " + l + ")"),
                  n.$slideTrack.css(t))
                : ((t[n.animType] = "translate3d(" + s + ", " + l + ", 0px)"),
                  n.$slideTrack.css(t)));
      }),
      (p.prototype.setDimensions = function () {
        var i = this;
        i.options.vertical === !1
          ? i.options.centerMode === !0 &&
            i.$list.css({
              padding: "0px " + i.options.centerPadding,
            })
          : (i.$list.height(
              i.$slides.first().outerHeight(!0) * i.options.slidesToShow
            ),
            i.options.centerMode === !0 &&
              i.$list.css({
                padding: i.options.centerPadding + " 0px",
              })),
          (i.listWidth = i.$list.width()),
          (i.listHeight = i.$list.height()),
          i.options.vertical === !1 && i.options.variableWidth === !1
            ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
              i.$slideTrack.width(
                Math.ceil(
                  i.slideWidth * i.$slideTrack.children(".slick-slide").length
                )
              ))
            : i.options.variableWidth === !0
            ? i.$slideTrack.width(5e3 * i.slideCount)
            : ((i.slideWidth = Math.ceil(i.listWidth)),
              i.$slideTrack.height(
                Math.ceil(
                  i.$slides.first().outerHeight(!0) *
                    i.$slideTrack.children(".slick-slide").length
                )
              ));
        var s = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 &&
          i.$slideTrack.children(".slick-slide").width(i.slideWidth - s);
      }),
      (p.prototype.setFade = function () {
        var i,
          s = this;
        s.$slides.each(function (l, n) {
          (i = s.slideWidth * l * -1),
            s.options.rtl === !0
              ? o(n).css({
                  position: "relative",
                  right: i,
                  top: 0,
                  zIndex: s.options.zIndex - 2,
                  opacity: 0,
                })
              : o(n).css({
                  position: "relative",
                  left: i,
                  top: 0,
                  zIndex: s.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          s.$slides.eq(s.currentSlide).css({
            zIndex: s.options.zIndex - 1,
            opacity: 1,
          });
      }),
      (p.prototype.setHeight = function () {
        var i = this;
        if (
          i.options.slidesToShow === 1 &&
          i.options.adaptiveHeight === !0 &&
          i.options.vertical === !1
        ) {
          var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.css("height", s);
        }
      }),
      (p.prototype.setOption = p.prototype.slickSetOption =
        function () {
          var i,
            s,
            l,
            n,
            t,
            e = this,
            r = !1;
          if (
            (o.type(arguments[0]) === "object"
              ? ((l = arguments[0]), (r = arguments[1]), (t = "multiple"))
              : o.type(arguments[0]) === "string" &&
                ((l = arguments[0]),
                (n = arguments[1]),
                (r = arguments[2]),
                arguments[0] === "responsive" &&
                o.type(arguments[1]) === "array"
                  ? (t = "responsive")
                  : arguments[1] !== void 0 && (t = "single")),
            t === "single")
          )
            e.options[l] = n;
          else if (t === "multiple")
            o.each(l, function (a, d) {
              e.options[a] = d;
            });
          else if (t === "responsive")
            for (s in n)
              if (o.type(e.options.responsive) !== "array")
                e.options.responsive = [n[s]];
              else {
                for (i = e.options.responsive.length - 1; i >= 0; )
                  e.options.responsive[i].breakpoint === n[s].breakpoint &&
                    e.options.responsive.splice(i, 1),
                    i--;
                e.options.responsive.push(n[s]);
              }
          r && (e.unload(), e.reinit());
        }),
      (p.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(),
          i.setHeight(),
          i.options.fade === !1
            ? i.setCSS(i.getLeft(i.currentSlide))
            : i.setFade(),
          i.$slider.trigger("setPosition", [i]);
      }),
      (p.prototype.setProps = function () {
        var i = this,
          s = document.body.style;
        (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
          i.positionProp === "top"
            ? i.$slider.addClass("slick-vertical")
            : i.$slider.removeClass("slick-vertical"),
          (s.WebkitTransition === void 0 &&
            s.MozTransition === void 0 &&
            s.msTransition === void 0) ||
            (i.options.useCSS === !0 && (i.cssTransitions = !0)),
          i.options.fade &&
            (typeof i.options.zIndex == "number"
              ? i.options.zIndex < 3 && (i.options.zIndex = 3)
              : (i.options.zIndex = i.defaults.zIndex)),
          s.OTransform !== void 0 &&
            ((i.animType = "OTransform"),
            (i.transformType = "-o-transform"),
            (i.transitionType = "OTransition"),
            s.perspectiveProperty === void 0 &&
              s.webkitPerspective === void 0 &&
              (i.animType = !1)),
          s.MozTransform !== void 0 &&
            ((i.animType = "MozTransform"),
            (i.transformType = "-moz-transform"),
            (i.transitionType = "MozTransition"),
            s.perspectiveProperty === void 0 &&
              s.MozPerspective === void 0 &&
              (i.animType = !1)),
          s.webkitTransform !== void 0 &&
            ((i.animType = "webkitTransform"),
            (i.transformType = "-webkit-transform"),
            (i.transitionType = "webkitTransition"),
            s.perspectiveProperty === void 0 &&
              s.webkitPerspective === void 0 &&
              (i.animType = !1)),
          s.msTransform !== void 0 &&
            ((i.animType = "msTransform"),
            (i.transformType = "-ms-transform"),
            (i.transitionType = "msTransition"),
            s.msTransform === void 0 && (i.animType = !1)),
          s.transform !== void 0 &&
            i.animType !== !1 &&
            ((i.animType = "transform"),
            (i.transformType = "transform"),
            (i.transitionType = "transition")),
          (i.transformsEnabled =
            i.options.useTransform && i.animType !== null && i.animType !== !1);
      }),
      (p.prototype.setSlideClasses = function (i) {
        var s,
          l,
          n,
          t,
          e = this;
        if (
          ((l = e.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          e.$slides.eq(i).addClass("slick-current"),
          e.options.centerMode === !0)
        ) {
          var r = e.options.slidesToShow % 2 == 0 ? 1 : 0;
          (s = Math.floor(e.options.slidesToShow / 2)),
            e.options.infinite === !0 &&
              (i >= s && i <= e.slideCount - 1 - s
                ? e.$slides
                    .slice(i - s + r, i + s + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((n = e.options.slidesToShow + i),
                  l
                    .slice(n - s + 1 + r, n + s + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              i === 0
                ? l
                    .eq(l.length - 1 - e.options.slidesToShow)
                    .addClass("slick-center")
                : i === e.slideCount - 1 &&
                  l.eq(e.options.slidesToShow).addClass("slick-center")),
            e.$slides.eq(i).addClass("slick-center");
        } else
          i >= 0 && i <= e.slideCount - e.options.slidesToShow
            ? e.$slides
                .slice(i, i + e.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : l.length <= e.options.slidesToShow
            ? l.addClass("slick-active").attr("aria-hidden", "false")
            : ((t = e.slideCount % e.options.slidesToShow),
              (n = e.options.infinite === !0 ? e.options.slidesToShow + i : i),
              e.options.slidesToShow == e.options.slidesToScroll &&
              e.slideCount - i < e.options.slidesToShow
                ? l
                    .slice(n - (e.options.slidesToShow - t), n + t)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : l
                    .slice(n, n + e.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        (e.options.lazyLoad !== "ondemand" &&
          e.options.lazyLoad !== "anticipated") ||
          e.lazyLoad();
      }),
      (p.prototype.setupInfinite = function () {
        var i,
          s,
          l,
          n = this;
        if (
          (n.options.fade === !0 && (n.options.centerMode = !1),
          n.options.infinite === !0 &&
            n.options.fade === !1 &&
            ((s = null), n.slideCount > n.options.slidesToShow))
        ) {
          for (
            l =
              n.options.centerMode === !0
                ? n.options.slidesToShow + 1
                : n.options.slidesToShow,
              i = n.slideCount;
            i > n.slideCount - l;
            i -= 1
          )
            (s = i - 1),
              o(n.$slides[s])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", s - n.slideCount)
                .prependTo(n.$slideTrack)
                .addClass("slick-cloned");
          for (i = 0; i < l + n.slideCount; i += 1)
            (s = i),
              o(n.$slides[s])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", s + n.slideCount)
                .appendTo(n.$slideTrack)
                .addClass("slick-cloned");
          n.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              o(this).attr("id", "");
            });
        }
      }),
      (p.prototype.interrupt = function (i) {
        var s = this;
        i || s.autoPlay(), (s.interrupted = i);
      }),
      (p.prototype.selectHandler = function (i) {
        var s = this,
          l = o(i.target).is(".slick-slide")
            ? o(i.target)
            : o(i.target).parents(".slick-slide"),
          n = parseInt(l.attr("data-slick-index"));
        n || (n = 0),
          s.slideCount <= s.options.slidesToShow
            ? s.slideHandler(n, !1, !0)
            : s.slideHandler(n);
      }),
      (p.prototype.slideHandler = function (i, s, l) {
        var n,
          t,
          e,
          r,
          a,
          d = null,
          u = this;
        if (
          ((s = s || !1),
          !(
            (u.animating === !0 && u.options.waitForAnimate === !0) ||
            (u.options.fade === !0 && u.currentSlide === i)
          ))
        )
          if (
            (s === !1 && u.asNavFor(i),
            (n = i),
            (d = u.getLeft(n)),
            (r = u.getLeft(u.currentSlide)),
            (u.currentLeft = u.swipeLeft === null ? r : u.swipeLeft),
            u.options.infinite === !1 &&
              u.options.centerMode === !1 &&
              (i < 0 || i > u.getDotCount() * u.options.slidesToScroll))
          )
            u.options.fade === !1 &&
              ((n = u.currentSlide),
              l !== !0
                ? u.animateSlide(r, function () {
                    u.postSlide(n);
                  })
                : u.postSlide(n));
          else if (
            u.options.infinite === !1 &&
            u.options.centerMode === !0 &&
            (i < 0 || i > u.slideCount - u.options.slidesToScroll)
          )
            u.options.fade === !1 &&
              ((n = u.currentSlide),
              l !== !0
                ? u.animateSlide(r, function () {
                    u.postSlide(n);
                  })
                : u.postSlide(n));
          else {
            if (
              (u.options.autoplay && clearInterval(u.autoPlayTimer),
              (t =
                n < 0
                  ? u.slideCount % u.options.slidesToScroll != 0
                    ? u.slideCount - (u.slideCount % u.options.slidesToScroll)
                    : u.slideCount + n
                  : n >= u.slideCount
                  ? u.slideCount % u.options.slidesToScroll != 0
                    ? 0
                    : n - u.slideCount
                  : n),
              (u.animating = !0),
              u.$slider.trigger("beforeChange", [u, u.currentSlide, t]),
              (e = u.currentSlide),
              (u.currentSlide = t),
              u.setSlideClasses(u.currentSlide),
              u.options.asNavFor &&
                (a = (a = u.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(u.currentSlide),
              u.updateDots(),
              u.updateArrows(),
              u.options.fade === !0)
            )
              return (
                l !== !0
                  ? (u.fadeSlideOut(e),
                    u.fadeSlide(t, function () {
                      u.postSlide(t);
                    }))
                  : u.postSlide(t),
                void u.animateHeight()
              );
            l !== !0
              ? u.animateSlide(d, function () {
                  u.postSlide(t);
                })
              : u.postSlide(t);
          }
      }),
      (p.prototype.startLoad = function () {
        var i = this;
        i.options.arrows === !0 &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow.hide(), i.$nextArrow.hide()),
          i.options.dots === !0 &&
            i.slideCount > i.options.slidesToShow &&
            i.$dots.hide(),
          i.$slider.addClass("slick-loading");
      }),
      (p.prototype.swipeDirection = function () {
        var i,
          s,
          l,
          n,
          t = this;
        return (
          (i = t.touchObject.startX - t.touchObject.curX),
          (s = t.touchObject.startY - t.touchObject.curY),
          (l = Math.atan2(s, i)),
          (n = Math.round((180 * l) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
            ? t.options.rtl === !1
              ? "left"
              : "right"
            : n >= 135 && n <= 225
            ? t.options.rtl === !1
              ? "right"
              : "left"
            : t.options.verticalSwiping === !0
            ? n >= 35 && n <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (p.prototype.swipeEnd = function (i) {
        var s,
          l,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1), !1;
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(n.touchObject.swipeLength > 10)),
          n.touchObject.curX === void 0)
        )
          return !1;
        if (
          (n.touchObject.edgeHit === !0 &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((l = n.swipeDirection())) {
            case "left":
            case "down":
              (s = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (s = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          l != "vertical" &&
            (n.slideHandler(s),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, l]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (p.prototype.swipeHandler = function (i) {
        var s = this;
        if (
          !(
            s.options.swipe === !1 ||
            ("ontouchend" in document && s.options.swipe === !1) ||
            (s.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
          )
        )
          switch (
            ((s.touchObject.fingerCount =
              i.originalEvent && i.originalEvent.touches !== void 0
                ? i.originalEvent.touches.length
                : 1),
            (s.touchObject.minSwipe = s.listWidth / s.options.touchThreshold),
            s.options.verticalSwiping === !0 &&
              (s.touchObject.minSwipe =
                s.listHeight / s.options.touchThreshold),
            i.data.action)
          ) {
            case "start":
              s.swipeStart(i);
              break;
            case "move":
              s.swipeMove(i);
              break;
            case "end":
              s.swipeEnd(i);
          }
      }),
      (p.prototype.swipeMove = function (i) {
        var s,
          l,
          n,
          t,
          e,
          r,
          a = this;
        return (
          (e = i.originalEvent !== void 0 ? i.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (e && e.length !== 1)) &&
            ((s = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = e !== void 0 ? e[0].pageX : i.clientX),
            (a.touchObject.curY = e !== void 0 ? e[0].pageY : i.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && r > 4
              ? ((a.scrolling = !0), !1)
              : (a.options.verticalSwiping === !0 &&
                  (a.touchObject.swipeLength = r),
                (l = a.swipeDirection()),
                i.originalEvent !== void 0 &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), i.preventDefault()),
                (t =
                  (a.options.rtl === !1 ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                a.options.verticalSwiping === !0 &&
                  (t = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                a.options.infinite === !1 &&
                  ((a.currentSlide === 0 && l === "right") ||
                    (a.currentSlide >= a.getDotCount() && l === "left")) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                a.options.vertical === !1
                  ? (a.swipeLeft = s + n * t)
                  : (a.swipeLeft =
                      s + n * (a.$list.height() / a.listWidth) * t),
                a.options.verticalSwiping === !0 && (a.swipeLeft = s + n * t),
                a.options.fade !== !0 &&
                  a.options.touchMove !== !1 &&
                  (a.animating === !0
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (p.prototype.swipeStart = function (i) {
        var s,
          l = this;
        if (
          ((l.interrupted = !0),
          l.touchObject.fingerCount !== 1 ||
            l.slideCount <= l.options.slidesToShow)
        )
          return (l.touchObject = {}), !1;
        i.originalEvent !== void 0 &&
          i.originalEvent.touches !== void 0 &&
          (s = i.originalEvent.touches[0]),
          (l.touchObject.startX = l.touchObject.curX =
            s !== void 0 ? s.pageX : i.clientX),
          (l.touchObject.startY = l.touchObject.curY =
            s !== void 0 ? s.pageY : i.clientY),
          (l.dragging = !0);
      }),
      (p.prototype.unfilterSlides = p.prototype.slickUnfilter =
        function () {
          var i = this;
          i.$slidesCache !== null &&
            (i.unload(),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slidesCache.appendTo(i.$slideTrack),
            i.reinit());
        }),
      (p.prototype.unload = function () {
        var i = this;
        o(".slick-cloned", i.$slider).remove(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.htmlExpr.test(i.options.prevArrow) &&
            i.$prevArrow.remove(),
          i.$nextArrow &&
            i.htmlExpr.test(i.options.nextArrow) &&
            i.$nextArrow.remove(),
          i.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (p.prototype.unslick = function (i) {
        var s = this;
        s.$slider.trigger("unslick", [s, i]), s.destroy();
      }),
      (p.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
          i.options.arrows === !0 &&
            i.slideCount > i.options.slidesToShow &&
            !i.options.infinite &&
            (i.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            i.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            i.currentSlide === 0
              ? (i.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                i.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((i.currentSlide >= i.slideCount - i.options.slidesToShow &&
                  i.options.centerMode === !1) ||
                  (i.currentSlide >= i.slideCount - 1 &&
                    i.options.centerMode === !0)) &&
                (i.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                i.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (p.prototype.updateDots = function () {
        var i = this;
        i.$dots !== null &&
          (i.$dots.find("li").removeClass("slick-active").end(),
          i.$dots
            .find("li")
            .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (p.prototype.visibility = function () {
        var i = this;
        i.options.autoplay &&
          (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
      }),
      (o.fn.slick = function () {
        var i,
          s,
          l = this,
          n = arguments[0],
          t = Array.prototype.slice.call(arguments, 1),
          e = l.length;
        for (i = 0; i < e; i++)
          if (
            (typeof n == "object" || n === void 0
              ? (l[i].slick = new p(l[i], n))
              : (s = l[i].slick[n].apply(l[i].slick, t)),
            s !== void 0)
          )
            return s;
        return l;
      });
  }),
  (function (o, p, i, s) {
    function l(n, t) {
      (this.settings = null),
        (this.options = o.extend({}, l.Defaults, t)),
        (this.$element = o(n)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null,
          },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        o.each(
          ["onResize", "onThrottledResize"],
          o.proxy(function (e, r) {
            this._handlers[r] = o.proxy(this[r], this);
          }, this)
        ),
        o.each(
          l.Plugins,
          o.proxy(function (e, r) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new r(this);
          }, this)
        ),
        o.each(
          l.Workers,
          o.proxy(function (e, r) {
            this._pipe.push({
              filter: r.filter,
              run: o.proxy(r.run, this),
            });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (l.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: p,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (l.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer",
      }),
      (l.Type = {
        Event: "event",
        State: "state",
      }),
      (l.Plugins = {}),
      (l.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            n.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var t = this.settings.margin || "",
              e = !this.settings.autoWidth,
              r = this.settings.rtl,
              a = {
                width: "auto",
                "margin-left": r ? t : "",
                "margin-right": r ? "" : t,
              };
            !e && this.$stage.children().css(a), (n.css = a);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var t =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              e = null,
              r = this._items.length,
              a = !this.settings.autoWidth,
              d = [];
            for (
              n.items = {
                merge: !1,
                width: t,
              };
              r--;

            )
              (e = this._mergers[r]),
                (e =
                  (this.settings.mergeFit &&
                    Math.min(e, this.settings.items)) ||
                  e),
                (n.items.merge = e > 1 || n.items.merge),
                (d[r] = a ? t * e : this._items[r].width());
            this._widths = d;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var n = [],
              t = this._items,
              e = this.settings,
              r = Math.max(2 * e.items, 4),
              a = 2 * Math.ceil(t.length / 2),
              d = e.loop && t.length ? (e.rewind ? r : Math.max(r, a)) : 0,
              u = "",
              h = "";
            for (d /= 2; d--; )
              n.push(this.normalize(n.length / 2, !0)),
                (u += t[n[n.length - 1]][0].outerHTML),
                n.push(this.normalize(t.length - 1 - (n.length - 1) / 2, !0)),
                (h = t[n[n.length - 1]][0].outerHTML + h);
            (this._clones = n),
              o(u).addClass("cloned").appendTo(this.$stage),
              o(h).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var n = this.settings.rtl ? 1 : -1,
                t = this._clones.length + this._items.length,
                e = -1,
                r = 0,
                a = 0,
                d = [];
              ++e < t;

            )
              (r = d[e - 1] || 0),
                (a = this._widths[this.relative(e)] + this.settings.margin),
                d.push(r + a * n);
            this._coordinates = d;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var n = this.settings.stagePadding,
              t = this._coordinates,
              e = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                "padding-left": n || "",
                "padding-right": n || "",
              };
            this.$stage.css(e);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var t = this._coordinates.length,
              e = !this.settings.autoWidth,
              r = this.$stage.children();
            if (e && n.items.merge)
              for (; t--; )
                (n.css.width = this._widths[this.relative(t)]),
                  r.eq(t).css(n.css);
            else e && ((n.css.width = n.items.width), r.css(n.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            (n.current = n.current
              ? this.$stage.children().index(n.current)
              : 0),
              (n.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), n.current)
              )),
              this.reset(n.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var n,
              t,
              e,
              r,
              a = this.settings.rtl ? 1 : -1,
              d = 2 * this.settings.stagePadding,
              u = this.coordinates(this.current()) + d,
              h = u + this.width() * a,
              g = [];
            for (e = 0, r = this._coordinates.length; e < r; e++)
              (n = this._coordinates[e - 1] || 0),
                (t = Math.abs(this._coordinates[e]) + d * a),
                ((this.op(n, "<=", u) && this.op(n, ">", h)) ||
                  (this.op(t, "<", u) && this.op(t, ">", h))) &&
                  g.push(e);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + g.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"));
          },
        },
      ]),
      (l.prototype.initialize = function () {
        if (
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading"))
        ) {
          var n, t, e;
          (n = this.$element.find("img")),
            (t = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : s),
            (e = this.$element.children(t).width()),
            n.length && e <= 0 && this.preloadAutoWidthImages(n);
        }
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = o(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (l.prototype.setup = function () {
        var n = this.viewport(),
          t = this.options.responsive,
          e = -1,
          r = null;
        t
          ? (o.each(t, function (a) {
              a <= n && a > e && (e = Number(a));
            }),
            (r = o.extend({}, this.options, t[e])),
            typeof r.stagePadding == "function" &&
              (r.stagePadding = r.stagePadding()),
            delete r.responsive,
            r.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + e
                  )
              ))
          : (r = o.extend({}, this.options)),
          this.trigger("change", {
            property: {
              name: "settings",
              value: r,
            },
          }),
          (this._breakpoint = e),
          (this.settings = r),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: {
              name: "settings",
              value: this.settings,
            },
          });
      }),
      (l.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (l.prototype.prepare = function (n) {
        var t = this.trigger("prepare", {
          content: n,
        });
        return (
          t.data ||
            (t.data = o("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(n)),
          this.trigger("prepared", {
            content: t.data,
          }),
          t.data
        );
      }),
      (l.prototype.update = function () {
        for (
          var n = 0,
            t = this._pipe.length,
            e = o.proxy(function (a) {
              return this[a];
            }, this._invalidated),
            r = {};
          n < t;

        )
          (this._invalidated.all ||
            o.grep(this._pipe[n].filter, e).length > 0) &&
            this._pipe[n].run(r),
            n++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (l.prototype.width = function (n) {
        switch ((n = n || l.Width.Default)) {
          case l.Width.Inner:
          case l.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (l.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (l.prototype.onThrottledResize = function () {
        p.clearTimeout(this.resizeTimer),
          (this.resizeTimer = p.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (l.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(":visible") &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (l.prototype.registerEventHandlers = function () {
        o.support.transition &&
          this.$stage.on(
            o.support.transition.end + ".owl.core",
            o.proxy(this.onTransitionEnd, this)
          ),
          this.settings.responsive !== !1 &&
            this.on(p, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              o.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              o.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              o.proxy(this.onDragEnd, this)
            ));
      }),
      (l.prototype.onDragStart = function (n) {
        var t = null;
        n.which !== 3 &&
          (o.support.transform
            ? ((t = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(",")),
              (t = {
                x: t[t.length === 16 ? 12 : 4],
                y: t[t.length === 16 ? 13 : 5],
              }))
            : ((t = this.$stage.position()),
              (t = {
                x: this.settings.rtl
                  ? t.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : t.left,
                y: t.top,
              })),
          this.is("animating") &&
            (o.support.transform ? this.animate(t.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            n.type === "mousedown"
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = o(n.target)),
          (this._drag.stage.start = t),
          (this._drag.stage.current = t),
          (this._drag.pointer = this.pointer(n)),
          o(i).on(
            "mouseup.owl.core touchend.owl.core",
            o.proxy(this.onDragEnd, this)
          ),
          o(i).one(
            "mousemove.owl.core touchmove.owl.core",
            o.proxy(function (e) {
              var r = this.difference(this._drag.pointer, this.pointer(e));
              o(i).on(
                "mousemove.owl.core touchmove.owl.core",
                o.proxy(this.onDragMove, this)
              ),
                (Math.abs(r.x) < Math.abs(r.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (l.prototype.onDragMove = function (n) {
        var t = null,
          e = null,
          r = null,
          a = this.difference(this._drag.pointer, this.pointer(n)),
          d = this.difference(this._drag.stage.start, a);
        this.is("dragging") &&
          (n.preventDefault(),
          this.settings.loop
            ? ((t = this.coordinates(this.minimum())),
              (e = this.coordinates(this.maximum() + 1) - t),
              (d.x = ((((d.x - t) % e) + e) % e) + t))
            : ((t = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (e = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (r = this.settings.pullDrag ? (-1 * a.x) / 5 : 0),
              (d.x = Math.max(Math.min(d.x, t + r), e + r))),
          (this._drag.stage.current = d),
          this.animate(d.x));
      }),
      (l.prototype.onDragEnd = function (n) {
        var t = this.difference(this._drag.pointer, this.pointer(n)),
          e = this._drag.stage.current,
          r = (t.x > 0) ^ this.settings.rtl ? "left" : "right";
        o(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((t.x !== 0 && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(e.x, t.x !== 0 ? r : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = r),
            (Math.abs(t.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (l.prototype.closest = function (n, t) {
        var e = -1,
          r = 30,
          a = this.width(),
          d = this.coordinates();
        return (
          this.settings.freeDrag ||
            o.each(
              d,
              o.proxy(function (u, h) {
                return (
                  t === "left" && n > h - r && n < h + r
                    ? (e = u)
                    : t === "right" && n > h - a - r && n < h - a + r
                    ? (e = u + 1)
                    : this.op(n, "<", h) &&
                      this.op(n, ">", d[u + 1] || h - a) &&
                      (e = t === "left" ? u + 1 : u),
                  e === -1
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(n, ">", d[this.minimum()])
              ? (e = n = this.minimum())
              : this.op(n, "<", d[this.maximum()]) && (e = n = this.maximum())),
          e
        );
      }),
      (l.prototype.animate = function (n) {
        var t = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          t && (this.enter("animating"), this.trigger("translate")),
          o.support.transform3d && o.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + n + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : t
            ? this.$stage.animate(
                {
                  left: n + "px",
                },
                this.speed(),
                this.settings.fallbackEasing,
                o.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({
                left: n + "px",
              });
      }),
      (l.prototype.is = function (n) {
        return this._states.current[n] && this._states.current[n] > 0;
      }),
      (l.prototype.current = function (n) {
        if (n === s) return this._current;
        if (this._items.length === 0) return s;
        if (((n = this.normalize(n)), this._current !== n)) {
          var t = this.trigger("change", {
            property: {
              name: "position",
              value: n,
            },
          });
          t.data !== s && (n = this.normalize(t.data)),
            (this._current = n),
            this.invalidate("position"),
            this.trigger("changed", {
              property: {
                name: "position",
                value: this._current,
              },
            });
        }
        return this._current;
      }),
      (l.prototype.invalidate = function (n) {
        return (
          o.type(n) === "string" &&
            ((this._invalidated[n] = !0),
            this.is("valid") && this.leave("valid")),
          o.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (l.prototype.reset = function (n) {
        (n = this.normalize(n)),
          n !== s &&
            ((this._speed = 0),
            (this._current = n),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(n)),
            this.release(["translate", "translated"]));
      }),
      (l.prototype.normalize = function (n, t) {
        var e = this._items.length,
          r = t ? 0 : this._clones.length;
        return (
          !this.isNumeric(n) || e < 1
            ? (n = s)
            : (n < 0 || n >= e + r) &&
              (n = ((((n - r / 2) % e) + e) % e) + r / 2),
          n
        );
      }),
      (l.prototype.relative = function (n) {
        return (n -= this._clones.length / 2), this.normalize(n, !0);
      }),
      (l.prototype.maximum = function (n) {
        var t,
          e,
          r,
          a = this.settings,
          d = this._coordinates.length;
        if (a.loop) d = this._clones.length / 2 + this._items.length - 1;
        else if (a.autoWidth || a.merge) {
          for (
            t = this._items.length,
              e = this._items[--t].width(),
              r = this.$element.width();
            t-- &&
            ((e += this._items[t].width() + this.settings.margin), !(e > r));

          );
          d = t + 1;
        } else
          d = a.center ? this._items.length - 1 : this._items.length - a.items;
        return n && (d -= this._clones.length / 2), Math.max(d, 0);
      }),
      (l.prototype.minimum = function (n) {
        return n ? 0 : this._clones.length / 2;
      }),
      (l.prototype.items = function (n) {
        return n === s
          ? this._items.slice()
          : ((n = this.normalize(n, !0)), this._items[n]);
      }),
      (l.prototype.mergers = function (n) {
        return n === s
          ? this._mergers.slice()
          : ((n = this.normalize(n, !0)), this._mergers[n]);
      }),
      (l.prototype.clones = function (n) {
        var t = this._clones.length / 2,
          e = t + this._items.length,
          r = function (a) {
            return a % 2 === 0 ? e + a / 2 : t - (a + 1) / 2;
          };
        return n === s
          ? o.map(this._clones, function (a, d) {
              return r(d);
            })
          : o.map(this._clones, function (a, d) {
              return a === n ? r(d) : null;
            });
      }),
      (l.prototype.speed = function (n) {
        return n !== s && (this._speed = n), this._speed;
      }),
      (l.prototype.coordinates = function (n) {
        var t,
          e = 1,
          r = n - 1;
        return n === s
          ? o.map(
              this._coordinates,
              o.proxy(function (a, d) {
                return this.coordinates(d);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((e = -1), (r = n + 1)),
                (t = this._coordinates[n]),
                (t +=
                  ((this.width() - t + (this._coordinates[r] || 0)) / 2) * e))
              : (t = this._coordinates[r] || 0),
            (t = Math.ceil(t)));
      }),
      (l.prototype.duration = function (n, t, e) {
        return e === 0
          ? 0
          : Math.min(Math.max(Math.abs(t - n), 1), 6) *
              Math.abs(e || this.settings.smartSpeed);
      }),
      (l.prototype.to = function (n, t) {
        var e = this.current(),
          r = null,
          a = n - this.relative(e),
          d = (a > 0) - (a < 0),
          u = this._items.length,
          h = this.minimum(),
          g = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(a) > u / 2 && (a += d * -1 * u),
            (n = e + a),
            (r = ((((n - h) % u) + u) % u) + h),
            r !== n &&
              r - a <= g &&
              r - a > 0 &&
              ((e = r - a), (n = r), this.reset(e)))
          : this.settings.rewind
          ? ((g += 1), (n = ((n % g) + g) % g))
          : (n = Math.max(h, Math.min(g, n))),
          this.speed(this.duration(e, n, t)),
          this.current(n),
          this.$element.is(":visible") && this.update();
      }),
      (l.prototype.next = function (n) {
        (n = n || !1), this.to(this.relative(this.current()) + 1, n);
      }),
      (l.prototype.prev = function (n) {
        (n = n || !1), this.to(this.relative(this.current()) - 1, n);
      }),
      (l.prototype.onTransitionEnd = function (n) {
        if (
          n !== s &&
          (n.stopPropagation(),
          (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (l.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== p
            ? (n = o(this.options.responsiveBaseElement).width())
            : p.innerWidth
            ? (n = p.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (l.prototype.replace = function (n) {
        this.$stage.empty(),
          (this._items = []),
          n && (n = n instanceof jQuery ? n : o(n)),
          this.settings.nestedItemSelector &&
            (n = n.find("." + this.settings.nestedItemSelector)),
          n
            .filter(function () {
              return this.nodeType === 1;
            })
            .each(
              o.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (l.prototype.add = function (n, t) {
        var e = this.relative(this._current);
        (t = t === s ? this._items.length : this.normalize(t, !0)),
          (n = n instanceof jQuery ? n : o(n)),
          this.trigger("add", {
            content: n,
            position: t,
          }),
          (n = this.prepare(n)),
          this._items.length === 0 || t === this._items.length
            ? (this._items.length === 0 && this.$stage.append(n),
              this._items.length !== 0 && this._items[t - 1].after(n),
              this._items.push(n),
              this._mergers.push(
                1 *
                  n
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[t].before(n),
              this._items.splice(t, 0, n),
              this._mergers.splice(
                t,
                0,
                1 *
                  n
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[e] && this.reset(this._items[e].index()),
          this.invalidate("items"),
          this.trigger("added", {
            content: n,
            position: t,
          });
      }),
      (l.prototype.remove = function (n) {
        (n = this.normalize(n, !0)),
          n !== s &&
            (this.trigger("remove", {
              content: this._items[n],
              position: n,
            }),
            this._items[n].remove(),
            this._items.splice(n, 1),
            this._mergers.splice(n, 1),
            this.invalidate("items"),
            this.trigger("removed", {
              content: null,
              position: n,
            }));
      }),
      (l.prototype.preloadAutoWidthImages = function (n) {
        n.each(
          o.proxy(function (t, e) {
            this.enter("pre-loading"),
              (e = o(e)),
              o(new Image())
                .one(
                  "load",
                  o.proxy(function (r) {
                    e.attr("src", r.target.src),
                      e.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  e.attr("src") ||
                    e.attr("data-src") ||
                    e.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (l.prototype.destroy = function () {
        this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          o(i).off(".owl.core"),
          this.settings.responsive !== !1 &&
            (p.clearTimeout(this.resizeTimer),
            this.off(p, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (l.prototype.op = function (n, t, e) {
        var r = this.settings.rtl;
        switch (t) {
          case "<":
            return r ? n > e : n < e;
          case ">":
            return r ? n < e : n > e;
          case ">=":
            return r ? n <= e : n >= e;
          case "<=":
            return r ? n >= e : n <= e;
        }
      }),
      (l.prototype.on = function (n, t, e, r) {
        n.addEventListener
          ? n.addEventListener(t, e, r)
          : n.attachEvent && n.attachEvent("on" + t, e);
      }),
      (l.prototype.off = function (n, t, e, r) {
        n.removeEventListener
          ? n.removeEventListener(t, e, r)
          : n.detachEvent && n.detachEvent("on" + t, e);
      }),
      (l.prototype.trigger = function (n, t, e, r, a) {
        var d = {
            item: {
              count: this._items.length,
              index: this.current(),
            },
          },
          u = o.camelCase(
            o
              .grep(["on", n, e], function (g) {
                return g;
              })
              .join("-")
              .toLowerCase()
          ),
          h = o.Event(
            [n, "owl", e || "carousel"].join(".").toLowerCase(),
            o.extend(
              {
                relatedTarget: this,
              },
              d,
              t
            )
          );
        return (
          this._supress[n] ||
            (o.each(this._plugins, function (g, v) {
              v.onTrigger && v.onTrigger(h);
            }),
            this.register({
              type: l.Type.Event,
              name: n,
            }),
            this.$element.trigger(h),
            this.settings &&
              typeof this.settings[u] == "function" &&
              this.settings[u].call(this, h)),
          h
        );
      }),
      (l.prototype.enter = function (n) {
        o.each(
          [n].concat(this._states.tags[n] || []),
          o.proxy(function (t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (l.prototype.leave = function (n) {
        o.each(
          [n].concat(this._states.tags[n] || []),
          o.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (l.prototype.register = function (n) {
        if (n.type === l.Type.Event) {
          if (
            (o.event.special[n.name] || (o.event.special[n.name] = {}),
            !o.event.special[n.name].owl)
          ) {
            var t = o.event.special[n.name]._default;
            (o.event.special[n.name]._default = function (e) {
              return !t ||
                !t.apply ||
                (e.namespace && e.namespace.indexOf("owl") !== -1)
                ? e.namespace && e.namespace.indexOf("owl") > -1
                : t.apply(this, arguments);
            }),
              (o.event.special[n.name].owl = !0);
          }
        } else
          n.type === l.Type.State &&
            (this._states.tags[n.name]
              ? (this._states.tags[n.name] = this._states.tags[n.name].concat(
                  n.tags
                ))
              : (this._states.tags[n.name] = n.tags),
            (this._states.tags[n.name] = o.grep(
              this._states.tags[n.name],
              o.proxy(function (e, r) {
                return o.inArray(e, this._states.tags[n.name]) === r;
              }, this)
            )));
      }),
      (l.prototype.suppress = function (n) {
        o.each(
          n,
          o.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (l.prototype.release = function (n) {
        o.each(
          n,
          o.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (l.prototype.pointer = function (n) {
        var t = {
          x: null,
          y: null,
        };
        return (
          (n = n.originalEvent || n || p.event),
          (n =
            n.touches && n.touches.length
              ? n.touches[0]
              : n.changedTouches && n.changedTouches.length
              ? n.changedTouches[0]
              : n),
          n.pageX
            ? ((t.x = n.pageX), (t.y = n.pageY))
            : ((t.x = n.clientX), (t.y = n.clientY)),
          t
        );
      }),
      (l.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n));
      }),
      (l.prototype.difference = function (n, t) {
        return {
          x: n.x - t.x,
          y: n.y - t.y,
        };
      }),
      (o.fn.owlCarousel = function (n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var e = o(this),
            r = e.data("owl.carousel");
          r ||
            ((r = new l(this, typeof n == "object" && n)),
            e.data("owl.carousel", r),
            o.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (a, d) {
                r.register({
                  type: l.Type.Event,
                  name: d,
                }),
                  r.$element.on(
                    d + ".owl.carousel.core",
                    o.proxy(function (u) {
                      u.namespace &&
                        u.relatedTarget !== this &&
                        (this.suppress([d]),
                        r[d].apply(this, [].slice.call(arguments, 1)),
                        this.release([d]));
                    }, r)
                  );
              }
            )),
            typeof n == "string" && n.charAt(0) !== "_" && r[n].apply(r, t);
        });
      }),
      (o.fn.owlCarousel.Constructor = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this._core = n),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (l.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500,
    }),
      (l.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = p.setInterval(
            o.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (l.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (l.prototype.destroy = function () {
        var n, t;
        p.clearInterval(this._interval);
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.AutoRefresh = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this._core = n),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            o.proxy(function (t) {
              if (
                t.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((t.property && t.property.name == "position") ||
                  t.type == "initialized")
              )
                for (
                  var e = this._core.settings,
                    r = (e.center && Math.ceil(e.items / 2)) || e.items,
                    a = (e.center && r * -1) || 0,
                    d =
                      (t.property && t.property.value !== s
                        ? t.property.value
                        : this._core.current()) + a,
                    u = this._core.clones().length,
                    h = o.proxy(function (g, v) {
                      this.load(v);
                    }, this);
                  a++ < r;

                )
                  this.load(u / 2 + this._core.relative(d)),
                    u && o.each(this._core.clones(this._core.relative(d)), h),
                    d++;
            }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (l.Defaults = {
      lazyLoad: !1,
    }),
      (l.prototype.load = function (n) {
        var t = this._core.$stage.children().eq(n),
          e = t && t.find(".owl-lazy");
        !e ||
          o.inArray(t.get(0), this._loaded) > -1 ||
          (e.each(
            o.proxy(function (r, a) {
              var d,
                u = o(a),
                h =
                  (p.devicePixelRatio > 1 && u.attr("data-src-retina")) ||
                  u.attr("data-src");
              this._core.trigger(
                "load",
                {
                  element: u,
                  url: h,
                },
                "lazy"
              ),
                u.is("img")
                  ? u
                      .one(
                        "load.owl.lazy",
                        o.proxy(function () {
                          u.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              {
                                element: u,
                                url: h,
                              },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", h)
                  : ((d = new Image()),
                    (d.onload = o.proxy(function () {
                      u.css({
                        "background-image": 'url("' + h + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          {
                            element: u,
                            url: h,
                          },
                          "lazy"
                        );
                    }, this)),
                    (d.src = h));
            }, this)
          ),
          this._loaded.push(t.get(0)));
      }),
      (l.prototype.destroy = function () {
        var n, t;
        for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Lazy = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this._core = n),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.property.name == "position" &&
              this.update();
          }, this),
          "loaded.owl.lazy": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (l.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height",
    }),
      (l.prototype.update = function () {
        var n = this._core._current,
          t = n + this._core.settings.items,
          e = this._core.$stage.children().toArray().slice(n, t),
          r = [],
          a = 0;
        o.each(e, function (d, u) {
          r.push(o(u).height());
        }),
          (a = Math.max.apply(null, r)),
          this._core.$stage
            .parent()
            .height(a)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (l.prototype.destroy = function () {
        var n, t;
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.AutoHeight = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this._core = n),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              t.property.name === "position" &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": o.proxy(function (t) {
            if (t.namespace) {
              var e = o(t.content).find(".owl-video");
              e.length &&
                (e.css("display", "none"), this.fetch(e, o(t.content)));
            }
          }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          o.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (l.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1,
    }),
      (l.prototype.fetch = function (n, t) {
        var e = (function () {
            return n.attr("data-vimeo-id")
              ? "vimeo"
              : n.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          r =
            n.attr("data-vimeo-id") ||
            n.attr("data-youtube-id") ||
            n.attr("data-vzaar-id"),
          a = n.attr("data-width") || this._core.settings.videoWidth,
          d = n.attr("data-height") || this._core.settings.videoHeight,
          u = n.attr("href");
        if (!u) throw new Error("Missing video URL.");
        if (
          ((r = u.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          r[3].indexOf("youtu") > -1)
        )
          e = "youtube";
        else if (r[3].indexOf("vimeo") > -1) e = "vimeo";
        else {
          if (!(r[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          e = "vzaar";
        }
        (r = r[6]),
          (this._videos[u] = {
            type: e,
            id: r,
            width: a,
            height: d,
          }),
          t.attr("data-video", u),
          this.thumbnail(n, this._videos[u]);
      }),
      (l.prototype.thumbnail = function (n, t) {
        var e,
          r,
          a,
          d =
            t.width && t.height
              ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"'
              : "",
          u = n.find("img"),
          h = "src",
          g = "",
          v = this._core.settings,
          m = function (c) {
            (r = '<div class="owl-video-play-icon"></div>'),
              (e = v.lazyLoad
                ? '<div class="owl-video-tn ' +
                  g +
                  '" ' +
                  h +
                  '="' +
                  c +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  c +
                  ')"></div>'),
              n.after(e),
              n.after(r);
          };
        if (
          (n.wrap('<div class="owl-video-wrapper"' + d + "></div>"),
          this._core.settings.lazyLoad && ((h = "data-src"), (g = "owl-lazy")),
          u.length)
        )
          return m(u.attr(h)), u.remove(), !1;
        t.type === "youtube"
          ? ((a = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), m(a))
          : t.type === "vimeo"
          ? o.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (c) {
                (a = c[0].thumbnail_large), m(a);
              },
            })
          : t.type === "vzaar" &&
            o.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (c) {
                (a = c.framegrab_url), m(a);
              },
            });
      }),
      (l.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (l.prototype.play = function (n) {
        var t,
          e = o(n.target),
          r = e.closest("." + this._core.settings.itemClass),
          a = this._videos[r.attr("data-video")],
          d = a.width || "100%",
          u = a.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (r = this._core.items(this._core.relative(r.index()))),
          this._core.reset(r.index()),
          a.type === "youtube"
            ? (t =
                '<iframe width="' +
                d +
                '" height="' +
                u +
                '" src="//www.youtube.com/embed/' +
                a.id +
                "?autoplay=1&rel=0&v=" +
                a.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : a.type === "vimeo"
            ? (t =
                '<iframe src="//player.vimeo.com/video/' +
                a.id +
                '?autoplay=1" width="' +
                d +
                '" height="' +
                u +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : a.type === "vzaar" &&
              (t =
                '<iframe frameborder="0"height="' +
                u +
                '"width="' +
                d +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                a.id +
                '/player?autoplay=true"></iframe>'),
          o('<div class="owl-video-frame">' + t + "</div>").insertAfter(
            r.find(".owl-video")
          ),
          (this._playing = r.addClass("owl-video-playing")));
      }),
      (l.prototype.isInFullScreen = function () {
        var n =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return n && o(n).parent().hasClass("owl-video-frame");
      }),
      (l.prototype.destroy = function () {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Video = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this.core = n),
        (this.core.options = o.extend({}, l.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = s),
        (this.next = s),
        (this.handlers = {
          "change.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              t.property.name == "position" &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            o.proxy(function (t) {
              t.namespace && (this.swapping = t.type == "translated");
            }, this),
          "translate.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (l.Defaults = {
      animateOut: !1,
      animateIn: !1,
    }),
      (l.prototype.swap = function () {
        if (
          this.core.settings.items === 1 &&
          o.support.animation &&
          o.support.transition
        ) {
          this.core.speed(0);
          var n,
            t = o.proxy(this.clear, this),
            e = this.core.$stage.children().eq(this.previous),
            r = this.core.$stage.children().eq(this.next),
            a = this.core.settings.animateIn,
            d = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (d &&
              ((n =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              e
                .one(o.support.animation.end, t)
                .css({
                  left: n + "px",
                })
                .addClass("animated owl-animated-out")
                .addClass(d)),
            a &&
              r
                .one(o.support.animation.end, t)
                .addClass("animated owl-animated-in")
                .addClass(a));
        }
      }),
      (l.prototype.clear = function (n) {
        o(n.target)
          .css({
            left: "",
          })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (l.prototype.destroy = function () {
        var n, t;
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Animate = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    var l = function (n) {
      (this._core = n),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace && t.property.name === "settings"
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                t.property.name === "position" &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": o.proxy(function (t, e, r) {
            t.namespace && this.play(e, r);
          }, this),
          "stop.owl.autoplay": o.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": o.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": o.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": o.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": o.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = o.extend({}, l.Defaults, this._core.options));
    };
    (l.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (l.prototype.play = function (n, t) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (l.prototype._getNextTimeout = function (n, t) {
        return (
          this._timeout && p.clearTimeout(this._timeout),
          p.setTimeout(
            o.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(t || this._core.settings.autoplaySpeed);
            }, this),
            n || this._core.settings.autoplayTimeout
          )
        );
      }),
      (l.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (l.prototype.stop = function () {
        this._core.is("rotating") &&
          (p.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (l.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (l.prototype.destroy = function () {
        var n, t;
        this.stop();
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.autoplay = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    "use strict";
    var l = function (n) {
      (this._core = n),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  o(t.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace && t.property.name == "position" && this.draw();
          }, this),
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (l.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (l.prototype.initialize = function () {
        var n,
          t = this._core.settings;
        (this._controls.$relative = (
          t.navContainer
            ? o(t.navContainer)
            : o("<div>").addClass(t.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = o("<" + t.navElement + ">")
            .addClass(t.navClass[0])
            .html(t.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              o.proxy(function (e) {
                this.prev(t.navSpeed);
              }, this)
            )),
          (this._controls.$next = o("<" + t.navElement + ">")
            .addClass(t.navClass[1])
            .html(t.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              o.proxy(function (e) {
                this.next(t.navSpeed);
              }, this)
            )),
          t.dotsData ||
            (this._templates = [
              o("<div>")
                .addClass(t.dotClass)
                .append(o("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            t.dotsContainer
              ? o(t.dotsContainer)
              : o("<div>").addClass(t.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            o.proxy(function (e) {
              var r = o(e.target).parent().is(this._controls.$absolute)
                ? o(e.target).index()
                : o(e.target).parent().index();
              e.preventDefault(), this.to(r, t.dotsSpeed);
            }, this)
          );
        for (n in this._overrides) this._core[n] = o.proxy(this[n], this);
      }),
      (l.prototype.destroy = function () {
        var n, t, e, r;
        for (n in this._handlers) this.$element.off(n, this._handlers[n]);
        for (t in this._controls) this._controls[t].remove();
        for (r in this.overides) this._core[r] = this._overrides[r];
        for (e in Object.getOwnPropertyNames(this))
          typeof this[e] != "function" && (this[e] = null);
      }),
      (l.prototype.update = function () {
        var n,
          t,
          e,
          r = this._core.clones().length / 2,
          a = r + this._core.items().length,
          d = this._core.maximum(!0),
          u = this._core.settings,
          h = u.center || u.autoWidth || u.dotsData ? 1 : u.dotsEach || u.items;
        if (
          (u.slideBy !== "page" && (u.slideBy = Math.min(u.slideBy, u.items)),
          u.dots || u.slideBy == "page")
        )
          for (this._pages = [], n = r, t = 0, e = 0; n < a; n++) {
            if (t >= h || t === 0) {
              if (
                (this._pages.push({
                  start: Math.min(d, n - r),
                  end: n - r + h - 1,
                }),
                Math.min(d, n - r) === d)
              )
                break;
              (t = 0), ++e;
            }
            t += this._core.mergers(this._core.relative(n));
          }
      }),
      (l.prototype.draw = function () {
        var n,
          t = this._core.settings,
          e = this._core.items().length <= t.items,
          r = this._core.relative(this._core.current()),
          a = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || e),
          t.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !a && r <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !a && r >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !t.dots || e),
          t.dots &&
            ((n =
              this._pages.length - this._controls.$absolute.children().length),
            t.dotsData && n !== 0
              ? this._controls.$absolute.html(this._templates.join(""))
              : n > 0
              ? this._controls.$absolute.append(
                  new Array(n + 1).join(this._templates[0])
                )
              : n < 0 && this._controls.$absolute.children().slice(n).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(o.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (l.prototype.onTrigger = function (n) {
        var t = this._core.settings;
        n.page = {
          index: o.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            t &&
            (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items),
        };
      }),
      (l.prototype.current = function () {
        var n = this._core.relative(this._core.current());
        return o
          .grep(
            this._pages,
            o.proxy(function (t, e) {
              return t.start <= n && t.end >= n;
            }, this)
          )
          .pop();
      }),
      (l.prototype.getPosition = function (n) {
        var t,
          e,
          r = this._core.settings;
        return (
          r.slideBy == "page"
            ? ((t = o.inArray(this.current(), this._pages)),
              (e = this._pages.length),
              n ? ++t : --t,
              (t = this._pages[((t % e) + e) % e].start))
            : ((t = this._core.relative(this._core.current())),
              (e = this._core.items().length),
              n ? (t += r.slideBy) : (t -= r.slideBy)),
          t
        );
      }),
      (l.prototype.next = function (n) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), n);
      }),
      (l.prototype.prev = function (n) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), n);
      }),
      (l.prototype.to = function (n, t, e) {
        var r;
        !e && this._pages.length
          ? ((r = this._pages.length),
            o.proxy(this._overrides.to, this._core)(
              this._pages[((n % r) + r) % r].start,
              t
            ))
          : o.proxy(this._overrides.to, this._core)(n, t);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Navigation = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    "use strict";
    var l = function (n) {
      (this._core = n),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.startPosition === "URLHash" &&
              o(p).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": o.proxy(function (t) {
            if (t.namespace) {
              var e = o(t.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!e) return;
              this._hashes[e] = t.content;
            }
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            if (t.namespace && t.property.name === "position") {
              var e = this._core.items(
                  this._core.relative(this._core.current())
                ),
                r = o
                  .map(this._hashes, function (a, d) {
                    return a === e ? d : null;
                  })
                  .join();
              if (!r || p.location.hash.slice(1) === r) return;
              p.location.hash = r;
            }
          }, this),
        }),
        (this._core.options = o.extend({}, l.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        o(p).on(
          "hashchange.owl.navigation",
          o.proxy(function (t) {
            var e = p.location.hash.substring(1),
              r = this._core.$stage.children(),
              a = this._hashes[e] && r.index(this._hashes[e]);
            a !== s &&
              a !== this._core.current() &&
              this._core.to(this._core.relative(a), !1, !0);
          }, this)
        );
    };
    (l.Defaults = {
      URLhashListener: !1,
    }),
      (l.prototype.destroy = function () {
        var n, t;
        o(p).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
          typeof this[t] != "function" && (this[t] = null);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Hash = l);
  })(window.Zepto || window.jQuery, window, document),
  (function (o, p, i, s) {
    function l(d, u) {
      var h = !1,
        g = d.charAt(0).toUpperCase() + d.slice(1);
      return (
        o.each((d + " " + e.join(g + " ") + g).split(" "), function (v, m) {
          if (t[m] !== s) return (h = !u || m), !1;
        }),
        h
      );
    }

    function n(d) {
      return l(d, !0);
    }
    var t = o("<support>").get(0).style,
      e = "Webkit Moz O ms".split(" "),
      r = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      a = {
        csstransforms: function () {
          return !!l("transform");
        },
        csstransforms3d: function () {
          return !!l("perspective");
        },
        csstransitions: function () {
          return !!l("transition");
        },
        cssanimations: function () {
          return !!l("animation");
        },
      };
    a.csstransitions() &&
      ((o.support.transition = new String(n("transition"))),
      (o.support.transition.end = r.transition.end[o.support.transition])),
      a.cssanimations() &&
        ((o.support.animation = new String(n("animation"))),
        (o.support.animation.end = r.animation.end[o.support.animation])),
      a.csstransforms() &&
        ((o.support.transform = new String(n("transform"))),
        (o.support.transform3d = a.csstransforms3d()));
  })(
    window.Zepto || window.jQuery,
    window,
    document
  )); /*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function (o, p, i, s) {
  var l = i("html"),
    n = i(o),
    t = i(p),
    e = (i.fancybox = function () {
      e.open.apply(this, arguments);
    }),
    r = navigator.userAgent.match(/msie/i),
    a = null,
    d = p.createTouch !== s,
    u = function (c) {
      return c && c.hasOwnProperty && c instanceof i;
    },
    h = function (c) {
      return c && i.type(c) === "string";
    },
    g = function (c) {
      return h(c) && 0 < c.indexOf("%");
    },
    v = function (c, f) {
      var y = parseInt(c, 10) || 0;
      return f && g(c) && (y *= e.getViewport()[f] / 100), Math.ceil(y);
    },
    m = function (c, f) {
      return v(c, f) + "px";
    };
  i.extend(e, {
    version: "2.1.7",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !d,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3e3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0,
        },
      },
      iframe: {
        scrolling: "auto",
        preload: !0,
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always",
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up",
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down",
        },
        close: [27],
        play: [32],
        toggle: [70],
      },
      direction: {
        next: "left",
        prev: "right",
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (r ? ' allowtransparency="true"' : "") +
          "></iframe>",
        error:
          '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn:
          '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
        loading: '<div id="fancybox-loading"><div></div></div>',
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0,
      },
      onCancel: i.noop,
      beforeLoad: i.noop,
      afterLoad: i.noop,
      beforeShow: i.noop,
      afterShow: i.noop,
      beforeChange: i.noop,
      beforeClose: i.noop,
      afterClose: i.noop,
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1,
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (c, f) {
      if (c && (i.isPlainObject(f) || (f = {}), e.close(!0) !== !1))
        return (
          i.isArray(c) || (c = u(c) ? i(c).get() : [c]),
          i.each(c, function (y, b) {
            var k = {},
              C,
              S,
              E,
              M,
              V;
            i.type(b) === "object" &&
              (b.nodeType && (b = i(b)),
              u(b)
                ? ((k = {
                    href: b.data("fancybox-href") || b.attr("href"),
                    title: i("<div/>")
                      .text(b.data("fancybox-title") || b.attr("title") || "")
                      .html(),
                    isDom: !0,
                    element: b,
                  }),
                  i.metadata && i.extend(!0, k, b.metadata()))
                : (k = b)),
              (C = f.href || k.href || (h(b) ? b : null)),
              (S = f.title !== s ? f.title : k.title || ""),
              (M = (E = f.content || k.content) ? "html" : f.type || k.type),
              !M &&
                k.isDom &&
                ((M = b.data("fancybox-type")),
                M ||
                  (M = (M = b.prop("class").match(/fancybox\.(\w+)/))
                    ? M[1]
                    : null)),
              h(C) &&
                (M ||
                  (e.isImage(C)
                    ? (M = "image")
                    : e.isSWF(C)
                    ? (M = "swf")
                    : C.charAt(0) === "#"
                    ? (M = "inline")
                    : h(b) && ((M = "html"), (E = b))),
                M === "ajax" &&
                  ((V = C.split(/\s+/, 2)), (C = V.shift()), (V = V.shift()))),
              E ||
                (M === "inline"
                  ? C
                    ? (E = i(h(C) ? C.replace(/.*(?=#[^\s]+$)/, "") : C))
                    : k.isDom && (E = b)
                  : M === "html"
                  ? (E = C)
                  : M || C || !k.isDom || ((M = "inline"), (E = b))),
              i.extend(k, {
                href: C,
                type: M,
                content: E,
                title: S,
                selector: V,
              }),
              (c[y] = k);
          }),
          (e.opts = i.extend(!0, {}, e.defaults, f)),
          f.keys !== s &&
            (e.opts.keys = f.keys ? i.extend({}, e.defaults.keys, f.keys) : !1),
          (e.group = c),
          e._start(e.opts.index)
        );
    },
    cancel: function () {
      var c = e.coming;
      (c && e.trigger("onCancel") === !1) ||
        (e.hideLoading(),
        c &&
          (e.ajaxLoad && e.ajaxLoad.abort(),
          (e.ajaxLoad = null),
          e.imgPreload && (e.imgPreload.onload = e.imgPreload.onerror = null),
          c.wrap && c.wrap.stop(!0, !0).trigger("onReset").remove(),
          (e.coming = null),
          e.current || e._afterZoomOut(c)));
    },
    close: function (c) {
      e.cancel(),
        e.trigger("beforeClose") !== !1 &&
          (e.unbindEvents(),
          e.isActive &&
            (e.isOpen && c !== !0
              ? ((e.isOpen = e.isOpened = !1),
                (e.isClosing = !0),
                i(".fancybox-item, .fancybox-nav").remove(),
                e.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                e.transitions[e.current.closeMethod]())
              : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                e._afterZoomOut())));
    },
    play: function (c) {
      var f = function () {
          clearTimeout(e.player.timer);
        },
        y = function () {
          f(),
            e.current &&
              e.player.isActive &&
              (e.player.timer = setTimeout(e.next, e.current.playSpeed));
        },
        b = function () {
          f(),
            t.unbind(".player"),
            (e.player.isActive = !1),
            e.trigger("onPlayEnd");
        };
      c === !0 || (!e.player.isActive && c !== !1)
        ? e.current &&
          (e.current.loop || e.current.index < e.group.length - 1) &&
          ((e.player.isActive = !0),
          t.bind({
            "onCancel.player beforeClose.player": b,
            "onUpdate.player": y,
            "beforeLoad.player": f,
          }),
          y(),
          e.trigger("onPlayStart"))
        : b();
    },
    next: function (c) {
      var f = e.current;
      f && (h(c) || (c = f.direction.next), e.jumpto(f.index + 1, c, "next"));
    },
    prev: function (c) {
      var f = e.current;
      f && (h(c) || (c = f.direction.prev), e.jumpto(f.index - 1, c, "prev"));
    },
    jumpto: function (c, f, y) {
      var b = e.current;
      b &&
        ((c = v(c)),
        (e.direction = f || b.direction[c >= b.index ? "next" : "prev"]),
        (e.router = y || "jumpto"),
        b.loop &&
          (0 > c && (c = b.group.length + (c % b.group.length)),
          (c %= b.group.length)),
        b.group[c] !== s && (e.cancel(), e._start(c)));
    },
    reposition: function (c, f) {
      var y = e.current,
        b = y ? y.wrap : null,
        k;
      b &&
        ((k = e._getPosition(f)),
        c && c.type === "scroll"
          ? (delete k.position, b.stop(!0, !0).animate(k, 200))
          : (b.css(k), (y.pos = i.extend({}, y.dim, k))));
    },
    update: function (c) {
      var f = c && c.originalEvent && c.originalEvent.type,
        y = !f || f === "orientationchange";
      y && (clearTimeout(a), (a = null)),
        e.isOpen &&
          !a &&
          (a = setTimeout(
            function () {
              var b = e.current;
              b &&
                !e.isClosing &&
                (e.wrap.removeClass("fancybox-tmp"),
                (y || f === "load" || (f === "resize" && b.autoResize)) &&
                  e._setDimension(),
                (f === "scroll" && b.canShrink) || e.reposition(c),
                e.trigger("onUpdate"),
                (a = null));
            },
            y && !d ? 0 : 300
          ));
    },
    toggle: function (c) {
      e.isOpen &&
        ((e.current.fitToView =
          i.type(c) === "boolean" ? c : !e.current.fitToView),
        d &&
          (e.wrap.removeAttr("style").addClass("fancybox-tmp"),
          e.trigger("onUpdate")),
        e.update());
    },
    hideLoading: function () {
      t.unbind(".loading"), i("#fancybox-loading").remove();
    },
    showLoading: function () {
      var c, f;
      e.hideLoading(),
        (c = i(e.opts.tpl.loading).click(e.cancel).appendTo("body")),
        t.bind("keydown.loading", function (y) {
          (y.which || y.keyCode) === 27 && (y.preventDefault(), e.cancel());
        }),
        e.defaults.fixed ||
          ((f = e.getViewport()),
          c.css({
            position: "absolute",
            top: 0.5 * f.h + f.y,
            left: 0.5 * f.w + f.x,
          })),
        e.trigger("onLoading");
    },
    getViewport: function () {
      var c = (e.current && e.current.locked) || !1,
        f = {
          x: n.scrollLeft(),
          y: n.scrollTop(),
        };
      return (
        c && c.length
          ? ((f.w = c[0].clientWidth), (f.h = c[0].clientHeight))
          : ((f.w = d && o.innerWidth ? o.innerWidth : n.width()),
            (f.h = d && o.innerHeight ? o.innerHeight : n.height())),
        f
      );
    },
    unbindEvents: function () {
      e.wrap && u(e.wrap) && e.wrap.unbind(".fb"),
        t.unbind(".fb"),
        n.unbind(".fb");
    },
    bindEvents: function () {
      var c = e.current,
        f;
      c &&
        (n.bind(
          "orientationchange.fb" +
            (d ? "" : " resize.fb") +
            (c.autoCenter && !c.locked ? " scroll.fb" : ""),
          e.update
        ),
        (f = c.keys) &&
          t.bind("keydown.fb", function (y) {
            var b = y.which || y.keyCode,
              k = y.target || y.srcElement;
            if (b === 27 && e.coming) return !1;
            y.ctrlKey ||
              y.altKey ||
              y.shiftKey ||
              y.metaKey ||
              (k && (k.type || i(k).is("[contenteditable]"))) ||
              i.each(f, function (C, S) {
                if (1 < c.group.length && S[b] !== s)
                  return e[C](S[b]), y.preventDefault(), !1;
                if (-1 < i.inArray(b, S)) return e[C](), y.preventDefault(), !1;
              });
          }),
        i.fn.mousewheel &&
          c.mouseWheel &&
          e.wrap.bind("mousewheel.fb", function (y, b, k, C) {
            for (
              var S = i(y.target || null), E = !1;
              S.length &&
              !(E || S.is(".fancybox-skin") || S.is(".fancybox-wrap"));

            )
              (E =
                (E = S[0]) &&
                !(E.style.overflow && E.style.overflow === "hidden") &&
                ((E.clientWidth && E.scrollWidth > E.clientWidth) ||
                  (E.clientHeight && E.scrollHeight > E.clientHeight))),
                (S = i(S).parent());
            b !== 0 &&
              !E &&
              1 < e.group.length &&
              !c.canShrink &&
              (0 < C || 0 < k
                ? e.prev(0 < C ? "down" : "left")
                : (0 > C || 0 > k) && e.next(0 > C ? "up" : "right"),
              y.preventDefault());
          }));
    },
    trigger: function (c, f) {
      var y,
        b = f || e.coming || e.current;
      if (b) {
        if (
          (i.isFunction(b[c]) &&
            (y = b[c].apply(b, Array.prototype.slice.call(arguments, 1))),
          y === !1)
        )
          return !1;
        b.helpers &&
          i.each(b.helpers, function (k, C) {
            C &&
              e.helpers[k] &&
              i.isFunction(e.helpers[k][c]) &&
              e.helpers[k][c](i.extend(!0, {}, e.helpers[k].defaults, C), b);
          });
      }
      t.trigger(c);
    },
    isImage: function (c) {
      return (
        h(c) &&
        c.match(
          /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
        )
      );
    },
    isSWF: function (c) {
      return h(c) && c.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (c) {
      var f = {},
        y,
        b;
      if (((c = v(c)), (y = e.group[c] || null), !y)) return !1;
      if (
        ((f = i.extend(!0, {}, e.opts, y)),
        (y = f.margin),
        (b = f.padding),
        i.type(y) === "number" && (f.margin = [y, y, y, y]),
        i.type(b) === "number" && (f.padding = [b, b, b, b]),
        f.modal &&
          i.extend(!0, f, {
            closeBtn: !1,
            closeClick: !1,
            nextClick: !1,
            arrows: !1,
            mouseWheel: !1,
            keys: null,
            helpers: {
              overlay: {
                closeClick: !1,
              },
            },
          }),
        f.autoSize && (f.autoWidth = f.autoHeight = !0),
        f.width === "auto" && (f.autoWidth = !0),
        f.height === "auto" && (f.autoHeight = !0),
        (f.group = e.group),
        (f.index = c),
        (e.coming = f),
        e.trigger("beforeLoad") === !1)
      )
        e.coming = null;
      else {
        if (((b = f.type), (y = f.href), !b))
          return (
            (e.coming = null),
            e.current && e.router && e.router !== "jumpto"
              ? ((e.current.index = c), e[e.router](e.direction))
              : !1
          );
        if (
          ((e.isActive = !0),
          (b === "image" || b === "swf") &&
            ((f.autoHeight = f.autoWidth = !1), (f.scrolling = "visible")),
          b === "image" && (f.aspectRatio = !0),
          b === "iframe" && d && (f.scrolling = "scroll"),
          (f.wrap = i(f.tpl.wrap)
            .addClass(
              "fancybox-" +
                (d ? "mobile" : "desktop") +
                " fancybox-type-" +
                b +
                " fancybox-tmp " +
                f.wrapCSS
            )
            .appendTo(f.parent || "body")),
          i.extend(f, {
            skin: i(".fancybox-skin", f.wrap),
            outer: i(".fancybox-outer", f.wrap),
            inner: i(".fancybox-inner", f.wrap),
          }),
          i.each(["Top", "Right", "Bottom", "Left"], function (k, C) {
            f.skin.css("padding" + C, m(f.padding[k]));
          }),
          e.trigger("onReady"),
          b === "inline" || b === "html")
        ) {
          if (!f.content || !f.content.length) return e._error("content");
        } else if (!y) return e._error("href");
        b === "image"
          ? e._loadImage()
          : b === "ajax"
          ? e._loadAjax()
          : b === "iframe"
          ? e._loadIframe()
          : e._afterLoad();
      }
    },
    _error: function (c) {
      i.extend(e.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: c,
        content: e.coming.tpl.error,
      }),
        e._afterLoad();
    },
    _loadImage: function () {
      var c = (e.imgPreload = new Image());
      (c.onload = function () {
        (this.onload = this.onerror = null),
          (e.coming.width = this.width / e.opts.pixelRatio),
          (e.coming.height = this.height / e.opts.pixelRatio),
          e._afterLoad();
      }),
        (c.onerror = function () {
          (this.onload = this.onerror = null), e._error("image");
        }),
        (c.src = e.coming.href),
        c.complete !== !0 && e.showLoading();
    },
    _loadAjax: function () {
      var c = e.coming;
      e.showLoading(),
        (e.ajaxLoad = i.ajax(
          i.extend({}, c.ajax, {
            url: c.href,
            error: function (f, y) {
              e.coming && y !== "abort" ? e._error("ajax", f) : e.hideLoading();
            },
            success: function (f, y) {
              y === "success" && ((c.content = f), e._afterLoad());
            },
          })
        ));
    },
    _loadIframe: function () {
      var c = e.coming,
        f = i(c.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr("scrolling", d ? "auto" : c.iframe.scrolling)
          .attr("src", c.href);
      i(c.wrap).bind("onReset", function () {
        try {
          i(this)
            .find("iframe")
            .hide()
            .attr("src", "//about:blank")
            .end()
            .empty();
        } catch (y) {}
      }),
        c.iframe.preload &&
          (e.showLoading(),
          f.one("load", function () {
            i(this).data("ready", 1),
              d || i(this).bind("load.fb", e.update),
              i(this)
                .parents(".fancybox-wrap")
                .width("100%")
                .removeClass("fancybox-tmp")
                .show(),
              e._afterLoad();
          })),
        (c.content = f.appendTo(c.inner)),
        c.iframe.preload || e._afterLoad();
    },
    _preloadImages: function () {
      var c = e.group,
        f = e.current,
        y = c.length,
        b = f.preload ? Math.min(f.preload, y - 1) : 0,
        k,
        C;
      for (C = 1; C <= b; C += 1)
        (k = c[(f.index + C) % y]),
          k.type === "image" && k.href && (new Image().src = k.href);
    },
    _afterLoad: function () {
      var c = e.coming,
        f = e.current,
        y,
        b,
        k,
        C,
        S;
      if ((e.hideLoading(), c && e.isActive !== !1))
        if (e.trigger("afterLoad", c, f) === !1)
          c.wrap.stop(!0).trigger("onReset").remove(), (e.coming = null);
        else {
          switch (
            (f &&
              (e.trigger("beforeChange", f),
              f.wrap
                .stop(!0)
                .removeClass("fancybox-opened")
                .find(".fancybox-item, .fancybox-nav")
                .remove()),
            e.unbindEvents(),
            (y = c.content),
            (b = c.type),
            (k = c.scrolling),
            i.extend(e, {
              wrap: c.wrap,
              skin: c.skin,
              outer: c.outer,
              inner: c.inner,
              current: c,
              previous: f,
            }),
            (C = c.href),
            b)
          ) {
            case "inline":
            case "ajax":
            case "html":
              c.selector
                ? (y = i("<div>").html(y).find(c.selector))
                : u(y) &&
                  (y.data("fancybox-placeholder") ||
                    y.data(
                      "fancybox-placeholder",
                      i('<div class="fancybox-placeholder"></div>')
                        .insertAfter(y)
                        .hide()
                    ),
                  (y = y.show().detach()),
                  c.wrap.bind("onReset", function () {
                    i(this).find(y).length &&
                      y
                        .hide()
                        .replaceAll(y.data("fancybox-placeholder"))
                        .data("fancybox-placeholder", !1);
                  }));
              break;
            case "image":
              y = c.tpl.image.replace(/\{href\}/g, C);
              break;
            case "swf":
              (y =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                C +
                '"></param>'),
                (S = ""),
                i.each(c.swf, function (E, M) {
                  (y += '<param name="' + E + '" value="' + M + '"></param>'),
                    (S += " " + E + '="' + M + '"');
                }),
                (y +=
                  '<embed src="' +
                  C +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  S +
                  "></embed></object>");
          }
          (u(y) && y.parent().is(c.inner)) || c.inner.append(y),
            e.trigger("beforeShow"),
            c.inner.css(
              "overflow",
              k === "yes" ? "scroll" : k === "no" ? "hidden" : k
            ),
            e._setDimension(),
            e.reposition(),
            (e.isOpen = !1),
            (e.coming = null),
            e.bindEvents(),
            e.isOpened
              ? f.prevMethod && e.transitions[f.prevMethod]()
              : i(".fancybox-wrap")
                  .not(c.wrap)
                  .stop(!0)
                  .trigger("onReset")
                  .remove(),
            e.transitions[e.isOpened ? c.nextMethod : c.openMethod](),
            e._preloadImages();
        }
    },
    _setDimension: function () {
      var c = e.getViewport(),
        f = 0,
        y,
        b = e.wrap,
        k = e.skin,
        C = e.inner,
        S = e.current;
      y = S.width;
      var E = S.height,
        M = S.minWidth,
        V = S.minHeight,
        st = S.maxWidth,
        gt = S.maxHeight,
        yt = S.scrolling,
        Lt = S.scrollOutside ? S.scrollbarWidth : 0,
        pt = S.margin,
        kt = v(pt[1] + pt[3]),
        ht = v(pt[0] + pt[2]),
        Jt,
        It,
        _e,
        Rt,
        Ut,
        ue,
        wt,
        te,
        re;
      if (
        (b
          .add(k)
          .add(C)
          .width("auto")
          .height("auto")
          .removeClass("fancybox-tmp"),
        (pt = v(k.outerWidth(!0) - k.width())),
        (Jt = v(k.outerHeight(!0) - k.height())),
        (It = kt + pt),
        (_e = ht + Jt),
        (Rt = g(y) ? ((c.w - It) * v(y)) / 100 : y),
        (Ut = g(E) ? ((c.h - _e) * v(E)) / 100 : E),
        S.type === "iframe")
      ) {
        if (((re = S.content), S.autoHeight && re && re.data("ready") === 1))
          try {
            re[0].contentWindow.document.location &&
              (C.width(Rt).height(9999),
              (ue = re.contents().find("body")),
              Lt && ue.css("overflow-x", "hidden"),
              (Ut = ue.outerHeight(!0)));
          } catch (Se) {}
      } else
        (S.autoWidth || S.autoHeight) &&
          (C.addClass("fancybox-tmp"),
          S.autoWidth || C.width(Rt),
          S.autoHeight || C.height(Ut),
          S.autoWidth && (Rt = C.width()),
          S.autoHeight && (Ut = C.height()),
          C.removeClass("fancybox-tmp"));
      if (
        ((y = v(Rt)),
        (E = v(Ut)),
        (te = Rt / Ut),
        (M = v(g(M) ? v(M, "w") - It : M)),
        (st = v(g(st) ? v(st, "w") - It : st)),
        (V = v(g(V) ? v(V, "h") - _e : V)),
        (gt = v(g(gt) ? v(gt, "h") - _e : gt)),
        (ue = st),
        (wt = gt),
        S.fitToView &&
          ((st = Math.min(c.w - It, st)), (gt = Math.min(c.h - _e, gt))),
        (It = c.w - kt),
        (ht = c.h - ht),
        S.aspectRatio
          ? (y > st && ((y = st), (E = v(y / te))),
            E > gt && ((E = gt), (y = v(E * te))),
            y < M && ((y = M), (E = v(y / te))),
            E < V && ((E = V), (y = v(E * te))))
          : ((y = Math.max(M, Math.min(y, st))),
            S.autoHeight &&
              S.type !== "iframe" &&
              (C.width(y), (E = C.height())),
            (E = Math.max(V, Math.min(E, gt)))),
        S.fitToView)
      )
        if (
          (C.width(y).height(E),
          b.width(y + pt),
          (c = b.width()),
          (kt = b.height()),
          S.aspectRatio)
        )
          for (; (c > It || kt > ht) && y > M && E > V && !(19 < f++); )
            (E = Math.max(V, Math.min(gt, E - 10))),
              (y = v(E * te)),
              y < M && ((y = M), (E = v(y / te))),
              y > st && ((y = st), (E = v(y / te))),
              C.width(y).height(E),
              b.width(y + pt),
              (c = b.width()),
              (kt = b.height());
        else
          (y = Math.max(M, Math.min(y, y - (c - It)))),
            (E = Math.max(V, Math.min(E, E - (kt - ht))));
      Lt && yt === "auto" && E < Ut && y + pt + Lt < It && (y += Lt),
        C.width(y).height(E),
        b.width(y + pt),
        (c = b.width()),
        (kt = b.height()),
        (f = (c > It || kt > ht) && y > M && E > V),
        (y = S.aspectRatio
          ? y < ue && E < wt && y < Rt && E < Ut
          : (y < ue || E < wt) && (y < Rt || E < Ut)),
        i.extend(S, {
          dim: {
            width: m(c),
            height: m(kt),
          },
          origWidth: Rt,
          origHeight: Ut,
          canShrink: f,
          canExpand: y,
          wPadding: pt,
          hPadding: Jt,
          wrapSpace: kt - k.outerHeight(!0),
          skinSpace: k.height() - E,
        }),
        !re && S.autoHeight && E > V && E < gt && !y && C.height("auto");
    },
    _getPosition: function (c) {
      var f = e.current,
        y = e.getViewport(),
        C = f.margin,
        b = e.wrap.width() + C[1] + C[3],
        k = e.wrap.height() + C[0] + C[2],
        C = {
          position: "absolute",
          top: C[0],
          left: C[3],
        };
      return (
        f.autoCenter && f.fixed && !c && k <= y.h && b <= y.w
          ? (C.position = "fixed")
          : f.locked || ((C.top += y.y), (C.left += y.x)),
        (C.top = m(Math.max(C.top, C.top + (y.h - k) * f.topRatio))),
        (C.left = m(Math.max(C.left, C.left + (y.w - b) * f.leftRatio))),
        C
      );
    },
    _afterZoomIn: function () {
      var c = e.current;
      c &&
        ((e.isOpen = e.isOpened = !0),
        e.wrap
          .css("overflow", "visible")
          .addClass("fancybox-opened")
          .hide()
          .show(0),
        e.update(),
        (c.closeClick || (c.nextClick && 1 < e.group.length)) &&
          e.inner.css("cursor", "pointer").bind("click.fb", function (f) {
            i(f.target).is("a") ||
              i(f.target).parent().is("a") ||
              (f.preventDefault(), e[c.closeClick ? "close" : "next"]());
          }),
        c.closeBtn &&
          i(c.tpl.closeBtn)
            .appendTo(e.skin)
            .bind("click.fb", function (f) {
              f.preventDefault(), e.close();
            }),
        c.arrows &&
          1 < e.group.length &&
          ((c.loop || 0 < c.index) &&
            i(c.tpl.prev).appendTo(e.outer).bind("click.fb", e.prev),
          (c.loop || c.index < e.group.length - 1) &&
            i(c.tpl.next).appendTo(e.outer).bind("click.fb", e.next)),
        e.trigger("afterShow"),
        c.loop || c.index !== c.group.length - 1
          ? e.opts.autoPlay &&
            !e.player.isActive &&
            ((e.opts.autoPlay = !1), e.play(!0))
          : e.play(!1));
    },
    _afterZoomOut: function (c) {
      (c = c || e.current),
        i(".fancybox-wrap").trigger("onReset").remove(),
        i.extend(e, {
          group: {},
          opts: {},
          router: !1,
          current: null,
          isActive: !1,
          isOpened: !1,
          isOpen: !1,
          isClosing: !1,
          wrap: null,
          skin: null,
          outer: null,
          inner: null,
        }),
        e.trigger("afterClose", c);
    },
  }),
    (e.transitions = {
      getOrigPosition: function () {
        var c = e.current,
          f = c.element,
          y = c.orig,
          b = {},
          k = 50,
          C = 50,
          S = c.hPadding,
          E = c.wPadding,
          M = e.getViewport();
        return (
          !y &&
            c.isDom &&
            f.is(":visible") &&
            ((y = f.find("img:first")), y.length || (y = f)),
          u(y)
            ? ((b = y.offset()),
              y.is("img") && ((k = y.outerWidth()), (C = y.outerHeight())))
            : ((b.top = M.y + (M.h - C) * c.topRatio),
              (b.left = M.x + (M.w - k) * c.leftRatio)),
          (e.wrap.css("position") === "fixed" || c.locked) &&
            ((b.top -= M.y), (b.left -= M.x)),
          (b = {
            top: m(b.top - S * c.topRatio),
            left: m(b.left - E * c.leftRatio),
            width: m(k + E),
            height: m(C + S),
          })
        );
      },
      step: function (c, f) {
        var y,
          b,
          k = f.prop;
        b = e.current;
        var C = b.wrapSpace,
          S = b.skinSpace;
        (k === "width" || k === "height") &&
          ((y = f.end === f.start ? 1 : (c - f.start) / (f.end - f.start)),
          e.isClosing && (y = 1 - y),
          (b = k === "width" ? b.wPadding : b.hPadding),
          (b = c - b),
          e.skin[k](v(k === "width" ? b : b - C * y)),
          e.inner[k](v(k === "width" ? b : b - C * y - S * y)));
      },
      zoomIn: function () {
        var c = e.current,
          f = c.pos,
          y = c.openEffect,
          b = y === "elastic",
          k = i.extend(
            {
              opacity: 1,
            },
            f
          );
        delete k.position,
          b
            ? ((f = this.getOrigPosition()), c.openOpacity && (f.opacity = 0.1))
            : y === "fade" && (f.opacity = 0.1),
          e.wrap.css(f).animate(k, {
            duration: y === "none" ? 0 : c.openSpeed,
            easing: c.openEasing,
            step: b ? this.step : null,
            complete: e._afterZoomIn,
          });
      },
      zoomOut: function () {
        var c = e.current,
          f = c.closeEffect,
          y = f === "elastic",
          b = {
            opacity: 0.1,
          };
        y &&
          ((b = this.getOrigPosition()), c.closeOpacity && (b.opacity = 0.1)),
          e.wrap.animate(b, {
            duration: f === "none" ? 0 : c.closeSpeed,
            easing: c.closeEasing,
            step: y ? this.step : null,
            complete: e._afterZoomOut,
          });
      },
      changeIn: function () {
        var c = e.current,
          f = c.nextEffect,
          y = c.pos,
          b = {
            opacity: 1,
          },
          k = e.direction,
          C;
        (y.opacity = 0.1),
          f === "elastic" &&
            ((C = k === "down" || k === "up" ? "top" : "left"),
            k === "down" || k === "right"
              ? ((y[C] = m(v(y[C]) - 200)), (b[C] = "+=200px"))
              : ((y[C] = m(v(y[C]) + 200)), (b[C] = "-=200px"))),
          f === "none"
            ? e._afterZoomIn()
            : e.wrap.css(y).animate(b, {
                duration: c.nextSpeed,
                easing: c.nextEasing,
                complete: e._afterZoomIn,
              });
      },
      changeOut: function () {
        var c = e.previous,
          f = c.prevEffect,
          y = {
            opacity: 0.1,
          },
          b = e.direction;
        f === "elastic" &&
          (y[b === "down" || b === "up" ? "top" : "left"] =
            (b === "up" || b === "left" ? "-" : "+") + "=200px"),
          c.wrap.animate(y, {
            duration: f === "none" ? 0 : c.prevSpeed,
            easing: c.prevEasing,
            complete: function () {
              i(this).trigger("onReset").remove();
            },
          });
      },
    }),
    (e.helpers.overlay = {
      defaults: {
        closeClick: !0,
        speedOut: 200,
        showEarly: !0,
        css: {},
        locked: !d,
        fixed: !0,
      },
      overlay: null,
      fixed: !1,
      el: i("html"),
      create: function (c) {
        var f;
        (c = i.extend({}, this.defaults, c)),
          this.overlay && this.close(),
          (f = e.coming ? e.coming.parent : c.parent),
          (this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(
            f && f.length ? f : "body"
          )),
          (this.fixed = !1),
          c.fixed &&
            e.defaults.fixed &&
            (this.overlay.addClass("fancybox-overlay-fixed"),
            (this.fixed = !0));
      },
      open: function (c) {
        var f = this;
        (c = i.extend({}, this.defaults, c)),
          this.overlay
            ? this.overlay.unbind(".overlay").width("auto").height("auto")
            : this.create(c),
          this.fixed ||
            (n.bind("resize.overlay", i.proxy(this.update, this)),
            this.update()),
          c.closeClick &&
            this.overlay.bind("click.overlay", function (y) {
              if (i(y.target).hasClass("fancybox-overlay"))
                return e.isActive ? e.close() : f.close(), !1;
            }),
          this.overlay.css(c.css).show();
      },
      close: function () {
        n.unbind("resize.overlay"),
          this.el.hasClass("fancybox-lock") &&
            (i(".fancybox-margin").removeClass("fancybox-margin"),
            this.el.removeClass("fancybox-lock"),
            n.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
          i(".fancybox-overlay").remove().hide(),
          i.extend(this, {
            overlay: null,
            fixed: !1,
          });
      },
      update: function () {
        var c = "100%",
          f;
        this.overlay.width(c).height("100%"),
          r
            ? ((f = Math.max(
                p.documentElement.offsetWidth,
                p.body.offsetWidth
              )),
              t.width() > f && (c = t.width()))
            : t.width() > n.width() && (c = t.width()),
          this.overlay.width(c).height(t.height());
      },
      onReady: function (c, f) {
        var y = this.overlay;
        i(".fancybox-overlay").stop(!0, !0),
          y || this.create(c),
          c.locked &&
            this.fixed &&
            f.fixed &&
            ((f.locked = this.overlay.append(f.wrap)), (f.fixed = !1)),
          c.showEarly === !0 && this.beforeShow.apply(this, arguments);
      },
      beforeShow: function (c, f) {
        f.locked &&
          !this.el.hasClass("fancybox-lock") &&
          (this.fixPosition !== !1 &&
            i("*:not(object)")
              .filter(function () {
                return (
                  i(this).css("position") === "fixed" &&
                  !i(this).hasClass("fancybox-overlay") &&
                  !i(this).hasClass("fancybox-wrap")
                );
              })
              .addClass("fancybox-margin"),
          this.el.addClass("fancybox-margin"),
          (this.scrollV = n.scrollTop()),
          (this.scrollH = n.scrollLeft()),
          this.el.addClass("fancybox-lock"),
          n.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
          this.open(c);
      },
      onUpdate: function () {
        this.fixed || this.update();
      },
      afterClose: function (c) {
        this.overlay &&
          !e.coming &&
          this.overlay.fadeOut(c.speedOut, i.proxy(this.close, this));
      },
    }),
    (e.helpers.title = {
      defaults: {
        type: "float",
        position: "bottom",
      },
      beforeShow: function (c) {
        var f = e.current,
          y = f.title,
          b = c.type;
        if (
          (i.isFunction(y) && (y = y.call(f.element, f)),
          h(y) && i.trim(y) !== "")
        ) {
          switch (
            ((f = i(
              '<div class="fancybox-title fancybox-title-' +
                b +
                '-wrap">' +
                y +
                "</div>"
            )),
            b)
          ) {
            case "inside":
              b = e.skin;
              break;
            case "outside":
              b = e.wrap;
              break;
            case "over":
              b = e.inner;
              break;
            default:
              (b = e.skin),
                f.appendTo("body"),
                r && f.width(f.width()),
                f.wrapInner('<span class="child"></span>'),
                (e.current.margin[2] += Math.abs(v(f.css("margin-bottom"))));
          }
          f[c.position === "top" ? "prependTo" : "appendTo"](b);
        }
      },
    }),
    (i.fn.fancybox = function (c) {
      var f,
        y = i(this),
        b = this.selector || "",
        k = function (C) {
          var S = i(this).blur(),
            E = f,
            M,
            V;
          C.ctrlKey ||
            C.altKey ||
            C.shiftKey ||
            C.metaKey ||
            S.is(".fancybox-wrap") ||
            ((M = c.groupAttr || "data-fancybox-group"),
            (V = S.attr(M)),
            V || ((M = "rel"), (V = S.get(0)[M])),
            V &&
              V !== "" &&
              V !== "nofollow" &&
              ((S = b.length ? i(b) : y),
              (S = S.filter("[" + M + '="' + V + '"]')),
              (E = S.index(this))),
            (c.index = E),
            e.open(S, c) !== !1 && C.preventDefault());
        };
      return (
        (c = c || {}),
        (f = c.index || 0),
        b && c.live !== !1
          ? t
              .undelegate(b, "click.fb-start")
              .delegate(
                b + ":not('.fancybox-item, .fancybox-nav')",
                "click.fb-start",
                k
              )
          : y.unbind("click.fb-start").bind("click.fb-start", k),
        this.filter("[data-fancybox-start=1]").trigger("click"),
        this
      );
    }),
    t.ready(function () {
      var c, f;
      i.scrollbarWidth === s &&
        (i.scrollbarWidth = function () {
          var y = i(
              '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
            ).appendTo("body"),
            b = y.children(),
            b = b.innerWidth() - b.height(99).innerWidth();
          return y.remove(), b;
        }),
        i.support.fixedPosition === s &&
          (i.support.fixedPosition = (function () {
            var y = i('<div style="position:fixed;top:20px;"></div>').appendTo(
                "body"
              ),
              b = y[0].offsetTop === 20 || y[0].offsetTop === 15;
            return y.remove(), b;
          })()),
        i.extend(e.defaults, {
          scrollbarWidth: i.scrollbarWidth(),
          fixed: i.support.fixedPosition,
          parent: i("body"),
        }),
        (c = i(o).width()),
        l.addClass("fancybox-lock-test"),
        (f = i(o).width()),
        l.removeClass("fancybox-lock-test"),
        i(
          "<style type='text/css'>.fancybox-margin{margin-right:" +
            (f - c) +
            "px;}</style>"
        ).appendTo("head");
    });
})(window, document, jQuery);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
  function o() {}

  function p(t, e) {
    for (var r = t.length; r--; ) if (t[r].listener === e) return r;
    return -1;
  }

  function i(t) {
    return function () {
      return this[t].apply(this, arguments);
    };
  }
  var s = o.prototype,
    l = this,
    n = l.EventEmitter;
  (s.getListeners = function (t) {
    var e,
      r,
      a = this._getEvents();
    if (typeof t == "object") {
      e = {};
      for (r in a) a.hasOwnProperty(r) && t.test(r) && (e[r] = a[r]);
    } else e = a[t] || (a[t] = []);
    return e;
  }),
    (s.flattenListeners = function (t) {
      var e,
        r = [];
      for (e = 0; t.length > e; e += 1) r.push(t[e].listener);
      return r;
    }),
    (s.getListenersAsObject = function (t) {
      var e,
        r = this.getListeners(t);
      return r instanceof Array && ((e = {}), (e[t] = r)), e || r;
    }),
    (s.addListener = function (t, e) {
      var r,
        a = this.getListenersAsObject(t),
        d = typeof e == "object";
      for (r in a)
        a.hasOwnProperty(r) &&
          p(a[r], e) === -1 &&
          a[r].push(
            d
              ? e
              : {
                  listener: e,
                  once: !1,
                }
          );
      return this;
    }),
    (s.on = i("addListener")),
    (s.addOnceListener = function (t, e) {
      return this.addListener(t, {
        listener: e,
        once: !0,
      });
    }),
    (s.once = i("addOnceListener")),
    (s.defineEvent = function (t) {
      return this.getListeners(t), this;
    }),
    (s.defineEvents = function (t) {
      for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
      return this;
    }),
    (s.removeListener = function (t, e) {
      var r,
        a,
        d = this.getListenersAsObject(t);
      for (a in d)
        d.hasOwnProperty(a) &&
          ((r = p(d[a], e)), r !== -1 && d[a].splice(r, 1));
      return this;
    }),
    (s.off = i("removeListener")),
    (s.addListeners = function (t, e) {
      return this.manipulateListeners(!1, t, e);
    }),
    (s.removeListeners = function (t, e) {
      return this.manipulateListeners(!0, t, e);
    }),
    (s.manipulateListeners = function (t, e, r) {
      var a,
        d,
        u = t ? this.removeListener : this.addListener,
        h = t ? this.removeListeners : this.addListeners;
      if (typeof e != "object" || e instanceof RegExp)
        for (a = r.length; a--; ) u.call(this, e, r[a]);
      else
        for (a in e)
          e.hasOwnProperty(a) &&
            (d = e[a]) &&
            (typeof d == "function" ? u.call(this, a, d) : h.call(this, a, d));
      return this;
    }),
    (s.removeEvent = function (t) {
      var e,
        r = typeof t,
        a = this._getEvents();
      if (r === "string") delete a[t];
      else if (r === "object")
        for (e in a) a.hasOwnProperty(e) && t.test(e) && delete a[e];
      else delete this._events;
      return this;
    }),
    (s.removeAllListeners = i("removeEvent")),
    (s.emitEvent = function (t, e) {
      var r,
        a,
        d,
        u,
        h = this.getListenersAsObject(t);
      for (d in h)
        if (h.hasOwnProperty(d))
          for (a = h[d].length; a--; )
            (r = h[d][a]),
              r.once === !0 && this.removeListener(t, r.listener),
              (u = r.listener.apply(this, e || [])),
              u === this._getOnceReturnValue() &&
                this.removeListener(t, r.listener);
      return this;
    }),
    (s.trigger = i("emitEvent")),
    (s.emit = function (t) {
      var e = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(t, e);
    }),
    (s.setOnceReturnValue = function (t) {
      return (this._onceReturnValue = t), this;
    }),
    (s._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (s._getEvents = function () {
      return this._events || (this._events = {});
    }),
    (o.noConflict = function () {
      return (l.EventEmitter = n), o;
    }),
    typeof define == "function" && define.amd
      ? define("eventEmitter/EventEmitter", [], function () {
          return o;
        })
      : typeof module == "object" && module.exports
      ? (module.exports = o)
      : (this.EventEmitter = o);
}.call(this),
  (function (o) {
    function p(t) {
      var e = o.event;
      return (e.target = e.target || e.srcElement || t), e;
    }
    var i = document.documentElement,
      s = function () {};
    i.addEventListener
      ? (s = function (t, e, r) {
          t.addEventListener(e, r, !1);
        })
      : i.attachEvent &&
        (s = function (t, e, r) {
          (t[e + r] = r.handleEvent
            ? function () {
                var a = p(t);
                r.handleEvent.call(r, a);
              }
            : function () {
                var a = p(t);
                r.call(t, a);
              }),
            t.attachEvent("on" + e, t[e + r]);
        });
    var l = function () {};
    i.removeEventListener
      ? (l = function (t, e, r) {
          t.removeEventListener(e, r, !1);
        })
      : i.detachEvent &&
        (l = function (t, e, r) {
          t.detachEvent("on" + e, t[e + r]);
          try {
            delete t[e + r];
          } catch (a) {
            t[e + r] = void 0;
          }
        });
    var n = {
      bind: s,
      unbind: l,
    };
    typeof define == "function" && define.amd
      ? define("eventie/eventie", n)
      : (o.eventie = n);
  })(this),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          ["eventEmitter/EventEmitter", "eventie/eventie"],
          function (i, s) {
            return p(o, i, s);
          }
        )
      : typeof exports == "object"
      ? (module.exports = p(
          o,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (o.imagesLoaded = p(o, o.EventEmitter, o.eventie));
  })(window, function (o, p, i) {
    function s(v, m) {
      for (var c in m) v[c] = m[c];
      return v;
    }

    function l(v) {
      return h.call(v) === "[object Array]";
    }

    function n(v) {
      var m = [];
      if (l(v)) m = v;
      else if (typeof v.length == "number")
        for (var c = 0, f = v.length; f > c; c++) m.push(v[c]);
      else m.push(v);
      return m;
    }

    function t(v, m, c) {
      if (!(this instanceof t)) return new t(v, m);
      typeof v == "string" && (v = document.querySelectorAll(v)),
        (this.elements = n(v)),
        (this.options = s({}, this.options)),
        typeof m == "function" ? (c = m) : s(this.options, m),
        c && this.on("always", c),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred());
      var f = this;
      setTimeout(function () {
        f.check();
      });
    }

    function e(v) {
      this.img = v;
    }

    function r(v) {
      (this.src = v), (g[v] = this);
    }
    var a = o.jQuery,
      d = o.console,
      u = d !== void 0,
      h = Object.prototype.toString;
    (t.prototype = new p()),
      (t.prototype.options = {}),
      (t.prototype.getImages = function () {
        this.images = [];
        for (var v = 0, m = this.elements.length; m > v; v++) {
          var c = this.elements[v];
          c.nodeName === "IMG" && this.addImage(c);
          var f = c.nodeType;
          if (f && (f === 1 || f === 9 || f === 11))
            for (
              var y = c.querySelectorAll("img"), b = 0, k = y.length;
              k > b;
              b++
            ) {
              var C = y[b];
              this.addImage(C);
            }
        }
      }),
      (t.prototype.addImage = function (v) {
        var m = new e(v);
        this.images.push(m);
      }),
      (t.prototype.check = function () {
        function v(k, C) {
          return (
            m.options.debug && u && d.log("confirm", k, C),
            m.progress(k),
            c++,
            c === f && m.complete(),
            !0
          );
        }
        var m = this,
          c = 0,
          f = this.images.length;
        if (((this.hasAnyBroken = !1), !f)) return this.complete(), void 0;
        for (var y = 0; f > y; y++) {
          var b = this.images[y];
          b.on("confirm", v), b.check();
        }
      }),
      (t.prototype.progress = function (v) {
        this.hasAnyBroken = this.hasAnyBroken || !v.isLoaded;
        var m = this;
        setTimeout(function () {
          m.emit("progress", m, v),
            m.jqDeferred && m.jqDeferred.notify && m.jqDeferred.notify(m, v);
        });
      }),
      (t.prototype.complete = function () {
        var v = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var m = this;
        setTimeout(function () {
          if ((m.emit(v, m), m.emit("always", m), m.jqDeferred)) {
            var c = m.hasAnyBroken ? "reject" : "resolve";
            m.jqDeferred[c](m);
          }
        });
      }),
      a &&
        (a.fn.imagesLoaded = function (v, m) {
          var c = new t(this, v, m);
          return c.jqDeferred.promise(a(this));
        }),
      (e.prototype = new p()),
      (e.prototype.check = function () {
        var v = g[this.img.src] || new r(this.img.src);
        if (v.isConfirmed)
          return this.confirm(v.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && this.img.naturalWidth !== void 0)
          return (
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), void 0
          );
        var m = this;
        v.on("confirm", function (c, f) {
          return m.confirm(c.isLoaded, f), !0;
        }),
          v.check();
      }),
      (e.prototype.confirm = function (v, m) {
        (this.isLoaded = v), this.emit("confirm", this, m);
      });
    var g = {};
    return (
      (r.prototype = new p()),
      (r.prototype.check = function () {
        if (!this.isChecked) {
          var v = new Image();
          i.bind(v, "load", this),
            i.bind(v, "error", this),
            (v.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (r.prototype.handleEvent = function (v) {
        var m = "on" + v.type;
        this[m] && this[m](v);
      }),
      (r.prototype.onload = function (v) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(v);
      }),
      (r.prototype.onerror = function (v) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(v);
      }),
      (r.prototype.confirm = function (v, m) {
        (this.isConfirmed = !0),
          (this.isLoaded = v),
          this.emit("confirm", this, m);
      }),
      (r.prototype.unbindProxyEvents = function (v) {
        i.unbind(v.target, "load", this), i.unbind(v.target, "error", this);
      }),
      t
    );
  }));
/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function (o) {
  function p() {}

  function i(l) {
    function n(r) {
      r.prototype.option ||
        (r.prototype.option = function (a) {
          l.isPlainObject(a) && (this.options = l.extend(!0, this.options, a));
        });
    }

    function t(r, a) {
      l.fn[r] = function (d) {
        if (typeof d == "string") {
          for (
            var u = s.call(arguments, 1), h = 0, g = this.length;
            g > h;
            h++
          ) {
            var v = this[h],
              m = l.data(v, r);
            if (m)
              if (l.isFunction(m[d]) && d.charAt(0) !== "_") {
                var c = m[d].apply(m, u);
                if (c !== void 0) return c;
              } else e("no such method '" + d + "' for " + r + " instance");
            else
              e(
                "cannot call methods on " +
                  r +
                  " prior to initialization; attempted to call '" +
                  d +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var f = l.data(this, r);
          f
            ? (f.option(d), f._init())
            : ((f = new a(this, d)), l.data(this, r, f));
        });
      };
    }
    if (l) {
      var e =
        typeof console == "undefined"
          ? p
          : function (r) {
              console.error(r);
            };
      return (
        (l.bridget = function (r, a) {
          n(a), t(r, a);
        }),
        l.bridget
      );
    }
  }
  var s = Array.prototype.slice;
  typeof define == "function" && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
    : i(typeof exports == "object" ? require("jquery") : o.jQuery);
})(window),
  (function (o) {
    function p(t) {
      var e = o.event;
      return (e.target = e.target || e.srcElement || t), e;
    }
    var i = document.documentElement,
      s = function () {};
    i.addEventListener
      ? (s = function (t, e, r) {
          t.addEventListener(e, r, !1);
        })
      : i.attachEvent &&
        (s = function (t, e, r) {
          (t[e + r] = r.handleEvent
            ? function () {
                var a = p(t);
                r.handleEvent.call(r, a);
              }
            : function () {
                var a = p(t);
                r.call(t, a);
              }),
            t.attachEvent("on" + e, t[e + r]);
        });
    var l = function () {};
    i.removeEventListener
      ? (l = function (t, e, r) {
          t.removeEventListener(e, r, !1);
        })
      : i.detachEvent &&
        (l = function (t, e, r) {
          t.detachEvent("on" + e, t[e + r]);
          try {
            delete t[e + r];
          } catch (a) {
            t[e + r] = void 0;
          }
        });
    var n = {
      bind: s,
      unbind: l,
    };
    typeof define == "function" && define.amd
      ? define("eventie/eventie", n)
      : typeof exports == "object"
      ? (module.exports = n)
      : (o.eventie = n);
  })(window),
  function () {
    function o() {}

    function p(t, e) {
      for (var r = t.length; r--; ) if (t[r].listener === e) return r;
      return -1;
    }

    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var s = o.prototype,
      l = this,
      n = l.EventEmitter;
    (s.getListeners = function (t) {
      var e,
        r,
        a = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (r in a) a.hasOwnProperty(r) && t.test(r) && (e[r] = a[r]);
      } else e = a[t] || (a[t] = []);
      return e;
    }),
      (s.flattenListeners = function (t) {
        var e,
          r = [];
        for (e = 0; t.length > e; e += 1) r.push(t[e].listener);
        return r;
      }),
      (s.getListenersAsObject = function (t) {
        var e,
          r = this.getListeners(t);
        return r instanceof Array && ((e = {}), (e[t] = r)), e || r;
      }),
      (s.addListener = function (t, e) {
        var r,
          a = this.getListenersAsObject(t),
          d = typeof e == "object";
        for (r in a)
          a.hasOwnProperty(r) &&
            p(a[r], e) === -1 &&
            a[r].push(
              d
                ? e
                : {
                    listener: e,
                    once: !1,
                  }
            );
        return this;
      }),
      (s.on = i("addListener")),
      (s.addOnceListener = function (t, e) {
        return this.addListener(t, {
          listener: e,
          once: !0,
        });
      }),
      (s.once = i("addOnceListener")),
      (s.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (s.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (s.removeListener = function (t, e) {
        var r,
          a,
          d = this.getListenersAsObject(t);
        for (a in d)
          d.hasOwnProperty(a) &&
            ((r = p(d[a], e)), r !== -1 && d[a].splice(r, 1));
        return this;
      }),
      (s.off = i("removeListener")),
      (s.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (s.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (s.manipulateListeners = function (t, e, r) {
        var a,
          d,
          u = t ? this.removeListener : this.addListener,
          h = t ? this.removeListeners : this.addListeners;
        if (typeof e != "object" || e instanceof RegExp)
          for (a = r.length; a--; ) u.call(this, e, r[a]);
        else
          for (a in e)
            e.hasOwnProperty(a) &&
              (d = e[a]) &&
              (typeof d == "function"
                ? u.call(this, a, d)
                : h.call(this, a, d));
        return this;
      }),
      (s.removeEvent = function (t) {
        var e,
          r = typeof t,
          a = this._getEvents();
        if (r === "string") delete a[t];
        else if (t instanceof RegExp)
          for (e in a) a.hasOwnProperty(e) && t.test(e) && delete a[e];
        else delete this._events;
        return this;
      }),
      (s.removeAllListeners = i("removeEvent")),
      (s.emitEvent = function (t, e) {
        var r,
          a,
          d,
          u,
          h = this.getListenersAsObject(t);
        for (d in h)
          if (h.hasOwnProperty(d))
            for (a = h[d].length; a--; )
              (r = h[d][a]),
                r.once === !0 && this.removeListener(t, r.listener),
                (u = r.listener.apply(this, e || [])),
                u === this._getOnceReturnValue() &&
                  this.removeListener(t, r.listener);
        return this;
      }),
      (s.trigger = i("emitEvent")),
      (s.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (s.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (s._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (s._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (o.noConflict = function () {
        return (l.EventEmitter = n), o;
      }),
      typeof define == "function" && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return o;
          })
        : typeof module == "object" && module.exports
        ? (module.exports = o)
        : (l.EventEmitter = o);
  }.call(this),
  (function (o) {
    function p(l) {
      if (l) {
        if (typeof s[l] == "string") return l;
        l = l.charAt(0).toUpperCase() + l.slice(1);
        for (var n, t = 0, e = i.length; e > t; t++)
          if (((n = i[t] + l), typeof s[n] == "string")) return n;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      s = document.documentElement.style;
    typeof define == "function" && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return p;
        })
      : typeof exports == "object"
      ? (module.exports = p)
      : (o.getStyleProperty = p);
  })(window),
  (function (o) {
    function p(e) {
      var r = parseFloat(e),
        a = e.indexOf("%") === -1 && !isNaN(r);
      return a && r;
    }

    function i() {}

    function s() {
      for (
        var e = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          r = 0,
          a = t.length;
        a > r;
        r++
      ) {
        var d = t[r];
        e[d] = 0;
      }
      return e;
    }

    function l(e) {
      function r() {
        if (!v) {
          v = !0;
          var m = o.getComputedStyle;
          if (
            ((u = (function () {
              var b = m
                ? function (k) {
                    return m(k, null);
                  }
                : function (k) {
                    return k.currentStyle;
                  };
              return function (k) {
                var C = b(k);
                return (
                  C ||
                    n(
                      "Style returned " +
                        C +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  C
                );
              };
            })()),
            (h = e("boxSizing")))
          ) {
            var c = document.createElement("div");
            (c.style.width = "200px"),
              (c.style.padding = "1px 2px 3px 4px"),
              (c.style.borderStyle = "solid"),
              (c.style.borderWidth = "1px 2px 3px 4px"),
              (c.style[h] = "border-box");
            var f = document.body || document.documentElement;
            f.appendChild(c);
            var y = u(c);
            (g = p(y.width) === 200), f.removeChild(c);
          }
        }
      }

      function a(m) {
        if (
          (r(),
          typeof m == "string" && (m = document.querySelector(m)),
          m && typeof m == "object" && m.nodeType)
        ) {
          var c = u(m);
          if (c.display === "none") return s();
          var f = {};
          (f.width = m.offsetWidth), (f.height = m.offsetHeight);
          for (
            var y = (f.isBorderBox = !(!h || !c[h] || c[h] !== "border-box")),
              b = 0,
              k = t.length;
            k > b;
            b++
          ) {
            var C = t[b],
              S = c[C];
            S = d(m, S);
            var E = parseFloat(S);
            f[C] = isNaN(E) ? 0 : E;
          }
          var M = f.paddingLeft + f.paddingRight,
            V = f.paddingTop + f.paddingBottom,
            st = f.marginLeft + f.marginRight,
            gt = f.marginTop + f.marginBottom,
            yt = f.borderLeftWidth + f.borderRightWidth,
            Lt = f.borderTopWidth + f.borderBottomWidth,
            pt = y && g,
            kt = p(c.width);
          kt !== !1 && (f.width = kt + (pt ? 0 : M + yt));
          var ht = p(c.height);
          return (
            ht !== !1 && (f.height = ht + (pt ? 0 : V + Lt)),
            (f.innerWidth = f.width - (M + yt)),
            (f.innerHeight = f.height - (V + Lt)),
            (f.outerWidth = f.width + st),
            (f.outerHeight = f.height + gt),
            f
          );
        }
      }

      function d(m, c) {
        if (o.getComputedStyle || c.indexOf("%") === -1) return c;
        var f = m.style,
          y = f.left,
          b = m.runtimeStyle,
          k = b && b.left;
        return (
          k && (b.left = m.currentStyle.left),
          (f.left = c),
          (c = f.pixelLeft),
          (f.left = y),
          k && (b.left = k),
          c
        );
      }
      var u,
        h,
        g,
        v = !1;
      return a;
    }
    var n =
        typeof console == "undefined"
          ? i
          : function (e) {
              console.error(e);
            },
      t = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    typeof define == "function" && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          l
        )
      : typeof exports == "object"
      ? (module.exports = l(require("desandro-get-style-property")))
      : (o.getSize = l(o.getStyleProperty));
  })(window),
  (function (o) {
    function p(e) {
      typeof e == "function" && (p.isReady ? e() : t.push(e));
    }

    function i(e) {
      var r = e.type === "readystatechange" && n.readyState !== "complete";
      p.isReady || r || s();
    }

    function s() {
      p.isReady = !0;
      for (var e = 0, r = t.length; r > e; e++) {
        var a = t[e];
        a();
      }
    }

    function l(e) {
      return (
        n.readyState === "complete"
          ? s()
          : (e.bind(n, "DOMContentLoaded", i),
            e.bind(n, "readystatechange", i),
            e.bind(o, "load", i)),
        p
      );
    }
    var n = o.document,
      t = [];
    (p.isReady = !1),
      typeof define == "function" && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], l)
        : typeof exports == "object"
        ? (module.exports = l(require("eventie")))
        : (o.docReady = l(o.eventie));
  })(window),
  (function (o) {
    function p(a, d) {
      return a[t](d);
    }

    function i(a) {
      if (!a.parentNode) {
        var d = document.createDocumentFragment();
        d.appendChild(a);
      }
    }

    function s(a, d) {
      i(a);
      for (
        var u = a.parentNode.querySelectorAll(d), h = 0, g = u.length;
        g > h;
        h++
      )
        if (u[h] === a) return !0;
      return !1;
    }

    function l(a, d) {
      return i(a), p(a, d);
    }
    var n,
      t = (function () {
        if (o.matches) return "matches";
        if (o.matchesSelector) return "matchesSelector";
        for (
          var a = ["webkit", "moz", "ms", "o"], d = 0, u = a.length;
          u > d;
          d++
        ) {
          var h = a[d],
            g = h + "MatchesSelector";
          if (o[g]) return g;
        }
      })();
    if (t) {
      var e = document.createElement("div"),
        r = p(e, "div");
      n = r ? p : l;
    } else n = s;
    typeof define == "function" && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return n;
        })
      : typeof exports == "object"
      ? (module.exports = n)
      : (window.matchesSelector = n);
  })(Element.prototype),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["doc-ready/doc-ready", "matches-selector/matches-selector"],
          function (i, s) {
            return p(o, i, s);
          }
        )
      : typeof exports == "object"
      ? (module.exports = p(
          o,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (o.fizzyUIUtils = p(o, o.docReady, o.matchesSelector));
  })(window, function (o, p, i) {
    var s = {};
    (s.extend = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }),
      (s.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var l = Object.prototype.toString;
    (s.isArray = function (t) {
      return l.call(t) == "[object Array]";
    }),
      (s.makeArray = function (t) {
        var e = [];
        if (s.isArray(t)) e = t;
        else if (t && typeof t.length == "number")
          for (var r = 0, a = t.length; a > r; r++) e.push(t[r]);
        else e.push(t);
        return e;
      }),
      (s.indexOf = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var r = 0, a = t.length; a > r; r++) if (t[r] === e) return r;
            return -1;
          }),
      (s.removeFrom = function (t, e) {
        var r = s.indexOf(t, e);
        r != -1 && t.splice(r, 1);
      }),
      (s.isElement =
        typeof HTMLElement == "function" || typeof HTMLElement == "object"
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                typeof t == "object" &&
                t.nodeType == 1 &&
                typeof t.nodeName == "string"
              );
            }),
      (s.setText = (function () {
        function t(r, a) {
          (e =
            e ||
            (document.documentElement.textContent !== void 0
              ? "textContent"
              : "innerText")),
            (r[e] = a);
        }
        var e;
        return t;
      })()),
      (s.getParent = function (t, e) {
        for (; t != document.body; )
          if (((t = t.parentNode), i(t, e))) return t;
      }),
      (s.getQueryElement = function (t) {
        return typeof t == "string" ? document.querySelector(t) : t;
      }),
      (s.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (s.filterFindElements = function (t, e) {
        t = s.makeArray(t);
        for (var r = [], a = 0, d = t.length; d > a; a++) {
          var u = t[a];
          if (s.isElement(u))
            if (e) {
              i(u, e) && r.push(u);
              for (
                var h = u.querySelectorAll(e), g = 0, v = h.length;
                v > g;
                g++
              )
                r.push(h[g]);
            } else r.push(u);
        }
        return r;
      }),
      (s.debounceMethod = function (t, e, r) {
        var a = t.prototype[e],
          d = e + "Timeout";
        t.prototype[e] = function () {
          var u = this[d];
          u && clearTimeout(u);
          var h = arguments,
            g = this;
          this[d] = setTimeout(function () {
            a.apply(g, h), delete g[d];
          }, r || 100);
        };
      }),
      (s.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (e, r, a) {
            return r + "-" + a;
          })
          .toLowerCase();
      });
    var n = o.console;
    return (
      (s.htmlInit = function (t, e) {
        p(function () {
          for (
            var r = s.toDashed(e),
              a = document.querySelectorAll(".js-" + r),
              d = "data-" + r + "-options",
              u = 0,
              h = a.length;
            h > u;
            u++
          ) {
            var g,
              v = a[u],
              m = v.getAttribute(d);
            try {
              g = m && JSON.parse(m);
            } catch (y) {
              n &&
                n.error(
                  "Error parsing " +
                    d +
                    " on " +
                    v.nodeName.toLowerCase() +
                    (v.id ? "#" + v.id : "") +
                    ": " +
                    y
                );
              continue;
            }
            var c = new t(v, g),
              f = o.jQuery;
            f && f.data(v, e, c);
          }
        });
      }),
      s
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
            "fizzy-ui-utils/utils",
          ],
          function (i, s, l, n) {
            return p(o, i, s, l, n);
          }
        )
      : typeof exports == "object"
      ? (module.exports = p(
          o,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((o.Outlayer = {}),
        (o.Outlayer.Item = p(
          o,
          o.EventEmitter,
          o.getSize,
          o.getStyleProperty,
          o.fizzyUIUtils
        )));
  })(window, function (o, p, i, s, l) {
    function n(k) {
      for (var C in k) return !1;
      return (C = null), !0;
    }

    function t(k, C) {
      k &&
        ((this.element = k),
        (this.layout = C),
        (this.position = {
          x: 0,
          y: 0,
        }),
        this._create());
    }
    var e = o.getComputedStyle,
      r = e
        ? function (k) {
            return e(k, null);
          }
        : function (k) {
            return k.currentStyle;
          },
      a = s("transition"),
      d = s("transform"),
      u = a && d,
      h = !!s("perspective"),
      g = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[a],
      v = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      m = (function () {
        for (var k = {}, C = 0, S = v.length; S > C; C++) {
          var E = v[C],
            M = s(E);
          M && M !== E && (k[E] = M);
        }
        return k;
      })();
    l.extend(t.prototype, p.prototype),
      (t.prototype._create = function () {
        (this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {},
        }),
          this.css({
            position: "absolute",
          });
      }),
      (t.prototype.handleEvent = function (k) {
        var C = "on" + k.type;
        this[C] && this[C](k);
      }),
      (t.prototype.getSize = function () {
        this.size = i(this.element);
      }),
      (t.prototype.css = function (k) {
        var C = this.element.style;
        for (var S in k) {
          var E = m[S] || S;
          C[E] = k[S];
        }
      }),
      (t.prototype.getPosition = function () {
        var k = r(this.element),
          C = this.layout.options,
          S = C.isOriginLeft,
          E = C.isOriginTop,
          M = parseInt(k[S ? "left" : "right"], 10),
          V = parseInt(k[E ? "top" : "bottom"], 10);
        (M = isNaN(M) ? 0 : M), (V = isNaN(V) ? 0 : V);
        var st = this.layout.size;
        (M -= S ? st.paddingLeft : st.paddingRight),
          (V -= E ? st.paddingTop : st.paddingBottom),
          (this.position.x = M),
          (this.position.y = V);
      }),
      (t.prototype.layoutPosition = function () {
        var k = this.layout.size,
          C = this.layout.options,
          S = {},
          E = C.isOriginLeft ? "paddingLeft" : "paddingRight",
          M = C.isOriginLeft ? "left" : "right",
          V = C.isOriginLeft ? "right" : "left",
          st = this.position.x + k[E];
        (st =
          C.percentPosition && !C.isHorizontal
            ? 100 * (st / k.width) + "%"
            : st + "px"),
          (S[M] = st),
          (S[V] = "");
        var gt = C.isOriginTop ? "paddingTop" : "paddingBottom",
          yt = C.isOriginTop ? "top" : "bottom",
          Lt = C.isOriginTop ? "bottom" : "top",
          pt = this.position.y + k[gt];
        (pt =
          C.percentPosition && C.isHorizontal
            ? 100 * (pt / k.height) + "%"
            : pt + "px"),
          (S[yt] = pt),
          (S[Lt] = ""),
          this.css(S),
          this.emitEvent("layout", [this]);
      });
    var c = h
      ? function (k, C) {
          return "translate3d(" + k + "px, " + C + "px, 0)";
        }
      : function (k, C) {
          return "translate(" + k + "px, " + C + "px)";
        };
    (t.prototype._transitionTo = function (k, C) {
      this.getPosition();
      var S = this.position.x,
        E = this.position.y,
        M = parseInt(k, 10),
        V = parseInt(C, 10),
        st = M === this.position.x && V === this.position.y;
      if ((this.setPosition(k, C), st && !this.isTransitioning))
        return this.layoutPosition(), void 0;
      var gt = k - S,
        yt = C - E,
        Lt = {},
        pt = this.layout.options;
      (gt = pt.isOriginLeft ? gt : -gt),
        (yt = pt.isOriginTop ? yt : -yt),
        (Lt.transform = c(gt, yt)),
        this.transition({
          to: Lt,
          onTransitionEnd: {
            transform: this.layoutPosition,
          },
          isCleaning: !0,
        });
    }),
      (t.prototype.goTo = function (k, C) {
        this.setPosition(k, C), this.layoutPosition();
      }),
      (t.prototype.moveTo = u ? t.prototype._transitionTo : t.prototype.goTo),
      (t.prototype.setPosition = function (k, C) {
        (this.position.x = parseInt(k, 10)),
          (this.position.y = parseInt(C, 10));
      }),
      (t.prototype._nonTransition = function (k) {
        this.css(k.to), k.isCleaning && this._removeStyles(k.to);
        for (var C in k.onTransitionEnd) k.onTransitionEnd[C].call(this);
      }),
      (t.prototype._transition = function (k) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return this._nonTransition(k), void 0;
        var C = this._transn;
        for (var S in k.onTransitionEnd) C.onEnd[S] = k.onTransitionEnd[S];
        for (S in k.to)
          (C.ingProperties[S] = !0), k.isCleaning && (C.clean[S] = !0);
        if (k.from) {
          this.css(k.from);
          var E = this.element.offsetHeight;
          E = null;
        }
        this.enableTransition(k.to),
          this.css(k.to),
          (this.isTransitioning = !0);
      });
    var f = d && l.toDashed(d) + ",opacity";
    (t.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: f,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(g, this, !1));
    }),
      (t.prototype.transition =
        t.prototype[a ? "_transition" : "_nonTransition"]),
      (t.prototype.onwebkitTransitionEnd = function (k) {
        this.ontransitionend(k);
      }),
      (t.prototype.onotransitionend = function (k) {
        this.ontransitionend(k);
      });
    var y = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    };
    (t.prototype.ontransitionend = function (k) {
      if (k.target === this.element) {
        var C = this._transn,
          S = y[k.propertyName] || k.propertyName;
        if (
          (delete C.ingProperties[S],
          n(C.ingProperties) && this.disableTransition(),
          S in C.clean &&
            ((this.element.style[k.propertyName] = ""), delete C.clean[S]),
          S in C.onEnd)
        ) {
          var E = C.onEnd[S];
          E.call(this), delete C.onEnd[S];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (t.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(g, this, !1),
          (this.isTransitioning = !1);
      }),
      (t.prototype._removeStyles = function (k) {
        var C = {};
        for (var S in k) C[S] = "";
        this.css(C);
      });
    var b = {
      transitionProperty: "",
      transitionDuration: "",
    };
    return (
      (t.prototype.removeTransitionStyles = function () {
        this.css(b);
      }),
      (t.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({
            display: "",
          }),
          this.emitEvent("remove", [this]);
      }),
      (t.prototype.remove = function () {
        if (!a || !parseFloat(this.layout.options.transitionDuration))
          return this.removeElem(), void 0;
        var k = this;
        this.once("transitionEnd", function () {
          k.removeElem();
        }),
          this.hide();
      }),
      (t.prototype.reveal = function () {
        delete this.isHidden,
          this.css({
            display: "",
          });
        var k = this.layout.options,
          C = {},
          S = this.getHideRevealTransitionEndProperty("visibleStyle");
        (C[S] = this.onRevealTransitionEnd),
          this.transition({
            from: k.hiddenStyle,
            to: k.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: C,
          });
      }),
      (t.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (t.prototype.getHideRevealTransitionEndProperty = function (k) {
        var C = this.layout.options[k];
        if (C.opacity) return "opacity";
        for (var S in C) return S;
      }),
      (t.prototype.hide = function () {
        (this.isHidden = !0),
          this.css({
            display: "",
          });
        var k = this.layout.options,
          C = {},
          S = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (C[S] = this.onHideTransitionEnd),
          this.transition({
            from: k.visibleStyle,
            to: k.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: C,
          });
      }),
      (t.prototype.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({
            display: "none",
          }),
          this.emitEvent("hide"));
      }),
      (t.prototype.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      t
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, s, l, n, t) {
            return p(o, i, s, l, n, t);
          }
        )
      : typeof exports == "object"
      ? (module.exports = p(
          o,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (o.Outlayer = p(
          o,
          o.eventie,
          o.EventEmitter,
          o.getSize,
          o.fizzyUIUtils,
          o.Outlayer.Item
        ));
  })(window, function (o, p, i, s, l, n) {
    function t(h, g) {
      var v = l.getQueryElement(h);
      if (!v)
        return (
          e &&
            e.error(
              "Bad element for " + this.constructor.namespace + ": " + (v || h)
            ),
          void 0
        );
      (this.element = v),
        r && (this.$element = r(this.element)),
        (this.options = l.extend({}, this.constructor.defaults)),
        this.option(g);
      var m = ++d;
      (this.element.outlayerGUID = m),
        (u[m] = this),
        this._create(),
        this.options.isInitLayout && this.layout();
    }
    var e = o.console,
      r = o.jQuery,
      a = function () {},
      d = 0,
      u = {};
    return (
      (t.namespace = "outlayer"),
      (t.Item = n),
      (t.defaults = {
        containerStyle: {
          position: "relative",
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      }),
      l.extend(t.prototype, i.prototype),
      (t.prototype.option = function (h) {
        l.extend(this.options, h);
      }),
      (t.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          l.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize();
      }),
      (t.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (t.prototype._itemize = function (h) {
        for (
          var g = this._filterFindItemElements(h),
            v = this.constructor.Item,
            m = [],
            c = 0,
            f = g.length;
          f > c;
          c++
        ) {
          var y = g[c],
            b = new v(y, this);
          m.push(b);
        }
        return m;
      }),
      (t.prototype._filterFindItemElements = function (h) {
        return l.filterFindElements(h, this.options.itemSelector);
      }),
      (t.prototype.getItemElements = function () {
        for (var h = [], g = 0, v = this.items.length; v > g; g++)
          h.push(this.items[g].element);
        return h;
      }),
      (t.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var h =
          this.options.isLayoutInstant !== void 0
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        this.layoutItems(this.items, h), (this._isLayoutInited = !0);
      }),
      (t.prototype._init = t.prototype.layout),
      (t.prototype._resetLayout = function () {
        this.getSize();
      }),
      (t.prototype.getSize = function () {
        this.size = s(this.element);
      }),
      (t.prototype._getMeasurement = function (h, g) {
        var v,
          m = this.options[h];
        m
          ? (typeof m == "string"
              ? (v = this.element.querySelector(m))
              : l.isElement(m) && (v = m),
            (this[h] = v ? s(v)[g] : m))
          : (this[h] = 0);
      }),
      (t.prototype.layoutItems = function (h, g) {
        (h = this._getItemsForLayout(h)),
          this._layoutItems(h, g),
          this._postLayout();
      }),
      (t.prototype._getItemsForLayout = function (h) {
        for (var g = [], v = 0, m = h.length; m > v; v++) {
          var c = h[v];
          c.isIgnored || g.push(c);
        }
        return g;
      }),
      (t.prototype._layoutItems = function (h, g) {
        if ((this._emitCompleteOnItems("layout", h), h && h.length)) {
          for (var v = [], m = 0, c = h.length; c > m; m++) {
            var f = h[m],
              y = this._getItemLayoutPosition(f);
            (y.item = f), (y.isInstant = g || f.isLayoutInstant), v.push(y);
          }
          this._processLayoutQueue(v);
        }
      }),
      (t.prototype._getItemLayoutPosition = function () {
        return {
          x: 0,
          y: 0,
        };
      }),
      (t.prototype._processLayoutQueue = function (h) {
        for (var g = 0, v = h.length; v > g; g++) {
          var m = h[g];
          this._positionItem(m.item, m.x, m.y, m.isInstant);
        }
      }),
      (t.prototype._positionItem = function (h, g, v, m) {
        m ? h.goTo(g, v) : h.moveTo(g, v);
      }),
      (t.prototype._postLayout = function () {
        this.resizeContainer();
      }),
      (t.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var h = this._getContainerSize();
          h &&
            (this._setContainerMeasure(h.width, !0),
            this._setContainerMeasure(h.height, !1));
        }
      }),
      (t.prototype._getContainerSize = a),
      (t.prototype._setContainerMeasure = function (h, g) {
        if (h !== void 0) {
          var v = this.size;
          v.isBorderBox &&
            (h += g
              ? v.paddingLeft +
                v.paddingRight +
                v.borderLeftWidth +
                v.borderRightWidth
              : v.paddingBottom +
                v.paddingTop +
                v.borderTopWidth +
                v.borderBottomWidth),
            (h = Math.max(h, 0)),
            (this.element.style[g ? "width" : "height"] = h + "px");
        }
      }),
      (t.prototype._emitCompleteOnItems = function (h, g) {
        function v() {
          c.emitEvent(h + "Complete", [g]);
        }

        function m() {
          y++, y === f && v();
        }
        var c = this,
          f = g.length;
        if (!g || !f) return v(), void 0;
        for (var y = 0, b = 0, k = g.length; k > b; b++) {
          var C = g[b];
          C.once(h, m);
        }
      }),
      (t.prototype.ignore = function (h) {
        var g = this.getItem(h);
        g && (g.isIgnored = !0);
      }),
      (t.prototype.unignore = function (h) {
        var g = this.getItem(h);
        g && delete g.isIgnored;
      }),
      (t.prototype.stamp = function (h) {
        if ((h = this._find(h))) {
          this.stamps = this.stamps.concat(h);
          for (var g = 0, v = h.length; v > g; g++) {
            var m = h[g];
            this.ignore(m);
          }
        }
      }),
      (t.prototype.unstamp = function (h) {
        if ((h = this._find(h)))
          for (var g = 0, v = h.length; v > g; g++) {
            var m = h[g];
            l.removeFrom(this.stamps, m), this.unignore(m);
          }
      }),
      (t.prototype._find = function (h) {
        return h
          ? (typeof h == "string" && (h = this.element.querySelectorAll(h)),
            (h = l.makeArray(h)))
          : void 0;
      }),
      (t.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var h = 0, g = this.stamps.length; g > h; h++) {
            var v = this.stamps[h];
            this._manageStamp(v);
          }
        }
      }),
      (t.prototype._getBoundingRect = function () {
        var h = this.element.getBoundingClientRect(),
          g = this.size;
        this._boundingRect = {
          left: h.left + g.paddingLeft + g.borderLeftWidth,
          top: h.top + g.paddingTop + g.borderTopWidth,
          right: h.right - (g.paddingRight + g.borderRightWidth),
          bottom: h.bottom - (g.paddingBottom + g.borderBottomWidth),
        };
      }),
      (t.prototype._manageStamp = a),
      (t.prototype._getElementOffset = function (h) {
        var g = h.getBoundingClientRect(),
          v = this._boundingRect,
          m = s(h),
          c = {
            left: g.left - v.left - m.marginLeft,
            top: g.top - v.top - m.marginTop,
            right: v.right - g.right - m.marginRight,
            bottom: v.bottom - g.bottom - m.marginBottom,
          };
        return c;
      }),
      (t.prototype.handleEvent = function (h) {
        var g = "on" + h.type;
        this[g] && this[g](h);
      }),
      (t.prototype.bindResize = function () {
        this.isResizeBound ||
          (p.bind(o, "resize", this), (this.isResizeBound = !0));
      }),
      (t.prototype.unbindResize = function () {
        this.isResizeBound && p.unbind(o, "resize", this),
          (this.isResizeBound = !1);
      }),
      (t.prototype.onresize = function () {
        function h() {
          g.resize(), delete g.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var g = this;
        this.resizeTimeout = setTimeout(h, 100);
      }),
      (t.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (t.prototype.needsResizeLayout = function () {
        var h = s(this.element),
          g = this.size && h;
        return g && h.innerWidth !== this.size.innerWidth;
      }),
      (t.prototype.addItems = function (h) {
        var g = this._itemize(h);
        return g.length && (this.items = this.items.concat(g)), g;
      }),
      (t.prototype.appended = function (h) {
        var g = this.addItems(h);
        g.length && (this.layoutItems(g, !0), this.reveal(g));
      }),
      (t.prototype.prepended = function (h) {
        var g = this._itemize(h);
        if (g.length) {
          var v = this.items.slice(0);
          (this.items = g.concat(v)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(g, !0),
            this.reveal(g),
            this.layoutItems(v);
        }
      }),
      (t.prototype.reveal = function (h) {
        this._emitCompleteOnItems("reveal", h);
        for (var g = h && h.length, v = 0; g && g > v; v++) {
          var m = h[v];
          m.reveal();
        }
      }),
      (t.prototype.hide = function (h) {
        this._emitCompleteOnItems("hide", h);
        for (var g = h && h.length, v = 0; g && g > v; v++) {
          var m = h[v];
          m.hide();
        }
      }),
      (t.prototype.revealItemElements = function (h) {
        var g = this.getItems(h);
        this.reveal(g);
      }),
      (t.prototype.hideItemElements = function (h) {
        var g = this.getItems(h);
        this.hide(g);
      }),
      (t.prototype.getItem = function (h) {
        for (var g = 0, v = this.items.length; v > g; g++) {
          var m = this.items[g];
          if (m.element === h) return m;
        }
      }),
      (t.prototype.getItems = function (h) {
        h = l.makeArray(h);
        for (var g = [], v = 0, m = h.length; m > v; v++) {
          var c = h[v],
            f = this.getItem(c);
          f && g.push(f);
        }
        return g;
      }),
      (t.prototype.remove = function (h) {
        var g = this.getItems(h);
        if ((this._emitCompleteOnItems("remove", g), g && g.length))
          for (var v = 0, m = g.length; m > v; v++) {
            var c = g[v];
            c.remove(), l.removeFrom(this.items, c);
          }
      }),
      (t.prototype.destroy = function () {
        var h = this.element.style;
        (h.height = ""), (h.position = ""), (h.width = "");
        for (var g = 0, v = this.items.length; v > g; g++) {
          var m = this.items[g];
          m.destroy();
        }
        this.unbindResize();
        var c = this.element.outlayerGUID;
        delete u[c],
          delete this.element.outlayerGUID,
          r && r.removeData(this.element, this.constructor.namespace);
      }),
      (t.data = function (h) {
        h = l.getQueryElement(h);
        var g = h && h.outlayerGUID;
        return g && u[g];
      }),
      (t.create = function (h, g) {
        function v() {
          t.apply(this, arguments);
        }
        return (
          Object.create
            ? (v.prototype = Object.create(t.prototype))
            : l.extend(v.prototype, t.prototype),
          (v.prototype.constructor = v),
          (v.defaults = l.extend({}, t.defaults)),
          l.extend(v.defaults, g),
          (v.prototype.settings = {}),
          (v.namespace = h),
          (v.data = t.data),
          (v.Item = function () {
            n.apply(this, arguments);
          }),
          (v.Item.prototype = new n()),
          l.htmlInit(v, h),
          r && r.bridget && r.bridget(h, v),
          v
        );
      }),
      (t.Item = n),
      t
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], p)
      : typeof exports == "object"
      ? (module.exports = p(require("outlayer")))
      : ((o.Isotope = o.Isotope || {}), (o.Isotope.Item = p(o.Outlayer)));
  })(window, function (o) {
    function p() {
      o.Item.apply(this, arguments);
    }
    (p.prototype = new o.Item()),
      (p.prototype._create = function () {
        (this.id = this.layout.itemGUID++),
          o.Item.prototype._create.call(this),
          (this.sortData = {});
      }),
      (p.prototype.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var s = this.layout.options.getSortData,
            l = this.layout._sorters;
          for (var n in s) {
            var t = l[n];
            this.sortData[n] = t(this.element, this);
          }
        }
      });
    var i = p.prototype.destroy;
    return (
      (p.prototype.destroy = function () {
        i.apply(this, arguments),
          this.css({
            display: "",
          });
      }),
      p
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          p
        )
      : typeof exports == "object"
      ? (module.exports = p(require("get-size"), require("outlayer")))
      : ((o.Isotope = o.Isotope || {}),
        (o.Isotope.LayoutMode = p(o.getSize, o.Outlayer)));
  })(window, function (o, p) {
    function i(s) {
      (this.isotope = s),
        s &&
          ((this.options = s.options[this.namespace]),
          (this.element = s.element),
          (this.items = s.filteredItems),
          (this.size = s.size));
    }
    return (
      (function () {
        function s(r) {
          return function () {
            return p.prototype[r].apply(this.isotope, arguments);
          };
        }
        for (
          var l = [
              "_resetLayout",
              "_getItemLayoutPosition",
              "_manageStamp",
              "_getContainerSize",
              "_getElementOffset",
              "needsResizeLayout",
            ],
            n = 0,
            t = l.length;
          t > n;
          n++
        ) {
          var e = l[n];
          i.prototype[e] = s(e);
        }
      })(),
      (i.prototype.needsVerticalResizeLayout = function () {
        var s = o(this.isotope.element),
          l = this.isotope.size && s;
        return l && s.innerHeight != this.isotope.size.innerHeight;
      }),
      (i.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (i.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (i.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (i.prototype.getSegmentSize = function (s, l) {
        var n = s + l,
          t = "outer" + l;
        if ((this._getMeasurement(n, t), !this[n])) {
          var e = this.getFirstItemSize();
          this[n] = (e && e[t]) || this.isotope.size["inner" + l];
        }
      }),
      (i.prototype.getFirstItemSize = function () {
        var s = this.isotope.filteredItems[0];
        return s && s.element && o(s.element);
      }),
      (i.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (i.prototype.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (s, l) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = new i()),
          l && (n.options = l),
          (n.prototype.namespace = s),
          (i.modes[s] = n),
          n
        );
      }),
      i
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "masonry/masonry",
          ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"],
          p
        )
      : typeof exports == "object"
      ? (module.exports = p(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (o.Masonry = p(o.Outlayer, o.getSize, o.fizzyUIUtils));
  })(window, function (o, p, i) {
    var s = o.create("masonry");
    return (
      (s.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns();
        var l = this.cols;
        for (this.colYs = []; l--; ) this.colYs.push(0);
        this.maxY = 0;
      }),
      (s.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var l = this.items[0],
            n = l && l.element;
          this.columnWidth = (n && p(n).outerWidth) || this.containerWidth;
        }
        var t = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          r = e / t,
          a = t - (e % t),
          d = a && 1 > a ? "round" : "floor";
        (r = Math[d](r)), (this.cols = Math.max(r, 1));
      }),
      (s.prototype.getContainerWidth = function () {
        var l = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          n = p(l);
        this.containerWidth = n && n.innerWidth;
      }),
      (s.prototype._getItemLayoutPosition = function (l) {
        l.getSize();
        var n = l.size.outerWidth % this.columnWidth,
          t = n && 1 > n ? "round" : "ceil",
          e = Math[t](l.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (
          var r = this._getColGroup(e),
            a = Math.min.apply(Math, r),
            d = i.indexOf(r, a),
            u = {
              x: this.columnWidth * d,
              y: a,
            },
            h = a + l.size.outerHeight,
            g = this.cols + 1 - r.length,
            v = 0;
          g > v;
          v++
        )
          this.colYs[d + v] = h;
        return u;
      }),
      (s.prototype._getColGroup = function (l) {
        if (2 > l) return this.colYs;
        for (var n = [], t = this.cols + 1 - l, e = 0; t > e; e++) {
          var r = this.colYs.slice(e, e + l);
          n[e] = Math.max.apply(Math, r);
        }
        return n;
      }),
      (s.prototype._manageStamp = function (l) {
        var n = p(l),
          t = this._getElementOffset(l),
          e = this.options.isOriginLeft ? t.left : t.right,
          r = e + n.outerWidth,
          a = Math.floor(e / this.columnWidth);
        a = Math.max(0, a);
        var d = Math.floor(r / this.columnWidth);
        (d -= r % this.columnWidth ? 0 : 1), (d = Math.min(this.cols - 1, d));
        for (
          var u = (this.options.isOriginTop ? t.top : t.bottom) + n.outerHeight,
            h = a;
          d >= h;
          h++
        )
          this.colYs[h] = Math.max(u, this.colYs[h]);
      }),
      (s.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var l = {
          height: this.maxY,
        };
        return (
          this.options.isFitWidth && (l.width = this._getContainerFitWidth()), l
        );
      }),
      (s.prototype._getContainerFitWidth = function () {
        for (var l = 0, n = this.cols; --n && this.colYs[n] === 0; ) l++;
        return (this.cols - l) * this.columnWidth - this.gutter;
      }),
      (s.prototype.needsResizeLayout = function () {
        var l = this.containerWidth;
        return this.getContainerWidth(), l !== this.containerWidth;
      }),
      s
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          p
        )
      : typeof exports == "object"
      ? (module.exports = p(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : p(o.Isotope.LayoutMode, o.Masonry);
  })(window, function (o, p) {
    function i(a, d) {
      for (var u in d) a[u] = d[u];
      return a;
    }
    var s = o.create("masonry"),
      l = s.prototype._getElementOffset,
      n = s.prototype.layout,
      t = s.prototype._getMeasurement;
    i(s.prototype, p.prototype),
      (s.prototype._getElementOffset = l),
      (s.prototype.layout = n),
      (s.prototype._getMeasurement = t);
    var e = s.prototype.measureColumns;
    s.prototype.measureColumns = function () {
      (this.items = this.isotope.filteredItems), e.call(this);
    };
    var r = s.prototype._manageStamp;
    return (
      (s.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          r.apply(this, arguments);
      }),
      s
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], p)
      : typeof exports == "object"
      ? (module.exports = p(require("../layout-mode")))
      : p(o.Isotope.LayoutMode);
  })(window, function (o) {
    var p = o.create("fitRows");
    return (
      (p.prototype._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (p.prototype._getItemLayoutPosition = function (i) {
        i.getSize();
        var s = i.size.outerWidth + this.gutter,
          l = this.isotope.size.innerWidth + this.gutter;
        this.x !== 0 && s + this.x > l && ((this.x = 0), (this.y = this.maxY));
        var n = {
          x: this.x,
          y: this.y,
        };
        return (
          (this.maxY = Math.max(this.maxY, this.y + i.size.outerHeight)),
          (this.x += s),
          n
        );
      }),
      (p.prototype._getContainerSize = function () {
        return {
          height: this.maxY,
        };
      }),
      p
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], p)
      : typeof exports == "object"
      ? (module.exports = p(require("../layout-mode")))
      : p(o.Isotope.LayoutMode);
  })(window, function (o) {
    var p = o.create("vertical", {
      horizontalAlignment: 0,
    });
    return (
      (p.prototype._resetLayout = function () {
        this.y = 0;
      }),
      (p.prototype._getItemLayoutPosition = function (i) {
        i.getSize();
        var s =
            (this.isotope.size.innerWidth - i.size.outerWidth) *
            this.options.horizontalAlignment,
          l = this.y;
        return (
          (this.y += i.size.outerHeight),
          {
            x: s,
            y: l,
          }
        );
      }),
      (p.prototype._getContainerSize = function () {
        return {
          height: this.y,
        };
      }),
      p
    );
  }),
  (function (o, p) {
    typeof define == "function" && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, s, l, n, t, e) {
            return p(o, i, s, l, n, t, e);
          }
        )
      : typeof exports == "object"
      ? (module.exports = p(
          o,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (o.Isotope = p(
          o,
          o.Outlayer,
          o.getSize,
          o.matchesSelector,
          o.fizzyUIUtils,
          o.Isotope.Item,
          o.Isotope.LayoutMode
        ));
  })(window, function (o, p, i, s, l, n, t) {
    function e(m, c) {
      return function (f, y) {
        for (var b = 0, k = m.length; k > b; b++) {
          var C = m[b],
            S = f.sortData[C],
            E = y.sortData[C];
          if (S > E || E > S) {
            var M = c[C] !== void 0 ? c[C] : c,
              V = M ? 1 : -1;
            return (S > E ? 1 : -1) * V;
          }
        }
        return 0;
      };
    }
    var r = o.jQuery,
      a = String.prototype.trim
        ? function (m) {
            return m.trim();
          }
        : function (m) {
            return m.replace(/^\s+|\s+$/g, "");
          },
      d = document.documentElement,
      u = d.textContent
        ? function (m) {
            return m.textContent;
          }
        : function (m) {
            return m.innerText;
          },
      h = p.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (h.Item = n),
      (h.LayoutMode = t),
      (h.prototype._create = function () {
        (this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          p.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]);
        for (var m in t.modes) this._initLayoutMode(m);
      }),
      (h.prototype.reloadItems = function () {
        (this.itemGUID = 0), p.prototype.reloadItems.call(this);
      }),
      (h.prototype._itemize = function () {
        for (
          var m = p.prototype._itemize.apply(this, arguments),
            c = 0,
            f = m.length;
          f > c;
          c++
        ) {
          var y = m[c];
          y.id = this.itemGUID++;
        }
        return this._updateItemsSortData(m), m;
      }),
      (h.prototype._initLayoutMode = function (m) {
        var c = t.modes[m],
          f = this.options[m] || {};
        (this.options[m] = c.options ? l.extend(c.options, f) : f),
          (this.modes[m] = new c(this));
      }),
      (h.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout
          ? (this.arrange(), void 0)
          : (this._layout(), void 0);
      }),
      (h.prototype._layout = function () {
        var m = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, m),
          (this._isLayoutInited = !0);
      }),
      (h.prototype.arrange = function (m) {
        function c() {
          y.reveal(f.needReveal), y.hide(f.needHide);
        }
        this.option(m), this._getIsInstant();
        var f = this._filter(this.items);
        this.filteredItems = f.matches;
        var y = this;
        this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(c) : c(),
          this._sort(),
          this._layout();
      }),
      (h.prototype._init = h.prototype.arrange),
      (h.prototype._getIsInstant = function () {
        var m =
          this.options.isLayoutInstant !== void 0
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        return (this._isInstant = m), m;
      }),
      (h.prototype._bindArrangeComplete = function () {
        function m() {
          c && f && y && b.emitEvent("arrangeComplete", [b.filteredItems]);
        }
        var c,
          f,
          y,
          b = this;
        this.once("layoutComplete", function () {
          (c = !0), m();
        }),
          this.once("hideComplete", function () {
            (f = !0), m();
          }),
          this.once("revealComplete", function () {
            (y = !0), m();
          });
      }),
      (h.prototype._filter = function (m) {
        var c = this.options.filter;
        c = c || "*";
        for (
          var f = [],
            y = [],
            b = [],
            k = this._getFilterTest(c),
            C = 0,
            S = m.length;
          S > C;
          C++
        ) {
          var E = m[C];
          if (!E.isIgnored) {
            var M = k(E);
            M && f.push(E),
              M && E.isHidden ? y.push(E) : M || E.isHidden || b.push(E);
          }
        }
        return {
          matches: f,
          needReveal: y,
          needHide: b,
        };
      }),
      (h.prototype._getFilterTest = function (m) {
        return r && this.options.isJQueryFiltering
          ? function (c) {
              return r(c.element).is(m);
            }
          : typeof m == "function"
          ? function (c) {
              return m(c.element);
            }
          : function (c) {
              return s(c.element, m);
            };
      }),
      (h.prototype.updateSortData = function (m) {
        var c;
        m ? ((m = l.makeArray(m)), (c = this.getItems(m))) : (c = this.items),
          this._getSorters(),
          this._updateItemsSortData(c);
      }),
      (h.prototype._getSorters = function () {
        var m = this.options.getSortData;
        for (var c in m) {
          var f = m[c];
          this._sorters[c] = g(f);
        }
      }),
      (h.prototype._updateItemsSortData = function (m) {
        for (var c = m && m.length, f = 0; c && c > f; f++) {
          var y = m[f];
          y.updateSortData();
        }
      });
    var g = (function () {
      function m(f) {
        if (typeof f != "string") return f;
        var y = a(f).split(" "),
          b = y[0],
          k = b.match(/^\[(.+)\]$/),
          C = k && k[1],
          S = c(C, b),
          E = h.sortDataParsers[y[1]];
        return (f = E
          ? function (M) {
              return M && E(S(M));
            }
          : function (M) {
              return M && S(M);
            });
      }

      function c(f, y) {
        var b;
        return (b = f
          ? function (k) {
              return k.getAttribute(f);
            }
          : function (k) {
              var C = k.querySelector(y);
              return C && u(C);
            });
      }
      return m;
    })();
    (h.sortDataParsers = {
      parseInt: function (m) {
        return parseInt(m, 10);
      },
      parseFloat: function (m) {
        return parseFloat(m);
      },
    }),
      (h.prototype._sort = function () {
        var m = this.options.sortBy;
        if (m) {
          var c = [].concat.apply(m, this.sortHistory),
            f = e(c, this.options.sortAscending);
          this.filteredItems.sort(f),
            m != this.sortHistory[0] && this.sortHistory.unshift(m);
        }
      }),
      (h.prototype._mode = function () {
        var m = this.options.layoutMode,
          c = this.modes[m];
        if (!c) throw Error("No layout mode: " + m);
        return (c.options = this.options[m]), c;
      }),
      (h.prototype._resetLayout = function () {
        p.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (h.prototype._getItemLayoutPosition = function (m) {
        return this._mode()._getItemLayoutPosition(m);
      }),
      (h.prototype._manageStamp = function (m) {
        this._mode()._manageStamp(m);
      }),
      (h.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (h.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (h.prototype.appended = function (m) {
        var c = this.addItems(m);
        if (c.length) {
          var f = this._filterRevealAdded(c);
          this.filteredItems = this.filteredItems.concat(f);
        }
      }),
      (h.prototype.prepended = function (m) {
        var c = this._itemize(m);
        if (c.length) {
          this._resetLayout(), this._manageStamps();
          var f = this._filterRevealAdded(c);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = f.concat(this.filteredItems)),
            (this.items = c.concat(this.items));
        }
      }),
      (h.prototype._filterRevealAdded = function (m) {
        var c = this._filter(m);
        return (
          this.hide(c.needHide),
          this.reveal(c.matches),
          this.layoutItems(c.matches, !0),
          c.matches
        );
      }),
      (h.prototype.insert = function (m) {
        var c = this.addItems(m);
        if (c.length) {
          var f,
            y,
            b = c.length;
          for (f = 0; b > f; f++)
            (y = c[f]), this.element.appendChild(y.element);
          var k = this._filter(c).matches;
          for (f = 0; b > f; f++) c[f].isLayoutInstant = !0;
          for (this.arrange(), f = 0; b > f; f++) delete c[f].isLayoutInstant;
          this.reveal(k);
        }
      });
    var v = h.prototype.remove;
    return (
      (h.prototype.remove = function (m) {
        m = l.makeArray(m);
        var c = this.getItems(m);
        v.call(this, m);
        var f = c && c.length;
        if (f)
          for (var y = 0; f > y; y++) {
            var b = c[y];
            l.removeFrom(this.filteredItems, b);
          }
      }),
      (h.prototype.shuffle = function () {
        for (var m = 0, c = this.items.length; c > m; m++) {
          var f = this.items[m];
          f.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (h.prototype._noTransition = function (m) {
        var c = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var f = m.call(this);
        return (this.options.transitionDuration = c), f;
      }),
      (h.prototype.getFilteredItemElements = function () {
        for (var m = [], c = 0, f = this.filteredItems.length; f > c; c++)
          m.push(this.filteredItems[c].element);
        return m;
      }),
      h
    );
  });
/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
(fotoramaVersion = "4.6.4"),
  (function (o, p, i, s, l) {
    "use strict";

    function n(x) {
      var w = "bez_" + s.makeArray(arguments).join("_").replace(".", "p");
      if (typeof s.easing[w] != "function") {
        var z = function (O, A) {
          var j = [null, null],
            H = [null, null],
            F = [null, null],
            et = function (Y, Z) {
              return (
                (F[Z] = 3 * O[Z]),
                (H[Z] = 3 * (A[Z] - O[Z]) - F[Z]),
                (j[Z] = 1 - F[Z] - H[Z]),
                Y * (F[Z] + Y * (H[Z] + Y * j[Z]))
              );
            },
            B = function (Y) {
              return F[0] + Y * (2 * H[0] + 3 * j[0] * Y);
            },
            G = function (Y) {
              for (
                var Z, tt = Y, vt = 0;
                ++vt < 14 && ((Z = et(tt, 0) - Y), !(Math.abs(Z) < 0.001));

              )
                tt -= Z / B(tt);
              return tt;
            };
          return function (Y) {
            return et(G(Y), 1);
          };
        };
        s.easing[w] = function (O, A, j, H, F) {
          return H * z([x[0], x[1]], [x[2], x[3]])(A / F) + j;
        };
      }
      return w;
    }

    function t() {}

    function e(x, w, z) {
      return Math.max(isNaN(w) ? -1 / 0 : w, Math.min(isNaN(z) ? 1 / 0 : z, x));
    }

    function r(x) {
      return x.match(/ma/) && x.match(/-?\d+(?!d)/g)[x.match(/3d/) ? 12 : 4];
    }

    function a(x) {
      return $e ? +r(x.css("transform")) : +x.css("left").replace("px", "");
    }

    function d(x) {
      var w = {};
      return (
        $e ? (w.transform = "translate3d(" + x + "px,0,0)") : (w.left = x), w
      );
    }

    function u(x) {
      return {
        "transition-duration": x + "ms",
      };
    }

    function h(x, w) {
      return isNaN(x) ? w : x;
    }

    function g(x, w) {
      return h(+String(x).replace(w || "px", ""));
    }

    function v(x) {
      return /%$/.test(x) ? g(x, "%") : l;
    }

    function m(x, w) {
      return h((v(x) / 100) * w, g(x));
    }

    function c(x) {
      return (!isNaN(g(x)) || !isNaN(g(x, "%"))) && x;
    }

    function f(x, w, z, O) {
      return (x - (O || 0)) * (w + (z || 0));
    }

    function y(x, w, z, O) {
      return -Math.round(x / (w + (z || 0)) - (O || 0));
    }

    function b(x) {
      var w = x.data();
      if (!w.tEnd) {
        var z = x[0],
          O = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            msTransition: "MSTransitionEnd",
            transition: "transitionend",
          };
        Ht(z, O[Sn.prefixed("transition")], function (A) {
          w.tProp && A.propertyName.match(w.tProp) && w.onEndFn();
        }),
          (w.tEnd = !0);
      }
    }

    function k(x, w, z, O) {
      var A,
        j = x.data();
      j &&
        ((j.onEndFn = function () {
          A || ((A = !0), clearTimeout(j.tT), z());
        }),
        (j.tProp = w),
        clearTimeout(j.tT),
        (j.tT = setTimeout(function () {
          j.onEndFn();
        }, 1.5 * O)),
        b(x));
    }

    function C(x, w) {
      if (x.length) {
        var z = x.data();
        $e ? (x.css(u(0)), (z.onEndFn = t), clearTimeout(z.tT)) : x.stop();
        var O = S(w, function () {
          return a(x);
        });
        return x.css(d(O)), O;
      }
    }

    function S() {
      for (
        var x, w = 0, z = arguments.length;
        z > w &&
        ((x = w ? arguments[w]() : arguments[w]), typeof x != "number");
        w++
      );
      return x;
    }

    function E(x, w) {
      return Math.round(x + (w - x) / 1.5);
    }

    function M() {
      return (
        (M.p = M.p || (i.protocol === "https:" ? "https://" : "http://")), M.p
      );
    }

    function V(x) {
      var w = p.createElement("a");
      return (w.href = x), w;
    }

    function st(x, w) {
      if (typeof x != "string") return x;
      x = V(x);
      var z, O;
      if (x.host.match(/youtube\.com/) && x.search) {
        if ((z = x.search.split("v=")[1])) {
          var A = z.indexOf("&");
          A !== -1 && (z = z.substring(0, A)), (O = "youtube");
        }
      } else
        x.host.match(/youtube\.com|youtu\.be/)
          ? ((z = x.pathname
              .replace(/^\/(embed\/|v\/)?/, "")
              .replace(/\/.*/, "")),
            (O = "youtube"))
          : x.host.match(/vimeo\.com/) &&
            ((O = "vimeo"),
            (z = x.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, "")));
      return (
        (z && O) || !w || ((z = x.href), (O = "custom")),
        z
          ? {
              id: z,
              type: O,
              s: x.search.replace(/^\?/, ""),
              p: M(),
            }
          : !1
      );
    }

    function gt(x, w, z) {
      var O,
        A,
        j = x.video;
      return (
        j.type === "youtube"
          ? ((A = M() + "img.youtube.com/vi/" + j.id + "/default.jpg"),
            (O = A.replace(/\/default.jpg$/, "/hqdefault.jpg")),
            (x.thumbsReady = !0))
          : j.type === "vimeo"
          ? s.ajax({
              url: M() + "vimeo.com/api/v2/video/" + j.id + ".json",
              dataType: "jsonp",
              success: function (H) {
                (x.thumbsReady = !0),
                  yt(
                    w,
                    {
                      img: H[0].thumbnail_large,
                      thumb: H[0].thumbnail_small,
                    },
                    x.i,
                    z
                  );
              },
            })
          : (x.thumbsReady = !0),
        {
          img: O,
          thumb: A,
        }
      );
    }

    function yt(x, w, z, O) {
      for (var A = 0, j = x.length; j > A; A++) {
        var H = x[A];
        if (H.i === z && H.thumbsReady) {
          var F = {
            videoReady: !0,
          };
          (F[At] = F[ci] = F[li] = !1), O.splice(A, 1, s.extend({}, H, F, w));
          break;
        }
      }
    }

    function Lt(x) {
      function w(A, j, H) {
        var F = A.children("img").eq(0),
          et = A.attr("href"),
          B = A.attr("src"),
          G = F.attr("src"),
          Y = j.video,
          Z = H ? st(et, Y === !0) : !1;
        Z ? (et = !1) : (Z = Y),
          z(
            A,
            F,
            s.extend(j, {
              video: Z,
              img: j.img || et || B || G,
              thumb: j.thumb || G || B || et,
            })
          );
      }

      function z(A, j, H) {
        var F = H.thumb && H.img !== H.thumb,
          et = g(H.width || A.attr("width")),
          B = g(H.height || A.attr("height"));
        s.extend(H, {
          width: et,
          height: B,
          thumbratio: en(
            H.thumbratio ||
              g(H.thumbwidth || (j && j.attr("width")) || F || et) /
                g(H.thumbheight || (j && j.attr("height")) || F || B)
          ),
        });
      }
      var O = [];
      return (
        x.children().each(function () {
          var A = s(this),
            j = _i(
              s.extend(A.data(), {
                id: A.attr("id"),
              })
            );
          if (A.is("a, img")) w(A, j, !0);
          else {
            if (A.is(":empty")) return;
            z(
              A,
              null,
              s.extend(j, {
                html: this,
                _html: A.html(),
              })
            );
          }
          O.push(j);
        }),
        O
      );
    }

    function pt(x) {
      return x.offsetWidth === 0 && x.offsetHeight === 0;
    }

    function kt(x) {
      return !s.contains(p.documentElement, x);
    }

    function ht(x, w, z, O) {
      return (
        ht.i || ((ht.i = 1), (ht.ii = [!0])),
        (O = O || ht.i),
        typeof ht.ii[O] == "undefined" && (ht.ii[O] = !0),
        x()
          ? w()
          : ht.ii[O] &&
            setTimeout(function () {
              ht.ii[O] && ht(x, w, z, O);
            }, z || 100),
        ht.i++
      );
    }

    function Jt(x) {
      i.replace(
        i.protocol +
          "//" +
          i.host +
          i.pathname.replace(/^\/?/, "/") +
          i.search +
          "#" +
          x
      );
    }

    function It(x, w, z, O) {
      var A = x.data(),
        j = A.measures;
      if (
        j &&
        (!A.l ||
          A.l.W !== j.width ||
          A.l.H !== j.height ||
          A.l.r !== j.ratio ||
          A.l.w !== w.w ||
          A.l.h !== w.h ||
          A.l.m !== z ||
          A.l.p !== O)
      ) {
        var H = j.width,
          F = j.height,
          et = w.w / w.h,
          B = j.ratio >= et,
          G = z === "scaledown",
          Y = z === "contain",
          Z = z === "cover",
          tt = oo(O);
        (B && (G || Y)) || (!B && Z)
          ? ((H = e(w.w, 0, G ? H : 1 / 0)), (F = H / j.ratio))
          : ((B && Z) || (!B && (G || Y))) &&
            ((F = e(w.h, 0, G ? F : 1 / 0)), (H = F * j.ratio)),
          x.css({
            width: H,
            height: F,
            left: m(tt.x, w.w - H),
            top: m(tt.y, w.h - F),
          }),
          (A.l = {
            W: j.width,
            H: j.height,
            r: j.ratio,
            w: w.w,
            h: w.h,
            m: z,
            p: O,
          });
      }
      return !0;
    }

    function _e(x, w) {
      var z = x[0];
      z.styleSheet ? (z.styleSheet.cssText = w) : x.html(w);
    }

    function Rt(x, w, z) {
      return w === z ? !1 : w >= x ? "left" : x >= z ? "right" : "left right";
    }

    function Ut(x, w, z, O) {
      if (!z) return !1;
      if (!isNaN(x)) return x - (O ? 0 : 1);
      for (var A, j = 0, H = w.length; H > j; j++) {
        var F = w[j];
        if (F.id === x) {
          A = j;
          break;
        }
      }
      return A;
    }

    function ue(x, w, z) {
      (z = z || {}),
        x.each(function () {
          var O,
            A = s(this),
            j = A.data();
          j.clickOn ||
            ((j.clickOn = !0),
            s.extend(
              rn(A, {
                onStart: function (H) {
                  (O = H), (z.onStart || t).call(this, H);
                },
                onMove: z.onMove || t,
                onTouchEnd: z.onTouchEnd || t,
                onEnd: function (H) {
                  H.moved || w.call(this, O);
                },
              }),
              {
                noMove: !0,
              }
            ));
        });
    }

    function wt(x, w) {
      return '<div class="' + x + '">' + (w || "") + "</div>";
    }

    function te(x) {
      for (var w = x.length; w; ) {
        var z = Math.floor(Math.random() * w--),
          O = x[w];
        (x[w] = x[z]), (x[z] = O);
      }
      return x;
    }

    function re(x) {
      return (
        Object.prototype.toString.call(x) == "[object Array]" &&
        s.map(x, function (w) {
          return s.extend({}, w);
        })
      );
    }

    function Se(x, w, z) {
      x.scrollLeft(w || 0).scrollTop(z || 0);
    }

    function _i(x) {
      if (x) {
        var w = {};
        return (
          s.each(x, function (z, O) {
            w[z.toLowerCase()] = O;
          }),
          w
        );
      }
    }

    function en(x) {
      if (x) {
        var w = +x;
        return isNaN(w) ? ((w = x.split("/")), +w[0] / +w[1] || l) : w;
      }
    }

    function Ht(x, w, z, O) {
      w &&
        (x.addEventListener
          ? x.addEventListener(w, z, !!O)
          : x.attachEvent("on" + w, z));
    }

    function no(x) {
      return !!x.getAttribute("disabled");
    }

    function nn(x) {
      return {
        tabindex: -1 * x + "",
        disabled: x,
      };
    }

    function Ci(x, w) {
      Ht(x, "keyup", function (z) {
        no(x) || (z.keyCode == 13 && w.call(x, z));
      });
    }

    function ki(x, w) {
      Ht(
        x,
        "focus",
        (x.onfocusin = function (z) {
          w.call(x, z);
        }),
        !0
      );
    }

    function pe(x, w) {
      x.preventDefault ? x.preventDefault() : (x.returnValue = !1),
        w && x.stopPropagation && x.stopPropagation();
    }

    function Ti(x) {
      return x ? ">" : "<";
    }

    function oo(x) {
      return (
        (x = (x + "").split(/\s+/)),
        {
          x: c(x[0]) || hi,
          y: c(x[1]) || hi,
        }
      );
    }

    function Re(x, w) {
      var z = x.data(),
        O = Math.round(w.pos),
        A = function () {
          (z.sliding = !1), (w.onEnd || t)();
        };
      typeof w.overPos != "undefined" &&
        w.overPos !== w.pos &&
        ((O = w.overPos),
        (A = function () {
          Re(
            x,
            s.extend({}, w, {
              overPos: w.pos,
              time: Math.max(Qe, w.time / 2),
            })
          );
        }));
      var j = s.extend(
        d(O),
        w.width && {
          width: w.width,
        }
      );
      (z.sliding = !0),
        $e
          ? (x.css(s.extend(u(w.time), j)),
            w.time > 10 ? k(x, "transform", A, w.time) : A())
          : x.stop().animate(j, w.time, Zo, A);
    }

    function on(x, w, z, O, A, j) {
      var H = typeof j != "undefined";
      if (
        H ||
        (A.push(arguments),
        Array.prototype.push.call(arguments, A.length),
        !(A.length > 1))
      ) {
        (x = x || s(x)), (w = w || s(w));
        var F = x[0],
          et = w[0],
          B = O.method === "crossfade",
          G = function () {
            if (!G.done) {
              G.done = !0;
              var Z = (H || A.shift()) && A.shift();
              Z && on.apply(this, Z), (O.onEnd || t)(!!Z);
            }
          },
          Y = O.time / (j || 1);
        z.removeClass(yn + " " + vn),
          x.stop().addClass(yn),
          w.stop().addClass(vn),
          B && et && x.fadeTo(0, 0),
          x.fadeTo(B ? Y : 0, 1, B && G),
          w.fadeTo(Y, 0, G),
          (F && B) || et || G();
      }
    }

    function sn(x) {
      var w = (x.touches || [])[0] || x;
      (x._x = w.pageX), (x._y = w.clientY), (x._now = s.now());
    }

    function rn(x, w) {
      function z(L) {
        return (
          (B = s(L.target)),
          (I.checked = Z = tt = xt = !1),
          F ||
          I.flow ||
          (L.touches && L.touches.length > 1) ||
          L.which > 1 ||
          (Di && Di.type !== L.type && Wi) ||
          (Z = w.select && B.is(w.select, P))
            ? Z
            : ((Y = L.type === "touchstart"),
              (tt = B.is("a, a *", P)),
              (G = I.control),
              (vt = I.noMove || I.noSwipe || G ? 16 : I.snap ? 0 : 4),
              sn(L),
              (et = Di = L),
              (On = L.type
                .replace(/down|start/, "move")
                .replace(/Down/, "Move")),
              (w.onStart || t).call(P, L, {
                control: G,
                $target: B,
              }),
              (F = I.flow = !0),
              void ((!Y || I.go) && pe(L)))
        );
      }

      function O(L) {
        if (
          (L.touches && L.touches.length > 1) ||
          (ze && !L.isPrimary) ||
          On !== L.type ||
          !F
        )
          return F && A(), void (w.onTouchEnd || t)();
        sn(L);
        var Q = Math.abs(L._x - et._x),
          q = Math.abs(L._y - et._y),
          X = Q - q,
          bt = (I.go || I.x || X >= 0) && !I.noSwipe,
          ft = 0 > X;
        Y && !I.checked
          ? (F = bt) && pe(L)
          : (pe(L),
            (w.onMove || t).call(P, L, {
              touch: Y,
            })),
          !xt && Math.sqrt(Math.pow(Q, 2) + Math.pow(q, 2)) > vt && (xt = !0),
          (I.checked = I.checked || bt || ft);
      }

      function A(L) {
        (w.onTouchEnd || t)();
        var Q = F;
        (I.control = F = !1),
          Q && (I.flow = !1),
          !Q ||
            (tt && !I.checked) ||
            (L && pe(L),
            (Wi = !0),
            clearTimeout(Mn),
            (Mn = setTimeout(function () {
              Wi = !1;
            }, 1e3)),
            (w.onEnd || t).call(P, {
              moved: xt,
              $target: B,
              control: G,
              touch: Y,
              startEvent: et,
              aborted: !L || L.type === "MSPointerCancel",
            }));
      }

      function j() {
        I.flow ||
          setTimeout(function () {
            I.flow = !0;
          }, 10);
      }

      function H() {
        I.flow &&
          setTimeout(function () {
            I.flow = !1;
          }, Ie);
      }
      var F,
        et,
        B,
        G,
        Y,
        Z,
        tt,
        vt,
        xt,
        P = x[0],
        I = {};
      return (
        ze
          ? (Ht(P, "MSPointerDown", z),
            Ht(p, "MSPointerMove", O),
            Ht(p, "MSPointerCancel", A),
            Ht(p, "MSPointerUp", A))
          : (Ht(P, "touchstart", z),
            Ht(P, "touchmove", O),
            Ht(P, "touchend", A),
            Ht(p, "touchstart", j),
            Ht(p, "touchend", H),
            Ht(p, "touchcancel", H),
            fe.on("scroll", H),
            x.on("mousedown", z),
            si.on("mousemove", O).on("mouseup", A)),
        x.on("click", "a", function (L) {
          I.checked && pe(L);
        }),
        I
      );
    }

    function an(x, w) {
      function z(ct, Tt) {
        (q = !0),
          (H = F = ct._x),
          (Z = ct._now),
          (Y = [[Z, H]]),
          (et = B = ft.noMove || Tt ? 0 : C(x, (w.getPos || t)())),
          (w.onStart || t).call(X, ct);
      }

      function O(ct, Tt) {
        (vt = ft.min),
          (xt = ft.max),
          (P = ft.snap),
          (I = ct.altKey),
          (q = Q = !1),
          (L = Tt.control),
          L || bt.sliding || z(ct);
      }

      function A(ct, Tt) {
        ft.noSwipe ||
          (q || z(ct),
          (F = ct._x),
          Y.push([ct._now, F]),
          (B = et - (H - F)),
          (G = Rt(B, vt, xt)),
          vt >= B ? (B = E(B, vt)) : B >= xt && (B = E(B, xt)),
          ft.noMove ||
            (x.css(d(B)),
            Q || ((Q = !0), Tt.touch || ze || x.addClass(xn)),
            (w.onMove || t).call(X, ct, {
              pos: B,
              edge: G,
            })));
      }

      function j(ct) {
        if (!ft.noSwipe || !ct.moved) {
          q || z(ct.startEvent, !0),
            ct.touch || ze || x.removeClass(xn),
            (tt = s.now());
          for (
            var Tt,
              Ot,
              Et,
              U,
              K,
              at,
              rt,
              _t,
              Qt,
              Vt = tt - Ie,
              jt = null,
              Nt = Qe,
              oe = w.friction,
              Dt = Y.length - 1;
            Dt >= 0;
            Dt--
          ) {
            if (
              ((Tt = Y[Dt][0]),
              (Ot = Math.abs(Tt - Vt)),
              jt === null || Et > Ot)
            )
              (jt = Tt), (U = Y[Dt][1]);
            else if (jt === Vt || Ot > Et) break;
            Et = Ot;
          }
          rt = e(B, vt, xt);
          var Ve = U - F,
            Ce = Ve >= 0,
            Yt = tt - jt,
            me = Yt > Ie,
            se = !me && B !== et && rt === B;
          P &&
            ((rt = e(
              Math[se ? (Ce ? "floor" : "ceil") : "round"](B / P) * P,
              vt,
              xt
            )),
            (vt = xt = rt)),
            se &&
              (P || rt === B) &&
              ((Qt = -(Ve / Yt)),
              (Nt *= e(Math.abs(Qt), w.timeLow, w.timeHigh)),
              (K = Math.round(B + (Qt * Nt) / oe)),
              P || (rt = K),
              ((!Ce && K > xt) || (Ce && vt > K)) &&
                ((at = Ce ? vt : xt),
                (_t = K - at),
                P || (rt = at),
                (_t = e(rt + 0.03 * _t, at - 50, at + 50)),
                (Nt = Math.abs((B - _t) / (Qt / oe))))),
            (Nt *= I ? 10 : 1),
            (w.onEnd || t).call(
              X,
              s.extend(ct, {
                moved: ct.moved || (me && P),
                pos: B,
                newPos: rt,
                overPos: _t,
                time: Nt,
              })
            );
        }
      }
      var H,
        F,
        et,
        B,
        G,
        Y,
        Z,
        tt,
        vt,
        xt,
        P,
        I,
        L,
        Q,
        q,
        X = x[0],
        bt = x.data(),
        ft = {};
      return (ft = s.extend(
        rn(
          w.$wrap,
          s.extend({}, w, {
            onStart: O,
            onMove: A,
            onEnd: j,
          })
        ),
        ft
      ));
    }

    function ln(x, w) {
      var z,
        O,
        A,
        j = x[0],
        H = {
          prevent: {},
        };
      return (
        Ht(j, Vo, function (F) {
          var et = F.wheelDeltaY || -1 * F.deltaY || 0,
            B = F.wheelDeltaX || -1 * F.deltaX || 0,
            G = Math.abs(B) && !Math.abs(et),
            Y = Ti(0 > B),
            Z = O === Y,
            tt = s.now(),
            vt = Ie > tt - A;
          (O = Y),
            (A = tt),
            G &&
              H.ok &&
              (!H.prevent[Y] || z) &&
              (pe(F, !0),
              (z && Z && vt) ||
                (w.shift &&
                  ((z = !0),
                  clearTimeout(H.t),
                  (H.t = setTimeout(function () {
                    z = !1;
                  }, Yo))),
                (w.onEnd || t)(F, w.shift ? Y : B)));
        }),
        H
      );
    }

    function cn() {
      s.each(s.Fotorama.instances, function (x, w) {
        w.index = x;
      });
    }

    function so(x) {
      s.Fotorama.instances.push(x), cn();
    }

    function ro(x) {
      s.Fotorama.instances.splice(x.index, 1), cn();
    }
    var dt = "fotorama",
      Fe = "fullscreen",
      Bt = dt + "__wrap",
      ao = Bt + "--css2",
      lo = Bt + "--css3",
      hn = Bt + "--video",
      co = Bt + "--fade",
      ho = Bt + "--slide",
      dn = Bt + "--no-controls",
      uo = Bt + "--no-shadows",
      po = Bt + "--pan-y",
      fo = Bt + "--rtl",
      un = Bt + "--only-active",
      mo = Bt + "--no-captions",
      go = Bt + "--toggle-arrows",
      Si = dt + "__stage",
      pn = Si + "__frame",
      vo = pn + "--video",
      yo = Si + "__shaft",
      fn = dt + "__grab",
      wo = dt + "__pointer",
      qe = dt + "__arr",
      mn = qe + "--disabled",
      xo = qe + "--prev",
      bo = qe + "--next",
      Ee = dt + "__nav",
      _o = Ee + "-wrap",
      Co = Ee + "__shaft",
      Ei = Ee + "--dots",
      $i = Ee + "--thumbs",
      Ue = Ee + "__frame",
      ko = Ue + "--dot",
      To = Ue + "--thumb",
      gn = dt + "__fade",
      vn = gn + "-front",
      yn = gn + "-rear",
      So = dt + "__shadow",
      zi = So + "s",
      Eo = zi + "--left",
      $o = zi + "--right",
      Ii = dt + "__active",
      Ai = dt + "__select",
      zo = dt + "--hidden",
      wn = dt + "--fullscreen",
      Io = dt + "__fullscreen-icon",
      Oi = dt + "__error",
      Mi = dt + "__loading",
      ii = dt + "__loaded",
      Ao = ii + "--full",
      Oo = ii + "--img",
      xn = dt + "__grabbing",
      bn = dt + "__img",
      Mo = bn + "--full",
      Po = dt + "__dot",
      _n = dt + "__thumb",
      Lo = _n + "-border",
      jo = dt + "__html",
      Cn = dt + "__video",
      kn = Cn + "-play",
      Do = Cn + "-close",
      Wo = dt + "__caption",
      Ho = dt + "__caption__wrap",
      No = dt + "__spinner",
      Be = '" tabindex="0" role="button',
      ni = s && s.fn.jquery.split(".");
    if (!ni || ni[0] < 1 || (ni[0] == 1 && ni[1] < 8))
      throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
    var Tn = {},
      Sn = (function (x, w, z) {
        function O(U) {
          I.cssText = U;
        }

        function A(U, K) {
          return typeof U === K;
        }

        function j(U, K) {
          return !!~("" + U).indexOf(K);
        }

        function H(U, K) {
          for (var at in U) {
            var rt = U[at];
            if (!j(rt, "-") && I[rt] !== z) return K == "pfx" ? rt : !0;
          }
          return !1;
        }

        function F(U, K, at) {
          for (var rt in U) {
            var _t = K[U[rt]];
            if (_t !== z)
              return at === !1
                ? U[rt]
                : A(_t, "function")
                ? _t.bind(at || K)
                : _t;
          }
          return !1;
        }

        function et(U, K, at) {
          var rt = U.charAt(0).toUpperCase() + U.slice(1),
            _t = (U + " " + q.join(rt + " ") + rt).split(" ");
          return A(K, "string") || A(K, "undefined")
            ? H(_t, K)
            : ((_t = (U + " " + X.join(rt + " ") + rt).split(" ")),
              F(_t, K, at));
        }
        var B,
          G,
          Y,
          Z = "2.6.2",
          tt = {},
          vt = w.documentElement,
          xt = "modernizr",
          P = w.createElement(xt),
          I = P.style,
          L = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
          Q = "Webkit Moz O ms",
          q = Q.split(" "),
          X = Q.toLowerCase().split(" "),
          bt = {},
          ft = [],
          ct = ft.slice,
          Tt = function (U, K, at, rt) {
            var _t,
              Qt,
              Vt,
              jt,
              Nt = w.createElement("div"),
              oe = w.body,
              Dt = oe || w.createElement("body");
            if (parseInt(at, 10))
              for (; at--; )
                (Vt = w.createElement("div")),
                  (Vt.id = rt ? rt[at] : xt + (at + 1)),
                  Nt.appendChild(Vt);
            return (
              (_t = ["&#173;", '<style id="s', xt, '">', U, "</style>"].join(
                ""
              )),
              (Nt.id = xt),
              ((oe ? Nt : Dt).innerHTML += _t),
              Dt.appendChild(Nt),
              oe ||
                ((Dt.style.background = ""),
                (Dt.style.overflow = "hidden"),
                (jt = vt.style.overflow),
                (vt.style.overflow = "hidden"),
                vt.appendChild(Dt)),
              (Qt = K(Nt, U)),
              oe
                ? Nt.parentNode.removeChild(Nt)
                : (Dt.parentNode.removeChild(Dt), (vt.style.overflow = jt)),
              !!Qt
            );
          },
          Ot = {}.hasOwnProperty;
        (Y =
          A(Ot, "undefined") || A(Ot.call, "undefined")
            ? function (U, K) {
                return K in U && A(U.constructor.prototype[K], "undefined");
              }
            : function (U, K) {
                return Ot.call(U, K);
              }),
          Function.prototype.bind ||
            (Function.prototype.bind = function (U) {
              var K = this;
              if (typeof K != "function") throw new TypeError();
              var at = ct.call(arguments, 1),
                rt = function () {
                  if (this instanceof rt) {
                    var _t = function () {};
                    _t.prototype = K.prototype;
                    var Qt = new _t(),
                      Vt = K.apply(Qt, at.concat(ct.call(arguments)));
                    return Object(Vt) === Vt ? Vt : Qt;
                  }
                  return K.apply(U, at.concat(ct.call(arguments)));
                };
              return rt;
            }),
          (bt.csstransforms3d = function () {
            var U = !!et("perspective");
            return U;
          });
        for (var Et in bt)
          Y(bt, Et) &&
            ((G = Et.toLowerCase()),
            (tt[G] = bt[Et]()),
            ft.push((tt[G] ? "" : "no-") + G));
        return (
          (tt.addTest = function (U, K) {
            if (typeof U == "object")
              for (var at in U) Y(U, at) && tt.addTest(at, U[at]);
            else {
              if (((U = U.toLowerCase()), tt[U] !== z)) return tt;
              (K = typeof K == "function" ? K() : K),
                typeof enableClasses != "undefined" &&
                  enableClasses &&
                  (vt.className += " " + (K ? "" : "no-") + U),
                (tt[U] = K);
            }
            return tt;
          }),
          O(""),
          (P = B = null),
          (tt._version = Z),
          (tt._prefixes = L),
          (tt._domPrefixes = X),
          (tt._cssomPrefixes = q),
          (tt.testProp = function (U) {
            return H([U]);
          }),
          (tt.testAllProps = et),
          (tt.testStyles = Tt),
          (tt.prefixed = function (U, K, at) {
            return K ? et(U, K, at) : et(U, "pfx");
          }),
          tt
        );
      })(o, p),
      $t = {
        ok: !1,
        is: function () {
          return !1;
        },
        request: function () {},
        cancel: function () {},
        event: "",
        prefix: "",
      },
      En = "webkit moz o ms khtml".split(" ");
    if (typeof p.cancelFullScreen != "undefined") $t.ok = !0;
    else
      for (var Pi = 0, Ro = En.length; Ro > Pi; Pi++)
        if (
          (($t.prefix = En[Pi]),
          typeof p[$t.prefix + "CancelFullScreen"] != "undefined")
        ) {
          $t.ok = !0;
          break;
        }
    $t.ok &&
      (($t.event = $t.prefix + "fullscreenchange"),
      ($t.is = function () {
        switch (this.prefix) {
          case "":
            return p.fullScreen;
          case "webkit":
            return p.webkitIsFullScreen;
          default:
            return p[this.prefix + "FullScreen"];
        }
      }),
      ($t.request = function (x) {
        return this.prefix === ""
          ? x.requestFullScreen()
          : x[this.prefix + "RequestFullScreen"]();
      }),
      ($t.cancel = function () {
        return this.prefix === ""
          ? p.cancelFullScreen()
          : p[this.prefix + "CancelFullScreen"]();
      }));
    var $n,
      Fo = {
        lines: 12,
        length: 5,
        width: 2,
        radius: 7,
        corners: 1,
        rotate: 15,
        color: "rgba(128, 128, 128, .75)",
        hwaccel: !0,
      },
      qo = {
        top: "auto",
        left: "auto",
        className: "",
      };
    (function (x, w) {
      $n = w();
    })(this, function () {
      function x(P, I) {
        var L,
          Q = p.createElement(P || "div");
        for (L in I) Q[L] = I[L];
        return Q;
      }

      function w(P) {
        for (var I = 1, L = arguments.length; L > I; I++)
          P.appendChild(arguments[I]);
        return P;
      }

      function z(P, I, L, Q) {
        var q = ["opacity", I, ~~(100 * P), L, Q].join("-"),
          X = 0.01 + (L / Q) * 100,
          bt = Math.max(1 - ((1 - P) / I) * (100 - X), P),
          ft = G.substring(0, G.indexOf("Animation")).toLowerCase(),
          ct = (ft && "-" + ft + "-") || "";
        return (
          Z[q] ||
            (tt.insertRule(
              "@" +
                ct +
                "keyframes " +
                q +
                "{0%{opacity:" +
                bt +
                "}" +
                X +
                "%{opacity:" +
                P +
                "}" +
                (X + 0.01) +
                "%{opacity:1}" +
                ((X + I) % 100) +
                "%{opacity:" +
                P +
                "}100%{opacity:" +
                bt +
                "}}",
              tt.cssRules.length
            ),
            (Z[q] = 1)),
          q
        );
      }

      function O(P, I) {
        var L,
          Q,
          q = P.style;
        for (
          I = I.charAt(0).toUpperCase() + I.slice(1), Q = 0;
          Q < Y.length;
          Q++
        )
          if (((L = Y[Q] + I), q[L] !== l)) return L;
        return q[I] !== l ? I : void 0;
      }

      function A(P, I) {
        for (var L in I) P.style[O(P, L) || L] = I[L];
        return P;
      }

      function j(P) {
        for (var I = 1; I < arguments.length; I++) {
          var L = arguments[I];
          for (var Q in L) P[Q] === l && (P[Q] = L[Q]);
        }
        return P;
      }

      function H(P) {
        for (
          var I = {
            x: P.offsetLeft,
            y: P.offsetTop,
          };
          (P = P.offsetParent);

        )
          (I.x += P.offsetLeft), (I.y += P.offsetTop);
        return I;
      }

      function F(P, I) {
        return typeof P == "string" ? P : P[I % P.length];
      }

      function et(P) {
        return typeof this == "undefined"
          ? new et(P)
          : void (this.opts = j(P || {}, et.defaults, vt));
      }

      function B() {
        function P(I, L) {
          return x(
            "<" +
              I +
              ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
            L
          );
        }
        tt.addRule(".spin-vml", "behavior:url(#default#VML)"),
          (et.prototype.lines = function (I, L) {
            function Q() {
              return A(
                P("group", {
                  coordsize: ft + " " + ft,
                  coordorigin: -bt + " " + -bt,
                }),
                {
                  width: ft,
                  height: ft,
                }
              );
            }

            function q(Ot, Et, U) {
              w(
                Tt,
                w(
                  A(Q(), {
                    rotation: (360 / L.lines) * Ot + "deg",
                    left: ~~Et,
                  }),
                  w(
                    A(
                      P("roundrect", {
                        arcsize: L.corners,
                      }),
                      {
                        width: bt,
                        height: L.width,
                        left: L.radius,
                        top: -L.width >> 1,
                        filter: U,
                      }
                    ),
                    P("fill", {
                      color: F(L.color, Ot),
                      opacity: L.opacity,
                    }),
                    P("stroke", {
                      opacity: 0,
                    })
                  )
                )
              );
            }
            var X,
              bt = L.length + L.width,
              ft = 2 * bt,
              ct = 2 * -(L.width + L.length) + "px",
              Tt = A(Q(), {
                position: "absolute",
                top: ct,
                left: ct,
              });
            if (L.shadow)
              for (X = 1; X <= L.lines; X++)
                q(
                  X,
                  -2,
                  "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"
                );
            for (X = 1; X <= L.lines; X++) q(X);
            return w(I, Tt);
          }),
          (et.prototype.opacity = function (I, L, Q, q) {
            var X = I.firstChild;
            (q = (q.shadow && q.lines) || 0),
              X &&
                L + q < X.childNodes.length &&
                ((X = X.childNodes[L + q]),
                (X = X && X.firstChild),
                (X = X && X.firstChild),
                X && (X.opacity = Q));
          });
      }
      var G,
        Y = ["webkit", "Moz", "ms", "O"],
        Z = {},
        tt = (function () {
          var P = x("style", {
            type: "text/css",
          });
          return (
            w(p.getElementsByTagName("head")[0], P), P.sheet || P.styleSheet
          );
        })(),
        vt = {
          lines: 12,
          length: 7,
          width: 5,
          radius: 10,
          rotate: 0,
          corners: 1,
          color: "#000",
          direction: 1,
          speed: 1,
          trail: 100,
          opacity: 0.25,
          fps: 20,
          zIndex: 2e9,
          className: "spinner",
          top: "auto",
          left: "auto",
          position: "relative",
        };
      (et.defaults = {}),
        j(et.prototype, {
          spin: function (P) {
            this.stop();
            var I,
              L,
              Q = this,
              q = Q.opts,
              X = (Q.el = A(
                x(0, {
                  className: q.className,
                }),
                {
                  position: q.position,
                  width: 0,
                  zIndex: q.zIndex,
                }
              )),
              bt = q.radius + q.length + q.width;
            if (
              (P &&
                (P.insertBefore(X, P.firstChild || null),
                (L = H(P)),
                (I = H(X)),
                A(X, {
                  left:
                    (q.left == "auto"
                      ? L.x - I.x + (P.offsetWidth >> 1)
                      : parseInt(q.left, 10) + bt) + "px",
                  top:
                    (q.top == "auto"
                      ? L.y - I.y + (P.offsetHeight >> 1)
                      : parseInt(q.top, 10) + bt) + "px",
                })),
              X.setAttribute("role", "progressbar"),
              Q.lines(X, Q.opts),
              !G)
            ) {
              var ft,
                ct = 0,
                Tt = ((q.lines - 1) * (1 - q.direction)) / 2,
                Ot = q.fps,
                Et = Ot / q.speed,
                U = (1 - q.opacity) / ((Et * q.trail) / 100),
                K = Et / q.lines;
              (function at() {
                ct++;
                for (var rt = 0; rt < q.lines; rt++)
                  (ft = Math.max(
                    1 - ((ct + (q.lines - rt) * K) % Et) * U,
                    q.opacity
                  )),
                    Q.opacity(X, rt * q.direction + Tt, ft, q);
                Q.timeout = Q.el && setTimeout(at, ~~(1e3 / Ot));
              })();
            }
            return Q;
          },
          stop: function () {
            var P = this.el;
            return (
              P &&
                (clearTimeout(this.timeout),
                P.parentNode && P.parentNode.removeChild(P),
                (this.el = l)),
              this
            );
          },
          lines: function (P, I) {
            function L(bt, ft) {
              return A(x(), {
                position: "absolute",
                width: I.length + I.width + "px",
                height: I.width + "px",
                background: bt,
                boxShadow: ft,
                transformOrigin: "left",
                transform:
                  "rotate(" +
                  ~~((360 / I.lines) * q + I.rotate) +
                  "deg) translate(" +
                  I.radius +
                  "px,0)",
                borderRadius: ((I.corners * I.width) >> 1) + "px",
              });
            }
            for (
              var Q, q = 0, X = ((I.lines - 1) * (1 - I.direction)) / 2;
              q < I.lines;
              q++
            )
              (Q = A(x(), {
                position: "absolute",
                top: 1 + ~(I.width / 2) + "px",
                transform: I.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: I.opacity,
                animation:
                  G &&
                  z(I.opacity, I.trail, X + q * I.direction, I.lines) +
                    " " +
                    1 / I.speed +
                    "s linear infinite",
              })),
                I.shadow &&
                  w(
                    Q,
                    A(L("#000", "0 0 4px #000"), {
                      top: "2px",
                    })
                  ),
                w(P, w(Q, L(F(I.color, q), "0 0 1px rgba(0,0,0,.1)")));
            return P;
          },
          opacity: function (P, I, L) {
            I < P.childNodes.length && (P.childNodes[I].style.opacity = L);
          },
        });
      var xt = A(x("group"), {
        behavior: "url(#default#VML)",
      });
      return !O(xt, "transform") && xt.adj ? B() : (G = O(xt, "animation")), et;
    });
    var Li,
      oi,
      fe = s(o),
      si = s(p),
      Uo = i.hash.replace("#", "") === "quirks",
      zn = Sn.csstransforms3d,
      $e = zn && !Uo,
      Bo = zn || p.compatMode === "CSS1Compat",
      In = $t.ok,
      Qo = navigator.userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
      ),
      ri = !$e || Qo,
      ze = navigator.msPointerEnabled,
      Vo =
        "onwheel" in p.createElement("div")
          ? "wheel"
          : p.onmousewheel !== l
          ? "mousewheel"
          : "DOMMouseScroll",
      Ie = 250,
      Qe = 300,
      Yo = 1400,
      Xo = 5e3,
      ji = 2,
      ai = 64,
      Ko = 500,
      Go = 333,
      At = "$stageFrame",
      li = "$navDotFrame",
      ci = "$navThumbFrame",
      An = "auto",
      Zo = n([0.1, 0, 0.25, 1]),
      Jo = 99999,
      hi = "50%",
      ts = {
        width: null,
        minwidth: null,
        maxwidth: "100%",
        height: null,
        minheight: null,
        maxheight: null,
        ratio: null,
        margin: ji,
        glimpse: 0,
        fit: "contain",
        position: hi,
        thumbposition: hi,
        nav: "dots",
        navposition: "bottom",
        navwidth: null,
        thumbwidth: ai,
        thumbheight: ai,
        thumbmargin: ji,
        thumbborderwidth: ji,
        thumbfit: "cover",
        allowfullscreen: !1,
        transition: "slide",
        clicktransition: null,
        transitionduration: Qe,
        captions: !0,
        hash: !1,
        startindex: 0,
        loop: !1,
        autoplay: !1,
        stopautoplayontouch: !0,
        keyboard: !1,
        arrows: !0,
        click: !0,
        swipe: !0,
        trackpad: !1,
        enableifsingleframe: !1,
        controlsonstart: !0,
        shuffle: !1,
        direction: "ltr",
        shadows: !0,
        spinner: null,
      },
      es = {
        left: !0,
        right: !0,
        down: !1,
        up: !1,
        space: !1,
        home: !1,
        end: !1,
      };
    ht.stop = function (x) {
      ht.ii[x] = !1;
    };
    var Di, On, Wi, Mn;
    (jQuery.Fotorama = function (x, w) {
      function z() {
        s.each(mt, function (_, T) {
          if (!T.i) {
            T.i = ns++;
            var D = st(T.video, !0);
            if (D) {
              var N = {};
              (T.video = D),
                T.img || T.thumb ? (T.thumbsReady = !0) : (N = gt(T, mt, W)),
                yt(
                  mt,
                  {
                    img: N.img,
                    thumb: N.thumb,
                  },
                  T.i,
                  W
                );
            }
          }
        });
      }

      function O(_) {
        return Rn[_] || W.fullScreen;
      }

      function A(_) {
        var T = "keydown." + dt,
          D = dt + Ui,
          N = "keydown." + D,
          J = "resize." + D + " orientationchange." + D;
        _
          ? (si.on(N, function (R) {
              var ot, it;
              zt && R.keyCode === 27
                ? ((ot = !0), ge(zt, !0, !0))
                : (W.fullScreen || (w.keyboard && !W.index)) &&
                  (R.keyCode === 27
                    ? ((ot = !0), W.cancelFullScreen())
                    : (R.shiftKey && R.keyCode === 32 && O("space")) ||
                      (R.keyCode === 37 && O("left")) ||
                      (R.keyCode === 38 && O("up"))
                    ? (it = "<")
                    : (R.keyCode === 32 && O("space")) ||
                      (R.keyCode === 39 && O("right")) ||
                      (R.keyCode === 40 && O("down"))
                    ? (it = ">")
                    : R.keyCode === 36 && O("home")
                    ? (it = "<<")
                    : R.keyCode === 35 && O("end") && (it = ">>")),
                (ot || it) && pe(R),
                it &&
                  W.show({
                    index: it,
                    slow: R.altKey,
                    user: !0,
                  });
            }),
            W.index ||
              si.off(T).on(T, "textarea, input, select", function (R) {
                !oi.hasClass(Fe) && R.stopPropagation();
              }),
            fe.on(J, W.resize))
          : (si.off(N), fe.off(J));
      }

      function j(_) {
        _ !== j.f &&
          (_
            ? (x
                .html("")
                .addClass(dt + " " + Qn)
                .append(Mt)
                .before(Bi)
                .before(Qi),
              so(W))
            : (Mt.detach(),
              Bi.detach(),
              Qi.detach(),
              x.html(Yn.urtext).removeClass(Qn),
              ro(W)),
          A(_),
          (j.f = _));
      }

      function H() {
        (mt = W.data = mt || re(w.data) || Lt(x)),
          (St = W.size = mt.length),
          !fi.ok && w.shuffle && te(mt),
          z(),
          (ut = Y(ut)),
          St && j(!0);
      }

      function F() {
        var _ = (2 > St && !w.enableifsingleframe) || zt;
        (Zt.noMove = _ || he),
          (Zt.noSwipe = _ || !w.swipe),
          !we && Te.toggleClass(fn, !w.click && !Zt.noMove && !Zt.noSwipe),
          ze && Mt.toggleClass(po, !Zt.noSwipe);
      }

      function et(_) {
        _ === !0 && (_ = ""), (w.autoplay = Math.max(+_ || Xo, 1.5 * Le));
      }

      function B() {
        function _(D, N) {
          T[D ? "add" : "remove"].push(N);
        }
        (W.options = w = _i(w)),
          (he = w.transition === "crossfade" || w.transition === "dissolve"),
          (ce = w.loop && (St > 2 || (he && (!we || we !== "slide")))),
          (Le = +w.transitionduration || Qe),
          (ke = w.direction === "rtl"),
          (Rn = s.extend({}, w.keyboard && es, w.keyboard));
        var T = {
          add: [],
          remove: [],
        };
        St > 1 || w.enableifsingleframe
          ? ((ie = w.nav),
            (Nn = w.navposition === "top"),
            T.remove.push(Ai),
            je.toggle(!!w.arrows))
          : ((ie = !1), je.hide()),
          X(),
          (mi = new $n(
            s.extend(Fo, w.spinner, qo, {
              direction: ke ? -1 : 1,
            })
          )),
          rt(),
          _t(),
          w.autoplay && et(w.autoplay),
          (Ri = g(w.thumbwidth) || ai),
          (vi = g(w.thumbheight) || ai),
          (bi.ok = Je.ok = w.trackpad && !ri),
          F(),
          Ce(w, [lt]),
          (Pe = ie === "thumbs"),
          Pe
            ? (ct(St, "navThumb"),
              (Ni = wi),
              (xe = ci),
              _e(
                Bi,
                s.Fotorama.jst.style({
                  w: Ri,
                  h: vi,
                  b: w.thumbborderwidth,
                  m: w.thumbmargin,
                  s: Ui,
                  q: !Bo,
                })
              ),
              Ft.addClass($i).removeClass(Ei))
            : ie === "dots"
            ? (ct(St, "navDot"),
              (Ni = Xi),
              (xe = li),
              Ft.addClass(Ei).removeClass($i))
            : ((ie = !1), Ft.removeClass($i + " " + Ei)),
          ie &&
            (Nn ? Yi.insertBefore(Pt) : Yi.insertAfter(Pt),
            (U.nav = !1),
            U(Ni, ne, "nav")),
          (gi = w.allowfullscreen),
          gi
            ? (xi.prependTo(Pt), (Ke = In && gi === "native"))
            : (xi.detach(), (Ke = !1)),
          _(he, co),
          _(!he, ho),
          _(!w.captions, mo),
          _(ke, fo),
          _(w.arrows !== "always", go),
          (Ge = w.shadows && !ri),
          _(!Ge, uo),
          Mt.addClass(T.add.join(" ")).removeClass(T.remove.join(" ")),
          (as = s.extend({}, w));
      }

      function G(_) {
        return 0 > _ ? (St + (_ % St)) % St : _ >= St ? _ % St : _;
      }

      function Y(_) {
        return e(_, 0, St - 1);
      }

      function Z(_) {
        return ce ? G(_) : Y(_);
      }

      function tt(_) {
        return _ > 0 || ce ? _ - 1 : !1;
      }

      function vt(_) {
        return St - 1 > _ || ce ? _ + 1 : !1;
      }

      function xt() {
        (Zt.min = ce ? -1 / 0 : -f(St - 1, lt.w, w.margin, ve)),
          (Zt.max = ce ? 1 / 0 : -f(0, lt.w, w.margin, ve)),
          (Zt.snap = lt.w + w.margin);
      }

      function P() {
        (Ct.min = Math.min(0, lt.nw - ne.width())),
          (Ct.max = 0),
          ne.toggleClass(fn, !(Ct.noMove = Ct.min === Ct.max));
      }

      function I(_, T, D) {
        if (typeof _ == "number") {
          _ = new Array(_);
          var N = !0;
        }
        return s.each(_, function (J, R) {
          if ((N && (R = J), typeof R == "number")) {
            var ot = mt[G(R)];
            if (ot) {
              var it = "$" + T + "Frame",
                nt = ot[it];
              D.call(this, J, R, ot, nt, it, nt && nt.data());
            }
          }
        });
      }

      function L(_, T, D, N) {
        (!Fi || (Fi === "*" && N === Xe)) &&
          ((_ = c(w.width) || c(_) || Ko),
          (T = c(w.height) || c(T) || Go),
          W.resize(
            {
              width: _,
              ratio: w.ratio || D || _ / T,
            },
            0,
            N !== Xe && "*"
          ));
      }

      function Q(_, T, D, N, J, R) {
        I(_, T, function (ot, it, nt, Wt, We, Kt) {
          function Zi(ei) {
            var io = G(it);
            Yt(ei, {
              index: io,
              src: qt,
              frame: mt[io],
            });
          }

          function Ji() {
            Ne.remove(),
              (s.Fotorama.cache[qt] = "error"),
              (nt.html && T === "stage") || !tn || tn === qt
                ? (!qt || nt.html || be
                    ? T === "stage" &&
                      (Wt.trigger("f:load")
                        .removeClass(Mi + " " + Oi)
                        .addClass(ii),
                      Zi("load"),
                      L())
                    : (Wt.trigger("f:error").removeClass(Mi).addClass(Oi),
                      Zi("error")),
                  (Kt.state = "error"),
                  !(St > 1 && mt[it] === nt) ||
                    nt.html ||
                    nt.deleted ||
                    nt.video ||
                    be ||
                    ((nt.deleted = !0), W.splice(it, 1)))
                : ((nt[eo] = qt = tn), Q([it], T, D, N, J, !0));
          }

          function cs() {
            (s.Fotorama.measures[qt] = ti.measures =
              s.Fotorama.measures[qt] || {
                width: He.width,
                height: He.height,
                ratio: He.width / He.height,
              }),
              L(ti.measures.width, ti.measures.height, ti.measures.ratio, it),
              Ne.off("load error")
                .addClass(bn + (be ? " " + Mo : ""))
                .prependTo(Wt),
              It(
                Ne,
                (s.isFunction(D) ? D() : D) || lt,
                N || nt.fit || w.fit,
                J || nt.position || w.position
              ),
              (s.Fotorama.cache[qt] = Kt.state = "loaded"),
              setTimeout(function () {
                Wt.trigger("f:load")
                  .removeClass(Mi + " " + Oi)
                  .addClass(ii + " " + (be ? Ao : Oo)),
                  T === "stage"
                    ? Zi("load")
                    : (nt.thumbratio === An ||
                        (!nt.thumbratio && w.thumbratio === An)) &&
                      ((nt.thumbratio = ti.measures.ratio), ae());
              }, 0);
          }

          function to() {
            var ei = 10;
            ht(
              function () {
                return !Ze || (!ei-- && !ri);
              },
              function () {
                cs();
              }
            );
          }
          if (Wt) {
            var be =
              W.fullScreen &&
              nt.full &&
              nt.full !== nt.img &&
              !Kt.$full &&
              T === "stage";
            if (!Kt.$img || R || be) {
              var He = new Image(),
                Ne = s(He),
                ti = Ne.data();
              Kt[be ? "$full" : "$img"] = Ne;
              var eo = T === "stage" ? (be ? "full" : "img") : "thumb",
                qt = nt[eo],
                tn = be ? null : nt[T === "stage" ? "thumb" : "img"];
              if ((T === "navThumb" && (Wt = Kt.$wrap), !qt)) return void Ji();
              s.Fotorama.cache[qt]
                ? (function ei() {
                    s.Fotorama.cache[qt] === "error"
                      ? Ji()
                      : s.Fotorama.cache[qt] === "loaded"
                      ? setTimeout(to, 0)
                      : setTimeout(ei, 100);
                  })()
                : ((s.Fotorama.cache[qt] = "*"),
                  Ne.on("load", to).on("error", Ji)),
                (Kt.state = ""),
                (He.src = qt);
            }
          }
        });
      }

      function q(_) {
        Zn.append(mi.spin().el).appendTo(_);
      }

      function X() {
        Zn.detach(), mi && mi.stop();
      }

      function bt() {
        var _ = Xt[At];
        _ &&
          !_.data().state &&
          (q(_),
          _.on("f:load f:error", function () {
            _.off("f:load f:error"), X();
          }));
      }

      function ft(_) {
        Ci(_, Ln),
          ki(_, function () {
            setTimeout(function () {
              Se(Ft);
            }, 0),
              jt({
                time: Le,
                guessIndex: s(this).data().eq,
                minMax: Ct,
              });
          });
      }

      function ct(_, T) {
        I(_, T, function (D, N, J, R, ot, it) {
          if (!R) {
            (R = J[ot] = Mt[ot].clone()), (it = R.data()), (it.data = J);
            var nt = R[0];
            T === "stage"
              ? (J.html &&
                  s('<div class="' + jo + '"></div>')
                    .append(
                      J._html
                        ? s(J.html).removeAttr("id").html(J._html)
                        : J.html
                    )
                    .appendTo(R),
                J.caption && s(wt(Wo, wt(Ho, J.caption))).appendTo(R),
                J.video && R.addClass(vo).append(Gn.clone()),
                ki(nt, function () {
                  setTimeout(function () {
                    Se(Pt);
                  }, 0),
                    Me({
                      index: it.eq,
                      user: !0,
                    });
                }),
                (Vi = Vi.add(R)))
              : T === "navDot"
              ? (ft(nt), (Xi = Xi.add(R)))
              : T === "navThumb" &&
                (ft(nt),
                (it.$wrap = R.children(":first")),
                (wi = wi.add(R)),
                J.video && it.$wrap.append(Gn.clone()));
          }
        });
      }

      function Tt(_, T, D, N) {
        return _ && _.length && It(_, T, D, N);
      }

      function Ot(_) {
        I(_, "stage", function (T, D, N, J, R, ot) {
          if (J) {
            var it = G(D),
              nt = N.fit || w.fit,
              Wt = N.position || w.position;
            (ot.eq = it),
              (Gi[At][it] = J.css(
                s.extend(
                  {
                    left: he ? 0 : f(D, lt.w, w.margin, ve),
                  },
                  he && u(0)
                )
              )),
              kt(J[0]) && (J.appendTo(Te), ge(N.$video)),
              Tt(ot.$img, lt, nt, Wt),
              Tt(ot.$full, lt, nt, Wt);
          }
        });
      }

      function Et(_, T) {
        if (ie === "thumbs" && !isNaN(_)) {
          var D = -_,
            N = -_ + lt.nw;
          wi.each(function () {
            var J = s(this),
              R = J.data(),
              ot = R.eq,
              it = function () {
                return {
                  h: vi,
                  w: R.w,
                };
              },
              nt = it(),
              Wt = mt[ot] || {},
              We = Wt.thumbfit || w.thumbfit,
              Kt = Wt.thumbposition || w.thumbposition;
            (nt.w = R.w),
              R.l + R.w < D ||
                R.l > N ||
                Tt(R.$img, nt, We, Kt) ||
                (T && Q([ot], "navThumb", it, We, Kt));
          });
        }
      }

      function U(_, T, D) {
        if (!U[D]) {
          var N = D === "nav" && Pe,
            J = 0;
          T.append(
            _.filter(function () {
              for (
                var R, ot = s(this), it = ot.data(), nt = 0, Wt = mt.length;
                Wt > nt;
                nt++
              )
                if (it.data === mt[nt]) {
                  (R = !0), (it.eq = nt);
                  break;
                }
              return R || (ot.remove() && !1);
            })
              .sort(function (R, ot) {
                return s(R).data().eq - s(ot).data().eq;
              })
              .each(function () {
                if (N) {
                  var R = s(this),
                    ot = R.data(),
                    it = Math.round(vi * ot.data.thumbratio) || Ri;
                  (ot.l = J),
                    (ot.w = it),
                    R.css({
                      width: it,
                    }),
                    (J += it + w.thumbmargin);
                }
              })
          ),
            (U[D] = !0);
        }
      }

      function K(_) {
        return _ - Jn > lt.w / 3;
      }

      function at(_) {
        return !(ce || (ut + _ && ut - St + _) || zt);
      }

      function rt() {
        var _ = at(0),
          T = at(1);
        Xn.toggleClass(mn, _).attr(nn(_)), Kn.toggleClass(mn, T).attr(nn(T));
      }

      function _t() {
        bi.ok &&
          (bi.prevent = {
            "<": at(0),
            ">": at(1),
          });
      }

      function Qt(_) {
        var T,
          D,
          N = _.data();
        return (
          Pe
            ? ((T = N.l), (D = N.w))
            : ((T = _.position().left), (D = _.width())),
          {
            c: T + D / 2,
            min: -T + 10 * w.thumbmargin,
            max: -T + lt.w - D - 10 * w.thumbmargin,
          }
        );
      }

      function Vt(_) {
        var T = Xt[xe].data();
        Re(os, {
          time: 1.2 * _,
          pos: T.l,
          width: T.w - 2 * w.thumbborderwidth,
        });
      }

      function jt(_) {
        var T = mt[_.guessIndex][xe];
        if (T) {
          var D = Ct.min !== Ct.max,
            N = _.minMax || (D && Qt(Xt[xe])),
            J =
              D &&
              (_.keep && jt.l
                ? jt.l
                : e((_.coo || lt.nw / 2) - Qt(T).c, N.min, N.max)),
            R = D && e(J, Ct.min, Ct.max),
            ot = 1.1 * _.time;
          Re(ne, {
            time: ot,
            pos: R || 0,
            onEnd: function () {
              Et(R, !0);
            },
          }),
            Ae(Ft, Rt(R, Ct.min, Ct.max)),
            (jt.l = J);
        }
      }

      function Nt() {
        oe(xe), De[xe].push(Xt[xe].addClass(Ii));
      }

      function oe(_) {
        for (var T = De[_]; T.length; ) T.shift().removeClass(Ii);
      }

      function Dt(_) {
        var T = Gi[_];
        s.each(le, function (D, N) {
          delete T[G(N)];
        }),
          s.each(T, function (D, N) {
            delete T[D], N.detach();
          });
      }

      function Ve(_) {
        ve = Gt = ut;
        var T = Xt[At];
        T &&
          (oe(At),
          De[At].push(T.addClass(Ii)),
          _ || W.show.onEnd(!0),
          C(Te, 0, !0),
          Dt(At),
          Ot(le),
          xt(),
          P());
      }

      function Ce(_, T) {
        _ &&
          s.each(T, function (D, N) {
            N &&
              s.extend(N, {
                width: _.width || N.width,
                height: _.height,
                minwidth: _.minwidth,
                maxwidth: _.maxwidth,
                minheight: _.minheight,
                maxheight: _.maxheight,
                ratio: en(_.ratio),
              });
          });
      }

      function Yt(_, T) {
        x.trigger(dt + ":" + _, [W, T]);
      }

      function me() {
        clearTimeout(se.t),
          (Ze = 1),
          w.stopautoplayontouch ? W.stopAutoplay() : (de = !0);
      }

      function se() {
        Ze &&
          (w.stopautoplayontouch || (di(), ee()),
          (se.t = setTimeout(function () {
            Ze = 0;
          }, Qe + Ie)));
      }

      function di() {
        de = !(!zt && !qi);
      }

      function ee() {
        if ((clearTimeout(ee.t), ht.stop(ee.w), !w.autoplay || de))
          return void (W.autoplay && ((W.autoplay = !1), Yt("stopautoplay")));
        W.autoplay || ((W.autoplay = !0), Yt("startautoplay"));
        var _ = ut,
          T = Xt[At].data();
        ee.w = ht(
          function () {
            return T.state || _ !== ut;
          },
          function () {
            ee.t = setTimeout(function () {
              if (!de && _ === ut) {
                var D = Ye,
                  N = mt[D][At].data();
                ee.w = ht(
                  function () {
                    return N.state || D !== Ye;
                  },
                  function () {
                    de || D !== Ye || W.show(ce ? Ti(!ke) : Ye);
                  }
                );
              }
            }, w.autoplay);
          }
        );
      }

      function Pn() {
        W.fullScreen &&
          ((W.fullScreen = !1),
          In && $t.cancel(Vn),
          oi.removeClass(Fe),
          Li.removeClass(Fe),
          x.removeClass(wn).insertAfter(Qi),
          (lt = s.extend({}, Bn)),
          ge(zt, !0, !0),
          pi("x", !1),
          W.resize(),
          Q(le, "stage"),
          Se(fe, qn, Fn),
          Yt("fullscreenexit"));
      }

      function Ae(_, T) {
        Ge &&
          (_.removeClass(Eo + " " + $o),
          T && !zt && _.addClass(T.replace(/^|\s/g, " " + zi + "--")));
      }

      function ge(_, T, D) {
        T && (Mt.removeClass(hn), (zt = !1), F()),
          _ && _ !== zt && (_.remove(), Yt("unloadvideo")),
          D && (di(), ee());
      }

      function ui(_) {
        Mt.toggleClass(dn, _);
      }

      function Oe(_) {
        if (!Zt.flow) {
          var T = _ ? _.pageX : Oe.x,
            D = T && !at(K(T)) && w.click;
          Oe.p !== D && Pt.toggleClass(wo, D) && ((Oe.p = D), (Oe.x = T));
        }
      }

      function Me(_) {
        clearTimeout(Me.t),
          w.clicktransition && w.clicktransition !== w.transition
            ? setTimeout(function () {
                var T = w.transition;
                W.setOptions({
                  transition: w.clicktransition,
                }),
                  (we = T),
                  (Me.t = setTimeout(function () {
                    W.show(_);
                  }, 10));
              }, 0)
            : W.show(_);
      }

      function is(_, T) {
        var D = _.target,
          N = s(D);
        N.hasClass(kn)
          ? W.playVideo()
          : D === Ki
          ? W.toggleFullScreen()
          : zt
          ? D === rs && ge(zt, !0, !0)
          : T
          ? ui()
          : w.click &&
            Me({
              index: _.shiftKey || Ti(K(_._x)),
              slow: _.altKey,
              user: !0,
            });
      }

      function pi(_, T) {
        Zt[_] = Ct[_] = T;
      }

      function Ln(_) {
        var T = s(this).data().eq;
        Me({
          index: T,
          slow: _.altKey,
          user: !0,
          coo: _._x - Ft.offset().left,
        });
      }

      function jn(_) {
        Me({
          index: je.index(this) ? ">" : "<",
          slow: _.altKey,
          user: !0,
        });
      }

      function Dn(_) {
        ki(_, function () {
          setTimeout(function () {
            Se(Pt);
          }, 0),
            ui(!1);
        });
      }

      function ae() {
        if ((H(), B(), !ae.i)) {
          ae.i = !0;
          var _ = w.startindex;
          (_ || (w.hash && i.hash)) &&
            (Xe = Ut(_ || i.hash.replace(/^#/, ""), mt, W.index === 0 || _, _)),
            (ut = ve = Gt = ye = Xe = Z(Xe) || 0);
        }
        if (St) {
          if (Hi()) return;
          zt && ge(zt, !0),
            (le = []),
            Dt(At),
            (ae.ok = !0),
            W.show({
              index: ut,
              time: 0,
            }),
            W.resize();
        } else W.destroy();
      }

      function Hi() {
        return !Hi.f === ke
          ? ((Hi.f = ke), (ut = St - 1 - ut), W.reverse(), !0)
          : void 0;
      }

      function fi() {
        fi.ok || ((fi.ok = !0), Yt("ready"));
      }
      (Li = s("html")), (oi = s("body"));
      var mt,
        St,
        Ni,
        mi,
        zt,
        Xt,
        le,
        ve,
        Gt,
        ye,
        Wn,
        Hn,
        Ye,
        Xe,
        ce,
        ie,
        Pe,
        Nn,
        gi,
        Ke,
        he,
        Ri,
        vi,
        Le,
        we,
        Ge,
        ke,
        Rn,
        Fi,
        Fn,
        qn,
        Un,
        de,
        qi,
        Bn,
        Ze,
        yi,
        xe,
        W = this,
        Ui = s.now(),
        Qn = dt + Ui,
        Vn = x[0],
        ns = 1,
        Yn = x.data(),
        Bi = s("<style></style>"),
        Qi = s(wt(zo)),
        Mt = s(wt(Bt)),
        Pt = s(wt(Si)).appendTo(Mt),
        Te = (Pt[0], s(wt(yo)).appendTo(Pt)),
        Vi = s(),
        Xn = s(wt(qe + " " + xo + Be)),
        Kn = s(wt(qe + " " + bo + Be)),
        je = Xn.add(Kn).appendTo(Pt),
        Yi = s(wt(_o)),
        Ft = s(wt(Ee)).appendTo(Yi),
        ne = s(wt(Co)).appendTo(Ft),
        Xi = s(),
        wi = s(),
        os = (Te.data(), ne.data(), s(wt(Lo)).appendTo(ne)),
        xi = s(wt(Io + Be)),
        Ki = xi[0],
        Gn = s(wt(kn)),
        ss = s(wt(Do)).appendTo(Pt),
        rs = ss[0],
        Zn = s(wt(No)),
        ut = !1,
        as = {},
        lt = {},
        Zt = {},
        bi = {},
        Ct = {},
        Je = {},
        De = {},
        Gi = {},
        Jn = 0,
        ls = [];
      (Mt[At] = s(wt(pn))),
        (Mt[ci] = s(wt(Ue + " " + To + Be, wt(_n)))),
        (Mt[li] = s(wt(Ue + " " + ko + Be, wt(Po)))),
        (De[At] = []),
        (De[ci] = []),
        (De[li] = []),
        (Gi[At] = {}),
        Mt.addClass($e ? lo : ao).toggleClass(dn, !w.controlsonstart),
        (Yn.fotorama = this),
        (W.startAutoplay = function (_) {
          return W.autoplay
            ? this
            : ((de = qi = !1), et(_ || w.autoplay), ee(), this);
        }),
        (W.stopAutoplay = function () {
          return W.autoplay && ((de = qi = !0), ee()), this;
        }),
        (W.show = function (_) {
          var T;
          typeof _ != "object" ? ((T = _), (_ = {})) : (T = _.index),
            (T =
              T === ">"
                ? Gt + 1
                : T === "<"
                ? Gt - 1
                : T === "<<"
                ? 0
                : T === ">>"
                ? St - 1
                : T),
            (T = isNaN(T) ? Ut(T, mt, !0) : T),
            (T = typeof T == "undefined" ? ut || 0 : T),
            (W.activeIndex = ut = Z(T)),
            (Wn = tt(ut)),
            (Hn = vt(ut)),
            (Ye = G(ut + (ke ? -1 : 1))),
            (le = [ut, Wn, Hn]),
            (Gt = ce ? T : ut);
          var D = Math.abs(ye - Gt),
            N = S(_.time, function () {
              return Math.min(Le * (1 + (D - 1) / 12), 2 * Le);
            }),
            J = _.overPos;
          _.slow && (N *= 10);
          var R = Xt;
          W.activeFrame = Xt = mt[ut];
          var ot = R === Xt && !_.user;
          ge(zt, Xt.i !== mt[G(ve)].i),
            ct(le, "stage"),
            Ot(ri ? [Gt] : [Gt, tt(Gt), vt(Gt)]),
            pi("go", !0),
            ot ||
              Yt("show", {
                user: _.user,
                time: N,
              }),
            (de = !0);
          var it = (W.show.onEnd = function (Kt) {
            if (!it.ok) {
              if (
                ((it.ok = !0),
                Kt || Ve(!0),
                ot ||
                  Yt("showend", {
                    user: _.user,
                  }),
                !Kt && we && we !== w.transition)
              )
                return (
                  W.setOptions({
                    transition: we,
                  }),
                  void (we = !1)
                );
              bt(), Q(le, "stage"), pi("go", !1), _t(), Oe(), di(), ee();
            }
          });
          if (he) {
            var nt = Xt[At],
              Wt = ut !== ye ? mt[ye][At] : null;
            on(
              nt,
              Wt,
              Vi,
              {
                time: N,
                method: w.transition,
                onEnd: it,
              },
              ls
            );
          } else
            Re(Te, {
              pos: -f(Gt, lt.w, w.margin, ve),
              overPos: J,
              time: N,
              onEnd: it,
            });
          if ((rt(), ie)) {
            Nt();
            var We = Y(ut + e(Gt - ye, -1, 1));
            jt({
              time: N,
              coo: We !== ut && _.coo,
              guessIndex: typeof _.coo != "undefined" ? We : ut,
              keep: ot,
            }),
              Pe && Vt(N);
          }
          return (
            (Un = typeof ye != "undefined" && ye !== ut),
            (ye = ut),
            w.hash && Un && !W.eq && Jt(Xt.id || ut + 1),
            this
          );
        }),
        (W.requestFullScreen = function () {
          return (
            gi &&
              !W.fullScreen &&
              ((Fn = fe.scrollTop()),
              (qn = fe.scrollLeft()),
              Se(fe),
              pi("x", !0),
              (Bn = s.extend({}, lt)),
              x.addClass(wn).appendTo(oi.addClass(Fe)),
              Li.addClass(Fe),
              ge(zt, !0, !0),
              (W.fullScreen = !0),
              Ke && $t.request(Vn),
              W.resize(),
              Q(le, "stage"),
              bt(),
              Yt("fullscreenenter")),
            this
          );
        }),
        (W.cancelFullScreen = function () {
          return Ke && $t.is() ? $t.cancel(p) : Pn(), this;
        }),
        (W.toggleFullScreen = function () {
          return W[(W.fullScreen ? "cancel" : "request") + "FullScreen"]();
        }),
        Ht(p, $t.event, function () {
          !mt || $t.is() || zt || Pn();
        }),
        (W.resize = function (_) {
          if (!mt) return this;
          var T = arguments[1] || 0,
            D = arguments[2];
          Ce(
            W.fullScreen
              ? {
                  width: "100%",
                  maxwidth: null,
                  minwidth: null,
                  height: "100%",
                  maxheight: null,
                  minheight: null,
                }
              : _i(_),
            [lt, D || W.fullScreen || w]
          );
          var N = lt.width,
            J = lt.height,
            R = lt.ratio,
            ot = fe.height() - (ie ? Ft.height() : 0);
          return (
            c(N) &&
              (Mt.addClass(un).css({
                width: N,
                minWidth: lt.minwidth || 0,
                maxWidth: lt.maxwidth || Jo,
              }),
              (N = lt.W = lt.w = Mt.width()),
              (lt.nw = (ie && m(w.navwidth, N)) || N),
              w.glimpse && (lt.w -= Math.round(2 * (m(w.glimpse, N) || 0))),
              Te.css({
                width: lt.w,
                marginLeft: (lt.W - lt.w) / 2,
              }),
              (J = m(J, ot)),
              (J = J || (R && N / R)),
              J &&
                ((N = Math.round(N)),
                (J = lt.h =
                  Math.round(e(J, m(lt.minheight, ot), m(lt.maxheight, ot)))),
                Pt.stop().animate(
                  {
                    width: N,
                    height: J,
                  },
                  T,
                  function () {
                    Mt.removeClass(un);
                  }
                ),
                Ve(),
                ie &&
                  (Ft.stop().animate(
                    {
                      width: lt.nw,
                    },
                    T
                  ),
                  jt({
                    guessIndex: ut,
                    time: T,
                    keep: !0,
                  }),
                  Pe && U.nav && Vt(T)),
                (Fi = D || !0),
                fi())),
            (Jn = Pt.offset().left),
            this
          );
        }),
        (W.setOptions = function (_) {
          return s.extend(w, _), ae(), this;
        }),
        (W.shuffle = function () {
          return mt && te(mt) && ae(), this;
        }),
        (W.destroy = function () {
          return (
            W.cancelFullScreen(),
            W.stopAutoplay(),
            (mt = W.data = null),
            j(),
            (le = []),
            Dt(At),
            (ae.ok = !1),
            this
          );
        }),
        (W.playVideo = function () {
          var _ = Xt,
            T = _.video,
            D = ut;
          return (
            typeof T == "object" &&
              _.videoReady &&
              (Ke && W.fullScreen && W.cancelFullScreen(),
              ht(
                function () {
                  return !$t.is() || D !== ut;
                },
                function () {
                  D === ut &&
                    ((_.$video = _.$video || s(s.Fotorama.jst.video(T))),
                    _.$video.appendTo(_[At]),
                    Mt.addClass(hn),
                    (zt = _.$video),
                    F(),
                    je.blur(),
                    xi.blur(),
                    Yt("loadvideo"));
                }
              )),
            this
          );
        }),
        (W.stopVideo = function () {
          return ge(zt, !0, !0), this;
        }),
        Pt.on("mousemove", Oe),
        (Zt = an(Te, {
          onStart: me,
          onMove: function (_, T) {
            Ae(Pt, T.edge);
          },
          onTouchEnd: se,
          onEnd: function (_) {
            Ae(Pt);
            var T =
              ((ze && !yi) || _.touch) && w.arrows && w.arrows !== "always";
            if (_.moved || (T && _.pos !== _.newPos && !_.control)) {
              var D = y(_.newPos, lt.w, w.margin, ve);
              W.show({
                index: D,
                time: he ? Le : _.time,
                overPos: _.overPos,
                user: !0,
              });
            } else _.aborted || _.control || is(_.startEvent, T);
          },
          timeLow: 1,
          timeHigh: 1,
          friction: 2,
          select: "." + Ai + ", ." + Ai + " *",
          $wrap: Pt,
        })),
        (Ct = an(ne, {
          onStart: me,
          onMove: function (_, T) {
            Ae(Ft, T.edge);
          },
          onTouchEnd: se,
          onEnd: function (_) {
            function T() {
              (jt.l = _.newPos), di(), ee(), Et(_.newPos, !0);
            }
            if (_.moved)
              _.pos !== _.newPos
                ? ((de = !0),
                  Re(ne, {
                    time: _.time,
                    pos: _.newPos,
                    overPos: _.overPos,
                    onEnd: T,
                  }),
                  Et(_.newPos),
                  Ge && Ae(Ft, Rt(_.newPos, Ct.min, Ct.max)))
                : T();
            else {
              var D = _.$target.closest("." + Ue, ne)[0];
              D && Ln.call(D, _.startEvent);
            }
          },
          timeLow: 0.5,
          timeHigh: 2,
          friction: 5,
          $wrap: Ft,
        })),
        (bi = ln(Pt, {
          shift: !0,
          onEnd: function (_, T) {
            me(),
              se(),
              W.show({
                index: T,
                slow: _.altKey,
              });
          },
        })),
        (Je = ln(Ft, {
          onEnd: function (_, T) {
            me(), se();
            var D = C(ne) + 0.25 * T;
            ne.css(d(e(D, Ct.min, Ct.max))),
              Ge && Ae(Ft, Rt(D, Ct.min, Ct.max)),
              (Je.prevent = {
                "<": D >= Ct.max,
                ">": D <= Ct.min,
              }),
              clearTimeout(Je.t),
              (Je.t = setTimeout(function () {
                (jt.l = D), Et(D, !0);
              }, Ie)),
              Et(D);
          },
        })),
        Mt.hover(
          function () {
            setTimeout(function () {
              Ze || ui(!(yi = !0));
            }, 0);
          },
          function () {
            yi && ui(!(yi = !1));
          }
        ),
        ue(
          je,
          function (_) {
            pe(_), jn.call(this, _);
          },
          {
            onStart: function () {
              me(), (Zt.control = !0);
            },
            onTouchEnd: se,
          }
        ),
        je.each(function () {
          Ci(this, function (_) {
            jn.call(this, _);
          }),
            Dn(this);
        }),
        Ci(Ki, W.toggleFullScreen),
        Dn(Ki),
        s.each(
          "load push pop shift unshift reverse sort splice".split(" "),
          function (_, T) {
            W[T] = function () {
              return (
                (mt = mt || []),
                T !== "load"
                  ? Array.prototype[T].apply(mt, arguments)
                  : arguments[0] &&
                    typeof arguments[0] == "object" &&
                    arguments[0].length &&
                    (mt = re(arguments[0])),
                ae(),
                W
              );
            };
          }
        ),
        ae();
    }),
      (s.fn.fotorama = function (x) {
        return this.each(function () {
          var w = this,
            z = s(this),
            O = z.data(),
            A = O.fotorama;
          A
            ? A.setOptions(x, !0)
            : ht(
                function () {
                  return !pt(w);
                },
                function () {
                  (O.urtext = z.html()),
                    new s.Fotorama(
                      z,
                      s.extend({}, ts, o.fotoramaDefaults, x, O)
                    );
                }
              );
        });
      }),
      (s.Fotorama.instances = []),
      (s.Fotorama.cache = {}),
      (s.Fotorama.measures = {}),
      (s = s || {}),
      (s.Fotorama = s.Fotorama || {}),
      (s.Fotorama.jst = s.Fotorama.jst || {}),
      (s.Fotorama.jst.style = function (x) {
        {
          var w,
            z = "";
          Tn.escape;
        }
        return (z +=
          ".fotorama" +
          ((w = x.s) == null ? "" : w) +
          " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" +
          ((w = x.m) == null ? "" : w) +
          "px;\nheight:" +
          ((w = x.h) == null ? "" : w) +
          "px}\n.fotorama" +
          ((w = x.s) == null ? "" : w) +
          " .fotorama__thumb-border{\nheight:" +
          ((w = x.h - x.b * (x.q ? 0 : 2)) == null ? "" : w) +
          "px;\nborder-width:" +
          ((w = x.b) == null ? "" : w) +
          "px;\nmargin-top:" +
          ((w = x.m) == null ? "" : w) +
          "px}");
      }),
      (s.Fotorama.jst.video = function (x) {
        function w() {
          z += O.call(arguments, "");
        }
        var z = "",
          O = (Tn.escape, Array.prototype.join);
        return (
          (z += '<div class="fotorama__video"><iframe src="'),
          w(
            (x.type == "youtube"
              ? x.p + "youtube.com/embed/" + x.id + "?autoplay=1"
              : x.type == "vimeo"
              ? x.p + "player.vimeo.com/video/" + x.id + "?autoplay=1&badge=0"
              : x.id) + (x.s && x.type != "custom" ? "&" + x.s : "")
          ),
          (z += '" frameborder="0" allowfullscreen></iframe></div>\n')
        );
      }),
      s(function () {
        s("." + dt + ':not([data-auto="false"])').fotorama();
      });
  })(window, document, location, typeof jQuery != "undefined" && jQuery);
/*! jQuery UI - v1.11.4 - 2015-12-02
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (o) {
  typeof define == "function" && define.amd ? define(["jquery"], o) : o(jQuery);
})(function (o) {
  function p(t, e) {
    var r,
      a,
      d,
      u = t.nodeName.toLowerCase();
    return u === "area"
      ? ((r = t.parentNode),
        (a = r.name),
        t.href && a && r.nodeName.toLowerCase() === "map"
          ? ((d = o("img[usemap='#" + a + "']")[0]), !!d && i(d))
          : !1)
      : (/^(input|select|textarea|button|object)$/.test(u)
          ? !t.disabled
          : (u === "a" && t.href) || e) && i(t);
  }

  function i(t) {
    return (
      o.expr.filters.visible(t) &&
      !o(t)
        .parents()
        .addBack()
        .filter(function () {
          return o.css(this, "visibility") === "hidden";
        }).length
    );
  }
  (o.ui = o.ui || {}),
    o.extend(o.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    o.fn.extend({
      scrollParent: function (t) {
        var e = this.css("position"),
          r = e === "absolute",
          a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          d = this.parents()
            .filter(function () {
              var u = o(this);
              return r && u.css("position") === "static"
                ? !1
                : a.test(
                    u.css("overflow") +
                      u.css("overflow-y") +
                      u.css("overflow-x")
                  );
            })
            .eq(0);
        return e !== "fixed" && d.length
          ? d
          : o(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && o(this).removeAttr("id");
        });
      },
    }),
    o.extend(o.expr[":"], {
      data: o.expr.createPseudo
        ? o.expr.createPseudo(function (t) {
            return function (e) {
              return !!o.data(e, t);
            };
          })
        : function (t, e, r) {
            return !!o.data(t, r[3]);
          },
      focusable: function (t) {
        return p(t, !isNaN(o.attr(t, "tabindex")));
      },
      tabbable: function (t) {
        var e = o.attr(t, "tabindex"),
          r = isNaN(e);
        return (r || e >= 0) && p(t, !r);
      },
    }),
    o("<a>").outerWidth(1).jquery ||
      o.each(["Width", "Height"], function (t, e) {
        function r(h, g, v, m) {
          return (
            o.each(a, function () {
              (g -= parseFloat(o.css(h, "padding" + this)) || 0),
                v &&
                  (g -= parseFloat(o.css(h, "border" + this + "Width")) || 0),
                m && (g -= parseFloat(o.css(h, "margin" + this)) || 0);
            }),
            g
          );
        }
        var a = e === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
          d = e.toLowerCase(),
          u = {
            innerWidth: o.fn.innerWidth,
            innerHeight: o.fn.innerHeight,
            outerWidth: o.fn.outerWidth,
            outerHeight: o.fn.outerHeight,
          };
        (o.fn["inner" + e] = function (h) {
          return h === void 0
            ? u["inner" + e].call(this)
            : this.each(function () {
                o(this).css(d, r(this, h) + "px");
              });
        }),
          (o.fn["outer" + e] = function (h, g) {
            return typeof h != "number"
              ? u["outer" + e].call(this, h)
              : this.each(function () {
                  o(this).css(d, r(this, h, !0, g) + "px");
                });
          });
      }),
    o.fn.addBack ||
      (o.fn.addBack = function (t) {
        return this.add(
          t == null ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    o("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (o.fn.removeData = (function (t) {
        return function (e) {
          return arguments.length ? t.call(this, o.camelCase(e)) : t.call(this);
        };
      })(o.fn.removeData)),
    (o.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    o.fn.extend({
      focus: (function (t) {
        return function (e, r) {
          return typeof e == "number"
            ? this.each(function () {
                var a = this;
                setTimeout(function () {
                  o(a).focus(), r && r.call(a);
                }, e);
              })
            : t.apply(this, arguments);
        };
      })(o.fn.focus),
      disableSelection: (function () {
        var t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(t + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (t) {
        if (t !== void 0) return this.css("zIndex", t);
        if (this.length)
          for (var e, r, a = o(this[0]); a.length && a[0] !== document; ) {
            if (
              ((e = a.css("position")),
              (e === "absolute" || e === "relative" || e === "fixed") &&
                ((r = parseInt(a.css("zIndex"), 10)), !isNaN(r) && r !== 0))
            )
              return r;
            a = a.parent();
          }
        return 0;
      },
    }),
    (o.ui.plugin = {
      add: function (t, e, r) {
        var a,
          d = o.ui[t].prototype;
        for (a in r)
          (d.plugins[a] = d.plugins[a] || []), d.plugins[a].push([e, r[a]]);
      },
      call: function (t, e, r, a) {
        var d,
          u = t.plugins[e];
        if (
          u &&
          (a ||
            (t.element[0].parentNode &&
              t.element[0].parentNode.nodeType !== 11))
        )
          for (d = 0; u.length > d; d++)
            t.options[u[d][0]] && u[d][1].apply(t.element, r);
      },
    });
  var s = 0,
    l = Array.prototype.slice;
  (o.cleanData = (function (t) {
    return function (e) {
      var r, a, d;
      for (d = 0; (a = e[d]) != null; d++)
        try {
          (r = o._data(a, "events")),
            r && r.remove && o(a).triggerHandler("remove");
        } catch (u) {}
      t(e);
    };
  })(o.cleanData)),
    (o.widget = function (t, e, r) {
      var a,
        d,
        u,
        h,
        g = {},
        v = t.split(".")[0];
      return (
        (t = t.split(".")[1]),
        (a = v + "-" + t),
        r || ((r = e), (e = o.Widget)),
        (o.expr[":"][a.toLowerCase()] = function (m) {
          return !!o.data(m, a);
        }),
        (o[v] = o[v] || {}),
        (d = o[v][t]),
        (u = o[v][t] =
          function (m, c) {
            return this._createWidget
              ? (arguments.length && this._createWidget(m, c), void 0)
              : new u(m, c);
          }),
        o.extend(u, d, {
          version: r.version,
          _proto: o.extend({}, r),
          _childConstructors: [],
        }),
        (h = new e()),
        (h.options = o.widget.extend({}, h.options)),
        o.each(r, function (m, c) {
          return o.isFunction(c)
            ? ((g[m] = (function () {
                var f = function () {
                    return e.prototype[m].apply(this, arguments);
                  },
                  y = function (b) {
                    return e.prototype[m].apply(this, b);
                  };
                return function () {
                  var b,
                    k = this._super,
                    C = this._superApply;
                  return (
                    (this._super = f),
                    (this._superApply = y),
                    (b = c.apply(this, arguments)),
                    (this._super = k),
                    (this._superApply = C),
                    b
                  );
                };
              })()),
              void 0)
            : ((g[m] = c), void 0);
        }),
        (u.prototype = o.widget.extend(
          h,
          {
            widgetEventPrefix: (d && h.widgetEventPrefix) || t,
          },
          g,
          {
            constructor: u,
            namespace: v,
            widgetName: t,
            widgetFullName: a,
          }
        )),
        d
          ? (o.each(d._childConstructors, function (m, c) {
              var f = c.prototype;
              o.widget(f.namespace + "." + f.widgetName, u, c._proto);
            }),
            delete d._childConstructors)
          : e._childConstructors.push(u),
        o.widget.bridge(t, u),
        u
      );
    }),
    (o.widget.extend = function (t) {
      for (var e, r, a = l.call(arguments, 1), d = 0, u = a.length; u > d; d++)
        for (e in a[d])
          (r = a[d][e]),
            a[d].hasOwnProperty(e) &&
              r !== void 0 &&
              (t[e] = o.isPlainObject(r)
                ? o.isPlainObject(t[e])
                  ? o.widget.extend({}, t[e], r)
                  : o.widget.extend({}, r)
                : r);
      return t;
    }),
    (o.widget.bridge = function (t, e) {
      var r = e.prototype.widgetFullName || t;
      o.fn[t] = function (a) {
        var d = typeof a == "string",
          u = l.call(arguments, 1),
          h = this;
        return (
          d
            ? this.each(function () {
                var g,
                  v = o.data(this, r);
                return a === "instance"
                  ? ((h = v), !1)
                  : v
                  ? o.isFunction(v[a]) && a.charAt(0) !== "_"
                    ? ((g = v[a].apply(v, u)),
                      g !== v && g !== void 0
                        ? ((h = g && g.jquery ? h.pushStack(g.get()) : g), !1)
                        : void 0)
                    : o.error(
                        "no such method '" +
                          a +
                          "' for " +
                          t +
                          " widget instance"
                      )
                  : o.error(
                      "cannot call methods on " +
                        t +
                        " prior to initialization; attempted to call method '" +
                        a +
                        "'"
                    );
              })
            : (u.length && (a = o.widget.extend.apply(null, [a].concat(u))),
              this.each(function () {
                var g = o.data(this, r);
                g
                  ? (g.option(a || {}), g._init && g._init())
                  : o.data(this, r, new e(a, this));
              })),
          h
        );
      };
    }),
    (o.Widget = function () {}),
    (o.Widget._childConstructors = []),
    (o.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        disabled: !1,
        create: null,
      },
      _createWidget: function (t, e) {
        (e = o(e || this.defaultElement || this)[0]),
          (this.element = o(e)),
          (this.uuid = s++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = o()),
          (this.hoverable = o()),
          (this.focusable = o()),
          e !== this &&
            (o.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (r) {
                r.target === e && this.destroy();
              },
            }),
            (this.document = o(e.style ? e.ownerDocument : e.document || e)),
            (this.window = o(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = o.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: o.noop,
      _getCreateEventData: o.noop,
      _create: o.noop,
      _init: o.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(o.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: o.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var r,
          a,
          d,
          u = t;
        if (arguments.length === 0) return o.widget.extend({}, this.options);
        if (typeof t == "string")
          if (((u = {}), (r = t.split(".")), (t = r.shift()), r.length)) {
            for (
              a = u[t] = o.widget.extend({}, this.options[t]), d = 0;
              r.length - 1 > d;
              d++
            )
              (a[r[d]] = a[r[d]] || {}), (a = a[r[d]]);
            if (((t = r.pop()), arguments.length === 1))
              return a[t] === void 0 ? null : a[t];
            a[t] = e;
          } else {
            if (arguments.length === 1)
              return this.options[t] === void 0 ? null : this.options[t];
            u[t] = e;
          }
        return this._setOptions(u), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          (this.options[t] = e),
          t === "disabled" &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
            e &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({
          disabled: !1,
        });
      },
      disable: function () {
        return this._setOptions({
          disabled: !0,
        });
      },
      _on: function (t, e, r) {
        var a,
          d = this;
        typeof t != "boolean" && ((r = e), (e = t), (t = !1)),
          r
            ? ((e = a = o(e)), (this.bindings = this.bindings.add(e)))
            : ((r = e), (e = this.element), (a = this.widget())),
          o.each(r, function (u, h) {
            function g() {
              return t ||
                (d.options.disabled !== !0 &&
                  !o(this).hasClass("ui-state-disabled"))
                ? (typeof h == "string" ? d[h] : h).apply(d, arguments)
                : void 0;
            }
            typeof h != "string" &&
              (g.guid = h.guid = h.guid || g.guid || o.guid++);
            var v = u.match(/^([\w:-]*)\s*(.*)$/),
              m = v[1] + d.eventNamespace,
              c = v[2];
            c ? a.delegate(c, m, g) : e.bind(m, g);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.unbind(e).undelegate(e),
          (this.bindings = o(this.bindings.not(t).get())),
          (this.focusable = o(this.focusable.not(t).get())),
          (this.hoverable = o(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        function r() {
          return (typeof t == "string" ? a[t] : t).apply(a, arguments);
        }
        var a = this;
        return setTimeout(r, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (e) {
              o(e.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (e) {
              o(e.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (e) {
              o(e.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (e) {
              o(e.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, r) {
        var a,
          d,
          u = this.options[t];
        if (
          ((r = r || {}),
          (e = o.Event(e)),
          (e.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (d = e.originalEvent))
        )
          for (a in d) a in e || (e[a] = d[a]);
        return (
          this.element.trigger(e, r),
          !(
            (o.isFunction(u) &&
              u.apply(this.element[0], [e].concat(r)) === !1) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    o.each(
      {
        show: "fadeIn",
        hide: "fadeOut",
      },
      function (t, e) {
        o.Widget.prototype["_" + t] = function (r, a, d) {
          typeof a == "string" &&
            (a = {
              effect: a,
            });
          var u,
            h = a ? (a === !0 || typeof a == "number" ? e : a.effect || e) : t;
          (a = a || {}),
            typeof a == "number" &&
              (a = {
                duration: a,
              }),
            (u = !o.isEmptyObject(a)),
            (a.complete = d),
            a.delay && r.delay(a.delay),
            u && o.effects && o.effects.effect[h]
              ? r[t](a)
              : h !== t && r[h]
              ? r[h](a.duration, a.easing, d)
              : r.queue(function (g) {
                  o(this)[t](), d && d.call(r[0]), g();
                });
        };
      }
    ),
    o.widget;
  var n = !1;
  o(document).mouseup(function () {
    n = !1;
  }),
    o.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (e) {
            return o.data(e.target, t.widgetName + ".preventClickEvent") === !0
              ? (o.removeData(e.target, t.widgetName + ".preventClickEvent"),
                e.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!n) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(t),
            (this._mouseDownEvent = t);
          var e = this,
            r = t.which === 1,
            a =
              typeof this.options.cancel == "string" && t.target.nodeName
                ? o(t.target).closest(this.options.cancel).length
                : !1;
          return r && !a && this._mouseCapture(t)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  e.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = this._mouseStart(t) !== !1),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (o.data(t.target, this.widgetName + ".preventClickEvent") ===
                    !0 &&
                    o.removeData(
                      t.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (d) {
                    return e._mouseMove(d);
                  }),
                  (this._mouseUpDelegate = function (d) {
                    return e._mouseUp(d);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (n = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            o.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (t) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              o.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          (n = !1),
          !1
        );
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    o.widget("ui.slider", o.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          e,
          r = this.options,
          a = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          d =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          u = [];
        for (
          e = (r.values && r.values.length) || 1,
            a.length > e && (a.slice(e).remove(), (a = a.slice(0, e))),
            t = a.length;
          e > t;
          t++
        )
          u.push(d);
        (this.handles = a.add(o(u.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (h) {
            o(this).data("ui-slider-handle-index", h);
          });
      },
      _createRange: function () {
        var t = this.options,
          e = "";
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && t.values.length !== 2
                  ? (t.values = [t.values[0], t.values[0]])
                  : o.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({
                    left: "",
                    bottom: "",
                  })
              : ((this.range = o("<div></div>").appendTo(this.element)),
                (e = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              e +
                (t.range === "min" || t.range === "max"
                  ? " ui-slider-range-" + t.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var e,
          r,
          a,
          d,
          u,
          h,
          g,
          v,
          m = this,
          c = this.options;
        return c.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (e = {
              x: t.pageX,
              y: t.pageY,
            }),
            (r = this._normValueFromMouse(e)),
            (a = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (f) {
              var y = Math.abs(r - m.values(f));
              (a > y ||
                (a === y &&
                  (f === m._lastChangedValue || m.values(f) === c.min))) &&
                ((a = y), (d = o(this)), (u = f));
            }),
            (h = this._start(t, u)),
            h === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = u),
                d.addClass("ui-state-active").focus(),
                (g = d.offset()),
                (v = !o(t.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = v
                  ? {
                      left: 0,
                      top: 0,
                    }
                  : {
                      left: t.pageX - g.left - d.width() / 2,
                      top:
                        t.pageY -
                        g.top -
                        d.height() / 2 -
                        (parseInt(d.css("borderTopWidth"), 10) || 0) -
                        (parseInt(d.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(d.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(t, u, r),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = {
            x: t.pageX,
            y: t.pageY,
          },
          r = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, r), !1;
      },
      _mouseStop: function (t) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          this.options.orientation === "vertical" ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, r, a, d, u;
        return (
          this.orientation === "horizontal"
            ? ((e = this.elementSize.width),
              (r =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (r =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (a = r / e),
          a > 1 && (a = 1),
          0 > a && (a = 0),
          this.orientation === "vertical" && (a = 1 - a),
          (d = this._valueMax() - this._valueMin()),
          (u = this._valueMin() + a * d),
          this._trimAlignValue(u)
        );
      },
      _start: function (t, e) {
        var r = {
          handle: this.handles[e],
          value: this.value(),
        };
        return (
          this.options.values &&
            this.options.values.length &&
            ((r.value = this.values(e)), (r.values = this.values())),
          this._trigger("start", t, r)
        );
      },
      _slide: function (t, e, r) {
        var a, d, u;
        this.options.values && this.options.values.length
          ? ((a = this.values(e ? 0 : 1)),
            this.options.values.length === 2 &&
              this.options.range === !0 &&
              ((e === 0 && r > a) || (e === 1 && a > r)) &&
              (r = a),
            r !== this.values(e) &&
              ((d = this.values()),
              (d[e] = r),
              (u = this._trigger("slide", t, {
                handle: this.handles[e],
                value: r,
                values: d,
              })),
              (a = this.values(e ? 0 : 1)),
              u !== !1 && this.values(e, r)))
          : r !== this.value() &&
            ((u = this._trigger("slide", t, {
              handle: this.handles[e],
              value: r,
            })),
            u !== !1 && this.value(r));
      },
      _stop: function (t, e) {
        var r = {
          handle: this.handles[e],
          value: this.value(),
        };
        this.options.values &&
          this.options.values.length &&
          ((r.value = this.values(e)), (r.values = this.values())),
          this._trigger("stop", t, r);
      },
      _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
          var r = {
            handle: this.handles[e],
            value: this.value(),
          };
          this.options.values &&
            this.options.values.length &&
            ((r.value = this.values(e)), (r.values = this.values())),
            (this._lastChangedValue = e),
            this._trigger("change", t, r);
        }
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (t, e) {
        var r, a, d;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, t),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!o.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          r = this.options.values, a = arguments[0], d = 0;
          r.length > d;
          d += 1
        )
          (r[d] = this._trimAlignValue(a[d])), this._change(null, d);
        this._refreshValue();
      },
      _setOption: function (t, e) {
        var r,
          a = 0;
        switch (
          (t === "range" &&
            this.options.range === !0 &&
            (e === "min"
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : e === "max" &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          o.isArray(this.options.values) && (a = this.options.values.length),
          t === "disabled" &&
            this.element.toggleClass("ui-state-disabled", !!e),
          this._super(t, e),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css(e === "horizontal" ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), r = 0;
              a > r;
              r += 1
            )
              this._change(null, r);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, r, a;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this.options.values && this.options.values.length) {
          for (r = this.options.values.slice(), a = 0; r.length > a; a += 1)
            r[a] = this._trimAlignValue(r[a]);
          return r;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          r = (t - this._valueMin()) % e,
          a = t - r;
        return (
          2 * Math.abs(r) >= e && (a += r > 0 ? e : -e),
          parseFloat(a.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          r = this.options.step,
          a = Math.floor(+(t - e).toFixed(this._precision()) / r) * r;
        (t = a + e), (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          this.options.min !== null &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = "" + t,
          r = e.indexOf(".");
        return r === -1 ? 0 : e.length - r - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshValue: function () {
        var t,
          e,
          r,
          a,
          d,
          u = this.options.range,
          h = this.options,
          g = this,
          v = this._animateOff ? !1 : h.animate,
          m = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (c) {
              (e =
                100 *
                ((g.values(c) - g._valueMin()) /
                  (g._valueMax() - g._valueMin()))),
                (m[g.orientation === "horizontal" ? "left" : "bottom"] =
                  e + "%"),
                o(this).stop(1, 1)[v ? "animate" : "css"](m, h.animate),
                g.options.range === !0 &&
                  (g.orientation === "horizontal"
                    ? (c === 0 &&
                        g.range.stop(1, 1)[v ? "animate" : "css"](
                          {
                            left: e + "%",
                          },
                          h.animate
                        ),
                      c === 1 &&
                        g.range[v ? "animate" : "css"](
                          {
                            width: e - t + "%",
                          },
                          {
                            queue: !1,
                            duration: h.animate,
                          }
                        ))
                    : (c === 0 &&
                        g.range.stop(1, 1)[v ? "animate" : "css"](
                          {
                            bottom: e + "%",
                          },
                          h.animate
                        ),
                      c === 1 &&
                        g.range[v ? "animate" : "css"](
                          {
                            height: e - t + "%",
                          },
                          {
                            queue: !1,
                            duration: h.animate,
                          }
                        ))),
                (t = e);
            })
          : ((r = this.value()),
            (a = this._valueMin()),
            (d = this._valueMax()),
            (e = d !== a ? 100 * ((r - a) / (d - a)) : 0),
            (m[this.orientation === "horizontal" ? "left" : "bottom"] =
              e + "%"),
            this.handle.stop(1, 1)[v ? "animate" : "css"](m, h.animate),
            u === "min" &&
              this.orientation === "horizontal" &&
              this.range.stop(1, 1)[v ? "animate" : "css"](
                {
                  width: e + "%",
                },
                h.animate
              ),
            u === "max" &&
              this.orientation === "horizontal" &&
              this.range[v ? "animate" : "css"](
                {
                  width: 100 - e + "%",
                },
                {
                  queue: !1,
                  duration: h.animate,
                }
              ),
            u === "min" &&
              this.orientation === "vertical" &&
              this.range.stop(1, 1)[v ? "animate" : "css"](
                {
                  height: e + "%",
                },
                h.animate
              ),
            u === "max" &&
              this.orientation === "vertical" &&
              this.range[v ? "animate" : "css"](
                {
                  height: 100 - e + "%",
                },
                {
                  queue: !1,
                  duration: h.animate,
                }
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var e,
            r,
            a,
            d,
            u = o(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case o.ui.keyCode.HOME:
            case o.ui.keyCode.END:
            case o.ui.keyCode.PAGE_UP:
            case o.ui.keyCode.PAGE_DOWN:
            case o.ui.keyCode.UP:
            case o.ui.keyCode.RIGHT:
            case o.ui.keyCode.DOWN:
            case o.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  o(t.target).addClass("ui-state-active"),
                  (e = this._start(t, u)),
                  e === !1))
              )
                return;
          }
          switch (
            ((d = this.options.step),
            (r = a =
              this.options.values && this.options.values.length
                ? this.values(u)
                : this.value()),
            t.keyCode)
          ) {
            case o.ui.keyCode.HOME:
              a = this._valueMin();
              break;
            case o.ui.keyCode.END:
              a = this._valueMax();
              break;
            case o.ui.keyCode.PAGE_UP:
              a = this._trimAlignValue(
                r + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case o.ui.keyCode.PAGE_DOWN:
              a = this._trimAlignValue(
                r - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case o.ui.keyCode.UP:
            case o.ui.keyCode.RIGHT:
              if (r === this._valueMax()) return;
              a = this._trimAlignValue(r + d);
              break;
            case o.ui.keyCode.DOWN:
            case o.ui.keyCode.LEFT:
              if (r === this._valueMin()) return;
              a = this._trimAlignValue(r - d);
          }
          this._slide(t, u, a);
        },
        keyup: function (t) {
          var e = o(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, e),
            this._change(t, e),
            o(t.target).removeClass("ui-state-active"));
        },
      },
    });
});
/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
(function (o, p) {
  typeof define == "function" && define.amd
    ? define(["jquery"], p)
    : typeof exports == "object"
    ? (module.exports = p(require("jquery")))
    : (o.lightbox = p(o.jQuery));
})(this, function (o) {
  function p(i) {
    (this.album = []),
      (this.currentImageIndex = void 0),
      this.init(),
      (this.options = o.extend({}, this.constructor.defaults)),
      this.option(i);
  }
  return (
    (p.defaults = {
      albumLabel: "Image %1 of %2",
      alwaysShowNavOnTouchDevices: !1,
      fadeDuration: 600,
      fitImagesInViewport: !0,
      imageFadeDuration: 600,
      positionFromTop: 50,
      resizeDuration: 700,
      showImageNumberLabel: !0,
      wrapAround: !1,
      disableScrolling: !1,
      sanitizeTitle: !1,
    }),
    (p.prototype.option = function (i) {
      o.extend(this.options, i);
    }),
    (p.prototype.imageCountLabel = function (i, s) {
      return this.options.albumLabel.replace(/%1/g, i).replace(/%2/g, s);
    }),
    (p.prototype.init = function () {
      var i = this;
      o(document).ready(function () {
        i.enable(), i.build();
      });
    }),
    (p.prototype.enable = function () {
      var i = this;
      o("body").on(
        "click",
        "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",
        function (s) {
          return i.start(o(s.currentTarget)), !1;
        }
      );
    }),
    (p.prototype.build = function () {
      var i = this;
      o(
        '<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
      ).appendTo(o("body")),
        (this.$lightbox = o("#lightbox")),
        (this.$overlay = o("#lightboxOverlay")),
        (this.$outerContainer = this.$lightbox.find(".lb-outerContainer")),
        (this.$container = this.$lightbox.find(".lb-container")),
        (this.$image = this.$lightbox.find(".lb-image")),
        (this.$nav = this.$lightbox.find(".lb-nav")),
        (this.containerPadding = {
          top: parseInt(this.$container.css("padding-top"), 10),
          right: parseInt(this.$container.css("padding-right"), 10),
          bottom: parseInt(this.$container.css("padding-bottom"), 10),
          left: parseInt(this.$container.css("padding-left"), 10),
        }),
        (this.imageBorderWidth = {
          top: parseInt(this.$image.css("border-top-width"), 10),
          right: parseInt(this.$image.css("border-right-width"), 10),
          bottom: parseInt(this.$image.css("border-bottom-width"), 10),
          left: parseInt(this.$image.css("border-left-width"), 10),
        }),
        this.$overlay.hide().on("click", function () {
          return i.end(), !1;
        }),
        this.$lightbox.hide().on("click", function (s) {
          return o(s.target).attr("id") === "lightbox" && i.end(), !1;
        }),
        this.$outerContainer.on("click", function (s) {
          return o(s.target).attr("id") === "lightbox" && i.end(), !1;
        }),
        this.$lightbox.find(".lb-prev").on("click", function () {
          return (
            i.currentImageIndex === 0
              ? i.changeImage(i.album.length - 1)
              : i.changeImage(i.currentImageIndex - 1),
            !1
          );
        }),
        this.$lightbox.find(".lb-next").on("click", function () {
          return (
            i.currentImageIndex === i.album.length - 1
              ? i.changeImage(0)
              : i.changeImage(i.currentImageIndex + 1),
            !1
          );
        }),
        this.$nav.on("mousedown", function (s) {
          s.which === 3 &&
            (i.$nav.css("pointer-events", "none"),
            i.$lightbox.one("contextmenu", function () {
              setTimeout(
                function () {
                  this.$nav.css("pointer-events", "auto");
                }.bind(i),
                0
              );
            }));
        }),
        this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
          return i.end(), !1;
        });
    }),
    (p.prototype.start = function (i) {
      var s = this,
        l = o(window);
      l.on("resize", o.proxy(this.sizeOverlay, this)),
        o("select, object, embed").css({
          visibility: "hidden",
        }),
        this.sizeOverlay(),
        (this.album = []);
      var n = 0;

      function t(g) {
        s.album.push({
          link: g.attr("href"),
          title: g.attr("data-title") || g.attr("title"),
        });
      }
      var e = i.attr("data-lightbox"),
        r;
      if (e) {
        r = o(i.prop("tagName") + '[data-lightbox="' + e + '"]');
        for (var a = 0; a < r.length; a = ++a)
          t(o(r[a])), r[a] === i[0] && (n = a);
      } else if (i.attr("rel") === "lightbox") t(i);
      else {
        r = o(i.prop("tagName") + '[rel="' + i.attr("rel") + '"]');
        for (var d = 0; d < r.length; d = ++d)
          t(o(r[d])), r[d] === i[0] && (n = d);
      }
      var u = l.scrollTop() + this.options.positionFromTop,
        h = l.scrollLeft();
      this.$lightbox
        .css({
          top: u + "px",
          left: h + "px",
        })
        .fadeIn(this.options.fadeDuration),
        this.options.disableScrolling &&
          o("body").addClass("lb-disable-scrolling"),
        this.changeImage(n);
    }),
    (p.prototype.changeImage = function (i) {
      var s = this;
      this.disableKeyboardNav();
      var l = this.$lightbox.find(".lb-image");
      this.$overlay.fadeIn(this.options.fadeDuration),
        o(".lb-loader").fadeIn("slow"),
        this.$lightbox
          .find(
            ".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption"
          )
          .hide(),
        this.$outerContainer.addClass("animating");
      var n = new Image();
      (n.onload = function () {
        var t, e, r, a, d, u, h;
        l.attr("src", s.album[i].link),
          (t = o(n)),
          l.width(n.width),
          l.height(n.height),
          s.options.fitImagesInViewport &&
            ((h = o(window).width()),
            (u = o(window).height()),
            (d =
              h -
              s.containerPadding.left -
              s.containerPadding.right -
              s.imageBorderWidth.left -
              s.imageBorderWidth.right -
              20),
            (a =
              u -
              s.containerPadding.top -
              s.containerPadding.bottom -
              s.imageBorderWidth.top -
              s.imageBorderWidth.bottom -
              120),
            s.options.maxWidth &&
              s.options.maxWidth < d &&
              (d = s.options.maxWidth),
            s.options.maxHeight &&
              s.options.maxHeight < d &&
              (a = s.options.maxHeight),
            (n.width > d || n.height > a) &&
              (n.width / d > n.height / a
                ? ((r = d),
                  (e = parseInt(n.height / (n.width / r), 10)),
                  l.width(r),
                  l.height(e))
                : ((e = a),
                  (r = parseInt(n.width / (n.height / e), 10)),
                  l.width(r),
                  l.height(e)))),
          s.sizeContainer(l.width(), l.height());
      }),
        (n.src = this.album[i].link),
        (this.currentImageIndex = i);
    }),
    (p.prototype.sizeOverlay = function () {
      this.$overlay.width(o(document).width()).height(o(document).height());
    }),
    (p.prototype.sizeContainer = function (i, s) {
      var l = this,
        n = this.$outerContainer.outerWidth(),
        t = this.$outerContainer.outerHeight(),
        e =
          i +
          this.containerPadding.left +
          this.containerPadding.right +
          this.imageBorderWidth.left +
          this.imageBorderWidth.right,
        r =
          s +
          this.containerPadding.top +
          this.containerPadding.bottom +
          this.imageBorderWidth.top +
          this.imageBorderWidth.bottom;

      function a() {
        l.$lightbox.find(".lb-dataContainer").width(e),
          l.$lightbox.find(".lb-prevLink").height(r),
          l.$lightbox.find(".lb-nextLink").height(r),
          l.showImage();
      }
      n !== e || t !== r
        ? this.$outerContainer.animate(
            {
              width: e,
              height: r,
            },
            this.options.resizeDuration,
            "swing",
            function () {
              a();
            }
          )
        : a();
    }),
    (p.prototype.showImage = function () {
      this.$lightbox.find(".lb-loader").stop(!0).hide(),
        this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),
        this.updateNav(),
        this.updateDetails(),
        this.preloadNeighboringImages(),
        this.enableKeyboardNav();
    }),
    (p.prototype.updateNav = function () {
      var i = !1;
      try {
        document.createEvent("TouchEvent"),
          (i = !!this.options.alwaysShowNavOnTouchDevices);
      } catch (s) {}
      this.$lightbox.find(".lb-nav").show(),
        this.album.length > 1 &&
          (this.options.wrapAround
            ? (i &&
                this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
              this.$lightbox.find(".lb-prev, .lb-next").show())
            : (this.currentImageIndex > 0 &&
                (this.$lightbox.find(".lb-prev").show(),
                i && this.$lightbox.find(".lb-prev").css("opacity", "1")),
              this.currentImageIndex < this.album.length - 1 &&
                (this.$lightbox.find(".lb-next").show(),
                i && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }),
    (p.prototype.updateDetails = function () {
      var i = this;
      if (
        typeof this.album[this.currentImageIndex].title != "undefined" &&
        this.album[this.currentImageIndex].title !== ""
      ) {
        var s = this.$lightbox.find(".lb-caption");
        this.options.sanitizeTitle
          ? s.text(this.album[this.currentImageIndex].title)
          : s.html(this.album[this.currentImageIndex].title),
          s
            .fadeIn("fast")
            .find("a")
            .on("click", function (n) {
              o(this).attr("target") !== void 0
                ? window.open(o(this).attr("href"), o(this).attr("target"))
                : (location.href = o(this).attr("href"));
            });
      }
      if (this.album.length > 1 && this.options.showImageNumberLabel) {
        var l = this.imageCountLabel(
          this.currentImageIndex + 1,
          this.album.length
        );
        this.$lightbox.find(".lb-number").text(l).fadeIn("fast");
      } else this.$lightbox.find(".lb-number").hide();
      this.$outerContainer.removeClass("animating"),
        this.$lightbox
          .find(".lb-dataContainer")
          .fadeIn(this.options.resizeDuration, function () {
            return i.sizeOverlay();
          });
    }),
    (p.prototype.preloadNeighboringImages = function () {
      if (this.album.length > this.currentImageIndex + 1) {
        var i = new Image();
        i.src = this.album[this.currentImageIndex + 1].link;
      }
      if (this.currentImageIndex > 0) {
        var s = new Image();
        s.src = this.album[this.currentImageIndex - 1].link;
      }
    }),
    (p.prototype.enableKeyboardNav = function () {
      o(document).on("keyup.keyboard", o.proxy(this.keyboardAction, this));
    }),
    (p.prototype.disableKeyboardNav = function () {
      o(document).off(".keyboard");
    }),
    (p.prototype.keyboardAction = function (i) {
      var s = 27,
        l = 37,
        n = 39,
        t = i.keyCode,
        e = String.fromCharCode(t).toLowerCase();
      t === s || e.match(/x|o|c/)
        ? this.end()
        : e === "p" || t === l
        ? this.currentImageIndex !== 0
          ? this.changeImage(this.currentImageIndex - 1)
          : this.options.wrapAround &&
            this.album.length > 1 &&
            this.changeImage(this.album.length - 1)
        : (e === "n" || t === n) &&
          (this.currentImageIndex !== this.album.length - 1
            ? this.changeImage(this.currentImageIndex + 1)
            : this.options.wrapAround &&
              this.album.length > 1 &&
              this.changeImage(0));
    }),
    (p.prototype.end = function () {
      this.disableKeyboardNav(),
        o(window).off("resize", this.sizeOverlay),
        this.$lightbox.fadeOut(this.options.fadeDuration),
        this.$overlay.fadeOut(this.options.fadeDuration),
        o("select, object, embed").css({
          visibility: "visible",
        }),
        this.options.disableScrolling &&
          o("body").removeClass("lb-disable-scrolling");
    }),
    new p()
  );
}),
  $(function () {
    var o = $("#contact-form"),
      p = $(".form-messege");
    $(o).submit(function (i) {
      i.preventDefault();
      var s = $(o).serialize();
      $.ajax({
        type: "POST",
        url: $(o).attr("action"),
        data: s,
      })
        .done(function (l) {
          $(p).removeClass("error"),
            $(p).addClass("success"),
            $(p).text(l),
            $("#contact-form input,#contact-form textarea").val("");
        })
        .fail(function (l) {
          $(p).removeClass("success"),
            $(p).addClass("error"),
            l.responseText !== ""
              ? $(p).text(l.responseText)
              : $(p).text(
                  "Oops! An error occured and your message could not be sent."
                );
        });
    });
  });
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear Ã¢â‚¬â€ @markgdyr Ã¢â‚¬â€ http://markgoodyear.com
 * License: MIT
 */
(function (o, p, i) {
  "use strict";
  (o.fn.scrollUp = function (s) {
    o.data(i.body, "scrollUp") ||
      (o.data(i.body, "scrollUp", !0), o.fn.scrollUp.init(s));
  }),
    (o.fn.scrollUp.init = function (s) {
      var l,
        n,
        t,
        e,
        r,
        a,
        d,
        u = (o.fn.scrollUp.settings = o.extend({}, o.fn.scrollUp.defaults, s)),
        h = !1;
      switch (
        ((d = u.scrollTrigger
          ? o(u.scrollTrigger)
          : o("<a/>", {
              id: u.scrollName,
              href: "#top",
            })),
        u.scrollTitle && d.attr("title", u.scrollTitle),
        d.appendTo("body"),
        u.scrollImg || u.scrollTrigger || d.html(u.scrollText),
        d.css({
          display: "none",
          position: "fixed",
          zIndex: u.zIndex,
        }),
        u.activeOverlay &&
          o("<div/>", {
            id: u.scrollName + "-active",
          })
            .css({
              position: "absolute",
              top: u.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + u.activeOverlay,
              zIndex: u.zIndex,
            })
            .appendTo("body"),
        u.animation)
      ) {
        case "fade":
          (l = "fadeIn"), (n = "fadeOut"), (t = u.animationSpeed);
          break;
        case "slide":
          (l = "slideDown"), (n = "slideUp"), (t = u.animationSpeed);
          break;
        default:
          (l = "show"), (n = "hide"), (t = 0);
      }
      (e =
        u.scrollFrom === "top"
          ? u.scrollDistance
          : o(i).height() - o(p).height() - u.scrollDistance),
        (r = o(p).scroll(function () {
          o(p).scrollTop() > e
            ? h || (d[l](t), (h = !0))
            : h && (d[n](t), (h = !1));
        })),
        u.scrollTarget
          ? typeof u.scrollTarget == "number"
            ? (a = u.scrollTarget)
            : typeof u.scrollTarget == "string" &&
              (a = Math.floor(o(u.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (g) {
          g.preventDefault(),
            o("html, body").animate(
              {
                scrollTop: a,
              },
              u.scrollSpeed,
              u.easingType
            );
        });
    }),
    (o.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (o.fn.scrollUp.destroy = function (s) {
      o.removeData(i.body, "scrollUp"),
        o("#" + o.fn.scrollUp.settings.scrollName).remove(),
        o("#" + o.fn.scrollUp.settings.scrollName + "-active").remove(),
        o.fn.jquery.split(".")[1] >= 7
          ? o(p).off("scroll", s)
          : o(p).unbind("scroll", s);
    }),
    (o.scrollUp = o.fn.scrollUp);
})(jQuery, window, document);
//# sourceMappingURL=/s/files/1/0014/4880/4425/t/3/assets/plugins.js.map?v=30716332548302289241532580184
