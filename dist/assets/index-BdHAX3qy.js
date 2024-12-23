(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) d(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && d(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function d(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
function Kd(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Gi = { exports: {} },
  zr = {},
  qi = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function Yd() {
  if (pc) return re;
  pc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    j = Symbol.iterator;
  function _(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (j && v[j]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    $ = {};
  function O(v, R, ne) {
    (this.props = v),
      (this.context = R),
      (this.refs = $),
      (this.updater = ne || D);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (v, R) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, R, "setState");
    }),
    (O.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function F() {}
  F.prototype = O.prototype;
  function A(v, R, ne) {
    (this.props = v),
      (this.context = R),
      (this.refs = $),
      (this.updater = ne || D);
  }
  var b = (A.prototype = new F());
  (b.constructor = A), z(b, O.prototype), (b.isPureReactComponent = !0);
  var le = Array.isArray,
    fe = Object.prototype.hasOwnProperty,
    B = { current: null },
    X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(v, R, ne) {
    var oe,
      ae = {},
      se = null,
      me = null;
    if (R != null)
      for (oe in (R.ref !== void 0 && (me = R.ref),
      R.key !== void 0 && (se = "" + R.key),
      R))
        fe.call(R, oe) && !X.hasOwnProperty(oe) && (ae[oe] = R[oe]);
    var de = arguments.length - 2;
    if (de === 1) ae.children = ne;
    else if (1 < de) {
      for (var we = Array(de), et = 0; et < de; et++)
        we[et] = arguments[et + 2];
      ae.children = we;
    }
    if (v && v.defaultProps)
      for (oe in ((de = v.defaultProps), de))
        ae[oe] === void 0 && (ae[oe] = de[oe]);
    return {
      $$typeof: i,
      type: v,
      key: se,
      ref: me,
      props: ae,
      _owner: B.current,
    };
  }
  function ie(v, R) {
    return {
      $$typeof: i,
      type: v.type,
      key: R,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function te(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function he(v) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (ne) {
        return R[ne];
      })
    );
  }
  var ze = /\/+/g;
  function Ue(v, R) {
    return typeof v == "object" && v !== null && v.key != null
      ? he("" + v.key)
      : R.toString(36);
  }
  function Qe(v, R, ne, oe, ae) {
    var se = typeof v;
    (se === "undefined" || se === "boolean") && (v = null);
    var me = !1;
    if (v === null) me = !0;
    else
      switch (se) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case s:
              me = !0;
          }
      }
    if (me)
      return (
        (me = v),
        (ae = ae(me)),
        (v = oe === "" ? "." + Ue(me, 0) : oe),
        le(ae)
          ? ((ne = ""),
            v != null && (ne = v.replace(ze, "$&/") + "/"),
            Qe(ae, R, ne, "", function (et) {
              return et;
            }))
          : ae != null &&
            (te(ae) &&
              (ae = ie(
                ae,
                ne +
                  (!ae.key || (me && me.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(ze, "$&/") + "/") +
                  v
              )),
            R.push(ae)),
        1
      );
    if (((me = 0), (oe = oe === "" ? "." : oe + ":"), le(v)))
      for (var de = 0; de < v.length; de++) {
        se = v[de];
        var we = oe + Ue(se, de);
        me += Qe(se, R, ne, we, ae);
      }
    else if (((we = _(v)), typeof we == "function"))
      for (v = we.call(v), de = 0; !(se = v.next()).done; )
        (se = se.value),
          (we = oe + Ue(se, de++)),
          (me += Qe(se, R, ne, we, ae));
    else if (se === "object")
      throw (
        ((R = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return me;
  }
  function ft(v, R, ne) {
    if (v == null) return v;
    var oe = [],
      ae = 0;
    return (
      Qe(v, oe, "", "", function (se) {
        return R.call(ne, se, ae++);
      }),
      oe
    );
  }
  function Ae(v) {
    if (v._status === -1) {
      var R = v._result;
      (R = R()),
        R.then(
          function (ne) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = ne));
          },
          function (ne) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = ne));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = R));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Ce = { current: null },
    U = { transition: null },
    J = {
      ReactCurrentDispatcher: Ce,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: B,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (re.Children = {
      map: ft,
      forEach: function (v, R, ne) {
        ft(
          v,
          function () {
            R.apply(this, arguments);
          },
          ne
        );
      },
      count: function (v) {
        var R = 0;
        return (
          ft(v, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (v) {
        return (
          ft(v, function (R) {
            return R;
          }) || []
        );
      },
      only: function (v) {
        if (!te(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (re.Component = O),
    (re.Fragment = a),
    (re.Profiler = f),
    (re.PureComponent = A),
    (re.StrictMode = d),
    (re.Suspense = w),
    (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (re.act = V),
    (re.cloneElement = function (v, R, ne) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var oe = z({}, v.props),
        ae = v.key,
        se = v.ref,
        me = v._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((se = R.ref), (me = B.current)),
          R.key !== void 0 && (ae = "" + R.key),
          v.type && v.type.defaultProps)
        )
          var de = v.type.defaultProps;
        for (we in R)
          fe.call(R, we) &&
            !X.hasOwnProperty(we) &&
            (oe[we] = R[we] === void 0 && de !== void 0 ? de[we] : R[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) oe.children = ne;
      else if (1 < we) {
        de = Array(we);
        for (var et = 0; et < we; et++) de[et] = arguments[et + 2];
        oe.children = de;
      }
      return {
        $$typeof: i,
        type: v.type,
        key: ae,
        ref: se,
        props: oe,
        _owner: me,
      };
    }),
    (re.createContext = function (v) {
      return (
        (v = {
          $$typeof: x,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (re.createElement = ee),
    (re.createFactory = function (v) {
      var R = ee.bind(null, v);
      return (R.type = v), R;
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (v) {
      return { $$typeof: E, render: v };
    }),
    (re.isValidElement = te),
    (re.lazy = function (v) {
      return { $$typeof: L, _payload: { _status: -1, _result: v }, _init: Ae };
    }),
    (re.memo = function (v, R) {
      return { $$typeof: k, type: v, compare: R === void 0 ? null : R };
    }),
    (re.startTransition = function (v) {
      var R = U.transition;
      U.transition = {};
      try {
        v();
      } finally {
        U.transition = R;
      }
    }),
    (re.unstable_act = V),
    (re.useCallback = function (v, R) {
      return Ce.current.useCallback(v, R);
    }),
    (re.useContext = function (v) {
      return Ce.current.useContext(v);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (v) {
      return Ce.current.useDeferredValue(v);
    }),
    (re.useEffect = function (v, R) {
      return Ce.current.useEffect(v, R);
    }),
    (re.useId = function () {
      return Ce.current.useId();
    }),
    (re.useImperativeHandle = function (v, R, ne) {
      return Ce.current.useImperativeHandle(v, R, ne);
    }),
    (re.useInsertionEffect = function (v, R) {
      return Ce.current.useInsertionEffect(v, R);
    }),
    (re.useLayoutEffect = function (v, R) {
      return Ce.current.useLayoutEffect(v, R);
    }),
    (re.useMemo = function (v, R) {
      return Ce.current.useMemo(v, R);
    }),
    (re.useReducer = function (v, R, ne) {
      return Ce.current.useReducer(v, R, ne);
    }),
    (re.useRef = function (v) {
      return Ce.current.useRef(v);
    }),
    (re.useState = function (v) {
      return Ce.current.useState(v);
    }),
    (re.useSyncExternalStore = function (v, R, ne) {
      return Ce.current.useSyncExternalStore(v, R, ne);
    }),
    (re.useTransition = function () {
      return Ce.current.useTransition();
    }),
    (re.version = "18.3.1"),
    re
  );
}
var hc;
function cu() {
  return hc || ((hc = 1), (qi.exports = Yd())), qi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc;
function Xd() {
  if (mc) return zr;
  mc = 1;
  var i = cu(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(E, w, k) {
    var L,
      j = {},
      _ = null,
      D = null;
    k !== void 0 && (_ = "" + k),
      w.key !== void 0 && (_ = "" + w.key),
      w.ref !== void 0 && (D = w.ref);
    for (L in w) d.call(w, L) && !m.hasOwnProperty(L) && (j[L] = w[L]);
    if (E && E.defaultProps)
      for (L in ((w = E.defaultProps), w)) j[L] === void 0 && (j[L] = w[L]);
    return {
      $$typeof: s,
      type: E,
      key: _,
      ref: D,
      props: j,
      _owner: f.current,
    };
  }
  return (zr.Fragment = a), (zr.jsx = x), (zr.jsxs = x), zr;
}
var vc;
function Gd() {
  return vc || ((vc = 1), (Gi.exports = Xd())), Gi.exports;
}
var I = Gd(),
  C = cu(),
  Yl = {},
  Ji = { exports: {} },
  be = {},
  Zi = { exports: {} },
  bi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yc;
function qd() {
  return (
    yc ||
      ((yc = 1),
      (function (i) {
        function s(U, J) {
          var V = U.length;
          U.push(J);
          e: for (; 0 < V; ) {
            var v = (V - 1) >>> 1,
              R = U[v];
            if (0 < f(R, J)) (U[v] = J), (U[V] = R), (V = v);
            else break e;
          }
        }
        function a(U) {
          return U.length === 0 ? null : U[0];
        }
        function d(U) {
          if (U.length === 0) return null;
          var J = U[0],
            V = U.pop();
          if (V !== J) {
            U[0] = V;
            e: for (var v = 0, R = U.length, ne = R >>> 1; v < ne; ) {
              var oe = 2 * (v + 1) - 1,
                ae = U[oe],
                se = oe + 1,
                me = U[se];
              if (0 > f(ae, V))
                se < R && 0 > f(me, ae)
                  ? ((U[v] = me), (U[se] = V), (v = se))
                  : ((U[v] = ae), (U[oe] = V), (v = oe));
              else if (se < R && 0 > f(me, V))
                (U[v] = me), (U[se] = V), (v = se);
              else break e;
            }
          }
          return J;
        }
        function f(U, J) {
          var V = U.sortIndex - J.sortIndex;
          return V !== 0 ? V : U.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            E = x.now();
          i.unstable_now = function () {
            return x.now() - E;
          };
        }
        var w = [],
          k = [],
          L = 1,
          j = null,
          _ = 3,
          D = !1,
          z = !1,
          $ = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(U) {
          for (var J = a(k); J !== null; ) {
            if (J.callback === null) d(k);
            else if (J.startTime <= U)
              d(k), (J.sortIndex = J.expirationTime), s(w, J);
            else break;
            J = a(k);
          }
        }
        function le(U) {
          if ((($ = !1), b(U), !z))
            if (a(w) !== null) (z = !0), Ae(fe);
            else {
              var J = a(k);
              J !== null && Ce(le, J.startTime - U);
            }
        }
        function fe(U, J) {
          (z = !1), $ && (($ = !1), F(ee), (ee = -1)), (D = !0);
          var V = _;
          try {
            for (
              b(J), j = a(w);
              j !== null && (!(j.expirationTime > J) || (U && !he()));

            ) {
              var v = j.callback;
              if (typeof v == "function") {
                (j.callback = null), (_ = j.priorityLevel);
                var R = v(j.expirationTime <= J);
                (J = i.unstable_now()),
                  typeof R == "function"
                    ? (j.callback = R)
                    : j === a(w) && d(w),
                  b(J);
              } else d(w);
              j = a(w);
            }
            if (j !== null) var ne = !0;
            else {
              var oe = a(k);
              oe !== null && Ce(le, oe.startTime - J), (ne = !1);
            }
            return ne;
          } finally {
            (j = null), (_ = V), (D = !1);
          }
        }
        var B = !1,
          X = null,
          ee = -1,
          ie = 5,
          te = -1;
        function he() {
          return !(i.unstable_now() - te < ie);
        }
        function ze() {
          if (X !== null) {
            var U = i.unstable_now();
            te = U;
            var J = !0;
            try {
              J = X(!0, U);
            } finally {
              J ? Ue() : ((B = !1), (X = null));
            }
          } else B = !1;
        }
        var Ue;
        if (typeof A == "function")
          Ue = function () {
            A(ze);
          };
        else if (typeof MessageChannel < "u") {
          var Qe = new MessageChannel(),
            ft = Qe.port2;
          (Qe.port1.onmessage = ze),
            (Ue = function () {
              ft.postMessage(null);
            });
        } else
          Ue = function () {
            O(ze, 0);
          };
        function Ae(U) {
          (X = U), B || ((B = !0), Ue());
        }
        function Ce(U, J) {
          ee = O(function () {
            U(i.unstable_now());
          }, J);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || D || ((z = !0), Ae(fe));
          }),
          (i.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ie = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(w);
          }),
          (i.unstable_next = function (U) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = _;
            }
            var V = _;
            _ = J;
            try {
              return U();
            } finally {
              _ = V;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (U, J) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var V = _;
            _ = U;
            try {
              return J();
            } finally {
              _ = V;
            }
          }),
          (i.unstable_scheduleCallback = function (U, J, V) {
            var v = i.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? v + V : v))
                : (V = v),
              U)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = V + R),
              (U = {
                id: L++,
                callback: J,
                priorityLevel: U,
                startTime: V,
                expirationTime: R,
                sortIndex: -1,
              }),
              V > v
                ? ((U.sortIndex = V),
                  s(k, U),
                  a(w) === null &&
                    U === a(k) &&
                    ($ ? (F(ee), (ee = -1)) : ($ = !0), Ce(le, V - v)))
                : ((U.sortIndex = R), s(w, U), z || D || ((z = !0), Ae(fe))),
              U
            );
          }),
          (i.unstable_shouldYield = he),
          (i.unstable_wrapCallback = function (U) {
            var J = _;
            return function () {
              var V = _;
              _ = J;
              try {
                return U.apply(this, arguments);
              } finally {
                _ = V;
              }
            };
          });
      })(bi)),
    bi
  );
}
var gc;
function Jd() {
  return gc || ((gc = 1), (Zi.exports = qd())), Zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc;
function Zd() {
  if (wc) return be;
  wc = 1;
  var i = cu(),
    s = Jd();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    f = {};
  function m(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var E = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    L = {},
    j = {};
  function _(e) {
    return w.call(j, e)
      ? !0
      : w.call(L, e)
      ? !1
      : k.test(e)
      ? (j[e] = !0)
      : ((L[e] = !0), !1);
  }
  function D(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || D(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var F = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, A);
      O[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, A);
        O[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, A);
      O[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function b(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? _(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var le = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fe = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    ee = Symbol.for("react.strict_mode"),
    ie = Symbol.for("react.profiler"),
    te = Symbol.for("react.provider"),
    he = Symbol.for("react.context"),
    ze = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    Qe = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    U = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (U && e[U]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    v;
  function R(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var ne = !1;
  function oe(e, t) {
    if (!e || ne) return "";
    ne = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            c = o.length - 1;
          1 <= u && 0 <= c && l[u] !== o[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== o[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== o[c])) {
                  var p =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (ne = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case B:
        return "Portal";
      case ie:
        return "Profiler";
      case ee:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case he:
          return (e.displayName || "Context") + ".Consumer";
        case te:
          return (e._context.displayName || "Context") + ".Provider";
        case ze:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return se(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(t);
      case 8:
        return t === ee ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function de(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function et(e) {
    var t = we(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Dr(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function wu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function $r(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function to(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Su(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ku(e, t) {
    (t = t.checked), t != null && b(e, "checked", t, !1);
  }
  function no(e, t) {
    ku(e, t);
    var n = de(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ro(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ro(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function xu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ro(e, t, n) {
    (t !== "number" || $r(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function gn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + de(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Eu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: de(n) };
  }
  function Cu(e, t) {
    var n = de(t.value),
      r = de(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function _u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Pu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Pu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ur,
    Ru = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ur.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    qc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xn).forEach(function (e) {
    qc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
    });
  });
  function Nu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Tu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Nu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Jc = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function io(e, t) {
    if (t) {
      if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function uo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ao = null;
  function so(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var co = null,
    wn = null,
    Sn = null;
  function Lu(e) {
    if ((e = vr(e))) {
      if (typeof co != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = al(t)), co(e.stateNode, e.type, t));
    }
  }
  function zu(e) {
    wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
  }
  function Mu() {
    if (wn) {
      var e = wn,
        t = Sn;
      if (((Sn = wn = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
    }
  }
  function ju(e, t) {
    return e(t);
  }
  function Iu() {}
  var fo = !1;
  function Ou(e, t, n) {
    if (fo) return e(t, n);
    fo = !0;
    try {
      return ju(e, t, n);
    } finally {
      (fo = !1), (wn !== null || Sn !== null) && (Iu(), Mu());
    }
  }
  function Gn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = al(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var po = !1;
  if (E)
    try {
      var qn = {};
      Object.defineProperty(qn, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", qn, qn),
        window.removeEventListener("test", qn, qn);
    } catch {
      po = !1;
    }
  function Zc(e, t, n, r, l, o, u, c, p) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (N) {
      this.onError(N);
    }
  }
  var Jn = !1,
    Ar = null,
    Br = !1,
    ho = null,
    bc = {
      onError: function (e) {
        (Jn = !0), (Ar = e);
      },
    };
  function ef(e, t, n, r, l, o, u, c, p) {
    (Jn = !1), (Ar = null), Zc.apply(bc, arguments);
  }
  function tf(e, t, n, r, l, o, u, c, p) {
    if ((ef.apply(this, arguments), Jn)) {
      if (Jn) {
        var S = Ar;
        (Jn = !1), (Ar = null);
      } else throw Error(a(198));
      Br || ((Br = !0), (ho = S));
    }
  }
  function rn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Fu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Du(e) {
    if (rn(e) !== e) throw Error(a(188));
  }
  function nf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = rn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Du(l), e;
          if (o === r) return Du(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = o.child; c; ) {
            if (c === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function $u(e) {
    return (e = nf(e)), e !== null ? Uu(e) : null;
  }
  function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Au = s.unstable_scheduleCallback,
    Bu = s.unstable_cancelCallback,
    rf = s.unstable_shouldYield,
    lf = s.unstable_requestPaint,
    Pe = s.unstable_now,
    of = s.unstable_getCurrentPriorityLevel,
    mo = s.unstable_ImmediatePriority,
    Hu = s.unstable_UserBlockingPriority,
    Hr = s.unstable_NormalPriority,
    uf = s.unstable_LowPriority,
    Wu = s.unstable_IdlePriority,
    Wr = null,
    kt = null;
  function af(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : ff,
    sf = Math.log,
    cf = Math.LN2;
  function ff(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sf(e) / cf) | 0)) | 0;
  }
  var Vr = 64,
    Qr = 4194304;
  function Zn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = Zn(c)) : ((o &= u), o !== 0 && (r = Zn(o)));
    } else (u = n & ~l), u !== 0 ? (r = Zn(u)) : o !== 0 && (r = Zn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function df(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - dt(o),
        c = 1 << u,
        p = l[u];
      p === -1
        ? (!(c & n) || c & r) && (l[u] = df(c, t))
        : p <= t && (e.expiredLanes |= c),
        (o &= ~c);
    }
  }
  function vo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Vu() {
    var e = Vr;
    return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e;
  }
  function yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n);
  }
  function hf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function go(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function Qu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ku,
    wo,
    Yu,
    Xu,
    Gu,
    So = !1,
    Yr = [],
    Dt = null,
    $t = null,
    Ut = null,
    er = new Map(),
    tr = new Map(),
    At = [],
    mf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        $t = null;
        break;
      case "mouseover":
      case "mouseout":
        Ut = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = vr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function vf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Dt = nr(Dt, e, t, n, r, l)), !0;
      case "dragenter":
        return ($t = nr($t, e, t, n, r, l)), !0;
      case "mouseover":
        return (Ut = nr(Ut, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return er.set(o, nr(er.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), tr.set(o, nr(tr.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Ju(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = rn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Fu(n)), t !== null)) {
            (e.blockedOn = t),
              Gu(e.priority, function () {
                Yu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ao = r), n.target.dispatchEvent(r), (ao = null);
      } else return (t = vr(n)), t !== null && wo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Zu(e, t, n) {
    Xr(e) && n.delete(t);
  }
  function yf() {
    (So = !1),
      Dt !== null && Xr(Dt) && (Dt = null),
      $t !== null && Xr($t) && ($t = null),
      Ut !== null && Xr(Ut) && (Ut = null),
      er.forEach(Zu),
      tr.forEach(Zu);
  }
  function rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, yf)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < Yr.length) {
      rr(Yr[0], e);
      for (var n = 1; n < Yr.length; n++) {
        var r = Yr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && rr(Dt, e),
        $t !== null && rr($t, e),
        Ut !== null && rr(Ut, e),
        er.forEach(t),
        tr.forEach(t),
        n = 0;
      n < At.length;
      n++
    )
      (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
      Ju(n), n.blockedOn === null && At.shift();
  }
  var kn = le.ReactCurrentBatchConfig,
    Gr = !0;
  function gf(e, t, n, r) {
    var l = pe,
      o = kn.transition;
    kn.transition = null;
    try {
      (pe = 1), ko(e, t, n, r);
    } finally {
      (pe = l), (kn.transition = o);
    }
  }
  function wf(e, t, n, r) {
    var l = pe,
      o = kn.transition;
    kn.transition = null;
    try {
      (pe = 4), ko(e, t, n, r);
    } finally {
      (pe = l), (kn.transition = o);
    }
  }
  function ko(e, t, n, r) {
    if (Gr) {
      var l = xo(e, t, n, r);
      if (l === null) Uo(e, t, r, qr, n), qu(e, r);
      else if (vf(l, e, t, n, r)) r.stopPropagation();
      else if ((qu(e, r), t & 4 && -1 < mf.indexOf(e))) {
        for (; l !== null; ) {
          var o = vr(l);
          if (
            (o !== null && Ku(o),
            (o = xo(e, t, n, r)),
            o === null && Uo(e, t, r, qr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Uo(e, t, r, null, n);
    }
  }
  var qr = null;
  function xo(e, t, n, r) {
    if (((qr = null), (e = so(r)), (e = ln(e)), e !== null))
      if (((t = rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Fu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (qr = e), null;
  }
  function bu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (of()) {
          case mo:
            return 1;
          case Hu:
            return 4;
          case Hr:
          case uf:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bt = null,
    Eo = null,
    Jr = null;
  function ea() {
    if (Jr) return Jr;
    var e,
      t = Eo,
      n = t.length,
      r,
      l = "value" in Bt ? Bt.value : Bt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Zr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function br() {
    return !0;
  }
  function ta() {
    return !1;
  }
  function tt(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? br
          : ta),
        (this.isPropagationStopped = ta),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = br));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = br));
        },
        persist: function () {},
        isPersistent: br,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Co = tt(xn),
    or = V({}, xn, { view: 0, detail: 0 }),
    Sf = tt(or),
    _o,
    Po,
    ir,
    el = V({}, or, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: No,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ir &&
              (ir && e.type === "mousemove"
                ? ((_o = e.screenX - ir.screenX), (Po = e.screenY - ir.screenY))
                : (Po = _o = 0),
              (ir = e)),
            _o);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Po;
      },
    }),
    na = tt(el),
    kf = V({}, el, { dataTransfer: 0 }),
    xf = tt(kf),
    Ef = V({}, or, { relatedTarget: 0 }),
    Ro = tt(Ef),
    Cf = V({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _f = tt(Cf),
    Pf = V({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Rf = tt(Pf),
    Nf = V({}, xn, { data: 0 }),
    ra = tt(Nf),
    Tf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Lf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    zf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = zf[e])
      ? !!t[e]
      : !1;
  }
  function No() {
    return Mf;
  }
  var jf = V({}, or, {
      key: function (e) {
        if (e.key) {
          var t = Tf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Lf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: No,
      charCode: function (e) {
        return e.type === "keypress" ? Zr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    If = tt(jf),
    Of = V({}, el, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    la = tt(Of),
    Ff = V({}, or, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: No,
    }),
    Df = tt(Ff),
    $f = V({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uf = tt($f),
    Af = V({}, el, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Bf = tt(Af),
    Hf = [9, 13, 27, 32],
    To = E && "CompositionEvent" in window,
    ur = null;
  E && "documentMode" in document && (ur = document.documentMode);
  var Wf = E && "TextEvent" in window && !ur,
    oa = E && (!To || (ur && 8 < ur && 11 >= ur)),
    ia = " ",
    ua = !1;
  function aa(e, t) {
    switch (e) {
      case "keyup":
        return Hf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var En = !1;
  function Vf(e, t) {
    switch (e) {
      case "compositionend":
        return sa(t);
      case "keypress":
        return t.which !== 32 ? null : ((ua = !0), ia);
      case "textInput":
        return (e = t.data), e === ia && ua ? null : e;
      default:
        return null;
    }
  }
  function Qf(e, t) {
    if (En)
      return e === "compositionend" || (!To && aa(e, t))
        ? ((e = ea()), (Jr = Eo = Bt = null), (En = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return oa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kf[e.type] : t === "textarea";
  }
  function fa(e, t, n, r) {
    zu(r),
      (t = ol(t, "onChange")),
      0 < t.length &&
        ((n = new Co("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ar = null,
    sr = null;
  function Yf(e) {
    Ta(e, 0);
  }
  function tl(e) {
    var t = Nn(e);
    if (wu(t)) return e;
  }
  function Xf(e, t) {
    if (e === "change") return t;
  }
  var da = !1;
  if (E) {
    var Lo;
    if (E) {
      var zo = "oninput" in document;
      if (!zo) {
        var pa = document.createElement("div");
        pa.setAttribute("oninput", "return;"),
          (zo = typeof pa.oninput == "function");
      }
      Lo = zo;
    } else Lo = !1;
    da = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function ha() {
    ar && (ar.detachEvent("onpropertychange", ma), (sr = ar = null));
  }
  function ma(e) {
    if (e.propertyName === "value" && tl(sr)) {
      var t = [];
      fa(t, sr, e, so(e)), Ou(Yf, t);
    }
  }
  function Gf(e, t, n) {
    e === "focusin"
      ? (ha(), (ar = t), (sr = n), ar.attachEvent("onpropertychange", ma))
      : e === "focusout" && ha();
  }
  function qf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tl(sr);
  }
  function Jf(e, t) {
    if (e === "click") return tl(t);
  }
  function Zf(e, t) {
    if (e === "input" || e === "change") return tl(t);
  }
  function bf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : bf;
  function cr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function va(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ya(e, t) {
    var n = va(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = va(n);
    }
  }
  function ga(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ga(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function wa() {
    for (var e = window, t = $r(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = $r(e.document);
    }
    return t;
  }
  function Mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ed(e) {
    var t = wa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ga(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Mo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = ya(n, o));
          var u = ya(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var td = E && "documentMode" in document && 11 >= document.documentMode,
    Cn = null,
    jo = null,
    fr = null,
    Io = !1;
  function Sa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io ||
      Cn == null ||
      Cn !== $r(r) ||
      ((r = Cn),
      "selectionStart" in r && Mo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && cr(fr, r)) ||
        ((fr = r),
        (r = ol(jo, "onSelect")),
        0 < r.length &&
          ((t = new Co("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Cn))));
  }
  function nl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var _n = {
      animationend: nl("Animation", "AnimationEnd"),
      animationiteration: nl("Animation", "AnimationIteration"),
      animationstart: nl("Animation", "AnimationStart"),
      transitionend: nl("Transition", "TransitionEnd"),
    },
    Oo = {},
    ka = {};
  E &&
    ((ka = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _n.animationend.animation,
      delete _n.animationiteration.animation,
      delete _n.animationstart.animation),
    "TransitionEvent" in window || delete _n.transitionend.transition);
  function rl(e) {
    if (Oo[e]) return Oo[e];
    if (!_n[e]) return e;
    var t = _n[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ka) return (Oo[e] = t[n]);
    return e;
  }
  var xa = rl("animationend"),
    Ea = rl("animationiteration"),
    Ca = rl("animationstart"),
    _a = rl("transitionend"),
    Pa = new Map(),
    Ra =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ht(e, t) {
    Pa.set(e, t), m(t, [e]);
  }
  for (var Fo = 0; Fo < Ra.length; Fo++) {
    var Do = Ra[Fo],
      nd = Do.toLowerCase(),
      rd = Do[0].toUpperCase() + Do.slice(1);
    Ht(nd, "on" + rd);
  }
  Ht(xa, "onAnimationEnd"),
    Ht(Ea, "onAnimationIteration"),
    Ht(Ca, "onAnimationStart"),
    Ht("dblclick", "onDoubleClick"),
    Ht("focusin", "onFocus"),
    Ht("focusout", "onBlur"),
    Ht(_a, "onTransitionEnd"),
    x("onMouseEnter", ["mouseout", "mouseover"]),
    x("onMouseLeave", ["mouseout", "mouseover"]),
    x("onPointerEnter", ["pointerout", "pointerover"]),
    x("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var dr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ld = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(dr)
    );
  function Na(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), tf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ta(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              p = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), p !== o && l.isPropagationStopped()))
              break e;
            Na(l, c, S), (o = p);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (p = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              p !== o && l.isPropagationStopped())
            )
              break e;
            Na(l, c, S), (o = p);
          }
      }
    }
    if (Br) throw ((e = ho), (Br = !1), (ho = null), e);
  }
  function ye(e, t) {
    var n = t[Qo];
    n === void 0 && (n = t[Qo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (La(t, e, 2, !1), n.add(r));
  }
  function $o(e, t, n) {
    var r = 0;
    t && (r |= 4), La(n, e, r, t);
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[ll]) {
      (e[ll] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (ld.has(n) || $o(n, !1, e), $o(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ll] || ((t[ll] = !0), $o("selectionchange", !1, t));
    }
  }
  function La(e, t, n, r) {
    switch (bu(t)) {
      case 1:
        var l = gf;
        break;
      case 4:
        l = wf;
        break;
      default:
        l = ko;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !po ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Uo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var p = u.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = u.stateNode.containerInfo),
                p === l || (p.nodeType === 8 && p.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = ln(c)), u === null)) return;
            if (((p = u.tag), p === 5 || p === 6)) {
              r = o = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    Ou(function () {
      var S = o,
        N = so(n),
        T = [];
      e: {
        var P = Pa.get(e);
        if (P !== void 0) {
          var H = Co,
            Q = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = If;
              break;
            case "focusin":
              (Q = "focus"), (H = Ro);
              break;
            case "focusout":
              (Q = "blur"), (H = Ro);
              break;
            case "beforeblur":
            case "afterblur":
              H = Ro;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = na;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = xf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Df;
              break;
            case xa:
            case Ea:
            case Ca:
              H = _f;
              break;
            case _a:
              H = Uf;
              break;
            case "scroll":
              H = Sf;
              break;
            case "wheel":
              H = Bf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = la;
          }
          var K = (t & 4) !== 0,
            Re = !K && e === "scroll",
            y = K ? (P !== null ? P + "Capture" : null) : P;
          K = [];
          for (var h = S, g; h !== null; ) {
            g = h;
            var M = g.stateNode;
            if (
              (g.tag === 5 &&
                M !== null &&
                ((g = M),
                y !== null &&
                  ((M = Gn(h, y)), M != null && K.push(hr(h, M, g)))),
              Re)
            )
              break;
            h = h.return;
          }
          0 < K.length &&
            ((P = new H(P, Q, null, n, N)), T.push({ event: P, listeners: K }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            P &&
              n !== ao &&
              (Q = n.relatedTarget || n.fromElement) &&
              (ln(Q) || Q[Rt]))
          )
            break e;
          if (
            (H || P) &&
            ((P =
              N.window === N
                ? N
                : (P = N.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            H
              ? ((Q = n.relatedTarget || n.toElement),
                (H = S),
                (Q = Q ? ln(Q) : null),
                Q !== null &&
                  ((Re = rn(Q)), Q !== Re || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((H = null), (Q = S)),
            H !== Q)
          ) {
            if (
              ((K = na),
              (M = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = la),
                (M = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (Re = H == null ? P : Nn(H)),
              (g = Q == null ? P : Nn(Q)),
              (P = new K(M, h + "leave", H, n, N)),
              (P.target = Re),
              (P.relatedTarget = g),
              (M = null),
              ln(N) === S &&
                ((K = new K(y, h + "enter", Q, n, N)),
                (K.target = g),
                (K.relatedTarget = Re),
                (M = K)),
              (Re = M),
              H && Q)
            )
              t: {
                for (K = H, y = Q, h = 0, g = K; g; g = Pn(g)) h++;
                for (g = 0, M = y; M; M = Pn(M)) g++;
                for (; 0 < h - g; ) (K = Pn(K)), h--;
                for (; 0 < g - h; ) (y = Pn(y)), g--;
                for (; h--; ) {
                  if (K === y || (y !== null && K === y.alternate)) break t;
                  (K = Pn(K)), (y = Pn(y));
                }
                K = null;
              }
            else K = null;
            H !== null && za(T, P, H, K, !1),
              Q !== null && Re !== null && za(T, Re, Q, K, !0);
          }
        }
        e: {
          if (
            ((P = S ? Nn(S) : window),
            (H = P.nodeName && P.nodeName.toLowerCase()),
            H === "select" || (H === "input" && P.type === "file"))
          )
            var Y = Xf;
          else if (ca(P))
            if (da) Y = Zf;
            else {
              Y = qf;
              var G = Gf;
            }
          else
            (H = P.nodeName) &&
              H.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (Y = Jf);
          if (Y && (Y = Y(e, S))) {
            fa(T, Y, n, N);
            break e;
          }
          G && G(e, P, S),
            e === "focusout" &&
              (G = P._wrapperState) &&
              G.controlled &&
              P.type === "number" &&
              ro(P, "number", P.value);
        }
        switch (((G = S ? Nn(S) : window), e)) {
          case "focusin":
            (ca(G) || G.contentEditable === "true") &&
              ((Cn = G), (jo = S), (fr = null));
            break;
          case "focusout":
            fr = jo = Cn = null;
            break;
          case "mousedown":
            Io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Io = !1), Sa(T, n, N);
            break;
          case "selectionchange":
            if (td) break;
          case "keydown":
          case "keyup":
            Sa(T, n, N);
        }
        var q;
        if (To)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          En
            ? aa(e, n) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (oa &&
            n.locale !== "ko" &&
            (En || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && En && (q = ea())
              : ((Bt = N),
                (Eo = "value" in Bt ? Bt.value : Bt.textContent),
                (En = !0))),
          (G = ol(S, Z)),
          0 < G.length &&
            ((Z = new ra(Z, e, null, n, N)),
            T.push({ event: Z, listeners: G }),
            q ? (Z.data = q) : ((q = sa(n)), q !== null && (Z.data = q)))),
          (q = Wf ? Vf(e, n) : Qf(e, n)) &&
            ((S = ol(S, "onBeforeInput")),
            0 < S.length &&
              ((N = new ra("onBeforeInput", "beforeinput", null, n, N)),
              T.push({ event: N, listeners: S }),
              (N.data = q)));
      }
      Ta(T, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ol(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Gn(e, n)),
        o != null && r.unshift(hr(e, o, l)),
        (o = Gn(e, t)),
        o != null && r.push(hr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function za(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        p = c.alternate,
        S = c.stateNode;
      if (p !== null && p === r) break;
      c.tag === 5 &&
        S !== null &&
        ((c = S),
        l
          ? ((p = Gn(n, o)), p != null && u.unshift(hr(n, p, c)))
          : l || ((p = Gn(n, o)), p != null && u.push(hr(n, p, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var od = /\r\n?/g,
    id = /\u0000|\uFFFD/g;
  function Ma(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        od,
        `
`
      )
      .replace(id, "");
  }
  function il(e, t, n) {
    if (((t = Ma(t)), Ma(e) !== t && n)) throw Error(a(425));
  }
  function ul() {}
  var Ao = null,
    Bo = null;
  function Ho(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
    ud = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ja = typeof Promise == "function" ? Promise : void 0,
    ad =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ja < "u"
        ? function (e) {
            return ja.resolve(null).then(e).catch(sd);
          }
        : Wo;
  function sd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Vo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), lr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    lr(t);
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ia(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Rn = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + Rn,
    mr = "__reactProps$" + Rn,
    Rt = "__reactContainer$" + Rn,
    Qo = "__reactEvents$" + Rn,
    cd = "__reactListeners$" + Rn,
    fd = "__reactHandles$" + Rn;
  function ln(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rt] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ia(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = Ia(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function vr(e) {
    return (
      (e = e[xt] || e[Rt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function al(e) {
    return e[mr] || null;
  }
  var Ko = [],
    Tn = -1;
  function Vt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > Tn || ((e.current = Ko[Tn]), (Ko[Tn] = null), Tn--);
  }
  function ve(e, t) {
    Tn++, (Ko[Tn] = e.current), (e.current = t);
  }
  var Qt = {},
    Be = Vt(Qt),
    Xe = Vt(!1),
    on = Qt;
  function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ge(e) {
    return (e = e.childContextTypes), e != null;
  }
  function sl() {
    ge(Xe), ge(Be);
  }
  function Oa(e, t, n) {
    if (Be.current !== Qt) throw Error(a(168));
    ve(Be, t), ve(Xe, n);
  }
  function Fa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, me(e) || "Unknown", l));
    return V({}, n, r);
  }
  function cl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Qt),
      (on = Be.current),
      ve(Be, e),
      ve(Xe, Xe.current),
      !0
    );
  }
  function Da(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Fa(e, t, on)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Xe),
        ge(Be),
        ve(Be, e))
      : ge(Xe),
      ve(Xe, n);
  }
  var Nt = null,
    fl = !1,
    Yo = !1;
  function $a(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }
  function dd(e) {
    (fl = !0), $a(e);
  }
  function Kt() {
    if (!Yo && Nt !== null) {
      Yo = !0;
      var e = 0,
        t = pe;
      try {
        var n = Nt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Nt = null), (fl = !1);
      } catch (l) {
        throw (Nt !== null && (Nt = Nt.slice(e + 1)), Au(mo, Kt), l);
      } finally {
        (pe = t), (Yo = !1);
      }
    }
    return null;
  }
  var zn = [],
    Mn = 0,
    dl = null,
    pl = 0,
    ot = [],
    it = 0,
    un = null,
    Tt = 1,
    Lt = "";
  function an(e, t) {
    (zn[Mn++] = pl), (zn[Mn++] = dl), (dl = e), (pl = t);
  }
  function Ua(e, t, n) {
    (ot[it++] = Tt), (ot[it++] = Lt), (ot[it++] = un), (un = e);
    var r = Tt;
    e = Lt;
    var l = 32 - dt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - dt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Tt = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (Lt = o + e);
    } else (Tt = (1 << o) | (n << l) | r), (Lt = e);
  }
  function Xo(e) {
    e.return !== null && (an(e, 1), Ua(e, 1, 0));
  }
  function Go(e) {
    for (; e === dl; )
      (dl = zn[--Mn]), (zn[Mn] = null), (pl = zn[--Mn]), (zn[Mn] = null);
    for (; e === un; )
      (un = ot[--it]),
        (ot[it] = null),
        (Lt = ot[--it]),
        (ot[it] = null),
        (Tt = ot[--it]),
        (ot[it] = null);
  }
  var nt = null,
    rt = null,
    Se = !1,
    ht = null;
  function Aa(e, t) {
    var n = ct(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ba(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = Wt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = un !== null ? { id: Tt, overflow: Lt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ct(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Jo(e) {
    if (Se) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Ba(e, t)) {
          if (qo(e)) throw Error(a(418));
          t = Wt(n.nextSibling);
          var r = nt;
          t && Ba(e, t)
            ? Aa(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e));
        }
      } else {
        if (qo(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e);
      }
    }
  }
  function Ha(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function hl(e) {
    if (e !== nt) return !1;
    if (!Se) return Ha(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ho(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (qo(e)) throw (Wa(), Error(a(418)));
      for (; t; ) Aa(e, t), (t = Wt(t.nextSibling));
    }
    if ((Ha(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Wt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    for (var e = rt; e; ) e = Wt(e.nextSibling);
  }
  function jn() {
    (rt = nt = null), (Se = !1);
  }
  function Zo(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var pd = le.ReactCurrentBatchConfig;
  function yr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[o] : (c[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Va(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qa(e) {
    function t(y, h) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
      }
    }
    function n(y, h) {
      if (!e) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function r(y, h) {
      for (y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function l(y, h) {
      return (y = en(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function o(y, h, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
              : ((y.flags |= 2), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, h, g, M) {
      return h === null || h.tag !== 6
        ? ((h = Wi(g, y.mode, M)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function p(y, h, g, M) {
      var Y = g.type;
      return Y === X
        ? N(y, h, g.props.children, M, g.key)
        : h !== null &&
          (h.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === Ae &&
              Va(Y) === h.type))
        ? ((M = l(h, g.props)), (M.ref = yr(y, h, g)), (M.return = y), M)
        : ((M = Ul(g.type, g.key, g.props, null, y.mode, M)),
          (M.ref = yr(y, h, g)),
          (M.return = y),
          M);
    }
    function S(y, h, g, M) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = Vi(g, y.mode, M)), (h.return = y), h)
        : ((h = l(h, g.children || [])), (h.return = y), h);
    }
    function N(y, h, g, M, Y) {
      return h === null || h.tag !== 7
        ? ((h = vn(g, y.mode, M, Y)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function T(y, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Wi("" + h, y.mode, g)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case fe:
            return (
              (g = Ul(h.type, h.key, h.props, null, y.mode, g)),
              (g.ref = yr(y, null, h)),
              (g.return = y),
              g
            );
          case B:
            return (h = Vi(h, y.mode, g)), (h.return = y), h;
          case Ae:
            var M = h._init;
            return T(y, M(h._payload), g);
        }
        if (Kn(h) || J(h))
          return (h = vn(h, y.mode, g, null)), (h.return = y), h;
        ml(y, h);
      }
      return null;
    }
    function P(y, h, g, M) {
      var Y = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return Y !== null ? null : c(y, h, "" + g, M);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case fe:
            return g.key === Y ? p(y, h, g, M) : null;
          case B:
            return g.key === Y ? S(y, h, g, M) : null;
          case Ae:
            return (Y = g._init), P(y, h, Y(g._payload), M);
        }
        if (Kn(g) || J(g)) return Y !== null ? null : N(y, h, g, M, null);
        ml(y, g);
      }
      return null;
    }
    function H(y, h, g, M, Y) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return (y = y.get(g) || null), c(h, y, "" + M, Y);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case fe:
            return (
              (y = y.get(M.key === null ? g : M.key) || null), p(h, y, M, Y)
            );
          case B:
            return (
              (y = y.get(M.key === null ? g : M.key) || null), S(h, y, M, Y)
            );
          case Ae:
            var G = M._init;
            return H(y, h, g, G(M._payload), Y);
        }
        if (Kn(M) || J(M)) return (y = y.get(g) || null), N(h, y, M, Y, null);
        ml(h, M);
      }
      return null;
    }
    function Q(y, h, g, M) {
      for (
        var Y = null, G = null, q = h, Z = (h = 0), Ie = null;
        q !== null && Z < g.length;
        Z++
      ) {
        q.index > Z ? ((Ie = q), (q = null)) : (Ie = q.sibling);
        var ce = P(y, q, g[Z], M);
        if (ce === null) {
          q === null && (q = Ie);
          break;
        }
        e && q && ce.alternate === null && t(y, q),
          (h = o(ce, h, Z)),
          G === null ? (Y = ce) : (G.sibling = ce),
          (G = ce),
          (q = Ie);
      }
      if (Z === g.length) return n(y, q), Se && an(y, Z), Y;
      if (q === null) {
        for (; Z < g.length; Z++)
          (q = T(y, g[Z], M)),
            q !== null &&
              ((h = o(q, h, Z)),
              G === null ? (Y = q) : (G.sibling = q),
              (G = q));
        return Se && an(y, Z), Y;
      }
      for (q = r(y, q); Z < g.length; Z++)
        (Ie = H(q, y, Z, g[Z], M)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              q.delete(Ie.key === null ? Z : Ie.key),
            (h = o(Ie, h, Z)),
            G === null ? (Y = Ie) : (G.sibling = Ie),
            (G = Ie));
      return (
        e &&
          q.forEach(function (tn) {
            return t(y, tn);
          }),
        Se && an(y, Z),
        Y
      );
    }
    function K(y, h, g, M) {
      var Y = J(g);
      if (typeof Y != "function") throw Error(a(150));
      if (((g = Y.call(g)), g == null)) throw Error(a(151));
      for (
        var G = (Y = null), q = h, Z = (h = 0), Ie = null, ce = g.next();
        q !== null && !ce.done;
        Z++, ce = g.next()
      ) {
        q.index > Z ? ((Ie = q), (q = null)) : (Ie = q.sibling);
        var tn = P(y, q, ce.value, M);
        if (tn === null) {
          q === null && (q = Ie);
          break;
        }
        e && q && tn.alternate === null && t(y, q),
          (h = o(tn, h, Z)),
          G === null ? (Y = tn) : (G.sibling = tn),
          (G = tn),
          (q = Ie);
      }
      if (ce.done) return n(y, q), Se && an(y, Z), Y;
      if (q === null) {
        for (; !ce.done; Z++, ce = g.next())
          (ce = T(y, ce.value, M)),
            ce !== null &&
              ((h = o(ce, h, Z)),
              G === null ? (Y = ce) : (G.sibling = ce),
              (G = ce));
        return Se && an(y, Z), Y;
      }
      for (q = r(y, q); !ce.done; Z++, ce = g.next())
        (ce = H(q, y, Z, ce.value, M)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              q.delete(ce.key === null ? Z : ce.key),
            (h = o(ce, h, Z)),
            G === null ? (Y = ce) : (G.sibling = ce),
            (G = ce));
      return (
        e &&
          q.forEach(function (Qd) {
            return t(y, Qd);
          }),
        Se && an(y, Z),
        Y
      );
    }
    function Re(y, h, g, M) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === X &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case fe:
            e: {
              for (var Y = g.key, G = h; G !== null; ) {
                if (G.key === Y) {
                  if (((Y = g.type), Y === X)) {
                    if (G.tag === 7) {
                      n(y, G.sibling),
                        (h = l(G, g.props.children)),
                        (h.return = y),
                        (y = h);
                      break e;
                    }
                  } else if (
                    G.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Ae &&
                      Va(Y) === G.type)
                  ) {
                    n(y, G.sibling),
                      (h = l(G, g.props)),
                      (h.ref = yr(y, G, g)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                  n(y, G);
                  break;
                } else t(y, G);
                G = G.sibling;
              }
              g.type === X
                ? ((h = vn(g.props.children, y.mode, M, g.key)),
                  (h.return = y),
                  (y = h))
                : ((M = Ul(g.type, g.key, g.props, null, y.mode, M)),
                  (M.ref = yr(y, h, g)),
                  (M.return = y),
                  (y = M));
            }
            return u(y);
          case B:
            e: {
              for (G = g.key; h !== null; ) {
                if (h.key === G)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(y, h.sibling),
                      (h = l(h, g.children || [])),
                      (h.return = y),
                      (y = h);
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (h = Vi(g, y.mode, M)), (h.return = y), (y = h);
            }
            return u(y);
          case Ae:
            return (G = g._init), Re(y, h, G(g._payload), M);
        }
        if (Kn(g)) return Q(y, h, g, M);
        if (J(g)) return K(y, h, g, M);
        ml(y, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(y, h.sibling), (h = l(h, g)), (h.return = y), (y = h))
            : (n(y, h), (h = Wi(g, y.mode, M)), (h.return = y), (y = h)),
          u(y))
        : n(y, h);
    }
    return Re;
  }
  var In = Qa(!0),
    Ka = Qa(!1),
    vl = Vt(null),
    yl = null,
    On = null,
    bo = null;
  function ei() {
    bo = On = yl = null;
  }
  function ti(e) {
    var t = vl.current;
    ge(vl), (e._currentValue = t);
  }
  function ni(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fn(e, t) {
    (yl = e),
      (bo = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (qe = !0), (e.firstContext = null));
  }
  function ut(e) {
    var t = e._currentValue;
    if (bo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (yl === null) throw Error(a(308));
        (On = e), (yl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var sn = null;
  function ri(e) {
    sn === null ? (sn = [e]) : sn.push(e);
  }
  function Ya(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ri(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      zt(e, r)
    );
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function li(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Xa(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Mt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ue & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function gl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), go(e, n);
    }
  }
  function Ga(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function wl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var p = c,
        S = p.next;
      (p.next = null), u === null ? (o = S) : (u.next = S), (u = p);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (c = N.lastBaseUpdate),
        c !== u &&
          (c === null ? (N.firstBaseUpdate = S) : (c.next = S),
          (N.lastBaseUpdate = p)));
    }
    if (o !== null) {
      var T = l.baseState;
      (u = 0), (N = S = p = null), (c = o);
      do {
        var P = c.lane,
          H = c.eventTime;
        if ((r & P) === P) {
          N !== null &&
            (N = N.next =
              {
                eventTime: H,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var Q = e,
              K = c;
            switch (((P = t), (H = n), K.tag)) {
              case 1:
                if (((Q = K.payload), typeof Q == "function")) {
                  T = Q.call(H, T, P);
                  break e;
                }
                T = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = K.payload),
                  (P = typeof Q == "function" ? Q.call(H, T, P) : Q),
                  P == null)
                )
                  break e;
                T = V({}, T, P);
                break e;
              case 2:
                Yt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [c]) : P.push(c));
        } else
          (H = {
            eventTime: H,
            lane: P,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            N === null ? ((S = N = H), (p = T)) : (N = N.next = H),
            (u |= P);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (P = c),
            (c = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (p = T),
        (l.baseState = p),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = N),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (dn |= u), (e.lanes = u), (e.memoizedState = T);
    }
  }
  function qa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var gr = {},
    Et = Vt(gr),
    wr = Vt(gr),
    Sr = Vt(gr);
  function cn(e) {
    if (e === gr) throw Error(a(174));
    return e;
  }
  function oi(e, t) {
    switch ((ve(Sr, t), ve(wr, e), ve(Et, gr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e));
    }
    ge(Et), ve(Et, t);
  }
  function Dn() {
    ge(Et), ge(wr), ge(Sr);
  }
  function Ja(e) {
    cn(Sr.current);
    var t = cn(Et.current),
      n = oo(t, e.type);
    t !== n && (ve(wr, e), ve(Et, n));
  }
  function ii(e) {
    wr.current === e && (ge(Et), ge(wr));
  }
  var xe = Vt(0);
  function Sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ui = [];
  function ai() {
    for (var e = 0; e < ui.length; e++)
      ui[e]._workInProgressVersionPrimary = null;
    ui.length = 0;
  }
  var kl = le.ReactCurrentDispatcher,
    si = le.ReactCurrentBatchConfig,
    fn = 0,
    Ee = null,
    Te = null,
    Me = null,
    xl = !1,
    kr = !1,
    xr = 0,
    hd = 0;
  function He() {
    throw Error(a(321));
  }
  function ci(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function fi(e, t, n, r, l, o) {
    if (
      ((fn = o),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (kl.current = e === null || e.memoizedState === null ? gd : wd),
      (e = n(r, l)),
      kr)
    ) {
      o = 0;
      do {
        if (((kr = !1), (xr = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (Me = Te = null),
          (t.updateQueue = null),
          (kl.current = Sd),
          (e = n(r, l));
      } while (kr);
    }
    if (
      ((kl.current = _l),
      (t = Te !== null && Te.next !== null),
      (fn = 0),
      (Me = Te = Ee = null),
      (xl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function di() {
    var e = xr !== 0;
    return (xr = 0), e;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Me === null ? (Ee.memoizedState = Me = e) : (Me = Me.next = e), Me;
  }
  function at() {
    if (Te === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Me === null ? Ee.memoizedState : Me.next;
    if (t !== null) (Me = t), (Te = e);
    else {
      if (e === null) throw Error(a(310));
      (Te = e),
        (e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null,
        }),
        Me === null ? (Ee.memoizedState = Me = e) : (Me = Me.next = e);
    }
    return Me;
  }
  function Er(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pi(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Te,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var c = (u = null),
        p = null,
        S = o;
      do {
        var N = S.lane;
        if ((fn & N) === N)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action));
        else {
          var T = {
            lane: N,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          p === null ? ((c = p = T), (u = r)) : (p = p.next = T),
            (Ee.lanes |= N),
            (dn |= N);
        }
        S = S.next;
      } while (S !== null && S !== o);
      p === null ? (u = r) : (p.next = c),
        pt(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Ee.lanes |= o), (dn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function hi(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      pt(o, t.memoizedState) || (qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Za() {}
  function ba(e, t) {
    var n = Ee,
      r = at(),
      l = t(),
      o = !pt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (qe = !0)),
      (r = r.queue),
      mi(ns.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cr(9, ts.bind(null, n, r, l, t), void 0, null),
        je === null)
      )
        throw Error(a(349));
      fn & 30 || es(n, t, l);
    }
    return l;
  }
  function es(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ts(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), rs(t) && ls(e);
  }
  function ns(e, t, n) {
    return n(function () {
      rs(t) && ls(e);
    });
  }
  function rs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function ls(e) {
    var t = zt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function os(e) {
    var t = Ct();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Er,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yd.bind(null, Ee, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function is() {
    return at().memoizedState;
  }
  function El(e, t, n, r) {
    var l = Ct();
    (Ee.flags |= e),
      (l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Cl(e, t, n, r) {
    var l = at();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Te !== null) {
      var u = Te.memoizedState;
      if (((o = u.destroy), r !== null && ci(r, u.deps))) {
        l.memoizedState = Cr(t, n, o, r);
        return;
      }
    }
    (Ee.flags |= e), (l.memoizedState = Cr(1 | t, n, o, r));
  }
  function us(e, t) {
    return El(8390656, 8, e, t);
  }
  function mi(e, t) {
    return Cl(2048, 8, e, t);
  }
  function as(e, t) {
    return Cl(4, 2, e, t);
  }
  function ss(e, t) {
    return Cl(4, 4, e, t);
  }
  function cs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function fs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Cl(4, 4, cs.bind(null, t, e), n)
    );
  }
  function vi() {}
  function ds(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ci(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ps(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ci(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function hs(e, t, n) {
    return fn & 21
      ? (pt(n, t) ||
          ((n = Vu()), (Ee.lanes |= n), (dn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
  }
  function md(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = si.transition;
    si.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (si.transition = r);
    }
  }
  function ms() {
    return at().memoizedState;
  }
  function vd(e, t, n) {
    var r = Zt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vs(e))
    )
      ys(t, n);
    else if (((n = Ya(e, t, n, r)), n !== null)) {
      var l = Ye();
      gt(n, e, r, l), gs(n, t, r);
    }
  }
  function yd(e, t, n) {
    var r = Zt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (vs(e)) ys(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), pt(c, u))) {
            var p = t.interleaved;
            p === null
              ? ((l.next = l), ri(t))
              : ((l.next = p.next), (p.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ya(e, t, l, r)),
        n !== null && ((l = Ye()), gt(n, e, r, l), gs(n, t, r));
    }
  }
  function vs(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function ys(e, t) {
    kr = xl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function gs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), go(e, n);
    }
  }
  var _l = {
      readContext: ut,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    gd = {
      readContext: ut,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ut,
      useEffect: us,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          El(4194308, 4, cs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return El(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return El(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = vd.bind(null, Ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: os,
      useDebugValue: vi,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = os(!1),
          t = e[0];
        return (e = md.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ee,
          l = Ct();
        if (Se) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(a(349));
          fn & 30 || es(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          us(ns.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Cr(9, ts.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = je.identifierPrefix;
        if (Se) {
          var n = Lt,
            r = Tt;
          (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = xr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = hd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wd = {
      readContext: ut,
      useCallback: ds,
      useContext: ut,
      useEffect: mi,
      useImperativeHandle: fs,
      useInsertionEffect: as,
      useLayoutEffect: ss,
      useMemo: ps,
      useReducer: pi,
      useRef: is,
      useState: function () {
        return pi(Er);
      },
      useDebugValue: vi,
      useDeferredValue: function (e) {
        var t = at();
        return hs(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(Er)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: Za,
      useSyncExternalStore: ba,
      useId: ms,
      unstable_isNewReconciler: !1,
    },
    Sd = {
      readContext: ut,
      useCallback: ds,
      useContext: ut,
      useEffect: mi,
      useImperativeHandle: fs,
      useInsertionEffect: as,
      useLayoutEffect: ss,
      useMemo: ps,
      useReducer: hi,
      useRef: is,
      useState: function () {
        return hi(Er);
      },
      useDebugValue: vi,
      useDeferredValue: function (e) {
        var t = at();
        return Te === null ? (t.memoizedState = e) : hs(t, Te.memoizedState, e);
      },
      useTransition: function () {
        var e = hi(Er)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: Za,
      useSyncExternalStore: ba,
      useId: ms,
      unstable_isNewReconciler: !1,
    };
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function yi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Zt(e),
        o = Mt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (gt(t, e, l, r), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Zt(e),
        o = Mt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Xt(e, o, l)),
        t !== null && (gt(t, e, l, r), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = Zt(e),
        l = Mt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (gt(t, e, r, n), gl(t, e, r));
    },
  };
  function ws(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !cr(n, r) || !cr(l, o)
        : !0
    );
  }
  function Ss(e, t, n) {
    var r = !1,
      l = Qt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ut(o))
        : ((l = Ge(t) ? on : Be.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ln(e, l) : Qt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ks(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
  }
  function gi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), li(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = ut(o))
      : ((o = Ge(t) ? on : Be.current), (l.context = Ln(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (yi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
        wl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $n(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ae(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function wi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Si(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kd = typeof WeakMap == "function" ? WeakMap : Map;
  function xs(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        jl || ((jl = !0), (Oi = r)), Si(e, t);
      }),
      n
    );
  }
  function Es(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Si(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Si(e, t),
            typeof r != "function" &&
              (qt === null ? (qt = new Set([this])) : qt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function Cs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Od.bind(null, e, t, n)), t.then(e, e));
  }
  function _s(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ps(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Mt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var xd = le.ReactCurrentOwner,
    qe = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? Ka(t, null, n, r) : In(t, e.child, n, r);
  }
  function Rs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Fn(t, l),
      (r = fi(e, t, n, r, o, l)),
      (n = di()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (Se && n && Xo(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function Ns(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Hi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ts(e, t, o, r, l))
        : ((e = Ul(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : cr), n(u, r) && e.ref === t.ref)
      )
        return jt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = en(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ts(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (qe = !0);
        else return (t.lanes = e.lanes), jt(e, t, l);
    }
    return ki(e, t, n, r, l);
  }
  function Ls(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ve(An, lt),
          (lt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ve(An, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ve(An, lt),
          (lt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(An, lt),
        (lt |= r);
    return Ke(e, t, l, n), t.child;
  }
  function zs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ki(e, t, n, r, l) {
    var o = Ge(n) ? on : Be.current;
    return (
      (o = Ln(t, o)),
      Fn(t, l),
      (n = fi(e, t, n, r, o, l)),
      (r = di()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (Se && r && Xo(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function Ms(e, t, n, r, l) {
    if (Ge(n)) {
      var o = !0;
      cl(t);
    } else o = !1;
    if ((Fn(t, l), t.stateNode === null))
      Nl(e, t), Ss(t, n, r), gi(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var p = u.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = ut(S))
        : ((S = Ge(n) ? on : Be.current), (S = Ln(t, S)));
      var N = n.getDerivedStateFromProps,
        T =
          typeof N == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      T ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || p !== S) && ks(t, u, r, S)),
        (Yt = !1);
      var P = t.memoizedState;
      (u.state = P),
        wl(t, r, u, l),
        (p = t.memoizedState),
        c !== r || P !== p || Xe.current || Yt
          ? (typeof N == "function" && (yi(t, n, N, r), (p = t.memoizedState)),
            (c = Yt || ws(t, n, c, r, P, p, S))
              ? (T ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (u.props = r),
            (u.state = p),
            (u.context = S),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Xa(e, t),
        (c = t.memoizedProps),
        (S = t.type === t.elementType ? c : mt(t.type, c)),
        (u.props = S),
        (T = t.pendingProps),
        (P = u.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = ut(p))
          : ((p = Ge(n) ? on : Be.current), (p = Ln(t, p)));
      var H = n.getDerivedStateFromProps;
      (N =
        typeof H == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== T || P !== p) && ks(t, u, r, p)),
        (Yt = !1),
        (P = t.memoizedState),
        (u.state = P),
        wl(t, r, u, l);
      var Q = t.memoizedState;
      c !== T || P !== Q || Xe.current || Yt
        ? (typeof H == "function" && (yi(t, n, H, r), (Q = t.memoizedState)),
          (S = Yt || ws(t, n, S, r, P, Q, p) || !1)
            ? (N ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, Q, p),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, Q, p)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (u.props = r),
          (u.state = Q),
          (u.context = p),
          (r = S))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return xi(e, t, n, r, o, l);
  }
  function xi(e, t, n, r, l, o) {
    zs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Da(t, n, !1), jt(e, t, o);
    (r = t.stateNode), (xd.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = In(t, e.child, null, o)), (t.child = In(t, null, c, o)))
        : Ke(e, t, c, o),
      (t.memoizedState = r.state),
      l && Da(t, n, !0),
      t.child
    );
  }
  function js(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Oa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oa(e, t.context, !1),
      oi(e, t.containerInfo);
  }
  function Is(e, t, n, r, l) {
    return jn(), Zo(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
  }
  var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ci(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Os(e, t, n) {
    var r = t.pendingProps,
      l = xe.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(xe, l & 1),
      e === null)
    )
      return (
        Jo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Al(u, r, 0, null)),
                (e = vn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Ci(n)),
                (t.memoizedState = Ei),
                e)
              : _i(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return Ed(e, t, u, r, c, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = en(l, p)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = en(c, o)) : ((o = vn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Ci(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ei),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = en(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function _i(e, t) {
    return (
      (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Rl(e, t, n, r) {
    return (
      r !== null && Zo(r),
      In(t, e.child, null, n),
      (e = _i(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ed(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = wi(Error(a(422)))), Rl(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
          (o = vn(o, l, u, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && In(t, e.child, null, u),
          (t.child.memoizedState = Ci(u)),
          (t.memoizedState = Ei),
          o);
    if (!(t.mode & 1)) return Rl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (o = Error(a(419))), (r = wi(o, r, void 0)), Rl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), qe || c)) {
      if (((r = je), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), zt(e, l), gt(r, e, l, -1));
      }
      return Bi(), (r = wi(Error(a(421)))), Rl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Fd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (rt = Wt(l.nextSibling)),
        (nt = t),
        (Se = !0),
        (ht = null),
        e !== null &&
          ((ot[it++] = Tt),
          (ot[it++] = Lt),
          (ot[it++] = un),
          (Tt = e.id),
          (Lt = e.overflow),
          (un = t)),
        (t = _i(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Fs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ni(e.return, t, n);
  }
  function Pi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Ds(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ke(e, t, r.children, n), (r = xe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
          else if (e.tag === 19) Fs(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ve(xe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Sl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Pi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Sl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Pi(t, !0, n, null, o);
          break;
        case "together":
          Pi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Cd(e, t, n) {
    switch (t.tag) {
      case 3:
        js(t), jn();
        break;
      case 5:
        Ja(t);
        break;
      case 1:
        Ge(t.type) && cl(t);
        break;
      case 4:
        oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ve(vl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(xe, xe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Os(e, t, n)
            : (ve(xe, xe.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null);
        ve(xe, xe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ds(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(xe, xe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ls(e, t, n);
    }
    return jt(e, t, n);
  }
  var $s, Ri, Us, As;
  ($s = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ri = function () {}),
    (Us = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), cn(Et.current);
        var o = null;
        switch (n) {
          case "input":
            (l = to(e, l)), (r = to(e, r)), (o = []);
            break;
          case "select":
            (l = V({}, l, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = lo(e, l)), (r = lo(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        io(n, r);
        var u;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var c = l[S];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (f.hasOwnProperty(S)
                  ? o || (o = [])
                  : (o = o || []).push(S, null));
        for (S in r) {
          var p = r[S];
          if (
            ((c = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && p !== c && (p != null || c != null))
          )
            if (S === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (p && p.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in p)
                  p.hasOwnProperty(u) &&
                    c[u] !== p[u] &&
                    (n || (n = {}), (n[u] = p[u]));
              } else n || (o || (o = []), o.push(S, n)), (n = p);
            else
              S === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (c = c ? c.__html : void 0),
                  p != null && c !== p && (o = o || []).push(S, p))
                : S === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (o = o || []).push(S, "" + p)
                : S !== "suppressContentEditableWarning" &&
                  S !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(S)
                    ? (p != null && S === "onScroll" && ye("scroll", e),
                      o || c === p || (o = []))
                    : (o = o || []).push(S, p));
        }
        n && (o = o || []).push("style", n);
        var S = o;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (As = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function _r(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function _d(e, t, n) {
    var r = t.pendingProps;
    switch ((Go(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(t), null;
      case 1:
        return Ge(t.type) && sl(), We(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          ge(Xe),
          ge(Be),
          ai(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ht !== null && ($i(ht), (ht = null)))),
          Ri(e, t),
          We(t),
          null
        );
      case 5:
        ii(t);
        var l = cn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Us(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return We(t), null;
          }
          if (((e = cn(Et.current)), hl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[xt] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ye("cancel", r), ye("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) ye(dr[l], r);
                break;
              case "source":
                ye("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", r), ye("load", r);
                break;
              case "details":
                ye("toggle", r);
                break;
              case "input":
                Su(r, o), ye("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ye("invalid", r);
                break;
              case "textarea":
                Eu(r, o), ye("invalid", r);
            }
            io(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var c = o[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    ye("scroll", r);
              }
            switch (n) {
              case "input":
                Dr(r), xu(r, o, !0);
                break;
              case "textarea":
                Dr(r), _u(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ul);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Pu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[xt] = t),
              (e[mr] = r),
              $s(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = uo(n, r)), n)) {
                case "dialog":
                  ye("cancel", e), ye("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < dr.length; l++) ye(dr[l], e);
                  l = r;
                  break;
                case "source":
                  ye("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ye("error", e), ye("load", e), (l = r);
                  break;
                case "details":
                  ye("toggle", e), (l = r);
                  break;
                case "input":
                  Su(e, r), (l = to(e, r)), ye("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = V({}, r, { value: void 0 })),
                    ye("invalid", e);
                  break;
                case "textarea":
                  Eu(e, r), (l = lo(e, r)), ye("invalid", e);
                  break;
                default:
                  l = r;
              }
              io(n, l), (c = l);
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var p = c[o];
                  o === "style"
                    ? Tu(e, p)
                    : o === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && Ru(e, p))
                    : o === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && Yn(e, p)
                      : typeof p == "number" && Yn(e, "" + p)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (f.hasOwnProperty(o)
                        ? p != null && o === "onScroll" && ye("scroll", e)
                        : p != null && b(e, o, p, u));
                }
              switch (n) {
                case "input":
                  Dr(e), xu(e, r, !1);
                  break;
                case "textarea":
                  Dr(e), _u(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + de(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? gn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        gn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return We(t), null;
      case 6:
        if (e && t.stateNode != null) As(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = cn(Sr.current)), cn(Et.current), hl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xt] = t),
              (o = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[xt] = t),
              (t.stateNode = r);
        }
        return We(t), null;
      case 13:
        if (
          (ge(xe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && rt !== null && t.mode & 1 && !(t.flags & 128))
            Wa(), jn(), (t.flags |= 98560), (o = !1);
          else if (((o = hl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[xt] = t;
            } else
              jn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (o = !1);
          } else ht !== null && ($i(ht), (ht = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || xe.current & 1 ? Le === 0 && (Le = 3) : Bi())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (
          Dn(),
          Ri(e, t),
          e === null && pr(t.stateNode.containerInfo),
          We(t),
          null
        );
      case 10:
        return ti(t.type._context), We(t), null;
      case 17:
        return Ge(t.type) && sl(), We(t), null;
      case 19:
        if ((ge(xe), (o = t.memoizedState), o === null)) return We(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) _r(o, !1);
          else {
            if (Le !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = Sl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      _r(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ve(xe, (xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Pe() > Bn &&
              ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Sl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                _r(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !Se)
              )
                return We(t), null;
            } else
              2 * Pe() - o.renderingStartTime > Bn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), _r(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Pe()),
            (t.sibling = null),
            (n = xe.current),
            ve(xe, r ? (n & 1) | 2 : n & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Ai(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? lt & 1073741824 &&
              (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Pd(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          ge(Xe),
          ge(Be),
          ai(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ii(t), null;
      case 13:
        if (
          (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          jn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ge(xe), null;
      case 4:
        return Dn(), null;
      case 10:
        return ti(t.type._context), null;
      case 22:
      case 23:
        return Ai(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tl = !1,
    Ve = !1,
    Rd = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function Ni(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var Bs = !1;
  function Nd(e, t) {
    if (((Ao = Gr), (e = wa()), Mo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              p = -1,
              S = 0,
              N = 0,
              T = e,
              P = null;
            t: for (;;) {
              for (
                var H;
                T !== n || (l !== 0 && T.nodeType !== 3) || (c = u + l),
                  T !== o || (r !== 0 && T.nodeType !== 3) || (p = u + r),
                  T.nodeType === 3 && (u += T.nodeValue.length),
                  (H = T.firstChild) !== null;

              )
                (P = T), (T = H);
              for (;;) {
                if (T === e) break t;
                if (
                  (P === n && ++S === l && (c = u),
                  P === o && ++N === r && (p = u),
                  (H = T.nextSibling) !== null)
                )
                  break;
                (T = P), (P = T.parentNode);
              }
              T = H;
            }
            n = c === -1 || p === -1 ? null : { start: c, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Bo = { focusedElem: e, selectionRange: n }, Gr = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var K = Q.memoizedProps,
                      Re = Q.memoizedState,
                      y = t.stateNode,
                      h = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : mt(t.type, K),
                        Re
                      );
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (M) {
            _e(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return (Q = Bs), (Bs = !1), Q;
  }
  function Pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ni(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ll(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ti(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Hs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[xt],
          delete t[mr],
          delete t[Qo],
          delete t[cd],
          delete t[fd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ws(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ws(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; )
        Li(e, t, n), (e = e.sibling);
  }
  function zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (zi(e, t, n), e = e.sibling; e !== null; )
        zi(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    vt = !1;
  function Gt(e, t, n) {
    for (n = n.child; n !== null; ) Qs(e, t, n), (n = n.sibling);
  }
  function Qs(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(Wr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Un(n, t);
      case 6:
        var r = Oe,
          l = vt;
        (Oe = null),
          Gt(e, t, n),
          (Oe = r),
          (vt = l),
          Oe !== null &&
            (vt
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (vt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Vo(e.parentNode, n)
                : e.nodeType === 1 && Vo(e, n),
              lr(e))
            : Vo(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = vt),
          (Oe = n.stateNode.containerInfo),
          (vt = !0),
          Gt(e, t, n),
          (Oe = r),
          (vt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && Ni(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Gt(e, t, n);
        break;
      case 1:
        if (
          !Ve &&
          (Un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            _e(n, t, c);
          }
        Gt(e, t, n);
        break;
      case 21:
        Gt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ve = (r = Ve) || n.memoizedState !== null), Gt(e, t, n), (Ve = r))
          : Gt(e, t, n);
        break;
      default:
        Gt(e, t, n);
    }
  }
  function Ks(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rd()),
        t.forEach(function (r) {
          var l = Dd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (Oe = c.stateNode), (vt = !1);
                break e;
              case 3:
                (Oe = c.stateNode.containerInfo), (vt = !0);
                break e;
              case 4:
                (Oe = c.stateNode.containerInfo), (vt = !0);
                break e;
            }
            c = c.return;
          }
          if (Oe === null) throw Error(a(160));
          Qs(o, u, l), (Oe = null), (vt = !1);
          var p = l.alternate;
          p !== null && (p.return = null), (l.return = null);
        } catch (S) {
          _e(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ys(t, e), (t = t.sibling);
  }
  function Ys(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((yt(t, e), _t(e), r & 4)) {
          try {
            Pr(3, e, e.return), Ll(3, e);
          } catch (K) {
            _e(e, e.return, K);
          }
          try {
            Pr(5, e, e.return);
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        break;
      case 1:
        yt(t, e), _t(e), r & 512 && n !== null && Un(n, n.return);
        break;
      case 5:
        if (
          (yt(t, e),
          _t(e),
          r & 512 && n !== null && Un(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Yn(l, "");
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            c = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              c === "input" && o.type === "radio" && o.name != null && ku(l, o),
                uo(c, u);
              var S = uo(c, o);
              for (u = 0; u < p.length; u += 2) {
                var N = p[u],
                  T = p[u + 1];
                N === "style"
                  ? Tu(l, T)
                  : N === "dangerouslySetInnerHTML"
                  ? Ru(l, T)
                  : N === "children"
                  ? Yn(l, T)
                  : b(l, N, T, S);
              }
              switch (c) {
                case "input":
                  no(l, o);
                  break;
                case "textarea":
                  Cu(l, o);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var H = o.value;
                  H != null
                    ? gn(l, !!o.multiple, H, !1)
                    : P !== !!o.multiple &&
                      (o.defaultValue != null
                        ? gn(l, !!o.multiple, o.defaultValue, !0)
                        : gn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[mr] = o;
            } catch (K) {
              _e(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((yt(t, e), _t(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (yt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            lr(t.containerInfo);
          } catch (K) {
            _e(e, e.return, K);
          }
        break;
      case 4:
        yt(t, e), _t(e);
        break;
      case 13:
        yt(t, e),
          _t(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ii = Pe())),
          r & 4 && Ks(e);
        break;
      case 22:
        if (
          ((N = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (S = Ve) || N), yt(t, e), (Ve = S)) : yt(t, e),
          _t(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !N && e.mode & 1)
          )
            for (W = e, N = e.child; N !== null; ) {
              for (T = W = N; W !== null; ) {
                switch (((P = W), (H = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pr(4, P, P.return);
                    break;
                  case 1:
                    Un(P, P.return);
                    var Q = P.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount();
                      } catch (K) {
                        _e(r, n, K);
                      }
                    }
                    break;
                  case 5:
                    Un(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      qs(T);
                      continue;
                    }
                }
                H !== null ? ((H.return = P), (W = H)) : qs(T);
              }
              N = N.sibling;
            }
          e: for (N = null, T = e; ; ) {
            if (T.tag === 5) {
              if (N === null) {
                N = T;
                try {
                  (l = T.stateNode),
                    S
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = T.stateNode),
                        (p = T.memoizedProps.style),
                        (u =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (c.style.display = Nu("display", u)));
                } catch (K) {
                  _e(e, e.return, K);
                }
              }
            } else if (T.tag === 6) {
              if (N === null)
                try {
                  T.stateNode.nodeValue = S ? "" : T.memoizedProps;
                } catch (K) {
                  _e(e, e.return, K);
                }
            } else if (
              ((T.tag !== 22 && T.tag !== 23) ||
                T.memoizedState === null ||
                T === e) &&
              T.child !== null
            ) {
              (T.child.return = T), (T = T.child);
              continue;
            }
            if (T === e) break e;
            for (; T.sibling === null; ) {
              if (T.return === null || T.return === e) break e;
              N === T && (N = null), (T = T.return);
            }
            N === T && (N = null),
              (T.sibling.return = T.return),
              (T = T.sibling);
          }
        }
        break;
      case 19:
        yt(t, e), _t(e), r & 4 && Ks(e);
        break;
      case 21:
        break;
      default:
        yt(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ws(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
            var o = Vs(e);
            zi(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = Vs(e);
            Li(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (p) {
        _e(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Td(e, t, n) {
    (W = e), Xs(e);
  }
  function Xs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var l = W,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Tl;
        if (!u) {
          var c = l.alternate,
            p = (c !== null && c.memoizedState !== null) || Ve;
          c = Tl;
          var S = Ve;
          if (((Tl = u), (Ve = p) && !S))
            for (W = l; W !== null; )
              (u = W),
                (p = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Js(l)
                  : p !== null
                  ? ((p.return = u), (W = p))
                  : Js(l);
          for (; o !== null; ) (W = o), Xs(o), (o = o.sibling);
          (W = l), (Tl = c), (Ve = S);
        }
        Gs(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (W = o)) : Gs(e);
    }
  }
  function Gs(e) {
    for (; W !== null; ) {
      var t = W;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Ll(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && qa(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  qa(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var S = t.alternate;
                  if (S !== null) {
                    var N = S.memoizedState;
                    if (N !== null) {
                      var T = N.dehydrated;
                      T !== null && lr(T);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          Ve || (t.flags & 512 && Ti(t));
        } catch (P) {
          _e(t, t.return, P);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function qs(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Js(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ll(4, t);
            } catch (p) {
              _e(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                _e(t, l, p);
              }
            }
            var o = t.return;
            try {
              Ti(t);
            } catch (p) {
              _e(t, o, p);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Ti(t);
            } catch (p) {
              _e(t, u, p);
            }
        }
      } catch (p) {
        _e(t, t.return, p);
      }
      if (t === e) {
        W = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (W = c);
        break;
      }
      W = t.return;
    }
  }
  var Ld = Math.ceil,
    zl = le.ReactCurrentDispatcher,
    Mi = le.ReactCurrentOwner,
    st = le.ReactCurrentBatchConfig,
    ue = 0,
    je = null,
    Ne = null,
    Fe = 0,
    lt = 0,
    An = Vt(0),
    Le = 0,
    Rr = null,
    dn = 0,
    Ml = 0,
    ji = 0,
    Nr = null,
    Je = null,
    Ii = 0,
    Bn = 1 / 0,
    It = null,
    jl = !1,
    Oi = null,
    qt = null,
    Il = !1,
    Jt = null,
    Ol = 0,
    Tr = 0,
    Fi = null,
    Fl = -1,
    Dl = 0;
  function Ye() {
    return ue & 6 ? Pe() : Fl !== -1 ? Fl : (Fl = Pe());
  }
  function Zt(e) {
    return e.mode & 1
      ? ue & 2 && Fe !== 0
        ? Fe & -Fe
        : pd.transition !== null
        ? (Dl === 0 && (Dl = Vu()), Dl)
        : ((e = pe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bu(e.type))),
          e)
      : 1;
  }
  function gt(e, t, n, r) {
    if (50 < Tr) throw ((Tr = 0), (Fi = null), Error(a(185)));
    bn(e, n, r),
      (!(ue & 2) || e !== je) &&
        (e === je && (!(ue & 2) && (Ml |= n), Le === 4 && bt(e, Fe)),
        Ze(e, r),
        n === 1 &&
          ue === 0 &&
          !(t.mode & 1) &&
          ((Bn = Pe() + 500), fl && Kt()));
  }
  function Ze(e, t) {
    var n = e.callbackNode;
    pf(e, t);
    var r = Kr(e, e === je ? Fe : 0);
    if (r === 0)
      n !== null && Bu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bu(n), t === 1))
        e.tag === 0 ? dd(bs.bind(null, e)) : $a(bs.bind(null, e)),
          ad(function () {
            !(ue & 6) && Kt();
          }),
          (n = null);
      else {
        switch (Qu(r)) {
          case 1:
            n = mo;
            break;
          case 4:
            n = Hu;
            break;
          case 16:
            n = Hr;
            break;
          case 536870912:
            n = Wu;
            break;
          default:
            n = Hr;
        }
        n = uc(n, Zs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Zs(e, t) {
    if (((Fl = -1), (Dl = 0), ue & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Kr(e, e === je ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = $l(e, r);
    else {
      t = r;
      var l = ue;
      ue |= 2;
      var o = tc();
      (je !== e || Fe !== t) && ((It = null), (Bn = Pe() + 500), hn(e, t));
      do
        try {
          jd();
          break;
        } catch (c) {
          ec(e, c);
        }
      while (!0);
      ei(),
        (zl.current = o),
        (ue = l),
        Ne !== null ? (t = 0) : ((je = null), (Fe = 0), (t = Le));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = vo(e)), l !== 0 && ((r = l), (t = Di(e, l)))),
        t === 1)
      )
        throw ((n = Rr), hn(e, 0), bt(e, r), Ze(e, Pe()), n);
      if (t === 6) bt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !zd(l) &&
            ((t = $l(e, r)),
            t === 2 && ((o = vo(e)), o !== 0 && ((r = o), (t = Di(e, o)))),
            t === 1))
        )
          throw ((n = Rr), hn(e, 0), bt(e, r), Ze(e, Pe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            mn(e, Je, It);
            break;
          case 3:
            if (
              (bt(e, r),
              (r & 130023424) === r && ((t = Ii + 500 - Pe()), 10 < t))
            ) {
              if (Kr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Wo(mn.bind(null, e, Je, It), t);
              break;
            }
            mn(e, Je, It);
            break;
          case 4:
            if ((bt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - dt(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Pe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Ld(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Wo(mn.bind(null, e, Je, It), r);
              break;
            }
            mn(e, Je, It);
            break;
          case 5:
            mn(e, Je, It);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ze(e, Pe()), e.callbackNode === n ? Zs.bind(null, e) : null;
  }
  function Di(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
      (e = $l(e, t)),
      e !== 2 && ((t = Je), (Je = n), t !== null && $i(t)),
      e
    );
  }
  function $i(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
  }
  function zd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function bt(e, t) {
    for (
      t &= ~ji,
        t &= ~Ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function bs(e) {
    if (ue & 6) throw Error(a(327));
    Hn();
    var t = Kr(e, 0);
    if (!(t & 1)) return Ze(e, Pe()), null;
    var n = $l(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = vo(e);
      r !== 0 && ((t = r), (n = Di(e, r)));
    }
    if (n === 1) throw ((n = Rr), hn(e, 0), bt(e, t), Ze(e, Pe()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mn(e, Je, It),
      Ze(e, Pe()),
      null
    );
  }
  function Ui(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      (ue = n), ue === 0 && ((Bn = Pe() + 500), fl && Kt());
    }
  }
  function pn(e) {
    Jt !== null && Jt.tag === 0 && !(ue & 6) && Hn();
    var t = ue;
    ue |= 1;
    var n = st.transition,
      r = pe;
    try {
      if (((st.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (st.transition = n), (ue = t), !(ue & 6) && Kt();
    }
  }
  function Ai() {
    (lt = An.current), ge(An);
  }
  function hn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ud(n)), Ne !== null))
      for (n = Ne.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && sl();
            break;
          case 3:
            Dn(), ge(Xe), ge(Be), ai();
            break;
          case 5:
            ii(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            ge(xe);
            break;
          case 19:
            ge(xe);
            break;
          case 10:
            ti(r.type._context);
            break;
          case 22:
          case 23:
            Ai();
        }
        n = n.return;
      }
    if (
      ((je = e),
      (Ne = e = en(e.current, null)),
      (Fe = lt = t),
      (Le = 0),
      (Rr = null),
      (ji = Ml = dn = 0),
      (Je = Nr = null),
      sn !== null)
    ) {
      for (t = 0; t < sn.length; t++)
        if (((n = sn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      sn = null;
    }
    return e;
  }
  function ec(e, t) {
    do {
      var n = Ne;
      try {
        if ((ei(), (kl.current = _l), xl)) {
          for (var r = Ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          xl = !1;
        }
        if (
          ((fn = 0),
          (Me = Te = Ee = null),
          (kr = !1),
          (xr = 0),
          (Mi.current = null),
          n === null || n.return === null)
        ) {
          (Le = 1), (Rr = t), (Ne = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            c = n,
            p = t;
          if (
            ((t = Fe),
            (c.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var S = p,
              N = c,
              T = N.tag;
            if (!(N.mode & 1) && (T === 0 || T === 11 || T === 15)) {
              var P = N.alternate;
              P
                ? ((N.updateQueue = P.updateQueue),
                  (N.memoizedState = P.memoizedState),
                  (N.lanes = P.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var H = _s(u);
            if (H !== null) {
              (H.flags &= -257),
                Ps(H, u, c, o, t),
                H.mode & 1 && Cs(o, S, t),
                (t = H),
                (p = S);
              var Q = t.updateQueue;
              if (Q === null) {
                var K = new Set();
                K.add(p), (t.updateQueue = K);
              } else Q.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                Cs(o, S, t), Bi();
                break e;
              }
              p = Error(a(426));
            }
          } else if (Se && c.mode & 1) {
            var Re = _s(u);
            if (Re !== null) {
              !(Re.flags & 65536) && (Re.flags |= 256),
                Ps(Re, u, c, o, t),
                Zo($n(p, c));
              break e;
            }
          }
          (o = p = $n(p, c)),
            Le !== 4 && (Le = 2),
            Nr === null ? (Nr = [o]) : Nr.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = xs(o, p, t);
                Ga(o, y);
                break e;
              case 1:
                c = p;
                var h = o.type,
                  g = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (qt === null || !qt.has(g))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var M = Es(o, c, t);
                  Ga(o, M);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        rc(n);
      } catch (Y) {
        (t = Y), Ne === n && n !== null && (Ne = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = zl.current;
    return (zl.current = _l), e === null ? _l : e;
  }
  function Bi() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      je === null || (!(dn & 268435455) && !(Ml & 268435455)) || bt(je, Fe);
  }
  function $l(e, t) {
    var n = ue;
    ue |= 2;
    var r = tc();
    (je !== e || Fe !== t) && ((It = null), hn(e, t));
    do
      try {
        Md();
        break;
      } catch (l) {
        ec(e, l);
      }
    while (!0);
    if ((ei(), (ue = n), (zl.current = r), Ne !== null)) throw Error(a(261));
    return (je = null), (Fe = 0), Le;
  }
  function Md() {
    for (; Ne !== null; ) nc(Ne);
  }
  function jd() {
    for (; Ne !== null && !rf(); ) nc(Ne);
  }
  function nc(e) {
    var t = ic(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? rc(e) : (Ne = t),
      (Mi.current = null);
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Pd(n, t)), n !== null)) {
          (n.flags &= 32767), (Ne = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Le = 6), (Ne = null);
          return;
        }
      } else if (((n = _d(n, t, lt)), n !== null)) {
        Ne = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function mn(e, t, n) {
    var r = pe,
      l = st.transition;
    try {
      (st.transition = null), (pe = 1), Id(e, t, n, r);
    } finally {
      (st.transition = l), (pe = r);
    }
    return null;
  }
  function Id(e, t, n, r) {
    do Hn();
    while (Jt !== null);
    if (ue & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (hf(e, o),
      e === je && ((Ne = je = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Il ||
        ((Il = !0),
        uc(Hr, function () {
          return Hn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = st.transition), (st.transition = null);
      var u = pe;
      pe = 1;
      var c = ue;
      (ue |= 4),
        (Mi.current = null),
        Nd(e, n),
        Ys(n, e),
        ed(Bo),
        (Gr = !!Ao),
        (Bo = Ao = null),
        (e.current = n),
        Td(n),
        lf(),
        (ue = c),
        (pe = u),
        (st.transition = o);
    } else e.current = n;
    if (
      (Il && ((Il = !1), (Jt = e), (Ol = l)),
      (o = e.pendingLanes),
      o === 0 && (qt = null),
      af(n.stateNode),
      Ze(e, Pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (jl) throw ((jl = !1), (e = Oi), (Oi = null), e);
    return (
      Ol & 1 && e.tag !== 0 && Hn(),
      (o = e.pendingLanes),
      o & 1 ? (e === Fi ? Tr++ : ((Tr = 0), (Fi = e))) : (Tr = 0),
      Kt(),
      null
    );
  }
  function Hn() {
    if (Jt !== null) {
      var e = Qu(Ol),
        t = st.transition,
        n = pe;
      try {
        if (((st.transition = null), (pe = 16 > e ? 16 : e), Jt === null))
          var r = !1;
        else {
          if (((e = Jt), (Jt = null), (Ol = 0), ue & 6)) throw Error(a(331));
          var l = ue;
          for (ue |= 4, W = e.current; W !== null; ) {
            var o = W,
              u = o.child;
            if (W.flags & 16) {
              var c = o.deletions;
              if (c !== null) {
                for (var p = 0; p < c.length; p++) {
                  var S = c[p];
                  for (W = S; W !== null; ) {
                    var N = W;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pr(8, N, o);
                    }
                    var T = N.child;
                    if (T !== null) (T.return = N), (W = T);
                    else
                      for (; W !== null; ) {
                        N = W;
                        var P = N.sibling,
                          H = N.return;
                        if ((Hs(N), N === S)) {
                          W = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = H), (W = P);
                          break;
                        }
                        W = H;
                      }
                  }
                }
                var Q = o.alternate;
                if (Q !== null) {
                  var K = Q.child;
                  if (K !== null) {
                    Q.child = null;
                    do {
                      var Re = K.sibling;
                      (K.sibling = null), (K = Re);
                    } while (K !== null);
                  }
                }
                W = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (W = u);
            else
              e: for (; W !== null; ) {
                if (((o = W), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  (y.return = o.return), (W = y);
                  break e;
                }
                W = o.return;
              }
          }
          var h = e.current;
          for (W = h; W !== null; ) {
            u = W;
            var g = u.child;
            if (u.subtreeFlags & 2064 && g !== null) (g.return = u), (W = g);
            else
              e: for (u = h; W !== null; ) {
                if (((c = W), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ll(9, c);
                    }
                  } catch (Y) {
                    _e(c, c.return, Y);
                  }
                if (c === u) {
                  W = null;
                  break e;
                }
                var M = c.sibling;
                if (M !== null) {
                  (M.return = c.return), (W = M);
                  break e;
                }
                W = c.return;
              }
          }
          if (
            ((ue = l),
            Kt(),
            kt && typeof kt.onPostCommitFiberRoot == "function")
          )
            try {
              kt.onPostCommitFiberRoot(Wr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (pe = n), (st.transition = t);
      }
    }
    return !1;
  }
  function lc(e, t, n) {
    (t = $n(n, t)),
      (t = xs(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Ye()),
      e !== null && (bn(e, 1, t), Ze(e, t));
  }
  function _e(e, t, n) {
    if (e.tag === 3) lc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (qt === null || !qt.has(r)))
          ) {
            (e = $n(n, e)),
              (e = Es(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Ye()),
              t !== null && (bn(t, 1, e), Ze(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Od(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      je === e &&
        (Fe & n) === n &&
        (Le === 4 || (Le === 3 && (Fe & 130023424) === Fe && 500 > Pe() - Ii)
          ? hn(e, 0)
          : (ji |= n)),
      Ze(e, t);
  }
  function oc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
        : (t = 1));
    var n = Ye();
    (e = zt(e, t)), e !== null && (bn(e, t, n), Ze(e, n));
  }
  function Fd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), oc(e, n);
  }
  function Dd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), oc(e, n);
  }
  var ic;
  ic = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Cd(e, t, n);
        qe = !!(e.flags & 131072);
      }
    else (qe = !1), Se && t.flags & 1048576 && Ua(t, pl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Nl(e, t), (e = t.pendingProps);
        var l = Ln(t, Be.current);
        Fn(t, n), (l = fi(null, t, r, e, l, n));
        var o = di();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((o = !0), cl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              li(t),
              (l.updater = Pl),
              (t.stateNode = l),
              (l._reactInternals = t),
              gi(t, r, e, n),
              (t = xi(null, t, r, !0, o, n)))
            : ((t.tag = 0), Se && o && Xo(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ud(r)),
            (e = mt(r, e)),
            l)
          ) {
            case 0:
              t = ki(null, t, r, e, n);
              break e;
            case 1:
              t = Ms(null, t, r, e, n);
              break e;
            case 11:
              t = Rs(null, t, r, e, n);
              break e;
            case 14:
              t = Ns(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          ki(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Ms(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((js(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Xa(e, t),
            wl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = $n(Error(a(423)), t)), (t = Is(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = $n(Error(a(424)), t)), (t = Is(e, t, r, n, l));
              break e;
            } else
              for (
                rt = Wt(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  Se = !0,
                  ht = null,
                  n = Ka(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((jn(), r === l)) {
              t = jt(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ja(t),
          e === null && Jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Ho(r, l) ? (u = null) : o !== null && Ho(r, o) && (t.flags |= 32),
          zs(e, t),
          Ke(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Jo(t), null;
      case 13:
        return Os(e, t, n);
      case 4:
        return (
          oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = In(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Rs(e, t, r, l, n)
        );
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            ve(vl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (pt(o.value, u)) {
              if (o.children === l.children && !Xe.current) {
                t = jt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  u = o.child;
                  for (var p = c.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (o.tag === 1) {
                        (p = Mt(-1, n & -n)), (p.tag = 2);
                        var S = o.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var N = S.pending;
                          N === null
                            ? (p.next = p)
                            : ((p.next = N.next), (N.next = p)),
                            (S.pending = p);
                        }
                      }
                      (o.lanes |= n),
                        (p = o.alternate),
                        p !== null && (p.lanes |= n),
                        ni(o.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    ni(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Ke(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Fn(t, n),
          (l = ut(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = mt(r, t.pendingProps)),
          (l = mt(r.type, l)),
          Ns(e, t, r, l, n)
        );
      case 15:
        return Ts(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Nl(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), cl(t)) : (e = !1),
          Fn(t, n),
          Ss(t, r, l),
          gi(t, r, l, n),
          xi(null, t, r, !0, e, n)
        );
      case 19:
        return Ds(e, t, n);
      case 22:
        return Ls(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function uc(e, t) {
    return Au(e, t);
  }
  function $d(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(e, t, n, r) {
    return new $d(e, t, n, r);
  }
  function Hi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ud(e) {
    if (typeof e == "function") return Hi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ze)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ct(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ul(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) Hi(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case X:
          return vn(n.children, l, o, t);
        case ee:
          (u = 8), (l |= 8);
          break;
        case ie:
          return (
            (e = ct(12, n, t, l | 2)), (e.elementType = ie), (e.lanes = o), e
          );
        case Ue:
          return (e = ct(13, n, t, l)), (e.elementType = Ue), (e.lanes = o), e;
        case Qe:
          return (e = ct(19, n, t, l)), (e.elementType = Qe), (e.lanes = o), e;
        case Ce:
          return Al(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                u = 10;
                break e;
              case he:
                u = 9;
                break e;
              case ze:
                u = 11;
                break e;
              case ft:
                u = 14;
                break e;
              case Ae:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ct(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function vn(e, t, n, r) {
    return (e = ct(7, e, r, t)), (e.lanes = n), e;
  }
  function Al(e, t, n, r) {
    return (
      (e = ct(22, e, r, t)),
      (e.elementType = Ce),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wi(e, t, n) {
    return (e = ct(6, e, null, t)), (e.lanes = n), e;
  }
  function Vi(e, t, n) {
    return (
      (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ad(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = yo(0)),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Qi(e, t, n, r, l, o, u, c, p) {
    return (
      (e = new Ad(e, t, n, c, p)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ct(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      li(o),
      e
    );
  }
  function Bd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ac(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (rn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return Fa(e, n, t);
    }
    return t;
  }
  function sc(e, t, n, r, l, o, u, c, p) {
    return (
      (e = Qi(n, r, !0, e, l, o, u, c, p)),
      (e.context = ac(null)),
      (n = e.current),
      (r = Ye()),
      (l = Zt(n)),
      (o = Mt(r, l)),
      (o.callback = t ?? null),
      Xt(n, o, l),
      (e.current.lanes = l),
      bn(e, l, r),
      Ze(e, r),
      e
    );
  }
  function Bl(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      u = Zt(l);
    return (
      (n = ac(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, u)),
      e !== null && (gt(e, l, u, o), gl(e, l, u)),
      u
    );
  }
  function Hl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ki(e, t) {
    cc(e, t), (e = e.alternate) && cc(e, t);
  }
  var fc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yi(e) {
    this._internalRoot = e;
  }
  (Wl.prototype.render = Yi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Bl(e, t, null, null);
    }),
    (Wl.prototype.unmount = Yi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          pn(function () {
            Bl(null, e, null, null);
          }),
            (t[Rt] = null);
        }
      });
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Xu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
      At.splice(n, 0, e), n === 0 && Ju(e);
    }
  };
  function Xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Vl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function dc() {}
  function Hd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var S = Hl(u);
          o.call(S);
        };
      }
      var u = sc(t, r, e, 0, null, !1, !1, "", dc);
      return (
        (e._reactRootContainer = u),
        (e[Rt] = u.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        pn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var S = Hl(p);
        c.call(S);
      };
    }
    var p = Qi(e, 0, !1, null, null, !1, !1, "", dc);
    return (
      (e._reactRootContainer = p),
      (e[Rt] = p.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      pn(function () {
        Bl(t, p, n, r);
      }),
      p
    );
  }
  function Ql(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var p = Hl(u);
          c.call(p);
        };
      }
      Bl(t, u, e, l);
    } else u = Hd(n, t, e, l, r);
    return Hl(u);
  }
  (Ku = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zn(t.pendingLanes);
          n !== 0 &&
            (go(t, n | 1), Ze(t, Pe()), !(ue & 6) && ((Bn = Pe() + 500), Kt()));
        }
        break;
      case 13:
        pn(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ye();
            gt(r, e, 1, l);
          }
        }),
          Ki(e, 1);
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          gt(t, e, 134217728, n);
        }
        Ki(e, 134217728);
      }
    }),
    (Yu = function (e) {
      if (e.tag === 13) {
        var t = Zt(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ye();
          gt(n, e, t, r);
        }
        Ki(e, t);
      }
    }),
    (Xu = function () {
      return pe;
    }),
    (Gu = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (co = function (e, t, n) {
      switch (t) {
        case "input":
          if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = al(r);
                if (!l) throw Error(a(90));
                wu(r), no(r, l);
              }
            }
          }
          break;
        case "textarea":
          Cu(e, n);
          break;
        case "select":
          (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
      }
    }),
    (ju = Ui),
    (Iu = pn);
  var Wd = { usingClientEntryPoint: !1, Events: [vr, Nn, al, zu, Mu, Ui] },
    Lr = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Vd = {
      bundleType: Lr.bundleType,
      version: Lr.version,
      rendererPackageName: Lr.rendererPackageName,
      rendererConfig: Lr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: le.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $u(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Lr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        (Wr = Kl.inject(Vd)), (kt = Kl);
      } catch {}
  }
  return (
    (be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd),
    (be.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xi(t)) throw Error(a(200));
      return Bd(e, t, null, n);
    }),
    (be.createRoot = function (e, t) {
      if (!Xi(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = fc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Qi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Rt] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Yi(t)
      );
    }),
    (be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = $u(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (be.flushSync = function (e) {
      return pn(e);
    }),
    (be.hydrate = function (e, t, n) {
      if (!Vl(t)) throw Error(a(200));
      return Ql(null, e, t, !0, n);
    }),
    (be.hydrateRoot = function (e, t, n) {
      if (!Xi(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = fc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = sc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Rt] = t.current),
        pr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Wl(t);
    }),
    (be.render = function (e, t, n) {
      if (!Vl(t)) throw Error(a(200));
      return Ql(null, e, t, !1, n);
    }),
    (be.unmountComponentAtNode = function (e) {
      if (!Vl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (pn(function () {
            Ql(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Rt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (be.unstable_batchedUpdates = Ui),
    (be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Vl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Ql(e, t, n, !1, r);
    }),
    (be.version = "18.3.1-next-f1338f8080-20240426"),
    be
  );
}
var Sc;
function bd() {
  if (Sc) return Ji.exports;
  Sc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Ji.exports = Zd()), Ji.exports;
}
var kc;
function ep() {
  if (kc) return Yl;
  kc = 1;
  var i = bd();
  return (Yl.createRoot = i.createRoot), (Yl.hydrateRoot = i.hydrateRoot), Yl;
}
var tp = ep(),
  Mr = {},
  xc;
function np() {
  if (xc) return Mr;
  (xc = 1),
    Object.defineProperty(Mr, "__esModule", { value: !0 }),
    (Mr.parse = x),
    (Mr.serialize = k);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    d = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const _ = function () {};
      return (_.prototype = Object.create(null)), _;
    })();
  function x(_, D) {
    const z = new m(),
      $ = _.length;
    if ($ < 2) return z;
    const O = (D == null ? void 0 : D.decode) || L;
    let F = 0;
    do {
      const A = _.indexOf("=", F);
      if (A === -1) break;
      const b = _.indexOf(";", F),
        le = b === -1 ? $ : b;
      if (A > le) {
        F = _.lastIndexOf(";", A - 1) + 1;
        continue;
      }
      const fe = E(_, F, A),
        B = w(_, A, fe),
        X = _.slice(fe, B);
      if (z[X] === void 0) {
        let ee = E(_, A + 1, le),
          ie = w(_, le, ee);
        const te = O(_.slice(ee, ie));
        z[X] = te;
      }
      F = le + 1;
    } while (F < $);
    return z;
  }
  function E(_, D, z) {
    do {
      const $ = _.charCodeAt(D);
      if ($ !== 32 && $ !== 9) return D;
    } while (++D < z);
    return z;
  }
  function w(_, D, z) {
    for (; D > z; ) {
      const $ = _.charCodeAt(--D);
      if ($ !== 32 && $ !== 9) return D + 1;
    }
    return z;
  }
  function k(_, D, z) {
    const $ = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(_)) throw new TypeError(`argument name is invalid: ${_}`);
    const O = $(D);
    if (!s.test(O)) throw new TypeError(`argument val is invalid: ${D}`);
    let F = _ + "=" + O;
    if (!z) return F;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      F += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!a.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      F += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!d.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      F += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!j(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      F += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (F += "; HttpOnly"),
      z.secure && (F += "; Secure"),
      z.partitioned && (F += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          F += "; Priority=Low";
          break;
        case "medium":
          F += "; Priority=Medium";
          break;
        case "high":
          F += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          F += "; SameSite=Strict";
          break;
        case "lax":
          F += "; SameSite=Lax";
          break;
        case "none":
          F += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return F;
  }
  function L(_) {
    if (_.indexOf("%") === -1) return _;
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }
  function j(_) {
    return f.call(_) === "[object Date]";
  }
  return Mr;
}
np();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ec = "popstate";
function rp(i = {}) {
  function s(d, f) {
    let { pathname: m, search: x, hash: E } = d.location;
    return iu(
      "",
      { pathname: m, search: x, hash: E },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(d, f) {
    return typeof f == "string" ? f : Ir(f);
  }
  return op(s, a, null, i);
}
function ke(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function wt(i, s) {
  if (!i) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function lp() {
  return Math.random().toString(36).substring(2, 10);
}
function Cc(i, s) {
  return { usr: i.state, key: i.key, idx: s };
}
function iu(i, s, a = null, d) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Wn(s) : s),
    state: a,
    key: (s && s.key) || d || lp(),
  };
}
function Ir({ pathname: i = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function Wn(i) {
  let s = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((s.hash = i.substring(a)), (i = i.substring(0, a)));
    let d = i.indexOf("?");
    d >= 0 && ((s.search = i.substring(d)), (i = i.substring(0, d))),
      i && (s.pathname = i);
  }
  return s;
}
function op(i, s, a, d = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = d,
    x = f.history,
    E = "POP",
    w = null,
    k = L();
  k == null && ((k = 0), x.replaceState({ ...x.state, idx: k }, ""));
  function L() {
    return (x.state || { idx: null }).idx;
  }
  function j() {
    E = "POP";
    let O = L(),
      F = O == null ? null : O - k;
    (k = O), w && w({ action: E, location: $.location, delta: F });
  }
  function _(O, F) {
    E = "PUSH";
    let A = iu($.location, O, F);
    k = L() + 1;
    let b = Cc(A, k),
      le = $.createHref(A);
    try {
      x.pushState(b, "", le);
    } catch (fe) {
      if (fe instanceof DOMException && fe.name === "DataCloneError") throw fe;
      f.location.assign(le);
    }
    m && w && w({ action: E, location: $.location, delta: 1 });
  }
  function D(O, F) {
    E = "REPLACE";
    let A = iu($.location, O, F);
    k = L();
    let b = Cc(A, k),
      le = $.createHref(A);
    x.replaceState(b, "", le),
      m && w && w({ action: E, location: $.location, delta: 0 });
  }
  function z(O) {
    let F = f.location.origin !== "null" ? f.location.origin : f.location.href,
      A = typeof O == "string" ? O : Ir(O);
    return (
      (A = A.replace(/ $/, "%20")),
      ke(
        F,
        `No window.location.(origin|href) available to create URL for href: ${A}`
      ),
      new URL(A, F)
    );
  }
  let $ = {
    get action() {
      return E;
    },
    get location() {
      return i(f, x);
    },
    listen(O) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Ec, j),
        (w = O),
        () => {
          f.removeEventListener(Ec, j), (w = null);
        }
      );
    },
    createHref(O) {
      return s(f, O);
    },
    createURL: z,
    encodeLocation(O) {
      let F = z(O);
      return { pathname: F.pathname, search: F.search, hash: F.hash };
    },
    push: _,
    replace: D,
    go(O) {
      return x.go(O);
    },
  };
  return $;
}
function zc(i, s, a = "/") {
  return ip(i, s, a, !1);
}
function ip(i, s, a, d) {
  let f = typeof s == "string" ? Wn(s) : s,
    m = nn(f.pathname || "/", a);
  if (m == null) return null;
  let x = Mc(i);
  up(x);
  let E = null;
  for (let w = 0; E == null && w < x.length; ++w) {
    let k = gp(m);
    E = vp(x[w], k, d);
  }
  return E;
}
function Mc(i, s = [], a = [], d = "") {
  let f = (m, x, E) => {
    let w = {
      relativePath: E === void 0 ? m.path || "" : E,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: x,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (ke(
        w.relativePath.startsWith(d),
        `Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(d.length)));
    let k = Ot([d, w.relativePath]),
      L = a.concat(w);
    m.children &&
      m.children.length > 0 &&
      (ke(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`
      ),
      Mc(m.children, s, L, k)),
      !(m.path == null && !m.index) &&
        s.push({ path: k, score: hp(k, m.index), routesMeta: L });
  };
  return (
    i.forEach((m, x) => {
      var E;
      if (m.path === "" || !((E = m.path) != null && E.includes("?"))) f(m, x);
      else for (let w of jc(m.path)) f(m, x, w);
    }),
    s
  );
}
function jc(i) {
  let s = i.split("/");
  if (s.length === 0) return [];
  let [a, ...d] = s,
    f = a.endsWith("?"),
    m = a.replace(/\?$/, "");
  if (d.length === 0) return f ? [m, ""] : [m];
  let x = jc(d.join("/")),
    E = [];
  return (
    E.push(...x.map((w) => (w === "" ? m : [m, w].join("/")))),
    f && E.push(...x),
    E.map((w) => (i.startsWith("/") && w === "" ? "/" : w))
  );
}
function up(i) {
  i.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : mp(
          s.routesMeta.map((d) => d.childrenIndex),
          a.routesMeta.map((d) => d.childrenIndex)
        )
  );
}
var ap = /^:[\w-]+$/,
  sp = 3,
  cp = 2,
  fp = 1,
  dp = 10,
  pp = -2,
  _c = (i) => i === "*";
function hp(i, s) {
  let a = i.split("/"),
    d = a.length;
  return (
    a.some(_c) && (d += pp),
    s && (d += cp),
    a
      .filter((f) => !_c(f))
      .reduce((f, m) => f + (ap.test(m) ? sp : m === "" ? fp : dp), d)
  );
}
function mp(i, s) {
  return i.length === s.length && i.slice(0, -1).every((d, f) => d === s[f])
    ? i[i.length - 1] - s[s.length - 1]
    : 0;
}
function vp(i, s, a = !1) {
  let { routesMeta: d } = i,
    f = {},
    m = "/",
    x = [];
  for (let E = 0; E < d.length; ++E) {
    let w = d[E],
      k = E === d.length - 1,
      L = m === "/" ? s : s.slice(m.length) || "/",
      j = Zl(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: k },
        L
      ),
      _ = w.route;
    if (
      (!j &&
        k &&
        a &&
        !d[d.length - 1].route.index &&
        (j = Zl(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          L
        )),
      !j)
    )
      return null;
    Object.assign(f, j.params),
      x.push({
        params: f,
        pathname: Ot([m, j.pathname]),
        pathnameBase: xp(Ot([m, j.pathnameBase])),
        route: _,
      }),
      j.pathnameBase !== "/" && (m = Ot([m, j.pathnameBase]));
  }
  return x;
}
function Zl(i, s) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, d] = yp(i.path, i.caseSensitive, i.end),
    f = s.match(a);
  if (!f) return null;
  let m = f[0],
    x = m.replace(/(.)\/+$/, "$1"),
    E = f.slice(1);
  return {
    params: d.reduce((k, { paramName: L, isOptional: j }, _) => {
      if (L === "*") {
        let z = E[_] || "";
        x = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const D = E[_];
      return (
        j && !D ? (k[L] = void 0) : (k[L] = (D || "").replace(/%2F/g, "/")), k
      );
    }, {}),
    pathname: m,
    pathnameBase: x,
    pattern: i,
  };
}
function yp(i, s = !1, a = !0) {
  wt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let d = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, E, w) => (
            d.push({ paramName: E, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (d.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), d]
  );
}
function gp(i) {
  try {
    return i
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      wt(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      i
    );
  }
}
function nn(i, s) {
  if (s === "/") return i;
  if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    d = i.charAt(a);
  return d && d !== "/" ? null : i.slice(a) || "/";
}
function wp(i, s = "/") {
  let {
    pathname: a,
    search: d = "",
    hash: f = "",
  } = typeof i == "string" ? Wn(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : Sp(a, s)) : s,
    search: Ep(d),
    hash: Cp(f),
  };
}
function Sp(i, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function eu(i, s, a, d) {
  return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    d
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kp(i) {
  return i.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function fu(i) {
  let s = kp(i);
  return s.map((a, d) => (d === s.length - 1 ? a.pathname : a.pathnameBase));
}
function du(i, s, a, d = !1) {
  let f;
  typeof i == "string"
    ? (f = Wn(i))
    : ((f = { ...i }),
      ke(
        !f.pathname || !f.pathname.includes("?"),
        eu("?", "pathname", "search", f)
      ),
      ke(
        !f.pathname || !f.pathname.includes("#"),
        eu("#", "pathname", "hash", f)
      ),
      ke(!f.search || !f.search.includes("#"), eu("#", "search", "hash", f)));
  let m = i === "" || f.pathname === "",
    x = m ? "/" : f.pathname,
    E;
  if (x == null) E = a;
  else {
    let j = s.length - 1;
    if (!d && x.startsWith("..")) {
      let _ = x.split("/");
      for (; _[0] === ".."; ) _.shift(), (j -= 1);
      f.pathname = _.join("/");
    }
    E = j >= 0 ? s[j] : "/";
  }
  let w = wp(f, E),
    k = x && x !== "/" && x.endsWith("/"),
    L = (m || x === ".") && a.endsWith("/");
  return !w.pathname.endsWith("/") && (k || L) && (w.pathname += "/"), w;
}
var Ot = (i) => i.join("/").replace(/\/\/+/g, "/"),
  xp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ep = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  Cp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function _p(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Ic = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ic);
var Pp = ["GET", ...Ic];
new Set(Pp);
var Vn = C.createContext(null);
Vn.displayName = "DataRouter";
var bl = C.createContext(null);
bl.displayName = "DataRouterState";
var Oc = C.createContext({ isTransitioning: !1 });
Oc.displayName = "ViewTransition";
var Rp = C.createContext(new Map());
Rp.displayName = "Fetchers";
var Np = C.createContext(null);
Np.displayName = "Await";
var St = C.createContext(null);
St.displayName = "Navigation";
var Or = C.createContext(null);
Or.displayName = "Location";
var Pt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Pt.displayName = "Route";
var pu = C.createContext(null);
pu.displayName = "RouteError";
function Tp(i, { relative: s } = {}) {
  ke(
    Qn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: d } = C.useContext(St),
    { hash: f, pathname: m, search: x } = Fr(i, { relative: s }),
    E = m;
  return (
    a !== "/" && (E = m === "/" ? a : Ot([a, m])),
    d.createHref({ pathname: E, search: x, hash: f })
  );
}
function Qn() {
  return C.useContext(Or) != null;
}
function Ft() {
  return (
    ke(
      Qn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(Or).location
  );
}
var Fc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Dc(i) {
  C.useContext(St).static || C.useLayoutEffect(i);
}
function hu() {
  let { isDataRoute: i } = C.useContext(Pt);
  return i ? Hp() : Lp();
}
function Lp() {
  ke(
    Qn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = C.useContext(Vn),
    { basename: s, navigator: a } = C.useContext(St),
    { matches: d } = C.useContext(Pt),
    { pathname: f } = Ft(),
    m = JSON.stringify(fu(d)),
    x = C.useRef(!1);
  return (
    Dc(() => {
      x.current = !0;
    }),
    C.useCallback(
      (w, k = {}) => {
        if ((wt(x.current, Fc), !x.current)) return;
        if (typeof w == "number") {
          a.go(w);
          return;
        }
        let L = du(w, JSON.parse(m), f, k.relative === "path");
        i == null &&
          s !== "/" &&
          (L.pathname = L.pathname === "/" ? s : Ot([s, L.pathname])),
          (k.replace ? a.replace : a.push)(L, k.state, k);
      },
      [s, a, m, f, i]
    )
  );
}
C.createContext(null);
function Fr(i, { relative: s } = {}) {
  let { matches: a } = C.useContext(Pt),
    { pathname: d } = Ft(),
    f = JSON.stringify(fu(a));
  return C.useMemo(() => du(i, JSON.parse(f), d, s === "path"), [i, f, d, s]);
}
function zp(i, s) {
  return $c(i, s);
}
function $c(i, s, a, d) {
  var F;
  ke(
    Qn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = C.useContext(St),
    { matches: m } = C.useContext(Pt),
    x = m[m.length - 1],
    E = x ? x.params : {},
    w = x ? x.pathname : "/",
    k = x ? x.pathnameBase : "/",
    L = x && x.route;
  {
    let A = (L && L.path) || "";
    Uc(
      w,
      !L || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${
        A === "/" ? "*" : `${A}/*`
      }">.`
    );
  }
  let j = Ft(),
    _;
  if (s) {
    let A = typeof s == "string" ? Wn(s) : s;
    ke(
      k === "/" || ((F = A.pathname) == null ? void 0 : F.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ),
      (_ = A);
  } else _ = j;
  let D = _.pathname || "/",
    z = D;
  if (k !== "/") {
    let A = k.replace(/^\//, "").split("/");
    z = "/" + D.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let $ = zc(i, { pathname: z });
  wt(
    L || $ != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ),
    wt(
      $ == null ||
        $[$.length - 1].route.element !== void 0 ||
        $[$.length - 1].route.Component !== void 0 ||
        $[$.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = Fp(
    $ &&
      $.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, E, A.params),
          pathname: Ot([
            k,
            f.encodeLocation
              ? f.encodeLocation(A.pathname).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? k
              : Ot([
                  k,
                  f.encodeLocation
                    ? f.encodeLocation(A.pathnameBase).pathname
                    : A.pathnameBase,
                ]),
        })
      ),
    m,
    a,
    d
  );
  return s && O
    ? C.createElement(
        Or.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ..._,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function Mp() {
  let i = Bp(),
    s = _p(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    d = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: d },
    m = { padding: "2px 4px", backgroundColor: d },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (x = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? C.createElement("pre", { style: f }, a) : null,
      x
    )
  );
}
var jp = C.createElement(Mp, null),
  Ip = class extends C.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, s) {
      return s.location !== i.location ||
        (s.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : s.error,
            location: s.location,
            revalidation: i.revalidation || s.revalidation,
          };
    }
    componentDidCatch(i, s) {
      console.error(
        "React Router caught the following error during render",
        i,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            Pt.Provider,
            { value: this.props.routeContext },
            C.createElement(pu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Op({ routeContext: i, match: s, children: a }) {
  let d = C.useContext(Vn);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = s.route.id),
    C.createElement(Pt.Provider, { value: i }, a)
  );
}
function Fp(i, s = [], a = null, d = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    m = a == null ? void 0 : a.errors;
  if (m != null) {
    let w = f.findIndex(
      (k) => k.route.id && (m == null ? void 0 : m[k.route.id]) !== void 0
    );
    ke(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let x = !1,
    E = -1;
  if (a)
    for (let w = 0; w < f.length; w++) {
      let k = f[w];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (E = w),
        k.route.id)
      ) {
        let { loaderData: L, errors: j } = a,
          _ =
            k.route.loader &&
            !L.hasOwnProperty(k.route.id) &&
            (!j || j[k.route.id] === void 0);
        if (k.route.lazy || _) {
          (x = !0), E >= 0 ? (f = f.slice(0, E + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, k, L) => {
    let j,
      _ = !1,
      D = null,
      z = null;
    a &&
      ((j = m && k.route.id ? m[k.route.id] : void 0),
      (D = k.route.errorElement || jp),
      x &&
        (E < 0 && L === 0
          ? (Uc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (_ = !0),
            (z = null))
          : E === L &&
            ((_ = !0), (z = k.route.hydrateFallbackElement || null))));
    let $ = s.concat(f.slice(0, L + 1)),
      O = () => {
        let F;
        return (
          j
            ? (F = D)
            : _
            ? (F = z)
            : k.route.Component
            ? (F = C.createElement(k.route.Component, null))
            : k.route.element
            ? (F = k.route.element)
            : (F = w),
          C.createElement(Op, {
            match: k,
            routeContext: { outlet: w, matches: $, isDataRoute: a != null },
            children: F,
          })
        );
      };
    return a && (k.route.ErrorBoundary || k.route.errorElement || L === 0)
      ? C.createElement(Ip, {
          location: a.location,
          revalidation: a.revalidation,
          component: D,
          error: j,
          children: O(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : O();
  }, null);
}
function mu(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dp(i) {
  let s = C.useContext(Vn);
  return ke(s, mu(i)), s;
}
function $p(i) {
  let s = C.useContext(bl);
  return ke(s, mu(i)), s;
}
function Up(i) {
  let s = C.useContext(Pt);
  return ke(s, mu(i)), s;
}
function vu(i) {
  let s = Up(i),
    a = s.matches[s.matches.length - 1];
  return (
    ke(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function Ap() {
  return vu("useRouteId");
}
function Bp() {
  var d;
  let i = C.useContext(pu),
    s = $p("useRouteError"),
    a = vu("useRouteError");
  return i !== void 0 ? i : (d = s.errors) == null ? void 0 : d[a];
}
function Hp() {
  let { router: i } = Dp("useNavigate"),
    s = vu("useNavigate"),
    a = C.useRef(!1);
  return (
    Dc(() => {
      a.current = !0;
    }),
    C.useCallback(
      async (f, m = {}) => {
        wt(a.current, Fc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: s, ...m }));
      },
      [i, s]
    )
  );
}
var Pc = {};
function Uc(i, s, a) {
  !s && !Pc[i] && ((Pc[i] = !0), wt(!1, a));
}
C.memo(Wp);
function Wp({ routes: i, future: s, state: a }) {
  return $c(i, void 0, a, s);
}
function Vp({ to: i, replace: s, state: a, relative: d }) {
  ke(
    Qn(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = C.useContext(St);
  wt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = C.useContext(Pt),
    { pathname: x } = Ft(),
    E = hu(),
    w = du(i, fu(m), x, d === "path"),
    k = JSON.stringify(w);
  return (
    C.useEffect(() => {
      E(JSON.parse(k), { replace: s, state: a, relative: d });
    }, [E, k, d, s, a]),
    null
  );
}
function uu(i) {
  ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Qp({
  basename: i = "/",
  children: s = null,
  location: a,
  navigationType: d = "POP",
  navigator: f,
  static: m = !1,
}) {
  ke(
    !Qn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = i.replace(/^\/*/, "/"),
    E = C.useMemo(
      () => ({ basename: x, navigator: f, static: m, future: {} }),
      [x, f, m]
    );
  typeof a == "string" && (a = Wn(a));
  let {
      pathname: w = "/",
      search: k = "",
      hash: L = "",
      state: j = null,
      key: _ = "default",
    } = a,
    D = C.useMemo(() => {
      let z = nn(w, x);
      return z == null
        ? null
        : {
            location: { pathname: z, search: k, hash: L, state: j, key: _ },
            navigationType: d,
          };
    }, [x, w, k, L, j, _, d]);
  return (
    wt(
      D != null,
      `<Router basename="${x}"> is not able to match the URL "${w}${k}${L}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    D == null
      ? null
      : C.createElement(
          St.Provider,
          { value: E },
          C.createElement(Or.Provider, { children: s, value: D })
        )
  );
}
function Kp({ children: i, location: s }) {
  return zp(au(i), s);
}
function au(i, s = []) {
  let a = [];
  return (
    C.Children.forEach(i, (d, f) => {
      if (!C.isValidElement(d)) return;
      let m = [...s, f];
      if (d.type === C.Fragment) {
        a.push.apply(a, au(d.props.children, m));
        return;
      }
      ke(
        d.type === uu,
        `[${
          typeof d.type == "string" ? d.type : d.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ke(
          !d.props.index || !d.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: d.props.id || m.join("-"),
        caseSensitive: d.props.caseSensitive,
        element: d.props.element,
        Component: d.props.Component,
        index: d.props.index,
        path: d.props.path,
        loader: d.props.loader,
        action: d.props.action,
        hydrateFallbackElement: d.props.hydrateFallbackElement,
        HydrateFallback: d.props.HydrateFallback,
        errorElement: d.props.errorElement,
        ErrorBoundary: d.props.ErrorBoundary,
        hasErrorBoundary:
          d.props.hasErrorBoundary === !0 ||
          d.props.ErrorBoundary != null ||
          d.props.errorElement != null,
        shouldRevalidate: d.props.shouldRevalidate,
        handle: d.props.handle,
        lazy: d.props.lazy,
      };
      d.props.children && (x.children = au(d.props.children, m)), a.push(x);
    }),
    a
  );
}
var Gl = "get",
  ql = "application/x-www-form-urlencoded";
function eo(i) {
  return i != null && typeof i.tagName == "string";
}
function Yp(i) {
  return eo(i) && i.tagName.toLowerCase() === "button";
}
function Xp(i) {
  return eo(i) && i.tagName.toLowerCase() === "form";
}
function Gp(i) {
  return eo(i) && i.tagName.toLowerCase() === "input";
}
function qp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Jp(i, s) {
  return i.button === 0 && (!s || s === "_self") && !qp(i);
}
var Xl = null;
function Zp() {
  if (Xl === null)
    try {
      new FormData(document.createElement("form"), 0), (Xl = !1);
    } catch {
      Xl = !0;
    }
  return Xl;
}
var bp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function tu(i) {
  return i != null && !bp.has(i)
    ? (wt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ql}"`
      ),
      null)
    : i;
}
function eh(i, s) {
  let a, d, f, m, x;
  if (Xp(i)) {
    let E = i.getAttribute("action");
    (d = E ? nn(E, s) : null),
      (a = i.getAttribute("method") || Gl),
      (f = tu(i.getAttribute("enctype")) || ql),
      (m = new FormData(i));
  } else if (Yp(i) || (Gp(i) && (i.type === "submit" || i.type === "image"))) {
    let E = i.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = i.getAttribute("formaction") || E.getAttribute("action");
    if (
      ((d = w ? nn(w, s) : null),
      (a = i.getAttribute("formmethod") || E.getAttribute("method") || Gl),
      (f =
        tu(i.getAttribute("formenctype")) ||
        tu(E.getAttribute("enctype")) ||
        ql),
      (m = new FormData(E, i)),
      !Zp())
    ) {
      let { name: k, type: L, value: j } = i;
      if (L === "image") {
        let _ = k ? `${k}.` : "";
        m.append(`${_}x`, "0"), m.append(`${_}y`, "0");
      } else k && m.append(k, j);
    }
  } else {
    if (eo(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Gl), (d = null), (f = ql), (x = i);
  }
  return (
    m && f === "text/plain" && ((x = m), (m = void 0)),
    { action: d, method: a.toLowerCase(), encType: f, formData: m, body: x }
  );
}
function yu(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
async function th(i, s) {
  if (i.id in s) return s[i.id];
  try {
    let a = await import(i.module);
    return (s[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function nh(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function rh(i, s, a) {
  let d = await Promise.all(
    i.map(async (f) => {
      let m = s.routes[f.route.id];
      if (m) {
        let x = await th(m, a);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return uh(
    d
      .flat(1)
      .filter(nh)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function Rc(i, s, a, d, f, m) {
  let x = (w, k) => (a[k] ? w.route.id !== a[k].route.id : !0),
    E = (w, k) => {
      var L;
      return (
        a[k].pathname !== w.pathname ||
        (((L = a[k].route.path) == null ? void 0 : L.endsWith("*")) &&
          a[k].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? s.filter((w, k) => x(w, k) || E(w, k))
    : m === "data"
    ? s.filter((w, k) => {
        var j;
        let L = d.routes[w.route.id];
        if (!L || !L.hasLoader) return !1;
        if (x(w, k) || E(w, k)) return !0;
        if (w.route.shouldRevalidate) {
          let _ = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((j = a[0]) == null ? void 0 : j.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof _ == "boolean") return _;
        }
        return !0;
      })
    : [];
}
function lh(i, s) {
  return oh(
    i
      .map((a) => {
        let d = s.routes[a.route.id];
        if (!d) return [];
        let f = [d.module];
        return d.imports && (f = f.concat(d.imports)), f;
      })
      .flat(1)
  );
}
function oh(i) {
  return [...new Set(i)];
}
function ih(i) {
  let s = {},
    a = Object.keys(i).sort();
  for (let d of a) s[d] = i[d];
  return s;
}
function uh(i, s) {
  let a = new Set();
  return (
    new Set(s),
    i.reduce((d, f) => {
      let m = JSON.stringify(ih(f));
      return a.has(m) || (a.add(m), d.push({ key: m, link: f })), d;
    }, [])
  );
}
function ah(i) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function sh() {
  let i = C.useContext(Vn);
  return (
    yu(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function ch() {
  let i = C.useContext(bl);
  return (
    yu(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var gu = C.createContext(void 0);
gu.displayName = "FrameworkContext";
function Ac() {
  let i = C.useContext(gu);
  return (
    yu(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function fh(i, s) {
  let a = C.useContext(gu),
    [d, f] = C.useState(!1),
    [m, x] = C.useState(!1),
    {
      onFocus: E,
      onBlur: w,
      onMouseEnter: k,
      onMouseLeave: L,
      onTouchStart: j,
    } = s,
    _ = C.useRef(null);
  C.useEffect(() => {
    if ((i === "render" && x(!0), i === "viewport")) {
      let $ = (F) => {
          F.forEach((A) => {
            x(A.isIntersecting);
          });
        },
        O = new IntersectionObserver($, { threshold: 0.5 });
      return (
        _.current && O.observe(_.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [i]),
    C.useEffect(() => {
      if (d) {
        let $ = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [d]);
  let D = () => {
      f(!0);
    },
    z = () => {
      f(!1), x(!1);
    };
  return a
    ? i !== "intent"
      ? [m, _, {}]
      : [
          m,
          _,
          {
            onFocus: jr(E, D),
            onBlur: jr(w, z),
            onMouseEnter: jr(k, D),
            onMouseLeave: jr(L, z),
            onTouchStart: jr(j, D),
          },
        ]
    : [!1, _, {}];
}
function jr(i, s) {
  return (a) => {
    i && i(a), a.defaultPrevented || s(a);
  };
}
function dh({ page: i, ...s }) {
  let { router: a } = sh(),
    d = C.useMemo(() => zc(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return d ? C.createElement(hh, { page: i, matches: d, ...s }) : null;
}
function ph(i) {
  let { manifest: s, routeModules: a } = Ac(),
    [d, f] = C.useState([]);
  return (
    C.useEffect(() => {
      let m = !1;
      return (
        rh(i, s, a).then((x) => {
          m || f(x);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, s, a]),
    d
  );
}
function hh({ page: i, matches: s, ...a }) {
  let d = Ft(),
    { manifest: f, routeModules: m } = Ac(),
    { loaderData: x, matches: E } = ch(),
    w = C.useMemo(() => Rc(i, s, E, f, d, "data"), [i, s, E, f, d]),
    k = C.useMemo(() => Rc(i, s, E, f, d, "assets"), [i, s, E, f, d]),
    L = C.useMemo(() => {
      if (i === d.pathname + d.search + d.hash) return [];
      let D = new Set(),
        z = !1;
      if (
        (s.forEach((O) => {
          var A;
          let F = f.routes[O.route.id];
          !F ||
            !F.hasLoader ||
            ((!w.some((b) => b.route.id === O.route.id) &&
              O.route.id in x &&
              (A = m[O.route.id]) != null &&
              A.shouldRevalidate) ||
            F.hasClientLoader
              ? (z = !0)
              : D.add(O.route.id));
        }),
        D.size === 0)
      )
        return [];
      let $ = ah(i);
      return (
        z &&
          D.size > 0 &&
          $.searchParams.set(
            "_routes",
            s
              .filter((O) => D.has(O.route.id))
              .map((O) => O.route.id)
              .join(",")
          ),
        [$.pathname + $.search]
      );
    }, [x, d, f, w, s, i, m]),
    j = C.useMemo(() => lh(k, f), [k, f]),
    _ = ph(k);
  return C.createElement(
    C.Fragment,
    null,
    L.map((D) =>
      C.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...a,
      })
    ),
    j.map((D) =>
      C.createElement("link", { key: D, rel: "modulepreload", href: D, ...a })
    ),
    _.map(({ key: D, link: z }) => C.createElement("link", { key: D, ...z }))
  );
}
function mh(...i) {
  return (s) => {
    i.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var Bc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Bc && (window.__reactRouterVersion = "7.1.1");
} catch {}
function vh({ basename: i, children: s, window: a }) {
  let d = C.useRef();
  d.current == null && (d.current = rp({ window: a, v5Compat: !0 }));
  let f = d.current,
    [m, x] = C.useState({ action: f.action, location: f.location }),
    E = C.useCallback(
      (w) => {
        C.startTransition(() => x(w));
      },
      [x]
    );
  return (
    C.useLayoutEffect(() => f.listen(E), [f, E]),
    C.createElement(Qp, {
      basename: i,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var Hc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wc = C.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: d = "none",
      relative: f,
      reloadDocument: m,
      replace: x,
      state: E,
      target: w,
      to: k,
      preventScrollReset: L,
      viewTransition: j,
      ..._
    },
    D
  ) {
    let { basename: z } = C.useContext(St),
      $ = typeof k == "string" && Hc.test(k),
      O,
      F = !1;
    if (typeof k == "string" && $ && ((O = k), Bc))
      try {
        let ie = new URL(window.location.href),
          te = k.startsWith("//") ? new URL(ie.protocol + k) : new URL(k),
          he = nn(te.pathname, z);
        te.origin === ie.origin && he != null
          ? (k = he + te.search + te.hash)
          : (F = !0);
      } catch {
        wt(
          !1,
          `<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let A = Tp(k, { relative: f }),
      [b, le, fe] = fh(d, _),
      B = Sh(k, {
        replace: x,
        state: E,
        target: w,
        preventScrollReset: L,
        relative: f,
        viewTransition: j,
      });
    function X(ie) {
      s && s(ie), ie.defaultPrevented || B(ie);
    }
    let ee = C.createElement("a", {
      ..._,
      ...fe,
      href: O || A,
      onClick: F || m ? s : X,
      ref: mh(D, le),
      target: w,
      "data-discover": !$ && a === "render" ? "true" : void 0,
    });
    return b && !$
      ? C.createElement(C.Fragment, null, ee, C.createElement(dh, { page: A }))
      : ee;
  });
Wc.displayName = "Link";
var yh = C.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: d = "",
    end: f = !1,
    style: m,
    to: x,
    viewTransition: E,
    children: w,
    ...k
  },
  L
) {
  let j = Fr(x, { relative: k.relative }),
    _ = Ft(),
    D = C.useContext(bl),
    { navigator: z, basename: $ } = C.useContext(St),
    O = D != null && _h(j) && E === !0,
    F = z.encodeLocation ? z.encodeLocation(j).pathname : j.pathname,
    A = _.pathname,
    b =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  a ||
    ((A = A.toLowerCase()),
    (b = b ? b.toLowerCase() : null),
    (F = F.toLowerCase())),
    b && $ && (b = nn(b, $) || b);
  const le = F !== "/" && F.endsWith("/") ? F.length - 1 : F.length;
  let fe = A === F || (!f && A.startsWith(F) && A.charAt(le) === "/"),
    B =
      b != null &&
      (b === F || (!f && b.startsWith(F) && b.charAt(F.length) === "/")),
    X = { isActive: fe, isPending: B, isTransitioning: O },
    ee = fe ? s : void 0,
    ie;
  typeof d == "function"
    ? (ie = d(X))
    : (ie = [
        d,
        fe ? "active" : null,
        B ? "pending" : null,
        O ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let te = typeof m == "function" ? m(X) : m;
  return C.createElement(
    Wc,
    {
      ...k,
      "aria-current": ee,
      className: ie,
      ref: L,
      style: te,
      to: x,
      viewTransition: E,
    },
    typeof w == "function" ? w(X) : w
  );
});
yh.displayName = "NavLink";
var gh = C.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: d,
      replace: f,
      state: m,
      method: x = Gl,
      action: E,
      onSubmit: w,
      relative: k,
      preventScrollReset: L,
      viewTransition: j,
      ..._
    },
    D
  ) => {
    let z = Eh(),
      $ = Ch(E, { relative: k }),
      O = x.toLowerCase() === "get" ? "get" : "post",
      F = typeof E == "string" && Hc.test(E),
      A = (b) => {
        if ((w && w(b), b.defaultPrevented)) return;
        b.preventDefault();
        let le = b.nativeEvent.submitter,
          fe = (le == null ? void 0 : le.getAttribute("formmethod")) || x;
        z(le || b.currentTarget, {
          fetcherKey: s,
          method: fe,
          navigate: a,
          replace: f,
          state: m,
          relative: k,
          preventScrollReset: L,
          viewTransition: j,
        });
      };
    return C.createElement("form", {
      ref: D,
      method: O,
      action: $,
      onSubmit: d ? w : A,
      ..._,
      "data-discover": !F && i === "render" ? "true" : void 0,
    });
  }
);
gh.displayName = "Form";
function wh(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vc(i) {
  let s = C.useContext(Vn);
  return ke(s, wh(i)), s;
}
function Sh(
  i,
  {
    target: s,
    replace: a,
    state: d,
    preventScrollReset: f,
    relative: m,
    viewTransition: x,
  } = {}
) {
  let E = hu(),
    w = Ft(),
    k = Fr(i, { relative: m });
  return C.useCallback(
    (L) => {
      if (Jp(L, s)) {
        L.preventDefault();
        let j = a !== void 0 ? a : Ir(w) === Ir(k);
        E(i, {
          replace: j,
          state: d,
          preventScrollReset: f,
          relative: m,
          viewTransition: x,
        });
      }
    },
    [w, E, k, a, d, s, i, f, m, x]
  );
}
var kh = 0,
  xh = () => `__${String(++kh)}__`;
function Eh() {
  let { router: i } = Vc("useSubmit"),
    { basename: s } = C.useContext(St),
    a = Ap();
  return C.useCallback(
    async (d, f = {}) => {
      let { action: m, method: x, encType: E, formData: w, body: k } = eh(d, s);
      if (f.navigate === !1) {
        let L = f.fetcherKey || xh();
        await i.fetch(L, a, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, s, a]
  );
}
function Ch(i, { relative: s } = {}) {
  let { basename: a } = C.useContext(St),
    d = C.useContext(Pt);
  ke(d, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1),
    m = { ...Fr(i || ".", { relative: s }) },
    x = Ft();
  if (i == null) {
    m.search = x.search;
    let E = new URLSearchParams(m.search),
      w = E.getAll("index");
    if (w.some((L) => L === "")) {
      E.delete("index"),
        w.filter((j) => j).forEach((j) => E.append("index", j));
      let L = E.toString();
      m.search = L ? `?${L}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (m.pathname = m.pathname === "/" ? a : Ot([a, m.pathname])),
    Ir(m)
  );
}
function _h(i, s = {}) {
  let a = C.useContext(Oc);
  ke(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: d } = Vc("useViewTransitionState"),
    f = Fr(i, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let m = nn(a.currentLocation.pathname, d) || a.currentLocation.pathname,
    x = nn(a.nextLocation.pathname, d) || a.nextLocation.pathname;
  return Zl(f.pathname, x) != null || Zl(f.pathname, m) != null;
}
new TextEncoder();
var nu = { exports: {} },
  ru,
  Nc;
function Ph() {
  if (Nc) return ru;
  Nc = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (ru = i), ru;
}
var lu, Tc;
function Rh() {
  if (Tc) return lu;
  Tc = 1;
  var i = Ph();
  function s() {}
  function a() {}
  return (
    (a.resetWarningCache = s),
    (lu = function () {
      function d(x, E, w, k, L, j) {
        if (j !== i) {
          var _ = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((_.name = "Invariant Violation"), _);
        }
      }
      d.isRequired = d;
      function f() {
        return d;
      }
      var m = {
        array: d,
        bigint: d,
        bool: d,
        func: d,
        number: d,
        object: d,
        string: d,
        symbol: d,
        any: d,
        arrayOf: f,
        element: d,
        elementType: d,
        instanceOf: f,
        node: d,
        objectOf: f,
        oneOf: f,
        oneOfType: f,
        shape: f,
        exact: f,
        checkPropTypes: a,
        resetWarningCache: s,
      };
      return (m.PropTypes = m), m;
    }),
    lu
  );
}
var Lc;
function Nh() {
  return Lc || ((Lc = 1), (nu.exports = Rh()())), nu.exports;
}
var Th = Nh();
const $e = Kd(Th),
  Lh = "cormacmtaylor@gmail.com";
function zh() {
  const i = hu(),
    s = () => {
      i("/", { state: { redirected: !0 } });
    };
  return I.jsx(I.Fragment, {
    children: I.jsxs("nav", {
      className: "nav_container",
      children: [
        I.jsx("div", {
          className: "nav_box left",
          children: I.jsx("div", {
            onClick: s,
            children: I.jsx("img", {
              src: "/images/",
              alt: "CT Logo",
              className: "nav_img",
            }),
          }),
        }),
        I.jsxs("div", {
          className: "nav_box right",
          children: [
            I.jsx(su, {
              url: "https://www.cormac-taylor.com/Cormac_Taylor_Resume.pdf",
              txt: "resume",
            }),
            I.jsx(su, {
              url: `https://mail.google.com/mail/?view=cm&fs=1&to=${Lh}`,
              txt: "contact",
            }),
          ],
        }),
      ],
    }),
  });
}
su.propTypes = { url: $e.string.isRequired, txt: $e.string.isRequired };
function su({ url: i, txt: s }) {
  return I.jsx(I.Fragment, {
    children: I.jsxs("a", {
      href: i,
      target: "_blank",
      className: "nav_link center",
      children: [
        s,
        I.jsx("img", {
          src: "/images/new_tab.svg",
          alt: "New window icon by Grand Iconic - Flaticon",
          className: "new_tab_icon",
        }),
      ],
    }),
  });
}
function Mh() {
  return I.jsx(I.Fragment, {
    children: I.jsxs("footer", {
      className: "footer_container",
      children: [I.jsx(jh, {}), I.jsx(Ih, {})],
    }),
  });
}
function jh() {
  return I.jsx("div", {
    className: "footer_box left",
    children: I.jsxs("p", {
      children: [
        "feel free to check out the source code on",
        " ",
        I.jsx("a", {
          href: "https://github.com/cormac-taylor/personal_website",
          target: "_blank",
          children: "github",
        }),
        ".",
      ],
    }),
  });
}
function Ih() {
  return I.jsxs("div", {
    className: "footer_box right",
    children: [
      I.jsxs("div", {
        className: "img_links_container",
        children: [
          I.jsx(Jl, {
            url: "https://www.linkedin.com/in/cormac-taylor/",
            src: "/images/linked_in_logo.png",
            alt: "LinkedIn Logo",
          }),
          I.jsx(Jl, {
            url: "https://github.com/cormac-taylor",
            src: "/images/github_logo.png",
            alt: "GitHub Logo",
          }),
          I.jsx(Jl, {
            url: "https://www.youtube.com/@cormac-taylor",
            src: "/images/youtube_logo.png",
            alt: "YouTube Logo",
          }),
        ],
      }),
      I.jsx("p", { children: "© 2024, cormac-taylor.com" }),
    ],
  });
}
Jl.propTypes = {
  url: $e.string.isRequired,
  src: $e.string.isRequired,
  alt: $e.string.isRequired,
};
function Jl({ url: i, src: s, alt: a }) {
  return I.jsx(I.Fragment, {
    children: I.jsx("a", {
      href: i,
      target: "_blank",
      className: "img_links_box",
      children: I.jsx("img", { src: s, alt: a }),
    }),
  });
}
Qc.propTypes = { onClose: $e.func.isRequired };
function Qc({ onClose: i }) {
  return I.jsx("div", {
    className: "popup_overlay",
    id: "popup_overlay",
    onClick: i,
    children: I.jsxs("div", {
      className: "popup_content",
      onClick: (s) => s.stopPropagation(),
      children: [
        I.jsx("h2", { children: "welcome!" }),
        I.jsx("p", {
          children: "make sure to turn down your audio before proceeding.",
        }),
        I.jsx("button", { onClick: i, children: "close" }),
      ],
    }),
  });
}
function Kc(i, s) {
  return Math.floor(Math.random() * (s - i + 1)) + i;
}
const Oh = 5;
function Fh() {
  new Audio(`/sounds/key${Kc(0, Oh)}.mp3`).play();
}
function Dh(i) {
  const s = new Date().getTime() - i;
  return Math.floor(s / (1e3 * 60 * 60 * 24 * 365.24237));
}
function ou(i, s) {
  return Math.sqrt(i * i + s * s);
}
Yc.propTypes = {
  text: $e.string.isRequired,
  startTyping: $e.bool.isRequired,
  resetTypingEffect: $e.bool.isRequired,
  setResetTypingEffect: $e.func.isRequired,
  minTypingSpeed: $e.number,
  maxTypingSpeed: $e.number,
};
function Yc({
  text: i,
  startTyping: s,
  resetTypingEffect: a,
  setResetTypingEffect: d,
  minTypingSpeed: f = 300,
  maxTypingSpeed: m = 400,
}) {
  const [x, E] = C.useState(""),
    [w, k] = C.useState(0),
    [L, j] = C.useState("");
  return (
    C.useEffect(() => {
      if (a) E(""), k(0), j(""), d(!1);
      else if (s && w < i.length) {
        j(() => "");
        const _ = setTimeout(() => {
          Fh(), E((D) => D + i.charAt(w)), k((D) => D + 1);
        }, Kc(f, m));
        return () => clearTimeout(_);
      } else j(() => "animate_caret");
    }, [i, s, a, d, f, m, w, L]),
    I.jsx(I.Fragment, {
      children: I.jsxs("h1", {
        id: "landing_title",
        className: w === 0 ? "empty_title animate_caret" : `title ${L}`,
        children: [w === 0 ? " " : "", x],
      }),
    })
  );
}
const $h = "cormac taylor";
Xc.propTypes = {
  startTyping: $e.bool.isRequired,
  resetTypingEffect: $e.bool.isRequired,
  setResetTypingEffect: $e.func.isRequired,
};
function Xc({ startTyping: i, resetTypingEffect: s, setResetTypingEffect: a }) {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsx(Wh, {}),
      I.jsx("div", {
        id: "landing_container",
        children: I.jsxs("div", {
          children: [
            I.jsx(Yc, {
              text: $h,
              startTyping: i,
              resetTypingEffect: s,
              setResetTypingEffect: a,
            }),
            I.jsxs("p", {
              id: "landing_description",
              children: [
                "a highly curious kid studying ",
                I.jsx("br", {}),
                "computer science",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Uh = "4/1/2004";
function Ah() {
  return I.jsx(I.Fragment, {
    children: I.jsxs("div", {
      className: "about_container",
      children: [
        I.jsx("div", {
          className: "about_box left bottom",
          children: I.jsx("img", {
            src: "/images/portrait_b&w.png",
            alt: "Portrait of Cormac Taylor",
          }),
        }),
        I.jsx("div", {
          className: "about_box right right_box",
          children: I.jsxs("h1", {
            children: ["a ", Dh(new Date(Uh)), " year old studing cs"],
          }),
        }),
      ],
    }),
  });
}
function Bh() {
  return I.jsx(I.Fragment, {});
}
function Hh() {
  return I.jsx(I.Fragment, {});
}
const yn = 512,
  De = 1024;
function Wh() {
  const i = C.useRef(null);
  return (
    C.useEffect(() => {
      const s = document.getElementById("canvas");
      if (!s) {
        console.error("Canvas element is not ready");
        return;
      }
      const a = s.getContext("2d");
      (s.width = yn), (s.height = yn);
      const d = a.createImageData(yn, yn);
      for (let B = 0; B < d.data.length; B += 4)
        (d.data[B] = 0),
          (d.data[B + 1] = 0),
          (d.data[B + 2] = 0),
          (d.data[B + 3] = 255);
      const f = [];
      for (let B = 0; B < De; B++)
        for (let X = 0; X < De; X++) {
          const ee = B * De + X,
            ie = B - De / 2,
            te = X - De / 2,
            he = ou(ie, te),
            ze = (3 * Math.PI) / (De / 2),
            Qe = (Math.sin(he * ze) + 1) / 2;
          f[ee] = Math.floor(Qe * 128);
        }
      const m = [];
      for (let B = 0; B < De; B++)
        for (let X = 0; X < De; X++) {
          const ee = B * De + X,
            ie = B - De / 2,
            te = X - De / 2,
            he = ou(0.8 * ie, 1.3 * te) * 0.022,
            ze = ou(1.35 * ie, 0.45 * te) * 0.022,
            Ue = Math.sin(he),
            Qe = Math.cos(ze),
            Ae = (Ue + Qe + 2) / 4;
          m[ee] = Math.floor(Ae * 127);
        }
      const x = (B, X, ee) => ({
          r: Math.floor(B.r + (X.r - B.r) * ee),
          g: Math.floor(B.g + (X.g - B.g) * ee),
          b: Math.floor(B.b + (X.b - B.b) * ee),
        }),
        E = (B, X, ee) => ({ r: B, g: X, b: ee }),
        w = () => {
          const B = E(57, 152, 252),
            X = E(16, 16, 16),
            ee = E(48, 48, 48);
          return L(B, X, ee);
        },
        k = () => {
          const B = E(191, 191, 191),
            X = E(16, 16, 16),
            ee = E(48, 48, 48);
          return L(B, X, ee);
        },
        L = (B, X, ee) => {
          const ie = [];
          for (let te = 0; te < 128; te++) {
            const he = te / 64;
            ie[te] = x(B, X, he);
          }
          for (let te = 128; te < 256; te++) {
            const he = (te - 64) / 64;
            ie[te] = x(X, ee, he);
          }
          return ie;
        };
      let j = 0,
        _ = 0,
        D = 0,
        z = 0;
      const $ = (B) => {
          (j = Math.floor(
            (((Math.cos(B * 2e-4 + 0.4 + Math.PI) + 1) / 2) * De) / 2
          )),
            (_ = Math.floor((((Math.cos(B * 3e-4 - 0.1) + 1) / 2) * De) / 2)),
            (D = Math.floor((((Math.cos(B * -2e-4 + 1.2) + 1) / 2) * De) / 2)),
            (z = Math.floor(
              (((Math.cos(B * -3e-4 - 0.8 + Math.PI) + 1) / 2) * De) / 2
            ));
        },
        O = [w(), k()];
      let F = [],
        A = 1;
      const b = (B) => {
          const ee = B * 5e-4,
            ie = (Math.cos(ee) + 1) / 2,
            te = -Math.sin(ee) >= 0 ? 1 : -1;
          A != te && ((A = te), te == -1 ? (O[0] = w()) : (O[1] = k()));
          for (let he = 0; he < 256; he++) F[he] = x(O[0][he], O[1][he], ie);
        },
        le = () => {
          for (let B = 0; B < yn; B++)
            for (let X = 0; X < yn; X++) {
              const ee = (B + _) * De + (X + j),
                ie = (B + z) * De + (X + D),
                te = B * yn * 4 + X * 4;
              let he = f[ee] + m[ie],
                ze = F[he];
              (d.data[te] = ze.r),
                (d.data[te + 1] = ze.g),
                (d.data[te + 2] = ze.b);
            }
        },
        fe = (B) => {
          $(B), b(B), le(), a.putImageData(d, 0, 0), requestAnimationFrame(fe);
        };
      requestAnimationFrame(fe);
    }, []),
    I.jsx(I.Fragment, {
      children: I.jsx("div", {
        id: "lava_frame",
        children: I.jsx("canvas", { ref: i, id: "canvas" }),
      }),
    })
  );
}
Gc.propTypes = {
  startTyping: $e.bool.isRequired,
  setStartTyping: $e.func.isRequired,
};
function Gc({ startTyping: i, setStartTyping: s }) {
  const [a, d] = C.useState(!1),
    f = Ft();
  return (
    C.useEffect(() => {
      (f.state || {}).redirected && (window.scrollTo(0, 0), d(!0), s(!0));
    }, [s, f]),
    I.jsxs(I.Fragment, {
      children: [
        I.jsx("section", {
          className: "full_screen_section section",
          children: I.jsx(Xc, {
            startTyping: i,
            resetTypingEffect: a,
            setResetTypingEffect: d,
          }),
        }),
        I.jsx("div", { className: "full_screen_divider" }),
        I.jsx("section", {
          className: "full_screen_section section",
          children: I.jsx(Ah, {}),
        }),
        I.jsx("div", { className: "full_screen_divider" }),
        I.jsx("section", {
          className: "full_screen_section section",
          children: I.jsx(Bh, {}),
        }),
        I.jsx("section", { className: "section", children: I.jsx(Hh, {}) }),
      ],
    })
  );
}
function Vh() {
  const [i, s] = C.useState(!1),
    [a, d] = C.useState(!1);
  return (
    C.useEffect(() => {
      s(!0), (document.body.style.overflow = "hidden"), d(!1);
    }, []),
    I.jsxs(I.Fragment, {
      children: [
        i &&
          I.jsx(Qc, {
            onClose: () => {
              s(!1), (document.body.style.overflow = ""), d(!0);
            },
          }),
        I.jsxs(vh, {
          children: [
            I.jsx(zh, {}),
            I.jsxs(Kp, {
              children: [
                I.jsx(uu, {
                  path: "/",
                  element: I.jsx(Gc, { startTyping: a, setStartTyping: d }),
                }),
                I.jsx(uu, { path: "*", element: I.jsx(Vp, { to: "/" }) }),
              ],
            }),
            I.jsx(Mh, {}),
          ],
        }),
      ],
    })
  );
}
tp.createRoot(document.getElementById("root")).render(
  I.jsx(C.StrictMode, { children: I.jsx(Vh, {}) })
);
