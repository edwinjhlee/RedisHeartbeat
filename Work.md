# Redis Heartbeat

1. Metric: Node暴露可以暴露的信息 - CPU,内存,空间使用；多少个线程在运行
2. Heartbeat: 不断发送心跳给Redis - 以部件为单位发送
3. StartConfig: 应用启动的配置信息
4. Shutdown: 应用关闭的信息
5. GlobalMemory: 全局缓存

命名方式:

```log
<AppName>.registration => []
<AppName>.<StartingTimeStamp>.<Category>.<Entry> = string or json
<AppName>.<StartingTimeStamp>.<Category>.<Entry> = string or json
```



两种模式:

1. 可侵入
2. 不可侵入







