class ComputerMoveImitator {
    static generateComputerAttackZones() {
        const  zone = Zones.getUserDefenceZones()[this.#randomIndex()]
        return Array.of(zone);
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