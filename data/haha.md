### 添加 ssh key

为了达成开发机和 github.com 的互信。因为开发过程中，我们需要用本地机器向 github.com 的仓库中
写东西（ git push ），同时我们又不想每次都输入密码，所以我们就用 ssh key 的形式来达成互信，过程
如下：

- 在本地机器上生成一对 ssh key ，一个公钥，一个私钥
- 把公钥添加到 github.com

具体操作如下：

- 首先本地运行 `ssh-keygen` 命令
- 到 `~/.ssh/id_rsa.pub` 也就是公钥文件中，拷贝公钥字符串
- 把字符串粘贴到 github.com -> setting -> ssh keys -> add

这样添加 ssh key 的工作就完成了，以后我们执行 git push 这样的命令就不会看到如下错误了：

```
...permission denied...
...make sure ... correct access right ...
```

大功告成。
