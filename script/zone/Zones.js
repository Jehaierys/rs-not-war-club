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

    static types() {
        return {
            OFFENSIVE: 'offensive',
            DIVERSION: 'diversion',
            PROPAGANDA: 'propaganda',
            EXORCISM: 'exorcism',
            NUCLEAR: 'nuclear'
        };
    }

    static extractType(inputElement) {
        const id = inputElement.id;
        return Object.values(this.types()).filter(value => id.includes(value))[0];
    }
}