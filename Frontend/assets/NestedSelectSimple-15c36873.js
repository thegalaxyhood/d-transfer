import {r as g, H as a, I as n, J as x, K, _ as L, L as Z} from "./index-4f2c5097.js";
import {T as _} from "./Tooltip-97ee4cb6.js";
import {I as A, C as O} from "./Processing-451d91ae.js";
(function() {
    try {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , s = new i.Error().stack;
        s && (i._sentryDebugIds = i._sentryDebugIds || {},
        i._sentryDebugIds[s] = "c07c8459-4472-46f3-8323-cc09b4100c42",
        i._sentryDebugIdIdentifier = "sentry-dbid-c07c8459-4472-46f3-8323-cc09b4100c42")
    } catch {}
}
)();
function P({name: i, value: s, options: y=[], label: t, placeholder: h="Select a option", prePlaceholder: D="", onChange: G, errorMessage: m, extraMessage: c, required: Q, className: d, inputClassName: V, disabled: j, nameP: W, optionsP: f, onChangeP: X, valueP: l, showDisableOptions: u=!1}) {
    var N, k;
    const [b,v] = g.useState(!1)
      , w = r => {
        G({
            target: {
                name: i,
                value: r == null ? void 0 : r.value
            }
        }),
        e()
    }
      , Y = r => {
        X({
            target: {
                name: W,
                value: r == null ? void 0 : r.value
            }
        })
    }
      , e = () => {
        v(!1)
    }
    ;
    return a.jsxs("div", {
        className: n("", d && d, ""),
        children: [a.jsx(A, {
            value: s,
            onChange: w,
            disabled: j,
            children: a.jsx(A.Button, {
                className: n("min-w-[164px] min-h-[62px] p-4 flex justify-between items-center", "relative w-full cursor-default rounded-lg  bg-ground-lighter    text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm", (Q && !(s != null && s.key || l != null && l.key) || m) && "border-2 border-red-400", "border border-ground_border-lighter rounded-lg", V),
                onClick: () => {
                    v(!b)
                }
                ,
                children: a.jsxs("div", {
                    className: "flex flex-col w-full",
                    children: [t && a.jsx("label", {
                        className: " text-primary-light mb-2 ",
                        children: t
                    }), a.jsxs("div", {
                        className: "flex flex-row justify-between w-full items-center",
                        children: [a.jsxs("span", {
                            className: " truncate text-primary flex items-center  gap-2 ",
                            children: [(s == null ? void 0 : s.icon) && a.jsxs("div", {
                                className: "flex relative",
                                children: [(s == null ? void 0 : s.icon) && a.jsx(x, {
                                    className: "cursor-pointer  mr-1 rounded-full",
                                    title: s == null ? void 0 : s.icon,
                                    src: `https://statics.teleportdao.xyz/coin/${(N = s == null ? void 0 : s.icon) == null ? void 0 : N.toUpperCase()}.png`,
                                    width: "32",
                                    height: "32",
                                    alt: "switch"
                                }), (s == null ? void 0 : s.iconPlus) && a.jsx(x, {
                                    className: "cursor-pointer  mr-1 rounded-full -ml-2",
                                    title: s == null ? void 0 : s.iconPlus,
                                    src: `https://statics.teleportdao.xyz/coin/${(k = s == null ? void 0 : s.iconPlus) == null ? void 0 : k.toUpperCase()}.png`,
                                    width: "32",
                                    height: "32",
                                    alt: "switch"
                                }), (l == null ? void 0 : l.icon) && a.jsx(x, {
                                    className: "cursor-pointer absolute right-0 bottom-0 rounded-full",
                                    title: l == null ? void 0 : l.icon,
                                    src: `/images/colorful/${l == null ? void 0 : l.icon}.png`,
                                    style: {
                                        width: 13,
                                        height: 13
                                    },
                                    alt: "parent"
                                })]
                            }), D, s != null && s.key ? a.jsxs("div", {
                                className: "flex flex-col  justify-center",
                                children: [a.jsx("div", {
                                    className: "flex flex-row",
                                    children: s == null ? void 0 : s.key
                                }), l && a.jsxs("div", {
                                    className: "flex flex-row text-gray-light",
                                    children: ["on ", l == null ? void 0 : l.key]
                                })]
                            }) : a.jsx("span", {
                                className: "",
                                children: h
                            })]
                        }), !j && a.jsx("span", {
                            className: "pointer-events-none  flex options-center",
                            children: a.jsx(O, {
                                className: "h-5 w-5 text-primary",
                                "aria-hidden": "true"
                            })
                        })]
                    })]
                })
            })
        }), a.jsx(K, {
            appear: !0,
            show: b,
            as: g.Fragment,
            children: a.jsxs(L, {
                as: "div",
                className: "relative z-6",
                onClose: e,
                children: [a.jsx("div", {
                    className: "fixed inset-0 backdrop-blur-custom bg-secondary/70",
                    "aria-hidden": "true"
                }), a.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: a.jsx("div", {
                        className: "flex min-h-full items-center justify-center  text-center w-full",
                        children: a.jsx(K.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: a.jsxs(L.Panel, {
                                className: n(" w-full  transform  rounded-2xl bg-ground  text-left align-middle shadow-xl transition-all", "md:max-w-[550px]"),
                                children: [a.jsx("div", {
                                    className: "text-primary  p-6 w-full text-lg ",
                                    children: h
                                }), a.jsx("div", {
                                    className: " flex items-center px-6   text-sm my-2 gap-2 text-primary  flex-wrap   w-full  overflow-y-auto ",
                                    children: f == null ? void 0 : f.map(r => a.jsxs("button", {
                                        className: n(" py-2 px-2  border border-ground_border-lighter rounded-lg  rounded-lg md:min-w-[74px] md:min-h-[80px] min-w-[97px] min-h-[66px] flex flex-col items-center justify-center gap-2", " ", (l == null ? void 0 : l.key) === (r == null ? void 0 : r.key) ? "bg-ground-lighter" : "", r != null && r.disable && !u ? "grayscale cursor-not-allowed" : "cursor-pointer hover:bg-ground-lighter"),
                                        onClick: () => {
                                            Y(r)
                                        }
                                        ,
                                        disabled: (r == null ? void 0 : r.disable) && !u,
                                        title: r != null && r.disable && !u ? "Route not enabled. Please try on other networks." : void 0,
                                        children: [(r == null ? void 0 : r.icon) && a.jsx("span", {
                                            style: {
                                                width: 24,
                                                height: 24
                                            },
                                            children: a.jsx(x, {
                                                className: "cursor-pointer  rounded-lg",
                                                title: r == null ? void 0 : r.key,
                                                src: `/images/colorful/${r == null ? void 0 : r.icon}.png`,
                                                style: {
                                                    width: 24,
                                                    height: 24
                                                },
                                                alt: "option"
                                            })
                                        }), a.jsx("span", {
                                            className: "text-gray-light",
                                            children: r.key
                                        })]
                                    }, r == null ? void 0 : r.key))
                                }), a.jsx("div", {
                                    className: "mt-1 flex  px-6   justify-center  w-full max-h-[450px] overflow-y-auto ",
                                    children: a.jsx("div", {
                                        className: " flex flex-col mt-2  mb-6 text-sm text-primary  rounded-md  w-full ",
                                        children: y.map(r => {
                                            var C, I, $, z, U, F, T, E, R, S, q, B, H, J;
                                            return a.jsx(_, {
                                                content: (C = r.value) != null && C.disable && !u ? a.jsxs("div", {
                                                    children: ["Route not enabled.", a.jsx("br", {}), " Please try on other networks."]
                                                }) : void 0,
                                                disabled: ((I = r.value) == null ? void 0 : I.disable) && !u,
                                                onClick: () => {
                                                    w(r)
                                                }
                                                ,
                                                className: n(" py-3 px-3 rounded-lg my-1 w-full ", (s == null ? void 0 : s.key) === (r == null ? void 0 : r.key) ? "bg-ground-lighter" : "", ($ = r.value) != null && $.disable && !u ? "grayscale cursor-not-allowed" : "cursor-pointer hover:bg-ground-lighter"),
                                                children: a.jsxs("span", {
                                                    className: "flex items-center gap-2 ",
                                                    children: [a.jsxs("div", {
                                                        className: "flex relative",
                                                        children: [(r == null ? void 0 : r.icon) && a.jsx(x, {
                                                            className: "cursor-pointer  mr-1 rounded-full",
                                                            title: r == null ? void 0 : r.icon,
                                                            src: `https://statics.teleportdao.xyz/coin/${(z = r == null ? void 0 : r.icon) == null ? void 0 : z.toUpperCase()}.png`,
                                                            width: "40",
                                                            height: "40",
                                                            alt: "icon"
                                                        }), (r == null ? void 0 : r.iconPlus) && a.jsx(x, {
                                                            className: "cursor-pointer  mr-1 rounded-full -ml-2",
                                                            title: r == null ? void 0 : r.iconPlus,
                                                            src: `https://statics.teleportdao.xyz/coin/${(U = r == null ? void 0 : r.iconPlus) == null ? void 0 : U.toUpperCase()}.png`,
                                                            width: "40",
                                                            height: "40",
                                                            alt: "icon"
                                                        }), (l == null ? void 0 : l.icon) && a.jsx(x, {
                                                            className: "cursor-pointer absolute right-0 bottom-0 rounded-full",
                                                            title: l == null ? void 0 : l.icon,
                                                            src: `https://statics.teleportdao.xyz/coin/${(F = l == null ? void 0 : l.icon) == null ? void 0 : F.toUpperCase()}.png`,
                                                            style: {
                                                                width: 13,
                                                                height: 13
                                                            },
                                                            alt: "parent"
                                                        })]
                                                    }), r != null && r.key && (l != null && l.key) ? a.jsxs("div", {
                                                        className: "flex flex-col  justify-center",
                                                        children: [a.jsxs("div", {
                                                            className: "flex flex-row",
                                                            children: [r == null ? void 0 : r.key, (T = r == null ? void 0 : r.value) != null && T.type && !((R = (E = r == null ? void 0 : r.value) == null ? void 0 : E.type) != null && R.includes("evm")) && !((q = (S = r == null ? void 0 : r.value) == null ? void 0 : S.type) != null && q.includes("btc")) ? ` (${(J = (H = (B = r == null ? void 0 : r.value) == null ? void 0 : B.type) == null ? void 0 : H.replace("brc20", "brc-20")) == null ? void 0 : J.toUpperCase()}) ` : ""]
                                                        }), a.jsxs("div", {
                                                            className: "flex flex-row text-gray-light",
                                                            children: ["on ", l == null ? void 0 : l.key]
                                                        })]
                                                    }) : a.jsx("span", {
                                                        className: "font-bold",
                                                        children: h
                                                    })]
                                                })
                                            }, r == null ? void 0 : r.key)
                                        }
                                        )
                                    })
                                }), a.jsx("button", {
                                    role: "button",
                                    className: "absolute top-0 right-3 p-6 cursor-pointer",
                                    onClick: e,
                                    children: a.jsx("img", {
                                        src: Z,
                                        height: "30",
                                        width: "30"
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        }), c && a.jsx("div", {
            className: "text-primary text-xs mt-2 h-4 absolute",
            children: c && c
        }), m && a.jsx("div", {
            className: "text-red-400 text-xs mt-1 h-4 ",
            children: m && m
        })]
    })
}
export {P as N};
//# sourceMappingURL=NestedSelectSimple-15c36873.js.map
