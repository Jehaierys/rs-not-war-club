class Terminal {
    #terminal = document.getElementById('terminal');

    message(message) {
        const messageHolder = document.createElement('div');
        messageHolder.classList.add('terminal__message-holder');
        messageHolder.innerHTML = message;
        this.#terminal.appendChild(messageHolder);

        this.#terminal.scrollTo({
            top: this.#terminal.scrollHeight,
            behavior: "smooth"
        });
    }

    space() {
        const space = document.createElement('div');
        space.classList.add('terminal__space');
        space.innerHTML = '';
        this.#terminal.appendChild(space);
    }

    cleanUp() {
        this.#terminal.innerHTML = '';
    }
}