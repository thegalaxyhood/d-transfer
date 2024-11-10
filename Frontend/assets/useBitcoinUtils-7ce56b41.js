import {f as U, ae as v, h as V, ac as P, ak as u, am as d, ao as I, aI as C, N as w, aH as T, F as g} from "./index-4f2c5097.js";
(function() {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , B = new r.Error().stack;
        B && (r._sentryDebugIds = r._sentryDebugIds || {},
        r._sentryDebugIds[B] = "2dd31563-9f0d-4a89-b1d0-c3620d04c198",
        r._sentryDebugIdIdentifier = "sentry-dbid-2dd31563-9f0d-4a89-b1d0-c3620d04c198")
    } catch {}
}
)();
const K = () => {
    U();
    const r = v();
    V();
    const B = async e => {
        let t = await L(e)
          , n = e;
        const {addressType: a} = await F(e == null ? void 0 : e.address)
          , i = a === "p2sh" ? "p2sh-p2wpkh" : a;
        return t.map(s => ({
            ...s,
            signerInfo: {
                ...n,
                addressType: i
            }
        }))
    }
      , L = async e => {
        if (!(e != null && e.address))
            return [];
        try {
            const t = await r.get(`${d}/proxy/get-utxo/${e == null ? void 0 : e.address}`);
            return ((t == null ? void 0 : t.data) || []).map(n => ({
                hash: n.txId,
                value: +n.value,
                index: +n.index
            }))
        } catch {
            return []
        }
    }
      , W = async e => {
        const t = e.map(a => B(a));
        return (await Promise.all(t)).flat(1)
    }
      , R = async e => {
        try {
            const t = e != null && e.startsWith("0x") ? e == null ? void 0 : e.replace("0x", "") : e;
            return await new P.BitcoinInterface(u.connection,u.name).getTransaction(t)
        } catch {
            return null
        }
    }
      , E = async e => {
        try {
            return await new P.BitcoinInterface(u.connection,u.name).getFeeRate(e)
        } catch {
            return 1
        }
    }
      , F = async e => {
        const t = await r.get(`${d}/utils/bitcoin/address/${e}?${I ? "testnet=true" : "testnet=false"}`);
        return t == null ? void 0 : t.data
    }
    ;
    return {
        getBrc20Balance: async (e, t) => {
            if (t) {
                const n = await r.get(`${d}/proxy/get-brc20-balances/${t}?${I ? "testnet=true" : "testnet=false"}`)
                  , a = ((n == null ? void 0 : n.data) || []).find(i => {
                    var o, s;
                    return ((o = i.ticker) == null ? void 0 : o.toLowerCase()) === ((s = e == null ? void 0 : e.symbol) == null ? void 0 : s.toLowerCase())
                }
                );
                return (a == null ? void 0 : a.availableBalance) || 0
            } else
                return 0
        }
        ,
        getRuneBalance: async (e, t) => {
            if (t) {
                const n = await r.get(`${d}/proxy/get-rune-balances/${t}?${I ? "testnet=true" : "testnet=false"}`)
                  , a = ((n == null ? void 0 : n.data) || []).find(i => {
                    var o, s;
                    return ((o = i.name) == null ? void 0 : o.toLowerCase()) === ((s = e == null ? void 0 : e.name) == null ? void 0 : s.toLowerCase())
                }
                );
                return (a == null ? void 0 : a.balance) || 0
            } else
                return 0
        }
        ,
        getTransaction: R,
        getAddressObjectByAddress: F,
        getLatestBlockNumber: async () => {
            try {
                return await new P.BitcoinInterface(u.connection,u.name).getLatestBlockNumber()
            } catch {
                return 0
            }
        }
        ,
        getFeeRate: E,
        getSignerInfo: async e => {
            try {
                let t = {
                    ...e
                };
                const {addressType: n} = await F(e.address);
                return t.addressType = ((t == null ? void 0 : t.addressType) || n) === "p2sh" ? "p2sh-p2wpkh" : (t == null ? void 0 : t.addressType) || n,
                t
            } catch {
                return []
            }
        }
        ,
        getUtxoAllProxy: W,
        getAcrossFeeUnwrap: async ({token: e, amount: t, message: n, crossNetwork: a}) => {
            var y, l, p, h, f, c, b, A, m, x;
            const i = C.find($ => $.chainNetwork === w.polygon)
              , o = C.find($ => $.chainNetwork === a)
              , s = n ? await r.get(`${d}/proxy/get-across-fee?token=${e.address === T ? (p = (l = (y = g) == null ? void 0 : y[a]) == null ? void 0 : l.WNATIVEAddress) == null ? void 0 : p.toLowerCase() : e.address}&originChainId=${o.chainId}&destinationChainId=${i.chainId}&message=${n}&amount=${t}&recipient=${(h = g) == null ? void 0 : h[w.polygon].polygonConnectorProxyAddress}`) : await r.get(`${d}/proxy/get-across-fee?token=${e.address === T ? (b = (c = (f = g) == null ? void 0 : f[a]) == null ? void 0 : c.WNATIVEAddress) == null ? void 0 : b.toLowerCase() : e.address}&originChainId=${o.chainId}&destinationChainId=${i.chainId}&amount=${t}&recipient=${(A = g) == null ? void 0 : A[w.polygon].polygonConnectorProxyAddress}`);
            return I ? 0 : (x = (m = s == null ? void 0 : s.data) == null ? void 0 : m.totalRelayFee) == null ? void 0 : x.pct
        }
        ,
        getAcrossFeeWrap: async ({token: e, amount: t, message: n, crossNetwork: a}) => {
            var y, l, p, h, f, c, b, A, m, x;
            const i = C.find($ => $.chainNetwork === w.polygon)
              , o = C.find($ => $.chainNetwork === a)
              , s = n ? await r.get(`${d}/proxy/get-across-fee?token=${e.address === T ? (p = (l = (y = g) == null ? void 0 : y[a]) == null ? void 0 : l.WNATIVEAddress) == null ? void 0 : p.toLowerCase() : e.address}&originChainId=${i.chainId}&destinationChainId=${o.chainId}&message=${n}&amount=${t}&recipient=${(h = g) == null ? void 0 : h[w.polygon].polygonConnectorProxyAddress}`) : await r.get(`${d}/proxy/get-across-fee?token=${e.address === T ? (b = (c = (f = g) == null ? void 0 : f[a]) == null ? void 0 : c.WNATIVEAddress) == null ? void 0 : b.toLowerCase() : e.address}&originChainId=${i.chainId}&destinationChainId=${o.chainId}&amount=${t}&recipient=${(A = g) == null ? void 0 : A[w.polygon].polygonConnectorProxyAddress}`);
            return I ? 0 : (x = (m = s == null ? void 0 : s.data) == null ? void 0 : m.totalRelayFee) == null ? void 0 : x.pct
        }
        ,
        getAcrossFeeForWithdraw: async ({token: e, amount: t, crossNetwork: n, user: a}) => {
            var y, l, p, h, f;
            const i = C.find(c => c.chainNetwork === w.polygon)
              , o = C.find(c => c.chainNetwork === n)
              , s = await r.get(`${d}/proxy/get-across-fee?token=${e.address === T ? (p = (l = (y = g) == null ? void 0 : y[n]) == null ? void 0 : l.WNATIVEAddress) == null ? void 0 : p.toLowerCase() : e.address}&originChainId=${i.chainId}&destinationChainId=${o.chainId}&amount=${t}&recipient=${a}`);
            return I ? 0 : (f = (h = s == null ? void 0 : s.data) == null ? void 0 : h.totalRelayFee) == null ? void 0 : f.pct
        }
    }
}
;
export {K as u};
//# sourceMappingURL=useBitcoinUtils-7ce56b41.js.map
