以下内容主要来自《极客时间》的课程《Git 三剑客》   

## 创建一个新的仓库并初始化   

git init hexo_blog   

## Git 的工作方式   

在工作目录上做出的变更，我们要先把它添加到**暂存区**。      

暂存区的内容既可以被正式提交，也可以被回退（简单理解为撤销）。   

## 添加到暂存区  

git add index.html   

注：add 后面加上做出变更的文件   

## 查看 Git 工作目录和暂存区的状态    

命令：git status   

遇到未被 Git 管理的文件或文件夹，可以使用 add 命令将其纳入到 Git 的管理之下。   

例如：git add index.html images    

注：add 后面可以加文件，也可以加文件夹 📁，上面的 index.html 是文件名，images 是文件夹。   

## 查看 Git 变更的记录  

这个有点像是 PS 里面的「**历史记录面板**」，记录了你做出的所有变更。     

命令：git log   

## 清理一下终端当前显示的内容   

命令：clear    

## 新建文件夹的命令   

命令：mkdir+空格+文件夹名称   

## 创建一个新的文件   

echo "hello,world" > readme

创建一个 readme 文件，里面的内容为 hello,world    

## 查看 Git 最近 N 次的日志   

git log -n   

如果之前提交过很多次，git log 不附带参数的话，会返回一长串日志，不便于观看     

## 在终端中查看文件内容或编辑文件   

命令：vi+空格+文件名  

例如你想在终端中编辑一个名为 style.css 的文件，可以运行命令 

vi style.css     

编辑好文件之后，会用到的命令

:w!     保存
:wq!    保存并退出编辑(w 代表写入，q 代表退出)          

## 从某个子路径直接退回到根目录下   

命令：cd ../    

## 查看当前路径已有的文件和文件见    

命令：ls -al

注：这个命令可以列出隐藏的文件。   

## 在 Git 中给文件快速重命名的方法   

命令：git mv

举个例子，如果你想把 readme 重命名为 `readme.md`，只需要执行命令：  

git mv readme `read.md`

## 切换分支

git checkout master    

注：从当前分支切换到 master 分支上，这个命令需要在工作路径下运行     

## 新建分支并切换到新分支上  

git checkout -b 新分支的名称 旧分支名称      

注：基于旧分支的基础上，创建一个新的分支      

## 查看当前工作在哪个分支下边（查看当前有哪些分支）     

git branch -av

注：运行返回的带有星号 * 的分支，就是当前的工作分支   

## 查看本地的 git 配置  

git config --local --list：显示所有配置信息，包含 `user.name`、user.email 等。    

git config --local `user.name`：仅显示 `user.name` 信息。   

## 更改 `user.name` 信息  

git config --local `user.name` 'suling'   

末尾的单引号内的名字 suling 就是更改之后的 `user.name`   

## cat 命令

命令含义：主要用来查看文件内容，创建文件，文件合并，追加文件内容等功能。      

cat+空格+文件名：将文件内容打印显示    

## 查看 HEAD 指针目前指向哪个分支   

cat .git/HEAD   

假设运行返回的结果是 ref: refs/heads/fix_readme    

这意味着 HEAD 目前指向分支 fix_readme    

## 查看路径下边类型是文件的个数  

find .git/objects -type file   

注：.git/objects 路径下类型是文件的数量     

## 比较两次 commit 的区别   

git diff 3d4731d80eb 415c5c8086e1    

注：diff 后面跟的是两次 commit 对应的哈希值     

比较 HEAD 与 HEAD 父级（即 HEAD 的前一个版本）的不同：      

git diff HEAD HEAD^1     

最末尾也可以不加数字，单纯使用：   

git diff HEAD HEAD^    

HEAD 与 HEAD 父级的父级（即 HEAD 的爷爷）的不同：  

git diff HEAD HEAD^^   
等同于 git diff HEAD HEAD～2   

## 图形界面工具   

gitk      
gitk --all    

## 删除不需要的分支    

git branch -d 待删除的分支名称    

## 修改最新 commit 的 message   

git commit --amend   

运行之后，会打开编辑窗口，顶部可编辑最近一次提交的 message 信息，编辑好之后按 ESC，输入 :wq! 退出编辑   

## 比较暂存区和 HEAD 所含文件的差异   

git diff --cached

cached 代表暂存区 

## 比较工作区和暂存区所含文件的差异   

git diff

diff 后面不加参数，默认比较的是工作区和暂存区的差别

如果 diff 添加了文件名，就是比较这个文件在工作区和暂存区的差别，例如    

git diff --readme.md   

添加两个文件名的话，就可以同时查看两个文件在工作区和暂存区的差别：   

git diff --readme.md styles/style.css   














