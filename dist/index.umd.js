!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash")):"function"==typeof define&&define.amd?define(["exports","lodash"],t):t((e||self).utils={},e.lodash)}(this,function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r,o,i,a=/*#__PURE__*/n(t);e.ConfigCategory=void 0,(o=e.ConfigCategory||(e.ConfigCategory={})).Setting="setting",o.Translation="translation",o.UI="ui",o.Feature="feature",e.ConfigCategoryPlurals=void 0,(i=e.ConfigCategoryPlurals||(e.ConfigCategoryPlurals={})).Setting="settings",i.Translation="translations",i.UI="ui",i.Feature="features";var u=((r={})[e.ConfigCategory.Setting]={plural:e.ConfigCategoryPlurals.Setting,label:"Setting",labelPlural:"Settings",order:1},r[e.ConfigCategory.Translation]={plural:e.ConfigCategoryPlurals.Translation,label:"Translation",labelPlural:"Translations",order:2},r[e.ConfigCategory.UI]={plural:e.ConfigCategoryPlurals.UI,label:"UI",labelPlural:"UI",order:3},r[e.ConfigCategory.Feature]={plural:e.ConfigCategoryPlurals.Feature,label:"Feature",labelPlural:"Features",order:4},r),l=a.default.assign,f=a.default.mapValues,s=function(e){return void 0===e&&(e={}),e=f(e,function(){return!0}),l({nested:!1,categorized:!1,sort:!1},e)},c=a.default.fromPairs,d=a.default.sortBy,g=a.default.toPairs,p=function(e){return c(d(g(e),0))},v=a.default.each,b=a.default.setWith,h=function(e){var t={};return v(e,function(e,n){b(t,n,e,Object)}),t},y=a.default.each,m=a.default.get,C=a.default.each,P=a.default.get,O=a.default.has,w=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r={};return C(e,function(o,i){o.inherit&&(o.default=P(e,o.inherit).default);var a=O(o,"value")&&!n?o.value:o.default;if(t){var u=t(i,o),l=u.key,f=u.value;l&&(i=l),f&&(a=f)}r[i]=a}),r},j=a.default.differenceWith,k=a.default.each,I=a.default.fromPairs,T=a.default.has,F=a.default.isEqual,L=a.default.pickBy,S=a.default.toPairs,E=function(e,t){var n=I(j(S(t),S(e),F)),r=L(n,function(t,n){return!T(e,n)}),o=L(n,function(t,n){return T(e,n)}),i=I(j(S(e),S(t),F));return{added:r,changed:o,removed:L(i,function(e,n){return!T(t,n)})}};function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function z(e,t,n){return z=_()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&U(o,n.prototype),o},z.apply(null,arguments)}function M(e){var t="function"==typeof Map?new Map:void 0;return M=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return z(e,arguments,R(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),U(n,e)},M(e)}var V=a.default.assign,B=a.default.each,D=a.default.get,W=a.default.has,q=a.default.includes,A=a.default.isObject,N=a.default.kebabCase,G=a.default.last,K=a.default.mapKeys,Z=a.default.mapValues,H=a.default.merge,J=a.default.set,Q=a.default.size,X=a.default.split,Y=a.default.startCase,$=a.default.unset,ee=function(e){return"object"==typeof e&&"boolean"==typeof e.default?"switch":"input"},te=function(e,t,n){if(void 0===n&&(n=!1),A(t)){if(!n&&!W(t,"default")&&!W(t,"inherit"))throw new Error('Config "'+e+'" is missing a "default" value (or "inherit" reference).')}else t={default:t};return t},ne=function(e,t,n){if(void 0===n&&(n={}),delete(t=te(e,t)).key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}if(t.inherit){var o="When unchanged, inherits value from <code>"+t.inherit+"</code>.";t.hint=t.hint?o+"<br>"+t.hint:o}return V({default:null,type:ee(t),label:Y(G(X(e,"."))),category:"setting"},t,n)},re=function(e,t,n){return void 0===t&&(t={}),e=K(e,function(e,t){return D(e,"key",t)}),Z(e,function(e,r){return n&&n(r,e),ne(r,e,t)})},oe=function(e,t){return V({label:Y(G(X(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},ie=function(e,t){var n={};return B(e,function(e){if(A(e)&&!W(e,"key"))throw new Error("Onboarder config missing key!");var r=A(e)?e.key:e;if(!W(t,r))throw new Error('Onboarder defines key "'+r+'" which does not exist.');n[r]=A(e)?V({},t[r],e):V({},t[r])}),n},ae=function(e,t){var n={};return B(e,function(e,r){n[r]={label:e.label?e.label:Y(r),configs:ie(e.configs,t)}}),n},ue=function(e){var t=e.getComponents,n=e.getConfigs,r=e.getLabel,o=e.getName,i=e.getOnboarders,a=e.getOverrides,u=e.source;try{var l=function(e){function o(r){function o(e){function t(){function e(){var e=function(){if(a)return Promise.resolve(a()).then(function(e){u.overrides=e})}();return e&&e.then?e.then(function(){return u}):u}var t;B(t=u.configs,function(e,n){if(e.inherit&&!W(t,e.inherit))throw new Error('Config with key "'+n+'" has inherit property defined as "'+e.inherit+'" which is not a valid key!')});var n=function(){if(i)return Promise.resolve(i()).then(function(e){u.onboarders=function(e,t){var n={};return B(e,function(e,r){var o=e.getLabel,i=e.getTabs;n[r]={label:o?o():Y(r),tabs:i?ae(i(),t):{}}}),n}(e,u.configs)})}();return n&&n.then?n.then(e):e()}var r=function(){if(n)return Promise.resolve(n()).then(function(t){var n=re(t),r=function(e,t){void 0===t&&(t={});var n={},r=!1;return B(e,function(e){if("object"==typeof e&&W(e,"component")){if(!W(n,e.component)){var o={};if(W(t,e.component)){var i=t[e.component].getOptions;o=i?i():t[e.component]}n[e.component]=oe(e.component,o)}}else r=!0}),r&&Q(n)&&(n.unsorted=oe("unsorted",{order:999})),n}(n,e);H(u,{configs:n,components:r})});var t,r,o,i=(r={},o=function(e){return Z(e,function(e,t){var n=e.getOptions;return oe(t,n?n():null)})}(t=e),B(t,function(e,t){var n=function(e,n){void 0===n&&(n="setting");var i={component:t},a=function(e,t,n){void 0===n&&(n="setting");var r={group:{path:"groups"},tab:{path:"tabs"}},o=[],i=function(e,t){void 0===t&&(t=null);var n={};return B(e,function(e,r){if(e=te(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},a=function(e,t){return i(t,function(t,n){return"object"==typeof n&&(n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),n.longLabel=Y(e)+" ⇢ "+(n.longLabel?n.longLabel:n.label?n.label:Y(t))),{key:e+"."+t,config:n}})},u=function(a,u,l,f,s,c){return void 0===f&&(f=!0),void 0===s&&(s="group"),q(o,a)?console.warn('"'+a+'" group already exists in "'+n+'"'):o.push(a),function(n,o,i,a){void 0===a&&(a="group");var u=r[a].path,l={};B(i,function(n){if("object"==typeof n&&n.group){var o=n.group;B(r,function(n){var r=D(e,[t,n.path,o]);if(r){J(l,[n.path,o],r),$(e,[t,n.path,o]);var i=D(e,[t,n.path],{});0===Q(i)&&$(e,[t,n.path])}})}}),J(e,[t,u,n],V({label:o},l))}(a,u,l,s),i(l,function(e,t){return t.group=t.group?a+"."+t.group:a,c&&c(e,t),{key:f?a+"."+e:e,config:t}})};return{addNested:a,addFeature:function(e,t,n,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!0),W(n,"enabled"))throw new Error('Feature "'+e+'" should not contain a property named "enabled".');return n=V({enabled:te("enabled",r)},n),u(e,t,n,o,"group",function(t,n){"enabled"!==t&&"object"==typeof n&&J(n,"visibleIf",e+".enabled")})},addGroup:u,addTab:function(e,t){var r=n+"-"+N(e);return u(r,e,t,!1,"tab")},addField:function(e,t){var n={},r=e+".isVisible",o=Y(e),i=o;return n.isVisible={default:!0,label:"Visible",longLabel:o+" ⇢ Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",longLabel:o+" ⇢ Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",longLabel:o+" ⇢ Disabled",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",longLabel:o+" ⇢ Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",longLabel:o+" ⇢ Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t&&t({insert:function(e,t){if(W(n,e))throw new Error("Field "+e+" already exists!");var i=ne(e,t,{visibleIf:r,styleClasses:"col-md-12"});i.longLabel=o+" ⇢ "+i.label,n[e]=i},modify:function(e,t){H(n[e],te(e,t,!0))},remove:function(e){delete n[e]},modifyLabel:function(e){i=e}}),u(e,i,n,!0)},addPluralized:function(e,t){var n={};if(t.zero&&(n[0]={default:t.zero,label:"Zero Case",hint:"When there are 0 items"}),t.one&&(n[1]={default:t.one,label:"One Case",hint:"When there is 1 item"}),t.many&&(n.other={default:t.many,label:"Many Case",hint:"When there are many items"}),Q(n))return a(e,n)}}}(o,t,n);n&&(i=V(i,{category:n}));var u=e(a);if(Q(u)){var l=D(o,[t,"categories"],[]);l.push(n),J(o,[t,"categories"],l),function(e,t,n){H(e,function(e,t,n){return re(t,n,function(t){if(W(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))}(r,u,i)}},i=e.getConfigs,a=e.getFeatures,u=e.getSettings,l=e.getTranslations,f=e.getUI;i?n(i):(u&&n(u,"setting"),l&&n(l,"translation"),f&&n(f,"ui"),a&&n(a,"feature"))}),{configs:r,components:o});H(u,{configs:i.configs,components:i.components})}();return r&&r.then?r.then(t):t()}var u={name:e,label:r};return t?Promise.resolve(t()).then(o):o(null)}return r?Promise.resolve(r()).then(o):o(Y(e))};return Promise.resolve(o?Promise.resolve(o()).then(l):l(u))}catch(e){return Promise.reject(e)}},le=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,U(t,n),r}(/*#__PURE__*/M(Error));e.CATEGORIES=u,e.SourceError=le,e.getDiff=function(e,t){var n=E(e,t),r={};return k(n,function(t,o){k(n[o],function(t,n){r[n]={value:t,status:o,previous:T(e,n)?e[n]:null}})}),r},e.getDiffByStatus=E,e.getTransformationOptions=s,e.logMemoryUsage=function(){var e=process.memoryUsage(),t="Memory Usage\n";for(var n in e)t+=n+": "+Math.round(e[n]/1024/1024*100)/100+" MB\n";console.log(t)},e.parseSource=ue,e.parseSourceConfigs=function(e,t){try{return Promise.resolve(ue(x({source:e},t))).then(function(e){return e.configs})}catch(e){return Promise.reject(e)}},e.sortObjectAlphabetically=p,e.transformFromConfigsToResponse=w,e.transformResponse=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=null);var r=s(t),o=e;return r.sort&&(o=p(o)),r.categorized&&(o=function(e,t){void 0===t&&(t=null);var n={};return y(e,function(e,r){if(t){var o=t(r,e),i=o.key,a=o.value;i&&(r=i),a&&(e=a)}n[r]=e}),n}(o,function(e){var t=m(n,e);return t?e=u[t.category].plural+"."+e:(console.warn("Non-existent key "+e+" is not part of the config set."),e="nonexistent."+e),{key:e}})),r.nested?h(o):o},e.transformToConfigValues=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=!1);var r=s(t),o=w(e,function(e,t){return{key:e=r.categorized?u[t.category].plural+"."+e:e}},n);return r.nested?h(o):o},e.transformToNested=h});
//# sourceMappingURL=index.umd.js.map
