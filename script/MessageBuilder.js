class MessageBuilder {
    #messageDefinition = new Map();

    static builder() {
        return new MessageBuilder();
    }

    attacking(heroName) {
        const messagePart = '<b class="terminal__emphasized">' + heroName + '</b>';
        this.#messageDefinition.set('attackingPart', messagePart);

        return this;
    }

    attackFlow(successful, type) {
        this.#messageDefinition.set('attackFlowSuccessful', successful);

        const messagePart = defaultMessageTemplate.template(successful, type);
        this.#messageDefinition.set('attackFlowPart', messagePart);

        return this;
    }

    defending(heroName) {
        const messagePart= '<b class="terminal__emphasized">' + heroName + '</b>';
        this.#messageDefinition.set('defendingPart', messagePart);

        return this;
    }

    isCritical(isCritical) {
        let messagePart;

        if (isCritical && this.#messageDefinition.get('attackFlowSuccessful')) {
            messagePart = ', и это было потрясающе - ';
        } else if (isCritical) {
            messagePart = ', но это было слишком болезненно - ';
        } else {
            messagePart = ', ';
        }

        this.#messageDefinition.set('isCriticalPart', messagePart);
        return this;
    }

    damage(damage) {
        let messagePart;

        if (damage > 0) {
            messagePart = `нанесено <b class="terminal__emphasized">${damage}</b> ед. урона`;
        } else {
            messagePart = 'неудача';
        }

        this.#messageDefinition.set('damagePart', messagePart);
        return this;
    }

    build() {
        return this.#messageDefinition.get('attackingPart') +
            this.#messageDefinition.get('attackFlowPart') +
            this.#messageDefinition.get('defendingPart') +
            this.#messageDefinition.get('isCriticalPart') +
            this.#messageDefinition.get('damagePart');
    }
}