const Ninja = require('../Ninja/Ninja');

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría = 10; // Nuevo atributo exclusivo de Sensei
    }

    speakWisdom() {
        super.drinkSake(); // Llama al método drinkSake() de la clase Ninja
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

module.exports = Sensei;
