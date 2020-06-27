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

## 防抖

::: tip 定义
指连续触发事件在 n 秒内连续触发，只执行最后一次的触发，并且在最后一次触发 n 秒后执行
:::

**用处：** 搜索框提示

```js
/** 防抖
 * @param { function } fn 防抖函数
 * @param { Number } timeout 时间
 * @param { immediate } fn 第一次触发是否立即执行
 */
function debounce(fn = () => { }, timeout, immediate = false) {
    let timer = null
    return function () {
        if (timer) { clearTimeout(timer) }
        if (!timer && immediate) { fn.apply(this, arguments) }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            // 是否需要每次第一次触发的时候都执行
            // timer = null
        }, timeout)
    }
}
```

## 节流

::: tip 定义
指连续触发事件在 n 秒中只执行一次，稀释函数执行频率。
:::

```js
/**
 * @param { function } fn 节流函数
 * @param { Number } timeout 时间
 * @param { immediate } fn 第一次触发是否立即执行
 */
function throttle(fn = () => { }, timeout, immediate = false) {
    let timer = null
    let isFirst = true
    return function () {
        if (isFirst && immediate) {
            fn.apply(this, arguments)
            isFirst = false
        }
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                clearTimeout(timer)
                timer = null
            }, timeout)
        }
    }
}
```



