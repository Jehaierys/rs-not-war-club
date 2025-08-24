account = new Account();
router = new Router();
zoneInputValidator = new ZoneInputValidator();
zoneInputObserver = new ZoneInputObserver(zoneInputValidator);
terminal = new Terminal();
heroPageHandler = new HeroPageHandler();
ashes = new Ashes();
soundAccompaniment = new SoundAccompaniment();
defaultMessageTemplate = new DefaultMessageTemplates();

window.addEventListener('DOMContentLoaded', () => {
    defaultMessageTemplate.initialize();
    soundAccompaniment.initialize();

    pvpBattle = new PvpBattle(zoneInputValidator);
    try {
        account.upload();
    } catch (e) {
        console.log(e.toString());
    }
    router.welcome();
    ashes.launch().then();
    soundAccompaniment.mainTheme();
});