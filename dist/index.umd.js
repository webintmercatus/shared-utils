!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash")):"function"==typeof define&&define.amd?define(["exports","lodash"],t):t((e||self).utils={},e.lodash)}(this,function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r,o,i,a=/*#__PURE__*/n(t);e.ConfigCategory=void 0,(o=e.ConfigCategory||(e.ConfigCategory={})).Setting="setting",o.Translation="translation",o.UI="ui",o.Feature="feature",e.ConfigCategoryPlurals=void 0,(i=e.ConfigCategoryPlurals||(e.ConfigCategoryPlurals={})).Setting="settings",i.Translation="translations",i.UI="ui",i.Feature="features";var u=((r={})[e.ConfigCategory.Setting]={plural:e.ConfigCategoryPlurals.Setting,label:"Setting",labelPlural:"Settings",order:1},r[e.ConfigCategory.Translation]={plural:e.ConfigCategoryPlurals.Translation,label:"Translation",labelPlural:"Translations",order:2},r[e.ConfigCategory.UI]={plural:e.ConfigCategoryPlurals.UI,label:"UI",labelPlural:"UI",order:3},r[e.ConfigCategory.Feature]={plural:e.ConfigCategoryPlurals.Feature,label:"Feature",labelPlural:"Features",order:4},r),l=a.default.assign,f=a.default.mapValues,s=function(e){return void 0===e&&(e={}),e=f(e,function(){return!0}),l({nested:!1,categorized:!1,sort:!1},e)},c=a.default.fromPairs,d=a.default.sortBy,g=a.default.toPairs,p=function(e){return c(d(g(e),0))},v=a.default.each,h=a.default.setWith,b=function(e){var t={};return v(e,function(e,n){h(t,n,e,Object)}),t},y=a.default.each,m=a.default.get,C=a.default.each,P=a.default.get,w=a.default.has,O=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r={};return C(e,function(o,i){o.inherit&&(o.default=P(e,o.inherit).default);var a=w(o,"value")&&!n?o.value:o.default;if(t){var u=t(i,o),l=u.key,f=u.value;l&&(i=l),f&&(a=f)}r[i]=a}),r},k=a.default.differenceWith,j=a.default.each,T=a.default.fromPairs,I=a.default.has,S=a.default.isEqual,F=a.default.pickBy,L=a.default.toPairs,E=function(e,t){var n=T(k(L(t),L(e),S)),r=F(n,function(t,n){return!I(e,n)}),o=F(n,function(t,n){return I(e,n)}),i=T(k(L(e),L(t),S));return{added:r,changed:o,removed:F(i,function(e,n){return!I(t,n)})}};function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _(e,t,n){return _=R()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&M(o,n.prototype),o},_.apply(null,arguments)}function z(e){var t="function"==typeof Map?new Map:void 0;return z=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _(e,arguments,U(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),M(n,e)},z(e)}var D=a.default.assign,V=a.default.each,W=a.default.endsWith,B=a.default.get,q=a.default.has,A=a.default.includes,N=a.default.isObject,G=a.default.kebabCase,K=a.default.last,Z=a.default.mapKeys,H=a.default.mapValues,J=a.default.merge,Q=a.default.set,X=a.default.size,Y=a.default.split,$=a.default.startCase,ee=a.default.unset,te=function(e){return"boolean"==typeof e.default?"switch":"input"},ne=function(e,t,n){if(void 0===n&&(n=!1),N(t)){if(!n&&!q(t,"default")&&!q(t,"inherit"))throw new Error('Config "'+e+'" is missing a "default" value (or "inherit" reference).')}else t={default:t};return t},re=function(e,t,n){if(void 0===n&&(n={}),t=ne(e,t),oe(e,t),delete t.key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}if(t.inherit){var o="When unchanged, inherits value from <code>"+t.inherit+"</code>.";t.hint=t.hint?o+"<br>"+t.hint:o}var i={default:null,type:te(t),label:$(K(Y(e,"."))),category:"setting"};return D(i,t,n)},oe=function(e,t){t.inputType||!W(e,"_id")&&!W(e,"ID")||""!==t.default&&null!==t.default&&A(["boolean","string"],typeof t.default)||console.warn('To remove this warning, set the "inputType" on "'+e+'" to "number" if its value is meant to be parsed as a number ("text" otherwise)')},ie=function(e,t,n){return void 0===t&&(t={}),e=Z(e,function(e,t){return B(e,"key",t)}),H(e,function(e,r){return n&&n(r,e),re(r,e,t)})},ae=function(e,t){return D({label:$(K(Y(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},ue=function(e,t){var n={};return V(e,function(e){if(N(e)&&!q(e,"key"))throw new Error("Onboarder config missing key!");var r=N(e)?e.key:e;if(!q(t,r))throw new Error('Onboarder defines key "'+r+'" which does not exist.');n[r]=N(e)?D({},t[r],e):D({},t[r])}),n},le=function(e,t){var n={};return V(e,function(e,r){n[r]={label:e.label?e.label:$(r),configs:ue(e.configs,t)}}),n},fe=function(e){var t=e.getComponents,n=e.getConfigs,r=e.getLabel,o=e.getMappings,i=e.getName,a=e.getOnboarders,u=e.getOverrides,l=e.source;try{var f=function(e){function i(r){function i(e){function t(){function e(){function e(){var e=function(){if(o)return Promise.resolve(o()).then(function(e){l.mappings=e})}();return e&&e.then?e.then(function(){return l}):l}var t=function(){if(u)return Promise.resolve(u()).then(function(e){l.overrides=e})}();return t&&t.then?t.then(e):e()}var t;V(t=l.configs,function(e,n){if(e.inherit&&!q(t,e.inherit))throw new Error('Config with key "'+n+'" has inherit property defined as "'+e.inherit+'" which is not a valid key!')});var n=function(){if(a)return Promise.resolve(a()).then(function(e){l.onboarders=function(e,t){var n={};return V(e,function(e,r){var o=e.getLabel,i=e.getTabs;n[r]={label:o?o():$(r),tabs:i?le(i(),t):{}}}),n}(e,l.configs)})}();return n&&n.then?n.then(e):e()}var r=function(){if(n)return Promise.resolve(n()).then(function(t){var n=ie(t),r=function(e,t){void 0===t&&(t={});var n={},r=!1;return V(e,function(e){if("object"==typeof e&&q(e,"component")){if(!q(n,e.component)){var o={};if(q(t,e.component)){var i=t[e.component].getOptions;o=i?i():t[e.component]}n[e.component]=ae(e.component,o)}}else r=!0}),r&&X(n)&&(n.unsorted=ae("unsorted",{order:999})),n}(n,e);J(l,{configs:n,components:r})});var t,r,o,i=(r={},o=function(e){return H(e,function(e,t){var n=e.getOptions;return ae(t,n?n():null)})}(t=e),V(t,function(e,t){var n=function(e,n){void 0===n&&(n="setting");var i={component:t},a=function(e,t,n){void 0===n&&(n="setting");var r={group:{path:"groups"},tab:{path:"tabs"}},o=[],i=function(e,t){void 0===t&&(t=null);var n={};return V(e,function(e,r){if(e=ne(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},a=function(e,t){return i(t,function(t,n){return"object"==typeof n&&(n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),n.longLabel=$(e)+" ⇢ "+(n.longLabel?n.longLabel:n.label?n.label:$(t))),{key:e+"."+t,config:n}})},u=function(n,a,u,l,f,s){return void 0===l&&(l=!0),void 0===f&&(f="group"),A(o,n)||o.push(n),function(n,o,i,a){void 0===a&&(a="group");var u=r[a].path,l={};V(i,function(n){if("object"==typeof n&&n.group){var o=n.group;V(r,function(n){var r=B(e,[t,n.path,o]);if(r){Q(l,[n.path,o],r),ee(e,[t,n.path,o]);var i=B(e,[t,n.path],{});0===X(i)&&ee(e,[t,n.path])}})}}),Q(e,[t,u,n],D({label:o},l))}(n,a,u,f),i(u,function(e,t){return t.group=t.group?n+"."+t.group:n,s&&s(e,t),{key:l?n+"."+e:e,config:t}})};return{addNested:a,addFeature:function(e,t,n,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!0),q(n,"enabled"))throw new Error('Feature "'+e+'" should not contain a property named "enabled".');return n=D({enabled:ne("enabled",r)},n),u(e,t,n,o,"group",function(t,n){"enabled"!==t&&"object"==typeof n&&Q(n,"visibleIf",e+".enabled")})},addGroup:u,addTab:function(e,t){var r=n+"-"+G(e);return u(r,e,t,!1,"tab")},addField:function(e,t){var n={},r=e+".isVisible",o=$(e),i=o;return n.isVisible={default:!0,label:"Visible",longLabel:o+" ⇢ Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",longLabel:o+" ⇢ Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",longLabel:o+" ⇢ Disabled",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",longLabel:o+" ⇢ Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",longLabel:o+" ⇢ Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t&&t({insert:function(e,t){if(q(n,e))throw new Error("Field "+e+" already exists!");var i=re(e,t,{visibleIf:r,styleClasses:"col-md-12"});i.longLabel=o+" ⇢ "+i.label,n[e]=i},modify:function(e,t){J(n[e],ne(e,t,!0))},remove:function(e){delete n[e]},modifyLabel:function(e){i=e}}),u(e,i,n,!0)},addPluralized:function(e,t){var n={};if(t.zero&&(n[0]={default:t.zero,label:"Zero Case",hint:"When there are 0 items"}),t.one&&(n[1]={default:t.one,label:"One Case",hint:"When there is 1 item"}),t.many&&(n.other={default:t.many,label:"Many Case",hint:"When there are many items"}),X(n))return a(e,n)}}}(o,t,n);n&&(i=D(i,{category:n}));var u=e(a);if(X(u)){var l=B(o,[t,"categories"],[]);l.push(n),Q(o,[t,"categories"],l),function(e,t,n){J(e,function(e,t,n){return ie(t,n,function(t){if(q(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))}(r,u,i)}},i=e.getConfigs,a=e.getFeatures,u=e.getSettings,l=e.getTranslations,f=e.getUI;i?n(i):(u&&n(u,"setting"),l&&n(l,"translation"),f&&n(f,"ui"),a&&n(a,"feature"))}),{configs:r,components:o});J(l,{configs:i.configs,components:i.components})}();return r&&r.then?r.then(t):t()}var l={name:e,label:r};return t?Promise.resolve(t()).then(i):i(null)}return r?Promise.resolve(r()).then(i):i($(e))};return Promise.resolve(i?Promise.resolve(i()).then(f):f(l))}catch(e){return Promise.reject(e)}},se=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,M(t,n),r}(/*#__PURE__*/z(Error)),ce=a.default.each,de=a.default.get,ge=a.default.includes,pe=a.default.isObject,ve=a.default.isUndefined;e.CATEGORIES=u,e.SourceError=se,e.getDiff=function(e,t){var n=E(e,t),r={};return j(n,function(t,o){j(n[o],function(t,n){r[n]={value:t,status:o,previous:I(e,n)?e[n]:null}})}),r},e.getDiffByStatus=E,e.getTransformationOptions=s,e.logMemoryUsage=function(){var e=process.memoryUsage(),t="Memory Usage\n";for(var n in e)t+=n+": "+Math.round(e[n]/1024/1024*100)/100+" MB\n";console.log(t)},e.parseSource=fe,e.parseSourceConfigs=function(e,t){try{return Promise.resolve(fe(x({source:e},t))).then(function(e){return e.configs})}catch(e){return Promise.reject(e)}},e.sortObjectAlphabetically=p,e.transformFromConfigsToResponse=O,e.transformResponse=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=null);var r=s(t),o=e;return r.sort&&(o=p(o)),r.categorized&&(o=function(e,t){void 0===t&&(t=null);var n={};return y(e,function(e,r){if(t){var o=t(r,e),i=o.key,a=o.value;i&&(r=i),a&&(e=a)}n[r]=e}),n}(o,function(e){var t=m(n,e);return t?e=u[t.category].plural+"."+e:(console.warn("Non-existent key "+e+" is not part of the config set."),e="nonexistent."+e),{key:e}})),r.nested?b(o):o},e.transformToConfigValues=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=!1);var r=s(t),o=O(e,function(e,t){return{key:e=r.categorized?u[t.category].plural+"."+e:e}},n);return r.nested?b(o):o},e.transformToNested=b,e.validateSources=function(e){var t=function(t,n,r){void 0===r&&(r=null);var o=de(e,[t,"configs",n]);r&&(ge(o.values,r)||console.warn("Mapping Check: "+n+' with option "'+r+'" does not exist on '+t)),ve(o)&&console.warn("Mapping Check: "+n+" does not exist on "+t)};ce(e,function(e,n){e.mappings&&ce(e.mappings,function(e,r){ce(e,function(e,o){pe(e)?ce(e,function(e,i){t(n,o,i),t(r,e)}):(t(n,o),t(r,e))})})})}});
//# sourceMappingURL=index.umd.js.map
