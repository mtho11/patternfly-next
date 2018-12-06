webpackJsonp([0xdff047938a4c],{959:function(t,a){t.exports="<h2 id=overview>Overview</h2> <p><code>Tabs</code> should only be used to change content views within a page. The similar-looking but semantically different <a href=https://pf-next.com/components/Nav/examples/ >Horizontal Nav component</a> is available for general navigation use cases.</p> "},960:function(t,a){t.exports="<h2 id=modifiers>Modifiers</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-m-fill</code></td> <td><code>.pf-c-tabs</code></td> <td>Enables the filled tab list layout. <strong>Required</strong></td> </tr> </tbody> </table> "},961:function(t,a){t.exports="<h3 id=accessibility>Accessibility</h3> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-controls=&quot;tabsection1&quot;</code></td> <td><code>.pf-c-tabs__button</code></td> <td>Identifies the section controlled by the tab. <strong>Required</strong></td> </tr> <tr> <td><code>aria-labelledby=&quot;tab1&quot;</code></td> <td><code>section</code></td> <td>Identifies the tab associated with the section. <strong>Required</strong></td> </tr> <tr> <td><code>hidden</code></td> <td><code>section</code></td> <td>Indicates that a tab panel is not currently active. <strong>Required</strong></td> </tr> </tbody> </table> <h3 id=usage>Usage</h3> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-tabs</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a tab component. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-tabs__scroll-button</code></td> <td><code>&lt;button&gt;</code></td> <td>Creates a scroll button. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-tabs__list</code></td> <td><code>&lt;ul&gt;</code></td> <td>Creates a tab list. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-tabs__item</code></td> <td><code>&lt;li&gt;</code></td> <td>Creates a tab item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-tabs__button</code></td> <td><code>&lt;button&gt;</code></td> <td>Creates a tab button. <strong>Required</strong></td> </tr> <tr> <td><code>id=&quot;tab1&quot;</code></td> <td><code>.pf-c-tabs__button</code></td> <td>Uniquely identifies the tab. <strong>Required</strong></td> </tr> </tbody> </table> <h3 id=modifiers>Modifiers</h3> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-m-current</code></td> <td><code>.pf-c-tabs__item</code></td> <td>Highlights the current tab.</td> </tr> </tbody> </table> "},962:function(t,a){t.exports="<h3 id=note>Note</h3> <p>Whenever a <code>.pf-m-current</code> tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using <code>.pf-m-start-current</code> or <code>.pf-m-end-current</code> to indicate that the current tab exists in that direction.</p> <h2 id=modifiers>Modifiers</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-m-start</code></td> <td><code>.pf-c-tabs</code></td> <td>Enables the first directional scroll button.</td> </tr> <tr> <td><code>.pf-m-start-current</code></td> <td><code>.pf-c-tabs</code></td> <td>Highlights the first directional scroll button.</td> </tr> <tr> <td><code>.pf-m-end</code></td> <td><code>.pf-c-tabs</code></td> <td>Enables the second directional scroll button.</td> </tr> <tr> <td><code>.pf-m-end-current</code></td> <td><code>.pf-c-tabs</code></td> <td>Highlights the second directional scroll button.</td> </tr> </tbody> </table> "},963:function(t,a){t.exports="<h3 id=note>Note</h3> <p>Secondary tabs can be placed as an independent component anywhere within an interface. If placed directly adjacent to a set of primary tabs, they adopt a small amount of styling to properly align the two tab sets.</p> <p>If secondary tabs cannot be placed directly adjacent to primary tabs, <code>.pf-m-tabs-secondary</code> can be applied to a directly adjacent container <code>&lt;div&gt;</code> with <code>.pf-c-tabs</code> as a child to achieve the same effect.</p> <h3 id=modifiers>Modifiers</h3> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-m-tabs-secondary</code></td> <td><code>.pf-c-tabs</code> or <code>&lt;div&gt;</code></td> <td>Creates a secondary tabs component. <strong>Required</strong></td> </tr> </tbody> </table> "},328:function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0,a.Docs=a.headingText=void 0;var r=e(4),o=n(r),i=e(11),s=n(i),l=e(12),b=n(l),u=e(1288),d=n(u),c=e(1290),p=n(c),m=e(1287),f=n(m),h=e(1289),v=n(h),g=e(807),x=n(g),P=e(961),y=n(P),k=e(809),T=n(k),_=e(963),C=n(_),q=e(806),M=n(q),w=e(960),S=n(w),E=e(808),D=n(E),R=e(962),A=n(R),O=e(959),I=n(O);e(1162);var H=a.headingText="Tabs",N=a.Docs=I.default;a.default=function(){var t=(0,x.default)(),a=(0,T.default)(),e=(0,M.default)(),n=(0,D.default)();return o.default.createElement(s.default,{docs:N,heading:H},o.default.createElement(b.default,{heading:"Primary tabs with sections",handlebars:d.default,docs:y.default},t),o.default.createElement(b.default,{heading:"Scroll buttons",handlebars:v.default,docs:A.default},n),o.default.createElement(b.default,{heading:"Primary tabs with secondary tabs",handlebars:p.default,docs:C.default},a),o.default.createElement(b.default,{heading:"Filled tabs",handlebars:f.default,docs:S.default},e))}},806:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(141),a,{name:"tabs-list",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},2:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",hash:{"tabs-item--current":"true"},fn:t.program(3,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(6,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(9,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},3:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex4-tab1"'},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},4:function(t,a,e,n,r){return"        Tab item 1\n"},6:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex4-tab2"'},fn:t.program(7,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},7:function(t,a,e,n,r){return"        Tab item 2\n"},9:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex4-tab3"'},fn:t.program(10,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},10:function(t,a,e,n,r){return"        Tab item 3\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(142),a,{name:"tabs",hash:{"tabs--attribute":'aria-label="Filled tabs example"',"tabs--modifier":"pf-m-fill"},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},1287:function(t,a){t.exports='{{#> tabs tabs--modifier="pf-m-fill" tabs--attribute=\'aria-label="Filled tabs example"\'}}\n  {{#> tabs-list}}\n    {{#> tabs-item tabs-item--current="true"}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex4-tab1"\'}}\n        Tab item 1\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex4-tab2"\'}}\n        Tab item 2\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex4-tab3"\'}}\n        Tab item 3\n      {{/tabs-button}}\n    {{/tabs-item}}\n  {{/tabs-list}}\n{{/tabs}}\n'},1288:function(t,a){t.exports='{{#> tabs tabs--attribute=\'aria-label="Primary tabs with sections example"\'}}\n  {{#> tabs-list}}\n    {{#> tabs-item tabs-item--attribute=\'\' tabs-item--current="true"}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex1-tab1" aria-controls="ex1-section1"\'}}\n        Tab item 1\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex1-tab2" aria-controls="ex1-section2"\'}}\n        Tab item 2\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex1-tab3" aria-controls="ex1-section3"\'}}\n        Tab item 3\n      {{/tabs-button}}\n    {{/tabs-item}}\n  {{/tabs-list}}\n{{/tabs}}\n\n{{#> tabs-section tabs-section--attribute=\'id="ex1-section1" aria-labelledby="ex1-tab1"\'}}\n  Tab 1 section\n{{/tabs-section}}\n{{#> tabs-section tabs-section--attribute=\'id="ex1-section2" aria-labelledby="ex1-tab2" hidden\'}}\n  Tab 2 section\n{{/tabs-section}}\n{{#> tabs-section tabs-section--attribute=\'id="ex1-section3" aria-labelledby="ex1-tab3" hidden\'}}\n  Tab 3 section\n{{/tabs-section}}\n'},807:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(141),a,{name:"tabs-list",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},2:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",hash:{"tabs-item--current":"true","tabs-item--attribute":""},fn:t.program(3,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(6,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(9,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},3:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex1-tab1" aria-controls="ex1-section1"'},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},4:function(t,a,e,n,r){return"        Tab item 1\n"},6:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex1-tab2" aria-controls="ex1-section2"'},fn:t.program(7,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},7:function(t,a,e,n,r){return"        Tab item 2\n"},9:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex1-tab3" aria-controls="ex1-section3"'},fn:t.program(10,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},10:function(t,a,e,n,r){return"        Tab item 3\n"},12:function(t,a,e,n,r){return"  Tab 1 section\n"},14:function(t,a,e,n,r){return"  Tab 2 section\n"},16:function(t,a,e,n,r){return"  Tab 3 section\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(142),a,{name:"tabs",hash:{"tabs--attribute":'aria-label="Primary tabs with sections example"'},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+"\n"+(null!=(i=t.invokePartial(e(225),a,{name:"tabs-section",hash:{"tabs-section--attribute":'id="ex1-section1" aria-labelledby="ex1-tab1"'},fn:t.program(12,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(225),a,{name:"tabs-section",hash:{"tabs-section--attribute":'id="ex1-section2" aria-labelledby="ex1-tab2" hidden'},fn:t.program(14,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(225),a,{name:"tabs-section",hash:{"tabs-section--attribute":'id="ex1-section3" aria-labelledby="ex1-tab3" hidden'},fn:t.program(16,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},usePartial:!0,useData:!0})},1289:function(t,a){t.exports='{{#> tabs tabs--modifier="pf-m-start pf-m-start-current pf-m-end" tabs--attribute=\'aria-label="Scroll buttons example"\'}}\n  {{#> tabs-list}}\n    {{#> tabs-item tabs-item--current="true"}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab1"\'}}\n        Tab item 1\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab2"\'}}\n        Tab item 2\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab3"\'}}\n        Tab item 3\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab4"\'}}\n        Tab item 4\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab5"\'}}\n        Tab item 5\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab6"\'}}\n        Tab item 6\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab7"\'}}\n        Tab item 7\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab8"\'}}\n        Tab item 8\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab9"\'}}\n        Tab item 9\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex2-tab10"\'}}\n        Tab item 10\n      {{/tabs-button}}\n    {{/tabs-item}}\n  {{/tabs-list}}\n{{/tabs}}\n'},808:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(141),a,{name:"tabs-list",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},2:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",hash:{"tabs-item--current":"true"},fn:t.program(3,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(6,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(9,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(12,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(15,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(18,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(21,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(24,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(27,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(30,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},3:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab1"'},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},4:function(t,a,e,n,r){return"        Tab item 1\n"},6:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab2"'},fn:t.program(7,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},7:function(t,a,e,n,r){return"        Tab item 2\n"},9:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab3"'},fn:t.program(10,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},10:function(t,a,e,n,r){return"        Tab item 3\n"},12:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab4"'},fn:t.program(13,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},13:function(t,a,e,n,r){return"        Tab item 4\n"},15:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab5"'},fn:t.program(16,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},16:function(t,a,e,n,r){return"        Tab item 5\n"},18:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab6"'},fn:t.program(19,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},19:function(t,a,e,n,r){return"        Tab item 6\n"},21:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab7"'},fn:t.program(22,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},22:function(t,a,e,n,r){return"        Tab item 7\n"},24:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab8"'},fn:t.program(25,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},25:function(t,a,e,n,r){return"        Tab item 8\n"},27:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab9"'},fn:t.program(28,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},28:function(t,a,e,n,r){return"        Tab item 9\n"},30:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex2-tab10"'},fn:t.program(31,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},31:function(t,a,e,n,r){return"        Tab item 10\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(142),a,{name:"tabs",hash:{"tabs--attribute":'aria-label="Scroll buttons example"',"tabs--modifier":"pf-m-start pf-m-start-current pf-m-end"},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},1290:function(t,a){t.exports='{{#> tabs tabs--attribute=\'aria-label="Primary tabs example"\'}}\n  {{#> tabs-list}}\n    {{#> tabs-item tabs-item--current="true"}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-tab1"\'}}\n        Tab item 1\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-tab2"\'}}\n        Tab item 2\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-tab3"\'}}\n        Tab item 3\n      {{/tabs-button}}\n    {{/tabs-item}}\n  {{/tabs-list}}\n{{/tabs}}\n\n{{#> tabs tabs--modifier="pf-m-tabs-secondary" tabs--attribute=\'aria-label="Secondary tabs example"\'}}\n  {{#> tabs-list}}\n    {{#> tabs-item tabs-item--current="true"}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-secondary-tab1"\'}}\n        Secondary tab item 1\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-secondary-tab2"\'}}\n        Secondary tab item 2\n      {{/tabs-button}}\n    {{/tabs-item}}\n    {{#> tabs-item}}\n      {{#> tabs-button tabs-button--attribute=\'id="ex3-secondary-tab3"\'}}\n        Secondary tab item 3\n      {{/tabs-button}}\n    {{/tabs-item}}\n  {{/tabs-list}}\n{{/tabs}}\n'},809:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(141),a,{name:"tabs-list",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},2:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",hash:{"tabs-item--current":"true"},fn:t.program(3,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(6,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(9,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},3:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-tab1"'},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},4:function(t,a,e,n,r){return"        Tab item 1\n"},6:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-tab2"'},fn:t.program(7,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},7:function(t,a,e,n,r){return"        Tab item 2\n"},9:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-tab3"'},fn:t.program(10,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},10:function(t,a,e,n,r){return"        Tab item 3\n"},12:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(141),a,{name:"tabs-list",fn:t.program(13,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},13:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",hash:{"tabs-item--current":"true"},fn:t.program(14,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(17,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(e(27),a,{name:"tabs-item",fn:t.program(20,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},14:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-secondary-tab1"'},fn:t.program(15,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},15:function(t,a,e,n,r){return"        Secondary tab item 1\n"},17:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-secondary-tab2"'},fn:t.program(18,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},18:function(t,a,e,n,r){return"        Secondary tab item 2\n"},20:function(t,a,n,r,o){var i;return null!=(i=t.invokePartial(e(26),a,{name:"tabs-button",hash:{"tabs-button--attribute":'id="ex3-secondary-tab3"'},fn:t.program(21,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},21:function(t,a,e,n,r){return"        Secondary tab item 3\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,o){var i;return(null!=(i=t.invokePartial(e(142),a,{name:"tabs",hash:{"tabs--attribute":'aria-label="Primary tabs example"'},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+"\n"+(null!=(i=t.invokePartial(e(142),a,{name:"tabs",hash:{"tabs--attribute":'aria-label="Secondary tabs example"',"tabs--modifier":"pf-m-tabs-secondary"},fn:t.program(12,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},usePartial:!0,useData:!0})},26:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var o;return" "+t.escapeExpression((o=null!=(o=e["tab-button--modifier"]||(null!=a?a["tab-button--modifier"]:a))?o:e.helperMissing,"function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"tab-button--modifier",hash:{},data:r}):o))},3:function(t,a,e,n,r){var o,i;return"    "+(null!=(i=null!=(i=e["tabs-button--attribute"]||(null!=a?a["tabs-button--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs-button--attribute",hash:{},data:r}):i)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var o,i=null!=a?a:t.nullContext||{};return'<button class="pf-c-tabs__button'+(null!=(o=e.if.call(i,null!=a?a["tab-button--modifier"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'" \n'+(null!=(o=e.if.call(i,null!=a?a["tabs-button--attribute"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?o:"")+">\n"+(null!=(o=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?o:"")+"</button>\n"},usePartial:!0,useData:!0})},27:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){return" pf-m-current"},3:function(t,a,e,n,r){var o;return" "+t.escapeExpression((o=null!=(o=e["tabs-item--modifier"]||(null!=a?a["tabs-item--modifier"]:a))?o:e.helperMissing,"function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"tabs-item--modifier",hash:{},data:r}):o))},5:function(t,a,e,n,r){var o,i;return"    "+(null!=(i=null!=(i=e["tabs-item--attribute"]||(null!=a?a["tabs-item--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs-item--attribute",hash:{},data:r}):i)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var o,i=null!=a?a:t.nullContext||{};return'<li class="pf-c-tabs__item'+(null!=(o=e.if.call(i,null!=a?a["tabs-item--current"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+(null!=(o=e.if.call(i,null!=a?a["tabs-item--modifier"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?o:"")+'" \n'+(null!=(o=e.if.call(i,null!=a?a["tabs-item--attribute"]:a,{name:"if",hash:{},fn:t.program(5,r,0),inverse:t.noop,data:r}))?o:"")+">\n"+(null!=(o=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?o:"")+"</li>\n"},usePartial:!0,useData:!0})},141:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var o,i;return"  "+(null!=(i=null!=(i=e["tabs-scroll-buttons--attribute"]||(null!=a?a["tabs-scroll-buttons--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs-scroll-buttons--attribute",hash:{},data:r}):i)?o:"")+"\n"},3:function(t,a,e,n,r){var o;return" "+t.escapeExpression((o=null!=(o=e["tabs-list--modifier"]||(null!=a?a["tabs-list--modifier"]:a))?o:e.helperMissing,"function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"tabs-list--modifier",hash:{},data:r}):o))},5:function(t,a,e,n,r){var o,i;return"    "+(null!=(i=null!=(i=e["tabs-list--attribute"]||(null!=a?a["tabs-list--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs-list--attribute",hash:{},data:r}):i)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var o,i=null!=a?a:t.nullContext||{};return'<button class="pf-c-tabs__scroll-button" aria-label="Scroll left" \n'+(null!=(o=e.if.call(i,null!=a?a["tabs-scroll-buttons--attribute"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'>\n  <i class="fas fa-angle-left" hidden></i>\n</button>\n<ul class="pf-c-tabs__list'+(null!=(o=e.if.call(i,null!=a?a["tabs-list--modifier"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?o:"")+'" \n'+(null!=(o=e.if.call(i,null!=a?a["tabs-list--attribute"]:a,{name:"if",hash:{},fn:t.program(5,r,0),inverse:t.noop,data:r}))?o:"")+">\n"+(null!=(o=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?o:"")+'</ul>\n<button class="pf-c-tabs__scroll-button" aria-label="Scroll right" \n'+(null!=(o=e.if.call(i,null!=a?a["tabs-scroll-buttons--attribute"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'>\n  <i class="fas fa-angle-right" hidden></i>\n</button>'},usePartial:!0,useData:!0})},225:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var o;return" "+t.escapeExpression((o=null!=(o=e["tabs-section--modifier"]||(null!=a?a["tabs-section--modifier"]:a))?o:e.helperMissing,"function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"tabs-section--modifier",hash:{},data:r}):o))},3:function(t,a,e,n,r){var o,i;return"    "+(null!=(i=null!=(i=e["tabs-section--attribute"]||(null!=a?a["tabs-section--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs-section--attribute",hash:{},data:r}):i)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var o,i=null!=a?a:t.nullContext||{};return'<section class="pf-c-tabs__section"'+(null!=(o=e.if.call(i,null!=a?a["tabs-section--modifier"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+"\n"+(null!=(o=e.if.call(i,null!=a?a["tabs-section--attribute"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?o:"")+">\n"+(null!=(o=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?o:"")+"</section>\n"},usePartial:!0,useData:!0})},142:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var o;return" "+t.escapeExpression((o=null!=(o=e["tabs--modifier"]||(null!=a?a["tabs--modifier"]:a))?o:e.helperMissing,"function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"tabs--modifier",hash:{},data:r}):o))},3:function(t,a,e,n,r){var o,i;return"    "+(null!=(i=null!=(i=e["tabs--attribute"]||(null!=a?a["tabs--attribute"]:a))?i:e.helperMissing,o="function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"tabs--attribute",hash:{},data:r}):i)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var o,i=null!=a?a:t.nullContext||{};return'<div class="pf-c-tabs'+(null!=(o=e.if.call(i,null!=a?a["tabs--modifier"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'"\n'+(null!=(o=e.if.call(i,null!=a?a["tabs--attribute"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?o:"")+">\n"+(null!=(o=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},1162:function(t,a){}});
//# sourceMappingURL=component---src-patternfly-components-tabs-examples-index-js-c8e76c351254316c0bcf.js.map