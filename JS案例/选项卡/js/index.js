window.addEventListener('load', function() {
    const boxTop = document.querySelector('.box-top');
    const ul = boxTop.querySelector('ul');
    const list = ul.querySelectorAll('li');
    const boxBottom = document.querySelector('.box-bottom');
    const ulB = boxBottom.querySelector('ul');
    const liB = ulB.querySelectorAll('li');
    for (var i = 0; i < list.length; i++) {
        list[i].title = i;
        list[i].addEventListener('click', function() {
            const title = this.title;
            for (var i = 0; i < list.length; i++) {
                list[i].className = '';
                liB[i].style.display = 'none';
            }
            liB[title].style.display = 'block';
            this.className = 'current';
        })
    }
    const light = document.querySelector('.light');
    const btn = document.querySelector('.light-button');
    const body = this.document.querySelector('body');
    var flag = true;
    light.addEventListener('click', function() {
        if (flag) {
            this.style.backgroundColor = '#ddd';
            btn.style.left = animate(btn, 58);
            btn.style.backgroundColor = 'black';
            body.style.backgroundColor = 'black';
            body.className = 'bodc';
            return flag = false;
        } else {
            this.style.backgroundColor = 'black';
            btn.style.left = animate(btn, 4);
            btn.style.backgroundColor = 'white';
            body.style.backgroundColor = 'white';
            body.className = '';
            return flag = true;
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
});