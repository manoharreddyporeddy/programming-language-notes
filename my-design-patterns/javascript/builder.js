
function throwIfMethodsNotOverridden(this1, methodsToOverride) {
    // console.log(this1.constructor.name);

    if (this1.constructor.name === 'Item') {
        throw new Error("Item is interface. Override members in derived class & use.");
    } else {
        // Object.getOwnPropertyNames(Object.getPrototypeOf(this1))f
        if (methodsToOverride) {
            for (let method of methodsToOverride) {

                if (
                    Reflect.ownKeys(
                        Reflect.getPrototypeOf(this1)
                    )
                        .indexOf(method)
                    === -1) {
                    // method not found
                    throw new Error(
                        "Override '" + method +
                        "' member in '" + this1.constructor.name + "' class");
                }
            }
        }
    }
}
class Item {
    constructor() {
        throwIfMethodsNotOverridden(this, methodsToOverride);
    }
}
class Burger extends Item {
    constructor() {
        super()
    }
}
class CoolDrink extends Item {
    constructor() {
        super();
    }
}

let methodsToOverride = [
    "getName",
    "getCost",
    "packing"
];

class VegBurger extends Burger {
    getName() { return "veg burger"; }
    getCost() { return 5 }
    packing() { console.log("paper wrap"); }
}
class NonVegBurger extends Burger {
    getName() { return "non burger"; }
    getCost() { return 6 }
    packing() { console.log("paper wrap"); }
}
class Coke extends CoolDrink {
    getName() { return "coke"; }
    getCost() { return 5 }
    packing() { console.log("bottle"); }
}
class Pepsi extends CoolDrink {
    getName() { return "pepsi"; }
    getCost() { return 6 }
    packing() { console.log("bottle"); }
}


let items = []
class Meal {
    addItem(item) {
        items.push(item);
        console.log("Item added. Meal has " + items.length + " items");
    }
    showItems() {
        console.log("Meal has: ");
        for (let i of items) {
            console.log("  " + i.getName());
        }
    }
    getCost(item) {
        let sum = 0.0;
        for (let i of items) {
            sum += i.getCost()
        }
        return sum;
    }
}

// let i = new Item();

// let b = new Burger();
// let c = new CoolDrink();

class MealBuilder {

    prepareVegMeal(options = {}) {
        let vegmeal = new Meal();
        vegmeal.addItem(new VegBurger());
        switch (options.drink) {
            case "pepsi":
                vegmeal.addItem(new Pepsi());
                break;
            case "coke":
                vegmeal.addItem(new Coke());
                break;
            default:
                break;
        }
        return vegmeal;
    }
}

let mealbuilder = new MealBuilder();
let vegmeal = mealbuilder.prepareVegMeal({ drink: "coke" });
vegmeal.showItems();
console.log("Meal cost: " + vegmeal.getCost());
