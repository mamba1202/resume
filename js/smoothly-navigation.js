!function () {
    var view =document.querySelector('nav.menu')
    let aTags = view.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time)
    }
    requestAnimationFrame(animate);



    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href') //'#siteAbout'
            let element = document.querySelector(href)


            let top = element.offsetTop

            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop  //路程
            var coords = { y: currentTop }; //起始位置
            var t = Math.abs((s / 100) * 300)  //时间
            if (t > 500) { t = 500 }
            var tween = new TWEEN.Tween(coords) //起始位置
                .to({ y: targetTop }, t)   //结束位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut)  //缓动类型
                .onUpdate(function () {
                    // coodrs.y 已经变了
                    window.scrollTo(0, coords.y)  //如何更新页面
                })
                .start();  //开始缓动
        }
    }
}.call()
