(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1014:function(t,n){t.exports='{{#> modal-upgrade-examples}}\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" aria-label="Close">\n            <span class="pficon pficon-close"></span>\n          </button>\n          <h4 class="modal-title" id="myModalLabel">Modal Title</h4>\n        </div>\n        <div class="modal-body">\n          Modal Body\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <button type="button" class="btn btn-primary">Save</button>\n        </div>\n      </div>\n    </div>\n{{/modal-upgrade-examples}}'},1015:function(t,n){t.exports='{{#> modal-box modal-box--attribute=\'aria-labelledby="modal-title" aria-describedby="modal-description"\'}}\n  {{#> button button--modifier="pf-m-plain" button--attribute=\'aria-label="Close Dialog"\'}}\n    {{> button-icon button-icon--type="times"}}\n  {{/button}}\n  {{#> title title titleType="h1" title--modifier="pf-m-2xl" title--attribute=\'id="modal-title"\'}}\n    Modal Header\n  {{/title}}\n  {{#> modal-box-body modal-box-body--attribute=\'id="modal-description"\'}}\n    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n'},1016:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){return'    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" aria-label="Close">\n            <span class="pficon pficon-close"></span>\n          </button>\n          <h4 class="modal-title" id="myModalLabel">Modal Title</h4>\n        </div>\n        <div class="modal-body">\n          Modal Body\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n          <button type="button" class="btn btn-primary">Save</button>\n        </div>\n      </div>\n    </div>\n'},compiler:[7,">= 4.0.0"],main:function(t,n,e,o,l){var i;return null!=(i=t.invokePartial(a(1017),n,{name:"modal-upgrade-examples",fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},1017:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l;return null!=(l=t.invokePartial(e["@partial-block"],n,{name:"@partial-block",data:o,helpers:a,partials:e,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},1018:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,e,o,l){var i;return(null!=(i=t.invokePartial(a(210),n,{name:"button",hash:{"button--attribute":'aria-label="Close Dialog"',"button--modifier":"pf-m-plain"},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(229),null!=n?n.title:n,{name:"title",hash:{"title--attribute":'id="modal-title"',"title--modifier":"pf-m-2xl",titleType:"h1"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(299),n,{name:"modal-box-body",hash:{"modal-box-body--attribute":'id="modal-description"'},fn:t.program(6,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(300),n,{name:"modal-box-footer",fn:t.program(8,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:"")},2:function(t,n,e,o,l){var i;return null!=(i=t.invokePartial(a(213),n,{name:"button-icon",hash:{"button-icon--type":"times"},data:l,indent:"    ",helpers:e,partials:o,decorators:t.decorators}))?i:""},4:function(t,n,a,e,o){return"    Modal Header\n"},6:function(t,n,a,e,o){return"    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n"},8:function(t,n,a,e,o){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,n,e,o,l){var i;return null!=(i=t.invokePartial(a(301),n,{name:"modal-box",hash:{"modal-box--attribute":'aria-labelledby="modal-title" aria-describedby="modal-description"'},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:e,partials:o,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},1019:function(t,n){t.exports=""},1020:function(t,n){t.exports='<h2 id="overview">Overview</h2>\n<p>These examples highlight the differences in implementing Modals in Patternfly 4 compared with Patternfly 3.\nWhen converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>PF3 Class</th>\n<th>Applied To</th>\n<th>PF4 Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.modal-dialog</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>--</td>\n<td>--</td>\n<td>Initiaties a modal dialog.</td>\n</tr>\n<tr>\n<td><code>.modal-content</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Initiaties a modal box. Required.</td>\n</tr>\n<tr>\n<td><code>.modal-header</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-modal-box__header</code></td>\n<td><code>&lt;header&gt;</code></td>\n<td>Initiaties a modal box header. A modal box header is required if there is no modal box body.</td>\n</tr>\n<tr>\n<td><code>.modal-title</code></td>\n<td><code>&lt;h4&gt;</code></td>\n<td><code>.pf-c-modal-box__header-title</code></td>\n<td><code>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;</code></td>\n<td>Initiates a modal box header title.</td>\n</tr>\n<tr>\n<td><code>.modal-body</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-modal-box__body</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Initiates a modal box body. A modal box body is required if there is no modal box header.</td>\n</tr>\n<tr>\n<td><code>.modal-footer</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-modal-box__footer</code></td>\n<td><code>&lt;footer&gt;</code></td>\n<td>Initiates a modal box footer.</td>\n</tr>\n<tr>\n<td><code>.close</code></td>\n<td><code>&lt;button&gt;</code></td>\n<td><code>.pf-c-modal-box__close</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Initiates a modal box close button container. The close container can be nested as the first item in the modal box. Required</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Main Differences in pf3</th>\n<th>Main differences in pf4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Modals have a modal-dialog class.</td>\n<td>--</td>\n</tr>\n</tbody>\n</table>\n'},195:function(t,n,a){"use strict";a.r(n),a.d(n,"Docs",function(){return x});var e=a(0),o=a.n(e),l=a(215),i=a(214),d=a(1014),r=a.n(d),s=a(1015),u=a.n(s),c=a(1016),m=a.n(c),p=a(1018),f=a.n(p),b=a(1019),h=a.n(b),v=a(1020),x=a.n(v).a;n.default=function(){var t=m()(),n=f()();return o.a.createElement(l.a,{docs:x,heading:"Modal Upgrade Examples"},o.a.createElement(i.a,{heading:"Patternfly 3 Modal",handlebars:r.a},t),o.a.createElement(i.a,{heading:"Patternfly 4 Modals",handlebars:u.a,docs:h.a},n))}},213:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){var l;return" fa-"+t.escapeExpression("function"==typeof(l=null!=(l=a["button-icon--type"]||(null!=n?n["button-icon--type"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"button-icon--type",hash:{},data:o}):l)},3:function(t,n,a,e,o){var l;return" "+t.escapeExpression("function"==typeof(l=null!=(l=a["button-icon--modifier"]||(null!=n?n["button-icon--modifier"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"button-icon--modifier",hash:{},data:o}):l)},5:function(t,n,a,e,o){var l,i;return"    "+(null!=(l="function"==typeof(i=null!=(i=a["button-icon--attribute"]||(null!=n?n["button-icon--attribute"]:n))?i:a.helperMissing)?i.call(null!=n?n:t.nullContext||{},{name:"button-icon--attribute",hash:{},data:o}):i)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l,i=null!=n?n:t.nullContext||{};return'<i class="fas'+(null!=(l=a.if.call(i,null!=n?n["button-icon--type"]:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?l:"")+(null!=(l=a.if.call(i,null!=n?n["button-icon--modifier"]:n,{name:"if",hash:{},fn:t.program(3,o,0),inverse:t.noop,data:o}))?l:"")+'"\n  aria-hidden="true"\n'+(null!=(l=a.if.call(i,null!=n?n["button-icon--attribute"]:n,{name:"if",hash:{},fn:t.program(5,o,0),inverse:t.noop,data:o}))?l:"")+"></i>"},useData:!0})},229:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){var l;return t.escapeExpression("function"==typeof(l=null!=(l=a.titleType||(null!=n?n.titleType:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"titleType",hash:{},data:o}):l)},3:function(t,n,a,e,o){return"h1"},5:function(t,n,a,e,o){var l;return" "+t.escapeExpression("function"==typeof(l=null!=(l=a["title--modifier"]||(null!=n?n["title--modifier"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"title--modifier",hash:{},data:o}):l)},7:function(t,n,a,e,o){var l,i;return"   "+(null!=(l="function"==typeof(i=null!=(i=a["title--attribute"]||(null!=n?n["title--attribute"]:n))?i:a.helperMissing)?i.call(null!=n?n:t.nullContext||{},{name:"title--attribute",hash:{},data:o}):i)?l:"")+"\n \t"},compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l,i=null!=n?n:t.nullContext||{};return"<"+(null!=(l=a.if.call(i,null!=n?n.titleType:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.program(3,o,0),data:o}))?l:"")+' class="pf-c-title'+(null!=(l=a.if.call(i,null!=n?n["title--modifier"]:n,{name:"if",hash:{},fn:t.program(5,o,0),inverse:t.noop,data:o}))?l:"")+'"\n'+(null!=(l=a.if.call(i,null!=n?n["title--attribute"]:n,{name:"if",hash:{},fn:t.program(7,o,0),inverse:t.noop,data:o}))?l:"")+">\n"+(null!=(l=t.invokePartial(e["@partial-block"],n,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:e,decorators:t.decorators}))?l:"")+"</"+(null!=(l=a.if.call(i,null!=n?n.titleType:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.program(3,o,0),data:o}))?l:"")+">\n"},usePartial:!0,useData:!0})},299:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){var l;return" "+t.escapeExpression("function"==typeof(l=null!=(l=a["modal-box-body--modifier"]||(null!=n?n["modal-box-body--modifier"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"modal-box-body--modifier",hash:{},data:o}):l)},3:function(t,n,a,e,o){var l,i;return"    "+(null!=(l="function"==typeof(i=null!=(i=a["modal-box-body--attribute"]||(null!=n?n["modal-box-body--attribute"]:n))?i:a.helperMissing)?i.call(null!=n?n:t.nullContext||{},{name:"modal-box-body--attribute",hash:{},data:o}):i)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l,i=null!=n?n:t.nullContext||{};return'<div class="pf-c-modal-box__body'+(null!=(l=a.if.call(i,null!=n?n["modal-box-body--modifier"]:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?l:"")+'"\n'+(null!=(l=a.if.call(i,null!=n?n["modal-box-body--attribute"]:n,{name:"if",hash:{},fn:t.program(3,o,0),inverse:t.noop,data:o}))?l:"")+">\n"+(null!=(l=t.invokePartial(e["@partial-block"],n,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:e,decorators:t.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},300:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){var l;return" "+t.escapeExpression("function"==typeof(l=null!=(l=a["modal-box-footer--modifier"]||(null!=n?n["modal-box-footer--modifier"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"modal-box-footer--modifier",hash:{},data:o}):l)},3:function(t,n,a,e,o){var l,i;return"    "+(null!=(l="function"==typeof(i=null!=(i=a["modal-box-footer--attribute"]||(null!=n?n["modal-box-footer--attribute"]:n))?i:a.helperMissing)?i.call(null!=n?n:t.nullContext||{},{name:"modal-box-footer--attribute",hash:{},data:o}):i)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l,i=null!=n?n:t.nullContext||{};return'<footer class="pf-c-modal-box__footer'+(null!=(l=a.if.call(i,null!=n?n["modal-box-footer--modifier"]:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?l:"")+'"\n'+(null!=(l=a.if.call(i,null!=n?n["modal-box-footer--attribute"]:n,{name:"if",hash:{},fn:t.program(3,o,0),inverse:t.noop,data:o}))?l:"")+">\n"+(null!=(l=t.invokePartial(e["@partial-block"],n,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:e,decorators:t.decorators}))?l:"")+"</footer>\n"},usePartial:!0,useData:!0})},301:function(t,n,a){var e=a(208);t.exports=(e.default||e).template({1:function(t,n,a,e,o){var l;return" "+t.escapeExpression("function"==typeof(l=null!=(l=a["modal-box--modifier"]||(null!=n?n["modal-box--modifier"]:n))?l:a.helperMissing)?l.call(null!=n?n:t.nullContext||{},{name:"modal-box--modifier",hash:{},data:o}):l)},3:function(t,n,a,e,o){var l,i;return"    "+(null!=(l="function"==typeof(i=null!=(i=a["modal-box--attribute"]||(null!=n?n["modal-box--attribute"]:n))?i:a.helperMissing)?i.call(null!=n?n:t.nullContext||{},{name:"modal-box--attribute",hash:{},data:o}):i)?l:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,n,a,e,o){var l,i=null!=n?n:t.nullContext||{};return'<div class="pf-c-modal-box'+(null!=(l=a.if.call(i,null!=n?n["modal-box--modifier"]:n,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o}))?l:"")+'"\n  role="dialog" \n  aria-modal="true"\n'+(null!=(l=a.if.call(i,null!=n?n["modal-box--attribute"]:n,{name:"if",hash:{},fn:t.program(3,o,0),inverse:t.noop,data:o}))?l:"")+">\n"+(null!=(l=t.invokePartial(e["@partial-block"],n,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:e,decorators:t.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})}}]);
//# sourceMappingURL=component---src-patternfly-upgrade-examples-modal-upgrade-examples-examples-index-js-08743d0d46b87caeaaa5.js.map