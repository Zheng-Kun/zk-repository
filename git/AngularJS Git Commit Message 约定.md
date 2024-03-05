# AngularJS Git Commit Message 约定
> 翻译自： [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)
> 日期： 2020-08-27

[TOC]

## 目标

- 允许通过脚本生成修改日志文档`CHANGELOG.md`

- 允许忽略`git bisect`的提交(例如格式化这样不重要的提交)

  > `git bisect` 用来使用二分法找到哪一次提交引入了错误，可以查看阮一峰的 [git bisect 命令教程](http://www.ruanyifeng.com/blog/2018/12/git-bisect.html)

- 在浏览历史记录时提供更好的信息



### 生成CHANGELOG.md

我们在修改日志种使用这三个部分：**新功能**、**漏洞修复**、**破坏性的修改**

这个列表将在发布时由脚本自动生成。以及相关提交的链接。

当然你可以在实际提交前编辑这次的修改日志，但是它可以帮你生成一个框架。



### 识别不重要的提交

这些格式上的改变（添加/删除 空格/空行 缩进），缺少分号，注释。因此，当你寻找更改时，你可以忽略掉这些提交 —— 没有逻辑更改（no logic change）的提交。

当你bisecting时， 可以通过以下方式忽略这些提交：

```
git bisect skip $(git rev-list --grep irrelevant <good place> HEAD)
```

### 在浏览提交记录时提供更多信息

会添加一些上下文信息。可以看看下面这些message（来自 angular 最近几次提交）

- Fix small typo in docs widget (tutorial instructions) // 修复了文档部件中的小错别字（教程说明）

- Fix test for scenario. Application - should remove old iframe // 修复了方案测试。应用 - 应该移除旧的iframe
- docs - various doc fixes // 文档 - 各种文档修复
- docs - stripping extra new lines // 剥离多余的新行
- Replaced double line break with single when text is fetched from Google // 从Google获取文本时，讲双换行符替换位单换行符
- Added support for properties in documentation // 在文档中添加了属性的支持

这些message都试图指出修改的位置。但是它们没有任何约定。



再看看下面这些message

- fix comment stripping // 修复注释剥离
- fixing broken links // 修复失效的链接
- Bit of refactoring // 重构了一点
- Check whether links do exist and throw exception // 检查链接时候存在并抛出异常
- Fix sitemap include (to work on case sensitive linux) // 修复站点地图（为了在区分大小写的Linux上工作）

你能猜出这些提交里有什么吗？这些message缺少了位置说明... 比如代码的一部分： docs，docs-parser，编译器，scenario-runner， …

我知道，你可以通过检查修改的文档来获取这些缺失的信息，但是效率太低了。而且，当我们查看git提交历史记录时，我可以看出我们都尝试在message中指出修改的位置，只是缺少一个约定



## commit message 的格式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

提交信息中的任何一行都不能超过100个字符，这可以让message在github等各种git工具中更容易阅读

> [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)



一个提交信息因该包括一个header,一个body和一个footer,并使用换行符分割



### Revert

如果commit用来撤销了一个之前的提交，那它的header必须以`Revert:`开始，然后跟上要还原commit的header

它的body 只能写`This reverts commit <hash>` hash 是被撤销提交的 SHA



### Message header

header是包含更改简述的一行内容，期中包括 **type**，可选的**scope**，和**subject** 

#### 被允许的  `<type>`

- **feat** (feature)
- **fix** (bug fix)
- **docs** (documentation)
- **style**(formatting,miss semi colons,…) // 格式修改，不影响逻辑的变动
- **refactor** 重构
- **test**(添加测试)
- **chore**(构建工具辅助工具的变动)

#### 被允许的`<scope>`

scope 说明修改的影响范围/位置。例如  **$location**, **$browser**, **$compile**, **$rootScope**, **ngHref**, **ngClick**, **ngView**等

如果你找不到合适的scope,可以使用`*`

#### `<subject>` 

一个对更改的简短描述

- 使用祈使句，现在时态： 使用"change" 而不是 “changed” 或 “changes”

- 首字母不使用大写

- 结尾不需要句号（./。）

  > [Writing Git commit messages](https://365git.tumblr.com/post/3308646748/writing-git-commit-messages)

### Message body

- 和<subject>一样，使用祈使句，现在时态：使用"change" 而不是 “changed” 或 “changes”
- 包含修改的动机和与之前的对比



### Message footer

#### Breaking changes

所有破坏性（不兼容）的更改，都必须在footer部分以`BREWAKING CHANGE`开头，跟上一个空格或者两个换行符，后面是对变动的说明，以及迁移的方法的描述



```
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.
    
    To migrate the code follow the example below:
    
    Before:
    
    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }
    
    After:
    
    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }
    
    The removed `inject` wasn't generaly useful for directives so there should be no code using it.

```

####  Referencing issues

被关闭的bug应该单独在footer中列出一行，并以`Closes`开始：

```
Closes #234
```

或者在多个issues的情况下:

```
Closes #123, #245, #992
```

## 示例

```
feat($browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

```
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

```
feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

New directives for proper binding these attributes in older browsers (IE).
Added coresponding description, live examples and e2e tests.

Closes #351
```

```
style($location): add couple of missing semi colons
```

```
docs(guide): updated fixed docs from Google Docs

Couple of typos fixed:
- indentation
- batchLogbatchLog -> batchLog
- start periodic checking
- missing brace
```

```
feat($compile): simplify isolate scope bindings

Changed the isolate scope binding options to:
  - @attr - attribute binding (including interpolation)
  - =model - by-directional model binding
  - &expr - expression execution binding

This change simplifies the terminology as well as
number of choices available to the developer. It
also supports local name aliasing from the parent.

BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

scope: {
  myAttr: 'attribute',
  myBind: 'bind',
  myExpression: 'expression',
  myEval: 'evaluate',
  myAccessor: 'accessor'
}

After:

scope: {
  myAttr: '@',
  myBind: '@',
  myExpression: '&',
  // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
  myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```







































