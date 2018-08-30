webpackJsonp([85902360018623],{661:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Input, Textarea, and select are provided in the form controls component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: <code>aria-label</code>)</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-form-control</code></td> <td><code>&lt;input&gt;</code>,<code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code></td> <td>Initiates an input, textarea or select. For styling of checkboxes or Radios see the <a href=/components/Check/examples/ >check component</a>. <strong>required</strong></td> </tr> <tr> <td><code>.pf-m-form-control-alt</code></td> <td><code>input[type=&quot;text&quot;].pf-c-form-control</code></td> <td>Applies alternative form control styles.</td> </tr> </tbody> </table> "},555:function(e,t,o){var n=o(1);e.exports=(n.default||n).template({1:function(e,t,o,n,a){return""},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var l;return(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"disabled text input",disabled:"yes",id:"textInput1",type:"text",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"standard input example",id:"textInput2",type:"text",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{readonly:"true",value:"readonly input example","aria-label":"readonly input example",id:"textInput3",type:"text",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"Error state input example","aria-invalid":"true",required:"true",id:"textInput4",type:"text",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"Alternative input example",id:"textInput5",type:"text","pf-c-form-control--modifier":"pf-m-form-control-alt",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"Error state alternative input example","aria-invalid":"true",required:"true",id:"textInput6",type:"text","pf-c-form-control--modifier":"pf-m-form-control-alt",input:"true",controlType:"input"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},868:function(e,t){e.exports='{{#> form-control controlType="input" input="true" type="text" id="textInput1" disabled="yes" aria-label="disabled text input"}}\n{{/form-control}}\n{{#> form-control controlType="input" input="true" type="text" id="textInput2" aria-label="standard input example" }}\n{{/form-control}}\n{{#> form-control controlType="input" input="true" type="text" id="textInput3" aria-label="readonly input example" readonly="true" value="readonly input example" readonly="true"}}\n{{/form-control}}\n{{#> form-control controlType="input" input="true" type="text" id="textInput4" required="true" aria-invalid="true" aria-label="Error state input example"}}\n{{/form-control}}\n{{#> form-control controlType="input" input="true" pf-c-form-control--modifier="pf-m-form-control-alt" type="text" id="textInput5" aria-label="Alternative input example"}}\n{{/form-control}}\n{{#> form-control controlType="input" input="true" pf-c-form-control--modifier="pf-m-form-control-alt" type="text" id="textInput6" required="true" aria-invalid="true" aria-label="Error state alternative input example"}}\n{{/form-control}}'},556:function(e,t,o){var n=o(1);e.exports=(n.default||n).template({1:function(e,t,o,n,a){return'  <option value="" selected>Please choose</option>\n  <option value="Mr">Mr</option>\n  <option value="Miss">Miss</option>\n  <option value="Mrs">Mrs</option>\n  <option value="Ms">Ms</option>\n  <option value="Dr">Dr</option>\n  <option value="Other">Other</option>\n'},3:function(e,t,o,n,a){return'  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n'},5:function(e,t,o,n,a){return'  <option value="">make selection</option>\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2">The second option</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var l;return(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"select example",name:"<selectExample1></selectExample1>",id:"selectExample1",controlType:"select"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"select group example",name:"selectExample2",id:"selectExample2",controlType:"select"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"error state select group example",name:"selectExample3",id:"selectExample3","aria-invalid":"true",required:"true",controlType:"select"},fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},869:function(e,t){e.exports='{{#> form-control controlType="select" id="selectExample1" name="<selectExample1></selectExample1>" aria-label="select example"}}\n  <option value="" selected>Please choose</option>\n  <option value="Mr">Mr</option>\n  <option value="Miss">Miss</option>\n  <option value="Mrs">Mrs</option>\n  <option value="Ms">Ms</option>\n  <option value="Dr">Dr</option>\n  <option value="Other">Other</option>\n{{/form-control}}\n{{#> form-control controlType="select" id="selectExample2" name="selectExample2" aria-label="select group example"}}\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n{{/form-control}}\n{{#> form-control controlType="select" required="true" aria-invalid="true" id="selectExample3" name="selectExample3" aria-label="error state select group example"}}\n  <option value="">make selection</option>\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2">The second option</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n{{/form-control}}'},557:function(e,t,o){var n=o(1);e.exports=(n.default||n).template({1:function(e,t,o,n,a){return""},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var l;return(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{"aria-label":"textarea example",id:"textarea1",name:"textarea",controlType:"textarea"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(o(13),t,{name:"form-control",hash:{required:"true","aria-invalid":"true","aria-label":"Error state textarea example",id:"textarea2",name:"textarea",controlType:"textarea"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},870:function(e,t){e.exports='{{#> form-control controlType="textarea" name="textarea" id="textarea1" aria-label="textarea example"}}\n{{/form-control}}\n{{#> form-control controlType="textarea" name="textarea" id="textarea2" aria-label="Error state textarea example" aria-invalid="true" required="true"}}\n{{/form-control}}'},243:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var a=o(5),r=n(a),l=o(11),i=n(l),p=o(12),u=n(p),s=o(868),c=n(s),d=o(869),f=n(d),m=o(870),h=n(m),v=o(555),x=n(v),y=o(556),g=n(y),b=o(557),T=n(b),E=o(661),M=n(E);o(801);var O=t.Docs=M.default;t.default=function(){var e=(0,x.default)(),t=(0,g.default)(),o=(0,T.default)(),n="Form Controls";return r.default.createElement(i.default,{docs:O,heading:n},r.default.createElement(u.default,{heading:"Input Example",handlebars:c.default},e),r.default.createElement(u.default,{heading:"Select Example",handlebars:f.default},t),r.default.createElement(u.default,{heading:"Textarea Example",handlebars:h.default},o))}},13:function(e,t,o){var n=o(1);e.exports=(n.default||n).template({1:function(e,t,o,n,a){var r;return" "+e.escapeExpression((r=null!=(r=o["pf-c-form-control--modifier"]||(null!=t?t["pf-c-form-control--modifier"]:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"pf-c-form-control--modifier",hash:{},data:a}):r))},3:function(e,t,o,n,a){var r;return' type="'+e.escapeExpression((r=null!=(r=o.type||(null!=t?t.type:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"type",hash:{},data:a}):r))+'"'},5:function(e,t,o,n,a){var r;return' placeholder="'+e.escapeExpression((r=null!=(r=o.placeholder||(null!=t?t.placeholder:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"placeholder",hash:{},data:a}):r))+'"'},7:function(e,t,o,n,a){var r;return' value="'+e.escapeExpression((r=null!=(r=o.value||(null!=t?t.value:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"value",hash:{},data:a}):r))+'"'},9:function(e,t,o,n,a){var r;return' name="'+e.escapeExpression((r=null!=(r=o.name||(null!=t?t.name:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a}):r))+'"'},11:function(e,t,o,n,a){return" readonly"},13:function(e,t,o,n,a){var r;return' aria-describedby="'+e.escapeExpression((r=null!=(r=o["aria-describedby"]||(null!=t?t["aria-describedby"]:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"aria-describedby",hash:{},data:a}):r))+'"'},15:function(e,t,o,n,a){var r;return' aria-label="'+e.escapeExpression((r=null!=(r=o["aria-label"]||(null!=t?t["aria-label"]:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"aria-label",hash:{},data:a}):r))+'" '},17:function(e,t,o,n,a){var r;return' aria-errormessage="'+e.escapeExpression((r=null!=(r=o["aria-errormessage"]||(null!=t?t["aria-errormessage"]:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"aria-errormessage",hash:{},data:a}):r))+'"'},19:function(e,t,o,n,a){return'required aria-required="true"'},21:function(e,t,o,n,a){return'aria-invalid="true"'},23:function(e,t,o,n,a){return" disabled"},25:function(e,t,o,n,a){var r;return'id="'+e.escapeExpression((r=null!=(r=o.id||(null!=t?t.id:t))?r:o.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"id",hash:{},data:a}):r))+'"'},27:function(e,t,o,n,a){return' multiple="true"'},29:function(e,t,o,n,a){return">"},31:function(e,t,o,n,a){var r,l;return">"+(null!=(r=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:a,helpers:o,partials:n,decorators:e.decorators}))?r:"")+"</"+e.escapeExpression((l=null!=(l=o.controlType||(null!=t?t.controlType:t))?l:o.helperMissing,"function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"controlType",hash:{},data:a}):l))+">"},compiler:[7,">= 4.0.0"],main:function(e,t,o,n,a){var r,l,i=null!=t?t:e.nullContext||{};return"<"+e.escapeExpression((l=null!=(l=o.controlType||(null!=t?t.controlType:t))?l:o.helperMissing,"function"==typeof l?l.call(i,{name:"controlType",hash:{},data:a}):l))+' class="pf-c-form-control'+(null!=(r=o.if.call(i,null!=t?t["pf-c-form-control--modifier"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?r:"")+'"\n'+(null!=(r=o.if.call(i,null!=t?t.type:t,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.placeholder:t,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.value:t,{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.name:t,{name:"if",hash:{},fn:e.program(9,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.readonly:t,{name:"if",hash:{},fn:e.program(11,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t["aria-describedby"]:t,{name:"if",hash:{},fn:e.program(13,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t["aria-label"]:t,{name:"if",hash:{},fn:e.program(15,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t["aria-errormessage"]:t,{name:"if",hash:{},fn:e.program(17,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.required:t,{name:"if",hash:{},fn:e.program(19,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t["aria-invalid"]:t,{name:"if",hash:{},fn:e.program(21,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.disabled:t,{name:"if",hash:{},fn:e.program(23,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.id:t,{name:"if",hash:{},fn:e.program(25,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.multiple:t,{name:"if",hash:{},fn:e.program(27,a,0),inverse:e.noop,data:a}))?r:"")+"\n"+(null!=(r=o.if.call(i,null!=t?t.input:t,{name:"if",hash:{},fn:e.program(29,a,0),inverse:e.program(31,a,0),data:a}))?r:"")+"\n"},usePartial:!0,useData:!0})},801:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-components-form-control-examples-index-js-4467b0eb0822a0f1285b.js.map