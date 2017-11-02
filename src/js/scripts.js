// Your code here...
(function () {
    const controls = document.getElementsByClassName('color__item');
    for (let i = 0; i < controls.length; i++) {
        const control = controls[i];
        control.addEventListener('click',function(event) {
            event.preventDefault();

            for(let i = 0; i < controls.length; i++) {
                if (controls[i].classList.contains('color__item_active')) {
                    controls[i].classList.remove('color__item_active');
                }
            }
            event.target.className += ' color__item_active';

            const images = document.getElementsByClassName('product__img');
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
            }
            const img_id = event.target.getAttribute('data-color');
            document.getElementById(img_id).style.display = 'block';
        });
    }
})();

(function () {
    const controls = document.getElementsByClassName('size__item');
    for (let i = 0; i < controls.length; i++) {
        const control = controls[i];
        control.addEventListener('click',function(event) {
            event.preventDefault();

            for (let i = 0; i < controls.length; i++) {
                if (controls[i].classList.contains('size__item_active')) {
                    controls[i].classList.remove('size__item_active');
                }
            }
            event.target.className += ' size__item_active';
        });
    }
})();
