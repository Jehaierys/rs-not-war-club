account = new Account();
router = new Router();
zoneInputValidator = new ZoneInputValidator();
zoneInputObserver = new ZoneInputObserver(zoneInputValidator);
pvpBattle = new PvpBattle(zoneInputValidator);
terminal = new Terminal();
heroPageHandler = new HeroPageHandler();
ashes = new Ashes();
soundAccompaniment = new SoundAccompaniment();

window.addEventListener('DOMContentLoaded', () => {
    try {
        account.upload();
    } catch (e) {
        console.log(e.toString());
    }
    router.welcome();
    ashes.launch().then();
    soundAccompaniment.mainTheme();
});