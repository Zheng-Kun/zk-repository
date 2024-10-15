> `git stash` 用于将本地的变化保存在一个脏工作区中，并将工作目录还原为与`HEAD`相匹配的位置

```sh
# 将本地变化保存在脏工作区，工作目录还原为与 HEAD 匹配, 与git stash push 相当
git stash [push]

# 列出git stash 保存的所有修改
git stash list

# 从贮藏库列表中移除一个单一的贮存状态，并将其应用到工作区，也就是 git stash push 的逆向操作
git stash pop

# 和pop一样，但是不会从贮藏库列表中删除该状态
git stash apply

# 从贮藏库列表中删除一个单一的贮存状态 （当 git stash pop 出现冲突而失败时需要手动解决冲突，并使用drop移除该状态）
git stash drop

```

- `git stash` 不带参数时等同于 `git stash push`
- `git stash save` 改选项已经被弃用，改为`git stash push`
git stash save "message" 保存当前工作区的修改，并添加一条说明新一