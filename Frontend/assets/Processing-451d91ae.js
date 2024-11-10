var F6 = Object.defineProperty;
var O6 = (b, e, a) => e in b ? F6(b, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : b[e] = a;
var u = (b, e, a) => (O6(b, typeof e != "symbol" ? e + "" : e, a),
a);
import {r, bz as c6, bA as W, bf as m, bb as W0, bc as z, bd as V, bh as q, bB as L6, bC as S6, bD as C6, bE as m0, aP as J, bg as N6, bi as T0, bF as D6, bG as B6, bH as q6, bj as X, bk as x0, bm as $6, bn as E6, bo as U6, bp as k, bq as H6, bI as g0, bJ as W6, aZ as F, a_ as _, aT as g, N as l, F as v, q as T, bK as h, bL as $0, aD as D, bM as z6, H as e0, I as z0} from "./index-4f2c5097.js";
(function() {
    try {
        var b = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , e = new b.Error().stack;
        e && (b._sentryDebugIds = b._sentryDebugIds || {},
        b._sentryDebugIds[e] = "b88eea39-cc0c-4f2c-9b88-3442f2ea433f",
        b._sentryDebugIdIdentifier = "sentry-dbid-b88eea39-cc0c-4f2c-9b88-3442f2ea433f")
    } catch {}
}
)();
function r6(b, e) {
    let[a,n] = r.useState(b)
      , t = c6(b);
    return W( () => n(t.current), [t, n, ...e]),
    a
}
function V6(b, e, a) {
    let[n,t] = r.useState(a)
      , d = b !== void 0
      , f = r.useRef(d)
      , i = r.useRef(!1)
      , s = r.useRef(!1);
    return d && !f.current && !i.current ? (i.current = !0,
    f.current = d,
    console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !d && f.current && !s.current && (s.current = !0,
    f.current = d,
    console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),
    [d ? b : n, m(c => (d || t(c),
    e == null ? void 0 : e(c)))]
}
function V0(b) {
    return [b.screenX, b.screenY]
}
function X6() {
    let b = r.useRef([-1, -1]);
    return {
        wasMoved(e) {
            let a = V0(e);
            return b.current[0] === a[0] && b.current[1] === a[1] ? !1 : (b.current = a,
            !0)
        },
        update(e) {
            b.current = V0(e)
        }
    }
}
function Y6(b) {
    throw new Error("Unexpected object: " + b)
}
var O = (b => (b[b.First = 0] = "First",
b[b.Previous = 1] = "Previous",
b[b.Next = 2] = "Next",
b[b.Last = 3] = "Last",
b[b.Specific = 4] = "Specific",
b[b.Nothing = 5] = "Nothing",
b))(O || {});
function G6(b, e) {
    let a = e.resolveItems();
    if (a.length <= 0)
        return null;
    let n = e.resolveActiveIndex()
      , t = n ?? -1;
    switch (b.focus) {
    case 0:
        {
            for (let d = 0; d < a.length; ++d)
                if (!e.resolveDisabled(a[d], d, a))
                    return d;
            return n
        }
    case 1:
        {
            for (let d = t - 1; d >= 0; --d)
                if (!e.resolveDisabled(a[d], d, a))
                    return d;
            return n
        }
    case 2:
        {
            for (let d = t + 1; d < a.length; ++d)
                if (!e.resolveDisabled(a[d], d, a))
                    return d;
            return n
        }
    case 3:
        {
            for (let d = a.length - 1; d >= 0; --d)
                if (!e.resolveDisabled(a[d], d, a))
                    return d;
            return n
        }
    case 4:
        {
            for (let d = 0; d < a.length; ++d)
                if (e.resolveId(a[d], d, a) === b.id)
                    return d;
            return n
        }
    case 5:
        return null;
    default:
        Y6(b)
    }
}
function u6(b={}, e=null, a=[]) {
    for (let[n,t] of Object.entries(b))
        l6(a, y6(e, n), t);
    return a
}
function y6(b, e) {
    return b ? b + "[" + e + "]" : e
}
function l6(b, e, a) {
    if (Array.isArray(a))
        for (let[n,t] of a.entries())
            l6(b, y6(e, n.toString()), t);
    else
        a instanceof Date ? b.push([e, a.toISOString()]) : typeof a == "boolean" ? b.push([e, a ? "1" : "0"]) : typeof a == "string" ? b.push([e, a]) : typeof a == "number" ? b.push([e, `${a}`]) : a == null ? b.push([e, ""]) : u6(a, e, b)
}
let X0 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Y0(b) {
    var e, a;
    let n = (e = b.innerText) != null ? e : ""
      , t = b.cloneNode(!0);
    if (!(t instanceof HTMLElement))
        return n;
    let d = !1;
    for (let i of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
        i.remove(),
        d = !0;
    let f = d ? (a = t.innerText) != null ? a : "" : n;
    return X0.test(f) && (f = f.replace(X0, "")),
    f
}
function j6(b) {
    let e = b.getAttribute("aria-label");
    if (typeof e == "string")
        return e.trim();
    let a = b.getAttribute("aria-labelledby");
    if (a) {
        let n = a.split(" ").map(t => {
            let d = document.getElementById(t);
            if (d) {
                let f = d.getAttribute("aria-label");
                return typeof f == "string" ? f.trim() : Y0(d).trim()
            }
            return null
        }
        ).filter(Boolean);
        if (n.length > 0)
            return n.join(", ")
    }
    return Y0(b).trim()
}
function Q6(b) {
    let e = r.useRef("")
      , a = r.useRef("");
    return m( () => {
        let n = b.current;
        if (!n)
            return "";
        let t = n.innerText;
        if (e.current === t)
            return a.current;
        let d = j6(n).trim().toLowerCase();
        return e.current = t,
        a.current = d,
        d
    }
    )
}
var Z6 = (b => (b[b.Open = 0] = "Open",
b[b.Closed = 1] = "Closed",
b))(Z6 || {})
  , K6 = (b => (b[b.Single = 0] = "Single",
b[b.Multi = 1] = "Multi",
b))(K6 || {})
  , J6 = (b => (b[b.Pointer = 0] = "Pointer",
b[b.Other = 1] = "Other",
b))(J6 || {})
  , e1 = (b => (b[b.OpenListbox = 0] = "OpenListbox",
b[b.CloseListbox = 1] = "CloseListbox",
b[b.GoToOption = 2] = "GoToOption",
b[b.Search = 3] = "Search",
b[b.ClearSearch = 4] = "ClearSearch",
b[b.RegisterOption = 5] = "RegisterOption",
b[b.UnregisterOption = 6] = "UnregisterOption",
b[b.RegisterLabel = 7] = "RegisterLabel",
b))(e1 || {});
function M0(b, e=a => a) {
    let a = b.activeOptionIndex !== null ? b.options[b.activeOptionIndex] : null
      , n = W6(e(b.options.slice()), d => d.dataRef.current.domRef.current)
      , t = a ? n.indexOf(a) : null;
    return t === -1 && (t = null),
    {
        options: n,
        activeOptionIndex: t
    }
}
let a1 = {
    1(b) {
        return b.dataRef.current.disabled || b.listboxState === 1 ? b : {
            ...b,
            activeOptionIndex: null,
            listboxState: 1
        }
    },
    0(b) {
        if (b.dataRef.current.disabled || b.listboxState === 0)
            return b;
        let e = b.activeOptionIndex
          , {isSelected: a} = b.dataRef.current
          , n = b.options.findIndex(t => a(t.dataRef.current.value));
        return n !== -1 && (e = n),
        {
            ...b,
            listboxState: 0,
            activeOptionIndex: e
        }
    },
    2(b, e) {
        var a;
        if (b.dataRef.current.disabled || b.listboxState === 1)
            return b;
        let n = M0(b)
          , t = G6(e, {
            resolveItems: () => n.options,
            resolveActiveIndex: () => n.activeOptionIndex,
            resolveId: d => d.id,
            resolveDisabled: d => d.dataRef.current.disabled
        });
        return {
            ...b,
            ...n,
            searchQuery: "",
            activeOptionIndex: t,
            activationTrigger: (a = e.trigger) != null ? a : 1
        }
    },
    3: (b, e) => {
        if (b.dataRef.current.disabled || b.listboxState === 1)
            return b;
        let a = b.searchQuery !== "" ? 0 : 1
          , n = b.searchQuery + e.value.toLowerCase()
          , t = (b.activeOptionIndex !== null ? b.options.slice(b.activeOptionIndex + a).concat(b.options.slice(0, b.activeOptionIndex + a)) : b.options).find(f => {
            var i;
            return !f.dataRef.current.disabled && ((i = f.dataRef.current.textValue) == null ? void 0 : i.startsWith(n))
        }
        )
          , d = t ? b.options.indexOf(t) : -1;
        return d === -1 || d === b.activeOptionIndex ? {
            ...b,
            searchQuery: n
        } : {
            ...b,
            searchQuery: n,
            activeOptionIndex: d,
            activationTrigger: 1
        }
    }
    ,
    4(b) {
        return b.dataRef.current.disabled || b.listboxState === 1 || b.searchQuery === "" ? b : {
            ...b,
            searchQuery: ""
        }
    },
    5: (b, e) => {
        let a = {
            id: e.id,
            dataRef: e.dataRef
        }
          , n = M0(b, t => [...t, a]);
        return b.activeOptionIndex === null && b.dataRef.current.isSelected(e.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(a)),
        {
            ...b,
            ...n
        }
    }
    ,
    6: (b, e) => {
        let a = M0(b, n => {
            let t = n.findIndex(d => d.id === e.id);
            return t !== -1 && n.splice(t, 1),
            n
        }
        );
        return {
            ...b,
            ...a,
            activationTrigger: 1
        }
    }
    ,
    7: (b, e) => ({
        ...b,
        labelId: e.id
    })
}
  , E0 = r.createContext(null);
E0.displayName = "ListboxActionsContext";
function Y(b) {
    let e = r.useContext(E0);
    if (e === null) {
        let a = new Error(`<${b} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(a, Y),
        a
    }
    return e
}
let U0 = r.createContext(null);
U0.displayName = "ListboxDataContext";
function G(b) {
    let e = r.useContext(U0);
    if (e === null) {
        let a = new Error(`<${b} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(a, G),
        a
    }
    return e
}
function b1(b, e) {
    return q(e.type, a1, b, e)
}
let t1 = r.Fragment;
function n1(b, e) {
    let {value: a, defaultValue: n, form: t, name: d, onChange: f, by: i= (y, o) => y === o, disabled: s=!1, horizontal: c=!1, multiple: A=!1, ...S} = b;
    const B = c ? "horizontal" : "vertical";
    let C = V(e)
      , [I=A ? [] : void 0,L] = V6(a, f, n)
      , [w,p] = r.useReducer(b1, {
        dataRef: r.createRef(),
        listboxState: 1,
        options: [],
        searchQuery: "",
        labelId: null,
        activeOptionIndex: null,
        activationTrigger: 1
    })
      , M = r.useRef({
        static: !1,
        hold: !1
    })
      , j = r.useRef(null)
      , Q = r.useRef(null)
      , v0 = r.useRef(null)
      , P = m(typeof i == "string" ? (y, o) => {
        let R = i;
        return (y == null ? void 0 : y[R]) === (o == null ? void 0 : o[R])
    }
    : i)
      , N = r.useCallback(y => q(x.mode, {
        1: () => I.some(o => P(o, y)),
        0: () => P(I, y)
    }), [I])
      , x = r.useMemo( () => ({
        ...w,
        value: I,
        disabled: s,
        mode: A ? 1 : 0,
        orientation: B,
        compare: P,
        isSelected: N,
        optionsPropsRef: M,
        labelRef: j,
        buttonRef: Q,
        optionsRef: v0
    }), [I, s, A, w]);
    W( () => {
        w.dataRef.current = x
    }
    , [x]),
    L6([x.buttonRef, x.optionsRef], (y, o) => {
        var R;
        p({
            type: 1
        }),
        S6(o, C6.Loose) || (y.preventDefault(),
        (R = x.buttonRef.current) == null || R.focus())
    }
    , x.listboxState === 0);
    let T6 = r.useMemo( () => ({
        open: x.listboxState === 0,
        disabled: s,
        value: I
    }), [x, s, I])
      , x6 = m(y => {
        let o = x.options.find(R => R.id === y);
        o && w0(o.dataRef.current.value)
    }
    )
      , v6 = m( () => {
        if (x.activeOptionIndex !== null) {
            let {dataRef: y, id: o} = x.options[x.activeOptionIndex];
            w0(y.current.value),
            p({
                type: 2,
                focus: O.Specific,
                id: o
            })
        }
    }
    )
      , w6 = m( () => p({
        type: 0
    }))
      , M6 = m( () => p({
        type: 1
    }))
      , k6 = m( (y, o, R) => y === O.Specific ? p({
        type: 2,
        focus: O.Specific,
        id: o,
        trigger: R
    }) : p({
        type: 2,
        focus: y,
        trigger: R
    }))
      , _6 = m( (y, o) => (p({
        type: 5,
        id: y,
        dataRef: o
    }),
    () => p({
        type: 6,
        id: y
    })))
      , g6 = m(y => (p({
        type: 7,
        id: y
    }),
    () => p({
        type: 7,
        id: null
    })))
      , w0 = m(y => q(x.mode, {
        0() {
            return L == null ? void 0 : L(y)
        },
        1() {
            let o = x.value.slice()
              , R = o.findIndex(K => P(K, y));
            return R === -1 ? o.push(y) : o.splice(R, 1),
            L == null ? void 0 : L(o)
        }
    }))
      , h6 = m(y => p({
        type: 3,
        value: y
    }))
      , A6 = m( () => p({
        type: 4
    }))
      , I6 = r.useMemo( () => ({
        onChange: w0,
        registerOption: _6,
        registerLabel: g6,
        goToOption: k6,
        closeListbox: M6,
        openListbox: w6,
        selectActiveOption: v6,
        selectOption: x6,
        search: h6,
        clearSearch: A6
    }), [])
      , P6 = {
        ref: C
    }
      , Z = r.useRef(null)
      , R6 = m0();
    return r.useEffect( () => {
        Z.current && n !== void 0 && R6.addEventListener(Z.current, "reset", () => {
            L == null || L(n)
        }
        )
    }
    , [Z, L]),
    J.createElement(E0.Provider, {
        value: I6
    }, J.createElement(U0.Provider, {
        value: x
    }, J.createElement(N6, {
        value: q(x.listboxState, {
            0: T0.Open,
            1: T0.Closed
        })
    }, d != null && I != null && u6({
        [d]: I
    }).map( ([y,o], R) => J.createElement(D6, {
        features: B6.Hidden,
        ref: R === 0 ? K => {
            var H0;
            Z.current = (H0 = K == null ? void 0 : K.closest("form")) != null ? H0 : null
        }
        : void 0,
        ...q6({
            key: y,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: s,
            name: y,
            value: o
        })
    })), X({
        ourProps: P6,
        theirProps: S,
        slot: T6,
        defaultTag: t1,
        name: "Listbox"
    }))))
}
let d1 = "button";
function f1(b, e) {
    var a;
    let n = x0()
      , {id: t=`headlessui-listbox-button-${n}`, ...d} = b
      , f = G("Listbox.Button")
      , i = Y("Listbox.Button")
      , s = V(f.buttonRef, e)
      , c = m0()
      , A = m(w => {
        switch (w.key) {
        case k.Space:
        case k.Enter:
        case k.ArrowDown:
            w.preventDefault(),
            i.openListbox(),
            c.nextFrame( () => {
                f.value || i.goToOption(O.First)
            }
            );
            break;
        case k.ArrowUp:
            w.preventDefault(),
            i.openListbox(),
            c.nextFrame( () => {
                f.value || i.goToOption(O.Last)
            }
            );
            break
        }
    }
    )
      , S = m(w => {
        switch (w.key) {
        case k.Space:
            w.preventDefault();
            break
        }
    }
    )
      , B = m(w => {
        if (H6(w.currentTarget))
            return w.preventDefault();
        f.listboxState === 0 ? (i.closeListbox(),
        c.nextFrame( () => {
            var p;
            return (p = f.buttonRef.current) == null ? void 0 : p.focus({
                preventScroll: !0
            })
        }
        )) : (w.preventDefault(),
        i.openListbox())
    }
    )
      , C = r6( () => {
        if (f.labelId)
            return [f.labelId, t].join(" ")
    }
    , [f.labelId, t])
      , I = r.useMemo( () => ({
        open: f.listboxState === 0,
        disabled: f.disabled,
        value: f.value
    }), [f])
      , L = {
        ref: s,
        id: t,
        type: $6(b, f.buttonRef),
        "aria-haspopup": "listbox",
        "aria-controls": (a = f.optionsRef.current) == null ? void 0 : a.id,
        "aria-expanded": f.listboxState === 0,
        "aria-labelledby": C,
        disabled: f.disabled,
        onKeyDown: A,
        onKeyUp: S,
        onClick: B
    };
    return X({
        ourProps: L,
        theirProps: d,
        slot: I,
        defaultTag: d1,
        name: "Listbox.Button"
    })
}
let i1 = "label";
function s1(b, e) {
    let a = x0()
      , {id: n=`headlessui-listbox-label-${a}`, ...t} = b
      , d = G("Listbox.Label")
      , f = Y("Listbox.Label")
      , i = V(d.labelRef, e);
    W( () => f.registerLabel(n), [n]);
    let s = m( () => {
        var A;
        return (A = d.buttonRef.current) == null ? void 0 : A.focus({
            preventScroll: !0
        })
    }
    )
      , c = r.useMemo( () => ({
        open: d.listboxState === 0,
        disabled: d.disabled
    }), [d]);
    return X({
        ourProps: {
            ref: i,
            id: n,
            onClick: s
        },
        theirProps: t,
        slot: c,
        defaultTag: i1,
        name: "Listbox.Label"
    })
}
let p1 = "ul"
  , c1 = W0.RenderStrategy | W0.Static;
function r1(b, e) {
    var a;
    let n = x0()
      , {id: t=`headlessui-listbox-options-${n}`, ...d} = b
      , f = G("Listbox.Options")
      , i = Y("Listbox.Options")
      , s = V(f.optionsRef, e)
      , c = m0()
      , A = m0()
      , S = E6()
      , B = ( () => S !== null ? (S & T0.Open) === T0.Open : f.listboxState === 0)();
    r.useEffect( () => {
        var p;
        let M = f.optionsRef.current;
        M && f.listboxState === 0 && M !== ((p = U6(M)) == null ? void 0 : p.activeElement) && M.focus({
            preventScroll: !0
        })
    }
    , [f.listboxState, f.optionsRef]);
    let C = m(p => {
        switch (A.dispose(),
        p.key) {
        case k.Space:
            if (f.searchQuery !== "")
                return p.preventDefault(),
                p.stopPropagation(),
                i.search(p.key);
        case k.Enter:
            if (p.preventDefault(),
            p.stopPropagation(),
            f.activeOptionIndex !== null) {
                let {dataRef: M} = f.options[f.activeOptionIndex];
                i.onChange(M.current.value)
            }
            f.mode === 0 && (i.closeListbox(),
            g0().nextFrame( () => {
                var M;
                return (M = f.buttonRef.current) == null ? void 0 : M.focus({
                    preventScroll: !0
                })
            }
            ));
            break;
        case q(f.orientation, {
            vertical: k.ArrowDown,
            horizontal: k.ArrowRight
        }):
            return p.preventDefault(),
            p.stopPropagation(),
            i.goToOption(O.Next);
        case q(f.orientation, {
            vertical: k.ArrowUp,
            horizontal: k.ArrowLeft
        }):
            return p.preventDefault(),
            p.stopPropagation(),
            i.goToOption(O.Previous);
        case k.Home:
        case k.PageUp:
            return p.preventDefault(),
            p.stopPropagation(),
            i.goToOption(O.First);
        case k.End:
        case k.PageDown:
            return p.preventDefault(),
            p.stopPropagation(),
            i.goToOption(O.Last);
        case k.Escape:
            return p.preventDefault(),
            p.stopPropagation(),
            i.closeListbox(),
            c.nextFrame( () => {
                var M;
                return (M = f.buttonRef.current) == null ? void 0 : M.focus({
                    preventScroll: !0
                })
            }
            );
        case k.Tab:
            p.preventDefault(),
            p.stopPropagation();
            break;
        default:
            p.key.length === 1 && (i.search(p.key),
            A.setTimeout( () => i.clearSearch(), 350));
            break
        }
    }
    )
      , I = r6( () => {
        var p;
        return (p = f.buttonRef.current) == null ? void 0 : p.id
    }
    , [f.buttonRef.current])
      , L = r.useMemo( () => ({
        open: f.listboxState === 0
    }), [f])
      , w = {
        "aria-activedescendant": f.activeOptionIndex === null || (a = f.options[f.activeOptionIndex]) == null ? void 0 : a.id,
        "aria-multiselectable": f.mode === 1 ? !0 : void 0,
        "aria-labelledby": I,
        "aria-orientation": f.orientation,
        id: t,
        onKeyDown: C,
        role: "listbox",
        tabIndex: 0,
        ref: s
    };
    return X({
        ourProps: w,
        theirProps: d,
        slot: L,
        defaultTag: p1,
        features: c1,
        visible: B,
        name: "Listbox.Options"
    })
}
let u1 = "li";
function y1(b, e) {
    let a = x0()
      , {id: n=`headlessui-listbox-option-${a}`, disabled: t=!1, value: d, ...f} = b
      , i = G("Listbox.Option")
      , s = Y("Listbox.Option")
      , c = i.activeOptionIndex !== null ? i.options[i.activeOptionIndex].id === n : !1
      , A = i.isSelected(d)
      , S = r.useRef(null)
      , B = Q6(S)
      , C = c6({
        disabled: t,
        value: d,
        domRef: S,
        get textValue() {
            return B()
        }
    })
      , I = V(e, S);
    W( () => {
        if (i.listboxState !== 0 || !c || i.activationTrigger === 0)
            return;
        let P = g0();
        return P.requestAnimationFrame( () => {
            var N, x;
            (x = (N = S.current) == null ? void 0 : N.scrollIntoView) == null || x.call(N, {
                block: "nearest"
            })
        }
        ),
        P.dispose
    }
    , [S, c, i.listboxState, i.activationTrigger, i.activeOptionIndex]),
    W( () => s.registerOption(n, C), [C, n]);
    let L = m(P => {
        if (t)
            return P.preventDefault();
        s.onChange(d),
        i.mode === 0 && (s.closeListbox(),
        g0().nextFrame( () => {
            var N;
            return (N = i.buttonRef.current) == null ? void 0 : N.focus({
                preventScroll: !0
            })
        }
        ))
    }
    )
      , w = m( () => {
        if (t)
            return s.goToOption(O.Nothing);
        s.goToOption(O.Specific, n)
    }
    )
      , p = X6()
      , M = m(P => p.update(P))
      , j = m(P => {
        p.wasMoved(P) && (t || c || s.goToOption(O.Specific, n, 0))
    }
    )
      , Q = m(P => {
        p.wasMoved(P) && (t || c && s.goToOption(O.Nothing))
    }
    )
      , v0 = r.useMemo( () => ({
        active: c,
        selected: A,
        disabled: t
    }), [c, A, t]);
    return X({
        ourProps: {
            id: n,
            ref: I,
            role: "option",
            tabIndex: t === !0 ? void 0 : -1,
            "aria-disabled": t === !0 ? !0 : void 0,
            "aria-selected": A,
            disabled: void 0,
            onClick: L,
            onFocus: w,
            onPointerEnter: M,
            onMouseEnter: M,
            onPointerMove: j,
            onMouseMove: j,
            onPointerLeave: Q,
            onMouseLeave: Q
        },
        theirProps: f,
        slot: v0,
        defaultTag: u1,
        name: "Listbox.Option"
    })
}
let l1 = z(n1)
  , o1 = z(f1)
  , m1 = z(s1)
  , T1 = z(r1)
  , x1 = z(y1)
  , B1 = Object.assign(l1, {
    Button: o1,
    Label: m1,
    Options: T1,
    Option: x1
});
function v1({title: b, titleId: e, ...a}, n) {
    return r.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": e
    }, a), b ? r.createElement("title", {
        id: e
    }, b) : null, r.createElement("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
    }))
}
const w1 = r.forwardRef(v1)
  , q1 = w1
  , a0 = [{
    inputs: [],
    name: "ZeroAddress",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldAcross",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newAcross",
        type: "address"
    }],
    name: "AcrossUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "uniqueCounter",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "address",
        name: "sourceChainInputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "MsgSent",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTargetChainConnector",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTargetChainConnector",
        type: "address"
    }],
    name: "TargetChainConnectorUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTeleBtc",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTeleBtc",
        type: "address"
    }],
    name: "TargetChainTeleBTCUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldWrappedNativeToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newWrappedNativeToken",
        type: "address"
    }],
    name: "WrappedNativeTokenUpdated",
    type: "event"
}, {
    inputs: [],
    name: "ETH_ADDR",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "ONE_HUNDRED_PERCENT",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "across",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "currChainId",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_targetChainTeleBTC",
        type: "address"
    }, {
        internalType: "address",
        name: "_across",
        type: "address"
    }, {
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_targetChainId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_currChainId",
        type: "uint256"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_across",
        type: "address"
    }],
    name: "setAcross",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_targetChainConnectorProxy",
        type: "address"
    }],
    name: "setTargetChainConnectorProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_targetChainTeleBTC",
        type: "address"
    }],
    name: "setTargetChainTeleBTC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "address",
        name: "_exchangeConnector",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
    }, {
        internalType: "bool",
        name: "_isInputFixed",
        type: "bool"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        components: [{
            internalType: "bytes",
            name: "userScript",
            type: "bytes"
        }, {
            internalType: "enum ScriptTypes",
            name: "scriptType",
            type: "uint8"
        }, {
            internalType: "bytes",
            name: "lockerLockingScript",
            type: "bytes"
        }],
        internalType: "struct IEthConnector.UserAndLockerScript",
        name: "_scripts",
        type: "tuple"
    }, {
        internalType: "int64",
        name: "_relayerFeePercentage",
        type: "int64"
    }, {
        internalType: "uint256",
        name: "_thirdParty",
        type: "uint256"
    }],
    name: "swapAndUnwrap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "targetChainConnectorProxy",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "targetChainId",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "targetChainTeleBTC",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "uniqueCounter",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , G0 = "0x608060405234801561001057600080fd5b5061174f806100206000396000f3fe6080604052600436106100f35760003560e01c8063146ffb26146100ff57806317fcb39b14610128578063201c527c14610160578063292c1d92146101755780634d5f71bb146101955780635c975abb146101b557806361be10f2146101d8578063715018a6146101f8578063754d14611461020d5780637753f47b1461022d5780638da5cb5b14610255578063a197cbe61461026a578063a6b63eb81461028a578063c4a86b31146102aa578063d4dfc8c3146102ca578063d83f0fc5146102e0578063da058ae3146102f6578063dd0081c714610316578063e63ea4081461032c578063f2fde38b1461034c57600080fd5b366100fa57005b600080fd5b34801561010b57600080fd5b5061011560cc5481565b6040519081526020015b60405180910390f35b34801561013457600080fd5b5060cd54610148906001600160a01b031681565b6040516001600160a01b03909116815260200161011f565b61017361016e3660046111db565b61036c565b005b34801561018157600080fd5b5060c954610148906001600160a01b031681565b3480156101a157600080fd5b5060ca54610148906001600160a01b031681565b3480156101c157600080fd5b5060975460ff16604051901515815260200161011f565b3480156101e457600080fd5b506101736101f336600461116d565b6104ac565b34801561020457600080fd5b506101736104c0565b34801561021957600080fd5b5061017361022836600461116d565b6104d4565b34801561023957600080fd5b5061014873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561026157600080fd5b506101486104e5565b34801561027657600080fd5b5061017361028536600461116d565b6104f4565b34801561029657600080fd5b506101736102a5366004611187565b610505565b3480156102b657600080fd5b5060cb54610148906001600160a01b031681565b3480156102d657600080fd5b5061011560ce5481565b3480156102ec57600080fd5b5061011560cf5481565b34801561030257600080fd5b5061017361031136600461116d565b61065a565b34801561032257600080fd5b5061011561271081565b34801561033857600080fd5b506101736103473660046112b9565b61066b565b34801561035857600080fd5b5061017361036736600461116d565b610767565b6103746107dd565b61038088888787610837565b600060ce5460cf5461038f3390565b8c8c8c60018181106103b157634e487b7160e01b600052603260045260246000fd5b905060200201358b8b8b8b8a6040516020016103d69a999897969594939291906114d5565b60405160208183030381529060405290507fe69fe079b662ff18874cc35b6a12c636af0eca0fd56cbd0cee7ddec918aea82760ce54828d8c8c600081811061042e57634e487b7160e01b600052603260045260246000fd5b9050602002013560405161044594939291906115f5565b60405180910390a160ce805490600061045d836116b1565b91905055506104958b8a8a600081811061048757634e487b7160e01b600052603260045260246000fd5b905060200201358386610928565b506104a06001606555565b50505050505050505050565b6104b4610b33565b6104bd81610b92565b50565b6104c8610b33565b6104d26000610c24565b565b6104dc610b33565b6104bd81610c76565b6033546001600160a01b031690565b6104fc610b33565b6104bd81610d08565b600054610100900460ff16158080156105255750600054600160ff909116105b8061053f5750303b15801561053f575060005460ff166001145b6105a75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156105ca576000805461ff0019166101001790555b6105d2610d9a565b6105da610dc9565b6105e2610df8565b6105eb86610c76565b6105f485610b92565b6105fd84610e27565b60cc83905560cf829055600060ce558015610652576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b610662610b33565b6104bd81610e27565b610673610b33565b6001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156106e1576040516001600160a01b038316908290600081818185875af1925050503d8060008114610652576040519150601f19603f3d011682016040523d82523d6000602084013e610652565b60405163a9059cbb60e01b81526001600160a01b0384169063a9059cbb9061070f90859085906004016114a9565b602060405180830381600087803b15801561072957600080fd5b505af115801561073d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076191906112f4565b50505050565b61076f610b33565b6001600160a01b0381166107d45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161059e565b6104bd81610c24565b600260655414156108305760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161059e565b6002606555565b60cb546001600160a01b0316828261085060018261166e565b81811061086d57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610882919061116d565b6001600160a01b0316146108d85760405162461bcd60e51b815260206004820152601d60248201527f4574684d616e616765724c6f6769633a20696e76616c69642070617468000000604482015260640161059e565b600283146107615760405162461bcd60e51b815260206004820152601e60248201527f4574684d616e616765724c6f6769633a2077726f6e6720616d6f756e74730000604482015260640161059e565b6001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561097f5782341461096c5760405162461bcd60e51b815260040161059e90611574565b60cd546001600160a01b03169350610abc565b341561099d5760405162461bcd60e51b815260040161059e90611574565b6001600160a01b0384166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260448101869052606401602060405180830381600087803b1580156109fb57600080fd5b505af1158015610a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3391906112f4565b5060c95460405163095ea7b360e01b81526001600160a01b038681169263095ea7b392610a68929091169087906004016114a9565b602060405180830381600087803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aba91906112f4565b505b60c95460ca5460cc54604051610b25936001600160a01b0390811693610af59391169189918991889042908b9060001990602401611442565b60408051601f198184030181529190526020810180516001600160e01b0316631186ec3360e01b17905234610eb9565b5050505050565b6001606555565b33610b3c6104e5565b6001600160a01b0316146104d25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161059e565b806001600160a01b038116610bba5760405163d92e233d60e01b815260040160405180910390fd5b60c9546040517f06e5f2ca1234f717a2031f662608c02182d4f8bdc3dab013ec4c04eb9755313291610bf9916001600160a01b03909116908590611428565b60405180910390a15060c980546001600160a01b0319166001600160a01b0392909216919091179055565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b806001600160a01b038116610c9e5760405163d92e233d60e01b815260040160405180910390fd5b60cb546040517f37b4bc62091d0acd3300990bd241557cbc8040fde4cf701b91d8bac7a69e016091610cdd916001600160a01b03909116908590611428565b60405180910390a15060cb80546001600160a01b0319166001600160a01b0392909216919091179055565b806001600160a01b038116610d305760405163d92e233d60e01b815260040160405180910390fd5b60ca546040517fbac4f45eeeeb3c9688d046eddcdd28783777a2aa7beffcdf0acb76487d79636491610d6f916001600160a01b03909116908590611428565b60405180910390a15060ca80546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16610dc15760405162461bcd60e51b815260040161059e906115aa565b6104d2610ee9565b600054610100900460ff16610df05760405162461bcd60e51b815260040161059e906115aa565b6104d2610f19565b600054610100900460ff16610e1f5760405162461bcd60e51b815260040161059e906115aa565b6104d2610f40565b806001600160a01b038116610e4f5760405163d92e233d60e01b815260040160405180910390fd5b60cd546040517fffd9582901c27177dbd18194ae8017f10d8b21f98a0da2ea5197e0b20dc13d7091610e8e916001600160a01b03909116908590611428565b60405180910390a15060cd80546001600160a01b0319166001600160a01b0392909216919091179055565b6060610edf8484846040518060600160405280602981526020016116f160299139610f73565b90505b9392505050565b600054610100900460ff16610f105760405162461bcd60e51b815260040161059e906115aa565b6104d233610c24565b600054610100900460ff16610b2c5760405162461bcd60e51b815260040161059e906115aa565b600054610100900460ff16610f675760405162461bcd60e51b815260040161059e906115aa565b6097805460ff19169055565b606082471015610fd45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161059e565b843b6110225760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059e565b600080866001600160a01b0316858760405161103e919061140c565b60006040518083038185875af1925050503d806000811461107b576040519150601f19603f3d011682016040523d82523d6000602084013e611080565b606091505b509150915061109082828661109b565b979650505050505050565b606083156110aa575081610ee2565b8251156110ba5782518084602001fd5b8160405162461bcd60e51b815260040161059e91906114c2565b80356001600160a01b03811681146110eb57600080fd5b919050565b60008083601f840112611101578182fd5b5081356001600160401b03811115611117578182fd5b6020830191508360208260051b850101111561113257600080fd5b9250929050565b80356110eb816116e2565b8035600781900b81146110eb57600080fd5b600060608284031215611167578081fd5b50919050565b60006020828403121561117e578081fd5b610ee2826110d4565b600080600080600060a0868803121561119e578081fd5b6111a7866110d4565b94506111b5602087016110d4565b93506111c3604087016110d4565b94979396509394606081013594506080013592915050565b6000806000806000806000806000806101008b8d0312156111fa578485fd5b6112038b6110d4565b995061121160208c016110d4565b985060408b01356001600160401b038082111561122c578687fd5b6112388e838f016110f0565b909a50985088915061124c60608e01611139565b975060808d0135915080821115611261578687fd5b61126d8e838f016110f0565b909750955060a08d0135915080821115611285578485fd5b506112928d828e01611156565b9350506112a160c08c01611144565b915060e08b013590509295989b9194979a5092959850565b6000806000606084860312156112cd578283fd5b6112d6846110d4565b92506112e4602085016110d4565b9150604084013590509250925092565b600060208284031215611305578081fd5b8151610ee2816116e2565b81835260006020808501945082825b8581101561134b576001600160a01b03611338836110d4565b168752958201959082019060010161131f565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452611397816020860160208601611685565b601f01601f19169290920160200192915050565b60006113b7828361162a565b606085526113c9606086018284611356565b9150506020830135600681106113dd578283fd5b60208501526113ef604084018461162a565b8583036040870152611402838284611356565b9695505050505050565b6000825161141e818460208701611685565b9190910192915050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b038981168252881660208201526040810187905260608101869052600785900b608082015263ffffffff841660a082015261010060c082018190526000906114938382018661137f565b9150508260e08301529998505050505050505050565b6001600160a01b03929092168252602082015260400190565b602081526000610ee2602083018461137f565b610140808252600d908201526c073776170416e64556e7772617609c1b610160820152602081018b9052604081018a90526001600160a01b0389811660608301528816608082015260a0810187905285151560c082015261018060e082018190526000906115468184018789611310565b905082810361010084015261155b81866113ab565b915050826101208301529b9a5050505050505050505050565b6020808252601c908201527b4574684d616e616765724c6f6769633a2077726f6e672076616c756560201b604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b84815260806020820152600061160e608083018661137f565b6001600160a01b03949094166040830152506060015292915050565b6000808335601e19843603018112611640578283fd5b83016020810192503590506001600160401b0381111561165f57600080fd5b80360383131561113257600080fd5b600082821015611680576116806116cc565b500390565b60005b838110156116a0578181015183820152602001611688565b838111156107615750506000910152565b60006000198214156116c5576116c56116cc565b5060010190565b634e487b7160e01b600052601160045260246000fd5b80151581146104bd57600080fdfe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a2646970667358221220d79e2f9fd5a2d92bb64312b9ba17b9a62e031b68ba3e6dec92538ecf41de626864736f6c63430008040033";
class h0 extends F {
    constructor(...e) {
        e.length === 1 ? super(a0, G0, e[0]) : super(...e)
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(a0)
    }
    static connect(e, a) {
        return new g(e,a0,a)
    }
}
u(h0, "bytecode", G0),
u(h0, "abi", a0);
const b0 = [{
    inputs: [{
        internalType: "string",
        name: "name_",
        type: "string"
    }, {
        internalType: "string",
        name: "symbol_",
        type: "string"
    }, {
        internalType: "uint256",
        name: "initialMintedAmount",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}]
  , j0 = "0x60806040523480156200001157600080fd5b5060405162000c7338038062000c738339810160408190526200003491620002cf565b8251839083906200004d90600390602085019062000176565b5080516200006390600490602084019062000176565b505050620000816200007a6200008a60201b60201c565b826200008e565b505050620003b7565b3390565b6001600160a01b038216620000e95760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000fd91906200033f565b90915550506001600160a01b038216600090815260208190526040812080548392906200012c9084906200033f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001849062000364565b90600052602060002090601f016020900481019282620001a85760008555620001f3565b82601f10620001c357805160ff1916838001178555620001f3565b82800160010185558215620001f3579182015b82811115620001f3578251825591602001919060010190620001d6565b506200020192915062000205565b5090565b5b8082111562000201576000815560010162000206565b600082601f8301126200022d578081fd5b81516001600160401b03808211156200024a576200024a620003a1565b604051601f8301601f19908116603f01168101908282118183101715620002755762000275620003a1565b8160405283815260209250868385880101111562000291578485fd5b8491505b83821015620002b4578582018301518183018401529082019062000295565b83821115620002c557848385830101525b9695505050505050565b600080600060608486031215620002e4578283fd5b83516001600160401b0380821115620002fb578485fd5b62000309878388016200021c565b945060208601519150808211156200031f578384fd5b506200032e868287016200021c565b925050604084015190509250925092565b600082198211156200035f57634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200037957607f821691505b602082108114156200039b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6108ac80620003c76000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100df57806323b872dd146100f1578063313ce56714610104578063395093511461011357806370a082311461012657806395d89b411461014f578063a457c2d714610157578063a9059cbb1461016a578063dd62ed3e1461017d575b600080fd5b6100a66101b6565b6040516100b391906107c4565b60405180910390f35b6100cf6100ca36600461079b565b610248565b60405190151581526020016100b3565b6002545b6040519081526020016100b3565b6100cf6100ff366004610760565b61025e565b604051601281526020016100b3565b6100cf61012136600461079b565b61030d565b6100e361013436600461070d565b6001600160a01b031660009081526020819052604090205490565b6100a6610349565b6100cf61016536600461079b565b610358565b6100cf61017836600461079b565b6103f1565b6100e361018b36600461072e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101c59061083b565b80601f01602080910402602001604051908101604052809291908181526020018280546101f19061083b565b801561023e5780601f106102135761010080835404028352916020019161023e565b820191906000526020600020905b81548152906001019060200180831161022157829003601f168201915b5050505050905090565b60006102553384846103fe565b50600192915050565b600061026b848484610522565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156102f55760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61030285338584036103fe565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610255918590610344908690610817565b6103fe565b6060600480546101c59061083b565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103da5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102ec565b6103e733858584036103fe565b5060019392505050565b6000610255338484610522565b6001600160a01b0383166104605760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102ec565b6001600160a01b0382166104c15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102ec565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105865760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102ec565b6001600160a01b0382166105e85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102ec565b6001600160a01b038316600090815260208190526040902054818110156106605760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102ec565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610697908490610817565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106e391815260200190565b60405180910390a350505050565b80356001600160a01b038116811461070857600080fd5b919050565b60006020828403121561071e578081fd5b610727826106f1565b9392505050565b60008060408385031215610740578081fd5b610749836106f1565b9150610757602084016106f1565b90509250929050565b600080600060608486031215610774578081fd5b61077d846106f1565b925061078b602085016106f1565b9150604084013590509250925092565b600080604083850312156107ad578182fd5b6107b6836106f1565b946020939093013593505050565b6000602080835283518082850152825b818110156107f0578581018301518582016040015282016107d4565b818111156108015783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561083657634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061084f57607f821691505b6020821081141561087057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220ce0f23040de97c76dfdbc568c33696152e12655988777e4e3f9c718a03433d2164736f6c63430008040033";
class Q0 extends F {
    constructor(...e) {
        e.length === 1 ? super(b0, j0, e[0]) : super(...e)
    }
    deploy(e, a, n, t) {
        return super.deploy(e, a, n, t || {})
    }
    getDeployTransaction(e, a, n, t) {
        return super.getDeployTransaction(e, a, n, t || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(b0)
    }
    static connect(e, a) {
        return new g(e,b0,a)
    }
}
u(Q0, "bytecode", j0),
u(Q0, "abi", b0);
const t0 = [{
    inputs: [],
    name: "ZeroAddress",
    type: "error"
}, {
    inputs: [],
    name: "ZeroValue",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "netMinted",
        type: "uint256"
    }],
    name: "ActivateLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "burntAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "lockerFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "burningTime",
        type: "uint256"
    }],
    name: "BurnByLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "BurnerAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "BurnerRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "addedCollateral",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "addingTime",
        type: "uint256"
    }],
    name: "CollateralAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "removedCollateral",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "removingTime",
        type: "uint256"
    }],
    name: "CollateralRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "addingTime",
        type: "uint256"
    }],
    name: "LockerAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "liquidatorAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "teleBTCAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "liquidateTime",
        type: "uint256"
    }],
    name: "LockerLiquidated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTUnlockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenUnlockedAmount",
        type: "uint256"
    }],
    name: "LockerRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "rewardRecipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "slashedCollateralAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "slashTime",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "isForCCBurn",
        type: "bool"
    }],
    name: "LockerSlashed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "buyerAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "slashingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "teleBTCAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "slashingTime",
        type: "uint256"
    }],
    name: "LockerSlashedCollateralSold",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "receiver",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "mintedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "lockerFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "mintingTime",
        type: "uint256"
    }],
    name: "MintByLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "MinterAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "MinterRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldCCBurnRouter",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newCCBurnRouter",
        type: "address"
    }],
    name: "NewCCBurnRouter",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldCollateralRatio",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newCollateralRatio",
        type: "uint256"
    }],
    name: "NewCollateralRatio",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldLiquidationRatio",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newLiquidationRatio",
        type: "uint256"
    }],
    name: "NewLiquidationRatio",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldLockerPercentageFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newLockerPercentageFee",
        type: "uint256"
    }],
    name: "NewLockerPercentageFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldMinRequiredTDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newMinRequiredTDTLockedAmount",
        type: "uint256"
    }],
    name: "NewMinRequiredTDTLockedAmount",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldMinRequiredTNTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newMinRequiredTNTLockedAmount",
        type: "uint256"
    }],
    name: "NewMinRequiredTNTLockedAmount",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldPriceOracle",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newPriceOracle",
        type: "address"
    }],
    name: "NewPriceOracle",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldPriceWithDiscountRatio",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newPriceWithDiscountRatio",
        type: "uint256"
    }],
    name: "NewPriceWithDiscountRatio",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTST",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTST",
        type: "address"
    }],
    name: "NewTST",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTeleBTC",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTeleBTC",
        type: "address"
    }],
    name: "NewTeleBTC",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }],
    name: "RequestAddLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "inactivationTimestamp",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "netMinted",
        type: "uint256"
    }],
    name: "RequestInactivateLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }],
    name: "RevokeAddLockerRequest",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    inputs: [],
    name: "HEALTH_FACTOR",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "INACTIVATION_DELAY",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "MAX_LOCKER_FEE",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "NATIVE_TOKEN",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "NATIVE_TOKEN_DECIMAL",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "ONE_HUNDRED_PERCENT",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "TeleportDAOToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "UPPER_HEALTH_FACTOR",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "addBurner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_addingNativeTokenAmount",
        type: "uint256"
    }],
    name: "addCollateral",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }],
    name: "addLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "burn",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "burners",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_collateralAmount",
        type: "uint256"
    }],
    name: "buySlashedCollateralOfLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "ccBurnRouter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "collateralRatio",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "exchangeConnector",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }],
    name: "getLockerCapacity",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }],
    name: "getLockerLockingScript",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }],
    name: "getLockerTargetAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getNumberOfLockers",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_teleBTC",
        type: "address"
    }, {
        internalType: "address",
        name: "_priceOracle",
        type: "address"
    }, {
        internalType: "address",
        name: "_ccBurnRouter",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_minRequiredTDTLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_minRequiredTNTLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_collateralRatio",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_liquidationRatio",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_lockerPercentageFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_priceWithDiscountRatio",
        type: "uint256"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }],
    name: "isLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }],
    name: "isLockerActive",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "libConstants",
    outputs: [{
        internalType: "uint256",
        name: "OneHundredPercent",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "HealthFactor",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "UpperHealthFactor",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "MaxLockerFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "NativeTokenDecimal",
        type: "uint256"
    }, {
        internalType: "address",
        name: "NativeToken",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "libParams",
    outputs: [{
        internalType: "address",
        name: "teleportDAOToken",
        type: "address"
    }, {
        internalType: "address",
        name: "teleBTC",
        type: "address"
    }, {
        internalType: "address",
        name: "ccBurnRouter",
        type: "address"
    }, {
        internalType: "address",
        name: "exchangeConnector",
        type: "address"
    }, {
        internalType: "address",
        name: "priceOracle",
        type: "address"
    }, {
        internalType: "uint256",
        name: "minRequiredTDTLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "minRequiredTNTLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lockerPercentageFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "collateralRatio",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "liquidationRatio",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "priceWithDiscountRatio",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "inactivationDelay",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_collateralAmount",
        type: "uint256"
    }],
    name: "liquidateLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "liquidationRatio",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "lockerInactivationTimestamp",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "lockerLeavingAcceptance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    name: "lockerTargetAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "lockersMapping",
    outputs: [{
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "lockerRescueType",
        type: "uint8"
    }, {
        internalType: "bytes",
        name: "lockerRescueScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "TDTLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "nativeTokenLockedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "netMinted",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "slashingTeleBTCAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reservedNativeTokenForSlash",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "isLocker",
        type: "bool"
    }, {
        internalType: "bool",
        name: "isCandidate",
        type: "bool"
    }, {
        internalType: "bool",
        name: "isScriptHash",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minRequiredTDTLockedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "minRequiredTNTLockedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "address",
        name: "_receiver",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "minters",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "pauseLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "priceOfOneUnitOfCollateralInBTC",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "priceOracle",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "priceWithDiscountRatio",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "removeBurner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_removingNativeTokenAmount",
        type: "uint256"
    }],
    name: "removeCollateral",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }],
    name: "removeLockerByOwner",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "requestActivation",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "requestInactivation",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_candidateLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_lockedTSTAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_lockedNativeTokenAmount",
        type: "uint256"
    }, {
        internalType: "enum ScriptTypes",
        name: "_lockerRescueType",
        type: "uint8"
    }, {
        internalType: "bytes",
        name: "_lockerRescueScript",
        type: "bytes"
    }],
    name: "requestToBecomeLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "revokeRequest",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "selfRemoveLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_ccBurnRouter",
        type: "address"
    }],
    name: "setCCBurnRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_collateralRatio",
        type: "uint256"
    }],
    name: "setCollateralRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_liquidationRatio",
        type: "uint256"
    }],
    name: "setLiquidationRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_lockerPercentageFee",
        type: "uint256"
    }],
    name: "setLockerPercentageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_minRequiredTDTLockedAmount",
        type: "uint256"
    }],
    name: "setMinRequiredTDTLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_minRequiredTNTLockedAmount",
        type: "uint256"
    }],
    name: "setMinRequiredTNTLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_priceOracle",
        type: "address"
    }],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_priceWithDiscountRatio",
        type: "uint256"
    }],
    name: "setPriceWithDiscountRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_TST",
        type: "address"
    }],
    name: "setTST",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_teleBTC",
        type: "address"
    }],
    name: "setTeleBTC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_slasher",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_recipient",
        type: "address"
    }],
    name: "slashIdleLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_slasher",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "slashThiefLocker",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "teleBTC",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalNumberOfCandidates",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalNumberOfLockers",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "unPauseLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
  , Z0 = "0x608060405234801561001057600080fd5b50615c0180620000216000396000f3fe6080604052600436106103505760003560e01c80637da5f0da116101be578063bb4a2509116100f3578063bb4a250914610999578063bc805d1d146109b9578063bd60e794146109cf578063c0924b8014610a94578063c4d10b6a14610ab4578063cdcbc87914610ad4578063d5a38a9114610b3e578063dd0081c7146105ed578063e85501d814610b5e578063e955de4514610b73578063ed110a9c14610b88578063ee1f1c7014610b9e578063ef69a7bc14610bbe578063f2fde38b14610bd3578063f44637ba14610bf3578063f46eccc414610c13578063f73e3a9514610c43578063ffc9f70414610c6357600080fd5b80637da5f0da146107735780637f0f1817146107a357806388aa0a52146107c35780638d3d78cd146107d95780638da5cb5b146107f95780638fe85fe71461080e578063946ce8cd1461082e57806396ec39e81461084e578063983b2d561461086e5780639bf098821461088e578063a839db24146108ae578063af1ea795146108ce578063aff2faa314610905578063b1016bdf14610925578063b291ec1314610938578063b43022581461094e578063b4eae1cb14610963578063b734de261461097957600080fd5b806343b937071161029457806343b937071461058d57806345cc5890146105ad578063530e784f146105cd57806354509b97146105ed57806359bb9189146106035780635a8d80b8146106185780635c975abb146106385780635d6464ba146106505780636060663e1461067d5780636136c21f1461069d578063613e2e1e146106ca57806363908020146106df5780636600203d146106f55780636a030fc3146107155780636d32395c146107355780636d75b9ee1461074b578063715018a61461075e578063768ebb12146105ed57600080fd5b8063028468581461035557806303d41e0e146103775780630c42cbc9146103bc578063108f438d146103df5780631697565b1461040c5780631775765f1461042c5780631fcfe19c146104425780632630c12f14610462578063264db4ae14610482578063287983ab146104975780632f5b04ac146104b75780633092afd5146104ce57806331f7d964146104ee5780633237c1581461050357806338463cff1461051657806341f3ec111461053657806341fae57914610577575b600080fd5b34801561036157600080fd5b50610375610370366004614dfa565b610c78565b005b34801561038357600080fd5b506103a7610392366004614dfa565b60126020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156103c857600080fd5b506103d1601281565b6040519081526020016103b3565b3480156103eb57600080fd5b506000546103ff906001600160a01b031681565b6040516103b39190615486565b34801561041857600080fd5b506103a7610427366004614efa565b610d33565b34801561043857600080fd5b506103d160095481565b34801561044e57600080fd5b506103d161045d366004614faf565b610f51565b34801561046e57600080fd5b506004546103ff906001600160a01b031681565b34801561048e57600080fd5b506103d161130f565b3480156104a357600080fd5b506103a76104b2366004614dfa565b6113a2565b3480156104c357600080fd5b506103d16205460081565b3480156104da57600080fd5b506103756104e9366004614dfa565b61185b565b3480156104fa57600080fd5b506103ff600181565b6103a7610511366004615191565b61190d565b34801561052257600080fd5b506103d1610531366004615008565b611b2d565b34801561054257600080fd5b506103ff6105513660046150e8565b80516020818301810180516010825292820191909301209152546001600160a01b031681565b34801561058357600080fd5b506103d160055481565b34801561059957600080fd5b506103a76105a8366004614e8e565b611f5e565b3480156105b957600080fd5b506103a76105c8366004614dfa565b6121af565b3480156105d957600080fd5b506103756105e8366004614dfa565b612356565b3480156105f957600080fd5b506103d161271081565b34801561060f57600080fd5b506103a76123fa565b34801561062457600080fd5b506002546103ff906001600160a01b031681565b34801561064457600080fd5b5060bc5460ff166103a7565b34801561065c57600080fd5b5061067061066b366004614dfa565b612523565b6040516103b39190615518565b34801561068957600080fd5b50610375610698366004615191565b6125f6565b3480156106a957600080fd5b506103d16106b8366004614dfa565b600e6020526000908152604090205481565b3480156106d657600080fd5b50610375612665565b3480156106eb57600080fd5b506103d160075481565b34801561070157600080fd5b50610375610710366004615191565b612677565b34801561072157600080fd5b506103a7610730366004614dfa565b612715565b34801561074157600080fd5b506103d160065481565b6103a7610759366004614e8e565b612797565b34801561076a57600080fd5b5061037561288e565b34801561077f57600080fd5b506103a761078e366004614dfa565b600f6020526000908152604090205460ff1681565b3480156107af57600080fd5b506103756107be366004614dfa565b612896565b3480156107cf57600080fd5b506103d1600b5481565b3480156107e557600080fd5b506001546103ff906001600160a01b031681565b34801561080557600080fd5b506103ff61293a565b34801561081a57600080fd5b50610375610829366004615191565b612949565b34801561083a57600080fd5b50610375610849366004615191565b6129e3565b34801561085a57600080fd5b506103a7610869366004614e8e565b612a52565b34801561087a57600080fd5b50610375610889366004614dfa565b612f4d565b34801561089a57600080fd5b506103756108a9366004615191565b613003565b3480156108ba57600080fd5b506103756108c9366004615191565b613051565b3480156108da57600080fd5b506108ee6108e9366004614dfa565b6130bf565b6040516103b39b9a9998979695949392919061552b565b34801561091157600080fd5b506103a7610920366004614f70565b613237565b6103a7610933366004615051565b613285565b34801561094457600080fd5b506103d1600a5481565b34801561095a57600080fd5b506103a76133d8565b34801561096f57600080fd5b506103d160085481565b34801561098557600080fd5b506103a7610994366004614eb7565b613486565b3480156109a557600080fd5b506103756109b4366004614e14565b61361f565b3480156109c557600080fd5b506103d16130d481565b3480156109db57600080fd5b50601954601a54601b54601c54601d54601e54601f54602054602154602254602354602454610a249b6001600160a01b039081169b81169a81169981169816969594939291908c565b604080516001600160a01b039d8e1681529b8d1660208d0152998c16998b0199909952968a1660608a015298909416608088015260a087019290925260c086015260e0850152610100840152610120830193909352610140820192909252610160810191909152610180016103b3565b348015610aa057600080fd5b506003546103ff906001600160a01b031681565b348015610ac057600080fd5b506103ff610acf366004614f70565b6137c8565b348015610ae057600080fd5b50601354601454601554601654601754601854610b089594939291906001600160a01b031686565b60408051968752602087019590955293850192909252606084015260808301526001600160a01b031660a082015260c0016103b3565b348015610b4a57600080fd5b506103d1610b59366004614dfa565b6137fd565b348015610b6a57600080fd5b506103a7613946565b348015610b7f57600080fd5b50610375613cab565b348015610b9457600080fd5b506103d1600c5481565b348015610baa57600080fd5b50610375610bb9366004614dfa565b613cbb565b348015610bca57600080fd5b50600c546103d1565b348015610bdf57600080fd5b50610375610bee366004614dfa565b613e01565b348015610bff57600080fd5b50610375610c0e366004614dfa565b613e7a565b348015610c1f57600080fd5b506103a7610c2e366004614dfa565b60116020526000908152604090205460ff1681565b348015610c4f57600080fd5b50610375610c5e366004614dfa565b613f30565b348015610c6f57600080fd5b506103a7613fd4565b806001600160a01b038116610ca05760405163d92e233d60e01b815260040160405180910390fd5b610ca8614470565b6001600160a01b03821660009081526012602052604090205460ff16610ce95760405162461bcd60e51b8152600401610ce0906156ee565b60405180910390fd5b6001600160a01b038216600081815260126020526040808220805460ff19169055517f90eabbc0c667db2a5029ed6bc0f5fe9f356d11684a4ca9fcfaec0e53f12b9c8e9190a25050565b6000610d3d6144cf565b610d45614529565b6002546001600160a01b0316336001600160a01b031614610d785760405162461bcd60e51b8152600401610ce090615731565b6001600160a01b0386166000908152600d602052604080822090516343196d1d60e01b815273__$e73bdc529e43686130bc0575eb4e830f23$__916343196d1d91610dd091906013906019908c908b90600401615900565b60206040518083038186803b158015610de857600080fd5b505af4158015610dfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2091906151a9565b90506001600160a01b0383166108fc610e3988876159d9565b610e438785615afc565b610e4d91906159f1565b6040518115909202916000818181858888f19350505050158015610e75573d6000803e3d6000fd5b506000610e8287866159d9565b610e8c8684615afc565b610e9691906159f1565b610ea09083615b1b565b6040519091506001600160a01b0387169082156108fc029083906000818181858888f19350505050158015610ed9573d6000803e3d6000fd5b50836001600160a01b0316866001600160a01b0316896001600160a01b03167fab522c1322c34ea455e8f541ecfe1b73a29039f3658bff658cf12c9fd26dc016848987426001604051610f309594939291906159b4565b60405180910390a4600192505050610f486001608a55565b95945050505050565b6000826001600160a01b038116610f7b5760405163d92e233d60e01b815260040160405180910390fd5b8280610f9a57604051637c946ed760e01b815260040160405180910390fd5b610fa26144cf565b610faa614529565b3360009081526011602052604090205460ff166110095760405162461bcd60e51b815260206004820152601e60248201527f4c6f636b6572733a206f6e6c79206d696e746572732063616e206d696e7400006044820152606401610ce0565b60006010888860405161101d9291906153eb565b908152604051908190036020019020546001600160a01b03169050806110805760405162461bcd60e51b81526020600482015260186024820152774c6f636b6572733a2061646472657373206973207a65726f60401b6044820152606401610ce0565b8461108a826137fd565b10156110d85760405162461bcd60e51b815260206004820152601e60248201527f4c6f636b6572733a20696e73756666696369656e7420636170616369747900006044820152606401610ce0565b6110e181612715565b6111235760405162461bcd60e51b81526020600482015260136024820152724c6f636b6572733a206e6f742061637469766560681b6044820152606401610ce0565b6001600160a01b0381166000908152600d602052604090206005015461114a9086906159d9565b6001600160a01b0382166000908152600d60205260408120600501919091556007546127109061117a9088615afc565b61118491906159f1565b90508015611212576001546040516340c10f1960e01b81526001600160a01b03909116906340c10f19906111be90859085906004016154d8565b602060405180830381600087803b1580156111d857600080fd5b505af11580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112109190614f50565b505b6001546001600160a01b03166340c10f198861122e848a615b1b565b6040518363ffffffff1660e01b815260040161124b9291906154d8565b602060405180830381600087803b15801561126557600080fd5b505af1158015611279573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129d9190614f50565b50866001600160a01b0316826001600160a01b03167f8ad706b338c5d2a20b0d038b5cfdaf2b2f943f43048723bde0dccdf129598a118884426040516112e59392919061599e565b60405180910390a36112f78187615b1b565b945050506113056001608a55565b5050949350505050565b60405163167e7c5760e01b815260009073__$e73bdc529e43686130bc0575eb4e830f23$__9063167e7c579061134d90601390601990600401615937565b60206040518083038186803b15801561136557600080fd5b505af4158015611379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139d91906151a9565b905090565b60006113ac614470565b6113b46144cf565b6001600160a01b0382166000908152600d6020526040808220815161016081019092528054829082906113e690615b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461141290615b6a565b801561145f5780601f106114345761010080835404028352916020019161145f565b820191906000526020600020905b81548152906001019060200180831161144257829003601f168201915b5050509183525050600182015460209091019060ff16600581111561149457634e487b7160e01b600052602160045260246000fd5b60058111156114b357634e487b7160e01b600052602160045260246000fd5b81526020016002820180546114c790615b6a565b80601f01602080910402602001604051908101604052809291908181526020018280546114f390615b6a565b80156115405780601f1061151557610100808354040283529160200191611540565b820191906000526020600020905b81548152906001019060200180831161152357829003601f168201915b505050918352505060038201546020820152600482015460408201526005820154606082015260068201546080820152600782015460a082015260089091015460ff808216151560c08401526101008083048216151560e085015262010000909204161515918101919091528101519091506115ce5760405162461bcd60e51b8152600401610ce0906156c2565b60015460a08201516040516323b872dd60e01b81526001600160a01b03909216916323b872dd9161160591339130916004016154b4565b602060405180830381600087803b15801561161f57600080fd5b505af1158015611633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116579190614f50565b5060015460a0820151604051630852cd8d60e31b81526001600160a01b03909216916342966c689161168f9160040190815260200190565b602060405180830381600087803b1580156116a957600080fd5b505af11580156116bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e19190614f50565b5060c0810151156117045760405162461bcd60e51b8152600401610ce090615690565b6001600160a01b0383166000908152600d602052604090819020905160109161172c91615417565b908152604080516020928190038301902080546001600160a01b03191690556001600160a01b0385166000908152600d90925281209061176c8282614d4f565b60018201805460ff19169055611786600283016000614d4f565b506000600382018190556004820181905560058201819055600682018190556007820155600801805462ffffff19169055600c546117c690600190615b1b565b600c5560608101516000546117e8916001600160a01b03909116908590614576565b6117f68382608001516145d1565b826001600160a01b03167f628f3d67160bc1a892a1779c6475e128010a54df63af5dcdbf3c7b06ca5dfa9782600001518360600151846080015160405161183f939291906155aa565b60405180910390a260019150506118566001608a55565b919050565b806001600160a01b0381166118835760405163d92e233d60e01b815260040160405180910390fd5b61188b614470565b6001600160a01b03821660009081526011602052604090205460ff166118c35760405162461bcd60e51b8152600401610ce0906156ee565b6001600160a01b038216600081815260116020526040808220805460ff19169055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a25050565b60006119176144cf565b336000908152600d602052604090206008015460ff166119495760405162461bcd60e51b8152600401610ce0906156c2565b61195233612715565b1561196f5760405162461bcd60e51b8152600401610ce0906157b7565b60405163167e7c5760e01b815260009073__$e73bdc529e43686130bc0575eb4e830f23$__9063167e7c57906119ad90601390601990600401615937565b60206040518083038186803b1580156119c557600080fd5b505af41580156119d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119fd91906151a9565b336000908152600d6020908152604091829020825160c08082018552601354825260145482850152601554828601526016546060808401919091526017546080808501919091526018546001600160a01b0390811660a080870191909152885161018081018a5260195483168152601a548316818a0152601b54831699810199909952601c54821693890193909352601d541690870152601e5490860152601f5490850152915460e0840152602154610100840152602254610120840152602354610140840152602454610160840152929350611adc929184876146e7565b611ae633846145d1565b336000818152600d6020526040908190206004015490517f93ae1c71197ee1bd2ad44b7d57e7b34ca946aeb88fdb4fc4a45211dbeb2c3cc79161183f91879190429061599e565b60008180611b4e57604051637c946ed760e01b815260040160405180910390fd5b611b566144cf565b611b5e614529565b3360009081526012602052604090205460ff16611bbd5760405162461bcd60e51b815260206004820152601e60248201527f4c6f636b6572733a206f6e6c79206275726e6572732063616e206275726e00006044820152606401610ce0565b600060108686604051611bd19291906153eb565b908152604051908190036020019020546001546001600160a01b039182169250166323b872dd611bfe3390565b30876040518463ffffffff1660e01b8152600401611c1e939291906154b4565b602060405180830381600087803b158015611c3857600080fd5b505af1158015611c4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c709190614f50565b611cbb5760405162461bcd60e51b815260206004820152601c60248201527b131bd8dad95c9cce881d1c985b9cd9995c919c9bdb4819985a5b195960221b6044820152606401610ce0565b600061271060075486611cce9190615afc565b611cd891906159f1565b90506000611ce68287615b1b565b6001600160a01b0384166000908152600d602052604090206005015490915081811015611d535760405162461bcd60e51b815260206004820152601b60248201527a4c6f636b6572733a20696e73756666696369656e742066756e647360281b6044820152606401610ce0565b611d5d8282615b1b565b6001600160a01b038581166000908152600d602052604090819020600501929092556001549151630852cd8d60e31b8152600481018590529116906342966c6890602401602060405180830381600087803b158015611dbb57600080fd5b505af1158015611dcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df39190614f50565b611e365760405162461bcd60e51b8152602060048201526014602482015273131bd8dad95c9cce88189d5c9b8819985a5b195960621b6044820152606401610ce0565b60015460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90611e6890879087906004016154d8565b602060405180830381600087803b158015611e8257600080fd5b505af1158015611e96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eba9190614f50565b611f025760405162461bcd60e51b8152602060048201526019602482015278131bd8dad95c9cce881b1bd8dad95c9199594819985a5b1959603a1b6044820152606401610ce0565b836001600160a01b03167f66fb54322c407b04a077a306e72cdd780f0f374ba5dac9f6901a56a6255bc34a888542604051611f3f9392919061599e565b60405180910390a25093505050611f566001608a55565b509392505050565b6000826001600160a01b038116611f885760405163d92e233d60e01b815260040160405180910390fd5b611f906144cf565b611f98614529565b6001600160a01b0384166000908152600d602052604080822090516201412760e01b815260048101919091526024810185905273__$e73bdc529e43686130bc0575eb4e830f23$__90620141279060440160206040518083038186803b15801561200157600080fd5b505af4158015612015573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203991906151a9565b6001546040516323b872dd60e01b81529192506001600160a01b0316906323b872dd9061206e903390309086906004016154b4565b602060405180830381600087803b15801561208857600080fd5b505af115801561209c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c09190614f50565b50600154604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401602060405180830381600087803b15801561210757600080fd5b505af115801561211b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213f9190614f50565b5061214a33856145d1565b336001600160a01b0316856001600160a01b03167fd03400b15a5f4cddbc57f0e81bca31db33e4d1ed1390211eade3518bce70562e8684426040516121919392919061599e565b60405180910390a360019250506121a86001608a55565b5092915050565b6000816001600160a01b0381166121d95760405163d92e233d60e01b815260040160405180910390fd5b6121e16144cf565b6121e9614470565b6001600160a01b0383166000908152600d6020526040902060080154610100900460ff1661224f5760405162461bcd60e51b8152602060048201526013602482015272131bd8dad95c9cce881b9bc81c995c5d595cdd606a1b6044820152606401610ce0565b6001600160a01b0383166000908152600d60205260409020600801805461ffff19166001908117909155600b546122869190615b1b565b600b55600c546122979060016159d9565b600c556001600160a01b0383166000908152600d602052604090819020905184916010916122c59190615417565b908152604080516020928190038301812080546001600160a01b0319166001600160a01b039586161790559286166000818152600d90935291206003810154600482015492937f3840128cd2c146a0ea7739b8440e824c6d2d498ae32274812561d689d751e75e9361233a93929142906155e2565b60405180910390a2600191506123506001608a55565b50919050565b806001600160a01b03811661237e5760405163d92e233d60e01b815260040160405180910390fd5b612386614470565b6004546040517fd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22916123c5916001600160a01b0390911690859061549a565b60405180910390a150600480546001600160a01b039092166001600160a01b03199283168117909155601d8054909216179055565b60006124046144cf565b336000908152600d602052604090206008015460ff166124365760405162461bcd60e51b8152600401610ce0906157e6565b336000908152600e6020526040902054156124a15760405162461bcd60e51b815260206004820152602560248201527f4c6f636b6572733a206c6f636b65722068617320616c72656164792072657175604482015264195cdd195960da1b6064820152608401610ce0565b6124ae62054600426159d9565b336000818152600e60209081526040808320859055600d9091529081902060038101546004820154600583015493517f59e9b7bdd325b1dd9fe5b91f457f74d4b3d58263580ae84d6be1f451bbc2851f9461250b949392916155e2565b60405180910390a35060016125206001608a55565b90565b6060816001600160a01b03811661254d5760405163d92e233d60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020805461257090615b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461259c90615b6a565b80156125e95780601f106125be576101008083540402835291602001916125e9565b820191906000526020600020905b8154815290600101906020018083116125cc57829003601f168201915b5050505050915050919050565b6125fe614470565b600954811161261f5760405162461bcd60e51b8152600401610ce09061587d565b60085460408051918252602082018390527f1e29d1b5c8926360f3ac632d884775772b07f31fec4077d433e58ce823f91347910160405180910390a16008819055602155565b61266d614470565b6126756148b1565b565b61267f614470565b6127108111156126cf5760405162461bcd60e51b815260206004820152601b60248201527a4c6f636b6572733a20696e76616c6964206c6f636b65722066656560281b6044820152606401610ce0565b60075460408051918252602082018390527f44c6802691f6adea249930369a511db979a5e9a3603bdb37ceee1036da80e980910160405180910390a16007819055602055565b6000816001600160a01b03811661273f5760405163d92e233d60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600e60205260409020546127655760019150612350565b6001600160a01b0383166000908152600e602052604090205442101561278e5760019150612350565b60009150612350565b60006127a16144cf565b6001600160a01b0383166000908152600d6020526040908190209051635ff753e960e11b815273__$e73bdc529e43686130bc0575eb4e830f23$__9163bfeea7d2916127f3913491879060040161599e565b60006040518083038186803b15801561280b57600080fd5b505af415801561281f573d6000803e3d6000fd5b505050506001600160a01b0383166000818152600d6020526040908190206004015490517f2d2b4797badefe26cd5674f9bc2b8f5ed98e2a663e1a977af971254cfefd15ad9161287391869190429061599e565b60405180910390a25060016128886001608a55565b92915050565b612675614470565b806001600160a01b0381166128be5760405163d92e233d60e01b815260040160405180910390fd5b6128c6614470565b6001546040517f36a4c08a38b736dcecb6c328dba61238529620e83ccb23db2cc43cd34ec2609691612905916001600160a01b0390911690859061549a565b60405180910390a150600180546001600160a01b039092166001600160a01b03199283168117909155601a8054909216179055565b6058546001600160a01b031690565b612951614470565b61271081111561299d5760405162461bcd60e51b81526020600482015260176024820152764c6f636b6572733a206c657373207468616e203130302560481b6044820152606401610ce0565b600a5460408051918252602082018390527f5e4dd01049cdfe5a081b404bff8e27de919fd9c8ae2145007e0921ec227f207a910160405180910390a1600a819055602355565b6129eb614470565b8060085411612a0c5760405162461bcd60e51b8152600401610ce09061587d565b60095460408051918252602082018390527f883242c2a857ca527a432dfca231b1e49233fde2a96802809a0f3866e9f19e13910160405180910390a16009819055602255565b6000826001600160a01b038116612a7c5760405163d92e233d60e01b815260040160405180910390fd5b8280612a9b57604051637c946ed760e01b815260040160405180910390fd5b612aa36144cf565b612aab614529565b6001600160a01b0385166000908152600d602052604080822090516318ae332560e31b815273__$e73bdc529e43686130bc0575eb4e830f23$__9163c571992891612b0191906013906019908b906004016158ce565b60206040518083038186803b158015612b1957600080fd5b505af4158015612b2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b5191906151a9565b90506000600d6000886001600160a01b03166001600160a01b0316815260200190815260200160002060405180610160016040529081600082018054612b9690615b6a565b80601f0160208091040260200160405190810160405280929190818152602001828054612bc290615b6a565b8015612c0f5780601f10612be457610100808354040283529160200191612c0f565b820191906000526020600020905b815481529060010190602001808311612bf257829003601f168201915b5050509183525050600182015460209091019060ff166005811115612c4457634e487b7160e01b600052602160045260246000fd5b6005811115612c6357634e487b7160e01b600052602160045260246000fd5b8152602001600282018054612c7790615b6a565b80601f0160208091040260200160405190810160405280929190818152602001828054612ca390615b6a565b8015612cf05780601f10612cc557610100808354040283529160200191612cf0565b820191906000526020600020905b815481529060010190602001808311612cd357829003601f168201915b505050918352505060038201546020808301919091526004808401546040808501919091526005850154606085015260068501546080850152600785015460a085015260089094015460ff808216151560c08601526101008083048216151560e0870152620100009092041615159301929092526001600160a01b038b166000908152600d909152919091200154909150612d8c908790615b1b565b6001600160a01b038089166000908152600d6020526040902060040191909155600154612dbc91163330856148fd565b60015460025460405163095ea7b360e01b81526001600160a01b039283169263095ea7b392612df29291169086906004016154d8565b602060405180830381600087803b158015612e0c57600080fd5b505af1158015612e20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e449190614f50565b50600254604080830151602084015184519251633fea436760e01b81526001600160a01b0390941693633fea436793612e899388939092909190600090600401615953565b602060405180830381600087803b158015612ea357600080fd5b505af1158015612eb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612edb91906151a9565b50612ee633876145d1565b336001600160a01b0316876001600160a01b03167fd63782183ccef603c2adba105774db58e1701ea5e7b3e23eded1b5e967a3654c888542604051612f2d9392919061599e565b60405180910390a3600194505050612f456001608a55565b505092915050565b806001600160a01b038116612f755760405163d92e233d60e01b815260040160405180910390fd5b612f7d614470565b6001600160a01b03821660009081526011602052604090205460ff1615612fb65760405162461bcd60e51b8152600401610ce090615776565b6001600160a01b038216600081815260116020526040808220805460ff19166001179055517f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69190a25050565b61300b614470565b60055460408051918252602082018390527f65fb7af72786d428e2b4e9d3d2bd45fdd354f582ccccad2044967440b98e6d7b910160405180910390a16005819055601e55565b808061307057604051637c946ed760e01b815260040160405180910390fd5b613078614470565b60065460408051918252602082018490527f063267aa94de35dcf03acb07931ff2a6eae1ac1ee0be20797c9a6d3b52abf47b910160405180910390a1506006819055601f55565b600d602052600090815260409020805481906130da90615b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461310690615b6a565b80156131535780601f1061312857610100808354040283529160200191613153565b820191906000526020600020905b81548152906001019060200180831161313657829003601f168201915b5050506001840154600285018054949560ff90921694919350915061317790615b6a565b80601f01602080910402602001604051908101604052809291908181526020018280546131a390615b6a565b80156131f05780601f106131c5576101008083540402835291602001916131f0565b820191906000526020600020905b8154815290600101906020018083116131d357829003601f168201915b5050506003840154600485015460058601546006870154600788015460089098015496979396929550909350919060ff80821691610100810482169162010000909104168b565b6000600d60006010858560405161324f9291906153eb565b9081526040805160209281900383019020546001600160a01b0316835290820192909252016000206008015460ff169392505050565b600061328f6144cf565b73__$e73bdc529e43686130bc0575eb4e830f23$__634f02c5a4600d601960108c8c6040516132bf9291906153eb565b908152602001604051809103902060009054906101000a90046001600160a01b03168a8a8e8e8c8c8c6040518b63ffffffff1660e01b815260040161330d9a99989796959493929190615611565b60006040518083038186803b15801561332557600080fd5b505af4158015613339573d6000803e3d6000fd5b50506019546001600160a01b0316159150613368905057613368336019546001600160a01b03169030896148fd565b600b546133769060016159d9565b600b55336001600160a01b03167fe5f7957016a87f9d7bacdd371a516d7f2c5667aa5676c7e07cc8c0bbc6e5067b898989896040516133b894939291906154f1565b60405180910390a25060016133cd6001608a55565b979650505050505050565b60006133e26144cf565b336000908152600d602052604090206008015460ff166134145760405162461bcd60e51b8152600401610ce0906157e6565b336000818152600e60209081526040808320839055600d9091529081902060038101546004820154600583015493517ff5c2a2ca5d59b6903bcb66377907e2c66983741a553bae891c485953b2a1f96f94613471949392916155e2565b60405180910390a25060016125206001608a55565b60006134906144cf565b613498614529565b6002546001600160a01b0316336001600160a01b0316146134cb5760405162461bcd60e51b8152600401610ce090615731565b6001600160a01b0385166000908152600d60205260408082209051630b6f92b160e31b8152829173__$e73bdc529e43686130bc0575eb4e830f23$__91635b7c958891613524916013906019908c908b90600401615900565b604080518083038186803b15801561353b57600080fd5b505af415801561354f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061357391906151c1565b60405191935091506001600160a01b0386169083156108fc029084906000818181858888f193505050501580156135ae573d6000803e3d6000fd5b50306001600160a01b038681169089167fab522c1322c34ea455e8f541ecfe1b73a29039f3658bff658cf12c9fd26dc01685886135eb82886159d9565b4260006040516135ff9594939291906159b4565b60405180910390a46001925050506136176001608a55565b949350505050565b602554610100900460ff161580801561363f5750602554600160ff909116105b806136595750303b158015613659575060255460ff166001145b6136bc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610ce0565b6025805460ff1916600117905580156136df576025805461ff0019166101001790555b6136e7614924565b6136ef614953565b6136f7614982565b6137008a612896565b61370988613cbb565b61371289612356565b61371b87613003565b61372486613051565b61372d856125f6565b613736846129e3565b61373f83612677565b61374882612949565b612710601381905560148190556130d46015556016556012601755601880546001600160a01b031916600117905580156137bc576025805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050505050565b6000601083836040516137dc9291906153eb565b908152604051908190036020019020546001600160a01b0316905092915050565b6000816001600160a01b0381166138275760405163d92e233d60e01b815260040160405180910390fd5b6008546001600160a01b0384166000908152600d60205260408082209051632974c8ab60e21b81529192916127109173__$e73bdc529e43686130bc0575eb4e830f23$__9163a5d322ac91613884916013906019906004016158ac565b60206040518083038186803b15801561389c57600080fd5b505af41580156138b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906138d491906151a9565b6138de9190615afc565b6138e891906159f1565b6001600160a01b0385166000908152600d602052604090206005015490915081111561393c576001600160a01b0384166000908152600d60205260409020600501546139349082615b1b565b925050612350565b6000925050612350565b60006139506144cf565b336000908152600d6020526040902060080154610100900460ff166139a95760405162461bcd60e51b815260206004820152600f60248201526e4c6f636b6572733a206e6f2072657160881b6044820152606401610ce0565b336000908152600d6020526040808220815161016081019092528054829082906139d290615b6a565b80601f01602080910402602001604051908101604052809291908181526020018280546139fe90615b6a565b8015613a4b5780601f10613a2057610100808354040283529160200191613a4b565b820191906000526020600020905b815481529060010190602001808311613a2e57829003601f168201915b5050509183525050600182015460209091019060ff166005811115613a8057634e487b7160e01b600052602160045260246000fd5b6005811115613a9f57634e487b7160e01b600052602160045260246000fd5b8152602001600282018054613ab390615b6a565b80601f0160208091040260200160405190810160405280929190818152602001828054613adf90615b6a565b8015613b2c5780601f10613b0157610100808354040283529160200191613b2c565b820191906000526020600020905b815481529060010190602001808311613b0f57829003601f168201915b505050918352505060038201546020820152600482015460408201526005820154606082015260068201546080820152600782015460a082015260089091015460ff808216151560c08401526101008083048216151560e0850152620100009092041615159101529050600d6000336001600160a01b031681526020810191909152604001600090812090613bc18282614d4f565b60018201805460ff19169055613bdb600283016000614d4f565b506000600382018190556004820181905560058201819055600682018190556007820155600801805462ffffff19169055600b54613c1b90600190615b1b565b600b55613c3b335b60608301516000546001600160a01b03169190614576565b613c4a335b82608001516145d1565b336000818152600d6020526040908190206003810154600482015492517f10f84ef0773ba7ade3714f4e500ca17436e6df2b0feb99c754c04f889290cbd493613c949392916155cf565b60405180910390a260019150506125206001608a55565b613cb3614470565b6126756149b1565b806001600160a01b038116613ce35760405163d92e233d60e01b815260040160405180910390fd5b613ceb614470565b6002546040517fd86d51326f3c88ea5365fba597a57273ae555e44f4b11658da952320d0beaa7591613d2a916001600160a01b0390911690859061549a565b60405180910390a16002546040516001600160a01b03909116907f90eabbc0c667db2a5029ed6bc0f5fe9f356d11684a4ca9fcfaec0e53f12b9c8e90600090a2600280546001600160a01b03908116600090815260126020526040808220805460ff1916905583549286166001600160a01b03199384168117909455601b8054909316841790925590517f86e57fd2b90329052917118de7c3f521f400d439b9650deaa906a25b08b945609190a250506002546001600160a01b03166000908152601260205260409020805460ff19166001179055565b613e09614470565b6001600160a01b038116613e6e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610ce0565b613e77816149ee565b50565b806001600160a01b038116613ea25760405163d92e233d60e01b815260040160405180910390fd5b613eaa614470565b6001600160a01b03821660009081526012602052604090205460ff1615613ee35760405162461bcd60e51b8152600401610ce090615776565b6001600160a01b038216600081815260126020526040808220805460ff19166001179055517f86e57fd2b90329052917118de7c3f521f400d439b9650deaa906a25b08b945609190a25050565b613f38614470565b806001600160a01b038116613f605760405163d92e233d60e01b815260040160405180910390fd5b6000546040517f3e4520ab29fdd336aca22cca0657921e53eb42307038c1895b6b5e60eec3796f91613f9f916001600160a01b0390911690859061549a565b60405180910390a150600080546001600160a01b039092166001600160a01b0319928316811790915560198054909216179055565b6000613fde6144cf565b336000908152600d60205260408082208151610160810190925280548290829061400790615b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461403390615b6a565b80156140805780601f1061405557610100808354040283529160200191614080565b820191906000526020600020905b81548152906001019060200180831161406357829003601f168201915b5050509183525050600182015460209091019060ff1660058111156140b557634e487b7160e01b600052602160045260246000fd5b60058111156140d457634e487b7160e01b600052602160045260246000fd5b81526020016002820180546140e890615b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461411490615b6a565b80156141615780601f1061413657610100808354040283529160200191614161565b820191906000526020600020905b81548152906001019060200180831161414457829003601f168201915b505050918352505060038201546020820152600482015460408201526005820154606082015260068201546080820152600782015460a082015260089091015460ff808216151560c08401526101008083048216151560e085015262010000909204161515918101919091528101519091506141ef5760405162461bcd60e51b8152600401610ce0906156c2565b6141f833612715565b156142155760405162461bcd60e51b8152600401610ce0906157b7565b60015460a08201516040516323b872dd60e01b81526001600160a01b03909216916323b872dd9161424c91339130916004016154b4565b602060405180830381600087803b15801561426657600080fd5b505af115801561427a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061429e9190614f50565b5060015460a0820151604051630852cd8d60e31b81526001600160a01b03909216916342966c68916142d69160040190815260200190565b602060405180830381600087803b1580156142f057600080fd5b505af1158015614304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906143289190614f50565b5060c08101511561434b5760405162461bcd60e51b8152600401610ce090615690565b336000908152600d602052604090819020905160109161436a91615417565b90815260405190819003602001902080546001600160a01b0319169055600d60006143923390565b6001600160a01b0316815260208101919091526040016000908120906143b88282614d4f565b60018201805460ff191690556143d2600283016000614d4f565b506000600382018190556004820181905560058201819055600682018190556007820155600801805462ffffff19169055600c5461441290600190615b1b565b600c5561441e33613c23565b61442733613c40565b336001600160a01b03167f628f3d67160bc1a892a1779c6475e128010a54df63af5dcdbf3c7b06ca5dfa97826000015183606001518460800151604051613c94939291906155aa565b3361447961293a565b6001600160a01b0316146126755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ce0565b6002608a5414156145225760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610ce0565b6002608a55565b60bc5460ff16156126755760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610ce0565b6001608a55565b6145cc8363a9059cbb60e01b84846040516024016145959291906154d8565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152614a40565b505050565b804710156146215760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610ce0565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461466e576040519150601f19603f3d011682016040523d82523d6000602084013e614673565b606091505b50509050806145cc5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c20726044820152791958da5c1a595b9d081b585e481a185d99481c995d995c9d195960321b6064820152608401610ce0565b600885015460ff1661473b5760405162461bcd60e51b815260206004820181905260248201527f4c6f636b6572733a206163636f756e74206973206e6f742061206c6f636b65726044820152606401610ce0565b600085600501548560800151600a6147539190615a54565b8561010001516147639190615afc565b86516004890154614775908790615afc565b61477f9190615afc565b61478991906159f1565b6147939190615b1b565b90506000838660800151600a6147a99190615a54565b6147b39084615afc565b6147bd91906159f1565b9050808311156148235760405162461bcd60e51b815260206004820152602b60248201527f4c6f636b6572733a206d6f7265207468616e206d61782072656d6f7661626c6560448201526a0818dbdb1b185d195c985b60aa1b6064820152608401610ce0565b8460c001518388600401546148389190615b1b565b10156148905760405162461bcd60e51b815260206004820152602160248201527f4c6f636b6572733a206c657373207468616e206d696e20636f6c6c61746572616044820152601b60fa1b6064820152608401610ce0565b8287600401546148a09190615b1b565b876004018190555050505050505050565b6148b9614b12565b60bc805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516148f39190615486565b60405180910390a1565b61491e846323b872dd60e01b858585604051602401614595939291906154b4565b50505050565b602554610100900460ff1661494b5760405162461bcd60e51b8152600401610ce090615832565b612675614b5b565b602554610100900460ff1661497a5760405162461bcd60e51b8152600401610ce090615832565b612675614b8b565b602554610100900460ff166149a95760405162461bcd60e51b8152600401610ce090615832565b612675614bb2565b6149b9614529565b60bc805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586148e63390565b605880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000614a95826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316614be59092919063ffffffff16565b8051909150156145cc5780806020019051810190614ab39190614f50565b6145cc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610ce0565b60bc5460ff166126755760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610ce0565b602554610100900460ff16614b825760405162461bcd60e51b8152600401610ce090615832565b612675336149ee565b602554610100900460ff1661456f5760405162461bcd60e51b8152600401610ce090615832565b602554610100900460ff16614bd95760405162461bcd60e51b8152600401610ce090615832565b60bc805460ff19169055565b6060614bf48484600085614bfe565b90505b9392505050565b606082471015614c5f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610ce0565b843b614cad5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ce0565b600080866001600160a01b03168587604051614cc991906153fb565b60006040518083038185875af1925050503d8060008114614d06576040519150601f19603f3d011682016040523d82523d6000602084013e614d0b565b606091505b50915091506133cd82828660608315614d25575081614bf7565b825115614d355782518084602001fd5b8160405162461bcd60e51b8152600401610ce09190615518565b508054614d5b90615b6a565b6000825580601f10614d6b575050565b601f016020900490600052602060002090810190613e7791905b80821115614d995760008155600101614d85565b5090565b80356001600160a01b038116811461185657600080fd5b60008083601f840112614dc5578081fd5b5081356001600160401b03811115614ddb578182fd5b602083019150836020828501011115614df357600080fd5b9250929050565b600060208284031215614e0b578081fd5b614bf782614d9d565b60008060008060008060008060006101208a8c031215614e32578485fd5b614e3b8a614d9d565b9850614e4960208b01614d9d565b9750614e5760408b01614d9d565b989b979a5097986060810135985060808101359760a0820135975060c0820135965060e08201359550610100909101359350915050565b60008060408385031215614ea0578182fd5b614ea983614d9d565b946020939093013593505050565b60008060008060808587031215614ecc578384fd5b614ed585614d9d565b935060208501359250614eea60408601614d9d565b9396929550929360600135925050565b600080600080600060a08688031215614f11578081fd5b614f1a86614d9d565b945060208601359350614f2f60408701614d9d565b925060608601359150614f4460808701614d9d565b90509295509295909350565b600060208284031215614f61578081fd5b81518015158114614bf7578182fd5b60008060208385031215614f82578182fd5b82356001600160401b03811115614f97578283fd5b614fa385828601614db4565b90969095509350505050565b60008060008060608587031215614fc4578384fd5b84356001600160401b03811115614fd9578485fd5b614fe587828801614db4565b9095509350614ff8905060208601614d9d565b9396929550929360400135925050565b60008060006040848603121561501c578283fd5b83356001600160401b03811115615031578384fd5b61503d86828701614db4565b909790965060209590950135949350505050565b600080600080600080600060a0888a03121561506b578283fd5b87356001600160401b0380821115615081578485fd5b61508d8b838c01614db4565b909950975060208a0135965060408a0135955060608a01359150600682106150b3578485fd5b909350608089013590808211156150c8578384fd5b506150d58a828b01614db4565b989b979a50959850939692959293505050565b6000602082840312156150f9578081fd5b81356001600160401b038082111561510f578283fd5b818401915084601f830112615122578283fd5b81358181111561513457615134615bb5565b604051601f8201601f19908116603f0116810190838211818310171561515c5761515c615bb5565b81604052828152876020848701011115615174578586fd5b826020860160208301379182016020019490945295945050505050565b6000602082840312156151a2578081fd5b5035919050565b6000602082840312156151ba578081fd5b5051919050565b600080604083850312156151d3578182fd5b505080516020909101519092909150565b6001600160a01b03169052565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452615232816020860160208601615b3e565b601f01601f19169290920160200192915050565b6000815461525381615b6a565b8085526020600183811680156152705760018114615284576152b2565b60ff198516888401526040880195506152b2565b866000528260002060005b858110156152aa5781548a820186015290830190840161528f565b890184019650505b505050505092915050565b600681106152db57634e487b7160e01b600052602160045260246000fd5b9052565b8054825260018101546020830152600281015460408301526003810154606083015260048101546080830152600501546001600160a01b031660a090910152565b6153338261532e8354615b32565b6151e4565b6153406001820154615b32565b61534d60208401826151e4565b5061535b6002820154615b32565b61536860408401826151e4565b506153766003820154615b32565b61538360608401826151e4565b506153916004820154615b32565b61539e60808401826151e4565b50600581015460a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154610120830152600a810154610140830152600b015461016090910152565b8183823760009101908152919050565b6000825161540d818460208701615b3e565b9190910192915050565b600080835461542581615b6a565b6001828116801561543d576001811461544e5761547a565b60ff1984168752828701945061547a565b8786526020808720875b858110156154715781548a820152908401908201615458565b50505082870194505b50929695505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6060815260006155056060830186886151f1565b6020830194909452506040015292915050565b602081526000614bf7602083018461521a565b600061016080835261553f8184018f61521a565b905061554e602084018e6152bd565b8281036040840152615560818d61521a565b606084019b909b525050608081019790975260a087019590955260c086019390935260e0850191909152151561010084015215156101208301521515610140909101529392505050565b6060815260006155bd606083018661521a565b60208301949094525060400152919050565b6060815260006155bd6060830186615246565b6080815260006155f56080830187615246565b6020830195909552506040810192909252606090910152919050565b60006102608c8352615626602084018d615320565b6001600160a01b038b166101a08401526101c083018a90526101e08301899052610200830181905261565b818401888a6151f1565b905061566b6102208401876152bd565b82810361024084015261567f8185876151f1565b9d9c50505050505050505050505050565b6020808252601890820152774c6f636b6572733a203020736c617368696e67205442544360401b604082015260600190565b6020808252601290820152712637b1b5b2b9399d103737903637b1b5b2b960711b604082015260600190565b60208082526023908201527f4c6f636b6572733a206163636f756e7420646f6573206e6f74206861766520726040820152626f6c6560e81b606082015260800190565b60208082526025908201527f4c6f636b6572733a206d6573736167652073656e646572206973206e6f74206360408201526431a13ab93760d91b606082015260800190565b60208082526021908201527f4c6f636b6572733a206163636f756e7420616c72656164792068617320726f6c6040820152606560f81b606082015260800190565b6020808252601590820152744c6f636b6572733a207374696c6c2061637469766560581b604082015260600190565b6020808252602c908201527f4c6f636b6572733a20696e7075742061646472657373206973206e6f7420612060408201526b3b30b634b2103637b1b5b2b960a11b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252601590820152742637b1b5b2b9399d1036bab9ba1021a9101f10262960591b604082015260600190565b83815261026081016158c160208301856152df565b61361760e0830184615320565b84815261028081016158e360208301866152df565b6158f060e0830185615320565b8261026083015295945050505050565b8581526102a0810161591560208301876152df565b61592260e0830186615320565b61026082019390935261028001529392505050565b610240810161594682856152df565b614bf760c0830184615320565b85815260a06020820152600061596c60a083018761521a565b61597960408401876152bd565b828103606084015261598b818661521a565b9150508260808301529695505050505050565b9283526020830191909152604082015260600190565b9485526020850193909352604084019190915260608301521515608082015260a00190565b600082198211156159ec576159ec615b9f565b500190565b600082615a0c57634e487b7160e01b81526012600452602481fd5b500490565b600181815b80851115615a4c578160001904821115615a3257615a32615b9f565b80851615615a3f57918102915b93841c9390800290615a16565b509250929050565b6000614bf78383600082615a6a57506001612888565b81615a7757506000612888565b8160018114615a8d5760028114615a9757615ab3565b6001915050612888565b60ff841115615aa857615aa8615b9f565b50506001821b612888565b5060208310610133831016604e8410600b8410161715615ad6575081810a612888565b615ae08383615a11565b8060001904821115615af457615af4615b9f565b029392505050565b6000816000190483118215151615615b1657615b16615b9f565b500290565b600082821015615b2d57615b2d615b9f565b500390565b6001600160a01b031690565b60005b83811015615b59578181015183820152602001615b41565b8381111561491e5750506000910152565b600181811c90821680615b7e57607f821691505b6020821081141561235057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d2baf957a666a6d6ca451e1b4a40d94ba70af0c069d0b6dcf420a40fe874bd8664736f6c63430008040033"
  , M1 = b => typeof b[0] == "string" || Array.isArray(b[0]) || "_isInterface"in b[0]
  , $ = class $ extends F {
    constructor(...e) {
        if (M1(e))
            super(...e);
        else {
            const [a,n] = e;
            super(t0, $.linkBytecode(a), n)
        }
    }
    static linkBytecode(e) {
        let a = Z0;
        return a = a.replace(new RegExp("__\\$e73bdc529e43686130bc0575eb4e830f23\\$__","g"), e["contracts/libraries/LockersManagerLib.sol:LockersManagerLib"].replace(/^0x/, "").toLowerCase()),
        a
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(t0)
    }
    static connect(e, a) {
        return new g(e,t0,a)
    }
}
;
u($, "bytecode", Z0),
u($, "abi", t0);
let A0 = $;
const n0 = [{
    inputs: [],
    name: "ZeroAddress",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "userTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "requestIdOfLocker",
        type: "uint256"
    }],
    name: "BurnDispute",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lockerLockingScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "LockerDispute",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldLockers",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newLockers",
        type: "address"
    }],
    name: "NewLockers",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldNetworkFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newNetworkFee",
        type: "uint256"
    }],
    name: "NewNetworkFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldNetworkFeeOracle",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newNetworkFeeOracle",
        type: "address"
    }],
    name: "NewNetworkFeeOracle",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldProtocolPercentageFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newProtocolPercentageFee",
        type: "uint256"
    }],
    name: "NewProtocolPercentageFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldRelay",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newRelay",
        type: "address"
    }],
    name: "NewRelay",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldSlasherPercentageFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newSlasherPercentageFee",
        type: "uint256"
    }],
    name: "NewSlasherPercentageFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTeleBTC",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTeleBTC",
        type: "address"
    }],
    name: "NewTeleBTC",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "oldThirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newThirdPartyAddress",
        type: "address"
    }],
    name: "NewThirdPartyAddress",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldThirdPartyFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newThirdPartyFee",
        type: "uint256"
    }],
    name: "NewThirdPartyFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldTransferDeadline",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newTransferDeadline",
        type: "uint256"
    }],
    name: "NewTransferDeadline",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTreasury",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTreasury",
        type: "address"
    }],
    name: "NewTreasury",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "userTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "requestIdOfLocker",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]"
    }, {
        indexed: !1,
        internalType: "uint256[4]",
        name: "fees",
        type: "uint256[4]"
    }],
    name: "NewUnwrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldWrappedNativeToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newWrappedNativeToken",
        type: "address"
    }],
    name: "NewWrappedNativeToken",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "lockerTargetAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "requestIdOfLocker",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "bitcoinTxId",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "bitcoinTxOutputIndex",
        type: "uint256"
    }],
    name: "PaidUnwrap",
    type: "event"
}, {
    inputs: [],
    name: "bitcoinFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "bitcoinFeeOracle",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "_version",
        type: "bytes4"
    }, {
        internalType: "bytes",
        name: "_vin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_vout",
        type: "bytes"
    }, {
        internalType: "bytes4",
        name: "_locktime",
        type: "bytes4"
    }, {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_intermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256[]",
        name: "_burnReqIndexes",
        type: "uint256[]"
    }, {
        internalType: "uint256[]",
        name: "_voutIndexes",
        type: "uint256[]"
    }],
    name: "burnProof",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "burnRequestCounter",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "burnRequests",
    outputs: [{
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "burntAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "isTransferred",
        type: "bool"
    }, {
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "requestIdOfLocker",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]"
    }],
    name: "disputeBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "bytes4[]",
        name: "_versions",
        type: "bytes4[]"
    }, {
        internalType: "bytes",
        name: "_inputVin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_inputVout",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_outputVin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_outputVout",
        type: "bytes"
    }, {
        internalType: "bytes4[]",
        name: "_locktimes",
        type: "bytes4[]"
    }, {
        internalType: "bytes",
        name: "_inputIntermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256[]",
        name: "_indexesAndBlockNumbers",
        type: "uint256[]"
    }],
    name: "disputeLocker",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_relay",
        type: "address"
    }, {
        internalType: "address",
        name: "_lockers",
        type: "address"
    }, {
        internalType: "address",
        name: "_treasury",
        type: "address"
    }, {
        internalType: "address",
        name: "_teleBTC",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_transferDeadline",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_slasherPercentageReward",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_networkFee",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockerTargetAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }],
    name: "isTransferred",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "isUsedAsBurnProof",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockers",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "protocolPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "relay",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_lockers",
        type: "address"
    }],
    name: "setLockers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_networkFee",
        type: "uint256"
    }],
    name: "setNetworkFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_networkFeeOracle",
        type: "address"
    }],
    name: "setNetworkFeeOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }],
    name: "setProtocolPercentageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_relay",
        type: "address"
    }],
    name: "setRelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_slasherPercentageReward",
        type: "uint256"
    }],
    name: "setSlasherPercentageReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }],
    name: "setStartingBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_teleBTC",
        type: "address"
    }],
    name: "setTeleBTC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_thirdPartyAddress",
        type: "address"
    }],
    name: "setThirdPartyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_thirdPartyFee",
        type: "uint256"
    }],
    name: "setThirdPartyFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_transferDeadline",
        type: "uint256"
    }],
    name: "setTransferDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_treasury",
        type: "address"
    }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "slasherPercentageReward",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "startingBlockNumber",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_exchangeConnector",
        type: "address"
    }, {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
    }, {
        internalType: "bool",
        name: "_isFixedToken",
        type: "bool"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_scriptType",
        type: "uint8"
    }, {
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "thirdParty",
        type: "uint256"
    }],
    name: "swapAndUnwrap",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "teleBTC",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "thirdPartyAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "thirdPartyFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "transferDeadline",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "treasury",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_scriptType",
        type: "uint8"
    }, {
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "thirdParty",
        type: "uint256"
    }],
    name: "unwrap",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , K0 = "0x608060405234801561001057600080fd5b50615e5080620000216000396000f3fe6080604052600436106101d45760003560e01c80637f0f1817116100fe5780637f0f18171461045d5780637ffe9a921461047d5780638d3d78cd1461049d5780638d5fc1d4146104bd5780638da5cb5b146104dd5780638f9eb78b146104f2578063930a60e814610512578063a9b682711461053f578063b14d353214610575578063b59589d114610595578063b74d0d35146105b5578063bed6a602146105cb578063c780c03f146105e1578063c805f68b146105f4578063cf54ce4714610614578063da058ae314610634578063ea73263714610654578063f0f4426014610667578063f2fde38b14610687578063f47e2240146106a757600080fd5b80630e757850146101e057806317fcb39b146102025780631812adb6146102385780631876dec41461025c5780631e2361681461027c5780631e7107c7146102bc57806333453d15146102dc5780633fea4367146102fc578063419cba7f1461031c57806344dd6aa5146103325780634782bc361461034557806350a058361461036557806359fd0b0c146103855780635c4f5f3e146103b257806361d027b3146103d257806370872aa5146103f2578063715018a61461040857806373532b2a1461041d5780637ed557481461043d57600080fd5b366101db57005b600080fd5b3480156101ec57600080fd5b506102006101fb366004615380565b6106db565b005b34801561020e57600080fd5b5060a654610222906001600160a01b031681565b60405161022f9190615676565b60405180910390f35b34801561024457600080fd5b5061024e60075481565b60405190815260200161022f565b34801561026857600080fd5b50600154610222906001600160a01b031681565b34801561028857600080fd5b506102ac61029736600461503d565b600c6020526000908152604090205460ff1681565b604051901515815260200161022f565b3480156102c857600080fd5b506102006102d736600461503d565b610868565b3480156102e857600080fd5b506102006102f7366004614dfd565b6108d7565b34801561030857600080fd5b5061024e610317366004615422565b610948565b34801561032857600080fd5b5061024e60085481565b61024e610340366004614e35565b610a64565b34801561035157600080fd5b5061020061036036600461503d565b610b0a565b34801561037157600080fd5b50600454610222906001600160a01b031681565b34801561039157600080fd5b5061024e6103a036600461503d565b60a46020526000908152604090205481565b3480156103be57600080fd5b506102006103cd36600461503d565b610ba5565b3480156103de57600080fd5b50600354610222906001600160a01b031681565b3480156103fe57600080fd5b5061024e60055481565b34801561041457600080fd5b50610200610d3c565b34801561042957600080fd5b50610200610438366004615192565b610d46565b34801561044957600080fd5b5061020061045836600461503d565b61136c565b34801561046957600080fd5b50610200610478366004614dfd565b611406565b34801561048957600080fd5b506102ac610498366004614f4d565b6114a0565b3480156104a957600080fd5b50600254610222906001600160a01b031681565b3480156104c957600080fd5b506102006104d8366004615351565b6114f8565b3480156104e957600080fd5b5061022261159c565b3480156104fe57600080fd5b5061020061050d3660046154ab565b6115ab565b34801561051e57600080fd5b5061024e61052d366004614dfd565b600b6020526000908152604090205481565b34801561054b57600080fd5b5061022261055a36600461503d565b60a5602052600090815260409020546001600160a01b031681565b34801561058157600080fd5b50610200610590366004614dfd565b611614565b3480156105a157600080fd5b50600054610222906001600160a01b031681565b3480156105c157600080fd5b5061024e60095481565b3480156105d757600080fd5b5061024e60065481565b6102006105ef3660046151f7565b6116ae565b34801561060057600080fd5b5061020061060f366004614dfd565b61182c565b34801561062057600080fd5b5061020061062f36600461503d565b6118c6565b34801561064057600080fd5b5061020061064f366004614dfd565b611962565b6102ac61066236600461506d565b6119d3565b34801561067357600080fd5b50610200610682366004614dfd565b611d44565b34801561069357600080fd5b506102006106a2366004614dfd565b611dde565b3480156106b357600080fd5b506106c76106c2366004614f4d565b611e57565b60405161022f989796959493929190615a93565b600d54610100900460ff16158080156106fb5750600d54600160ff909116105b806107155750303b1580156107155750600d5460ff166001145b61077d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600d805460ff1916600117905580156107a057600d805461ff0019166101001790555b6107a8611f54565b6107b0611f83565b6107b98b610868565b6107c28a61182c565b6107cb89611614565b6107d488611d44565b6107dd87611406565b6107e686610ba5565b6107ef8561136c565b6107f884610b0a565b6108036102f761159c565b61080c836118c6565b61081582611962565b801561085b57600d805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050505050565b610870611fb2565b60055481116108d25760405162461bcd60e51b815260206004820152602860248201527f4275726e526f757465724c6f6769633a206c6f77207374617274696e67426c6f60448201526731b5a73ab6b132b960c11b6064820152608401610774565b600555565b6108df611fb2565b6004546040517f68bf625687194a1bbeeccbaa327c37aa1f9940a3c6c9e8fe84f06f1dc14fd1769161091e916001600160a01b0390911690849061568a565b60405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b6000610952612011565b6002546001600160a01b03166323b872dd33308a6040518463ffffffff1660e01b8152600401610984939291906156a4565b602060405180830381600087803b15801561099e57600080fd5b505af11580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d69190614f78565b610a2e5760405162461bcd60e51b8152602060048201526024808201527f4275726e526f757465724c6f6769633a207472616e7366657246726f6d2066616044820152631a5b195960e21b6064820152608401610774565b600254600090610a4d906001600160a01b031689808a8a8a8a8a61206b565b915050610a5a6001607255565b9695505050505050565b6000610a6e612011565b6000610a7f8e8e8e8e8e8e8e6124da565b9050610aed8d8d6000818110610aa557634e487b7160e01b600052603260045260246000fd5b905060200201358b8b6000818110610acd57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610ae29190614dfd565b838a8a8a8a8a612a1c565b915050610afa6001607255565b9c9b505050505050505050505050565b610b12611fb2565b806127101015610b645760405162461bcd60e51b815260206004820152601f60248201527f4275726e526f757465724c6f6769633a20696e76616c696420726577617264006044820152606401610774565b60085460408051918252602082018390527faa50b3683e42a13535a5b9c2c32780cccf956fb546b523a3542ac4ad8b544f67910160405180910390a1600855565b600080546040516353bcd1c960e11b815273__$b2d4c044db363f4bd023a450a1a4a26d98$__9163a779a39291610be8916001600160a01b031690600401615676565b60206040518083038186803b158015610c0057600080fd5b505af4158015610c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c389190615055565b9050610c4261159c565b6001600160a01b0316336001600160a01b03161480610c62575080600654105b610cab5760405162461bcd60e51b815260206004820152601a602482015279109d5c9b949bdd5d195c931bd9da58ce881b9bc81c195c9b5a5d60321b6044820152606401610774565b808211610cfa5760405162461bcd60e51b815260206004820152601d60248201527f4275726e526f757465724c6f6769633a206c6f7720646561646c696e650000006044820152606401610774565b60065460408051918252602082018490527f92c10a242ca42973030420e2ee32b3ba7818cc643f896958f620c606cf300416910160405180910390a150600655565b610d44611fb2565b565b610d4e612011565b610d56611fb2565b60015460405163aff2faa360e01b81526001600160a01b039091169063aff2faa390610d889086908690600401615821565b60206040518083038186803b158015610da057600080fd5b505afa158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd89190614f78565b610df45760405162461bcd60e51b8152600401610774906159dc565b60015460405163626885b560e11b81526000916001600160a01b03169063c4d10b6a90610e279087908790600401615821565b60206040518083038186803b158015610e3f57600080fd5b505afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e779190614e19565b905060005b825181101561135b5773__$b2d4c044db363f4bd023a450a1a4a26d98$__6315755789600a84868581518110610ec257634e487b7160e01b600052603260045260246000fd5b60209081029190910101516006546000546040516310889dc360e01b815273__$b2d4c044db363f4bd023a450a1a4a26d98$__916310889dc391610f12916001600160a01b031690600401615676565b60206040518083038186803b158015610f2a57600080fd5b505af4158015610f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f629190615055565b6005546040516001600160e01b031960e089901b16815260048101969096526001600160a01b03909416602486015260448501929092526064840152608483015260a482015260c40160006040518083038186803b158015610fc357600080fd5b505af4158015610fd7573d6000803e3d6000fd5b50506001546008546001600160a01b038681166000908152600a602052604090208851919093169450631697565b93508692612710929189908890811061102e57634e487b7160e01b600052603260045260246000fd5b60200260200101518154811061105457634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201600001546110709190615cc9565b61107a9190615ca9565b336001600160a01b0387166000908152600a6020526040902088518990889081106110b557634e487b7160e01b600052603260045260246000fd5b6020026020010151815481106110db57634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160000154600a6000896001600160a01b03166001600160a01b0316815260200190815260200160002089888151811061113257634e487b7160e01b600052603260045260246000fd5b60200260200101518154811061115857634e487b7160e01b600052603260045260246000fd5b600091825260209091206007909102016002015460405160e087901b6001600160e01b03191681526001600160a01b03958616600482015260248101949094529184166044840152606483015291909116608482015260a401602060405180830381600087803b1580156111cb57600080fd5b505af11580156111df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112039190614f78565b506001600160a01b0382166000818152600a60205260409020845185908490811061123e57634e487b7160e01b600052603260045260246000fd5b60200260200101518154811061126457634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160020160009054906101000a90046001600160a01b03166001600160a01b03167f58c23b4ae0617be275628875bcfd65759a441263099a256eeb27899fb5dd846d8787600a6000886001600160a01b03166001600160a01b031681526020019081526020016000208887815181106112fa57634e487b7160e01b600052603260045260246000fd5b60200260200101518154811061132057634e487b7160e01b600052603260045260246000fd5b90600052602060002090600702016006015460405161134193929190615835565b60405180910390a38061135381615db0565b915050610e7c565b50506113676001607255565b505050565b611374611fb2565b8061271010156113c55760405162461bcd60e51b815260206004820152601c60248201527b4275726e526f757465724c6f6769633a20696e76616c69642066656560201b6044820152606401610774565b60075460408051918252602082018390527f7d205f60891f60851c61cd244ba387d72b6589e7c0ac41b9d909ab0ce2c2a53b910160405180910390a1600755565b61140e611fb2565b806001600160a01b0381166114365760405163d92e233d60e01b815260040160405180910390fd5b6002546040517f36a4c08a38b736dcecb6c328dba61238529620e83ccb23db2cc43cd34ec2609691611475916001600160a01b0390911690859061568a565b60405180910390a150600280546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0382166000908152600a602052604081208054839081106114d857634e487b7160e01b600052603260045260246000fd5b600091825260209091206005600790920201015460ff1690505b92915050565b611500611fb2565b600082815260a56020526040908190205490517f1e73962bcff5b98a9ac70c9b0f71fbb31dc0f5a09348c6d3ceab164169a9e729916115669185916001600160a01b03169085909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a1600091825260a5602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6040546001600160a01b031690565b6115b3611fb2565b600082815260a46020908152604091829020548251858152918201529081018290527f188adabf806a6b6d814acc1dbd9f09e5a251c8c065d6285749a5824e4579b6459060600160405180910390a1600091825260a4602052604090912055565b61161c611fb2565b806001600160a01b0381166116445760405163d92e233d60e01b815260040160405180910390fd5b6001546040517ffa021c2ec0f46429a53e7f88b88065e40001f50c9d38b2e8b713beaf9828d4c391611683916001600160a01b0390911690859061568a565b60405180910390a150600180546001600160a01b0319166001600160a01b0392909216919091179055565b6116b6612011565b6116be611fb2565b600061171c896000815181106116e457634e487b7160e01b600052603260045260246000fd5b602002602001015189898760008151811061170f57634e487b7160e01b600052603260045260246000fd5b6020026020010151612a2f565b905073__$b2d4c044db363f4bd023a450a1a4a26d98$__63441d3a21600160009054906101000a90046001600160a01b03168c8c60405180606001604052808e81526020018c81526020018b815250600c60065460008054906101000a90046001600160a01b03166005548a8e8e8e6040518d63ffffffff1660e01b81526004016117b29c9b9a99989796959493929190615707565b60006040518083038186803b1580156117ca57600080fd5b505af41580156117de573d6000803e3d6000fd5b50505050611816878b838560028151811061180957634e487b7160e01b600052603260045260246000fd5b6020026020010151612b95565b506118216001607255565b505050505050505050565b611834611fb2565b806001600160a01b03811661185c5760405163d92e233d60e01b815260040160405180910390fd5b6000546040517f4c28a3f61a715259c4dc930c23e7423b8fa52e13232c061a6e488729c66184f49161189b916001600160a01b0390911690859061568a565b60405180910390a150600080546001600160a01b0319166001600160a01b0392909216919091179055565b60045433906001600160a01b031681146119205760405162461bcd60e51b815260206004820152601b60248201527a4275726e526f757465724c6f6769633a206e6f74206f7261636c6560281b6044820152606401610774565b60095460408051918252602082018490527f890eb41e398fd9cf425695b34269b781ad56c257422859094a28db47fb78f1b3910160405180910390a150600955565b61196a611fb2565b60a6546040517f4da8064030e901e42f6de0ab04f4c322d7936d0120503addfe8a51f127090689916119a9916001600160a01b0390911690849061568a565b60405180910390a160a680546001600160a01b0319166001600160a01b0392909216919091179055565b60006119dd612011565b60015460405163626885b560e11b81526000916001600160a01b03169063c4d10b6a90611a0e908890600401615859565b60206040518083038186803b158015611a2657600080fd5b505afa158015611a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5e9190614e19565b9050336001600160a01b0382161480611a8a57506004546001600160a01b0316336001600160a01b0316145b611aa65760405162461bcd60e51b8152600401610774906159dc565b73__$b2d4c044db363f4bd023a450a1a4a26d98$__6344922b64896005548c600160009054906101000a90046001600160a01b03168a8a518a516040518863ffffffff1660e01b8152600401611b029796959493929190615b75565b60006040518083038186803b158015611b1a57600080fd5b505af4158015611b2e573d6000803e3d6000fd5b505050506000611b408d8d8d8d612a2f565b600054604051637ebc232760e01b815291925073__$b2d4c044db363f4bd023a450a1a4a26d98$__91637ebc232791611b8f916001600160a01b039091169085908e908e908e906004016156c8565b60206040518083038186803b158015611ba757600080fd5b505af4158015611bbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdf9190614f78565b611c2b5760405162461bcd60e51b815260206004820152601e60248201527f4275726e526f757465724c6f6769633a206e6f742066696e616c697a656400006044820152606401610774565b6000611c3b828b858f8a8a612d61565b905073__$b2d4c044db363f4bd023a450a1a4a26d98$__63191e28dc600c838f8b876040518663ffffffff1660e01b8152600401611c7d959493929190615963565b60206040518083038186803b158015611c9557600080fd5b505af4158015611ca9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ccd9190614f78565b611d255760405162461bcd60e51b815260206004820152602360248201527f4275726e526f757465724c6f6769633a20696e76616c6964206275726e20707260448201526237b7b360e91b6064820152608401610774565b60019350505050611d366001607255565b9a9950505050505050505050565b611d4c611fb2565b806001600160a01b038116611d745760405163d92e233d60e01b815260040160405180910390fd5b6003546040517f567657fa3f286518b318f4a29870674f433f622fdfc819691acb13105b22822591611db3916001600160a01b0390911690859061568a565b60405180910390a150600380546001600160a01b0319166001600160a01b0392909216919091179055565b611de6611fb2565b6001600160a01b038116611e4b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610774565b611e5481613256565b50565b600a6020528160005260406000208181548110611e7357600080fd5b600091825260209091206007909102018054600182015460028301546003840180549396509194506001600160a01b03169291611eaf90615d7b565b80601f0160208091040260200160405190810160405280929190818152602001828054611edb90615d7b565b8015611f285780601f10611efd57610100808354040283529160200191611f28565b820191906000526020600020905b815481529060010190602001808311611f0b57829003601f168201915b505050600484015460058501546006909501549394909360ff8083169450610100909204909116915088565b600d54610100900460ff16611f7b5760405162461bcd60e51b815260040161077490615a11565b610d446132a6565b600d54610100900460ff16611faa5760405162461bcd60e51b815260040161077490615a11565b610d446132d6565b33611fbb61159c565b6001600160a01b031614610d445760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610774565b600260725414156120645760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610774565b6002607255565b600154604051630f87661560e41b815260009173__$b2d4c044db363f4bd023a450a1a4a26d98$__9163f8766150916120ba918a918a916001600160a01b03909116908a908a9060040161586c565b60006040518083038186803b1580156120d257600080fd5b505af41580156120e6573d6000803e3d6000fd5b5050505060008060006120f98a866132fd565b60025460015460405163095ea7b360e01b81529497509295509093506001600160a01b039081169263095ea7b3926121379216908790600401615808565b602060405180830381600087803b15801561215157600080fd5b505af1158015612165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121899190614f78565b506001546040516338463cff60e01b81526001600160a01b03909116906338463cff906121be908a908a908890600401615835565b602060405180830381600087803b1580156121d857600080fd5b505af11580156121ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122109190615055565b60015460405163626885b560e11b81529195506000916001600160a01b039091169063c4d10b6a90612248908b908b90600401615821565b60206040518083038186803b15801561226057600080fd5b505afa158015612274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122989190614e19565b6000546040516310889dc360e01b815291925061233f918d9188918e918e9173__$b2d4c044db363f4bd023a450a1a4a26d98$__916310889dc3916122e9916001600160a01b031690600401615676565b60206040518083038186803b15801561230157600080fd5b505af4158015612315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123399190615055565b8661369d565b604080516060810182528d815260208082018e905281830188905282516080810190935260095483528f9260009181016123798a8a615d11565b8152602080820189905260409182018890526001600160a01b0387166000908152600a909152208054919250906123b290600190615d11565b815481106123d057634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201600401546123e93390565b6001600160a01b03167f6b5c22e69db87534a562352580358411dc7b2d98d24684765342f2ebf2dd8c318f8f88600a60008b6001600160a01b03166001600160a01b031681526020019081526020016000206001600a60008d6001600160a01b03166001600160a01b03168152602001908152602001600020805490506124709190615d11565b8154811061248e57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201600601548f8a8a8a6040516124b89897969594939291906158ba565b60405180910390a35050505050505098975050505050505050565b6001607255565b6002546000906001600160a01b031684846124f6600182615d11565b81811061251357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906125289190614dfd565b6001600160a01b03161461254e5760405162461bcd60e51b815260040161077490615a5c565b6002861461259e5760405162461bcd60e51b815260206004820152601e60248201527f4275726e526f757465724c6f6769633a2077726f6e6720616d6f756e747300006044820152606401610774565b34156126eb57868660008181106125c557634e487b7160e01b600052603260045260246000fd5b90506020020135341461261a5760405162461bcd60e51b815260206004820152601f60248201527f4275726e526f757465724c6f6769633a20696e76616c696420616d6f756e74006044820152606401610774565b8383600081811061263b57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906126509190614dfd565b60a6546001600160a01b0390811691161461267d5760405162461bcd60e51b815260040161077490615a5c565b60a660009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156126cd57600080fd5b505af11580156126e1573d6000803e3d6000fd5b50505050506127cb565b8383600081811061270c57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906127219190614dfd565b6001600160a01b03166323b872dd33308a8a600081811061275257634e487b7160e01b600052603260045260246000fd5b905060200201356040518463ffffffff1660e01b8152600401612777939291906156a4565b602060405180830381600087803b15801561279157600080fd5b505af11580156127a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127c99190614f78565b505b838360008181106127ec57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906128019190614dfd565b6001600160a01b031663095ea7b3898989600081811061283157634e487b7160e01b600052603260045260246000fd5b905060200201356040518363ffffffff1660e01b8152600401612855929190615808565b602060405180830381600087803b15801561286f57600080fd5b505af1158015612883573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128a79190614f78565b50600080896001600160a01b031663b0bbcd888a8a60008181106128db57634e487b7160e01b600052603260045260246000fd5b905060200201358b8b600181811061290357634e487b7160e01b600052603260045260246000fd5b905060200201358989308a8e6040518863ffffffff1660e01b81526004016129319796959493929190615af6565b600060405180830381600087803b15801561294b57600080fd5b505af115801561295f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526129879190810190614f94565b91509150816129d85760405162461bcd60e51b815260206004820181905260248201527f4275726e526f757465724c6f6769633a2065786368616e6765206661696c65646044820152606401610774565b80600182516129e79190615d11565b81518110612a0557634e487b7160e01b600052603260045260246000fd5b602002602001015192505050979650505050505050565b600080611d36898b8a8a8a8a8a8a61206b565b600080612a44612a3f868361386d565b613891565b9050612a5562ffffff1982166139e7565b15612a9f5760405162461bcd60e51b815260206004820152601a602482015279109a5d18dbda5b92195b1c195c8e881d9a5b881a5cc81b9d5b1b60321b6044820152606401610774565b6000600287878787604051602001612aba9493929190615607565b60408051601f1981840301815290829052612ad49161565a565b602060405180830381855afa158015612af1573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190612b149190615055565b90506000600282604051602001612b2d91815260200190565b60408051601f1981840301815290829052612b479161565a565b602060405180830381855afa158015612b64573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190612b879190615055565b93505050505b949350505050565b6000612ba0856139f3565b60015460405163626885b560e11b81526001600160401b039290921692506000916001600160a01b039091169063c4d10b6a90612be1908890600401615859565b60206040518083038186803b158015612bf957600080fd5b505afa158015612c0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c319190614e19565b6001546008549192506001600160a01b03169063b734de2690839061271090612c5a9087615cc9565b612c649190615ca9565b3360405160e085901b6001600160e01b03191681526001600160a01b0393841660048201526024810192909252909116604482015260648101859052608401602060405180830381600087803b158015612cbd57600080fd5b505af1158015612cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cf59190614f78565b507f7ff138134e34ccab071315c38e38eec079f54726b890304ab46e2c5ab6f722bb8186858761271060085488612d2c9190615cc9565b612d369190615ca9565b612d409088615c1f565b604051612d519594939291906157c7565b60405180910390a1505050505050565b60008080805b85518110156132495780612da457848181518110612d9557634e487b7160e01b600052603260045260246000fd5b60200260200101519150612e55565b81858281518110612dc557634e487b7160e01b600052603260045260246000fd5b602002602001015111612e2a5760405162461bcd60e51b815260206004820152602760248201527f4275726e526f757465724c6f6769633a20756e2d736f7274656420766f757420604482015266696e646578657360c81b6064820152608401610774565b848181518110612e4a57634e487b7160e01b600052603260045260246000fd5b602002602001015191505b6000868281518110612e7757634e487b7160e01b600052603260045260246000fd5b60200260200101519050600a60008a6001600160a01b03166001600160a01b031681526020019081526020016000208181548110612ec557634e487b7160e01b600052603260045260246000fd5b600091825260209091206005600790920201015460ff16158015612f3457506001600160a01b0389166000908152600a6020526040902080548b919083908110612f1f57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600702016004015410155b15613236576130a188878481518110612f5d57634e487b7160e01b600052603260045260246000fd5b6020026020010151600a60008d6001600160a01b03166001600160a01b031681526020019081526020016000208481548110612fa957634e487b7160e01b600052603260045260246000fd5b90600052602060002090600702016003018054612fc590615d7b565b80601f0160208091040260200160405190810160405280929190818152602001828054612ff190615d7b565b801561303e5780601f106130135761010080835404028352916020019161303e565b820191906000526020600020905b81548152906001019060200180831161302157829003601f168201915b5050506001600160a01b038f166000908152600a602052604090208054909250879150811061307d57634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160050160019054906101000a900460ff16613a96565b6001600160401b0316935083600a60008b6001600160a01b03166001600160a01b0316815260200190815260200160002082815481106130f157634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201600101541415613236576001600160a01b0389166000908152600a602052604090208054600191908390811061314557634e487b7160e01b600052603260045260246000fd5b60009182526020909120600790910201600501805460ff1916911515919091179055613172856001615c1f565b6001600160a01b038a166000818152600a60205260409020805492975090917f7b8cb33b1d4dc1e5d05c58e9945c383eb161ac22029c5b963989d08c3d0ef4da9190849081106131d257634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201600601548d89868151811061320557634e487b7160e01b600052603260045260246000fd5b602002602001015160405161322d939291909283526020830191909152604082015260600190565b60405180910390a25b508061324181615db0565b915050612d67565b5050509695505050505050565b604080546001600160a01b038381166001600160a01b031983168117845592519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600d54610100900460ff166132cd5760405162461bcd60e51b815260040161077490615a11565b610d4433613256565b600d54610100900460ff166124d35760405162461bcd60e51b815260040161077490615a11565b6000806000612710600754866133139190615cc9565b61331d9190615ca9565b600085815260a460205260409020549092506127109061333d9087615cc9565b6133479190615ca9565b600954909150816133588488615d11565b6133629190615d11565b61336c9190615d11565b92506009548310156133be5760405162461bcd60e51b815260206004820152601b60248201527a109d5c9b949bdd5d195c931bd9da58ce881b1bddc8185b5bdd5b9d602a1b6044820152606401610774565b81156134a45760025460035460405163a9059cbb60e01b81526001600160a01b039283169263a9059cbb926133fa929116908690600401615808565b602060405180830381600087803b15801561341457600080fd5b505af1158015613428573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061344c9190614f78565b6134a45760405162461bcd60e51b8152602060048201526024808201527f4275726e526f757465724c6f6769633a20666565207472616e736665722066616044820152631a5b195960e21b6064820152608401610774565b80156135a457600254600085815260a560205260409081902054905163a9059cbb60e01b81526001600160a01b039283169263a9059cbb926134ed929116908590600401615808565b602060405180830381600087803b15801561350757600080fd5b505af115801561351b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061353f9190614f78565b6135a45760405162461bcd60e51b815260206004820152603060248201527f4275726e526f757465724c6f6769633a2074686972642070617274792066656560448201526f081d1c985b9cd9995c8819985a5b195960821b6064820152608401610774565b600954156136965760025460015460095460405163a9059cbb60e01b81526001600160a01b039384169363a9059cbb936135e393911691600401615808565b602060405180830381600087803b1580156135fd57600080fd5b505af1158015613611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136359190614f78565b6136965760405162461bcd60e51b815260206004820152602c60248201527f4275726e526f757465724c6f6769633a206e6574776f726b206665652074726160448201526b1b9cd9995c8819985a5b195960a21b6064820152608401610774565b9250925092565b604080516101008101825260006080820181905260a0820181905260c0820181815260e0830191909152888252602082018890523392820192909252606081018690529084600581111561370157634e487b7160e01b600052602160045260246000fd5b9081600581111561372257634e487b7160e01b600052602160045260246000fd5b9052506006546137329084615c1f565b6080820152600060a082018190526001600160a01b038316808252600b6020818152604084205460e0860181905292909352909152613772906001615c1f565b6001600160a01b038381166000908152600b6020908152604080832094909455600a81528382208054600180820183559184529282902086516007909402019283558582015190830155928401516002820180546001600160a01b03191691909316179091556060830151805184936137f2926003850192910190614b6b565b506080820151600482015560a08201516005808301805492151560ff1984168117825560c086015193919261ff001990911661ffff19909216919091179061010090849081111561385357634e487b7160e01b600052602160045260246000fd5b021790555060e08201518160060155505050505050505050565b81516000906020840161388864ffffffffff85168284613d0a565b95945050505050565b600081816138a7815b62ffffff19841690613d51565b506138b762ffffff198516613e2b565b6001600160601b03166138d3576138cc613e3a565b92506139e0565b60006138e0856000613e42565b905060006138f362ffffff198716613e2b565b6001600160601b031690506001600160401b03821661391d57613914613e3a565b945050506139e0565b600061392883613f8b565b60ff16905060005b836001600160401b03168110156139a65782821061395b57613950613e3a565b9650505050506139e0565b600061397b61396a8486615d11565b60055b62ffffff198c169190613fe9565b905061398681614013565b6139909084615c1f565b925050808061399e90615db0565b915050613930565b508181146139c0576139b6613e3a565b95505050506139e0565b6139da60065b60d81b6301000000600160d81b0389161790565b95505050505b5050919050565b62ffffff199081161490565b600080613a08613a03848361386d565b614067565b9050613a1962ffffff1982166139e7565b15613a365760405162461bcd60e51b8152600401610774906159a7565b600080613a44836000613e42565b6001600160401b0316905060005b81811015613a8d57613a648482614168565b9250613a6f8361427f565b613a799086615c37565b945080613a8581615db0565b915050613a52565b50505050919050565b600080613aa6613a03878361386d565b9050613ab762ffffff1982166139e7565b15613ad45760405162461bcd60e51b8152600401610774906159a7565b6000613ae08287614168565b90506000613aed826142a4565b90506005856005811115613b1157634e487b7160e01b600052602160045260246000fd5b1415613b7657613b2a62ffffff198216600260206142f5565b604051602001613b3c91815260200190565b60405160208183030381529060405280519060200120868051906020012014613b66576000613b6f565b613b6f8261427f565b9350613cff565b6000856005811115613b9857634e487b7160e01b600052602160045260246000fd5b1415613bb157613b2a62ffffff198216600160206142f5565b6001856005811115613bd357634e487b7160e01b600052602160045260246000fd5b1415613c0d57613bea62ffffff1982166003614423565b604051602001613b3c919060609190911b6001600160601b031916815260140190565b6002856005811115613c2f57634e487b7160e01b600052602160045260246000fd5b1415613c4657613bea62ffffff1982166002614423565b6003856005811115613c6857634e487b7160e01b600052602160045260246000fd5b1415613c7f57613bea62ffffff1982166002614423565b6004856005811115613ca157634e487b7160e01b600052602160045260246000fd5b1415613cff57613cba62ffffff198216600260206142f5565b604051602001613ccc91815260200190565b60405160208183030381529060405280519060200120868051906020012014613cf6576000612b87565b612b878261427f565b505050949350505050565b600080613d178385615c1f565b9050604051811115613d27575060005b80613d395762ffffff19915050613d4a565b5050606083811b8317901b811760181b5b9392505050565b6000613d5d8383614431565b613e24576000613d7c613d708560d81c90565b64ffffffffff16614454565b9150506000613d918464ffffffffff16614454565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e015b60405160208183030381529060405290508060405162461bcd60e51b81526004016107749190615859565b5090919050565b60181c6001600160601b031690565b62ffffff1990565b600080613e5762ffffff198516846001614500565b905060fc8111613e7257613e6a81614530565b9150506114f2565b8060fd1415613ed857613ea0613e9b613e8c856001615c1f565b62ffffff19871690600261459c565b614530565b9150613eab82613f8b565b60ff16600314613ed357613ed1613ecc62ffffff19861685600360006146df565b614745565b505b613f84565b8060fe1415613f2d57613f01613e9b613ef2856001615c1f565b62ffffff19871690600461459c565b9150613f0c82613f8b565b60ff16600514613ed357613ed1613ecc62ffffff19861685600560006146df565b8060ff1415613f8457613f56613e9b613f47856001615c1f565b62ffffff19871690600861459c565b9150613f6182613f8b565b60ff16600914613f8457613f82613ecc62ffffff19861685600960006146df565b505b5092915050565b600060fc826001600160401b031611613fa657506001919050565b61ffff826001600160401b031611613fc057506003919050565b63ffffffff826001600160401b031611613fdc57506005919050565b506009919050565b919050565b6000612b8d8484613ff987613e2b565b6001600160601b031661400c9190615d11565b85856146df565b60008160056140218161389a565b50600061402f856024613e42565b9050806001600160401b031661404482613f8b565b60ff166140519190615c1f565b61405c906024615c1f565b613888906004615c1f565b600081816140748161389a565b5061408462ffffff198516613e2b565b6001600160601b0316614099576138cc613e3a565b60006140a6856000613e42565b905060006140b962ffffff198716613e2b565b6001600160601b031690506001600160401b0382166140da57613914613e3a565b60006140e583613f8b565b60ff16905060005b836001600160401b031681101561414e5782821061410d57613950613e3a565b600061412361411c8486615d11565b600e61396d565b905061412e816147cd565b6141389084615c1f565b925050808061414690615db0565b9150506140ed565b5081811461415e576139b6613e3a565b6139da600f6139c6565b600082600f6141768161389a565b506000614184866000613e42565b6001600160401b0316905060006141a062ffffff198816613e2b565b6001600160601b031690508186106141ee5760405162461bcd60e51b81526020600482015260116024820152702b37baba103932b0b21037bb32b9393ab760791b6044820152606401610774565b60006141f983613f8b565b60ff1690506000805b8881101561424f576142266142178486615d11565b62ffffff198c1690600e613fe9565b9150614231826147cd565b61423b9084615c1f565b9250614248600182615c1f565b9050614202565b5061425d61411c8385615d11565b9050600061426a826147cd565b9050611d3662ffffff198b168483600d6146df565b600081600d61428d8161389a565b50612b8d613e9b62ffffff1986166000600861459c565b600081600d6142b28161389a565b5060006142c0856008613e42565b90506138886142ce82613f8b565b6142d9906008615c62565b62ffffff1987169060ff166001600160401b03841660076146df565b600060ff821661430757506000613d4a565b61431084613e2b565b6001600160601b031661432660ff841685615c1f565b11156143765761435d61433885614816565b6001600160601b031661434a86613e2b565b6001600160601b0316858560ff16614825565b60405162461bcd60e51b81526004016107749190615859565b60208260ff1611156143ed5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d7074656420746044820152796f20696e646578206d6f7265207468616e20333220627974657360301b6064820152608401610774565b6008820260006143fc86614816565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000613d4a83836014614500565b60008164ffffffffff166144458460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff1611156144b2576000614473826008615ce8565b60ff1685901c90506144848161494f565b61ffff16841793508160ff1660101461449f57601084901b93505b506144ab600182615d28565b905061445a565b50600f5b60ff8160ff1610156144fa5760ff600882021684901c6144d58161494f565b61ffff16831792508160ff166000146144f057601083901b92505b50600019016144b6565b50915091565b600061450d826020615d28565b614518906008615ce8565b60ff166145268585856142f5565b901c949350505050565b60006001600160401b038211156145985760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610774565b5090565b6000612b8d6145ac8585856142f5565b60008190506008817eff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff16901b600882901c7eff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff161790506010817dffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff16901b601082901c7dffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff161790506020817bffffffff00000000ffffffff00000000ffffffff00000000ffffffff16901b602082901c7bffffffff00000000ffffffff00000000ffffffff00000000ffffffff161790506040816001600160401b03600160801b03600160c01b0316901b604082901c6001600160401b03600160801b03600160c01b0316179050608081901b608082901c179050919050565b6000806146eb86614816565b6001600160601b031690506146ff86614981565b8461470a8784615c1f565b6147149190615c1f565b11156147275762ffffff19915050612b8d565b6147318582615c1f565b9050610a5a8364ffffffffff168286613d0a565b6060600061478361477e8261477061476262ffffff198816613e2b565b6001600160601b03166149ae565b62ffffff1987169190614500565b614454565b6040517a09cdedc5adad2dcd2dac2d840ecc2e440d2dce85c408edee84060f602b1b60208201526001600160701b0319607083901b16603b82015290925060009150604d01613df9565b600081600e6147db8161389a565b5060006147e9856008613e42565b9050806001600160401b03166147fe82613f8b565b60ff1661480b9190615c1f565b613888906008615c1f565b60781c6001600160601b031690565b6060600061483286614454565b915050600061484086614454565b915050600061484e86614454565b915050600061485c86614454565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600061496160048360ff16901c614a0f565b60ff1661ffff919091161760081b61497882614a0f565b60ff1617919050565b600061498c82613e2b565b61499583614816565b61499f9190615c87565b6001600160601b031692915050565b600060ff8211156145985760405162461bcd60e51b815260206004820152602560248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2038604482015264206269747360d81b6064820152608401610774565b600060f08083179060ff82161415614a2a5750603092915050565b8060ff1660f11415614a3f5750603192915050565b8060ff1660f21415614a545750603292915050565b8060ff1660f31415614a695750603392915050565b8060ff1660f41415614a7e5750603492915050565b8060ff1660f51415614a935750603592915050565b8060ff1660f61415614aa85750603692915050565b8060ff1660f71415614abd5750603792915050565b8060ff1660f81415614ad25750603892915050565b8060ff1660f91415614ae75750603992915050565b8060ff1660fa1415614afc5750606192915050565b8060ff1660fb1415614b115750606292915050565b8060ff1660fc1415614b265750606392915050565b8060ff1660fd1415614b3b5750606492915050565b8060ff1660fe1415614b505750606592915050565b8060ff1660ff1415614b655750606692915050565b50919050565b828054614b7790615d7b565b90600052602060002090601f016020900481019282614b995760008555614bdf565b82601f10614bb257805160ff1916838001178555614bdf565b82800160010185558215614bdf579182015b82811115614bdf578251825591602001919060010190614bc4565b506145989291505b808211156145985760008155600101614be7565b8035613fe481615df7565b60008083601f840112614c17578182fd5b5081356001600160401b03811115614c2d578182fd5b6020830191508360208260051b8501011115614c4857600080fd5b9250929050565b600082601f830112614c5f578081fd5b81356020614c74614c6f83615bfc565b615bcc565b80838252828201915082860187848660051b8901011115614c93578586fd5b855b85811015614cb857614ca682614d2d565b84529284019290840190600101614c95565b5090979650505050505050565b600082601f830112614cd5578081fd5b81356020614ce5614c6f83615bfc565b80838252828201915082860187848660051b8901011115614d04578586fd5b855b85811015614cb857813584529284019290840190600101614d06565b8035613fe481615e0c565b80356001600160e01b031981168114613fe457600080fd5b60008083601f840112614d56578182fd5b5081356001600160401b03811115614d6c578182fd5b602083019150836020828501011115614c4857600080fd5b600082601f830112614d94578081fd5b81356001600160401b03811115614dad57614dad615de1565b614dc0601f8201601f1916602001615bcc565b818152846020838601011115614dd4578283fd5b816020850160208301379081016020019190915292915050565b803560068110613fe457600080fd5b600060208284031215614e0e578081fd5b8135613d4a81615df7565b600060208284031215614e2a578081fd5b8151613d4a81615df7565b6000806000806000806000806000806000806101208d8f031215614e57578788fd5b614e608d614bfb565b9b506001600160401b0360208e01351115614e79578788fd5b614e898e60208f01358f01614c06565b909b509950614e9a60408e01614d22565b98506001600160401b0360608e01351115614eb3578788fd5b614ec38e60608f01358f01614c06565b909850965060808d013595506001600160401b0360a08e01351115614ee6578485fd5b614ef68e60a08f01358f01614d84565b9450614f0460c08e01614dee565b93506001600160401b0360e08e01351115614f1d578283fd5b614f2d8e60e08f01358f01614d45565b81945080935050506101008d013590509295989b509295989b509295989b565b60008060408385031215614f5f578182fd5b8235614f6a81615df7565b946020939093013593505050565b600060208284031215614f89578081fd5b8151613d4a81615e0c565b60008060408385031215614fa6578182fd5b8251614fb181615e0c565b809250506020808401516001600160401b03811115614fce578283fd5b8401601f81018613614fde578283fd5b8051614fec614c6f82615bfc565b80828252848201915084840189868560051b870101111561500b578687fd5b8694505b8385101561502d57805183526001949094019391850191850161500f565b5080955050505050509250929050565b60006020828403121561504e578081fd5b5035919050565b600060208284031215615066578081fd5b5051919050565b6000806000806000806000806000806101408b8d03121561508c578384fd5b6150958b614d2d565b995060208b01356001600160401b03808211156150b0578586fd5b6150bc8e838f01614d84565b9a5060408d01359150808211156150d1578586fd5b6150dd8e838f01614d84565b99506150eb60608e01614d2d565b985060808d0135975060a08d0135915080821115615107578586fd5b6151138e838f01614d84565b965060c08d0135955060e08d013591508082111561512f578485fd5b61513b8e838f01614d84565b94506101008d0135915080821115615151578384fd5b61515d8e838f01614cc5565b93506101208d0135915080821115615173578283fd5b506151808d828e01614cc5565b9150509295989b9194979a5092959850565b6000806000604084860312156151a6578081fd5b83356001600160401b03808211156151bc578283fd5b6151c887838801614d45565b909550935060208601359150808211156151e0578283fd5b506151ed86828701614cc5565b9150509250925092565b60008060008060008060008060006101208a8c031215615215578283fd5b89356001600160401b038082111561522b578485fd5b6152378d838e01614d84565b9a5060208c013591508082111561524c578485fd5b6152588d838e01614c4f565b995060408c013591508082111561526d578485fd5b6152798d838e01614d84565b985060608c013591508082111561528e578485fd5b61529a8d838e01614d84565b975060808c01359150808211156152af578485fd5b6152bb8d838e01614d84565b965060a08c01359150808211156152d0578485fd5b6152dc8d838e01614d84565b955060c08c01359150808211156152f1578485fd5b6152fd8d838e01614c4f565b945060e08c0135915080821115615312578384fd5b61531e8d838e01614d84565b93506101008c0135915080821115615334578283fd5b506153418c828d01614cc5565b9150509295985092959850929598565b60008060408385031215615363578182fd5b82359150602083013561537581615df7565b809150509250929050565b6000806000806000806000806000806101408b8d03121561539f578384fd5b8a35995060208b01356153b181615df7565b985060408b01356153c181615df7565b975060608b01356153d181615df7565b965060808b01356153e181615df7565b955060a08b0135945060c08b0135935060e08b013592506101008b013591506101208b013561540f81615df7565b809150509295989b9194979a5092959850565b60008060008060008060a0878903121561543a578384fd5b8635955060208701356001600160401b0380821115615457578586fd5b6154638a838b01614d84565b965061547160408a01614dee565b95506060890135915080821115615486578384fd5b5061549389828a01614d45565b979a9699509497949695608090950135949350505050565b600080604083850312156154bd578182fd5b50508035926020909101359150565b6001600160a01b03169052565b6000815180845260208085019450808401835b838110156155125781516001600160e01b031916875295820195908201906001016154ec565b509495945050505050565b6000826060810183835b60038110156155565783830387526155408383516155b9565b6020978801979093509190910190600101615527565b509095945050505050565b6000815180845260208085019450808401835b8381101561551257815187529582019590820190600101615574565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526155d1816020860160208601615d4b565b601f01601f19169290920160200192915050565b6006811061560357634e487b7160e01b600052602160045260246000fd5b9052565b600063ffffffff60e01b80871683528551615629816004860160208a01615d4b565b855190840190615640816004840160208a01615d4b565b919094169301600481019390935250506008019392505050565b6000825161566c818460208701615d4b565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60018060a01b038616815284602082015283604082015260a0606082015260006156f560a08301856155b9565b90508260808301529695505050505050565b615711818e6154cc565b6101806020820152600061572961018083018e6155b9565b828103604084015261573b818e6154d9565b9050828103606084015261574f818d61551d565b90508a60808401528960a084015261576a60c084018a6154cc565b8760e08401528661010084015282810361012084015261578a81876154d9565b905082810361014084015261579f81866155b9565b90508281036101608401526157b48185615561565b9f9e505050505050505050505050505050565b6001600160a01b038616815260a0602082018190526000906157eb908301876155b9565b604083019590955250606081019290925260809091015292915050565b6001600160a01b03929092168252602082015260400190565b602081526000612b8d602083018486615590565b604081526000615849604083018587615590565b9050826020830152949350505050565b602081526000613d4a60208301846155b9565b60808152600061587f60808301886155b9565b61588c60208401886155e5565b6001600160a01b038616604084015282810360608401526158ae818587615590565b98975050505050505050565b60006101a08083526158ce8184018c6155b9565b91505060206158df8184018b6155e5565b6001600160a01b0389811660408501526060840189905260808401889052861660a084015260c083018560005b60038110156159295781518352918301919083019060010161590c565b50505061012083018460005b600481101561595257815183529183019190830190600101615935565b505050509998505050505050505050565b85815284602082015260a06040820152600061598260a08301866155b9565b828103606084015261599481866155b9565b9150508260808301529695505050505050565b6020808252601b908201527a109a5d18dbda5b92195b1c195c8e881d9bdd5d081a5cc81b9d5b1b602a1b604082015260600190565b6020808252601b908201527a213ab9372937baba32b92637b3b4b19d103737ba103637b1b5b2b960291b604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252601d908201527f4275726e526f757465724c6f6769633a20696e76616c69642070617468000000604082015260600190565b888152602081018890526001600160a01b038716604082015261010060608201819052600090615ac5838201896155b9565b91505085608083015284151560a0830152615ae360c08301856155e5565b8260e08301529998505050505050505050565b878152602080820188905260c0604083018190528201869052600090879060e08401835b89811015615b48578335615b2d81615df7565b6001600160a01b031682529282019290820190600101615b1a565b506001600160a01b039790971660608501525050506080810192909252151560a090910152949350505050565b878152602081018790526001600160e01b0319861660408201526001600160a01b038516606082015260e060808201819052600090615bb6908301866155b9565b60a08301949094525060c0015295945050505050565b604051601f8201601f191681016001600160401b0381118282101715615bf457615bf4615de1565b604052919050565b60006001600160401b03821115615c1557615c15615de1565b5060051b60200190565b60008219821115615c3257615c32615dcb565b500190565b60006001600160401b03808316818516808303821115615c5957615c59615dcb565b01949350505050565b600060ff821660ff84168060ff03821115615c7f57615c7f615dcb565b019392505050565b60006001600160601b03828116848216808303821115615c5957615c59615dcb565b600082615cc457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615615ce357615ce3615dcb565b500290565b600060ff821660ff84168160ff0481118215151615615d0957615d09615dcb565b029392505050565b600082821015615d2357615d23615dcb565b500390565b600060ff821660ff841680821015615d4257615d42615dcb565b90039392505050565b60005b83811015615d66578181015183820152602001615d4e565b83811115615d75576000848401525b50505050565b600181811c90821680615d8f57607f821691505b60208210811415614b6557634e487b7160e01b600052602260045260246000fd5b6000600019821415615dc457615dc4615dcb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611e5457600080fd5b8015158114611e5457600080fdfea2646970667358221220ce8285041c42ce62ccea84c8f8536bc4666a5ddf040f2eb23da4ae307051742664736f6c63430008040033"
  , k1 = b => typeof b[0] == "string" || Array.isArray(b[0]) || "_isInterface"in b[0]
  , E = class E extends F {
    constructor(...e) {
        if (k1(e))
            super(...e);
        else {
            const [a,n] = e;
            super(n0, E.linkBytecode(a), n)
        }
    }
    static linkBytecode(e) {
        let a = K0;
        return a = a.replace(new RegExp("__\\$b2d4c044db363f4bd023a450a1a4a26d98\\$__","g"), e["contracts/libraries/BurnRouterLib.sol:BurnRouterLib"].replace(/^0x/, "").toLowerCase()),
        a
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(n0)
    }
    static connect(e, a) {
        return new g(e,n0,a)
    }
}
;
u(E, "bytecode", K0),
u(E, "abi", n0);
let I0 = E;
const d0 = [{
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        indexed: !1,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "address",
        name: "receiver",
        type: "address"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [],
    name: "exchangeRouter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_outputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_inputToken",
        type: "address"
    }, {
        internalType: "address",
        name: "_outputToken",
        type: "address"
    }],
    name: "getInputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_inputToken",
        type: "address"
    }, {
        internalType: "address",
        name: "_outputToken",
        type: "address"
    }],
    name: "getOutputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "isPathValid",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "liquidityPoolFactory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }],
    name: "setExchangeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setLiquidityPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_outputAmount",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "_isFixedToken",
        type: "bool"
    }],
    name: "swap",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }, {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}]
  , J0 = "0x60806040523480156200001157600080fd5b506040516200257c3803806200257c8339810160408190526200003491620002dd565b6200003f33620001a6565b60018055815162000058906002906020850190620001f6565b50600380546001600160a01b0319166001600160a01b0383169081179091556040805163c45a015560e01b8152905163c45a015591600480820192602092909190829003018186803b158015620000ae57600080fd5b505afa158015620000c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e99190620002b9565b600480546001600160a01b0319166001600160a01b03928316178155600354604080516315ab88c960e31b81529051919093169263ad5c46489281810192602092909190829003018186803b1580156200014257600080fd5b505afa15801562000157573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200017d9190620002b9565b600580546001600160a01b0319166001600160a01b0392909216919091179055506200041b9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200020490620003c8565b90600052602060002090601f01602090048101928262000228576000855562000273565b82601f106200024357805160ff191683800117855562000273565b8280016001018555821562000273579182015b828111156200027357825182559160200191906001019062000256565b506200028192915062000285565b5090565b5b8082111562000281576000815560010162000286565b80516001600160a01b0381168114620002b457600080fd5b919050565b600060208284031215620002cb578081fd5b620002d6826200029c565b9392505050565b60008060408385031215620002f0578081fd5b82516001600160401b038082111562000307578283fd5b818501915085601f8301126200031b578283fd5b81518181111562000330576200033062000405565b604051601f8201601f19908116603f011681019083821181831017156200035b576200035b62000405565b8160405282815260209350888484870101111562000377578586fd5b8591505b828210156200039a57848201840151818301850152908301906200037b565b82821115620003ab57858484830101525b9550620003bd9150508582016200029c565b925050509250929050565b600181811c90821680620003dd57607f821691505b60208210811415620003ff57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b612151806200042b6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806306fdde03146100bf5780631580b5e5146100dd57806317fcb39b146100e75780631cb8581814610112578063715018a614610125578063838b7ccb1461012d57806389883074146101405780638da5cb5b1461016a5780639b4bca2414610172578063b0bbcd8814610195578063b23e4fc6146101b6578063df71d7f3146101be578063e75d75d5146101d1578063f2fde38b146101e4575b600080fd5b6100c76101f7565b6040516100d49190611ee2565b60405180910390f35b6100e5610285565b005b6005546100fa906001600160a01b031681565b6040516001600160a01b0390911681526020016100d4565b6003546100fa906001600160a01b031681565b6100e5610365565b6100e561013b366004611c18565b610396565b61015361014e366004611d3f565b61052c565b6040805192151583526020830191909152016100d4565b6100fa610976565b610185610180366004611c57565b610985565b60405190151581526020016100d4565b6101a86101a3366004611d80565b610ac9565b6040516100d4929190611ec7565b6100e5611313565b6101536101cc366004611d3f565b6113ea565b6004546100fa906001600160a01b031681565b6100e56101f2366004611c18565b6118d3565b6002805461020490612076565b80601f016020809104026020016040519081016040528092919081815260200182805461023090612076565b801561027d5780601f106102525761010080835404028352916020019161027d565b820191906000526020600020905b81548152906001019060200180831161026057829003601f168201915b505050505081565b3361028e610976565b6001600160a01b0316146102bd5760405162461bcd60e51b81526004016102b490611f35565b60405180910390fd5b600360009054906101000a90046001600160a01b03166001600160a01b031663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b15801561030b57600080fd5b505afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190611c3b565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b3361036e610976565b6001600160a01b0316146103945760405162461bcd60e51b81526004016102b490611f35565b565b806001600160a01b0381166103bd5760405162461bcd60e51b81526004016102b490611f6a565b336103c6610976565b6001600160a01b0316146103ec5760405162461bcd60e51b81526004016102b490611f35565b600380546001600160a01b0319166001600160a01b0384169081179091556040805163c45a015560e01b8152905163c45a015591600480820192602092909190829003018186803b15801561044057600080fd5b505afa158015610454573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104789190611c3b565b600480546001600160a01b0319166001600160a01b03928316178155600354604080516315ab88c960e31b81529051919093169263ad5c46489281810192602092909190829003018186803b1580156104d057600080fd5b505afa1580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105089190611c3b565b600580546001600160a01b0319166001600160a01b03929092169190911790555050565b600080836001600160a01b0381166105565760405162461bcd60e51b81526004016102b490611f6a565b836001600160a01b03811661057d5760405162461bcd60e51b81526004016102b490611f6a565b6004805460405163e6a4390560e01b81526000926001600160a01b039092169163e6a43905916105b1918b918b9101611e6f565b60206040518083038186803b1580156105c957600080fd5b505afa1580156105dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106019190611c3b565b90506001600160a01b0381166108e7576004805460055460405163e6a4390560e01b81526000936001600160a01b039384169363e6a439059361064b938e93919092169101611e6f565b60206040518083038186803b15801561066357600080fd5b505afa158015610677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190611c3b565b6001600160a01b0316148061073e57506004805460055460405163e6a4390560e01b81526000936001600160a01b039384169363e6a43905936106e3939116918c9101611e6f565b60206040518083038186803b1580156106fb57600080fd5b505afa15801561070f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107339190611c3b565b6001600160a01b0316145b1561075057600080945094505061096c565b6040805160038082526080820190925260009160208201606080368337019050509050878160008151811061079557634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526005548251911690829060019081106107d457634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050868160028151811061081657634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526003546040516307c0329d60e21b81526000929190911690631f00ca749061085a908d908690600401611f9f565b60006040518083038186803b15801561087257600080fd5b505afa158015610886573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108ae9190810190611c91565b90506001816000815181106108d357634e487b7160e01b600052603260045260246000fd5b60200260200101519650965050505061096c565b604080516002808252606082018352600092602083019080368337019050509050878160008151811061092a57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050868160018151811061081657634e487b7160e01b600052603260045260246000fd5b5050935093915050565b6000546001600160a01b031690565b60008060028351101561099b5750600092915050565b60005b600184516109ac919061205f565b811015610abf5760045484516001600160a01b039091169063e6a43905908690849081106109ea57634e487b7160e01b600052603260045260246000fd5b602002602001015186846001610a009190612047565b81518110610a1e57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b8152600401610a43929190611e6f565b60206040518083038186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a939190611c3b565b91506001600160a01b038216610aad575060009392505050565b80610ab7816120b1565b91505061099e565b5060019392505050565b6000606060026001541415610b205760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102b4565b6002600155846001600160a01b038116610b4c5760405162461bcd60e51b81526004016102b490611f6a565b865160021415610d6d5760045487516000916001600160a01b03169063e6a43905908a908490610b8c57634e487b7160e01b600052603260045260246000fd5b60200260200101518a600181518110610bb557634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b8152600401610bda929190611e6f565b60206040518083038186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a9190611c3b565b90506001600160a01b038116610d6b57604080516003808252608082019092526000916020820160608036833701905050905088600081518110610c7e57634e487b7160e01b600052603260045260246000fd5b602002602001015181600081518110610ca757634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092010152600554825191169082906001908110610ce657634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505088600181518110610d2757634e487b7160e01b600052603260045260246000fd5b602002602001015181600281518110610d5057634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015297505b505b6000610d7c8a8a8a8989611973565b909450905083156113005787600081518110610da857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd610dc53390565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260448101849052606401602060405180830381600087803b158015610e1357600080fd5b505af1158015610e27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4b9190611d23565b5087600081518110610e6d57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160035460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b390604401602060405180830381600087803b158015610ec557600080fd5b505af1158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd9190611d23565b5084158015610f58575060055488516001600160a01b03909116908990610f269060019061205f565b81518110610f4457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031614155b15610fee57600354604051634401edf760e11b81526001600160a01b0390911690638803dbee90610f95908c908e908d908d908d90600401611fb8565b600060405180830381600087803b158015610faf57600080fd5b505af1158015610fc3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610feb9190810190611c91565b92505b84158015611047575060055488516001600160a01b039091169089906110169060019061205f565b8151811061103457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316145b156110dd57600354604051632512eca560e11b81526001600160a01b0390911690634a25d94a90611084908c908e908d908d908d90600401611fb8565b600060405180830381600087803b15801561109e57600080fd5b505af11580156110b2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110da9190810190611c91565b92505b600185151514801561113b575060055488516001600160a01b039091169089906111099060019061205f565b8151811061112757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031614155b156111d1576003546040516338ed173960e01b81526001600160a01b03909116906338ed173990611178908d908d908d908d908d90600401611fb8565b600060405180830381600087803b15801561119257600080fd5b505af11580156111a6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111ce9190810190611c91565b92505b600185151514801561122e575060055488516001600160a01b039091169089906111fd9060019061205f565b8151811061121b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316145b156112c4576003546040516318cbafe560e01b81526001600160a01b03909116906318cbafe59061126b908d908d908d908d908d90600401611fb8565b600060405180830381600087803b15801561128557600080fd5b505af1158015611299573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112c19190810190611c91565b92505b7fe1010d0ab476908054981d12fbb96915efcceb8d57a09ae8ca62f4bda73183738884896040516112f793929190611e89565b60405180910390a15b5050600180559097909650945050505050565b3361131c610976565b6001600160a01b0316146113425760405162461bcd60e51b81526004016102b490611f35565b600360009054906101000a90046001600160a01b03166001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561139057600080fd5b505afa1580156113a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c89190611c3b565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600080836001600160a01b0381166114145760405162461bcd60e51b81526004016102b490611f6a565b836001600160a01b03811661143b5760405162461bcd60e51b81526004016102b490611f6a565b6004805460405163e6a4390560e01b81526000926001600160a01b039092169163e6a439059161146f918b918b9101611e6f565b60206040518083038186803b15801561148757600080fd5b505afa15801561149b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bf9190611c3b565b90506001600160a01b038116611791576004805460055460405163e6a4390560e01b81526000936001600160a01b039384169363e6a4390593611509938e93919092169101611e6f565b60206040518083038186803b15801561152157600080fd5b505afa158015611535573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115599190611c3b565b6001600160a01b031614806115fc57506004805460055460405163e6a4390560e01b81526000936001600160a01b039384169363e6a43905936115a1939116918c9101611e6f565b60206040518083038186803b1580156115b957600080fd5b505afa1580156115cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f19190611c3b565b6001600160a01b0316145b1561160e57600080945094505061096c565b6040805160038082526080820190925260009160208201606080368337019050509050878160008151811061165357634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260055482519116908290600190811061169257634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505086816002815181106116d457634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260035460405163d06ca61f60e01b8152600092919091169063d06ca61f90611718908d908690600401611f9f565b60006040518083038186803b15801561173057600080fd5b505afa158015611744573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261176c9190810190611c91565b90506001816002815181106108d357634e487b7160e01b600052603260045260246000fd5b60408051600280825260608201835260009260208301908036833701905050905087816000815181106117d457634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050868160018151811061181657634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260035460405163d06ca61f60e01b8152600092919091169063d06ca61f9061185a908d908690600401611f9f565b60006040518083038186803b15801561187257600080fd5b505afa158015611886573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118ae9190810190611c91565b90506001816001815181106108d357634e487b7160e01b600052603260045260246000fd5b336118dc610976565b6001600160a01b0316146119025760405162461bcd60e51b81526004016102b490611f35565b6001600160a01b0381166119675760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102b4565b61197081611b50565b50565b6000804284101561198957506000905080611b46565b61199285610985565b6119a157506000905080611b46565b60035460405163d06ca61f60e01b81526000916001600160a01b03169063d06ca61f906119d4908b908a90600401611f9f565b60006040518083038186803b1580156119ec57600080fd5b505afa158015611a00573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611a289190810190611c91565b90508060018751611a39919061205f565b81518110611a5757634e487b7160e01b600052603260045260246000fd5b6020026020010151871115611a73576000809250925050611b46565b60018415151415611a8b576001889250925050611b46565b6003546040516307c0329d60e21b81526000916001600160a01b031690631f00ca7490611abe908b908b90600401611f9f565b60006040518083038186803b158015611ad657600080fd5b505afa158015611aea573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b129190810190611c91565b9050600181600081518110611b3757634e487b7160e01b600052603260045260246000fd5b60200260200101519350935050505b9550959350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600082601f830112611bb0578081fd5b81356020611bc5611bc083612024565b611ff4565b80838252828201915082860187848660051b8901011115611be4578586fd5b855b85811015611c0b578135611bf9816120f8565b84529284019290840190600101611be6565b5090979650505050505050565b600060208284031215611c29578081fd5b8135611c34816120f8565b9392505050565b600060208284031215611c4c578081fd5b8151611c34816120f8565b600060208284031215611c68578081fd5b81356001600160401b03811115611c7d578182fd5b611c8984828501611ba0565b949350505050565b60006020808385031215611ca3578182fd5b82516001600160401b03811115611cb8578283fd5b8301601f81018513611cc8578283fd5b8051611cd6611bc082612024565b80828252848201915084840188868560051b8701011115611cf5578687fd5b8694505b83851015611d17578051835260019490940193918501918501611cf9565b50979650505050505050565b600060208284031215611d34578081fd5b8151611c348161210d565b600080600060608486031215611d53578182fd5b833592506020840135611d65816120f8565b91506040840135611d75816120f8565b809150509250925092565b60008060008060008060c08789031215611d98578182fd5b863595506020870135945060408701356001600160401b03811115611dbb578283fd5b611dc789828a01611ba0565b9450506060870135611dd8816120f8565b92506080870135915060a0870135611def8161210d565b809150509295509295509295565b6000815180845260208085019450808401835b83811015611e355781516001600160a01b031687529582019590820190600101611e10565b509495945050505050565b6000815180845260208085019450808401835b83811015611e3557815187529582019590820190600101611e53565b6001600160a01b0392831681529116602082015260400190565b606081526000611e9c6060830186611dfd565b8281036020840152611eae8186611e40565b91505060018060a01b0383166040830152949350505050565b8215158152604060208201526000611c896040830184611e40565b6000602080835283518082850152825b81811015611f0e57858101830151858201604001528201611ef2565b81811115611f1f5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252818101527f556e69737761705632436f6e6e6563746f723a207a65726f2061646472657373604082015260600190565b828152604060208201526000611c896040830184611dfd565b85815284602082015260a060408201526000611fd760a0830186611dfd565b6001600160a01b0394909416606083015250608001529392505050565b604051601f8201601f191681016001600160401b038111828210171561201c5761201c6120e2565b604052919050565b60006001600160401b0382111561203d5761203d6120e2565b5060051b60200190565b6000821982111561205a5761205a6120cc565b500190565b600082821015612071576120716120cc565b500390565b600181811c9082168061208a57607f821691505b602082108114156120ab57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120c5576120c56120cc565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461197057600080fd5b801515811461197057600080fdfea264697066735822122040662ee102cbdb0003aaa275f906bcfd030f9d10176a1e9423a046d428498c4664736f6c63430008040033";
class P0 extends F {
    constructor(...e) {
        e.length === 1 ? super(d0, J0, e[0]) : super(...e)
    }
    deploy(e, a, n) {
        return super.deploy(e, a, n || {})
    }
    getDeployTransaction(e, a, n) {
        return super.getDeployTransaction(e, a, n || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(d0)
    }
    static connect(e, a) {
        return new g(e,d0,a)
    }
}
u(P0, "bytecode", J0),
u(P0, "abi", d0);
const f0 = [{
    inputs: [{
        internalType: "address",
        name: "_feeToSetter",
        type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "token0",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "token1",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "pair",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "PairCreated",
    type: "event"
}, {
    constant: !0,
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "allPairs",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "allPairsLength",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }],
    name: "createPair",
    outputs: [{
        internalType: "address",
        name: "pair",
        type: "address"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeTo",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "feeToSetter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getPair",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_feeTo",
        type: "address"
    }],
    name: "setFeeTo",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_feeToSetter",
        type: "address"
    }],
    name: "setFeeToSetter",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}]
  , e6 = "0x608060405234801561001057600080fd5b50604051612aa9380380612aa98339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055612a46806100636000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a2e74af61161005b578063a2e74af6146100f0578063c9c6539614610118578063e6a4390514610146578063f46901ed1461017457610088565b8063017e7e581461008d578063094b7415146100b15780631e3dd18b146100b9578063574f2ba3146100d6575b600080fd5b61009561019a565b604080516001600160a01b039092168252519081900360200190f35b6100956101a9565b610095600480360360208110156100cf57600080fd5b50356101b8565b6100de6101df565b60408051918252519081900360200190f35b6101166004803603602081101561010657600080fd5b50356001600160a01b03166101e5565b005b6100956004803603604081101561012e57600080fd5b506001600160a01b038135811691602001351661025d565b6100956004803603604081101561015c57600080fd5b506001600160a01b038135811691602001351661058e565b6101166004803603602081101561018a57600080fd5b50356001600160a01b03166105b4565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101c557fe5b6000918252602090912001546001600160a01b0316905081565b60035490565b6001546001600160a01b0316331461023b576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156102c6576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056323a204944454e544943414c5f4144445245535345530000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106102e95783856102ec565b84845b90925090506001600160a01b03821661034c576040805162461bcd60e51b815260206004820152601760248201527f556e697377617056323a205a45524f5f41444452455353000000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600260209081526040808320858516845290915290205416156103bf576040805162461bcd60e51b8152602060048201526016602482015275556e697377617056323a20504149525f45584953545360501b604482015290519081900360640190fd5b6060604051806020016103d19061062c565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b03166001600160a01b031660601b8152601401826001600160a01b03166001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f56040805163485cc95560e01b81526001600160a01b038781166004830152868116602483015291519297509087169163485cc9559160448082019260009290919082900301818387803b1580156104a457600080fd5b505af11580156104b8573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b0316331461060a576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6123d88061063a8339019056fe60806040526001600c5534801561001557600080fd5b5060405146908060526123868239604080519182900360520182208282018252600a8352692ab734b9bbb0b8102b1960b11b6020938401528151808301835260018152603160f81b908401528151808401919091527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b03191633179055612281806101056000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610afe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b24565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b4e565b604080519115158252519081900360200190f35b610339610b65565b604080516001600160a01b039092168252519081900360200190f35b61035d610b74565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b7a565b61035d610c14565b6103b5610c38565b6040805160ff9092168252519081900360200190f35b61035d610c3d565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c43565b61035d610cc7565b61035d610ccd565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cd3565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610fd3565b61035d610fe5565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610feb565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316610ffd565b6040805192835260208301919091528051918290030190f35b6102446113a3565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356113c5565b61035d6113d2565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b03166113d8565b610339611543565b610339611552565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611561565b61035d600480360360408110156105a357600080fd5b506001600160a01b0381358116916020013516611763565b61023a611780565b600c5460011461060e576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55841515806106215750600084115b61065c5760405162461bcd60e51b81526004018080602001828103825260258152602001806121936025913960400191505060405180910390fd5b600080610667610b24565b5091509150816001600160701b03168710801561068c5750806001600160701b031686105b6106c75760405162461bcd60e51b81526004018080602001828103825260218152602001806121dc6021913960400191505060405180910390fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107055750806001600160a01b0316896001600160a01b031614155b61074e576040805162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b604482015290519081900360640190fd5b8a1561075f5761075f828a8d6118e2565b891561077057610770818a8c6118e2565b861561082b57886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561081257600080fd5b505af1158015610826573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561087157600080fd5b505afa158015610885573d6000803e3d6000fd5b505050506040513d602081101561089b57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108e757600080fd5b505afa1580156108fb573d6000803e3d6000fd5b505050506040513d602081101561091157600080fd5b5051925060009150506001600160701b0385168a90038311610934576000610943565b89856001600160701b03160383035b9050600089856001600160701b031603831161096057600061096f565b89856001600160701b03160383035b905060008211806109805750600081115b6109bb5760405162461bcd60e51b81526004018080602001828103825260248152602001806121b86024913960400191505060405180910390fd5b60006109ef6109d184600363ffffffff611a7c16565b6109e3876103e863ffffffff611a7c16565b9063ffffffff611adf16565b90506000610a076109d184600363ffffffff611a7c16565b9050610a38620f4240610a2c6001600160701b038b8116908b1663ffffffff611a7c16565b9063ffffffff611a7c16565b610a48838363ffffffff611a7c16565b1015610a8a576040805162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b604482015290519081900360640190fd5b5050610a9884848888611b2f565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600a8152602001692ab734b9bbb0b8102b1960b11b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b5b338484611cf4565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bff576001600160a01b0384166000908152600260209081526040808320338452909152902054610bda908363ffffffff611adf16565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c0a848484611d56565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c99576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d20576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610d30610b24565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d8457600080fd5b505afa158015610d98573d6000803e3d6000fd5b505050506040513d6020811015610dae57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e0157600080fd5b505afa158015610e15573d6000803e3d6000fd5b505050506040513d6020811015610e2b57600080fd5b505190506000610e4a836001600160701b03871663ffffffff611adf16565b90506000610e67836001600160701b03871663ffffffff611adf16565b90506000610e758787611e10565b60005490915080610eb257610e9e6103e86109e3610e99878763ffffffff611a7c16565b611f6e565b9850610ead60006103e8611fc0565b610f01565b610efe6001600160701b038916610ecf868463ffffffff611a7c16565b81610ed657fe5b046001600160701b038916610ef1868563ffffffff611a7c16565b81610ef857fe5b04612056565b98505b60008911610f405760405162461bcd60e51b81526004018080602001828103825260288152602001806122256028913960400191505060405180910390fd5b610f4a8a8a611fc0565b610f5686868a8a611b2f565b8115610f8657600854610f82906001600160701b0380821691600160701b90041663ffffffff611a7c16565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461104b576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c8190558061105b610b24565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110b757600080fd5b505afa1580156110cb573d6000803e3d6000fd5b505050506040513d60208110156110e157600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561112f57600080fd5b505afa158015611143573d6000803e3d6000fd5b505050506040513d602081101561115957600080fd5b5051306000908152600160205260408120549192506111788888611e10565b6000549091508061118f848763ffffffff611a7c16565b8161119657fe5b049a50806111aa848663ffffffff611a7c16565b816111b157fe5b04995060008b1180156111c4575060008a115b6111ff5760405162461bcd60e51b81526004018080602001828103825260288152602001806121fd6028913960400191505060405180910390fd5b611209308461206e565b611214878d8d6118e2565b61121f868d8c6118e2565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561126557600080fd5b505afa158015611279573d6000803e3d6000fd5b505050506040513d602081101561128f57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112db57600080fd5b505afa1580156112ef573d6000803e3d6000fd5b505050506040513d602081101561130557600080fd5b5051935061131585858b8b611b2f565b811561134557600854611341906001600160701b0380821691600160701b90041663ffffffff611a7c16565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060068152602001652aa72496ab1960d11b81525081565b6000610b5b338484611d56565b6103e881565b600c54600114611423576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114d292859287926114cd926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561149557600080fd5b505afa1580156114a9573d6000803e3d6000fd5b505050506040513d60208110156114bf57600080fd5b50519063ffffffff611adf16565b6118e2565b600854604080516370a0823160e01b8152306004820152905161153992849287926114cd92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561149557600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115ab576040805162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116c6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116fc5750886001600160a01b0316816001600160a01b0316145b61174d576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611758898989611cf4565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c546001146117cb576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118db926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561181c57600080fd5b505afa158015611830573d6000803e3d6000fd5b505050506040513d602081101561184657600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561189357600080fd5b505afa1580156118a7573d6000803e3d6000fd5b505050506040513d60208110156118bd57600080fd5b50516008546001600160701b0380821691600160701b900416611b2f565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061198f5780518252601f199092019160209182019101611970565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119f1576040519150601f19603f3d011682016040523d82523d6000602084013e6119f6565b606091505b5091509150818015611a24575080511580611a245750808060200190516020811015611a2157600080fd5b50515b611a75576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b6000811580611a9757505080820282828281611a9457fe5b04145b610b5f576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b5f576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b4d57506001600160701b038311155b611b94576040805162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611bc457506001600160701b03841615155b8015611bd857506001600160701b03831615155b15611c49578063ffffffff16611c0685611bf18661210c565b6001600160e01b03169063ffffffff61211e16565b600980546001600160e01b03929092169290920201905563ffffffff8116611c3184611bf18761210c565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d7f908263ffffffff611adf16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611db4908263ffffffff61214316565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e6157600080fd5b505afa158015611e75573d6000803e3d6000fd5b505050506040513d6020811015611e8b57600080fd5b5051600b546001600160a01b038216158015945091925090611f5a578015611f55576000611ece610e996001600160701b0388811690881663ffffffff611a7c16565b90506000611edb83611f6e565b905080821115611f52576000611f09611efa848463ffffffff611adf16565b6000549063ffffffff611a7c16565b90506000611f2e83611f2286600563ffffffff611a7c16565b9063ffffffff61214316565b90506000818381611f3b57fe5b0490508015611f4e57611f4e8782611fc0565b5050505b50505b611f66565b8015611f66576000600b555b505092915050565b60006003821115611fb1575080600160028204015b81811015611fab57809150600281828581611f9a57fe5b040181611fa357fe5b049050611f83565b50611fbb565b8115611fbb575060015b919050565b600054611fd3908263ffffffff61214316565b60009081556001600160a01b038316815260016020526040902054611ffe908263ffffffff61214316565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106120655781612067565b825b9392505050565b6001600160a01b038216600090815260016020526040902054612097908263ffffffff611adf16565b6001600160a01b038316600090815260016020526040812091909155546120c4908263ffffffff611adf16565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161213b57fe5b049392505050565b80820182811015610b5f576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544a265627a7a723158201ada19e923cbb5ba3b9d6906dcc9b75b941a47929a1a56634c51f933454052f564736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a265627a7a723158207117568bc93dce1473f66c341e586a8838690cc6809f75ca8b57edfe1ba15f3b64736f6c63430005100032";
class R0 extends F {
    constructor(...e) {
        e.length === 1 ? super(f0, e6, e[0]) : super(...e)
    }
    deploy(e, a) {
        return super.deploy(e, a || {})
    }
    getDeployTransaction(e, a) {
        return super.getDeployTransaction(e, a || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(f0)
    }
    static connect(e, a) {
        return new g(e,f0,a)
    }
}
u(R0, "bytecode", e6),
u(R0, "abi", f0);
const i0 = [{
    inputs: [{
        internalType: "address",
        name: "_factory",
        type: "address"
    }, {
        internalType: "address",
        name: "_WETH",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    inputs: [],
    name: "WETH",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "addLiquidity",
    outputs: [{
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amountTokenDesired",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "addLiquidityETH",
    outputs: [{
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "factory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256"
    }],
    name: "getAmountIn",
    outputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256"
    }],
    name: "getAmountOut",
    outputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }],
    name: "getAmountsIn",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }],
    name: "getAmountsOut",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256"
    }],
    name: "quote",
    outputs: [{
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "removeLiquidity",
    outputs: [{
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "removeLiquidityETH",
    outputs: [{
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    outputs: [{
        internalType: "uint256",
        name: "amountETH",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "approveMax",
        type: "bool"
    }, {
        internalType: "uint8",
        name: "v",
        type: "uint8"
    }, {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "removeLiquidityETHWithPermit",
    outputs: [{
        internalType: "uint256",
        name: "amountToken",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "approveMax",
        type: "bool"
    }, {
        internalType: "uint8",
        name: "v",
        type: "uint8"
    }, {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    outputs: [{
        internalType: "uint256",
        name: "amountETH",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }, {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "approveMax",
        type: "bool"
    }, {
        internalType: "uint8",
        name: "v",
        type: "uint8"
    }, {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "removeLiquidityWithPermit",
    outputs: [{
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapETHForExactTokens",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactETHForTokens",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactTokensForETH",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactTokensForTokens",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapTokensForExactETH",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "swapTokensForExactTokens",
    outputs: [{
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , a6 = "0x60c060405234801561001057600080fd5b5060405162004764380380620047648339818101604052604081101561003557600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6145df620001856000398061015f5280610ce45280610d1f5280610e16528061103452806113be528061152452806118eb52806119e55280611a9b5280611b695280611caf5280611d375280611f7c5280611ff752806120a652806121725280612207528061227b528061277952806129ec5280612a425280612a765280612aea5280612c8a5280612dcd5280612e55525080610ea45280610f7b52806110fa5280611133528061126e528061144c528061150252806116725280611bfc5280611d695280611ecc52806122ad528061250652806126fe5280612727528061275752806128c45280612a205280612d1d5280612e8752806136df52806137225280613a055280613b845280613fb4528061406252806140e252506145df6000f3fe60806040526004361061014f5760003560e01c80638803dbee116100b6578063c45a01551161006f578063c45a015514610a10578063d06ca61f14610a25578063ded9382a14610ada578063e8e3370014610b4d578063f305d71914610bcd578063fb3bdb4114610c1357610188565b80638803dbee146107df578063ad5c464814610875578063ad615dec146108a6578063af2979eb146108dc578063b6f9de951461092f578063baa2abde146109b357610188565b80634a25d94a116101085780634a25d94a146104f05780635b0d5984146105865780635c11d795146105f9578063791ac9471461068f5780637ff36ab51461072557806385f8c259146107a957610188565b806302751cec1461018d578063054d50d4146101f957806318cbafe5146102415780631f00ca74146103275780632195995c146103dc57806338ed17391461045a57610188565b3661018857336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461018657fe5b005b600080fd5b34801561019957600080fd5b506101e0600480360360c08110156101b057600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135610c97565b6040805192835260208301919091528051918290030190f35b34801561020557600080fd5b5061022f6004803603606081101561021c57600080fd5b5080359060208101359060400135610db1565b60408051918252519081900360200190f35b34801561024d57600080fd5b506102d7600480360360a081101561026457600080fd5b813591602081013591810190606081016040820135600160201b81111561028a57600080fd5b82018360208201111561029c57600080fd5b803590602001918460208302840111600160201b831117156102bd57600080fd5b91935091506001600160a01b038135169060200135610dc6565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103135781810151838201526020016102fb565b505050509050019250505060405180910390f35b34801561033357600080fd5b506102d76004803603604081101561034a57600080fd5b81359190810190604081016020820135600160201b81111561036b57600080fd5b82018360208201111561037d57600080fd5b803590602001918460208302840111600160201b8311171561039e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506110f3945050505050565b3480156103e857600080fd5b506101e0600480360361016081101561040057600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff6101008201351690610120810135906101400135611129565b34801561046657600080fd5b506102d7600480360360a081101561047d57600080fd5b813591602081013591810190606081016040820135600160201b8111156104a357600080fd5b8201836020820111156104b557600080fd5b803590602001918460208302840111600160201b831117156104d657600080fd5b91935091506001600160a01b038135169060200135611223565b3480156104fc57600080fd5b506102d7600480360360a081101561051357600080fd5b813591602081013591810190606081016040820135600160201b81111561053957600080fd5b82018360208201111561054b57600080fd5b803590602001918460208302840111600160201b8311171561056c57600080fd5b91935091506001600160a01b03813516906020013561136e565b34801561059257600080fd5b5061022f60048036036101408110156105aa57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356114fa565b34801561060557600080fd5b50610186600480360360a081101561061c57600080fd5b813591602081013591810190606081016040820135600160201b81111561064257600080fd5b82018360208201111561065457600080fd5b803590602001918460208302840111600160201b8311171561067557600080fd5b91935091506001600160a01b038135169060200135611608565b34801561069b57600080fd5b50610186600480360360a08110156106b257600080fd5b813591602081013591810190606081016040820135600160201b8111156106d857600080fd5b8201836020820111156106ea57600080fd5b803590602001918460208302840111600160201b8311171561070b57600080fd5b91935091506001600160a01b03813516906020013561189d565b6102d76004803603608081101561073b57600080fd5b81359190810190604081016020820135600160201b81111561075c57600080fd5b82018360208201111561076e57600080fd5b803590602001918460208302840111600160201b8311171561078f57600080fd5b91935091506001600160a01b038135169060200135611b21565b3480156107b557600080fd5b5061022f600480360360608110156107cc57600080fd5b5080359060208101359060400135611e74565b3480156107eb57600080fd5b506102d7600480360360a081101561080257600080fd5b813591602081013591810190606081016040820135600160201b81111561082857600080fd5b82018360208201111561083a57600080fd5b803590602001918460208302840111600160201b8311171561085b57600080fd5b91935091506001600160a01b038135169060200135611e81565b34801561088157600080fd5b5061088a611f7a565b604080516001600160a01b039092168252519081900360200190f35b3480156108b257600080fd5b5061022f600480360360608110156108c957600080fd5b5080359060208101359060400135611f9e565b3480156108e857600080fd5b5061022f600480360360c08110156108ff57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135611fab565b6101866004803603608081101561094557600080fd5b81359190810190604081016020820135600160201b81111561096657600080fd5b82018360208201111561097857600080fd5b803590602001918460208302840111600160201b8311171561099957600080fd5b91935091506001600160a01b03813516906020013561212c565b3480156109bf57600080fd5b506101e0600480360360e08110156109d657600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c001356124b8565b348015610a1c57600080fd5b5061088a6126fc565b348015610a3157600080fd5b506102d760048036036040811015610a4857600080fd5b81359190810190604081016020820135600160201b811115610a6957600080fd5b820183602082011115610a7b57600080fd5b803590602001918460208302840111600160201b83111715610a9c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550612720945050505050565b348015610ae657600080fd5b506101e06004803603610140811015610afe57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e0820135169061010081013590610120013561274d565b348015610b5957600080fd5b50610baf6004803603610100811015610b7157600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135612861565b60408051938452602084019290925282820152519081900360600190f35b610baf600480360360c0811015610be357600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a0013561299d565b6102d760048036036080811015610c2957600080fd5b81359190810190604081016020820135600160201b811115610c4a57600080fd5b820183602082011115610c5c57600080fd5b803590602001918460208302840111600160201b83111715610c7d57600080fd5b91935091506001600160a01b038135169060200135612c42565b6000808242811015610cde576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b610d0d897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a6124b8565b9093509150610d1d898685612fc4565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610d8357600080fd5b505af1158015610d97573d6000803e3d6000fd5b50505050610da58583613118565b50965096945050505050565b6000610dbe848484613210565b949350505050565b60608142811015610e0c576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686866000198101818110610e4657fe5b905060200201356001600160a01b03166001600160a01b031614610e9f576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b610efd7f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061330092505050565b91508682600184510381518110610f1057fe5b60200260200101511015610f555760405162461bcd60e51b815260040180806020018281038252602b815260200180614507602b913960400191505060405180910390fd5b610ff386866000818110610f6557fe5b905060200201356001600160a01b031633610fd97f00000000000000000000000000000000000000000000000000000000000000008a8a6000818110610fa757fe5b905060200201356001600160a01b03168b8b6001818110610fc457fe5b905060200201356001600160a01b031661344c565b85600081518110610fe657fe5b60200260200101516134d3565b61103282878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250613630915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d8360018551038151811061107157fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156110af57600080fd5b505af11580156110c3573d6000803e3d6000fd5b505050506110e884836001855103815181106110db57fe5b6020026020010151613118565b509695505050505050565b60606111207f00000000000000000000000000000000000000000000000000000000000000008484613876565b90505b92915050565b60008060006111597f00000000000000000000000000000000000000000000000000000000000000008f8f61344c565b9050600087611168578c61116c565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156111e257600080fd5b505af11580156111f6573d6000803e3d6000fd5b505050506112098f8f8f8f8f8f8f6124b8565b809450819550505050509b509b9950505050505050505050565b60608142811015611269576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6112c77f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061330092505050565b915086826001845103815181106112da57fe5b6020026020010151101561131f5760405162461bcd60e51b815260040180806020018281038252602b815260200180614507602b913960400191505060405180910390fd5b61132f86866000818110610f6557fe5b6110e882878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613630915050565b606081428110156113b4576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868660001981018181106113ee57fe5b905060200201356001600160a01b03166001600160a01b031614611447576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b6114a57f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061387692505050565b915086826000815181106114b557fe5b60200260200101511115610f555760405162461bcd60e51b815260040180806020018281038252602781526020018061449a6027913960400191505060405180910390fd5b6000806115487f00000000000000000000000000000000000000000000000000000000000000008d7f000000000000000000000000000000000000000000000000000000000000000061344c565b9050600086611557578b61155b565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c4810187905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156115d157600080fd5b505af11580156115e5573d6000803e3d6000fd5b505050506115f78d8d8d8d8d8d611fab565b9d9c50505050505050505050505050565b804281101561164c576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6116c18585600081811061165c57fe5b905060200201356001600160a01b0316336116bb7f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b905060200201356001600160a01b03168a8a6001818110610fc457fe5b8a6134d3565b6000858560001981018181106116d357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561173857600080fd5b505afa15801561174c573d6000803e3d6000fd5b505050506040513d602081101561176257600080fd5b505160408051602088810282810182019093528882529293506117a49290918991899182918501908490808284376000920191909152508892506139ae915050565b8661185682888860001981018181106117b957fe5b905060200201356001600160a01b03166001600160a01b03166370a08231886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561181e57600080fd5b505afa158015611832573d6000803e3d6000fd5b505050506040513d602081101561184857600080fd5b50519063ffffffff613cb916565b10156118935760405162461bcd60e51b815260040180806020018281038252602b815260200180614507602b913960400191505060405180910390fd5b5050505050505050565b80428110156118e1576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585600019810181811061191b57fe5b905060200201356001600160a01b03166001600160a01b031614611974576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b6119848585600081811061165c57fe5b6119c28585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152503092506139ae915050565b604080516370a0823160e01b815230600482015290516000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015611a2c57600080fd5b505afa158015611a40573d6000803e3d6000fd5b505050506040513d6020811015611a5657600080fd5b5051905086811015611a995760405162461bcd60e51b815260040180806020018281038252602b815260200180614507602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611aff57600080fd5b505af1158015611b13573d6000803e3d6000fd5b505050506118938482613118565b60608142811015611b67576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110611b9e57fe5b905060200201356001600160a01b03166001600160a01b031614611bf7576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b611c557f00000000000000000000000000000000000000000000000000000000000000003488888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061330092505050565b91508682600184510381518110611c6857fe5b60200260200101511015611cad5760405162461bcd60e51b815260040180806020018281038252602b815260200180614507602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110611ce957fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015611d1c57600080fd5b505af1158015611d30573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb611d957f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b84600081518110611da257fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611df957600080fd5b505af1158015611e0d573d6000803e3d6000fd5b505050506040513d6020811015611e2357600080fd5b5051611e2b57fe5b611e6a82878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613630915050565b5095945050505050565b6000610dbe848484613d09565b60608142811015611ec7576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b611f257f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061387692505050565b91508682600081518110611f3557fe5b6020026020010151111561131f5760405162461bcd60e51b815260040180806020018281038252602781526020018061449a6027913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610dbe848484613df9565b60008142811015611ff1576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b612020887f000000000000000000000000000000000000000000000000000000000000000089898930896124b8565b604080516370a0823160e01b815230600482015290519194506120a492508a9187916001600160a01b038416916370a0823191602480820192602092909190829003018186803b15801561207357600080fd5b505afa158015612087573d6000803e3d6000fd5b505050506040513d602081101561209d57600080fd5b5051612fc4565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561210a57600080fd5b505af115801561211e573d6000803e3d6000fd5b505050506110e88483613118565b8042811015612170576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560008181106121a757fe5b905060200201356001600160a01b03166001600160a01b031614612200576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b60003490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561226057600080fd5b505af1158015612274573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb6122d97f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561232957600080fd5b505af115801561233d573d6000803e3d6000fd5b505050506040513d602081101561235357600080fd5b505161235b57fe5b60008686600019810181811061236d57fe5b905060200201356001600160a01b03166001600160a01b03166370a08231866040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156123d257600080fd5b505afa1580156123e6573d6000803e3d6000fd5b505050506040513d60208110156123fc57600080fd5b5051604080516020898102828101820190935289825292935061243e9290918a918a9182918501908490808284376000920191909152508992506139ae915050565b87611856828989600019810181811061245357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561181e57600080fd5b60008082428110156124ff576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b600061252c7f00000000000000000000000000000000000000000000000000000000000000008c8c61344c565b604080516323b872dd60e01b81523360048201526001600160a01b03831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b15801561258757600080fd5b505af115801561259b573d6000803e3d6000fd5b505050506040513d60208110156125b157600080fd5b50506040805163226bf2d160e21b81526001600160a01b03888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b1580156125fe57600080fd5b505af1158015612612573d6000803e3d6000fd5b505050506040513d604081101561262857600080fd5b508051602090910151909250905060006126428e8e613ea5565b509050806001600160a01b03168e6001600160a01b031614612665578183612668565b82825b90975095508a8710156126ac5760405162461bcd60e51b81526004018080602001828103825260268152602001806144e16026913960400191505060405180910390fd5b898610156126eb5760405162461bcd60e51b81526004018080602001828103825260268152602001806144276026913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606111207f00000000000000000000000000000000000000000000000000000000000000008484613300565b600080600061279d7f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061344c565b90506000876127ac578c6127b0565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b15801561282657600080fd5b505af115801561283a573d6000803e3d6000fd5b5050505061284c8e8e8e8e8e8e610c97565b909f909e509c50505050505050505050505050565b600080600083428110156128aa576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b6128b88c8c8c8c8c8c613f83565b909450925060006128ea7f00000000000000000000000000000000000000000000000000000000000000008e8e61344c565b90506128f88d3383886134d3565b6129048c3383876134d3565b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050602060405180830381600087803b15801561295c57600080fd5b505af1158015612970573d6000803e3d6000fd5b505050506040513d602081101561298657600080fd5b5051949d939c50939a509198505050505050505050565b600080600083428110156129e6576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b612a148a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c613f83565b90945092506000612a667f00000000000000000000000000000000000000000000000000000000000000008c7f000000000000000000000000000000000000000000000000000000000000000061344c565b9050612a748b3383886134d3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b158015612acf57600080fd5b505af1158015612ae3573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb82866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612b6857600080fd5b505af1158015612b7c573d6000803e3d6000fd5b505050506040513d6020811015612b9257600080fd5b5051612b9a57fe5b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050602060405180830381600087803b158015612bf257600080fd5b505af1158015612c06573d6000803e3d6000fd5b505050506040513d6020811015612c1c57600080fd5b5051925034841015612c3457612c3433853403613118565b505096509650969350505050565b60608142811015612c88576040805162461bcd60e51b8152602060048201526018602482015260008051602061458a833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110612cbf57fe5b905060200201356001600160a01b03166001600160a01b031614612d18576040805162461bcd60e51b815260206004820152601d60248201526000805160206144c1833981519152604482015290519081900360640190fd5b612d767f00000000000000000000000000000000000000000000000000000000000000008888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061387692505050565b91503482600081518110612d8657fe5b60200260200101511115612dcb5760405162461bcd60e51b815260040180806020018281038252602781526020018061449a6027913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110612e0757fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612e3a57600080fd5b505af1158015612e4e573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb612eb37f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b84600081518110612ec057fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612f1757600080fd5b505af1158015612f2b573d6000803e3d6000fd5b505050506040513d6020811015612f4157600080fd5b5051612f4957fe5b612f8882878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613630915050565b81600081518110612f9557fe5b6020026020010151341115611e6a57611e6a3383600081518110612fb557fe5b60200260200101513403613118565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106130415780518252601f199092019160209182019101613022565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146130a3576040519150601f19603f3d011682016040523d82523d6000602084013e6130a8565b606091505b50915091508180156130d65750805115806130d657508080602001905160208110156130d357600080fd5b50515b6131115760405162461bcd60e51b815260040180806020018281038252602d815260200180614532602d913960400191505060405180910390fd5b5050505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b602083106131645780518252601f199092019160209182019101613145565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146131c6576040519150601f19603f3d011682016040523d82523d6000602084013e6131cb565b606091505b505090508061320b5760405162461bcd60e51b81526004018080602001828103825260348152602001806143ce6034913960400191505060405180910390fd5b505050565b60008084116132505760405162461bcd60e51b815260040180806020018281038252602b81526020018061455f602b913960400191505060405180910390fd5b6000831180156132605750600082115b61329b5760405162461bcd60e51b815260040180806020018281038252602881526020018061444d6028913960400191505060405180910390fd5b60006132af856103e563ffffffff6141f716565b905060006132c3828563ffffffff6141f716565b905060006132e9836132dd886103e863ffffffff6141f716565b9063ffffffff61425a16565b90508082816132f457fe5b04979650505050505050565b6060600282511015613359576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561337157600080fd5b5060405190808252806020026020018201604052801561339b578160200160208202803683370190505b50905082816000815181106133ac57fe5b60200260200101818152505060005b6001835103811015613444576000806133fe878685815181106133da57fe5b60200260200101518786600101815181106133f157fe5b60200260200101516142a9565b9150915061342084848151811061341157fe5b60200260200101518383613210565b84846001018151811061342f57fe5b602090810291909101015250506001016133bb565b509392505050565b6040805163e6a4390560e01b81526001600160a01b0384811660048301528381166024830152915160009286169163e6a43905916044808301926020929190829003018186803b15801561349f57600080fd5b505afa1580156134b3573d6000803e3d6000fd5b505050506040513d60208110156134c957600080fd5b5051949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106135585780518252601f199092019160209182019101613539565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146135ba576040519150601f19603f3d011682016040523d82523d6000602084013e6135bf565b606091505b50915091508180156135ed5750805115806135ed57508080602001905160208110156135ea57600080fd5b50515b6136285760405162461bcd60e51b815260040180806020018281038252603181526020018061439d6031913960400191505060405180910390fd5b505050505050565b60005b60018351038110156138705760008084838151811061364e57fe5b602002602001015185846001018151811061366557fe5b602002602001015191509150600061367d8383613ea5565b509050600087856001018151811061369157fe5b60200260200101519050600080836001600160a01b0316866001600160a01b0316146136bf578260006136c3565b6000835b91509150600060028a510388106136da578861371b565b61371b7f0000000000000000000000000000000000000000000000000000000000000000878c8b6002018151811061370e57fe5b602002602001015161344c565b90506137487f0000000000000000000000000000000000000000000000000000000000000000888861344c565b6001600160a01b031663022c0d9f84848460006040519080825280601f01601f191660200182016040528015613785576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156137f65781810151838201526020016137de565b50505050905090810190601f1680156138235780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561384557600080fd5b505af1158015613859573d6000803e3d6000fd5b505060019099019850613633975050505050505050565b50505050565b60606002825110156138cf576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff811180156138e757600080fd5b50604051908082528060200260200182016040528015613911578160200160208202803683370190505b509050828160018351038151811061392557fe5b60209081029190910101528151600019015b8015613444576000806139678786600186038151811061395357fe5b60200260200101518786815181106133f157fe5b9150915061398984848151811061397a57fe5b60200260200101518383613d09565b84600185038151811061399857fe5b6020908102919091010152505060001901613937565b60005b600183510381101561320b576000808483815181106139cc57fe5b60200260200101518584600101815181106139e357fe5b60200260200101519150915060006139fb8383613ea5565b5090506000613a2b7f0000000000000000000000000000000000000000000000000000000000000000858561344c565b9050600080600080846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613a6c57600080fd5b505afa158015613a80573d6000803e3d6000fd5b505050506040513d6060811015613a9657600080fd5b5080516020909101516001600160701b0391821693501690506000806001600160a01b038a811690891614613acc578284613acf565b83835b91509150613b2d828b6001600160a01b03166370a082318a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561181e57600080fd5b9550613b3a868383613210565b945050505050600080856001600160a01b0316886001600160a01b031614613b6457826000613b68565b6000835b91509150600060028c51038a10613b7f578a613bb3565b613bb37f0000000000000000000000000000000000000000000000000000000000000000898e8d6002018151811061370e57fe5b604080516000808252602082019283905263022c0d9f60e01b835260248201878152604483018790526001600160a01b038086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015613c3d578181015183820152602001613c25565b50505050905090810190601f168015613c6a5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015613c8c57600080fd5b505af1158015613ca0573d6000803e3d6000fd5b50506001909b019a506139b19950505050505050505050565b80820382811115611123576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000808411613d495760405162461bcd60e51b815260040180806020018281038252602c815260200180614371602c913960400191505060405180910390fd5b600083118015613d595750600082115b613d945760405162461bcd60e51b815260040180806020018281038252602881526020018061444d6028913960400191505060405180910390fd5b6000613db86103e8613dac868863ffffffff6141f716565b9063ffffffff6141f716565b90506000613dd26103e5613dac868963ffffffff613cb916565b9050613def6001828481613de257fe5b049063ffffffff61425a16565b9695505050505050565b6000808411613e395760405162461bcd60e51b81526004018080602001828103825260258152602001806144756025913960400191505060405180910390fd5b600083118015613e495750600082115b613e845760405162461bcd60e51b815260040180806020018281038252602881526020018061444d6028913960400191505060405180910390fd5b82613e95858463ffffffff6141f716565b81613e9c57fe5b04949350505050565b600080826001600160a01b0316846001600160a01b03161415613ef95760405162461bcd60e51b81526004018080602001828103825260258152602001806144026025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610613f19578284613f1c565b83835b90925090506001600160a01b038216613f7c576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6040805163e6a4390560e01b81526001600160a01b03888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b158015613ffd57600080fd5b505afa158015614011573d6000803e3d6000fd5b505050506040513d602081101561402757600080fd5b50516001600160a01b031614156140da57604080516364e329cb60e11b81526001600160a01b038a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b1580156140ad57600080fd5b505af11580156140c1573d6000803e3d6000fd5b505050506040513d60208110156140d757600080fd5b50505b6000806141087f00000000000000000000000000000000000000000000000000000000000000008b8b6142a9565b9150915081600014801561411a575080155b1561412a578793508692506141ea565b6000614137898484613df9565b905087811161418a578581101561417f5760405162461bcd60e51b81526004018080602001828103825260268152602001806144276026913960400191505060405180910390fd5b8894509250826141e8565b6000614197898486613df9565b9050898111156141a357fe5b878110156141e25760405162461bcd60e51b81526004018080602001828103825260268152602001806144e16026913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60008115806142125750508082028282828161420f57fe5b04145b611123576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820182811015611123576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b60008060006142b88585613ea5565b5090506000806142c988888861344c565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561430157600080fd5b505afa158015614315573d6000803e3d6000fd5b505050506040513d606081101561432b57600080fd5b5080516020909101516001600160701b0391821693501690506001600160a01b038781169084161461435e578082614361565b81815b9099909850965050505050505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c6564556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a204558434553534956455f494e5055545f414d4f554e54556e69737761705632526f757465723a20494e56414c49445f50415448000000556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54556e69737761705632526f757465723a20455850495245440000000000000000a2646970667358221220df649cda9c5abc1e49b50b766597248a17b6fe8c16b757b4e63af640cb71e6fe64736f6c63430006060033";
class F0 extends F {
    constructor(...e) {
        e.length === 1 ? super(i0, a6, e[0]) : super(...e)
    }
    deploy(e, a, n) {
        return super.deploy(e, a, n || {})
    }
    getDeployTransaction(e, a, n) {
        return super.getDeployTransaction(e, a, n || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(i0)
    }
    static connect(e, a) {
        return new g(e,i0,a)
    }
}
u(F0, "bytecode", a6),
u(F0, "abi", i0);
const s0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "LpTokenStaked",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "tag",
        type: "bytes32"
    }],
    name: "LpTokenUnstaked",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldMinWaitTime",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newMinWaitTime",
        type: "uint256"
    }],
    name: "NewLockTime",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldUnlockRequestDeadline",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newUnlockRequestDeadline",
        type: "uint256"
    }],
    name: "NewUnlockRequestDeadline",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "RewardClaimed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldRewardPerDay",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newRewardPerDay",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "updateTime",
        type: "uint256"
    }],
    name: "RewardUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "time",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "tag",
        type: "bytes32"
    }],
    name: "UnstakeLpTokenRequest",
    type: "event"
}, {
    inputs: [],
    name: "TST",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_perDayInterest",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_lockTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_unlockRequestDeadline",
        type: "uint256"
    }],
    name: "addLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }],
    name: "currentRewardPerDay",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getAvailableTst",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "getRewardOfUser",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "instantUnstakeLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "isLpTokenSupported",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "lockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "requestToUnstakeLpToken",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "rewardPerDay",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "rewardPerDayUpdateTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "address",
        name: "_account",
        type: "address"
    }],
    name: "sendBackToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_lockTime",
        type: "uint256"
    }],
    name: "setLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_perDayInterest",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256"
    }],
    name: "setLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_TST",
        type: "address"
    }],
    name: "setTST",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_unlockRequestDeadline",
        type: "uint256"
    }],
    name: "setUnlockRequestDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "stakeLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "stakedTotalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "totalClaimedReward",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }],
    name: "totalRewardFromStart",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_start",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_end",
        type: "uint256"
    }],
    name: "totalRewardInPeriod",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "unlockRequestDeadline",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "unlockRequestState",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_time",
        type: "uint256"
    }, {
        internalType: "bytes32",
        name: "_tag",
        type: "bytes32"
    }],
    name: "unstakeLpToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_newRewardPerDay",
        type: "uint256"
    }],
    name: "updateRewardPerDay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
  , b6 = "0x608060405234801561001057600080fd5b50612428806100206000396000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c806372cdec7611610125578063aee7b47d116100ad578063e3daba711161007c578063e3daba71146104cd578063ebba5644146104e0578063f2fde38b146104f3578063f73e3a9514610506578063f7888aec1461051957600080fd5b8063aee7b47d1461046a578063b32942d41461047d578063baaec59a146104b2578063d279c191146104ba57600080fd5b80638da5cb5b116100f45780638da5cb5b146103ec5780639d81c28014610411578063a4beda6314610424578063a7e3ea3514610444578063ae6fa9401461045757600080fd5b806372cdec76146103ab57806376a67a51146103be5780637b7bd217146103d15780638129fc1c146103e457600080fd5b806342b0d266116101a85780635432ad8f116101775780635432ad8f1461035757806357b001f91461036a57806359cdd8cb1461037d578063656cb0bc14610390578063715018a6146103a357600080fd5b806342b0d2661461031357806348f11ccc146103285780634fbdea4d1461033b57806352409ec41461034457600080fd5b80631d7b6496116101e45780631d7b6496146102a15780632e48152c146102b4578063366b4c8f146102e05780633dc8f9ec146102f357600080fd5b806214fde0146102155780630b09d94e1461024d5780630b75bd5c1461027b5780630be730af1461028e575b600080fd5b610238610223366004612067565b60076020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61026d61025b366004612067565b60016020526000908152604090205481565b604051908152602001610244565b61026d610289366004612082565b610552565b61026d61029c366004612067565b610697565b61026d6102af3660046120b5565b6106dc565b6102386102c2366004612067565b6001600160a01b03166000908152600e602052604090205460ff1690565b61026d6102ee366004612067565b610862565b61026d610301366004612067565b60066020526000908152604090205481565b6103266103213660046120b5565b6108aa565b005b6103266103363660046120b5565b610926565b61026d60a85481565b6103266103523660046120b5565b610a50565b6103266103653660046120df565b610c56565b610326610378366004612067565b610ca8565b61026d61038b3660046120b5565b610cbc565b61032661039e366004612067565b610ced565b610326610d26565b6103266103b9366004612114565b610d3a565b6103266103cc366004612067565b610db7565b6103266103df366004612082565b610dc8565b610326610e41565b6073546001600160a01b03165b6040516001600160a01b039091168152602001610244565b61032661041f36600461214f565b610f61565b61026d610432366004612067565b60006020819052908152604090205481565b6103266104523660046120b5565b61130d565b61026d6104653660046120b5565b6113b5565b61026d610478366004612188565b6113d1565b6104a061048b3660046121bb565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610244565b61026d6115e2565b6103266104c8366004612067565b611663565b60a7546103f9906001600160a01b031681565b6103266104ee3660046120b5565b611777565b610326610501366004612067565b6117f1565b610326610514366004612067565b611867565b61026d610527366004612082565b6001600160a01b039182166000908152600b6020908152604080832093909416825291909152205490565b6001600160a01b03821660009081526006602052604081205481906105785760006105cc565b6001600160a01b0384166000908152600660209081526040808320546005909252909120546105ac90869061047882611891565b6105c2906b204fce5e3e250261100000006121ea565b6105cc9190612209565b6001600160a01b038086166000818152600a6020908152604080832094891683529381528382205492825260049052919091205461060a919061222b565b6106149190612242565b6001600160a01b038086166000908152600b60209081526040808320938816835292905220549091506b204fce5e3e250261100000009061065590836121ea565b61065f9190612209565b6001600160a01b038086166000908152600c602090815260408083209388168352929052205461068f9190612242565b949350505050565b6001600160a01b038116600090815260a66020526040812080546106d691849184906106c5576106c561225a565b9060005260206000200154426113d1565b92915050565b6000826106e8816118d5565b6001600160a01b038416600090815260076020526040902054849060ff1661072b5760405162461bcd60e51b815260040161072290612270565b60405180910390fd5b4260003387878460405160200161074594939291906122a7565b60408051601f1981840301815291815281516020928301206000818152600290935291205490915060ff16156107bd5760405162461bcd60e51b815260206004820152601f60248201527f5969656c644661726d696e673a20616c7265616479207375626d6974746564006044820152606401610722565b6000818152600260205260409020805460ff191660011790557fbc98e7585c241905f10d293c4529bec9052928fe17ee3732994906a20f487ee76107fe3390565b6001600160a01b038981166000818152600b6020908152604080832033845282529182902054825195909416855284019190915282810191909152606082018990526080820185905260a08201849052519081900360c00190a19695505050505050565b6001600160a01b038116600090815260a56020526040812080546108889060019061222b565b815481106108985761089861225a565b90600052602060002001549050919050565b6108b2611931565b6001600160a01b0382166000818152600160209081526040918290205482519384529083015281018290527f65b054876e2393bcad05100c6a7add74232b1c6afddae31935d6ff0a8e062c159060600160405180910390a16001600160a01b03909116600090815260016020526040902055565b81610930816118d5565b6001600160a01b038316600090815260076020526040902054839060ff1661096a5760405162461bcd60e51b815260040161072290612270565b61097261198b565b6109876001600160a01b0385163330866119e5565b6109918433611a50565b6001600160a01b0384166000908152600b60209081526040808320338452909152812080548592906109c4908490612242565b90915550506001600160a01b038416600090815260066020526040812080548592906109f1908490612242565b9091555050604080513381526001600160a01b03861660208201529081018490527fff615f6657350e674536408ce2dc5c176d4e5515a7aaf81d913b5a3e4534879f906060015b60405180910390a1610a4a6001600f55565b50505050565b81610a5a816118d5565b6001600160a01b038316600090815260076020526040902054839060ff16610a945760405162461bcd60e51b815260040161072290612270565b610a9c61198b565b6001600160a01b03841660009081526020819052604090205415610b165760405162461bcd60e51b815260206004820152602b60248201527f5969656c644661726d696e673a206d696e696d756d20776169742074696d652060448201526a6973206e6f74207a65726f60a81b6064820152608401610722565b6001600160a01b0384166000908152600b60209081526040808320338452909152902054831115610b855760405162461bcd60e51b81526020600482015260196024820152785969656c644661726d696e673a206c6f772062616c616e636560381b6044820152606401610722565b610b8f8433611a50565b6001600160a01b0384166000908152600b6020908152604080832033845290915281208054859290610bc290849061222b565b90915550506001600160a01b03841660009081526006602052604081208054859290610bef90849061222b565b90915550610c0990506001600160a01b0385163385611be2565b604080513381526001600160a01b0386166020820152908101849052600060608201527f4c168aadb2bdb3f9e9833c1eb567d6b026ff1436656d910dd7bf9a43360b05a590608001610a38565b610c5e611931565b6001600160a01b03909116600081815260a560209081526040808320805460018181018355918552838520019690965592825260a681529181208054948501815581522090910155565b610cb0611931565b610cb981611c12565b50565b60a66020528160005260406000208181548110610cd857600080fd5b90600052602060002001600091509150505481565b610cf5611931565b6001600160a01b03166000908152600860209081526040808320805460ff1916600117905560099091529020429055565b610d2e611931565b610d386000611c7c565b565b610d42611931565b6001600160a01b039092166000818152600760209081526040808320805460ff1916600190811790915560a5835281842080548083018255908552838520019790975583835260a682528083208054808901825590845282842042910155928252818152828220939093559390915290912055565b610dbf611931565b610cb981611cce565b610dd0611931565b610dda8282611a50565b6001600160a01b038083166000818152600b60209081526040808320948616835293815283822080549083905592825260069052918220805491928392610e2290849061222b565b90915550610e3c90506001600160a01b0384168383611be2565b505050565b600d54610100900460ff1615808015610e615750600d54600160ff909116105b80610e7b5750303b158015610e7b5750600d5460ff166001145b610ede5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610722565b600d805460ff191660011790558015610f0157600d805461ff0019166101001790555b610f09611d33565b610f11611d62565b610f19611d91565b8015610cb957600d805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b83610f6b816118d5565b6001600160a01b038516600090815260076020526040902054859060ff16610fa55760405162461bcd60e51b815260040161072290612270565b610fad61198b565b33868686604051602001610fc494939291906122a7565b6040516020818303038152906040528051906020012083146110285760405162461bcd60e51b815260206004820152601760248201527f5969656c644661726d696e673a2077726f6e67207461670000000000000000006044820152606401610722565b6001600160a01b03861660009081526020819052604090205461104e90620151806121ea565b611058854261222b565b10156110a65760405162461bcd60e51b815260206004820152601a60248201527f5969656c644661726d696e673a207374696c6c206c6f636b65640000000000006044820152606401610722565b6001600160a01b03861660009081526001602090815260408083205491839052909120546110d49190612242565b6110e190620151806121ea565b6110eb854261222b565b11156111395760405162461bcd60e51b815260206004820152601960248201527f5969656c644661726d696e673a207265712065787069726564000000000000006044820152606401610722565b60008381526002602052604090205460ff1660011461119a5760405162461bcd60e51b815260206004820152601e60248201527f5969656c644661726d696e673a20616c726561647920756e7374616b656400006044820152606401610722565b6001600160a01b0386166000908152600b602090815260408083203384529091529020548511156112095760405162461bcd60e51b81526020600482015260196024820152785969656c644661726d696e673a206c6f772062616c616e636560381b6044820152606401610722565b6112138633611a50565b6001600160a01b0386166000908152600b602090815260408083203384529091528120805487929061124690849061222b565b90915550506001600160a01b0386166000908152600660205260408120805487929061127390849061222b565b9091555061128d90506001600160a01b0387163387611be2565b6000838152600260208190526040909120805460ff191690911790557f4c168aadb2bdb3f9e9833c1eb567d6b026ff1436656d910dd7bf9a43360b05a533604080516001600160a01b039283168152918916602083015281018790526060810185905260800160405180910390a16113056001600f55565b505050505050565b611315611931565b600061132083610862565b6001600160a01b038416600081815260a5602090815260408083208054600180820183559185528385200188905584845260a68352818420805491820181558452928290204293018390558051938452908301849052820185905260608201529091507f2154de89d5bc468103866cc236e52e0405df9bd8cf3888bb159579a365f51a089060800160405180910390a1505050565b60a56020528160005260406000208181548110610cd857600080fd5b6001600160a01b038316600090815260a5602052604081205481906113f89060019061222b565b905060005b6001600160a01b038616600090815260a6602052604090208054839081106114275761142761225a565b9060005260206000200154851015611571576001600160a01b038616600090815260a6602052604090208054839081106114635761146361225a565b90600052602060002001548411611486578161147e816122da565b9250506113fd565b6001600160a01b038616600090815260a5602052604090208054620151809190849081106114b6576114b661225a565b906000526020600020015460a66000896001600160a01b03166001600160a01b0316815260200190815260200160002084815481106114f7576114f761225a565b90600052602060002001548661150d919061222b565b61151791906121ea565b6115219190612209565b61152b9082612242565b6001600160a01b038716600090815260a660205260409020805491925090839081106115595761155961225a565b90600052602060002001549350818061147e906122da565b6001600160a01b038616600090815260a5602052604090208054620151809190849081106115a1576115a161225a565b906000526020600020015486866115b8919061222b565b6115c291906121ea565b6115cc9190612209565b6115d69082612242565b925050505b9392505050565b60a7546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561162657600080fd5b505afa15801561163a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165e91906122f1565b905090565b8061166d816118d5565b6001600160a01b038216600090815260076020526040902054829060ff166116a75760405162461bcd60e51b815260040161072290612270565b6116af61198b565b6116b98333611a50565b6001600160a01b0383166000908152600c60209081526040808320338452909152812080549082905560a88054919283926116f5908490612242565b9091555061172490503361171183670de0b6b3a76400006121ea565b60a7546001600160a01b03169190611be2565b604080513381526001600160a01b038616602082015280820183905290517f0aa4d283470c904c551d18bb894d37e17674920f3261a7f854be501e25f421b79181900360600190a150610e3c6001600f55565b61177f611931565b6001600160a01b038216600081815260208181526040918290205482519384529083015281018290527f9e056386574330bae2895f4812920b4ffdbb2e2699af262b38cea73f83481ac89060600160405180910390a16001600160a01b03909116600090815260208190526040902055565b6117f9611931565b6001600160a01b03811661185e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610722565b610cb981611c7c565b61186f611931565b60a780546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526008602052604081205460ff16156118ce57506001600160a01b031660009081526009602052604090205490565b5042919050565b6001600160a01b0381166000908152600e602052604090205460ff1615610cb95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610722565b6073546001600160a01b03163314610d385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610722565b6002600f5414156119de5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610722565b6002600f55565b6040516001600160a01b0380851660248301528316604482015260648101829052610a4a9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611db8565b6001600160a01b03821660009081526006602052604090205415611af0576001600160a01b038216600090815260066020908152604080832054600590925290912054611aa290849061047882611891565b611ab8906b204fce5e3e250261100000006121ea565b611ac29190612209565b6001600160a01b03831660009081526004602052604081208054909190611aea908490612242565b90915550505b6001600160a01b038083166000818152600b6020908152604080832094861680845294825280832054848452600a83528184209584529482528083205493835260049091529020546b204fce5e3e250261100000009291611b509161222b565b611b5a91906121ea565b611b649190612209565b6001600160a01b038084166000908152600c6020908152604080832093861683529290529081208054909190611b9b908490612242565b90915550506001600160a01b0391821660009081526005602090815260408083204290556004825280832054600a83528184209490951683529290522055565b6001600f55565b6040516001600160a01b038316602482015260448101829052610e3c90849063a9059cbb60e01b90606401611a19565b80611c1c81611e8a565b6001600160a01b0382166000818152600e6020908152604091829020805460ff191690558151338152908101929092527f3d072963433794eb417a69355df67d08bbd73d5076ef653d6863861161d60af391015b60405180910390a15050565b607380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80611cd8816118d5565b6001600160a01b0382166000818152600e6020908152604091829020805460ff191660011790558151338152908101929092527f3dd4f37ca5eaf6c357698a52c806820426d7c9a26adb0991c3bebb09cf23352a9101611c70565b600d54610100900460ff16611d5a5760405162461bcd60e51b81526004016107229061230a565b610d38611ee9565b600d54610100900460ff16611d895760405162461bcd60e51b81526004016107229061230a565b610d38611f19565b600d54610100900460ff16610d385760405162461bcd60e51b81526004016107229061230a565b6000611e0d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611f409092919063ffffffff16565b805190915015610e3c5780806020019051810190611e2b9190612355565b610e3c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610722565b6001600160a01b0381166000908152600e602052604090205460ff16610cb95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610722565b600d54610100900460ff16611f105760405162461bcd60e51b81526004016107229061230a565b610d3833611c7c565b600d54610100900460ff16611bdb5760405162461bcd60e51b81526004016107229061230a565b606061068f848460008585843b611f995760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610722565b600080866001600160a01b03168587604051611fb591906123a3565b60006040518083038185875af1925050503d8060008114611ff2576040519150601f19603f3d011682016040523d82523d6000602084013e611ff7565b606091505b5091509150612007828286612012565b979650505050505050565b606083156120215750816115db565b8251156120315782518084602001fd5b8160405162461bcd60e51b815260040161072291906123bf565b80356001600160a01b038116811461206257600080fd5b919050565b60006020828403121561207957600080fd5b6115db8261204b565b6000806040838503121561209557600080fd5b61209e8361204b565b91506120ac6020840161204b565b90509250929050565b600080604083850312156120c857600080fd5b6120d18361204b565b946020939093013593505050565b6000806000606084860312156120f457600080fd5b833592506121046020850161204b565b9150604084013590509250925092565b6000806000806080858703121561212a57600080fd5b8435935061213a6020860161204b565b93969395505050506040820135916060013590565b6000806000806080858703121561216557600080fd5b61216e8561204b565b966020860135965060408601359560600135945092505050565b60008060006060848603121561219d57600080fd5b6121a68461204b565b95602085013595506040909401359392505050565b6000602082840312156121cd57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612204576122046121d4565b500290565b60008261222657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561223d5761223d6121d4565b500390565b60008219821115612255576122556121d4565b500190565b634e487b7160e01b600052603260045260246000fd5b6020808252601b908201527f5969656c644661726d696e673a206e6f7420737570706f727465640000000000604082015260600190565b6bffffffffffffffffffffffff19606095861b811682529390941b90921660148401526028830152604882015260680190565b6000816122e9576122e96121d4565b506000190190565b60006020828403121561230357600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60006020828403121561236757600080fd5b815180151581146115db57600080fd5b60005b8381101561239257818101518382015260200161237a565b83811115610a4a5750506000910152565b600082516123b5818460208701612377565b9190910192915050565b60208152600082518060208401526123de816040850160208701612377565b601f01601f1916919091016040019291505056fea264697066735822122075d82381dba513929e4634f02e55576d0840fda0464f2badd4f1b8409a62cc4664736f6c63430008090033";
class O0 extends F {
    constructor(...e) {
        e.length === 1 ? super(s0, b6, e[0]) : super(...e)
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(s0)
    }
    static connect(e, a) {
        return new g(e,s0,a)
    }
}
u(O0, "bytecode", b6),
u(O0, "abi", s0);
const p0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wbrc20Proxy",
        type: "address"
    }],
    name: "Brc20Removed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "FailedRuneWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "FailedWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "decimal",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wbrc20Proxy",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wbrc20Logic",
        type: "address"
    }],
    name: "NewBrc20",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldLocker",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newLocker",
        type: "address"
    }],
    name: "NewLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldProtocolPercentageFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newProtocolPercentageFee",
        type: "uint256"
    }],
    name: "NewProtocolPercentageFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldRelay",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newRelay",
        type: "address"
    }],
    name: "NewRelay",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "decimal",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneProxy",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneLogic",
        type: "address"
    }],
    name: "NewRune",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewRuneUnwrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewRuneUnwrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewRuneWrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewRuneWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTeleporter",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTeleporter",
        type: "address"
    }],
    name: "NewTeleporter",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTreasury",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTreasury",
        type: "address"
    }],
    name: "NewTreasury",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewUnwrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewUnwrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewWrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IBrc20Router.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneProxy",
        type: "address"
    }],
    name: "RuneRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "exchangeConnector",
        type: "address"
    }],
    name: "SetExchangeConnector",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "oldAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
    }],
    name: "ThirdPartyInfoUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
    }],
    name: "UnwrapFeeUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "UnwrapProcessed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "UnwrapRuneProcessed",
    type: "event"
}, {
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "uint8",
        name: "_decimal",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
    }],
    name: "addBrc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "brc20UnwrapRequests",
    outputs: [{
        internalType: "bool",
        name: "isProcessed",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "burntAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "brc20WrapRequests",
    outputs: [{
        internalType: "bool",
        name: "isUsed",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        internalType: "address",
        name: "recipientAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "outputToken",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "chainId",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "exchangeConnector",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_relay",
        type: "address"
    }, {
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_lockerScriptType",
        type: "uint8"
    }, {
        internalType: "address",
        name: "_teleporter",
        type: "address"
    }, {
        internalType: "address",
        name: "_treasury",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_reqIdx",
        type: "uint256"
    }],
    name: "isUnwrapRequestProcessed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "_txId",
        type: "bytes32"
    }],
    name: "isWrapRequestProcessed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "locker",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerLockingScript",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerScriptType",
    outputs: [{
        internalType: "enum ScriptTypes",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "protocolPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "relay",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
    }],
    name: "removeBrc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_chainId",
        type: "uint256"
    }],
    name: "setChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_appId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_exchangeConnector",
        type: "address"
    }],
    name: "setExchangeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }],
    name: "setLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_lockerScriptType",
        type: "uint8"
    }],
    name: "setLockerLockingScript",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }],
    name: "setProtocolPercentageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_relay",
        type: "address"
    }],
    name: "setRelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }],
    name: "setStartingBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_teleporter",
        type: "address"
    }],
    name: "setTeleporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_thirdPartyAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_thirdPartyFee",
        type: "uint256"
    }],
    name: "setThirdParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_treasury",
        type: "address"
    }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
    }],
    name: "setUnwrapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "startingBlockNumber",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "supportedBrc20s",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "teleporter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "thirdParties",
    outputs: [{
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "thirdPartyFee",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    name: "tokenIds",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "treasury",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_scriptType",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_appId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "unwrapBrc20",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "unwrapCounter",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "unwrapFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "unwrapFees",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "_version",
        type: "bytes4"
    }, {
        internalType: "bytes",
        name: "_vin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_vout",
        type: "bytes"
    }, {
        internalType: "bytes4",
        name: "_locktime",
        type: "bytes4"
    }, {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_intermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }, {
        internalType: "uint256[]",
        name: "_reqIndexes",
        type: "uint256[]"
    }],
    name: "unwrapProof",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "_version",
        type: "bytes4"
    }, {
        internalType: "bytes",
        name: "_vin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_vout",
        type: "bytes"
    }, {
        internalType: "bytes4",
        name: "_locktime",
        type: "bytes4"
    }, {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_intermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "wrapBrc20",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , t6 = "0x608060405234801561001057600080fd5b506152e3806100206000396000f3fe608060405260043610620002045760003560e01c8063088302a6146200021157806309b53fd614620002415780630e72e41e146200027b578063171060ec14620002b15780631812adb614620002d85780631e7107c714620002ff57806350d7446814620003245780635b6a0b3b146200034957806361d027b314620003605780636390802014620003915780636b2857ef14620003a95780636e8adf6114620003ce57806370872aa51462000408578063715018a6146200042057806375122f62146200043857806376017e71146200045d5780637922418314620005515780637e43bd3d14620005765780637ed55748146200059b578063816c2e6a14620005c05780638da5cb5b14620005d75780639637e4a814620005ef5780639a7b78d214620006145780639a8a059214620006455780639aed4279146200065d5780639eca44531462000675578063a3696a0914620006c9578063a44c2b9a14620006ee578063b3ff9f491462000713578063b4e183f4146200073a578063b4fd9a6c146200075f578063b59589d11462000777578063c5a2b47a1462000799578063c805f68b14620007d5578063d4b639f514620007fa578063d7b96d4e1462000811578063d8484ef51462000833578063e901fe57146200085e578063ef0e2ff41462000898578063f0f4426014620008bd578063f2fde38b14620008e257600080fd5b366200020c57005b600080fd5b3480156200021e57600080fd5b506200022962000907565b60405162000238919062003f02565b60405180910390f35b3480156200024e57600080fd5b50620002666200026036600462003429565b6200099d565b60405162000238979695949392919062003ea8565b3480156200028857600080fd5b50620002a06200029a36600462003429565b62000a91565b604051901515815260200162000238565b348015620002be57600080fd5b50620002d6620002d036600462003315565b62000adf565b005b348015620002e557600080fd5b50620002f060995481565b60405190815260200162000238565b3480156200030c57600080fd5b50620002d66200031e36600462003429565b62000b88565b3480156200033157600080fd5b50620002d662000343366004620038a7565b62000bde565b620002d66200035a3660046200396a565b62000d5e565b3480156200036d57600080fd5b50609d5462000382906001600160a01b031681565b60405162000238919062003afa565b3480156200039e57600080fd5b50620002f0609a5481565b348015620003b657600080fd5b50620002d6620003c8366004620037f3565b62001163565b348015620003db57600080fd5b5062000382620003ed36600462003429565b60a3602052600090815260409020546001600160a01b031681565b3480156200041557600080fd5b50620002f060975481565b3480156200042d57600080fd5b50620002d6620011d6565b3480156200044557600080fd5b50620002d66200045736600462003825565b620011e2565b3480156200046a57600080fd5b50620004e76200047c36600462003429565b60a260205260009081526040902080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a909a015460ff9099169997989697959694956001600160a01b039485169593851694929391929091168b565b604080519b15158c5260208c019a909a52988a0197909752606089019590955260808801939093526001600160a01b0391821660a0880152811660c087015260e0860191909152610100850191909152610120840191909152166101408201526101600162000238565b3480156200055e57600080fd5b50620002d6620005703660046200374d565b620012a3565b3480156200058357600080fd5b50620002d66200059536600462003429565b6200159a565b348015620005a857600080fd5b50620002d6620005ba36600462003429565b62001720565b620002d6620005d136600462003556565b620017b5565b348015620005e457600080fd5b506200038262001c02565b348015620005fc57600080fd5b50620002d66200060e36600462003429565b62001c11565b3480156200062157600080fd5b50620002f06200063336600462003429565b60a16020526000908152604090205481565b3480156200065257600080fd5b50620002f060985481565b3480156200066a57600080fd5b50620002f060a85481565b3480156200068257600080fd5b50620006b96200069436600462003429565b60a760205260009081526040902080546001909101546001600160a01b039091169082565b6040516200023892919062003c90565b348015620006d657600080fd5b50620002d6620006e836600462003315565b62001c5c565b348015620006fb57600080fd5b50620002a06200070d36600462003429565b62001d09565b3480156200072057600080fd5b5060a654620003829061010090046001600160a01b031681565b3480156200074757600080fd5b50620002d66200075936600462003643565b62001d28565b3480156200076c57600080fd5b50620002f0609b5481565b3480156200078457600080fd5b50609c5462000382906001600160a01b031681565b348015620007a657600080fd5b50620002f0620007b836600462003694565b805160208183018101805160a08252928201919093012091525481565b348015620007e257600080fd5b50620002d6620007f436600462003315565b62001d7f565b620002d66200080b3660046200345b565b62001e1f565b3480156200081e57600080fd5b50609e5462000382906001600160a01b031681565b3480156200084057600080fd5b5060a6546200084f9060ff1681565b60405162000238919062003f17565b3480156200086b57600080fd5b50620003826200087d36600462003429565b609f602052600090815260409020546001600160a01b031681565b348015620008a557600080fd5b50620002d6620008b736600462003429565b6200267e565b348015620008ca57600080fd5b50620002d6620008dc36600462003315565b6200268d565b348015620008ef57600080fd5b50620002d66200090136600462003315565b6200272d565b60a580546200091690620042e4565b80601f01602080910402602001604051908101604052809291908181526020018280546200094490620042e4565b8015620009955780601f10620009695761010080835404028352916020019162000995565b820191906000526020600020905b8154815290600101906020018083116200097757829003601f168201915b505050505081565b60a48181548110620009ae57600080fd5b600091825260209091206007909102018054600182015460028301546003840154600485015460058601805460ff90961697509395929491936001600160a01b039091169291620009ff90620042e4565b80601f016020809104026020016040519081016040528092919081815260200182805462000a2d90620042e4565b801562000a7e5780601f1062000a525761010080835404028352916020019162000a7e565b820191906000526020600020905b81548152906001019060200180831162000a6057829003601f168201915b5050506006909301549192505060ff1687565b600060a4828154811062000ab557634e487b7160e01b600052603260045260246000fd5b600091825260209091206007909102015460ff1662000ad657600062000ad9565b60015b92915050565b806001600160a01b03811662000b125760405162461bcd60e51b815260040162000b099062003fa9565b60405180910390fd5b62000b1c620027ac565b609e546040517f69253c7023f628e3a302b63087a3bfc1dfdb256780182f81b9f0df9eff9542b09162000b5d916001600160a01b0390911690859062003b0e565b60405180910390a150609e80546001600160a01b0319166001600160a01b0392909216919091179055565b62000b92620027ac565b609754811162000bd95760405162461bcd60e51b81526020600482015260116024820152702637b3b4b19d103637bb90373ab6b132b960791b604482015260640162000b09565b609755565b600054610100900460ff161580801562000bff5750600054600160ff909116105b8062000c1b5750303b15801562000c1b575060005460ff166001145b62000c805760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000b09565b6000805460ff19166001179055801562000ca4576000805461ff0019166101001790555b62000cae6200280f565b62000cb862002843565b609888905562000cc88a62000b88565b62000cd38962001720565b62000cde8762001d7f565b62000ce98662000adf565b62000cf5858562001d28565b62000d008362001c5c565b62000d0b826200268d565b801562000d52576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050505050565b62000d6862002877565b6000878152609f60205260409020546001600160a01b03168062000dc65760405162461bcd60e51b8152602060048201526014602482015273131bd9da58ce881b9bdd081cdd5c1c1bdc9d195960621b604482015260640162000b09565b60a854341462000e0c5760405162461bcd60e51b815260206004820152601060248201526f4c6f6769633a2077726f6e672066656560801b604482015260640162000b09565b81511562000f62578160008151811062000e3657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd3330866040518463ffffffff1660e01b815260040162000e6f9392919062003b56565b602060405180830381600087803b15801562000e8a57600080fd5b505af115801562000e9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000ec591906200335a565b5060008062000ed88630878c88620028d3565b915091508162000f205760405162461bcd60e51b8152602060048201526012602482015271131bd9da58ce881cddd85c0819985a5b195960721b604482015260640162000b09565b806001825162000f31919062004297565b8151811062000f5057634e487b7160e01b600052603260045260246000fd5b60200260200101519850505062001031565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd9062000f9490339030908c9060040162003b56565b602060405180830381600087803b15801562000faf57600080fd5b505af115801562000fc4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000fea91906200335a565b620010315760405162461bcd60e51b8152602060048201526016602482015275131bd9da58ce881d1c985b9cd9995c8819985a5b195960521b604482015260640162000b09565b6000806000620010458c858c8c8c62002b23565b925092509250845160001415620010bc577f9245034e6419d899e7a844e3ab8408df930d46c6588e4d7011bfa4a208175a9f338a8a878e868960a8548a600160a48054905062001096919062004297565b604051620010ae9a9998979695949392919062003b7a565b60405180910390a16200114a565b7ffef70b533aedc3db21a2f18be6e6e7d74414dc77b8a44dd9093afb569fbf12a0338a8a89896000815181106200110357634e487b7160e01b600052603260045260246000fd5b60200260200101518f878b8b60a8548c600160a48054905062001127919062004297565b604051620011419c9b9a9998979695949392919062003bfe565b60405180910390a15b50505050620011596001606555565b5050505050505050565b6200116d620027ac565b7f31a8c4e62daac2a3ed5d713004d9ae867d6dcddfa35603db2a4b65d9236b1bc18282604051620011a092919062004021565b60405180910390a1600091825260a3602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b620011e0620027ac565b565b620011ec620027ac565b600083815260a76020908152604091829020805460019091015483518781526001600160a01b039283169381019390935282840152841660608201526080810183905290517f23385740814648db624aa52a0c990fc42def14e1b04e7fe5b2bf87b85e1294529181900360a00190a16040805180820182526001600160a01b0393841681526020808201938452600095865260a790529320925183546001600160a01b031916921691909117825551600190910155565b620012ad620027ac565b6000818152609f60205260409020546001600160a01b031615620013055760405162461bcd60e51b815260206004820152600e60248201526d131bd9da58ce881d5cd959081a5960921b604482015260640162000b09565b600073__$3051d2319114b404c645910e906e49ea84$__63dbf34f026040518163ffffffff1660e01b815260040160206040518083038186803b1580156200134c57600080fd5b505af415801562001361573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200138791906200333b565b905060606000826200139862001c02565b83604051620013a79062003044565b620013b59392919062003b28565b604051809103906000f080158015620013d2573d6000803e3d6000fd5b50604051630b127b6360e11b815290915081906001600160a01b03821690631624f6c6906200140a908a9081908b9060040162003f27565b600060405180830381600087803b1580156200142557600080fd5b505af11580156200143a573d6000803e3d6000fd5b5050604051634c1d96ab60e11b81526001600160a01b038416925063983b2d5691506200146c90309060040162003afa565b600060405180830381600087803b1580156200148757600080fd5b505af11580156200149c573d6000803e3d6000fd5b5050604051637a231bdd60e11b81526001600160a01b038416925063f44637ba9150620014ce90309060040162003afa565b600060405180830381600087803b158015620014e957600080fd5b505af1158015620014fe573d6000803e3d6000fd5b5050506000868152609f60205260409081902080546001600160a01b0319166001600160a01b0385161790555186915060a0906200153e908a9062003adc565b9081526020016040518091039020819055507f20359fc049b8e035e3e74b3b4c6ba473d295e6a5b64ed7d1ba68a422d2ebe58e87878784886040516200158995949392919062003f64565b60405180910390a150505050505050565b620015a4620027ac565b6000818152609f60205260409020546001600160a01b0316620015fc5760405162461bcd60e51b815260206004820152600f60248201526e2637b3b4b19d103737903a37b5b2b760891b604482015260640162000b09565b6000818152609f6020526040908190205490517fac0bcdf003615c60a0c51d67379bde3d2fb4aaeade0aa8ecd7a4f176389bf37f91620016489184916001600160a01b03169062004021565b60405180910390a16000818152609f60205260408082205481516306fdde0360e01b8152915160a0926001600160a01b03909216916306fdde039160048083019287929190829003018186803b158015620016a257600080fd5b505afa158015620016b7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620016e19190810190620036d2565b604051620016f0919062003adc565b9081526040805160209281900383019020929092556000928352609f9052902080546001600160a01b0319169055565b6200172a620027ac565b806127101015620017745760405162461bcd60e51b81526020600482015260136024820152724c6f6769633a206f7574206f662072616e676560681b604482015260640162000b09565b60995460408051918252602082018390527f7d205f60891f60851c61cd244ba387d72b6589e7c0ac41b9d909ab0ce2c2a53b910160405180910390a1609955565b620017bf62002877565b609e546001600160a01b0316336001600160a01b031614620018185760405162461bcd60e51b81526020600482015260116024820152702637b3b4b19d103737ba103637b1b5b2b960791b604482015260640162000b09565b609754609c5460405163e291283d60e01b815273__$3051d2319114b404c645910e906e49ea84$__9263e291283d926200186f926001600160a01b03909116908d908d908d908d908d908d908d90600401620040cd565b60206040518083038186803b1580156200188857600080fd5b505af41580156200189d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018c3919062003442565b5060005b815181101562001bf65760a4828281518110620018f457634e487b7160e01b600052603260045260246000fd5b6020026020010151815481106200191b57634e487b7160e01b600052603260045260246000fd5b600091825260209091206007909102015460ff1615620019795760405162461bcd60e51b8152602060048201526018602482015277131bd9da58ce88185b1c9958591e481c1c9bd8d95cdcd95960421b604482015260640162000b09565b600160a48383815181106200199e57634e487b7160e01b600052603260045260246000fd5b602002602001015181548110620019c557634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160000160006101000a81548160ff0219169083151502179055507f56c14e8419eba0c1dd20639c364b8c0e59e27be856d876527a563a14fc42fe7b60a483838151811062001a3157634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001a5857634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160040160009054906101000a90046001600160a01b031660a484848151811062001aa057634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001ac757634e487b7160e01b600052603260045260246000fd5b90600052602060002090600702016002015460a485858151811062001afc57634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001b2357634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160050160a486868151811062001b5757634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001b7e57634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160060160009054906101000a900460ff1686868151811062001bbe57634e487b7160e01b600052603260045260246000fd5b602002602001015160405162001bd995949392919062003d48565b60405180910390a18062001bed8162004321565b915050620018c7565b50620011596001606555565b6033546001600160a01b031690565b62001c1b620027ac565b60a85460408051918252602082018390527f24a1cf21e7b4eac23dffa41704078ed28bbe2a42187f6aa014899c5413cd01b7910160405180910390a160a855565b806001600160a01b03811662001c865760405162461bcd60e51b815260040162000b099062003fa9565b62001c90620027ac565b7f150b77d21bd499fd0dccea9fe32513c7b65aa34ccde41e7dafac74ace8e19c9460a660019054906101000a90046001600160a01b03168360405162001cd892919062003b0e565b60405180910390a15060a680546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600081815260a2602052604081205460ff1662000ad657600062000ad9565b62001d32620027ac565b815162001d479060a590602085019062003052565b5060a6805482919060ff1916600183600581111562001d7657634e487b7160e01b600052602160045260246000fd5b02179055505050565b806001600160a01b03811662001da95760405162461bcd60e51b815260040162000b099062003fa9565b62001db3620027ac565b609c546040517f4c28a3f61a715259c4dc930c23e7423b8fa52e13232c061a6e488729c66184f49162001df4916001600160a01b0390911690859062003b0e565b60405180910390a150609c80546001600160a01b0319166001600160a01b0392909216919091179055565b62001e2962002877565b60a65461010090046001600160a01b0316336001600160a01b03161462001e8b5760405162461bcd60e51b81526020600482015260156024820152742637b3b4b19d103737ba103a32b632b837b93a32b960591b604482015260640162000b09565b600073__$3051d2319114b404c645910e906e49ea84$__63e291283d609754609c60009054906101000a90046001600160a01b03168e8e8e8e8e8e8e8e8e6040518c63ffffffff1660e01b815260040162001ef19b9a9998979695949392919062004038565b60206040518083038186803b15801562001f0a57600080fd5b505af415801562001f1f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001f45919062003442565b905060008060008073__$3051d2319114b404c645910e906e49ea84$__6314e3f5ba6098548f8f8960a2609f60a7609954609a546040518a63ffffffff1660e01b815260040162001f9f999897969594939291906200415e565b60c06040518083038186803b15801562001fb857600080fd5b505af415801562001fcd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001ff391906200384e565b9350935093509350806001600160a01b03166340c10f1930868660400151876020015188600001516200202791906200427c565b6200203391906200427c565b6200203f91906200427c565b6040518363ffffffff1660e01b81526004016200205e92919062003c90565b602060405180830381600087803b1580156200207957600080fd5b505af11580156200208e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620020b491906200335a565b50609d54835160405163a9059cbb60e01b81526001600160a01b038481169363a9059cbb93620020ec93929091169160040162003c90565b602060405180830381600087803b1580156200210757600080fd5b505af11580156200211c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200214291906200335a565b50609e54602084015160405163a9059cbb60e01b81526001600160a01b038481169363a9059cbb936200217d93929091169160040162003c90565b602060405180830381600087803b1580156200219857600080fd5b505af1158015620021ad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620021d391906200335a565b506001600160a01b038216156200226f57604080840151905163a9059cbb60e01b81526001600160a01b0383169163a9059cbb916200221791869160040162003c90565b602060405180830381600087803b1580156200223257600080fd5b505af115801562002247573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200226d91906200335a565b505b600085815260a26020908152604091829020825161016081018452815460ff16151581526001820154928101929092526002810154928201839052600381015460608301526004810154608083015260058101546001600160a01b0390811660a08401526006820154811660c0840152600782015460e084015260088201546101008401526009820154610120840152600a909101541661014082015290620023ea5760c081015160405163a9059cbb60e01b81526001600160a01b0384169163a9059cbb91620023469190899060040162003c90565b602060405180830381600087803b1580156200236157600080fd5b505af115801562002376573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200239c91906200335a565b507ff5174e3d205e90d004603fff7abb7ca825930316da524c695d7fc44743d46b3f8160c00151868487878b604051620023dc9695949392919062003ca9565b60405180910390a16200266d565b8060a001516001600160a01b0316876000815181106200241a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161480156200248657508061014001516001600160a01b0316876001895162002454919062004297565b815181106200247357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316145b620024d25760405162461bcd60e51b815260206004820152601b60248201527a084eae4dca4deeae8cae498deced2c67440eee4dedcce40e0c2e8d602b1b604482015260640162000b09565b600080620024f183604001518460c00151898661012001518d620028d3565b91509150811562002589577fca04ecaf3fb275dc79a794a25203551513f694ae5cfb19961592fb03b5871bfa8360c001518886846001865162002535919062004297565b815181106200255457634e487b7160e01b600052603260045260246000fd5b60200260200101518761014001518b8b8f6040516200257b98979695949392919062003cef565b60405180910390a16200266a565b7fe73bd25650ca980817885f0860ecd707a8d13f5cb6290e06e8e764e50418e5cc8360c0015188868661012001518761014001518b8b8f604051620025d698979695949392919062003cef565b60405180910390a160c083015160405163a9059cbb60e01b81526001600160a01b0386169163a9059cbb916200261291908b9060040162003c90565b602060405180830381600087803b1580156200262d57600080fd5b505af115801562002642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200266891906200335a565b505b50505b50505050505062000d526001606555565b62002688620027ac565b609855565b806001600160a01b038116620026b75760405162461bcd60e51b815260040162000b099062003fa9565b620026c1620027ac565b609d546040517f567657fa3f286518b318f4a29870674f433f622fdfc819691acb13105b2282259162002702916001600160a01b0390911690859062003b0e565b60405180910390a150609d80546001600160a01b0319166001600160a01b0392909216919091179055565b62002737620027ac565b6001600160a01b0381166200279e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000b09565b620027a98162002e72565b50565b33620027b762001c02565b6001600160a01b031614620011e05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000b09565b600054610100900460ff16620028395760405162461bcd60e51b815260040162000b099062003fd6565b620011e062002ec4565b600054610100900460ff166200286d5760405162461bcd60e51b815260040162000b099062003fd6565b620011e062002ef9565b60026065541415620028cc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640162000b09565b6002606555565b600085815260a360205260408120546060906001600160a01b0316806200293d5760405162461bcd60e51b815260206004820152601e60248201527f4275726e526f757465724c6f6769633a20696e76616c69642061707049640000604482015260640162000b09565b836000815181106200295f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663095ea7b382886040518363ffffffff1660e01b81526004016200299692919062003c90565b602060405180830381600087803b158015620029b157600080fd5b505af1158015620029c6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620029ec91906200335a565b506040516326d2f28960e21b81526001600160a01b03821690639b4bca249062002a1b90879060040162003e93565b60206040518083038186803b15801562002a3457600080fd5b505afa15801562002a49573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a6f91906200335a565b1562002b135760405163161779b160e31b81526001600160a01b0382169063b0bbcd889062002aae908990899089908d904290600190600401620041af565b600060405180830381600087803b15801562002ac957600080fd5b505af115801562002ade573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262002b08919081019062003377565b909350915062002b18565b600092505b509550959350505050565b62002b4860405180606001604052806000815260200160008152602001600081525090565b60008073__$3051d2319114b404c645910e906e49ea84$__63020c8d9733609954609a5460a460a78e8d8d8d6040518a63ffffffff1660e01b815260040162002b9a9998979695949392919062003e2a565b60a06040518083038186803b15801562002bb357600080fd5b505af415801562002bc8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002bee9190620037ae565b609b80549396509194509250600062002c078362004321565b9091555050609d54835160405163a9059cbb60e01b81526001600160a01b038a81169363a9059cbb9362002c4393929091169160040162003c90565b602060405180830381600087803b15801562002c5e57600080fd5b505af115801562002c73573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c9991906200335a565b50609e54602084015160405163a9059cbb60e01b81526001600160a01b038a81169363a9059cbb9362002cd493929091169160040162003c90565b602060405180830381600087803b15801562002cef57600080fd5b505af115801562002d04573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d2a91906200335a565b50609e5460a85462002d46916001600160a01b03169062002f23565b6001600160a01b0382161562002de157604080840151905163a9059cbb60e01b81526001600160a01b0389169163a9059cbb9162002d8991869160040162003c90565b602060405180830381600087803b15801562002da457600080fd5b505af115801562002db9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ddf91906200335a565b505b604051630852cd8d60e31b8152600481018290526001600160a01b038816906342966c6890602401602060405180830381600087803b15801562002e2457600080fd5b505af115801562002e39573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e5f91906200335a565b50955095509592505050565b6001606555565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1662002eee5760405162461bcd60e51b815260040162000b099062003fd6565b620011e03362002e72565b600054610100900460ff1662002e6b5760405162461bcd60e51b815260040162000b099062003fd6565b8047101562002f755760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640162000b09565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811462002fc4576040519150601f19603f3d011682016040523d82523d6000602084013e62002fc9565b606091505b50509050806200303f5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c20726044820152791958da5c1a595b9d081b585e481a185d99481c995d995c9d195960321b606482015260840162000b09565b505050565b610f2c806200438283390190565b8280546200306090620042e4565b90600052602060002090601f016020900481019282620030845760008555620030cf565b82601f106200309f57805160ff1916838001178555620030cf565b82800160010185558215620030cf579182015b82811115620030cf578251825591602001919060010190620030b2565b50620030dd929150620030e1565b5090565b5b80821115620030dd5760008155600101620030e2565b600082601f83011262003109578081fd5b81356020620031226200311c836200422c565b620041f9565b80838252828201915082860187848660051b890101111562003142578586fd5b855b858110156200316d5781356200315a816200436b565b8452928401929084019060010162003144565b5090979650505050505050565b600082601f8301126200318b578081fd5b813560206200319e6200311c836200422c565b80838252828201915082860187848660051b8901011115620031be578586fd5b855b858110156200316d57813584529284019290840190600101620031c0565b80518015158114620031ef57600080fd5b919050565b80356001600160e01b031981168114620031ef57600080fd5b60008083601f8401126200321f578182fd5b5081356001600160401b0381111562003236578182fd5b6020830191508360208285010111156200324f57600080fd5b9250929050565b600082601f83011262003267578081fd5b8135620032786200311c8262004252565b8181528460208386010111156200328d578283fd5b816020850160208301379081016020019190915292915050565b803560068110620031ef57600080fd5b600060608284031215620032c9578081fd5b604051606081016001600160401b0381118282101715620032ee57620032ee62004355565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006020828403121562003327578081fd5b813562003334816200436b565b9392505050565b6000602082840312156200334d578081fd5b815162003334816200436b565b6000602082840312156200336c578081fd5b6200333482620031de565b600080604083850312156200338a578081fd5b6200339583620031de565b602084810151919350906001600160401b03811115620033b3578283fd5b8401601f81018613620033c4578283fd5b8051620033d56200311c826200422c565b80828252848201915084840189868560051b8701011115620033f5578687fd5b8694505b8385101562003419578051835260019490940193918501918501620033f9565b5080955050505050509250929050565b6000602082840312156200343b578081fd5b5035919050565b60006020828403121562003454578081fd5b5051919050565b6000806000806000806000806000806101008b8d0312156200347b578586fd5b620034868b620031f4565b995060208b01356001600160401b0380821115620034a2578788fd5b620034b08e838f0162003256565b9a5060408d0135915080821115620034c6578788fd5b620034d48e838f016200320d565b909a509850889150620034ea60608e01620031f4565b975060808d0135965060a08d013591508082111562003507578586fd5b620035158e838f016200320d565b909650945060c08d0135935060e08d013591508082111562003535578283fd5b50620035448d828e01620030f8565b9150509295989b9194979a5092959850565b600080600080600080600080610100898b03121562003573578182fd5b6200357e89620031f4565b975060208901356001600160401b03808211156200359a578384fd5b620035a88c838d0162003256565b985060408b0135915080821115620035be578384fd5b620035cc8c838d0162003256565b9750620035dc60608c01620031f4565b965060808b0135955060a08b0135915080821115620035f9578384fd5b620036078c838d0162003256565b945060c08b0135935060e08b013591508082111562003624578283fd5b50620036338b828c016200317a565b9150509295985092959890939650565b6000806040838503121562003656578182fd5b82356001600160401b038111156200366c578283fd5b6200367a8582860162003256565b9250506200368b60208401620032a7565b90509250929050565b600060208284031215620036a6578081fd5b81356001600160401b03811115620036bc578182fd5b620036ca8482850162003256565b949350505050565b600060208284031215620036e4578081fd5b81516001600160401b03811115620036fa578182fd5b8201601f810184136200370b578182fd5b80516200371c6200311c8262004252565b81815285602083850101111562003731578384fd5b62003744826020830160208601620042b1565b95945050505050565b60008060006060848603121562003762578081fd5b83356001600160401b0381111562003778578182fd5b620037868682870162003256565b935050602084013560ff811681146200379d578182fd5b929592945050506040919091013590565b600080600060a08486031215620037c3578081fd5b620037cf8585620032b7565b92506060840151620037e1816200436b565b80925050608084015190509250925092565b6000806040838503121562003806578182fd5b8235915060208301356200381a816200436b565b809150509250929050565b6000806000606084860312156200383a578081fd5b8335925060208401356200379d816200436b565b60008060008060c0858703121562003864578182fd5b84519350620038778660208701620032b7565b9250608085015162003889816200436b565b60a08601519092506200389c816200436b565b939692955090935050565b60008060008060008060008060006101208a8c031215620038c6578283fd5b8935985060208a0135975060408a0135965060608a0135620038e8816200436b565b955060808a0135620038fa816200436b565b945060a08a01356001600160401b0381111562003915578384fd5b620039238c828d0162003256565b9450506200393460c08b01620032a7565b925060e08a013562003946816200436b565b91506101008a013562003959816200436b565b809150509295985092959850929598565b600080600080600080600080610100898b03121562003987578182fd5b88359750602089013596506040890135955060608901356001600160401b0380821115620039b3578384fd5b620039c18c838d0162003256565b9650620039d160808c01620032a7565b955060a08b0135945060c08b0135935060e08b0135915080821115620039f5578283fd5b50620036338b828c01620030f8565b6000815180845260208085019450808401835b8381101562003a3e5781516001600160a01b03168752958201959082019060010162003a17565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000815180845262003a8c816020860160208601620042b1565b601f01601f19169290920160200192915050565b6006811062003abf57634e487b7160e01b600052602160045260246000fd5b9052565b8051825260208082015190830152604090810151910152565b6000825162003af0818460208701620042b1565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03848116825283166020820152606060408201819052600090620037449083018462003a72565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038b811682526101806020830181905260009162003ba28483018e62003a72565b925062003bb3604085018d62003aa0565b808b1660608501528960808501528860a085015262003bd660c085018962003ac3565b866101208501528086166101408501525050826101608301529b9a5050505050505050505050565b600060018060a01b03808f1683526101c0602084015262003c246101c084018f62003a72565b915062003c35604084018e62003aa0565b8b6060840152808b1660808401528960a08401528860c084015280881660e084015262003c6761010084018862003ac3565b8561016084015280851661018084015250826101a08301529d9c50505050505050505050505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03878116825260208201879052858116604083015261010082019062003cda606084018762003ac3565b9390931660c082015260e00152949350505050565b6001600160a01b03898116825260208201899052878116604083015260608201879052858116608083015261014082019062003d2f60a084018762003ac3565b9390931661010082015261012001529695505050505050565b6001600160a01b0386168152602080820186905260a060408301528454600091908290600181811c908281168062003d8157607f831692505b85831081141562003da057634e487b7160e01b87526022600452602487fd5b60a0880183905260c0880181801562003dc2576001811462003dd45762003e00565b60ff1986168252878201965062003e00565b60008d815260209020895b8681101562003dfa5781548482015290850190890162003ddf565b83019750505b505050505050809250505062003e1a606083018562003aa0565b8260808301529695505050505050565b600061012060018060a01b038c1683528a60208401528960408401528860608401528760808401528660a08401528560c08401528060e084015262003e728184018662003a72565b91505062003e8561010083018462003aa0565b9a9950505050505050505050565b60208152600062003334602083018462003a04565b871515815286602082015285604082015284606082015260018060a01b038416608082015260e060a0820152600062003ee560e083018562003a72565b905062003ef660c083018462003aa0565b98975050505050505050565b60208152600062003334602083018462003a72565b6020810162000ad9828462003aa0565b60608152600062003f3c606083018662003a72565b828103602084015262003f50818662003a72565b91505060ff83166040830152949350505050565b60a08152600062003f7960a083018862003a72565b60ff9690961660208301525060408101939093526001600160a01b03918216606084015216608090910152919050565b6020808252601390820152724c6f6769633a207a65726f206164647265737360681b604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b9182526001600160a01b0316602082015260400190565b8b81526001600160a01b038b1660208201526001600160e01b03198a8116604083015261012060608301819052600091620040768483018d62003a72565b915083820360808501526200408d828b8d62003a49565b915080891660a0850152508660c084015282810360e0840152620040b381868862003a49565b915050826101008301529c9b505050505050505050505050565b8981526001600160a01b03891660208201526001600160e01b03198881166040830152610120606083018190526000916200410b8483018b62003a72565b9150838203608085015262004121828a62003a72565b915080881660a0850152508560c084015282810360e084015262004146818662003a72565b915050826101008301529a9950505050505050505050565b60006101008b83528060208401526200417b8184018b8d62003a49565b604084019990995250506060810195909552608085019390935260a084019190915260c083015260e0909101529392505050565b86815285602082015260c060408201526000620041d060c083018762003a04565b6001600160a01b03959095166060830152506080810192909252151560a0909101529392505050565b604051601f8201601f191681016001600160401b038111828210171562004224576200422462004355565b604052919050565b60006001600160401b0382111562004248576200424862004355565b5060051b60200190565b60006001600160401b038211156200426e576200426e62004355565b50601f01601f191660200190565b600082198211156200429257620042926200433f565b500190565b600082821015620042ac57620042ac6200433f565b500390565b60005b83811015620042ce578181015183820152602001620042b4565b83811115620042de576000848401525b50505050565b600181811c90821680620042f957607f821691505b602082108114156200431b57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200433857620043386200433f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620027a957600080fdfe608060405260405162000f2c38038062000f2c8339810160408190526200002691620004e0565b82828282816200005860017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200060f565b60008051602062000ee5833981519152146200008457634e487b7160e01b600052600160045260246000fd5b620000928282600062000105565b50620000c2905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200060f565b60008051602062000ec583398151915214620000ee57634e487b7160e01b600052600160045260246000fd5b620000f98262000142565b50505050505062000678565b62000110836200019d565b6000825111806200011e5750805b156200013d576200013b8383620001df60201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200016d6200020e565b604080516001600160a01b03928316815291841660208301520160405180910390a16200019a8162000247565b50565b620001a881620002fc565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606062000207838360405180606001604052806027815260200162000f05602791396200039f565b9392505050565b60006200023860008051602062000ec583398151915260001b6200047c60201b620002081760201c565b546001600160a01b0316919050565b6001600160a01b038116620002b25760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002db60008051602062000ec583398151915260001b6200047c60201b620002081760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b62000312816200047f60201b6200028c1760201c565b620003765760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620002a9565b80620002db60008051602062000ee583398151915260001b6200047c60201b620002081760201c565b6060833b620004005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620002a9565b600080856001600160a01b0316856040516200041d9190620005bc565b600060405180830381855af49150503d80600081146200045a576040519150601f19603f3d011682016040523d82523d6000602084013e6200045f565b606091505b5090925090506200047282828662000485565b9695505050505050565b90565b3b151590565b606083156200049657508162000207565b825115620004a75782518084602001fd5b8160405162461bcd60e51b8152600401620002a99190620005da565b80516001600160a01b0381168114620004db57600080fd5b919050565b600080600060608486031215620004f5578283fd5b6200050084620004c3565b92506200051060208501620004c3565b60408501519092506001600160401b03808211156200052d578283fd5b818601915086601f83011262000541578283fd5b81518181111562000556576200055662000662565b604051601f8201601f19908116603f0116810190838211818310171562000581576200058162000662565b816040528281528960208487010111156200059a578586fd5b620005ad83602083016020880162000633565b80955050505050509250925092565b60008251620005d081846020870162000633565b9190910192915050565b6020815260008251806020840152620005fb81604085016020870162000633565b601f01601f19169190910160400192915050565b6000828210156200062e57634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156200065057818101518382015260200162000636565b838111156200013b5750506000910152565b634e487b7160e01b600052604160045260246000fd5b61083d80620006886000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b61008036600461068e565b610118565b61005b6100933660046106a8565b61015f565b3480156100a457600080fd5b506100ad6101d0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e436600461068e565b61020b565b3480156100f557600080fd5b506100ad610235565b610106610292565b610116610111610331565b61033b565b565b61012061035f565b6001600160a01b0316336001600160a01b031614156101575761015481604051806020016040528060008152506000610380565b50565b6101546100fe565b61016761035f565b6001600160a01b0316336001600160a01b031614156101c8576101c38383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610380915050565b505050565b6101c36100fe565b60006101da61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb610331565b905090565b6102086100fe565b90565b61021361035f565b6001600160a01b0316336001600160a01b0316141561015757610154816103ab565b600061023f61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb61035f565b606061028583836040518060600160405280602781526020016107e1602791396103ff565b9392505050565b3b151590565b61029a61035f565b6001600160a01b0316336001600160a01b031614156101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101fb6104d3565b3660008037600080366000845af43d6000803e80801561035a573d6000f35b3d6000fd5b60006000805160206107a18339815191525b546001600160a01b0316919050565b610389836104e9565b6000825111806103965750805b156101c3576103a58383610260565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103d461035f565b604080516001600160a01b03928316815291841660208301520160405180910390a161015481610529565b6060833b61045e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610328565b600080856001600160a01b0316856040516104799190610725565b600060405180830381855af49150503d80600081146104b4576040519150601f19603f3d011682016040523d82523d6000602084013e6104b9565b606091505b50915091506104c98282866105c0565b9695505050505050565b60006000805160206107c1833981519152610371565b6104f2816105f9565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b03811661058e5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610328565b806000805160206107a18339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b606083156105cf575081610285565b8251156105df5782518084602001fd5b8160405162461bcd60e51b81526004016103289190610741565b803b61065d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610328565b806000805160206107c183398151915261059f565b80356001600160a01b038116811461068957600080fd5b919050565b60006020828403121561069f578081fd5b61028582610672565b6000806000604084860312156106bc578182fd5b6106c584610672565b925060208401356001600160401b03808211156106e0578384fd5b818601915086601f8301126106f3578384fd5b813581811115610701578485fd5b876020828501011115610712578485fd5b6020830194508093505050509250925092565b60008251610737818460208701610774565b9190910192915050565b6020815260008251806020840152610760816040850160208701610774565b601f01601f19169190910160400192915050565b60005b8381101561078f578181015183820152602001610777565b838111156103a5575050600091015256feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a08887e878dff12a030e39cd6d4f29ea9a216219710849bebd240087a169424e64736f6c63430008040033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204b27bbce0ebf2b34c1ae2b4db5fb76a8923ad389312d742e96c93e7a60dc39c264736f6c63430008040033"
  , _1 = b => typeof b[0] == "string" || Array.isArray(b[0]) || "_isInterface"in b[0]
  , U = class U extends F {
    constructor(...e) {
        if (_1(e))
            super(...e);
        else {
            const [a,n] = e;
            super(p0, U.linkBytecode(a), n)
        }
    }
    static linkBytecode(e) {
        let a = t6;
        return a = a.replace(new RegExp("__\\$3051d2319114b404c645910e906e49ea84\\$__","g"), e["contracts/brc20_router/Brc20RouterLib.sol:Brc20RouterLib"].replace(/^0x/, "").toLowerCase()),
        a
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(p0)
    }
    static connect(e, a) {
        return new g(e,p0,a)
    }
}
;
u(U, "bytecode", t6),
u(U, "abi", p0);
let L0 = U;
const c0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "time",
        type: "uint256"
    }],
    name: "TokensClaimed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "startingTime",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "cliff",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "vestingPeriod",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unlockingPercentage",
        type: "uint256"
    }],
    name: "UserAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }],
    name: "UserBlocked",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "_user",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_startVestingTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_vestingPeriod",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_unlockingPercentage",
        type: "uint256"
    }],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "admin",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "blockUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "getAvailableToClaim",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getAvailableTst",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "getClaimedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "getUnlockedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_vestingToken",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_admin",
        type: "address"
    }],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "totalClaimedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalVestedAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "vestingInfo",
    outputs: [{
        internalType: "uint256",
        name: "totalVestedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "startVestingTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "cliff",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "vestingPeriod",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "unlockingPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "cantClaim",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "vestingToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
  , n6 = "0x608060405234801561001057600080fd5b506113f7806100206000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806319d152fa1461010c578063379607f51461013557806338273b3b1461014a5780633da013251461015d5780633f4ba83a14610170578063420d4a021461017857806350baa622146101995780635c975abb146101ac57806364893fcb146101c2578063704b6c02146101cb578063715018a6146101de5780638456cb59146101e65780638da5cb5b146101ee5780638df40be8146101f65780639661cb0d14610209578063baaec59a14610212578063c4d66de81461021a578063e0069e191461022d578063f2fde38b14610240578063f78e633d14610253578063f851a440146102d8575b600080fd5b60c95461011f906001600160a01b031681565b60405161012c919061127b565b60405180910390f35b61014861014336600461122f565b6102eb565b005b6101486101583660046111c6565b6104bd565b61014861016b3660046111a5565b6106be565b610148610727565b61018b6101863660046111a5565b610739565b60405190815260200161012c565b6101486101a736600461122f565b610878565b60335460ff16604051901515815260200161012c565b61018b60cc5481565b6101486101d93660046111a5565b610897565b6101486108c1565b6101486108d3565b61011f6108e3565b61018b6102043660046111a5565b6108f2565b61018b60cd5481565b61018b610910565b6101486102283660046111a5565b610996565b61018b61023b3660046111a5565b610ae8565b61014861024e3660046111a5565b610b0c565b6102a16102613660046111a5565b60ca602052600090815260409020805460018201546002830154600384015460048501546005860154600690960154949593949293919290919060ff1687565b604080519788526020880196909652948601939093526060850191909152608084015260a0830152151560c082015260e00161012c565b60cb5461011f906001600160a01b031681565b6102f3610b82565b6102fb610bc8565b33600090815260ca602052604090206006015460ff161561035f5760405162461bcd60e51b815260206004820152601960248201527815995cdd1a5b99ce8818db185a5b5a5b99c8189b1bd8dad959603a1b60448201526064015b60405180910390fd5b600061036a33610ae8565b9050808211156103bb5760405162461bcd60e51b815260206004820152601c60248201527b56657374696e673a206d6f7265207468616e20617661696c61626c6560201b6044820152606401610356565b33600090815260ca6020526040812060050180548492906103dd90849061130d565b909155505033600090815260ca60205260409020805460059091015411156104425760405162461bcd60e51b815260206004820152601860248201527715995cdd1a5b99ce881b5bdc99481d1a185b881d1bdd185b60421b6044820152606401610356565b6104593360c9546001600160a01b03169084610c22565b8160cd600082825461046b919061130d565b90915550506040805133815260208101849052428183015290517f9923b4306c6c030f2bdfbf156517d5983b87e15b96176da122cd4f2effa4ba7b9181900360600190a1506104ba6001606555565b50565b60cb546001600160a01b0316336001600160a01b0316146105155760405162461bcd60e51b81526020600482015260126024820152712b32b9ba34b7339d103737ba1030b236b4b760711b6044820152606401610356565b6001600160a01b038616600090815260ca6020526040902054156105795760405162461bcd60e51b815260206004820152601b60248201527a15995cdd1a5b99ce881d5cd95c88185b1c9958591e481859191959602a1b6044820152606401610356565b600082116105c15760405162461bcd60e51b815260206004820152601560248201527456657374696e673a207a65726f2076657374696e6760581b6044820152606401610356565b6001600160a01b038616600090815260ca602052604090208581556001018490556105ef8362015180611345565b6001600160a01b038716600090815260ca60205260409020600201556106188262015180611345565b6001600160a01b038716600090815260ca602052604081206003810192909255600490910182905560cc805487929061065290849061130d565b9091555050604080516001600160a01b038816815260208101879052908101859052606081018490526080810183905260a081018290527f55c435bde7cf0ee96ad22752051d476ba98884d08f46cc4ec8b5074af4cc808f9060c00160405180910390a1505050505050565b6106c6610c80565b6001600160a01b038116600090815260ca602052604090819020600601805460ff19166001179055517fca86d8c91ca6d00afd863578cc633a0901fad724592f89649629fe65f61410d29061071c90839061127b565b60405180910390a150565b61072f610c80565b610737610cdf565b565b6001600160a01b038116600090815260ca60209081526040808320815160e08101835281548082526001830154948201949094526002820154928101929092526003810154606083015260048101546080830152600581015460a08301526006015460ff16151560c0820152906107b35750600092915050565b600081602001514210156107cb575060009392505050565b60208201516107da9042611364565b905081604001518110156107f2575060009392505050565b60408201516108019082611364565b90508160600151811061081657505192915050565b60006127108360800151846000015161082f9190611345565b6108399190611325565b90508260600151828285600001516108519190611364565b61085b9190611345565b6108659190611325565b61086f908261130d565b95945050505050565b610880610c80565b6104ba3360c9546001600160a01b03169083610c22565b61089f610c80565b60cb80546001600160a01b0319166001600160a01b0392909216919091179055565b6108c9610c80565b6107376000610d2b565b6108db610c80565b610737610d7d565b6097546001600160a01b031690565b6001600160a01b0316600090815260ca602052604090206005015490565b60c9546040516370a0823160e01b81526000916001600160a01b0316906370a082319061094190309060040161127b565b60206040518083038186803b15801561095957600080fd5b505afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109919190611247565b905090565b600054610100900460ff16158080156109b65750600054600160ff909116105b806109d757506109c530610dba565b1580156109d7575060005460ff166001145b610a3a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610356565b6000805460ff191660011790558015610a5d576000805461ff0019166101001790555b610a65610dc9565b610a6d610df8565b610a75610e27565b60c980546001600160a01b0384166001600160a01b03199182161790915560cb8054909116331790558015610ae4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000610af3826108f2565b610afc83610739565b610b069190611364565b92915050565b610b14610c80565b6001600160a01b038116610b795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610356565b6104ba81610d2b565b60335460ff16156107375760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610356565b60026065541415610c1b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610356565b6002606555565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c74908490610e56565b505050565b6001606555565b33610c896108e3565b6001600160a01b0316146107375760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610356565b610ce7610f2b565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610d21919061127b565b60405180910390a1565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610d85610b82565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d143390565b6001600160a01b03163b151590565b600054610100900460ff16610df05760405162461bcd60e51b8152600401610356906112c2565b610737610f74565b600054610100900460ff16610e1f5760405162461bcd60e51b8152600401610356906112c2565b610737610fa4565b600054610100900460ff16610e4e5760405162461bcd60e51b8152600401610356906112c2565b610737610fcb565b6000610eab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ffe9092919063ffffffff16565b9050805160001480610ecc575080806020019051810190610ecc919061120f565b610c745760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610356565b60335460ff166107375760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610356565b600054610100900460ff16610f9b5760405162461bcd60e51b8152600401610356906112c2565b61073733610d2b565b600054610100900460ff16610c795760405162461bcd60e51b8152600401610356906112c2565b600054610100900460ff16610ff25760405162461bcd60e51b8152600401610356906112c2565b6033805460ff19169055565b606061100d8484600085611015565b949350505050565b6060824710156110765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610356565b600080866001600160a01b03168587604051611092919061125f565b60006040518083038185875af1925050503d80600081146110cf576040519150601f19603f3d011682016040523d82523d6000602084013e6110d4565b606091505b50915091506110e5878383876110f0565b979650505050505050565b6060831561115a5782516111535761110785610dba565b6111535760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610356565b508161100d565b61100d838381511561116f5781518083602001fd5b8060405162461bcd60e51b8152600401610356919061128f565b80356001600160a01b03811681146111a057600080fd5b919050565b6000602082840312156111b6578081fd5b6111bf82611189565b9392505050565b60008060008060008060c087890312156111de578182fd5b6111e787611189565b9860208801359850604088013597606081013597506080810135965060a00135945092505050565b600060208284031215611220578081fd5b815180151581146111bf578182fd5b600060208284031215611240578081fd5b5035919050565b600060208284031215611258578081fd5b5051919050565b6000825161127181846020870161137b565b9190910192915050565b6001600160a01b0391909116815260200190565b60208152600082518060208401526112ae81604085016020870161137b565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115611320576113206113ab565b500190565b60008261134057634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561135f5761135f6113ab565b500290565b600082821015611376576113766113ab565b500390565b60005b8381101561139657818101518382015260200161137e565b838111156113a5576000848401525b50505050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122002aff42347ca8631dd0dd3baba902e7218749a45365198badb0f1bc0302d505c64736f6c63430008040033";
class S0 extends F {
    constructor(...e) {
        e.length === 1 ? super(c0, n6, e[0]) : super(...e)
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(c0)
    }
    static connect(e, a) {
        return new g(e,c0,a)
    }
}
u(S0, "bytecode", n6),
u(S0, "abi", c0);
const k0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        indexed: !1,
        internalType: "uint24",
        name: "pointDelta",
        type: "uint24"
    }, {
        indexed: !1,
        internalType: "address",
        name: "pool",
        type: "address"
    }],
    name: "NewPool",
    type: "event"
}, {
    inputs: [],
    name: "chargeReceiver",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "defaultFeeChargePercent",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "deployPoolParams",
    outputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "currentPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "pointDelta",
        type: "int24"
    }, {
        internalType: "uint24",
        name: "feeChargePercent",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "uint24",
        name: "pointDelta",
        type: "uint24"
    }],
    name: "enableFeeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "fee2pointDelta",
    outputs: [{
        internalType: "int24",
        name: "pointDelta",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "flashModule",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "limitOrderModule",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "liquidityModule",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_chargeReceiver",
        type: "address"
    }],
    name: "modifyChargeReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint24",
        name: "_defaultFeeChargePercent",
        type: "uint24"
    }],
    name: "modifyDefaultFeeChargePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "currentPoint",
        type: "int24"
    }],
    name: "newPool",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "pool",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "swapX2YModule",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "swapY2XModule",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}];
class o6 {
    static createInterface() {
        return new _(k0)
    }
    static connect(e, a) {
        return new g(e,k0,a)
    }
}
u(o6, "abi", k0);
const r0 = [{
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }, {
        internalType: "address",
        name: "_quoterAddress",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        indexed: !1,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "address",
        name: "receiver",
        type: "address"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "convertedPath",
    outputs: [{
        internalType: "bytes",
        name: "packedData",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "exchangeRouter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "feeTier",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256"
    }],
    name: "getExactInput",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256"
    }],
    name: "getExactOutput",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getInputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getOutputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "isPathValid",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "liquidityPoolFactory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "quoterAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }],
    name: "setExchangeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_firstToken",
        type: "address"
    }, {
        internalType: "address",
        name: "_secondToken",
        type: "address"
    }, {
        internalType: "uint24",
        name: "_feeTier",
        type: "uint24"
    }],
    name: "setFeeTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setLiquidityPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_quoterAddress",
        type: "address"
    }],
    name: "setQuoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_outputAmount",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "_isFixedToken",
        type: "bool"
    }],
    name: "swap",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }, {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}]
  , d6 = "0x60806040523480156200001157600080fd5b5060405162001f4e38038062001f4e8339810160408190526200003491620002ec565b6200003f33620001b5565b6001805582516200005890600290602086019062000205565b50600480546001600160a01b0319166001600160a01b03841690811782556040805163c45a015560e01b81529051919263c45a0155928282019260209290829003018186803b158015620000ab57600080fd5b505afa158015620000c0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e69190620002c8565b600580546001600160a01b03199081166001600160a01b03938416179091556006805490911683831617905560048054604080516312a9293f60e21b815290519190931692634aa4a4fc9281810192602092909190829003018186803b1580156200015057600080fd5b505afa15801562000165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018b9190620002c8565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200043c915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200021390620003e9565b90600052602060002090601f01602090048101928262000237576000855562000282565b82601f106200025257805160ff191683800117855562000282565b8280016001018555821562000282579182015b828111156200028257825182559160200191906001019062000265565b506200029092915062000294565b5090565b5b8082111562000290576000815560010162000295565b80516001600160a01b0381168114620002c357600080fd5b919050565b600060208284031215620002da578081fd5b620002e582620002ab565b9392505050565b60008060006060848603121562000301578182fd5b83516001600160401b038082111562000318578384fd5b818601915086601f8301126200032c578384fd5b81518181111562000341576200034162000426565b604051601f8201601f19908116603f011681019083821181831017156200036c576200036c62000426565b8160405282815260209350898484870101111562000388578687fd5b8691505b82821015620003ab57848201840151818301850152908301906200038c565b82821115620003bc57868484830101525b9650620003ce915050868201620002ab565b93505050620003e060408501620002ab565b90509250925092565b600181811c90821680620003fe57607f821691505b602082108114156200042057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611b02806200044c6000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806301e65db31461010c57806304fe3fcb1461015557806306fdde031461016a57806311a2f0cb1461017f5780631580b5e5146101aa57806317fcb39b146101b25780631cb85818146101c55780633566967d146101d85780636145f87614610202578063715018a614610215578063838b7ccb1461021d57806389883074146102305780638b1937cd1461024a5780638da5cb5b1461025d5780639b4bca2414610265578063b0bbcd8814610288578063b23e4fc6146102a9578063df71d7f314610230578063e75d75d5146102b1578063f2fde38b146102c4578063f912c64b146102d7575b600080fd5b61013c61011a3660046114f9565b600760209081526000928352604080842090915290825290205462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b610168610163366004611531565b6102ea565b005b61017261037d565b60405161014c91906118c9565b600654610192906001600160a01b031681565b6040516001600160a01b03909116815260200161014c565b61016861040b565b600354610192906001600160a01b031681565b600454610192906001600160a01b031681565b6101eb6101e63660046115bc565b6104d6565b60408051921515835260208301919091520161014c565b610172610210366004611582565b610592565b6101686106cf565b61016861022b3660046114c1565b610700565b6101eb61023e36600461161a565b60016000935093915050565b6101eb6102583660046115bc565b610803565b61019261083c565b610278610273366004611582565b61084b565b604051901515815260200161014c565b61029b610296366004611721565b610a44565b60405161014c929190611887565b610168610e01565b600554610192906001600160a01b031681565b6101686102d23660046114c1565b610ecc565b6101686102e53660046114c1565b610f6c565b336102f361083c565b6001600160a01b0316146103225760405162461bcd60e51b8152600401610319906118dc565b60405180910390fd5b6001600160a01b039283166000818152600760208181526040808420969097168352948552858220805462ffffff90951662ffffff199586168117909155908552858220928252919093529290912080549091169091179055565b6002805461038a90611a2d565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611a2d565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b505050505081565b3361041461083c565b6001600160a01b03161461043a5760405162461bcd60e51b8152600401610319906118dc565b60048054604080516312a9293f60e21b815290516001600160a01b0390921692634aa4a4fc928282019260209290829003018186803b15801561047c57600080fd5b505afa158015610490573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b491906114dd565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000806104e28461084b565b6104f15750600090508061058b565b6006546000906001600160a01b03166318ce06108561050f88610592565b6040518363ffffffff1660e01b815260040161052c92919061195b565b600060405180830381600087803b15801561054657600080fd5b505af115801561055a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105829190810190611650565b50600193509150505b9250929050565b6060816000815181106105b557634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016105e0919060609190911b6001600160601b031916815260140190565b60408051601f19818403018152919052905060015b82518110156106c95760008361060c6001846119ea565b8151811061062a57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600084838151811061065657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038085166000908152600784526040808220928416825291845281902054905191935062ffffff16916106a29187918491869101611840565b604051602081830303815290604052945050505080806106c190611a62565b9150506105f5565b50919050565b336106d861083c565b6001600160a01b0316146106fe5760405162461bcd60e51b8152600401610319906118dc565b565b806001600160a01b0381166107275760405162461bcd60e51b815260040161031990611911565b3361073061083c565b6001600160a01b0316146107565760405162461bcd60e51b8152600401610319906118dc565b600480546001600160a01b0319166001600160a01b03841690811782556040805163c45a015560e01b81529051919263c45a0155928282019260209290829003018186803b1580156107a757600080fd5b505afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df91906114dd565b600580546001600160a01b0319166001600160a01b03929092169190911790555050565b60008061080f8461084b565b61081e5750600090508061058b565b6006546000906001600160a01b0316630980929e8561050f88610592565b6000546001600160a01b031690565b6000806002835110156108615750600092915050565b60005b6001845161087291906119ea565b811015610a3a5760055484516001600160a01b039091169063becbcc6a908690849081106108b057634e487b7160e01b600052603260045260246000fd5b6020026020010151868460016108c691906119d2565b815181106108e457634e487b7160e01b600052603260045260246000fd5b60200260200101516007600089878151811061091057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008987600161094891906119d2565b8151811061096657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b0390811683529082019290925260409081016000205490516001600160e01b031960e087901b16815293821660048501529116602483015262ffffff16604482015260640160206040518083038186803b1580156109d657600080fd5b505afa1580156109ea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0e91906114dd565b91506001600160a01b038216610a28575060009392505050565b80610a3281611a62565b915050610864565b5060019392505050565b6000606060026001541415610a9b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610319565b6002600155846001600160a01b038116610ac75760405162461bcd60e51b815260040161031990611911565b6000610ad68a8a8a8989610fbd565b909450905060008415610ded576040805160028082526060820183529091602083019080368337019050509350610b4b3330848c600081518110610b2a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031661102b909392919063ffffffff16565b88600081518110610b6c57634e487b7160e01b600052603260045260246000fd5b60209081029190910101516004805460405163095ea7b360e01b81526001600160a01b0391821692810192909252602482018590529091169063095ea7b390604401602060405180830381600087803b158015610bc857600080fd5b505af1158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0091906115fe565b5060018615151415610cfa576004546001600160a01b03166375ceafe6610c2a848d8d8d8d61108b565b6040518263ffffffff1660e01b8152600401610c469190611948565b6040805180830381600087803b158015610c5f57600080fd5b505af1158015610c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9791906116fe565b9050809150508184600081518110610cbf57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508084600181518110610ced57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b85610ded576004546001600160a01b031663115ff67e610d1d848d8d8d8d611119565b6040518263ffffffff1660e01b8152600401610d399190611948565b6040805180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a91906116fe565b9050809150508084600081518110610db257634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508984600181518110610de057634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b505060018055509097909650945050505050565b33610e0a61083c565b6001600160a01b031614610e305760405162461bcd60e51b8152600401610319906118dc565b600480546040805163c45a015560e01b815290516001600160a01b039092169263c45a0155928282019260209290829003018186803b158015610e7257600080fd5b505afa158015610e86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eaa91906114dd565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b33610ed561083c565b6001600160a01b031614610efb5760405162461bcd60e51b8152600401610319906118dc565b6001600160a01b038116610f605760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610319565b610f69816111a8565b50565b33610f7561083c565b6001600160a01b031614610f9b5760405162461bcd60e51b8152600401610319906118dc565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60008042841015610fd357506000905080611021565b600080610fe0878a610803565b9150915080881115610ffa57600080935093505050611021565b6001851515141561101057509150869050611021565b61101a87896104d6565b9350935050505b9550959350505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110859085906111f8565b50505050565b6110cf6040518060a001604052806060815260200160006001600160a01b0316815260200160006001600160801b0316815260200160008152602001600081525090565b6040518060a001604052806110e386610592565b81526001600160a01b0390941660208501526001600160801b039096166040840152506060820193909352608001919091525090565b61115d6040518060a001604052806060815260200160006001600160a01b0316815260200160006001600160801b0316815260200160008152602001600081525090565b6040518060a0016040528061117186610592565b81526001600160a01b0390941660208501526001600160801b03909516604084015250606082019490945260800192909252919050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061124d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112cf9092919063ffffffff16565b8051909150156112ca578080602001905181019061126b91906115fe565b6112ca5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610319565b505050565b60606112de84846000856112e8565b90505b9392505050565b6060824710156113495760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610319565b843b6113975760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610319565b600080866001600160a01b031685876040516113b39190611824565b60006040518083038185875af1925050503d80600081146113f0576040519150601f19603f3d011682016040523d82523d6000602084013e6113f5565b606091505b5091509150611405828286611410565b979650505050505050565b6060831561141f5750816112e1565b82511561142f5782518084602001fd5b8160405162461bcd60e51b815260040161031991906118c9565b600082601f830112611459578081fd5b8135602061146e611469836119af565b61197f565b80838252828201915082860187848660051b890101111561148d578586fd5b855b858110156114b45781356114a281611aa9565b8452928401929084019060010161148f565b5090979650505050505050565b6000602082840312156114d2578081fd5b81356112e181611aa9565b6000602082840312156114ee578081fd5b81516112e181611aa9565b6000806040838503121561150b578081fd5b823561151681611aa9565b9150602083013561152681611aa9565b809150509250929050565b600080600060608486031215611545578081fd5b833561155081611aa9565b9250602084013561156081611aa9565b9150604084013562ffffff81168114611577578182fd5b809150509250925092565b600060208284031215611593578081fd5b81356001600160401b038111156115a8578182fd5b6115b484828501611449565b949350505050565b600080604083850312156115ce578182fd5b82356001600160401b038111156115e3578283fd5b6115ef85828601611449565b95602094909401359450505050565b60006020828403121561160f578081fd5b81516112e181611abe565b60008060006060848603121561162e578283fd5b83359250602084013561164081611aa9565b9150604084013561157781611aa9565b60008060408385031215611662578182fd5b8251602080850151919350906001600160401b03811115611681578283fd5b8401601f81018613611691578283fd5b805161169f611469826119af565b80828252848201915084840189868560051b87010111156116be578687fd5b8694505b838510156116ee5780518060020b81146116da578788fd5b8352600194909401939185019185016116c2565b5080955050505050509250929050565b60008060408385031215611710578182fd5b505080516020909101519092909150565b60008060008060008060c08789031215611739578182fd5b863595506020870135945060408701356001600160401b0381111561175c578283fd5b61176889828a01611449565b945050606087013561177981611aa9565b92506080870135915060a087013561179081611abe565b809150509295509295509295565b600081518084526117b6816020860160208601611a01565b601f01601f19169290920160200192915050565b6000815160a084526117df60a085018261179e565b6020848101516001600160a01b0316908601526040808501516001600160801b0316908601526060808501519086015260809384015193909401929092525090919050565b60008251611836818460208701611a01565b9190910192915050565b60008451611852818460208901611a01565b60e89490941b6001600160e81b0319169190930190815260609190911b6001600160601b031916600382015260170192915050565b600060408201841515835260206040818501528185518084526060860191508287019350845b818110156114b4578451835293830193918301916001016118ad565b6020815260006112e1602083018461179e565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601e908201527f695a6953776170436f6e6e6563746f723a207a65726f20616464726573730000604082015260600190565b6020815260006112e160208301846117ca565b6001600160801b03831681526040602082018190526000906112de9083018461179e565b604051601f8201601f191681016001600160401b03811182821017156119a7576119a7611a93565b604052919050565b60006001600160401b038211156119c8576119c8611a93565b5060051b60200190565b600082198211156119e5576119e5611a7d565b500190565b6000828210156119fc576119fc611a7d565b500390565b60005b83811015611a1c578181015183820152602001611a04565b838111156110855750506000910152565b600181811c90821680611a4157607f821691505b602082108114156106c957634e487b7160e01b600052602260045260246000fd5b6000600019821415611a7657611a76611a7d565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610f6957600080fd5b8015158114610f6957600080fdfea2646970667358221220a883710fdd297c69dd8d082044a986f025a848710a9712d7833b47aa092c857964736f6c63430008040033";
class C0 extends F {
    constructor(...e) {
        e.length === 1 ? super(r0, d6, e[0]) : super(...e)
    }
    deploy(e, a, n, t) {
        return super.deploy(e, a, n, t || {})
    }
    getDeployTransaction(e, a, n, t) {
        return super.getDeployTransaction(e, a, n, t || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(r0)
    }
    static connect(e, a) {
        return new g(e,r0,a)
    }
}
u(C0, "bytecode", d6),
u(C0, "abi", r0);
const u0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IRuneRouter.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "FailedRuneWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldLocker",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newLocker",
        type: "address"
    }],
    name: "NewLocker",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldProtocolPercentageFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newProtocolPercentageFee",
        type: "uint256"
    }],
    name: "NewProtocolPercentageFee",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldRelay",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newRelay",
        type: "address"
    }],
    name: "NewRelay",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        indexed: !1,
        internalType: "string",
        name: "symbol",
        type: "string"
    }, {
        indexed: !1,
        internalType: "string",
        name: "runeId",
        type: "string"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "decimal",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "internalId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneProxy",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneLogic",
        type: "address"
    }],
    name: "NewRune",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IRuneRouter.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewRuneSwapAndUnwrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IRuneRouter.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unwrapFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "NewRuneUnwrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IRuneRouter.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewRuneWrap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "outputToken",
        type: "address"
    }, {
        components: [{
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "lockerFee",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "thirdPartyFee",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct IRuneRouter.fees",
        name: "fee",
        type: "tuple"
    }, {
        indexed: !1,
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "txId",
        type: "bytes32"
    }],
    name: "NewRuneWrapAndSwap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTeleporter",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTeleporter",
        type: "address"
    }],
    name: "NewTeleporter",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "oldTreasury",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newTreasury",
        type: "address"
    }],
    name: "NewTreasury",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "wRuneProxy",
        type: "address"
    }],
    name: "RuneRemoved",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "exchangeConnector",
        type: "address"
    }],
    name: "SetExchangeConnector",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "oldAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
    }],
    name: "ThirdPartyInfoUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
    }],
    name: "UnwrapFeeUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "reqIdx",
        type: "uint256"
    }],
    name: "UnwrapRuneProcessed",
    type: "event"
}, {
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "string",
        name: "_symbol",
        type: "string"
    }, {
        internalType: "string",
        name: "_runeId",
        type: "string"
    }, {
        internalType: "uint8",
        name: "_decimal",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_internalId",
        type: "uint256"
    }],
    name: "addRune",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "chainId",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "exchangeConnector",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_relay",
        type: "address"
    }, {
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_lockerScriptType",
        type: "uint8"
    }, {
        internalType: "address",
        name: "_teleporter",
        type: "address"
    }, {
        internalType: "address",
        name: "_treasury",
        type: "address"
    }, {
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "internalIds",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_reqIdx",
        type: "uint256"
    }],
    name: "isUnwrapRequestProcessed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "_txId",
        type: "bytes32"
    }],
    name: "isWrapRequestProcessed",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "locker",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerLockingScript",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lockerScriptType",
    outputs: [{
        internalType: "enum ScriptTypes",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "protocolPercentageFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "relay",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_internalId",
        type: "uint256"
    }],
    name: "removeRune",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "runeIds",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "runeUnwrapCounter",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "runeUnwrapRequests",
    outputs: [{
        internalType: "bool",
        name: "isProcessed",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "burntAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "bytes",
        name: "userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "scriptType",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "runeWrapRequests",
    outputs: [{
        internalType: "bool",
        name: "isUsed",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "appId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "inputToken",
        type: "address"
    }, {
        internalType: "address",
        name: "recipientAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "thirdPartyId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "outputToken",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_chainId",
        type: "uint256"
    }],
    name: "setChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_appId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_exchangeConnector",
        type: "address"
    }],
    name: "setExchangeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }],
    name: "setLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes",
        name: "_lockerLockingScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_lockerScriptType",
        type: "uint8"
    }],
    name: "setLockerLockingScript",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_protocolPercentageFee",
        type: "uint256"
    }],
    name: "setProtocolPercentageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_relay",
        type: "address"
    }],
    name: "setRelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_startingBlockNumber",
        type: "uint256"
    }],
    name: "setStartingBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_teleporter",
        type: "address"
    }],
    name: "setTeleporter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_thirdPartyAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_thirdPartyFee",
        type: "uint256"
    }],
    name: "setThirdParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_treasury",
        type: "address"
    }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
    }],
    name: "setUnwrapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_wrappedNativeToken",
        type: "address"
    }],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "startingBlockNumber",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "supportedRunes",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "teleporter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "thirdParties",
    outputs: [{
        internalType: "address",
        name: "thirdPartyAddress",
        type: "address"
    }, {
        internalType: "uint256",
        name: "thirdPartyFee",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalRuneUnwrapRequests",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "treasury",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "unwrapFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "_version",
        type: "bytes4"
    }, {
        internalType: "bytes",
        name: "_vin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_vout",
        type: "bytes"
    }, {
        internalType: "bytes4",
        name: "_locktime",
        type: "bytes4"
    }, {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_intermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }, {
        internalType: "uint256[]",
        name: "_reqIndexes",
        type: "uint256[]"
    }],
    name: "unwrapProofRune",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_thirdPartyId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_internalId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_userScript",
        type: "bytes"
    }, {
        internalType: "enum ScriptTypes",
        name: "_scriptType",
        type: "uint8"
    }, {
        internalType: "uint256",
        name: "_appId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "unwrapRune",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "_version",
        type: "bytes4"
    }, {
        internalType: "bytes",
        name: "_vin",
        type: "bytes"
    }, {
        internalType: "bytes",
        name: "_vout",
        type: "bytes"
    }, {
        internalType: "bytes4",
        name: "_locktime",
        type: "bytes4"
    }, {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_intermediateNodes",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "wrapRune",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , f6 = "0x608060405234801561001057600080fd5b5061552f806100206000396000f3fe608060405260043610620002285760003560e01c8063023e25b41462000235578063068bf8741462000287578063088302a614620002ae5780630e72e41e14620002d5578063171060ec146200030b57806317fcb39b14620003305780631812adb614620003525780631e7107c714620003795780632104cb6b146200039e5780633669391e14620003c3578063402e01f814620003db57806349c544e1146200040057806361d027b314620004175780636390802014620004395780636b2857ef14620004515780636e8adf61146200047657806370872aa514620004b0578063715018a614620004c857806375122f6214620004e05780637ed557481462000505578063839ae1d7146200052a5780638be727e114620005415780638da5cb5b146200056657806390665eca146200057e5780639637e4a814620005955780639a8a059214620005ba5780639aed427914620005d25780639eca445314620005ea578063a3696a09146200063e578063a44c2b9a1462000663578063ae2a74ee1462000688578063b3ff9f4914620006b9578063b4e183f414620006e0578063b59589d11462000705578063c805f68b1462000727578063d4603f4c146200074c578063d7b96d4e1462000786578063d8484ef514620007a8578063da058ae314620007d3578063e765078814620007f8578063e91ffefd14620008ec578063ef0e2ff41462000903578063f0f442601462000928578063f2fde38b146200094d57600080fd5b366200023057005b600080fd5b3480156200024257600080fd5b506200026f62000254366004620036d5565b609f602052600090815260409020546001600160a01b031681565b6040516200027e919062003d63565b60405180910390f35b3480156200029457600080fd5b50620002ac620002a636600462003940565b62000972565b005b348015620002bb57600080fd5b50620002c662000c82565b6040516200027e919062004174565b348015620002e257600080fd5b50620002fa620002f4366004620036d5565b62000d18565b60405190151581526020016200027e565b3480156200031857600080fd5b50620002ac6200032a366004620035c1565b62000d66565b3480156200033d57600080fd5b5060a9546200026f906001600160a01b031681565b3480156200035f57600080fd5b506200036a60995481565b6040519081526020016200027e565b3480156200038657600080fd5b50620002ac62000398366004620036d5565b62000e06565b348015620003ab57600080fd5b50620002ac620003bd36600462003af8565b62000e66565b348015620003d057600080fd5b506200036a609b5481565b348015620003e857600080fd5b50620002c6620003fa366004620035c1565b62000ff2565b620002ac6200041136600462003707565b6200100d565b3480156200042457600080fd5b50609d546200026f906001600160a01b031681565b3480156200044657600080fd5b506200036a609a5481565b3480156200045e57600080fd5b50620002ac6200047036600462003a33565b62001880565b3480156200048357600080fd5b506200026f62000495366004620036d5565b60a3602052600090815260409020546001600160a01b031681565b348015620004bd57600080fd5b506200036a60975481565b348015620004d557600080fd5b50620002ac620018f3565b348015620004ed57600080fd5b50620002ac620004ff36600462003a65565b620018ff565b3480156200051257600080fd5b50620002ac62000524366004620036d5565b620019c0565b620002ac6200053b36600462003802565b62001a5f565b3480156200054e57600080fd5b50620002ac62000560366004620036d5565b62001ed0565b3480156200057357600080fd5b506200026f62001fd0565b3480156200058b57600080fd5b5060a4546200036a565b348015620005a257600080fd5b50620002ac620005b4366004620036d5565b62001fdf565b348015620005c757600080fd5b506200036a60985481565b348015620005df57600080fd5b506200036a60a85481565b348015620005f757600080fd5b506200062e62000609366004620036d5565b60a760205260009081526040902080546001909101546001600160a01b039091169082565b6040516200027e92919062003f02565b3480156200064b57600080fd5b50620002ac6200065d366004620035c1565b6200202a565b3480156200067057600080fd5b50620002fa62000682366004620036d5565b620020d7565b3480156200069557600080fd5b506200036a620006a7366004620035c1565b60a16020526000908152604090205481565b348015620006c657600080fd5b5060a6546200026f9061010090046001600160a01b031681565b348015620006ed57600080fd5b50620002ac620006ff366004620038ef565b620020f6565b3480156200071257600080fd5b50609c546200026f906001600160a01b031681565b3480156200073457600080fd5b50620002ac62000746366004620035c1565b6200214d565b3480156200075957600080fd5b50620007716200076b366004620036d5565b620021ed565b6040516200027e97969594939291906200411a565b3480156200079357600080fd5b50609e546200026f906001600160a01b031681565b348015620007b557600080fd5b5060a654620007c49060ff1681565b6040516200027e919062004189565b348015620007e057600080fd5b50620002ac620007f2366004620035c1565b620022e1565b3480156200080557600080fd5b506200088262000817366004620036d5565b60a260205260009081526040902080546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a909a015460ff9099169997989697959694956001600160a01b039485169593851694929391929091168b565b604080519b15158c5260208c019a909a52988a0197909752606089019590955260808801939093526001600160a01b0391821660a0880152811660c087015260e086019190915261010085019190915261012084019190915216610140820152610160016200027e565b620002ac620008fd36600462003bd1565b62002338565b3480156200091057600080fd5b50620002ac62000922366004620036d5565b620028d0565b3480156200093557600080fd5b50620002ac62000947366004620035c1565b620028df565b3480156200095a57600080fd5b50620002ac6200096c366004620035c1565b6200297f565b6200097c620029fe565b6000818152609f60205260409020546001600160a01b031615620009e25760405162461bcd60e51b8152602060048201526018602482015277149d5b99549bdd5d195c931bd9da58ce881d5cd959081a5960421b60448201526064015b60405180910390fd5b600073__$67e4a81169bd42f3bd76691a8cba760d26$__6374c6d02c6040518163ffffffff1660e01b815260040160206040518083038186803b15801562000a2957600080fd5b505af415801562000a3e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a649190620035e7565b9050606060008262000a7562001fd0565b8360405162000a849062003296565b62000a929392919062003d91565b604051809103906000f08015801562000aaf573d6000803e3d6000fd5b50604051630b127b6360e11b815290915081906001600160a01b03821690631624f6c69062000ae7908c908c908b906004016200420b565b600060405180830381600087803b15801562000b0257600080fd5b505af115801562000b17573d6000803e3d6000fd5b5050604051634c1d96ab60e11b81526001600160a01b038416925063983b2d56915062000b4990309060040162003d63565b600060405180830381600087803b15801562000b6457600080fd5b505af115801562000b79573d6000803e3d6000fd5b5050604051637a231bdd60e11b81526001600160a01b038416925063f44637ba915062000bab90309060040162003d63565b600060405180830381600087803b15801562000bc657600080fd5b505af115801562000bdb573d6000803e3d6000fd5b5050506000868152609f6020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260a1825280832089905560a08252909120895162000c31935090918a0190620032a4565b507f175ec5a73d18c14429b1199d5fac7097c1c021f98a45d4bcfdeddedfbcc04f3c8989898989868a60405162000c6f979695949392919062004199565b60405180910390a1505050505050505050565b60a5805462000c919062004530565b80601f016020809104026020016040519081016040528092919081815260200182805462000cbf9062004530565b801562000d105780601f1062000ce45761010080835404028352916020019162000d10565b820191906000526020600020905b81548152906001019060200180831162000cf257829003601f168201915b505050505081565b600060a4828154811062000d3c57634e487b7160e01b600052603260045260246000fd5b600091825260209091206007909102015460ff1662000d5d57600062000d60565b60015b92915050565b806001600160a01b03811662000d905760405162461bcd60e51b8152600401620009d99062004293565b62000d9a620029fe565b609e546040517f69253c7023f628e3a302b63087a3bfc1dfdb256780182f81b9f0df9eff9542b09162000ddb916001600160a01b0390911690859062003d77565b60405180910390a150609e80546001600160a01b0319166001600160a01b0392909216919091179055565b62000e10620029fe565b609754811162000e615760405162461bcd60e51b815260206004820152601b60248201527a293ab732a937baba32b92637b3b4b19d103637bb90373ab6b132b960291b6044820152606401620009d9565b609755565b600054610100900460ff161580801562000e875750600054600160ff909116105b8062000ea35750303b15801562000ea3575060005460ff166001145b62000f085760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620009d9565b6000805460ff19166001179055801562000f2c576000805461ff0019166101001790555b62000f3662002a61565b62000f4062002a95565b609889905562000f508b62000e06565b62000f5b8a620019c0565b62000f66886200214d565b62000f718762000d66565b62000f7d8686620020f6565b62000f88846200202a565b62000f9383620028df565b62000f9e82620022e1565b801562000fe5576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050505050565b60a0602052600090815260409020805462000c919062004530565b6200101762002ac9565b60a65461010090046001600160a01b0316336001600160a01b031614620010815760405162461bcd60e51b815260206004820152601f60248201527f52756e65526f757465724c6f6769633a206e6f742074656c65706f72746572006044820152606401620009d9565b600073__$67e4a81169bd42f3bd76691a8cba760d26$__63e291283d609754609c60009054906101000a90046001600160a01b03168e8e8e8e8e8e8e8e8e6040518c63ffffffff1660e01b8152600401620010e79b9a99989796959493929190620042e1565b60206040518083038186803b1580156200110057600080fd5b505af415801562001115573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200113b9190620036ee565b905060008060008073__$67e4a81169bd42f3bd76691a8cba760d26$__63d27fd71f6098548f8f8960a2609f60a7609954609a546040518a63ffffffff1660e01b8152600401620011959998979695949392919062004407565b60c06040518083038186803b158015620011ae57600080fd5b505af4158015620011c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620011e9919062003a9f565b9350935093509350806001600160a01b03166340c10f1930868660400151876020015188600001516200121d9190620044fb565b620012299190620044fb565b620012359190620044fb565b6040518363ffffffff1660e01b81526004016200125492919062003f02565b602060405180830381600087803b1580156200126f57600080fd5b505af115801562001284573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012aa919062003606565b50609d54835160405163a9059cbb60e01b81526001600160a01b038481169363a9059cbb93620012e293929091169160040162003f02565b602060405180830381600087803b158015620012fd57600080fd5b505af115801562001312573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001338919062003606565b50609e54602084015160405163a9059cbb60e01b81526001600160a01b038481169363a9059cbb936200137393929091169160040162003f02565b602060405180830381600087803b1580156200138e57600080fd5b505af1158015620013a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620013c9919062003606565b506001600160a01b038216156200146557604080840151905163a9059cbb60e01b81526001600160a01b0383169163a9059cbb916200140d91869160040162003f02565b602060405180830381600087803b1580156200142857600080fd5b505af11580156200143d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001463919062003606565b505b600085815260a26020908152604091829020825161016081018452815460ff16151581526001820154928101929092526002810154928201839052600381015460608301526004810154608083015260058101546001600160a01b0390811660a08401526006820154811660c0840152600782015460e084015260088201546101008401526009820154610120840152600a909101541661014082015290620015e05760c081015160405163a9059cbb60e01b81526001600160a01b0384169163a9059cbb916200153c9190899060040162003f02565b602060405180830381600087803b1580156200155757600080fd5b505af11580156200156c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001592919062003606565b507f43c9c64e3d0a7d664252e89fe26c8958a77098900ebf13f7aa95030a371bc4328160c00151868487878b604051620015d29695949392919062003f1b565b60405180910390a162001863565b8060a001516001600160a01b0316876000815181106200161057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161480156200167c57508061014001516001600160a01b031687600189516200164a919062004516565b815181106200166957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316145b620016c85760405162461bcd60e51b815260206004820152601b60248201527a0a4eadccaa4deeae8cae498deced2c67440eee4dedcce40e0c2e8d602b1b6044820152606401620009d9565b600080620016e783604001518460c00151898661012001518d62002b25565b9150915081156200177f577fed12b1e275b408eb8b01de7d246293c2daf02f98422b51b0af3012463e2a725e8360c00151888684600186516200172b919062004516565b815181106200174a57634e487b7160e01b600052603260045260246000fd5b60200260200101518761014001518b8b8f6040516200177198979695949392919062003f61565b60405180910390a162001860565b7f2eefdda27738a7be93aea5dafceb4d8af2e8e046fd411a8c94bb449508af05a28360c0015188868661012001518761014001518b8b8f604051620017cc98979695949392919062003f61565b60405180910390a160c083015160405163a9059cbb60e01b81526001600160a01b0386169163a9059cbb916200180891908b9060040162003f02565b602060405180830381600087803b1580156200182357600080fd5b505af115801562001838573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200185e919062003606565b505b50505b505050505050620018746001606555565b50505050505050505050565b6200188a620029fe565b7f31a8c4e62daac2a3ed5d713004d9ae867d6dcddfa35603db2a4b65d9236b1bc18282604051620018bd929190620042ca565b60405180910390a1600091825260a3602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b620018fd620029fe565b565b62001909620029fe565b600083815260a76020908152604091829020805460019091015483518781526001600160a01b039283169381019390935282840152841660608201526080810183905290517f23385740814648db624aa52a0c990fc42def14e1b04e7fe5b2bf87b85e1294529181900360a00190a16040805180820182526001600160a01b0393841681526020808201938452600095865260a790529320925183546001600160a01b031916921691909117825551600190910155565b620019ca620029fe565b80612710101562001a1e5760405162461bcd60e51b815260206004820152601d60248201527f52756e65526f757465724c6f6769633a206f7574206f662072616e67650000006044820152606401620009d9565b60995460408051918252602082018390527f7d205f60891f60851c61cd244ba387d72b6589e7c0ac41b9d909ab0ce2c2a53b910160405180910390a1609955565b62001a6962002ac9565b609e546001600160a01b0316336001600160a01b03161462001acc5760405162461bcd60e51b815260206004820152601b60248201527a293ab732a937baba32b92637b3b4b19d103737ba103637b1b5b2b960291b6044820152606401620009d9565b609754609c5460405163e291283d60e01b815273__$67e4a81169bd42f3bd76691a8cba760d26$__9263e291283d9262001b23926001600160a01b03909116908d908d908d908d908d908d908d9060040162004376565b60206040518083038186803b15801562001b3c57600080fd5b505af415801562001b51573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001b779190620036ee565b5060005b815181101562001eba5760a482828151811062001ba857634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001bcf57634e487b7160e01b600052603260045260246000fd5b600091825260209091206007909102015460ff161562001c3d5760405162461bcd60e51b815260206004820152602260248201527f52756e65526f757465724c6f6769633a20616c72656164792070726f63657373604482015261195960f21b6064820152608401620009d9565b600160a483838151811062001c6257634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001c8957634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160000160006101000a81548160ff0219169083151502179055507f42975333d773ba95b24fa6c9b8127fc4a9bc1bafb6293c8c9daa4f6aed0bc34960a483838151811062001cf557634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001d1c57634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160040160009054906101000a90046001600160a01b031660a484848151811062001d6457634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001d8b57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600702016002015460a485858151811062001dc057634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001de757634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160050160a486868151811062001e1b57634e487b7160e01b600052603260045260246000fd5b60200260200101518154811062001e4257634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160060160009054906101000a900460ff1686868151811062001e8257634e487b7160e01b600052603260045260246000fd5b602002602001015160405162001e9d95949392919062003fba565b60405180910390a18062001eb1816200456d565b91505062001b7b565b5062001ec66001606555565b5050505050505050565b62001eda620029fe565b6000818152609f60205260409020546001600160a01b03168062001f3d5760405162461bcd60e51b8152602060048201526019602482015278293ab732a937baba32b92637b3b4b19d103737903a37b5b2b760391b6044820152606401620009d9565b7ff61991393940604b8433d5f9a855624b8452e131d66e476a45c7139651df9699828260405162001f70929190620042ca565b60405180910390a16001600160a01b038116600090815260a06020526040812062001f9b9162003333565b6001600160a01b0316600090815260a160209081526040808320839055928252609f90522080546001600160a01b0319169055565b6033546001600160a01b031690565b62001fe9620029fe565b60a85460408051918252602082018390527f24a1cf21e7b4eac23dffa41704078ed28bbe2a42187f6aa014899c5413cd01b7910160405180910390a160a855565b806001600160a01b038116620020545760405162461bcd60e51b8152600401620009d99062004293565b6200205e620029fe565b7f150b77d21bd499fd0dccea9fe32513c7b65aa34ccde41e7dafac74ace8e19c9460a660019054906101000a90046001600160a01b031683604051620020a692919062003d77565b60405180910390a15060a680546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600081815260a2602052604081205460ff1662000d5d57600062000d60565b62002100620029fe565b8151620021159060a5906020850190620032a4565b5060a6805482919060ff191660018360058111156200214457634e487b7160e01b600052602160045260246000fd5b02179055505050565b806001600160a01b038116620021775760405162461bcd60e51b8152600401620009d99062004293565b62002181620029fe565b609c546040517f4c28a3f61a715259c4dc930c23e7423b8fa52e13232c061a6e488729c66184f491620021c2916001600160a01b0390911690859062003d77565b60405180910390a150609c80546001600160a01b0319166001600160a01b0392909216919091179055565b60a48181548110620021fe57600080fd5b600091825260209091206007909102018054600182015460028301546003840154600485015460058601805460ff90961697509395929491936001600160a01b0390911692916200224f9062004530565b80601f01602080910402602001604051908101604052809291908181526020018280546200227d9062004530565b8015620022ce5780601f10620022a257610100808354040283529160200191620022ce565b820191906000526020600020905b815481529060010190602001808311620022b057829003601f168201915b5050506006909301549192505060ff1687565b806001600160a01b0381166200230b5760405162461bcd60e51b8152600401620009d99062004293565b62002315620029fe565b5060a980546001600160a01b0319166001600160a01b0392909216919091179055565b6200234262002ac9565b6000878152609f60205260409020546001600160a01b031680620023a95760405162461bcd60e51b815260206004820152601e60248201527f52756e65526f757465724c6f6769633a206e6f7420737570706f7274656400006044820152606401620009d9565b60a8543411156200250f5760a854620023c39084620044fb565b3414620024125760405162461bcd60e51b815260206004820152601c60248201527b52756e65526f757465724c6f6769633a2077726f6e672076616c756560201b6044820152606401620009d9565b816000815181106200243457634e487b7160e01b600052603260045260246000fd5b602090810291909101015160a9546001600160a01b039081169116146200249e5760405162461bcd60e51b815260206004820152601d60248201527f52756e65526f757465724c6f6769633a20696e76616c696420706174680000006044820152606401620009d9565b60a960009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004016000604051808303818588803b158015620024ef57600080fd5b505af115801562002504573d6000803e3d6000fd5b50505050506200255f565b60a85434146200255f5760405162461bcd60e51b815260206004820152601a60248201527952756e65526f757465724c6f6769633a2077726f6e672066656560301b6044820152606401620009d9565b815115620026d25760a8543414156200262c57816000815181106200259457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd620025b23390565b30866040518463ffffffff1660e01b8152600401620025d49392919062003dc8565b602060405180830381600087803b158015620025ef57600080fd5b505af115801562002604573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200262a919062003606565b505b6000806200263e8630878c8862002b25565b9150915081620026905760405162461bcd60e51b815260206004820152601c60248201527b149d5b99549bdd5d195c931bd9da58ce881cddd85c0819985a5b195960221b6044820152606401620009d9565b8060018251620026a1919062004516565b81518110620026c057634e487b7160e01b600052603260045260246000fd5b602002602001015198505050620027a8565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd906200270490339030908c9060040162003dc8565b602060405180830381600087803b1580156200271f57600080fd5b505af115801562002734573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200275a919062003606565b620027a85760405162461bcd60e51b815260206004820181905260248201527f52756e65526f757465724c6f6769633a207472616e73666572206661696c65646044820152606401620009d9565b6000806000620027bc8c858c8c8c62002d7c565b92509250925084516000141562002833577f7ded23d6204f0918dc93f275df51659538e59e8aaf5698ce1f49180c22857b53338a8a878e868960a8548a600160a4805490506200280d919062004516565b604051620028259a9998979695949392919062003dec565b60405180910390a1620028c1565b7fe17d30e84f141d5effc904ed29262988eb565f53a8c01270148776b88451bb71338a8a89896000815181106200287a57634e487b7160e01b600052603260045260246000fd5b60200260200101518f878b8b60a8548c600160a4805490506200289e919062004516565b604051620028b89c9b9a9998979695949392919062003e70565b60405180910390a15b5050505062001ec66001606555565b620028da620029fe565b609855565b806001600160a01b038116620029095760405162461bcd60e51b8152600401620009d99062004293565b62002913620029fe565b609d546040517f567657fa3f286518b318f4a29870674f433f622fdfc819691acb13105b2282259162002954916001600160a01b0390911690859062003d77565b60405180910390a150609d80546001600160a01b0319166001600160a01b0392909216919091179055565b62002989620029fe565b6001600160a01b038116620029f05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620009d9565b620029fb81620030c4565b50565b3362002a0962001fd0565b6001600160a01b031614620018fd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620009d9565b600054610100900460ff1662002a8b5760405162461bcd60e51b8152600401620009d99062004248565b620018fd62003116565b600054610100900460ff1662002abf5760405162461bcd60e51b8152600401620009d99062004248565b620018fd6200314b565b6002606554141562002b1e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401620009d9565b6002606555565b600085815260a360205260408120546060906001600160a01b03168062002b8f5760405162461bcd60e51b815260206004820152601e60248201527f52756e65526f757465724c6f6769633a20696e76616c696420617070496400006044820152606401620009d9565b8360008151811062002bb157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663095ea7b382886040518363ffffffff1660e01b815260040162002be892919062003f02565b602060405180830381600087803b15801562002c0357600080fd5b505af115801562002c18573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c3e919062003606565b506040516326d2f28960e21b81526001600160a01b03821690639b4bca249062002c6d90879060040162004105565b60206040518083038186803b15801562002c8657600080fd5b505afa15801562002c9b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002cc1919062003606565b1562002d655760405163161779b160e31b81526001600160a01b0382169063b0bbcd889062002d00908990899089908d90429060019060040162004458565b600060405180830381600087803b15801562002d1b57600080fd5b505af115801562002d30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262002d5a919081019062003623565b909350915062002d6a565b600092505b509550959350505050565b6001606555565b62002da160405180606001604052806000815260200160008152602001600081525090565b60008073__$67e4a81169bd42f3bd76691a8cba760d26$__6394d8bc6a33609954609a5460a460a78e8d8d8d6040518a63ffffffff1660e01b815260040162002df3999897969594939291906200409c565b60a06040518083038186803b15801562002e0c57600080fd5b505af415801562002e21573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e479190620039ee565b609b80549396509194509250600062002e60836200456d565b9091555050609d54835160405163a9059cbb60e01b81526001600160a01b038a81169363a9059cbb9362002e9c93929091169160040162003f02565b602060405180830381600087803b15801562002eb757600080fd5b505af115801562002ecc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ef2919062003606565b50609e54602084015160405163a9059cbb60e01b81526001600160a01b038a81169363a9059cbb9362002f2d93929091169160040162003f02565b602060405180830381600087803b15801562002f4857600080fd5b505af115801562002f5d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002f83919062003606565b506001600160a01b038216156200301f57604080840151905163a9059cbb60e01b81526001600160a01b0389169163a9059cbb9162002fc791869160040162003f02565b602060405180830381600087803b15801562002fe257600080fd5b505af115801562002ff7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200301d919062003606565b505b609e5460a8546200303a916001600160a01b03169062003175565b604051630852cd8d60e31b8152600481018290526001600160a01b038816906342966c6890602401602060405180830381600087803b1580156200307d57600080fd5b505af115801562003092573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620030b8919062003606565b50955095509592505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16620031405760405162461bcd60e51b8152600401620009d99062004248565b620018fd33620030c4565b600054610100900460ff1662002d755760405162461bcd60e51b8152600401620009d99062004248565b80471015620031c75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401620009d9565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811462003216576040519150601f19603f3d011682016040523d82523d6000602084013e6200321b565b606091505b5050905080620032915760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c20726044820152791958da5c1a595b9d081b585e481a185d99481c995d995c9d195960321b6064820152608401620009d9565b505050565b610f2c80620045ce83390190565b828054620032b29062004530565b90600052602060002090601f016020900481019282620032d6576000855562003321565b82601f10620032f157805160ff191683800117855562003321565b8280016001018555821562003321579182015b828111156200332157825182559160200191906001019062003304565b506200332f9291506200336d565b5090565b508054620033419062004530565b6000825580601f1062003352575050565b601f016020900490600052602060002090810190620029fb91905b5b808211156200332f57600081556001016200336e565b600082601f83011262003395578081fd5b81356020620033ae620033a883620044d5565b620044a2565b80838252828201915082860187848660051b8901011115620033ce578586fd5b855b85811015620033f9578135620033e681620045b7565b84529284019290840190600101620033d0565b5090979650505050505050565b600082601f83011262003417578081fd5b813560206200342a620033a883620044d5565b80838252828201915082860187848660051b89010111156200344a578586fd5b855b85811015620033f9578135845292840192908401906001016200344c565b805180151581146200347b57600080fd5b919050565b80356001600160e01b0319811681146200347b57600080fd5b60008083601f840112620034ab578182fd5b5081356001600160401b03811115620034c2578182fd5b602083019150836020828501011115620034db57600080fd5b9250929050565b600082601f830112620034f3578081fd5b81356001600160401b038111156200350f576200350f620045a1565b62003524601f8201601f1916602001620044a2565b81815284602083860101111562003539578283fd5b816020850160208301379081016020019190915292915050565b8035600681106200347b57600080fd5b60006060828403121562003575578081fd5b604051606081016001600160401b03811182821017156200359a576200359a620045a1565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600060208284031215620035d3578081fd5b8135620035e081620045b7565b9392505050565b600060208284031215620035f9578081fd5b8151620035e081620045b7565b60006020828403121562003618578081fd5b620035e0826200346a565b6000806040838503121562003636578081fd5b62003641836200346a565b602084810151919350906001600160401b038111156200365f578283fd5b8401601f8101861362003670578283fd5b805162003681620033a882620044d5565b80828252848201915084840189868560051b8701011115620036a1578687fd5b8694505b83851015620036c5578051835260019490940193918501918501620036a5565b5080955050505050509250929050565b600060208284031215620036e7578081fd5b5035919050565b60006020828403121562003700578081fd5b5051919050565b6000806000806000806000806000806101008b8d03121562003727578586fd5b620037328b62003480565b995060208b01356001600160401b03808211156200374e578788fd5b6200375c8e838f01620034e2565b9a5060408d013591508082111562003772578788fd5b620037808e838f0162003499565b909a5098508891506200379660608e0162003480565b975060808d0135965060a08d0135915080821115620037b3578586fd5b620037c18e838f0162003499565b909650945060c08d0135935060e08d0135915080821115620037e1578283fd5b50620037f08d828e0162003384565b9150509295989b9194979a5092959850565b600080600080600080600080610100898b0312156200381f578182fd5b6200382a8962003480565b975060208901356001600160401b038082111562003846578384fd5b620038548c838d01620034e2565b985060408b01359150808211156200386a578384fd5b620038788c838d01620034e2565b97506200388860608c0162003480565b965060808b0135955060a08b0135915080821115620038a5578384fd5b620038b38c838d01620034e2565b945060c08b0135935060e08b0135915080821115620038d0578283fd5b50620038df8b828c0162003406565b9150509295985092959890939650565b6000806040838503121562003902578182fd5b82356001600160401b0381111562003918578283fd5b6200392685828601620034e2565b925050620039376020840162003553565b90509250929050565b600080600080600060a0868803121562003958578283fd5b85356001600160401b03808211156200396f578485fd5b6200397d89838a01620034e2565b9650602088013591508082111562003993578485fd5b620039a189838a01620034e2565b95506040880135915080821115620039b7578485fd5b50620039c688828901620034e2565b935050606086013560ff81168114620039dd578182fd5b949793965091946080013592915050565b600080600060a0848603121562003a03578081fd5b62003a0f858562003563565b9250606084015162003a2181620045b7565b80925050608084015190509250925092565b6000806040838503121562003a46578182fd5b82359150602083013562003a5a81620045b7565b809150509250929050565b60008060006060848603121562003a7a578081fd5b83359250602084013562003a8e81620045b7565b929592945050506040919091013590565b60008060008060c0858703121562003ab5578182fd5b8451935062003ac8866020870162003563565b9250608085015162003ada81620045b7565b60a086015190925062003aed81620045b7565b939692955090935050565b6000806000806000806000806000806101408b8d03121562003b18578384fd5b8a35995060208b0135985060408b0135975060608b013562003b3a81620045b7565b965060808b013562003b4c81620045b7565b955060a08b01356001600160401b0381111562003b67578485fd5b62003b758d828e01620034e2565b95505062003b8660c08c0162003553565b935060e08b013562003b9881620045b7565b92506101008b013562003bab81620045b7565b91506101208b013562003bbe81620045b7565b809150509295989b9194979a5092959850565b600080600080600080600080610100898b03121562003bee578182fd5b88359750602089013596506040890135955060608901356001600160401b038082111562003c1a578384fd5b62003c288c838d01620034e2565b965062003c3860808c0162003553565b955060a08b0135945060c08b0135935060e08b013591508082111562003c5c578283fd5b50620038df8b828c0162003384565b6000815180845260208085019450808401835b8381101562003ca55781516001600160a01b03168752958201959082019060010162003c7e565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452815b8181101562003d005760208185018101518683018201520162003ce2565b8181111562003d125782602083870101525b50601f01601f19169290920160200192915050565b6006811062003d4657634e487b7160e01b600052602160045260246000fd5b9052565b8051825260208082015190830152604090810151910152565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0384811682528316602082015260606040820181905260009062003dbf9083018462003cd9565b95945050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038b811682526101806020830181905260009162003e148483018e62003cd9565b925062003e25604085018d62003d27565b808b1660608501528960808501528860a085015262003e4860c085018962003d4a565b866101208501528086166101408501525050826101608301529b9a5050505050505050505050565b600060018060a01b03808f1683526101c0602084015262003e966101c084018f62003cd9565b915062003ea7604084018e62003d27565b8b6060840152808b1660808401528960a08401528860c084015280881660e084015262003ed961010084018862003d4a565b8561016084015280851661018084015250826101a08301529d9c50505050505050505050505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03878116825260208201879052858116604083015261010082019062003f4c606084018762003d4a565b9390931660c082015260e00152949350505050565b6001600160a01b03898116825260208201899052878116604083015260608201879052858116608083015261014082019062003fa160a084018762003d4a565b9390931661010082015261012001529695505050505050565b6001600160a01b0386168152602080820186905260a060408301528454600091908290600181811c908281168062003ff357607f831692505b8583108114156200401257634e487b7160e01b87526022600452602487fd5b60a0880183905260c08801818015620040345760018114620040465762004072565b60ff1986168252878201965062004072565b60008d815260209020895b868110156200406c5781548482015290850190890162004051565b83019750505b50505050505080925050506200408c606083018562003d27565b8260808301529695505050505050565b600061012060018060a01b038c1683528a60208401528960408401528860608401528760808401528660a08401528560c08401528060e0840152620040e48184018662003cd9565b915050620040f761010083018462003d27565b9a9950505050505050505050565b602081526000620035e0602083018462003c6b565b871515815286602082015285604082015284606082015260018060a01b038416608082015260e060a082015260006200415760e083018562003cd9565b90506200416860c083018462003d27565b98975050505050505050565b602081526000620035e0602083018462003cd9565b6020810162000d60828462003d27565b60e081526000620041ae60e083018a62003cd9565b8281036020840152620041c2818a62003cd9565b90508281036040840152620041d8818962003cd9565b60ff979097166060840152505060808101939093526001600160a01b0391821660a08401521660c0909101529392505050565b60608152600062004220606083018662003cd9565b828103602084015262004234818662003cd9565b91505060ff83166040830152949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252601d908201527f52756e65526f757465724c6f6769633a207a65726f2061646472657373000000604082015260600190565b9182526001600160a01b0316602082015260400190565b8b81526001600160a01b038b1660208201526001600160e01b03198a81166040830152610120606083018190526000916200431f8483018d62003cd9565b9150838203608085015262004336828b8d62003cb0565b915080891660a0850152508660c084015282810360e08401526200435c81868862003cb0565b915050826101008301529c9b505050505050505050505050565b8981526001600160a01b03891660208201526001600160e01b0319888116604083015261012060608301819052600091620043b48483018b62003cd9565b91508382036080850152620043ca828a62003cd9565b915080881660a0850152508560c084015282810360e0840152620043ef818662003cd9565b915050826101008301529a9950505050505050505050565b60006101008b8352806020840152620044248184018b8d62003cb0565b604084019990995250506060810195909552608085019390935260a084019190915260c083015260e0909101529392505050565b86815285602082015260c0604082015260006200447960c083018762003c6b565b6001600160a01b03959095166060830152506080810192909252151560a0909101529392505050565b604051601f8201601f191681016001600160401b0381118282101715620044cd57620044cd620045a1565b604052919050565b60006001600160401b03821115620044f157620044f1620045a1565b5060051b60200190565b600082198211156200451157620045116200458b565b500190565b6000828210156200452b576200452b6200458b565b500390565b600181811c908216806200454557607f821691505b602082108114156200456757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200458457620045846200458b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620029fb57600080fdfe608060405260405162000f2c38038062000f2c8339810160408190526200002691620004e0565b82828282816200005860017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200060f565b60008051602062000ee5833981519152146200008457634e487b7160e01b600052600160045260246000fd5b620000928282600062000105565b50620000c2905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200060f565b60008051602062000ec583398151915214620000ee57634e487b7160e01b600052600160045260246000fd5b620000f98262000142565b50505050505062000678565b62000110836200019d565b6000825111806200011e5750805b156200013d576200013b8383620001df60201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200016d6200020e565b604080516001600160a01b03928316815291841660208301520160405180910390a16200019a8162000247565b50565b620001a881620002fc565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606062000207838360405180606001604052806027815260200162000f05602791396200039f565b9392505050565b60006200023860008051602062000ec583398151915260001b6200047c60201b620002081760201c565b546001600160a01b0316919050565b6001600160a01b038116620002b25760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002db60008051602062000ec583398151915260001b6200047c60201b620002081760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b62000312816200047f60201b6200028c1760201c565b620003765760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620002a9565b80620002db60008051602062000ee583398151915260001b6200047c60201b620002081760201c565b6060833b620004005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620002a9565b600080856001600160a01b0316856040516200041d9190620005bc565b600060405180830381855af49150503d80600081146200045a576040519150601f19603f3d011682016040523d82523d6000602084013e6200045f565b606091505b5090925090506200047282828662000485565b9695505050505050565b90565b3b151590565b606083156200049657508162000207565b825115620004a75782518084602001fd5b8160405162461bcd60e51b8152600401620002a99190620005da565b80516001600160a01b0381168114620004db57600080fd5b919050565b600080600060608486031215620004f5578283fd5b6200050084620004c3565b92506200051060208501620004c3565b60408501519092506001600160401b03808211156200052d578283fd5b818601915086601f83011262000541578283fd5b81518181111562000556576200055662000662565b604051601f8201601f19908116603f0116810190838211818310171562000581576200058162000662565b816040528281528960208487010111156200059a578586fd5b620005ad83602083016020880162000633565b80955050505050509250925092565b60008251620005d081846020870162000633565b9190910192915050565b6020815260008251806020840152620005fb81604085016020870162000633565b601f01601f19169190910160400192915050565b6000828210156200062e57634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156200065057818101518382015260200162000636565b838111156200013b5750506000910152565b634e487b7160e01b600052604160045260246000fd5b61083d80620006886000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b61008036600461068e565b610118565b61005b6100933660046106a8565b61015f565b3480156100a457600080fd5b506100ad6101d0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e436600461068e565b61020b565b3480156100f557600080fd5b506100ad610235565b610106610292565b610116610111610331565b61033b565b565b61012061035f565b6001600160a01b0316336001600160a01b031614156101575761015481604051806020016040528060008152506000610380565b50565b6101546100fe565b61016761035f565b6001600160a01b0316336001600160a01b031614156101c8576101c38383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610380915050565b505050565b6101c36100fe565b60006101da61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb610331565b905090565b6102086100fe565b90565b61021361035f565b6001600160a01b0316336001600160a01b0316141561015757610154816103ab565b600061023f61035f565b6001600160a01b0316336001600160a01b03161415610200576101fb61035f565b606061028583836040518060600160405280602781526020016107e1602791396103ff565b9392505050565b3b151590565b61029a61035f565b6001600160a01b0316336001600160a01b031614156101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101fb6104d3565b3660008037600080366000845af43d6000803e80801561035a573d6000f35b3d6000fd5b60006000805160206107a18339815191525b546001600160a01b0316919050565b610389836104e9565b6000825111806103965750805b156101c3576103a58383610260565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103d461035f565b604080516001600160a01b03928316815291841660208301520160405180910390a161015481610529565b6060833b61045e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610328565b600080856001600160a01b0316856040516104799190610725565b600060405180830381855af49150503d80600081146104b4576040519150601f19603f3d011682016040523d82523d6000602084013e6104b9565b606091505b50915091506104c98282866105c0565b9695505050505050565b60006000805160206107c1833981519152610371565b6104f2816105f9565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b03811661058e5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610328565b806000805160206107a18339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b606083156105cf575081610285565b8251156105df5782518084602001fd5b8160405162461bcd60e51b81526004016103289190610741565b803b61065d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610328565b806000805160206107c183398151915261059f565b80356001600160a01b038116811461068957600080fd5b919050565b60006020828403121561069f578081fd5b61028582610672565b6000806000604084860312156106bc578182fd5b6106c584610672565b925060208401356001600160401b03808211156106e0578384fd5b818601915086601f8301126106f3578384fd5b813581811115610701578485fd5b876020828501011115610712578485fd5b6020830194508093505050509250925092565b60008251610737818460208701610774565b9190910192915050565b6020815260008251806020840152610760816040850160208701610774565b601f01601f19169190910160400192915050565b60005b8381101561078f578181015183820152602001610777565b838111156103a5575050600091015256feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122064b11b2157d61600a09abbd0eaeb0a67e43f14e3005703114add6fac6fd353ec64736f6c63430008040033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a6fa5b59bae11f2b3c47f5355ec54b04831422cfaba778b1cd3c908988a9359864736f6c63430008040033"
  , g1 = b => typeof b[0] == "string" || Array.isArray(b[0]) || "_isInterface"in b[0]
  , H = class H extends F {
    constructor(...e) {
        if (g1(e))
            super(...e);
        else {
            const [a,n] = e;
            super(u0, H.linkBytecode(a), n)
        }
    }
    static linkBytecode(e) {
        let a = f6;
        return a = a.replace(new RegExp("__\\$67e4a81169bd42f3bd76691a8cba760d26\\$__","g"), e["contracts/rune_router/RuneRouterLib.sol:RuneRouterLib"].replace(/^0x/, "").toLowerCase()),
        a
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(u0)
    }
    static connect(e, a) {
        return new g(e,u0,a)
    }
}
;
u(H, "bytecode", f6),
u(H, "abi", u0);
let N0 = H;
const y0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "locker",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "stakingPercentage",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "rewardToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "stakingPeriod",
        type: "uint256"
    }],
    name: "LockerRegisteredForStaking",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Paused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "caller",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "locker",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "rewardToken",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "RewardClaimed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "locker",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "rewardToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256"
    }],
    name: "RewardDeposited",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "caller",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "locker",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "rewardToken",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "unstakingTime",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "totalStakedAmount",
        type: "uint256"
    }],
    name: "TstStaked",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "caller",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "locker",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "totalUnstakedAmount",
        type: "uint256"
    }],
    name: "TstUnstaked",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "Unpaused",
    type: "event"
}, {
    inputs: [],
    name: "MAX_STAKING_PERCENTAGE",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "PERCISION",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "TST",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_controller",
        type: "address"
    }],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "depositReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "getStakingPosition",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "getUnclaimedReward",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_TST",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "isController",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "",
        type: "uint64"
    }, {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }],
    name: "onOFTReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "paused",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_stakingPercentage",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_stakingPeriod",
        type: "uint256"
    }],
    name: "registerLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_controller",
        type: "address"
    }],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_TST",
        type: "address"
    }],
    name: "setTst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "stakingInfo",
    outputs: [{
        internalType: "uint256",
        name: "stakingPercentage",
        type: "uint256"
    }, {
        internalType: "address",
        name: "rewardToken",
        type: "address"
    }, {
        internalType: "uint256",
        name: "totalStakedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "totalReward",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "totalClaimedReward",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "currentRewardPerToken",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "stakingPeriod",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "stakingPosition",
    outputs: [{
        internalType: "uint256",
        name: "stakedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "unstakedAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "unstakingTime",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "claimedReward",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "initRewardPerToken",
        type: "uint256"
    }, {
        internalType: "address",
        name: "controller",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "_user",
        type: "address"
    }],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_locker",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_stakingPercentage",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_stakingPeriod",
        type: "uint256"
    }],
    name: "updateRegisteredLocker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}]
  , i6 = "0x608060405234801561001057600080fd5b5061273d806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063926e31d61161011a578063c4d66de8116100ad578063ed31520d1161007c578063ed31520d1461055d578063ed6e237114610570578063f2fde38b146105a3578063f6a74ed7146105b6578063fde04281146105c957600080fd5b8063c4d66de814610511578063d263cef314610524578063dd62ed3e14610537578063e3daba711461054a57600080fd5b8063a7fc7a07116100e9578063a7fc7a07146104b5578063a9059cbb146104c8578063b429afeb146104db578063c3c8f2f0146104fe57600080fd5b8063926e31d6146103f557806394eecb501461040857806395d89b411461049a578063a457c2d7146104a257600080fd5b80634953c7821161019d57806370a082311161016c57806370a0823114610379578063715018a6146103a25780637db4e28f146103aa5780637fcf35da146103bd5780638da5cb5b146103d057600080fd5b80634953c782146102bb57806356463299146102ce5780635c975abb146102e15780636e8dd839146102ec57600080fd5b806323b872dd116101d957806323b872dd14610273578063294091cd14610286578063313ce5671461029957806339509351146102a857600080fd5b806306fdde031461020b578063095ea7b3146102295780630cf7ea8f1461024c57806318160ddd14610261575b600080fd5b6102136105d2565b6040516102209190612220565b60405180910390f35b61023c61023736600461226f565b610664565b6040519015158152602001610220565b61025f61025a366004612299565b61067c565b005b60cb545b604051908152602001610220565b61023c6102813660046122cc565b6106ef565b61025f610294366004612308565b610715565b60405160128152602001610220565b61023c6102b636600461226f565b610a19565b61025f6102c9366004612344565b610a3b565b6102656102dc366004612344565b610bf2565b60975460ff1661023c565b6103436102fa366004612344565b60fb60209081526000928352604080842090915290825290208054600182015460028301546003840154600485015460059095015493949293919290916001600160a01b031686565b60408051968752602087019590955293850192909252606084015260808301526001600160a01b031660a082015260c001610220565b610265610387366004612377565b6001600160a01b0316600090815260c9602052604090205490565b61025f610c92565b61025f6103b836600461226f565b610ca6565b61025f6103cb366004612435565b610ee1565b6065546001600160a01b03165b6040516001600160a01b039091168152602001610220565b61025f610403366004612308565b610f14565b61045d610416366004612377565b60fc60205260009081526040902080546001820154600283015460038401546004850154600586015460069096015494956001600160a01b03909416949293919290919087565b604080519788526001600160a01b039096166020880152948601939093526060850191909152608084015260a083015260c082015260e001610220565b61021361126f565b61023c6104b036600461226f565b61127e565b61025f6104c3366004612377565b611304565b61023c6104d636600461226f565b611330565b61023c6104e9366004612377565b60fe6020526000908152604090205460ff1681565b6102656b033b2e3c9fd0803ce800000081565b61025f61051f366004612377565b61133e565b61025f610532366004612377565b6114a7565b610265610545366004612344565b6114d1565b60fd546103dd906001600160a01b031681565b61025f61056b3660046124de565b6114fc565b61058361057e366004612344565b611653565b604080519485526020850193909352918301526060820152608001610220565b61025f6105b1366004612377565b6116aa565b61025f6105c4366004612377565b611723565b61026561271081565b606060cc80546105e190612522565b80601f016020809104026020016040519081016040528092919081815260200182805461060d90612522565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b60003361067281858561174c565b5060019392505050565b610684611868565b6001600160a01b03838116600081815260fc602090815260409182902086815560068101869055600101548251878152918201869052909316927f6adcd71da76e0a69ed435c9ba83e788ac1a11abf12d5ddce101edeebae1e8cd291015b60405180910390a3505050565b6000336106fd8582856118c2565b61070885858561193c565b60019150505b9392505050565b61071d61198e565b6107256119d4565b6001600160a01b038316600090815260fc60205260409020546107635760405162461bcd60e51b815260040161075a9061255d565b60405180910390fd5b6001600160a01b0381163314610820576001600160a01b03838116600090815260fb60209081526040808320858516845290915290206005015416156107f1576001600160a01b03838116600090815260fb6020908152604080832085851684529091529020600501541633146107ec5760405162461bcd60e51b815260040161075a9061259e565b610820565b33600090815260fe602052604090205460ff166108205760405162461bcd60e51b815260040161075a9061259e565b60fd54610838906001600160a01b0316333085611a2e565b6001600160a01b038316600090815260fc6020526040812060020180548492906108639084906125eb565b90915550506001600160a01b038316600090815260fc602052604090206006015461088e90426125eb565b6001600160a01b03848116600090815260fb602090815260408083209386168352929052206002810191909155546108c79083906125eb565b6001600160a01b038416600090815260fc60205260409020600501546108ee908490612603565b6001600160a01b03858116600090815260fb60209081526040808320938716835292905220600481015490546109249190612603565b61092e91906125eb565b6109389190612622565b6001600160a01b03848116600090815260fb60209081526040808320938616835292905290812060048101929092558154849291906109789084906125eb565b9091555061098890508183611a99565b6001600160a01b03838116600081815260fc602090815260408083206001015460fb8352818420878716808652908452938290206002810154905483513381529485018a9052848401919091526060840152905192941692917ffbf2a04e1b9d1d59c31693e240cdbfbcb171dbf5f121836b299389192ea461969181900360800190a4610a1460018055565b505050565b600033610672818585610a2c83836114d1565b610a3691906125eb565b61174c565b610a4361198e565b610a4b6119d4565b6001600160a01b0381163314610aa4576001600160a01b03828116600090815260fb602090815260408083208585168452909152902060050154163314610aa45760405162461bcd60e51b815260040161075a9061259e565b6001600160a01b038216600090815260fc6020526040902054610ad95760405162461bcd60e51b815260040161075a9061255d565b6000610ae58383610bf2565b90508015610be4576001600160a01b03808416600090815260fb6020908152604080832093861683529290529081206003018054839290610b279084906125eb565b90915550506001600160a01b038316600090815260fc602052604081206004018054839290610b579084906125eb565b90915550506001600160a01b03808416600090815260fc6020526040902060010154610b8591168383611b60565b6001600160a01b03838116600081815260fc6020908152604091829020600101548251338152918201869052868516941692917f3c7cf01a909d99baa17e8a20a6b1313defa27faddbf794dd957e2e3945429131910160405180910390a45b50610bee60018055565b5050565b6001600160a01b03808316600081815260fb602090815260408083209486168352938152838220600381015460049091015493835260fc909152928120600501549092916b033b2e3c9fd0803ce800000091610c4e9190612644565b6001600160a01b03808716600090815260fb6020908152604080832093891683529290522054610c7e9190612603565b610c889190612622565b61070e9190612644565b610c9a611868565b610ca46000611b90565b565b610cae6119d4565b6001600160a01b038216600090815260fc6020526040902054610d48576001600160a01b03808316600090815260fc6020526040902060010154610cf59116338484611a2e565b604080513381526020810183905260009181018290526001600160a01b038416907faa83330f31f55b682a58c00b453d9ed38fdeddca3a81e4d8cb07527b8e94e4039060600160405180910390a3610ed8565b6001600160a01b03808316600090815260fc6020526040902060010154610d729116333084611a2e565b6001600160a01b038216600090815260fc602052604081205461271090610d999084612603565b610da39190612622565b9050610dd883610db38385612644565b6001600160a01b03808716600090815260fc6020526040902060010154169190611b60565b6001600160a01b038316600090815260fc602052604081206003018054839290610e039084906125eb565b90915550506001600160a01b038316600090815260fc6020526040902060020154610e3a826b033b2e3c9fd0803ce8000000612603565b610e449190612622565b6001600160a01b038416600090815260fc602052604081206005018054909190610e6f9084906125eb565b90915550506001600160a01b03838116600081815260fc60209081526040918290206001015482513381529182018790529181018590529216917faa83330f31f55b682a58c00b453d9ed38fdeddca3a81e4d8cb07527b8e94e4039060600160405180910390a3505b610bee60018055565b6000610eee826000611be2565b90506000610efd836014611be2565b9050610f0a828583610715565b5050505050505050565b610f1c61198e565b610f246119d4565b6001600160a01b0381163314610f7d576001600160a01b03838116600090815260fb602090815260408083208585168452909152902060050154163314610f7d5760405162461bcd60e51b815260040161075a9061259e565b6001600160a01b038316600090815260fc6020526040902054610fb25760405162461bcd60e51b815260040161075a9061255d565b6001600160a01b03808416600090815260fb60209081526040808320938516835292905220548211156110365760405162461bcd60e51b815260206004820152602660248201527f5473745374616b696e673a20696e73756666696369656e74207374616b656420604482015265185b5bdd5b9d60d21b606482015260840161075a565b6001600160a01b03808416600090815260fb60209081526040808320938516835292905220600201544210156110ba5760405162461bcd60e51b815260206004820152602360248201527f5473745374616b696e673a207374616b696e6720706572696f64206e6f74206f6044820152623b32b960e91b606482015260840161075a565b816110da826001600160a01b0316600090815260c9602052604090205490565b10156111285760405162461bcd60e51b815260206004820152601e60248201527f5473745374616b696e673a20696e73756666696369656e742076655453540000604482015260640161075a565b6111328183611c47565b61113c8382610a3b565b6001600160a01b03808416600090815260fb60209081526040808320938516835292905290812060010180548492906111769084906125eb565b90915550506001600160a01b03808416600090815260fb60209081526040808320938516835292905290812080548492906111b2908490612644565b90915550506001600160a01b038316600090815260fc6020526040812060020180548492906111e2908490612644565b909155505060fd546111fe906001600160a01b03168284611b60565b6001600160a01b03838116600081815260fb60209081526040808320948616808452948252918290206001015482513381529182018790528183015290517f38efb8b40bc11661445a0afe2ce21ad67a59ed188f8158cf68a4f5a0de7e71029181900360600190a3610a1460018055565b606060cd80546105e190612522565b6000338161128c82866114d1565b9050838110156112ec5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161075a565b6112f9828686840361174c565b506001949350505050565b61130c611868565b6001600160a01b0316600090815260fe60205260409020805460ff19166001179055565b60003361067281858561193c565b600054610100900460ff161580801561135e5750600054600160ff909116105b806113785750303b158015611378575060005460ff166001145b6113db5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161075a565b6000805460ff1916600117905580156113fe576000805461ff0019166101001790555b611406611d7b565b61140e611daa565b611416611dd9565b6114556040518060600160405280602381526020016126e560239139604051806040016040528060058152602001641d995514d560da1b815250611e08565b61145e826114a7565b8015610bee576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6114af611868565b60fd80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260ca6020908152604080832093909416825291909152205490565b611504611868565b6127108311156115655760405162461bcd60e51b815260206004820152602660248201527f5473745374616b696e673a20696e76616c6964207374616b696e672070657263604482015265656e7461676560d01b606482015260840161075a565b6001600160a01b038416600090815260fc6020526040902054156115d95760405162461bcd60e51b815260206004820152602560248201527f5473745374616b696e673a206c6f636b657220616c72656164792072656769736044820152641d195c995960da1b606482015260840161075a565b6001600160a01b03848116600081815260fc60209081526040918290208781556001810180546001600160a01b031916958816958617905560060185905581518781529081018590527f6adcd71da76e0a69ed435c9ba83e788ac1a11abf12d5ddce101edeebae1e8cd2910160405180910390a350505050565b6001600160a01b03828116600090815260fb6020908152604080832093851683529290529081208054600282015460039092015483928392839290919061169a8989610bf2565b9299919850965090945092505050565b6116b2611868565b6001600160a01b0381166117175760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161075a565b61172081611b90565b50565b61172b611868565b6001600160a01b0316600090815260fe60205260409020805460ff19169055565b6001600160a01b0383166117ae5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161075a565b6001600160a01b03821661180f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161075a565b6001600160a01b03838116600081815260ca602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591016106e2565b6065546001600160a01b03163314610ca45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075a565b60006118ce84846114d1565b9050600019811461193657818110156119295760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161075a565b611936848484840361174c565b50505050565b60405162461bcd60e51b815260206004820152602160248201527f5473745374616b696e673a207472616e7366657273206e6f7420616c6c6f77656044820152601960fa1b606482015260840161075a565b60975460ff1615610ca45760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161075a565b60026001541415611a275760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161075a565b6002600155565b6040516001600160a01b03808516602483015283166044820152606481018290526119369085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611e39565b6001600160a01b038216611aef5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161075a565b8060cb6000828254611b0191906125eb565b90915550506001600160a01b038216600081815260c960209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60018055565b6040516001600160a01b038316602482015260448101829052610a1490849063a9059cbb60e01b90606401611a62565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000611bef8260146125eb565b83511015611c375760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015260640161075a565b500160200151600160601b900490565b6001600160a01b038216611ca75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161075a565b6001600160a01b038216600090815260c9602052604090205481811015611d1b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161075a565b6001600160a01b038316600081815260c960209081526040808320868603905560cb80548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600054610100900460ff16611da25760405162461bcd60e51b815260040161075a9061265b565b610ca4611f0b565b600054610100900460ff16611dd15760405162461bcd60e51b815260040161075a9061265b565b610ca4611f3b565b600054610100900460ff16611e005760405162461bcd60e51b815260040161075a9061265b565b610ca4611f62565b600054610100900460ff16611e2f5760405162461bcd60e51b815260040161075a9061265b565b610bee8282611f95565b6000611e8e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611fe39092919063ffffffff16565b805190915015610a145780806020019051810190611eac91906126a6565b610a145760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161075a565b600054610100900460ff16611f325760405162461bcd60e51b815260040161075a9061265b565b610ca433611b90565b600054610100900460ff16611b5a5760405162461bcd60e51b815260040161075a9061265b565b600054610100900460ff16611f895760405162461bcd60e51b815260040161075a9061265b565b6097805460ff19169055565b600054610100900460ff16611fbc5760405162461bcd60e51b815260040161075a9061265b565b8151611fcf9060cc90602085019061215b565b508051610a149060cd90602084019061215b565b6060611ff28484600085611ffa565b949350505050565b60608247101561205b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161075a565b843b6120a95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161075a565b600080866001600160a01b031685876040516120c591906126c8565b60006040518083038185875af1925050503d8060008114612102576040519150601f19603f3d011682016040523d82523d6000602084013e612107565b606091505b5091509150612117828286612122565b979650505050505050565b6060831561213157508161070e565b8251156121415782518084602001fd5b8160405162461bcd60e51b815260040161075a9190612220565b82805461216790612522565b90600052602060002090601f01602090048101928261218957600085556121cf565b82601f106121a257805160ff19168380011785556121cf565b828001600101855582156121cf579182015b828111156121cf5782518255916020019190600101906121b4565b506121db9291506121df565b5090565b5b808211156121db57600081556001016121e0565b60005b8381101561220f5781810151838201526020016121f7565b838111156119365750506000910152565b602081526000825180602084015261223f8160408501602087016121f4565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461226a57600080fd5b919050565b6000806040838503121561228257600080fd5b61228b83612253565b946020939093013593505050565b6000806000606084860312156122ae57600080fd5b6122b784612253565b95602085013595506040909401359392505050565b6000806000606084860312156122e157600080fd5b6122ea84612253565b92506122f860208501612253565b9150604084013590509250925092565b60008060006060848603121561231d57600080fd5b61232684612253565b92506020840135915061233b60408501612253565b90509250925092565b6000806040838503121561235757600080fd5b61236083612253565b915061236e60208401612253565b90509250929050565b60006020828403121561238957600080fd5b61070e82612253565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126123b957600080fd5b813567ffffffffffffffff808211156123d4576123d4612392565b604051601f8301601f19908116603f011681019082821181831017156123fc576123fc612392565b8160405283815286602085880101111561241557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c0878903121561244e57600080fd5b863561ffff8116811461246057600080fd5b9550602087013567ffffffffffffffff8082111561247d57600080fd5b6124898a838b016123a8565b96506040890135915080821682146124a057600080fd5b909450606088013593506080880135925060a088013590808211156124c457600080fd5b506124d189828a016123a8565b9150509295509295509295565b600080600080608085870312156124f457600080fd5b6124fd85612253565b93506020850135925061251260408601612253565b9396929550929360600135925050565b600181811c9082168061253657607f821691505b6020821081141561255757634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526021908201527f5473745374616b696e673a206c6f636b6572206e6f74207265676973746572656040820152601960fa1b606082015260800190565b6020808252601a908201527f5473745374616b696e673a206e6f7420636f6e74726f6c6c6572000000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156125fe576125fe6125d5565b500190565b600081600019048311821515161561261d5761261d6125d5565b500290565b60008261263f57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015612656576126566125d5565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000602082840312156126b857600080fd5b8151801515811461070e57600080fd5b600082516126da8184602087016121f4565b919091019291505056fe566f746520457363726f7765642054656c65706f72742053797374656d20546f6b656ea26469706673582212207c9e4313a513effb0c3e41ec8a5f819a20ab40b0e59e3f4acb44598f4e8f211a64736f6c63430008090033";
class D0 extends F {
    constructor(...e) {
        e.length === 1 ? super(y0, i6, e[0]) : super(...e)
    }
    deploy(e) {
        return super.deploy(e || {})
    }
    getDeployTransaction(e) {
        return super.getDeployTransaction(e || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(y0)
    }
    static connect(e, a) {
        return new g(e,y0,a)
    }
}
u(D0, "bytecode", i6),
u(D0, "abi", y0);
const l0 = [{
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
    }, {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
    }],
    name: "CallOFTReceivedSuccess",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_reason",
        type: "bytes"
    }],
    name: "MessageFailed",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "_address",
        type: "address"
    }],
    name: "NonContractAddress",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        indexed: !0,
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "ReceiveFromChain",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32"
    }],
    name: "RetryMessageSuccess",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        indexed: !0,
        internalType: "address",
        name: "_from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "SendToChain",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
    }],
    name: "SetDefaultFeeBp",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "dstchainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "enabled",
        type: "bool"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
    }],
    name: "SetFeeBp",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "feeOwner",
        type: "address"
    }],
    name: "SetFeeOwner",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "_type",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_minDstGas",
        type: "uint256"
    }],
    name: "SetMinDstGas",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "precrime",
        type: "address"
    }],
    name: "SetPrecrime",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_path",
        type: "bytes"
    }],
    name: "SetTrustedRemote",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
    }],
    name: "SetTrustedRemoteAddress",
    type: "event"
}, {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "DEFAULT_PAYLOAD_SIZE_LIMIT",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "NO_EXTRA_GAS",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "PT_SEND",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "PT_SEND_AND_CALL",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }, {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
    }],
    name: "callOnOFTReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    name: "chainIdToFeeBps",
    outputs: [{
        internalType: "uint16",
        name: "feeBP",
        type: "uint16"
    }, {
        internalType: "bool",
        name: "enabled",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "circulatingSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    name: "creditedPackets",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "defaultFeeBp",
    outputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
    }, {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
    }, {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
    }],
    name: "estimateSendAndCallFee",
    outputs: [{
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
    }, {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
    }],
    name: "estimateSendFee",
    outputs: [{
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    name: "failedMessages",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeOwner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_version",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
    }],
    name: "getConfig",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
    }],
    name: "getTrustedRemoteAddress",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }, {
        internalType: "uint8",
        name: "_sharedDecimals",
        type: "uint8"
    }, {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }],
    name: "isTrustedRemote",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "lzEndpoint",
    outputs: [{
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    name: "minDstGasLookup",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }],
    name: "nonblockingLzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "outboundAmount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    name: "payloadSizeLimitLookup",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "precrime",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }],
    name: "quoteOFTFee",
    outputs: [{
        internalType: "uint256",
        name: "fee",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }],
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_from",
        type: "address"
    }, {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
    }, {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
    }, {
        components: [{
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
        }, {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
        }, {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
        }],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
    }],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_from",
        type: "address"
    }, {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
    }, {
        components: [{
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
        }, {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
        }, {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
        }],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
    }],
    name: "sendFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_version",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
    }, {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
    }],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
    }],
    name: "setDefaultFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "bool",
        name: "_enabled",
        type: "bool"
    }, {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
    }],
    name: "setFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_feeOwner",
        type: "address"
    }],
    name: "setFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "_packetType",
        type: "uint16"
    }, {
        internalType: "uint256",
        name: "_minGas",
        type: "uint256"
    }],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
    }, {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
    }],
    name: "setPayloadSizeLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_precrime",
        type: "address"
    }],
    name: "setPrecrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_version",
        type: "uint16"
    }],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_version",
        type: "uint16"
    }],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_path",
        type: "bytes"
    }],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
    }, {
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
    }],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "sharedDecimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "token",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    name: "trustedRemoteLookup",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}]
  , s6 = "0x60806040523480156200001157600080fd5b5060405162004c8438038062004c848339810160408190526200003491620002ea565b82828281818181808062000048336200026b565b600180546001600160a01b0319166001600160a01b039283161790556007805460ff191660ff9590951694909417909355505060005416600a805462010000600160b01b031916620100006001600160a01b0393841602179055600b80546001600160a01b0319169187169182179055604080516004815260248101825260208101805163313ce56760e01b6001600160e01b03909116179052905160009450849350620000f7919062000334565b600060405180830381855afa9150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b509150915081620001a75760405162461bcd60e51b815260206004820152602d60248201527f50726f78794f4654576974684665653a206661696c656420746f20676574207460448201526c6f6b656e20646563696d616c7360981b60648201526084015b60405180910390fd5b600081806020019051810190620001bf919062000372565b90508060ff168560ff1611156200023f5760405162461bcd60e51b815260206004820152603360248201527f50726f78794f4654576974684665653a20736861726564446563696d616c732060448201527f6d757374206265203c3d20646563696d616c730000000000000000000000000060648201526084016200019e565b6200024b8582620003ad565b6200025890600a620004d2565b600c5550620004e3975050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620002d357600080fd5b919050565b805160ff81168114620002d357600080fd5b6000806000606084860312156200030057600080fd5b6200030b84620002bb565b92506200031b60208501620002d8565b91506200032b60408501620002bb565b90509250925092565b6000825160005b818110156200035757602081860181015185830152016200033b565b8181111562000367576000828501525b509190910192915050565b6000602082840312156200038557600080fd5b6200039082620002d8565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff841680821015620003ca57620003ca62000397565b90039392505050565b600181815b8085111562000414578160001904821115620003f857620003f862000397565b808516156200040657918102915b93841c9390800290620003d8565b509250929050565b6000826200042d57506001620004cc565b816200043c57506000620004cc565b8160018114620004555760028114620004605762000480565b6001915050620004cc565b60ff84111562000474576200047462000397565b50506001821b620004cc565b5060208310610133831016604e8410600b8410161715620004a5575081810a620004cc565b620004b18383620003d3565b8060001904821115620004c857620004c862000397565b0290505b92915050565b60006200039060ff8416836200041c565b61479180620004f36000396000f3fe6080604052600436106102ad5760003560e01c80639358928b11610175578063c83330ce116100dc578063eaffd49a11610095578063f2fde38b1161006f578063f2fde38b146108f5578063f35f9e4514610915578063f5ecbdbc14610935578063fc0c546a1461095557600080fd5b8063eaffd49a14610895578063eb8d72b7146108b5578063ecd8f212146108d557600080fd5b8063c83330ce146107a9578063cbed8b9c146107ff578063d1deba1f1461081f578063d888296814610832578063df2a5b3b14610860578063e6a20ae61461088057600080fd5b8063a6c3d1651161012e578063a6c3d1651461070d578063abe685cd1461072d578063b353aaa714610743578063b9818be114610763578063baf3292d14610789578063c44618341461072d57600080fd5b80639358928b14610630578063950c8a74146106455780639689cb05146106655780639bdb98121461067b5780639f38369a146106cd578063a4c51df5146106ed57600080fd5b80634b104eff11610219578063715018a6116101d2578063715018a61461054a5780637533d7881461055f57806379c0ad4b1461058c578063857749b0146105ac5780638cfd8f5c146105c65780638da5cb5b146105fe57600080fd5b80634b104eff146104545780634c42899a146104745780635312ea8e1461049b5780635a359dc5146104bb5780635b8c41e6146104db57806366ad5c8a1461052a57600080fd5b8063365260b41161026b578063365260b41461037c5780633d8b38f6146103b15780633f1f4fa4146103d157806342d65a8d1461040c578063447705151461042c578063455ba27d1461044157600080fd5b80621d3567146102b257806301ffc9a7146102d457806307e0db17146103095780630df374831461032957806310ddb137146103495780632cdf0b9514610369575b600080fd5b3480156102be57600080fd5b506102d26102cd3660046137e7565b610973565b005b3480156102e057600080fd5b506102f46102ef36600461387a565b610b8f565b60405190151581526020015b60405180910390f35b34801561031557600080fd5b506102d26103243660046138a4565b610bc6565b34801561033557600080fd5b506102d26103443660046138bf565b610c33565b34801561035557600080fd5b506102d26103643660046138a4565b610c52565b6102d2610377366004613916565b610c8e565b34801561038857600080fd5b5061039c61039736600461399f565b610d39565b60408051928352602083019190915201610300565b3480156103bd57600080fd5b506102f46103cc366004613a06565b610d8e565b3480156103dd57600080fd5b506103fe6103ec3660046138a4565b60046020526000908152604090205481565b604051908152602001610300565b34801561041857600080fd5b506102d2610427366004613a06565b610e5b565b34801561043857600080fd5b506103fe600081565b6102d261044f366004613a58565b610ec5565b34801561046057600080fd5b506102d261046f366004613b14565b610fa6565b34801561048057600080fd5b50610489600081565b60405160ff9091168152602001610300565b3480156104a757600080fd5b506102d26104b6366004613b31565b611063565b3480156104c757600080fd5b506102d26104d63660046138a4565b6110a8565b3480156104e757600080fd5b506103fe6104f6366004613bb7565b6006602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561053657600080fd5b506102d26105453660046137e7565b61111a565b34801561055657600080fd5b506102d26111ee565b34801561056b57600080fd5b5061057f61057a3660046138a4565b611202565b6040516103009190613caf565b34801561059857600080fd5b506102d26105a7366004613cc2565b61129c565b3480156105b857600080fd5b506007546104899060ff1681565b3480156105d257600080fd5b506103fe6105e1366004613cfe565b600360209081526000928352604080842090915290825290205481565b34801561060a57600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610300565b34801561063c57600080fd5b506103fe611358565b34801561065157600080fd5b50600554610618906001600160a01b031681565b34801561067157600080fd5b506103fe600d5481565b34801561068757600080fd5b506102f4610696366004613bb7565b6008602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205460ff1681565b3480156106d957600080fd5b5061057f6106e83660046138a4565b6113e8565b3480156106f957600080fd5b5061039c610708366004613d31565b6114f8565b34801561071957600080fd5b506102d2610728366004613a06565b611587565b34801561073957600080fd5b506103fe61271081565b34801561074f57600080fd5b50600154610618906001600160a01b031681565b34801561076f57600080fd5b50600a54610618906201000090046001600160a01b031681565b34801561079557600080fd5b506102d26107a4366004613b14565b61160d565b3480156107b557600080fd5b506107e56107c43660046138a4565b60096020526000908152604090205461ffff81169062010000900460ff1682565b6040805161ffff9093168352901515602083015201610300565b34801561080b57600080fd5b506102d261081a366004613dee565b611663565b6102d261082d3660046137e7565b6116d1565b34801561083e57600080fd5b50600a5461084d9061ffff1681565b60405161ffff9091168152602001610300565b34801561086c57600080fd5b506102d261087b366004613e5c565b6118e7565b34801561088c57600080fd5b50610489600181565b3480156108a157600080fd5b506102d26108b0366004613e98565b611951565b3480156108c157600080fd5b506102d26108d0366004613a06565b611a70565b3480156108e157600080fd5b506103fe6108f03660046138bf565b611aca565b34801561090157600080fd5b506102d2610910366004613b14565b611b5c565b34801561092157600080fd5b506102d2610930366004613f6f565b611bd2565b34801561094157600080fd5b5061057f610950366004613fba565b611ede565b34801561096157600080fd5b50600b546001600160a01b0316610618565b6001546001600160a01b0316336001600160a01b0316146109db5760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff8616600090815260026020526040812080546109f990614007565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2590614007565b8015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b50505050509050805186869050148015610a8d575060008151115b8015610ab5575080516020820120604051610aab908890889061403c565b6040518091039020145b610b105760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b60648201526084016109d2565b610b868787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611f8292505050565b50505050505050565b60006001600160e01b03198216630d30953d60e31b1480610bc057506301ffc9a760e01b6001600160e01b03198316145b92915050565b610bce611ffb565b6001546040516307e0db1760e01b815261ffff831660048201526001600160a01b03909116906307e0db17906024015b600060405180830381600087803b158015610c1857600080fd5b505af1158015610c2c573d6000803e3d6000fd5b5050505050565b610c3b611ffb565b61ffff909116600090815260046020526040902055565b610c5a611ffb565b6001546040516310ddb13760e01b815261ffff831660048201526001600160a01b03909116906310ddb13790602401610bfe565b610c96611ffb565b610ca1868685612055565b509250610d0f86868686610cb86020870187613b14565b610cc86040880160208901613b14565b610cd5604089018961404c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061209e92505050565b925081831015610d315760405162461bcd60e51b81526004016109d290614092565b505050505050565b600080610d7f8888888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121c292505050565b91509150965096945050505050565b61ffff831660009081526002602052604081208054829190610daf90614007565b80601f0160208091040260200160405190810160405280929190818152602001828054610ddb90614007565b8015610e285780601f10610dfd57610100808354040283529160200191610e28565b820191906000526020600020905b815481529060010190602001808311610e0b57829003601f168201915b505050505090508383604051610e3f92919061403c565b60405180910390208180519060200120149150505b9392505050565b610e63611ffb565b6001546040516342d65a8d60e01b81526001600160a01b03909116906342d65a8d90610e9790869086908690600401614108565b600060405180830381600087803b158015610eb157600080fd5b505af1158015610b86573d6000803e3d6000fd5b610ed0898988612055565b5080965050610f798989898988888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250610f229150506020890189613b14565b610f3260408a0160208b01613b14565b610f3f60408b018b61404c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061226b92505050565b955084861015610f9b5760405162461bcd60e51b81526004016109d290614092565b505050505050505050565b610fae611ffb565b6001600160a01b0381166110045760405162461bcd60e51b815260206004820152601a60248201527f4665653a206665654f776e65722063616e6e6f7420626520307800000000000060448201526064016109d2565b600a805462010000600160b01b031916620100006001600160a01b038416908102919091179091556040519081527f047912631afa564eebd3db2efe191a0dec62da1fede6bbbc1ffc89d87845b1b5906020015b60405180910390a150565b61106b611ffb565b80600d600082825461107d919061413c565b90915550506000546110a5906001600160a01b0316600b546001600160a01b03169083612367565b50565b6110b0611ffb565b6127108161ffff1611156110d65760405162461bcd60e51b81526004016109d290614153565b600a805461ffff191661ffff83169081179091556040519081527fd26030ef4a8c225ee12b646eb4466acb41fb96b6cd4660b22d0ba0124e7bdc7490602001611058565b3330146111785760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b60648201526084016109d2565b610d318686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8901819004810282018101909252878152899350915087908790819084018382808284376000920191909152506123cf92505050565b6111f6611ffb565b6112006000612456565b565b6002602052600090815260409020805461121b90614007565b80601f016020809104026020016040519081016040528092919081815260200182805461124790614007565b80156112945780601f1061126957610100808354040283529160200191611294565b820191906000526020600020905b81548152906001019060200180831161127757829003601f168201915b505050505081565b6112a4611ffb565b6127108161ffff1611156112ca5760405162461bcd60e51b81526004016109d290614153565b60408051808201825261ffff83811680835285151560208085018281528985166000818152600984528890209651875492511515620100000262ffffff1990931696169590951717909455845192835292820192909252918201527fdd9c9685af3e6dcb56d8f4b88d2595d4add6837a150034e7781c46b6dcf8aaab906060015b60405180910390a1505050565b600d54600b54604080516318160ddd60e01b81529051600093926001600160a01b0316916318160ddd916004808301926020929190829003018186803b1580156113a157600080fd5b505afa1580156113b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d99190614198565b6113e3919061413c565b905090565b61ffff811660009081526002602052604081208054606092919061140b90614007565b80601f016020809104026020016040519081016040528092919081815260200182805461143790614007565b80156114845780601f1061145957610100808354040283529160200191611484565b820191906000526020600020905b81548152906001019060200180831161146757829003601f168201915b505050505090508051600014156114dd5760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f726400000060448201526064016109d2565b610e546000601483516114f0919061413c565b8391906124a6565b6000806115758b8b8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8d018190048102820181019092528b81528e93508d9250908c908c90819084018382808284376000920191909152506125b392505050565b91509150995099975050505050505050565b61158f611ffb565b8181306040516020016115a4939291906141b1565b60408051601f1981840301815291815261ffff851660009081526002602090815291902082516115d993919290910190613664565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce83838360405161134b93929190614108565b611615611ffb565b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b90602001611058565b61166b611ffb565b6001546040516332fb62e760e21b81526001600160a01b039091169063cbed8b9c906116a390889088908890889088906004016141d7565b600060405180830381600087803b1580156116bd57600080fd5b505af1158015610f9b573d6000803e3d6000fd5b61ffff861660009081526006602052604080822090516116f4908890889061403c565b90815260408051602092819003830190206001600160401b038716600090815292529020549050806117745760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b60648201526084016109d2565b80838360405161178592919061403c565b6040518091039020146117e45760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b60648201526084016109d2565b61ffff87166000908152600660205260408082209051611807908990899061403c565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f8801829004820283018201905286825261189f918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a9350915088908890819084018382808284376000920191909152506123cf92505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e587878787856040516118d6959493929190614205565b60405180910390a150505050505050565b6118ef611ffb565b61ffff83811660008181526003602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac09060600161134b565b3330146119a05760405162461bcd60e51b815260206004820152601f60248201527f4f4654436f72653a2063616c6c6572206d757374206265204f4654436f72650060448201526064016109d2565b6119ab30868661265f565b9350846001600160a01b03168a61ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf866040516119ed91815260200190565b60405180910390a3604051633fe79aed60e11b81526001600160a01b03861690637fcf35da908390611a31908e908e908e908e908e908d908d908d90600401614240565b600060405180830381600088803b158015611a4b57600080fd5b5087f1158015611a5f573d6000803e3d6000fd5b505050505050505050505050505050565b611a78611ffb565b61ffff83166000908152600260205260409020611a969083836136e8565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab83838360405161134b93929190614108565b61ffff828116600090815260096020908152604080832081518083019092525493841681526201000090930460ff1615801591840191909152909190611b2f57805161271090611b1e9061ffff168561429b565b611b2891906142d0565b9150611b55565b600a5461ffff1615611b5057600a5461271090611b1e9061ffff168561429b565b600091505b5092915050565b611b64611ffb565b6001600160a01b038116611bc95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109d2565b6110a581612456565b600e54610100900460ff1615808015611bf25750600e54600160ff909116105b80611c0c5750303b158015611c0c5750600e5460ff166001145b611c6f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016109d2565b600e805460ff191660011790558015611c9257600e805461ff0019166101001790555b611c9b33612456565b600180546001600160a01b0319166001600160a01b03848116919091179091556007805460ff191660ff861617905560005416600a805462010000600160b01b031916620100006001600160a01b0393841602179055600b80546001600160a01b0319169186169182179055604080516004815260248101825260208101805163313ce56760e01b6001600160e01b03909116179052905160009283929091611d4491906142e4565b600060405180830381855afa9150503d8060008114611d7f576040519150601f19603f3d011682016040523d82523d6000602084013e611d84565b606091505b509150915081611dec5760405162461bcd60e51b815260206004820152602d60248201527f50726f78794f4654576974684665653a206661696c656420746f20676574207460448201526c6f6b656e20646563696d616c7360981b60648201526084016109d2565b600081806020019051810190611e029190614300565b90508060ff168660ff161115611e765760405162461bcd60e51b815260206004820152603360248201527f50726f78794f4654576974684665653a20736861726564446563696d616c73206044820152726d757374206265203c3d20646563696d616c7360681b60648201526084016109d2565b611e80868261431d565b611e8b90600a614424565b600c55505081159050611ed857600e805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b600154604051633d7b2f6f60e21b815261ffff808716600483015285166024820152306044820152606481018390526060916001600160a01b03169063f5ecbdbc9060840160006040518083038186803b158015611f3b57600080fd5b505afa158015611f4f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611f779190810190614433565b90505b949350505050565b600080611fe55a60966366ad5c8a60e01b89898989604051602401611faa94939291906144a0565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152309291906127b7565b9150915081610d3157610d318686868685612841565b6000546001600160a01b031633146112005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109d2565b6000806120628484611aca565b905061206e818461413c565b9150801561209657600a546120949086906201000090046001600160a01b03168361265f565b505b935093915050565b60006120ac878284816128de565b6120b5856129b3565b5090506120c4888888846129dc565b9050600081116121125760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b60448201526064016109d2565b600061215d8761212184612b1e565b6040805160006020820152602181019390935260c09190911b6001600160c01b0319166041830152805160298184030181526049909201905290565b905061216d888287878734612b8d565b86896001600160a01b03168961ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a856040516121ae91815260200190565b60405180910390a450979650505050505050565b60008060006121d48761212188612b1e565b60015460405163040a7bb160e41b81529192506001600160a01b0316906340a7bb109061220d908b90309086908b908b906004016144de565b604080518083038186803b15801561222457600080fd5b505afa158015612238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061225c9190614532565b92509250509550959350505050565b6000612283896001846001600160401b0389166128de565b61228c876129b3565b50905061229b8a8a8a846129dc565b9050600081116122e95760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b60448201526064016109d2565b6000612300338a6122f985612b1e565b8a8a612d17565b90506123108a8287878734612b8d565b888b6001600160a01b03168b61ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a8560405161235191815260200190565b60405180910390a4509998505050505050505050565b6040516001600160a01b0383166024820152604481018290526123ca90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612d58565b505050565b60006123db8282612e2d565b905060ff81166123f6576123f185858585612e89565b610c2c565b60ff81166001141561240e576123f185858585612f19565b60405162461bcd60e51b815260206004820152601c60248201527f4f4654436f72653a20756e6b6e6f776e207061636b657420747970650000000060448201526064016109d2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060816124b481601f614556565b10156124f35760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016109d2565b6124fd8284614556565b845110156125415760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016109d2565b60608215801561256057604051915060008252602082016040526125aa565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612599578051835260209283019201612581565b5050858452601f01601f1916604052505b50949350505050565b60008060006125c6338a6122f98b612b1e565b60015460405163040a7bb160e41b81529192506001600160a01b0316906340a7bb10906125ff908d90309086908b908b906004016144de565b604080518083038186803b15801561261657600080fd5b505afa15801561262a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061264e9190614532565b925092505097509795505050505050565b600b546040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a082319060240160206040518083038186803b1580156126a857600080fd5b505afa1580156126bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e09190614198565b90506001600160a01b03851630141561270f57600b5461270a906001600160a01b03168585612367565b612727565b600b54612727906001600160a01b0316868686613127565b600b546040516370a0823160e01b81526001600160a01b038681166004830152839216906370a082319060240160206040518083038186803b15801561276c57600080fd5b505afa158015612780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a49190614198565b6127ae919061413c565b95945050505050565b6000606060008060008661ffff166001600160401b038111156127dc576127dc613b4a565b6040519080825280601f01601f191660200182016040528015612806576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115612828578692505b828152826000602083013e909890975095505050505050565b8180519060200120600660008761ffff1661ffff1681526020019081526020016000208560405161287291906142e4565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c906128cf908790879087908790879061456e565b60405180910390a15050505050565b60006128e98361315f565b61ffff8087166000908152600360209081526040808320938916835292905220549091508061295a5760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f742073657400000000000060448201526064016109d2565b6129648382614556565b821015610d315760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f77000000000060448201526064016109d2565b6000806129bf600c5490565b6129c990846145c0565b90506129d5818461413c565b9150915091565b60006001600160a01b0385163314612a485760405162461bcd60e51b815260206004820152602960248201527f50726f78794f4654576974684665653a206f776e6572206973206e6f7420736560448201526837321031b0b63632b960b91b60648201526084016109d2565b612a5385308461265f565b9150600080612a61846129b3565b90925090508015612a8357600b54612a83906001600160a01b03168883612367565b81600d6000828254612a959190614556565b9091555060009050612aad6001600160401b036131bb565b9050600d54811015612b125760405162461bcd60e51b815260206004820152602860248201527f50726f78794f4654576974684665653a206f7574626f756e64416d6f756e74206044820152676f766572666c6f7760c01b60648201526084016109d2565b50909695505050505050565b600080612b2a600c5490565b612b3490846142d0565b90506001600160401b03811115610bc05760405162461bcd60e51b815260206004820152601a60248201527f4f4654436f72653a20616d6f756e745344206f766572666c6f7700000000000060448201526064016109d2565b61ffff861660009081526002602052604081208054612bab90614007565b80601f0160208091040260200160405190810160405280929190818152602001828054612bd790614007565b8015612c245780601f10612bf957610100808354040283529160200191612c24565b820191906000526020600020905b815481529060010190602001808311612c0757829003601f168201915b50505050509050805160001415612c965760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b60648201526084016109d2565b612ca18787516131d9565b60015460405162c5803160e81b81526001600160a01b039091169063c5803100908490612cdc908b9086908c908c908c908c906004016145d4565b6000604051808303818588803b158015612cf557600080fd5b505af1158015612d09573d6000803e3d6000fd5b505050505050505050505050565b6060600185856001600160a01b0389168587604051602001612d3e9695949392919061463b565b604051602081830303815290604052905095945050505050565b6000612dad826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166132479092919063ffffffff16565b9050805160001480612dce575080806020019051810190612dce919061469c565b6123ca5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109d2565b6000612e3a826001614556565b83511015612e805760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016109d2565b50016001015190565b600080612e9583613256565b90925090506001600160a01b038216612eae5761dead91505b6000612eb9826131bb565b9050612ec68784836132db565b9050826001600160a01b03168761ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf83604051612f0891815260200190565b60405180910390a350505050505050565b6000806000806000612f2a86613317565b945094509450945094506000600860008b61ffff1661ffff16815260200190815260200160002089604051612f5f91906142e4565b90815260408051602092819003830190206001600160401b038b166000908152925281205460ff169150612f92856131bb565b90508161300057612fa48b30836132db565b61ffff8c16600090815260086020526040908190209051919250600191612fcc908d906142e4565b90815260408051602092819003830190206001600160401b038d16600090815292529020805460ff19169115159190911790555b6001600160a01b0386163b613057576040516001600160a01b03871681527f9aedf5fdba8716db3b6705ca00150643309995d4f818a249ed6dde6677e7792d9060200160405180910390a150505050505050611ed8565b8a8a8a8a8a8a868a60008a613075578b6001600160401b0316613077565b5a5b90506000806130a95a609663eaffd49a60e01b8e8e8e8d8d8d8d8d604051602401611faa9897969594939291906146b9565b915091508115613102578751602089012060405161ffff8d16907fb8890edbfc1c74692f527444645f95489c3703cc2df42e4a366f5d06fa6cd884906130f4908e908e90869061472d565b60405180910390a25061310f565b61310f8b8b8b8b85612841565b50505050505050505050505050505050505050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611ed89085906323b872dd60e01b90608401612393565b60006022825110156131b35760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d730000000060448201526064016109d2565b506022015190565b60006131c6600c5490565b610bc0906001600160401b03841661429b565b61ffff8216600090815260046020526040902054806131f757506127105b808211156123ca5760405162461bcd60e51b815260206004820181905260248201527f4c7a4170703a207061796c6f61642073697a6520697320746f6f206c6172676560448201526064016109d2565b6060611f7a84846000856133ce565b600080806132648482612e2d565b60ff16148015613275575082516029145b6132bc5760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b60448201526064016109d2565b6132c783600d6134a9565b91506132d483602161350e565b9050915091565b600081600d60008282546132ef919061413c565b90915550506001600160a01b03831630141561330c575080610e54565b611f7a30848461265f565b60008080606081600161332a8783612e2d565b60ff16146133755760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b60448201526064016109d2565b61338086600d6134a9565b935061338d86602161350e565b925061339a86602961356b565b94506133a786604961350e565b90506133c360518088516133bb919061413c565b8891906124a6565b915091939590929450565b60608247101561342f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016109d2565b600080866001600160a01b0316858760405161344b91906142e4565b60006040518083038185875af1925050503d8060008114613488576040519150601f19603f3d011682016040523d82523d6000602084013e61348d565b606091505b509150915061349e878383876135c9565b979650505050505050565b60006134b6826014614556565b835110156134fe5760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b60448201526064016109d2565b500160200151600160601b900490565b600061351b826008614556565b835110156135625760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b60448201526064016109d2565b50016008015190565b6000613578826020614556565b835110156135c05760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b60448201526064016109d2565b50016020015190565b6060831561363557825161362e576001600160a01b0385163b61362e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109d2565b5081611f7a565b611f7a838381511561364a5781518083602001fd5b8060405162461bcd60e51b81526004016109d29190613caf565b82805461367090614007565b90600052602060002090601f01602090048101928261369257600085556136d8565b82601f106136ab57805160ff19168380011785556136d8565b828001600101855582156136d8579182015b828111156136d85782518255916020019190600101906136bd565b506136e492915061375c565b5090565b8280546136f490614007565b90600052602060002090601f01602090048101928261371657600085556136d8565b82601f1061372f5782800160ff198235161785556136d8565b828001600101855582156136d8579182015b828111156136d8578235825591602001919060010190613741565b5b808211156136e4576000815560010161375d565b803561ffff8116811461378357600080fd5b919050565b60008083601f84011261379a57600080fd5b5081356001600160401b038111156137b157600080fd5b6020830191508360208285010111156137c957600080fd5b9250929050565b80356001600160401b038116811461378357600080fd5b6000806000806000806080878903121561380057600080fd5b61380987613771565b955060208701356001600160401b038082111561382557600080fd5b6138318a838b01613788565b909750955085915061384560408a016137d0565b9450606089013591508082111561385b57600080fd5b5061386889828a01613788565b979a9699509497509295939492505050565b60006020828403121561388c57600080fd5b81356001600160e01b031981168114610e5457600080fd5b6000602082840312156138b657600080fd5b610e5482613771565b600080604083850312156138d257600080fd5b6138db83613771565b946020939093013593505050565b6001600160a01b03811681146110a557600080fd5b60006060828403121561391057600080fd5b50919050565b60008060008060008060c0878903121561392f57600080fd5b863561393a816138e9565b955061394860208801613771565b945060408701359350606087013592506080870135915060a08701356001600160401b0381111561397857600080fd5b61398489828a016138fe565b9150509295509295509295565b80151581146110a557600080fd5b60008060008060008060a087890312156139b857600080fd5b6139c187613771565b9550602087013594506040870135935060608701356139df81613991565b925060808701356001600160401b038111156139fa57600080fd5b61386889828a01613788565b600080600060408486031215613a1b57600080fd5b613a2484613771565b925060208401356001600160401b03811115613a3f57600080fd5b613a4b86828701613788565b9497909650939450505050565b60008060008060008060008060006101008a8c031215613a7757600080fd5b8935613a82816138e9565b9850613a9060208b01613771565b975060408a0135965060608a0135955060808a0135945060a08a01356001600160401b0380821115613ac157600080fd5b613acd8d838e01613788565b9096509450849150613ae160c08d016137d0565b935060e08c0135915080821115613af757600080fd5b50613b048c828d016138fe565b9150509295985092959850929598565b600060208284031215613b2657600080fd5b8135610e54816138e9565b600060208284031215613b4357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715613b8857613b88613b4a565b604052919050565b60006001600160401b03821115613ba957613ba9613b4a565b50601f01601f191660200190565b600080600060608486031215613bcc57600080fd5b613bd584613771565b925060208401356001600160401b03811115613bf057600080fd5b8401601f81018613613c0157600080fd5b8035613c14613c0f82613b90565b613b60565b818152876020838501011115613c2957600080fd5b81602084016020830137600060208383010152809450505050613c4e604085016137d0565b90509250925092565b60005b83811015613c72578181015183820152602001613c5a565b83811115611ed85750506000910152565b60008151808452613c9b816020860160208601613c57565b601f01601f19169290920160200192915050565b602081526000610e546020830184613c83565b600080600060608486031215613cd757600080fd5b613ce084613771565b92506020840135613cf081613991565b9150613c4e60408501613771565b60008060408385031215613d1157600080fd5b613d1a83613771565b9150613d2860208401613771565b90509250929050565b600080600080600080600080600060e08a8c031215613d4f57600080fd5b613d588a613771565b985060208a0135975060408a0135965060608a01356001600160401b0380821115613d8257600080fd5b613d8e8d838e01613788565b9098509650869150613da260808d016137d0565b955060a08c01359150613db482613991565b90935060c08b01359080821115613dca57600080fd5b50613dd78c828d01613788565b915080935050809150509295985092959850929598565b600080600080600060808688031215613e0657600080fd5b613e0f86613771565b9450613e1d60208701613771565b93506040860135925060608601356001600160401b03811115613e3f57600080fd5b613e4b88828901613788565b969995985093965092949392505050565b600080600060608486031215613e7157600080fd5b613e7a84613771565b9250613e8860208501613771565b9150604084013590509250925092565b6000806000806000806000806000806101008b8d031215613eb857600080fd5b613ec18b613771565b995060208b01356001600160401b0380821115613edd57600080fd5b613ee98e838f01613788565b909b509950899150613efd60408e016137d0565b985060608d0135975060808d01359150613f16826138e9565b90955060a08c0135945060c08c01359080821115613f3357600080fd5b50613f408d828e01613788565b9150809450508092505060e08b013590509295989b9194979a5092959850565b60ff811681146110a557600080fd5b600080600060608486031215613f8457600080fd5b8335613f8f816138e9565b92506020840135613f9f81613f60565b91506040840135613faf816138e9565b809150509250925092565b60008060008060808587031215613fd057600080fd5b613fd985613771565b9350613fe760208601613771565b92506040850135613ff7816138e9565b9396929550929360600135925050565b600181811c9082168061401b57607f821691505b6020821081141561391057634e487b7160e01b600052602260045260246000fd5b8183823760009101908152919050565b6000808335601e1984360301811261406357600080fd5b8301803591506001600160401b0382111561407d57600080fd5b6020019150368190038213156137c957600080fd5b6020808252602d908201527f426173654f4654576974684665653a20616d6f756e74206973206c657373207460408201526c1a185b881b5a5b905b5bdd5b9d609a1b606082015260800190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff84168152604060208201526000611f776040830184866140df565b634e487b7160e01b600052601160045260246000fd5b60008282101561414e5761414e614126565b500390565b60208082526025908201527f4665653a20666565206270206d757374206265203c3d2042505f44454e4f4d496040820152642720aa27a960d91b606082015260800190565b6000602082840312156141aa57600080fd5b5051919050565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b600061ffff80881683528087166020840152508460408301526080606083015261349e6080830184866140df565b61ffff861681526080602082015260006142236080830186886140df565b6001600160401b0394909416604083015250606001529392505050565b61ffff8916815260c06020820152600061425e60c08301898b6140df565b6001600160401b038816604084015286606084015285608084015282810360a084015261428c8185876140df565b9b9a5050505050505050505050565b60008160001904831182151516156142b5576142b5614126565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826142df576142df6142ba565b500490565b600082516142f6818460208701613c57565b9190910192915050565b60006020828403121561431257600080fd5b8151610e5481613f60565b600060ff821660ff84168082101561433757614337614126565b90039392505050565b600181815b8085111561437b57816000190482111561436157614361614126565b8085161561436e57918102915b93841c9390800290614345565b509250929050565b60008261439257506001610bc0565b8161439f57506000610bc0565b81600181146143b557600281146143bf576143db565b6001915050610bc0565b60ff8411156143d0576143d0614126565b50506001821b610bc0565b5060208310610133831016604e8410600b84101617156143fe575081810a610bc0565b6144088383614340565b806000190482111561441c5761441c614126565b029392505050565b6000610e5460ff841683614383565b60006020828403121561444557600080fd5b81516001600160401b0381111561445b57600080fd5b8201601f8101841361446c57600080fd5b805161447a613c0f82613b90565b81815285602083850101111561448f57600080fd5b6127ae826020830160208601613c57565b61ffff851681526080602082015260006144bd6080830186613c83565b6001600160401b0385166040840152828103606084015261349e8185613c83565b61ffff861681526001600160a01b038516602082015260a06040820181905260009061450c90830186613c83565b841515606084015282810360808401526145268185613c83565b98975050505050505050565b6000806040838503121561454557600080fd5b505080516020909101519092909150565b6000821982111561456957614569614126565b500190565b61ffff8616815260a06020820152600061458b60a0830187613c83565b6001600160401b038616604084015282810360608401526145ac8186613c83565b905082810360808401526145268185613c83565b6000826145cf576145cf6142ba565b500690565b61ffff8716815260c0602082015260006145f160c0830188613c83565b82810360408401526146038188613c83565b6001600160a01b0387811660608601528616608085015283810360a0850152905061462e8185613c83565b9998505050505050505050565b60ff60f81b8760f81b16815285600182015260006001600160401b0360c01b808760c01b166021840152856029840152808560c01b16604984015250825161468a816051850160208701613c57565b91909101605101979650505050505050565b6000602082840312156146ae57600080fd5b8151610e5481613991565b600061010061ffff8b1683528060208401526146d78184018b613c83565b6001600160401b038a166040850152606084018990526001600160a01b038816608085015260a0840187905283810360c085015290506147178186613c83565b9150508260e08301529998505050505050505050565b6060815260006147406060830186613c83565b6001600160401b03949094166020830152506040015291905056fea264697066735822122026c5500c030757e92e567928bab4d5c13ed5f27e5f7b90ad08a79dc27b513a8664736f6c63430008090033";
class B0 extends F {
    constructor(...e) {
        e.length === 1 ? super(l0, s6, e[0]) : super(...e)
    }
    deploy(e, a, n, t) {
        return super.deploy(e, a, n, t || {})
    }
    getDeployTransaction(e, a, n, t) {
        return super.getDeployTransaction(e, a, n, t || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(l0)
    }
    static connect(e, a) {
        return new g(e,l0,a)
    }
}
u(B0, "bytecode", s6),
u(B0, "abi", l0);
const h1 = "hh-sol-artifact-1"
  , A1 = "INonfungiblePositionManager"
  , I1 = "contracts/interfaces/INonfungiblePositionManager.sol"
  , P1 = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "approved",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    name: "Collect",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    name: "DecreaseLiquidity",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    name: "IncreaseLiquidity",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [],
    name: "WETH9",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "balance",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint128",
            name: "amount0Max",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "amount1Max",
            type: "uint128"
        }],
        internalType: "struct INonfungiblePositionManager.CollectParams",
        name: "params",
        type: "tuple"
    }],
    name: "collect",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token0",
        type: "address"
    }, {
        internalType: "address",
        name: "token1",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160"
    }],
    name: "createAndInitializePoolIfNecessary",
    outputs: [{
        internalType: "address",
        name: "pool",
        type: "address"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "amount0Min",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount1Min",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
        }],
        internalType: "struct INonfungiblePositionManager.DecreaseLiquidityParams",
        name: "params",
        type: "tuple"
    }],
    name: "decreaseLiquidity",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "factory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount0Desired",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount1Desired",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount0Min",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount1Min",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
        }],
        internalType: "struct INonfungiblePositionManager.IncreaseLiquidityParams",
        name: "params",
        type: "tuple"
    }],
    name: "increaseLiquidity",
    outputs: [{
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "address",
            name: "token0",
            type: "address"
        }, {
            internalType: "address",
            name: "token1",
            type: "address"
        }, {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
        }, {
            internalType: "int24",
            name: "tickLower",
            type: "int24"
        }, {
            internalType: "int24",
            name: "tickUpper",
            type: "int24"
        }, {
            internalType: "uint256",
            name: "amount0Desired",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount1Desired",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount0Min",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "amount1Min",
            type: "uint256"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
        }],
        internalType: "struct INonfungiblePositionManager.MintParams",
        name: "params",
        type: "tuple"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }, {
        internalType: "uint8",
        name: "v",
        type: "uint8"
    }, {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "permit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "positions",
    outputs: [{
        internalType: "uint96",
        name: "nonce",
        type: "uint96"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "address",
        name: "token0",
        type: "address"
    }, {
        internalType: "address",
        name: "token1",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "feeGrowthInside0LastX128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "feeGrowthInside1LastX128",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "tokensOwed0",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "tokensOwed1",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "_approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenByIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenOfOwnerByIndex",
    outputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}]
  , R1 = "0x"
  , F1 = "0x"
  , O1 = {}
  , L1 = {}
  , S1 = {
    _format: h1,
    contractName: A1,
    sourceName: I1,
    abi: P1,
    bytecode: R1,
    deployedBytecode: F1,
    linkReferences: O1,
    deployedLinkReferences: L1
}
  , C1 = [{
    inputs: [{
        internalType: "address",
        name: "factory",
        type: "address"
    }, {
        internalType: "address",
        name: "weth",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "approved",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [],
    name: "WETH9",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "uint256",
            name: "lid",
            type: "uint256"
        }, {
            internalType: "uint128",
            name: "xLim",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "yLim",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "amountXMin",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "amountYMin",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
        }],
        internalType: "struct LiquidityManager.AddLiquidityParam",
        name: "addLiquidityParam",
        type: "tuple"
    }],
    name: "addLiquidity",
    outputs: [{
        internalType: "uint128",
        name: "liquidityDelta",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "baseURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "lid",
        type: "uint256"
    }],
    name: "burn",
    outputs: [{
        internalType: "bool",
        name: "success",
        type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "amountXLim",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "amountYLim",
        type: "uint128"
    }],
    name: "collect",
    outputs: [{
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "initialPoint",
        type: "int24"
    }],
    name: "createPool",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "lid",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "liquidDelta",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "amountXMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountYMin",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
    }],
    name: "decLiquidity",
    outputs: [{
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "factory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "liquidities",
    outputs: [{
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "lastFeeScaleX_128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lastFeeScaleY_128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "remainTokenX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "remainTokenY",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "poolId",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "liquidityNum",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "address",
            name: "miner",
            type: "address"
        }, {
            internalType: "address",
            name: "tokenX",
            type: "address"
        }, {
            internalType: "address",
            name: "tokenY",
            type: "address"
        }, {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
        }, {
            internalType: "int24",
            name: "pl",
            type: "int24"
        }, {
            internalType: "int24",
            name: "pr",
            type: "int24"
        }, {
            internalType: "uint128",
            name: "xLim",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "yLim",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "amountXMin",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "amountYMin",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
        }],
        internalType: "struct LiquidityManager.MintParam",
        name: "mintParam",
        type: "tuple"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "lid",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "x",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "y",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "mintDepositCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]"
    }],
    name: "multicall",
    outputs: [{
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]"
    }],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "pool",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "poolIds",
    outputs: [{
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    name: "poolMetas",
    outputs: [{
        internalType: "address",
        name: "tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "newBaseURI",
        type: "string"
    }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "token",
        type: "address"
    }, {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenByIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "tokenOfOwnerByIndex",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "minAmount",
        type: "uint256"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]
  , o0 = [{
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }, {
        internalType: "address",
        name: "_quoterAddress",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address[]",
        name: "path",
        type: "address[]"
    }, {
        indexed: !1,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "address",
        name: "receiver",
        type: "address"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "convertedPath",
    outputs: [{
        internalType: "bytes",
        name: "packedData",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "exchangeRouter",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "feeTier",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256"
    }],
    name: "getExactInput",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256"
    }],
    name: "getExactOutput",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getInputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "getOutputAmount",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }],
    name: "isPathValid",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "liquidityPoolFactory",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "quoterAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_exchangeRouter",
        type: "address"
    }],
    name: "setExchangeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_firstToken",
        type: "address"
    }, {
        internalType: "address",
        name: "_secondToken",
        type: "address"
    }, {
        internalType: "uint24",
        name: "_feeTier",
        type: "uint24"
    }],
    name: "setFeeTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setLiquidityPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_quoterAddress",
        type: "address"
    }],
    name: "setQuoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "setWrappedNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_inputAmount",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_outputAmount",
        type: "uint256"
    }, {
        internalType: "address[]",
        name: "_path",
        type: "address[]"
    }, {
        internalType: "address",
        name: "_to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "_isFixedToken",
        type: "bool"
    }],
    name: "swap",
    outputs: [{
        internalType: "bool",
        name: "_result",
        type: "bool"
    }, {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}]
  , p6 = "0x60806040523480156200001157600080fd5b5060405162002067380380620020678339810160408190526200003491620002ec565b6200003f33620001b5565b6001805582516200005890600290602086019062000205565b50600480546001600160a01b0319166001600160a01b03841690811782556040805163c45a015560e01b81529051919263c45a0155928282019260209290829003018186803b158015620000ab57600080fd5b505afa158015620000c0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e69190620002c8565b600580546001600160a01b03199081166001600160a01b03938416179091556006805490911683831617905560048054604080516312a9293f60e21b815290519190931692634aa4a4fc9281810192602092909190829003018186803b1580156200015057600080fd5b505afa15801562000165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018b9190620002c8565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200043c915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200021390620003e9565b90600052602060002090601f01602090048101928262000237576000855562000282565b82601f106200025257805160ff191683800117855562000282565b8280016001018555821562000282579182015b828111156200028257825182559160200191906001019062000265565b506200029092915062000294565b5090565b5b8082111562000290576000815560010162000295565b80516001600160a01b0381168114620002c357600080fd5b919050565b600060208284031215620002da578081fd5b620002e582620002ab565b9392505050565b60008060006060848603121562000301578182fd5b83516001600160401b038082111562000318578384fd5b818601915086601f8301126200032c578384fd5b81518181111562000341576200034162000426565b604051601f8201601f19908116603f011681019083821181831017156200036c576200036c62000426565b8160405282815260209350898484870101111562000388578687fd5b8691505b82821015620003ab57848201840151818301850152908301906200038c565b82821115620003bc57868484830101525b9650620003ce915050868201620002ab565b93505050620003e060408501620002ab565b90509250925092565b600181811c90821680620003fe57607f821691505b602082108114156200042057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611c1b806200044c6000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806301e65db31461010c57806304fe3fcb1461015557806306fdde031461016a57806311a2f0cb1461017f5780631580b5e5146101aa57806317fcb39b146101b25780631cb85818146101c55780633566967d146101d85780636145f87614610202578063715018a614610215578063838b7ccb1461021d57806389883074146102305780638b1937cd1461024a5780638da5cb5b1461025d5780639b4bca2414610265578063b0bbcd8814610288578063b23e4fc6146102a9578063df71d7f314610230578063e75d75d5146102b1578063f2fde38b146102c4578063f912c64b146102d7575b600080fd5b61013c61011a36600461157d565b600760209081526000928352604080842090915290825290205462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b6101686101633660046115b5565b6102ea565b005b61017261037d565b60405161014c91906119e6565b600654610192906001600160a01b031681565b6040516001600160a01b03909116815260200161014c565b61016861040b565b600354610192906001600160a01b031681565b600454610192906001600160a01b031681565b6101eb6101e6366004611640565b6104d6565b60408051921515835260208301919091520161014c565b610172610210366004611606565b610595565b6101686106d2565b61016861022b366004611545565b610703565b6101eb61023e3660046116b6565b60016000935093915050565b6101eb610258366004611640565b610806565b61019261083e565b610278610273366004611606565b61084d565b604051901515815260200161014c565b61029b6102963660046117c4565b610a46565b60405161014c9291906119cb565b610168610e39565b600554610192906001600160a01b031681565b6101686102d2366004611545565b610f04565b6101686102e5366004611545565b610fa4565b336102f361083e565b6001600160a01b0316146103225760405162461bcd60e51b815260040161031990611a50565b60405180910390fd5b6001600160a01b039283166000818152600760208181526040808420969097168352948552858220805462ffffff90951662ffffff199586168117909155908552858220928252919093529290912080549091169091179055565b6002805461038a90611b46565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611b46565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b505050505081565b3361041461083e565b6001600160a01b03161461043a5760405162461bcd60e51b815260040161031990611a50565b60048054604080516312a9293f60e21b815290516001600160a01b0390921692634aa4a4fc928282019260209290829003018186803b15801561047c57600080fd5b505afa158015610490573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b49190611561565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000806104e28461084d565b6104f15750600090508061058e565b6006546000906001600160a01b0316632f80bb1d61050e87610595565b866040518363ffffffff1660e01b815260040161052c9291906119f9565b600060405180830381600087803b15801561054657600080fd5b505af115801561055a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261058291908101906116ec565b50600195509193505050505b9250929050565b6060816000815181106105b857634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016105e3919060609190911b6001600160601b031916815260140190565b60408051601f19818403018152919052905060015b82518110156106cc5760008361060f600184611b03565b8151811061062d57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600084838151811061065957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038085166000908152600784526040808220928416825291845281902054905191935062ffffff16916106a59187918491869101611914565b604051602081830303815290604052945050505080806106c490611b7b565b9150506105f8565b50919050565b336106db61083e565b6001600160a01b0316146107015760405162461bcd60e51b815260040161031990611a50565b565b806001600160a01b03811661072a5760405162461bcd60e51b815260040161031990611a1b565b3361073361083e565b6001600160a01b0316146107595760405162461bcd60e51b815260040161031990611a50565b600480546001600160a01b0319166001600160a01b03841690811782556040805163c45a015560e01b81529051919263c45a0155928282019260209290829003018186803b1580156107aa57600080fd5b505afa1580156107be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e29190611561565b600580546001600160a01b0319166001600160a01b03929092169190911790555050565b6000806108128461084d565b6108215750600090508061058e565b6006546000906001600160a01b031663cdca175361050e87610595565b6000546001600160a01b031690565b6000806002835110156108635750600092915050565b60005b600184516108749190611b03565b811015610a3c5760055484516001600160a01b0390911690631698ee82908690849081106108b257634e487b7160e01b600052603260045260246000fd5b6020026020010151868460016108c89190611aeb565b815181106108e657634e487b7160e01b600052603260045260246000fd5b60200260200101516007600089878151811061091257634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008987600161094a9190611aeb565b8151811061096857634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b0390811683529082019290925260409081016000205490516001600160e01b031960e087901b16815293821660048501529116602483015262ffffff16604482015260640160206040518083038186803b1580156109d857600080fd5b505afa1580156109ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a109190611561565b91506001600160a01b038216610a2a575060009392505050565b80610a3481611b7b565b915050610866565b5060019392505050565b6000606060026001541415610a9d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610319565b6002600155846001600160a01b038116610ac95760405162461bcd60e51b815260040161031990611a1b565b6000610ad88a8a8a8989610ff5565b909450905060008415610e25576040805160028082526060820183529091602083019080368337019050509350610b4d3330848c600081518110610b2c57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316611063909392919063ffffffff16565b88600081518110610b6e57634e487b7160e01b600052603260045260246000fd5b60209081029190910101516004805460405163095ea7b360e01b81526001600160a01b0391821692810192909252602482018590529091169063095ea7b390604401602060405180830381600087803b158015610bca57600080fd5b505af1158015610bde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c029190611682565b5060018615151415610cf9576004546001600160a01b031663c04b8d59610c2c848d8d8d8d6110c3565b6040518263ffffffff1660e01b8152600401610c489190611a85565b602060405180830381600087803b158015610c6257600080fd5b505af1158015610c76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9a919061169e565b90508184600081518110610cbe57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508084600181518110610cec57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b85610de9576004546001600160a01b031663f28c0498610d1c848d8d8d8d611140565b6040518263ffffffff1660e01b8152600401610d389190611a85565b602060405180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a919061169e565b90508084600081518110610dae57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508984600181518110610ddc57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b7fe1010d0ab476908054981d12fbb96915efcceb8d57a09ae8ca62f4bda731837389858a604051610e1c9392919061195b565b60405180910390a15b505060018055509097909650945050505050565b33610e4261083e565b6001600160a01b031614610e685760405162461bcd60e51b815260040161031990611a50565b600480546040805163c45a015560e01b815290516001600160a01b039092169263c45a0155928282019260209290829003018186803b158015610eaa57600080fd5b505afa158015610ebe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee29190611561565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b33610f0d61083e565b6001600160a01b031614610f335760405162461bcd60e51b815260040161031990611a50565b6001600160a01b038116610f985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610319565b610fa1816111be565b50565b33610fad61083e565b6001600160a01b031614610fd35760405162461bcd60e51b815260040161031990611a50565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000804284101561100b57506000905080611059565b600080611018878a610806565b915091508088111561103257600080935093505050611059565b6001851515141561104857509150869050611059565b61105287896104d6565b9350935050505b9550959350505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110bd90859061120e565b50505050565b6110fe6040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060a0016040528061111286610595565b81526001600160a01b0390941660208501526040840192909252506060820194909452608001919091525090565b61117b6040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060a0016040528061118f86610595565b8152602001846001600160a01b0316815260200183815260200186815260200187815250905095945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611263826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112e59092919063ffffffff16565b8051909150156112e057808060200190518101906112819190611682565b6112e05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610319565b505050565b60606112f484846000856112fe565b90505b9392505050565b60608247101561135f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610319565b843b6113ad5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610319565b600080866001600160a01b031685876040516113c991906118f8565b60006040518083038185875af1925050503d8060008114611406576040519150601f19603f3d011682016040523d82523d6000602084013e61140b565b606091505b509150915061141b828286611426565b979650505050505050565b606083156114355750816112f7565b8251156114455782518084602001fd5b8160405162461bcd60e51b815260040161031991906119e6565b600082601f83011261146f578081fd5b8135602061148461147f83611ac8565b611a98565b80838252828201915082860187848660051b89010111156114a3578586fd5b855b858110156114ca5781356114b881611bc2565b845292840192908401906001016114a5565b5090979650505050505050565b600082601f8301126114e7578081fd5b815160206114f761147f83611ac8565b80838252828201915082860187848660051b8901011115611516578586fd5b855b858110156114ca57815163ffffffff81168114611533578788fd5b84529284019290840190600101611518565b600060208284031215611556578081fd5b81356112f781611bc2565b600060208284031215611572578081fd5b81516112f781611bc2565b6000806040838503121561158f578081fd5b823561159a81611bc2565b915060208301356115aa81611bc2565b809150509250929050565b6000806000606084860312156115c9578081fd5b83356115d481611bc2565b925060208401356115e481611bc2565b9150604084013562ffffff811681146115fb578182fd5b809150509250925092565b600060208284031215611617578081fd5b81356001600160401b0381111561162c578182fd5b6116388482850161145f565b949350505050565b60008060408385031215611652578182fd5b82356001600160401b03811115611667578283fd5b6116738582860161145f565b95602094909401359450505050565b600060208284031215611693578081fd5b81516112f781611bd7565b6000602082840312156116af578081fd5b5051919050565b6000806000606084860312156116ca578283fd5b8335925060208401356116dc81611bc2565b915060408401356115fb81611bc2565b60008060008060808587031215611701578182fd5b8451602080870151919550906001600160401b0380821115611721578485fd5b818801915088601f830112611734578485fd5b815161174261147f82611ac8565b8082825285820191508585018c878560051b8801011115611761578889fd5b8895505b8386101561178c57805161177881611bc2565b835260019590950194918601918601611765565b5060408b015190985094505050808311156117a5578485fd5b50506117b3878288016114d7565b606096909601519497939650505050565b60008060008060008060c087890312156117dc578384fd5b863595506020870135945060408701356001600160401b038111156117ff578485fd5b61180b89828a0161145f565b945050606087013561181c81611bc2565b92506080870135915060a087013561183381611bd7565b809150509295509295509295565b6000815180845260208085019450808401835b8381101561187057815187529582019590820190600101611854565b509495945050505050565b60008151808452611893816020860160208601611b1a565b601f01601f19169290920160200192915050565b6000815160a084526118bc60a085018261187b565b6020848101516001600160a01b031690860152604080850151908601526060808501519086015260809384015193909401929092525090919050565b6000825161190a818460208701611b1a565b9190910192915050565b60008451611926818460208901611b1a565b60e89490941b6001600160e81b0319169190930190815260609190911b6001600160601b031916600382015260170192915050565b606080825284519082018190526000906020906080840190828801845b8281101561199d5781516001600160a01b031684529284019290840190600101611978565b505050838103828501526119b18187611841565b9250505060018060a01b0383166040830152949350505050565b82151581526040602082015260006112f46040830184611841565b6020815260006112f7602083018461187b565b604081526000611a0c604083018561187b565b90508260208301529392505050565b6020808252818101527f556e69737761705633436f6e6e6563746f723a207a65726f2061646472657373604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020815260006112f760208301846118a7565b604051601f8201601f191681016001600160401b0381118282101715611ac057611ac0611bac565b604052919050565b60006001600160401b03821115611ae157611ae1611bac565b5060051b60200190565b60008219821115611afe57611afe611b96565b500190565b600082821015611b1557611b15611b96565b500390565b60005b83811015611b35578181015183820152602001611b1d565b838111156110bd5750506000910152565b600181811c90821680611b5a57607f821691505b602082108114156106cc57634e487b7160e01b600052602260045260246000fd5b6000600019821415611b8f57611b8f611b96565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610fa157600080fd5b8015158114610fa157600080fdfea2646970667358221220bd0e374695e40b17ba499fb84c9f948f523a8aa558eed353d13303488d5915fa64736f6c63430008040033";
class q0 extends F {
    constructor(...e) {
        e.length === 1 ? super(o0, p6, e[0]) : super(...e)
    }
    deploy(e, a, n, t) {
        return super.deploy(e, a, n, t || {})
    }
    getDeployTransaction(e, a, n, t) {
        return super.getDeployTransaction(e, a, n, t || {})
    }
    attach(e) {
        return super.attach(e)
    }
    connect(e) {
        return super.connect(e)
    }
    static createInterface() {
        return new _(o0)
    }
    static connect(e, a) {
        return new g(e,o0,a)
    }
}
u(q0, "bytecode", p6),
u(q0, "abi", o0);
const _0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickSpacing",
        type: "int24"
    }],
    name: "FeeAmountEnabled",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "oldOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnerChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "token0",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "token1",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        indexed: !1,
        internalType: "int24",
        name: "tickSpacing",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "address",
        name: "pool",
        type: "address"
    }],
    name: "PoolCreated",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "createPool",
    outputs: [{
        internalType: "address",
        name: "pool",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "tickSpacing",
        type: "int24"
    }],
    name: "enableFeeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "feeAmountTickSpacing",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenA",
        type: "address"
    }, {
        internalType: "address",
        name: "tokenB",
        type: "address"
    }, {
        internalType: "uint24",
        name: "fee",
        type: "uint24"
    }],
    name: "getPool",
    outputs: [{
        internalType: "address",
        name: "pool",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_owner",
        type: "address"
    }],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}];
class m6 {
    static createInterface() {
        return new _(_0)
    }
    static connect(e, a) {
        return new g(e,_0,a)
    }
}
u(m6, "abi", _0);
const $1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeConnectorAddress
      , t = h(P0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , E1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeRouterAddress
      , t = h(F0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , U1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeFactoryAddress
      , t = h(R0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , H1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeConnectorV3Address
      , t = h(q0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , W1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeConnectorV3Address
      , t = h(C0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , z1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeFactoryV3Address
      , t = h(m6.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , V1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a]) == null ? void 0 : i.exchangeFactoryV3Address
      , t = h(o6.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[e ? T(a) : a || l.polygon] || t != null && t.signer ? t : void 0
}
  , X1 = (b, e=!1) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[e ? T(a) : a]) == null ? void 0 : d.burnRouteProxyAddress;
    return h(I0.connect, n, T(a), e)
}
  , Y1 = (b, e=!1) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[e ? T(a) : a]) == null ? void 0 : d.burnRouteProxyAddress;
    return h(h0.connect, n, e ? T(a) : a, e)
}
  , G1 = (b, e=!0) => {
    var f, i, s, c;
    const a = b || l.polygon
      , n = (i = (f = v) == null ? void 0 : f[e ? T(a) : a || l.polygon]) == null ? void 0 : i.YieldFarmingProxyAddress
      , t = h(O0.connect, n, a, e);
    return ((c = (s = t == null ? void 0 : t.provider) == null ? void 0 : s.connection) == null ? void 0 : c.url) === D[a] || t != null && t.signer ? t : void 0
}
  , j1 = (b, e=!1) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[e ? T(a) : a || l.polygon]) == null ? void 0 : d.Brc20RouterProxyAddress;
    return h(L0.connect, n, a, e)
}
  , Q1 = (b, e=!1) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[e ? T(a) : a || l.polygon]) == null ? void 0 : d.RuneRouterProxyAddress;
    return h(N0.connect, n, a, e)
}
  , Z1 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[a]) == null ? void 0 : d.lockerProxyAddress;
    return h(A0.connect, n, a, e)
}
  , K1 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[a]) == null ? void 0 : d.stakingProxyAddress;
    return h(S0.connect, n, a, e, !0)
}
  , J1 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[a]) == null ? void 0 : d.stakingProxyAddress;
    return h(D0.connect, n, a, e, !0)
}
  , e5 = (b, e=!0) => {
    var t, d;
    const a = b || l.ethereum
      , n = (d = (t = v) == null ? void 0 : t[a]) == null ? void 0 : d.otfWithFeeProxyAddress;
    return h(B0.connect, n, a, e, !0)
}
  , a5 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[a]) == null ? void 0 : d.otfProxyAddress;
    return $0(z6, n, a, e, !0)
}
  , b5 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[T(a)]) == null ? void 0 : d.positionManagerAddress;
    return $0(S1.abi, n, a, e, !0)
}
  , t5 = (b, e=!0) => {
    var t, d;
    const a = b || l.polygon
      , n = (d = (t = v) == null ? void 0 : t[T(a)]) == null ? void 0 : d.positionManagerAddress;
    return $0(C1, n, a, e, !0)
}
;
function n5(b) {
    return e0.jsx("span", {
        className: z0("flex items-center px-1 justify-center   ", b || "text-primary"),
        children: e0.jsxs("svg", {
            className: z0("animate-spin  mx-1  h-3 w-3 ", b || "text-primary"),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [e0.jsx("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }), e0.jsx("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })]
        })
    })
}
export {q1 as C, Q0 as E, B1 as I, C1 as L, n5 as P, j1 as a, Q1 as b, X1 as c, Y1 as d, b5 as e, G1 as f, t5 as g, H1 as h, z1 as i, S1 as j, $1 as k, E1 as l, U1 as m, W1 as n, V1 as o, J1 as p, e5 as q, K1 as r, a5 as s, Z1 as u};
//# sourceMappingURL=Processing-451d91ae.js.map
