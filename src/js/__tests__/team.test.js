import { Character } from "../character";
import { Team } from "../team";

describe('Team class', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Knight');
        character2 = new Character('Mage');
        character3 = new Character('Archer');
    });

    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

    test('should throw an error when adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Этот персонаж уже добавлен в команду.');
    });

    test('should add multiple characters with addAll', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });

    test('should not throw an error when adding duplicates with addAll', () => {
        team.add(character1);
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });

    test('should convert Set to array', () => {
        team.add(character1);
        team.add(character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});