!function () {
    //添加offset类
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offest');
    }
    findClosestAndRemoveOffest();
    window.addEventListener('scroll', function (xxx) {
        findClosestAndRemoveOffest();
    });

    //helper类
    function findClosestAndRemoveOffest() {
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = _i;
            }
        }
        //去除offest类
        specialTags[minIndex].classList.remove('offest');
        //minindex就是离窗口最近的元素
        var id = specialTags[minIndex].id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;
        var brothersAndMe = li.parentNode.children;
        for (var _i2 = 0; _i2 < brothersAndMe.length; _i2++) {
            brothersAndMe[_i2].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }

    var liTags = document.querySelectorAll('nav.menu > ul > li');
    for (var _i3 = 0; _i3 < liTags.length; _i3++) {
        liTags[_i3].onmouseenter = function (x) {
            x.currentTarget.classList.add('active');
        };
        liTags[_i3].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active');
        };
    }
}.call();