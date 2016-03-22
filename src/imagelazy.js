(function() {
    var _ = {
        addHandle: function(element, type, handler) {
            if(element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if(element.attachEvent) {
                element.attachEvent('on'+type, handler);
            } else {
                element['on'+type] = handler;
            }
        }
    };

    var imgList = document.getElementsByClassName('imagelazy');

    _.addHandle(window, 'scroll', function() {
        var time = setTimeout(function() {
            loadImage();
            console.log(111);
        }, 100);
    });

    var loadImage = function() {
        for(var i = 0; i < imgList.length; i++) {
            var el = imgList[i];
            if(!isload(el)) {
                el.src = el.getAttribute('_src');
            } 

        }
    };

    var isload = function(e) {
        if(e.offTop < document.body.clientHeight || document.documentElement.clientHeight + document.body.scrollTop || document.documentElement.scrollTop) {
            console.log("比较小");
            return false;
        }
    }
})();