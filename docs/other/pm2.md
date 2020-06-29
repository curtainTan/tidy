# pm2

![](http://vuepress.test.upcdn.net/pm2.png)


## pm2 的定义

pm2 是 node 的进程管理工具，可以用它来实现 node 应用的性能监控、自动重启、负载均衡等任务

## pm2 命令

```shell
# 启动程序
pm2 start <app-file>
# 关闭程序
pm2 start <app-name | app-id>
# 查看程序列表
pm2 list
# 重启程序
pm2 restart <app-file>
# 删除程序
pm2 delete <app-name | app-id>

# 生成启动文件
pm2 ecosystem
```

## pm2 文件

pm2 支持 `ymal` `json` `js` `json` 四种配置文件

```js
module.exports = {
    apps: [
        {
            name: "app-name",               // 项目名
            script: "app.js",               // 执行文件
            cwd: "./",                      // 执行文件路径
            args: "",                       // 传递给脚本的参数
            interpreter: "",                // 指定执行脚本的解释器 - python|node
            interpreter_args: "",           // 传递给解释器的参数
            watch: true,                    // 是否监听文件重启
            ignore_watch: [                 // 忽略监听文件
                "node_modules",
                "public"
            ],
            exec_mode: "cluster",           // 启动模式 cluster 是集群模式
            instances: "max",               // 启动实例个数，搭配集群模式使用
            max_memory_restart: "150M",     // 达到最大内存重启
            restart_delay: "60",            // 重启时延时
            env: {                          // 设置环境参数
                NODE_ENV: "production"
            },
            env_dev: {
                NODE_ENV: "development"
            }
        }
    ]
}
```

**参考：** [pm2 官方文档](https://pm2.keymetrics.io/docs/usage/quick-start/)
