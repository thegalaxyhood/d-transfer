import {N as X, q as fe, b as ne, ay as Ae, ae as Fe, aS as be, aB as E, al as ge, am as Ee, t as J, aC as he, aD as xe, aT as Te, F as se, af as $e, j as qe, k as De, i as Ce, o as Pe, p as _e, az as Oe, aj as Be, Q as ee, aA as Qe, aU as Ue, r as Z, ao as Xe, h as pe, P as me, aV as Ke, a as O, c as Me, z as We, H as c, O as ae, S as Ve, aN as we, aW as k, u as ze, aX as Ge, g as Je, aO as Ze, aY as Ne} from "./index-4f2c5097.js";
import {I as He, U as Re, a as ke, u as Ie} from "./useExchange-b808452d.js";
import {e as es, E as le, f as je, g as ss, P as te} from "./Processing-451d91ae.js";
import {C as ve, u as Ye, D as ts} from "./CryptoInput-287a609a.js";
import {N as ue} from "./NestedSelectSimple-15c36873.js";
import "./useBitcoinUtils-7ce56b41.js";
import "./Tooltip-97ee4cb6.js";
(function() {
    try {
        var q = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , e = new q.Error().stack;
        e && (q._sentryDebugIds = q._sentryDebugIds || {},
        q._sentryDebugIds[e] = "4b1c64a3-3703-4df0-91a5-f7fa93c1ac2c",
        q._sentryDebugIdIdentifier = "sentry-dbid-4b1c64a3-3703-4df0-91a5-f7fa93c1ac2c")
    } catch {}
}
)();
const as = q => {
    var D;
    const e = q || X.polygon;
    fe(e);
    const [{wallet: l}] = ne()
      , B = (D = l == null ? void 0 : l.accounts[0]) == null ? void 0 : D.address
      , s = es(e, !0);
    Ae();
    const o = Fe()
      , m = async (d, a) => {}
      , b = async (d, a) => {}
      , P = async d => {}
    ;
    async function $(d) {
        var K, Y, Q;
        const a = new he((K = xe) == null ? void 0 : K[e])
          , w = new Te(d,He.abi,a)
          , [y,h,n] = await Promise.all([w.slot0(), w.token0(), w.token1()])
          , x = (Q = (Y = se) == null ? void 0 : Y[e].teleBTCAddress) == null ? void 0 : Q.toLowerCase()
          , t = (h == null ? void 0 : h.toLowerCase()) === x
          , i = le.connect(h, a)
          , g = await i.balanceOf(d)
          , f = await i.decimals()
          , A = le.connect(n, a)
          , C = await A.balanceOf(d)
          , u = await A.decimals()
          , p = E(g, f, f)
          , L = E(C, u, u);
        return {
            decimals: "18",
            name: "Liquidity Token",
            symbol: "Liquidity Token",
            totalSupply: 0,
            wNativeAmount: t ? L : p,
            teleBTCAmount: t ? p : L,
            tickSpacing: "",
            fee: "",
            liquidity: "",
            sqrtPriceX96: y[0],
            isToken0TeleBTC: t,
            tick: y[1]
        }
    }
    return {
        getAvailableBalance: async (d, a, w=8) => {
            var t, i;
            const y = ge(B || "0x00")
              , h = ge(a || "0x00")
              , n = await o.get(`${Ee}/network-info/pool-position/${y}?poolAddress=${h}&network=${e == null ? void 0 : e.toLowerCase()}`);
            if ((t = n == null ? void 0 : n.data) == null ? void 0 : t.tokenId) {
                const g = E((i = n == null ? void 0 : n.data) == null ? void 0 : i.liquidity, d.decimal);
                return J(g, w)
            }
            return 0
        }
        ,
        getAPY: async (d, a, w) => 0,
        getLpTokenBalance: async (d, a=18, w=8) => 0,
        getDetails: async d => {
            var t;
            const a = (t = be) == null ? void 0 : t[e].find(i => i.name === d)
              , w = a == null ? void 0 : a.address
              , y = "Liquidity Token"
              , h = a == null ? void 0 : a.address
              , n = await $(h || "0x00");
            return {
                title: `${a == null ? void 0 : a.name}`,
                tvl: 0,
                volume: 0,
                balance: 0,
                symbol: y,
                totalSupply: 0,
                address: w == null ? void 0 : w.toLowerCase(),
                decimal: 18,
                inputToken: {
                    name: n.name,
                    address: h == null ? void 0 : h.toLowerCase(),
                    symbol: n.symbol,
                    amount: 0,
                    totalSupply: E(n == null ? void 0 : n.totalSupply, 18, 18),
                    price: 0,
                    balance: 0,
                    decimal: n == null ? void 0 : n.decimals,
                    sqrtPriceX96: n == null ? void 0 : n.sqrtPriceX96,
                    isToken0TeleBTC: n == null ? void 0 : n.isToken0TeleBTC,
                    lpToken: a
                },
                poolNameWNative: a == null ? void 0 : a.name.replace("TELEBTC-", ""),
                wNativeAmount: n.wNativeAmount,
                teleBTCAmount: n.teleBTCAmount
            }
        }
        ,
        deposit: m,
        withdraw: b,
        claim: P,
        getInterest: async d => 0,
        contract: s || void 0
    }
}
  , ls = q => {
    var x;
    const e = q || X.polygon;
    fe(e);
    const [{wallet: l}] = ne()
      , B = (x = l == null ? void 0 : l.accounts[0]) == null ? void 0 : x.address
      , s = $e()
      , o = qe();
    De();
    const m = Ce()
      , b = je(e, !0)
      , P = je(e, !1)
      , {provider: $} = Ae()
      , j = Pe()
      , r = _e()
      , N = async (t, i) => {
        var A, C, u, p, L, S, W, K, Y, Q, V, I, R;
        const g = (u = (C = (A = se) == null ? void 0 : A[e]) == null ? void 0 : C.teleBTCAddress) == null ? void 0 : u.toLowerCase()
          , f = (t == null ? void 0 : t.address) === g;
        if (P)
            try {
                const U = f ? Oe(i) : Be(i, t.decimal);
                o.success({
                    topTitle: " ",
                    title: "Awaiting token approval confirmation",
                    haveLoading: !0,
                    message: `${(L = (p = r == null ? void 0 : r.wallet) == null ? void 0 : p.type) != null && L.includes("Ledger") || (W = (S = r == null ? void 0 : r.wallet) == null ? void 0 : S.type) != null && W.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"}`
                });
                const _ = (Y = (K = se) == null ? void 0 : K[e]) == null ? void 0 : Y.YieldFarmingProxyAddress;
                await D(t, _, U),
                o.success({
                    topTitle: " ",
                    title: "Awaiting LP token staking confirmation",
                    haveLoading: !0,
                    message: `${(V = (Q = r == null ? void 0 : r.wallet) == null ? void 0 : Q.type) != null && V.includes("Ledger") || (R = (I = r == null ? void 0 : r.wallet) == null ? void 0 : I.type) != null && R.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"}`
                }),
                B && await (P == null ? void 0 : P.stakeLpToken(t == null ? void 0 : t.address, U).then(async G => {
                    await G.wait(1).then( () => {
                        o.success({
                            topTitle: "Your LP token is staked!",
                            onClose: () => {
                                o.clearAll()
                            }
                            ,
                            closable: !0
                        }),
                        m.refetchQueries({
                            queryKey: ["instantPools"]
                        })
                    }
                    )
                }
                ).catch(G => {
                    throw o.clearAll(),
                    new Error(ee(G))
                }
                ))
            } catch (U) {
                throw o.clearAll(),
                new Error(ee(U))
            }
        else
            throw o.clearAll(),
            s.error("contractMethod not found"),
            new Error("contractMethod not found")
    }
      , z = async (t, i) => {
        var g, f, A, C;
        try {
            const u = Be(i, t.decimal);
            o.success({
                topTitle: " ",
                title: "Awaiting LP token unstaking confirmation",
                haveLoading: !0,
                message: `${(f = (g = r == null ? void 0 : r.wallet) == null ? void 0 : g.type) != null && f.includes("Ledger") || (C = (A = r == null ? void 0 : r.wallet) == null ? void 0 : A.type) != null && C.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"}`
            }),
            B && await (P == null ? void 0 : P.instantUnstakeLpToken(t.address, u).then(async p => {
                await p.wait(1).then( () => {
                    o.success({
                        topTitle: "Your LP token is unstaked!",
                        onClose: () => {
                            o.clearAll()
                        }
                        ,
                        closable: !0
                    }),
                    m.refetchQueries({
                        queryKey: ["instantPools"]
                    })
                }
                )
            }
            ).catch(p => {
                throw o.clearAll(),
                new Error(ee(p))
            }
            ))
        } catch (u) {
            throw o.clearAll(),
            new Error(ee(u))
        }
    }
      , T = async t => {
        var i, g, f, A;
        try {
            o.success({
                topTitle: " ",
                title: "Claiming your TST rewards",
                haveLoading: !0,
                message: `${(g = (i = r == null ? void 0 : r.wallet) == null ? void 0 : i.type) != null && g.includes("Ledger") || (A = (f = r == null ? void 0 : r.wallet) == null ? void 0 : f.type) != null && A.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"}`
            }),
            B && await (P == null ? void 0 : P.claimReward(t.address).then(async C => {
                await C.wait(1).then( () => {
                    o.success({
                        topTitle: "TST rewards are claimed.",
                        onClose: () => {
                            o.clearAll()
                        }
                        ,
                        closable: !0
                    }),
                    m.refetchQueries({
                        queryKey: ["instantPools"]
                    })
                }
                )
            }
            ).catch(C => {
                throw o.clearAll(),
                new Error(ee(C))
            }
            ))
        } catch (C) {
            throw o.clearAll(),
            new Error(ee(C))
        }
    }
      , D = async (t, i, g) => {
        const f = l ? new Qe(l.provider,"any") : $
          , A = l ? f.getSigner() : $;
        if (A && B) {
            let C = le.connect(t == null ? void 0 : t.address, A)
              , u = await C.allowance(B, i);
            if (+E(g, t.decimal, t.decimal) > +E(u, t.decimal, t.decimal)) {
                let p = g;
                try {
                    await (await C.approve(i, p)).wait(2)
                } catch (L) {
                    throw new Error(ee(L))
                }
            }
        }
    }
      , d = async t => {
        var g;
        const i = new he((g = xe) == null ? void 0 : g[e]);
        if (i && t !== "0x0000000000000000000000000000000000000000") {
            const f = Re.connect(t, i)
              , A = await f.decimals()
              , C = await f.name()
              , u = await f.symbol()
              , p = await f.totalSupply()
              , {_reserve0: L, _reserve1: S} = await f.getReserves()
              , W = E(L, 18, 18)
              , K = E(S, 8);
            return {
                decimals: A,
                name: C,
                symbol: u,
                totalSupply: p,
                wNativeAmount: W,
                teleBTCAmount: K
            }
        } else
            return {
                decimals: "",
                name: "",
                symbol: "",
                totalSupply: "",
                wNativeAmount: "",
                teleBTCAmount: ""
            }
    }
    ;
    return {
        getAvailableBalance: async (t, i, g=8) => {
            var u, p, L, S, W, K, Y, Q, V;
            let f = 0
              , A = 0;
            const C = !((u = t == null ? void 0 : t.symbol) != null && u.startsWith("W")) && ((p = t == null ? void 0 : t.address) == null ? void 0 : p.toLowerCase()) === ((W = (S = (L = se) == null ? void 0 : L[e]) == null ? void 0 : S.WNATIVEAddress) == null ? void 0 : W.toLowerCase());
            if (e && B && (t == null ? void 0 : t.address) !== "0x0000000000000000000000000000000000000000") {
                const I = new he((K = xe) == null ? void 0 : K[e])
                  , R = ((V = (Q = (Y = se) == null ? void 0 : Y[e]) == null ? void 0 : Q.teleBTCAddress) == null ? void 0 : V.toLowerCase()) || ""
                  , U = le.connect(t == null ? void 0 : t.address, I);
                if (C) {
                    const _ = I
                      , G = await (_ == null ? void 0 : _.getBalance(B));
                    A = E(G, t == null ? void 0 : t.decimal)
                } else {
                    const _ = await U.balanceOf(B);
                    f = R === (t == null ? void 0 : t.address) ? Ue(_, g) : E(_, t == null ? void 0 : t.decimal, g)
                }
            }
            return J(C ? A : f, g)
        }
        ,
        getAPY: async (t, i, g) => {
            const f = await (b == null ? void 0 : b.currentRewardPerDay(t)) || 0
              , A = await (b == null ? void 0 : b.stakedTotalSupply(t)) || 0
              , C = E(A, 18, 18)
              , u = +await j.getTokenPrice("TST") || 0
              , p = +i * +C / +g;
            return +f * 365 * u / p
        }
        ,
        getLpTokenBalance: async (t, i=18, g=8) => {
            const f = await (b == null ? void 0 : b.balanceOf(t, B || "0x00"))
              , A = E(f, i, 18);
            return J(A, g)
        }
        ,
        getDetails: async t => {
            var L, S, W;
            const i = (L = be) == null ? void 0 : L[e].find(K => K.name === t)
              , g = (W = (S = se) == null ? void 0 : S[e]) == null ? void 0 : W.YieldFarmingProxyAddress
              , f = "LP Token"
              , A = i == null ? void 0 : i.address
              , C = await (b == null ? void 0 : b.stakedTotalSupply(A))
              , u = await d(A || "0x00");
            return {
                title: `${i == null ? void 0 : i.name}`,
                tvl: 0,
                volume: 0,
                balance: 0,
                symbol: f,
                totalSupply: E(C, 18, 18),
                address: g == null ? void 0 : g.toLowerCase(),
                decimal: 18,
                inputToken: {
                    name: u.name,
                    address: A == null ? void 0 : A.toLowerCase(),
                    symbol: u.symbol,
                    amount: E(C, 18, 18),
                    totalSupply: E(u == null ? void 0 : u.totalSupply, 18, 18),
                    price: 0,
                    balance: 0,
                    decimal: u == null ? void 0 : u.decimals,
                    sqrtPriceX96: 0
                },
                poolNameWNative: i == null ? void 0 : i.name.replace("TELEBTC-", ""),
                wNativeAmount: u.wNativeAmount,
                teleBTCAmount: u.teleBTCAmount
            }
        }
        ,
        deposit: N,
        withdraw: z,
        claim: T,
        getInterest: async t => +(await (b == null ? void 0 : b.getRewardOfUser(t, B || "0x00")) || 0),
        contract: b || void 0
    }
}
  , ns = q => {
    var D;
    const e = q || X.polygon;
    fe(e);
    const [{wallet: l}] = ne()
      , B = (D = l == null ? void 0 : l.accounts[0]) == null ? void 0 : D.address
      , s = ss(e, !0);
    Ae();
    const o = Fe()
      , m = async (d, a) => {}
      , b = async (d, a) => {}
      , P = async d => {}
    ;
    async function $(d) {
        var S;
        const a = new he((S = xe) == null ? void 0 : S[fe(e)])
          , w = new Te(d || "",ke,a)
          , {sqrtPrice_96: y, currentPoint: h} = await w.state()
          , n = await s.poolIds(d)
          , {tokenX: x, tokenY: t, fee: i} = await s.poolMetas(n)
          , g = le.connect(t, a)
          , f = await g.balanceOf(d)
          , A = await g.decimals()
          , u = await le.connect(x, a).balanceOf(d)
          , p = E(f, +A, +A)
          , L = E(u, 8);
        return {
            decimals: "8",
            name: "Liquidity Token",
            symbol: "Liquidity Token",
            totalSupply: 0,
            wNativeAmount: p,
            teleBTCAmount: L,
            tickSpacing: "",
            fee: "",
            liquidity: "",
            sqrtPriceX96: y,
            currentPoint: h
        }
    }
    return {
        getAvailableBalance: async (d, a, w=8) => {
            var t;
            const y = ge(B || "0x00")
              , h = ge(a || "0x00")
              , n = await o.get(`${Ee}/network-info/pool-position/${y}?poolAddress=${h}&network=${e == null ? void 0 : e.toLowerCase()}`);
            let x = (t = n == null ? void 0 : n.data) == null ? void 0 : t.tokenId;
            if (x) {
                const i = await s.liquidities(x)
                  , g = E(i.liquidity, d.decimal);
                return J(g, w)
            }
            return 0
        }
        ,
        getAPY: async (d, a, w) => 0,
        getLpTokenBalance: async (d, a=18, w=8) => 0,
        getDetails: async d => {
            var t;
            const a = (t = be) == null ? void 0 : t[e].find(i => i.name === d)
              , w = a == null ? void 0 : a.address
              , y = "Liquidity Token"
              , h = a == null ? void 0 : a.address
              , n = await $(h || "0x00");
            return {
                title: `${a == null ? void 0 : a.name}`,
                tvl: 0,
                volume: 0,
                balance: 0,
                symbol: y,
                totalSupply: 0,
                address: w == null ? void 0 : w.toLowerCase(),
                decimal: 18,
                inputToken: {
                    name: n.name,
                    address: h == null ? void 0 : h.toLowerCase(),
                    symbol: n.symbol,
                    amount: 0,
                    totalSupply: E(n == null ? void 0 : n.totalSupply, 18, 18),
                    price: 0,
                    balance: 0,
                    decimal: n == null ? void 0 : n.decimals,
                    sqrtPriceX96: n == null ? void 0 : n.sqrtPriceX96,
                    currentPoint: n == null ? void 0 : n.currentPoint
                },
                poolNameWNative: a == null ? void 0 : a.name.replace("TELEBTC-", ""),
                wNativeAmount: n.wNativeAmount,
                teleBTCAmount: n.teleBTCAmount
            }
        }
        ,
        deposit: m,
        withdraw: b,
        claim: P,
        getInterest: async d => 0,
        contract: s || void 0
    }
}
  , Le = q => {
    const e = q || X.polygon
      , l = as(e)
      , B = ls(e)
      , s = ns(e);
    return Z.useMemo( () => Xe ? B : e === X.binance || e === X.polygon ? l : e === X.bob ? s : l, [q, l.contract, B.contract, s.contract])
}
  , is = ({children: q, network: e, data: l, detailsList: B, inputToken: s}) => {
    var ie, ce, oe, re, de;
    const o = pe()
      , m = qe()
      , b = Ce()
      , [P,$] = Z.useState(!1)
      , [{wallet: j}] = ne()
      , r = (ce = (ie = j == null ? void 0 : j.accounts[0]) == null ? void 0 : ie.address) == null ? void 0 : ce.toLowerCase()
      , {getTokenBalance: N, addLiquidity: z, contract: T, calcInputAmount: D, calcOutputAmount: d} = Ie(e, "farming")
      , [a,w] = Z.useState({
        inputAmount: void 0,
        inputBalance: null,
        isFixedOutputToken: !0,
        outputAmount: void 0,
        outputBalance: null
    });
    Z.useEffect( () => {
        if (l) {
            const v = J(me(d(+a.inputAmount, l, s == null ? void 0 : s.decimal), 8), 8);
            w({
                ...a,
                outputAmount: v,
                isFixedOutputToken: !0
            })
        }
    }
    , [l]);
    const y = (re = (oe = Ke) == null ? void 0 : oe[e]) == null ? void 0 : re[0].value
      , {data: h, isLoading: n} = O({
        queryKey: [`tokenBalance-${s == null ? void 0 : s.address}`, r, e],
        queryFn: () => N(s == null ? void 0 : s.address, s == null ? void 0 : s.decimal),
        onSuccess: v => {
            const F = J(me(d(v, l, s == null ? void 0 : s.decimal), 8), 8);
            w({
                ...a,
                inputAmount: v,
                outputAmount: F
            })
        }
        ,
        enabled: !!T && !!r && r !== "" && !!l && !!s,
        refetchOnWindowFocus: !1,
        refetchInterval: !1
    })
      , {data: x, isLoading: t} = O({
        queryKey: [`tokenBalance-${y == null ? void 0 : y.address}`, r, e],
        queryFn: () => N(y == null ? void 0 : y.address, y == null ? void 0 : y.decimal),
        enabled: !!T && !!r && r !== "" && !!s,
        refetchOnWindowFocus: !1
    })
      , i = v => {
        const {name: F, value: M} = v.target;
        if (F === "inputToken")
            return w({
                ...a,
                [F]: M
            }),
            null;
        if (F === "outputToken")
            return w({
                ...a,
                [F]: M
            }),
            null;
        if (F === "outputAmount") {
            const H = J(me(D(M, l, s == null ? void 0 : s.decimal), s == null ? void 0 : s.decimal), 8);
            return w({
                ...a,
                [F]: M,
                inputAmount: H,
                isFixedOutputToken: !1
            }),
            null
        }
        if (F === "inputAmount") {
            const H = J(me(d(M, l, s == null ? void 0 : s.decimal), 8), 8);
            return w({
                ...a,
                [F]: M,
                outputAmount: H,
                isFixedOutputToken: !0
            }),
            null
        }
        w({
            ...a,
            [F]: M
        })
    }
      , {data: g=0, isFetching: f} = O({
        queryKey: ["btcPrice"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , A = Pe()
      , {data: C, isFetching: u} = O({
        queryKey: [`tokenPrice-${s == null ? void 0 : s.symbolPrice}`, e],
        queryFn: () => {
            var v;
            return A.getTokenPrice((v = s == null ? void 0 : s.symbol) == null ? void 0 : v.replace("W", ""))
        }
        ,
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        enabled: !!s
    })
      , p = +a.inputAmount > +h ? "Insufficient Balance" : void 0
      , L = +a.outputAmount > +x ? "Insufficient Balance" : void 0
      , S = +a.inputAmount == 0 ? "Your input amount is 0" : void 0
      , W = +a.outputAmount == 0 ? "Your output amount is 0" : void 0
      , {setValidNetwork: K, checkIsValidNetwork: Y} = Me()
      , Q = () => r ? !Y(e) : !0
      , V = We(v => z(a.inputAmount, a.outputAmount, s, y))
      , I = (f || u || !!r && t || !!r && n) && !!T && !!r && r !== "" && !!((de = l == null ? void 0 : l.inputToken) != null && de.address)
      , R = !!V.isLoading
      , U = (!!p || !!L || !!S) && !R && !I
      , _ = async () => {
        if (!P && U)
            return $(!0),
            null;
        $(!0),
        V.mutate(a, {
            onSuccess: () => {
                V.reset(),
                m.success({
                    topTitle: "Liquidity added successfully. ",
                    onClose: () => {
                        m.clearAll()
                    }
                    ,
                    closable: !0
                }),
                b.refetchQueries({
                    queryKey: [`tokenBalance-${s == null ? void 0 : s.address}`]
                }),
                b.refetchQueries({
                    queryKey: [`tokenBalance-${y == null ? void 0 : y.address}`]
                }),
                b.refetchQueries({
                    queryKey: ["getAvailableBalance"]
                }),
                b.refetchQueries({
                    queryKey: [`poolBalance-${l.title}`, r]
                }),
                b.refetchQueries({
                    queryKey: [`getInterest-${l == null ? void 0 : l.title}`]
                }),
                b.refetchQueries({
                    queryKey: ["liquidityMiningPool", e]
                })
            }
            ,
            onError: v => {
                var F, M, H;
                (F = v == null ? void 0 : v.message) != null && F.includes("user rejected transaction") || (M = v == null ? void 0 : v.message) != null && M.includes("User rejected the request") || (H = v == null ? void 0 : v.message) != null && H.includes("User Declined") ? (V.reset(),
                m.clearAll()) : m.error({
                    topTitle: "Transaction failed!",
                    title: "Your last transaction failed. Please try again.",
                    actionContent: "Try again",
                    error: (v == null ? void 0 : v.message) || "",
                    onAction: () => {
                        m.clearAll(),
                        _()
                    }
                    ,
                    closeText: "Cancel",
                    onClose: () => {
                        V.reset(),
                        m.clearAll()
                    }
                })
            }
        })
    }
      , G = () => {
        r ? Y(e) ? _() : K(e) : o({
            type: "toggleWalletOptions",
            value: "evm"
        })
    }
      , ye = () => {
        G()
    }
    ;
    return c.jsxs("div", {
        className: "full flex flex-col",
        children: [c.jsx("p", {
            className: "text-white text-base",
            children: "To add liquidity to BTC, BRC-20, or RUNE pools, you first need to bridge them to the destination network."
        }), c.jsxs("div", {
            className: "full flex flex-col md:flex-row gap-5 mt-4 ",
            children: [c.jsxs("div", {
                className: "flex bg-ground-light border border-ground_border-lighter rounded-lg   rounded-xl  py-6 px-5 flex-col  w-full md:min-w-[468px]",
                children: [c.jsxs("div", {
                    className: "flex  flex-col md:flex-col justify-center  md:min-w-[400px] items-center align-middle  w-full ",
                    children: [c.jsxs("div", {
                        className: "flex flex-col md:flex-col w-full",
                        children: [q, c.jsx("div", {
                            className: "flex flex-col md:flex-row w-full mt-3",
                            children: c.jsx(ve, {
                                name: "inputAmount",
                                label: "Token 1",
                                placeholder: "0",
                                value: a.inputAmount,
                                amountUSD: u ? "" : `${ae(J(a.inputAmount * +C, 2))}`,
                                tokenValue: {
                                    key: s == null ? void 0 : s.symbol,
                                    value: s == null ? void 0 : s.symbol
                                },
                                onChange: i,
                                className: "w-full",
                                extraMessage: c.jsxs("span", {
                                    className: "flex cursor-pointer items-center text-white",
                                    onClick: () => {
                                        r && !I && i({
                                            target: {
                                                name: "inputAmount",
                                                value: h
                                            }
                                        })
                                    }
                                    ,
                                    children: [c.jsxs("div", {
                                        className: "pr-1 text-gray-light flex",
                                        children: ["Wallet ", "Balance:"]
                                    }), r && I ? c.jsx(te, {}) : h, c.jsx("div", {
                                        className: `px-2 py-1.5 ml-1 bg-ground-lighter 
 border border-ground_border-lighter rounded-lg hover:bg-ground-dark rounded-md text-white font-semibold`,
                                        children: "MAX"
                                    })]
                                }),
                                errorMessage: p || S,
                                required: P,
                                isInitForm: P,
                                children: c.jsx(ue, {
                                    name: "inputToken",
                                    placeholder: "-",
                                    options: s ? [s] : [],
                                    onChange: i,
                                    value: {
                                        key: s == null ? void 0 : s.symbol,
                                        value: s,
                                        icon: s == null ? void 0 : s.icon
                                    },
                                    valueP: {
                                        key: e,
                                        value: e,
                                        icon: e == null ? void 0 : e.toLowerCase()
                                    },
                                    className: "min-w-[164px]",
                                    disabled: !0
                                })
                            })
                        })]
                    }), c.jsx("div", {
                        className: "flex flex-col md:flex-col w-full",
                        children: c.jsx("div", {
                            className: "flex flex-col md:flex-row w-full",
                            children: c.jsx(ve, {
                                name: "outputAmount",
                                label: "Token 2",
                                placeholder: "0",
                                value: a.outputAmount,
                                amountUSD: f ? "" : `${ae(J(a.outputAmount * +g, 2))}`,
                                tokenValue: {
                                    key: y == null ? void 0 : y.symbol,
                                    value: y == null ? void 0 : y.symbol
                                },
                                onChange: i,
                                extraMessage: c.jsxs("span", {
                                    className: "flex  cursor-pointer items-center text-gray-lighter ",
                                    onClick: () => {
                                        r && !I && i({
                                            target: {
                                                name: "outputAmount",
                                                value: x
                                            }
                                        })
                                    }
                                    ,
                                    children: [c.jsxs("div", {
                                        className: "pr-1 text-gray-light flex",
                                        children: ["Wallet ", "Balance:"]
                                    }), r && I ? c.jsx(te, {}) : x, c.jsx("div", {
                                        className: `px-2 py-1.5 ml-1 bg-ground-lighter 
 border border-ground_border-lighter rounded-lg hover:bg-ground-dark rounded-md text-white font-semibold`,
                                        children: "MAX"
                                    })]
                                }),
                                className: "w-full",
                                errorMessage: L || W,
                                required: P,
                                isInitForm: P,
                                children: c.jsx(ue, {
                                    name: "outputToken",
                                    placeholder: "-",
                                    options: y ? [y] : [],
                                    value: {
                                        key: y == null ? void 0 : y.symbol,
                                        value: y,
                                        icon: y == null ? void 0 : y.icon
                                    },
                                    valueP: {
                                        key: e,
                                        value: e,
                                        icon: e == null ? void 0 : e.toLowerCase()
                                    },
                                    onChange: i,
                                    className: "min-w-[164px]",
                                    disabled: !0
                                })
                            })
                        })
                    })]
                }), c.jsx("div", {
                    className: "flex items-center justify-around md:px-50 pt-4",
                    children: c.jsx("span", {
                        className: "flex items-center w-full ",
                        children: c.jsx(Ve, {
                            type: "button",
                            onClick: () => {
                                ye()
                            }
                            ,
                            loading: R,
                            disabled: Q() ? !1 : P ? U : !1,
                            className: " bg-core  border-core hover:bg-transparent  border-2 w-full ",
                            children: r ? "Approve Transactions" : "Connect Web3 Wallet "
                        })
                    })
                })]
            }), c.jsx("div", {
                className: "flex flex-col h-fit rounded-xl    w-full   md:min-w-[368px] ",
                children: B
            })]
        })]
    })
}
  , Se = ({data: q, loading: e, network: l}) => {
    var x, t, i, g;
    const [{wallet: B}] = ne()
      , s = (t = (x = B == null ? void 0 : B.accounts[0]) == null ? void 0 : x.address) == null ? void 0 : t.toLowerCase()
      , {title: o="TELEBTC-? LP Token", inputToken: m={}, address: b="", decimal: P="", symbol: $="LP Token", totalSupply: j="", poolNameWNative: r=""} = q || {
        title: "TELEBTC-?? LP Token",
        inputToken: {},
        address: "",
        decimal: "",
        symbol: "LP Token",
        totalSupply: "",
        poolNameWNative: ""
    }
      , N = Le(l);
    Ye(l);
    const z = Pe()
      , {data: T=0} = O({
        queryKey: ["btcPrice"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , {data: D} = O({
        queryKey: [`tokenPrice-${r}`],
        queryFn: () => z.getTokenPrice(r),
        enabled: !!r,
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    });
    O({
        queryKey: [`getInterest-${o}`, l, s, m.address],
        queryFn: () => N.getInterest(m.address),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        enabled: !!s && !!N.contract && !!m.address
    });
    const d = +(q == null ? void 0 : q.wNativeAmount) * +(D || 0)
      , a = +(q == null ? void 0 : q.teleBTCAmount) * +(T || 0)
      , w = d + a;
    O({
        queryKey: [`getAPY-${o}`, l, w, (i = q == null ? void 0 : q.inputToken) == null ? void 0 : i.totalSupply, m == null ? void 0 : m.address],
        queryFn: () => {
            var f;
            return N.getAPY(m == null ? void 0 : m.address, w, (f = q == null ? void 0 : q.inputToken) == null ? void 0 : f.totalSupply)
        }
        ,
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        enabled: !!((g = q == null ? void 0 : q.inputToken) != null && g.totalSupply) && !!N.contract && !!(m != null && m.address)
    });
    const {data: y, isFetching: h} = O({
        queryKey: [`tokenBalance-${m == null ? void 0 : m.address}`, "getAvailableBalance", s, l],
        queryFn: () => N.getAvailableBalance(m, b, 18),
        enabled: !!m && !!s && !!b && b !== "" && !!(m != null && m.address),
        refetchOnWindowFocus: !1,
        refetchInterval: !1
    });
    O({
        queryKey: [`poolBalance-${o}`, s, l],
        queryFn: () => N.getLpTokenBalance(m == null ? void 0 : m.address, 18),
        enabled: !!N.contract && !!s && !!b && b !== "",
        refetchOnWindowFocus: !1,
        refetchInterval: !1
    });
    const n = [{
        title: "Total liquidity",
        value: c.jsx("div", {
            children: e ? c.jsx(te, {}) : w ? "$" + ae(we(w, 6)) : "$0"
        })
    }, {
        title: "Available LP token",
        value: c.jsx("div", {
            children: (h || e) && s ? c.jsx(te, {}) : `${ae(y || 0)} `
        })
    }];
    return c.jsx(ts, {
        list: n,
        defaultShowFullDetails: !1,
        showArrow: !1
    })
}
  , cs = ({children: q, network: e, data: l, detailsList: B, inputToken: s}) => {
    var _, G, ye, ie, ce, oe, re, de;
    const {inputToken: o, address: m, title: b, symbol: P} = l = l || {
        inputToken: {},
        outputToken: null,
        address: (G = (_ = se) == null ? void 0 : _[e || X.polygon]) == null ? void 0 : G.YieldFarmingProxyAddress,
        title: null,
        symbol: "-",
        decimal: 18
    }
      , [{wallet: $}] = ne()
      , j = (ie = (ye = $ == null ? void 0 : $.accounts[0]) == null ? void 0 : ye.address) == null ? void 0 : ie.toLowerCase()
      , r = $e()
      , N = qe();
    De();
    const z = Le(e)
      , T = Ce()
      , D = pe()
      , [d,a] = Z.useState({
        liquidityAmount: void 0
    })
      , [w,y] = Z.useState(!1);
    Ye(e);
    const {removeLiquidity: h, contract: n} = Ie(e, "farming")
      , {data: x, isFetching: t} = O({
        queryKey: [`tokenBalance-${o == null ? void 0 : o.address}`, "getAvailableBalance", j, e],
        queryFn: () => z.getAvailableBalance(o, m, o == null ? void 0 : o.decimal),
        onSuccess: v => a({
            ...d,
            liquidityAmount: v
        }),
        enabled: !!(o != null && o.address) && !!m && m !== "",
        refetchOnWindowFocus: !1,
        refetchInterval: !1
    })
      , i = !!(o != null && o.address) && !!m && m !== "" && t
      , g = v => {
        const {name: F, value: M} = v.target;
        if (y(!0),
        F === "liquidityAmount")
            return a({
                ...d,
                [F]: M
            }),
            null;
        a({
            ...d,
            [F]: M
        })
    }
      , f = (oe = (ce = Ke) == null ? void 0 : ce[e]) == null ? void 0 : oe[0].value
      , A = we(+l.teleBTCAmount * +d.liquidityAmount / +((re = l == null ? void 0 : l.inputToken) == null ? void 0 : re.totalSupply), f == null ? void 0 : f.decimal)
      , C = we(+l.wNativeAmount * +d.liquidityAmount / +((de = l == null ? void 0 : l.inputToken) == null ? void 0 : de.totalSupply), s == null ? void 0 : s.decimal);
    `${f == null ? void 0 : f.symbol}`,
    i && j ? te : `${ae(A || 0)}`,
    `${s == null ? void 0 : s.symbol}`,
    i && j ? te : `${ae(C || 0)}`;
    const u = We(v => h(d.liquidityAmount, C.toString(), A.toString(), o, s, f))
      , {setValidNetwork: p, checkIsValidNetwork: L} = Me()
      , S = () => j ? !L(e) : !0
      , W = () => {
        j ? L(e) ? Y() : p(e) : D({
            type: "toggleWalletOptions",
            value: "evm"
        })
    }
      , K = () => {
        W()
    }
      , Y = () => {
        if (!w)
            return y(!0),
            null;
        if (d.liquidityAmount === 0)
            return r.error("Enter Input Token Amount Greater Than 0  "),
            null;
        u != null && u.isSuccess || u.mutate(d, {
            onSuccess: () => {
                u.reset(),
                N.success({
                    topTitle: "Liquidity removed successfully",
                    onClose: () => {
                        N.clearAll()
                    }
                    ,
                    closable: !0
                }),
                T.refetchQueries({
                    queryKey: [`tokenBalance-${o == null ? void 0 : o.address}`]
                }),
                T.refetchQueries({
                    queryKey: [`poolBalance-${b}`, j]
                }),
                T.refetchQueries({
                    queryKey: [`getInterest-${l == null ? void 0 : l.title}`]
                }),
                T.refetchQueries({
                    queryKey: ["liquidityMiningPool", e]
                }),
                T.refetchQueries({
                    queryKey: ["getAvailableBalance"]
                })
            }
            ,
            onError: v => {
                var F, M, H;
                u.reset(),
                (F = v == null ? void 0 : v.message) != null && F.includes("user rejected transaction") || (M = v == null ? void 0 : v.message) != null && M.includes("User rejected the request") || (H = v == null ? void 0 : v.message) != null && H.includes("User Declined") ? (u.reset(),
                N.clearAll()) : N.error({
                    topTitle: "Transaction failed!",
                    title: "Your last transaction failed. Please try again.",
                    actionContent: "Try again",
                    error: (v == null ? void 0 : v.message) || "",
                    onAction: () => {
                        N.clearAll(),
                        Y()
                    }
                    ,
                    closeText: "Cancel",
                    onClose: () => {
                        u.reset(),
                        N.clearAll()
                    }
                })
            }
        })
    }
      , Q = !!(Number(d.liquidityAmount) > Number(x) && x)
      , V = +d.liquidityAmount == 0 ? "Your input amount is 0" : void 0
      , {data: I} = O({
        queryKey: ["getEnableStats"],
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        retry: !1
    })
      , U = (I == null ? void 0 : I.stakeLp) ? void 0 : `Remove Liquidity is currently disabled.
We are working to enable it soon.`;
    return c.jsxs("div", {
        className: "full flex flex-col ",
        children: [c.jsx("p", {
            className: "text-white text-base",
            children: "If you have staked your LP tokens, you need to first unstake them and then remove your liquidity."
        }), c.jsxs("div", {
            className: "full mt-4 flex flex-col md:flex-row gap-5",
            children: [c.jsxs("div", {
                className: "flex flex-col bg-ground-light border border-ground_border-lighter rounded-lg   rounded-xl  py-6 px-5     w-full md:min-w-[468px]",
                children: [c.jsx("div", {
                    className: "flex  flex-col md:flex-col justify-center md:min-w-[400px] items-center align-middle  w-full ",
                    children: c.jsxs("div", {
                        className: "flex flex-col md:flex-col w-full",
                        children: [q, c.jsx("div", {
                            className: "flex flex-col md:flex-row w-full mt-3",
                            children: c.jsx(ve, {
                                name: "liquidityAmount",
                                label: "Amount",
                                placeholder: "0",
                                value: d.liquidityAmount,
                                tokenValue: {
                                    key: P,
                                    value: P
                                },
                                onChange: g,
                                className: "w-full",
                                extraMessage: c.jsxs("span", {
                                    className: "flex  cursor-pointer items-center text-gray-lighter ",
                                    onClick: () => {
                                        j && !i && g({
                                            target: {
                                                name: "liquidityAmount",
                                                value: x
                                            }
                                        })
                                    }
                                    ,
                                    children: [c.jsxs("div", {
                                        className: "pr-1 text-gray-light flex",
                                        children: ["Wallet ", "Balance:"]
                                    }), j && i ? c.jsx(te, {}) : x, c.jsx("div", {
                                        className: `px-2 py-1.5 ml-1 bg-ground-lighter 
 border border-ground_border-lighter rounded-lg hover:bg-ground-dark rounded-md text-white font-semibold`,
                                        children: "MAX"
                                    })]
                                }),
                                required: !!l.title && !i && w,
                                errorMessage: l.title && Q ? `Maximum ${f ? "Collateral Pool Token" : "Token"} value is ${x}` : V || "",
                                isInitForm: w,
                                children: c.jsx(ue, {
                                    name: "liquidityToken",
                                    placeholder: "Select liquidity token",
                                    options: [],
                                    onChange: g,
                                    value: {
                                        key: P,
                                        value: l,
                                        icon: l == null ? void 0 : l.icon
                                    },
                                    valueP: {
                                        key: e,
                                        value: e,
                                        icon: e == null ? void 0 : e.toLowerCase()
                                    },
                                    className: "min-w-[164px]",
                                    disabled: !0
                                })
                            })
                        })]
                    })
                }), c.jsx("div", {
                    className: "flex flex-col  justify-around md:px-50"
                }), c.jsxs("div", {
                    className: "flex flex-col items-center justify-around md:px-50 pt-4",
                    children: [c.jsx("span", {
                        className: "flex items-center w-full ",
                        children: c.jsx(Ve, {
                            type: "button",
                            onClick: () => {
                                K()
                            }
                            ,
                            loading: u == null ? void 0 : u.isLoading,
                            disabled: U ? !0 : S() ? !1 : w ? i || Q || !!V || (u == null ? void 0 : u.isLoading) || Number(d.liquidityAmount) === 0 : !1,
                            className: " bg-core  border-core hover:bg-transparent  border-2 w-full ",
                            children: j ? "Remove" : "Connect Web3 Wallet "
                        })
                    }), U && c.jsx("div", {
                        className: "text-red-400 whitespace-pre-line text-sm text-center flex justify-center items-center  mt-2   ",
                        children: U
                    })]
                })]
            }), c.jsx("div", {
                className: "flex flex-col h-fit rounded-xl  w-full       ",
                children: B
            })]
        })]
    })
}
  , os = ({}) => {
    var T, D, d, a, w, y;
    const q = pe()
      , [e,l] = Z.useState({
        network: k,
        liquidityPool: null,
        inputToken: void 0
    })
      , {getSupportedBrc20TokensFarming: B} = ze()
      , {data: s} = O({
        queryKey: ["getSupportedBrc20TokensFarming"],
        queryFn: () => B(),
        onSuccess: h => {
            var n, x, t, i;
            return l({
                ...e,
                liquidityPool: (x = (n = h == null ? void 0 : h.liquidityPools) == null ? void 0 : n[k]) == null ? void 0 : x[0],
                inputToken: (i = (t = h == null ? void 0 : h.tokenOptions) == null ? void 0 : t[k]) == null ? void 0 : i[0].value
            })
        }
        ,
        refetchOnWindowFocus: !1,
        refetchInterval: !1,
        retry: !1
    })
      , o = s != null && s.tokenOptions ? s.tokenOptions : Ge
      , m = Le(e.network)
      , {changeProvider: b} = Je()
      , {data: P, isLoading: $} = O({
        queryKey: ["liquidityMiningPool", e.network, e.liquidityPool],
        queryFn: () => {
            var h;
            return m.getDetails((h = e == null ? void 0 : e.liquidityPool) == null ? void 0 : h.value)
        }
        ,
        refetchOnWindowFocus: !1,
        refetchInterval: !1,
        enabled: !!m.contract && !!((T = e == null ? void 0 : e.liquidityPool) != null && T.value)
    })
      , j = !!m.contract && !!((D = e == null ? void 0 : e.liquidityPool) != null && D.value) && $;
    Z.useEffect( () => {
        q({
            type: "setWalletOptions",
            value: {
                show: !1,
                value: "evm"
            }
        }),
        b(k)
    }
    , []);
    const r = h => {
        var t, i, g, f, A, C, u;
        const {name: n, value: x} = h.target;
        if (n === "network")
            return l({
                ...e,
                [n]: x,
                liquidityPool: x === X.polygon || x === X.bsquared ? (i = (t = s == null ? void 0 : s.liquidityPools) == null ? void 0 : t[x]) == null ? void 0 : i[0] : void 0,
                inputToken: x === X.polygon || x === X.bsquared ? (g = o == null ? void 0 : o[x]) == null ? void 0 : g[0].value : void 0
            }),
            b(x),
            null;
        if (n === "liquidityPool") {
            const p = (f = s == null ? void 0 : s.liquidityPools) == null ? void 0 : f[e.network].findIndex(S => S.value === x)
              , L = (C = (A = s == null ? void 0 : s.liquidityPools) == null ? void 0 : A[e.network]) == null ? void 0 : C[p];
            return l({
                ...e,
                [n]: {
                    key: x,
                    value: x,
                    icon: "bitcoin",
                    iconPlus: L == null ? void 0 : L.iconPlus
                },
                inputToken: (u = o == null ? void 0 : o[e.network]) == null ? void 0 : u[p].value
            }),
            null
        }
        l({
            ...e,
            [n]: x
        })
    }
      , [N,z] = Z.useState(0);
    return Z.useEffect( () => {
        var h, n, x;
        N !== 0 && N !== 1 && (l({
            network: k,
            liquidityPool: (n = (h = s == null ? void 0 : s.liquidityPools) == null ? void 0 : h[k]) == null ? void 0 : n[0],
            inputToken: (x = o == null ? void 0 : o[k]) == null ? void 0 : x[0].value
        }),
        b(k))
    }
    , [N]),
    c.jsx("div", {
        className: "w-full flex flex-col",
        children: c.jsx("div", {
            className: " flex flex-col md:flex-row w-full md:justify-between    rounded-xl  relative",
            children: c.jsx(Ze, {
                selectedIndex: N,
                items: [{
                    key: "AddLiquidity",
                    value: "Add liquidity",
                    content: c.jsx(is, {
                        data: P,
                        network: e.network,
                        inputToken: e.inputToken,
                        detailsList: c.jsx(Se, {
                            data: P,
                            loading: j,
                            network: e.network
                        }),
                        children: c.jsx(ue, {
                            name: "liquidityPool",
                            label: "Liquidity pool",
                            options: e != null && e.network ? (d = s == null ? void 0 : s.liquidityPools) == null ? void 0 : d[e == null ? void 0 : e.network] : [],
                            onChange: r,
                            placeholder: "Select liquidity pool",
                            inputClassName: "!bg-ground",
                            value: e.liquidityPool,
                            className: "md:min-w-[120px]",
                            nameP: "network",
                            optionsP: Ne,
                            onChangeP: r,
                            valueP: {
                                key: e == null ? void 0 : e.network,
                                value: e.network,
                                icon: (a = e == null ? void 0 : e.network) == null ? void 0 : a.toLowerCase()
                            }
                        })
                    })
                }, {
                    key: "RemoveLiquidity",
                    value: "Remove liquidity",
                    content: c.jsx(cs, {
                        data: P,
                        network: e.network,
                        inputToken: e.inputToken,
                        detailsList: c.jsx(Se, {
                            data: P,
                            loading: j,
                            network: e.network
                        }),
                        children: c.jsx(ue, {
                            name: "liquidityPool",
                            label: "Liquidity pool",
                            options: e != null && e.network ? (w = s == null ? void 0 : s.liquidityPools) == null ? void 0 : w[e == null ? void 0 : e.network] : [],
                            onChange: r,
                            placeholder: "Select liquidity pool",
                            value: e.liquidityPool,
                            className: "md:min-w-[120px]",
                            inputClassName: "!bg-ground",
                            nameP: "network",
                            optionsP: Ne,
                            onChangeP: r,
                            valueP: {
                                key: e == null ? void 0 : e.network,
                                value: e.network,
                                icon: (y = e == null ? void 0 : e.network) == null ? void 0 : y.toLowerCase()
                            }
                        })
                    })
                }],
                onChange: z,
                type: "inline",
                className: " p-3 my-2"
            })
        })
    })
}
;
function hs() {
    return c.jsx("div", {
        className: " w-full  rounded-t-2xl",
        children: c.jsx(os, {})
    })
}
export {hs as LiquidityPools};
//# sourceMappingURL=liquidity-pools-8fe530bb.js.map
