class Pokemon {
    constructor(name, type1, type2, attack) {
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.attack = attack;
    }
    Attack(i) {
        if (i > 3) {
            console.log(`${this.name} can only learn 4 attacks, please select a number between 0 and 3.`)
        } else {
            console.log(`${this.name} used ${this.attack[i]}`);
        }
    }
}

const Aron = new Pokemon("Aron", "steel", "rock", ["metal claw", "headbutt", "iron defense", "rock slide"]);

const Heracross = new Pokemon('Heracross', 'bug', 'fighting', ['Megahorn', 'Close Combat', 'Earthquake', 'Double Team']);

Aron.Attack(1);
Heracross.Attack(3);