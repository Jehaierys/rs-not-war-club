
class Welcome {
    meet() {
        if (this.#accountExists()) {
            if (this.#isRegistration()) {
                this.#goHome();
            }
        } else {
            if (!this.#isRegistration()) {
                this.#goRegistration();
            }
        }
    }

    #accountExists() {
        return window.account != null;
    }

    #isRegistration() {
        return window.location.pathname.endsWith('registration.html');
    }

    #goHome() {
        if (!window.location.pathname.endsWith('home.html')) {
            window.location.href = 'home.html';
        }
    }

    #goRegistration() {
        if (!window.location.pathname.endsWith('registration.html')) {
            window.location.href = 'registration.html';
        }
    }

    registerAccount() {
        const username = document.getElementById('username').value;
        window.account = new Account();
        window.account.register(username);
        window.account.save();
        alert('shalom')
        window.location.href = 'home.html';
    }
}