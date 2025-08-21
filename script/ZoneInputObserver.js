class ZoneInputObserver {

    #zoneInputValidator;

    constructor(zoneInputValidator) {
        this.#zoneInputValidator = zoneInputValidator;
    }

    setAttackZone(zoneId) {
        const zone = document.getElementById(zoneId);

        console.log('Zone Input Observer: set attack zone to ' + zoneId);
        this.#zoneInputValidator.setAttackZone(zone);
    }

    setDefenceZone(zoneId) {
        const zone = document.getElementById(zoneId);

        console.log('Zone Input Observer: set defence zone to ' + zoneId);
        this.#zoneInputValidator.setDefenceZone(zone);
    }
}