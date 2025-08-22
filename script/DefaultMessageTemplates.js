class DefaultMessageTemplates {
    #templates = new Map();

    initialize() {
        const successfulAttack = new Map();

        successfulAttack.set(Zones.types().OFFENSIVE, ' наступает на ')
        successfulAttack.set(Zones.types().DIVERSION, ' совершает успешную диверсию на территории ');
        successfulAttack.set(Zones.types().PROPAGANDA, ' устраивает смуту на территории ');
        successfulAttack.set(Zones.types().EXORCISM, ' наводит порчу на ');
        successfulAttack.set(Zones.types().NUCLEAR, ' сбрасывает бомбу на ');

        const unsuccessfulAttack = new Map();

        unsuccessfulAttack.set(Zones.types().OFFENSIVE, ' терпит поражение в сражении с ');
        unsuccessfulAttack.set(Zones.types().DIVERSION, ' проигрывает на кгбшном фронте ');
        unsuccessfulAttack.set(Zones.types().PROPAGANDA, ' не сумел внедрить тлетворные идеи народу ');
        unsuccessfulAttack.set(Zones.types().EXORCISM, ' промахивается заклинанием в ');
        unsuccessfulAttack.set(Zones.types().NUCLEAR, ' забывает ядерные коды в войне с ');

        this.#templates.set(true, successfulAttack);
        this.#templates.set(false, unsuccessfulAttack);
    }

    template(successful, type) {
        return this.#templates.get(successful).get(type);
    }
}
