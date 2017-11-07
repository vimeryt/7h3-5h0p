(function () {
    const colors = document.getElementsByClassName('color__item');
    const sizes = document.getElementsByClassName('size__item');
    const selectors = [...colors, ...sizes];

    for (let i = 0; i < selectors.length; i++) {
        const selector = selectors[i];

        selector.addEventListener('click',function(event) {
            event.preventDefault();

            const isColorSelector = !!selector.dataset.color;



            for(let i = 0; i < selectors.length; i++) {
                if (isColorSelector) {
                    if (selectors[i].classList.contains('color__item_active')) {
                        selectors[i].classList.remove('color__item_active');
                    }
                    event.target.className += ' color__item_active';
                } else {
                    if (selectors[i].classList.contains('size__item_active')) {
                        selectors[i].classList.remove('size__item_active');
                    }
                    event.target.className += ' size__item_active';
                }

            }


            if (isColorSelector) {
                const images = document.getElementsByClassName('product__img');
                for (let i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                }
                const img_id = event.target.getAttribute('data-color');
                document.getElementById(img_id).style.display = 'block';
            }
        });
    }
})();
