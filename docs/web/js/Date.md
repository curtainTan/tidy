# Date 对象

![](http://pic.yupoo.com/tan473/6248685c/c17a2131.png)

## 注意点

1. 年份和日期的获取是正常的，月份、星期、时、分、秒则比正常的时间少 1，因为他们是从 0 开始计算的

```js
// 表示 2020 年 6 月 5 日
let date = new Date( 2020, 5, 5 )
console.log( date )  // Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)
```

2. 当设置日期为 0 时，代表上一个月的最后一天

```js
// 2020 年 9 月 30 日
console.logh( new Date(2019,9,0) )
```
