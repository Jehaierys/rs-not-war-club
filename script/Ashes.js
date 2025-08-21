class Ashes {

    #body = document.getElementsByTagName('body').item(0);

    async launch() {
        this.#initialize();
        let grain;
        while (true) {
            grain = this.#generateGrain();
            this.#setDeletionTimeout(grain);
            this.#body.appendChild(grain);
            await sleep(150);
        }
    }

    #initialize() {
        for (let i = 0; i < 100; ++i) {
            const grain = this.#generateGrain();
            this.#setDeletionTimeout(grain);

            this.#body.appendChild(grain);
        }
    }

    #generateGrain() {
        return AshGenerator
            .generator()
            .size()
            .border()
            .colour()
            .position()
            .animation()
            .generate();
    }

    #setDeletionTimeout(grain) {
        setTimeout(() => {
            grain.remove();
        }, 60_000); // 30 seconds
    }
}

