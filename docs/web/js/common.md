# 常用 js 代码段

## 获取某年某月的天数

```js
/**
 * 获取某年某月的天数
 * @param { Number } year 年
 * @param { Number } month 月份
 */
function getDays(year, month) {
    // 返回上一个月的最后一天
    return ( new Date( year, month, 0 ) ).getDate()
}
// 获取 2020 年 6 月的天数
console.log( getDays( 2020, 6 ) )  // 31
```

::: tip 实现原理
当传入的日期为 0 时，表示上一个月的最后一天，因为日期是从 1 开始计算的，所以，返回的就是上个月的天数，也刚好就是传入月份的天数
:::

## 日期格式化

```js
Date.prototype.Format = function (fmt) {
    let obj = {
        "y+": this.getFullYear(),   // 年
        "M+": this.getMonth() + 1,  // 月
        "d+": this.getDate(),       // 日
        "h+": this.getHours() + 1,  // 小时
        "m+": this.getMinutes() + 1,// 分
        "s+": this.getSeconds() + 1,// 秒
    }
    for (let key in obj) {
        if (new RegExp("(" + key + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, obj[key])
        }
    }
    return fmt
}

console.log(new Date().Format('yyyy-MM-dd hh:mm:ss'))  // 2020-6-27 16:17:32
```




