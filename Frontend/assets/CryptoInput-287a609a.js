import {r as B, H as s, I as j, J as V, b as E, F as D, N as I, aC as W, aD as L, aB as _, aU as R, t as A, M as P, a0 as F, a1 as J} from "./index-4f2c5097.js";
import {E as M} from "./Processing-451d91ae.js";
(function() {
    try {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , l = new a.Error().stack;
        l && (a._sentryDebugIds = a._sentryDebugIds || {},
        a._sentryDebugIds[l] = "538b4c7f-92dd-457a-9b6f-27e5e5d97075",
        a._sentryDebugIdIdentifier = "sentry-dbid-538b4c7f-92dd-457a-9b6f-27e5e5d97075")
    } catch {}
}
)();
const S = ({list: a, defaultShowFullDetails: l, showArrow: n=!0}) => {
    const [x,r] = B.useState(l);
    return B.useEffect( () => {
        r(l)
    }
    , [l]),
    s.jsx("div", {
        className: "bg-ground-light rounded-xl flex flex-col justify-center p-1 w-full text-primary border border-ground_border-lighter rounded-lg   ",
        children: s.jsxs("div", {
            className: "flex flex-col pb-2 px-2 pt-2  ",
            children: [a == null ? void 0 : a.map( (e, c) => {
                var t;
                return s.jsxs(B.Fragment, {
                    children: [s.jsxs("div", {
                        className: "flex justify-between p-1 relative",
                        children: [s.jsx("div", {
                            className: "text-gray-light",
                            children: e.title
                        }), s.jsx("div", {
                            className: "",
                            children: e.value
                        })]
                    }, c), x && ((t = e == null ? void 0 : e.subItems) == null ? void 0 : t.map( (i, d) => s.jsxs("div", {
                        className: "flex justify-between p-1",
                        children: [s.jsx("div", {
                            className: "text-gray-light",
                            children: i.title
                        }), s.jsx("div", {
                            className: "",
                            children: i.value
                        })]
                    }, c + "-sub-" + d)))]
                }, "v" + c)
            }
            ), n && s.jsx("button", {
                className: "flex justify-center px-1  relative",
                onClick: () => {
                    r(!x)
                }
                ,
                children: s.jsx("span", {
                    className: j("  flex items-center  justify-center  w-7 h-7 ", x ? "rotate-180 top-0" : "top-1 "),
                    children: s.jsx(V, {
                        src: "/images/arrow-down.svg"
                    })
                })
            })]
        })
    })
}
  , H = a => {
    var r;
    const [{wallet: l}] = E()
      , n = (r = l == null ? void 0 : l.accounts[0]) == null ? void 0 : r.address;
    return {
        getTokenBalance: async (e, c=8) => {
            var m, v, u, h, f, w, p, b, y;
            let t = 0
              , i = 0;
            const d = !((m = e == null ? void 0 : e.symbol) != null && m.startsWith("W")) && ((v = e == null ? void 0 : e.address) == null ? void 0 : v.toLowerCase()) === ((f = (h = (u = D) == null ? void 0 : u[a || I.polygon]) == null ? void 0 : h.WNATIVEAddress) == null ? void 0 : f.toLowerCase());
            if (a && n && (e == null ? void 0 : e.address) !== "0x0000000000000000000000000000000000000000") {
                const g = new W((w = L) == null ? void 0 : w[a])
                  , N = ((y = (b = (p = D) == null ? void 0 : p[a || I.polygon]) == null ? void 0 : b.teleBTCAddress) == null ? void 0 : y.toLowerCase()) || ""
                  , C = M.connect(e == null ? void 0 : e.address, g);
                if (d) {
                    const o = g
                      , T = await (o == null ? void 0 : o.getBalance(n));
                    i = _(T, e == null ? void 0 : e.decimal)
                } else {
                    const o = await C.balanceOf(n);
                    t = N === (e == null ? void 0 : e.address) ? R(o, c) : _(o, e == null ? void 0 : e.decimal, c)
                }
            }
            return A(d ? i : t, c)
        }
    }
}
;
function $(a) {
    var g;
    const {name: l, className: n, label: x, value: r, tokenValue: e, onChange: c, errorMessage: t, extraMessage: i, required: d, inputClassName: m, isRightValue: v, amountUSD: u, children: h, isInitForm: f=!0, extraNetwork: w, isLoading: p, ...b} = a
      , y = N => {
        const {name: C, value: o} = N.target
          , T = F("" + o);
        J("" + o) && c && c({
            ...N,
            target: {
                name: C,
                value: T
            }
        })
    }
    ;
    return s.jsxs("div", {
        className: j(" relative w-full ", n && n),
        children: [s.jsx("div", {
            className: j("flex flex-col my-2 appearance-none    rounded-lg   w-full ", m || " bg-ground border border-ground_border-light  ", (d && !r || t) && f && "border-1 error-bg border-red-500 "),
            children: s.jsxs("div", {
                className: "flex flex-row justify-between items-center w-full mb-1 p-4 ",
                children: [s.jsxs("div", {
                    className: "flex flex-col",
                    children: [x && s.jsx("label", {
                        className: "text-gray-lighter   tracking-[-0.0175rem] flex md:inline",
                        children: x
                    }), s.jsx("input", {
                        type: "string",
                        value: P(r || ""),
                        onChange: y,
                        required: d,
                        name: l,
                        className: j((g = r == null ? void 0 : r.toString()) != null && g.includes("Processing") ? " text-sm" : "text-xl font-normal", " appearance-none h-[2rem] bg-transparent   py-2 w-full   tracking-[-0.0175rem]   placeholder:text-gray-light   focus:outline-none focus:shadow-outline", p ? "text-gray-light " : "text-primary"),
                        autoComplete: "off",
                        ...b
                    }), s.jsx("div", {
                        className: "flex items-center",
                        children: u && s.jsx("div", {
                            className: "flex w-fit text-sm  text-gray-light pr-1",
                            children: u && s.jsxs(s.Fragment, {
                                children: [" $", u, " "]
                            })
                        })
                    })]
                }), h]
            })
        }), s.jsxs("div", {
            className: "flex justify-between items-center w-full",
            children: [s.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [t && f && s.jsx("div", {
                    className: "text-red-500 text-xs  h-4  ",
                    children: t && t
                }), f && !t && d && (!r || Number(r) === 0) && s.jsx("div", {
                    className: "text-red-500 text-xs h-4 ",
                    children: !t && d && (!r || Number(r) === 0) && "*Required"
                })]
            }), i && s.jsx("div", {
                className: "flex justify-end   text-primary text-xs  ",
                children: i && i
            })]
        })]
    })
}
export {$ as C, S as D, H as u};
//# sourceMappingURL=CryptoInput-287a609a.js.map
