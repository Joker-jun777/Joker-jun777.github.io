window.addEventListener('load', function() {
    const light = document.querySelector('.light');
    const btn = document.querySelector('.light-button');
    const body = this.document.querySelector('body');
    var flag = false;
    light.addEventListener('click', function() {
        if (!flag) {
            this.style.backgroundColor = '#ddd';
            btn.style.left = animate(btn, 50);
            btn.style.backgroundColor = 'black';
            body.style.backgroundColor = 'black';
            list.style.backgroundColor = 'black';
            flag = true;
        } else {
            this.style.backgroundColor = 'black';
            btn.style.left = animate(btn, -18);
            btn.style.backgroundColor = 'white';
            body.style.backgroundColor = 'white';
            flag = false;
        }

    })

    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 30)
    }
})