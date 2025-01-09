class Animal {
    constructor(color) {
        this.color = color;
    }
    PrintColor() {
        console.log(this.color);
    }
}

class Dog extends Animal {
    constructor(color, food) {
        super(color);
        this.food = food;
    }
    eating() {
        console.log("Eating:", this.food);
    }
    display() {
        this.PrintColor();
        this.eating();
    }
}

d = new Dog("Black", "Bread");
d.display();

