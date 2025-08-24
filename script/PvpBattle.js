class PvpBattle {

    #userHero;
    #computerHero;

    #userHp;
    #computerHp;

    #userHpScale = document.getElementById('pvpUserHp');
    #computerHpScale = document.getElementById('pvpComputerHp');

    #zoneInputValidator;

    #pvpMoveButton = document.getElementById('pvp-move');

    #activeFightId;

    constructor(zoneInputValidator) {
        this.#zoneInputValidator = zoneInputValidator;
    }

    async start() {
        this.#initialize();

        while (this.#bothAreAlive()) {
            await this.#waitForClick(this.#pvpMoveButton);
            while (this.#moveInvalid()) {
                alert('pick one attack zone and two defence zones');
                await this.#waitForClick(this.#pvpMoveButton);
            }
            this.#doMove();
        }
        this.#finish();
    }

    #initialize() {
        zoneInputValidator.initialize();
        terminal.cleanUp();

        this.#assignUuid();
        this.#setUpHeroes();
        this.#initializeHp();
        this.#uploadPhotos();

        soundAccompaniment.fightTheme(this.#userHero);

        console.log('pvp battle: ' + this.#userHero.name + ' against ' + this.#computerHero.name);
    }

    #assignUuid() {
        this.#activeFightId = crypto.randomUUID();
    }

    #setUpHeroes() {
        this.#userHero = account.getHero();
        this.#computerHero = this.#pickRandomHero();
    }

    #pickRandomHero() {
        let randomNumber = Math.floor(Math.random() * 100);
        let heroIndex = (randomNumber % HEROES.size).toString();
        while (HEROES.list()[heroIndex].name === this.#userHero.name) {
            randomNumber = Math.floor(Math.random() * 100);
            heroIndex = (randomNumber % HEROES.size).toString()
        }
        return HEROES.list()[heroIndex];
    }

    #initializeHp() {
        this.#userHp = this.#userHero.maxHp;
        this.#computerHp = this.#computerHero.maxHp;

        this.#userHpScale.innerHTML = this.#userHp;
        this.#computerHpScale.innerHTML = this.#computerHp;

        this.#userHpScale.style.setProperty('--user-hp-percent', '100%');
        this.#computerHpScale.style.setProperty('--computer-hp-percent', '100%');
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

        const userDamage = DamageGenerator.generate();
        const computerDamage = DamageGenerator.generate();

        if (!computerDefenceZones.includes(userAttackZones[0])) {
            // damage computer
            // const damage = DamageGenerator.generate();

            this.#computerHp -= userDamage.damage;
            this.#computerHpScale.innerHTML = this.#computerHp;
            this.#computerHpScale.style
                .setProperty('--computer-hp-percent' , `${Math.round(this.#computerHp / this.#computerHero.maxHp * 100)}%`);

            const message = MessageBuilder
                .builder()
                .attacking(this.#userHero.name)
                .attackFlow(true, Zones.extractType(userAttackZones[0]))
                .defending(this.#computerHero.name)
                .damage(userDamage)
                .build()

            terminal.message(message);
        } else {
            if (userDamage.isCritical) {

                userDamage.damage = userDamage.damage / 2;

                this.#computerHp -= userDamage.damage;
                this.#computerHpScale.innerHTML = this.#computerHp;
                this.#computerHpScale.style
                    .setProperty('--computer-hp-percent' , `${Math.round(this.#computerHp / this.#computerHero.maxHp * 100)}%`);

                const message = MessageBuilder.builder()
                    .attacking(this.#userHero.name)
                    .attackFlow(false, Zones.extractType(userAttackZones[0]))
                    .defending(this.#computerHero.name)
                    .isCritical(userDamage.isCritical)
                    .damage(userDamage.damage)
                    .build();

                terminal.message(message);

            } else {
                const message = MessageBuilder.builder()
                    .attacking(this.#userHero.name)
                    .attackFlow(false, Zones.extractType(userAttackZones[0]))
                    .defending(this.#computerHero.name)
                    .damage(0)
                    .build();

                terminal.message(message);
            }
        }

        if (!userDefenceZones.includes(computerAttackZones[0])) {
            // damage user
            // const damage = Damage.generate();

            this.#userHp -= computerDamage.damage;
            this.#userHpScale.innerHTML = this.#userHp;
            this.#userHpScale.style
                .setProperty('--user-hp-percent', `${Math.round(this.#userHp / this.#userHero.maxHp * 100)}%`);

            const message = MessageBuilder
                .builder()
                .attacking(this.#computerHero.name)
                .attackFlow(true, Zones.extractType(computerAttackZones[0]))
                .defending(this.#userHero.name)
                .damage(computerDamage.damage)
                .build()

            terminal.message(message);
        } else {
            if (computerDamage.isCritical) {

                computerDamage.damage = computerDamage.damage / 2;

                this.#userHp -= computerDamage.damage;
                this.#userHpScale.innerHTML = this.#userHp;
                this.#userHpScale.style
                    .setProperty('--user-hp-percent', `${Math.round(this.#userHp / this.#userHero.maxHp * 100)}%`);

                const message = MessageBuilder
                    .builder()
                    .attacking(this.#computerHero.name)
                    .attackFlow(false, Zones.extractType(computerAttackZones[0]))
                    .defending(this.#userHero.name)
                    .isCritical(computerDamage.isCritical)
                    .damage(computerDamage.damage)
                    .build();

                terminal.message(message);

            } else {
                const message = MessageBuilder
                    .builder()
                    .attacking(this.#computerHero.name)
                    .attackFlow(false, Zones.extractType(computerAttackZones[0]))
                    .defending(this.#userHero.name)
                    .damage(0)
                    .build()

                terminal.message(message);
            }
        }
        terminal.space();
    }

    #finish() {
        soundAccompaniment.stop();
        terminal.cleanUp();
        this.#processResults();
        router.route(PAGES.HERO_PAGE);
    }

    #processResults() {
        if (this.#userHp > 0) {
            alert('Вы победили');
            account.incrementWins();
        } else if (this.#computerHp > 0) {
            alert('вы проиграли')
            account.incrementDefeats();
        } else {
            alert('Победила дружба бензопила')
            account.incrementDraws();
        }
        account.save();
    }

    isActive() {
        return this.#userHp > 0 && this.#computerHp > 0;
    }
}