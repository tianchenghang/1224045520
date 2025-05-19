# 1224045520

Solutions for LeetCode

```sh
# fork 并克隆原始仓库
# fork 的仓库中, 创建并切换到 pr 分支
git checkout -b pr
git add -A
git commit -m 'feat: Test pr'
git push origin pr
# 原始仓库中, 创建 issue 和 pull request
# pull request 被原始仓库合并

# fork 的仓库中, 切换到 main 分支
git checkout main
# 添加原始仓库为 upstream
git remote add upstream git@github.com:tianchenghang/solution.git
# 下载原始仓库的变更
git fetch upstream
# 合并原始仓库的变更
git merge upstream/master
# 推送变更到 fork 的仓库
git push origin main
# 删除 upstream
git remote rm upstream
# 删除无用的 pr 分支
git branch -d pr # 本地
git push origin --delete pr # 远程
```
