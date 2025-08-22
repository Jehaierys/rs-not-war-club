class SoundAccompaniment {
    #themePaths = new Map();
    #player = new Audio();
    #volume = 0;

    initialize() {
        this.#themePaths.set(HEROES.IN, Array.of());
        this.#themePaths.set(HEROES.BEN_LADEN, Array.of('audio/ben-laden-theme-1.mp3', 'audio/ben-laden-theme-2.mp3'));
        this.#themePaths.set(HEROES.HITLER, Array.of('audio/hitler-theme.mp3'));
        this.#themePaths.set(HEROES.STALIN, Array.of('audio/stalin-theme.mp3'));

        this.#volume = 0.35;

        this.mainTheme();
    }

    mainTheme() {
        this.#player.pause();
        this.#player.remove();

        this.#player = new Audio('audio/main-theme.mp3');

        this.#player.play().then();
        this.#player.volume = this.#volume;
        this.#player.loop = false;
    }

    fightTheme(hero) {
        this.stop();

        const paths = this.#themePaths.get(hero);
        if (!paths) {
            return;
        }
        const path = paths[Math.floor(Math.random() * 100 % paths.length)];
        this.#player = new Audio(path);
        this.#player.volume = this.#volume;

        switch (hero) {
            case HEROES.STALIN:
                this.#player.volume = 1;
                break;
            case HEROES.HITLER:
                this.#player.currentTime = 56.2;
                this.#player.volume = 0.85;
                break;
            default:
                this.#player.volume = this.#volume;
        }

        this.#player.loop = false;

        this.#player.play().catch(err => {
            console.warn("Не удалось воспроизвести аудио:", err);
        });
    }

    stop() {
        this.#player.pause();
    }
}