export const id=759;export const ids=[759];export const modules={4558:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InitializeRelativeTimeFormat=void 0;var r=a(77021),n=a(46042),o=/^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;t.InitializeRelativeTimeFormat=function(e,t,a,i){var l=i.getInternalSlots,u=i.availableLocales,s=i.relevantExtensionKeys,c=i.localeData,f=i.getDefaultLocale,v=l(e);v.initializedRelativeTimeFormat=!0;var d=(0,r.CanonicalizeLocaleList)(t),m=Object.create(null),p=(0,r.CoerceOptionsToObject)(a),y=(0,r.GetOption)(p,"localeMatcher","string",["best fit","lookup"],"best fit");m.localeMatcher=y;var b=(0,r.GetOption)(p,"numberingSystem","string",void 0,void 0);if(void 0!==b&&!o.test(b))throw new RangeError("Invalid numbering system ".concat(b));m.nu=b;var g=(0,n.ResolveLocale)(u,d,m,s,c,f),h=g.locale,w=g.nu;v.locale=h,v.style=(0,r.GetOption)(p,"style","string",["long","narrow","short"],"long"),v.numeric=(0,r.GetOption)(p,"numeric","string",["always","auto"],"always");var T=c[g.dataLocale];return(0,r.invariant)(!!T,"Missing locale data for ".concat(g.dataLocale)),v.fields=T,v.numberFormat=new Intl.NumberFormat(t),v.pluralRules=new Intl.PluralRules(t),v.numberingSystem=w,e}},43606:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MakePartsList=void 0;var r=a(77021);t.MakePartsList=function(e,t,a){for(var n=[],o=0,i=(0,r.PartitionPattern)(e);o<i.length;o++){var l=i[o];if("literal"===l.type)n.push({type:"literal",value:l.value});else{(0,r.invariant)("0"===l.type,"Malformed pattern ".concat(e));for(var u=0,s=a;u<s.length;u++){var c=s[u];n.push({type:c.type,value:c.value,unit:t})}}}return n}},41979:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PartitionRelativeTimePattern=void 0;var r=a(77021),n=a(8511),o=a(43606);t.PartitionRelativeTimePattern=function(e,t,a,i){var l=i.getInternalSlots;if((0,r.invariant)("Number"===(0,r.Type)(t),"value must be number, instead got ".concat(typeof t),TypeError),(0,r.invariant)("String"===(0,r.Type)(a),"unit must be number, instead got ".concat(typeof t),TypeError),isNaN(t)||!isFinite(t))throw new RangeError("Invalid value ".concat(t));var u=(0,n.SingularRelativeTimeUnit)(a),s=l(e),c=s.fields,f=s.style,v=s.numeric,d=s.pluralRules,m=s.numberFormat,p=u;"short"===f?p="".concat(u,"-short"):"narrow"===f&&(p="".concat(u,"-narrow")),p in c||(p=u);var y=c[p];if("auto"===v&&(0,r.ToString)(t)in y)return[{type:"literal",value:y[(0,r.ToString)(t)]}];var b="future";((0,r.SameValue)(t,-0)||t<0)&&(b="past");var g=y[b],h="function"==typeof m.formatToParts?m.formatToParts(Math.abs(t)):[{type:"literal",value:m.format(Math.abs(t)),unit:a}],w=g[d.select(t)];return(0,o.MakePartsList)(w,u,h)}},8511:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SingularRelativeTimeUnit=void 0;var r=a(77021);t.SingularRelativeTimeUnit=function(e){if((0,r.invariant)("String"===(0,r.Type)(e),"unit must be a string"),"seconds"===e)return"second";if("minutes"===e)return"minute";if("hours"===e)return"hour";if("days"===e)return"day";if("weeks"===e)return"week";if("months"===e)return"month";if("quarters"===e)return"quarter";if("years"===e)return"year";if("second"!==e&&"minute"!==e&&"hour"!==e&&"day"!==e&&"week"!==e&&"month"!==e&&"quarter"!==e&&"year"!==e)throw new RangeError("invalid unit");return e}},98584:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=new WeakMap;t.default=function(e){var t=a.get(e);return t||(t=Object.create(null),a.set(e,t)),t}},22114:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=a(43204),n=a(77021),o=a(4558),i=a(41979),l=r.__importDefault(a(98584)),u=function(){function e(t,a){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");return(0,o.InitializeRelativeTimeFormat)(this,t,a,{getInternalSlots:l.default,availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale})}return e.prototype.format=function(e,t){if("object"!=typeof this)throw new TypeError("format was called on a non-object");if(!(0,l.default)(this).initializedRelativeTimeFormat)throw new TypeError("format was called on a invalid context");return(0,i.PartitionRelativeTimePattern)(this,Number(e),(0,n.ToString)(t),{getInternalSlots:l.default}).map((function(e){return e.value})).join("")},e.prototype.formatToParts=function(e,t){if("object"!=typeof this)throw new TypeError("formatToParts was called on a non-object");if(!(0,l.default)(this).initializedRelativeTimeFormat)throw new TypeError("formatToParts was called on a invalid context");return(0,i.PartitionRelativeTimePattern)(this,Number(e),(0,n.ToString)(t),{getInternalSlots:l.default})},e.prototype.resolvedOptions=function(){if("object"!=typeof this)throw new TypeError("resolvedOptions was called on a non-object");var e=(0,l.default)(this);if(!e.initializedRelativeTimeFormat)throw new TypeError("resolvedOptions was called on a invalid context");return{locale:e.locale,style:e.style,numeric:e.numeric,numberingSystem:e.numberingSystem}},e.supportedLocalesOf=function(t,a){return(0,n.SupportedLocales)(e.availableLocales,(0,n.CanonicalizeLocaleList)(t),a)},e.__addLocaleData=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];for(var r=0,n=t;r<n.length;r++){var o=n[r],i=o.data,l=o.locale,u=new Intl.Locale(l).minimize().toString();e.localeData[l]=e.localeData[u]=i,e.availableLocales.add(u),e.availableLocales.add(l),e.__defaultLocale||(e.__defaultLocale=u)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=["nu"],e.polyfilled=!0,e}();t.default=u;try{"undefined"!=typeof Symbol&&Object.defineProperty(u.prototype,Symbol.toStringTag,{value:"Intl.RelativeTimeFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(u.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(e){}},20759:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=a(43204).__importDefault(a(22114));Object.defineProperty(Intl,"RelativeTimeFormat",{value:r.default,writable:!0,enumerable:!1,configurable:!0})}};
//# sourceMappingURL=759.Afm3fT9nDHQ.js.map