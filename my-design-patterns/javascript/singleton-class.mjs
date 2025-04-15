class SingleObject {
}

let instance;

class Singleton {
    static getInstance() {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
}

export default Singleton;
