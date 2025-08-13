class Account {
    #username;
    #wins;
    #defeats;

    register(username) {
        this.#username = username;
        this.refreshFightStatistics();
    }

    refreshFightStatistics() {
        this.#defeats = 0;
        this.#wins = 0;
    }

    static upload() {
        let acc = localStorage.getItem('account');
        if (acc) {
            acc = JSON.parse(acc);

            account = new Account();

            account.#username = acc.username;
            account.#defeats = acc.defeats;
            account.#wins = acc.wins;
        } else {
            return null;
        }
        return account;
    }

    save() {
        localStorage.setItem('account', JSON.stringify(this));
    }

    toJSON() {
        return {
            username: this.#username,
            wins: this.#wins,
            defeats: this.#defeats
        };
    }
}