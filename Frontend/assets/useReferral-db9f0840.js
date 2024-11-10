import {ae as i, al as a, am as u} from "./index-4f2c5097.js";
(function() {
    try {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , r = new s.Error().stack;
        r && (s._sentryDebugIds = s._sentryDebugIds || {},
        s._sentryDebugIds[r] = "1295181b-9b49-4969-89c2-4f1b70b06f67",
        s._sentryDebugIdIdentifier = "sentry-dbid-1295181b-9b49-4969-89c2-4f1b70b06f67")
    } catch {}
}
)();
function y(s) {
    const r = s.getTime() - Date.now()
      , d = Math.floor(r / 1e3 % 60)
      , l = d < 10 ? `${d}` : d
      , t = Math.floor(r / 1e3 / 60 % 60)
      , n = t < 10 ? `${t}` : t
      , e = Math.floor(r / (1e3 * 60 * 60) % 24)
      , o = e < 10 ? `${e}` : e
      , c = Math.floor(r / (1e3 * 60 * 60 * 24))
      , f = c < 10 ? `${c}` : c;
    return {
        total: r,
        days: f,
        hours: o,
        minutes: n,
        seconds: l
    }
}
const b = () => {
    const s = i();
    return {
        getReferralDetailsFromAddress: async t => {
            try {
                const n = a(t)
                  , e = await s.get(`${u}/referral/info/${n}`)
                  , o = y(new Date(2023,11,29));
                return e != null && e.data ? {
                    ...e == null ? void 0 : e.data,
                    teleswapRewardCycle: o.days
                } : null
            } catch {
                return null
            }
        }
        ,
        getUsedReferredDetailWithAddress: async t => {
            var n;
            try {
                const e = a(t)
                  , o = await s.get(`${u}/event/coin-list/rank/teleswap/${e}`);
                return {
                    isReferred: (n = o == null ? void 0 : o.data) == null ? void 0 : n.teleswapReferralUsed
                }
            } catch {
                return {
                    isReferred: !1
                }
            }
        }
        ,
        getAddressFromENS: async t => {
            try {
                return a(t)
            } catch {
                return null
            }
        }
    }
}
;
export {b as u};
//# sourceMappingURL=useReferral-db9f0840.js.map
