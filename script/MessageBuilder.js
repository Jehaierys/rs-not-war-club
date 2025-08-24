class MessageBuilder {
    #message = '';

    static builder() {
        return new MessageBuilder();
    }

    attacking(heroName) {
        this.#message += '<b class="terminal__emphasized">' + heroName + '</b>';
        return this;
    }

    attackFlow(successful, type) {
        this.#message += defaultMessageTemplate.template(successful, type);
        return this;
    }

    defending(heroName) {
        this.#message += '<b class="terminal__emphasized">' + heroName + '</b>';
        return this;
    }

    isCritical(isCritical) {
        if (isCritical) {
            this.#message += ', но врагу нанёсён большой урон';
        }
        return this;
    }

    damage(damage) {
        if (damage > 0) {
            this.#message += `, нанесено <b class="terminal__emphasized">${damage}</b> ед. урона`;
        } else {
            this.#message += ', неудача';
        }
        return this;
    }

    build() {
        return this.#message;
    }
}