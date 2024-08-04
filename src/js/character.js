export class Character {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    equals(other) {
        return other instanceof Character && other.name === this.name;
    }
}