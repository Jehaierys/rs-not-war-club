class Router {

    #header = document.getElementsByTagName('header').item(0);
    #terminal = document.getElementById('terminal');
    #currentPage;

    welcome() {
        if (account.checkRegistered()) {
            console.log('router: welcome to home page');
            this.#hide(PAGES.REGISTRATION_PAGE);
            this.route(PAGES.HOME_PAGE);
        } else {
            console.log('router: welcome to registration page');
            this.route(PAGES.REGISTRATION_PAGE);
        }
    }

    route(nextPage) {
        console.log("router: go to " + nextPage.classList.item(0));

        this.#handleHeader(nextPage);
        this.#handleCurrentPage();
        this.#handleNextPage(nextPage);
        this.#display(nextPage);

        this.#currentPage = nextPage;

        this.#handleTerminal();
    }

    #handleTerminal() {
        if (this.#currentPage !== PAGES.PVP_PAGE) {
            this.#hide(this.#terminal);
        } else {
            this.#display(this.#terminal);
        }
    }

    #handleHeader(nextPage) {
        if (this.#shouldHideHeader(nextPage)) {
            console.log('handler: hide header');
            this.#hide(this.#header);
        } else {
            this.#display(this.#header);
            this.#refreshHeader(nextPage);
        }
    }

    #shouldHideHeader(nextPage) {
        return [PAGES.REGISTRATION_PAGE].includes(nextPage);
    }

    #handleCurrentPage() {
        if (this.#currentPage) {
            this.#hide(this.#currentPage);
        }
    }

    #hide(page) {
        page.style.display = 'none';
    }

    #display(page) {
        page.style.display = 'flex';
    }

    #refreshHeader(nextPage) {
        const h1 = document.getElementById('currentPage');
        switch (nextPage) {
            case PAGES.HOME_PAGE:
                h1.innerHTML = 'Home';
                break;
            case PAGES.HERO_PAGE:
                h1.innerHTML = 'Hero';
                break;
            case PAGES.SETTING_PAGE:
                h1.innerHTML = 'Setting';
                break;
            case PAGES.PICK_PAGE:
                h1.innerHTML = 'Pick';
                break;
            case PAGES.PVP_PAGE:
                h1.innerHTML = 'Holy War';
                break;
            case PAGES.PVE_PAGE:
                h1.innerHTML = 'Civil War';
        }
    }

    #handleNextPage(nextPage) {
        switch (nextPage) {
            case PAGES.HERO_PAGE:
                heroPageHandler.handle();
                break;
            case PAGES.PVP_PAGE:
                pvpBattle.start();
                break;
        }
    }
}