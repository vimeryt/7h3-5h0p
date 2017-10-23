// Your code here...
(function () {
    var controls = document.getElementsByClassName("color__item");
    for (var i = 0; i < controls.length; i++) {
        var control = controls[i];
        control.addEventListener('click',function(event) {
            event.preventDefault();

            for(var i = 0; i < controls.length; i++) {
                if (controls[i].classList.contains('color__item_active')) {
                    controls[i].classList.remove('color__item_active');
                }
            }
            event.target.className += " color__item_active";

            var imgs = document.getElementsByClassName("product__img");
            for (i = 0; i < imgs.length; i++) {
                imgs[i].style.display = 'none';
            }
            var img_id = event.target.getAttribute("data-color");
            document.getElementById(img_id).style.display = 'block';
        });
    }
})();

(function () {
    var controls = document.getElementsByClassName("size__item");
    for (var i = 0; i < controls.length; i++) {
        var control = controls[i];
        control.addEventListener('click',function(event) {
            event.preventDefault();

            for (var i = 0; i < controls.length; i++) {
                if (controls[i].classList.contains('size__item_active')) {
                    controls[i].classList.remove('size__item_active');
                }
            }
            event.target.className += " size__item_active";
        });
    }
})();
