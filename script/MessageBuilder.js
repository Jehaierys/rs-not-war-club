class MessageBuilder {
    #messageDefinition;

    constructor(messageDefinition) {
        this.#messageDefinition = messageDefinition;
    }

    static builder() {
        return new MessageBuilder(new Map());
    }

    attacking(heroName) {
        const messagePart = '<b class="terminal__emphasized">' + heroName + '</b>';
        this.#messageDefinition.set('attackingPart', messagePart);

        return this;
    }

    attackFlow(successful, type) {
        const messagePart = defaultMessageTemplate.template(successful, type);
        this.#messageDefinition.set('attackFlowPart', messagePart);

        this.#messageDefinition.set('attackFlowSuccessful', successful);

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
            messagePart = ', и это было <b class="terminal__emphasized">потрясающе</b> - ';
        } else if (isCritical) {
            messagePart = ', но это было <b class="terminal__emphasized">слишком</b> болезненно - ';
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