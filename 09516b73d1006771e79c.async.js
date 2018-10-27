webpackJsonp([50],{1910:function(t,s,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(3410),r=n(e),l=a(3413),i=n(l),o=a(3416),v=n(o),_=a(3419),c=n(_),h={cn:"# Anchor 锚点\n          用于跳转到页面指定位置。\n\n## 何时使用\n\n需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。\n          ## 代码演示",us:"# Anchor\n\nHyperlinks to scroll on one page.\n\n## When To Use\n\nFor displaying anchor hyperlinks on page and jumping between them.\n## Examples\n"};s.default={category:"Components",subtitle:"锚点",cols:2,type:"Other",title:"Anchor",render:function(){var t=arguments[0];return t("div",{attrs:{id:"components-anchor-demo"}},[t("md",{attrs:{cn:h.cn,us:h.us}}),t(r.default),t(i.default),t("api",[t(v.default,{slot:"cn"}),t(c.default)])])}}},3408:function(t,s,a){var n=a(3409);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(598)("27147236",n,!0,{})},3409:function(t,s,a){s=t.exports=a(597)(!1),s.push([t.i,"#components-anchor-demo .ant-affix{z-index:11}",""])},3410:function(t,s,a){t.exports=a(3411)},3411:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(3412),e=a(58),r=e(null,n.a,!1,null,null,null);s.default=r.exports},3412:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-anchor>\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo"/>\n    <a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo"/>\n    <a-anchor-link href="#API" title="API">\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props"/>\n      <a-anchor-link href="#Link-Props" title="Link Props"/>\n    </a-anchor-link>\n  </a-anchor>\n',script:null,style:null,us:"\n#### basic\nThe simplest usage.\n",cn:"\n#### 基本\n最简单的用法。\n",sourceCode:'<template>\n  <a-anchor>\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\n    <a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo" />\n    <a-anchor-link href="#API" title="API">\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\n      <a-anchor-link href="#Link-Props" title="Link Props" />\n    </a-anchor-link>\n  </a-anchor>\n</template>\n'}}},[a("template",{slot:"component"},[a("a-anchor",[a("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#components-anchor-demo-static-anchor",title:"Fixed demo"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#API",title:"API"}},[a("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)],1),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"基本"}},[t._v("基本 "),a("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("最简单的用法。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"basic"}},[t._v("basic "),a("a",{staticClass:"anchor",attrs:{href:"#basic","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("The simplest usage.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#components-anchor-demo-basic"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Basic demo"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#components-anchor-demo-static-anchor"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Fixed demo"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#API"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"API"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#Anchor-Props"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Anchor Props"')]),t._v(" />")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#Link-Props"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Link Props"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],r={render:n,staticRenderFns:e};s.a=r},3413:function(t,s,a){t.exports=a(3414)},3414:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(3415),e=a(58),r=e(null,n.a,!1,null,null,null);s.default=r.exports},3415:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-anchor :affix="false">\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo"/>\n    <a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo"/>\n    <a-anchor-link href="#API" title="API">\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props"/>\n      <a-anchor-link href="#Link-Props" title="Link Props"/>\n    </a-anchor-link>\n  </a-anchor>\n',script:null,style:null,us:"\n#### Static Anchor\nDo not change state when page is scrolling.\n",cn:"\n#### 静态位置\n不浮动，状态不随页面滚动变化。\n",sourceCode:'<template>\n  <a-anchor :affix="false">\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\n    <a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo" />\n    <a-anchor-link href="#API" title="API">\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\n      <a-anchor-link href="#Link-Props" title="Link Props" />\n    </a-anchor-link>\n  </a-anchor>\n</template>\n'}}},[a("template",{slot:"component"},[a("a-anchor",{attrs:{affix:!1}},[a("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#components-anchor-demo-static-anchor",title:"Fixed demo"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#API",title:"API"}},[a("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),t._v(" "),a("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)],1),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"静态位置"}},[t._v("静态位置 "),a("a",{staticClass:"anchor",attrs:{href:"#静态位置","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("不浮动，状态不随页面滚动变化。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Static-Anchor"}},[t._v("Static Anchor "),a("a",{staticClass:"anchor",attrs:{href:"#Static-Anchor","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Do not change state when page is scrolling.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":affix")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#components-anchor-demo-basic"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Basic demo"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#components-anchor-demo-static-anchor"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Fixed demo"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#API"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"API"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#Anchor-Props"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Anchor Props"')]),t._v(" />")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#Link-Props"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Link Props"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor-link")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-anchor")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],r={render:n,staticRenderFns:e};s.a=r},3416:function(t,s,a){t.exports=a(3417)},3417:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(3418),e=a(58),r=e(null,n.a,!1,null,null,null);s.default=r.exports},3418:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"Anchor-Props"}},[t._v("Anchor Props "),a("a",{staticClass:"anchor",attrs:{href:"#Anchor-Props","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("成员")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("affix")]),t._v(" "),a("td",[t._v("固定模式")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("bounds")]),t._v(" "),a("td",[t._v("锚点区域边界")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("5(px)")])]),t._v(" "),a("tr",[a("td",[t._v("getContainer")]),t._v(" "),a("td",[t._v("指定滚动的容器")]),t._v(" "),a("td",[t._v("() => HTMLElement")]),t._v(" "),a("td",[t._v("() => window")])]),t._v(" "),a("tr",[a("td",[t._v("offsetBottom")]),t._v(" "),a("td",[t._v("距离窗口底部达到指定偏移量后触发")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("offsetTop")]),t._v(" "),a("td",[t._v("距离窗口顶部达到指定偏移量后触发")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("showInkInFixed")]),t._v(" "),a("td",[t._v("固定模式是否显示小圆点")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"Link-Props"}},[t._v("Link Props "),a("a",{staticClass:"anchor",attrs:{href:"#Link-Props","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("成员")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("href")]),t._v(" "),a("td",[t._v("锚点链接")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("文字内容")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")])])])])}],r={render:n,staticRenderFns:e};s.a=r},3419:function(t,s,a){t.exports=a(3420)},3420:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(3421),e=a(58),r=e(null,n.a,!1,null,null,null);s.default=r.exports},3421:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"Anchor-Props"}},[t._v("Anchor Props "),a("a",{staticClass:"anchor",attrs:{href:"#Anchor-Props","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("affix")]),t._v(" "),a("td",[t._v("Fixed mode of Anchor")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("bounds")]),t._v(" "),a("td",[t._v("Bounding distance of anchor area")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("5(px)")])]),t._v(" "),a("tr",[a("td",[t._v("getContainer")]),t._v(" "),a("td",[t._v("Scrolling container")]),t._v(" "),a("td",[t._v("() => HTMLElement")]),t._v(" "),a("td",[t._v("() => window")])]),t._v(" "),a("tr",[a("td",[t._v("offsetBottom")]),t._v(" "),a("td",[t._v("Pixels to offset from bottom when calculating position of scroll")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("offsetTop")]),t._v(" "),a("td",[t._v("Pixels to offset from top when calculating position of scroll")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("showInkInFixed")]),t._v(" "),a("td",[t._v("Whether show ink-balls in Fixed mode")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"Link-Props"}},[t._v("Link Props "),a("a",{staticClass:"anchor",attrs:{href:"#Link-Props","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("href")]),t._v(" "),a("td",[t._v("target of hyperlink")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("content of  hyperlink")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")])])])])}],r={render:n,staticRenderFns:e};s.a=r},651:function(t,s,a){"use strict";function n(t){a(3408)}Object.defineProperty(s,"__esModule",{value:!0});var e=a(1910),r=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);var i=a(58),o=n,v=i(r.a,null,!1,o,null,null);s.default=v.exports}});