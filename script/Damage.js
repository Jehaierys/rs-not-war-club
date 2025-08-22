class Damage {

    static #averageDamage = 1500;

    static generate() {
        let damage = Math.round(this.#averageDamage * this.#deviationCoefficient());
        if (this.#isCritical()) {
            return damage * 2;
        }
        return damage;
    }

    static #isCritical() {
        return Math.random() > 0.7;
    }

    static #deviationCoefficient() {
        return Math.random() * 0.15 + 0.85;
    }
}