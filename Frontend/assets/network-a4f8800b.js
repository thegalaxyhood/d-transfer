import {by as o} from "./index-4f2c5097.js";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[s] = "f6013a34-7bc4-49e6-8ce9-b1dd1d41f335",
        e._sentryDebugIdIdentifier = "sentry-dbid-f6013a34-7bc4-49e6-8ce9-b1dd1d41f335")
    } catch {}
}
)();
Object.entries(o).map(e => ({
    chainId: e[0],
    label: e[1]
}));
async function a(e) {
    const s = e.address
      , t = e.symbol
      , n = e.decimal;
    try {
        const d = await window.ethereum.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address: s,
                    symbol: t,
                    decimals: n
                }
            }
        })
    } catch (d) {
        console.log(d)
    }
}
export {a};
//# sourceMappingURL=network-a4f8800b.js.map
