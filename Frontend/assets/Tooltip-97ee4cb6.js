import {r, H as t, K as p, T as v} from "./index-4f2c5097.js";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[s] = "a892a277-6f58-4b9d-a5c9-36ba05b55c4b",
        e._sentryDebugIdIdentifier = "sentry-dbid-a892a277-6f58-4b9d-a5c9-36ba05b55c4b")
    } catch {}
}
)();
function g(e, s) {
    r.useEffect( () => {
        const n = o => {
            !e.current || e.current.contains(o.target) || s(o)
        }
        ;
        return document.addEventListener("mousedown", n),
        document.addEventListener("touchstart", n),
        () => {
            document.removeEventListener("mousedown", n),
            document.removeEventListener("touchstart", n)
        }
    }
    , [e, s])
}
function x({content: e, children: s, disabled: n, onClick: o, className: c}) {
    const a = v
      , [u,i] = r.useState(!1)
      , [d,f] = r.useState(!1)
      , l = r.useRef(null)
      , m = d || u;
    return g(l, () => {
        f(!1)
    }
    ),
    t.jsx(a, {
        ref: l,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => {
            i(!1)
        }
        ,
        className: "relative",
        children: ({open: b}) => t.jsxs(t.Fragment, {
            children: [t.jsx(a.Button, {
                className: c,
                onClick: o,
                disabled: n,
                children: s
            }), t.jsx(p, {
                show: e ? d ? b : m : !1,
                as: r.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: t.jsx(a.Panel, {
                    className: "z-30 px-5 top-[-28px] left-[0px] absolute ml-2 max-w-72 ",
                    children: t.jsx("div", {
                        className: "overflow-hidden rounded-lg shadow-lg",
                        children: t.jsx("div", {
                            className: "relative  bg-ground-dark border-2 border-ground_border-lighter rounded-lg text-white p-4 ",
                            children: e
                        })
                    })
                })
            })]
        })
    })
}
export {x as T};
//# sourceMappingURL=Tooltip-97ee4cb6.js.map
