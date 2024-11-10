import {r as g, u as Yn, a as I, e as zn, b as Gn, c as Qn, d as On, f as Zn, g as Hn, h as Jn, i as Pn, j as fn, k as eu, l as nt, m as xn, s as In, n as Rn, o as tu, p as nu, A as hn, q as uu, t as G, v as Fe, w as gn, x as su, y as iu, z as Nn, B as Tn, C as vn, D as au, E as lu, N as He, G as ou, F as cu, H as n, I as Se, J as de, K as Bn, _ as bn, L as ru, M as pu, O as xe, P as An, Q as Ze, R as Cn, S as du} from "./index-4f2c5097.js";
import {u as ku, a as wu, b as yu, c as xu, d as hu, I as Ln} from "./useEthConnector-34222aca.js";
import {u as gu, C as jn, D as Nu} from "./CryptoInput-287a609a.js";
import {u as Tu} from "./useExchange-b808452d.js";
import {a as vu} from "./network-a4f8800b.js";
import {u as Bu} from "./useReferral-db9f0840.js";
import {I as Fn, C as bu, P as he} from "./Processing-451d91ae.js";
import {T as En} from "./Tooltip-97ee4cb6.js";
import "./useBitcoinUtils-7ce56b41.js";
import "./_commonjs-dynamic-modules-6ee356ce.js";
(function() {
    try {
        var w = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , s = new w.Error().stack;
        s && (w._sentryDebugIds = w._sentryDebugIds || {},
        w._sentryDebugIds[s] = "19809047-4e05-4541-ae42-0d4ce1db6e51",
        w._sentryDebugIdIdentifier = "sentry-dbid-19809047-4e05-4541-ae42-0d4ce1db6e51")
    } catch {}
}
)();
function Au({title: w, titleId: s, ...r}, R) {
    return g.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: R,
        "aria-labelledby": s
    }, r), w ? g.createElement("title", {
        id: s
    }, w) : null, g.createElement("path", {
        fillRule: "evenodd",
        d: "M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z",
        clipRule: "evenodd"
    }))
}
const Cu = g.forwardRef(Au)
  , Sn = Cu
  , at = (w, s) => {
    const [r,R] = g.useState();
    return g.useEffect( () => {
        const c = setTimeout( () => {
            R(w)
        }
        , s);
        return () => {
            clearTimeout(c)
        }
    }
    , [w, s]),
    r
}
  , ju = () => {
    var gt, Nt, Tt, vt, Bt, bt, At, Ct, jt, Ft, St, mt, It, Rt, Lt, Et, $t, qt, Wt, Dt, Ut, Kt, _t, Mt, Vt, Xt, Yt, zt, Gt, Qt, Ot, Zt, Ht, Jt, Pt, ft, en, tn, nn, un, sn, an, ln, on, cn, rn, pn, dn, kn;
    const {getSupportedBrc20TokensExchange: w} = Yn()
      , {data: s} = I({
        queryKey: ["getSupportedBrc20TokensExchange"],
        queryFn: () => w(),
        refetchOnWindowFocus: !1,
        refetchInterval: !1,
        retry: !1
    })
      , r = s || zn
      , [{wallet: R}] = Gn()
      , {setValidNetwork: c, checkIsValidNetwork: M} = Qn()
      , k = (Nt = (gt = R == null ? void 0 : R.accounts[0]) == null ? void 0 : gt.address) == null ? void 0 : Nt.toLowerCase()
      , [L,D] = On()
      , f = L.get("referralAddress")
      , {referralAddress: Q} = Zn()
      , ge = Bu()
      , {changeProvider: V} = Hn()
      , [me,ee] = g.useState(!1)
      , O = Jn()
      , Me = Pn()
      , N = fn()
      , X = eu()
      , [e,t] = g.useState({
        inputAddress: k,
        inputAmount: void 0,
        inputBalance: null,
        inputToken: (Tt = r == null ? void 0 : r[nt]) == null ? void 0 : Tt.find(a => a.value.type.includes("evm") && a.value.symbol.includes("USDT")).value,
        inputNetwork: nt,
        outputAddress: void 0,
        referralAddress: f || Q ? f || Q : void 0,
        outputAmount: void 0,
        outputBalance: null,
        outputToken: (vt = r == null ? void 0 : r[nt]) == null ? void 0 : vt.filter(a => !a.value.type.includes("evm"))[0].value,
        outputNetwork: "Bitcoin",
        selectedDex: xn[0].value,
        speedType: In[2].key,
        slippage: Rn[1].value,
        confirmations: 20,
        isFixedOutputToken: !1,
        isReverseSwapRate: !1
    })
      , d = (e == null ? void 0 : e.inputAmount) || "0.0"
      , o = ((Bt = e == null ? void 0 : e.inputToken) == null ? void 0 : Bt.type) === "brc20" || ((bt = e.outputToken) == null ? void 0 : bt.type) === "brc20"
      , y = ((At = e == null ? void 0 : e.inputToken) == null ? void 0 : At.type) === "rune" || ((Ct = e.outputToken) == null ? void 0 : Ct.type) === "rune"
      , C = ((jt = e == null ? void 0 : e.inputToken) == null ? void 0 : jt.address) === ((Ft = e == null ? void 0 : e.outputToken) == null ? void 0 : Ft.address) ? "transfer" : "exchange"
      , S = ku(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , Ve = tu()
      , U = a => {
        var _, Ae, Ce, $, $e, qe, je, Qe;
        const {name: l, value: i} = a.target;
        if (l === "type")
            return t({
                ...e,
                [l]: i,
                inputNetwork: e.outputNetwork,
                outputNetwork: e.inputNetwork,
                inputToken: e.outputToken,
                outputToken: e.inputToken,
                inputAmount: Ke || e == null ? void 0 : e.outputAmount,
                outputAmount: void 0,
                inputAddress: e.inputNetwork === "Bitcoin" ? k : A,
                outputAddress: e.inputAddress,
                inputBalance: e.outputBalance,
                outputBalance: e.inputBalance
            }),
            O({
                type: "setWalletOptions",
                value: {
                    show: !1,
                    value: e.inputNetwork === "Bitcoin" ? "evm" : "bitcoin"
                }
            }),
            null;
        if (l === "inputToken") {
            const T = i.disable ? i.type === "rune" ? He.polygon : i.type === "brc20" ? He.binance : void 0 : e.outputNetwork
              , q = i.network !== "Bitcoin" ? r == null ? void 0 : r[i.network].find(F => {
                var v, x, P;
                return F.key === ((v = e == null ? void 0 : e.outputToken) == null ? void 0 : v.symbol) && !((P = (x = F.value) == null ? void 0 : x.type) != null && P.includes("evm"))
            }
            ) : r == null ? void 0 : r[T].find(F => {
                var v, x, P;
                return F.key === ((v = e == null ? void 0 : e.outputToken) == null ? void 0 : v.symbol) && ((P = (x = F.value) == null ? void 0 : x.type) == null ? void 0 : P.includes("evm"))
            }
            )
              , b = q && !((_ = q == null ? void 0 : q.value) != null && _.disable) ? q : void 0;
            return t({
                ...e,
                [l]: i,
                outputToken: b ? b.value : void 0,
                inputNetwork: i.network,
                outputNetwork: T,
                outputAmount: void 0
            }),
            ee(!1),
            V(i.network !== "Bitcoin" ? i.network : T),
            Fe({
                category: "trade",
                action: "change_inputToken",
                properties: [{
                    inputToken: i == null ? void 0 : i.symbol
                }]
            }),
            null
        }
        if (l === "outputToken") {
            const T = i.network !== "Bitcoin" ? r == null ? void 0 : r[i.network].find(b => {
                var F, v, x;
                return b.key === ((F = e == null ? void 0 : e.inputToken) == null ? void 0 : F.symbol) && !((x = (v = b.value) == null ? void 0 : v.type) != null && x.includes("evm"))
            }
            ) : r == null ? void 0 : r[e.inputNetwork].find(b => {
                var F, v, x;
                return b.key === ((F = e == null ? void 0 : e.inputToken) == null ? void 0 : F.symbol) && ((x = (v = b.value) == null ? void 0 : v.type) == null ? void 0 : x.includes("evm"))
            }
            )
              , q = T && !((Ae = T == null ? void 0 : T.value) != null && Ae.disable) ? T : void 0;
            return t({
                ...e,
                [l]: i,
                outputNetwork: i.network,
                inputToken: q ? q.value : void 0,
                outputAmount: void 0
            }),
            ee(!1),
            V(i.network !== "Bitcoin" ? i.network : e.inputNetwork),
            Fe({
                category: "trade",
                action: "change_outputToken",
                properties: [{
                    outputToken: i == null ? void 0 : i.symbol
                }]
            }),
            null
        }
        if (l === "outputAmount")
            return t({
                ...e,
                [l]: i,
                isFixedOutputToken: !0
            }),
            null;
        if (l === "inputAmount")
            return t({
                ...e,
                [l]: i,
                isFixedOutputToken: !1
            }),
            null;
        if (l === "inputNetwork") {
            const T = r == null ? void 0 : r[i].find(v => {
                var x;
                return v.key === ((x = e == null ? void 0 : e.inputToken) == null ? void 0 : x.symbol)
            }
            )
              , q = (Ce = e == null ? void 0 : e.inputToken) != null && Ce.symbol && !(($ = T == null ? void 0 : T.value) != null && $.disable) ? T : void 0
              , b = r == null ? void 0 : r[i].find(v => {
                var x;
                return v.key === ((x = e == null ? void 0 : e.outputToken) == null ? void 0 : x.symbol)
            }
            )
              , F = b && !(($e = b == null ? void 0 : b.value) != null && $e.disable) ? b : void 0;
            return t({
                ...e,
                [l]: i,
                outputNetwork: "Bitcoin",
                inputToken: q ? q.value : void 0,
                outputToken: F ? F.value : void 0,
                outputAmount: void 0
            }),
            ee(!1),
            V(i),
            Fe({
                category: "trade",
                action: "change_inputNetwork",
                properties: [{
                    inputNetwork: i
                }]
            }),
            null
        }
        if (l === "outputNetwork") {
            const T = r == null ? void 0 : r[i].find(v => {
                var x, P, Oe;
                return v.key === ((x = e == null ? void 0 : e.inputToken) == null ? void 0 : x.symbol) && !((Oe = (P = v.value) == null ? void 0 : P.type) != null && Oe.includes("evm"))
            }
            )
              , q = T && !((qe = T == null ? void 0 : T.value) != null && qe.disable) ? T : void 0
              , b = r == null ? void 0 : r[i].find(v => {
                var x;
                return v.key === ((x = e == null ? void 0 : e.outputToken) == null ? void 0 : x.symbol)
            }
            )
              , F = (je = e == null ? void 0 : e.outputToken) != null && je.symbol && !((Qe = b == null ? void 0 : b.value) != null && Qe.disable) ? b : void 0;
            return t({
                ...e,
                [l]: i,
                inputNetwork: "Bitcoin",
                inputToken: q ? q.value : void 0,
                outputToken: F ? F.value : void 0,
                outputAmount: void 0
            }),
            ee(!1),
            V(i),
            Fe({
                category: "trade",
                action: "change_outputNetwork",
                properties: [{
                    outputNetwork: i
                }]
            }),
            null
        }
        t({
            ...e,
            [l]: i
        })
    }
      , te = at(d || 0, 500)
      , Ie = gu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , p = nu()
      , A = (St = p == null ? void 0 : p.wallet) == null ? void 0 : St.address;
    g.useEffect( () => {
        var a;
        if (p != null && p.wallet && (a = p == null ? void 0 : p.wallet.type) != null && a.includes("XVerse"))
            if (o || y) {
                const l = p == null ? void 0 : p.accounts.find(i => i.addressType === "p2tr");
                l && l.address && p.setWallet({
                    address: l.address,
                    publicKey: l.publicKey,
                    type: hn["XVerse-p2tr"],
                    icon: "xverse"
                })
            } else {
                const l = p == null ? void 0 : p.accounts.find(i => i.addressType === "p2sh");
                l && l.address && p.setWallet({
                    address: l.address,
                    publicKey: l.publicKey,
                    type: hn["XVerse-p2sh"],
                    icon: "xverse"
                })
            }
    }
    , [o, y, p.connected]),
    g.useEffect( () => {
        t({
            ...e,
            [(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "outputAddress" : "inputAddress"]: k
        })
    }
    , [k]),
    g.useEffect( () => {
        t({
            ...e,
            [(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "inputAddress" : "outputAddress"]: A
        })
    }
    , [A]),
    g.useEffect( () => {
        k && t({
            ...e,
            [(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "outputAddress" : "inputAddress"]: k
        }),
        O({
            type: "setWalletOptions",
            value: {
                show: !1,
                value: "evm"
            }
        }),
        V(nt)
    }
    , []);
    const {isFetching: ne} = I({
        queryKey: ["btcWalletBalance-CX", A, o, y],
        queryFn: () => p.getBalance(),
        onSuccess: a => t({
            ...e,
            [(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "inputBalance" : "outputBalance"]: a
        }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        enabled: !!A && !(o || y),
        retry: !1
    });
    I({
        queryKey: ["brc20Balance", A, e == null ? void 0 : e.inputToken, e.outputToken],
        queryFn: () => o ? S.getBrc20Balance((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e.inputToken : e.outputToken, A) : S.getRuneBalance((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e.inputToken : e.outputToken, A),
        onSuccess: a => t({
            ...e,
            [(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "inputBalance" : "outputBalance"]: a
        }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        enabled: ((mt = p == null ? void 0 : p.wallet.type) != null && mt.includes("XVerse") ? (It = p == null ? void 0 : p.wallet.type) == null ? void 0 : It.includes("p2tr") : !0) && !!A && (o || y) && !!((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e.inputToken : e.outputToken),
        retry: !1
    });
    const {data: H=0, isFetching: ue} = I({
        queryKey: ["btcPrice"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: E} = I({
        queryKey: [`tokenPrice-${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (Rt = e.inputToken) == null ? void 0 : Rt.symbolPrice : (Lt = e.outputToken) == null ? void 0 : Lt.symbolPrice}`],
        queryFn: () => {
            var a, l;
            return Ve.getTokenPrice((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (a = e.inputToken) == null ? void 0 : a.symbolPrice : (l = e.outputToken) == null ? void 0 : l.symbolPrice)
        }
        ,
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        enabled: (o || y) && !!((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (Et = e.inputToken) != null && Et.symbolPrice : ($t = e.outputToken) != null && $t.symbolPrice),
        retry: !1
    })
      , Y = o || y ? E : H
      , {data: j, isLoading: We} = I(["calculateFeeMemoData-CX", e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork], () => S.getFeeParams(), {
        refetchInterval: !1,
        enabled: !!((qt = e.inputToken) != null && qt.address),
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: u, isLoading: ke} = I(["getFeeRate", e == null ? void 0 : e.speedType], () => S.getFeeRate(e == null ? void 0 : e.speedType), {
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: K={}} = I({
        queryKey: ["nativeTokenBTCRate"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , B = K == null ? void 0 : K[uu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)]
      , {data: m={
        totalFeeBTC: 0,
        networkFeeBTC: 0,
        lockerFeeBTC: 0,
        protocolFeeBTC: 0,
        receivedAmount: 0
    }, error: se, isLoading: ie} = I({
        queryKey: ["feeObject-CX", te, j, e == null ? void 0 : e.inputToken, e.outputToken, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork, o || y, B],
        queryFn: () => j ? S.calculateOutputFee(d, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.inputToken, e.outputToken, j, (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap", B) : null,
        refetchInterval: !1,
        enabled: !!S.contract && !!te && !!j && !(e != null && e.isFixedOutputToken) && !!((Wt = e == null ? void 0 : e.inputToken) != null && Wt.address) && !!((Dt = e.outputToken) != null && Dt.address),
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: ae, isLoading: De} = I({
        queryKey: ["transactionFeeBTC", u, A, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork],
        queryFn: () => S.calculateTransactionFeeBTC(C === "exchange" ? "wrapAndSwap" : "wrap", u),
        refetchInterval: !1,
        enabled: !!A && !ke,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , le = !!((Ut = e == null ? void 0 : e.inputToken) != null && Ut.address) && !!((Kt = e.outputToken) != null && Kt.address) && ie || !!((_t = e == null ? void 0 : e.inputToken) != null && _t.address) && !!((Mt = e.outputToken) != null && Mt.address) && We
      , Ne = (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap"
      , oe = g.useMemo( () => j ? S.calculateMinimumBtcOrBrc20Amount(o ? "brc20" : y ? "rune" : Ne, C, B, j) : 0, [o, y, Ne, B, j])
      , ce = at(e == null ? void 0 : e.referralAddress, 500)
      , {data: h} = I({
        queryKey: ["getUsedReferredDetailWithAddress", (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputAddress : e == null ? void 0 : e.inputAddress],
        queryFn: () => ge.getUsedReferredDetailWithAddress((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputAddress : e == null ? void 0 : e.inputAddress),
        refetchInterval: !1,
        enabled: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? !!(e != null && e.outputAddress) : !!(e != null && e.inputAddress),
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: Te, isLoading: Re} = I({
        queryKey: ["getAddressFromENS", ce],
        queryFn: () => ce ? ge.getAddressFromENS(ce) : null,
        refetchInterval: !1,
        enabled: !!ce,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , ve = h != null && h.isReferred ? "You have already used a Referral Address" : e != null && e.referralAddress && (Te === null || !Te) && !Re ? "Your Referral Address is incorrect" : void 0
      , {isFetching: Le} = I({
        queryKey: [`tokenOutputBalance-CX-${(Vt = e.outputToken) == null ? void 0 : Vt.symbol}`, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork, k],
        queryFn: () => Ie.getTokenBalance(e.outputToken, 8),
        onSuccess: a => t({
            ...e,
            outputBalance: a
        }),
        refetchInterval: !1,
        enabled: !!k && !!((Xt = e.outputToken) != null && Xt.address) && (e == null ? void 0 : e.inputNetwork) === "Bitcoin",
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {isFetching: Be} = I({
        queryKey: [`tokenInputBalance-CX-${(Yt = e == null ? void 0 : e.inputToken) == null ? void 0 : Yt.symbol}`, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork, k],
        queryFn: () => Ie.getTokenBalance(e == null ? void 0 : e.inputToken, 8),
        onSuccess: a => t({
            ...e,
            inputBalance: a
        }),
        refetchInterval: !1,
        enabled: !!k && !!((zt = e == null ? void 0 : e.inputToken) != null && zt.address) && (e == null ? void 0 : e.inputNetwork) !== "Bitcoin",
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , re = Tu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , {error: Ee, data: Z, isFetching: Xe} = I({
        queryKey: ["outputDetails", te, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork, e.outputToken, e == null ? void 0 : e.inputToken, o || y],
        queryFn: () => S.calculateOutputDetails(d, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.inputToken, e.outputToken, j, B),
        onSuccess: a => {
            var i, _;
            const l = Math.sign(+a.outputAmount) === 1 || Math.sign(+a.outputAmount) === 0 ? G(a.outputAmount, 5) : void 0;
            t({
                ...e,
                outputAmount: l
            }),
            +d != 0 && +a.outputAmount != 0 && Fe({
                category: "trade",
                action: "change_amount",
                properties: [{
                    inputAmount: d
                }, {
                    inputAmountUSD: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (d || 0) * +Y : (d || 0) * +(ye || 0)
                }, {
                    type: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap"
                }, {
                    outputAmount: l
                }, {
                    outputAmountUSD: (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" ? (l || 0) * +Y : (l || 0) * +(ye || 0)
                }, {
                    network: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputNetwork : e == null ? void 0 : e.inputNetwork
                }, {
                    inputToken: (i = e == null ? void 0 : e.inputToken) == null ? void 0 : i.symbol
                }, {
                    outputToken: (_ = e == null ? void 0 : e.outputToken) == null ? void 0 : _.symbol
                }]
            })
        }
        ,
        onError: () => {
            t({
                ...e,
                outputAmount: void 0
            })
        }
        ,
        enabled: !!S.contract && !!re.contract && !!((Gt = e == null ? void 0 : e.inputToken) != null && Gt.symbol) && !!((Qt = e.outputToken) != null && Qt.symbol) && !(e != null && e.isFixedOutputToken) && !!j,
        refetchOnWindowFocus: !1,
        refetchInterval: !1,
        retry: !1
    })
      , {data: Je} = I({
        queryKey: [`minimumBurnInputTokenAmount-${(Ot = e == null ? void 0 : e.inputToken) == null ? void 0 : Ot.symbol}-${(Zt = e.outputToken) == null ? void 0 : Zt.symbol}`, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork, k],
        queryFn: () => gn(e == null ? void 0 : e.inputNetwork) ? re.getAmountsInConnector(oe || "0", e == null ? void 0 : e.inputToken, e.outputToken) : re.getAmountsIn(oe || "0", e == null ? void 0 : e.inputToken, e.outputToken),
        refetchInterval: !1,
        enabled: !!((Ht = e == null ? void 0 : e.inputToken) != null && Ht.address) && !!((Jt = e.outputToken) != null && Jt.address) && (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" && C === "exchange" && !!j,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , Pe = at(e == null ? void 0 : e.outputAmount, 500)
      , {error: fe, data: we, isFetching: Ye} = I({
        queryKey: ["inputDetails", Pe, e.outputToken, e == null ? void 0 : e.inputToken],
        queryFn: () => S.calculateInputDetails(e == null ? void 0 : e.outputAmount, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.inputToken, e.outputToken, j, B),
        onSuccess: a => {
            t({
                ...e,
                inputAmount: Math.sign(+a.inputAmount) === 1 || Math.sign(+a.inputAmount) === 0 ? a.inputAmount : null
            })
        }
        ,
        onError: () => {
            t({
                ...e,
                inputAmount: null
            })
        }
        ,
        enabled: !!S.contract && !!(e != null && e.outputAmount) && !!re.contract && !!((Pt = e == null ? void 0 : e.inputToken) != null && Pt.symbol) && !!((ft = e.outputToken) != null && ft.symbol) && (e == null ? void 0 : e.isFixedOutputToken) && !!j,
        refetchOnWindowFocus: !1,
        refetchInterval: !1,
        retry: !1
    })
      , Ke = C === "exchange" ? e != null && e.isFixedOutputToken ? fe : Ee : se
      , ze = e != null && e.isFixedOutputToken ? Ye : Xe
      , Ge = e != null && e.isFixedOutputToken ? we == null ? void 0 : we.outputAmountTeleBTC : Z == null ? void 0 : Z.outputAmountTeleBTC
      , et = e != null && e.isFixedOutputToken ? we == null ? void 0 : we.inputAmountTeleBTC : Z == null ? void 0 : Z.inputAmountTeleBTC
      , W = G((e.outputAmount || 0) * (1 - (e == null ? void 0 : e.slippage) / 100))
      , pe = !1
      , _e = +e.inputAmount > 0 && +e.outputAmount > 0 ? e.outputAmount / e.inputAmount : 0
      , lt = Number(e.inputNetwork === "Bitcoin" ? e.outputAmount : Ge) / Number(e.inputNetwork === "Bitcoin" ? et : d)
      , $n = C === "exchange" ? +d == 0 ? void 0 : Math.abs((lt - _e) / _e * 100) : "0"
      , ot = !(e != null && e.outputAddress) || (e == null ? void 0 : e.outputAddress) === ""
      , ct = (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" && !su(e == null ? void 0 : e.outputAddress) || (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && !iu(e == null ? void 0 : e.outputAddress)
      , ut = C === "exchange" ? o || y ? 0 : (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? G(+(oe || 0), (en = e.inputToken) == null ? void 0 : en.decimal) : G(+(Je || 0), (tn = e.inputToken) == null ? void 0 : tn.decimal) : G(+(oe || 0), (nn = e.inputToken) == null ? void 0 : nn.decimal)
      , tt = !!((+ut > +d || Number(d) === 0) && !le && !ne && ((un = e == null ? void 0 : e.inputToken) != null && un.address) && ((sn = e.outputToken) != null && sn.address))
      , rt = o || y ? +e.inputBalance : +e.inputBalance - ((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? +ae : 0)
      , pt = (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? rt > 0 ? G(rt, (an = e.inputToken) == null ? void 0 : an.decimal) : 0 : e.inputBalance
      , st = Number(d) > Number((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? pt : e.inputBalance) && !le && ((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? !Xe : !Ye) && !ne
      , {data: ye, isFetching: qn} = I({
        queryKey: [`tokenPrice-${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (ln = e.outputToken) == null ? void 0 : ln.symbolPrice : (on = e.inputToken) == null ? void 0 : on.symbolPrice}`, (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (cn = e.outputToken) == null ? void 0 : cn.symbolPrice : (rn = e.inputToken) == null ? void 0 : rn.symbolPrice, e == null ? void 0 : e.inputNetwork, e == null ? void 0 : e.outputNetwork],
        queryFn: () => {
            var a, l;
            return Ve.getTokenPrice((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (a = e.outputToken) == null ? void 0 : a.symbolPrice : (l = e.inputToken) == null ? void 0 : l.symbolPrice)
        }
        ,
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        enabled: !!((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (pn = e.outputToken) != null && pn.symbolPrice : (dn = e.inputToken) != null && dn.symbolPrice)
    })
      , J = Nn(a => {
        var l, i, _, Ae, Ce;
        return S == null ? void 0 : S[((l = e == null ? void 0 : e.inputToken) == null ? void 0 : l.type) === "brc20" ? "signAndSendTransactionBRC20Req" : ((i = e == null ? void 0 : e.inputToken) == null ? void 0 : i.type) === "rune" ? "signAndSendTransactionRuneReq" : (Ae = (_ = p == null ? void 0 : p.wallet) == null ? void 0 : _.type) != null && Ae.includes("Snap") ? "signAndSendTransactionSnap" : "signAndSendTransactionAll"](C === "exchange" ? e.outputToken : {
            address: "0000000000000000000000000000000000000000",
            decimal: 0
        }, d, C === "exchange", e.speedType, C === "exchange" ? m == null ? void 0 : m.receivedAmount : "0", e.outputAddress, e == null ? void 0 : e.slippage, +(m == null ? void 0 : m.networkFeeBTC), (Ce = e.selectedDex) == null ? void 0 : Ce.address, !(e != null && e.isFixedOutputToken), (e == null ? void 0 : e.inputNetwork) !== "Bitcoin", e, h == null ? void 0 : h.isReferred)
    }
    )
      , dt = wu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , kt = yu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , Wn = xu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , wt = hu(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork)
      , be = Nn(a => {
        const l = G((Ge || 0) * (1 - (e == null ? void 0 : e.slippage) / 100));
        return C === "exchange" ? (o ? dt : y ? kt : gn(e.inputNetwork) ? Wn : wt).ccExchangeAndBurn(d, l, e.inputToken, e.outputToken, !(e != null && e.isFixedOutputToken), e.outputAddress, e, h == null ? void 0 : h.isReferred) : (o ? dt : y ? kt : wt).ccBurn(e.inputToken, d, e.outputAddress, e, h == null ? void 0 : h.isReferred)
    }
    )
      , it = async () => {
        var a, l, i, _, Ae, Ce;
        if (Fe({
            category: "trade",
            action: "try_submit",
            properties: [{
                type: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap"
            }, {
                inputAmount: d
            }, {
                outputAmount: e.outputAmount
            }, {
                inputAmountUSD: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (d || 0) * +Y : (d || 0) * +(ye || 0)
            }, {
                outputAmountUSD: (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" ? (e.outputAmount || 0) * +Y : (e.outputAmount || 0) * +(ye || 0)
            }, {
                network: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputNetwork : e == null ? void 0 : e.inputNetwork
            }, {
                inputToken: (a = e == null ? void 0 : e.inputToken) == null ? void 0 : a.symbol
            }, {
                outputToken: (l = e == null ? void 0 : e.outputToken) == null ? void 0 : l.symbol
            }]
        }),
        !me && ht)
            return ee(!0),
            null;
        ou().trackGTMEventSwap(),
        (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? J != null && J.isSuccess || (N.success({
            topTitle: "Submit swap",
            haveLoading: !0,
            message: (_ = (i = p == null ? void 0 : p.wallet) == null ? void 0 : i.type) != null && _.includes("Ledger") || (Ce = (Ae = p == null ? void 0 : p.wallet) == null ? void 0 : Ae.type) != null && Ce.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
            token: {
                inputToken: e == null ? void 0 : e.inputToken,
                inputAmount: e == null ? void 0 : e.inputAmount,
                outputToken: e == null ? void 0 : e.outputToken,
                outputAmount: e == null ? void 0 : e.outputAmount
            }
        }),
        J.mutate({
            type: "normal"
        }, {
            onSuccess: () => {
                var Qe, T, q, b, F, v, x, P, Oe, wn, yn;
                const $ = (T = (Qe = e.outputToken) == null ? void 0 : Qe.address) == null ? void 0 : T.toLowerCase()
                  , $e = (e == null ? void 0 : e.outputNetwork) || He.polygon
                  , qe = (F = (b = (q = cu) == null ? void 0 : q[$e]) == null ? void 0 : b.WNATIVEAddress) == null ? void 0 : F.toLowerCase()
                  , je = !((x = (v = e.outputToken) == null ? void 0 : v.symbol) != null && x.startsWith("W")) && $ === qe;
                N.success({
                    topTitle: "Your request is submitted!",
                    title: void 0,
                    actionContent: je ? void 0 : `Add ${(P = e.outputToken) == null ? void 0 : P.symbol} to your wallet`,
                    message: null,
                    onAction: je ? void 0 : () => {
                        vu(e.outputToken)
                    }
                    ,
                    remaining: Tn,
                    isBrc20Type: o,
                    isRuneType: y,
                    token: {
                        inputToken: e == null ? void 0 : e.inputToken,
                        inputAmount: e == null ? void 0 : e.inputAmount,
                        outputToken: e == null ? void 0 : e.outputToken,
                        outputAmount: e == null ? void 0 : e.outputAmount
                    }
                }),
                J.reset(),
                Me.refetchQueries({
                    queryKey: [`tokenOutputBalance-CX-${(Oe = e.outputToken) == null ? void 0 : Oe.symbol}`]
                }),
                Fe({
                    category: "trade",
                    action: "submit",
                    properties: [{
                        type: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap"
                    }, {
                        inputAmount: d
                    }, {
                        outputAmount: e.outputAmount
                    }, {
                        inputAmountUSD: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (d || 0) * +Y : (d || 0) * +(ye || 0)
                    }, {
                        outputAmountUSD: (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" ? (e.outputAmount || 0) * +Y : (e.outputAmount || 0) * +(ye || 0)
                    }, {
                        network: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputNetwork : e == null ? void 0 : e.inputNetwork
                    }, {
                        inputToken: (wn = e == null ? void 0 : e.inputToken) == null ? void 0 : wn.symbol
                    }, {
                        outputToken: (yn = e == null ? void 0 : e.outputToken) == null ? void 0 : yn.symbol
                    }]
                })
            }
            ,
            onError: $ => {
                var $e, qe, je;
                J.reset(),
                ($e = $ == null ? void 0 : $.message) != null && $e.includes("user rejected transaction") || (qe = $ == null ? void 0 : $.message) != null && qe.includes("User rejected the request") || (je = $ == null ? void 0 : $.message) != null && je.includes("User Declined") ? (J.reset(),
                N.clearAll()) : N.error({
                    topTitle: "Transaction failed!",
                    title: "Your last transaction failed. Please try again.",
                    actionContent: "Try again",
                    error: ($ == null ? void 0 : $.message) || "",
                    onAction: () => {
                        N.clearAll(),
                        it()
                    }
                    ,
                    closeText: "Cancel",
                    onClose: () => {
                        J.reset(),
                        N.clearAll()
                    }
                })
            }
        })) : yt()
    }
      , Dn = () => {
        (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? A ? it() : O({
            type: "toggleWalletOptions",
            value: "bitcoin"
        }) : k ? M(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork) ? it() : c(e.inputNetwork === "Bitcoin" ? e.outputNetwork : e.inputNetwork) : O({
            type: "toggleWalletOptions",
            value: "evm"
        })
    }
      , Un = () => {
        if ((e == null ? void 0 : e.inputNetwork) === "Bitcoin")
            return !A;
        if (!k)
            return !0
    }
      , yt = () => {
        be.mutate(e, {
            onSuccess: () => {
                var a, l, i;
                N.success({
                    topTitle: "Your request is submitted!",
                    actionContent: "Check my request status",
                    message: null,
                    onAction: () => {
                        N.clearAll(),
                        X(`/transaction-history?type=${o ? "BRC-20" : y ? "RUNE" : "BTC"}`)
                    }
                    ,
                    remaining: vn(e == null ? void 0 : e.outputAmount, e == null ? void 0 : e.inputNetwork, o ? "BRC-20" : y ? "RUNE" : "BTC"),
                    isBrc20Type: o,
                    token: {
                        inputToken: e == null ? void 0 : e.inputToken,
                        inputAmount: e == null ? void 0 : e.inputAmount,
                        outputToken: e == null ? void 0 : e.outputToken,
                        outputAmount: e == null ? void 0 : e.outputAmount
                    }
                }),
                be.reset(),
                Me.refetchQueries({
                    queryKey: ["btcWalletBalance-CX"]
                }),
                Me.refetchQueries({
                    queryKey: [`tokenInputBalance-CX-${(a = e == null ? void 0 : e.inputToken) == null ? void 0 : a.symbol}`]
                }),
                Fe({
                    category: "trade",
                    action: "submit",
                    properties: [{
                        type: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "wrap" : "unwrap"
                    }, {
                        inputAmount: d
                    }, {
                        outputAmount: e.outputAmount
                    }, {
                        inputAmountUSD: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? (d || 0) * +Y : (d || 0) * +(ye || 0)
                    }, {
                        outputAmountUSD: (e == null ? void 0 : e.inputNetwork) !== "Bitcoin" ? (e.outputAmount || 0) * +Y : (e.outputAmount || 0) * +(ye || 0)
                    }, {
                        network: (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? e == null ? void 0 : e.outputNetwork : e == null ? void 0 : e.inputNetwork
                    }, {
                        inputToken: (l = e == null ? void 0 : e.inputToken) == null ? void 0 : l.symbol
                    }, {
                        outputToken: (i = e == null ? void 0 : e.outputToken) == null ? void 0 : i.symbol
                    }]
                })
            }
            ,
            onError: a => {
                var l, i, _;
                be.reset(),
                (l = a == null ? void 0 : a.message) != null && l.includes("user rejected transaction") || (i = a == null ? void 0 : a.message) != null && i.includes("User rejected the request") || (_ = a == null ? void 0 : a.message) != null && _.includes("User Declined") ? (be.reset(),
                N.clearAll()) : N.error({
                    topTitle: "Transaction failed!",
                    title: "Your last transaction failed. Please try again.",
                    actionContent: "Try again",
                    error: (a == null ? void 0 : a.message) || "",
                    onAction: () => {
                        N.clearAll(),
                        yt()
                    }
                    ,
                    closeText: "Cancel",
                    onClose: () => {
                        be.reset(),
                        N.clearAll()
                    }
                })
            }
        })
    }
      , {data: z} = I({
        queryKey: ["getEnableStats"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , Kn = (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? o ? z == null ? void 0 : z.brc20WrapSwap : z == null ? void 0 : z.btcWrapSwap : o ? z == null ? void 0 : z.brc20SwapUnwrap : z == null ? void 0 : z.btcSwapUnwrap
      , xt = z ? Kn ? void 0 : `${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? `Sell ${o ? "BRC20" : "BTC"}` : `Buy ${o ? "BRC20" : "BTC"}`} is currently disabled.
We are working to enable it soon.` : void 0
      , _n = ((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? !A : !k) ? `${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "BTC" : "Web3"} wallet is not connected` : !e.inputBalance && ((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? !ne : !Be) || e.inputBalance === 0 ? (kn = e == null ? void 0 : e.inputToken) != null && kn.address ? "Your balance is 0" : void 0 : st ? "Insufficient Balance" : void 0
      , Mn = ((e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? !A : !k) ? `${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "BTC" : "Web3"} wallet is not connected` : d === 0 ? "Your input amount is 0" : tt ? `Minimum input amount is ${Number(ut)}` : void 0
      , ht = !!xt || st || tt || (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && ne || (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && tt || (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && le || !!Ke || (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && ze || ot || ct || (h != null && h.isReferred ? !1 : !!ve) || !j || !(o || y) && (e == null ? void 0 : e.inputNetwork) === "Bitcoin" && !(m != null && m.networkFeeBTC) || !(e != null && e.outputAmount)
      , Vn = g.useMemo( () => {
        if (e.inputToken)
            if (e.outputToken)
                if (e.outputAddress) {
                    if (!d || +d == 0)
                        return "Enter an amount"
                } else
                    return `Enter ${(e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? "EVM" : "Bitcoin"} recipient address`;
            else
                return "Select output token";
        else
            return "Select input token"
    }
    , [e.inputToken, e.outputToken, e.outputAddress, d])
      , Xn = g.useMemo( () => (e == null ? void 0 : e.inputNetwork) === "Bitcoin" ? Tn : vn(e == null ? void 0 : e.outputAmount, e == null ? void 0 : e.inputNetwork, o ? "BRC-20" : y ? "RUNE" : "BTC"), [e.inputNetwork, e.outputNetwork, e == null ? void 0 : e.outputAmount]);
    return {
        method: {
            handleChange: U,
            handlePreSubmit: Dn,
            checkWalletDisConnectByType: Un
        },
        data: {
            remainingTime: Xn,
            dexList: xn,
            expectedWaitingTime: au,
            feeObject: m,
            networkOptions: lu,
            tokenOptions: r,
            btcPrice: Y,
            tokenPrice: ye,
            currentSwapRate: _e,
            priceImpact: $n,
            newSwapRate: lt,
            minimumOutputAmount: W,
            maxInput: pt,
            minInput: ut,
            account: k,
            bitcoinWalletAddress: A,
            isReferred: h == null ? void 0 : h.isReferred,
            isBrc20Type: o,
            buttonText: Vn,
            exchangeType: C
        },
        state: {
            form: e,
            isInitForm: me
        },
        dispatch: {},
        loading: {
            detailsLoading: ze,
            tokenInputBalanceLoading: Be,
            tokenOutputBalanceLoading: Le,
            btcWalletBalanceLoading: ne,
            currentSwapRateLoading: pe,
            btcPriceLoading: ue,
            feeLoading: le,
            tokenPriceLoading: qn,
            formLoading: (J == null ? void 0 : J.isLoading) || (be == null ? void 0 : be.isLoading)
        },
        error: {
            lowBalanceError: tt,
            outputAddressError: ot,
            outputAddressInvalidError: ct,
            maxBalanceError: st,
            maxBalanceErrorMessage: _n,
            minInputErrorMessage: Mn,
            errorDetails: Ke,
            referralAddressInvalidError: ve,
            enableAuthError: xt
        },
        disabled: {
            formDisabled: ht
        }
    }
}
  , Fu = ({onChange: w, form: s, defaultShowFullDetails: r}) => {
    var M, k;
    const [R,c] = g.useState(r);
    return g.useEffect( () => {
        c(r)
    }
    , [r]),
    n.jsxs("div", {
        className: "flex flex-col  justify-center items-center",
        children: [n.jsx("div", {
            className: "flex flex-row items-center text-gray-light text-sm p-2 gap-2",
            children: n.jsxs("button", {
                className: "flex justify-center  items-center px-1  relative",
                onClick: () => {
                    c(!R)
                }
                ,
                children: [n.jsx("span", {
                    children: "Advanced setting"
                }), n.jsx("span", {
                    className: Se("  flex items-center  justify-center  w-7 h-7 relative ", R ? "rotate-180 top-0" : "top-[1px]"),
                    children: n.jsx(de, {
                        src: "/images/arrow-down.svg"
                    })
                })]
            })
        }), R && n.jsxs("div", {
            className: "flex flex-col justify-start w-full gap-2 pb-2",
            children: [n.jsx("span", {
                className: "text-sm ",
                children: "Slippage tolerance"
            }), n.jsx("div", {
                className: "flex flex-row w-full gap-2",
                children: (M = Rn) == null ? void 0 : M.map(L => n.jsxs("span", {
                    className: Se(" p-3 rounded-md text-sm w-full text-center cursor-pointer hover:bg-ground_border-lighter ", s.slippage === L.value ? "bg-ground_border-lighter text-primary" : "bg-ground-lighter text-primary"),
                    onClick: () => {
                        w({
                            target: {
                                name: "slippage",
                                value: L.value
                            }
                        })
                    }
                    ,
                    children: [L.value, "%"]
                }, L.value + "_slippage"))
            }), (s == null ? void 0 : s.inputNetwork) === "Bitcoin" && n.jsxs(n.Fragment, {
                children: [n.jsx("span", {
                    className: "text-sm ",
                    children: "Network fee"
                }), n.jsx("div", {
                    className: "flex flex-row w-full gap-2",
                    children: (k = In) == null ? void 0 : k.map(L => n.jsx("span", {
                        className: Se(" p-3 rounded-md text-sm w-full text-center cursor-pointer hover:bg-ground_border-lighter ", s.speedType === L.key ? "bg-ground_border-lighter  text-primary" : "bg-ground-lighter text-primary"),
                        onClick: () => {
                            w({
                                target: {
                                    name: "speedType",
                                    value: L.key
                                }
                            })
                        }
                        ,
                        children: L.value
                    }, L.key))
                })]
            })]
        })]
    })
}
;
function mn({name: w, value: s, options: r=[], tokenOptions: R, label: c, placeholder: M="Select a option", prePlaceholder: k="", onChange: L, errorMessage: D, extraMessage: f, required: Q, className: ge, inputClassName: V, disabled: me, nameP: ee, optionsP: O, onChangeP: Me, valueP: N, showDisableOptions: X=!1, network: e}) {
    var A, ne, H, ue, E, Y, j, We;
    const [t,d] = g.useState(!1)
      , [o,y] = g.useState(N);
    g.useEffect( () => {
        y(N)
    }
    , [N]);
    const [C,S] = g.useState("")
      , Ve = u => {
        const {name: ke, value: K} = u.target;
        S(K)
    }
      , U = g.useMemo( () => {
        var K;
        return ((o != null && o.value ? (K = R == null ? void 0 : R[(N == null ? void 0 : N.value) === "Bitcoin" ? e : o == null ? void 0 : o.value]) == null ? void 0 : K.filter(B => (N == null ? void 0 : N.value) === "Bitcoin" ? !B.value.type.includes("evm") : B.value.type.includes("evm")) : []) || []).filter(B => {
            var m, se, ie, ae;
            return ((se = (m = B == null ? void 0 : B.value) == null ? void 0 : m.address) == null ? void 0 : se.toLowerCase().includes(C.toLowerCase())) || ((ae = (ie = B == null ? void 0 : B.value) == null ? void 0 : ie.symbol) == null ? void 0 : ae.toLowerCase().includes(C.toLowerCase()))
        }
        )
    }
    , [o == null ? void 0 : o.value, R, C, o, e])
      , te = u => {
        L({
            target: {
                name: w,
                value: u == null ? void 0 : u.value
            }
        }),
        p()
    }
      , Ie = u => {
        y(u)
    }
      , p = () => {
        d(!1)
    }
    ;
    return n.jsxs("div", {
        className: Se("", ge && ge, "border border-ground_border-lighter rounded-lg"),
        children: [n.jsx(Fn, {
            value: s,
            onChange: te,
            disabled: me,
            children: n.jsx(Fn.Button, {
                className: Se("min-w-[164px] min-h-[62px] p-4 flex justify-between items-center", "relative w-full cursor-default rounded-lg  bg-ground-lighter    text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm", (Q && !(s != null && s.key || o != null && o.key) || D) && "border-2 border-red-400", "border border-ground_border-lighter rounded-lg", V),
                onClick: () => {
                    d(!t)
                }
                ,
                children: n.jsxs("div", {
                    className: "flex flex-col w-full",
                    children: [c && n.jsx("label", {
                        className: " text-primary-light mb-2 ",
                        children: c
                    }), n.jsxs("div", {
                        className: "flex flex-row justify-between w-full items-center",
                        children: [n.jsxs("span", {
                            className: " truncate text-primary flex items-center  gap-2 ",
                            children: [(s == null ? void 0 : s.icon) && n.jsxs("div", {
                                className: "flex relative",
                                children: [(s == null ? void 0 : s.icon) && n.jsx(de, {
                                    className: "cursor-pointer  mr-1 rounded-full",
                                    title: s == null ? void 0 : s.icon,
                                    src: `https://statics.teleportdao.xyz/coin/${(A = s == null ? void 0 : s.icon) == null ? void 0 : A.toUpperCase()}.png`,
                                    width: "32",
                                    height: "32",
                                    alt: "switch"
                                }), (s == null ? void 0 : s.iconPlus) && n.jsx(de, {
                                    className: "cursor-pointer  mr-1 rounded-full -ml-2",
                                    title: s == null ? void 0 : s.iconPlus,
                                    src: `https://statics.teleportdao.xyz/coin/${(ne = s == null ? void 0 : s.iconPlus) == null ? void 0 : ne.toUpperCase()}.png`,
                                    width: "32",
                                    height: "32",
                                    alt: "switch"
                                }), ((H = s == null ? void 0 : s.value) == null ? void 0 : H.network) && n.jsx(de, {
                                    className: "cursor-pointer absolute right-0 bottom-0 rounded-full",
                                    title: (ue = s == null ? void 0 : s.value) == null ? void 0 : ue.network,
                                    src: `/images/colorful/${(Y = (E = s == null ? void 0 : s.value) == null ? void 0 : E.network) == null ? void 0 : Y.toLowerCase()}.png`,
                                    style: {
                                        width: 13,
                                        height: 13
                                    },
                                    alt: "parent"
                                })]
                            }), k, s != null && s.key ? n.jsxs("div", {
                                className: "flex flex-col  justify-center",
                                children: [n.jsx("div", {
                                    className: "flex flex-row",
                                    children: s == null ? void 0 : s.key
                                }), ((j = s == null ? void 0 : s.value) == null ? void 0 : j.network) && n.jsxs("div", {
                                    className: "flex flex-row text-gray-light",
                                    children: ["on ", (We = s == null ? void 0 : s.value) == null ? void 0 : We.network]
                                })]
                            }) : n.jsx("span", {
                                className: "",
                                children: M
                            })]
                        }), !me && n.jsx("span", {
                            className: "pointer-events-none  flex options-center",
                            children: n.jsx(bu, {
                                className: "h-5 w-5 text-primary",
                                "aria-hidden": "true"
                            })
                        })]
                    })]
                })
            })
        }), n.jsx(Bn, {
            appear: !0,
            show: t,
            as: g.Fragment,
            children: n.jsxs(bn, {
                as: "div",
                className: "relative z-6",
                onClose: p,
                children: [n.jsx("div", {
                    className: "fixed inset-0 backdrop-blur-custom bg-secondary/70",
                    "aria-hidden": "true"
                }), n.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: n.jsx("div", {
                        className: "flex min-h-full items-center justify-center  text-center w-full",
                        children: n.jsx(Bn.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: n.jsxs(bn.Panel, {
                                className: Se(" w-full  transform  rounded-2xl bg-ground  text-left align-middle shadow-xl transition-all", "md:max-w-[550px]"),
                                children: [n.jsx("div", {
                                    className: "text-primary  p-6 w-full text-lg ",
                                    children: M
                                }), n.jsxs("div", {
                                    className: "flex relative max-w-[calc(100%)]  px-6   w-full ",
                                    children: [n.jsx(Ln, {
                                        name: "address",
                                        placeholder: "Search by symbol or address.",
                                        value: C,
                                        onChange: Ve,
                                        className: " w-full ",
                                        inputClassName: "h-[54px] bg-ground-light border-ground_border-lighter border ",
                                        haveIcon: !0
                                    }), n.jsx(de, {
                                        src: "/images/search.svg",
                                        title: "Search",
                                        height: "45",
                                        width: "45",
                                        className: "cursor-pointer absolute  left-4 top-6 pl-4 "
                                    })]
                                }), n.jsx("div", {
                                    className: " flex items-center px-6   text-sm my-2 gap-2 text-primary  flex-wrap   w-full  overflow-y-auto ",
                                    children: O == null ? void 0 : O.map(u => n.jsxs("button", {
                                        className: Se(" py-2 px-2  border border-ground_border-lighter rounded-lg  rounded-lg md:min-w-[74px] md:min-h-[80px] min-w-[97px] min-h-[66px] flex flex-col items-center justify-center gap-2", " ", (o == null ? void 0 : o.key) === (u == null ? void 0 : u.key) ? "bg-ground-lighter" : "", u != null && u.disable && !X ? "grayscale cursor-not-allowed" : "cursor-pointer hover:bg-ground-lighter"),
                                        onClick: () => {
                                            Ie(u)
                                        }
                                        ,
                                        disabled: (u == null ? void 0 : u.disable) && !X,
                                        title: u != null && u.disable && !X ? "Route not enabled. Please try on other networks." : void 0,
                                        children: [(u == null ? void 0 : u.icon) && n.jsx("span", {
                                            style: {
                                                width: 24,
                                                height: 24
                                            },
                                            children: n.jsx(de, {
                                                className: "cursor-pointer  rounded-lg",
                                                title: u == null ? void 0 : u.key,
                                                src: `/images/colorful/${u == null ? void 0 : u.icon}.png`,
                                                style: {
                                                    width: 24,
                                                    height: 24
                                                },
                                                alt: "option"
                                            })
                                        }), n.jsx("span", {
                                            className: "text-gray-light",
                                            children: u.key
                                        })]
                                    }, u == null ? void 0 : u.key))
                                }), n.jsx("div", {
                                    className: "mt-1 flex  px-6   justify-center  w-full h-[450px] overflow-y-auto ",
                                    children: n.jsx("div", {
                                        className: " flex flex-col mt-7  mb-6 text-sm text-primary  rounded-md  w-full ",
                                        children: U.map(u => {
                                            var ke, K, B, m, se, ie, ae, De, Ue, le, Ne, oe, ce, h, Te, Re, ve, Le, Be, re, Ee, Z;
                                            return n.jsx(En, {
                                                content: (ke = u.value) != null && ke.disable && !X ? n.jsxs("div", {
                                                    children: ["Route not enabled.", n.jsx("br", {}), " Please try on other networks."]
                                                }) : void 0,
                                                disabled: ((K = u.value) == null ? void 0 : K.disable) && !X,
                                                onClick: () => {
                                                    te(u)
                                                }
                                                ,
                                                className: Se(" py-3 px-3 rounded-lg my-1 w-full ", (s == null ? void 0 : s.key) === u.key && ((B = s == null ? void 0 : s.value) == null ? void 0 : B.network) === ((m = u == null ? void 0 : u.value) == null ? void 0 : m.network) ? "bg-ground-lighter" : "", (se = u.value) != null && se.disable && !X ? "grayscale cursor-not-allowed" : "cursor-pointer hover:bg-ground-lighter"),
                                                children: n.jsxs("span", {
                                                    className: "flex items-center gap-2 ",
                                                    children: [n.jsxs("div", {
                                                        className: "flex relative",
                                                        children: [(u == null ? void 0 : u.icon) && n.jsx(de, {
                                                            className: "cursor-pointer  mr-1 rounded-full",
                                                            title: u == null ? void 0 : u.icon,
                                                            src: `https://statics.teleportdao.xyz/coin/${(ie = u == null ? void 0 : u.icon) == null ? void 0 : ie.toUpperCase()}.png`,
                                                            width: "40",
                                                            height: "40",
                                                            alt: "icon"
                                                        }), (u == null ? void 0 : u.iconPlus) && n.jsx(de, {
                                                            className: "cursor-pointer  mr-1 rounded-full -ml-2",
                                                            title: u == null ? void 0 : u.iconPlus,
                                                            src: `https://statics.teleportdao.xyz/coin/${(ae = u == null ? void 0 : u.iconPlus) == null ? void 0 : ae.toUpperCase()}.png`,
                                                            width: "40",
                                                            height: "40",
                                                            alt: "icon"
                                                        }), ((De = u == null ? void 0 : u.value) == null ? void 0 : De.network) && n.jsx(de, {
                                                            className: "cursor-pointer absolute right-0 bottom-0 rounded-full",
                                                            title: (Ue = u == null ? void 0 : u.value) == null ? void 0 : Ue.network,
                                                            src: `/images/colorful/${(Ne = (le = u == null ? void 0 : u.value) == null ? void 0 : le.network) == null ? void 0 : Ne.toLowerCase()}.png`,
                                                            style: {
                                                                width: 13,
                                                                height: 13
                                                            },
                                                            alt: "parent"
                                                        })]
                                                    }), u != null && u.key && ((oe = u == null ? void 0 : u.value) != null && oe.network) ? n.jsxs("div", {
                                                        className: "flex flex-col  justify-center",
                                                        children: [n.jsxs("div", {
                                                            className: "flex flex-row",
                                                            children: [u == null ? void 0 : u.key, (ce = u == null ? void 0 : u.value) != null && ce.type && !((Te = (h = u == null ? void 0 : u.value) == null ? void 0 : h.type) != null && Te.includes("evm")) && !((ve = (Re = u == null ? void 0 : u.value) == null ? void 0 : Re.type) != null && ve.includes("btc")) ? ` (${(re = (Be = (Le = u == null ? void 0 : u.value) == null ? void 0 : Le.type) == null ? void 0 : Be.replace("brc20", "brc-20")) == null ? void 0 : re.toUpperCase()}) ` : ""]
                                                        }), n.jsxs("div", {
                                                            className: "flex flex-row text-gray-light",
                                                            children: ["on ", (Ee = u == null ? void 0 : u.value) == null ? void 0 : Ee.network]
                                                        })]
                                                    }) : n.jsx("span", {
                                                        className: "font-bold",
                                                        children: M
                                                    })]
                                                })
                                            }, (u == null ? void 0 : u.key) + ((Z = u == null ? void 0 : u.value) == null ? void 0 : Z.network))
                                        }
                                        )
                                    })
                                }), n.jsx("button", {
                                    role: "button",
                                    className: "absolute top-0 right-3 p-6 cursor-pointer",
                                    onClick: p,
                                    children: n.jsx("img", {
                                        src: ru,
                                        height: "30",
                                        width: "30"
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        }), f && n.jsx("div", {
            className: "text-primary text-xs mt-2 h-4 absolute",
            children: f && f
        }), D && n.jsx("div", {
            className: "text-red-400 text-xs mt-1 h-4 ",
            children: D && D
        })]
    })
}
function Uu() {
    var K, B, m, se, ie, ae, De, Ue, le, Ne, oe, ce, h, Te, Re, ve, Le, Be, re, Ee, Z, Xe, Je, Pe, fe, we, Ye, Ke, ze, Ge, et;
    const {method: {handleChange: w, handlePreSubmit: s, checkWalletDisConnectByType: r}, data: {remainingTime: R, feeObject: c, networkOptions: M, tokenOptions: k, currentSwapRate: L, priceImpact: D, minimumOutputAmount: f, btcPrice: Q, tokenPrice: ge, maxInput: V, minInput: me, bitcoinWalletAddress: ee, account: O, isReferred: Me, isBrc20Type: N, buttonText: X, exchangeType: e}, state: {form: t, isInitForm: d}, loading: {formLoading: o, detailsLoading: y, btcWalletBalanceLoading: C, tokenOutputBalanceLoading: S, tokenInputBalanceLoading: Ve, feeLoading: U, currentSwapRateLoading: te, tokenPriceLoading: Ie}, error: {lowBalanceError: p, outputAddressError: A, outputAddressInvalidError: ne, maxBalanceErrorMessage: H, minInputErrorMessage: ue, errorDetails: E, referralAddressInvalidError: Y, enableAuthError: j}, dispatch: {}, disabled: We} = ju()
      , u = [{
        title: "Swap rate",
        value: te ? n.jsx(he, {}) : L ? n.jsxs("span", {
            className: "flex gap-1",
            children: [pu(G(t.isReverseSwapRate ? 1 / L : L, 8)), " ", t.isReverseSwapRate ? ((B = t == null ? void 0 : t.inputToken) == null ? void 0 : B.symbol) || "" : ((K = t == null ? void 0 : t.outputToken) == null ? void 0 : K.symbol) || "", n.jsx(Sn, {
                onClick: () => {
                    w({
                        target: {
                            name: "isReverseSwapRate",
                            value: !t.isReverseSwapRate
                        }
                    })
                }
                ,
                height: 20,
                width: 20,
                title: "Switch",
                className: "bg-ground-lighter rounded-full rotate-90 cursor-pointer p-1 "
            }), "1 ", t.isReverseSwapRate ? ((se = t == null ? void 0 : t.outputToken) == null ? void 0 : se.symbol) || "" : ((m = t == null ? void 0 : t.inputToken) == null ? void 0 : m.symbol) || ""]
        }) : "-"
    }, {
        title: "Estimated time",
        value: t.inputToken && t.outputToken && t.outputAmount && +t.outputAmount != 0 ? (R || 0) + " min" : (t.inputToken && t.outputToken,
        "-")
    }, {
        title: "Fee",
        value: n.jsx("div", {
            children: U ? n.jsx(he, {}) : c != null && c.totalFeeBTC ? `$${xe(G((c == null ? void 0 : c.totalFeeBTC) * +Q, 2))}` : "-"
        }),
        subItems: [{
            title: n.jsx("span", {
                className: "pl-2 text-xs",
                children: "Network fee"
            }),
            value: n.jsx("div", {
                className: "text-xs",
                children: U ? n.jsx(he, {}) : `${+(c == null ? void 0 : c.networkFeeBTC) || 0} BTC ($${xe(G((c == null ? void 0 : c.networkFeeBTC) * +Q, 2))})`
            })
        }, {
            title: n.jsx("span", {
                className: "pl-2 text-xs",
                children: "Network fee"
            }),
            value: n.jsxs("div", {
                className: "text-xs",
                children: [U ? n.jsx(he, {}) : `${+(c == null ? void 0 : c.burnBitcoinFeeBTC) || 0}  ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ((ie = t == null ? void 0 : t.inputToken) == null ? void 0 : ie.symbol) || "" : ((ae = t == null ? void 0 : t.outputToken) == null ? void 0 : ae.symbol) || ""} ($${xe(G(((c == null ? void 0 : c.burnBitcoinFeeBTC) || 0) * +Q, 2))})`, " "]
            })
        }, {
            title: n.jsx("span", {
                className: "pl-2 text-xs",
                children: "Protocol fee"
            }),
            value: n.jsxs("div", {
                className: "text-xs",
                children: [U ? n.jsx(he, {}) : `${c == null ? void 0 : c.protocolFeeBTC}  ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ((De = t == null ? void 0 : t.inputToken) == null ? void 0 : De.symbol) || "" : ((Ue = t == null ? void 0 : t.outputToken) == null ? void 0 : Ue.symbol) || ""} ($${xe(G((c == null ? void 0 : c.protocolFeeBTC) * +Q, 2))})`, " "]
            })
        }, {
            title: n.jsx("span", {
                className: "pl-2 text-xs",
                children: "Locker fee"
            }),
            value: n.jsx("div", {
                className: "text-xs",
                children: U ? n.jsx(he, {}) : `${+(c == null ? void 0 : c.lockerFeeBTC) > 0 ? c == null ? void 0 : c.lockerFeeBTC : 0}  ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ((le = t == null ? void 0 : t.inputToken) == null ? void 0 : le.symbol) || "" : ((Ne = t == null ? void 0 : t.outputToken) == null ? void 0 : Ne.symbol) || ""} ($${xe(G((+(c == null ? void 0 : c.lockerFeeBTC) > 0 ? c == null ? void 0 : c.lockerFeeBTC : 0) * +Q, 2))})`
            })
        }, {
            title: "Minimum received",
            value: ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" && (U || y) || (t == null ? void 0 : t.inputNetwork) !== "Bitcoin" && (U || y)) && t.inputAmount !== void 0 && +t.inputAmount != 0 ? n.jsx(he, {}) : f && +f != 0 ? `${f} ${((oe = t == null ? void 0 : t.outputToken) == null ? void 0 : oe.symbol) || ""}` : "-"
        }, {
            title: "Price impact",
            value: (te || U || y) && t.inputAmount !== void 0 && +t.inputAmount != 0 ? n.jsx(he, {}) : D && t.inputAmount !== void 0 && +t.inputAmount != 0 ? `${An(D, 2)}%` : "-"
        }].filter( (W, pe) => (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? pe !== 1 : pe !== 0)
    }]
      , ke = ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" && y || U || (t == null ? void 0 : t.inputNetwork) === "Bitcoin" && C) && t.inputAmount !== void 0 && +t.inputAmount != 0;
    return n.jsx("div", {
        className: "flex flex-col   w-full md:max-w-[1000px] mx-auto pb-4 px-3 md:px-0 ",
        children: n.jsx("div", {
            className: "  rounded-lg  md:px-0   md:max-w-[1000px] relative   ",
            children: n.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 items-start pt-4 gap-5",
                children: [n.jsxs("div", {
                    className: "flex flex-col bg-ground-light border border-ground_border-lighter rounded-lg   rounded-xl  py-3 px-5",
                    children: [n.jsxs("div", {
                        className: "flex flex-col md:flex-col justify-center items-center align-middle  w-full ",
                        children: [n.jsx("div", {
                            className: "flex flex-col md:flex-col w-full",
                            children: n.jsx("div", {
                                className: "flex flex-col md:flex-row w-full",
                                children: n.jsx(jn, {
                                    name: "inputAmount",
                                    label: "Send",
                                    placeholder: "0",
                                    onChange: w,
                                    value: t.inputAmount,
                                    tokenValue: {
                                        key: (ce = t == null ? void 0 : t.inputToken) == null ? void 0 : ce.symbol,
                                        value: (h = t == null ? void 0 : t.inputToken) == null ? void 0 : h.symbol
                                    },
                                    errorMessage: ue || p || E && ((Te = Ze(E)) != null && Te.includes("received amount should be greater than") || (Re = Ze(E)) != null && Re.includes("low") || (ve = Ze(E)) != null && ve.includes("Insufficient Input Amount") || (Le = Ze(E)) != null && Le.includes("90%")) ? n.jsx("div", {
                                        className: "flex cursor-pointer",
                                        onClick: () => {
                                            !(ue != null && ue.includes("not connected")) && w({
                                                target: {
                                                    name: "inputAmount",
                                                    value: me
                                                }
                                            })
                                        }
                                        ,
                                        children: ue || Ze(E) || "Insufficient Input Amount"
                                    }) : H ? n.jsx("div", {
                                        className: "flex cursor-pointer",
                                        onClick: () => {
                                            !(H != null && H.includes("not connected")) && +t.inputBalance != 0 && w({
                                                target: {
                                                    name: "inputAmount",
                                                    value: V
                                                }
                                            })
                                        }
                                        ,
                                        children: H
                                    }) : E ? "An Blockchain error occurred!" : void 0,
                                    extraMessage: n.jsxs("span", {
                                        className: "flex items-center  cursor-pointer text-white",
                                        onClick: () => {
                                            w({
                                                target: {
                                                    name: "inputAmount",
                                                    value: V
                                                }
                                            })
                                        }
                                        ,
                                        children: [n.jsxs("div", {
                                            className: "pr-1 text-gray-light flex",
                                            children: [((t == null ? void 0 : t.inputNetwork) === "Bitcoin",
                                            "Available "), "balance:"]
                                        }), (t == null ? void 0 : t.inputNetwork) === "Bitcoin" && C || (t == null ? void 0 : t.inputNetwork) !== "Bitcoin" && S ? n.jsx(he, {}) : (V || V === 0) && ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ee : O) ? V : "-", n.jsx("div", {
                                            className: `px-2 py-1.5 ml-1 bg-ground-lighter 
 border border-ground_border-lighter rounded-lg hover:bg-ground-dark rounded-md text-white font-semibold`,
                                            children: "MAX"
                                        })]
                                    }),
                                    amountUSD: Ie ? "" : (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? `${xe((t.inputAmount || 0) * +Q)}` : `${xe((t.inputAmount || 0) * +(ge || 0))}`,
                                    isInitForm: d,
                                    children: n.jsx(mn, {
                                        name: "inputToken",
                                        placeholder: `Select ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? "BTC" : "EVM"} token`,
                                        network: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? t.outputNetwork : t.inputNetwork,
                                        options: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? (Be = k == null ? void 0 : k[t.outputNetwork]) == null ? void 0 : Be.filter(W => !W.value.type.includes("evm")) : (re = k == null ? void 0 : k[t.inputNetwork]) == null ? void 0 : re.filter(W => W.value.type.includes("evm")),
                                        tokenOptions: k,
                                        onChange: w,
                                        value: {
                                            key: (Ee = t == null ? void 0 : t.inputToken) == null ? void 0 : Ee.symbol,
                                            value: t.inputToken,
                                            icon: (Z = t.inputToken) == null ? void 0 : Z.icon
                                        },
                                        className: "min-w-[180px]",
                                        required: d,
                                        nameP: "inputNetwork",
                                        optionsP: t.outputNetwork === "Bitcoin" ? M.slice(1) : [M[0]],
                                        onChangeP: w,
                                        valueP: {
                                            key: t == null ? void 0 : t.inputNetwork,
                                            value: t.inputNetwork,
                                            icon: (Xe = t == null ? void 0 : t.inputNetwork) == null ? void 0 : Xe.toLowerCase()
                                        },
                                        showDisableOptions: t.inputNetwork === "Bitcoin"
                                    })
                                })
                            })
                        }), n.jsx(Sn, {
                            onClick: () => {
                                w({
                                    target: {
                                        name: "type",
                                        value: ""
                                    }
                                })
                            }
                            ,
                            height: 50,
                            width: 50,
                            title: "Switch",
                            className: "border-2 border-ground_border-lighter rounded-full cursor-pointer mb-5 mt-1 p-3 hover:bg-ground_border-lighter "
                        }), n.jsx("div", {
                            className: "flex flex-col md:flex-col w-full",
                            children: n.jsx("div", {
                                className: "flex flex-col md:flex-row w-full",
                                children: n.jsx(jn, {
                                    name: "outputAmount",
                                    label: "Receive",
                                    placeholder: "0",
                                    isLoading: ke,
                                    tokenValue: {
                                        key: (Je = t == null ? void 0 : t.outputToken) == null ? void 0 : Je.symbol,
                                        value: (Pe = t == null ? void 0 : t.outputToken) == null ? void 0 : Pe.symbol
                                    },
                                    value: ke ? t.outputAmount : (E || H || (t == null ? void 0 : t.inputNetwork) === "Bitcoin" && E,
                                    t == null ? void 0 : t.outputAmount),
                                    amountUSD: E || (t == null ? void 0 : t.inputNetwork) === "Bitcoin" && E || Ie ? "" : (t == null ? void 0 : t.inputNetwork) !== "Bitcoin" ? `${xe((t.outputAmount || 0) * +Q)}` : `${xe((t.outputAmount || 0) * +(ge || 0))}`,
                                    readOnly: !0,
                                    onChange: w,
                                    errorMessage: (!y && !(t != null && t.outputAmount) && !U && C || E,
                                    void 0),
                                    isInitForm: d,
                                    children: n.jsx(mn, {
                                        name: "outputToken",
                                        placeholder: `Select ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? "EVM" : "BTC"} token`,
                                        network: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? t.outputNetwork : t.inputNetwork,
                                        options: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? (fe = k == null ? void 0 : k[t.outputNetwork]) == null ? void 0 : fe.filter(W => {
                                            var pe;
                                            return (pe = W.value.type) == null ? void 0 : pe.includes("evm")
                                        }
                                        ) : (we = k == null ? void 0 : k[t.inputNetwork]) == null ? void 0 : we.filter(W => !W.value.type.includes("evm")),
                                        tokenOptions: k,
                                        value: {
                                            key: (Ye = t == null ? void 0 : t.outputToken) == null ? void 0 : Ye.symbol,
                                            value: t.outputToken,
                                            icon: (Ke = t.outputToken) == null ? void 0 : Ke.icon
                                        },
                                        required: d,
                                        onChange: w,
                                        nameP: "outputNetwork",
                                        optionsP: t.inputNetwork === "Bitcoin" ? M.slice(1).map(W => {
                                            var pe, _e;
                                            return ((pe = t == null ? void 0 : t.inputToken) == null ? void 0 : pe.type) === "rune" && W.key !== He.polygon ? {
                                                ...W,
                                                disable: !0
                                            } : ((_e = t == null ? void 0 : t.inputToken) == null ? void 0 : _e.type) === "brc20" && W.key !== He.binance ? {
                                                ...W,
                                                disable: !0
                                            } : W
                                        }
                                        ) : [M[0]],
                                        valueP: {
                                            key: t == null ? void 0 : t.outputNetwork,
                                            value: t.outputNetwork,
                                            icon: (ze = t == null ? void 0 : t.outputNetwork) == null ? void 0 : ze.toLowerCase()
                                        },
                                        onChangeP: w,
                                        className: "min-w-[180px]"
                                    })
                                })
                            })
                        })]
                    }), n.jsx("div", {
                        className: "flex flex-col md:flex-col w-full  pb-1 pt-4 ",
                        children: n.jsx(Ln, {
                            name: "outputAddress",
                            label: n.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: ["Recipient address ", t.inputToken && t.outputToken && "on", t.inputToken && t.outputToken && n.jsx("span", {
                                    className: " " + ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? t.outputNetwork ? Cn[t.outputNetwork] : "" : Cn.Bitcoin),
                                    children: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? (t == null ? void 0 : t.outputNetwork) || "..." : "Bitcoin"
                                }), n.jsx(En, {
                                    content: n.jsx("div", {
                                        className: "text-xs min-w-20 md:min-w-52",
                                        children: (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? "Don’t use CEX wallet address " : "You can use Taproot, Native Segwit, or Legacy address"
                                    }),
                                    children: n.jsx("div", {
                                        className: "-mb-[2px]",
                                        children: n.jsx(de, {
                                            src: "/images/info.svg",
                                            width: 15
                                        })
                                    })
                                })]
                            }),
                            placeholder: ` ${(t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? "Enter EVM wallet address" : "Enter Bitcoin wallet address"}`,
                            value: t.outputAddress,
                            onChange: w,
                            className: "",
                            required: A,
                            errorMessage: ne ? "Recipient address is invalid" : void 0,
                            isInitForm: d
                        })
                    }), D && +D != 0 && !(te || U || y) && !isFinite(+D) && (+D > 10 || +D < -10) ? n.jsxs("div", {
                        className: "text-red-400 text-center flex justify-center items-center text-xs mt-1 h-4  ",
                        children: [" ", `*Price impact too high (${+D > 100 ? 100 : An(+D, 2)}%)`]
                    }) : void 0, n.jsx(Fu, {
                        form: t,
                        onChange: w,
                        defaultShowFullDetails: !1
                    }), n.jsxs("div", {
                        className: "flex flex-col items-center justify-around md:px-50 py-4",
                        children: [n.jsx("span", {
                            className: "flex items-center w-full ",
                            children: n.jsx(du, {
                                type: "button",
                                onClick: s,
                                loading: o,
                                disabled: o || j ? !0 : r() ? !!(X && ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ee : O)) : d ? We.formDisabled : !!X,
                                className: " bg-core  border-core hover:bg-transparent  border-2 w-full ",
                                children: ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? ee : O) ? X || ((t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? `Get ${((Ge = t == null ? void 0 : t.outputToken) == null ? void 0 : Ge.symbol) || ""}` : `Get ${((et = t == null ? void 0 : t.outputToken) == null ? void 0 : et.symbol) || ""}`) : (t == null ? void 0 : t.inputNetwork) === "Bitcoin" ? "Connect Bitcoin Wallet " : "Connect Web3 Wallet "
                            })
                        }), j && n.jsx("div", {
                            className: "text-red-400 whitespace-pre-line text-sm text-center flex justify-center items-center  mt-2   ",
                            children: j
                        })]
                    })]
                }), n.jsx("div", {
                    className: "flex items-center justify-around  w-full  py-5 md:py-0",
                    children: n.jsx(Nu, {
                        list: u,
                        defaultShowFullDetails: !1
                    })
                })]
            })
        })
    })
}
export {Uu as CCExchange};
//# sourceMappingURL=cc-exchange-060e0be6.js.map
