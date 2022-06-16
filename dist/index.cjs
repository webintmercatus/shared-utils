function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/e(require("lodash")),n=t.default.each,r=t.default.setWith,o=function(e){var t={};return n(e,function(e,n){r(t,n,e,Object)}),t},u=t.default.has,a=function(e){var t={};return function e(t,n,r){void 0===r&&(r=[]),Object.entries(n).forEach(function(n){var o=n[0],a=n[1];"object"!=typeof a||Array.isArray(a)||u(a,"default")?t[[].concat(r,[o]).join(".")]=a:e(t,a,[].concat(r,[o]))})}(t,e),t};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function c(e,t,n){return c=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o},c.apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return d=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)},d(e)}var p=t.default.each,v=t.default.isBoolean,b=t.default.isObject,y=t.default.last,g=t.default.split,m=t.default.startsWith,h=t.default.trimEnd,w=t.default.assign,O=t.default.has,C=t.default.isBoolean,j=t.default.isObject,I=t.default.map,k=t.default.mapValues,x=t.default.merge,E=t.default.size,P=t.default.has,A=t.default.map,F=t.default.mapKeys,V=t.default.map,R=function(e,t){var n=a(t);return V(n,function(t){return t.group=e,t}),n},S=t.default.merge,_=t.default.mapValues,q=t.default.merge,T=t.default.assign,B=t.default.has,D=t.default.map,L=t.default.mapValues,M=t.default.setWith,N=function(e,t){return e.map(function(e){var n="string"==typeof e?e:e.key;if(B(t,n)){var r="object"==typeof e?e:{};return delete r.key,T({model:n},t[n],r)}return console.log(n+" is not a config!"),null}).filter(function(e){if(null!==e)return e})},K=t.default.assign,W=t.default.each,z=t.default.get,G=t.default.has,J=t.default.isObject,U=t.default.kebabCase,H=t.default.last,Q=t.default.mapKeys,X=t.default.mapValues,Y=t.default.merge,Z=t.default.set,$=t.default.size,ee=t.default.split,te=t.default.startCase,ne=t.default.unset,re=function(e){return"boolean"==typeof e.default?"switch":"input"},oe=function(e,t,n){if(void 0===n&&(n=!1),J(t)){if(!n&&!G(t,"default"))throw new Error('Config "'+e+'" is missing a "default" value.')}else t={default:t};return t},ue=function(e,t,n){if(void 0===n&&(n={}),delete(t=oe(e,t)).key,t.docLink){var r='Documentation on this feature can be found <a href="'+t.docLink+'">here</a>.';t.hint=t.hint?r+"<br>"+t.hint:r,delete t.docLink}return K({default:null,type:re(t),label:te(H(ee(e,"."))),category:"setting"},t,n)},ae=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n=null),e=Q(e,function(e,t){return e.key?e.key:t}),X(e,function(e,r){return n&&n(r,e),ue(r,e,t)})},ie=function(e,t,n){Y(e,function(e,t,n){return ae(t,n,function(t){if(G(e,t))throw new Error('Duplicate key: "'+t+'"')})}(e,t,n))},le=function(e,t){return void 0===t&&(t=null),K({label:te(H(ee(e,"."))),order:0,toggleable:!1,description:null,rootKey:null},t)},fe=/*#__PURE__*/function(e){var t,n;function r(t,n){var r;return(r=e.call(this,n.message+' ("'+t+'" source)')||this).name="SourceError",r}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,f(t,n),r}(/*#__PURE__*/d(Error));exports.SourceError=fe,exports.convertToNested=o,exports.createConfigs=a,exports.createConfigsFromJson=function(e){var t={},n=function(e,t){void 0===t&&(t="");var n=function e(t,n){var r;if(!t||"object"!=typeof t)return[(r={},r[n]=t,r)];var o=n?Array.isArray(t)?n:n+".":"";return Object.keys(t).flatMap(function(n){return e(t[n],Array.isArray(t)?o+"["+n+"]":""+o+n)}).reduce(function(e,t){return i({},e,t)},[])}(e,t),r={};return p(n,function(e,t){var n=g(t,"."),o=y(n);m(o,"#")?"#value"===o&&(r[h(t,".#value")]=e):r[t]=e}),r}(e);return p(n,function(e,n){var r=e;b(e)&&(r=e["#value"]);var o={default:r};v(r)&&(o.type="switch"),t[n]=o}),t},exports.createFeature=function(e,t,n){void 0===n&&(n=null);var r=null,o=E(n);if(1!==o)throw new Error('The "'+e+'" group must only have one parent key, '+o+" given.");var u=k(n,function(e,n){if(!r){var o={type:"switch",default:t};if(j(t)){if(!O(t,"default")||!C(t.default))throw new Error('A "default" boolean value must be supplied in the object');x(o,t)}e=w({enabled:o},e),r=n+".enabled"}return e}),a=R(e,u);return I(a,function(e,t){return t!==r&&(e.visibleIf=r),e}),a},exports.createField=function(e,t){void 0===t&&(t=null);var n={},r=e+".isVisible";return n.isVisible={type:"switch",label:"Visible",default:!0,group:e,styleClasses:"col-md-2"},n.required={type:"switch",label:"Required",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.disabled={type:"switch",label:"Disabled",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.readonly={type:"switch",label:"Readonly",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={type:"switch",label:"Autofocus",default:!1,group:e,visibleIf:r,styleClasses:"col-md-2"},n.pattern={type:"input",label:"Pattern",default:"",group:e,visibleIf:r,styleClasses:"col-md-12"},t&&(n=t(n),A(n,function(t,n){P(t,"group")||(t.group=e),"isVisible"===n||P(t,"visibleIf")||(t.visibleIf=r),P(t,"styleClasses")||(t.styleClasses="col-md-12")})),R(e,F(n,function(t,n){return e+"."+n}))},exports.createGroup=R,exports.createSection=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o={configs:{}};return e&&(o.configs=e),t&&(o.category=t),n&&(o.section=n),r&&S(o,r),o},exports.createSubSection=function(e,t){return _(e,function(e){return q(e,{subsection:t}),e})},exports.getMockResponse=function(e,t){void 0===t&&(t=null),t=K({nested:!1},t);var n={};return W(e,function(e,t){n[t]=e.default}),t.nested?o(n):n},exports.parseOnboarder=function(e,t,n){var r={name:e,schema:[],model:{}};if(t){var o=function(e,t){return L(e,function(e,n){return{id:n,order:Number(n),label:e.label,fields:N(e.fields,t)}})}(t,n);r.schema=o,r.model=function(e){var t={};return D(e,function(e){D(e.fields,function(e){M(t,e.model,e.default,Object)})}),t}(o)}return r},exports.parseSource=function(e){var t=e.getComponents,n=e.getConfigs,r=e.getLabel,o=e.getName,u=e.source;try{var a=function(e){var t=function(){if(n)return Promise.resolve(n()).then(function(t){var n=ae(t),r=function(e,t){void 0===t&&(t={});var n={},r=!1;return W(e,function(e){if(G(e,"component")){if(!G(n,e.component)){var o={};if(G(t,e.component)){var u=t[e.component].getOptions;o=u?u():t[e.component]}n[e.component]=le(e.component,o)}}else r=!0}),r&&$(n)&&(n.unsorted=le("unsorted",{order:999})),n}(n,e);Y(l,{configs:n,components:r})});var t,r,o,u=(r={},o=function(e){return X(e,function(e,t){var n=e.getOptions;return le(t,n?n():null)})}(t=e),W(t,function(e,t){var n=e.getConfigs,u=e.getSettings,a=e.getTranslations,i=e.getUI,l={component:t},f=function(e,t){var n={group:{path:"groups"},tab:{path:"tabs"}},r=function(e,t){void 0===t&&(t=null);var n={};return W(e,function(e,r){if(e=oe(r,e),t){var o=t(r,e);n[o.key]=o.config}else n[r]=e}),n},o=function(o,u,a,i,l,f){return void 0===i&&(i=!0),void 0===l&&(l="group"),void 0===f&&(f=null),function(r,o,u,a){void 0===a&&(a="group");var i=n[a].path,l={};W(u,function(r){if(r.group){var o=r.group;W(n,function(n){var r=z(e,[t,n.path,o]);if(r){Z(l,[n.path,o],r),ne(e,[t,n.path,o]);var u=z(e,[t,n.path],{});0===$(u)&&ne(e,[t,n.path])}})}}),Z(e,[t,i,r],K({label:o},l))}(o,u,a,l),r(a,function(e,t){return t.group=t.group?o+"."+t.group:o,f&&f(e,t),{key:i?o+"."+e:e,config:t}})};return{addNested:function(e,t){return r(t,function(t,n){return n.visibleIf&&(n.visibleIf=e+"."+n.visibleIf),{key:e+"."+t,config:n}})},addFeature:function(e,t,n,r,u){if(void 0===r&&(r=!1),void 0===u&&(u=!0),G(n,"enabled"))throw new Error('Feature "'+e+'" should not contain a property named "enabled".');return n=K({enabled:oe("enabled",r)},n),o(e,t,n,u,"group",function(t,n){"enabled"!==t&&(n.visibleIf=e+".enabled")})},addGroup:o,addTab:function(e,t){var n=U(e);return o(n,e,t,!1,"tab")},addField:function(e,t){void 0===t&&(t=null);var n={},r=e+".isVisible";return n.isVisible={default:!0,label:"Visible",styleClasses:"col-md-2"},n.required={default:!1,label:"Required",visibleIf:r,styleClasses:"col-md-2"},n.disabled={default:!1,label:"Disabled",visibleIf:r,styleClasses:"col-md-2"},n.readonly={default:!1,label:"Readonly",visibleIf:r,styleClasses:"col-md-2"},n.hasAutoFocus={default:!1,label:"Autofocus",visibleIf:r,styleClasses:"col-md-2"},n.pattern={default:"",label:"Pattern",visibleIf:r,styleClasses:"col-md-12"},t&&t({insert:function(e,t){if(G(n,e))throw new Error("Field "+e+" already exists!");n[e]=ue(e,t,{visibleIf:r,styleClasses:"col-md-12"})},modify:function(e,t){Y(n[e],oe(e,t,!0))}}),o(e,te(e),n,!0)}}}(o,t);n?ie(r,n(f),l):(u&&ie(r,u(f),K(l,{category:"setting"})),a&&ie(r,a(f),K(l,{category:"translation"})),i&&ie(r,i(f),K(l,{category:"ui"})))}),{configs:r,components:o});Y(l,{configs:u.configs,components:u.components})}();return t&&t.then?t.then(function(){return l}):l},i=o?o():u,l={name:i,label:r?r():te(i)};return Promise.resolve(t?Promise.resolve(t()).then(a):a(null))}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=index.cjs.map
