class HeroFacade {
    updateHero(nextHero) {

    }

    #heroPhotos = [
        'img/ben_laden.webp',
        'img/Hitler_portrait_crop.jpeg',
        'img/next_in.jpeg',
        'img/stalin_intro.jpeg',
        'img/putin.png'
    ];

    pickPanel() {
        const main = document.querySelector('main');
        const pickPanel = document.createElement('section');
        const accountData = document.getElementsByClassName('hero__account-data').item(0);

        accountData.classList.add('hero__account-data-disabled');
        accountData.classList.remove('hero__account-data');
        pickPanel.classList.add('pick-panel');

        this.#heroPhotos.forEach((photoPath) => {
            const imgHolder = document.createElement('div');
            const img = document.createElement('img');

            img.src = photoPath;
            img.setAttribute('alt', 'hero');
            img.classList.add('pick-panel__img');

            imgHolder.classList.add('pick-panel__image-holder');
            imgHolder.appendChild(img);

            pickPanel.appendChild(imgHolder);
        });

        main.appendChild(pickPanel);
    }
}

const heroFacade = new HeroFacade();