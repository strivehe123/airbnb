## git 学习
## 获取git 仓库
### git init/git clone

#git 提交
git commit -a -m "提交的提示信息"
#git 回退到上一个版本
git reset --hard HEAD^
#git  回退版本
git reset --hard hashID
#git 查看版本
git log --pretty=oneline
# git 查看包含回退的操作
git reflog
#git  通过ssh秘钥登录 
# 生成秘钥对
ssh-keygen -t ed25519 -C "137841632@qq.com"
ssh-keygen -t rsa -b 2048 -C "your email"
#查看远程仓库
git remote
# 添加远程项目 
git remote add origin git@github.com:strivehe123/git-demo.git
#拉取远程项目到本地仓库
git fetch origin
#给本地git master 设置上游分支
git branch --set-upstream-to=origin/master
#git 合并远程拉取的 origin/main  和 master 合并
git merge origin/main
git merge --allow-unrelated-histories
#git push  不了解决方案
#解决方案1
git config push.default upstream
#解决方案2
#git checkout --track origin/main
#强制合并  git 2.9 后没有公共base不允许合并 
git pull --allow-unrelated-histories
# git checkout -b main --track origin/main
git checkout --track origin/main
#git  打标签
git tag "v1.0.0"
#git tag 写注释
git tag -a "v1.1.0" -m "store状态管理"
#git 把标签同步到远程服务器
git push origin v1.0.0
#git 把所有的标签同步到远程服务器
git push origin --tags
#git 删除本地标签
git tag -d v1.0.0
#git 删除远程仓库标签
git push origin --delete v1.0.0
#git 切换到标签
git checkout v1.0.0
#git 提交对象 commit object
#git 查看对象文件
git cat-file -p  756ed
# git rebase
 