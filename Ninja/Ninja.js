class Ninja {
    constructor(nombre) {
        this.nombre = nombre; 
        this.salud = 0;  
        this.velocidad = 3;    
        this.fuerza = 3; 
    }

    // Esto debería registrar el nombre de Ninja en la consola
    sayName() {
        console.log(`Mi nombre es ${this.nombre}!`);
    }

    // Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza} `);
    }

    // Esto debería agregar +10 de salud al Ninja
    drinkSake() {
        this.salud += 10;
    }
}

module.exports = Ninja;

