webpackJsonp([0x827284a0b612],{29:function(e,a,t){var n=t(1);e.exports=(n.default||n).template({1:function(e,a,t,n,r){var d;return" "+e.escapeExpression((d=null!=(d=t["badge--modifier"]||(null!=a?a["badge--modifier"]:a))?d:t.helperMissing,"function"==typeof d?d.call(null!=a?a:e.nullContext||{},{name:"badge--modifier",hash:{},data:r}):d))},3:function(e,a,t,n,r){var d,o;return"    "+(null!=(o=null!=(o=t["badge--attribute"]||(null!=a?a["badge--attribute"]:a))?o:t.helperMissing,d="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"badge--attribute",hash:{},data:r}):o)?d:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,t,n,r){var d,o=null!=a?a:e.nullContext||{};return'<span class="pf-c-badge'+(null!=(d=t.if.call(o,null!=a?a["badge--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?d:"")+'"\n'+(null!=(d=t.if.call(o,null!=a?a["badge--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?d:"")+">\n"+(null!=(d=e.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:t,partials:n,decorators:e.decorators}))?d:"")+"</span>\n"},usePartial:!0,useData:!0})},255:function(e,a,t){var n=t(1);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,r){var d;return null!=(d=e.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,helpers:t,partials:n,decorators:e.decorators}))?d:""},usePartial:!0,useData:!0})},851:function(e,a){e.exports=""},852:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>These examples highlight the differences in implementing Badges in Patternfly 4 compared with Patternfly 3. When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>PF3 Class</th> <th>Applied To</th> <th>PF4 Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.badge</code></td> <td><code>&lt;span&gt;</code></td> <td><code>.pf-c-badge</code></td> <td><code>&lt;span&gt;</code></td> <td><code>Initiates a badge. Always use with a modifier class.</code></td> </tr> <tr> <td><code>--</code></td> <td><code>--</code></td> <td><code>.pf-m-read</code></td> <td><code>.pf-c-badge</code></td> <td><code>Applies read badge styling.</code></td> </tr> <tr> <td><code>--</code></td> <td><code>--</code></td> <td><code>.pf-m-unread</code></td> <td><code>.pf-c-badge</code></td> <td><code>Applies unread badge styling.</code></td> </tr> </tbody> </table> <table> <thead> <tr> <th>Main Differences in pf3</th> <th>Main differences in pf4</th> </tr> </thead> <tbody> <tr> <td></td> <td>Badges have different styles for read and unread to make the state of that badge clearer.</td> </tr> </tbody> </table> "},757:function(e,a,t){var n=t(1);e.exports=(n.default||n).template({1:function(e,a,t,n,r){return'  <span class="badge">7</span>\n  <span class="badge">24</span>\n  <span class="badge">240</span>\n  <span class="badge">999+</span>\n'},compiler:[7,">= 4.0.0"],main:function(e,a,n,r,d){var o;return null!=(o=e.invokePartial(t(255),a,{name:"badge-upgrade-examples",fn:e.program(1,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},1147:function(e,a){e.exports='{{#> badge-upgrade-examples}}\n  <span class="badge">7</span>\n  <span class="badge">24</span>\n  <span class="badge">240</span>\n  <span class="badge">999+</span>\n{{/badge-upgrade-examples}}'},758:function(e,a,t){var n=t(1);e.exports=(n.default||n).template({1:function(e,a,n,r,d){var o;return(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(2,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(4,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(6,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(8,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"  <br>\n  <br>\n"+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(10,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(4,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(6,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(t(29),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(8,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:"")},2:function(e,a,t,n,r){return"    7\n"},4:function(e,a,t,n,r){return"    24\n"},6:function(e,a,t,n,r){return"    240\n"},8:function(e,a,t,n,r){return"    999+\n"},10:function(e,a,t,n,r){return"  7\n"},compiler:[7,">= 4.0.0"],main:function(e,a,n,r,d){var o;return null!=(o=e.invokePartial(t(255),a,{name:"badge-upgrade-examples",fn:e.program(1,d,0),inverse:e.noop,data:d,helpers:n,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},1148:function(e,a){e.exports='{{#> badge-upgrade-examples}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    7\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    24\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    240\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    999+\n  {{/badge}}\n  <br>\n  <br>\n  {{#> badge badge--modifier="pf-m-unread"}}\n  7\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    24\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    240\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    999+\n  {{/badge}}\n{{/badge-upgrade-examples}}'},317:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var r=t(3),d=n(r),o=t(11),l=n(o),i=t(12),s=n(i),p=t(1147),c=n(p),u=t(1148),f=n(u),g=t(757),m=n(g),b=t(758),h=n(b),v=t(851),P=n(v),x=t(852),k=n(x),y=a.Docs=k.default;a.default=function(){var e=(0,m.default)(),a=(0,h.default)(),t="Badge Upgrade Examples";return d.default.createElement(l.default,{docs:y,heading:t},d.default.createElement(s.default,{heading:"Patternfly 3 Badges",handlebars:c.default},e),d.default.createElement(s.default,{heading:"Patternfly 4 Badges",handlebars:f.default,docs:P.default},a))}}});
//# sourceMappingURL=component---src-patternfly-upgrade-examples-badge-upgrade-examples-examples-index-js-60d76f8affd0b0f64c99.js.map