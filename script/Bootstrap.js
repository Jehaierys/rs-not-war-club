account = new Account();
router = new Router();
// hero = new Hero();

window.addEventListener('DOMContentLoaded', () => {
    try {
        account.upload();
    } catch (e) {
        console.log(e.toString());
    }
    router.welcome();
});