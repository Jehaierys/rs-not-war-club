class Account {
    #username = '';
    #wins;
    #defeats;
    #draws;
    #hero = HEROES.STALIN;
    #registered = false;

    register() {
        this.#username = document.getElementById('username').value;
        this.refreshFightStatistics();
        this.#registered = true;
        this.save();
        console.log('New user registered with username "' + this.#username + '"');
        router.route(PAGES.HOME_PAGE);
    }

    refreshFightStatistics() {
        this.#defeats = 0;
        this.#wins = 0;
        this.#draws = 0;
    }

    save() {
        localStorage.setItem('account', JSON.stringify(this));
    }

    toJSON() {
        return {
            username: this.#username,
            wins: this.#wins,
            defeats: this.#defeats,
            hero: this.#hero,
            draws: this.#draws
        };
    }

    hero(hero) {
        this.#hero = hero;
        console.log('account: hero updated to ' + this.#hero.name);
        router.route(PAGES.HERO_PAGE);
    }

    getHero() {
        return this.#hero;
    }

    checkRegistered() {
        return this.#registered;
    }

    upload() {
        let acc = localStorage.getItem('account');
        if (!acc) {
            throw new Error('Local storage empty');
        }
        acc = JSON.parse(acc);
        this.#translate(acc.username, acc.wins, acc.defeats, acc.draws,  acc.hero);
    }

    #translate(username, wins, defeats, draws, hero) {
        this.#username = username;
        this.#wins = wins;
        this.#defeats = defeats;
        this.#draws = draws;
        this.#registered = true;

        if (hero) {
            this.#hero = hero;
        }
    }

    incrementDefeats() {
        this.#defeats += 1;
    }

    incrementWins() {
        this.#wins += 1;
    }

    incrementDraws() {
        this.#draws += 1;
    }

    statistics() {
        const map = new Map();

        map.set('wins', this.#wins);
        map.set('defeats', this.#defeats);
        map.set('draws', this.#draws);

        return map;
    }
}