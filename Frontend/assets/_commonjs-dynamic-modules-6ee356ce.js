(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[r] = "f7347c51-89c7-48bf-9cfa-30d2f1057038",
        e._sentryDebugIdIdentifier = "sentry-dbid-f7347c51-89c7-48bf-9cfa-30d2f1057038")
    } catch {}
}
)();
function o(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
export {o as c};
//# sourceMappingURL=_commonjs-dynamic-modules-6ee356ce.js.map
