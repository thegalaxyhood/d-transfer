var da = Object.defineProperty;
var ua = (n, e, t) => e in n ? da(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var Gt = (n, e, t) => (ua(n, typeof e != "symbol" ? e + "" : e, t),
t);
import {aZ as fa, a_ as $n, aT as Je, a$ as pa, aG as pe, al as st, N as fe, q as fn, F as W, ay as pn, p as yn, ae as Kn, b as mn, af as bn, j as gn, aj as J, Q as Ae, aA as ke, ag as Re, am as Wt, aB as re, w as z, ai as se, aF as Rt, aC as Ze, aD as $e, aE as wn, b0 as ya, b1 as we, t as Yt, b2 as ma, a8 as $t, a2 as pt, b3 as Pn, b4 as ba, r as ga, ao as wa} from "./index-4f2c5097.js";
import {h as On, i as Aa, j as Nn, E as ct, k as Ln, l as Sn, m as ha, n as Bn, o as Ta, L as kt} from "./Processing-451d91ae.js";
import {u as An} from "./useBitcoinUtils-7ce56b41.js";
(function() {
    try {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , e = new n.Error().stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {},
        n._sentryDebugIds[e] = "9761a06b-1f8f-4b92-8116-645533be7186",
        n._sentryDebugIdIdentifier = "sentry-dbid-9761a06b-1f8f-4b92-8116-645533be7186")
    } catch {}
}
)();
const Ht = [{
    inputs: [],
    payable: !1,
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
        name: "sender",
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
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "Burn",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
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
    name: "Mint",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "Swap",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
    }, {
        indexed: !1,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
    }],
    name: "Sync",
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
    constant: !0,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
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
    name: "allowance",
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
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "balanceOf",
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
        name: "to",
        type: "address"
    }],
    name: "burn",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "factory",
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
    name: "getReserves",
    outputs: [{
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112"
    }, {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112"
    }, {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "_token0",
        type: "address"
    }, {
        internalType: "address",
        name: "_token1",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "kLast",
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
        name: "to",
        type: "address"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
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
    }],
    name: "nonces",
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
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
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
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "price1CumulativeLast",
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
        name: "to",
        type: "address"
    }],
    name: "skim",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swap",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "token0",
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
    name: "token1",
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
    name: "totalSupply",
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
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
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
        name: "value",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}]
  , Rn = "0x60806040526001600c5534801561001557600080fd5b5060405146908060526123868239604080519182900360520182208282018252600a8352692ab734b9bbb0b8102b1960b11b6020938401528151808301835260018152603160f81b908401528151808401919091527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b03191633179055612281806101056000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610afe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b24565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b4e565b604080519115158252519081900360200190f35b610339610b65565b604080516001600160a01b039092168252519081900360200190f35b61035d610b74565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b7a565b61035d610c14565b6103b5610c38565b6040805160ff9092168252519081900360200190f35b61035d610c3d565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c43565b61035d610cc7565b61035d610ccd565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cd3565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610fd3565b61035d610fe5565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610feb565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316610ffd565b6040805192835260208301919091528051918290030190f35b6102446113a3565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356113c5565b61035d6113d2565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b03166113d8565b610339611543565b610339611552565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611561565b61035d600480360360408110156105a357600080fd5b506001600160a01b0381358116916020013516611763565b61023a611780565b600c5460011461060e576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55841515806106215750600084115b61065c5760405162461bcd60e51b81526004018080602001828103825260258152602001806121936025913960400191505060405180910390fd5b600080610667610b24565b5091509150816001600160701b03168710801561068c5750806001600160701b031686105b6106c75760405162461bcd60e51b81526004018080602001828103825260218152602001806121dc6021913960400191505060405180910390fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107055750806001600160a01b0316896001600160a01b031614155b61074e576040805162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b604482015290519081900360640190fd5b8a1561075f5761075f828a8d6118e2565b891561077057610770818a8c6118e2565b861561082b57886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561081257600080fd5b505af1158015610826573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561087157600080fd5b505afa158015610885573d6000803e3d6000fd5b505050506040513d602081101561089b57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108e757600080fd5b505afa1580156108fb573d6000803e3d6000fd5b505050506040513d602081101561091157600080fd5b5051925060009150506001600160701b0385168a90038311610934576000610943565b89856001600160701b03160383035b9050600089856001600160701b031603831161096057600061096f565b89856001600160701b03160383035b905060008211806109805750600081115b6109bb5760405162461bcd60e51b81526004018080602001828103825260248152602001806121b86024913960400191505060405180910390fd5b60006109ef6109d184600363ffffffff611a7c16565b6109e3876103e863ffffffff611a7c16565b9063ffffffff611adf16565b90506000610a076109d184600363ffffffff611a7c16565b9050610a38620f4240610a2c6001600160701b038b8116908b1663ffffffff611a7c16565b9063ffffffff611a7c16565b610a48838363ffffffff611a7c16565b1015610a8a576040805162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b604482015290519081900360640190fd5b5050610a9884848888611b2f565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600a8152602001692ab734b9bbb0b8102b1960b11b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b5b338484611cf4565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bff576001600160a01b0384166000908152600260209081526040808320338452909152902054610bda908363ffffffff611adf16565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c0a848484611d56565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c99576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d20576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610d30610b24565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d8457600080fd5b505afa158015610d98573d6000803e3d6000fd5b505050506040513d6020811015610dae57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e0157600080fd5b505afa158015610e15573d6000803e3d6000fd5b505050506040513d6020811015610e2b57600080fd5b505190506000610e4a836001600160701b03871663ffffffff611adf16565b90506000610e67836001600160701b03871663ffffffff611adf16565b90506000610e758787611e10565b60005490915080610eb257610e9e6103e86109e3610e99878763ffffffff611a7c16565b611f6e565b9850610ead60006103e8611fc0565b610f01565b610efe6001600160701b038916610ecf868463ffffffff611a7c16565b81610ed657fe5b046001600160701b038916610ef1868563ffffffff611a7c16565b81610ef857fe5b04612056565b98505b60008911610f405760405162461bcd60e51b81526004018080602001828103825260288152602001806122256028913960400191505060405180910390fd5b610f4a8a8a611fc0565b610f5686868a8a611b2f565b8115610f8657600854610f82906001600160701b0380821691600160701b90041663ffffffff611a7c16565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461104b576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c8190558061105b610b24565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110b757600080fd5b505afa1580156110cb573d6000803e3d6000fd5b505050506040513d60208110156110e157600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561112f57600080fd5b505afa158015611143573d6000803e3d6000fd5b505050506040513d602081101561115957600080fd5b5051306000908152600160205260408120549192506111788888611e10565b6000549091508061118f848763ffffffff611a7c16565b8161119657fe5b049a50806111aa848663ffffffff611a7c16565b816111b157fe5b04995060008b1180156111c4575060008a115b6111ff5760405162461bcd60e51b81526004018080602001828103825260288152602001806121fd6028913960400191505060405180910390fd5b611209308461206e565b611214878d8d6118e2565b61121f868d8c6118e2565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561126557600080fd5b505afa158015611279573d6000803e3d6000fd5b505050506040513d602081101561128f57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112db57600080fd5b505afa1580156112ef573d6000803e3d6000fd5b505050506040513d602081101561130557600080fd5b5051935061131585858b8b611b2f565b811561134557600854611341906001600160701b0380821691600160701b90041663ffffffff611a7c16565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060068152602001652aa72496ab1960d11b81525081565b6000610b5b338484611d56565b6103e881565b600c54600114611423576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114d292859287926114cd926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561149557600080fd5b505afa1580156114a9573d6000803e3d6000fd5b505050506040513d60208110156114bf57600080fd5b50519063ffffffff611adf16565b6118e2565b600854604080516370a0823160e01b8152306004820152905161153992849287926114cd92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561149557600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115ab576040805162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116c6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116fc5750886001600160a01b0316816001600160a01b0316145b61174d576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611758898989611cf4565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c546001146117cb576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118db926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561181c57600080fd5b505afa158015611830573d6000803e3d6000fd5b505050506040513d602081101561184657600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561189357600080fd5b505afa1580156118a7573d6000803e3d6000fd5b505050506040513d60208110156118bd57600080fd5b50516008546001600160701b0380821691600160701b900416611b2f565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061198f5780518252601f199092019160209182019101611970565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119f1576040519150601f19603f3d011682016040523d82523d6000602084013e6119f6565b606091505b5091509150818015611a24575080511580611a245750808060200190516020811015611a2157600080fd5b50515b611a75576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b6000811580611a9757505080820282828281611a9457fe5b04145b610b5f576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b5f576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b4d57506001600160701b038311155b611b94576040805162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611bc457506001600160701b03841615155b8015611bd857506001600160701b03831615155b15611c49578063ffffffff16611c0685611bf18661210c565b6001600160e01b03169063ffffffff61211e16565b600980546001600160e01b03929092169290920201905563ffffffff8116611c3184611bf18761210c565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d7f908263ffffffff611adf16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611db4908263ffffffff61214316565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e6157600080fd5b505afa158015611e75573d6000803e3d6000fd5b505050506040513d6020811015611e8b57600080fd5b5051600b546001600160a01b038216158015945091925090611f5a578015611f55576000611ece610e996001600160701b0388811690881663ffffffff611a7c16565b90506000611edb83611f6e565b905080821115611f52576000611f09611efa848463ffffffff611adf16565b6000549063ffffffff611a7c16565b90506000611f2e83611f2286600563ffffffff611a7c16565b9063ffffffff61214316565b90506000818381611f3b57fe5b0490508015611f4e57611f4e8782611fc0565b5050505b50505b611f66565b8015611f66576000600b555b505092915050565b60006003821115611fb1575080600160028204015b81811015611fab57809150600281828581611f9a57fe5b040181611fa357fe5b049050611f83565b50611fbb565b8115611fbb575060015b919050565b600054611fd3908263ffffffff61214316565b60009081556001600160a01b038316815260016020526040902054611ffe908263ffffffff61214316565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106120655781612067565b825b9392505050565b6001600160a01b038216600090815260016020526040902054612097908263ffffffff611adf16565b6001600160a01b038316600090815260016020526040812091909155546120c4908263ffffffff611adf16565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161213b57fe5b049392505050565b80820182811015610b5f576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544a265627a7a723158201ada19e923cbb5ba3b9d6906dcc9b75b941a47929a1a56634c51f933454052f564736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
class ln extends fa {
    constructor(...e) {
        e.length === 1 ? super(Ht, Rn, e[0]) : super(...e)
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
        return new $n(Ht)
    }
    static connect(e, t) {
        return new Je(e,Ht,t)
    }
}
Gt(ln, "bytecode", Rn),
Gt(ln, "abi", Ht);
const It = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "addAmount",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "acquireAmount",
        type: "uint128"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "claimSold",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "claimEarn",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }],
    name: "AddLimitOrder",
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
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Burn",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "collectDec",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "collectEarn",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }],
    name: "CollectLimitOrder",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "CollectLiquidity",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "decreaseAmount",
        type: "uint128"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "claimSold",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "claimEarn",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }],
    name: "DecLimitOrder",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paidX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paidY",
        type: "uint256"
    }],
    name: "Flash",
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
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Mint",
    type: "event"
}, {
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
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "amountX",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "addLimOrderWithX",
    outputs: [{
        internalType: "uint128",
        name: "orderX",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "acquireY",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "amountY",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "addLimOrderWithY",
    outputs: [{
        internalType: "uint128",
        name: "orderY",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "acquireX",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "assignX",
        type: "uint128"
    }, {
        internalType: "bool",
        name: "fromLegacy",
        type: "bool"
    }],
    name: "assignLimOrderEarnX",
    outputs: [{
        internalType: "uint128",
        name: "actualAssignX",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "assignY",
        type: "uint128"
    }, {
        internalType: "bool",
        name: "fromLegacy",
        type: "bool"
    }],
    name: "assignLimOrderEarnY",
    outputs: [{
        internalType: "uint128",
        name: "actualAssignY",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidDelta",
        type: "uint128"
    }],
    name: "burn",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint256",
        name: "amountXLim",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountYLim",
        type: "uint256"
    }],
    name: "collect",
    outputs: [{
        internalType: "uint256",
        name: "actualAmountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "actualAmountY",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "collectFeeCharged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "collectDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "collectEarn",
        type: "uint128"
    }, {
        internalType: "bool",
        name: "isEarnY",
        type: "bool"
    }],
    name: "collectLimOrder",
    outputs: [{
        internalType: "uint128",
        name: "actualCollectDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "actualCollectEarn",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "deltaX",
        type: "uint128"
    }],
    name: "decLimOrderWithX",
    outputs: [{
        internalType: "uint128",
        name: "actualDeltaX",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "legacyAccEarn",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "deltaY",
        type: "uint128"
    }],
    name: "decLimOrderWithY",
    outputs: [{
        internalType: "uint128",
        name: "actualDeltaY",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "legacyAccEarn",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "newNextQueueLen",
        type: "uint16"
    }],
    name: "expandObservationQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "feeChargePercent",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
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
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }],
    name: "limitOrderData",
    outputs: [{
        internalType: "uint128",
        name: "sellingX",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnY",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "accEarnY",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "legacyAccEarnY",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "legacyEarnY",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "sellingY",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnX",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "legacyEarnX",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "accEarnX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "legacyAccEarnX",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }],
    name: "limitOrderSnapshot",
    outputs: [{
        components: [{
            internalType: "uint128",
            name: "sellingX",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "earnY",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "accEarnY",
            type: "uint256"
        }, {
            internalType: "uint128",
            name: "sellingY",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "earnX",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "accEarnX",
            type: "uint256"
        }],
        internalType: "struct IiZiSwapPool.LimitOrderStruct[]",
        name: "limitOrders",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
    }],
    name: "liquidity",
    outputs: [{
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
        name: "tokenOwedX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "tokenOwedY",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }],
    name: "liquiditySnapshot",
    outputs: [{
        internalType: "int128[]",
        name: "deltaLiquidities",
        type: "int128[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidDelta",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "mint",
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
    inputs: [{
        internalType: "uint24",
        name: "newFeeChargePercent",
        type: "uint24"
    }],
    name: "modifyFeeChargePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "observations",
    outputs: [{
        internalType: "uint32",
        name: "timestamp",
        type: "uint32"
    }, {
        internalType: "int56",
        name: "accPoint",
        type: "int56"
    }, {
        internalType: "bool",
        name: "init",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]"
    }],
    name: "observe",
    outputs: [{
        internalType: "int56[]",
        name: "accPoints",
        type: "int56[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }],
    name: "orderOrEndpoint",
    outputs: [{
        internalType: "int24",
        name: "val",
        type: "int24"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int16",
        name: "wordPosition",
        type: "int16"
    }],
    name: "pointBitmap",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }],
    name: "points",
    outputs: [{
        internalType: "uint128",
        name: "liquidSum",
        type: "uint128"
    }, {
        internalType: "int128",
        name: "liquidDelta",
        type: "int128"
    }, {
        internalType: "uint256",
        name: "accFeeXOut_128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "accFeeYOut_128",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "isEndpt",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "sqrtRate_96",
    outputs: [{
        internalType: "uint160",
        name: "",
        type: "uint160"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "state",
    outputs: [{
        internalType: "uint160",
        name: "sqrtPrice_96",
        type: "uint160"
    }, {
        internalType: "int24",
        name: "currentPoint",
        type: "int24"
    }, {
        internalType: "uint16",
        name: "observationCurrentIndex",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationQueueLen",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationNextQueueLen",
        type: "uint16"
    }, {
        internalType: "bool",
        name: "locked",
        type: "bool"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "liquidityX",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "lowPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapX2Y",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "desireY",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "lowPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapX2YDesireY",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "highPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapY2X",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "desireX",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "highPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapY2XDesireX",
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
    name: "totalFeeXCharged",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalFeeYCharged",
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
        name: "key",
        type: "bytes32"
    }],
    name: "userEarnX",
    outputs: [{
        internalType: "uint256",
        name: "lastAccEarn",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "sellingRemain",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "sellingDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "legacyEarn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnAssign",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
    }],
    name: "userEarnY",
    outputs: [{
        internalType: "uint256",
        name: "lastAccEarn",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "sellingRemain",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "sellingDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "legacyEarn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnAssign",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}];
class jn {
    static createInterface() {
        return new $n(It)
    }
    static connect(e, t) {
        return new Je(e,It,t)
    }
}
Gt(jn, "abi", It);
class l extends Array {
    constructor(e, t) {
        if (super(e),
        this.sign = t,
        e > l.__kMaxLength)
            throw new RangeError("Maximum BigInt size exceeded")
    }
    static BigInt(e) {
        var t = Math.floor
          , a = Number.isFinite;
        if (typeof e == "number") {
            if (e === 0)
                return l.__zero();
            if (l.__isOneDigitInt(e))
                return 0 > e ? l.__oneDigit(-e, !0) : l.__oneDigit(e, !1);
            if (!a(e) || t(e) !== e)
                throw new RangeError("The number " + e + " cannot be converted to BigInt because it is not an integer");
            return l.__fromDouble(e)
        }
        if (typeof e == "string") {
            const i = l.__fromString(e);
            if (i === null)
                throw new SyntaxError("Cannot convert " + e + " to a BigInt");
            return i
        }
        if (typeof e == "boolean")
            return e === !0 ? l.__oneDigit(1, !1) : l.__zero();
        if (typeof e == "object") {
            if (e.constructor === l)
                return e;
            const i = l.__toPrimitive(e);
            return l.BigInt(i)
        }
        throw new TypeError("Cannot convert " + e + " to a BigInt")
    }
    toDebugString() {
        const e = ["BigInt["];
        for (const t of this)
            e.push((t && (t >>> 0).toString(16)) + ", ");
        return e.push("]"),
        e.join("")
    }
    toString(e=10) {
        if (2 > e || 36 < e)
            throw new RangeError("toString() radix argument must be between 2 and 36");
        return this.length === 0 ? "0" : e & e - 1 ? l.__toStringGeneric(this, e, !1) : l.__toStringBasePowerOfTwo(this, e)
    }
    static toNumber(e) {
        const t = e.length;
        if (t === 0)
            return 0;
        if (t === 1) {
            const E = e.__unsignedDigit(0);
            return e.sign ? -E : E
        }
        const a = e.__digit(t - 1)
          , i = l.__clz30(a)
          , r = 30 * t - i;
        if (1024 < r)
            return e.sign ? -1 / 0 : 1 / 0;
        let s = r - 1
          , c = a
          , o = t - 1;
        const p = i + 3;
        let y = p === 32 ? 0 : c << p;
        y >>>= 12;
        const u = p - 12;
        let b = 12 <= p ? 0 : c << 20 + p
          , _ = 20 + p;
        for (0 < u && 0 < o && (o--,
        c = e.__digit(o),
        y |= c >>> 30 - u,
        b = c << u + 2,
        _ = u + 2); 0 < _ && 0 < o; )
            o--,
            c = e.__digit(o),
            b |= 30 <= _ ? c << _ - 30 : c >>> 30 - _,
            _ -= 30;
        const C = l.__decideRounding(e, _, o, c);
        if ((C === 1 || C === 0 && (1 & b) == 1) && (b = b + 1 >>> 0,
        b === 0 && (y++,
        y >>> 20 != 0 && (y = 0,
        s++,
        1023 < s))))
            return e.sign ? -1 / 0 : 1 / 0;
        const M = e.sign ? -2147483648 : 0;
        return s = s + 1023 << 20,
        l.__kBitConversionInts[1] = M | s | y,
        l.__kBitConversionInts[0] = b,
        l.__kBitConversionDouble[0]
    }
    static unaryMinus(e) {
        if (e.length === 0)
            return e;
        const t = e.__copy();
        return t.sign = !e.sign,
        t
    }
    static bitwiseNot(e) {
        return e.sign ? l.__absoluteSubOne(e).__trim() : l.__absoluteAddOne(e, !0)
    }
    static exponentiate(e, t) {
        if (t.sign)
            throw new RangeError("Exponent must be positive");
        if (t.length === 0)
            return l.__oneDigit(1, !1);
        if (e.length === 0)
            return e;
        if (e.length === 1 && e.__digit(0) === 1)
            return e.sign && !(1 & t.__digit(0)) ? l.unaryMinus(e) : e;
        if (1 < t.length)
            throw new RangeError("BigInt too big");
        let a = t.__unsignedDigit(0);
        if (a === 1)
            return e;
        if (a >= l.__kMaxLengthBits)
            throw new RangeError("BigInt too big");
        if (e.length === 1 && e.__digit(0) === 2) {
            const s = 1 + (0 | a / 30)
              , c = e.sign && (1 & a) != 0
              , o = new l(s,c);
            o.__initializeDigits();
            const p = 1 << a % 30;
            return o.__setDigit(s - 1, p),
            o
        }
        let i = null
          , r = e;
        for (1 & a && (i = e),
        a >>= 1; a !== 0; a >>= 1)
            r = l.multiply(r, r),
            1 & a && (i === null ? i = r : i = l.multiply(i, r));
        return i
    }
    static multiply(e, t) {
        if (e.length === 0)
            return e;
        if (t.length === 0)
            return t;
        let a = e.length + t.length;
        30 <= e.__clzmsd() + t.__clzmsd() && a--;
        const i = new l(a,e.sign !== t.sign);
        i.__initializeDigits();
        for (let r = 0; r < e.length; r++)
            l.__multiplyAccumulate(t, e.__digit(r), i, r);
        return i.__trim()
    }
    static divide(e, t) {
        if (t.length === 0)
            throw new RangeError("Division by zero");
        if (0 > l.__absoluteCompare(e, t))
            return l.__zero();
        const a = e.sign !== t.sign
          , i = t.__unsignedDigit(0);
        let r;
        if (t.length === 1 && 32767 >= i) {
            if (i === 1)
                return a === e.sign ? e : l.unaryMinus(e);
            r = l.__absoluteDivSmall(e, i, null)
        } else
            r = l.__absoluteDivLarge(e, t, !0, !1);
        return r.sign = a,
        r.__trim()
    }
    static remainder(e, t) {
        if (t.length === 0)
            throw new RangeError("Division by zero");
        if (0 > l.__absoluteCompare(e, t))
            return e;
        const a = t.__unsignedDigit(0);
        if (t.length === 1 && 32767 >= a) {
            if (a === 1)
                return l.__zero();
            const r = l.__absoluteModSmall(e, a);
            return r === 0 ? l.__zero() : l.__oneDigit(r, e.sign)
        }
        const i = l.__absoluteDivLarge(e, t, !1, !0);
        return i.sign = e.sign,
        i.__trim()
    }
    static add(e, t) {
        const a = e.sign;
        return a === t.sign ? l.__absoluteAdd(e, t, a) : 0 <= l.__absoluteCompare(e, t) ? l.__absoluteSub(e, t, a) : l.__absoluteSub(t, e, !a)
    }
    static subtract(e, t) {
        const a = e.sign;
        return a === t.sign ? 0 <= l.__absoluteCompare(e, t) ? l.__absoluteSub(e, t, a) : l.__absoluteSub(t, e, !a) : l.__absoluteAdd(e, t, a)
    }
    static leftShift(e, t) {
        return t.length === 0 || e.length === 0 ? e : t.sign ? l.__rightShiftByAbsolute(e, t) : l.__leftShiftByAbsolute(e, t)
    }
    static signedRightShift(e, t) {
        return t.length === 0 || e.length === 0 ? e : t.sign ? l.__leftShiftByAbsolute(e, t) : l.__rightShiftByAbsolute(e, t)
    }
    static unsignedRightShift() {
        throw new TypeError("BigInts have no unsigned right shift; use >> instead")
    }
    static lessThan(e, t) {
        return 0 > l.__compareToBigInt(e, t)
    }
    static lessThanOrEqual(e, t) {
        return 0 >= l.__compareToBigInt(e, t)
    }
    static greaterThan(e, t) {
        return 0 < l.__compareToBigInt(e, t)
    }
    static greaterThanOrEqual(e, t) {
        return 0 <= l.__compareToBigInt(e, t)
    }
    static equal(e, t) {
        if (e.sign !== t.sign || e.length !== t.length)
            return !1;
        for (let a = 0; a < e.length; a++)
            if (e.__digit(a) !== t.__digit(a))
                return !1;
        return !0
    }
    static notEqual(e, t) {
        return !l.equal(e, t)
    }
    static bitwiseAnd(e, t) {
        var a = Math.max;
        if (!e.sign && !t.sign)
            return l.__absoluteAnd(e, t).__trim();
        if (e.sign && t.sign) {
            const i = a(e.length, t.length) + 1;
            let r = l.__absoluteSubOne(e, i);
            const s = l.__absoluteSubOne(t);
            return r = l.__absoluteOr(r, s, r),
            l.__absoluteAddOne(r, !0, r).__trim()
        }
        return e.sign && ([e,t] = [t, e]),
        l.__absoluteAndNot(e, l.__absoluteSubOne(t)).__trim()
    }
    static bitwiseXor(e, t) {
        var a = Math.max;
        if (!e.sign && !t.sign)
            return l.__absoluteXor(e, t).__trim();
        if (e.sign && t.sign) {
            const s = a(e.length, t.length)
              , c = l.__absoluteSubOne(e, s)
              , o = l.__absoluteSubOne(t);
            return l.__absoluteXor(c, o, c).__trim()
        }
        const i = a(e.length, t.length) + 1;
        e.sign && ([e,t] = [t, e]);
        let r = l.__absoluteSubOne(t, i);
        return r = l.__absoluteXor(r, e, r),
        l.__absoluteAddOne(r, !0, r).__trim()
    }
    static bitwiseOr(e, t) {
        var a = Math.max;
        const i = a(e.length, t.length);
        if (!e.sign && !t.sign)
            return l.__absoluteOr(e, t).__trim();
        if (e.sign && t.sign) {
            let s = l.__absoluteSubOne(e, i);
            const c = l.__absoluteSubOne(t);
            return s = l.__absoluteAnd(s, c, s),
            l.__absoluteAddOne(s, !0, s).__trim()
        }
        e.sign && ([e,t] = [t, e]);
        let r = l.__absoluteSubOne(t, i);
        return r = l.__absoluteAndNot(r, e, r),
        l.__absoluteAddOne(r, !0, r).__trim()
    }
    static asIntN(e, t) {
        var a = Math.floor;
        if (t.length === 0)
            return t;
        if (e = a(e),
        0 > e)
            throw new RangeError("Invalid value: not (convertible to) a safe integer");
        if (e === 0)
            return l.__zero();
        if (e >= l.__kMaxLengthBits)
            return t;
        const i = 0 | (e + 29) / 30;
        if (t.length < i)
            return t;
        const r = t.__unsignedDigit(i - 1)
          , s = 1 << (e - 1) % 30;
        if (t.length === i && r < s)
            return t;
        if ((r & s) !== s)
            return l.__truncateToNBits(e, t);
        if (!t.sign)
            return l.__truncateAndSubFromPowerOfTwo(e, t, !0);
        if (!(r & s - 1)) {
            for (let c = i - 2; 0 <= c; c--)
                if (t.__digit(c) !== 0)
                    return l.__truncateAndSubFromPowerOfTwo(e, t, !1);
            return t.length === i && r === s ? t : l.__truncateToNBits(e, t)
        }
        return l.__truncateAndSubFromPowerOfTwo(e, t, !1)
    }
    static asUintN(e, t) {
        var a = Math.floor;
        if (t.length === 0)
            return t;
        if (e = a(e),
        0 > e)
            throw new RangeError("Invalid value: not (convertible to) a safe integer");
        if (e === 0)
            return l.__zero();
        if (t.sign) {
            if (e > l.__kMaxLengthBits)
                throw new RangeError("BigInt too big");
            return l.__truncateAndSubFromPowerOfTwo(e, t, !1)
        }
        if (e >= l.__kMaxLengthBits)
            return t;
        const i = 0 | (e + 29) / 30;
        if (t.length < i)
            return t;
        const r = e % 30;
        return t.length == i && (r === 0 || !(t.__digit(i - 1) >>> r)) ? t : l.__truncateToNBits(e, t)
    }
    static ADD(e, t) {
        if (e = l.__toPrimitive(e),
        t = l.__toPrimitive(t),
        typeof e == "string")
            return typeof t != "string" && (t = t.toString()),
            e + t;
        if (typeof t == "string")
            return e.toString() + t;
        if (e = l.__toNumeric(e),
        t = l.__toNumeric(t),
        l.__isBigInt(e) && l.__isBigInt(t))
            return l.add(e, t);
        if (typeof e == "number" && typeof t == "number")
            return e + t;
        throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")
    }
    static LT(e, t) {
        return l.__compare(e, t, 0)
    }
    static LE(e, t) {
        return l.__compare(e, t, 1)
    }
    static GT(e, t) {
        return l.__compare(e, t, 2)
    }
    static GE(e, t) {
        return l.__compare(e, t, 3)
    }
    static EQ(e, t) {
        for (; ; ) {
            if (l.__isBigInt(e))
                return l.__isBigInt(t) ? l.equal(e, t) : l.EQ(t, e);
            if (typeof e == "number") {
                if (l.__isBigInt(t))
                    return l.__equalToNumber(t, e);
                if (typeof t != "object")
                    return e == t;
                t = l.__toPrimitive(t)
            } else if (typeof e == "string") {
                if (l.__isBigInt(t))
                    return e = l.__fromString(e),
                    e !== null && l.equal(e, t);
                if (typeof t != "object")
                    return e == t;
                t = l.__toPrimitive(t)
            } else if (typeof e == "boolean") {
                if (l.__isBigInt(t))
                    return l.__equalToNumber(t, +e);
                if (typeof t != "object")
                    return e == t;
                t = l.__toPrimitive(t)
            } else if (typeof e == "symbol") {
                if (l.__isBigInt(t))
                    return !1;
                if (typeof t != "object")
                    return e == t;
                t = l.__toPrimitive(t)
            } else if (typeof e == "object") {
                if (typeof t == "object" && t.constructor !== l)
                    return e == t;
                e = l.__toPrimitive(e)
            } else
                return e == t
        }
    }
    static NE(e, t) {
        return !l.EQ(e, t)
    }
    static __zero() {
        return new l(0,!1)
    }
    static __oneDigit(e, t) {
        const a = new l(1,t);
        return a.__setDigit(0, e),
        a
    }
    __copy() {
        const e = new l(this.length,this.sign);
        for (let t = 0; t < this.length; t++)
            e[t] = this[t];
        return e
    }
    __trim() {
        let e = this.length
          , t = this[e - 1];
        for (; t === 0; )
            e--,
            t = this[e - 1],
            this.pop();
        return e === 0 && (this.sign = !1),
        this
    }
    __initializeDigits() {
        for (let e = 0; e < this.length; e++)
            this[e] = 0
    }
    static __decideRounding(e, t, a, i) {
        if (0 < t)
            return -1;
        let r;
        if (0 > t)
            r = -t - 1;
        else {
            if (a === 0)
                return -1;
            a--,
            i = e.__digit(a),
            r = 29
        }
        let s = 1 << r;
        if (!(i & s))
            return -1;
        if (s -= 1,
        (i & s) != 0)
            return 1;
        for (; 0 < a; )
            if (a--,
            e.__digit(a) !== 0)
                return 1;
        return 0
    }
    static __fromDouble(e) {
        l.__kBitConversionDouble[0] = e;
        const t = 2047 & l.__kBitConversionInts[1] >>> 20
          , a = t - 1023
          , i = (0 | a / 30) + 1
          , r = new l(i,0 > e);
        let s = 1048575 & l.__kBitConversionInts[1] | 1048576
          , c = l.__kBitConversionInts[0];
        const o = 20
          , p = a % 30;
        let y, u = 0;
        if (p < 20) {
            const b = o - p;
            u = b + 32,
            y = s >>> b,
            s = s << 32 - b | c >>> b,
            c <<= 32 - b
        } else if (p === 20)
            u = 32,
            y = s,
            s = c,
            c = 0;
        else {
            const b = p - o;
            u = 32 - b,
            y = s << b | c >>> 32 - b,
            s = c << b,
            c = 0
        }
        r.__setDigit(i - 1, y);
        for (let b = i - 2; 0 <= b; b--)
            0 < u ? (u -= 30,
            y = s >>> 2,
            s = s << 30 | c >>> 2,
            c <<= 30) : y = 0,
            r.__setDigit(b, y);
        return r.__trim()
    }
    static __isWhitespace(e) {
        return 13 >= e && 9 <= e || (159 >= e ? e == 32 : 131071 >= e ? e == 160 || e == 5760 : 196607 >= e ? (e &= 131071,
        10 >= e || e == 40 || e == 41 || e == 47 || e == 95 || e == 4096) : e == 65279)
    }
    static __fromString(e, t=0) {
        let a = 0;
        const i = e.length;
        let r = 0;
        if (r === i)
            return l.__zero();
        let s = e.charCodeAt(r);
        for (; l.__isWhitespace(s); ) {
            if (++r === i)
                return l.__zero();
            s = e.charCodeAt(r)
        }
        if (s === 43) {
            if (++r === i)
                return null;
            s = e.charCodeAt(r),
            a = 1
        } else if (s === 45) {
            if (++r === i)
                return null;
            s = e.charCodeAt(r),
            a = -1
        }
        if (t === 0) {
            if (t = 10,
            s === 48) {
                if (++r === i)
                    return l.__zero();
                if (s = e.charCodeAt(r),
                s === 88 || s === 120) {
                    if (t = 16,
                    ++r === i)
                        return null;
                    s = e.charCodeAt(r)
                } else if (s === 79 || s === 111) {
                    if (t = 8,
                    ++r === i)
                        return null;
                    s = e.charCodeAt(r)
                } else if (s === 66 || s === 98) {
                    if (t = 2,
                    ++r === i)
                        return null;
                    s = e.charCodeAt(r)
                }
            }
        } else if (t === 16 && s === 48) {
            if (++r === i)
                return l.__zero();
            if (s = e.charCodeAt(r),
            s === 88 || s === 120) {
                if (++r === i)
                    return null;
                s = e.charCodeAt(r)
            }
        }
        if (a != 0 && t !== 10)
            return null;
        for (; s === 48; ) {
            if (++r === i)
                return l.__zero();
            s = e.charCodeAt(r)
        }
        const c = i - r;
        let o = l.__kMaxBitsPerChar[t]
          , p = l.__kBitsPerCharTableMultiplier - 1;
        if (c > 1073741824 / o)
            return null;
        const y = o * c + p >>> l.__kBitsPerCharTableShift
          , u = new l(0 | (y + 29) / 30,!1)
          , b = 10 > t ? t : 10
          , _ = 10 < t ? t - 10 : 0;
        if (t & t - 1) {
            u.__initializeDigits();
            let C = !1
              , M = 0;
            do {
                let E = 0
                  , v = 1;
                for (; ; ) {
                    let B;
                    if (s - 48 >>> 0 < b)
                        B = s - 48;
                    else if ((32 | s) - 97 >>> 0 < _)
                        B = (32 | s) - 87;
                    else {
                        C = !0;
                        break
                    }
                    const F = v * t;
                    if (1073741823 < F)
                        break;
                    if (v = F,
                    E = E * t + B,
                    M++,
                    ++r === i) {
                        C = !0;
                        break
                    }
                    s = e.charCodeAt(r)
                }
                p = 30 * l.__kBitsPerCharTableMultiplier - 1;
                const x = 0 | (o * M + p >>> l.__kBitsPerCharTableShift) / 30;
                u.__inplaceMultiplyAdd(v, E, x)
            } while (!C)
        } else {
            o >>= l.__kBitsPerCharTableShift;
            const C = []
              , M = [];
            let E = !1;
            do {
                let v = 0
                  , x = 0;
                for (; ; ) {
                    let B;
                    if (s - 48 >>> 0 < b)
                        B = s - 48;
                    else if ((32 | s) - 97 >>> 0 < _)
                        B = (32 | s) - 87;
                    else {
                        E = !0;
                        break
                    }
                    if (x += o,
                    v = v << o | B,
                    ++r === i) {
                        E = !0;
                        break
                    }
                    if (s = e.charCodeAt(r),
                    30 < x + o)
                        break
                }
                C.push(v),
                M.push(x)
            } while (!E);
            l.__fillFromParts(u, C, M)
        }
        if (r !== i) {
            if (!l.__isWhitespace(s))
                return null;
            for (r++; r < i; r++)
                if (s = e.charCodeAt(r),
                !l.__isWhitespace(s))
                    return null
        }
        return u.sign = a == -1,
        u.__trim()
    }
    static __fillFromParts(e, t, a) {
        let i = 0
          , r = 0
          , s = 0;
        for (let c = t.length - 1; 0 <= c; c--) {
            const o = t[c]
              , p = a[c];
            r |= o << s,
            s += p,
            s === 30 ? (e.__setDigit(i++, r),
            s = 0,
            r = 0) : 30 < s && (e.__setDigit(i++, 1073741823 & r),
            s -= 30,
            r = o >>> p - s)
        }
        if (r !== 0) {
            if (i >= e.length)
                throw new Error("implementation bug");
            e.__setDigit(i++, r)
        }
        for (; i < e.length; i++)
            e.__setDigit(i, 0)
    }
    static __toStringBasePowerOfTwo(e, t) {
        const a = e.length;
        let i = t - 1;
        i = (85 & i >>> 1) + (85 & i),
        i = (51 & i >>> 2) + (51 & i),
        i = (15 & i >>> 4) + (15 & i);
        const r = i
          , s = t - 1
          , c = e.__digit(a - 1)
          , o = l.__clz30(c);
        let p = 0 | (30 * a - o + r - 1) / r;
        if (e.sign && p++,
        268435456 < p)
            throw new Error("string too long");
        const y = Array(p);
        let u = p - 1
          , b = 0
          , _ = 0;
        for (let M = 0; M < a - 1; M++) {
            const E = e.__digit(M)
              , v = (b | E << _) & s;
            y[u--] = l.__kConversionChars[v];
            const x = r - _;
            for (b = E >>> x,
            _ = 30 - x; _ >= r; )
                y[u--] = l.__kConversionChars[b & s],
                b >>>= r,
                _ -= r
        }
        const C = (b | c << _) & s;
        for (y[u--] = l.__kConversionChars[C],
        b = c >>> r - _; b !== 0; )
            y[u--] = l.__kConversionChars[b & s],
            b >>>= r;
        if (e.sign && (y[u--] = "-"),
        u != -1)
            throw new Error("implementation bug");
        return y.join("")
    }
    static __toStringGeneric(e, t, a) {
        const i = e.length;
        if (i === 0)
            return "";
        if (i === 1) {
            let M = e.__unsignedDigit(0).toString(t);
            return a === !1 && e.sign && (M = "-" + M),
            M
        }
        const r = 30 * i - l.__clz30(e.__digit(i - 1))
          , s = l.__kMaxBitsPerChar[t]
          , c = s - 1;
        let o = r * l.__kBitsPerCharTableMultiplier;
        o += c - 1,
        o = 0 | o / c;
        const p = o + 1 >> 1
          , y = l.exponentiate(l.__oneDigit(t, !1), l.__oneDigit(p, !1));
        let u, b;
        const _ = y.__unsignedDigit(0);
        if (y.length === 1 && 32767 >= _) {
            u = new l(e.length,!1),
            u.__initializeDigits();
            let M = 0;
            for (let E = 2 * e.length - 1; 0 <= E; E--) {
                const v = M << 15 | e.__halfDigit(E);
                u.__setHalfDigit(E, 0 | v / _),
                M = 0 | v % _
            }
            b = M.toString(t)
        } else {
            const M = l.__absoluteDivLarge(e, y, !0, !0);
            u = M.quotient;
            const E = M.remainder.__trim();
            b = l.__toStringGeneric(E, t, !0)
        }
        u.__trim();
        let C = l.__toStringGeneric(u, t, !0);
        for (; b.length < p; )
            b = "0" + b;
        return a === !1 && e.sign && (C = "-" + C),
        C + b
    }
    static __unequalSign(e) {
        return e ? -1 : 1
    }
    static __absoluteGreater(e) {
        return e ? -1 : 1
    }
    static __absoluteLess(e) {
        return e ? 1 : -1
    }
    static __compareToBigInt(e, t) {
        const a = e.sign;
        if (a !== t.sign)
            return l.__unequalSign(a);
        const i = l.__absoluteCompare(e, t);
        return 0 < i ? l.__absoluteGreater(a) : 0 > i ? l.__absoluteLess(a) : 0
    }
    static __compareToNumber(e, t) {
        if (l.__isOneDigitInt(t)) {
            const a = e.sign
              , i = 0 > t;
            if (a !== i)
                return l.__unequalSign(a);
            if (e.length === 0) {
                if (i)
                    throw new Error("implementation bug");
                return t === 0 ? 0 : -1
            }
            if (1 < e.length)
                return l.__absoluteGreater(a);
            const r = Math.abs(t)
              , s = e.__unsignedDigit(0);
            return s > r ? l.__absoluteGreater(a) : s < r ? l.__absoluteLess(a) : 0
        }
        return l.__compareToDouble(e, t)
    }
    static __compareToDouble(e, t) {
        if (t !== t)
            return t;
        if (t === 1 / 0)
            return -1;
        if (t === -1 / 0)
            return 1;
        const a = e.sign;
        if (a !== 0 > t)
            return l.__unequalSign(a);
        if (t === 0)
            throw new Error("implementation bug: should be handled elsewhere");
        if (e.length === 0)
            return -1;
        l.__kBitConversionDouble[0] = t;
        const i = 2047 & l.__kBitConversionInts[1] >>> 20;
        if (i == 2047)
            throw new Error("implementation bug: handled elsewhere");
        const r = i - 1023;
        if (0 > r)
            return l.__absoluteGreater(a);
        const s = e.length;
        let c = e.__digit(s - 1);
        const o = l.__clz30(c)
          , p = 30 * s - o
          , y = r + 1;
        if (p < y)
            return l.__absoluteLess(a);
        if (p > y)
            return l.__absoluteGreater(a);
        let u = 1048576 | 1048575 & l.__kBitConversionInts[1]
          , b = l.__kBitConversionInts[0];
        const _ = 20
          , C = 29 - o;
        if (C !== (0 | (p - 1) % 30))
            throw new Error("implementation bug");
        let M, E = 0;
        if (20 > C) {
            const v = _ - C;
            E = v + 32,
            M = u >>> v,
            u = u << 32 - v | b >>> v,
            b <<= 32 - v
        } else if (C === 20)
            E = 32,
            M = u,
            u = b,
            b = 0;
        else {
            const v = C - _;
            E = 32 - v,
            M = u << v | b >>> 32 - v,
            u = b << v,
            b = 0
        }
        if (c >>>= 0,
        M >>>= 0,
        c > M)
            return l.__absoluteGreater(a);
        if (c < M)
            return l.__absoluteLess(a);
        for (let v = s - 2; 0 <= v; v--) {
            0 < E ? (E -= 30,
            M = u >>> 2,
            u = u << 30 | b >>> 2,
            b <<= 30) : M = 0;
            const x = e.__unsignedDigit(v);
            if (x > M)
                return l.__absoluteGreater(a);
            if (x < M)
                return l.__absoluteLess(a)
        }
        if (u !== 0 || b !== 0) {
            if (E === 0)
                throw new Error("implementation bug");
            return l.__absoluteLess(a)
        }
        return 0
    }
    static __equalToNumber(e, t) {
        var a = Math.abs;
        return l.__isOneDigitInt(t) ? t === 0 ? e.length === 0 : e.length === 1 && e.sign === 0 > t && e.__unsignedDigit(0) === a(t) : l.__compareToDouble(e, t) === 0
    }
    static __comparisonResultToBool(e, t) {
        return t === 0 ? 0 > e : t === 1 ? 0 >= e : t === 2 ? 0 < e : t === 3 ? 0 <= e : void 0
    }
    static __compare(e, t, a) {
        if (e = l.__toPrimitive(e),
        t = l.__toPrimitive(t),
        typeof e == "string" && typeof t == "string")
            switch (a) {
            case 0:
                return e < t;
            case 1:
                return e <= t;
            case 2:
                return e > t;
            case 3:
                return e >= t
            }
        if (l.__isBigInt(e) && typeof t == "string")
            return t = l.__fromString(t),
            t !== null && l.__comparisonResultToBool(l.__compareToBigInt(e, t), a);
        if (typeof e == "string" && l.__isBigInt(t))
            return e = l.__fromString(e),
            e !== null && l.__comparisonResultToBool(l.__compareToBigInt(e, t), a);
        if (e = l.__toNumeric(e),
        t = l.__toNumeric(t),
        l.__isBigInt(e)) {
            if (l.__isBigInt(t))
                return l.__comparisonResultToBool(l.__compareToBigInt(e, t), a);
            if (typeof t != "number")
                throw new Error("implementation bug");
            return l.__comparisonResultToBool(l.__compareToNumber(e, t), a)
        }
        if (typeof e != "number")
            throw new Error("implementation bug");
        if (l.__isBigInt(t))
            return l.__comparisonResultToBool(l.__compareToNumber(t, e), 2 ^ a);
        if (typeof t != "number")
            throw new Error("implementation bug");
        return a === 0 ? e < t : a === 1 ? e <= t : a === 2 ? e > t : a === 3 ? e >= t : void 0
    }
    __clzmsd() {
        return l.__clz30(this.__digit(this.length - 1))
    }
    static __absoluteAdd(e, t, a) {
        if (e.length < t.length)
            return l.__absoluteAdd(t, e, a);
        if (e.length === 0)
            return e;
        if (t.length === 0)
            return e.sign === a ? e : l.unaryMinus(e);
        let i = e.length;
        (e.__clzmsd() === 0 || t.length === e.length && t.__clzmsd() === 0) && i++;
        const r = new l(i,a);
        let s = 0
          , c = 0;
        for (; c < t.length; c++) {
            const o = e.__digit(c) + t.__digit(c) + s;
            s = o >>> 30,
            r.__setDigit(c, 1073741823 & o)
        }
        for (; c < e.length; c++) {
            const o = e.__digit(c) + s;
            s = o >>> 30,
            r.__setDigit(c, 1073741823 & o)
        }
        return c < r.length && r.__setDigit(c, s),
        r.__trim()
    }
    static __absoluteSub(e, t, a) {
        if (e.length === 0)
            return e;
        if (t.length === 0)
            return e.sign === a ? e : l.unaryMinus(e);
        const i = new l(e.length,a);
        let r = 0
          , s = 0;
        for (; s < t.length; s++) {
            const c = e.__digit(s) - t.__digit(s) - r;
            r = 1 & c >>> 30,
            i.__setDigit(s, 1073741823 & c)
        }
        for (; s < e.length; s++) {
            const c = e.__digit(s) - r;
            r = 1 & c >>> 30,
            i.__setDigit(s, 1073741823 & c)
        }
        return i.__trim()
    }
    static __absoluteAddOne(e, t, a=null) {
        const i = e.length;
        a === null ? a = new l(i,t) : a.sign = t;
        let r = 1;
        for (let s = 0; s < i; s++) {
            const c = e.__digit(s) + r;
            r = c >>> 30,
            a.__setDigit(s, 1073741823 & c)
        }
        return r != 0 && a.__setDigitGrow(i, 1),
        a
    }
    static __absoluteSubOne(e, t) {
        const a = e.length;
        t = t || a;
        const i = new l(t,!1);
        let r = 1;
        for (let s = 0; s < a; s++) {
            const c = e.__digit(s) - r;
            r = 1 & c >>> 30,
            i.__setDigit(s, 1073741823 & c)
        }
        if (r != 0)
            throw new Error("implementation bug");
        for (let s = a; s < t; s++)
            i.__setDigit(s, 0);
        return i
    }
    static __absoluteAnd(e, t, a=null) {
        let i = e.length
          , r = t.length
          , s = r;
        if (i < r) {
            s = i;
            const p = e
              , y = i;
            e = t,
            i = r,
            t = p,
            r = y
        }
        let c = s;
        a === null ? a = new l(c,!1) : c = a.length;
        let o = 0;
        for (; o < s; o++)
            a.__setDigit(o, e.__digit(o) & t.__digit(o));
        for (; o < c; o++)
            a.__setDigit(o, 0);
        return a
    }
    static __absoluteAndNot(e, t, a=null) {
        const i = e.length
          , r = t.length;
        let s = r;
        i < r && (s = i);
        let c = i;
        a === null ? a = new l(c,!1) : c = a.length;
        let o = 0;
        for (; o < s; o++)
            a.__setDigit(o, e.__digit(o) & ~t.__digit(o));
        for (; o < i; o++)
            a.__setDigit(o, e.__digit(o));
        for (; o < c; o++)
            a.__setDigit(o, 0);
        return a
    }
    static __absoluteOr(e, t, a=null) {
        let i = e.length
          , r = t.length
          , s = r;
        if (i < r) {
            s = i;
            const p = e
              , y = i;
            e = t,
            i = r,
            t = p,
            r = y
        }
        let c = i;
        a === null ? a = new l(c,!1) : c = a.length;
        let o = 0;
        for (; o < s; o++)
            a.__setDigit(o, e.__digit(o) | t.__digit(o));
        for (; o < i; o++)
            a.__setDigit(o, e.__digit(o));
        for (; o < c; o++)
            a.__setDigit(o, 0);
        return a
    }
    static __absoluteXor(e, t, a=null) {
        let i = e.length
          , r = t.length
          , s = r;
        if (i < r) {
            s = i;
            const p = e
              , y = i;
            e = t,
            i = r,
            t = p,
            r = y
        }
        let c = i;
        a === null ? a = new l(c,!1) : c = a.length;
        let o = 0;
        for (; o < s; o++)
            a.__setDigit(o, e.__digit(o) ^ t.__digit(o));
        for (; o < i; o++)
            a.__setDigit(o, e.__digit(o));
        for (; o < c; o++)
            a.__setDigit(o, 0);
        return a
    }
    static __absoluteCompare(e, t) {
        const a = e.length - t.length;
        if (a != 0)
            return a;
        let i = e.length - 1;
        for (; 0 <= i && e.__digit(i) === t.__digit(i); )
            i--;
        return 0 > i ? 0 : e.__unsignedDigit(i) > t.__unsignedDigit(i) ? 1 : -1
    }
    static __multiplyAccumulate(e, t, a, i) {
        if (t === 0)
            return;
        const r = 32767 & t
          , s = t >>> 15;
        let c = 0
          , o = 0;
        for (let p, y = 0; y < e.length; y++,
        i++) {
            p = a.__digit(i);
            const u = e.__digit(y)
              , b = 32767 & u
              , _ = u >>> 15
              , C = l.__imul(b, r)
              , M = l.__imul(b, s)
              , E = l.__imul(_, r)
              , v = l.__imul(_, s);
            p += o + C + c,
            c = p >>> 30,
            p &= 1073741823,
            p += ((32767 & M) << 15) + ((32767 & E) << 15),
            c += p >>> 30,
            o = v + (M >>> 15) + (E >>> 15),
            a.__setDigit(i, 1073741823 & p)
        }
        for (; c != 0 || o !== 0; i++) {
            let p = a.__digit(i);
            p += c + o,
            o = 0,
            c = p >>> 30,
            a.__setDigit(i, 1073741823 & p)
        }
    }
    static __internalMultiplyAdd(e, t, a, i, r) {
        let s = a
          , c = 0;
        for (let o = 0; o < i; o++) {
            const p = e.__digit(o)
              , y = l.__imul(32767 & p, t)
              , u = l.__imul(p >>> 15, t)
              , b = y + ((32767 & u) << 15) + c + s;
            s = b >>> 30,
            c = u >>> 15,
            r.__setDigit(o, 1073741823 & b)
        }
        if (r.length > i)
            for (r.__setDigit(i++, s + c); i < r.length; )
                r.__setDigit(i++, 0);
        else if (s + c !== 0)
            throw new Error("implementation bug")
    }
    __inplaceMultiplyAdd(e, t, a) {
        a > this.length && (a = this.length);
        const i = 32767 & e
          , r = e >>> 15;
        let s = 0
          , c = t;
        for (let o = 0; o < a; o++) {
            const p = this.__digit(o)
              , y = 32767 & p
              , u = p >>> 15
              , b = l.__imul(y, i)
              , _ = l.__imul(y, r)
              , C = l.__imul(u, i)
              , M = l.__imul(u, r);
            let E = c + b + s;
            s = E >>> 30,
            E &= 1073741823,
            E += ((32767 & _) << 15) + ((32767 & C) << 15),
            s += E >>> 30,
            c = M + (_ >>> 15) + (C >>> 15),
            this.__setDigit(o, 1073741823 & E)
        }
        if (s != 0 || c !== 0)
            throw new Error("implementation bug")
    }
    static __absoluteDivSmall(e, t, a=null) {
        a === null && (a = new l(e.length,!1));
        let i = 0;
        for (let r, s = 2 * e.length - 1; 0 <= s; s -= 2) {
            r = (i << 15 | e.__halfDigit(s)) >>> 0;
            const c = 0 | r / t;
            i = 0 | r % t,
            r = (i << 15 | e.__halfDigit(s - 1)) >>> 0;
            const o = 0 | r / t;
            i = 0 | r % t,
            a.__setDigit(s >>> 1, c << 15 | o)
        }
        return a
    }
    static __absoluteModSmall(e, t) {
        let a = 0;
        for (let i = 2 * e.length - 1; 0 <= i; i--)
            a = 0 | ((a << 15 | e.__halfDigit(i)) >>> 0) % t;
        return a
    }
    static __absoluteDivLarge(e, t, a, i) {
        const r = t.__halfDigitLength()
          , s = t.length
          , c = e.__halfDigitLength() - r;
        let o = null;
        a && (o = new l(c + 2 >>> 1,!1),
        o.__initializeDigits());
        const p = new l(r + 2 >>> 1,!1);
        p.__initializeDigits();
        const y = l.__clz15(t.__halfDigit(r - 1));
        0 < y && (t = l.__specialLeftShift(t, y, 0));
        const u = l.__specialLeftShift(e, y, 1)
          , b = t.__halfDigit(r - 1);
        let _ = 0;
        for (let C, M = c; 0 <= M; M--) {
            C = 32767;
            const E = u.__halfDigit(M + r);
            if (E !== b) {
                const x = (E << 15 | u.__halfDigit(M + r - 1)) >>> 0;
                C = 0 | x / b;
                let B = 0 | x % b;
                const F = t.__halfDigit(r - 2)
                  , Y = u.__halfDigit(M + r - 2);
                for (; l.__imul(C, F) >>> 0 > (B << 16 | Y) >>> 0 && (C--,
                B += b,
                !(32767 < B)); )
                    ;
            }
            l.__internalMultiplyAdd(t, C, 0, s, p);
            let v = u.__inplaceSub(p, M, r + 1);
            v !== 0 && (v = u.__inplaceAdd(t, M, r),
            u.__setHalfDigit(M + r, 32767 & u.__halfDigit(M + r) + v),
            C--),
            a && (1 & M ? _ = C << 15 : o.__setDigit(M >>> 1, _ | C))
        }
        if (i)
            return u.__inplaceRightShift(y),
            a ? {
                quotient: o,
                remainder: u
            } : u;
        if (a)
            return o;
        throw new Error("unreachable")
    }
    static __clz15(e) {
        return l.__clz30(e) - 15
    }
    __inplaceAdd(e, t, a) {
        let i = 0;
        for (let r = 0; r < a; r++) {
            const s = this.__halfDigit(t + r) + e.__halfDigit(r) + i;
            i = s >>> 15,
            this.__setHalfDigit(t + r, 32767 & s)
        }
        return i
    }
    __inplaceSub(e, t, a) {
        let i = 0;
        if (1 & t) {
            t >>= 1;
            let r = this.__digit(t)
              , s = 32767 & r
              , c = 0;
            for (; c < a - 1 >>> 1; c++) {
                const y = e.__digit(c)
                  , u = (r >>> 15) - (32767 & y) - i;
                i = 1 & u >>> 15,
                this.__setDigit(t + c, (32767 & u) << 15 | 32767 & s),
                r = this.__digit(t + c + 1),
                s = (32767 & r) - (y >>> 15) - i,
                i = 1 & s >>> 15
            }
            const o = e.__digit(c)
              , p = (r >>> 15) - (32767 & o) - i;
            if (i = 1 & p >>> 15,
            this.__setDigit(t + c, (32767 & p) << 15 | 32767 & s),
            t + c + 1 >= this.length)
                throw new RangeError("out of bounds");
            !(1 & a) && (r = this.__digit(t + c + 1),
            s = (32767 & r) - (o >>> 15) - i,
            i = 1 & s >>> 15,
            this.__setDigit(t + e.length, 1073709056 & r | 32767 & s))
        } else {
            t >>= 1;
            let r = 0;
            for (; r < e.length - 1; r++) {
                const y = this.__digit(t + r)
                  , u = e.__digit(r)
                  , b = (32767 & y) - (32767 & u) - i;
                i = 1 & b >>> 15;
                const _ = (y >>> 15) - (u >>> 15) - i;
                i = 1 & _ >>> 15,
                this.__setDigit(t + r, (32767 & _) << 15 | 32767 & b)
            }
            const s = this.__digit(t + r)
              , c = e.__digit(r)
              , o = (32767 & s) - (32767 & c) - i;
            i = 1 & o >>> 15;
            let p = 0;
            !(1 & a) && (p = (s >>> 15) - (c >>> 15) - i,
            i = 1 & p >>> 15),
            this.__setDigit(t + r, (32767 & p) << 15 | 32767 & o)
        }
        return i
    }
    __inplaceRightShift(e) {
        if (e === 0)
            return;
        let t = this.__digit(0) >>> e;
        const a = this.length - 1;
        for (let i = 0; i < a; i++) {
            const r = this.__digit(i + 1);
            this.__setDigit(i, 1073741823 & r << 30 - e | t),
            t = r >>> e
        }
        this.__setDigit(a, t)
    }
    static __specialLeftShift(e, t, a) {
        const i = e.length
          , r = new l(i + a,!1);
        if (t === 0) {
            for (let c = 0; c < i; c++)
                r.__setDigit(c, e.__digit(c));
            return 0 < a && r.__setDigit(i, 0),
            r
        }
        let s = 0;
        for (let c = 0; c < i; c++) {
            const o = e.__digit(c);
            r.__setDigit(c, 1073741823 & o << t | s),
            s = o >>> 30 - t
        }
        return 0 < a && r.__setDigit(i, s),
        r
    }
    static __leftShiftByAbsolute(e, t) {
        const a = l.__toShiftAmount(t);
        if (0 > a)
            throw new RangeError("BigInt too big");
        const i = 0 | a / 30
          , r = a % 30
          , s = e.length
          , c = r !== 0 && e.__digit(s - 1) >>> 30 - r != 0
          , o = s + i + (c ? 1 : 0)
          , p = new l(o,e.sign);
        if (r === 0) {
            let y = 0;
            for (; y < i; y++)
                p.__setDigit(y, 0);
            for (; y < o; y++)
                p.__setDigit(y, e.__digit(y - i))
        } else {
            let y = 0;
            for (let u = 0; u < i; u++)
                p.__setDigit(u, 0);
            for (let u = 0; u < s; u++) {
                const b = e.__digit(u);
                p.__setDigit(u + i, 1073741823 & b << r | y),
                y = b >>> 30 - r
            }
            if (c)
                p.__setDigit(s + i, y);
            else if (y !== 0)
                throw new Error("implementation bug")
        }
        return p.__trim()
    }
    static __rightShiftByAbsolute(e, t) {
        const a = e.length
          , i = e.sign
          , r = l.__toShiftAmount(t);
        if (0 > r)
            return l.__rightShiftByMaximum(i);
        const s = 0 | r / 30
          , c = r % 30;
        let o = a - s;
        if (0 >= o)
            return l.__rightShiftByMaximum(i);
        let p = !1;
        if (i) {
            if (e.__digit(s) & (1 << c) - 1)
                p = !0;
            else
                for (let u = 0; u < s; u++)
                    if (e.__digit(u) !== 0) {
                        p = !0;
                        break
                    }
        }
        p && c === 0 && !~e.__digit(a - 1) && o++;
        let y = new l(o,i);
        if (c === 0) {
            y.__setDigit(o - 1, 0);
            for (let u = s; u < a; u++)
                y.__setDigit(u - s, e.__digit(u))
        } else {
            let u = e.__digit(s) >>> c;
            const b = a - s - 1;
            for (let _ = 0; _ < b; _++) {
                const C = e.__digit(_ + s + 1);
                y.__setDigit(_, 1073741823 & C << 30 - c | u),
                u = C >>> c
            }
            y.__setDigit(b, u)
        }
        return p && (y = l.__absoluteAddOne(y, !0, y)),
        y.__trim()
    }
    static __rightShiftByMaximum(e) {
        return e ? l.__oneDigit(1, !0) : l.__zero()
    }
    static __toShiftAmount(e) {
        if (1 < e.length)
            return -1;
        const t = e.__unsignedDigit(0);
        return t > l.__kMaxLengthBits ? -1 : t
    }
    static __toPrimitive(e, t="default") {
        if (typeof e != "object" || e.constructor === l)
            return e;
        if (typeof Symbol < "u" && typeof Symbol.toPrimitive == "symbol") {
            const r = e[Symbol.toPrimitive];
            if (r) {
                const s = r(t);
                if (typeof s != "object")
                    return s;
                throw new TypeError("Cannot convert object to primitive value")
            }
        }
        const a = e.valueOf;
        if (a) {
            const r = a.call(e);
            if (typeof r != "object")
                return r
        }
        const i = e.toString;
        if (i) {
            const r = i.call(e);
            if (typeof r != "object")
                return r
        }
        throw new TypeError("Cannot convert object to primitive value")
    }
    static __toNumeric(e) {
        return l.__isBigInt(e) ? e : +e
    }
    static __isBigInt(e) {
        return typeof e == "object" && e !== null && e.constructor === l
    }
    static __truncateToNBits(e, t) {
        const a = 0 | (e + 29) / 30
          , i = new l(a,t.sign)
          , r = a - 1;
        for (let c = 0; c < r; c++)
            i.__setDigit(c, t.__digit(c));
        let s = t.__digit(r);
        if (e % 30 != 0) {
            const c = 32 - e % 30;
            s = s << c >>> c
        }
        return i.__setDigit(r, s),
        i.__trim()
    }
    static __truncateAndSubFromPowerOfTwo(e, t, a) {
        var i = Math.min;
        const r = 0 | (e + 29) / 30
          , s = new l(r,a);
        let c = 0;
        const o = r - 1;
        let p = 0;
        for (const _ = i(o, t.length); c < _; c++) {
            const C = 0 - t.__digit(c) - p;
            p = 1 & C >>> 30,
            s.__setDigit(c, 1073741823 & C)
        }
        for (; c < o; c++)
            s.__setDigit(c, 0 | 1073741823 & -p);
        let y = o < t.length ? t.__digit(o) : 0;
        const u = e % 30;
        let b;
        if (u == 0)
            b = 0 - y - p,
            b &= 1073741823;
        else {
            const _ = 32 - u;
            y = y << _ >>> _;
            const C = 1 << 32 - _;
            b = C - y - p,
            b &= C - 1
        }
        return s.__setDigit(o, b),
        s.__trim()
    }
    __digit(e) {
        return this[e]
    }
    __unsignedDigit(e) {
        return this[e] >>> 0
    }
    __setDigit(e, t) {
        this[e] = 0 | t
    }
    __setDigitGrow(e, t) {
        this[e] = 0 | t
    }
    __halfDigitLength() {
        const e = this.length;
        return 32767 >= this.__unsignedDigit(e - 1) ? 2 * e - 1 : 2 * e
    }
    __halfDigit(e) {
        return 32767 & this[e >>> 1] >>> 15 * (1 & e)
    }
    __setHalfDigit(e, t) {
        const a = e >>> 1
          , i = this.__digit(a)
          , r = 1 & e ? 32767 & i | t << 15 : 1073709056 & i | 32767 & t;
        this.__setDigit(a, r)
    }
    static __digitPow(e, t) {
        let a = 1;
        for (; 0 < t; )
            1 & t && (a *= e),
            t >>>= 1,
            e *= e;
        return a
    }
    static __isOneDigitInt(e) {
        return (1073741823 & e) === e
    }
}
l.__kMaxLength = 33554432,
l.__kMaxLengthBits = l.__kMaxLength << 5,
l.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166],
l.__kBitsPerCharTableShift = 5,
l.__kBitsPerCharTableMultiplier = 1 << l.__kBitsPerCharTableShift,
l.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
l.__kBitConversionBuffer = new ArrayBuffer(8),
l.__kBitConversionDouble = new Float64Array(l.__kBitConversionBuffer),
l.__kBitConversionInts = new Int32Array(l.__kBitConversionBuffer),
l.__clz30 = Math.clz32 ? function(n) {
    return Math.clz32(n) - 2
}
: function(n) {
    return n === 0 ? 30 : 0 | 29 - (0 | Math.log(n >>> 0) / Math.LN2)
}
,
l.__imul = Math.imul || function(n, e) {
    return 0 | n * e
}
;
var Ea = !0
  , Jt = "Invariant failed";
function We(n, e) {
    if (!n) {
        if (Ea)
            throw new Error(Jt);
        var t = typeof e == "function" ? e() : e
          , a = t ? "".concat(Jt, ": ").concat(t) : Jt;
        throw new Error(a)
    }
}
var Nt = 1e9, _a = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Tn, ye = !0, Qe = "[DecimalError] ", Tt = Qe + "Invalid argument: ", hn = Qe + "Exponent out of range: ", Lt = Math.floor, ht = Math.pow, va = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, He, Oe = 1e7, le = 7, Qn = 9007199254740991, zt = Lt(Qn / le), G = {};
G.absoluteValue = G.abs = function() {
    var n = new this.constructor(this);
    return n.s && (n.s = 1),
    n
}
;
G.comparedTo = G.cmp = function(n) {
    var e, t, a, i, r = this;
    if (n = new r.constructor(n),
    r.s !== n.s)
        return r.s || -n.s;
    if (r.e !== n.e)
        return r.e > n.e ^ r.s < 0 ? 1 : -1;
    for (a = r.d.length,
    i = n.d.length,
    e = 0,
    t = a < i ? a : i; e < t; ++e)
        if (r.d[e] !== n.d[e])
            return r.d[e] > n.d[e] ^ r.s < 0 ? 1 : -1;
    return a === i ? 0 : a > i ^ r.s < 0 ? 1 : -1
}
;
G.decimalPlaces = G.dp = function() {
    var n = this
      , e = n.d.length - 1
      , t = (e - n.e) * le;
    if (e = n.d[e],
    e)
        for (; e % 10 == 0; e /= 10)
            t--;
    return t < 0 ? 0 : t
}
;
G.dividedBy = G.div = function(n) {
    return lt(this, new this.constructor(n))
}
;
G.dividedToIntegerBy = G.idiv = function(n) {
    var e = this
      , t = e.constructor;
    return ce(lt(e, new t(n), 0, 1), t.precision)
}
;
G.equals = G.eq = function(n) {
    return !this.cmp(n)
}
;
G.exponent = function() {
    return he(this)
}
;
G.greaterThan = G.gt = function(n) {
    return this.cmp(n) > 0
}
;
G.greaterThanOrEqualTo = G.gte = function(n) {
    return this.cmp(n) >= 0
}
;
G.isInteger = G.isint = function() {
    return this.e > this.d.length - 2
}
;
G.isNegative = G.isneg = function() {
    return this.s < 0
}
;
G.isPositive = G.ispos = function() {
    return this.s > 0
}
;
G.isZero = function() {
    return this.s === 0
}
;
G.lessThan = G.lt = function(n) {
    return this.cmp(n) < 0
}
;
G.lessThanOrEqualTo = G.lte = function(n) {
    return this.cmp(n) < 1
}
;
G.logarithm = G.log = function(n) {
    var e, t = this, a = t.constructor, i = a.precision, r = i + 5;
    if (n === void 0)
        n = new a(10);
    else if (n = new a(n),
    n.s < 1 || n.eq(He))
        throw Error(Qe + "NaN");
    if (t.s < 1)
        throw Error(Qe + (t.s ? "NaN" : "-Infinity"));
    return t.eq(He) ? new a(0) : (ye = !1,
    e = lt(Ft(t, r), Ft(n, r), r),
    ye = !0,
    ce(e, i))
}
;
G.minus = G.sub = function(n) {
    var e = this;
    return n = new e.constructor(n),
    e.s == n.s ? ea(e, n) : In(e, (n.s = -n.s,
    n))
}
;
G.modulo = G.mod = function(n) {
    var e, t = this, a = t.constructor, i = a.precision;
    if (n = new a(n),
    !n.s)
        throw Error(Qe + "NaN");
    return t.s ? (ye = !1,
    e = lt(t, n, 0, 1).times(n),
    ye = !0,
    t.minus(e)) : ce(new a(t), i)
}
;
G.naturalExponential = G.exp = function() {
    return Jn(this)
}
;
G.naturalLogarithm = G.ln = function() {
    return Ft(this)
}
;
G.negated = G.neg = function() {
    var n = new this.constructor(this);
    return n.s = -n.s || 0,
    n
}
;
G.plus = G.add = function(n) {
    var e = this;
    return n = new e.constructor(n),
    e.s == n.s ? In(e, n) : ea(e, (n.s = -n.s,
    n))
}
;
G.precision = G.sd = function(n) {
    var e, t, a, i = this;
    if (n !== void 0 && n !== !!n && n !== 1 && n !== 0)
        throw Error(Tt + n);
    if (e = he(i) + 1,
    a = i.d.length - 1,
    t = a * le + 1,
    a = i.d[a],
    a) {
        for (; a % 10 == 0; a /= 10)
            t--;
        for (a = i.d[0]; a >= 10; a /= 10)
            t++
    }
    return n && e > t ? e : t
}
;
G.squareRoot = G.sqrt = function() {
    var n, e, t, a, i, r, s, c = this, o = c.constructor;
    if (c.s < 1) {
        if (!c.s)
            return new o(0);
        throw Error(Qe + "NaN")
    }
    for (n = he(c),
    ye = !1,
    i = Math.sqrt(+c),
    i == 0 || i == 1 / 0 ? (e = tt(c.d),
    (e.length + n) % 2 == 0 && (e += "0"),
    i = Math.sqrt(e),
    n = Lt((n + 1) / 2) - (n < 0 || n % 2),
    i == 1 / 0 ? e = "5e" + n : (e = i.toExponential(),
    e = e.slice(0, e.indexOf("e") + 1) + n),
    a = new o(e)) : a = new o(i.toString()),
    t = o.precision,
    i = s = t + 3; ; )
        if (r = a,
        a = r.plus(lt(c, r, s + 2)).times(.5),
        tt(r.d).slice(0, s) === (e = tt(a.d)).slice(0, s)) {
            if (e = e.slice(s - 3, s + 1),
            i == s && e == "4999") {
                if (ce(r, t + 1, 0),
                r.times(r).eq(c)) {
                    a = r;
                    break
                }
            } else if (e != "9999")
                break;
            s += 4
        }
    return ye = !0,
    ce(a, t)
}
;
G.times = G.mul = function(n) {
    var e, t, a, i, r, s, c, o, p, y = this, u = y.constructor, b = y.d, _ = (n = new u(n)).d;
    if (!y.s || !n.s)
        return new u(0);
    for (n.s *= y.s,
    t = y.e + n.e,
    o = b.length,
    p = _.length,
    o < p && (r = b,
    b = _,
    _ = r,
    s = o,
    o = p,
    p = s),
    r = [],
    s = o + p,
    a = s; a--; )
        r.push(0);
    for (a = p; --a >= 0; ) {
        for (e = 0,
        i = o + a; i > a; )
            c = r[i] + _[a] * b[i - a - 1] + e,
            r[i--] = c % Oe | 0,
            e = c / Oe | 0;
        r[i] = (r[i] + e) % Oe | 0
    }
    for (; !r[--s]; )
        r.pop();
    return e ? ++t : r.shift(),
    n.d = r,
    n.e = t,
    ye ? ce(n, u.precision) : n
}
;
G.toDecimalPlaces = G.todp = function(n, e) {
    var t = this
      , a = t.constructor;
    return t = new a(t),
    n === void 0 ? t : (nt(n, 0, Nt),
    e === void 0 ? e = a.rounding : nt(e, 0, 8),
    ce(t, n + he(t) + 1, e))
}
;
G.toExponential = function(n, e) {
    var t, a = this, i = a.constructor;
    return n === void 0 ? t = _t(a, !0) : (nt(n, 0, Nt),
    e === void 0 ? e = i.rounding : nt(e, 0, 8),
    a = ce(new i(a), n + 1, e),
    t = _t(a, !0, n + 1)),
    t
}
;
G.toFixed = function(n, e) {
    var t, a, i = this, r = i.constructor;
    return n === void 0 ? _t(i) : (nt(n, 0, Nt),
    e === void 0 ? e = r.rounding : nt(e, 0, 8),
    a = ce(new r(i), n + he(i) + 1, e),
    t = _t(a.abs(), !1, n + he(a) + 1),
    i.isneg() && !i.isZero() ? "-" + t : t)
}
;
G.toInteger = G.toint = function() {
    var n = this
      , e = n.constructor;
    return ce(new e(n), he(n) + 1, e.rounding)
}
;
G.toNumber = function() {
    return +this
}
;
G.toPower = G.pow = function(n) {
    var e, t, a, i, r, s, c = this, o = c.constructor, p = 12, y = +(n = new o(n));
    if (!n.s)
        return new o(He);
    if (c = new o(c),
    !c.s) {
        if (n.s < 1)
            throw Error(Qe + "Infinity");
        return c
    }
    if (c.eq(He))
        return c;
    if (a = o.precision,
    n.eq(He))
        return ce(c, a);
    if (e = n.e,
    t = n.d.length - 1,
    s = e >= t,
    r = c.s,
    s) {
        if ((t = y < 0 ? -y : y) <= Qn) {
            for (i = new o(He),
            e = Math.ceil(a / le + 4),
            ye = !1; t % 2 && (i = i.times(c),
            Un(i.d, e)),
            t = Lt(t / 2),
            t !== 0; )
                c = c.times(c),
                Un(c.d, e);
            return ye = !0,
            n.s < 0 ? new o(He).div(i) : ce(i, a)
        }
    } else if (r < 0)
        throw Error(Qe + "NaN");
    return r = r < 0 && n.d[Math.max(e, t)] & 1 ? -1 : 1,
    c.s = 1,
    ye = !1,
    i = n.times(Ft(c, a + p)),
    ye = !0,
    i = Jn(i),
    i.s = r,
    i
}
;
G.toPrecision = function(n, e) {
    var t, a, i = this, r = i.constructor;
    return n === void 0 ? (t = he(i),
    a = _t(i, t <= r.toExpNeg || t >= r.toExpPos)) : (nt(n, 1, Nt),
    e === void 0 ? e = r.rounding : nt(e, 0, 8),
    i = ce(new r(i), n, e),
    t = he(i),
    a = _t(i, n <= t || t <= r.toExpNeg, n)),
    a
}
;
G.toSignificantDigits = G.tosd = function(n, e) {
    var t = this
      , a = t.constructor;
    return n === void 0 ? (n = a.precision,
    e = a.rounding) : (nt(n, 1, Nt),
    e === void 0 ? e = a.rounding : nt(e, 0, 8)),
    ce(new a(t), n, e)
}
;
G.toString = G.valueOf = G.val = G.toJSON = G[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var n = this
      , e = he(n)
      , t = n.constructor;
    return _t(n, e <= t.toExpNeg || e >= t.toExpPos)
}
;
function In(n, e) {
    var t, a, i, r, s, c, o, p, y = n.constructor, u = y.precision;
    if (!n.s || !e.s)
        return e.s || (e = new y(n)),
        ye ? ce(e, u) : e;
    if (o = n.d,
    p = e.d,
    s = n.e,
    i = e.e,
    o = o.slice(),
    r = s - i,
    r) {
        for (r < 0 ? (a = o,
        r = -r,
        c = p.length) : (a = p,
        i = s,
        c = o.length),
        s = Math.ceil(u / le),
        c = s > c ? s + 1 : c + 1,
        r > c && (r = c,
        a.length = 1),
        a.reverse(); r--; )
            a.push(0);
        a.reverse()
    }
    for (c = o.length,
    r = p.length,
    c - r < 0 && (r = c,
    a = p,
    p = o,
    o = a),
    t = 0; r; )
        t = (o[--r] = o[r] + p[r] + t) / Oe | 0,
        o[r] %= Oe;
    for (t && (o.unshift(t),
    ++i),
    c = o.length; o[--c] == 0; )
        o.pop();
    return e.d = o,
    e.e = i,
    ye ? ce(e, u) : e
}
function nt(n, e, t) {
    if (n !== ~~n || n < e || n > t)
        throw Error(Tt + n)
}
function tt(n) {
    var e, t, a, i = n.length - 1, r = "", s = n[0];
    if (i > 0) {
        for (r += s,
        e = 1; e < i; e++)
            a = n[e] + "",
            t = le - a.length,
            t && (r += ft(t)),
            r += a;
        s = n[e],
        a = s + "",
        t = le - a.length,
        t && (r += ft(t))
    } else if (s === 0)
        return "0";
    for (; s % 10 === 0; )
        s /= 10;
    return r + s
}
var lt = function() {
    function n(a, i) {
        var r, s = 0, c = a.length;
        for (a = a.slice(); c--; )
            r = a[c] * i + s,
            a[c] = r % Oe | 0,
            s = r / Oe | 0;
        return s && a.unshift(s),
        a
    }
    function e(a, i, r, s) {
        var c, o;
        if (r != s)
            o = r > s ? 1 : -1;
        else
            for (c = o = 0; c < r; c++)
                if (a[c] != i[c]) {
                    o = a[c] > i[c] ? 1 : -1;
                    break
                }
        return o
    }
    function t(a, i, r) {
        for (var s = 0; r--; )
            a[r] -= s,
            s = a[r] < i[r] ? 1 : 0,
            a[r] = s * Oe + a[r] - i[r];
        for (; !a[0] && a.length > 1; )
            a.shift()
    }
    return function(a, i, r, s) {
        var c, o, p, y, u, b, _, C, M, E, v, x, B, F, Y, oe, te, De, Ve = a.constructor, Ne = a.s == i.s ? 1 : -1, ne = a.d, j = i.d;
        if (!a.s)
            return new Ve(a);
        if (!i.s)
            throw Error(Qe + "Division by zero");
        for (o = a.e - i.e,
        te = j.length,
        Y = ne.length,
        _ = new Ve(Ne),
        C = _.d = [],
        p = 0; j[p] == (ne[p] || 0); )
            ++p;
        if (j[p] > (ne[p] || 0) && --o,
        r == null ? x = r = Ve.precision : s ? x = r + (he(a) - he(i)) + 1 : x = r,
        x < 0)
            return new Ve(0);
        if (x = x / le + 2 | 0,
        p = 0,
        te == 1)
            for (y = 0,
            j = j[0],
            x++; (p < Y || y) && x--; p++)
                B = y * Oe + (ne[p] || 0),
                C[p] = B / j | 0,
                y = B % j | 0;
        else {
            for (y = Oe / (j[0] + 1) | 0,
            y > 1 && (j = n(j, y),
            ne = n(ne, y),
            te = j.length,
            Y = ne.length),
            F = te,
            M = ne.slice(0, te),
            E = M.length; E < te; )
                M[E++] = 0;
            De = j.slice(),
            De.unshift(0),
            oe = j[0],
            j[1] >= Oe / 2 && ++oe;
            do
                y = 0,
                c = e(j, M, te, E),
                c < 0 ? (v = M[0],
                te != E && (v = v * Oe + (M[1] || 0)),
                y = v / oe | 0,
                y > 1 ? (y >= Oe && (y = Oe - 1),
                u = n(j, y),
                b = u.length,
                E = M.length,
                c = e(u, M, b, E),
                c == 1 && (y--,
                t(u, te < b ? De : j, b))) : (y == 0 && (c = y = 1),
                u = j.slice()),
                b = u.length,
                b < E && u.unshift(0),
                t(M, u, E),
                c == -1 && (E = M.length,
                c = e(j, M, te, E),
                c < 1 && (y++,
                t(M, te < E ? De : j, E))),
                E = M.length) : c === 0 && (y++,
                M = [0]),
                C[p++] = y,
                c && M[0] ? M[E++] = ne[F] || 0 : (M = [ne[F]],
                E = 1);
            while ((F++ < Y || M[0] !== void 0) && x--)
        }
        return C[0] || C.shift(),
        _.e = o,
        ce(_, s ? r + he(_) + 1 : r)
    }
}();
function Jn(n, e) {
    var t, a, i, r, s, c, o = 0, p = 0, y = n.constructor, u = y.precision;
    if (he(n) > 16)
        throw Error(hn + he(n));
    if (!n.s)
        return new y(He);
    for (e == null ? (ye = !1,
    c = u) : c = e,
    s = new y(.03125); n.abs().gte(.1); )
        n = n.times(s),
        p += 5;
    for (a = Math.log(ht(2, p)) / Math.LN10 * 2 + 5 | 0,
    c += a,
    t = i = r = new y(He),
    y.precision = c; ; ) {
        if (i = ce(i.times(n), c),
        t = t.times(++o),
        s = r.plus(lt(i, t, c)),
        tt(s.d).slice(0, c) === tt(r.d).slice(0, c)) {
            for (; p--; )
                r = ce(r.times(r), c);
            return y.precision = u,
            e == null ? (ye = !0,
            ce(r, u)) : r
        }
        r = s
    }
}
function he(n) {
    for (var e = n.e * le, t = n.d[0]; t >= 10; t /= 10)
        e++;
    return e
}
function en(n, e, t) {
    if (e > n.LN10.sd())
        throw ye = !0,
        t && (n.precision = t),
        Error(Qe + "LN10 precision limit exceeded");
    return ce(new n(n.LN10), e)
}
function ft(n) {
    for (var e = ""; n--; )
        e += "0";
    return e
}
function Ft(n, e) {
    var t, a, i, r, s, c, o, p, y, u = 1, b = 10, _ = n, C = _.d, M = _.constructor, E = M.precision;
    if (_.s < 1)
        throw Error(Qe + (_.s ? "NaN" : "-Infinity"));
    if (_.eq(He))
        return new M(0);
    if (e == null ? (ye = !1,
    p = E) : p = e,
    _.eq(10))
        return e == null && (ye = !0),
        en(M, p);
    if (p += b,
    M.precision = p,
    t = tt(C),
    a = t.charAt(0),
    r = he(_),
    Math.abs(r) < 15e14) {
        for (; a < 7 && a != 1 || a == 1 && t.charAt(1) > 3; )
            _ = _.times(n),
            t = tt(_.d),
            a = t.charAt(0),
            u++;
        r = he(_),
        a > 1 ? (_ = new M("0." + t),
        r++) : _ = new M(a + "." + t.slice(1))
    } else
        return o = en(M, p + 2, E).times(r + ""),
        _ = Ft(new M(a + "." + t.slice(1)), p - b).plus(o),
        M.precision = E,
        e == null ? (ye = !0,
        ce(_, E)) : _;
    for (c = s = _ = lt(_.minus(He), _.plus(He), p),
    y = ce(_.times(_), p),
    i = 3; ; ) {
        if (s = ce(s.times(y), p),
        o = c.plus(lt(s, new M(i), p)),
        tt(o.d).slice(0, p) === tt(c.d).slice(0, p))
            return c = c.times(2),
            r !== 0 && (c = c.plus(en(M, p + 2, E).times(r + ""))),
            c = lt(c, new M(u), p),
            M.precision = E,
            e == null ? (ye = !0,
            ce(c, E)) : c;
        c = o,
        i += 2
    }
}
function Fn(n, e) {
    var t, a, i;
    for ((t = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
    (a = e.search(/e/i)) > 0 ? (t < 0 && (t = a),
    t += +e.slice(a + 1),
    e = e.substring(0, a)) : t < 0 && (t = e.length),
    a = 0; e.charCodeAt(a) === 48; )
        ++a;
    for (i = e.length; e.charCodeAt(i - 1) === 48; )
        --i;
    if (e = e.slice(a, i),
    e) {
        if (i -= a,
        t = t - a - 1,
        n.e = Lt(t / le),
        n.d = [],
        a = (t + 1) % le,
        t < 0 && (a += le),
        a < i) {
            for (a && n.d.push(+e.slice(0, a)),
            i -= le; a < i; )
                n.d.push(+e.slice(a, a += le));
            e = e.slice(a),
            a = le - e.length
        } else
            a -= i;
        for (; a--; )
            e += "0";
        if (n.d.push(+e),
        ye && (n.e > zt || n.e < -zt))
            throw Error(hn + t)
    } else
        n.s = 0,
        n.e = 0,
        n.d = [0];
    return n
}
function ce(n, e, t) {
    var a, i, r, s, c, o, p, y, u = n.d;
    for (s = 1,
    r = u[0]; r >= 10; r /= 10)
        s++;
    if (a = e - s,
    a < 0)
        a += le,
        i = e,
        p = u[y = 0];
    else {
        if (y = Math.ceil((a + 1) / le),
        r = u.length,
        y >= r)
            return n;
        for (p = r = u[y],
        s = 1; r >= 10; r /= 10)
            s++;
        a %= le,
        i = a - le + s
    }
    if (t !== void 0 && (r = ht(10, s - i - 1),
    c = p / r % 10 | 0,
    o = e < 0 || u[y + 1] !== void 0 || p % r,
    o = t < 4 ? (c || o) && (t == 0 || t == (n.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (t == 4 || o || t == 6 && (a > 0 ? i > 0 ? p / ht(10, s - i) : 0 : u[y - 1]) % 10 & 1 || t == (n.s < 0 ? 8 : 7))),
    e < 1 || !u[0])
        return o ? (r = he(n),
        u.length = 1,
        e = e - r - 1,
        u[0] = ht(10, (le - e % le) % le),
        n.e = Lt(-e / le) || 0) : (u.length = 1,
        u[0] = n.e = n.s = 0),
        n;
    if (a == 0 ? (u.length = y,
    r = 1,
    y--) : (u.length = y + 1,
    r = ht(10, le - a),
    u[y] = i > 0 ? (p / ht(10, s - i) % ht(10, i) | 0) * r : 0),
    o)
        for (; ; )
            if (y == 0) {
                (u[0] += r) == Oe && (u[0] = 1,
                ++n.e);
                break
            } else {
                if (u[y] += r,
                u[y] != Oe)
                    break;
                u[y--] = 0,
                r = 1
            }
    for (a = u.length; u[--a] === 0; )
        u.pop();
    if (ye && (n.e > zt || n.e < -zt))
        throw Error(hn + he(n));
    return n
}
function ea(n, e) {
    var t, a, i, r, s, c, o, p, y, u, b = n.constructor, _ = b.precision;
    if (!n.s || !e.s)
        return e.s ? e.s = -e.s : e = new b(n),
        ye ? ce(e, _) : e;
    if (o = n.d,
    u = e.d,
    a = e.e,
    p = n.e,
    o = o.slice(),
    s = p - a,
    s) {
        for (y = s < 0,
        y ? (t = o,
        s = -s,
        c = u.length) : (t = u,
        a = p,
        c = o.length),
        i = Math.max(Math.ceil(_ / le), c) + 2,
        s > i && (s = i,
        t.length = 1),
        t.reverse(),
        i = s; i--; )
            t.push(0);
        t.reverse()
    } else {
        for (i = o.length,
        c = u.length,
        y = i < c,
        y && (c = i),
        i = 0; i < c; i++)
            if (o[i] != u[i]) {
                y = o[i] < u[i];
                break
            }
        s = 0
    }
    for (y && (t = o,
    o = u,
    u = t,
    e.s = -e.s),
    c = o.length,
    i = u.length - c; i > 0; --i)
        o[c++] = 0;
    for (i = u.length; i > s; ) {
        if (o[--i] < u[i]) {
            for (r = i; r && o[--r] === 0; )
                o[r] = Oe - 1;
            --o[r],
            o[i] += Oe
        }
        o[i] -= u[i]
    }
    for (; o[--c] === 0; )
        o.pop();
    for (; o[0] === 0; o.shift())
        --a;
    return o[0] ? (e.d = o,
    e.e = a,
    ye ? ce(e, _) : e) : new b(0)
}
function _t(n, e, t) {
    var a, i = he(n), r = tt(n.d), s = r.length;
    return e ? (t && (a = t - s) > 0 ? r = r.charAt(0) + "." + r.slice(1) + ft(a) : s > 1 && (r = r.charAt(0) + "." + r.slice(1)),
    r = r + (i < 0 ? "e" : "e+") + i) : i < 0 ? (r = "0." + ft(-i - 1) + r,
    t && (a = t - s) > 0 && (r += ft(a))) : i >= s ? (r += ft(i + 1 - s),
    t && (a = t - i - 1) > 0 && (r = r + "." + ft(a))) : ((a = i + 1) < s && (r = r.slice(0, a) + "." + r.slice(a)),
    t && (a = t - s) > 0 && (i + 1 === s && (r += "."),
    r += ft(a))),
    n.s < 0 ? "-" + r : r
}
function Un(n, e) {
    if (n.length > e)
        return n.length = e,
        !0
}
function ta(n) {
    var e, t, a;
    function i(r) {
        var s = this;
        if (!(s instanceof i))
            return new i(r);
        if (s.constructor = i,
        r instanceof i) {
            s.s = r.s,
            s.e = r.e,
            s.d = (r = r.d) ? r.slice() : r;
            return
        }
        if (typeof r == "number") {
            if (r * 0 !== 0)
                throw Error(Tt + r);
            if (r > 0)
                s.s = 1;
            else if (r < 0)
                r = -r,
                s.s = -1;
            else {
                s.s = 0,
                s.e = 0,
                s.d = [0];
                return
            }
            if (r === ~~r && r < 1e7) {
                s.e = 0,
                s.d = [r];
                return
            }
            return Fn(s, r.toString())
        } else if (typeof r != "string")
            throw Error(Tt + r);
        if (r.charCodeAt(0) === 45 ? (r = r.slice(1),
        s.s = -1) : s.s = 1,
        va.test(r))
            Fn(s, r);
        else
            throw Error(Tt + r)
    }
    if (i.prototype = G,
    i.ROUND_UP = 0,
    i.ROUND_DOWN = 1,
    i.ROUND_CEIL = 2,
    i.ROUND_FLOOR = 3,
    i.ROUND_HALF_UP = 4,
    i.ROUND_HALF_DOWN = 5,
    i.ROUND_HALF_EVEN = 6,
    i.ROUND_HALF_CEIL = 7,
    i.ROUND_HALF_FLOOR = 8,
    i.clone = ta,
    i.config = i.set = Da,
    n === void 0 && (n = {}),
    n)
        for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
        e = 0; e < a.length; )
            n.hasOwnProperty(t = a[e++]) || (n[t] = this[t]);
    return i.config(n),
    i
}
function Da(n) {
    if (!n || typeof n != "object")
        throw Error(Qe + "Object expected");
    var e, t, a, i = ["precision", 1, Nt, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (e = 0; e < i.length; e += 3)
        if ((a = n[t = i[e]]) !== void 0)
            if (Lt(a) === a && a >= i[e + 1] && a <= i[e + 2])
                this[t] = a;
            else
                throw Error(Tt + t + ": " + a);
    if ((a = n[t = "LN10"]) !== void 0)
        if (a == Math.LN10)
            this[t] = new this(a);
        else
            throw Error(Tt + t + ": " + a);
    return this
}
var Tn = ta(_a);
He = new Tn(1);
const Ca = Tn;
var xa = 20
  , Ma = 1
  , Zt = 1e6
  , qn = 1e6
  , Pa = -7
  , Oa = 21
  , En = "[big.js] "
  , qt = En + "Invalid "
  , _n = qt + "decimal places"
  , Xn = qt + "rounding mode"
  , na = En + "Division by zero"
  , de = {}
  , vt = void 0
  , Na = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function aa() {
    function n(e) {
        var t = this;
        if (!(t instanceof n))
            return e === vt ? aa() : new n(e);
        e instanceof n ? (t.s = e.s,
        t.e = e.e,
        t.c = e.c.slice()) : La(t, e),
        t.constructor = n
    }
    return n.prototype = de,
    n.DP = xa,
    n.RM = Ma,
    n.NE = Pa,
    n.PE = Oa,
    n.version = "5.2.2",
    n
}
function La(n, e) {
    var t, a, i;
    if (e === 0 && 1 / e < 0)
        e = "-0";
    else if (!Na.test(e += ""))
        throw Error(qt + "number");
    for (n.s = e.charAt(0) == "-" ? (e = e.slice(1),
    -1) : 1,
    (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
    (a = e.search(/e/i)) > 0 ? (t < 0 && (t = a),
    t += +e.slice(a + 1),
    e = e.substring(0, a)) : t < 0 && (t = e.length),
    i = e.length,
    a = 0; a < i && e.charAt(a) == "0"; )
        ++a;
    if (a == i)
        n.c = [n.e = 0];
    else {
        for (; i > 0 && e.charAt(--i) == "0"; )
            ;
        for (n.e = t - a - 1,
        n.c = [],
        t = 0; a <= i; )
            n.c[t++] = +e.charAt(a++)
    }
    return n
}
function Kt(n, e, t, a) {
    var i = n.c
      , r = n.e + e + 1;
    if (r < i.length) {
        if (t === 1)
            a = i[r] >= 5;
        else if (t === 2)
            a = i[r] > 5 || i[r] == 5 && (a || r < 0 || i[r + 1] !== vt || i[r - 1] & 1);
        else if (t === 3)
            a = a || !!i[0];
        else if (a = !1,
        t !== 0)
            throw Error(Xn);
        if (r < 1)
            i.length = 1,
            a ? (n.e = -e,
            i[0] = 1) : i[0] = n.e = 0;
        else {
            if (i.length = r--,
            a)
                for (; ++i[r] > 9; )
                    i[r] = 0,
                    r-- || (++n.e,
                    i.unshift(1));
            for (r = i.length; !i[--r]; )
                i.pop()
        }
    } else if (t < 0 || t > 3 || t !== ~~t)
        throw Error(Xn);
    return n
}
function Xt(n, e, t, a) {
    var i, r, s = n.constructor, c = !n.c[0];
    if (t !== vt) {
        if (t !== ~~t || t < (e == 3) || t > Zt)
            throw Error(e == 3 ? qt + "precision" : _n);
        for (n = new s(n),
        t = a - n.e,
        n.c.length > ++a && Kt(n, t, s.RM),
        e == 2 && (a = n.e + t + 1); n.c.length < a; )
            n.c.push(0)
    }
    if (i = n.e,
    r = n.c.join(""),
    t = r.length,
    e != 2 && (e == 1 || e == 3 && a <= i || i <= s.NE || i >= s.PE))
        r = r.charAt(0) + (t > 1 ? "." + r.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
    else if (i < 0) {
        for (; ++i; )
            r = "0" + r;
        r = "0." + r
    } else if (i > 0)
        if (++i > t)
            for (i -= t; i--; )
                r += "0";
        else
            i < t && (r = r.slice(0, i) + "." + r.slice(i));
    else
        t > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return n.s < 0 && (!c || e == 4) ? "-" + r : r
}
de.abs = function() {
    var n = new this.constructor(this);
    return n.s = 1,
    n
}
;
de.cmp = function(n) {
    var e, t = this, a = t.c, i = (n = new t.constructor(n)).c, r = t.s, s = n.s, c = t.e, o = n.e;
    if (!a[0] || !i[0])
        return a[0] ? r : i[0] ? -s : 0;
    if (r != s)
        return r;
    if (e = r < 0,
    c != o)
        return c > o ^ e ? 1 : -1;
    for (s = (c = a.length) < (o = i.length) ? c : o,
    r = -1; ++r < s; )
        if (a[r] != i[r])
            return a[r] > i[r] ^ e ? 1 : -1;
    return c == o ? 0 : c > o ^ e ? 1 : -1
}
;
de.div = function(n) {
    var e = this
      , t = e.constructor
      , a = e.c
      , i = (n = new t(n)).c
      , r = e.s == n.s ? 1 : -1
      , s = t.DP;
    if (s !== ~~s || s < 0 || s > Zt)
        throw Error(_n);
    if (!i[0])
        throw Error(na);
    if (!a[0])
        return new t(r * 0);
    var c, o, p, y, u, b = i.slice(), _ = c = i.length, C = a.length, M = a.slice(0, c), E = M.length, v = n, x = v.c = [], B = 0, F = s + (v.e = e.e - n.e) + 1;
    for (v.s = r,
    r = F < 0 ? 0 : F,
    b.unshift(0); E++ < c; )
        M.push(0);
    do {
        for (p = 0; p < 10; p++) {
            if (c != (E = M.length))
                y = c > E ? 1 : -1;
            else
                for (u = -1,
                y = 0; ++u < c; )
                    if (i[u] != M[u]) {
                        y = i[u] > M[u] ? 1 : -1;
                        break
                    }
            if (y < 0) {
                for (o = E == c ? i : b; E; ) {
                    if (M[--E] < o[E]) {
                        for (u = E; u && !M[--u]; )
                            M[u] = 9;
                        --M[u],
                        M[E] += 10
                    }
                    M[E] -= o[E]
                }
                for (; !M[0]; )
                    M.shift()
            } else
                break
        }
        x[B++] = y ? p : ++p,
        M[0] && y ? M[E] = a[_] || 0 : M = [a[_]]
    } while ((_++ < C || M[0] !== vt) && r--);
    return !x[0] && B != 1 && (x.shift(),
    v.e--),
    B > F && Kt(v, s, t.RM, M[0] !== vt),
    v
}
;
de.eq = function(n) {
    return !this.cmp(n)
}
;
de.gt = function(n) {
    return this.cmp(n) > 0
}
;
de.gte = function(n) {
    return this.cmp(n) > -1
}
;
de.lt = function(n) {
    return this.cmp(n) < 0
}
;
de.lte = function(n) {
    return this.cmp(n) < 1
}
;
de.minus = de.sub = function(n) {
    var e, t, a, i, r = this, s = r.constructor, c = r.s, o = (n = new s(n)).s;
    if (c != o)
        return n.s = -o,
        r.plus(n);
    var p = r.c.slice()
      , y = r.e
      , u = n.c
      , b = n.e;
    if (!p[0] || !u[0])
        return u[0] ? (n.s = -o,
        n) : new s(p[0] ? r : 0);
    if (c = y - b) {
        for ((i = c < 0) ? (c = -c,
        a = p) : (b = y,
        a = u),
        a.reverse(),
        o = c; o--; )
            a.push(0);
        a.reverse()
    } else
        for (t = ((i = p.length < u.length) ? p : u).length,
        c = o = 0; o < t; o++)
            if (p[o] != u[o]) {
                i = p[o] < u[o];
                break
            }
    if (i && (a = p,
    p = u,
    u = a,
    n.s = -n.s),
    (o = (t = u.length) - (e = p.length)) > 0)
        for (; o--; )
            p[e++] = 0;
    for (o = e; t > c; ) {
        if (p[--t] < u[t]) {
            for (e = t; e && !p[--e]; )
                p[e] = 9;
            --p[e],
            p[t] += 10
        }
        p[t] -= u[t]
    }
    for (; p[--o] === 0; )
        p.pop();
    for (; p[0] === 0; )
        p.shift(),
        --b;
    return p[0] || (n.s = 1,
    p = [b = 0]),
    n.c = p,
    n.e = b,
    n
}
;
de.mod = function(n) {
    var e, t = this, a = t.constructor, i = t.s, r = (n = new a(n)).s;
    if (!n.c[0])
        throw Error(na);
    return t.s = n.s = 1,
    e = n.cmp(t) == 1,
    t.s = i,
    n.s = r,
    e ? new a(t) : (i = a.DP,
    r = a.RM,
    a.DP = a.RM = 0,
    t = t.div(n),
    a.DP = i,
    a.RM = r,
    this.minus(t.times(n)))
}
;
de.plus = de.add = function(n) {
    var e, t = this, a = t.constructor, i = t.s, r = (n = new a(n)).s;
    if (i != r)
        return n.s = -r,
        t.minus(n);
    var s = t.e
      , c = t.c
      , o = n.e
      , p = n.c;
    if (!c[0] || !p[0])
        return p[0] ? n : new a(c[0] ? t : i * 0);
    if (c = c.slice(),
    i = s - o) {
        for (i > 0 ? (o = s,
        e = p) : (i = -i,
        e = c),
        e.reverse(); i--; )
            e.push(0);
        e.reverse()
    }
    for (c.length - p.length < 0 && (e = p,
    p = c,
    c = e),
    i = p.length,
    r = 0; i; c[i] %= 10)
        r = (c[--i] = c[i] + p[i] + r) / 10 | 0;
    for (r && (c.unshift(r),
    ++o),
    i = c.length; c[--i] === 0; )
        c.pop();
    return n.c = c,
    n.e = o,
    n
}
;
de.pow = function(n) {
    var e = this
      , t = new e.constructor(1)
      , a = t
      , i = n < 0;
    if (n !== ~~n || n < -qn || n > qn)
        throw Error(qt + "exponent");
    for (i && (n = -n); n & 1 && (a = a.times(e)),
    n >>= 1,
    !!n; )
        e = e.times(e);
    return i ? t.div(a) : a
}
;
de.round = function(n, e) {
    var t = this.constructor;
    if (n === vt)
        n = 0;
    else if (n !== ~~n || n < -Zt || n > Zt)
        throw Error(_n);
    return Kt(new t(this), n, e === vt ? t.RM : e)
}
;
de.sqrt = function() {
    var n, e, t, a = this, i = a.constructor, r = a.s, s = a.e, c = new i(.5);
    if (!a.c[0])
        return new i(a);
    if (r < 0)
        throw Error(En + "No square root");
    r = Math.sqrt(a + ""),
    r === 0 || r === 1 / 0 ? (e = a.c.join(""),
    e.length + s & 1 || (e += "0"),
    r = Math.sqrt(e),
    s = ((s + 1) / 2 | 0) - (s < 0 || s & 1),
    n = new i((r == 1 / 0 ? "1e" : (r = r.toExponential()).slice(0, r.indexOf("e") + 1)) + s)) : n = new i(r),
    s = n.e + (i.DP += 4);
    do
        t = n,
        n = c.times(t.plus(a.div(t)));
    while (t.c.slice(0, s).join("") !== n.c.slice(0, s).join(""));
    return Kt(n, i.DP -= 4, i.RM)
}
;
de.times = de.mul = function(n) {
    var e, t = this, a = t.constructor, i = t.c, r = (n = new a(n)).c, s = i.length, c = r.length, o = t.e, p = n.e;
    if (n.s = t.s == n.s ? 1 : -1,
    !i[0] || !r[0])
        return new a(n.s * 0);
    for (n.e = o + p,
    s < c && (e = i,
    i = r,
    r = e,
    p = s,
    s = c,
    c = p),
    e = new Array(p = s + c); p--; )
        e[p] = 0;
    for (o = c; o--; ) {
        for (c = 0,
        p = s + o; p > o; )
            c = e[p] + r[o] * i[p - o - 1] + c,
            e[p--] = c % 10,
            c = c / 10 | 0;
        e[p] = (e[p] + c) % 10
    }
    for (c ? ++n.e : e.shift(),
    o = e.length; !e[--o]; )
        e.pop();
    return n.c = e,
    n
}
;
de.toExponential = function(n) {
    return Xt(this, 1, n, n)
}
;
de.toFixed = function(n) {
    return Xt(this, 2, n, this.e + n)
}
;
de.toPrecision = function(n) {
    return Xt(this, 3, n, n - 1)
}
;
de.toString = function() {
    return Xt(this)
}
;
de.valueOf = de.toJSON = function() {
    return Xt(this, 4)
}
;
aa();
var ia = {
    exports: {}
};
(function(n) {
    function e(t) {
        return t.prototype.toFormat = function(i, r, s) {
            if (!this.e && this.e !== 0)
                return this.toString();
            var c, o, p, y, u, b, _, C, M, E, v, x, B, F, Y, oe = this.format || {}, te = this.constructor.format || {};
            if (i != u ? typeof i == "object" ? (s = i,
            i = u) : r != u ? typeof r == "object" ? (s = r,
            r = u) : typeof s != "object" && (s = {}) : s = {} : s = {},
            c = this.toFixed(i, r).split("."),
            C = c[0],
            M = c[1],
            _ = this.s < 0 ? C.slice(1) : C,
            b = _.length,
            E = s.decimalSeparator,
            E == u && (E = oe.decimalSeparator,
            E == u && (E = te.decimalSeparator,
            E == u && (E = "."))),
            v = s.groupSeparator,
            v == u && (v = oe.groupSeparator,
            v == u && (v = te.groupSeparator)),
            v && (x = s.groupSize,
            x == u && (x = oe.groupSize,
            x == u && (x = te.groupSize,
            x == u && (x = 0))),
            B = s.secondaryGroupSize,
            B == u && (B = oe.secondaryGroupSize,
            B == u && (B = te.secondaryGroupSize,
            B == u && (B = 0))),
            B ? (o = +B,
            p = +x,
            b -= p) : (o = +x,
            p = +B),
            o > 0 && b > 0)) {
                for (y = b % o || o,
                C = _.substr(0, y); y < b; y += o)
                    C += v + _.substr(y, o);
                p > 0 && (C += v + _.slice(y)),
                this.s < 0 && (C = "-" + C)
            }
            return M ? (F = s.fractionGroupSeparator,
            F == u && (F = oe.fractionGroupSeparator,
            F == u && (F = te.fractionGroupSeparator)),
            F && (Y = s.fractionGroupSize,
            Y == u && (Y = oe.fractionGroupSize,
            Y == u && (Y = te.fractionGroupSize,
            Y == u && (Y = 0))),
            Y = +Y,
            Y && (M = M.replace(new RegExp("\\d{" + Y + "}\\B","g"), "$&" + F))),
            C + E + M) : C
        }
        ,
        t.format = {
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: "",
            fractionGroupSize: 0
        },
        t
    }
    n.exports && (n.exports = e)
}
)(ia);
var Sa = ia.exports;
const Ba = pa(Sa);
function Ra(n, e) {
    if (typeof n != "object" || !n)
        return n;
    var t = n[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(n, e || "default");
        if (typeof a != "object")
            return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(n)
}
function Fa(n) {
    var e = Ra(n, "string");
    return typeof e == "symbol" ? e : String(e)
}
function Vn(n, e) {
    for (var t = 0; t < e.length; t++) {
        var a = e[t];
        a.enumerable = a.enumerable || !1,
        a.configurable = !0,
        "value"in a && (a.writable = !0),
        Object.defineProperty(n, Fa(a.key), a)
    }
}
function Ua(n, e, t) {
    return e && Vn(n.prototype, e),
    t && Vn(n, t),
    Object.defineProperty(n, "prototype", {
        writable: !1
    }),
    n
}
function Ut() {
    return Ut = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a])
        }
        return n
    }
    ,
    Ut.apply(this, arguments)
}
function qa(n, e) {
    n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    dn(n, e)
}
function dn(n, e) {
    return dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
        return a.__proto__ = i,
        a
    }
    ,
    dn(n, e)
}
var q;
(function(n) {
    n[n.MAINNET = 1] = "MAINNET",
    n[n.GOERLI = 5] = "GOERLI",
    n[n.SEPOLIA = 11155111] = "SEPOLIA",
    n[n.OPTIMISM = 10] = "OPTIMISM",
    n[n.OPTIMISM_GOERLI = 420] = "OPTIMISM_GOERLI",
    n[n.OPTIMISM_SEPOLIA = 11155420] = "OPTIMISM_SEPOLIA",
    n[n.ARBITRUM_ONE = 42161] = "ARBITRUM_ONE",
    n[n.ARBITRUM_GOERLI = 421613] = "ARBITRUM_GOERLI",
    n[n.ARBITRUM_SEPOLIA = 421614] = "ARBITRUM_SEPOLIA",
    n[n.POLYGON = 137] = "POLYGON",
    n[n.POLYGON_MUMBAI = 80001] = "POLYGON_MUMBAI",
    n[n.CELO = 42220] = "CELO",
    n[n.CELO_ALFAJORES = 44787] = "CELO_ALFAJORES",
    n[n.GNOSIS = 100] = "GNOSIS",
    n[n.MOONBEAM = 1284] = "MOONBEAM",
    n[n.BNB = 56] = "BNB",
    n[n.AVALANCHE = 43114] = "AVALANCHE",
    n[n.BASE_GOERLI = 84531] = "BASE_GOERLI",
    n[n.BASE = 8453] = "BASE",
    n[n.ZORA = 7777777] = "ZORA",
    n[n.ZORA_SEPOLIA = 999999999] = "ZORA_SEPOLIA",
    n[n.ROOTSTOCK = 30] = "ROOTSTOCK",
    n[n.BLAST = 81457] = "BLAST",
    n[n.ZKSYNC = 324] = "ZKSYNC"
}
)(q || (q = {}));
q.MAINNET,
q.OPTIMISM,
q.OPTIMISM_GOERLI,
q.OPTIMISM_SEPOLIA,
q.ARBITRUM_ONE,
q.ARBITRUM_GOERLI,
q.ARBITRUM_SEPOLIA,
q.POLYGON,
q.POLYGON_MUMBAI,
q.GOERLI,
q.SEPOLIA,
q.CELO_ALFAJORES,
q.CELO,
q.BNB,
q.AVALANCHE,
q.BASE,
q.BASE_GOERLI,
q.ZORA,
q.ZORA_SEPOLIA,
q.ROOTSTOCK,
q.BLAST,
q.ZKSYNC;
var Gn;
(function(n) {
    n.ETHER = "ETH",
    n.MATIC = "MATIC",
    n.CELO = "CELO",
    n.GNOSIS = "XDAI",
    n.MOONBEAM = "GLMR",
    n.BNB = "BNB",
    n.AVAX = "AVAX",
    n.ROOTSTOCK = "RBTC"
}
)(Gn || (Gn = {}));
var Ye, Ie, ue, tn, nn, an, rn, sn, Xa = [q.MAINNET, q.GOERLI, q.SEPOLIA];
function Va(n, e) {
    return e === void 0 && (e = []),
    Xa.concat(e).reduce(function(t, a) {
        return t[a] = n,
        t
    }, {})
}
q.OPTIMISM,
q.ARBITRUM_ONE,
q.POLYGON,
q.POLYGON_MUMBAI,
q.SEPOLIA;
Ye = {},
Ye[q.MAINNET] = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
Ye[q.GOERLI] = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
Ye[q.SEPOLIA] = "0xB7f907f7A9eBC822a80BD25E224be42Ce0A698A0",
Ye[q.OPTIMISM] = "0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf",
Ye[q.ARBITRUM_ONE] = "0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9",
Ye[q.AVALANCHE] = "0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C",
Ye[q.BASE] = "0x8909dc15e40173ff4699343b6eb8132c65e18ec6",
Ye[q.BNB] = "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",
Ye[q.POLYGON] = "0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C",
Ye[q.CELO] = "0x79a530c8e2fA8748B7B40dd3629C0520c2cCf03f",
Ye[q.BLAST] = "0x5C346464d33F90bABaf70dB6388507CC889C1070";
Ie = {},
Ie[q.MAINNET] = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
Ie[q.GOERLI] = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
Ie[q.ARBITRUM_ONE] = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
Ie[q.OPTIMISM] = "0x4a7b5da61326a6379179b40d00f57e5bbdc962c2",
Ie[q.BASE] = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
Ie[q.AVALANCHE] = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
Ie[q.BNB] = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
Ie[q.POLYGON] = "0xedf6066a2b290c185783862c7f4776a2c8077ad1",
Ie[q.BLAST] = "0xBB66Eb1c5e875933D44DAe661dbD80e5D9B03035";
var Vt = {
    v3CoreFactoryAddress: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
    multicallAddress: "0x1F98415757620B543A52E61c46B32eB19261F984",
    quoterAddress: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
    v3MigratorAddress: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
    nonfungiblePositionManagerAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"
}
  , Ga = Ut({}, Vt, {
    mixedRouteQuoterV1Address: "0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E"
})
  , Ya = Ut({}, Vt, {
    mixedRouteQuoterV1Address: "0xBa60b6e6fF25488308789E6e0A65D838be34194e"
})
  , ka = Vt
  , Ha = Ut({}, Vt, {
    multicallAddress: "0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB",
    tickLensAddress: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573"
})
  , Yn = Vt
  , kn = {
    v3CoreFactoryAddress: "0xAfE208a311B21f13EF87E33A90049fC17A7acDEc",
    multicallAddress: "0x633987602DE5C4F337e3DbF265303A1080324204",
    quoterAddress: "0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8",
    v3MigratorAddress: "0x3cFd4d48EDfDCC53D3f173F596f621064614C582",
    nonfungiblePositionManagerAddress: "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
    tickLensAddress: "0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D"
}
  , Wa = {
    v3CoreFactoryAddress: "0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7",
    multicallAddress: "0x963Df249eD09c358A4819E39d9Cd5736c3087184",
    quoterAddress: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
    v3MigratorAddress: "0x32681814957e0C13117ddc0c2aba232b5c9e760f",
    nonfungiblePositionManagerAddress: "0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613",
    tickLensAddress: "0xD9270014D396281579760619CCf4c3af0501A47C",
    swapRouter02Address: "0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2"
}
  , za = {
    v3CoreFactoryAddress: "0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10",
    multicallAddress: "0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd",
    quoterAddress: "0x9569CbA925c8ca2248772A9A4976A516743A246F",
    v3MigratorAddress: "0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8",
    nonfungiblePositionManagerAddress: "0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6",
    tickLensAddress: "0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e"
}
  , Za = {
    v3CoreFactoryAddress: "0x8CE191193D15ea94e11d327b4c7ad8bbE520f6aF",
    multicallAddress: "0x80e4e06841bb76AA9735E0448cB8d003C0EF009a",
    quoterAddress: "0x0FBEa6cf957d95ee9313490050F6A0DA68039404",
    v3MigratorAddress: "0xE7EcbAAaA54D007A00dbb6c1d2f150066D69dA07",
    nonfungiblePositionManagerAddress: "0xdA75cEf1C93078e8b736FCA5D5a30adb97C8957d",
    tickLensAddress: "0xCb7f54747F58F8944973cea5b8f4ac2209BadDC5",
    swapRouter02Address: "0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4"
}
  , $a = {
    v3CoreFactoryAddress: "0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6",
    multicallAddress: "0x8260CB40247290317a4c062F3542622367F206Ee",
    quoterAddress: "0x1dd92b83591781D0C6d98d07391eea4b9a6008FA",
    v3MigratorAddress: "0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3",
    nonfungiblePositionManagerAddress: "0x622e4726a167799826d1E1D150b076A7725f5D81",
    tickLensAddress: "0xb52429333da969a0C79a60930a4Bf0020E5D1DE8"
}
  , Ka = {
    v3CoreFactoryAddress: "0x248AB79Bbb9bC29bB72f7Cd42F17e054Fc40188e",
    multicallAddress: "0x2B718b475e385eD29F56775a66aAB1F5cC6B2A0A",
    quoterAddress: "0x2779a0CC1c3e0E44D2542EC3e79e3864Ae93Ef0B",
    v3MigratorAddress: "0x398f43ef2c67B941147157DA1c5a868E906E043D",
    nonfungiblePositionManagerAddress: "0x6b2937Bde17889EDCf8fbD8dE31C3C2a70Bc4d65",
    tickLensAddress: "0x0fd18587734e5C2dcE2dccDcC7DD1EC89ba557d9",
    swapRouter02Address: "0x101F443B4d1b059569D643917553c771E1b9663E"
}
  , ja = {
    v3CoreFactoryAddress: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
    multicallAddress: "0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07",
    quoterAddress: "0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3",
    v3MigratorAddress: "0x729004182cF005CEC8Bd85df140094b6aCbe8b15",
    nonfungiblePositionManagerAddress: "0x1238536071E1c677A632429e3655c799b22cDA52",
    tickLensAddress: "0xd7f33bcdb21b359c8ee6f0251d30e94832baad07",
    swapRouter02Address: "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"
}
  , Qa = {
    v3CoreFactoryAddress: "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD",
    multicallAddress: "0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2",
    quoterAddress: "0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F",
    v3MigratorAddress: "0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97",
    nonfungiblePositionManagerAddress: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
    tickLensAddress: "0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950",
    swapRouter02Address: "0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE"
}
  , Ia = {
    v3CoreFactoryAddress: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
    multicallAddress: "0x091e99cb1C49331a94dD62755D168E941AbD0693",
    quoterAddress: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
    v3MigratorAddress: "0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7",
    nonfungiblePositionManagerAddress: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
    tickLensAddress: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
    swapRouter02Address: "0x2626664c2603336E57B271c5C0b26F421741e481",
    mixedRouteQuoterV1Address: "0xe544efae946f0008ae9a8d64493efa7886b73776"
}
  , Ja = {
    v3CoreFactoryAddress: "0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2",
    multicallAddress: "0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439",
    quoterAddress: "0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9",
    v3MigratorAddress: "0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE",
    nonfungiblePositionManagerAddress: "0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30",
    tickLensAddress: "0x1acB873Ee909D0c98adB18e4474943249F931b92",
    swapRouter02Address: "0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d"
}
  , e0 = {
    v3CoreFactoryAddress: "0x7145F8aeef1f6510E92164038E1B6F8cB2c42Cbb",
    multicallAddress: "0xA51c76bEE6746cB487a7e9312E43e2b8f4A37C15",
    quoterAddress: "0x11867e1b3348F3ce4FcC170BC5af3d23E07E64Df",
    v3MigratorAddress: "0x048352d8dCF13686982C799da63fA6426a9D0b60",
    nonfungiblePositionManagerAddress: "0xbC91e8DfA3fF18De43853372A3d7dfe585137D78",
    tickLensAddress: "0x209AAda09D74Ad3B8D0E92910Eaf85D2357e3044",
    swapRouter02Address: "0x7De04c96BE5159c3b5CeffC82aa176dc81281557"
}
  , t0 = {
    v3CoreFactoryAddress: "0x4324A677D74764f46f33ED447964252441aA8Db6",
    multicallAddress: "0xA1E7e3A69671C4494EC59Dbd442de930a93F911A",
    quoterAddress: "0xC195976fEF0985886E37036E2DF62bF371E12Df0",
    v3MigratorAddress: "0x65ef259b31bf1d977c37e9434658694267674897",
    nonfungiblePositionManagerAddress: "0xB8458EaAe43292e3c1F7994EFd016bd653d23c20",
    tickLensAddress: "0x23C0F71877a1Fc4e20A78018f9831365c85f3064"
}
  , n0 = {
    v3CoreFactoryAddress: "0xaF37EC98A00FD63689CF3060BF3B6784E00caD82",
    multicallAddress: "0x996a9858cDfa45Ad68E47c9A30a7201E29c6a386",
    quoterAddress: "0xb51727c996C68E60F598A923a5006853cd2fEB31",
    v3MigratorAddress: "0x16678977CA4ec3DAD5efc7b15780295FE5f56162",
    nonfungiblePositionManagerAddress: "0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1",
    tickLensAddress: "0x55B9dF5bF68ADe972191a91980459f48ecA16afC",
    swapRouter02Address: "0x0B14ff67f0014046b4b99057Aec4509640b3947A"
}
  , a0 = {
    v3CoreFactoryAddress: "0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd",
    multicallAddress: "0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705",
    quoterAddress: "0x6Cdcd65e03c1CEc3730AeeCd45bc140D57A25C77",
    v3MigratorAddress: "0x15CA7043CD84C5D21Ae76Ba0A1A967d42c40ecE0",
    nonfungiblePositionManagerAddress: "0xB218e4f7cF0533d4696fDfC419A0023D33345F28",
    tickLensAddress: "0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274",
    swapRouter02Address: "0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66"
}
  , i0 = {
    v3CoreFactoryAddress: "0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422",
    multicallAddress: "0x0c68a7C72f074d1c45C16d41fa74eEbC6D16a65C",
    quoterAddress: "0x8Cb537fc92E26d8EBBb760E632c95484b6Ea3e28",
    v3MigratorAddress: "0x611841b24E43C4ACfd290B427a3D6cf1A59dac8E",
    nonfungiblePositionManagerAddress: "0x0616e5762c1E7Dc3723c50663dF10a162D690a86",
    tickLensAddress: "0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89",
    swapRouter02Address: "0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3"
};
ue = {},
ue[q.MAINNET] = Ga,
ue[q.OPTIMISM] = ka,
ue[q.ARBITRUM_ONE] = Ha,
ue[q.POLYGON] = Yn,
ue[q.POLYGON_MUMBAI] = Yn,
ue[q.GOERLI] = Ya,
ue[q.CELO] = kn,
ue[q.CELO_ALFAJORES] = kn,
ue[q.BNB] = Wa,
ue[q.OPTIMISM_GOERLI] = za,
ue[q.OPTIMISM_SEPOLIA] = Za,
ue[q.ARBITRUM_GOERLI] = $a,
ue[q.ARBITRUM_SEPOLIA] = Ka,
ue[q.SEPOLIA] = ja,
ue[q.AVALANCHE] = Qa,
ue[q.BASE] = Ia,
ue[q.BASE_GOERLI] = Ja,
ue[q.ZORA] = e0,
ue[q.ZORA_SEPOLIA] = t0,
ue[q.ROOTSTOCK] = n0,
ue[q.BLAST] = a0,
ue[q.ZKSYNC] = i0;
tn = {},
tn[q.MAINNET] = "0xC4e172459f1E7939D522503B81AFAaC1014CE6F6";
nn = {},
nn[q.MAINNET] = "0x408ED6354d4973f66138C91495F2f2FCbd8724C3";
an = {},
an[q.MAINNET] = "0x090D4613473dEE047c3f2706764f49E0821D256e";
rn = {},
rn[q.MAINNET] = "0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8";
sn = {},
sn[q.MAINNET] = "0x65770b5283117639760beA3F867b69b3697a91dd";
var Hn;
(function(n) {
    n[n.EXACT_INPUT = 0] = "EXACT_INPUT",
    n[n.EXACT_OUTPUT = 1] = "EXACT_OUTPUT"
}
)(Hn || (Hn = {}));
var gt;
(function(n) {
    n[n.ROUND_DOWN = 0] = "ROUND_DOWN",
    n[n.ROUND_HALF_UP = 1] = "ROUND_HALF_UP",
    n[n.ROUND_UP = 2] = "ROUND_UP"
}
)(gt || (gt = {}));
var ra = l.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), St, Bt, on = Ba(Ca);
St = {},
St[gt.ROUND_DOWN] = on.ROUND_DOWN,
St[gt.ROUND_HALF_UP] = on.ROUND_HALF_UP,
St[gt.ROUND_UP] = on.ROUND_UP;
Bt = {},
Bt[gt.ROUND_DOWN] = 0,
Bt[gt.ROUND_HALF_UP] = 1,
Bt[gt.ROUND_UP] = 3;
var r0 = function(e, t, a, i) {
    Number.isSafeInteger(e) || We(!1),
    t >= 0 && t < 255 && Number.isInteger(t) || We(!1),
    this.chainId = e,
    this.decimals = t,
    this.symbol = a,
    this.name = i
};
function s0(n) {
    try {
        return st(n)
    } catch {
        throw new Error(n + " is not a valid address.")
    }
}
var o0 = /^0x[0-9a-fA-F]{40}$/;
function c0(n) {
    if (o0.test(n))
        return n;
    throw new Error(n + " is not a valid address.")
}
var yt = function(n) {
    qa(e, n);
    function e(a, i, r, s, c, o, p, y) {
        var u;
        return u = n.call(this, a, r, s, c) || this,
        u.isNative = !1,
        u.isToken = !0,
        o ? u.address = c0(i) : u.address = s0(i),
        p && (p.gte(pe.from(0)) || We(!1)),
        y && (y.gte(pe.from(0)) || We(!1)),
        u.buyFeeBps = p,
        u.sellFeeBps = y,
        u
    }
    var t = e.prototype;
    return t.equals = function(i) {
        return i.isToken && this.chainId === i.chainId && this.address.toLowerCase() === i.address.toLowerCase()
    }
    ,
    t.sortsBefore = function(i) {
        return this.chainId !== i.chainId && We(!1),
        this.address.toLowerCase() === i.address.toLowerCase() && We(!1),
        this.address.toLowerCase() < i.address.toLowerCase()
    }
    ,
    Ua(e, [{
        key: "wrapped",
        get: function() {
            return this
        }
    }]),
    e
}(r0);
function l0(n, e) {
    if (n) {
        if (typeof n == "string")
            return Wn(n, e);
        var t = Object.prototype.toString.call(n).slice(8, -1);
        if (t === "Object" && n.constructor && (t = n.constructor.name),
        t === "Map" || t === "Set")
            return Array.from(n);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return Wn(n, e)
    }
}
function Wn(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, a = new Array(e); t < e; t++)
        a[t] = n[t];
    return a
}
function d0(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (t)
        return (t = t.call(n)).next.bind(t);
    if (Array.isArray(n) || (t = l0(n)) || e && n && typeof n.length == "number") {
        t && (n = t);
        var a = 0;
        return function() {
            return a >= n.length ? {
                done: !0
            } : {
                done: !1,
                value: n[a++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Ot, Ke;
(function(n) {
    n[n.LOWEST = 100] = "LOWEST",
    n[n.LOW = 500] = "LOW",
    n[n.MEDIUM = 3e3] = "MEDIUM",
    n[n.HIGH = 1e4] = "HIGH"
}
)(Ke || (Ke = {}));
Ot = {},
Ot[Ke.LOWEST] = 1,
Ot[Ke.LOW] = 10,
Ot[Ke.MEDIUM] = 60,
Ot[Ke.HIGH] = 200;
var sa = l.BigInt(0)
  , u0 = l.BigInt(1)
  , f0 = l.BigInt(2)
  , p0 = [128, 64, 32, 16, 8, 4, 2, 1].map(function(n) {
    return [n, l.exponentiate(f0, l.BigInt(n))]
});
function y0(n) {
    l.greaterThan(n, sa) || We(!1),
    l.lessThanOrEqual(n, ra) || We(!1);
    for (var e = 0, t = d0(p0), a; !(a = t()).done; ) {
        var i = a.value
          , r = i[0]
          , s = i[1];
        l.greaterThanOrEqual(n, s) && (n = l.signedRightShift(n, l.BigInt(r)),
        e += r)
    }
    return e
}
function ve(n, e) {
    return l.signedRightShift(l.multiply(n, l.BigInt(e)), l.BigInt(128))
}
var cn = l.exponentiate(l.BigInt(2), l.BigInt(32))
  , ot = function() {
    function n() {}
    return n.getSqrtRatioAtTick = function(t) {
        t >= n.MIN_TICK && t <= n.MAX_TICK && Number.isInteger(t) || We(!1);
        var a = t < 0 ? t * -1 : t
          , i = a & 1 ? l.BigInt("0xfffcb933bd6fad37aa2d162d1a594001") : l.BigInt("0x100000000000000000000000000000000");
        return a & 2 && (i = ve(i, "0xfff97272373d413259a46990580e213a")),
        a & 4 && (i = ve(i, "0xfff2e50f5f656932ef12357cf3c7fdcc")),
        a & 8 && (i = ve(i, "0xffe5caca7e10e4e61c3624eaa0941cd0")),
        a & 16 && (i = ve(i, "0xffcb9843d60f6159c9db58835c926644")),
        a & 32 && (i = ve(i, "0xff973b41fa98c081472e6896dfb254c0")),
        a & 64 && (i = ve(i, "0xff2ea16466c96a3843ec78b326b52861")),
        a & 128 && (i = ve(i, "0xfe5dee046a99a2a811c461f1969c3053")),
        a & 256 && (i = ve(i, "0xfcbe86c7900a88aedcffc83b479aa3a4")),
        a & 512 && (i = ve(i, "0xf987a7253ac413176f2b074cf7815e54")),
        a & 1024 && (i = ve(i, "0xf3392b0822b70005940c7a398e4b70f3")),
        a & 2048 && (i = ve(i, "0xe7159475a2c29b7443b29c7fa6e889d9")),
        a & 4096 && (i = ve(i, "0xd097f3bdfd2022b8845ad8f792aa5825")),
        a & 8192 && (i = ve(i, "0xa9f746462d870fdf8a65dc1f90e061e5")),
        a & 16384 && (i = ve(i, "0x70d869a156d2a1b890bb3df62baf32f7")),
        a & 32768 && (i = ve(i, "0x31be135f97d08fd981231505542fcfa6")),
        a & 65536 && (i = ve(i, "0x9aa508b5b7a84e1c677de54f3e99bc9")),
        a & 131072 && (i = ve(i, "0x5d6af8dedb81196699c329225ee604")),
        a & 262144 && (i = ve(i, "0x2216e584f5fa1ea926041bedfe98")),
        a & 524288 && (i = ve(i, "0x48a170391f7dc42444e8fa2")),
        t > 0 && (i = l.divide(ra, i)),
        l.greaterThan(l.remainder(i, cn), sa) ? l.add(l.divide(i, cn), u0) : l.divide(i, cn)
    }
    ,
    n.getTickAtSqrtRatio = function(t) {
        l.greaterThanOrEqual(t, n.MIN_SQRT_RATIO) && l.lessThan(t, n.MAX_SQRT_RATIO) || We(!1);
        var a = l.leftShift(t, l.BigInt(32)), i = y0(a), r;
        l.greaterThanOrEqual(l.BigInt(i), l.BigInt(128)) ? r = l.signedRightShift(a, l.BigInt(i - 127)) : r = l.leftShift(a, l.BigInt(127 - i));
        for (var s = l.leftShift(l.subtract(l.BigInt(i), l.BigInt(128)), l.BigInt(64)), c = 0; c < 14; c++) {
            r = l.signedRightShift(l.multiply(r, r), l.BigInt(127));
            var o = l.signedRightShift(r, l.BigInt(128));
            s = l.bitwiseOr(s, l.leftShift(o, l.BigInt(63 - c))),
            r = l.signedRightShift(r, o)
        }
        var p = l.multiply(s, l.BigInt("255738958999603826347141"))
          , y = l.toNumber(l.signedRightShift(l.subtract(p, l.BigInt("3402992956809132418596140100660247210")), l.BigInt(128)))
          , u = l.toNumber(l.signedRightShift(l.add(p, l.BigInt("291339464771989622907027621153398088495")), l.BigInt(128)));
        return y === u ? y : l.lessThanOrEqual(n.getSqrtRatioAtTick(u), t) ? u : y
    }
    ,
    n
}();
ot.MIN_TICK = -887272;
ot.MAX_TICK = -ot.MIN_TICK;
ot.MIN_SQRT_RATIO = l.BigInt("4295128739");
ot.MAX_SQRT_RATIO = l.BigInt("1461446703485210103287273052203988822378723970342");
function zn(n, e) {
    Number.isInteger(n) && Number.isInteger(e) || We(!1),
    e > 0 || We(!1),
    n >= ot.MIN_TICK && n <= ot.MAX_TICK || We(!1);
    var t = Math.round(n / e) * e;
    return t < ot.MIN_TICK ? t + e : t > ot.MAX_TICK ? t - e : t
}
const m0 = "hh-sol-artifact-1"
  , b0 = "IUniswapV3Pool"
  , g0 = "contracts/interfaces/IUniswapV3Pool.sol"
  , w0 = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount",
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
    name: "Burn",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount0",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount1",
        type: "uint128"
    }],
    name: "Collect",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount0",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount1",
        type: "uint128"
    }],
    name: "CollectProtocol",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
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
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paid0",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paid1",
        type: "uint256"
    }],
    name: "Flash",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16"
    }],
    name: "IncreaseObservationCardinalityNext",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160"
    }, {
        indexed: !1,
        internalType: "int24",
        name: "tick",
        type: "int24"
    }],
    name: "Initialize",
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
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "amount",
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
    name: "Mint",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "feeProtocol0Old",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint8",
        name: "feeProtocol1Old",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint8",
        name: "feeProtocol0New",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint8",
        name: "feeProtocol1New",
        type: "uint8"
    }],
    name: "SetFeeProtocol",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "int256",
        name: "amount0",
        type: "int256"
    }, {
        indexed: !1,
        internalType: "int256",
        name: "amount1",
        type: "int256"
    }, {
        indexed: !1,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "int24",
        name: "tick",
        type: "int24"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [{
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
    }],
    name: "burn",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
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
        name: "amount0Requested",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128"
    }],
    name: "collect",
    outputs: [{
        internalType: "uint128",
        name: "amount0",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "amount1",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "amount0Requested",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128"
    }],
    name: "collectProtocol",
    outputs: [{
        internalType: "uint128",
        name: "amount0",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "amount1",
        type: "uint128"
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
    inputs: [],
    name: "fee",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeGrowthGlobal0X128",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeGrowthGlobal1X128",
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
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "observationCardinalityNext",
        type: "uint16"
    }],
    name: "increaseObservationCardinalityNext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "liquidity",
    outputs: [{
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxLiquidityPerTick",
    outputs: [{
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
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
        name: "amount",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "observations",
    outputs: [{
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32"
    }, {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56"
    }, {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulativeX128",
        type: "uint160"
    }, {
        internalType: "bool",
        name: "initialized",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]"
    }],
    name: "observe",
    outputs: [{
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]"
    }, {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        type: "uint160[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
    }],
    name: "positions",
    outputs: [{
        internalType: "uint128",
        name: "_liquidity",
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
    name: "protocolFees",
    outputs: [{
        internalType: "uint128",
        name: "token0",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "token1",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint8",
        name: "feeProtocol0",
        type: "uint8"
    }, {
        internalType: "uint8",
        name: "feeProtocol1",
        type: "uint8"
    }],
    name: "setFeeProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "slot0",
    outputs: [{
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160"
    }, {
        internalType: "int24",
        name: "tick",
        type: "int24"
    }, {
        internalType: "uint16",
        name: "observationIndex",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationCardinality",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationCardinalityNext",
        type: "uint16"
    }, {
        internalType: "uint8",
        name: "feeProtocol",
        type: "uint8"
    }, {
        internalType: "bool",
        name: "unlocked",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "tickLower",
        type: "int24"
    }, {
        internalType: "int24",
        name: "tickUpper",
        type: "int24"
    }],
    name: "snapshotCumulativesInside",
    outputs: [{
        internalType: "int56",
        name: "tickCumulativeInside",
        type: "int56"
    }, {
        internalType: "uint160",
        name: "secondsPerLiquidityInsideX128",
        type: "uint160"
    }, {
        internalType: "uint32",
        name: "secondsInside",
        type: "uint32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool"
    }, {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256"
    }, {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swap",
    outputs: [{
        internalType: "int256",
        name: "amount0",
        type: "int256"
    }, {
        internalType: "int256",
        name: "amount1",
        type: "int256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int16",
        name: "wordPosition",
        type: "int16"
    }],
    name: "tickBitmap",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "tickSpacing",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "tick",
        type: "int24"
    }],
    name: "ticks",
    outputs: [{
        internalType: "uint128",
        name: "liquidityGross",
        type: "uint128"
    }, {
        internalType: "int128",
        name: "liquidityNet",
        type: "int128"
    }, {
        internalType: "uint256",
        name: "feeGrowthOutside0X128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "feeGrowthOutside1X128",
        type: "uint256"
    }, {
        internalType: "int56",
        name: "tickCumulativeOutside",
        type: "int56"
    }, {
        internalType: "uint160",
        name: "secondsPerLiquidityOutsideX128",
        type: "uint160"
    }, {
        internalType: "uint32",
        name: "secondsOutside",
        type: "uint32"
    }, {
        internalType: "bool",
        name: "initialized",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "token0",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "token1",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}]
  , A0 = "0x"
  , h0 = "0x"
  , T0 = {}
  , E0 = {}
  , Zn = {
    _format: m0,
    contractName: b0,
    sourceName: g0,
    abi: w0,
    bytecode: A0,
    deployedBytecode: h0,
    linkReferences: T0,
    deployedLinkReferences: E0
}
  , _0 = n => {
    var dt, O, P, T, A;
    const e = n || fe.polygon
      , t = fn(e)
      , a = On(e, !0)
      , i = On(e, !1)
      , r = Aa(e, !0)
      , s = (O = (dt = W) == null ? void 0 : dt[t]) == null ? void 0 : O.positionManagerAddress
      , {provider: c} = pn()
      , o = yn()
      , p = An()
      , y = Kn()
      , [{wallet: u}] = mn()
      , b = (P = u == null ? void 0 : u.accounts[0]) == null ? void 0 : P.address
      , _ = bn()
      , C = gn()
      , M = async (d, f, w, g, m) => {
        var L, S, R, U, X, V, k, H;
        const h = J(d, w.decimal)
          , D = await Y(d, w, g)
          , N = J(D, g.decimal);
        if (i)
            try {
                C.success({
                    topTitle: "Approve token spending",
                    haveLoading: !0,
                    message: (S = (L = o == null ? void 0 : o.wallet) == null ? void 0 : L.type) != null && S.includes("Ledger") || (U = (R = o == null ? void 0 : o.wallet) == null ? void 0 : R.type) != null && U.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: w,
                        inputAmount: d,
                        outputToken: g,
                        outputAmount: D
                    }
                }),
                await F(w, h),
                await F(w, h);
                const $ = await et();
                C.success({
                    topTitle: `Submit swap for ${g.symbol} `,
                    haveLoading: !0,
                    message: (V = (X = o == null ? void 0 : o.wallet) == null ? void 0 : X.type) != null && V.includes("Ledger") || (H = (k = o == null ? void 0 : o.wallet) == null ? void 0 : k.type) != null && H.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: w,
                        inputAmount: d,
                        outputToken: g,
                        outputAmount: D
                    }
                });
                const K = await Ne(w, g)
                  , Q = await (i == null ? void 0 : i.swap(h, N, K, m, $, !0));
                return !0
            } catch ($) {
                throw C.clearAll(),
                new Error(Ae($))
            }
        else
            throw C.clearAll(),
            _.error("contractMethodConnectorWrite not found"),
            new Error("contractMethodConnectorWrite not found")
    }
    ;
    async function E(d) {
        var L;
        const f = new Ze((L = $e) == null ? void 0 : L[t])
          , w = new Je(d,Zn.abi,f)
          , [g,m,h,D,N] = await Promise.all([w.tickSpacing(), w.fee(), w.liquidity(), w.slot0(), w.token0()]);
        return {
            tickSpacing: g,
            fee: m,
            liquidity: h,
            sqrtPriceX96: D[0],
            tick: D[1],
            token0: N
        }
    }
    const v = async (d, f, w, g) => {
        var D, N, L, S, R, U, X, V, k, H, $, K, Q, I, ae, Z, ee;
        const m = u ? new ke(u.provider,"any") : c
          , h = u ? m.getSigner() : c;
        C.success({
            topTitle: `Approve token spending ${w.symbol}`,
            haveLoading: !0,
            message: (N = (D = o == null ? void 0 : o.wallet) == null ? void 0 : D.type) != null && N.includes("Ledger") || (S = (L = o == null ? void 0 : o.wallet) == null ? void 0 : L.type) != null && S.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
        });
        try {
            if (h && b) {
                const ie = await et()
                  , Ce = new yt(Re[e],w.address,w.decimal)
                  , Te = new yt(Re[e],g.address,g.decimal)
                  , Ue = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
                  , Ee = await (r == null ? void 0 : r.getPool(Ce.address, Te.address, Ue)) || "0x00"
                  , Le = st(b)
                  , Xe = st(Ee || "0x00")
                  , xe = await y.get(`${Wt}/network-info/pool-position/${Le}?poolAddress=${Xe}&network=${e == null ? void 0 : e.toLowerCase()}`);
                let _e = (R = xe == null ? void 0 : xe.data) == null ? void 0 : R.tokenId;
                const me = await E(Ee)
                  , Se = J(d, w.decimal)
                  , qe = J(f, g.decimal)
                  , ze = (X = (U = W) == null ? void 0 : U[e].teleBTCAddress) == null ? void 0 : X.toLowerCase()
                  , Be = ((V = me.token0) == null ? void 0 : V.toLowerCase()) === ze
                  , be = new Je(s,Nn.abi,h);
                if (!_e || _e && +((k = xe == null ? void 0 : xe.data) == null ? void 0 : k.liquidity) == 0) {
                    await B(w, Se),
                    await B(g, qe);
                    const ut = {
                        token0: Be ? Te.address : Ce.address,
                        token1: Be ? Ce.address : Te.address,
                        fee: me.fee,
                        tickLower: zn(me.tick, me.tickSpacing) - me.tickSpacing * 2,
                        tickUpper: zn(me.tick, me.tickSpacing) + me.tickSpacing * 2,
                        amount0Desired: Be ? qe : Se,
                        amount1Desired: Be ? Se : qe,
                        amount0Min: 0,
                        amount1Min: 0,
                        recipient: b,
                        deadline: ie
                    };
                    C.success({
                        topTitle: `Mint with ${d} ${w.symbol} and ${f}  ${g.symbol}`,
                        haveLoading: !0,
                        message: ($ = (H = o == null ? void 0 : o.wallet) == null ? void 0 : H.type) != null && $.includes("Ledger") || (Q = (K = o == null ? void 0 : o.wallet) == null ? void 0 : K.type) != null && Q.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                    });
                    const Pt = (await (await be.mint(ut)).wait(1)).events;
                    _e = Pt == null ? void 0 : Pt[4].args.tokenId
                }
                await B(w, Se),
                await B(g, qe);
                const Me = {
                    tokenId: _e,
                    amount0Desired: qe,
                    amount1Desired: Se,
                    amount0Min: 0,
                    amount1Min: 0,
                    deadline: ie
                };
                C.success({
                    topTitle: `Add liquidity with ${d} ${w.symbol} and ${f}  ${g.symbol}`,
                    haveLoading: !0,
                    message: (ae = (I = o == null ? void 0 : o.wallet) == null ? void 0 : I.type) != null && ae.includes("Ledger") || (ee = (Z = o == null ? void 0 : o.wallet) == null ? void 0 : Z.type) != null && ee.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await (await be.increaseLiquidity(Me)).wait(1)
            }
        } catch (ie) {
            throw C.clearAll(),
            new Error(Ae(ie))
        }
    }
      , x = async (d, f, w, g, m, h) => {
        var L, S, R, U, X;
        const D = u ? new ke(u.provider,"any") : c
          , N = u ? D.getSigner() : c;
        if (N && b) {
            C.success({
                topTitle: `Remove ${d} Liquidity`,
                haveLoading: !0,
                message: (S = (L = o == null ? void 0 : o.wallet) == null ? void 0 : L.type) != null && S.includes("Ledger") || (U = (R = o == null ? void 0 : o.wallet) == null ? void 0 : R.type) != null && U.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
            });
            const V = new yt(Re[e],m.address,m.decimal)
              , k = new yt(Re[e],h.address,h.decimal)
              , H = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
              , $ = await (r == null ? void 0 : r.getPool(V.address, k.address, H)) || "0x00"
              , K = st(b)
              , Q = st($ || "0x00")
              , I = await y.get(`${Wt}/network-info/pool-position/${K}?poolAddress=${Q}&network=${e == null ? void 0 : e.toLowerCase()}`);
            let ae = (X = I == null ? void 0 : I.data) == null ? void 0 : X.tokenId;
            try {
                const Z = J(d, g.decimal)
                  , ee = await et()
                  , ie = {
                    tokenId: ae,
                    liquidity: Z,
                    amount0Min: 0,
                    amount1Min: 0,
                    deadline: ee
                };
                return await (await new Je(s,Nn.abi,N).decreaseLiquidity(ie)).wait(1),
                !0
            } catch (Z) {
                throw C.clearAll(),
                new Error(Ae(Z))
            }
        }
    }
      , B = async (d, f) => {
        var m, h, D, N;
        const w = u ? new ke(u.provider,"any") : c
          , g = u ? w.getSigner() : c;
        if (g && b) {
            C.success({
                topTitle: `Approve token spending ${d.symbol}`,
                haveLoading: !0,
                message: (h = (m = o == null ? void 0 : o.wallet) == null ? void 0 : m.type) != null && h.includes("Ledger") || (N = (D = o == null ? void 0 : o.wallet) == null ? void 0 : D.type) != null && N.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
            });
            const L = ct.connect(d == null ? void 0 : d.address, g)
              , S = await L.allowance(b, s)
              , R = re(f, d.decimal, d.decimal)
              , U = re(S, d.decimal, d.decimal);
            if (+R > +U) {
                const X = f;
                try {
                    await (await L.approve(s, X)).wait(2)
                } catch (V) {
                    throw V
                }
            }
        }
    }
      , F = async (d, f) => {
        var h, D;
        const w = u ? new ke(u.provider,"any") : c
          , g = u ? w.getSigner() : c
          , m = (D = (h = W) == null ? void 0 : h[e]) == null ? void 0 : D.exchangeConnectorV3Address;
        if (g && b) {
            const N = ct.connect(d == null ? void 0 : d.address, g)
              , L = await N.allowance(b, m)
              , S = re(f, d.decimal, d.decimal)
              , R = re(L, d.decimal, d.decimal);
            if (+S > +R) {
                const U = f;
                try {
                    await (await N.approve(m, U)).wait(2)
                } catch (X) {
                    throw X
                }
            }
        }
    }
      , Y = async (d, f, w) => {
        const g = z(e) ? se(f, e) : f
          , m = z(e) ? se(w, e) : w;
        let h = d;
        const D = await Ne(g, m);
        return (g == null ? void 0 : g.type) === "brc20" || (m == null ? void 0 : m.type) === "brc20" || (g == null ? void 0 : g.type) === "rune" || (m == null || m.type),
        h = d,
        new Promise( (N, L) => {
            var S;
            return (S = a == null ? void 0 : a.callStatic) == null ? void 0 : S.getExactInput(D, J(h, g == null ? void 0 : g.decimal)).then(R => {
                const U = re(R[1], m.decimal);
                N(U)
            }
            ).catch(R => {
                L(Ae(R))
            }
            )
        }
        )
    }
      , oe = async (d, f, w) => {
        var N, L, S;
        const g = z(e) ? se(f, e) : f
          , m = z(e) ? se(w, e) : w;
        let h = d;
        const D = await Ne(g, m);
        if ((g == null ? void 0 : g.type) === "brc20" || (m == null ? void 0 : m.type) === "brc20" || (g == null ? void 0 : g.type) === "rune" || (m == null ? void 0 : m.type) === "rune")
            h = d;
        else {
            const R = await Ne(g, m);
            let U = 0;
            if (z(e)) {
                const X = Rt({
                    uniqueCounter: pe.from(0),
                    sourceChainId: pe.from((N = Re) == null ? void 0 : N[e]),
                    user: "0x548f6afdd7A64d3dDB654a01e6E114795e3b38fe",
                    exchangeConnector: (S = (L = W) == null ? void 0 : L[t]) == null ? void 0 : S.exchangeConnectorV3Address,
                    minAmountOut: pe.from(0),
                    path: R,
                    userScript: "0xd1d38408f34b62abc9c1ed2afea39f7cc70c7b4a47b8969c422a97e76a6f09b8",
                    scriptType: "5",
                    lockerLockingScript: "0xa91472df0f82c4bcfe01a274bd521e5d4c66586b7a5b87",
                    thirdParty: pe.from(0),
                    isFixedToken: !0
                })
                  , V = z(e) ? await p.getAcrossFeeUnwrap({
                    amount: J(d, f.decimal),
                    token: f,
                    message: X,
                    crossNetwork: e
                }) : 0;
                U = z(e) ? +V / +"1e18" : 0
            }
            h = (+d * (1 - U)).toFixed(g == null ? void 0 : g.decimal).toString()
        }
        return new Promise( (R, U) => {
            var X;
            return (X = a == null ? void 0 : a.callStatic) == null ? void 0 : X.getExactInput(D, J(h, g == null ? void 0 : g.decimal)).then(V => {
                const k = re(V[1], m.decimal);
                R(k)
            }
            ).catch(V => {
                U(Ae(V))
            }
            )
        }
        )
    }
      , te = async (d, f) => {
        var Z, ee, ie, Ce, Te, Ue, Ee, Le, Xe, xe, _e, me, Se, qe, ze, Be, be, Me, At, ut, ge, Pe, Pt, xn, Mn;
        const w = (ie = (ee = (Z = W) == null ? void 0 : Z[t]) == null ? void 0 : ee.teleBTCAddress) == null ? void 0 : ie.toLowerCase()
          , g = (Te = (Ce = we) == null ? void 0 : Ce[t]) == null ? void 0 : Te.find(it => {
            var Ge;
            return ((Ge = it.address) == null ? void 0 : Ge.toLowerCase()) === w
        }
        )
          , m = (Le = (Ee = (Ue = W) == null ? void 0 : Ue[t]) == null ? void 0 : Ee.USDTAddress) == null ? void 0 : Le.toLowerCase();
        (xe = (Xe = we) == null ? void 0 : Xe[t]) == null || xe.find(it => {
            var Ge;
            return ((Ge = it.address) == null ? void 0 : Ge.toLowerCase()) === m
        }
        );
        const h = (Se = (me = (_e = W) == null ? void 0 : _e[t]) == null ? void 0 : me.USDCEAddress) == null ? void 0 : Se.toLowerCase()
          , D = (ze = (qe = we) == null ? void 0 : qe[t]) == null ? void 0 : ze.find(it => {
            var Ge;
            return ((Ge = it.address) == null ? void 0 : Ge.toLowerCase()) === h
        }
        )
          , N = (Me = (be = (Be = W) == null ? void 0 : Be[t]) == null ? void 0 : be.USDCAddress) == null ? void 0 : Me.toLowerCase();
        (ut = (At = we) == null ? void 0 : At[t]) == null || ut.find(it => {
            var Ge;
            return ((Ge = it.address) == null ? void 0 : Ge.toLowerCase()) === N
        }
        );
        const L = (Pt = (Pe = (ge = W) == null ? void 0 : ge[t]) == null ? void 0 : Pe.WBTCAddress) == null ? void 0 : Pt.toLowerCase()
          , S = (Mn = (xn = we) == null ? void 0 : xn[t]) == null ? void 0 : Mn.find(it => {
            var Ge;
            return ((Ge = it.address) == null ? void 0 : Ge.toLowerCase()) === L
        }
        )
          , R = (d == null ? void 0 : d.type) === "rune";
        f == null || f.type;
        const U = (d == null ? void 0 : d.type) === "evm-rune"
          , X = (f == null ? void 0 : f.type) === "evm-rune"
          , V = await (a == null ? void 0 : a.isPathValid([d == null ? void 0 : d.address, f == null ? void 0 : f.address]))
          , k = (d == null ? void 0 : d.address) === m
          , H = (f == null ? void 0 : f.address) === m
          , $ = (d == null ? void 0 : d.address) === N
          , K = (f == null ? void 0 : f.address) === N
          , Q = (d == null ? void 0 : d.address) === L
          , I = (f == null ? void 0 : f.address) === L;
        return V ? [d, f] : U || X ? [d, g, f] : k ? [d, D, S, g, f] : H ? [d, g, S, D, f] : $ ? [d, D, S, g, f] : K ? [d, g, S, D, f] : Q ? [d, g, f] : I ? [d, g, f] : R ? [d, g, S, f] : [d, S, g, f]
    }
      , De = async (d, f) => {
        var K, Q, I, ae, Z, ee, ie, Ce, Te, Ue, Ee, Le, Xe, xe, _e, me, Se, qe, ze, Be;
        const w = (I = (Q = (K = W) == null ? void 0 : K[t]) == null ? void 0 : Q.teleBTCAddress) == null ? void 0 : I.toLowerCase()
          , g = (Z = (ae = we) == null ? void 0 : ae[t]) == null ? void 0 : Z.find(be => {
            var Me;
            return ((Me = be.address) == null ? void 0 : Me.toLowerCase()) === w
        }
        )
          , m = (Ce = (ie = (ee = W) == null ? void 0 : ee[t]) == null ? void 0 : ie.BTCBAddress) == null ? void 0 : Ce.toLowerCase()
          , h = (Ue = (Te = we) == null ? void 0 : Te[t]) == null ? void 0 : Ue.find(be => {
            var Me;
            return ((Me = be.address) == null ? void 0 : Me.toLowerCase()) === m
        }
        )
          , D = (d == null ? void 0 : d.type) === "brc20";
        f == null || f.type;
        const N = (d == null ? void 0 : d.type) === "evm-brc20"
          , L = (f == null ? void 0 : f.type) === "evm-brc20"
          , S = ((Ee = d == null ? void 0 : d.address) == null ? void 0 : Ee.toLowerCase()) === m
          , R = ((Le = f == null ? void 0 : f.address) == null ? void 0 : Le.toLowerCase()) === m
          , U = (_e = (xe = (Xe = W) == null ? void 0 : Xe[t]) == null ? void 0 : xe.USDTAddress) == null ? void 0 : _e.toLowerCase()
          , X = (Se = (me = we) == null ? void 0 : me[t]) == null ? void 0 : Se.find(be => {
            var Me;
            return ((Me = be.address) == null ? void 0 : Me.toLowerCase()) === U
        }
        )
          , V = (Be = (ze = (qe = W) == null ? void 0 : qe[t]) == null ? void 0 : ze.USDCAddress) == null ? void 0 : Be.toLowerCase()
          , k = (d == null ? void 0 : d.address) === V
          , H = (f == null ? void 0 : f.address) === V
          , $ = await (a == null ? void 0 : a.isPathValid([d == null ? void 0 : d.address, f == null ? void 0 : f.address]));
        return t === fe.binance ? $ ? [d, f] : N || L || R || S ? [d, g, f] : k ? [d, X, D ? g : h, D ? h : g, f] : H ? [d, D ? g : h, D ? h : g, X, f] : [d, D ? g : h, D ? h : g, f] : []
    }
      , Ve = async (d, f) => {
        const w = (d == null ? void 0 : d.type) === "brc20"
          , g = (f == null ? void 0 : f.type) === "brc20"
          , m = w || g
          , h = (d == null ? void 0 : d.type) === "rune"
          , D = (f == null ? void 0 : f.type) === "rune"
          , N = h || D;
        let L = [];
        return m ? L = await De(d, f) : N ? L = await te(d, f) : L = await jt(d, f),
        L
    }
      , Ne = async (d, f) => (await Ve(d, f)).map(m => m.address)
      , ne = async (d, f, w) => {
        const g = z(e) ? se(f, e) : f
          , m = z(e) ? se(w, e) : w
          , h = await Ne(g, m);
        return new Promise( (D, N) => {
            var L;
            return (L = a == null ? void 0 : a.callStatic) == null ? void 0 : L.getExactOutput(h, J(d, m == null ? void 0 : m.decimal)).then(S => {
                const R = re(S[1], g == null ? void 0 : g.decimal);
                D(R)
            }
            ).catch(S => {
                N(Ae(S))
            }
            )
        }
        )
    }
      , j = async (d, f, w) => {
        var S, R, U;
        const g = z(e) ? se(f, e) : f
          , m = z(e) ? se(w, e) : w
          , h = await Ne(g, m)
          , D = await new Promise( (X, V) => {
            var k;
            return (k = a == null ? void 0 : a.callStatic) == null ? void 0 : k.getExactOutput(h, J(d, m == null ? void 0 : m.decimal)).then(H => {
                const $ = re(H[1], g == null ? void 0 : g.decimal);
                X($)
            }
            ).catch(H => {
                V(Ae(H))
            }
            )
        }
        );
        let N = 0;
        if (z(e)) {
            const X = Rt({
                uniqueCounter: pe.from(0),
                sourceChainId: pe.from((S = Re) == null ? void 0 : S[e]),
                user: "0x548f6afdd7A64d3dDB654a01e6E114795e3b38fe",
                exchangeConnector: (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.exchangeConnectorV3Address,
                minAmountOut: pe.from(0),
                path: h,
                userScript: "0xd1d38408f34b62abc9c1ed2afea39f7cc70c7b4a47b8969c422a97e76a6f09b8",
                scriptType: "5",
                lockerLockingScript: "0xa91472df0f82c4bcfe01a274bd521e5d4c66586b7a5b87",
                thirdParty: pe.from(0),
                isFixedToken: !0
            })
              , V = z(e) ? await p.getAcrossFeeUnwrap({
                amount: J(D, f.decimal),
                token: f,
                message: X,
                crossNetwork: e
            }) : 0;
            N = z(e) ? +V / +"1e18" : 0
        }
        return (+D * (1 + N)).toFixed(f.decimal).toString()
    }
    ;
    function at(d, f, w, g=!0) {
        const m = d ** 2
          , h = 2 ** 192;
        let D = m / h;
        const N = Math.pow(10, g ? f - w : w - f);
        return D = D * N,
        g || (D = 1 / D),
        +D.toFixed(18)
    }
    const Fe = async (d, f) => {
        var R;
        const w = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
          , g = await (r == null ? void 0 : r.getPool(d.address, f.address, w))
          , m = new Je(g || "",Zn.abi,new Ze((R = $e) == null ? void 0 : R[t]))
          , h = await m.slot0()
          , D = await m.token0()
          , N = d.address.toLowerCase() === D.toLowerCase()
          , L = h.sqrtPriceX96;
        return at(L, d.decimal, f.decimal, N)
    }
      , Dt = async (d, f) => {
        const w = z(e) ? se(d, e) : d
          , g = z(e) ? se(f, e) : f
          , m = await Ve(w, g);
        if (m.length === 2)
            return Fe(m[0], m[1]);
        if (m.length === 3) {
            const h = await Fe(m[0], m[1]);
            return +(await Fe(m[1], m[2]) * h)
        } else if (m.length === 4) {
            const h = await Fe(m[0], m[1])
              , D = await Fe(m[1], m[2]);
            return +(await Fe(m[2], m[3]) * D * h)
        } else if (m.length === 5) {
            const h = await Fe(m[0], m[1])
              , D = await Fe(m[1], m[2])
              , N = await Fe(m[2], m[3]);
            return +(await Fe(m[3], m[4]) * N * D * h)
        }
    }
      , et = async () => {
        var d;
        try {
            const f = u ? new ke(u == null ? void 0 : u.provider,"any") : new Ze((d = $e) == null ? void 0 : d[e])
              , w = await (f == null ? void 0 : f.getBlock("latest"))
              , g = (w == null ? void 0 : w.timestamp) || 0;
            if (g === 0)
                throw new Error("We cant to calculate deadline");
            const m = g + 1e5;
            return wn(`${m}`)
        } catch {
            throw new Error("We cant to calculate deadline")
        }
    }
      , wt = async (d, f, w=8) => {
        var m;
        let g = 0;
        if (e && b && d !== "0x0000000000000000000000000000000000000000") {
            const h = new Ze((m = $e) == null ? void 0 : m[e])
              , N = await ct.connect(d, h).balanceOf(b);
            g = re(N, +f, w)
        }
        return g || "0"
    }
      , Ct = async d => !!await (a == null ? void 0 : a.isPathValid(d))
      , jt = async (d, f) => {
        var $, K, Q, I, ae, Z, ee, ie, Ce, Te, Ue, Ee, Le, Xe, xe, _e, me, Se, qe, ze, Be, be, Me, At, ut;
        const w = await Ct([d == null ? void 0 : d.address, f == null ? void 0 : f.address])
          , g = (Q = (K = ($ = W) == null ? void 0 : $[t]) == null ? void 0 : K.USDTAddress) == null ? void 0 : Q.toLowerCase()
          , m = (ae = (I = we) == null ? void 0 : I[t]) == null ? void 0 : ae.find(ge => {
            var Pe;
            return ((Pe = ge.address) == null ? void 0 : Pe.toLowerCase()) === g
        }
        )
          , h = (ie = (ee = (Z = W) == null ? void 0 : Z[t]) == null ? void 0 : ee.USDCEAddress) == null ? void 0 : ie.toLowerCase()
          , D = (Te = (Ce = we) == null ? void 0 : Ce[t]) == null ? void 0 : Te.find(ge => {
            var Pe;
            return ((Pe = ge.address) == null ? void 0 : Pe.toLowerCase()) === h
        }
        )
          , N = (Le = (Ee = (Ue = W) == null ? void 0 : Ue[t]) == null ? void 0 : Ee.USDCAddress) == null ? void 0 : Le.toLowerCase();
        (xe = (Xe = we) == null ? void 0 : Xe[t]) == null || xe.find(ge => {
            var Pe;
            return ((Pe = ge.address) == null ? void 0 : Pe.toLowerCase()) === N
        }
        );
        const L = (Se = (me = (_e = W) == null ? void 0 : _e[t]) == null ? void 0 : me.WBTCAddress) == null ? void 0 : Se.toLowerCase()
          , S = (ze = (qe = we) == null ? void 0 : qe[t]) == null ? void 0 : ze.find(ge => {
            var Pe;
            return ((Pe = ge.address) == null ? void 0 : Pe.toLowerCase()) === L
        }
        )
          , R = (Me = (be = (Be = W) == null ? void 0 : Be[t]) == null ? void 0 : be.BTCBAddress) == null ? void 0 : Me.toLowerCase()
          , U = (ut = (At = we) == null ? void 0 : At[t]) == null ? void 0 : ut.find(ge => {
            var Pe;
            return ((Pe = ge.address) == null ? void 0 : Pe.toLowerCase()) === R
        }
        )
          , X = (d == null ? void 0 : d.address) === g
          , V = (f == null ? void 0 : f.address) === g
          , k = (d == null ? void 0 : d.address) === N
          , H = (f == null ? void 0 : f.address) === N;
        return z(e) ? w ? [d, f] : X ? [d, D, S, f] : V ? [d, S, D, f] : k ? [d, D, S, f] : H ? [d, S, D, f] : [d, S, f] : t === fe.bsquared ? w ? [d, f] : [d, S, f] : t === fe.polygon ? w ? [d, f] : X ? [d, D, S, f] : V ? [d, S, D, f] : k ? [d, D, S, f] : H ? [d, S, D, f] : [d, S, f] : t === fe.binance ? w ? [d, f] : k ? [d, m, U, f] : H ? [d, U, m, f] : [d, U, f] : []
    }
      , Qt = (A = (T = W) == null ? void 0 : T[t]) == null ? void 0 : A.exchangeConnectorV3Address;
    return {
        exchangeConnectorAppId: ya,
        calcOutputAmount: (d, f, w) => {
            var S, R, U, X, V, k;
            const g = +d
              , m = at((S = f == null ? void 0 : f.inputToken) == null ? void 0 : S.sqrtPriceX96, w, 8, !((R = f == null ? void 0 : f.inputToken) != null && R.isToken0TeleBTC))
              , h = (X = (U = f == null ? void 0 : f.inputToken) == null ? void 0 : U.lpToken) == null ? void 0 : X.price_high
              , D = (k = (V = f == null ? void 0 : f.inputToken) == null ? void 0 : V.lpToken) == null ? void 0 : k.price_low;
            return (g * Math.sqrt(m) * Math.sqrt(h) / (Math.sqrt(h) - Math.sqrt(m)) * (Math.sqrt(m) - Math.sqrt(D))).toFixed(8)
        }
        ,
        calcInputAmount: (d, f, w) => {
            var S, R, U, X, V, k;
            const g = +d
              , m = at((S = f == null ? void 0 : f.inputToken) == null ? void 0 : S.sqrtPriceX96, w, 8, !((R = f == null ? void 0 : f.inputToken) != null && R.isToken0TeleBTC))
              , h = (X = (U = f == null ? void 0 : f.inputToken) == null ? void 0 : U.lpToken) == null ? void 0 : X.price_high
              , D = (k = (V = f == null ? void 0 : f.inputToken) == null ? void 0 : V.lpToken) == null ? void 0 : k.price_low;
            return (g / (Math.sqrt(m) - Math.sqrt(D)) * (Math.sqrt(h) - Math.sqrt(m)) / (Math.sqrt(m) * Math.sqrt(h))).toFixed(w)
        }
        ,
        getAmountsIn: ne,
        getAmountsInConnector: j,
        getAmountsOut: Y,
        getAmountsOutConnector: oe,
        getCurrentSwapRate: Dt,
        addLiquidity: v,
        removeLiquidity: x,
        getTokenBalance: wt,
        approve: B,
        swap: M,
        checkIsPathValid: Ct,
        getPathValid: Ne,
        exchangeConnectorAddress: Qt,
        contract: a || void 0
    }
}
  , v0 = n => {
    var xt, Mt, dt;
    const e = n || fe.polygon
      , t = fn(e)
      , a = Ln(e, !0)
      , i = Ln(e, !1)
      , r = Sn(e, !0)
      , s = Sn(e, !1)
      , c = ha(e, !0)
      , {provider: o} = pn()
      , p = yn()
      , y = An()
      , [{wallet: u}] = mn()
      , b = (xt = u == null ? void 0 : u.accounts[0]) == null ? void 0 : xt.address
      , _ = bn()
      , C = gn()
      , M = async (O, P, T, A, d) => {
        var m, h, D, N, L, S, R, U;
        const f = J(O, T.decimal)
          , w = await F(O, T, A)
          , g = J(w, A.decimal);
        if (i)
            try {
                C.success({
                    topTitle: "Approve token spending ",
                    haveLoading: !0,
                    message: (h = (m = p == null ? void 0 : p.wallet) == null ? void 0 : m.type) != null && h.includes("Ledger") || (N = (D = p == null ? void 0 : p.wallet) == null ? void 0 : D.type) != null && N.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: T,
                        inputAmount: O,
                        outputToken: A,
                        outputAmount: w
                    }
                }),
                await B(T, f);
                const X = await Fe();
                C.success({
                    topTitle: `Submit swap for ${A.symbol} `,
                    haveLoading: !0,
                    message: (S = (L = p == null ? void 0 : p.wallet) == null ? void 0 : L.type) != null && S.includes("Ledger") || (U = (R = p == null ? void 0 : p.wallet) == null ? void 0 : R.type) != null && U.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: T,
                        inputAmount: O,
                        outputToken: A,
                        outputAmount: w
                    }
                });
                const V = await De(T, A);
                return await (await (i == null ? void 0 : i.swap(f, g, V, d, X, !0))).wait(3),
                !0
            } catch (X) {
                throw C.clearAll(),
                new Error(Ae(X))
            }
        else
            throw C.clearAll(),
            _.error("contractMethodConnectorWrite not found"),
            new Error("contractMethodConnectorWrite not found")
    }
      , E = async (O, P, T, A) => {
        var D, N, L, S, R, U, X, V, k, H, $, K;
        const d = J(O, T.decimal)
          , f = J(P, A.decimal)
          , w = Yt((+O || 0) * (1 - 3 / 100))
          , g = Yt((+P || 0) * (1 - 3 / 100))
          , m = J(w, T.decimal)
          , h = J(g, A.decimal);
        if (s)
            try {
                C.success({
                    topTitle: `Approve token spending ${T.symbol}`,
                    haveLoading: !0,
                    message: (N = (D = p == null ? void 0 : p.wallet) == null ? void 0 : D.type) != null && N.includes("Ledger") || (S = (L = p == null ? void 0 : p.wallet) == null ? void 0 : L.type) != null && S.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await x(T, d),
                C.success({
                    topTitle: `Approve token spending ${A.symbol}`,
                    haveLoading: !0,
                    message: (U = (R = p == null ? void 0 : p.wallet) == null ? void 0 : R.type) != null && U.includes("Ledger") || (V = (X = p == null ? void 0 : p.wallet) == null ? void 0 : X.type) != null && V.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await x(A, f);
                const Q = await Fe();
                return C.success({
                    topTitle: `Add liquidity with ${O} ${T.symbol} and ${P}  ${A.symbol}`,
                    haveLoading: !0,
                    message: (H = (k = p == null ? void 0 : p.wallet) == null ? void 0 : k.type) != null && H.includes("Ledger") || (K = ($ = p == null ? void 0 : p.wallet) == null ? void 0 : $.type) != null && K.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await (await (s == null ? void 0 : s.addLiquidity(T == null ? void 0 : T.address, A == null ? void 0 : A.address, d, f, m, h, b || "0x00", Q))).wait(3),
                !0
            } catch (Q) {
                throw C.clearAll(),
                new Error(Ae(Q))
            }
        else
            throw C.clearAll(),
            _.error("contractMethodRouterWrite not found"),
            new Error("contractMethodRouterWrite not found")
    }
      , v = async (O, P, T, A, d, f) => {
        var N, L, S, R, U, X, V, k;
        const w = J(O, A.decimal)
          , g = Yt((+P || 0) * (1 - 3 / 100), d.decimal)
          , m = Yt((+T || 0) * (1 - 3 / 100), f.decimal)
          , h = J(g, d.decimal)
          , D = J(m, f.decimal);
        if (s)
            try {
                C.success({
                    topTitle: "Approve token spending",
                    haveLoading: !0,
                    message: (L = (N = p == null ? void 0 : p.wallet) == null ? void 0 : N.type) != null && L.includes("Ledger") || (R = (S = p == null ? void 0 : p.wallet) == null ? void 0 : S.type) != null && R.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await x(A, w);
                const H = await Fe();
                return C.success({
                    topTitle: `Remove ${O} LP token`,
                    haveLoading: !0,
                    message: (X = (U = p == null ? void 0 : p.wallet) == null ? void 0 : U.type) != null && X.includes("Ledger") || (k = (V = p == null ? void 0 : p.wallet) == null ? void 0 : V.type) != null && k.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                }),
                await (await (s == null ? void 0 : s.removeLiquidity(d == null ? void 0 : d.address, f == null ? void 0 : f.address, w, h, D, b || "0x00", H))).wait(1),
                !0
            } catch (H) {
                throw C.clearAll(),
                new Error(Ae(H))
            }
        else
            throw C.clearAll(),
            _.error("contractMethodRouter not found"),
            new Error("contractMethodRouter not found")
    }
      , x = async (O, P) => {
        var f, w;
        const T = u ? new ke(u.provider,"any") : o
          , A = u ? T.getSigner() : o
          , d = (w = (f = W) == null ? void 0 : f[e]) == null ? void 0 : w.exchangeRouterAddress;
        if (A && b) {
            const g = ct.connect(O == null ? void 0 : O.address, A)
              , m = await g.allowance(b, d)
              , h = re(P, O.decimal, O.decimal)
              , D = re(m, O.decimal, O.decimal);
            if (+h > +D) {
                const N = P;
                try {
                    await (await g.approve(d, N)).wait(2)
                } catch (L) {
                    throw L
                }
            }
        }
    }
      , B = async (O, P) => {
        var f, w;
        const T = u ? new ke(u.provider,"any") : o
          , A = u ? T.getSigner() : o
          , d = (w = (f = W) == null ? void 0 : f[e]) == null ? void 0 : w.exchangeConnectorAddress;
        if (A && b) {
            const g = ct.connect(O == null ? void 0 : O.address, A)
              , m = await g.allowance(b, d)
              , h = re(P, O.decimal, O.decimal)
              , D = re(m, O.decimal, O.decimal);
            if (+h > +D) {
                const N = P;
                try {
                    await (await g.approve(d, N)).wait(2)
                } catch (L) {
                    throw L
                }
            }
        }
    }
      , F = async (O, P, T) => {
        const A = z(e) ? se(P, e) : P
          , d = z(e) ? se(T, e) : T
          , f = await De(A, d);
        let w = O;
        return (A == null ? void 0 : A.type) === "brc20" || (d == null ? void 0 : d.type) === "brc20" || (A == null ? void 0 : A.type) === "rune" || (d == null || d.type),
        w = O,
        new Promise( (g, m) => r == null ? void 0 : r.getAmountsOut(J(w, A == null ? void 0 : A.decimal), f).then(h => {
            const D = re(h[f.length - 1], d.decimal);
            g(D)
        }
        ).catch(h => {
            m(Ae(h))
        }
        ))
    }
      , Y = async (O, P, T) => {
        var g, m, h;
        const A = z(e) ? se(P, e) : P
          , d = z(e) ? se(T, e) : T
          , f = await De(A, d);
        let w = O;
        if ((A == null ? void 0 : A.type) === "brc20" || (d == null ? void 0 : d.type) === "brc20" || (A == null ? void 0 : A.type) === "rune" || (d == null ? void 0 : d.type) === "rune")
            w = O;
        else {
            let D = 0;
            if (z(e)) {
                const N = Rt({
                    uniqueCounter: pe.from(0),
                    sourceChainId: pe.from((g = Re) == null ? void 0 : g[e]),
                    user: "0x548f6afdd7A64d3dDB654a01e6E114795e3b38fe",
                    exchangeConnector: (h = (m = W) == null ? void 0 : m[t]) == null ? void 0 : h.exchangeConnectorAddress,
                    minAmountOut: pe.from(0),
                    path: f,
                    userScript: "0xd1d38408f34b62abc9c1ed2afea39f7cc70c7b4a47b8969c422a97e76a6f09b8",
                    scriptType: "5",
                    lockerLockingScript: "0xa91472df0f82c4bcfe01a274bd521e5d4c66586b7a5b87",
                    thirdParty: pe.from(0),
                    isFixedToken: !0
                })
                  , L = z(e) ? await y.getAcrossFeeUnwrap({
                    amount: J(O, P.decimal),
                    token: P,
                    message: N,
                    crossNetwork: e
                }) : 0;
                D = z(e) ? +L / +"1e18" : 0
            }
            w = (+O * (1 - D)).toFixed(A == null ? void 0 : A.decimal).toString()
        }
        return new Promise( (D, N) => r == null ? void 0 : r.getAmountsOut(J(w, A == null ? void 0 : A.decimal), f).then(L => {
            const S = re(L[f.length - 1], d.decimal);
            D(S)
        }
        ).catch(L => {
            N(Ae(L))
        }
        ))
    }
      , oe = async (O, P) => {
        var S, R, U, X, V, k, H, $, K, Q, I, ae;
        const T = (U = (R = (S = W) == null ? void 0 : S[t]) == null ? void 0 : R.teleBTCAddress) == null ? void 0 : U.toLowerCase()
          , A = (V = (X = we) == null ? void 0 : X[t]) == null ? void 0 : V.find(Z => {
            var ee;
            return ((ee = Z.address) == null ? void 0 : ee.toLowerCase()) === T
        }
        )
          , d = (O == null ? void 0 : O.type) === "brc20";
        P == null || P.type;
        const f = (O == null ? void 0 : O.type) === "evm-brc20"
          , w = (P == null ? void 0 : P.type) === "evm-brc20"
          , g = ($ = (H = (k = W) == null ? void 0 : k[t]) == null ? void 0 : H.WNATIVEAddress) == null ? void 0 : $.toLowerCase()
          , m = (Q = (K = we) == null ? void 0 : K[t]) == null ? void 0 : Q.find(Z => {
            var ee;
            return ((ee = Z.address) == null ? void 0 : ee.toLowerCase()) === g
        }
        )
          , h = ((I = O == null ? void 0 : O.address) == null ? void 0 : I.toLowerCase()) === g
          , D = ((ae = P == null ? void 0 : P.address) == null ? void 0 : ae.toLowerCase()) === g;
        return await (a == null ? void 0 : a.isPathValid([O == null ? void 0 : O.address, P == null ? void 0 : P.address])) ? [O, P] : h || D || f || w ? [O, A, P] : [O, d ? A : m, d ? m : A, P]
    }
      , te = async (O, P) => {
        var R, U, X, V, k, H, $, K, Q, I, ae, Z;
        const T = (X = (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.teleBTCAddress) == null ? void 0 : X.toLowerCase()
          , A = (k = (V = we) == null ? void 0 : V[t]) == null ? void 0 : k.find(ee => {
            var ie;
            return ((ie = ee.address) == null ? void 0 : ie.toLowerCase()) === T
        }
        )
          , d = (O == null ? void 0 : O.type) === "rune"
          , f = (P == null ? void 0 : P.type) === "rune"
          , w = (O == null ? void 0 : O.type) === "evm-rune"
          , g = (P == null ? void 0 : P.type) === "evm-rune"
          , m = (K = ($ = (H = W) == null ? void 0 : H[t]) == null ? void 0 : $.WNATIVEAddress) == null ? void 0 : K.toLowerCase()
          , h = (I = (Q = we) == null ? void 0 : Q[t]) == null ? void 0 : I.find(ee => {
            var ie;
            return ((ie = ee.address) == null ? void 0 : ie.toLowerCase()) === m
        }
        )
          , D = ((ae = O == null ? void 0 : O.address) == null ? void 0 : ae.toLowerCase()) === m
          , N = ((Z = P == null ? void 0 : P.address) == null ? void 0 : Z.toLowerCase()) === m;
        return await (a == null ? void 0 : a.isPathValid([O == null ? void 0 : O.address, P == null ? void 0 : P.address])) ? [O, P] : D || N || d || f || w || g ? [O, A, P] : [O, d ? A : h, d ? h : A, P]
    }
      , De = async (O, P) => (await Ve(O, P)).map(d => d.address)
      , Ve = async (O, P) => {
        const T = (O == null ? void 0 : O.type) === "brc20"
          , A = (P == null ? void 0 : P.type) === "brc20"
          , d = T || A
          , f = (O == null ? void 0 : O.type) === "rune"
          , w = (P == null ? void 0 : P.type) === "rune"
          , g = f || w;
        let m = [];
        return d ? m = await oe(O, P) : g ? m = await te(O, P) : m = await wt(O, P),
        m
    }
      , Ne = async (O, P, T) => {
        const A = z(e) ? se(P, e) : P
          , d = z(e) ? se(T, e) : T
          , f = await De(A, d);
        return new Promise( (w, g) => r == null ? void 0 : r.getAmountsIn(J(O, d == null ? void 0 : d.decimal), f).then(m => {
            const h = re(m[0], A == null ? void 0 : A.decimal);
            w(h)
        }
        ).catch(m => {
            g(Ae(m))
        }
        ))
    }
      , ne = async (O, P, T) => {
        var h, D, N;
        const A = z(e) ? se(P, e) : P
          , d = z(e) ? se(T, e) : T
          , f = await De(A, d)
          , w = await new Promise( (L, S) => r == null ? void 0 : r.getAmountsIn(J(O, d == null ? void 0 : d.decimal), f).then(R => {
            const U = re(R[0], A == null ? void 0 : A.decimal);
            L(U)
        }
        ).catch(R => {
            S(Ae(R))
        }
        ));
        let g = 0;
        if (z(e)) {
            const L = Rt({
                uniqueCounter: pe.from(0),
                sourceChainId: pe.from((h = Re) == null ? void 0 : h[e]),
                user: "0x548f6afdd7A64d3dDB654a01e6E114795e3b38fe",
                exchangeConnector: (N = (D = W) == null ? void 0 : D[t]) == null ? void 0 : N.exchangeConnectorAddress,
                minAmountOut: pe.from(0),
                path: f,
                userScript: "0xd1d38408f34b62abc9c1ed2afea39f7cc70c7b4a47b8969c422a97e76a6f09b8",
                scriptType: "5",
                lockerLockingScript: "0xa91472df0f82c4bcfe01a274bd521e5d4c66586b7a5b87",
                thirdParty: pe.from(0),
                isFixedToken: !0
            })
              , S = z(e) ? await y.getAcrossFeeUnwrap({
                amount: J(w, P.decimal),
                token: P,
                message: L,
                crossNetwork: e
            }) : 0;
            g = z(e) ? +S / +"1e18" : 0
        }
        return (+w * (1 + g)).toFixed(P.decimal).toString()
    }
      , j = async (O, P, T) => {
        var L;
        const A = await (c == null ? void 0 : c.getPair(P == null ? void 0 : P.address, T == null ? void 0 : T.address))
          , d = ln.connect(A, O)
          , {_reserve0: f, _reserve1: w} = await d.getReserves()
          , g = await d.token0()
          , m = ((L = P == null ? void 0 : P.address) == null ? void 0 : L.toLowerCase()) === (g == null ? void 0 : g.toLowerCase())
          , h = +pe.from(w) / (m ? +`1e${T == null ? void 0 : T.decimal}` : +`1e${P == null ? void 0 : P.decimal}`)
          , D = +pe.from(f) / (m ? +`1e${P == null ? void 0 : P.decimal}` : +`1e${T == null ? void 0 : T.decimal}`);
        return +(m ? h / D : D / h)
    }
      , at = async (O, P) => {
        var w;
        const T = z(e) ? se(O, e) : O
          , A = z(e) ? se(P, e) : P
          , d = await Ve(T, A)
          , f = new Ze((w = $e) == null ? void 0 : w[t]);
        if (f) {
            if (d.length === 2)
                return j(f, d[0], d[1]);
            if (d.length === 3) {
                const g = await j(f, d[0], d[1]);
                return +(await j(f, d[1], d[2]) * g)
            } else if (d.length === 4) {
                const g = await j(f, d[0], d[1])
                  , m = await j(f, d[1], d[2]);
                return +(await j(f, d[2], d[3]) * m * g)
            } else if (d.length === 5) {
                const g = await j(f, d[0], d[1])
                  , m = await j(f, d[1], d[2])
                  , h = await j(f, d[2], d[3]);
                return +(await j(f, d[3], d[4]) * h * m * g)
            }
            return 0
        }
        return 0
    }
      , Fe = async () => {
        var O;
        try {
            const P = u ? new ke(u == null ? void 0 : u.provider,"any") : new Ze((O = $e) == null ? void 0 : O[e])
              , T = await (P == null ? void 0 : P.getBlock("latest"))
              , A = (T == null ? void 0 : T.timestamp) || 0;
            if (A === 0)
                throw new Error("We cant to calculate deadline");
            const d = A + 1e5;
            return wn(`${d}`)
        } catch {
            throw new Error("We cant to calculate deadline")
        }
    }
      , Dt = async (O, P, T=8) => {
        var d;
        let A = 0;
        if (e && b && O !== "0x0000000000000000000000000000000000000000") {
            const f = new Ze((d = $e) == null ? void 0 : d[e])
              , g = await ct.connect(O, f).balanceOf(b);
            A = re(g, +P, T)
        }
        return A || "0"
    }
      , et = async O => !!await (a == null ? void 0 : a.isPathValid(O))
      , wt = async (O, P) => {
        var N, L, S, R, U, X, V, k, H, $, K, Q, I;
        const T = (S = (L = (N = W) == null ? void 0 : N[t]) == null ? void 0 : L.WBTCAddress) == null ? void 0 : S.toLowerCase()
          , A = (O == null ? void 0 : O.address) === T
          , d = (P == null ? void 0 : P.address) === T
          , f = (X = (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.WNATIVEAddress) == null ? void 0 : X.toLowerCase()
          , w = (k = (V = we) == null ? void 0 : V[t]) == null ? void 0 : k.find(ae => {
            var Z;
            return ((Z = ae.address) == null ? void 0 : Z.toLowerCase()) === f
        }
        )
          , g = (K = ($ = (H = W) == null ? void 0 : H[t]) == null ? void 0 : $.WETHAddress) == null ? void 0 : K.toLowerCase()
          , m = (I = (Q = we) == null ? void 0 : Q[t]) == null ? void 0 : I.find(ae => {
            var Z;
            return ((Z = ae.address) == null ? void 0 : Z.toLowerCase()) === g
        }
        );
        return await (a == null ? void 0 : a.isPathValid([O == null ? void 0 : O.address, P == null ? void 0 : P.address])) ? [O, P] : A ? [O, m, w, P] : d ? [O, w, m, P] : [O, w, P]
    }
      , Ct = (dt = (Mt = W) == null ? void 0 : Mt[t]) == null ? void 0 : dt.exchangeConnectorAddress;
    return {
        exchangeConnectorAppId: ma,
        calcOutputAmount: (O, P, T) => +P.teleBTCAmount * +O / +P.wNativeAmount,
        calcInputAmount: (O, P, T) => +P.wNativeAmount * +O / +P.teleBTCAmount,
        getAmountsIn: Ne,
        getAmountsInConnector: ne,
        getAmountsOut: F,
        getAmountsOutConnector: Y,
        getCurrentSwapRate: at,
        addLiquidity: E,
        removeLiquidity: v,
        getTokenBalance: Dt,
        approve: x,
        swap: M,
        checkIsPathValid: et,
        getPathValid: De,
        exchangeConnectorAddress: Ct,
        contract: a && r && c || void 0
    }
}
  , D0 = [{
    inputs: [{
        internalType: "address",
        name: "_factory",
        type: "address"
    }, {
        internalType: "address",
        name: "_tokenX",
        type: "address"
    }, {
        internalType: "address",
        name: "_tokenY",
        type: "address"
    }, {
        internalType: "uint24",
        name: "_fee",
        type: "uint24"
    }, {
        internalType: "int24",
        name: "currentPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "_pointDelta",
        type: "int24"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }],
    name: "AddLimitOrder",
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
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Burn",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }],
    name: "DecLimitOrder",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paidX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "paidY",
        type: "uint256"
    }],
    name: "Flash",
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
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        indexed: !0,
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }, {
        indexed: !1,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Mint",
    type: "event"
}, {
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
        internalType: "bool",
        name: "sellXEarnY",
        type: "bool"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountX",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }],
    name: "Swap",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "amountX",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "addLimOrderWithX",
    outputs: [{
        internalType: "uint128",
        name: "orderX",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "acquireY",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "amountY",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "addLimOrderWithY",
    outputs: [{
        internalType: "uint128",
        name: "orderY",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "acquireX",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "assignX",
        type: "uint128"
    }],
    name: "assignLimOrderEarnX",
    outputs: [{
        internalType: "uint128",
        name: "actualAssignX",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "assignY",
        type: "uint128"
    }],
    name: "assignLimOrderEarnY",
    outputs: [{
        internalType: "uint128",
        name: "actualAssignY",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidDelta",
        type: "uint128"
    }],
    name: "burn",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint256",
        name: "amountXLim",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountYLim",
        type: "uint256"
    }],
    name: "collect",
    outputs: [{
        internalType: "uint256",
        name: "actualAmountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "actualAmountY",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "collectFeeCharged",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "collectDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "collectEarn",
        type: "uint128"
    }, {
        internalType: "bool",
        name: "isEarnY",
        type: "bool"
    }],
    name: "collectLimOrder",
    outputs: [{
        internalType: "uint128",
        name: "actualCollectDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "actualCollectEarn",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "deltaX",
        type: "uint128"
    }],
    name: "decLimOrderWithX",
    outputs: [{
        internalType: "uint128",
        name: "actualDeltaX",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "point",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "deltaY",
        type: "uint128"
    }],
    name: "decLimOrderWithY",
    outputs: [{
        internalType: "uint128",
        name: "actualDeltaY",
        type: "uint128"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint16",
        name: "newNextQueueLen",
        type: "uint16"
    }],
    name: "expandObservationQueue",
    outputs: [],
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
    inputs: [],
    name: "fee",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeChargePercent",
    outputs: [{
        internalType: "uint24",
        name: "",
        type: "uint24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeScaleX_128",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "feeScaleY_128",
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
        name: "amountX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "amountY",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "leftMostPt",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    name: "limitOrderData",
    outputs: [{
        internalType: "uint128",
        name: "sellingX",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnY",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "accEarnY",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "sellingY",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnX",
        type: "uint128"
    }, {
        internalType: "uint256",
        name: "accEarnX",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }],
    name: "limitOrderSnapshot",
    outputs: [{
        components: [{
            internalType: "uint128",
            name: "sellingX",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "earnY",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "accEarnY",
            type: "uint256"
        }, {
            internalType: "uint128",
            name: "sellingY",
            type: "uint128"
        }, {
            internalType: "uint128",
            name: "earnX",
            type: "uint128"
        }, {
            internalType: "uint256",
            name: "accEarnX",
            type: "uint256"
        }],
        internalType: "struct IiZiSwapPool.LimitOrderStruct[]",
        name: "limitOrders",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "liquidity",
    outputs: [{
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
        name: "tokenOwedX",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "tokenOwedY",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "leftPoint",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPoint",
        type: "int24"
    }],
    name: "liquiditySnapshot",
    outputs: [{
        internalType: "int128[]",
        name: "deltaLiquidities",
        type: "int128[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxLiquidPt",
    outputs: [{
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "int24",
        name: "leftPt",
        type: "int24"
    }, {
        internalType: "int24",
        name: "rightPt",
        type: "int24"
    }, {
        internalType: "uint128",
        name: "liquidDelta",
        type: "uint128"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "mint",
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
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "observations",
    outputs: [{
        internalType: "uint32",
        name: "timestamp",
        type: "uint32"
    }, {
        internalType: "int56",
        name: "accPoint",
        type: "int56"
    }, {
        internalType: "bool",
        name: "init",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]"
    }],
    name: "observe",
    outputs: [{
        internalType: "int56[]",
        name: "accPoints",
        type: "int56[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    name: "orderOrEndpoint",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int16",
        name: "",
        type: "int16"
    }],
    name: "pointBitmap",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "pointDelta",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    name: "points",
    outputs: [{
        internalType: "uint128",
        name: "liquidSum",
        type: "uint128"
    }, {
        internalType: "int128",
        name: "liquidDelta",
        type: "int128"
    }, {
        internalType: "uint256",
        name: "accFeeXOut_128",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "accFeeYOut_128",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "isEndpt",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "rightMostPt",
    outputs: [{
        internalType: "int24",
        name: "",
        type: "int24"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "sqrtRate_96",
    outputs: [{
        internalType: "uint160",
        name: "",
        type: "uint160"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "state",
    outputs: [{
        internalType: "uint160",
        name: "sqrtPrice_96",
        type: "uint160"
    }, {
        internalType: "int24",
        name: "currentPoint",
        type: "int24"
    }, {
        internalType: "uint16",
        name: "observationCurrentIndex",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationQueueLen",
        type: "uint16"
    }, {
        internalType: "uint16",
        name: "observationNextQueueLen",
        type: "uint16"
    }, {
        internalType: "bool",
        name: "locked",
        type: "bool"
    }, {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "liquidityX",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "lowPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapX2Y",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "desireY",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "lowPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapX2YDesireY",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "highPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapY2X",
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
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint128",
        name: "desireX",
        type: "uint128"
    }, {
        internalType: "int24",
        name: "highPt",
        type: "int24"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "swapY2XDesireX",
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
    name: "tokenX",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "tokenY",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalFeeXCharged",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalFeeYCharged",
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
    name: "userEarnX",
    outputs: [{
        internalType: "uint256",
        name: "lastAccEarn",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "sellingRemain",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "sellingDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnAssign",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "userEarnY",
    outputs: [{
        internalType: "uint256",
        name: "lastAccEarn",
        type: "uint256"
    }, {
        internalType: "uint128",
        name: "sellingRemain",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "sellingDec",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earn",
        type: "uint128"
    }, {
        internalType: "uint128",
        name: "earnAssign",
        type: "uint128"
    }],
    stateMutability: "view",
    type: "function"
}];
var Et = {}
  , oa = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n._calciZiLiquidityAmountX = n._calciZiLiquidityAmountY = n._getAmountXNoRound = n._getAmountYNoRound = n._liquidity2AmountXAtPoint = n._getAmountX = n._liquidity2AmountYAtPoint = n._getAmountY = void 0;
    const e = $t
      , t = (y, u, b, _, C) => {
        const M = b - u
          , E = _ - 1;
        return C ? new e.BigNumber(y.times(M).div(E).toFixed(0, 2)) : new e.BigNumber(y.times(M).div(E).toFixed(0, 3))
    }
    ;
    n._getAmountY = t;
    const a = (y, u, b) => {
        const _ = y.times(u);
        return b ? new e.BigNumber(_.toFixed(0, 2)) : new e.BigNumber(_.toFixed(0, 3))
    }
    ;
    n._liquidity2AmountYAtPoint = a;
    const i = (y, u, b, _, C, M) => {
        const E = Math.pow(C, b - u + 1)
          , v = Math.pow(C, b + 1)
          , x = E - C
          , B = v - _;
        return M ? new e.BigNumber(y.times(x).div(B).toFixed(0, 2)) : new e.BigNumber(y.times(x).div(B).toFixed(0, 3))
    }
    ;
    n._getAmountX = i;
    const r = (y, u, b) => {
        const _ = y.div(u);
        return b ? new e.BigNumber(_.toFixed(0, 2)) : new e.BigNumber(_.toFixed(0, 3))
    }
    ;
    n._liquidity2AmountXAtPoint = r;
    const s = (y, u, b, _) => {
        const C = b - u
          , M = _ - 1;
        return y.times(C).div(M)
    }
    ;
    n._getAmountYNoRound = s;
    const c = (y, u, b, _, C) => {
        const M = Math.pow(C, b - u + 1)
          , E = Math.pow(C, b + 1)
          , v = M - C
          , x = E - _;
        return y.times(v).div(x)
    }
    ;
    n._getAmountXNoRound = c;
    const o = (y, u, b, _) => {
        if (u > _)
            return new e.BigNumber(0);
        if (b <= _)
            return new e.BigNumber(0);
        const C = Math.sqrt(1.0001)
          , M = Math.pow(C, b)
          , E = (0,
        n._getAmountXNoRound)(new e.BigNumber(1), _ + 1, b, M, C)
          , v = y.div(E)
          , x = Math.pow(C, u)
          , B = Math.pow(C, _ + 1);
        return (0,
        n._getAmountY)(v, x, B, C, !0)
    }
    ;
    n._calciZiLiquidityAmountY = o;
    const p = (y, u, b, _) => {
        if (b <= _)
            return new e.BigNumber(0);
        if (u > _)
            return new e.BigNumber(0);
        const C = Math.sqrt(1.0001)
          , M = Math.pow(C, u)
          , E = Math.pow(C, _ + 1)
          , v = (0,
        n._getAmountYNoRound)(new e.BigNumber(1), M, E, C)
          , x = y.div(v)
          , B = Math.pow(C, b);
        return (0,
        n._getAmountX)(x, _ + 1, b, B, C, !0)
    }
    ;
    n._calciZiLiquidityAmountX = p
}
)(oa);
var ca = {}
  , vn = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.buildSendingParams = n.CHAIN_EIP1559_SET = n.PriceRoundingType = n.PointRoundingType = n.getChain = n.initialChainTable = n.ChainId = void 0;
    var e;
    (function(s) {
        s[s.None = -1] = "None",
        s[s.EthereumMainnet = 1] = "EthereumMainnet",
        s[s.Optimism = 10] = "Optimism",
        s[s.ZkSyncEra = 324] = "ZkSyncEra",
        s[s.BSC = 56] = "BSC",
        s[s.ETC = 61] = "ETC",
        s[s.Aurora = 1313161554] = "Aurora",
        s[s.Matic = 137] = "Matic",
        s[s.Arbitrum = 42161] = "Arbitrum",
        s[s.Cronos = 25] = "Cronos",
        s[s.Icplaza = 142857] = "Icplaza",
        s[s.ConfluxESpace = 1030] = "ConfluxESpace",
        s[s.Meter = 82] = "Meter",
        s[s.Telos = 40] = "Telos",
        s[s.Ontology = 58] = "Ontology",
        s[s.Ultron = 1231] = "Ultron",
        s[s.Mantle = 5e3] = "Mantle",
        s[s.Base = 8453] = "Base",
        s[s.Linea = 59144] = "Linea",
        s[s.Loot = 5151706] = "Loot",
        s[s.OpBNB = 204] = "OpBNB",
        s[s.Kroma = 255] = "Kroma",
        s[s.Manta = 169] = "Manta",
        s[s.Scroll = 534352] = "Scroll",
        s[s.ZKFair = 42766] = "ZKFair",
        s[s.Zeta = 7e3] = "Zeta",
        s[s.Merlin = 4200] = "Merlin",
        s[s.Blast = 81457] = "Blast",
        s[s.ZklinkNova = 810180] = "ZklinkNova",
        s[s.Mode = 34443] = "Mode",
        s[s.XLayer = 196] = "XLayer",
        s[s.BOB = 60808] = "BOB",
        s[s.Cyber = 7560] = "Cyber",
        s[s.Taiko = 167e3] = "Taiko",
        s[s.Klaytn = 8217] = "Klaytn",
        s[s.Kava = 2222] = "Kava",
        s[s.Core = 1116] = "Core",
        s[s.RootStock = 30] = "RootStock",
        s[s.MAP = 22776] = "MAP",
        s[s.NEON = 245022934] = "NEON",
        s[s.Rinkeby = 4] = "Rinkeby",
        s[s.Goerli = 5] = "Goerli",
        s[s.BSCTestnet = 97] = "BSCTestnet",
        s[s.OntologyTestnet = 5851] = "OntologyTestnet",
        s[s.MaticTestnet = 80001] = "MaticTestnet",
        s[s.AuroraTestnet = 1313161555] = "AuroraTestnet",
        s[s.ZkSyncAlphaTest = 280] = "ZkSyncAlphaTest",
        s[s.MantleTest = 5001] = "MantleTest",
        s[s.ScrollTestL2 = 534351] = "ScrollTestL2",
        s[s.LineaTest = 59140] = "LineaTest",
        s[s.OpsideTestRollux = 12008] = "OpsideTestRollux",
        s[s.MantaTest = 3441005] = "MantaTest",
        s[s.StagingFastActiveBellatrix = 1351057110] = "StagingFastActiveBellatrix",
        s[s.KromaSepoliaTest = 2358] = "KromaSepoliaTest",
        s[s.GasZeroGoerliL2 = 12021] = "GasZeroGoerliL2",
        s[s.ZetaTest = 7001] = "ZetaTest",
        s[s.ZKFairTest = 43851] = "ZKFairTest",
        s[s.X1Test = 195] = "X1Test",
        s[s.MumbaiTest = 80001] = "MumbaiTest",
        s[s.TaikoKatlaL2Test = 167008] = "TaikoKatlaL2Test",
        s[s.MorphTest = 2710] = "MorphTest",
        s[s.BeraTest = 80085] = "BeraTest",
        s[s.MerlinTest = 686868] = "MerlinTest",
        s[s.BlastSepoliaTest = 168587773] = "BlastSepoliaTest",
        s[s.ZklinkNovaTest = 810182] = "ZklinkNovaTest",
        s[s.ModeSepoliaTest = 919] = "ModeSepoliaTest"
    }
    )(e = n.ChainId || (n.ChainId = {}));
    const t = [{
        id: e.EthereumMainnet,
        name: "Ethereum",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            decimal: 18
        },
        scanUrl: "https://etherscan.io/",
        scanName: "EtherScan",
        vmType: "EVM",
        rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.BSC,
        name: "BNB-Chain",
        tokenSymbol: "BNB",
        token: {
            symbol: "BNB",
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            decimal: 18
        },
        wrappedTokenSymbol: "WBNB",
        wrappedToken: {
            symbol: "WBNB",
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            decimal: 18
        },
        scanUrl: "https://bscscan.com/",
        scanName: "BscScan",
        vmType: "EVM",
        rpcUrl: "https://bsc-dataseed.binance.org",
        blockDelta: 3,
        blockDeltaU: 3
    }, {
        id: e.Aurora,
        name: "Aurora Chain",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
            decimal: 18
        },
        scanUrl: "https://aurorascan.dev/",
        scanName: "AuroraScan",
        vmType: "EVM",
        rpcUrl: "https://mainnet.aurora.dev",
        blockDelta: 1.5,
        blockDeltaU: 1.5
    }, {
        id: e.Arbitrum,
        name: "Arbitrum",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            decimal: 18
        },
        scanUrl: "https://arbiscan.io/",
        scanName: "ArbiScan",
        vmType: "EVM",
        rpcUrl: "https://arb1.arbitrum.io/rpc",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Matic,
        name: "Polygon",
        tokenSymbol: "Matic",
        token: {
            symbol: "MATIC",
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            decimal: 18
        },
        wrappedTokenSymbol: "WMATIC",
        wrappedToken: {
            symbol: "WMATIC",
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            decimal: 18
        },
        scanUrl: "https://polygonscan.com/",
        scanName: "PologonScan",
        vmType: "EVM",
        rpcUrl: "https://polygon-rpc.com/",
        blockDelta: 2,
        blockDeltaU: 2.2
    }, {
        id: e.Cronos,
        name: "Cronos",
        tokenSymbol: "CRO",
        token: {
            symbol: "CRO",
            address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
            decimal: 18
        },
        wrappedTokenSymbol: "WCRO",
        wrappedToken: {
            symbol: "WCRO",
            address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
            decimal: 18
        },
        scanUrl: "https://cronoscan.com/",
        scanName: "CronosScan",
        vmType: "EVM",
        rpcUrl: "https://node.croswap.com/rpc",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Optimism,
        name: "Optimism",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        scanUrl: "https://optimistic.etherscan.io/",
        scanName: "OptimismScan",
        vmType: "EVM",
        rpcUrl: "https://mainnet.optimism.io"
    }, {
        id: e.ETC,
        name: "Ethereum Classic",
        tokenSymbol: "ETC",
        token: {
            symbol: "ETC",
            address: "0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a",
            decimal: 18
        },
        wrappedTokenSymbol: "WETC",
        wrappedToken: {
            symbol: "WETC",
            address: "0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a",
            decimal: 18
        },
        scanUrl: "https://blockscout.com/etc/mainnet/",
        scanName: "EthereumClassicScan",
        vmType: "EVM",
        rpcUrl: "https://www.ethercluster.com/etc",
        blockDelta: 12.5,
        blockDeltaU: 14
    }, {
        id: e.BSCTestnet,
        name: "BSC Testnet",
        tokenSymbol: "BNB",
        token: {
            symbol: "BNB",
            address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
            decimal: 18
        },
        wrappedTokenSymbol: "WBNB",
        wrappedToken: {
            symbol: "WBNB",
            address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
            decimal: 18
        },
        scanUrl: "https://testnet.bscscan.com/",
        scanName: "TestnetBscScan",
        vmType: "EVM",
        rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        blockDelta: 3,
        blockDeltaU: 3
    }, {
        id: e.AuroraTestnet,
        name: "Aurora Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        scanUrl: "https://testnet.aurorascan.dev/",
        scanName: "TestnetAuroraScan",
        vmType: "EVM",
        rpcUrl: "https://testnet.aurora.dev",
        blockDelta: 1.5,
        blockDeltaU: 1.5
    }, {
        id: e.Rinkeby,
        name: "Rinkeby",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            decimal: 18
        },
        scanUrl: "https://rinkeby.etherscan.io/",
        scanName: "EtherScan",
        vmType: "EVM",
        rpcUrl: "https://rinkeby.infura.io/v3/",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.ZkSyncAlphaTest,
        name: "ZkSync Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x8C3e3f2983DB650727F3e05B7a7773e4D641537B",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x8C3e3f2983DB650727F3e05B7a7773e4D641537B",
            decimal: 18
        },
        scanUrl: "https://zksync2-testnet.zkscan.io/",
        scanName: "zkSync scan",
        vmType: "ZKVM",
        rpcUrl: "https://zksync2-testnet.zksync.dev",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.ZkSyncEra,
        name: "zkSync Era",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
            decimal: 18
        },
        scanUrl: "https://explorer.zksync.io/",
        scanName: "zkSync scan",
        vmType: "ZKVM",
        rpcUrl: "https://zksync2-mainnet.zksync.io",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.OntologyTestnet,
        name: "Ontology Testnet",
        tokenSymbol: "ONG",
        token: {
            symbol: "ONG",
            address: "0xe8cf015f797877a9a23e80447429c0b0f04e114b",
            decimal: 18
        },
        wrappedTokenSymbol: "WONG",
        wrappedToken: {
            symbol: "WONG",
            address: "0xe8cf015f797877a9a23e80447429c0b0f04e114b",
            decimal: 18
        },
        scanUrl: "https://explorer.ont.io/testnet",
        scanName: "ontology test scan",
        vmType: "EVM",
        rpcUrl: "https://polaris1.ont.io:10339",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Ontology,
        name: "Ontology",
        tokenSymbol: "ONG",
        token: {
            symbol: "ONG",
            address: "0xd8bc24cfd45452ef2c8bc7618e32330b61f2691b",
            decimal: 18
        },
        wrappedTokenSymbol: "WONG",
        wrappedToken: {
            symbol: "WONG",
            address: "0xd8bc24cfd45452ef2c8bc7618e32330b61f2691b",
            decimal: 18
        },
        scanUrl: "https://explorer.ont.io/",
        scanName: "ontology test scan",
        vmType: "EVM",
        rpcUrl: "https://dappnode1.ont.io:10339",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.MantleTest,
        name: "Mantle Testnet",
        tokenSymbol: "MNT",
        token: {
            symbol: "MNT",
            address: "0x6e1723460D190B4A092a2c13BA42BcC57d71870b",
            decimal: 18
        },
        wrappedTokenSymbol: "WMNT",
        wrappedToken: {
            symbol: "WMNT",
            address: "0x6e1723460D190B4A092a2c13BA42BcC57d71870b",
            decimal: 18
        },
        scanUrl: "https://explorer.testnet.mantle.xyz",
        scanName: "mantle test scan",
        vmType: "EVM",
        rpcUrl: "https://rpc.testnet.mantle.xyz",
        blockDelta: 1,
        blockDeltaU: 1
    }, {
        id: e.Mantle,
        name: "Mantle",
        tokenSymbol: "MNT",
        token: {
            symbol: "MNT",
            address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
            decimal: 18
        },
        wrappedTokenSymbol: "WMNT",
        wrappedToken: {
            symbol: "WMNT",
            address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
            decimal: 18
        },
        scanUrl: "https://explorer.mantle.xyz/",
        scanName: "mantle test scan",
        vmType: "EVM",
        rpcUrl: "https://rpc.mantle.xyz",
        blockDelta: 1,
        blockDeltaU: 1
    }, {
        id: e.ScrollTestL2,
        name: "Scroll Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xa1EA0B2354F5A344110af2b6AD68e75545009a03",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xa1EA0B2354F5A344110af2b6AD68e75545009a03",
            decimal: 18
        },
        scanUrl: "https://sepolia-blockscout.scroll.io/",
        scanName: "scroll sepolia test scan",
        vmType: "EVM",
        rpcUrl: "https://sepolia-rpc.scroll.io/",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Scroll,
        name: "Scroll Mainnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x5300000000000000000000000000000000000004",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x5300000000000000000000000000000000000004",
            decimal: 18
        },
        scanUrl: "https://blockscout.scroll.io",
        scanName: "scroll scan",
        vmType: "EVM",
        rpcUrl: "https://rpc.scroll.io",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Icplaza,
        name: "Icplaza",
        tokenSymbol: "ICT",
        token: {
            symbol: "ICT",
            address: "0xc59d478873d11CCc68F9c63571E821a253c5B605",
            decimal: 18
        },
        wrappedTokenSymbol: "WICT",
        wrappedToken: {
            symbol: "WICT",
            address: "0xc59d478873d11CCc68F9c63571E821a253c5B605",
            decimal: 18
        },
        scanUrl: "https://browsemainnet.ic-plaza.org/index/",
        scanName: "icplaza scan",
        vmType: "EVM",
        rpcUrl: "https://rpcmainnet.ic-plaza.org/",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.ConfluxESpace,
        name: "Conflux",
        tokenSymbol: "CFX",
        token: {
            symbol: "CFX",
            address: "0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b",
            decimal: 18
        },
        wrappedTokenSymbol: "WCFX",
        wrappedToken: {
            symbol: "WCFX",
            address: "0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b",
            decimal: 18
        },
        scanUrl: "https://evm.confluxscan.net",
        scanName: "conflux espace scan",
        vmType: "EVM",
        rpcUrl: "https://evm.confluxrpc.com",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Meter,
        name: "Meter",
        tokenSymbol: "MTR",
        token: {
            symbol: "MTR",
            address: "0x160361ce13ec33C993b5cCA8f62B6864943eb083",
            decimal: 18
        },
        wrappedTokenSymbol: "WMTR",
        wrappedToken: {
            symbol: "WMTR",
            address: "0x160361ce13ec33C993b5cCA8f62B6864943eb083",
            decimal: 18
        },
        scanUrl: "https://scan.meter.io",
        scanName: "meter scan",
        vmType: "EVM",
        rpcUrl: "https://pokt.network",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Telos,
        name: "Telos",
        tokenSymbol: "TLOS",
        token: {
            symbol: "TLOS",
            address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
            decimal: 18
        },
        wrappedTokenSymbol: "WTLOS",
        wrappedToken: {
            symbol: "WTLOS",
            address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
            decimal: 18
        },
        scanUrl: "https://www.teloscan.io/",
        scanName: "telo scan",
        vmType: "EVM",
        rpcUrl: "https://mainnet.telos.net/evm",
        blockDelta: 12,
        blockDeltaU: 12
    }, {
        id: e.Goerli,
        name: "Goerli",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
            decimal: 18
        },
        scanUrl: "https://goerli.etherscan.io/",
        scanName: "goerliScan",
        vmType: "EVM",
        rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        blockDelta: 14,
        blockDeltaU: 14
    }, {
        id: e.MaticTestnet,
        name: "Polygon Mumbai Testnet",
        tokenSymbol: "Matic",
        token: {
            symbol: "Matic",
            address: "0x9c3c9283d3e44854697cd22d3faa240cfb032889",
            decimal: 18
        },
        wrappedTokenSymbol: "WMatic",
        wrappedToken: {
            symbol: "WMatic",
            address: "0x9c3c9283d3e44854697cd22d3faa240cfb032889",
            decimal: 18
        },
        scanUrl: "https://mumbai.polygonscan.com/",
        scanName: "PolygonMumbaiScan",
        vmType: "EVM",
        rpcUrl: "https://rpc-mumbai.maticvigil.com"
    }, {
        id: e.Ultron,
        name: "Ultron",
        tokenSymbol: "ULX",
        token: {
            symbol: "ULX",
            address: "0xb1183357745D3fD7d291E42a2c4B478cdB5710c6",
            decimal: 18
        },
        wrappedTokenSymbol: "wULX",
        wrappedToken: {
            symbol: "wULX",
            address: "0xb1183357745D3fD7d291E42a2c4B478cdB5710c6",
            decimal: 18
        },
        scanUrl: "https://ulxscan.com",
        scanName: "UltronScan",
        vmType: "EVM",
        rpcUrl: "https://ultron-rpc.net"
    }, {
        id: e.OpsideTestRollux,
        name: "Opside Public zkEVM Testnet",
        tokenSymbol: "IDE",
        token: {
            symbol: "IDE",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        wrappedTokenSymbol: "WIDE",
        wrappedToken: {
            symbol: "WIDE",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        scanUrl: "https://public.zkevm.opside.info",
        scanName: "Opside Rollux Testnet Explorer",
        vmType: "zkEVM",
        rpcUrl: "https://pre-alpha-zkrollup-rpc.opside.network/public"
    }, {
        id: e.Base,
        name: "Base",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        scanUrl: "https://basescan.org/",
        scanName: "base scan",
        vmType: "EVM",
        rpcUrl: "https://developer-access-mainnet.base.org"
    }, {
        id: e.LineaTest,
        name: "Linea Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        scanUrl: "https://explorer.goerli.linea.build/",
        scanName: "Linea Testnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.goerli.linea.build/"
    }, {
        id: e.Linea,
        name: "Linea",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
            decimal: 18
        },
        scanUrl: "https://lineascan.build/",
        scanName: "Linea Explorer",
        vmType: "EVM",
        rpcUrl: "https://mainnet.infura.io/v3/"
    }, {
        id: e.Loot,
        name: "Lootchain",
        tokenSymbol: "AGLD",
        token: {
            symbol: "AGLD",
            address: "0x7a524c7e82874226F0b51aade60A1BE4D430Cf0F",
            decimal: 18
        },
        wrappedTokenSymbol: "WAGLD",
        wrappedToken: {
            symbol: "WAGLD",
            address: "0x7a524c7e82874226F0b51aade60A1BE4D430Cf0F",
            decimal: 18
        },
        scanUrl: "https://explorer.lootchain.com/",
        scanName: "Loot Mainnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.lootchain.com/http"
    }, {
        id: e.StagingFastActiveBellatrix,
        name: "Skale Testnet",
        tokenSymbol: "sFUEL",
        token: {
            symbol: "sFUEL",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        wrappedTokenSymbol: "wsFUEL",
        wrappedToken: {
            symbol: "wsFUEL",
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
            decimal: 18
        },
        scanUrl: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com/",
        scanName: "staging-fast-active-bellatrix scan",
        vmType: "EVM",
        rpcUrl: "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix/"
    }, {
        id: e.KromaSepoliaTest,
        name: "Kroma Sepolia Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x4200000000000000000000000000000000000001",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x4200000000000000000000000000000000000001",
            decimal: 18
        },
        scanUrl: "https://blockscout.sepolia.kroma.network/",
        scanName: "Kroma Sepolia Testnet Blockscout",
        vmType: "EVM",
        rpcUrl: "https://api.sepolia.kroma.network/"
    }, {
        id: e.Kroma,
        name: "Kroma",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x4200000000000000000000000000000000000001",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x4200000000000000000000000000000000000001",
            decimal: 18
        },
        scanUrl: "https://blockscout.kroma.network/",
        scanName: "Kroma Mainnet Blockscout",
        vmType: "EVM",
        rpcUrl: "https://api.kroma.network/"
    }, {
        id: e.Manta,
        name: "Manta Pacific",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
            decimal: 18
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            address: "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
            decimal: 18
        },
        scanUrl: "https://manta-pacific.calderaexplorer.xyz/",
        scanName: "manta scan",
        vmType: "EVM",
        rpcUrl: "https://manta-pacific.calderachain.xyz/http"
    }, {
        id: e.OpBNB,
        name: "OpBNB",
        tokenSymbol: "BNB",
        token: {
            symbol: "BNB",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        wrappedTokenSymbol: "WBNB",
        wrappedToken: {
            symbol: "WBNB",
            address: "0x4200000000000000000000000000000000000006",
            decimal: 18
        },
        scanUrl: "https://mainnet.opbnbscan.com/",
        scanName: "OpBNB Mainnet scan",
        vmType: "EVM",
        rpcUrl: "https://opbnb-mainnet-rpc.bnbchain.org/"
    }, {
        id: e.GasZeroGoerliL2,
        name: "GasZeroGoerliL2",
        tokenSymbol: "GAS0",
        token: {
            symbol: "GAS0",
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08",
            decimal: 18
        },
        wrappedTokenSymbol: "WGAS0",
        wrappedToken: {
            symbol: "GAS0",
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08",
            decimal: 18
        },
        scanUrl: "https://scangoerlitest.gaszero.com/",
        scanName: "GasZero GoerliL2 scan",
        vmType: "EVM",
        rpcUrl: "https://goerlitest.gaszero.com/"
    }, {
        id: e.ZetaTest,
        name: "Zeta Testnet",
        tokenSymbol: "aZETA",
        token: {
            symbol: "aZETA",
            address: "0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf",
            decimal: 18
        },
        wrappedTokenSymbol: "WZETA",
        wrappedToken: {
            symbol: "WZETA",
            address: "0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf",
            decimal: 18
        },
        scanUrl: "https://zetachain-athens-3.blockscout.com/",
        scanName: "zeta testnet scan",
        vmType: "EVM",
        rpcUrl: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public/"
    }, {
        id: e.Zeta,
        name: "Zeta Mainnet",
        tokenSymbol: "ZETA",
        token: {
            symbol: "ZETA",
            decimal: 18,
            address: "0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf"
        },
        wrappedTokenSymbol: "WZETA",
        wrappedToken: {
            symbol: "WZETA",
            decimal: 18,
            address: "0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf"
        },
        scanUrl: "https://zetachain.blockscout.com/",
        scanName: "zeta blockscout",
        vmType: "EVM",
        rpcUrl: "https://zetachain-evm.blockpi.network/v1/rpc/public/"
    }, {
        id: e.X1Test,
        name: "X1 Testnet",
        tokenSymbol: "OKB",
        token: {
            symbol: "OKB",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        wrappedTokenSymbol: "WOKB",
        wrappedToken: {
            symbol: "WOKB",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        scanUrl: "https://www.oklink.com/x1-test/",
        scanName: "x1 testnet",
        vmType: "EVM",
        rpcUrl: "https://testrpc.x1.tech/"
    }, {
        id: e.ZKFairTest,
        name: "zkfair Testnet",
        tokenSymbol: "USDC",
        token: {
            symbol: "USDC",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        wrappedTokenSymbol: "WUSDC",
        wrappedToken: {
            symbol: "WUSDC",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        scanUrl: "https://testnet-scan.zkfair.io",
        scanName: "zkfair testnet",
        vmType: "EVM",
        rpcUrl: "https://testnet-rpc.zkfair.io/"
    }, {
        id: e.ZKFair,
        name: "ZKFair",
        tokenSymbol: "USDC",
        token: {
            symbol: "USDC",
            decimal: 18,
            address: "0xD33Db7EC50A98164cC865dfaa64666906d79319C"
        },
        wrappedTokenSymbol: "WUSDC",
        wrappedToken: {
            symbol: "WUSDC",
            decimal: 18,
            address: "0xD33Db7EC50A98164cC865dfaa64666906d79319C"
        },
        scanUrl: "https://scan.zkfair.io",
        scanName: "ZKFair mainnet explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.zkfair.io"
    }, {
        id: e.MumbaiTest,
        name: "MumbaiTest",
        tokenSymbol: "MATIC",
        token: {
            symbol: "MATIC",
            decimal: 18,
            address: "0x9c3c9283d3e44854697cd22d3faa240cfb032889"
        },
        wrappedTokenSymbol: "WMATIC",
        wrappedToken: {
            symbol: "WMATIC",
            decimal: 18,
            address: "0x9c3c9283d3e44854697cd22d3faa240cfb032889"
        },
        scanUrl: "https://mumbai.polygonscan.com/",
        scanName: "Mumbai testnet scan",
        vmType: "EVM",
        rpcUrl: "https://rpc-mumbai.maticvigil.com"
    }, {
        id: e.TaikoKatlaL2Test,
        name: "Taiko Katla L2 testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08"
        },
        scanUrl: "https://explorer.katla.taiko.xyz/",
        scanName: "taiko katla test l2 explore",
        vmType: "EVM",
        rpcUrl: "https://rpc.katla.taiko.xyz"
    }, {
        id: e.Taiko,
        name: "Taiko",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0xA51894664A773981C6C112C43ce576f315d5b1B6"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0xA51894664A773981C6C112C43ce576f315d5b1B6"
        },
        scanUrl: "https://taikoscan.network",
        scanName: "taiko scan",
        vmType: "EVM",
        rpcUrl: "https://rpc.mainnet.taiko.xyz"
    }, {
        id: e.MorphTest,
        name: "Morph testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0xC6C7c2edF70A3245ad6051E93809162B9758ce08"
        },
        scanUrl: "https://explorer-testnet.morphl2.io/",
        scanName: "morph testnet explore",
        vmType: "EVM",
        rpcUrl: "https://rpc-testnet.morphl2.io"
    }, {
        id: e.BeraTest,
        name: "Bera testnet",
        tokenSymbol: "BERA",
        token: {
            symbol: "BERA",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        wrappedTokenSymbol: "WBERA",
        wrappedToken: {
            symbol: "WBERA",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        scanUrl: "https://artio.beratrail.io/",
        scanName: "bera testnet explore",
        vmType: "EVM",
        rpcUrl: "https://artio.rpc.berachain.com/"
    }, {
        id: e.Merlin,
        name: "Merlin",
        tokenSymbol: "BTC",
        token: {
            symbol: "BTC",
            decimal: 18,
            address: "0xF6D226f9Dc15d9bB51182815b320D3fBE324e1bA"
        },
        wrappedTokenSymbol: "WBTC",
        wrappedToken: {
            symbol: "WBTC",
            decimal: 18,
            address: "0xF6D226f9Dc15d9bB51182815b320D3fBE324e1bA"
        },
        scanUrl: "https://scan.merlinchain.io/",
        scanName: "merlin explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.merlinchain.io/"
    }, {
        id: e.MerlinTest,
        name: "Merlin Testnet",
        tokenSymbol: "BTC",
        token: {
            symbol: "BTC",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        wrappedTokenSymbol: "WBTC",
        wrappedToken: {
            symbol: "WBTC",
            decimal: 18,
            address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF"
        },
        scanUrl: "https://testnet-scan.merlinchain.io/",
        scanName: "merlin testnet explorer",
        vmType: "EVM",
        rpcUrl: "https://testnet-rpc.merlinchain.io"
    }, {
        id: e.BlastSepoliaTest,
        name: "Blast Sepolia Test",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000023"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000023"
        },
        scanUrl: "https://testnet.blastscan.io",
        scanName: "blast sepolia testnet scan",
        vmType: "EVM",
        rpcUrl: "https://sepolia.blast.io"
    }, {
        id: e.Blast,
        name: "Blast",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4300000000000000000000000000000000000004"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4300000000000000000000000000000000000004"
        },
        scanUrl: "https://blastscan.io",
        scanName: "blast scan",
        vmType: "EVM",
        rpcUrl: "https://blast.blockpi.network/v1/rpc/public"
    }, {
        id: e.Blast,
        name: "Blast",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4300000000000000000000000000000000000004"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4300000000000000000000000000000000000004"
        },
        scanUrl: "https://blastscan.io",
        scanName: "Blast scan",
        vmType: "EVM",
        rpcUrl: "https://blast.blockpi.network/v1/rpc/public"
    }, {
        id: e.ZklinkNova,
        name: "zkLink Nova",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169"
        },
        scanUrl: "https://explorer.zklink.io",
        scanName: "Zklink Nova mainnet explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.zklink.io"
    }, {
        id: e.Mode,
        name: "Mode",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        scanUrl: "https://explorer.mode.network/",
        scanName: "Mode Mainnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://mainnet.mode.network/"
    }, {
        id: e.XLayer,
        name: "X Layer",
        tokenSymbol: "OKB",
        token: {
            symbol: "OKB",
            decimal: 18,
            address: "0xe538905cf8410324e03a5a23c1c177a474d59b2b"
        },
        wrappedTokenSymbol: "WOKB",
        wrappedToken: {
            symbol: "WOKB",
            decimal: 18,
            address: "0xe538905cf8410324e03a5a23c1c177a474d59b2b"
        },
        scanUrl: "https://www.okx.com/explorer/xlayer/",
        scanName: "XLayer Mainnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://xlayerrpc.okx.com/"
    }, {
        id: e.ZklinkNovaTest,
        name: "Zklink Nova testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0xAec84500e96F90370C55657d08f375A8d05F4D8c"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0xAec84500e96F90370C55657d08f375A8d05F4D8c"
        },
        scanUrl: "https://goerli.explorer.zklink.io",
        scanName: "Zklink Nova testnet scan",
        vmType: "EVM",
        rpcUrl: "https://goerli.rpc.zklink.io"
    }, {
        id: e.ModeSepoliaTest,
        name: "Mode Sepolia Testnet",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0xeb72756ee12309Eae82a0deb9787e69f5b62949c"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0xeb72756ee12309Eae82a0deb9787e69f5b62949c"
        },
        scanUrl: "https://sepolia.explorer.mode.network/",
        scanName: "Mode Sepolia Testnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://sepolia.mode.network"
    }, {
        id: e.BOB,
        name: "BOB",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        scanUrl: "https://explorer.gobob.xyz/",
        scanName: "BOB Mainnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://rpc.gobob.xyz/"
    }, {
        id: e.Cyber,
        name: "Cyber",
        tokenSymbol: "ETH",
        token: {
            symbol: "ETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        wrappedTokenSymbol: "WETH",
        wrappedToken: {
            symbol: "WETH",
            decimal: 18,
            address: "0x4200000000000000000000000000000000000006"
        },
        scanUrl: "https://cyber-explorer.alt.technology/",
        scanName: "Cyber Chain Mainnet Explorer",
        vmType: "EVM",
        rpcUrl: "https://cyber.alt.technology/"
    }, {
        id: e.Klaytn,
        name: "Klaytn",
        tokenSymbol: "KLAY",
        token: {
            symbol: "KLAY",
            decimal: 18,
            address: "0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432"
        },
        wrappedTokenSymbol: "WKLAY",
        wrappedToken: {
            symbol: "WKLAY",
            decimal: 18,
            address: "0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432"
        },
        scanUrl: "https://klaytnscope.com/",
        scanName: "Klaytn Chain Mainnet Scope",
        vmType: "EVM",
        rpcUrl: "https://klaytn.drpc.org"
    }, {
        id: e.Kava,
        name: "Kava",
        tokenSymbol: "KAVA",
        token: {
            symbol: "KAVA",
            decimal: 18,
            address: "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b"
        },
        wrappedTokenSymbol: "WKAVA",
        wrappedToken: {
            symbol: "WKAVA",
            decimal: 18,
            address: "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b"
        },
        scanUrl: "https://www.oklink.com/zh-hans/kava/",
        scanName: "Kava Mainnet Scan",
        vmType: "EVM",
        rpcUrl: "https://evm.kava-rpc.com"
    }, {
        id: e.Core,
        name: "Core",
        tokenSymbol: "CORE",
        token: {
            symbol: "CORE",
            decimal: 18,
            address: "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f"
        },
        wrappedTokenSymbol: "WCORE",
        wrappedToken: {
            symbol: "WCORE",
            decimal: 18,
            address: "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f"
        },
        scanUrl: "https://scan.coredao.org/",
        scanName: "Core Mainnet Scan",
        vmType: "EVM",
        rpcUrl: "https://core.public.infstones.com"
    }, {
        id: e.RootStock,
        name: "RootStock",
        tokenSymbol: "RBTC",
        token: {
            symbol: "RBTC",
            decimal: 18,
            address: "0x542fda317318ebf1d3deaf76e0b632741a7e677d"
        },
        wrappedTokenSymbol: "WRBTC",
        wrappedToken: {
            symbol: "WRBTC",
            decimal: 18,
            address: "0x542fda317318ebf1d3deaf76e0b632741a7e677d"
        },
        scanUrl: "https://explorer.rootstock.io/",
        scanName: "RootStock Mainnet Explore",
        vmType: "EVM",
        rpcUrl: "https://public-node.rsk.co"
    }, {
        id: e.MAP,
        name: "MAP",
        tokenSymbol: "MAPO",
        token: {
            symbol: "MAPO",
            decimal: 18,
            address: "0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23"
        },
        wrappedTokenSymbol: "WMAP",
        wrappedToken: {
            symbol: "WMAP",
            decimal: 18,
            address: "0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23"
        },
        scanUrl: "https://maposcan.io/",
        scanName: "Map Mainnet Scan",
        vmType: "EVM",
        rpcUrl: "https://rpc.maplabs.io"
    }, {
        id: e.NEON,
        name: "NEON",
        tokenSymbol: "NEON",
        token: {
            symbol: "NEON",
            decimal: 18,
            address: "0x202c35e517fa803b537565c40f0a6965d7204609"
        },
        wrappedTokenSymbol: "WNEON",
        wrappedToken: {
            symbol: "WNEON",
            decimal: 18,
            address: "0x202c35e517fa803b537565c40f0a6965d7204609"
        },
        scanUrl: "https://neonscan.org/",
        scanName: "Neon Mainnet Scan",
        vmType: "EVM",
        rpcUrl: "https://neon-proxy-mainnet.solana.p2p.org"
    }]
      , a = (s, c, o) => (s[c.id] = t[o],
    s);
    n.initialChainTable = t.reduce(a, {});
    const i = s => n.initialChainTable[s];
    n.getChain = i,
    function(s) {
        s[s.POINT_ROUNDING_NEAREST = 0] = "POINT_ROUNDING_NEAREST",
        s[s.POINT_ROUNDING_UP = 1] = "POINT_ROUNDING_UP",
        s[s.POINT_ROUNDING_DOWN = 2] = "POINT_ROUNDING_DOWN"
    }(n.PointRoundingType || (n.PointRoundingType = {})),
    function(s) {
        s[s.PRICE_ROUNDING_NEAREST = 0] = "PRICE_ROUNDING_NEAREST",
        s[s.PRICE_ROUNDING_UP = 1] = "PRICE_ROUNDING_UP",
        s[s.PRICE_ROUNDING_DOWN = 2] = "PRICE_ROUNDING_DOWN"
    }(n.PriceRoundingType || (n.PriceRoundingType = {})),
    n.CHAIN_EIP1559_SET = new Set([e.EthereumMainnet, e.Rinkeby]);
    const r = (s, c, o) => {
        if (n.CHAIN_EIP1559_SET.has(s.id))
            return c;
        const p = Object.assign({}, c);
        return p.maxFeePerGas !== void 0 ? (p.gasPrice = p.maxFeePerGas,
        delete p.maxFeePerGas) : p.gasPrice = o,
        p.maxPriorityFeePerGas !== void 0 && delete p.maxPriorityFeePerGas,
        p
    }
    ;
    n.buildSendingParams = r
}
)(vn);
var la = {}
  , Dn = {};
const C0 = [{
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_spender",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_from",
        type: "address"
    }, {
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "_owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        name: "balance",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        name: "_to",
        type: "address"
    }, {
        name: "_value",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        name: "_owner",
        type: "address"
    }, {
        name: "_spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    payable: !0,
    stateMutability: "payable",
    type: "fallback"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}];
(function(n) {
    var e = pt && pt.__awaiter || function(v, x, B, F) {
        function Y(oe) {
            return oe instanceof B ? oe : new B(function(te) {
                te(oe)
            }
            )
        }
        return new (B || (B = Promise))(function(oe, te) {
            function De(ne) {
                try {
                    Ne(F.next(ne))
                } catch (j) {
                    te(j)
                }
            }
            function Ve(ne) {
                try {
                    Ne(F.throw(ne))
                } catch (j) {
                    te(j)
                }
            }
            function Ne(ne) {
                ne.done ? oe(ne.value) : Y(ne.value).then(De, Ve)
            }
            Ne((F = F.apply(v, x || [])).next())
        }
        )
    }
      , t = pt && pt.__importDefault || function(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }
    ;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.getWrappedGasTokenIfExists = n.getGasToken = n.isWrappedGasToken = n.isGasOrWrappedGasToken = n.isGasToken = n.getSwapTokenAddress = n.fetchToken = n.getContract = n.getErc20TokenContract = n.decimal2Amount = n.amount2Decimal = void 0;
    const a = vn
      , i = $t
      , r = t(C0)
      , s = (v, x) => Number(v.div(Math.pow(10, x.decimal)));
    n.amount2Decimal = s;
    const c = (v, x) => new i.BigNumber(v).times(Math.pow(10, x.decimal));
    n.decimal2Amount = c;
    const o = (v, x) => (0,
    n.getContract)(r.default, v, x);
    n.getErc20TokenContract = o;
    const p = (v, x, B) => new B.eth.Contract(v,x,{});
    n.getContract = p;
    const y = (v, x, B) => e(void 0, void 0, void 0, function*() {
        const F = (0,
        n.getContract)(r.default, v, B)
          , Y = Number(yield F.methods.decimals().call())
          , oe = yield F.methods.symbol().call();
        return {
            name: yield F.methods.name().call(),
            symbol: oe,
            chainId: x.id,
            decimal: Y,
            icon: "/assets/tokens/default.svg",
            custom: !0,
            address: v
        }
    });
    n.fetchToken = y;
    const u = v => {
        var x;
        return (x = v.wrapTokenAddress) !== null && x !== void 0 ? x : v.address
    }
    ;
    n.getSwapTokenAddress = u;
    const b = (v, x) => {
        var B;
        if (!v || !x)
            return !1;
        const F = (0,
        a.getChain)(x)
          , Y = (B = F == null ? void 0 : F.token.address) !== null && B !== void 0 ? B : "";
        return v.chainId === x && v.symbol === (F == null ? void 0 : F.tokenSymbol) && v.address.toLowerCase() === Y.toLowerCase()
    }
    ;
    n.isGasToken = b;
    const _ = (v, x) => {
        var B;
        if (!v || !x)
            return !1;
        const F = (0,
        a.getChain)(x)
          , Y = (B = F == null ? void 0 : F.token.address) !== null && B !== void 0 ? B : "";
        return v.chainId === x && v.address.toLowerCase() === Y.toLowerCase()
    }
    ;
    n.isGasOrWrappedGasToken = _;
    const C = (v, x) => {
        var B;
        if (!v || !x)
            return !1;
        const F = (0,
        a.getChain)(x)
          , Y = (B = F == null ? void 0 : F.token.address) !== null && B !== void 0 ? B : "";
        return v.chainId === x && v.symbol !== (F == null ? void 0 : F.tokenSymbol) && v.address.toLowerCase() === Y.toLowerCase()
    }
    ;
    n.isWrappedGasToken = C;
    const M = v => {
        const x = (0,
        a.getChain)(v);
        if (x != null && x.token.address && (x != null && x.token.symbol) && (x != null && x.token.decimal))
            return {
                chainId: v,
                address: x == null ? void 0 : x.token.address,
                symbol: x == null ? void 0 : x.token.symbol,
                decimal: x == null ? void 0 : x.token.decimal
            }
    }
    ;
    n.getGasToken = M;
    const E = v => {
        var x, B, F;
        const Y = (0,
        a.getChain)(v);
        if (!((x = Y == null ? void 0 : Y.wrappedToken) === null || x === void 0) && x.address && (!((B = Y == null ? void 0 : Y.wrappedToken) === null || B === void 0) && B.symbol) && (!((F = Y == null ? void 0 : Y.wrappedToken) === null || F === void 0) && F.decimal))
            return {
                chainId: v,
                address: Y == null ? void 0 : Y.wrappedToken.address,
                symbol: Y == null ? void 0 : Y.wrappedToken.symbol,
                decimal: Y == null ? void 0 : Y.wrappedToken.decimal
            }
    }
    ;
    n.getWrappedGasTokenIfExists = E
}
)(Dn);
(function(n) {
    var e = pt && pt.__createBinding || (Object.create ? function(a, i, r, s) {
        s === void 0 && (s = r);
        var c = Object.getOwnPropertyDescriptor(i, r);
        (!c || ("get"in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return i[r]
            }
        }),
        Object.defineProperty(a, s, c)
    }
    : function(a, i, r, s) {
        s === void 0 && (s = r),
        a[s] = i[r]
    }
    )
      , t = pt && pt.__exportStar || function(a, i) {
        for (var r in a)
            r !== "default" && !Object.prototype.hasOwnProperty.call(i, r) && e(i, a, r)
    }
    ;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    t(Dn, n)
}
)(la);
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.pointDeltaRoundingDown = n.pointDeltaRoundingUp = n.point2PriceDecimal = n.getTokenXYFromToken = n.point2PriceUndecimal = n.point2PoolPriceUndecimalSqrt = n.priceUndecimal2Point = n.priceDecimal2Point = n.priceUndecimal2PriceDecimal = n.priceDecimal2PriceUndecimal = void 0;
    const e = vn
      , t = $t
      , a = la
      , i = (E, v, x) => new t.BigNumber(x).times(Math.pow(10, v.decimal)).div(Math.pow(10, E.decimal));
    n.priceDecimal2PriceUndecimal = i;
    const r = (E, v, x) => Number(x.times(Math.pow(10, E.decimal)).div(Math.pow(10, v.decimal)));
    n.priceUndecimal2PriceDecimal = r;
    function s(E, v, x, B) {
        const F = (0,
        n.priceDecimal2PriceUndecimal)(E, v, x)
          , Y = Math.log(Number(F)) / Math.log(1.0001);
        return B === e.PointRoundingType.POINT_ROUNDING_NEAREST ? Math.round(Y) : B === e.PointRoundingType.POINT_ROUNDING_UP ? Math.ceil(Y) : Math.floor(Y)
    }
    function c(E, v) {
        const x = Math.log(E) / Math.log(1.0001);
        return v === e.PointRoundingType.POINT_ROUNDING_NEAREST ? Math.round(x) : v === e.PointRoundingType.POINT_ROUNDING_UP ? Math.ceil(x) : Math.floor(x)
    }
    const o = (E, v, x, B) => {
        if ((0,
        a.getSwapTokenAddress)(E).toLowerCase() < (0,
        a.getSwapTokenAddress)(v).toLowerCase()) {
            let F = e.PointRoundingType.POINT_ROUNDING_NEAREST;
            return B === e.PriceRoundingType.PRICE_ROUNDING_DOWN && (F = e.PointRoundingType.POINT_ROUNDING_DOWN),
            B === e.PriceRoundingType.PRICE_ROUNDING_UP && (F = e.PointRoundingType.POINT_ROUNDING_UP),
            s(E, v, x, F)
        } else {
            let F = e.PointRoundingType.POINT_ROUNDING_NEAREST;
            return B === e.PriceRoundingType.PRICE_ROUNDING_DOWN && (F = e.PointRoundingType.POINT_ROUNDING_UP),
            B === e.PriceRoundingType.PRICE_ROUNDING_UP && (F = e.PointRoundingType.POINT_ROUNDING_DOWN),
            s(v, E, 1 / x, F)
        }
    }
    ;
    n.priceDecimal2Point = o;
    const p = (E, v, x, B) => {
        if ((0,
        a.getSwapTokenAddress)(E).toLowerCase() < (0,
        a.getSwapTokenAddress)(v).toLowerCase()) {
            let F = e.PointRoundingType.POINT_ROUNDING_NEAREST;
            return B === e.PriceRoundingType.PRICE_ROUNDING_DOWN && (F = e.PointRoundingType.POINT_ROUNDING_DOWN),
            B === e.PriceRoundingType.PRICE_ROUNDING_UP && (F = e.PointRoundingType.POINT_ROUNDING_UP),
            c(x, F)
        } else {
            let F = e.PointRoundingType.POINT_ROUNDING_NEAREST;
            return B === e.PriceRoundingType.PRICE_ROUNDING_DOWN && (F = e.PointRoundingType.POINT_ROUNDING_UP),
            B === e.PriceRoundingType.PRICE_ROUNDING_UP && (F = e.PointRoundingType.POINT_ROUNDING_DOWN),
            c(1 / x, F)
        }
    }
    ;
    n.priceUndecimal2Point = p;
    const y = E => Math.pow(Math.pow(1.0001, E), .5);
    n.point2PoolPriceUndecimalSqrt = y;
    const u = (E, v, x) => (0,
    a.getSwapTokenAddress)(E).toLowerCase() < (0,
    a.getSwapTokenAddress)(v).toLowerCase() ? new t.BigNumber(Math.pow(1.0001, x)) : new t.BigNumber(1).div(Math.pow(1.0001, x));
    n.point2PriceUndecimal = u;
    const b = (E, v) => (0,
    a.getSwapTokenAddress)(E).toLowerCase() < (0,
    a.getSwapTokenAddress)(v).toLowerCase() ? {
        tokenX: Object.assign({}, E),
        tokenY: Object.assign({}, v)
    } : {
        tokenX: Object.assign({}, v),
        tokenY: Object.assign({}, E)
    };
    n.getTokenXYFromToken = b;
    const _ = (E, v, x) => {
        let B = 0
          , F = !1;
        const {tokenX: Y, tokenY: oe} = (0,
        n.getTokenXYFromToken)(E, v);
        return x > 0 ? (B = (0,
        n.priceUndecimal2PriceDecimal)(Y, oe, new t.BigNumber(Math.pow(1.0001, x))),
        F = (0,
        a.getSwapTokenAddress)(E).toLowerCase() > (0,
        a.getSwapTokenAddress)(v).toLowerCase()) : (B = (0,
        n.priceUndecimal2PriceDecimal)(oe, Y, new t.BigNumber(Math.pow(1.0001, -x))),
        F = (0,
        a.getSwapTokenAddress)(E).toLowerCase() < (0,
        a.getSwapTokenAddress)(v).toLowerCase()),
        F && (B = 1 / B),
        B
    }
    ;
    n.point2PriceDecimal = _;
    const C = (E, v) => {
        let x = E % v;
        return x < 0 && (x += v),
        x === 0 ? E : E + v - x
    }
    ;
    n.pointDeltaRoundingUp = C;
    const M = (E, v) => {
        let x = E % v;
        return x < 0 && (x += v),
        x === 0 ? E : E - x
    }
    ;
    n.pointDeltaRoundingDown = M
}
)(ca);
Object.defineProperty(Et, "__esModule", {
    value: !0
});
Et.getWithdrawLiquidityValue = Et.getLiquidityValue = un = Et.calciZiLiquidityAmountDesired = void 0;
const rt = $t
  , je = oa
  , mt = ca
  , bt = Dn
  , x0 = (n, e, t, a, i, r, s) => i ? (0,
bt.getSwapTokenAddress)(r).toLowerCase() < (0,
bt.getSwapTokenAddress)(s).toLowerCase() ? (0,
je._calciZiLiquidityAmountY)(a, n, e, t) : (0,
je._calciZiLiquidityAmountX)(a, n, e, t) : (0,
bt.getSwapTokenAddress)(r).toLowerCase() < (0,
bt.getSwapTokenAddress)(s).toLowerCase() ? (0,
je._calciZiLiquidityAmountX)(a, n, e, t) : (0,
je._calciZiLiquidityAmountY)(a, n, e, t);
var un = Et.calciZiLiquidityAmountDesired = x0;
const M0 = (n, e) => {
    var t, a;
    let i = new rt.BigNumber(0)
      , r = new rt.BigNumber(0);
    const s = n.liquidity
      , c = Math.sqrt(1.0001)
      , o = Number(n.leftPoint)
      , p = Number(n.rightPoint);
    if (o < e.currentPoint) {
        const b = Math.min(e.currentPoint, p)
          , _ = (0,
        mt.point2PoolPriceUndecimalSqrt)(b)
          , C = (0,
        mt.point2PoolPriceUndecimalSqrt)(o);
        r = (0,
        je._getAmountY)(new rt.BigNumber(s), C, _, c, !1)
    }
    if (p > e.currentPoint + 1) {
        const b = Math.max(e.currentPoint + 1, o)
          , _ = (0,
        mt.point2PoolPriceUndecimalSqrt)(p);
        i = (0,
        je._getAmountX)(new rt.BigNumber(s), b, p, _, c, !1)
    }
    if (o <= e.currentPoint && p > e.currentPoint) {
        const b = new rt.BigNumber(n.liquidity)
          , _ = new rt.BigNumber(e.liquidity).minus(e.liquidityX)
          , C = b.gt(_) ? _ : b
          , M = b.minus(C)
          , E = (0,
        mt.point2PoolPriceUndecimalSqrt)(e.currentPoint);
        i = i.plus((0,
        je._liquidity2AmountXAtPoint)(M, E, !1)),
        r = r.plus((0,
        je._liquidity2AmountYAtPoint)(C, E, !1))
    }
    const y = (t = (0,
    bt.amount2Decimal)(i, n.tokenX)) !== null && t !== void 0 ? t : 0
      , u = (a = (0,
    bt.amount2Decimal)(r, n.tokenY)) !== null && a !== void 0 ? a : 0;
    return {
        amountX: i,
        amountXDecimal: y,
        amountY: r,
        amountYDecimal: u
    }
}
;
Et.getLiquidityValue = M0;
const P0 = (n, e, t) => {
    var a, i;
    let r = new rt.BigNumber(0)
      , s = new rt.BigNumber(0);
    const c = Math.sqrt(1.0001)
      , o = Number(n.leftPoint)
      , p = Number(n.rightPoint);
    if (o < e.currentPoint) {
        const b = Math.min(e.currentPoint, p)
          , _ = (0,
        mt.point2PoolPriceUndecimalSqrt)(b)
          , C = (0,
        mt.point2PoolPriceUndecimalSqrt)(o);
        s = (0,
        je._getAmountY)(t, C, _, c, !1)
    }
    if (p > e.currentPoint + 1) {
        const b = Math.max(e.currentPoint + 1, o)
          , _ = (0,
        mt.point2PoolPriceUndecimalSqrt)(p);
        r = (0,
        je._getAmountX)(t, b, p, _, c, !1)
    }
    if (o <= e.currentPoint && p > e.currentPoint) {
        const b = t
          , _ = new rt.BigNumber(e.liquidity).minus(e.liquidityX)
          , C = b.gt(_) ? _ : b
          , M = b.minus(C)
          , E = (0,
        mt.point2PoolPriceUndecimalSqrt)(e.currentPoint);
        r = r.plus((0,
        je._liquidity2AmountXAtPoint)(M, E, !1)),
        s = s.plus((0,
        je._liquidity2AmountYAtPoint)(C, E, !1))
    }
    const y = (a = (0,
    bt.amount2Decimal)(r, n.tokenX)) !== null && a !== void 0 ? a : 0
      , u = (i = (0,
    bt.amount2Decimal)(s, n.tokenY)) !== null && i !== void 0 ? i : 0;
    return {
        amountX: r,
        amountXDecimal: y,
        amountY: s,
        amountYDecimal: u
    }
}
;
Et.getWithdrawLiquidityValue = P0;
const O0 = n => {
    var xt, Mt, dt, O, P;
    const e = n || fe.polygon
      , t = fn(e)
      , a = Bn(e, !0)
      , i = Bn(e, !1)
      , r = Ta(e, !0)
      , s = (Mt = (xt = W) == null ? void 0 : xt[t]) == null ? void 0 : Mt.positionManagerAddress
      , {provider: c} = pn()
      , o = yn()
      , p = An()
      , y = Kn()
      , [{wallet: u}] = mn()
      , b = (dt = u == null ? void 0 : u.accounts[0]) == null ? void 0 : dt.address
      , _ = bn()
      , C = gn()
      , M = async (T, A, d, f, w) => {
        var S, R, U, X, V, k, H, $;
        const g = (d == null ? void 0 : d.type) === "brc20"
          , m = (f == null ? void 0 : f.type) === "brc20"
          , h = g || m
          , D = J(T, d.decimal)
          , N = await Y(T, d, f)
          , L = J(N, f.decimal);
        if (i)
            try {
                C.success({
                    topTitle: "Approve token spending",
                    haveLoading: !0,
                    message: (R = (S = o == null ? void 0 : o.wallet) == null ? void 0 : S.type) != null && R.includes("Ledger") || (X = (U = o == null ? void 0 : o.wallet) == null ? void 0 : U.type) != null && X.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: d,
                        inputAmount: T,
                        outputToken: f,
                        outputAmount: N
                    }
                }),
                await F(d, D);
                const K = await at();
                C.success({
                    topTitle: `Submit swap for ${f.symbol} `,
                    haveLoading: !0,
                    message: (k = (V = o == null ? void 0 : o.wallet) == null ? void 0 : V.type) != null && k.includes("Ledger") || ($ = (H = o == null ? void 0 : o.wallet) == null ? void 0 : H.type) != null && $.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet",
                    token: {
                        inputToken: d,
                        inputAmount: T,
                        outputToken: f,
                        outputAmount: N
                    }
                });
                let Q = [];
                return h ? Q = await [] : Q = await et(d, f),
                await (await (i == null ? void 0 : i.swap(D, L, Q, w, K, !0))).wait(3),
                !0
            } catch (K) {
                throw C.clearAll(),
                new Error(Ae(K))
            }
        else
            throw C.clearAll(),
            _.error("contractMethodConnectorWrite not found"),
            new Error("contractMethodConnectorWrite not found")
    }
    ;
    async function E(T) {
        var V;
        const A = new Ze((V = $e) == null ? void 0 : V[t])
          , d = jn.connect(T, A)
          , {sqrtPrice_96: f, currentPoint: w, observationCurrentIndex: g, observationQueueLen: m, observationNextQueueLen: h, liquidity: D, liquidityX: N} = await d.state()
          , L = new Je(s,kt,A)
          , S = await L.poolIds(T)
          , {tokenX: R, tokenY: U, fee: X} = await L.poolMetas(S);
        return {
            fee: X,
            liquidity: D,
            sqrtPriceX96: f,
            tokenX: R
        }
    }
    const v = async (T, A, d, f) => {
        var m, h, D, N, L, S, R, U, X, V, k, H, $, K, Q, I, ae;
        const w = u ? new ke(u.provider,"any") : c
          , g = u ? w.getSigner() : c;
        C.success({
            topTitle: `Approve token spending ${d.symbol}`,
            haveLoading: !0,
            message: (h = (m = o == null ? void 0 : o.wallet) == null ? void 0 : m.type) != null && h.includes("Ledger") || (N = (D = o == null ? void 0 : o.wallet) == null ? void 0 : D.type) != null && N.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
        });
        try {
            if (g && b) {
                const Z = await at()
                  , ee = new yt(Re[e],d.address,d.decimal)
                  , ie = new yt(Re[e],f.address,f.decimal)
                  , Ce = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
                  , Te = await (r == null ? void 0 : r.pool(ee.address, ie.address, Ce)) || "0x00"
                  , Ue = st(b)
                  , Ee = st(Te || "0x00")
                  , Le = await y.get(`${Wt}/network-info/pool-position/${Ue}?poolAddress=${Ee}&network=${e == null ? void 0 : e.toLowerCase()}`);
                let Xe = (L = Le == null ? void 0 : Le.data) == null ? void 0 : L.tokenId;
                const xe = await E(Te)
                  , _e = J(T, d.decimal)
                  , me = J(A, f.decimal)
                  , Se = new Je(s,kt,g)
                  , {leftPoint: qe, rightPoint: ze} = {
                    leftPoint: -180,
                    rightPoint: 180
                };
                if (!Xe || Xe && +((S = Le == null ? void 0 : Le.data) == null ? void 0 : S.liquidity) == 0) {
                    await B(d, _e),
                    await B(f, me);
                    const Be = (U = (R = W) == null ? void 0 : R[e].teleBTCAddress) == null ? void 0 : U.toLowerCase()
                      , be = ((X = xe.tokenX) == null ? void 0 : X.toLowerCase()) === Be
                      , Me = {
                        miner: b,
                        tokenX: be ? ie.address : ee.address,
                        tokenY: be ? ee.address : ie.address,
                        fee: xe.fee,
                        pl: qe,
                        pr: ze,
                        xLim: Number(be ? me : _e),
                        yLim: Number(be ? _e : me),
                        amountXMin: 0,
                        amountYMin: 0,
                        deadline: Number(Z)
                    };
                    C.success({
                        topTitle: `Mint with ${T} ${d.symbol} and ${A}  ${f.symbol}`,
                        haveLoading: !0,
                        message: (k = (V = o == null ? void 0 : o.wallet) == null ? void 0 : V.type) != null && k.includes("Ledger") || ($ = (H = o == null ? void 0 : o.wallet) == null ? void 0 : H.type) != null && $.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                    });
                    const ge = (await (await Se.mint(Me)).wait(1)).events;
                    Xe = ge == null ? void 0 : ge[5].args.tokenId
                } else {
                    await B(d, _e),
                    await B(f, me);
                    const Be = {
                        lid: Xe,
                        xLim: _e,
                        yLim: me,
                        amountXMin: 0,
                        amountYMin: 0,
                        deadline: Z
                    };
                    C.success({
                        topTitle: `Add liquidity with ${T} ${d.symbol} and ${A}  ${f.symbol}`,
                        haveLoading: !0,
                        message: (Q = (K = o == null ? void 0 : o.wallet) == null ? void 0 : K.type) != null && Q.includes("Ledger") || (ae = (I = o == null ? void 0 : o.wallet) == null ? void 0 : I.type) != null && ae.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
                    }),
                    await (await Se.addLiquidity(Be)).wait(1)
                }
            }
        } catch (Z) {
            throw C.clearAll(),
            new Error(Ae(Z))
        }
    }
      , x = async (T, A, d, f, w, g) => {
        var D, N, L, S, R;
        const m = u ? new ke(u.provider,"any") : c
          , h = u ? m.getSigner() : c;
        if (h && b) {
            C.success({
                topTitle: `Remove ${T} Liquidity`,
                haveLoading: !0,
                message: (N = (D = o == null ? void 0 : o.wallet) == null ? void 0 : D.type) != null && N.includes("Ledger") || (S = (L = o == null ? void 0 : o.wallet) == null ? void 0 : L.type) != null && S.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
            });
            const U = new yt(Re[e],w.address,w.decimal)
              , X = new yt(Re[e],g.address,g.decimal)
              , V = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
              , k = await (r == null ? void 0 : r.pool(U.address, X.address, V)) || "0x00"
              , H = st(b)
              , $ = st(k || "0x00")
              , K = await y.get(`${Wt}/network-info/pool-position/${H}?poolAddress=${$}&network=${e == null ? void 0 : e.toLowerCase()}`);
            let Q = (R = K == null ? void 0 : K.data) == null ? void 0 : R.tokenId;
            try {
                const I = J(T, f.decimal)
                  , ae = await at()
                  , Z = {
                    tokenId: Q,
                    liquidity: I,
                    amount0Min: 0,
                    amount1Min: 0,
                    deadline: ae
                };
                return await (await new Je(s,kt,h).decLiquidity(Z.tokenId, Z.liquidity, Z.amount0Min, Z.amount1Min, Z.deadline)).wait(1),
                !0
            } catch (I) {
                throw C.clearAll(),
                new Error(Ae(I))
            }
        }
    }
      , B = async (T, A) => {
        var w, g, m, h;
        const d = u ? new ke(u.provider,"any") : c
          , f = u ? d.getSigner() : c;
        if (f && b) {
            C.success({
                topTitle: `Approve token spending ${T.symbol}`,
                haveLoading: !0,
                message: (g = (w = o == null ? void 0 : o.wallet) == null ? void 0 : w.type) != null && g.includes("Ledger") || (h = (m = o == null ? void 0 : o.wallet) == null ? void 0 : m.type) != null && h.includes("Trezor") ? "Confirm transaction in your Ledger " : "Confirm transaction in your wallet"
            });
            const D = ct.connect(T == null ? void 0 : T.address, f)
              , N = await D.allowance(b, s)
              , L = re(A, T.decimal, T.decimal)
              , S = re(N, T.decimal, T.decimal);
            if (+L > +S) {
                const R = A;
                try {
                    await (await D.approve(s, R)).wait(2)
                } catch (U) {
                    throw U
                }
            }
        }
    }
      , F = async (T, A) => {
        var g, m;
        const d = u ? new ke(u.provider,"any") : c
          , f = u ? d.getSigner() : c
          , w = (m = (g = W) == null ? void 0 : g[e || fe.polygon]) == null ? void 0 : m.exchangeConnectorV3Address;
        if (f && b) {
            const h = ct.connect(T == null ? void 0 : T.address, f)
              , D = await h.allowance(b, w)
              , N = re(A, T.decimal, T.decimal)
              , L = re(D, T.decimal, T.decimal);
            if (+N > +L) {
                const S = A;
                try {
                    await (await h.approve(w, S)).wait(2)
                } catch (R) {
                    throw R
                }
            }
        }
    }
      , Y = async (T, A, d) => {
        const f = z(e) ? se(A, e) : A
          , w = z(e) ? se(d, e) : d
          , g = await te(f, w);
        return (f == null ? void 0 : f.type) === "brc20" || (w == null || w.type),
        new Promise( (m, h) => a == null ? void 0 : a.callStatic.getExactInput(g, J(T, f == null ? void 0 : f.decimal)).then(D => {
            const N = re(D[1], w.decimal);
            m(N)
        }
        ).catch(D => {
            h(Ae(D))
        }
        ))
    }
      , oe = async (T, A) => {
        const d = (T == null ? void 0 : T.type) === "brc20"
          , f = (A == null ? void 0 : A.type) === "brc20"
          , w = d || f
          , g = (T == null ? void 0 : T.type) === "rune"
          , m = (A == null ? void 0 : A.type) === "rune"
          , h = g || m;
        let D = [];
        return w ? D = [] : h ? D = await [] : D = await wt(T, A),
        D
    }
      , te = async (T, A) => (await oe(T, A)).map(w => w.address)
      , De = async (T, A, d) => {
        const f = z(e) ? se(A, e) : A
          , w = z(e) ? se(d, e) : d
          , g = await et(f, w);
        return new Promise( (m, h) => {
            var D;
            return (D = a == null ? void 0 : a.callStatic) == null ? void 0 : D.getExactOutput(g, J(T, w == null ? void 0 : w.decimal)).then(N => {
                const L = re(N[1], f == null ? void 0 : f.decimal);
                m(L)
            }
            ).catch(N => {
                h(Ae(N))
            }
            )
        }
        )
    }
      , Ve = async (T, A, d) => {
        var N, L, S;
        const f = z(e) ? se(A, e) : A
          , w = z(e) ? se(d, e) : d
          , g = await et(f, w)
          , m = await new Promise( (R, U) => {
            var X;
            return (X = a == null ? void 0 : a.callStatic) == null ? void 0 : X.getExactOutput(g, J(T, w == null ? void 0 : w.decimal)).then(V => {
                const k = re(V[1], f == null ? void 0 : f.decimal);
                R(k)
            }
            ).catch(V => {
                U(Ae(V))
            }
            )
        }
        );
        let h = 0;
        if (z(e)) {
            const R = Rt({
                uniqueCounter: pe.from(0),
                sourceChainId: pe.from((N = Re) == null ? void 0 : N[e]),
                user: "0x548f6afdd7A64d3dDB654a01e6E114795e3b38fe",
                exchangeConnector: (S = (L = W) == null ? void 0 : L[t]) == null ? void 0 : S.exchangeConnectorV3Address,
                minAmountOut: pe.from(0),
                path: g,
                userScript: "0xd1d38408f34b62abc9c1ed2afea39f7cc70c7b4a47b8969c422a97e76a6f09b8",
                scriptType: "5",
                lockerLockingScript: "0xa91472df0f82c4bcfe01a274bd521e5d4c66586b7a5b87",
                thirdParty: pe.from(0),
                isFixedToken: !0
            })
              , U = z(e) ? await p.getAcrossFeeUnwrap({
                amount: J(m, A.decimal),
                token: A,
                message: R,
                crossNetwork: e
            }) : 0;
            h = z(e) ? +U / +"1e18" : 0
        }
        return (+m * (1 + h)).toFixed(A.decimal).toString()
    }
    ;
    function Ne(T, A, d, f=!0) {
        const w = T ** 2
          , g = 2 ** 192;
        let m = w / g;
        const h = Math.pow(10, f ? A - d : d - A);
        return m = m * h,
        f || (m = 1 / m),
        m
    }
    const ne = async (T, A) => {
        var R, U;
        const d = e === fe.bsquared || e === fe.binance ? 2500 : Ke.MEDIUM
          , f = await (r == null ? void 0 : r.pool(T.address, A.address, d))
          , w = new Je(f || "",D0,new Ze((R = $e) == null ? void 0 : R[t]))
          , {sqrtPrice_96: g} = await w.state()
          , m = new Je(s,kt,new Ze((U = $e) == null ? void 0 : U[t]))
          , h = await m.poolIds(f)
          , {tokenX: D} = await m.poolMetas(h)
          , N = T.address.toLowerCase() === D.toLowerCase();
        return Ne(g, T.decimal, A.decimal, N)
    }
      , j = async (T, A) => {
        const d = z(e) ? se(T, e) : T
          , f = z(e) ? se(A, e) : A
          , w = (d == null ? void 0 : d.type) === "brc20"
          , g = (f == null ? void 0 : f.type) === "brc20"
          , m = w || g;
        let h = [];
        if (m ? h = [] : h = await wt(d, f),
        h.length === 2)
            return await ne(h[0], h[1]);
        if (h.length === 3) {
            const D = await ne(h[0], h[1]);
            return +(await ne(h[1], h[2]) * D)
        } else if (h.length === 4) {
            const D = await ne(h[0], h[1])
              , N = await ne(h[1], h[2]);
            return +(await ne(h[2], h[3]) * N * D)
        }
    }
      , at = async () => {
        var T;
        try {
            const A = u ? new ke(u == null ? void 0 : u.provider,"any") : new Ze((T = $e) == null ? void 0 : T[e])
              , d = await (A == null ? void 0 : A.getBlock("latest"))
              , f = (d == null ? void 0 : d.timestamp) || 0;
            if (f === 0)
                throw new Error("We cant to calculate deadline");
            const w = f + 1e5;
            return wn(`${w}`)
        } catch {
            throw new Error("We cant to calculate deadline")
        }
    }
      , Fe = async (T, A, d=8) => {
        var w;
        let f = 0;
        if (e && b && T !== "0x0000000000000000000000000000000000000000") {
            const g = new Ze((w = $e) == null ? void 0 : w[e])
              , h = await ct.connect(T, g).balanceOf(b);
            f = re(h, +A, d)
        }
        return f || "0"
    }
      , Dt = async T => !!await (a == null ? void 0 : a.isPathValid(T))
      , et = async (T, A) => (await wt(T, A)).map(w => w.address)
      , wt = async (T, A) => {
        var R, U, X, V, k, H, $, K, Q, I, ae, Z, ee, ie, Ce, Te;
        const d = (X = (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.teleBTCAddress) == null ? void 0 : X.toLowerCase()
          , f = await Dt([T == null ? void 0 : T.address, A == null ? void 0 : A.address])
          , w = (H = (k = (V = W) == null ? void 0 : V[t]) == null ? void 0 : k.WBTCAddress) == null ? void 0 : H.toLowerCase()
          , g = (K = ($ = we) == null ? void 0 : $[t]) == null ? void 0 : K.find(Ue => {
            var Ee;
            return ((Ee = Ue.address) == null ? void 0 : Ee.toLowerCase()) === w
        }
        )
          , m = (ae = (I = (Q = W) == null ? void 0 : Q[t]) == null ? void 0 : I.WNATIVEAddress) == null ? void 0 : ae.toLowerCase()
          , h = (ee = (Z = we) == null ? void 0 : Z[t]) == null ? void 0 : ee.find(Ue => {
            var Ee;
            return ((Ee = Ue.address) == null ? void 0 : Ee.toLowerCase()) === m
        }
        )
          , D = ((ie = T == null ? void 0 : T.address) == null ? void 0 : ie.toLowerCase()) === (d == null ? void 0 : d.toLowerCase())
          , N = ((Ce = T == null ? void 0 : T.address) == null ? void 0 : Ce.toLowerCase()) === (m == null ? void 0 : m.toLowerCase())
          , L = ((Te = A == null ? void 0 : A.address) == null ? void 0 : Te.toLowerCase()) === (m == null ? void 0 : m.toLowerCase());
        return f ? [T, A] : N || L ? [T, g, A] : [T, D ? g : h, D ? h : g, A]
    }
      , Ct = (P = (O = W) == null ? void 0 : O[t]) == null ? void 0 : P.exchangeConnectorV3Address;
    return {
        exchangeConnectorAppId: ba,
        calcOutputAmount: (T, A, d) => {
            var L, S, R, U, X;
            const {leftPoint: f, rightPoint: w} = {
                leftPoint: -180,
                rightPoint: 180
            }
              , g = Pn(T, 8)
              , m = (S = (L = W) == null ? void 0 : L[t]) == null ? void 0 : S.WBTCAddress
              , h = (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.teleBTCAddress
              , D = un(f, w, (X = A == null ? void 0 : A.inputToken) == null ? void 0 : X.currentPoint, g, !0, {
                chainId: Re.BOB,
                symbol: "WBTC",
                address: "string",
                decimal: m
            }, {
                chainId: Re.BOB,
                symbol: "TELEBTC",
                address: h,
                decimal: 8
            });
            return re(D, 8)
        }
        ,
        calcInputAmount: (T, A, d) => {
            var L, S, R, U, X;
            const {leftPoint: f, rightPoint: w} = {
                leftPoint: -180,
                rightPoint: 180
            }
              , g = Pn(T, 8)
              , m = (S = (L = W) == null ? void 0 : L[t]) == null ? void 0 : S.WBTCAddress
              , h = (U = (R = W) == null ? void 0 : R[t]) == null ? void 0 : U.teleBTCAddress
              , D = un(f, w, (X = A == null ? void 0 : A.inputToken) == null ? void 0 : X.currentPoint, g, !0, {
                chainId: Re.BOB,
                symbol: "TELEBTC",
                address: h,
                decimal: 8
            }, {
                chainId: Re.BOB,
                symbol: "WBTC",
                address: "string",
                decimal: m
            });
            return re(D, 8)
        }
        ,
        getAmountsIn: De,
        getAmountsInConnector: Ve,
        getAmountsOut: Y,
        getAmountsOutConnector: Y,
        getCurrentSwapRate: j,
        addLiquidity: v,
        removeLiquidity: x,
        getTokenBalance: Fe,
        approve: B,
        swap: M,
        checkIsPathValid: Dt,
        getPathValid: et,
        exchangeConnectorAddress: Ct,
        contract: a || void 0
    }
}
  , R0 = (n, e="bridge") => {
    const t = n || fe.polygon
      , a = _0(t)
      , i = v0(t)
      , r = O0(t);
    return ga.useMemo( () => wa ? i : t === fe.binance && e === "farming" || t === fe.polygon && e === "farming" ? a : t === fe.bob ? r : a, [t, a.contract, i.contract, r.contract])
}
;
export {Zn as I, ln as U, D0 as a, R0 as u};
//# sourceMappingURL=useExchange-b808452d.js.map
