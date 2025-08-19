class Router {
    #header = document.getElementsByTagName('header').item(0);
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
        this.#display(nextPage);
        this.#handleHeroSection(nextPage);

        this.#currentPage = nextPage;
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
        return [PAGES.REGISTRATION_PAGE, PAGES.PVE_PAGE, PAGES.PVP_PAGE].includes(nextPage);
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

    #handleHeroSection(nextPage) {
        if (nextPage === PAGES.HERO_PAGE) {
            const currentHeroImg = document.getElementById('currentHeroImg');
            const path = account.getHero().introImgPath;
            if (path) {
                currentHeroImg.src = path;
            }
        }
    }
}