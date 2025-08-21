class ZoneInputValidator {
    #firstDefenceZone = document.getElementById('defence_diversion');
    #secondDefenceZone = document.getElementById('defence_offensive');

    #firstAttackZone = document.getElementById('attack_offensive');

    initialize() {
        this.#uploadZones();
        this.#uncheckZones();
        this.#initFirstZones();
    }

    #uploadZones() {
        const attackZones = Zones.getUserAttackZones();
        const defenceZones = Zones.getUserDefenceZones();

        if (attackZones.length !== 5 && defenceZones.length !== 5) {
            throw new Error('validator: attack zones ' + attackZones.length + ' and defence zones ' + defenceZones.length);
        } else {
            console.log('validator: zones are loaded');
        }
    }

    #uncheckZones() {
        Zones.getAllZones().forEach(zone => zone.checked = false);
    }

    setAttackZone(zone) {
        this.#firstAttackZone.checked = false;
        zone.checked = true;

        this.#firstAttackZone = zone;
    }

    setDefenceZone(zone) {
        if (zone === this.#firstDefenceZone || zone === this.#secondDefenceZone) {
            return;
        }
        this.#secondDefenceZone.checked = false;
        zone.checked = true;

        this.#secondDefenceZone = this.#firstDefenceZone;
        this.#firstDefenceZone = zone;
    }

    #initFirstZones() {
        this.#firstDefenceZone.checked = true;
        this.#secondDefenceZone.checked = true;
        this.#firstAttackZone.checked = true;
    }

    isInvalid() {
        const attackZonesChecked =
            Zones.getUserAttackZones()
                .filter(box => box.checked === true)
                .length;

        const defenceZonesChecked =
            Zones.getUserDefenceZones()
                .filter(box => box.checked === true)
                .length;

        return attackZonesChecked !== 1 || defenceZonesChecked !== 2;
    }
}