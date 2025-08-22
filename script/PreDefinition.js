window.PAGES = {
    REGISTRATION_PAGE: document.getElementsByClassName('registration__section').item(0),
    HOME_PAGE: document.getElementsByClassName('home__section').item(0),
    HERO_PAGE: document.getElementsByClassName('hero__section').item(0),
    SETTING_PAGE: document.getElementsByClassName('setting__section').item(0),
    PICK_PAGE: document.getElementsByClassName('pick__section').item(0),
    PVP_PAGE: document.getElementsByClassName('pvp__section').item(0),
    PVE_PAGE: document.getElementsByClassName('pve__section').item(0)
};

window.HEROES = {
    size: 5,

    BEN_LADEN: {
        name: 'Ben Laden',
        introImgPath: 'img/ben_laden.webp',
        maxHp: 9875
    },
    HITLER: {
        name: 'Adolph Hitler',
        introImgPath: 'img/hitler.jpeg',
        maxHp: 12119
    },
    IN: {
        name: 'Kin Chang In',
        introImgPath: 'img/in.jpeg',
        maxHp: 11111
    },
    STALIN: {
        name: 'Iosef Stalin',
        introImgPath: 'img/stalin_intro.jpeg',
        maxHp: 8989
    },
    SECRET: {
        name: 'Secret',
        introImgPath: 'img/putin.png',
        maxHp: 11890
    },

    list() {
        return Array.of(
            this.BEN_LADEN,
            this.HITLER,
            this.IN,
            this.STALIN,
            this.SECRET
        );
    }
}

let account, router, zoneInputValidator, zoneInputObserver, pvpBattle, terminal, heroPageHandler, ashes, soundAccompaniment;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}