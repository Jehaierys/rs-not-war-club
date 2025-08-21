class AshGenerator {
    static generator() {
        return new AshGenerator();
    }

    #grain = document.createElement('div');

    #minGrainHeight = 2;
    #minGrainWidth = 2;

    size() {
        const height = Math.floor(Math.random() * 100) % 5 + this.#minGrainHeight;
        const width = Math.floor(Math.random() * 100) % 5 + this.#minGrainWidth;

        this.#grain.style.height = `${height}px`;
        this.#grain.style.width = `${width}px`;

        return this;
    }

    colour() {
        this.#grain.style.backgroundColor = 'dimgray';
        return this;
    }

    position() {
        const top = Math.round(Math.random() * 100);
        const right = Math.round(Math.random() * 100);

        this.#grain.style.top = `${top}vh`;
        this.#grain.style.right = `${right}vw`;

        this.#grain.style.position = 'absolute';

        return this;
    }

    animation() {
        const fallDuration = Math.floor(Math.random() * 40) + 30;
        const drift = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 10);

        this.#grain.style.animation = `ashFall ${fallDuration}s linear forwards`;
        this.#grain.style.transform = `translateX(${drift}px)`;

        return this;
    }

    border() {
        // Немного свечения + размывание для эффекта жара
        this.#grain.style.filter = "blur(0.5px) drop-shadow(0 0 3px rgba(255,150,50,0.7))";
        this.#grain.style.borderRadius = '35%';
        return this;
    }

    generate() {
        return this.#grain;
    }
}