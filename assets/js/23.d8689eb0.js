(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{467:function(e,t,a){"use strict";a.r(t);var s=a(2),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2021-11-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-11-19"}},[e._v("#")]),e._v(" 2021.11.19")]),e._v(" "),a("h2",{attrs:{id:"代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[e._v("#")]),e._v(" 代码规范")]),e._v(" "),a("h3",{attrs:{id:"前端命名规范-bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端命名规范-bem"}},[e._v("#")]),e._v(" 前端命名规范-BEM")]),e._v(" "),a("h4",{attrs:{id:"什么是bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是bem"}},[e._v("#")]),e._v(" 什么是BEM？")]),e._v(" "),a("p",[e._v("BEM（block element Modifier）是一种前端命名规范，核心思想：将页面拆分成一个个独立的富有语义的块（block），从而使得团队在开发复杂的项目变得高效，有利于代码复用。")]),e._v(" "),a("p",[e._v("Block：块，逻辑和功能独立的单元，类似于组件")]),e._v(" "),a("p",[e._v("element：元素，block的组成部分")]),e._v(" "),a("p",[e._v("modifier：修饰符，用于修饰块或者元素，体现出外形行为状态等特征")]),e._v(" "),a("p",[e._v("block和element之间以“__”双下划线连接")]),e._v(" "),a("p",[e._v("modifier前以“--”双中划线连接")]),e._v(" "),a("p",[e._v("命名形式：.block-name__element-name--modifier")]),e._v(" "),a("h3",{attrs:{id:"git-commit-message规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message规范"}},[e._v("#")]),e._v(" git commit message规范")]),e._v(" "),a("p",[e._v("为什么需要git commit  message")]),e._v(" "),a("ul",[a("li",[e._v("保证版本发布的可靠性与可追溯性")]),e._v(" "),a("li",[e._v("使提交记录更好理解，更好的阅读体验，加快codeReview过程")]),e._v(" "),a("li",[e._v("快速想起某个分支，tag或commit增加了哪些功能，改变了哪些代码")]),e._v(" "),a("li",[e._v("一个好的提交信息，会帮助你提高项目的整体质量")])]),e._v(" "),a("p",[e._v("格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<type>:<title><footer>\n<script>\n\ncommit类型：一个空格+ 标题 + 页脚注释\n部署脚本\n")])])]),a("p",[e._v("分成四个部分：")]),e._v(" "),a("p",[e._v("type：commit的类型（必填）")]),e._v(" "),a("p",[e._v("title：标题，描述修改的内容（必填）")]),e._v(" "),a("p",[e._v("footer：页脚注释，可以放bug编号，格式：[#+编号]，例如：[#666]")]),e._v(" "),a("p",[e._v("script：部署脚本，需要换行，部署脚本跟项目相关，具体查看项目对应的部署脚本，一般放置在README.md")]),e._v(" "),a("p",[e._v("commit的类型：")]),e._v(" "),a("p",[e._v("feat：新功能")]),e._v(" "),a("p",[e._v("fix：bug修复")]),e._v(" "),a("p",[e._v("docs：文档修改")]),e._v(" "),a("p",[e._v("opt：优化和改善，比如弹窗进行确认提示等相关的，不会改动逻辑和具体功能。")]),e._v(" "),a("p",[e._v("style：代码格式修改，注意不是css修改")]),e._v(" "),a("p",[e._v("css：样式修改")]),e._v(" "),a("p",[e._v("refractor：重构（即不是新增功能，也不是修改bug的代码改动）")]),e._v(" "),a("p",[e._v("test：测试用例修改")]),e._v(" "),a("p",[e._v("chore：构建流程或依赖管理修改等辅助工具修改")]),e._v(" "),a("p",[e._v("other：用于难以分类的类别（不建议使用，但一些如删除不必要文件，更新.ignore，删除注释字段，可以使用）")]),e._v(" "),a("p",[e._v("例子：")]),e._v(" "),a("p",[e._v("opt: 弹窗小黄条滚动动画[#pc-v2.8]")]),e._v(" "),a("h3",{attrs:{id:"使用merge-request提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用merge-request提交代码"}},[e._v("#")]),e._v(" 使用merge request提交代码")]),e._v(" "),a("p",[e._v("为什么要使用merge request工作流？")]),e._v(" "),a("ol",[a("li",[e._v("可以更好的保护重要的分支")]),e._v(" "),a("li",[e._v("代码审查，规避低级错误，提高代码质量")]),e._v(" "),a("li",[e._v("规范分支管理")])]),e._v(" "),a("p",[e._v("merge request就是把代码从一个分支合并到另一个分支上做的操作。")]),e._v(" "),a("h3",{attrs:{id:"vue风格指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue风格指南"}},[e._v("#")]),e._v(" vue风格指南")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("组件名应该始终是多个单词，根组件APP除外")]),e._v(" "),a("p",[e._v("这样子避免了跟现有以及未来的HTML元素的相冲突，因为所有的HTML元素名称都是单个单词")])]),e._v(" "),a("li",[a("p",[e._v("Prop定义应该尽量详细，至少需要指定类型")]),e._v(" "),a("p",[e._v("prop详细的好处：")]),e._v(" "),a("ul",[a("li",[e._v("写明了组件的API，很容易看懂组件的用法")]),e._v(" "),a("li",[e._v("在开发环境下，如果向一个组件提供格式不正确的prop，Vue将会告警，以帮助你捕获潜在的错误来源。")])])]),e._v(" "),a("li",[a("p",[e._v("永远不要把v-if 和 v-for同时放在同一个元素上")])]),e._v(" "),a("li",[a("p",[e._v("在插件、混入等扩展中始终为自定义的私用属性使用$_前缀。并附带一个命名空间以回避和其它开发者的冲突（比如$_myPluginName）")]),e._v(" "),a("p",[e._v("vue使用 _ 前缀来定义自身的私有属性，所以使用相同的前缀有复写实例属性的风险，即使你检查确认Vue当前版本没有用这个属性命名，也不能保证和将来的版本不发生冲突。")]),e._v(" "),a("p",[e._v("对于$ 前缀来说，其在vue生态系统中的目的是暴露给用户的一个特殊实例属性，所以把它用于私有属性并不合适。")]),e._v(" "),a("p",[e._v("所以我们推荐使用 $_ 前缀，作为一个用户定义的私有属性的约定，确保不会与vue本身发生冲突。")])]),e._v(" "),a("li",[a("p",[e._v("应用特定样式和约定的基础组件（展示类的，无逻辑或者无状态的组件）应该全部以一个特定的前缀开头，比如base、app 或者 v")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("components/\n|- BaseButtom.vue\n|- BaseTable.vue\n|- BaseIcon.vue\n")])])])]),e._v(" "),a("li",[a("p",[e._v("只应该拥有单个活跃实例的组件应该以The前缀命名，表示其唯一性")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("components/\n|- TheSideBar.vue\n|- TheHeading.vue\n|- TheFooter.vue\n")])])])]),e._v(" "),a("li",[a("p",[e._v("和副组件紧密耦合的子组件应该以父组件名作为前缀命名")]),e._v(" "),a("p",[e._v("如果一个组件只在某个父组件的场景下有意义，应该在命名上面体现他们的关系。因为编辑器一般会按照字母的顺序来排序文件，所以这样子相关联的文件就会排列在一起")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("components/\n|- TodoList.vue\n|- TodoListItem.vue\n|- TodoListItemButton.vue\n")])])])]),e._v(" "),a("li",[a("p",[e._v("组件名应该以高级别的（通常是一般化描述的）单词开头，以描述性的修饰词结尾。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("components/\n|- SearchButtonClear.vue\n|- SearchButtonRun.vue\n|- SearchInputQuery.vue\n|- SearchInputExcludeGlob.vue\n|- SettingsCheckboxTerms.vue\n")])])])]),e._v(" "),a("li",[a("p",[e._v("对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该是 pascalCase的，但是在DOM模板中总是kebab-case的")]),e._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- 在单文件组件和字符串模板中 --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("myComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- 在DOM模板中或者全部 --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("my-component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("my-component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("组件名应该倾向于完整单词而不是缩写")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("components/\n|- StudentDashboardSettings.vue\n|- UserProfileOptions.vue\n")])])])]),e._v(" "),a("li",[a("p",[e._v("组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性（computed）或者方法（method）")])]),e._v(" "),a("li",[a("p",[e._v("应该把复杂计算属性分割为尽可能多的简单的属性")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);