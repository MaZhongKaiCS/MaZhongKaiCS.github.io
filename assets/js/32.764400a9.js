(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{477:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_2021-12-03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-12-03"}},[t._v("#")]),t._v(" 2021.12.03")]),t._v(" "),a("h3",{attrs:{id:"通过文本与图片的隐写来隐藏信息-版权保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过文本与图片的隐写来隐藏信息-版权保护"}},[t._v("#")]),t._v(" 通过文本与图片的隐写来隐藏信息（版权保护）")]),t._v(" "),a("p",[t._v("参考：https://mp.weixin.qq.com/s/slTtSI7Uezb9CiCIj1B71Q")]),t._v(" "),a("h4",{attrs:{id:"信息隐蔽技术包括"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信息隐蔽技术包括"}},[t._v("#")]),t._v(" 信息隐蔽技术包括：")]),t._v(" "),a("ol",[a("li",[t._v("隐写术")]),t._v(" "),a("li",[t._v("数字水印")]),t._v(" "),a("li",[t._v("隐蔽信道")]),t._v(" "),a("li",[t._v("阀下信道")]),t._v(" "),a("li",[t._v("匿名信道...")])]),t._v(" "),a("h4",{attrs:{id:"隐写术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐写术"}},[t._v("#")]),t._v(" 隐写术：")]),t._v(" "),a("p",[t._v("将信息隐藏在多种载体中，如：视频，硬盘，图像，将隐藏的信息通过特殊方式嵌入到载体中，而又不损害原来信息的表达。旨在保护需要隐藏的信息不被他人识别。")]),t._v(" "),a("h5",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理：")]),t._v(" "),a("p",[t._v("通过将字符串转化为 "),a("strong",[t._v("只有0和1的表示")]),t._v("，然后通过 "),a("strong",[t._v("零宽字符")]),t._v(" 表示0和1，就能实现通过零宽字符来表示一串 看不见的字符串。")]),t._v(" "),a("h5",{attrs:{id:"零宽字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零宽字符"}},[t._v("#")]),t._v(" 零宽字符：")]),t._v(" "),a("p",[t._v("是一种不可打印的Unicode字符，在浏览器等环境中不可见，但是真实存在，获取字符串长度时也会占位置，表示某种控制功能的字符。")]),t._v(" "),a("p",[t._v("针对Unicode的 Surrogate Pair 的情况，处理字符串的核心方法是 codePointAt 和 fromCodePoint")]),t._v(" "),a("p",[t._v("Surrogate Pair ：是UTF-16中用于扩展字符而使用的编码方式，是一种采用四个字节（两个UTF-16编码）来表示一个字符")]),t._v(" "),a("p",[t._v("Unicode 编码单元的范围是从0到1，114，111.开头的128个Unicode编码单元和ASCII 字符编码一样，如果制定的index小于0或大于字符串的长度，则 charCodeAt 返回 NAN")]),t._v(" "),a("p",[t._v("ES6提供了 codePointAt( ) 方法能够正确处理4个字节储存的字符，返回一个字符的码点。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 𠮷 是4个字节 我 是2个字节")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"𠮷"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),a("p",[t._v("String.fromCodePoint 方法是ES6新增加的特性，可以识别大于 0xFFFF的字符，弥补了String.fromCharCode()方法的不足。")]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数据防爬")]),t._v(" "),a("p",[t._v("将零宽字符插入文本中，干扰关键字匹配，爬虫得到的带有零宽字符的数据会影响他们的分析，但不会影响用户的阅读数据。")])]),t._v(" "),a("li",[a("p",[t._v("隐藏文本信息")]),t._v(" "),a("p",[t._v("将自定义组合的零宽字符插入文本中，用户复制后会携带不可见信息，达到隐藏文本信息的作用")])]),t._v(" "),a("li",[a("p",[t._v("避免敏感词过滤")])]),t._v(" "),a("li",[a("p",[t._v("电子书籍或者是影视作品可以嵌入一些隐藏的信息")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);