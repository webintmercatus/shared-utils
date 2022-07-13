function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,n,r,o=/*#__PURE__*/e(require("lodash"));exports.ConfigCategory=void 0,(n=exports.ConfigCategory||(exports.ConfigCategory={})).Setting="setting",n.Translation="translation",n.UI="ui",n.Feature="feature",exports.ConfigCategoryPlurals=void 0,(r=exports.ConfigCategoryPlurals||(exports.ConfigCategoryPlurals={})).Setting="settings",r.Translation="translations",r.UI="ui",r.Feature="features";var a=((t={})[exports.ConfigCategory.Setting]={plural:exports.ConfigCategoryPlurals.Setting,label:"Setting",labelPlural:"Settings",order:1},t[exports.ConfigCategory.Translation]={plural:exports.ConfigCategoryPlurals.Translation,label:"Translation",labelPlural:"Translations",order:2},t[exports.ConfigCategory.UI]={plural:exports.ConfigCategoryPlurals.UI,label:"UI",labelPlural:"UI",order:3},t[exports.ConfigCategory.Feature]={plural:exports.ConfigCategoryPlurals.Feature,label:"Feature",labelPlural:"Features",order:4},t),u=o.default.assign,l=o.default.mapValues,i=function(e){return void 0===e&&(e={}),e=l(e,function(){return!0}),u({nested:!1,categorized:!1},e)},f=o.default.each,s=o.default.setWith,c=function(e){var t={};return f(e,function(e,n){s(t,n,e,Object)}),t},d=o.default.each,p=o.default.get,g=o.default.each,v=o.default.has;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function C(e,t,n){return C=m()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&h(o,n.prototype),o},C.apply(null,arguments)}function P(e){var t="function"==typeof Map?new Map:void 0;return P=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return C(e,arguments,y(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,e)},P(e)}var x=o.default.each,O=o.default.isBoolean,j=o.default.isObject,I=o.default.last,w=o.default.split,k=o.default.startsWith,F=o.default.trimEnd,L=o.default.assign,S=o.default.each,T=o.default.get,E=o.default.has,R=o.default.isObject,A=o.default.kebabCase,_=o.default.last,U=o.default.mapKeys,V=o.default.mapValues,q=o.default.merge,z=o.default.set,D=o.default.size,B=o.default.split,M=o.default.startCase,N=o.default.unset,G=function(e){return"object"==typeof e&&"boolean"==typeof e.default?"switch":"input"},K=function(e,t,n){if(void 0===n&&(n=!1),R(t)){if(!n&&!E(t,"default"))throw new Error('Config "'+e+'" is missing a "default" value.')}else t={default:t};return t},W=function(e,t,n){if(void 0===n&&(n={}),delete(t=K(e,t)).key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}return L({default:null,type:G(t),label:M(_(B(e,"."))),category:"setting"},t,n)},J=function(e,t,n){return void 0===t&&(t={}),e=U(e,function(e,t){return o.default.get(e,"key",t)}),V(e,function(e,r){return n&&n(r,e),W(r,e,t)})},H=function(e,t,n){q(e,function(e,t,n){return J(t,n,function(t){if(E(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))},Q=function(e,t){return L({label:M(_(B(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},X=function(e){var t=e.getComponents,n=e.getConfigs,r=e.getLabel,a=e.getName,u=e.source;try{var l=function(e){function a(r){function a(e){var t=function(){if(n)return Promise.resolve(n()).then(function(t){var n=J(t),r=function(e,t){void 0===t&&(t={});var n={},r=!1;return S(e,function(e){if("object"==typeof e&&E(e,"component")){if(!E(n,e.component)){var o={};if(E(t,e.component)){var a=t[e.component].getOptions;o=a?a():t[e.component]}n[e.component]=Q(e.component,o)}}else r=!0}),r&&D(n)&&(n.unsorted=Q("unsorted",{order:999})),n}(n,e);q(u,{config:n,components:r})});var t,r,a,l=(r={},a=function(e){return V(e,function(e,t){var n=e.getOptions;return Q(t,n?n():null)})}(t=e),S(t,function(e,t){var n=e.getConfigs,u=e.getFeatures,l=e.getSettings,i=e.getTranslations,f=e.getUI,s={component:t},c=function(e,t){var n={group:{path:"groups"},tab:{path:"tabs"}},r=function(e,t){void 0===t&&(t=null);var n={};return S(e,function(e,r){if(e=K(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},a=function(o,a,u,l,i,f){return void 0===l&&(l=!0),void 0===i&&(i="group"),function(r,o,a,u){void 0===u&&(u="group");var l=n[u].path,i={};S(a,function(r){if("object"==typeof r&&r.group){var o=r.group;S(n,function(n){var r=T(e,[t,n.path,o]);if(r){z(i,[n.path,o],r),N(e,[t,n.path,o]);var a=T(e,[t,n.path],{});0===D(a)&&N(e,[t,n.path])}})}}),z(e,[t,l,r],L({label:o},i))}(o,a,u,i),r(u,function(e,t){return t.group=t.group?o+"."+t.group:o,f&&f(e,t),{key:l?o+"."+e:e,config:t}})};return{addNested:function(e,t){return r(t,function(t,n){return"object"==typeof n&&(n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),n.longLabel=M(e)+" ⇢ "+(n.longLabel?n.longLabel:n.label?n.label:M(t))),{key:e+"."+t,config:n}})},addFeature:function(e,t,n,r,u){if(void 0===r&&(r=!1),void 0===u&&(u=!0),E(n,"enabled"))throw new Error('Feature "'+e+'" should not contain a property named "enabled".');return n=L({enabled:K("enabled",r)},n),a(e,t,n,u,"group",function(t,n){"enabled"!==t&&"object"==typeof n&&o.default.set(n,"visibleIf",e+".enabled")})},addGroup:a,addTab:function(e,t){var n=A(e);return a(n,e,t,!1,"tab")},addField:function(e,t){var n={},r=e+".isVisible",o=M(e);return n.isVisible={default:!0,label:"Visible",longLabel:o+" ⇢ Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",longLabel:o+" ⇢ Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",longLabel:o+" ⇢ Disabled",visibleIf:r,styleClasses:"col-md-2"},n.readonly={default:!1,label:"Readonly",longLabel:o+" ⇢ Readonly",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",longLabel:o+" ⇢ Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",longLabel:o+" ⇢ Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t&&t({insert:function(e,t){if(E(n,e))throw new Error("Field "+e+" already exists!");var a=W(e,t,{visibleIf:r,styleClasses:"col-md-12"});a.longLabel=o+" ⇢ "+a.label,n[e]=a},modify:function(e,t){q(n[e],K(e,t,!0))}}),a(e,M(e),n,!0)}}}(a,t);n?H(r,n(c),s):(l&&H(r,l(c),L(s,{category:"setting"})),i&&H(r,i(c),L(s,{category:"translation"})),f&&H(r,f(c),L(s,{category:"ui"})),u&&H(r,u(c),L(s,{category:"feature"})))}),{configs:r,components:a});q(u,{configs:l.configs,components:l.components})}();return t&&t.then?t.then(function(){return u}):u}var u={name:e,label:r};return t?Promise.resolve(t()).then(a):a(null)}return r?Promise.resolve(r()).then(a):a(M(e))};return Promise.resolve(a?Promise.resolve(a()).then(l):l(u))}catch(e){return Promise.reject(e)}},Y=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,h(t,n),r}(/*#__PURE__*/P(Error));exports.CATEGORIES=a,exports.SourceError=Y,exports.createConfigsFromJson=function(e){var t={},n=function(e,t){void 0===t&&(t="");var n=function e(t,n){var r;if(!t||"object"!=typeof t)return[(r={},r[n]=t,r)];var o=n?Array.isArray(t)?n:n+".":"";return Object.keys(t).flatMap(function(n){return e(t[n],Array.isArray(t)?o+"["+n+"]":""+o+n)}).reduce(function(e,t){return b({},e,t)},[])}(e,t),r={};return x(n,function(e,t){var n=w(t,"."),o=I(n);k(o,"#")?"#value"===o&&(r[F(t,".#value")]=e):r[t]=e}),r}(e);return x(n,function(e,n){var r=e;j(e)&&(r=e["#value"]);var o={default:r};O(r)&&(o.type="switch"),t[n]=o}),t},exports.getTransformationOptions=i,exports.parseSource=X,exports.parseSourceConfigs=function(e,t){try{return Promise.resolve(X(b({source:e},t))).then(function(e){return e.configs})}catch(e){return Promise.reject(e)}},exports.transformResponse=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=null);var r=i(t),o=function(e,t){void 0===t&&(t=null);var n={};return d(e,function(e,r){if(t){var o=t(r,e),a=o.key,u=o.value;a&&(r=a),u&&(e=u)}n[r]=e}),n}(e,function(e){if(r.categorized){var t=p(n,e);t&&(e=a[t.category].plural+"."+e)}return{key:e}});return r.nested?c(o):o},exports.transformToConfigValues=function(e,t){void 0===t&&(t={});var n=i(t),r=function(e,t){void 0===t&&(t=null);var n={};return g(e,function(e,r){var o=v(e,"value")?e.value:e.default;if(t){var a=t(r,e),u=a.key,l=a.value;u&&(r=u),l&&(o=l)}n[r]=o}),n}(e,function(e,t){return{key:e=n.categorized?a[t.category].plural+"."+e:e}});return n.nested?c(r):r},exports.transformToNested=c;
//# sourceMappingURL=index.cjs.map
