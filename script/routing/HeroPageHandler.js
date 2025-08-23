class HeroPageHandler {
    #username = document.getElementById('hero__username');

    #wins = document.getElementById('wins');
    #defeats = document.getElementById('defeats');
    #draws = document.getElementById('draws');

    handle() {
        this.#refreshStatistics();
        this.#setImage();
        this.#setupUsername();
    }

    #refreshStatistics() {
        const statistics = account.statistics();

        this.#wins.innerHTML = statistics.get('wins');
        this.#defeats.innerHTML = statistics.get('defeats');
        this.#draws.innerHTML = statistics.get('draws');
    }

    #setImage() {
        const currentHeroImg = document.getElementById('currentHeroImg');
        const path = account.getHero().introImgPath;
        if (path) {
            currentHeroImg.src = path;
        }
    }

    #setupUsername() {
        this.#username.innerHTML = account.username();
    }
}