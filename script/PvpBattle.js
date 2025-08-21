class PvpBattle {

    #userHero;
    #computerHero;

    #userHp;
    #computerHp;

    #userHpScale;
    #computerHpScale;

    #zoneInputValidator;

    #pvpMoveButton = document.getElementById('pvp-move');

    constructor(zoneInputValidator) {
        this.#zoneInputValidator = zoneInputValidator;
    }

    async start() {
        this.#initialize();

        while (this.#bothAreAlive()) {
            await this.#waitForClick(this.#pvpMoveButton);
            while (this.#moveInvalid()) {
                alert('wrong input');
                await this.#waitForClick(this.#pvpMoveButton);
            }
            this.#doMove();
        }
        this.#finish();
    }

    #initialize() {
        zoneInputValidator.initialize();
        this.#setUpHeroes();
        this.#setUpHp();
        this.#uploadPhotos();

        console.log('pvp battle: ' + this.#userHero.name + ' against ' + this.#computerHero.name);
    }

    #setUpHeroes() {
        this.#userHero = account.getHero();
        this.#computerHero = this.#pickRandomHero();
    }

    #pickRandomHero() {
        let randomNumber = Math.floor(Math.random() * 100);
        let heroIndex = (randomNumber % HEROES.size).toString();
        while (HEROES.list()[heroIndex] === this.#userHero) {
            randomNumber = Math.floor(Math.random() * 100);
            heroIndex = (randomNumber % HEROES.size).toString()
        }
        return HEROES.list()[heroIndex];
    }

    #setUpHp() {
        this.#userHp = 10_000;
        this.#computerHp = 10_000;

        this.#userHpScale = document.getElementById('pvpUserHp');
        this.#computerHpScale = document.getElementById('pvpComputerHp');
    }

    #uploadPhotos() {
        const userPhoto = document.getElementById('user-character-img');
        userPhoto.src = this.#userHero.introImgPath;

        const computerPhoto = document.getElementById('computer-character-img');
        computerPhoto.src = this.#computerHero.introImgPath;
    }

    #bothAreAlive() {
        return this.#userHp > 0 && this.#computerHp > 0;
    }

    #waitForClick(button) {
        return new Promise(resolve => {
            button.addEventListener("click", resolve, { once: true });
        });
    }

    #moveInvalid() {
        return this.#zoneInputValidator.isInvalid();
    }

    #doMove() {
        const userAttackZones = Zones.getCheckedUserAttackZones();
        const userDefenceZones = Zones.getCheckedUserDefenceZones();

        const computerAttackZones = ComputerMoveImitator.generateComputerAttackZones();
        const computerDefenceZones = ComputerMoveImitator.generateComputerDefenceZones();

        if (!computerDefenceZones.includes(userAttackZones[0])) {
            // damage computer
            this.#computerHp -= 2000;
            this.#computerHpScale.innerHTML = this.#computerHp;

            const message = this.#userHero.name + ' наносит 2000 ед. урона ' + this.#computerHero.name;
            terminal.message(message);
        }

        if (!userDefenceZones.includes(computerAttackZones[0])) {
            // damage user
            this.#userHp -= 2000;
            this.#userHpScale.innerHTML = this.#userHp;

            const message = this.#computerHero.name + ' наносит 2000 ед урона ' + this.#userHero.name;
            terminal.message(message);
        }

        terminal.space();
    }

    #finish() {
        terminal.cleanUp();
        this.#processResults();
        router.route(PAGES.HERO_PAGE);
    }

    #processResults() {
        if (this.#userHp > 0) {
            account.incrementWins();
        } else if (this.#computerHp > 0) {
            account.incrementDefeats();
        } else {
            account.incrementDraws();
        }
        account.save();
    }
}