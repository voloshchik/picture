import { getResourse } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach((card) => {
    //     card.classList.add('animated', 'fadeInUp');
    // });
    // btn.addEventListener('click', () => {
    //     cards.forEach((card) => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         btn.style.display = 'none';
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         btn.style.display = 'none';
    //     });
    // });
    btn.addEventListener('click', function () {
        getResourse('assets/db.json')
            .then((res) => createCards(res.styles))
            .catch((error) => {
                console.log(error);
            });
        this.remove();
    });
    function createCards(response) {
        response.forEach(({ src, title, link }) => {
            const card = document.createElement('div');
            card.classList.add(
                'animated',
                'fadeInUp',
                'col-sm-3',
                'col-sm-offset-0',
                'col-xs-10',
                'col-xs-offset-1'
            );

            card.innerHTML = `
            <div>
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
			</div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;

{
    /* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
					<div class=styles-block>
						<img src=assets/img/styles-5.jpg alt>
						<h4>Пастелью</h4>
						<a href="#">Подробнее</a>
					</div>
				</div> */
}
