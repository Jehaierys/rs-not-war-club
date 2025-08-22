class Zones {
    static getUserAttackZones() {
        return Array.from(
            document
                .getElementsByClassName('pvp__zones computer')
                .item(0)
                .getElementsByClassName('pvp__input')
        );
    }

    static getCheckedUserAttackZones() {
        return this.getUserAttackZones().filter((zone) => zone.checked === true);
    }

    static getUserDefenceZones() {
        return Array.from(
            document
                .getElementsByClassName('pvp__zones user')
                .item(0)
                .getElementsByClassName('pvp__input')
        );
    }

    static getCheckedUserDefenceZones() {
        return this.getUserDefenceZones().filter((zone) => zone.checked === true);
    }

    static getAllZones() {
        return this.getUserAttackZones().concat(this.getUserDefenceZones());
    }
}