class DamageGenerator {

    static #averageDamage = 1500;

    static #isCritical() {
        return Math.random() > 0.7;
    }

    static #deviationCoefficient() {
        return Math.random() * 0.15 + 0.85;
    }

    static generate() {
        const damage = Math.round(this.#averageDamage * this.#deviationCoefficient());

        return new Damage(damage, this.#isCritical());
    }
}