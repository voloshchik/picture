const modals = () => {
    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true,
        scroll = calcScroll()
    ) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');
        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach((item) => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                //   document.body.classList.add("modal-open");
            });
        });
        close.addEventListener('click', () => {
            windows.forEach((item) => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

            //   document.body.classList.remove("modal-open");
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach((item) => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `${0}px`;
                // document.body.classList.remove("modal-open");
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            let display;
            document.querySelectorAll('[data-modal]').forEach((item) => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                console.log('ddddddddddd');
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = '';
            }
        }, time);
    }
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal(
        '.button-consultation',
        '.popup-consultation ',
        '.popup-consultation .popup-close'
    );
    showModalByTime('.popup-consultation', 4000);
    console.log('ddddddddddddd');
};

export default modals;
