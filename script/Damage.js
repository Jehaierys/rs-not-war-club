class Damage {

    constructor(damage, isCritical) {
        if (isCritical) {
            this.damage = damage * 2;
            this.isCritical = true;
        } else {
            this.damage = damage;
            this.isCritical = false;
        }
    }

    damage;
    isCritical;
}