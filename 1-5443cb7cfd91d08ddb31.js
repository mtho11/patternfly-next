(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{217:function(e,t,o){"use strict";o.r(t),o.d(t,"graphql",function(){return d}),o.d(t,"StaticQueryContext",function(){return u}),o.d(t,"StaticQuery",function(){return g});var n=o(0),a=o.n(n),l=o(4),p=o.n(l),s=o(321),c=o.n(s);o.d(t,"Link",function(){return c.a}),o.d(t,"withPrefix",function(){return s.withPrefix}),o.d(t,"navigate",function(){return s.navigate}),o.d(t,"push",function(){return s.push}),o.d(t,"replace",function(){return s.replace}),o.d(t,"navigateTo",function(){return s.navigateTo});var m=o(425),i=o.n(m);o.d(t,"PageRenderer",function(){return i.a});var r=o(43);o.d(t,"parsePath",function(){return r.a});var u=a.a.createContext({}),g=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func}},241:function(e,t,o){"use strict";o(28),o(68),o(464);var n=o(465),a=o(0),l=o.n(a),p=o(240),s=o.n(p),c=(o(473),o(217)),m=(o(477),function(e){var t,o=e.links,n=e.isHorizontal,a=void 0!==n&&n?"is-horizontal":"";return t=o?o.map(function(e){var t=e.path,o=e.text,n=e.className;return t.endsWith("-full/")?null:l.a.createElement("li",{className:"Navigation__item "+n,key:"navigation-"+t},l.a.createElement(c.Link,{className:"Navigation_link "+n,to:t},o))}):l.a.createElement("li",{className:"Navigation__item"},l.a.createElement("p",{className:"Navigation_not-found-message"},"None found")),l.a.createElement("div",{className:"Navigation "+a},l.a.createElement("ul",{className:"Navigation__items"},t))});o(478),o(212),o(479),o(480),o(481),t.a=function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"3611919162",render:function(e){var o=e.allSitePage.edges.reduce(function(e,t){var o=t.node.context.type||"page";if(e[o]||(e[o]=[]),null==t.node.context.name){var n=t.node.path.match(/\/([A-Za-z0-9_-]+)$/g)[0].substring(1);"docs"!==(n=n.replace(/-/g," "))&&(t.node.context.name=n)}return e[o].push({path:t.node.path,text:t.node.context.name,className:"is-"+o}),e},{});return l.a.createElement("div",{className:"layout"},l.a.createElement(s.a,null,l.a.createElement("title",null,"PatternFly 4"),l.a.createElement("html",{lang:"en-US"})),l.a.createElement("header",{className:"layout__header"},l.a.createElement("h1",null,l.a.createElement(c.Link,{to:"/"},"PatternFly 4")),l.a.createElement(m,{links:o.page,isHorizontal:!0})),l.a.createElement("main",{className:"layout__main"},l.a.createElement("div",{className:"layout__sidebar"},l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Components"),l.a.createElement(m,{links:o.component})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Layouts"),l.a.createElement(m,{links:o.layout})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Utilities"),l.a.createElement(m,{links:o.utility})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Demos"),l.a.createElement(m,{links:o.demo})),l.a.createElement("div",{className:"layout__sidebar__item"},l.a.createElement("h3",{className:"layout__sidebar_heading"},"Upgrades"),l.a.createElement(m,{links:o.upgrade}))),l.a.createElement("div",{className:"layout__content"},t)),l.a.createElement("footer",{className:"layout__footer"}))},data:n})}},425:function(e,t,o){var n;e.exports=(n=o(476))&&n.default||n},465:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/components/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/layouts/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/upgrades/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/demos/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/utilities/docs/docs",context:{type:"documentation",category:null,slug:null,name:null,title:null}}},{node:{path:"/accessibility-guide",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/contribution",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/guidelines",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/icons",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/modifiers",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/upgrade-guide",context:{type:"page",category:null,slug:null,name:null,title:null}}},{node:{path:"/components/AboutModalBox/examples/",context:{type:"component",category:"components",slug:"AboutModalBox",name:"AboutModalBox",title:"Aboutmodalbox"}}},{node:{path:"/components/Accordion/examples/",context:{type:"component",category:"components",slug:"Accordion",name:"Accordion",title:"Accordion"}}},{node:{path:"/components/Alert/examples/",context:{type:"component",category:"components",slug:"Alert",name:"Alert",title:"Alert"}}},{node:{path:"/components/AlertGroup/examples/",context:{type:"component",category:"components",slug:"AlertGroup",name:"AlertGroup",title:"Alertgroup"}}},{node:{path:"/components/AppLauncher/examples/",context:{type:"component",category:"components",slug:"AppLauncher",name:"AppLauncher",title:"Applauncher"}}},{node:{path:"/components/Avatar/examples/",context:{type:"component",category:"components",slug:"Avatar",name:"Avatar",title:"Avatar"}}},{node:{path:"/components/Backdrop/examples/",context:{type:"component",category:"components",slug:"Backdrop",name:"Backdrop",title:"Backdrop"}}},{node:{path:"/components/BackgroundImage/examples/",context:{type:"component",category:"components",slug:"BackgroundImage",name:"BackgroundImage",title:"Backgroundimage"}}},{node:{path:"/components/Badge/examples/",context:{type:"component",category:"components",slug:"Badge",name:"Badge",title:"Badge"}}},{node:{path:"/components/Brand/examples/",context:{type:"component",category:"components",slug:"Brand",name:"Brand",title:"Brand"}}},{node:{path:"/components/Breadcrumb/examples/",context:{type:"component",category:"components",slug:"Breadcrumb",name:"Breadcrumb",title:"Breadcrumb"}}},{node:{path:"/components/Button/examples/",context:{type:"component",category:"components",slug:"Button",name:"Button",title:"Button"}}},{node:{path:"/components/Card/examples/",context:{type:"component",category:"components",slug:"Card",name:"Card",title:"Card"}}},{node:{path:"/components/Check/examples/",context:{type:"component",category:"components",slug:"Check",name:"Check",title:"Check"}}},{node:{path:"/components/Chip/examples/",context:{type:"component",category:"components",slug:"Chip",name:"Chip",title:"Chip"}}},{node:{path:"/components/ChipGroup/examples/",context:{type:"component",category:"components",slug:"ChipGroup",name:"ChipGroup",title:"Chipgroup"}}},{node:{path:"/components/ClipboardCopy/examples/",context:{type:"component",category:"components",slug:"ClipboardCopy",name:"ClipboardCopy",title:"Clipboardcopy"}}},{node:{path:"/components/Content/examples/",context:{type:"component",category:"components",slug:"Content",name:"Content",title:"Content"}}},{node:{path:"/components/ContextSelector/examples/",context:{type:"component",category:"components",slug:"ContextSelector",name:"ContextSelector",title:"Contextselector"}}},{node:{path:"/components/DataList/examples/",context:{type:"component",category:"components",slug:"DataList",name:"DataList",title:"Datalist"}}},{node:{path:"/components/Dropdown/examples/",context:{type:"component",category:"components",slug:"Dropdown",name:"Dropdown",title:"Dropdown"}}},{node:{path:"/components/EmptyState/examples/",context:{type:"component",category:"components",slug:"EmptyState",name:"EmptyState",title:"Emptystate"}}},{node:{path:"/components/Expandable/examples/",context:{type:"component",category:"components",slug:"Expandable",name:"Expandable",title:"Expandable"}}},{node:{path:"/components/Form/examples/",context:{type:"component",category:"components",slug:"Form",name:"Form",title:"Form"}}},{node:{path:"/components/FormControl/examples/",context:{type:"component",category:"components",slug:"FormControl",name:"FormControl",title:"Formcontrol"}}},{node:{path:"/components/",context:{type:"category",category:"components",slug:"",name:"",title:""}}},{node:{path:"/components/InputGroup/examples/",context:{type:"component",category:"components",slug:"InputGroup",name:"InputGroup",title:"Inputgroup"}}},{node:{path:"/components/Label/examples/",context:{type:"component",category:"components",slug:"Label",name:"Label",title:"Label"}}},{node:{path:"/components/List/examples/",context:{type:"component",category:"components",slug:"List",name:"List",title:"List"}}},{node:{path:"/components/Login/examples/",context:{type:"component",category:"components",slug:"Login",name:"Login",title:"Login"}}},{node:{path:"/components/ModalBox/examples/",context:{type:"component",category:"components",slug:"ModalBox",name:"ModalBox",title:"Modalbox"}}},{node:{path:"/components/Nav/examples/",context:{type:"component",category:"components",slug:"Nav",name:"Nav",title:"Nav"}}},{node:{path:"/components/OptionsMenu/examples/",context:{type:"component",category:"components",slug:"OptionsMenu",name:"OptionsMenu",title:"Optionsmenu"}}},{node:{path:"/components/Page/examples/",context:{type:"component",category:"components",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/components/Pagination/examples/",context:{type:"component",category:"components",slug:"Pagination",name:"Pagination",title:"Pagination"}}},{node:{path:"/components/Popover/examples/",context:{type:"component",category:"components",slug:"Popover",name:"Popover",title:"Popover"}}},{node:{path:"/components/Progress/examples/",context:{type:"component",category:"components",slug:"Progress",name:"Progress",title:"Progress"}}},{node:{path:"/components/Radio/examples/",context:{type:"component",category:"components",slug:"Radio",name:"Radio",title:"Radio"}}},{node:{path:"/components/Select/examples/",context:{type:"component",category:"components",slug:"Select",name:"Select",title:"Select"}}},{node:{path:"/components/Switch/examples/",context:{type:"component",category:"components",slug:"Switch",name:"Switch",title:"Switch"}}},{node:{path:"/components/TabContent/examples/",context:{type:"component",category:"components",slug:"TabContent",name:"TabContent",title:"Tabcontent"}}},{node:{path:"/components/Table/examples/",context:{type:"component",category:"components",slug:"Table",name:"Table",title:"Table"}}},{node:{path:"/components/Tabs/examples/",context:{type:"component",category:"components",slug:"Tabs",name:"Tabs",title:"Tabs"}}},{node:{path:"/components/Title/examples/",context:{type:"component",category:"components",slug:"Title",name:"Title",title:"Title"}}},{node:{path:"/components/Toolbar/examples/",context:{type:"component",category:"components",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/components/Tooltip/examples/",context:{type:"component",category:"components",slug:"Tooltip",name:"Tooltip",title:"Tooltip"}}},{node:{path:"/components/Wizard/examples/",context:{type:"component",category:"components",slug:"Wizard",name:"Wizard",title:"Wizard"}}},{node:{path:"/demos/AboutModal/examples/",context:{type:"demo",category:"demos",slug:"AboutModal",name:"AboutModal",title:"Aboutmodal"}}},{node:{path:"/demos/BasicForms/examples/",context:{type:"demo",category:"demos",slug:"BasicForms",name:"BasicForms",title:"Basicforms"}}},{node:{path:"/demos/Modal/examples/",context:{type:"demo",category:"demos",slug:"Modal",name:"Modal",title:"Modal"}}},{node:{path:"/demos/Page/examples/",context:{type:"demo",category:"demos",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/layouts/Bullseye/examples/",context:{type:"layout",category:"layouts",slug:"Bullseye",name:"Bullseye",title:"Bullseye"}}},{node:{path:"/layouts/Flex/examples/",context:{type:"layout",category:"layouts",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/layouts/Gallery/examples/",context:{type:"layout",category:"layouts",slug:"Gallery",name:"Gallery",title:"Gallery"}}},{node:{path:"/layouts/Grid/examples/",context:{type:"layout",category:"layouts",slug:"Grid",name:"Grid",title:"Grid"}}},{node:{path:"/layouts/Level/examples/",context:{type:"layout",category:"layouts",slug:"Level",name:"Level",title:"Level"}}},{node:{path:"/layouts/Split/examples/",context:{type:"layout",category:"layouts",slug:"Split",name:"Split",title:"Split"}}},{node:{path:"/layouts/Stack/examples/",context:{type:"layout",category:"layouts",slug:"Stack",name:"Stack",title:"Stack"}}},{node:{path:"/upgrade-examples/AlertUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"AlertUpgradeExamples",name:"AlertUpgradeExamples",title:"Alertupgradeexamples"}}},{node:{path:"/upgrade-examples/BadgeUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"BadgeUpgradeExamples",name:"BadgeUpgradeExamples",title:"Badgeupgradeexamples"}}},{node:{path:"/upgrade-examples/CardUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"CardUpgradeExamples",name:"CardUpgradeExamples",title:"Cardupgradeexamples"}}},{node:{path:"/upgrade-examples/LoginUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"LoginUpgradeExamples",name:"LoginUpgradeExamples",title:"Loginupgradeexamples"}}},{node:{path:"/upgrade-examples/ModalUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"ModalUpgradeExamples",name:"ModalUpgradeExamples",title:"Modalupgradeexamples"}}},{node:{path:"/upgrade-examples/PopoverUpgradeExamples/examples/",context:{type:"upgrade",category:"upgrade",slug:"PopoverUpgradeExamples",name:"PopoverUpgradeExamples",title:"Popoverupgradeexamples"}}},{node:{path:"/utilities/Accessibility/examples/",context:{type:"utility",category:"utilities",slug:"Accessibility",name:"Accessibility",title:"Accessibility"}}},{node:{path:"/utilities/Alignment/examples/",context:{type:"utility",category:"utilities",slug:"Alignment",name:"Alignment",title:"Alignment"}}},{node:{path:"/utilities/BoxShadow/examples/",context:{type:"utility",category:"utilities",slug:"BoxShadow",name:"BoxShadow",title:"Boxshadow"}}},{node:{path:"/utilities/Display/examples/",context:{type:"utility",category:"utilities",slug:"Display",name:"Display",title:"Display"}}},{node:{path:"/utilities/Flex/examples/",context:{type:"utility",category:"utilities",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/utilities/Sizing/examples/",context:{type:"utility",category:"utilities",slug:"Sizing",name:"Sizing",title:"Sizing"}}},{node:{path:"/utilities/Spacing/examples/",context:{type:"utility",category:"utilities",slug:"Spacing",name:"Spacing",title:"Spacing"}}},{node:{path:"/components/AboutModalBox/examples-full/",context:{type:"component",category:"components",slug:"AboutModalBox",name:"AboutModalBox",title:"Aboutmodalbox"}}},{node:{path:"/components/Accordion/examples-full/",context:{type:"component",category:"components",slug:"Accordion",name:"Accordion",title:"Accordion"}}},{node:{path:"/components/Alert/examples-full/",context:{type:"component",category:"components",slug:"Alert",name:"Alert",title:"Alert"}}},{node:{path:"/components/AlertGroup/examples-full/",context:{type:"component",category:"components",slug:"AlertGroup",name:"AlertGroup",title:"Alertgroup"}}},{node:{path:"/components/AppLauncher/examples-full/",context:{type:"component",category:"components",slug:"AppLauncher",name:"AppLauncher",title:"Applauncher"}}},{node:{path:"/components/Avatar/examples-full/",context:{type:"component",category:"components",slug:"Avatar",name:"Avatar",title:"Avatar"}}},{node:{path:"/components/Backdrop/examples-full/",context:{type:"component",category:"components",slug:"Backdrop",name:"Backdrop",title:"Backdrop"}}},{node:{path:"/components/BackgroundImage/examples-full/",context:{type:"component",category:"components",slug:"BackgroundImage",name:"BackgroundImage",title:"Backgroundimage"}}},{node:{path:"/components/Badge/examples-full/",context:{type:"component",category:"components",slug:"Badge",name:"Badge",title:"Badge"}}},{node:{path:"/components/Brand/examples-full/",context:{type:"component",category:"components",slug:"Brand",name:"Brand",title:"Brand"}}},{node:{path:"/components/Breadcrumb/examples-full/",context:{type:"component",category:"components",slug:"Breadcrumb",name:"Breadcrumb",title:"Breadcrumb"}}},{node:{path:"/components/Button/examples-full/",context:{type:"component",category:"components",slug:"Button",name:"Button",title:"Button"}}},{node:{path:"/components/Card/examples-full/",context:{type:"component",category:"components",slug:"Card",name:"Card",title:"Card"}}},{node:{path:"/components/Check/examples-full/",context:{type:"component",category:"components",slug:"Check",name:"Check",title:"Check"}}},{node:{path:"/components/Chip/examples-full/",context:{type:"component",category:"components",slug:"Chip",name:"Chip",title:"Chip"}}},{node:{path:"/components/ChipGroup/examples-full/",context:{type:"component",category:"components",slug:"ChipGroup",name:"ChipGroup",title:"Chipgroup"}}},{node:{path:"/components/ClipboardCopy/examples-full/",context:{type:"component",category:"components",slug:"ClipboardCopy",name:"ClipboardCopy",title:"Clipboardcopy"}}},{node:{path:"/components/Content/examples-full/",context:{type:"component",category:"components",slug:"Content",name:"Content",title:"Content"}}},{node:{path:"/components/ContextSelector/examples-full/",context:{type:"component",category:"components",slug:"ContextSelector",name:"ContextSelector",title:"Contextselector"}}},{node:{path:"/components/DataList/examples-full/",context:{type:"component",category:"components",slug:"DataList",name:"DataList",title:"Datalist"}}},{node:{path:"/components/Dropdown/examples-full/",context:{type:"component",category:"components",slug:"Dropdown",name:"Dropdown",title:"Dropdown"}}},{node:{path:"/components/EmptyState/examples-full/",context:{type:"component",category:"components",slug:"EmptyState",name:"EmptyState",title:"Emptystate"}}},{node:{path:"/components/Expandable/examples-full/",context:{type:"component",category:"components",slug:"Expandable",name:"Expandable",title:"Expandable"}}},{node:{path:"/components/Form/examples-full/",context:{type:"component",category:"components",slug:"Form",name:"Form",title:"Form"}}},{node:{path:"/components/FormControl/examples-full/",context:{type:"component",category:"components",slug:"FormControl",name:"FormControl",title:"Formcontrol"}}},{node:{path:"/components/InputGroup/examples-full/",context:{type:"component",category:"components",slug:"InputGroup",name:"InputGroup",title:"Inputgroup"}}},{node:{path:"/components/Label/examples-full/",context:{type:"component",category:"components",slug:"Label",name:"Label",title:"Label"}}},{node:{path:"/components/List/examples-full/",context:{type:"component",category:"components",slug:"List",name:"List",title:"List"}}},{node:{path:"/components/Login/examples-full/",context:{type:"component",category:"components",slug:"Login",name:"Login",title:"Login"}}},{node:{path:"/components/ModalBox/examples-full/",context:{type:"component",category:"components",slug:"ModalBox",name:"ModalBox",title:"Modalbox"}}},{node:{path:"/components/Nav/examples-full/",context:{type:"component",category:"components",slug:"Nav",name:"Nav",title:"Nav"}}},{node:{path:"/components/OptionsMenu/examples-full/",context:{type:"component",category:"components",slug:"OptionsMenu",name:"OptionsMenu",title:"Optionsmenu"}}},{node:{path:"/components/Page/examples-full/",context:{type:"component",category:"components",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/components/Pagination/examples-full/",context:{type:"component",category:"components",slug:"Pagination",name:"Pagination",title:"Pagination"}}},{node:{path:"/components/Popover/examples-full/",context:{type:"component",category:"components",slug:"Popover",name:"Popover",title:"Popover"}}},{node:{path:"/components/Progress/examples-full/",context:{type:"component",category:"components",slug:"Progress",name:"Progress",title:"Progress"}}},{node:{path:"/components/Radio/examples-full/",context:{type:"component",category:"components",slug:"Radio",name:"Radio",title:"Radio"}}},{node:{path:"/components/Select/examples-full/",context:{type:"component",category:"components",slug:"Select",name:"Select",title:"Select"}}},{node:{path:"/components/Switch/examples-full/",context:{type:"component",category:"components",slug:"Switch",name:"Switch",title:"Switch"}}},{node:{path:"/components/TabContent/examples-full/",context:{type:"component",category:"components",slug:"TabContent",name:"TabContent",title:"Tabcontent"}}},{node:{path:"/components/Table/examples-full/",context:{type:"component",category:"components",slug:"Table",name:"Table",title:"Table"}}},{node:{path:"/components/Tabs/examples-full/",context:{type:"component",category:"components",slug:"Tabs",name:"Tabs",title:"Tabs"}}},{node:{path:"/components/Title/examples-full/",context:{type:"component",category:"components",slug:"Title",name:"Title",title:"Title"}}},{node:{path:"/components/Toolbar/examples-full/",context:{type:"component",category:"components",slug:"Toolbar",name:"Toolbar",title:"Toolbar"}}},{node:{path:"/components/Tooltip/examples-full/",context:{type:"component",category:"components",slug:"Tooltip",name:"Tooltip",title:"Tooltip"}}},{node:{path:"/components/Wizard/examples-full/",context:{type:"component",category:"components",slug:"Wizard",name:"Wizard",title:"Wizard"}}},{node:{path:"/demos/AboutModal/examples-full/",context:{type:"demo",category:"demos",slug:"AboutModal",name:"AboutModal",title:"Aboutmodal"}}},{node:{path:"/demos/BasicForms/examples-full/",context:{type:"demo",category:"demos",slug:"BasicForms",name:"BasicForms",title:"Basicforms"}}},{node:{path:"/demos/Modal/examples-full/",context:{type:"demo",category:"demos",slug:"Modal",name:"Modal",title:"Modal"}}},{node:{path:"/demos/Page/examples-full/",context:{type:"demo",category:"demos",slug:"Page",name:"Page",title:"Page"}}},{node:{path:"/layouts/Bullseye/examples-full/",context:{type:"layout",category:"layouts",slug:"Bullseye",name:"Bullseye",title:"Bullseye"}}},{node:{path:"/layouts/Flex/examples-full/",context:{type:"layout",category:"layouts",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/layouts/Gallery/examples-full/",context:{type:"layout",category:"layouts",slug:"Gallery",name:"Gallery",title:"Gallery"}}},{node:{path:"/layouts/Grid/examples-full/",context:{type:"layout",category:"layouts",slug:"Grid",name:"Grid",title:"Grid"}}},{node:{path:"/layouts/Level/examples-full/",context:{type:"layout",category:"layouts",slug:"Level",name:"Level",title:"Level"}}},{node:{path:"/layouts/Split/examples-full/",context:{type:"layout",category:"layouts",slug:"Split",name:"Split",title:"Split"}}},{node:{path:"/layouts/Stack/examples-full/",context:{type:"layout",category:"layouts",slug:"Stack",name:"Stack",title:"Stack"}}},{node:{path:"/upgrade-examples/AlertUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"AlertUpgradeExamples",name:"AlertUpgradeExamples",title:"Alertupgradeexamples"}}},{node:{path:"/upgrade-examples/BadgeUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"BadgeUpgradeExamples",name:"BadgeUpgradeExamples",title:"Badgeupgradeexamples"}}},{node:{path:"/upgrade-examples/CardUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"CardUpgradeExamples",name:"CardUpgradeExamples",title:"Cardupgradeexamples"}}},{node:{path:"/upgrade-examples/LoginUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"LoginUpgradeExamples",name:"LoginUpgradeExamples",title:"Loginupgradeexamples"}}},{node:{path:"/upgrade-examples/ModalUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"ModalUpgradeExamples",name:"ModalUpgradeExamples",title:"Modalupgradeexamples"}}},{node:{path:"/upgrade-examples/PopoverUpgradeExamples/examples-full/",context:{type:"upgrade",category:"upgrade",slug:"PopoverUpgradeExamples",name:"PopoverUpgradeExamples",title:"Popoverupgradeexamples"}}},{node:{path:"/utilities/Accessibility/examples-full/",context:{type:"utility",category:"utilities",slug:"Accessibility",name:"Accessibility",title:"Accessibility"}}},{node:{path:"/utilities/Alignment/examples-full/",context:{type:"utility",category:"utilities",slug:"Alignment",name:"Alignment",title:"Alignment"}}},{node:{path:"/utilities/BoxShadow/examples-full/",context:{type:"utility",category:"utilities",slug:"BoxShadow",name:"BoxShadow",title:"Boxshadow"}}},{node:{path:"/utilities/Display/examples-full/",context:{type:"utility",category:"utilities",slug:"Display",name:"Display",title:"Display"}}},{node:{path:"/utilities/Flex/examples-full/",context:{type:"utility",category:"utilities",slug:"Flex",name:"Flex",title:"Flex"}}},{node:{path:"/utilities/Sizing/examples-full/",context:{type:"utility",category:"utilities",slug:"Sizing",name:"Sizing",title:"Sizing"}}},{node:{path:"/utilities/Spacing/examples-full/",context:{type:"utility",category:"utilities",slug:"Spacing",name:"Spacing",title:"Spacing"}}},{node:{path:"/",context:{type:"page",category:"page",slug:"",name:"",title:""}}}]}}}},476:function(e,t,o){"use strict";o.r(t);o(30);var n=o(0),a=o.n(n),l=o(4),p=o.n(l),s=o(63),c=o(2),m=function(e){var t=e.location,o=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:o},o.json))};m.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},t.default=m},477:function(e,t,o){},479:function(e,t,o){},480:function(e,t,o){},481:function(e,t,o){}}]);
//# sourceMappingURL=1-5443cb7cfd91d08ddb31.js.map