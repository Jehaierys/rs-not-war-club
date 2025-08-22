class MessageBuilder {
    #message = '';

    static builder() {
        return new MessageBuilder();
    }

    attacking(heroName) {
        this.#message += heroName;
        return this;
    }

    attackFlow(successful, type) {
        this.#message += defaultMessageTemplate.template(successful, type);
        return this;
    }

    defending(heroName) {
        this.#message += heroName;
        return this;
    }

    damage(damage) {
        if (damage > 0) {
            this.#message += `, нанесено ${damage} ед. урона`;
        } else {
            this.#message += ', неудача';
        }
        return this;
    }

    build() {
        return this.#message;
    }
}