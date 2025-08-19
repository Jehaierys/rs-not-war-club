class Account {
    #username = '';
    #wins;
    #defeats;
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
        this.#translate(acc.username, acc.wins, acc.defeats, acc.hero);
    }

    #translate(username, wins, defeats, hero) {
        this.#username = username;
        this.#wins = wins;
        this.#defeats = defeats;
        this.#registered = true;

        if (hero) {
            this.#hero = hero;
        }
    }
}