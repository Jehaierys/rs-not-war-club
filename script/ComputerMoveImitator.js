class ComputerMoveImitator {
    static generateComputerAttackZones() {
        return Zones.getUserDefenceZones()[this.#randomIndex()];
    }

    static generateComputerDefenceZones() {
        const zones = Zones.getUserAttackZones();

        const firstIndex = this.#randomIndex();
        let secondIndex = this.#randomIndex();

        while (firstIndex === secondIndex) {
            secondIndex = this.#randomIndex();
        }

        return Array.of(
            zones[firstIndex],
            zones[secondIndex]
        );
    }

    static #randomIndex() {
        return (Math.floor(Math.random() * 100) % 5).toString();
    }
}