webpackJsonp([0xe4f0117a7613],{976:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>Split layouts are meant for use in positioning items horizontally, with one of the items being the main content area.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-split</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the split layout.</td> </tr> <tr> <td><code>.pf-l-split__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a split item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-main</code></td> <td><code>.pf-l-stack__item</code></td> <td>Specifies the main item of the layout, which expands horizontally when needed.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-split</code></td> <td>Adds space between items.</td> </tr> </tbody> </table> "},342:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var a=n(4),l=i(a),r=n(11),o=i(r),s=n(12),p=i(s),d=n(1324),u=i(d),c=n(1325),m=i(c),f=n(848),h=i(f),v=n(849),g=i(v),b=n(976),x=i(b);n(1170);var y=e.Docs=x.default;e.default=function(){var t=(0,h.default)(),e=(0,g.default)(),n="Split";return l.default.createElement(o.default,{docs:y,heading:n,className:"is-layout-page"},l.default.createElement(p.default,{heading:"Split Example",handlebars:u.default},t),l.default.createElement(p.default,{heading:"Split Example with gutter",handlebars:m.default},e))}},848:function(t,e,n){var i=n(1);t.exports=(i.default||i).template({1:function(t,e,i,a,l){var r;return(null!=(r=t.invokePartial(n(116),e,{name:"split-item",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(116),e,{name:"split-item",hash:{"split-item--modifier":"pf-m-main"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(116),e,{name:"split-item",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")},2:function(t,e,n,i,a){return"    secondary content\n"},4:function(t,e,n,i,a){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,i,a,l){var r;return null!=(r=t.invokePartial(n(275),e,{name:"split",fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},1324:function(t,e){t.exports='{{#> split}}\n  {{#> split-item}}\n    secondary content\n  {{/split-item}}\n  {{#> split-item split-item--modifier="pf-m-main"}}\n    main content\n  {{/split-item}}\n  {{#> split-item}}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},849:function(t,e,n){var i=n(1);t.exports=(i.default||i).template({1:function(t,e,i,a,l){var r;return(null!=(r=t.invokePartial(n(116),e,{name:"split-item",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(116),e,{name:"split-item",hash:{"split-item--modifier":"pf-m-main"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(116),e,{name:"split-item",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:"")},2:function(t,e,n,i,a){return"    secondary content\n"},4:function(t,e,n,i,a){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,i,a,l){var r;return null!=(r=t.invokePartial(n(275),e,{name:"split",hash:{"split--modifier":"pf-m-gutter"},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:i,partials:a,decorators:t.decorators}))?r:""},usePartial:!0,useData:!0})},1325:function(t,e){t.exports='{{#> split split--modifier="pf-m-gutter"}}\n  {{#> split-item}}\n    secondary content\n  {{/split-item}}\n  {{#> split-item split-item--modifier="pf-m-main"}}\n    main content\n  {{/split-item}}\n  {{#> split-item}}\n    secondary content\n  {{/split-item}}\n{{/split}}\n'},116:function(t,e,n){var i=n(1);t.exports=(i.default||i).template({1:function(t,e,n,i,a){var l;return" "+t.escapeExpression((l=null!=(l=n["split-item--modifier"]||(null!=e?e["split-item--modifier"]:e))?l:n.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"split-item--modifier",hash:{},data:a}):l))},3:function(t,e,n,i,a){var l,r;return"    "+(null!=(r=null!=(r=n["split-item--attribute"]||(null!=e?e["split-item--attribute"]:e))?r:n.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"split-item--attribute",hash:{},data:a}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,i,a){var l,r=null!=e?e:t.nullContext||{};return'<div class="pf-l-split__item'+(null!=(l=n.if.call(r,null!=e?e["split-item--modifier"]:e,{name:"if",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?l:"")+'"\n'+(null!=(l=n.if.call(r,null!=e?e["split-item--attribute"]:e,{name:"if",hash:{},fn:t.program(3,a,0),inverse:t.noop,data:a}))?l:"")+">\n"+(null!=(l=t.invokePartial(i["@partial-block"],e,{name:"@partial-block",data:a,indent:"  ",helpers:n,partials:i,decorators:t.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},275:function(t,e,n){var i=n(1);t.exports=(i.default||i).template({1:function(t,e,n,i,a){var l;return" "+t.escapeExpression((l=null!=(l=n["split--modifier"]||(null!=e?e["split--modifier"]:e))?l:n.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"split--modifier",hash:{},data:a}):l))},3:function(t,e,n,i,a){var l,r;return"    "+(null!=(r=null!=(r=n["split--attribute"]||(null!=e?e["split--attribute"]:e))?r:n.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"split--attribute",hash:{},data:a}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,i,a){var l,r=null!=e?e:t.nullContext||{};return'<div class="pf-l-split'+(null!=(l=n.if.call(r,null!=e?e["split--modifier"]:e,{name:"if",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?l:"")+'"\n'+(null!=(l=n.if.call(r,null!=e?e["split--attribute"]:e,{name:"if",hash:{},fn:t.program(3,a,0),inverse:t.noop,data:a}))?l:"")+">\n"+(null!=(l=t.invokePartial(i["@partial-block"],e,{name:"@partial-block",data:a,indent:"  ",helpers:n,partials:i,decorators:t.decorators}))?l:"")+"</div> "},usePartial:!0,useData:!0})},1170:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-layouts-split-examples-index-js-cae11a5f8814408285b6.js.map