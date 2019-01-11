webpackJsonp([0x8bce8143f2a4],{41:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["nav--modifier"]||(null!=a?a["nav--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"nav--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["nav--attribute"]||(null!=a?a["nav--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"nav--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<nav class="pf-c-nav'+(null!=(o=n.if.call(l,null!=a?a["nav--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["nav--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</nav>\n"},usePartial:!0,useData:!0})},943:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>This component provides the basic chrome for a page, including sidebar, header, and main areas.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;banner&quot;</code></td> <td><code>.pf-c-page__header</code></td> <td>Identifies the element that serves as the banner region. <strong>Required</strong></td> </tr> <tr> <td><code>role=&quot;main&quot;</code></td> <td><code>.pf-c-page__main</code></td> <td>Identifies the element that serves as the main region. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-page</code></td> <td><code>&lt;div&gt;</code></td> <td>Declares the page component.</td> </tr> <tr> <td><code>.pf-c-page__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Declares the page header.</td> </tr> <tr> <td><code>.pf-c-page__header-brand</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the brand component.</td> </tr> <tr> <td><code>.pf-c-page__header-brand-toggle</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the sidebar toggle.</td> </tr> <tr> <td><code>.pf-c-page__header-brand-link</code></td> <td><code>&lt;a&gt;</code></td> <td>Creates a link for the brand logo.</td> </tr> <tr> <td><code>.pf-c-page__header-selector</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the context selector component.</td> </tr> <tr> <td><code>.pf-c-page__header-nav</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the navigation component in the header.</td> </tr> <tr> <td><code>.pf-c-page__header-tools</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the toolbar layout.</td> </tr> <tr> <td><code>.pf-c-page__sidebar</code></td> <td><code>&lt;aside&gt;</code></td> <td>Declares the page sidebar.</td> </tr> <tr> <td><code>.pf-c-page__main</code></td> <td><code>&lt;main&gt;</code></td> <td>Declares the main page area.</td> </tr> <tr> <td><code>.pf-c-page__main-nav</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a container to nest the navigation component in the main page area.</td> </tr> <tr> <td><code>.pf-c-page__main-section</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a section container in the main page area.</td> </tr> <tr> <td><code>.pf-m-icons</code></td> <td><code>.pf-c-page__header-tools .pf-l-toolbar__group</code></td> <td>Modifier for responsive behavior of header icons list.</td> </tr> <tr> <td><code>.pf-m-mobile</code></td> <td><code>.pf-c-page__header-tools .pf-l-toolbar__item</code></td> <td>Modifier for responsive behavior of mobile menu.</td> </tr> <tr> <td><code>.pf-m-user</code></td> <td><code>.pf-c-page__header-tools .pf-l-toolbar__item</code></td> <td>Modifier for responsive behavior of user menu.</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-page__sidebar</code></td> <td>Modifies the sidebar for the expanded state.</td> </tr> <tr> <td><code>.pf-m-collapsed</code></td> <td><code>.pf-c-page__sidebar</code></td> <td>Modifies the sidebar for the collapsed state.</td> </tr> <tr> <td><code>.pf-m-light</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a light theme.</td> </tr> <tr> <td><code>.pf-m-dark-200</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a dark transparent background.</td> </tr> <tr> <td><code>.pf-m-dark-100</code></td> <td><code>.pf-c-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a darker transparent background.</td> </tr> </tbody> </table> "},332:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var r=n(4),o=t(r),l=n(11),i=t(l),d=n(12),p=t(d),s=n(1259),c=t(s),u=n(1258),f=t(u),m=n(765),g=t(m),h=n(764),v=t(h),b=n(943),k=t(b);n(1156);var _=a.Docs=k.default;a.default=function(){var e=(0,g.default)(),a=(0,v.default)(),n="Page";return o.default.createElement(i.default,{docs:_,heading:n,className:"is-component-page"},o.default.createElement(p.default,{heading:"Page Component, Nav Vertical Example",handlebars:c.default},e),o.default.createElement(p.default,{heading:"Page Component, Nav Horizontal Example",handlebars:f.default},a))}},1258:function(e,a){e.exports='{{#> page page--nav-direction="vertical"}}\n  {{#> page-header}}\n    {{!-- Brand --}}\n    {{#> page-header-brand}}\n      Logo\n    {{/page-header-brand}}\n    {{!-- Horizontal Nav --}}\n    {{#> page-header-nav}}\n      pf-c-nav\n    {{/page-header-nav}}\n    {{!-- Toolbar --}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n    {{/page-main-section}}\n    {{#> page-main-section}}\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},764:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(86),a,{name:"page-header",fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(87),a,{name:"page-main",fn:e.program(9,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},2:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(85),a,{name:"page-header-brand",fn:e.program(3,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(233),a,{name:"page-header-nav",fn:e.program(5,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(171),a,{name:"page-header-tools",fn:e.program(7,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},3:function(e,a,n,t,r){return"      Logo\n"},5:function(e,a,n,t,r){return"      pf-c-nav\n"},7:function(e,a,n,t,r){return"      pf-l-toolbar\n"},9:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:e.program(10,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:e.program(10,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:e.program(10,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",fn:e.program(10,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},10:function(e,a,n,t,r){return""},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var l;return null!=(l=e.invokePartial(n(88),a,{name:"page",hash:{"page--nav-direction":"vertical"},fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},1259:function(e,a){e.exports='{{#> page}}\n  {{#> page-header}}\n    {{#> page-header-brand}}\n      {{#> page-header-brand-toggle}}\n        {{#> button button--modifier="pf-m-plain" button--attribute=\'id="nav-toggle" aria-label="Toggle primary navigation"\'}}\n          {{> button-icon button-icon--type="bars"}}\n        {{/button}}\n      {{/page-header-brand-toggle}}\n      {{#> page-header-brand-link}}\n        Logo\n      {{/page-header-brand-link}}\n    {{/page-header-brand}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n  {{#> page-sidebar}}\n    {{#> nav nav--attribute=\'aria-label="Primary Nav Default Example"\'}}\n      pf-c-nav\n    {{/nav}}\n  {{/page-sidebar}}\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n    {{/page-main-section}}\n    {{#> page-main-section}}\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},765:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(86),a,{name:"page-header",fn:e.program(2,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(116),a,{name:"page-sidebar",fn:e.program(11,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(87),a,{name:"page-main",fn:e.program(14,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},2:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(85),a,{name:"page-header-brand",fn:e.program(3,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(171),a,{name:"page-header-tools",fn:e.program(9,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},3:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(232),a,{name:"page-header-brand-toggle",fn:e.program(4,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(231),a,{name:"page-header-brand-link",fn:e.program(7,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},4:function(e,a,t,r,o){var l;return null!=(l=e.invokePartial(n(3),a,{name:"button",hash:{"button--attribute":'id="nav-toggle" aria-label="Toggle primary navigation"',"button--modifier":"pf-m-plain"},fn:e.program(5,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:""},5:function(e,a,t,r,o){var l;return null!=(l=e.invokePartial(n(19),a,{name:"button-icon",hash:{"button-icon--type":"bars"},data:o,indent:"          ",helpers:t,partials:r,decorators:e.decorators}))?l:""},7:function(e,a,n,t,r){return"        Logo\n"},9:function(e,a,n,t,r){return"      pf-l-toolbar\n"},11:function(e,a,t,r,o){var l;return null!=(l=e.invokePartial(n(41),a,{name:"nav",hash:{"nav--attribute":'aria-label="Primary Nav Default Example"'},fn:e.program(12,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:""},12:function(e,a,n,t,r){return"      pf-c-nav\n"},14:function(e,a,t,r,o){var l;return(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:e.program(15,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:e.program(15,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:e.program(15,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(n(46),a,{name:"page-main-section",fn:e.program(15,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:"")},15:function(e,a,n,t,r){return""},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var l;return null!=(l=e.invokePartial(n(88),a,{name:"page",fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:t,partials:r,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},231:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header-brand-link--modifier"]||(null!=a?a["page-header-brand-link--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-link--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand-link--attribute"]||(null!=a?a["page-header-brand-link--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-link--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<a class="pf-c-page__header-brand-link'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand-link--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand-link--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</a>\n"},usePartial:!0,useData:!0})},232:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header-brand-toggle--modifier"]||(null!=a?a["page-header-brand-toggle--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-toggle--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand-toggle--attribute"]||(null!=a?a["page-header-brand-toggle--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-toggle--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page__header-brand-toggle'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand-toggle--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand-toggle--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},85:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header-brand--modifier"]||(null!=a?a["page-header-brand--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-brand--attribute"]||(null!=a?a["page-header-brand--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page__header-brand'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header-brand--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},233:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header-nav--modifier"]||(null!=a?a["page-header-nav--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-nav--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-nav--attribute"]||(null!=a?a["page-header-nav--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-nav--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page__header-nav'+(null!=(o=n.if.call(l,null!=a?a["page-header-nav--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header-nav--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},171:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header-tools--modifier"]||(null!=a?a["page-header-tools--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-tools--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header-tools--attribute"]||(null!=a?a["page-header-tools--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-tools--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page__header-tools'+(null!=(o=n.if.call(l,null!=a?a["page-header-tools--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header-tools--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},86:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-header--modifier"]||(null!=a?a["page-header--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-header--attribute"]||(null!=a?a["page-header--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<header role="banner" class="pf-c-page__header'+(null!=(o=n.if.call(l,null!=a?a["page-header--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-header--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</header>\n"},usePartial:!0,useData:!0})},46:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-main-section--modifier"]||(null!=a?a["page-main-section--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-main-section--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-main-section--attribute"]||(null!=a?a["page-main-section--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-main-section--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<section class="pf-c-page__main-section'+(null!=(o=n.if.call(l,null!=a?a["page-main-section--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-main-section--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</section>\n"},usePartial:!0,useData:!0})},87:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-main--modifier"]||(null!=a?a["page-main--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-main--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-main--attribute"]||(null!=a?a["page-main--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-main--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<main role="main" class="pf-c-page__main'+(null!=(o=n.if.call(l,null!=a?a["page-main--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page-main--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</main>\n"},usePartial:!0,useData:!0})},116:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page-sidebar--modifier"]||(null!=a?a["page-sidebar--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-sidebar--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page-sidebar--attribute"]||(null!=a?a["page-sidebar--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-sidebar--attribute",hash:{},data:r}):l)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page__sidebar'+(null!=(o=n.if.call(l,null!=a?a["page-sidebar--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'" \n'+(null!=(o=n.if.call(l,null!=a?a["page-sidebar--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},88:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var o;return" "+e.escapeExpression((o=null!=(o=n["page--modifier"]||(null!=a?a["page--modifier"]:a))?o:n.helperMissing,"function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page--modifier",hash:{},data:r}):o))},3:function(e,a,n,t,r){var o,l;return"    "+(null!=(l=null!=(l=n["page--attribute"]||(null!=a?a["page--attribute"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page--attribute",hash:{},data:r}):l)?o:"")+"\n"},5:function(e,a,n,t,r){var o,l;return'    id="'+(null!=(l=null!=(l=n["page--id"]||(null!=a?a["page--id"]:a))?l:n.helperMissing,o="function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page--id",hash:{},data:r}):l)?o:"")+'"\n  '},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var o,l=null!=a?a:e.nullContext||{};return'<div class="pf-c-page'+(null!=(o=n.if.call(l,null!=a?a["page--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+'"\n'+(null!=(o=n.if.call(l,null!=a?a["page--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?o:"")+(null!=(o=n.if.call(l,null!=a?a["page--id"]:a,{name:"if",hash:{},fn:e.program(5,r,0),inverse:e.noop,data:r}))?o:"")+">\n"+(null!=(o=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?o:"")+"</div>"},usePartial:!0,useData:!0})},1156:function(e,a){}});
//# sourceMappingURL=component---src-patternfly-components-page-examples-index-js-1fbb55ef909240a7bbb3.js.map