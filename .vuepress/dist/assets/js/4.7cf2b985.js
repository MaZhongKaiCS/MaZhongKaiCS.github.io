(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{407:function(t,v,_){t.exports=_.p+"assets/img/git1.ca652eaf.png"},408:function(t,v,_){t.exports=_.p+"assets/img/git2.f833aaa9.png"},409:function(t,v,_){t.exports=_.p+"assets/img/git3.2157da4c.png"},410:function(t,v,_){t.exports=_.p+"assets/img/git4.c939f4b2.png"},411:function(t,v,_){t.exports=_.p+"assets/img/git5.d710229e.png"},412:function(t,v,_){t.exports=_.p+"assets/img/git6.87f4307c.png"},413:function(t,v,_){t.exports=_.p+"assets/img/git7.0e4edb8b.png"},431:function(t,v,_){"use strict";_.r(v);var s=_(0),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"合并策略-bug-分支-feature-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并策略-bug-分支-feature-分支"}},[t._v("#")]),t._v(" 合并策略 bug 分支 feature 分支")]),t._v(" "),s("p",[t._v("一般情况下，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息，使用 "),s("code",[t._v("git log --graph")]),t._v(" 看不到被删除的分支。一般普通的合并模式需要取消Fast forward模式。")]),t._v(" "),s("p",[t._v('使用 git merge --no-ff，如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。因为生成了一个新的commit，所以需要-m"xxx"来描述一次。')]),t._v(" "),s("p",[s("code",[t._v('git merge --no-ff -m "merge with no-ff" dev')])]),t._v(" "),s("p",[t._v("然后使用 "),s("code",[t._v("git log --graph")]),t._v(" 就可以看到历史分支的信息。")]),t._v(" "),s("p",[t._v("小结：")]),t._v(" "),s("p",[t._v("Git分支十分强大，在团队开发中应该充分应用。")]),t._v(" "),s("p",[t._v("合并分支时，加上"),s("code",[t._v("--no-ff")]),t._v("参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。")]),t._v(" "),s("p",[t._v("bug分支：")]),t._v(" "),s("p",[t._v("当我们在分支dev工作时，main主分支上有个bug需要及时处理，我们可以在main创建一个新的bug分支用来修复bug。")]),t._v(" "),s("p",[t._v("首先我们暂停手上的工作，将完成一半的文件保存起来：")]),t._v(" "),s("p",[t._v("Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作")]),t._v(" "),s("p",[t._v("git stash。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(407),alt:"git1"}})]),t._v(" "),s("p",[t._v("然后切换到main上创建一个新的修补bug的分支并且在上面修改bug，然后提交，提交后记住commit id，后面需要用到：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(408),alt:"git2"}})]),t._v(" "),s("p",[s("img",{attrs:{src:_(409),alt:"git3"}})]),t._v(" "),s("p",[t._v("然后，切换到main，然后合并分支，然后删除临时分支；")]),t._v(" "),s("p",[s("img",{attrs:{src:_(410),alt:"git4"}})]),t._v(" "),s("p",[t._v("修复完bug之后回到dev分支完成之前一半的工作：")]),t._v(" "),s("p",[t._v("恢复保存起来的文件：")]),t._v(" "),s("p",[t._v("首先查看：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(411),alt:"git5"}})]),t._v(" "),s("p",[t._v("然后工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：")]),t._v(" "),s("p",[t._v("一是用"),s("code",[t._v("git stash apply")]),t._v("恢复，但是恢复后，stash内容并不删除，你需要用"),s("code",[t._v("git stash drop")]),t._v("来删除；")]),t._v(" "),s("p",[t._v("可以使用 "),s("code",[t._v("git stash apply stash@{0}")]),t._v(" 来恢复指定的文件。")]),t._v(" "),s("p",[t._v("另一种方式是用git stash pop，恢复的同时把stash内容也删了：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(412),alt:"git6"}})]),t._v(" "),s("p",[t._v("有一个关键点：修复了main的bug，而dev也是main的分支，所以dev上面依然存在bug，而工作没有完成不能合并，同样的bug，要在dev上修复，我们只需要把"),s("code",[t._v("070b7de xuigai bug")]),t._v("这个提交所做的修改“复制”到dev分支。注意：我们只想复制"),s("code",[t._v("070b7de xuigai bug")]),t._v("这个提交所做的修改，并不是把整个master分支merge过来。")]),t._v(" "),s("p",[t._v("为了方便操作，Git专门提供了一个cherry-pick命令，让我们能复制一个特定的提交到当前分支：首先确认现在指针的位置是不是dev，然后开始复制特定的修改。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(413),alt:"git7"}})]),t._v(" "),s("p",[t._v("小结：")]),t._v(" "),s("p",[t._v("修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；")]),t._v(" "),s("p",[t._v("当手头工作没有完成时，先把工作现场git stash一下，然后去修复bug，修复后，再"),s("code",[t._v("git stash pop")]),t._v("，回到工作现场；")]),t._v(" "),s("p",[t._v("在master分支上修复的bug，想要合并到当前dev分支，可以用"),s("code",[t._v("git cherry-pick <commit>")]),t._v("命令，把bug提交的修改“复制”到当前分支，避免重复劳动。")]),t._v(" "),s("p",[t._v("feature分支：")]),t._v(" "),s("p",[t._v("开发一个新feature，最好新建一个分支；")]),t._v(" "),s("p",[t._v("由于保密原因，必须删除一个刚刚完成的文件，如果要丢弃一个没有被合并过的分支，可以通过"),s("code",[t._v("git branch -D <name>")]),t._v("强行删除")])])}),[],!1,null,null,null);v.default=e.exports}}]);