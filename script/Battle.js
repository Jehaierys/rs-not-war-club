class Battle {
    userHeroName;
    computerHeroName;

    userHp;
    computerHp;

    constructor(userHeroName, computerHeroName, userHp, computerHp) {
        this.userHeroName = userHeroName;
        this.computerHeroName = computerHeroName;

        this.userHp = userHp;
        this.computerHp = computerHp;

    }

    save() {
        const data = {
            userHeroName: this.userHeroName,
            computerHeroName: this.computerHeroName,
            userHp: this.userHp,
            computerHp: this.computerHp
        };
        localStorage.setItem('uncompletedBattle', JSON.stringify(data));
    }

    static load() {
        const fightData = localStorage.getItem('uncompletedBattle');
        if (!fightData) return null;

        try {
            const parsed = JSON.parse(fightData);
            return new Battle(
                parsed.userHeroName,
                parsed.computerHeroName,
                parsed.userHp,
                parsed.computerHp
            );
        } catch (e) {
            console.error("Error occurred parsing the fight ", e);
            return null;
        }
    }
}
