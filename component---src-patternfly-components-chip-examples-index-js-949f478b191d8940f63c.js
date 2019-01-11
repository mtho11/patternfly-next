webpackJsonp([0xe0b288ac56b8],{23:function(t,e,n){var o=n(1);t.exports=(o.default||o).template({1:function(t,e,n,o,i){var a;return" "+t.escapeExpression((a=null!=(a=n["chip-text--modifier"]||(null!=e?e["chip-text--modifier"]:e))?a:n.helperMissing,"function"==typeof a?a.call(null!=e?e:t.nullContext||{},{name:"chip-text--modifier",hash:{},data:i}):a))},3:function(t,e,n,o,i){var a,r;return"    "+(null!=(r=null!=(r=n["chip-text--attribute"]||(null!=e?e["chip-text--attribute"]:e))?r:n.helperMissing,a="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"chip-text--attribute",hash:{},data:i}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,i){var a,r=null!=e?e:t.nullContext||{};return'<span class="pf-c-chip__text'+(null!=(a=n.if.call(r,null!=e?e["chip-text--modifier"]:e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+'"\n'+(null!=(a=n.if.call(r,null!=e?e["chip-text--attribute"]:e,{name:"if",hash:{},fn:t.program(3,i,0),inverse:t.noop,data:i}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:i,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</span>\n"},usePartial:!0,useData:!0})},24:function(t,e,n){var o=n(1);t.exports=(o.default||o).template({1:function(t,e,n,o,i){var a;return" "+t.escapeExpression((a=null!=(a=n["chip--modifier"]||(null!=e?e["chip--modifier"]:e))?a:n.helperMissing,"function"==typeof a?a.call(null!=e?e:t.nullContext||{},{name:"chip--modifier",hash:{},data:i}):a))},3:function(t,e,n,o,i){var a,r;return"    "+(null!=(r=null!=(r=n["chip--attribute"]||(null!=e?e["chip--attribute"]:e))?r:n.helperMissing,a="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"chip--attribute",hash:{},data:i}):r)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,i){var a,r=null!=e?e:t.nullContext||{};return'<div class="pf-c-chip'+(null!=(a=n.if.call(r,null!=e?e["chip--modifier"]:e,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?a:"")+'"\n'+(null!=(a=n.if.call(r,null!=e?e["chip--attribute"]:e,{name:"if",hash:{},fn:t.program(3,i,0),inverse:t.noop,data:i}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:i,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},1142:function(t,e){},918:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the &quot;chip-group&quot; layout. </p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-label=&quot;[button label text]&quot;</code></td> <td><code>.pf-c-button</code></td> <td>Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text.</td> </tr> <tr> <td><code>aria-labelledby=&quot;[id value of .pf-c-button]&quot;</code></td> <td><code>.pf-c-button</code></td> <td>Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed.</td> </tr> <tr> <td><code>aria-hidden=&quot;true&quot;</code></td> <td><code>&lt;i&gt;</code></td> <td>Hides the icon from assistive technologies.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-chip</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates the body of a chip.</td> </tr> <tr> <td><code>.pf-c-chip__text</code></td> <td><code>&lt;span&gt;</code></td> <td>Initiates the text inside of the chip. <strong>Required.</strong></td> </tr> <tr> <td><code>.pf-c-button</code></td> <td><code>&lt;button&gt;</code></td> <td>Initiates the button used to remove the chip. <strong>Required.</strong></td> </tr> <tr> <td><code>.pf-m-overflow</code></td> <td><code>.pf-c-chip</code></td> <td>Applies styling of the overflow chip.</td> </tr> </tbody> </table> "},919:function(t,e){t.exports=""},700:function(t,e,n){var o=n(1);t.exports=(o.default||o).template({1:function(t,e,o,i,a){var r;return(null!=(r=t.invokePartial(n(23),e,{name:"chip-text",hash:{"chip-text--attribute":'id="chip_one"'},fn:t.program(2,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(3),e,{name:"button",hash:{"button--attribute":'aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one"',"button--modifier":"pf-m-plain"},fn:t.program(4,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")},2:function(t,e,n,o,i){return"    Chip\n"},4:function(t,e,o,i,a){var r;return null!=(r=t.invokePartial(n(19),e,{name:"button-icon",hash:{"button-icon--type":"times-circle"},data:a,indent:"    ",helpers:o,partials:i,decorators:t.decorators}))?r:""},6:function(t,e,o,i,a){var r;return(null!=(r=t.invokePartial(n(23),e,{name:"chip-text",hash:{"chip-text--attribute":'id="chip_two"'},fn:t.program(7,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(n(3),e,{name:"button",hash:{"button--attribute":'aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two"',"button--modifier":"pf-m-plain"},fn:t.program(4,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")},7:function(t,e,n,o,i){return"    Really long Chip that goes on and on\n"},9:function(t,e,o,i,a){var r;return null!=(r=t.invokePartial(n(3),e,{name:"button",hash:{"button--modifier":"pf-m-plain"},fn:t.program(10,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:""},10:function(t,e,o,i,a){var r;return null!=(r=t.invokePartial(n(23),e,{name:"chip-text",fn:t.program(11,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:""},11:function(t,e,n,o,i){return"      4 more\n"},compiler:[7,">= 4.0.0"],main:function(t,e,o,i,a){var r;return(null!=(r=t.invokePartial(n(24),e,{name:"chip",fn:t.program(1,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")+"<br>\n<br>\n"+(null!=(r=t.invokePartial(n(24),e,{name:"chip",fn:t.program(6,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")+"<br>\n<br>\n"+(null!=(r=t.invokePartial(n(24),e,{name:"chip",hash:{"chip--modifier":"pf-m-overflow"},fn:t.program(9,a,0),inverse:t.noop,data:a,helpers:o,partials:i,decorators:t.decorators}))?r:"")},usePartial:!0,useData:!0})},1210:function(t,e){t.exports='{{#> chip}}\n  {{#> chip-text chip-text--attribute=\'id="chip_one"\'}}\n    Chip\n  {{/chip-text}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one"\'}}\n    {{> button-icon button-icon--type="times-circle"}}\n  {{/button}}\n{{/chip}}\n<br>\n<br>\n{{#> chip}}\n  {{#> chip-text chip-text--attribute=\'id="chip_two"\'}}\n    Really long Chip that goes on and on\n  {{/chip-text}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two"\'}}\n    {{> button-icon button-icon--type="times-circle"}}\n  {{/button}}\n{{/chip}}\n<br>\n<br>\n{{#> chip chip--modifier="pf-m-overflow"}}\n  {{#> button button--modifier="pf-m-plain"}}\n    {{#> chip-text}}\n      4 more\n    {{/chip-text}}\n  {{/button}}\n{{/chip}}'},318:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var i=n(4),a=o(i),r=n(11),l=o(r),c=n(12),d=o(c),p=n(1210),u=o(p),s=n(700),h=o(s),f=n(918),b=o(f),m=n(919),v=o(m);n(1142);e.Docs=v.default;e.default=function(){var t=(0,h.default)(),e="Chip";return a.default.createElement(l.default,{heading:e},a.default.createElement(d.default,{heading:"Chip",handlebars:u.default,className:"is-light-preview",docs:b.default},t))}}});
//# sourceMappingURL=component---src-patternfly-components-chip-examples-index-js-949f478b191d8940f63c.js.map