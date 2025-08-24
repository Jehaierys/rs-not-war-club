settingPageHandler = new SettingPageHandler();
soundAccompaniment = new SoundAccompaniment();
terminal = new Terminal();

account = new Account();
router = new Router();
zoneInputValidator = new ZoneInputValidator();
zoneInputObserver = new ZoneInputObserver(zoneInputValidator);
heroPageHandler = new HeroPageHandler();
ashes = new Ashes();
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