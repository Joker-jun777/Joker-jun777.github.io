 // 封装缓动动画函数
function animate(obj, target, callback) {
     // 调用函数即清除一次定时器（防止不断触发定时器）
    clearInterval(obj.timer);
     // 定时器命名为obj.timer防止不断开辟内存空间，降低执行效率
    obj.timer = setInterval(function () {
         // 写定时器让元素做动画
         // 缓动动画移动距离= 目标位置 - 起始位置 / 份数（此处为10）
        var step = (target - obj.offsetLeft) / 10;
         // 如果直接用上面的step会存在小数问题（无法到达目标位置），故需要进行取整（避免小数）
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
         // 如果物体到达目标位置即停止（关闭定时器）
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
             // 动画完成后，执行回调函数
             // 先判断是否存在回调函数
            callback && callback();
        } else {
             // 把得到的步数赋值给带定位的物体
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}