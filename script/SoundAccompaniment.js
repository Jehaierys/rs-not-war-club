class SoundAccompaniment {
    #themePaths = new Map();
    #player = new Audio();

    initialize() {
        this.#themePaths.set(HEROES.IN, Array.of());
        this.#themePaths.set(HEROES.BEN_LADEN, Array.of('audio/ben-laden-theme-1.mp3', 'audio/ben-laden-theme-2.mp3'));
        this.#themePaths.set(HEROES.HITLER, Array.of('audio/hitler-theme.mp3'));
        this.#themePaths.set(HEROES.STALIN, Array.of('audio/stalin-theme.mp3'));

        this.main();
    }

    main() {
        this.#player.pause();
        this.#player.remove();

        this.#player = new Audio('audio/main-theme.mp3');

        this.#player.play().then();
        this.#player.volume = 0.5;
        this.#player.loop = true;
    }

    fightTheme(hero) {
        const paths = this.#themePaths.get(hero);
        const path = paths[Math.floor(Math.random() * paths.length)];
        this.#player = new Audio(path);

        this.#player.play().then();
        this.#player.volume = 0.5;
        this.#player.loop = true;
    }
}