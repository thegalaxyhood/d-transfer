import {bR as i, bU as d, bW as s, bX as f, bZ as b, bS as c, bY as l, bV as p, bT as y} from "./index-4f2c5097.js";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[a] = "5c1c4682-188b-4ba7-b420-7c481dd15bd4",
        e._sentryDebugIdIdentifier = "sentry-dbid-5c1c4682-188b-4ba7-b420-7c481dd15bd4")
    } catch {}
}
)();
const n = `
@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300 600;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/InterVariable.woff2") format("woff2-variations");
}
`;
export {n as InterVar, i as ProviderRpcError, d as ProviderRpcErrorCode, s as chainIdValidation, f as chainNamespaceValidation, b as chainValidation, c as createEIP1193Provider, l as providerConnectionInfoValidation, p as validate, y as weiToEth};
//# sourceMappingURL=index-ec779b39.js.map
