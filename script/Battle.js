class Battle {
    userHeroName;
    computerHeroName;

    userHp;
    computerHp;

    terminalContent;

    constructor(userHeroName, computerHeroName, userHp, computerHp, terminalContent) {
        this.userHeroName = userHeroName;
        this.computerHeroName = computerHeroName;

        this.userHp = userHp;
        this.computerHp = computerHp;

        this.terminalContent = terminalContent;
    }

    save() {
        const data = {
            userHeroName: this.userHeroName,
            computerHeroName: this.computerHeroName,
            userHp: this.userHp,
            computerHp: this.computerHp,
            terminalContent: this.terminalContent
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
                parsed.computerHp,
                parsed.terminalContent
            );
        } catch (e) {
            console.error("Error occurred parsing the fight ", e);
            return null;
        }
    }
}
