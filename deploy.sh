#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'awen.curtaintan.club' > CNAME

git init
git config user.name "awentan"
git config user.email "1948750473@qq.com"
git add -A
git commit -m 'feat:测试自动部署'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@dadifeihong:dadifeihong/dadifeihong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@dadifeihong-coding:dadifeihong/nodeingfe.git master
# git@e.coding.net:awentan/myblog.git
git push -f git@coding:awentan/myblog.git master
cd -
