const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = document.querySelectorAll('li');
    const btnAll = document.querySelector('.all');
    const btnLovers = document.querySelector('.lovers');
    const btnChef = document.querySelector('.chef');
    const btnGirl = document.querySelector('.girl');
    const btnGuy = document.querySelector('.guy');
    const btnGrandmother = document.querySelector('.grandmother');
    const btnGranddad = document.querySelector('.granddad');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGuy = wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach((mark) => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach((item) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;
